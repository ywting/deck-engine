import React, { useState } from 'react';
import {
  X,
  ListTree,
  ChevronDown,
  ChevronRight,
  Play,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { useDeckData } from './DeckData';
import { CaseStudyId } from '../types';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (globalIndex: number) => void;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide,
}) => {
  const { visibleSlides: VISIBLE_SLIDES, caseStudies: CASE_STUDIES } = useDeckData();
  // Accordion state: open all sections by default
  const [collapsedSections, setCollapsedSections] = useState<Record<CaseStudyId, boolean>>({
    intro: false,
    checkout: false,
    'design-harness': false,
    'tamil-murasu': false,
    closing: false,
  });

  if (!isOpen) return null;

  const toggleSection = (id: CaseStudyId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentSlide = VISIBLE_SLIDES[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden font-['Fira_Sans'] text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center">
              <ListTree className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                  Table of Contents
                </h3>
                <span className="text-[11px] font-['Fira_Code'] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-semibold">
                  {VISIBLE_SLIDES.length} SLIDES
                </span>
              </div>
              <p className="text-xs text-slate-500 font-['Fira_Code']">
                YI WEI, TING // EXECUTIVE DESIGN PORTFOLIO BRIEFING
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-['Fira_Code'] text-slate-400 hidden sm:inline">
              [T] or [ESC]
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
              aria-label="Close Table of Contents"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body - Main Sections and Sub-Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {CASE_STUDIES.map((study) => {
            const studySlides = VISIBLE_SLIDES.filter((s) => s.caseStudyId === study.id);
            const isCollapsed = collapsedSections[study.id];
            const isCurrentCase = currentSlide.caseStudyId === study.id;

            return (
              <section
                key={study.id}
                className={`rounded-xl border transition-all ${
                  isCurrentCase
                    ? 'border-[#2563EB]/40 bg-blue-50/30 shadow-xs'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Section Main Header (Accordion Toggle) */}
                <div
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none rounded-t-xl hover:bg-slate-50/80 transition-colors"
                  onClick={() => toggleSection(study.id)}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <button
                      type="button"
                      className="mt-0.5 sm:mt-0 p-1 rounded-md text-slate-400 hover:text-slate-700 transition-colors"
                      aria-label="Toggle section"
                    >
                      {isCollapsed ? (
                        <ChevronRight className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-['Fira_Code'] font-bold uppercase tracking-wider text-[#2563EB]">
                          {study.company}
                        </span>
                        {isCurrentCase && (
                          <span className="text-[10px] font-['Fira_Code'] px-2 py-0.5 rounded-full bg-blue-100 text-[#2563EB] font-bold">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F172A] mt-0.5">
                        {study.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{study.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center font-['Fira_Code'] text-xs text-slate-500">
                    <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
                      {studySlides.length} slides
                    </span>
                  </div>
                </div>

                {/* Slides List */}
                {!isCollapsed && (
                  <div className="border-t border-slate-100 p-2 sm:p-3 space-y-1.5 bg-slate-50/40 rounded-b-xl">
                    {studySlides.map((slide) => {
                      const isSelected = slide.globalIndex === currentIndex;
                      const slideNum = String(slide.slideNumber).padStart(2, '0');
                      const globalNum = String(slide.globalIndex + 1).padStart(2, '0');

                      return (
                        <button
                          key={slide.id}
                          onClick={() => {
                            onSelectSlide(slide.globalIndex);
                            onClose();
                          }}
                          className={`w-full p-2.5 sm:p-3 rounded-lg flex items-center justify-between text-left transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-white border-[#2563EB] text-[#0F172A] font-medium shadow-xs ring-1 ring-[#2563EB]/20'
                              : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0 pr-2">
                            <span
                              className={`font-['Fira_Code'] text-xs font-bold shrink-0 ${
                                isSelected ? 'text-[#2563EB]' : 'text-slate-400'
                              }`}
                            >
                              {globalNum}
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-['Fira_Code'] text-[10px] text-slate-400 font-medium truncate">
                                  {slide.tag}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm font-semibold text-[#0F172A] truncate">
                                {slide.slideTitle}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {isSelected ? (
                              <span className="text-[11px] font-['Fira_Code'] font-bold text-[#2563EB] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                                Viewing
                              </span>
                            ) : (
                              <span className="text-slate-300 group-hover:text-slate-500 transition-colors">
                                <ArrowRight className="w-3.5 h-3.5" />
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 font-['Fira_Code']">
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-2xs text-[10px]">
              ↑ / ↓
            </kbd>
            <span>or click any slide</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#2563EB] hover:underline font-semibold cursor-pointer"
          >
            Close Menu [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
