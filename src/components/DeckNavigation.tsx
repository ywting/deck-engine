import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  Mic,
  Play,
  Pause,
  ListTree,
  LayoutGrid,
  Search,
  Pencil,
} from 'lucide-react';
import { SlideContent, CaseStudyId } from '../types';
import { useDeckData } from './DeckData';

interface DeckNavigationProps {
  currentSlide: SlideContent;
  totalSlides: number;
  currentCaseSlideIndex: number;
  totalCaseSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToSlide: (globalIndex: number) => void;
  onSelectCaseStudy: (caseId: CaseStudyId) => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  showTOC: boolean;
  onToggleTOC: () => void;
  showThumbnails: boolean;
  onToggleThumbnails: () => void;
  showSearch: boolean;
  onToggleSearch: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  knobDark: boolean;
  canEdit?: boolean;
  showEdit?: boolean;
  onToggleEdit?: () => void;
}

export const DeckNavigation: React.FC<DeckNavigationProps> = ({
  currentSlide,
  totalSlides,
  currentCaseSlideIndex,
  totalCaseSlides,
  onPrev,
  onNext,
  onJumpToSlide,
  onSelectCaseStudy,
  showNotes,
  onToggleNotes,
  showTOC,
  onToggleTOC,
  showThumbnails,
  onToggleThumbnails,
  showSearch,
  onToggleSearch,
  isFullscreen,
  onToggleFullscreen,
  isAutoplay,
  onToggleAutoplay,
  theme,
  onToggleTheme,
  knobDark,
  canEdit = false,
  showEdit = false,
  onToggleEdit,
}) => {
  const { visibleSlides: VISIBLE_SLIDES, caseStudies: CASE_STUDIES } = useDeckData();
  const currentCase = CASE_STUDIES.find((c) => c.id === currentSlide.caseStudyId) || CASE_STUDIES[0];
  const isFirst = currentSlide.globalIndex === 0;
  const isLast = currentSlide.globalIndex === totalSlides - 1;

  // Format indices with leading zeros
  const currentCaseStr = String(currentSlide.slideNumber).padStart(2, '0');
  const totalCaseStr = String(totalCaseSlides).padStart(2, '0');
  const currentGlobalStr = String(currentSlide.globalIndex + 1).padStart(2, '0');
  const totalGlobalStr = String(totalSlides).padStart(2, '0');

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP HEADER BAR (PINNED TO TOP)                                         */}
      {/* ========================================================================= */}
      <header className="h-14 px-6 sm:px-8 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-40 select-none">
        {/* Left: Brand Identity in Fira Code */}
        <div className="flex items-center gap-3">
          <span className="font-['Fira_Code'] text-xs font-semibold text-slate-500 tracking-wider">
            PORTFOLIO // YI WEI, TING
          </span>
          <span className="hidden xl:inline text-slate-300">|</span>
          {/* Quick Case Study Selector Pills */}
          <div className="hidden xl:flex items-center gap-1 bg-slate-100/80 p-0.5 rounded-lg border border-slate-200">
            {CASE_STUDIES.map((c) => {
              const isActive = c.id === currentSlide.caseStudyId;
              return (
                <button
                  key={c.id}
                  onClick={() => onSelectCaseStudy(c.id)}
                  className={`px-2.5 py-1 rounded text-[11px] font-['Fira_Code'] font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0F172A] font-bold shadow-2xs border border-slate-200'
                      : 'text-slate-500 hover:text-[#0F172A]'
                  }`}
                >
                  {c.id === 'intro'
                    ? '00 // Overview'
                    : c.id === 'checkout'
                    ? '01 // Coda Payments'
                    : c.id === 'tamil-murasu'
                    ? '02 // Tamil Murasu'
                    : c.id === 'design-harness'
                    ? '03 // Design to Code'
                    : '04 // Closing'}
                </button>
              );
            })}
          </div>
        </div>
        {/* Right: Theme Switcher */}
        <div className="flex items-center gap-1">
          <button
            onClick={onToggleTheme}
            role="switch"
            aria-checked={theme === 'dark'}
            className={`relative w-[52px] h-[26px] rounded-full border transition-colors duration-200 cursor-pointer flex items-center justify-between px-[5px] ${
              theme === 'dark'
                ? 'bg-[#020617] border-slate-800'
                : 'bg-slate-100 border-slate-200'
            }`}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span
              className={`material-symbols text-[16px] leading-none block transition-colors ${
                theme === 'dark' ? 'text-slate-600' : 'text-amber-500'
              }`}
            >
              light_mode
            </span>
            <span
              className={`material-symbols text-[16px] leading-none block transition-colors ${
                theme === 'dark' ? 'text-blue-300' : 'text-slate-400'
              }`}
            >
              dark_mode
            </span>
            <span
              aria-hidden="true"
              className={`absolute top-1/2 left-[3px] -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-white border border-slate-300 shadow transition-transform duration-200 ease-out ${
                knobDark ? 'translate-x-[26px]' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE LEFT & RIGHT PADDING CLICK ZONES                           */}
      {/* ========================================================================= */}
      <div
        onClick={onPrev}
        className={`fixed top-14 bottom-24 left-0 w-10 sm:w-14 lg:w-16 z-20 cursor-pointer select-none transition-opacity duration-200 ${
          isFirst ? 'opacity-0 pointer-events-none' : 'hover:bg-slate-400/[0.03]'
        }`}
        title="Previous Slide [←]"
        role="button"
        aria-label="Previous Slide"
      />

      <div
        onClick={onNext}
        className={`fixed top-14 bottom-24 right-0 w-10 sm:w-14 lg:w-16 z-20 cursor-pointer select-none transition-opacity duration-200 ${
          isLast ? 'opacity-0 pointer-events-none' : 'hover:bg-slate-400/[0.03]'
        }`}
        title="Next Slide [→]"
        role="button"
        aria-label="Next Slide"
      />

      {/* ========================================================================= */}
      {/* 3. PRESENTATION HUD (FLOATING BOTTOM CONTROLLER)                          */}
      {/* ========================================================================= */}
      <nav
        aria-label="Presentation Controller"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-4 sm:gap-6 z-50 select-none"
      >
        {/* Prev Button (←) */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer ${
            isFirst
              ? 'opacity-25 cursor-not-allowed text-slate-300'
              : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 active:scale-95'
          }`}
          title="Previous Slide [←]"
          aria-label="Previous Slide"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        {/* Slide Counter in Fira Code: 03 / 21 (bold active number) */}
        <div className="flex items-center gap-1.5 font-['Fira_Code'] text-xs">
          <span className="font-bold text-[#0F172A] text-sm">{currentGlobalStr}</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">{totalGlobalStr}</span>
        </div>

        {/* Discrete Multi-Segment Progress Bar with Active Segment in Trust Blue */}
        <div className="hidden sm:flex items-center gap-1">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const isActive = idx === currentSlide.globalIndex;
            const isCompleted = idx < currentSlide.globalIndex;
            return (
              <div
                key={idx}
                onClick={() => onJumpToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-5 bg-[#2563EB]'
                    : isCompleted
                    ? 'w-2 bg-[#93C5FD]'
                    : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                }`}
                title={`Jump to Slide ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Next Button (→) */}
        <button
          onClick={onNext}
          disabled={isLast}
          className={`p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer ${
            isLast
              ? 'opacity-25 cursor-not-allowed text-slate-300'
              : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 active:scale-95'
          }`}
          title="Next Slide [→]"
          aria-label="Next Slide"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Subtle Vertical Divider */}
        <div className="h-4 sm:h-5 w-px bg-slate-200" />

        {/* Secondary Executive Tool Triggers */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {/* Table of Contents */}
          <button
            onClick={onToggleTOC}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              showTOC
                ? 'bg-slate-100 text-[#2563EB]'
                : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-100'
            }`}
            title="Table of Contents [T]"
          >
            <ListTree className="w-4 h-4" />
          </button>

          {/* Search */}
          <button
            onClick={onToggleSearch}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              showSearch
                ? 'bg-slate-100 text-[#2563EB]'
                : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-100'
            }`}
            title="Search Deck [⌘K]"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Speaker Notes */}
          <button
            onClick={onToggleNotes}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              showNotes
                ? 'bg-blue-50 text-[#2563EB]'
                : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-100'
            }`}
            title="Speaker Cues [N]"
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Autoplay */}
          <button
            onClick={onToggleAutoplay}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isAutoplay
                ? 'bg-emerald-50 text-emerald-600'
                : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-100'
            }`}
            title={isAutoplay ? 'Pause Autoplay' : 'Start Autoplay'}
          >
            {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Fullscreen */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-full text-slate-400 hover:text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
            title="Toggle Fullscreen [F]"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

          {/* Edit (dev API only) */}
          {canEdit && (
            <button
              onClick={onToggleEdit}
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                showEdit
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-slate-400 hover:text-[#0F172A] hover:bg-slate-100'
              }`}
              title="Edit Slide [E]"
            >
              <Pencil className="w-4 h-4" />
            </button>
          )}
        </div>
      </nav>
    </>
  );
};
