import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideContent, CaseStudyId } from '../types';
import { SlideVisualRenderer } from './visuals/SlideVisualRenderer';
import { Search, X, TrendingUp, ArrowRight } from 'lucide-react';
import { highlightText } from '../utils/textHighlight';
import { InlineEditable } from './editing/InlineEditable';

interface SlidePresenterProps {
  slide: SlideContent;
  direction: number; // 1 for next, -1 for prev
  searchQuery?: string;
  onClearSearch?: () => void;
  showArtifactStage?: boolean;
  theme?: 'light' | 'dark';
  onSelectCaseStudy?: (caseId: CaseStudyId) => void;
  onJumpToSlide?: (index: number) => void;
}

const getCaseStudyTarget = (
  title: string,
  _desc?: string
): { caseId: CaseStudyId; targetIndex: number } | null => {
  const cleanTitle = title.toLowerCase();
  if (
    cleanTitle.includes('murasu') ||
    cleanTitle.includes('tamil') ||
    cleanTitle.includes('digitalising tamil murasu') ||
    cleanTitle.includes('digitalizing tamil murasu')
  ) {
    return { caseId: 'tamil-murasu', targetIndex: 10 };
  }
  if (
    cleanTitle.includes('harness') ||
    cleanTitle.includes('frontier design')
  ) {
    return { caseId: 'design-harness', targetIndex: 18 };
  }
  if (
    cleanTitle.includes('checkout') ||
    cleanTitle.includes('redesigning the coda consumer checkout')
  ) {
    return { caseId: 'checkout', targetIndex: 3 };
  }
  if (cleanTitle.includes('case 1')) {
    return { caseId: 'checkout', targetIndex: 3 };
  }
  if (cleanTitle.includes('case 2')) {
    return { caseId: 'tamil-murasu', targetIndex: 10 };
  }
  if (cleanTitle.includes('case 3')) {
    return { caseId: 'design-harness', targetIndex: 18 };
  }
  return null;
};

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 24 : -24,
    y: 0,
    filter: 'blur(2px)',
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 28, mass: 0.7 },
      opacity: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      filter: { duration: 0.2 },
    },
  },
  exit: (dir: number) => ({
    zIndex: 0,
    opacity: 0,
    x: dir > 0 ? -18 : 18,
    filter: 'blur(2px)',
    transition: {
      x: { duration: 0.16, ease: 'easeIn' },
      opacity: { duration: 0.16, ease: 'easeIn' },
      filter: { duration: 0.12 },
    },
  }),
};

