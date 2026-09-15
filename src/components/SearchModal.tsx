import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  FileText,
  TrendingUp,
} from 'lucide-react';
import { useDeckData } from './DeckData';
import { SlideContent, CaseStudyId } from '../types';
import { highlightText } from '../utils/textHighlight';

export interface SearchMatch {
  slide: SlideContent;
  caseStudyTitle: string;
  caseStudyId: CaseStudyId;
  field: string;
  snippet: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number, query?: string) => void;
  initialQuery?: string;
}

const SEARCH_SUGGESTIONS = [
  'Yi Wei',
  'Checkout',
  'AI Design Harness',
  'KONAMI',
  'Tokens',
  'Activision',
  'Tamil Murasu',
  'A/B test',
  'Little India',
  'Coda Payments',
  'Quality Gates',
  'Runnable Prototype',
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectSlide,
  initialQuery = '',
}) => {
  const { visibleSlides: VISIBLE_SLIDES, caseStudies: CASE_STUDIES } = useDeckData();
  const [query, setQuery] = useState(initialQuery);
  const [selectedCase, setSelectedCase] = useState<string>('all');
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    }
  }, [isOpen]);

  // Execute search across all slide fields
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matches: SearchMatch[] = [];

    VISIBLE_SLIDES.forEach((slide) => {
      // Filter by case study if selected
      if (selectedCase !== 'all' && slide.caseStudyId !== selectedCase) {
        return;
      }

      // 1. Search Slide Title
      if (slide.slideTitle.toLowerCase().includes(q)) {
        matches.push({
          slide,
          caseStudyTitle: slide.caseStudyTitle,
          caseStudyId: slide.caseStudyId,
          field: 'Slide Title',
          snippet: slide.slideTitle,
        });
      }

      // 2. Search Headline / Narrative
      if (slide.headline.toLowerCase().includes(q)) {
        matches.push({
          slide,
          caseStudyTitle: slide.caseStudyTitle,
          caseStudyId: slide.caseStudyId,
          field: 'Narrative Body',
          snippet: slide.headline,
        });
      }

      // 3. Search Bullets & Sub-points
      slide.bullets?.forEach((bGroup) => {
        if (bGroup.category && bGroup.category.toLowerCase().includes(q)) {
          matches.push({
            slide,
            caseStudyTitle: slide.caseStudyTitle,
            caseStudyId: slide.caseStudyId,
            field: 'Section Category',
            snippet: bGroup.category,
          });
        }
        bGroup.items.forEach((item) => {
          if (typeof item === 'string') {
            if (item.toLowerCase().includes(q)) {
              matches.push({
                slide,
                caseStudyTitle: slide.caseStudyTitle,
                caseStudyId: slide.caseStudyId,
                field: 'Takeaway Point',
                snippet: item,
              });
            }
          } else {
            if ((item.title ?? "").toLowerCase().includes(q) || (item.desc ?? "").toLowerCase().includes(q)) {
              matches.push({
                slide,
                caseStudyTitle: slide.caseStudyTitle,
                caseStudyId: slide.caseStudyId,
                field: item.title ?? "",
                snippet: item.desc ?? "",
              });
            }
          }
        });
      });

      // 4. Search Metrics
      slide.metrics?.forEach((m) => {
        if (m.label.toLowerCase().includes(q) || m.value.toLowerCase().includes(q)) {
          matches.push({
            slide,
            caseStudyTitle: slide.caseStudyTitle,
            caseStudyId: slide.caseStudyId,
            field: 'Metric Value',
            snippet: `${m.value} — ${m.label}`,
          });
        }
      });

      // 5. Search Quotes
      if (slide.quote && slide.quote.toLowerCase().includes(q)) {
        matches.push({
          slide,
          caseStudyTitle: slide.caseStudyTitle,
          caseStudyId: slide.caseStudyId,
          field: 'Executive Synthesis',
          snippet: slide.quote,
        });
      }
    });

    return matches;
  }, [query, selectedCase]);

  // Handle keyboard navigation in results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter' && results[focusedIndex]) {
      e.preventDefault();
      onSelectSlide(results[focusedIndex].slide.globalIndex, query);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden font-['Fira_Sans'] text-slate-800"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 bg-white">
          <Search className="w-5 h-5 text-[#2563EB] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFocusedIndex(0);
            }}
            placeholder="Search keywords, metrics, case studies, or principles..."
            className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400 text-base sm:text-lg font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 cursor-pointer"
              title="Clear Search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-['Fira_Code'] text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs font-['Fira_Code']">
          <span className="text-slate-400 font-semibold mr-1 shrink-0">FILTER:</span>
          <button
            onClick={() => setSelectedCase('all')}
            className={`px-2.5 py-1 rounded-full transition-all cursor-pointer shrink-0 ${
              selectedCase === 'all'
                ? 'bg-[#2563EB] text-white font-bold shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Sections
          </button>
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(c.id)}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer shrink-0 ${
                selectedCase === c.id
                  ? 'bg-[#2563EB] text-white font-bold shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {c.company}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            /* Suggestions when empty */
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-['Fira_Code'] font-bold text-slate-500">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>POPULAR SEARCH TERMS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SEARCH_SUGGESTIONS.map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setQuery(term);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-['Fira_Code'] text-slate-700 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            /* Empty State */
            <div className="p-8 text-center space-y-2 text-slate-500">
              <p className="text-sm font-medium">No matches found for "{query}"</p>
              <p className="text-xs text-slate-400">
                Try searching for broader terms like "Checkout", "Harness", "KONAMI", or "Tokens"
              </p>
            </div>
          ) : (
            /* Matched Items */
            results.map((match, idx) => {
              const isFocused = idx === focusedIndex;
              const globalNum = String(match.slide.globalIndex + 1).padStart(2, '0');

              return (
                <div
                  key={idx}
                  onClick={() => {
                    onSelectSlide(match.slide.globalIndex, query);
                    onClose();
                  }}
                  onMouseEnter={() => setFocusedIndex(idx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isFocused
                      ? 'bg-blue-50/50 border-[#2563EB] shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-['Fira_Code'] mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#2563EB]">
                        SLIDE {globalNum}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 font-medium">
                        {match.caseStudyTitle}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">
                      {match.field}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                    {highlightText(match.slide.slideTitle, query)}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {highlightText(match.snippet, query)}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500 font-['Fira_Code']">
          <div className="flex items-center gap-2">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-[10px]">
              ENTER
            </kbd>
            <span>to jump to slide</span>
          </div>
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  );
};
