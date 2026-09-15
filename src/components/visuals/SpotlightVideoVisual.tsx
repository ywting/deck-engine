import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Expand } from 'lucide-react';
import spotlightVideo from '../../assets/videos/where-it-stands-today.webm';

export const SpotlightVideoVisual: React.FC = () => {
  const [lightbox, setLightbox] = useState<boolean>(false);
  const [lbVisible, setLbVisible] = useState<boolean>(false);
  const lbTimer = useRef<number | null>(null);

  const openLightbox = () => {
    if (lbTimer.current) {
      window.clearTimeout(lbTimer.current);
      lbTimer.current = null;
    }
    setLightbox(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setLbVisible(true)));
  };
  const closeLightbox = () => {
    setLbVisible(false);
    if (lbTimer.current) window.clearTimeout(lbTimer.current);
    lbTimer.current = window.setTimeout(() => {
      setLightbox(false);
      lbTimer.current = null;
    }, 300);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      e.stopPropagation();
    };
    window.addEventListener('keydown', onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey, true);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  useEffect(() => {
    return () => {
      if (lbTimer.current) window.clearTimeout(lbTimer.current);
    };
  }, []);

  return (
    <div className="w-full font-['Fira_Sans']">
      <button
        onClick={() => openLightbox()}
        className="relative block w-full cursor-zoom-in group/vid text-left bg-transparent"
        aria-label="Expand end-to-end flow video"
      >
        <span className="block bg-black p-2 sm:p-2.5 rounded-2xl transition group-hover/vid:brightness-95 group-hover/vid:ring-2 group-hover/vid:ring-blue-500/40">
          <video
            src={spotlightVideo}
            className="block h-auto max-h-[62vh] w-auto max-w-full object-contain mx-auto rounded-lg pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          />
        </span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/vid:opacity-100 transition-opacity pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-[11px] font-semibold flex items-center gap-1.5">
            <Expand className="w-3.5 h-3.5" />
            Click to expand
          </span>
        </span>
      </button>

      {lightbox ? (
        createPortal(
          <div
            className={`fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 transition-opacity duration-300 ease-out ${
              lbVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => closeLightbox()}
            role="dialog"
            aria-modal="true"
            aria-label="End-to-end flow video expanded view"
          >
            <button
              onClick={() => closeLightbox()}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close expanded view"
            >
              <X className="w-4 h-4" />
            </button>
            <div
              className={`transition-all duration-300 ease-out ${
                lbVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={spotlightVideo}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl border border-slate-700 shadow-2xl"
                controls
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="mt-3 text-center text-[12px] font-['Fira_Code'] text-slate-300">
                Putting them all together — end-to-end flow
              </div>
            </div>
          </div>,
          document.body
        )
      ) : null}
    </div>
  );
};
