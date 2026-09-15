import path from 'path';
import { readFileSync, renameSync, writeFileSync } from 'node:fs';

// Structural type only — avoids importing the vite copy bundled inside this
// package, which would clash with the app's own vite types.
export type Plugin = {
  name: string;
  configureServer?: (server: {
    middlewares: {
      use: (fn: (req: import('node:http').IncomingMessage, res: import('node:http').ServerResponse, next: () => void) => void) => void;
    };
  }) => void;
};

export const SLIDES_JSON_FILENAME = 'slides.json';

// Reads the raw request body and parses it as JSON. Rejects invalid bodies.
function readJsonBody(req: import('node:http').IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 2_000_000) reject(new Error('Payload too large'));
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(raw || 'null'));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });
    req.on('error', reject);
  });
}

// "Same-type-or-absent" guard: every provided key must match the existing
// value's type in the stored deck. Prevents silently corrupting the file.
export function sameShape(existing: unknown, incoming: unknown): boolean {
  if (incoming === null) return true;
  if (Array.isArray(existing) !== Array.isArray(incoming)) return false;
  if (typeof existing !== typeof incoming) return false;
  if (Array.isArray(existing) && Array.isArray(incoming)) {
    if (existing.length && incoming.length && typeof existing[0] !== typeof incoming[0]) {
      return typeof incoming[0] === 'object' || typeof existing[0] === 'object';
    }
    return true;
  }
  if (typeof incoming === 'object' && typeof existing === 'object') {
    const old = existing as Record<string, unknown>;
    const next = incoming as Record<string, unknown>;
    return Object.keys(next).every((k) => !(k in old) || sameShape(old[k], next[k]));
  }
  return true;
}

export interface SlidesApiOptions {
  /** Absolute or repo-relative path to the slides.json file. Defaults to src/data/slides.json. */
  dataPath?: string;
}

// Slides editing API, mounted in the consumer's vite dev server:
//   GET  /api/slides       -> full deck JSON (no-store)
//   PUT  /api/slides       -> whole-document replace
//   PUT  /api/slides/:id   -> merge partial slide payload by id
// Writes are atomic: write to .tmp, then rename over the target.
export function slidesApiPlugin(options: SlidesApiOptions = {}): Plugin {
  const target = options.dataPath ?? path.resolve('src/data/slides.json');
  return {
    name: 'deck-engine-slides-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next: () => void) => {
        const url = req.url?.split('?')[0] ?? '';
        if (!url.startsWith('/api/slides')) return next();
        const method = req.method ?? 'GET';

        const send = (code: number, body: unknown) => {
          res.statusCode = code;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(body));
        };

        try {
          const deck = JSON.parse(readFileSync(target, 'utf-8')) as {
            caseStudies: unknown[];
            slides: Record<string, unknown>[];
          };

          if (method === 'GET' && url === '/api/slides') {
            res.setHeader('Cache-Control', 'no-store');
            return send(200, deck);
          }

          if (method === 'PUT' && url === '/api/slides') {
            const body = (await readJsonBody(req)) as {
              caseStudies?: unknown[];
              slides?: Record<string, unknown>[];
            };
            if (!Array.isArray(body.slides) || !Array.isArray(body.caseStudies)) {
              return send(400, { ok: false, error: 'Body needs caseStudies and slides arrays' });
            }
            const payload = { caseStudies: body.caseStudies, slides: body.slides };
            writeFileSync(target + '.tmp', JSON.stringify(payload, null, 2) + '\n');
            renameSync(target + '.tmp', target);
            return send(200, { ok: true });
          }

          const slideMatch = url.match(/^\/api\/slides\/([^/]+)$/);
          if (method === 'PUT' && slideMatch) {
            const id = decodeURIComponent(slideMatch[1]);
            const slide = deck.slides.find((s) => s.id === id);
            if (!slide) return send(404, { ok: false, error: `Unknown slide id: ${id}` });
            const patch = (await readJsonBody(req)) as Record<string, unknown>;
            if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
              return send(400, { ok: false, error: 'Body must be a JSON object' });
            }
            for (const locked of ['id', 'slideNumber', 'globalIndex', 'caseStudyId']) delete patch[locked];
            for (const [key, value] of Object.entries(patch)) {
              if (key in slide && !sameShape(slide[key], value)) {
                return send(400, { ok: false, error: `Field ${key}: type mismatch` });
              }
            }
            Object.assign(slide, patch);
            writeFileSync(target + '.tmp', JSON.stringify(deck, null, 2) + '\n');
            renameSync(target + '.tmp', target);
            return send(200, { ok: true, slide });
          }

          return send(404, { ok: false, error: 'Not found' });
        } catch (err) {
          const message = (err as Error).message;
          const code = message.includes('Body') || message.includes('JSON') ? 400 : 500;
          return send(code, { ok: false, error: message });
        }
      });
    },
  };
}
