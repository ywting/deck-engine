import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import type { SlideContent } from '../../types';

interface EditApi {
  editing: boolean;
  /** Commits an inline edit. Path syntax: "headline", "metadata.role", "bullets[0].items[1].desc". */
  commit: (path: string, value: unknown) => void;
  status: { kind: 'idle' | 'saving' | 'saved' | 'error'; at?: string };
}

export const EditContext = createContext<EditApi>({
  editing: false,
  commit: () => {},
  status: { kind: 'idle' },
});

export const useEdit = () => useContext(EditContext);

export function useEditing(): boolean {
  return useContext(EditContext).editing;
}

/* ---------- Path helpers ---------- */

// Splits "bullets[0].items[1].desc" into ["bullets", 0, "items", 1, "desc"].
function tokenize(path: string): (string | number)[] {
  return path
    .split('.')
    .flatMap((segment) => {
      const parts: (string | number)[] = [];
      const base = segment.replace(/\[(\d+)\]/g, '');
      if (base) parts.push(base);
      for (const m of segment.matchAll(/\[(\d+)\]/g)) parts.push(Number(m[1]));
      return parts;
    });
}

// Deep-clones source, walks the token list, and sets (or deletes when the
// incoming value is an empty/absent string) the leaf. Array indices and
// object keys both work. Returns the mutated clone plus the first token so
// callers can extract the top-level field for a shallow-merge patch.
export function setByPath(
  source: unknown,
  path: string,
  value: unknown
): { root: unknown; topKey: string } {
  const root = structuredClone(source);
  const tokens = tokenize(path);
  if (tokens.length === 0) throw new Error(`Invalid edit path: ${path}`);
  let node: unknown = root;
  for (let i = 0; i < tokens.length - 1; i++) {
    const key = tokens[i];
    const host = node as Record<string | number, unknown>;
    // Missing intermediates grow into containers; the shape follows the next
    // token (numeric index → array, otherwise object).
    if (host[key] === undefined || host[key] === null) {
      host[key] = typeof tokens[i + 2] === 'number' ? [] : {};
    }
    node = host[key];
    if (typeof node !== 'object' || node === null) throw new Error(`Bad edit path: ${path}`);
  }
  const leaf = tokens[tokens.length - 1];
  const host = node as Record<string | number, unknown>;
  if (typeof leaf === 'number' && !Array.isArray(host)) throw new Error(`Bad edit path: ${path}`);
  if (typeof leaf !== 'number' && (value === '' || value === null || value === undefined)) {
    delete host[leaf as string];
  } else {
    host[leaf] = value;
  }
  return { root, topKey: String(tokens[0]) };
}

/* ---------- Provider ---------- */

interface EditProviderProps {
  editing: boolean;
  slide: SlideContent | null;
  saveSlide: (id: string, patch: Partial<SlideContent>) => Promise<boolean>;
  children: React.ReactNode;
}

// Buffers inline commits and flushes derived top-level field patches after a
// short debounce, mirroring the EditDrawer's 400ms auto-save cadence.
export const EditProvider: React.FC<EditProviderProps> = ({ editing, slide, saveSlide, children }) => {
  const [status, setStatus] = useState<EditApi['status']>({ kind: 'idle' });
  const pending = useRef<Map<string, unknown>>(new Map());
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideRef = useRef(slide);
  slideRef.current = slide;

  const flush = useCallback(async () => {
    const current = slideRef.current;
    if (!current) return;
    const buffer = pending.current;
    if (buffer.size === 0) return;

    // Replay every buffered path against a clone of the slide, then extract
    // the affected top-level fields into one shallow-merge patch.
    const clone = structuredClone(current) as unknown as Record<string, unknown>;
    const topKeys = new Set<string>();
    for (const [path, value] of buffer.entries()) {
      const { topKey } = setByPath(clone, path, value);
      topKeys.add(topKey);
    }
    const patch: Partial<SlideContent> = {};
    for (const topKey of topKeys) patch[topKey as keyof SlideContent] = clone[topKey] as never;

    buffer.clear();
    setStatus({ kind: 'saving' });
    const ok = await saveSlide(current.id, patch);
    setStatus(ok ? { kind: 'saved', at: new Date().toLocaleTimeString() } : { kind: 'error' });
  }, [saveSlide]);

  const commit = useCallback(
    (path: string, value: unknown) => {
      pending.current.set(path, value);
      setStatus({ kind: 'saving' });
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => void flush(), 400);
    },
    [flush]
  );

  const api = useMemo<EditApi>(() => ({ editing, commit, status }), [editing, commit, status]);

  return <EditContext.Provider value={api}>{children}</EditContext.Provider>;
};