const columnVariants = {
  enter: {
    opacity: 0,
    y: 10,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

export const SlidePresenter: React.FC<SlidePresenterProps> = ({
  slide,
  direction,
  searchQuery = '',
  onClearSearch,
  showArtifactStage = false,
  theme = 'light',
  onSelectCaseStudy,
  onJumpToSlide,
}) => {
  const chapterNumber = String(slide.slideNumber).padStart(2, '0');
  const tagLabel = slide.tag ? slide.tag.toUpperCase() : 'STRATEGY';
  const monoTag = tagLabel.startsWith('[') ? tagLabel : `[ ${tagLabel} ]`;

  const isCover = slide.visualType?.startsWith('case-cover') || slide.id.includes('cover');
  const isFullWidthVisualSlide = slide.visualType === 'tamil-iframe' || slide.visualType === 'marketplace-tug-of-war' || slide.visualType === 'jtbd-archetypes' || slide.visualType === 'friction-audit-tabs' || slide.visualType === 'craft-interventions' || slide.visualType === 'design-principles' || slide.visualType === 'timeline-evolution' || slide.visualType === 'spotlight-video' || slide.visualType === 'runtime-panel' || slide.visualType === 'usecases-panel';
  const isDedicatedVisualSlide = slide.visualType === 'tamil-mukta' || slide.visualType === 'tamil-mobile-comparison' || slide.visualType === 'tamil-desktop-comparison' || slide.visualType === 'checkout-side-by-side' || slide.visualType === 'codashop-playground' || slide.visualType === 'ab-showdown-flywheel' || slide.visualType === 'video-placeholder' || slide.visualType === 'track-video' || slide.visualType === 'enterprise-video';
  const effectiveShowArtifactStage = showArtifactStage || isDedicatedVisualSlide;

  if (isFullWidthVisualSlide) {
    return (
      <div
        className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 flex flex-col justify-start select-text"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col justify-start relative min-w-0 space-y-5"
          >
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="font-['Fira_Code'] text-[12px] sm:text-[13px] leading-[16px] font-semibold tracking-[0.08em] uppercase text-[#2563EB]">
                    <InlineEditable value={slide.tag} path="tag">
                      {monoTag}
                    </InlineEditable>
                  </span>
                </div>
                <h1
                  className="font-['Fira_Sans'] text-[28px] sm:text-[36px] lg:text-[42px] leading-[34px] sm:leading-[42px] lg:leading-[48px] font-bold tracking-[-0.025em] mb-3 text-[#0F172A]"
                  style={{ textWrap: 'balance' }}
                >
                  <InlineEditable value={slide.slideTitle} path="slideTitle" multiline>
                    {highlightText(slide.slideTitle, searchQuery)}
                  </InlineEditable>
                </h1>
                <p className="font-['Fira_Sans'] text-[16px] sm:text-[18px] leading-[26px] font-normal text-[#334155] max-w-5xl">
                  <InlineEditable value={slide.headline} path="headline" multiline>
                    {highlightText(slide.headline, searchQuery)}
                  </InlineEditable>
                </p>
              </div>

            <div className="w-full">
              <SlideVisualRenderer
                visualType={slide.visualType}
                onSelectCaseStudy={onSelectCaseStudy}
                onJumpToSlide={onJumpToSlide}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  const getCoverTheme = () => {
    if (slide.visualType === 'case-cover-checkout') {
      return {
        tagColor: 'text-emerald-800 bg-emerald-100/90 border-emerald-300',
        cardBg: 'bg-emerald-50/90 border-emerald-200 shadow-2xs hover:border-emerald-300',
        itemBg: 'bg-emerald-50/60 border-emerald-200/80 hover:bg-emerald-50/90 hover:border-emerald-300',
        quoteBg: 'bg-emerald-50/90 text-emerald-950 border-l-4 border-l-emerald-600',
        quoteTitle: 'text-emerald-700',
        metricBorder: 'border-emerald-200/90',
      };
    }
    if (slide.visualType === 'case-cover-harness') {
      return {
        tagColor: 'text-purple-800 bg-purple-100/90 border-purple-300',
        cardBg: 'bg-purple-50/90 border-purple-200 shadow-2xs hover:border-purple-300',
        itemBg: 'bg-purple-100/80 border-purple-200 hover:bg-purple-100 hover:border-purple-300',
        quoteBg: 'bg-purple-50/90 text-purple-950 border-l-4 border-l-purple-600',
        quoteTitle: 'text-purple-700',
        metricBorder: 'border-purple-200/90',
      };
    }
    if (slide.visualType === 'case-cover-tamil-murasu') {
      return {
        tagColor: 'text-amber-800 bg-amber-100/90 border-amber-300',
        cardBg: 'bg-amber-100/80 border-amber-300 shadow-2xs hover:border-amber-300',
        itemBg: 'bg-amber-50/70 border-amber-300 hover:bg-amber-100/80 hover:border-amber-300',
        quoteBg: 'bg-amber-50/90 text-amber-950 border-l-4 border-l-amber-600',
        quoteTitle: 'text-amber-700',
        metricBorder: 'border-amber-200/90',
      };
    }
    return null;
  };

  const coverTheme = getCoverTheme();

  // *asterisks* inside a card title render that segment italic.
  const renderTitle = (title: string, query: string) => {
    if (!title.includes('*')) return highlightText(title, query);
    return (
      <>
        {title.split('*').map((part, i) =>
          i % 2 === 1 ? (
            <em key={i} className="italic">
              {highlightText(part, query)}
            </em>
          ) : (
            <React.Fragment key={i}>{highlightText(part, query)}</React.Fragment>
          )
        )}
      </>
    );
  };

  return (
    <div
      className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6 flex flex-col justify-start select-text"
      onClick={(e) => e.stopPropagation()}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full flex flex-col justify-start relative min-w-0"
        >
          {/* Active Search Filter Pill */}
          {searchQuery && (
            <div className="mb-4 inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs shadow-xs">
              <Search className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="text-blue-900 font-['Fira_Code'] text-[11px]">
                SEARCH QUERY: <strong className="font-bold underline">{searchQuery}</strong>
              </span>
              {onClearSearch && (
                <button
                  onClick={onClearSearch}
                  className="hover:text-[#2563EB] text-slate-500 cursor-pointer p-0.5 ml-1 transition-colors"
                  title="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* DYNAMIC CSS GRID LAYOUT CONTAINER                                         */}
          {/* Adapts column definitions: 1 full-width column when right stage is hidden, */}
          {/* or 12-column grid split (7/5) when the right stage is visible.            */}
          {/* ========================================================================= */}
          <div
            className={`grid items-stretch w-full min-w-0 transition-all duration-300 ${
              effectiveShowArtifactStage
                ? 'grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12'
                : 'grid-cols-1 gap-0'
            }`}
          >
            {/* ===================================================================== */}
            {/* CONTENT / STRATEGY COLUMN (OCCUPIES FULL CONTAINER WIDTH DYNAMICALLY) */}
            {/* ===================================================================== */}
            <motion.div
              variants={columnVariants}
              initial="enter"
              animate="center"
              className={`flex flex-col justify-between min-w-0 transition-all duration-300 ${
                effectiveShowArtifactStage
                  ? 'lg:col-span-7 space-y-4 w-full'
                  : 'col-span-1 w-full space-y-5'
              }`}
            >
              <div>
                {/* 1. Monospace Micro-Tag */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className={`font-['Fira_Code'] text-[12px] sm:text-[13px] leading-[16px] font-semibold tracking-[0.08em] uppercase ${
                      coverTheme ? `${coverTheme.tagColor} px-2 py-0.5 rounded` : 'text-[#2563EB]'
                    }`}
                  >
                    <InlineEditable value={slide.tag} path="tag">
                      {monoTag}
                    </InlineEditable>
                  </span>
                </div>

                {/* 2. Display Title */}
                <h1
                  className="font-['Fira_Sans'] text-[30px] sm:text-[38px] lg:text-[44px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-bold tracking-[-0.025em] mb-4 text-[#0F172A]"
                  style={{ textWrap: 'balance' }}
                >
                  <InlineEditable value={slide.slideTitle} path="slideTitle" multiline>
                    {highlightText(slide.slideTitle, searchQuery)}
                  </InlineEditable>
                </h1>

                {/* 3. Narrative Body Text */}
                <p className="font-['Fira_Sans'] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] font-normal text-[#334155] w-full max-w-5xl mb-5 text-left">
                  <InlineEditable value={slide.headline} path="headline" multiline>
                    {highlightText(slide.headline, searchQuery)}
                  </InlineEditable>
                </p>

                {/* Metadata Tags */}
                {slide.metadata && (
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    {slide.metadata.role && (
                      <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-['Fira_Code'] text-[12px] leading-[16px] shadow-2xs font-medium">
                        <span className="text-slate-400 mr-1.5 font-semibold">ROLE:</span>
                        <InlineEditable value={slide.metadata.role} path="metadata.role">
                          {highlightText(slide.metadata.role, searchQuery)}
                        </InlineEditable>
                      </span>
                    )}
                    {slide.metadata.scale && (
                      <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-['Fira_Code'] text-[12px] leading-[16px] shadow-2xs font-medium">
                        <span className="text-slate-400 mr-1.5 font-semibold">SCALE:</span>
                        <InlineEditable value={slide.metadata.scale} path="metadata.scale">
                          {highlightText(slide.metadata.scale, searchQuery)}
                        </InlineEditable>
                      </span>
                    )}
                    {slide.metadata.industries && (
                      <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-['Fira_Code'] text-[12px] leading-[16px] shadow-2xs font-medium">
                        <span className="text-slate-400 mr-1.5 font-semibold">INDUSTRIES:</span>
                        <InlineEditable value={slide.metadata.industries} path="metadata.industries">
                          {highlightText(slide.metadata.industries, searchQuery)}
                        </InlineEditable>
                      </span>
                    )}
                    {slide.metadata.scope && !slide.metadata.industries && (
                      <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-['Fira_Code'] text-[12px] leading-[16px] shadow-2xs font-medium">
                        <span className="text-slate-400 mr-1.5 font-semibold">SCOPE:</span>
                        <InlineEditable value={slide.metadata.scope} path="metadata.scope">
                          {highlightText(slide.metadata.scope, searchQuery)}
                        </InlineEditable>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* 4. High-Impact Metric Numbers */}
              {slide.metrics && slide.metrics.length > 0 && (() => {
                  const hero = slide.metrics.find(m => m.hero); const heroIdx = slide.metrics.indexOf(hero);
                  const rest = slide.metrics.filter(m => !m.hero);
                  return (
                    <div className="mb-5 space-y-4">
                      {hero && (
                        <div className={`${coverTheme ? coverTheme.cardBg : 'bg-white border-slate-200'} border p-6 rounded-xl shadow-2xs transition-colors hover:border-slate-300 min-w-0 text-center`}>
                          <div className={`font-['Fira_Sans'] text-[48px] sm:text-[64px] leading-[54px] sm:leading-[68px] font-extrabold tracking-[-0.04em] ${slide.id === 'slide-04-checkout-overview' || slide.id === 'slide-10-checkout-outcome' || slide.id === 'slide-11-tamil-cover' || hero.green ? 'text-stat-green' : 'text-[#0F172A]'}`}>
                            <InlineEditable value={hero.value} path={`metrics[${heroIdx}].value`}>
                              {highlightText(hero.value, searchQuery)}
                            </InlineEditable>
                          </div>
                          <div className="font-['Fira_Code'] text-[14px] leading-[20px] font-medium text-slate-500 mt-2">
                            <InlineEditable value={hero.label} path={`metrics[${heroIdx}].label`}>
                              {highlightText(hero.label, searchQuery)}
                            </InlineEditable>
                          </div>
                        </div>
                      )}
                      {rest.length > 0 && (
                        <div className={`grid gap-4 ${rest.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : rest.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                          {rest.map((m, idx) => {
                            const getValueClass = (val: string) => {
                              if (val.length > 10) return 'text-[24px] sm:text-[28px] lg:text-[32px] leading-[36px]';
                              if (val.length > 8) return 'text-[30px] sm:text-[36px] lg:text-[40px] leading-[42px]';
                              return 'text-[36px] sm:text-[44px] leading-[44px]';
                            };
                            return (
                              <div
                                key={idx}
                                className={`${coverTheme ? coverTheme.cardBg : 'bg-white border-slate-200'} border p-5 rounded-xl shadow-2xs flex flex-col justify-between transition-colors hover:border-slate-300 min-w-0 text-center`}
                              >
                                <div className={`font-['Fira_Sans'] ${getValueClass(m.value)} font-extrabold tracking-[-0.03em] truncate ${slide.id === 'slide-04-checkout-overview' || slide.id === 'slide-10-checkout-outcome' || slide.id === 'slide-11-tamil-cover' || m.green ? 'text-stat-green' : m.highlight ? 'text-[#0F172A]' : 'text-slate-600'}`} title={m.value}>
                                  <InlineEditable value={m.value} path={`metrics[${slide.metrics.indexOf(m)}].value`}>
                                    {highlightText(m.value, searchQuery)}
                                  </InlineEditable>
                                </div>
                                <div className="font-['Fira_Code'] text-[12px] leading-[18px] font-medium text-slate-500 mt-2.5">
                                  <InlineEditable value={m.label} path={`metrics[${slide.metrics.indexOf(m)}].label`}>
                                    {highlightText(m.label, searchQuery)}
                                  </InlineEditable>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })()}

              {/* 5. Structured Bento Cards for Strategic Insights */}
              {slide.bullets && (
<div
                   className={`gap-4 mb-5 ${
                     slide.bullets.length > 1 && !slide.stackBullets
                       ? 'grid grid-cols-1 lg:grid-cols-2'
                       : 'flex flex-col space-y-4'
                   }`}
                >
                  {slide.bullets.map((bGroup, gIdx) => (
                    <div
                      key={gIdx}
                      className={`${
                        coverTheme ? coverTheme.cardBg : 'bg-white border-slate-200'
                      } border p-6 rounded-xl shadow-2xs space-y-3.5 transition-colors hover:border-slate-300`}
                    >
                      {bGroup.category && (
                        <h2 className="font-['Fira_Sans'] text-[19px] sm:text-[20px] leading-[26px] font-semibold tracking-[-0.01em] text-[#0F172A] flex items-center justify-between border-b border-slate-100 pb-2.5">
                          <span>
                            <InlineEditable value={bGroup.category} path={`bullets[${gIdx}].category`}>
                              {highlightText(bGroup.category, searchQuery)}
                            </InlineEditable>
                          </span>
                        </h2>
                      )}

                      <div
                        className={
                          bGroup.layout === 'grid-2x2'
                            ? 'grid grid-cols-1 md:grid-cols-2 gap-3.5'
                            :                           bGroup.layout === 'numbered-row'
                            ? `grid grid-cols-1 ${bGroup.items.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-3.5`
                            : bGroup.items.length === 3 && slide.bullets.length === 1
                            ? 'grid grid-cols-1 md:grid-cols-3 gap-3.5'
                            : bGroup.items.length === 2 && slide.bullets.length === 1
                            ? 'grid grid-cols-1 md:grid-cols-2 gap-3.5'
                            : 'space-y-3'
                        }
                      >
                        {bGroup.items.map((item, iIdx) => {
                          if (typeof item === 'string') {
                            return (
                              <div
                                key={iIdx}
                                className="flex items-start gap-3.5 text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#334155] font-normal"
                              >
                                <span className="font-['Fira_Code'] text-[13px] font-bold text-[#2563EB] mt-0.5 shrink-0">
                                  0{iIdx + 1}
                                </span>
                                <InlineEditable
                                  value={item}
                                  path={`bullets[${gIdx}].items[${iIdx}]`}
                                  multiline
                                >
                                  {highlightText(item, searchQuery)}
                                </InlineEditable>
                              </div>
                            );
                          }
                           const isLogosOnly =
                             !item.title &&
                             !item.desc &&
                             !(item.list && item.list.length) &&
                             !!item.logos?.length;
                           if (isLogosOnly) {
                             return (
                               <div
                                 key={iIdx}
                                 className="flex flex-wrap items-center gap-2.5 sm:gap-3"
                               >
                                 {item.logos!.map((logo, lIdx) => (
                                   <div
                                     key={lIdx}
                                     title={logo.name}
                                     className="h-[46px] flex items-center justify-center px-3 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                                   >
                                     <img
                                       src={theme === 'dark' && logo.darkSrc ? logo.darkSrc : logo.src}
                                       alt={logo.alt || logo.name}
                                       className="h-[36px] max-h-[36px] w-auto max-w-[120px] object-contain shrink-0"
                                       referrerPolicy="no-referrer"
                                     />
                                   </div>
                                 ))}
                               </div>
                             );
                           }
                           const caseTarget = getCaseStudyTarget(item.title || '', item.desc);
                          const isClickable = Boolean(caseTarget && (onSelectCaseStudy || onJumpToSlide));

                          const handleCardClick = () => {
                            if (!isClickable || !caseTarget) return;
                            if (onSelectCaseStudy) {
                              onSelectCaseStudy(caseTarget.caseId);
                            } else if (onJumpToSlide) {
                              onJumpToSlide(caseTarget.targetIndex);
                            }
                          };

                          return (
                            <div
                              key={iIdx}
                              role={isClickable ? 'button' : undefined}
                              tabIndex={isClickable ? 0 : undefined}
                              onClick={handleCardClick}
                              onKeyDown={(e) => {
                                if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                                  e.preventDefault();
                                  handleCardClick();
                                }
                              }}
                              className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                                isClickable
                                  ? 'bg-white hover:bg-blue-50/50 border-slate-200 hover:border-[#2563EB] shadow-2xs hover:shadow-xs cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]'
                                  : coverTheme
                                  ? `${coverTheme.itemBg} shadow-2xs`
                                  : 'bg-slate-50/70 border-slate-200 shadow-2xs hover:bg-slate-50 hover:border-slate-300'
                              } ${bGroup.layout ? 'relative' : ''}`}
                            >
                              {bGroup.layout && (
                                <span aria-hidden="true" className="grid-index-number">
                                  {iIdx + 1}
                                </span>
                              )}
                              <div className={item.avatar ? 'flex items-start gap-3' : ''}>
                                {item.avatar && (
                                  <img
                                    src={item.avatar}
                                    alt={item.title || 'Endorser'}
                                    className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-200 shadow-2xs"
                                    referrerPolicy="no-referrer"
                                  />
                                )}
                                <div className={item.avatar ? 'flex-1 min-w-0' : ''}>
{item.title && (
  <div className="flex items-center justify-between gap-2 mb-2">
    <div className={`font-['Fira_Sans'] text-[15px] sm:text-[16px] leading-[22px] font-semibold text-[#0F172A] flex items-center gap-2 ${bGroup.layout ? 'pl-4' : ''}`}>
      {!item.avatar && !bGroup.layout && (
        <span
          className={`w-2 h-2 rounded-full shrink-0 ${
            isClickable
              ? 'bg-[#2563EB] group-hover:scale-125 transition-transform'
              : 'bg-[#2563EB]'
          }`}
        />
      )}
      {item.badge && (
        <span className="font-['Fira_Code'] text-[10px] font-bold uppercase tracking-wider text-[#2563EB] bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5 leading-none shrink-0">
          {item.badge}
        </span>
      )}
      <span className={`${isClickable ? 'group-hover:text-[#2563EB] transition-colors' : ''} ${item.titleItalic ? 'italic' : ''}`}>
        <InlineEditable value={item.title ?? ''} path={`bullets[${gIdx}].items[${iIdx}].title`}>
          {renderTitle(item.title ?? '', searchQuery)}
        </InlineEditable>
      </span>
    </div>
    {isClickable && (
      <span className="font-['Fira_Code'] text-[11px] font-semibold text-[#2563EB] flex items-center gap-1 shrink-0 group-hover:translate-x-0.5 transition-transform">
        <span>VIEW CASE</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
    )}
  </div>
)}
{item.desc && (
  <p className={`font-['Fira_Sans'] ${item.avatar ? 'text-[17px] sm:text-[18px] leading-[26px] sm:leading-[28px]' : item.badge ? 'text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] pl-4' : 'text-[13.5px] sm:text-[14px] leading-[21px] sm:leading-[22px] pl-4'} text-[#334155] ${item.italic || bGroup.category === 'Endorsement' || bGroup.category === 'Endorsements' ? 'italic' : ''}`}>
    {item.title === 'Get in Touch' ? (
      <span>
        Yi Wei, Ting · Lead Product Designer · Email:{' '}
        <a
          href="mailto:yw.ting0880@gmail.com"
          className="text-[#2563EB] hover:underline font-medium select-text"
        >
          yw.ting0880@gmail.com
        </a>{' '}
        · Phone:{' '}
        <a
          href="tel:+6597898825"
          className="text-[#2563EB] hover:underline font-medium select-text"
        >
          +65 9789 8825
        </a>{' '}
        · Singapore
      </span>
    ) : (
      <InlineEditable value={item.desc ?? ''} path={`bullets[${gIdx}].items[${iIdx}].desc`} multiline>
        {highlightText(item.desc, searchQuery)}
      </InlineEditable>
    )}
  </p>
)}
                                </div>
                                {item.list && item.list.length > 0 && (
                                  <ol className="mt-2 pl-4 space-y-1.5 list-none">
                                    {item.list.map((listItem, lIdx) => (
                                      <li key={lIdx} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] leading-[21px] sm:leading-[22px] text-[#334155]">
                                        <span className="font-['Fira_Code'] text-[12px] font-bold text-[#2563EB] shrink-0 mt-0.5">
                                          {lIdx + 1}.
                                        </span>
                                        <InlineEditable
                                          value={listItem}
                                          path={`bullets[${gIdx}].items[${iIdx}].list[${lIdx}]`}
                                        >
                                          {highlightText(listItem, searchQuery)}
                                        </InlineEditable>
                                      </li>
                                    ))}
                                  </ol>
                                )}
                                {item.logos && item.logos.length > 0 && (
                                  <div className={`${item.title || item.desc ? 'mt-3 pt-3 border-t border-slate-100' : ''} flex flex-wrap items-center gap-2.5 sm:gap-3`}>
                                    {item.logos.map((logo, lIdx) => (
                                      <div
                                        key={lIdx}
                                        title={logo.name}
                                        className="h-[46px] flex items-center justify-center px-3 py-1 rounded-lg bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                                      >
                                        <img
                                          src={theme === 'dark' && logo.darkSrc ? logo.darkSrc : logo.src}
                                          alt={logo.alt || logo.name}
                                          className="h-[36px] max-h-[36px] w-auto max-w-[120px] object-contain shrink-0"
                                          referrerPolicy="no-referrer"
                                        />
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 6. Strategic Note / Quote */}
              {slide.quote && (
                <div
                  className={`p-5 rounded-r-xl shadow-2xs mb-5 ${
                    coverTheme
                      ? coverTheme.quoteBg
                      : 'bg-blue-50/70 text-blue-950 border-l-4 border-l-[#2563EB]'
                  }`}
                >
                  <div
                    className={`font-['Fira_Code'] text-[11px] sm:text-[12px] leading-[16px] font-semibold tracking-wider uppercase mb-1.5 flex items-center gap-1.5 ${
                      coverTheme ? coverTheme.quoteTitle : 'text-[#2563EB]'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Strategic Synthesis
                  </div>
                  <p className="font-['Fira_Sans'] text-[15px] sm:text-[16px] leading-[24px] italic text-slate-800">
                    <InlineEditable value={slide.quote} path="quote" multiline>
                      {highlightText(slide.quote, searchQuery)}
                    </InlineEditable>
                  </p>
                </div>
              )}
            </motion.div>

            {/* ===================================================================== */}
            {/* RIGHT COLUMN (ARTIFACT STAGE — PRESERVED & DYNAMICALLY TOGGLED)       */}
            {/* ===================================================================== */}
            <motion.div
              variants={columnVariants}
              initial="enter"
              animate="center"
              className={
                effectiveShowArtifactStage
                  ? 'lg:col-span-5 flex flex-col justify-center w-full min-w-0'
                  : 'hidden w-0 h-0 overflow-hidden opacity-0 pointer-events-none'
              }
              aria-hidden={!effectiveShowArtifactStage}
            >
              {/* Layer 1: Clean Artifact Stage Card Surface */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-center items-stretch w-full h-full min-h-[460px] shadow-2xs relative overflow-hidden">
                {/* Layer 2: Visual Artifact Content (Preserved in code) */}
                <SlideVisualRenderer
                  visualType={slide.visualType}
                  onSelectCaseStudy={onSelectCaseStudy}
                  onJumpToSlide={onJumpToSlide}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
