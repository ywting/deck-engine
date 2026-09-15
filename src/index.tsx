// deck-engine barrel: everything a deck shell needs.
export * from './types';
export { useSlides } from './useSlides';
export { DeckDataProvider, useDeckData, useVisibleSlides } from './components/DeckData';
export { SlidePresenter } from './components/SlidePresenter';
export { DeckNavigation } from './components/DeckNavigation';
export { EditDrawer } from './components/EditDrawer';
export { SpeakerNotesDrawer } from './components/SpeakerNotesDrawer';
export { TableOfContentsModal } from './components/TableOfContentsModal';
export { SlideThumbnailsModal } from './components/SlideThumbnailsModal';
export { SearchModal } from './components/SearchModal';
export { GridOverviewModal } from './components/GridOverviewModal';
export { SlideThumbnailPreview } from './components/SlideThumbnailPreview';
export { SlideVisualRenderer } from './components/visuals/SlideVisualRenderer';
export {
  EditProvider,
  EditContext,
  useEdit,
  useEditing,
  setByPath,
} from './components/editing/EditContext';
export { InlineEditable } from './components/editing/InlineEditable';
import './theme/tokens.css';
