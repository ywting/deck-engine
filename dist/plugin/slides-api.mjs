// src/plugin/slides-api.ts
import path from "path";
import { readFileSync, renameSync, writeFileSync } from "node:fs";
var SLIDES_JSON_FILENAME = "slides.json";
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 2e6) reject(new Error("Payload too large"));
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(raw || "null"));
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}
function sameShape(existing, incoming) {
  if (incoming === null) return true;
  if (Array.isArray(existing) !== Array.isArray(incoming)) return false;
  if (typeof existing !== typeof incoming) return false;
  if (Array.isArray(existing) && Array.isArray(incoming)) {
    if (existing.length && incoming.length && typeof existing[0] !== typeof incoming[0]) {
      return typeof incoming[0] === "object" || typeof existing[0] === "object";
    }
    return true;
  }
  if (typeof incoming === "object" && typeof existing === "object") {
    const old = existing;
    const next = incoming;
    return Object.keys(next).every((k) => !(k in old) || sameShape(old[k], next[k]));
  }
  return true;
}
function slidesApiPlugin(options = {}) {
  const target = options.dataPath ?? path.resolve("src/data/slides.json");
  return {
    name: "deck-engine-slides-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (!url.startsWith("/api/slides")) return next();
        const method = req.method ?? "GET";
        const send = (code, body) => {
          res.statusCode = code;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(body));
        };
        try {
          const deck = JSON.parse(readFileSync(target, "utf-8"));
          if (method === "GET" && url === "/api/slides") {
            res.setHeader("Cache-Control", "no-store");
            return send(200, deck);
          }
          if (method === "PUT" && url === "/api/slides") {
            const body = await readJsonBody(req);
            if (!Array.isArray(body.slides) || !Array.isArray(body.caseStudies)) {
              return send(400, { ok: false, error: "Body needs caseStudies and slides arrays" });
            }
            const payload = { caseStudies: body.caseStudies, slides: body.slides };
            writeFileSync(target + ".tmp", JSON.stringify(payload, null, 2) + "\n");
            renameSync(target + ".tmp", target);
            return send(200, { ok: true });
          }
          const slideMatch = url.match(/^\/api\/slides\/([^/]+)$/);
          if (method === "PUT" && slideMatch) {
            const id = decodeURIComponent(slideMatch[1]);
            const slide = deck.slides.find((s) => s.id === id);
            if (!slide) return send(404, { ok: false, error: `Unknown slide id: ${id}` });
            const patch = await readJsonBody(req);
            if (!patch || typeof patch !== "object" || Array.isArray(patch)) {
              return send(400, { ok: false, error: "Body must be a JSON object" });
            }
            for (const locked of ["id", "slideNumber", "globalIndex", "caseStudyId"]) delete patch[locked];
            for (const [key, value] of Object.entries(patch)) {
              if (key in slide && !sameShape(slide[key], value)) {
                return send(400, { ok: false, error: `Field ${key}: type mismatch` });
              }
            }
            Object.assign(slide, patch);
            writeFileSync(target + ".tmp", JSON.stringify(deck, null, 2) + "\n");
            renameSync(target + ".tmp", target);
            return send(200, { ok: true, slide });
          }
          return send(404, { ok: false, error: "Not found" });
        } catch (err) {
          const message = err.message;
          const code = message.includes("Body") || message.includes("JSON") ? 400 : 500;
          return send(code, { ok: false, error: message });
        }
      });
    }
  };
}
export {
  SLIDES_JSON_FILENAME,
  sameShape,
  slidesApiPlugin
};
