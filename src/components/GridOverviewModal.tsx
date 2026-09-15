import React from 'react';
import { X, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { useDeckData } from './DeckData';

interface GridOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const GridOverviewModal: React.FC<GridOverviewModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  const { visibleSlides: VISIBLE_SLIDES, caseStudies: CASE_STUDIES } = useDeckData();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 font-['Fira_Sans']">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-5xl max-h-[88vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#166534]" />
            <div>
              <h3 className="text-base font-bold text-[#0A2540]">Slide Grid Overview</h3>
              <p className="text-xs text-slate-500 font-medium">
                13 presentation-ready slides across 2 executive case studies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-600 hover:text-[#0A2540] border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close overview"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body with Grouped Slide Cards */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {CASE_STUDIES.map((study) => {
            const studySlides = VISIBLE_SLIDES.filter((s) => s.caseStudyId === study.id);

            return (
              <div key={study.id} className="space-y-3">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        study.color === 'emerald' ? 'bg-[#166534]' : 'bg-amber-600'
                      }`}
                    />
                    <h4 className="text-sm font-bold text-[#0A2540] tracking-wide">{study.title}</h4>
                    <span className="text-xs text-slate-500">({study.company})</span>
                  </div>
                  <span className="text-[11px] font-['Fira_Code'] text-slate-500 font-semibold">
                    {studySlides.length} Slides
                  </span>
                </div>

                {/* Slides Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {studySlides.map((slide) => {
                    const isSelected = currentIndex === slide.globalIndex;

                    return (
                      <button
                        key={slide.id}
                        onClick={() => {
                          onSelectSlide(slide.globalIndex);
                          onClose();
                        }}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between h-38 relative cursor-pointer group bg-white shadow-2xs ${
                          isSelected
                            ? 'border-[#166534] ring-2 ring-emerald-100 shadow-md'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-['Fira_Code'] uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 font-semibold">
                            Slide {slide.slideNumber}
                          </span>
                          <span
                            className={`text-[9px] font-['Fira_Code'] uppercase px-1.5 py-0.5 rounded font-bold ${
                              study.color === 'emerald'
                                ? 'bg-emerald-50 text-[#166534] border border-emerald-200'
                                : 'bg-amber-50 text-amber-800 border border-amber-200'
                            }`}
                          >
                            {slide.tag}
                          </span>
                        </div>

                        <div className="my-1">
                          <h5 className="text-xs font-bold text-[#0A2540] group-hover:text-[#1D4ED8] line-clamp-2 leading-tight">
                            {slide.slideTitle}
                          </h5>
                          <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                            {slide.headline}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[10px] text-slate-500 font-['Fira_Code']">
                          <span>Index #{slide.globalIndex + 1}</span>
                          {isSelected ? (
                            <span className="text-[#166534] flex items-center gap-1 font-bold">
                              <CheckCircle2 className="w-3 h-3" /> Current
                            </span>
                          ) : (
                            <span className="group-hover:text-[#0A2540] flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                              Jump <ChevronRight className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between text-xs text-slate-500 font-['Fira_Code']">
          <span>Press [G] or [Esc] to toggle this overview</span>
          <span>Click any card to navigate immediately</span>
        </div>
      </div>
    </div>
  );
};
