import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  LayoutGrid,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useDeckData } from './DeckData';
import { SlideThumbnailPreview } from './SlideThumbnailPreview';

interface SlideThumbnailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideThumbnailsModal: React.FC<SlideThumbnailsModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  const { visibleSlides: VISIBLE_SLIDES, caseStudies: CASE_STUDIES } = useDeckData();
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [filterCase, setFilterCase] = useState<string>('all');
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter slides
  const filteredSlides = VISIBLE_SLIDES.filter((slide) => {
    if (filterCase === 'all') return true;
    return slide.caseStudyId === filterCase;
  });

  // Scroll active slide into view when in carousel mode
  useEffect(() => {
    if (isOpen && viewMode === 'carousel' && carouselRef.current) {
      const activeElement = carouselRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [isOpen, viewMode, currentIndex]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-['Fira_Sans'] text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                  Visual Slide Thumbnails
                </h3>
                <span className="text-[11px] font-['Fira_Code'] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
                  {filteredSlides.length} of {VISIBLE_SLIDES.length} Slides
                </span>
              </div>
              <p className="text-xs text-slate-500 font-['Fira_Code']">
                YI WEI, TING // EXECUTIVE DESIGN PORTFOLIO
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle (Grid vs Carousel) */}
            <div className="flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5 text-xs font-['Fira_Code']">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#0F172A] font-bold shadow-2xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-white text-[#0F172A] font-bold shadow-2xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Carousel Strip View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Carousel</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              aria-label="Close Thumbnails Browser"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs font-['Fira_Code']">
          <span className="text-slate-400 font-semibold mr-1 shrink-0">FILTER:</span>
          <button
            onClick={() => setFilterCase('all')}
            className={`px-3 py-1 rounded-full transition-all cursor-pointer shrink-0 font-medium ${
              filterCase === 'all'
                ? 'bg-[#2563EB] text-white shadow-2xs font-bold'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            All Slides ({VISIBLE_SLIDES.length})
          </button>
          {CASE_STUDIES.map((c) => {
            const count = VISIBLE_SLIDES.filter((s) => s.caseStudyId === c.id).length;
            const isSelected = filterCase === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setFilterCase(c.id)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer shrink-0 font-medium ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-2xs font-bold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {c.company} ({count})
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {viewMode === 'grid' ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredSlides.map((slide) => {
                const isSelected = slide.globalIndex === currentIndex;
                const globalNum = String(slide.globalIndex + 1).padStart(2, '0');

                return (
                  <div
                    key={slide.id}
                    onClick={() => {
                      onSelectSlide(slide.globalIndex);
                      onClose();
                    }}
                    className={`group relative rounded-xl border p-3 cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-blue-50/40 border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Thumbnail Preview Area */}
                    <div className="mb-2">
                      <SlideThumbnailPreview slide={slide} />
                    </div>

                    {/* Metadata */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-['Fira_Code']">
                        <span className="font-bold text-[#2563EB]">
                          SLIDE {globalNum}
                        </span>
                        <span className="text-slate-400 font-medium">{slide.caseStudyTitle}</span>
                      </div>
                      <h4 className="text-xs font-bold text-[#0F172A] line-clamp-2 leading-snug">
                        {slide.slideTitle}
                      </h4>
                    </div>

                    {isSelected && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#2563EB] text-white text-[9px] font-['Fira_Code'] font-bold flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-2.5 h-2.5" /> ACTIVE
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            /* CAROUSEL STRIP VIEW */
            <div className="relative flex flex-col items-center justify-center py-4">
              {/* Carousel Controls */}
              <button
                onClick={() => scrollCarousel('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                aria-label="Scroll Carousel Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-950 shadow-lg flex items-center justify-center transition-all cursor-pointer hover:scale-105"
                aria-label="Scroll Carousel Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Scrollable Track */}
              <div
                ref={carouselRef}
                className="w-full flex items-center gap-5 overflow-x-auto py-6 px-12 snap-x scrollbar-thin scrollbar-thumb-slate-200"
              >
                {filteredSlides.map((slide) => {
                  const isSelected = slide.globalIndex === currentIndex;
                  const globalNum = String(slide.globalIndex + 1).padStart(2, '0');

                  return (
                    <div
                      key={slide.id}
                      data-active={isSelected ? 'true' : 'false'}
                      onClick={() => {
                        onSelectSlide(slide.globalIndex);
                        onClose();
                      }}
                      className={`snap-center shrink-0 w-[300px] sm:w-[360px] rounded-2xl border p-4 cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/40 border-[#2563EB] shadow-xl ring-2 ring-[#2563EB]/20 scale-105'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                      }`}
                    >
                      <div className="mb-3">
                        <SlideThumbnailPreview slide={slide} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-['Fira_Code']">
                          <span className="font-bold text-[#2563EB]">
                            SLIDE {globalNum}
                          </span>
                          <span className="text-slate-400 font-medium">
                            {slide.caseStudyTitle}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#0F172A] line-clamp-2 leading-snug">
                          {slide.slideTitle}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {slide.headline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 font-['Fira_Code']">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-2xs text-[10px]">
              V
            </kbd>
            <span>to toggle view</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#2563EB] hover:underline font-semibold cursor-pointer"
          >
            Close Viewer [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
