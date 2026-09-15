import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Globe, X, Expand, Smartphone } from 'lucide-react';
import legacyScreenshot from '../../assets/images/codashop_mlbb_legacy_screenshot.jpg';

interface Annotation {
  id: number;
  x: number; // % from left of the screenshot
  y: number; // % from top of the screenshot
  title: string;
  body: string;
}

const ANNOTATIONS: Annotation[] = [
  {
    id: 1,
    x: 76,
    y: 15.5,
    title: 'Zero state memory',
    body: 'Returning gamers re-enter complex 10+ digit Gamer IDs and Zone IDs on every visit. Nothing is remembered, even for same-item monthly repeats.',
  },
  {
    id: 2,
    x: 50,
    y: 33,
    title: 'No prices on pack cards',
    body: 'Diamond pack cards show pack sizes and bonuses but no prices. Gamers cannot tell how much each pack costs without scrolling further to find pricing.',
  },
  {
    id: 3,
    x: 50,
    y: 60,
    title: 'No progressive guidance',
    body: 'Gamers may not realise they have to keep scrolling down the page to advance the checkout flow. There is no indication of what to do next once a step is completed.',
  },
];

export const CheckoutSideBySideVisual: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeAnnotation, setActiveAnnotation] = useState<number>(1);
  const markerRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Calm open/close: mount first, then fade in; fade out first, then unmount.
  const openModal = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsExpanded(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
  };
  const closeModal = () => {
    setIsVisible(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setIsExpanded(false);
      closeTimer.current = null;
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  // While expanded: close on Escape, lock background scroll, and keep deck
  // keyboard/touch navigation from firing behind the modal.
  useEffect(() => {
    if (!isExpanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      e.stopPropagation();
    };
    window.addEventListener('keydown', onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey, true);
      document.body.style.overflow = prevOverflow;
    };
  }, [isExpanded]);

  const stopTouch = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  // Selecting an annotation scrolls this modal's own scroll container so the
  // marker is anchored in view. Markers are absolutely positioned over the
  // image, so they stay stuck to their anchor point. Only this container
  // scrolls — the window never moves, so the deck FAB never appears.
  const selectAnnotation = (id: number) => {
    setActiveAnnotation(id);
    requestAnimationFrame(() => {
      const marker = markerRefs.current[id];
      const scroller = scrollRef.current;
      if (marker && scroller) {
        const target = marker.offsetTop - scroller.clientHeight / 2 + marker.clientHeight / 2;
        scroller.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
      }
    });
  };

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-[#E11927]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Legacy Layout
          </span>
        </div>
      </div>

      {/* Cropped preview in browser chrome — click to expand */}
      <div className="flex-1 min-h-0 flex flex-col rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
        {/* Browser Chrome */}
        <div className="bg-slate-800 px-3 py-2 flex items-center justify-between border-b border-slate-700 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-2.5 py-1 bg-slate-900 rounded-md border border-slate-700 text-[10px] text-slate-300 font-['Fira_Code'] flex items-center gap-1.5 max-w-[260px] truncate">
              <Globe className="w-3 h-3 text-blue-400 shrink-0" />
              <span className="truncate">https://www.codashop.com.sg/mobile-legends</span>
            </div>
          </div>
        </div>
        {/* Cropped Preview — hard max height, never shows the full image */}
        <button
          onClick={() => openModal()}
          className="relative block w-full flex-1 min-h-[240px] max-h-[300px] sm:max-h-[340px] overflow-hidden cursor-zoom-in group text-left"
          aria-label="Expand legacy checkout screenshot"
        >
          <img
            src={legacyScreenshot}
            alt="Codashop Mobile Legends: Bang Bang legacy single-page checkout"
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <span className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-[11px] font-semibold flex items-center gap-1.5">
              <Expand className="w-3.5 h-3.5" />
              Click to expand
            </span>
          </span>
        </button>
        {/* Expand link */}
        <div className="px-3 py-2 flex justify-center border-t border-slate-800 shrink-0">
          <button
            onClick={() => openModal()}
            className="flex items-center gap-1.5 text-[11px] font-['Fira_Code'] font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            <span className="material-symbols text-[16px] leading-none">expand_content</span>
            <span className="underline underline-offset-2">Expand image to see core pain points</span>
          </button>
        </div>
      </div>

      {/* Expanded Lightbox with annotations — portalled to document.body so
          motion/filter ancestors can't hijack its fixed positioning */}
      {isExpanded
        ? createPortal(
          <div
            className={`fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex flex-col overflow-hidden min-h-[80vh] transition-opacity duration-300 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => closeModal()}
          onTouchStart={stopTouch}
          onTouchMove={stopTouch}
          onTouchEnd={stopTouch}
          role="dialog"
          aria-modal="true"
          aria-label="Legacy checkout screenshot expanded view"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 shrink-0">
            <div className="px-3 py-1 bg-slate-900 rounded-md border border-slate-700 text-xs text-slate-300 font-['Fira_Code'] flex items-center gap-2 max-w-[70%] truncate">
              <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span className="truncate">https://www.codashop.com.sg/mobile-legends</span>
            </div>
            <button
              onClick={() => closeModal()}
              className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close expanded view"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* The single vertical scroll container for the whole lightbox body */}
          <div
            ref={scrollRef}
            className="flex-1 min-h-0 overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`p-4 sm:p-6 flex flex-col lg:flex-row items-start justify-center gap-5 transition-all duration-300 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
            }`}>
              {/* Annotated screenshot — markers stay anchored to the image */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0 shrink-0">
                <img
                  src={legacyScreenshot}
                  alt="Codashop Mobile Legends: Bang Bang legacy single-page checkout — full view"
                  className="w-full h-auto rounded-xl border border-slate-700 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                {ANNOTATIONS.map((a) => (
                  <button
                    key={a.id}
                    ref={(el) => {
                      markerRefs.current[a.id] = el;
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectAnnotation(a.id);
                    }}
                    className={`absolute w-7 h-7 -ml-3.5 -mt-3.5 rounded-full font-['Fira_Code'] text-[12px] font-bold flex items-center justify-center border-2 transition-all cursor-pointer ${
                      activeAnnotation === a.id
                        ? 'bg-[#E11927] text-white border-white scale-125 shadow-xl z-10'
                        : 'bg-[#E11927]/90 text-white border-white/70 hover:scale-110'
                    }`}
                    style={{ left: `${a.x}%`, top: `${a.y}%` }}
                    aria-label={`Annotation ${a.id}: ${a.title}`}
                  >
                    {a.id}
                  </button>
                ))}
              </div>
              {/* Sticky annotation legend — stays pinned while the image scrolls */}
              <div className="w-full max-w-md mx-auto lg:mx-0 lg:w-80 shrink-0 lg:sticky lg:top-6">
                <div className="flex flex-col gap-2.5">
                  <div className="text-[11px] font-['Fira_Code'] font-bold uppercase tracking-wider text-slate-400">
                    3 issues with the old design
                  </div>
                  {ANNOTATIONS.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => selectAnnotation(a.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeAnnotation === a.id
                          ? 'bg-slate-800 border-red-500/60 shadow-lg'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`w-5 h-5 rounded-full font-['Fira_Code'] text-[11px] font-bold flex items-center justify-center shrink-0 ${
                            activeAnnotation === a.id ? 'bg-[#E11927] text-white' : 'bg-slate-700 text-slate-300'
                          }`}
                        >
                          {a.id}
                        </span>
                        <span className="text-[13px] font-bold text-white">{a.title}</span>
                      </div>
                      <p className="text-[12px] leading-relaxed text-slate-300">{a.body}</p>
                    </button>
                  ))}
                  <div className="text-[10px] font-['Fira_Code'] text-slate-500 px-1">
                    codashop.com.sg • Mobile View • 1,046px Vertical Scroll
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      ) : null}
    </div>
  );
};
