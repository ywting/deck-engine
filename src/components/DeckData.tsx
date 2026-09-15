import React, { createContext, useContext, useMemo } from 'react';
import type { CaseStudyMeta, SlideContent } from '../types';

interface DeckData {
  /** All slides, including hidden ones. */
  slides: SlideContent[];
  /** Hidden slides excluded, globalIndex reindexed. */
  visibleSlides: SlideContent[];
  caseStudies: CaseStudyMeta[];
}

const DeckDataContext = createContext<DeckData>({
  slides: [],
  visibleSlides: [],
  caseStudies: [],
});

export const useDeckData = () => useContext(DeckDataContext);
// Convenience for deck shells that mirror useSlides output into context.
export const useVisibleSlides = () => useContext(DeckDataInternal).visibleSlides;
const DeckDataInternal = DeckDataContext;

export const DeckDataProvider: React.FC<DeckData & { children?: React.ReactNode }> = ({
  slides,
  visibleSlides,
  caseStudies,
  children,
}) => {
  const value = useMemo(() => ({ slides, visibleSlides, caseStudies }), [slides, visibleSlides, caseStudies]);
  return <DeckDataContext.Provider value={value}>{children}</DeckDataContext.Provider>;
};
