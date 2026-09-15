import { useCallback, useEffect, useRef, useState } from 'react';
import type { CaseStudyMeta, SlideContent } from './types';

export type SlidesSource = 'api' | 'bundled';

interface DeckPayload {
  caseStudies: CaseStudyMeta[];
  slides: SlideContent[];
}

export type SlidesState = {
  slides: SlideContent[];
  caseStudies: CaseStudyMeta[];
  source: SlidesSource;
  /** Presentable deck: hidden slides excluded, globalIndex reindexed 0..N-1. */
  visibleSlides: SlideContent[];
  saveSlide: (id: string, patch: Partial<SlideContent>) => Promise<boolean>;
  reload: () => Promise<void>;
};

function reindex(slides: SlideContent[]): SlideContent[] {
  return slides.filter((s) => !s.hidden).map((s, i) => ({ ...s, globalIndex: i }));
}

// Deck supplies its bundled payload (slides.json import) as the offline
// fallback; storeData may differ from the same shape.
export function useSlides(bundled?: DeckPayload): SlidesState {
  const [slides, setSlides] = useState<SlideContent[]>(bundled?.slides ?? []);
  const [caseStudies, setCaseStudies] = useState<CaseStudyMeta[]>(bundled?.caseStudies ?? []);
  const [source, setSource] = useState<SlidesSource>('bundled');
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    fetch('/api/slides')
      .then((res) => {
        if (!res.ok) throw new Error(`API status ${res.status}`);
        return res.json();
      })
      .then((deck: DeckPayload) => {
        if (!alive.current || !Array.isArray(deck.slides) || !Array.isArray(deck.caseStudies)) return;
        setSource('api');
        setCaseStudies(deck.caseStudies);
        setSlides(deck.slides);
      })
      .catch(() => {
        // Prod build / no middleware present: stay on the bundled payload.
      });
    return () => {
      alive.current = false;
    };
  }, []);

  const saveSlide = useCallback(async (id: string, patch: Partial<SlideContent>) => {
    try {
      const res = await fetch(`/api/slides/${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patch),
      });
      if (!res.ok) return false;
      const json = await res.json();
      if (!json.ok) return false;
      setSlides((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch, id: s.id } : s)));
      return true;
    } catch {
      return false;
    }
  }, []);

  const reload = useCallback(async () => {
    try {
      const res = await fetch('/api/slides', { cache: 'no-store' });
      if (!res.ok) return;
      const deck: DeckPayload = await res.json();
      setCaseStudies(deck.caseStudies);
      setSlides(deck.slides);
    } catch {
      // keep current state
    }
  }, []);

  return { slides, caseStudies, source, visibleSlides: reindex(slides), saveSlide, reload };
}
