export type CaseStudyId = 'intro' | 'checkout' | 'design-harness' | 'tamil-murasu' | 'closing';

export interface SlideMetric {
  value: string;
  label: string;
  highlight?: boolean;
  hero?: boolean;
  green?: boolean;
}

export interface SlideMetadata {
  role?: string;
  scope?: string;
  industries?: string;
  scale?: string;
  team?: string;
  coreOutcomes?: string;
}

export interface SlideContent {
  id: string;
  hidden?: boolean; // Excluded from the presented deck (navigation, counts, slugs) when true
  caseStudyId: CaseStudyId;
  caseStudyTitle: string;
  caseStudySubtitle: string;
  slideNumber: number; // 1-indexed within case study/section
  globalIndex: number; // 0-indexed overall (0-20 for 21 slides)
  tag: string;
  slideTitle: string;
  headline: string;
  metadata?: SlideMetadata;
  metrics?: SlideMetric[];
  bullets?: {
    category?: string;
    layout?: 'grid-2x2' | 'numbered-row' | 'numbered-column';
    items: (string | { title?: string; desc?: string; italic?: boolean; titleItalic?: boolean; avatar?: string; list?: string[]; logos?: { name: string; src: string; darkSrc?: string; alt?: string }[]; badge?: string })[];
  }[];
  stackBullets?: boolean;
  quote?: string;
  speakerNotes?: string;
  visualType?: string;
}

export interface DeckState {
  currentGlobalIndex: number;
  showNotes: boolean;
  showOverview: boolean;
  autoPlay: boolean;
  isFullscreen: boolean;
}

export interface CaseStudyMeta {
  id: CaseStudyId;
  title: string;
  company: string;
  color: 'blue' | 'emerald' | 'indigo' | 'purple' | 'amber' | 'slate';
  description: string;
  slideCount: number;
}
