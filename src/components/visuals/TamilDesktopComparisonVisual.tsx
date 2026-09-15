import React, { useState } from 'react';
import { Monitor, ZoomIn, X, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ImageDetail {
  id: string;
  src: string;
  fallbackSrcs: string[];
  label: string;
  caption: string;
  badge: string;
  badgeType: 'friction' | 'success';
}

export const TamilDesktopComparisonVisual: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageDetail | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const legacyDesktop: ImageDetail = {
    id: 'legacy-desktop',
    src: '/assets/images/image10.png',
    fallbackSrcs: [
      '/assets/images/image10.png',
      '/assets/images/image10.jpg',
      '/assets/images/image 10.jpg',
      'assets/images/image10.png',
      '/src/assets/images/image 10.jpg',
    ],
    label: 'LEGACY DESKTOP (2017)',
    caption: 'Rigid 3-column text dump. Identical card structures with zero functional utility or media variation.',
    badge: 'MONOTONOUS NEWS CLUTTER',
    badgeType: 'friction',
  };

  const modernDesktop: ImageDetail = {
    id: 'redesigned-desktop',
    src: '/assets/images/image9.png',
    fallbackSrcs: [
      '/assets/images/image9.png',
      '/assets/images/image9.jpg',
      '/assets/images/image 9.jpg',
      'assets/images/image9.png',
      '/src/assets/images/image 9.jpg',
    ],
    label: 'REDESIGNED DESKTOP HUB',
    caption: 'Asymmetrical 70/30 grid: Video carousel on left, live Gold & FX remittance rates (SGD/INR) on right rail.',
    badge: '70/30 UTILITY & MEDIA DIVERSITY',
    badgeType: 'success',
  };

  const handleImageError = (id: string, currentSrc: string, fallbacks: string[], e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = e.currentTarget;
    const currentIndex = fallbacks.indexOf(currentSrc);
    if (currentIndex >= 0 && currentIndex < fallbacks.length - 1) {
      imgElement.src = fallbacks[currentIndex + 1];
    } else {
      setImgErrors((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs font-['Fira_Sans'] text-slate-900 justify-between gap-4 select-text">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
            <Monitor className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Legacy Broadsheet Clutter vs. 70/30 Daily Utility Hub
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-['Fira_Code'] text-slate-500">
          <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
            <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
            Click screenshot to enlarge
          </span>
        </div>
      </div>

      {/* Main Side-by-Side Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0 items-stretch">
        {/* ========================================================= */}
        {/* LEGACY DESKTOP (LEFT COLUMN)                              */}
        {/* ========================================================= */}
        <div className="flex flex-col bg-white rounded-xl border border-rose-200 p-3 sm:p-4 shadow-2xs relative">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-rose-100">
            <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-600 uppercase flex items-center gap-1">
              {legacyDesktop.label}
            </span>
            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-[10px] font-['Fira_Code'] font-bold flex items-center gap-1 border border-rose-200">
              <AlertTriangle className="w-3 h-3 text-rose-600" />
              {legacyDesktop.badge}
            </span>
          </div>

          {/* Desktop Window Frame */}
          <div
            onClick={() => setSelectedImage(legacyDesktop)}
            className="group relative flex-1 bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-300 shadow-sm cursor-pointer min-h-[260px] sm:min-h-[300px] flex flex-col justify-start"
          >
            {/* Top Browser Bar Header */}
            <div className="bg-slate-800 px-3 py-1.5 flex items-center gap-2 border-b border-slate-700 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="bg-slate-900/80 px-2.5 py-0.5 rounded text-[10px] text-slate-400 font-['Fira_Code'] truncate flex-1 max-w-[200px] border border-slate-700/60">
                archive.tamilmurasu.com.sg (2017)
              </div>
            </div>

            {/* Browser Content */}
            <div className="relative flex-1 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
              {imgErrors[legacyDesktop.id] ? (
                <div className="w-full h-full p-4 bg-slate-100 text-slate-800 flex flex-col gap-2 font-['Fira_Sans'] overflow-hidden">
                  <div className="bg-slate-900 text-white p-2 rounded text-center text-xs font-bold font-['Fira_Code']">
                    TAMIL MURASU LEGACY DESKTOP
                  </div>
                  <div className="grid grid-cols-3 gap-2 flex-1 opacity-80">
                    <div className="bg-white p-2 rounded border border-rose-200 text-[9px]">
                      <div className="h-12 bg-slate-200 rounded mb-1"></div>
                      <p className="font-bold text-rose-900 leading-tight">செய்தித் தலைப்பு 1...</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-rose-200 text-[9px]">
                      <div className="h-12 bg-slate-200 rounded mb-1"></div>
                      <p className="font-bold text-rose-900 leading-tight">செய்தித் தலைப்பு 2...</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-rose-200 text-[9px]">
                      <div className="h-12 bg-slate-200 rounded mb-1"></div>
                      <p className="font-bold text-rose-900 leading-tight">செய்தித் தலைப்பு 3...</p>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={legacyDesktop.src}
                  alt={legacyDesktop.caption}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(legacyDesktop.id, legacyDesktop.src, legacyDesktop.fallbackSrcs, e)}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-['Fira_Code'] text-xs font-semibold">
                <ZoomIn className="w-4 h-4 text-white" />
                <span>Enlarge Full Specimen</span>
              </div>
            </div>
          </div>

          <p className="mt-2.5 text-[11px] text-slate-600 leading-snug font-['Fira_Sans'] bg-rose-50/70 p-2 rounded-lg border border-rose-100">
            {legacyDesktop.caption}
          </p>
        </div>

        {/* ========================================================= */}
        {/* REDESIGNED DESKTOP (RIGHT COLUMN)                         */}
        {/* ========================================================= */}
        <div className="flex flex-col bg-white rounded-xl border border-emerald-300 p-3 sm:p-4 shadow-2xs relative">
          <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-emerald-100">
            <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-800 uppercase flex items-center gap-1">
              {modernDesktop.label}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-['Fira_Code'] font-bold flex items-center gap-1 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              {modernDesktop.badge}
            </span>
          </div>

          {/* Desktop Window Frame */}
          <div
            onClick={() => setSelectedImage(modernDesktop)}
            className="group relative flex-1 bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-300 shadow-sm cursor-pointer min-h-[260px] sm:min-h-[300px] flex flex-col justify-start"
          >
            {/* Top Browser Bar Header */}
            <div className="bg-slate-800 px-3 py-1.5 flex items-center gap-2 border-b border-slate-700 shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="bg-slate-900/80 px-2.5 py-0.5 rounded text-[10px] text-slate-300 font-['Fira_Code'] truncate flex-1 max-w-[220px] border border-slate-700/60 flex items-center gap-1">
                <span className="text-emerald-400">https://</span>
                <span>tamilmurasu.com.sg</span>
              </div>
            </div>

            {/* Browser Content */}
            <div className="relative flex-1 bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
              {imgErrors[modernDesktop.id] ? (
                <div className="w-full h-full p-4 bg-slate-900 text-slate-100 flex flex-col justify-between font-['Fira_Sans'] overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold text-xs text-blue-400 font-['Fira_Code']">TAMIL MURASU DESKTOP</span>
                    <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">70/30 UTILITY GRID</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 flex-1 my-2">
                    <div className="col-span-8 bg-slate-800 p-2 rounded border border-slate-700 space-y-2">
                      <p className="text-xs font-bold text-white">70% Editorial Stream & Video Carousel</p>
                    </div>
                    <div className="col-span-4 bg-emerald-950/70 p-2 rounded border border-emerald-700 space-y-1">
                      <p className="text-[10px] font-bold text-emerald-300 font-['Fira_Code']">30% DAILY UTILITY HUB</p>
                      <p className="text-[9px] text-slate-300">Live Gold Rate (தங்க விலை)</p>
                      <p className="text-[9px] text-slate-300">FX Remittance (SGD/INR)</p>
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={modernDesktop.src}
                  alt={modernDesktop.caption}
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(modernDesktop.id, modernDesktop.src, modernDesktop.fallbackSrcs, e)}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-['Fira_Code'] text-xs font-semibold">
                <ZoomIn className="w-4 h-4 text-white" />
                <span>Enlarge Full Specimen</span>
              </div>
            </div>
          </div>

          <p className="mt-2.5 text-[11px] text-slate-700 leading-snug font-['Fira_Sans'] bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
            {modernDesktop.caption}
          </p>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full p-4 sm:p-6 flex flex-col gap-4 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 shrink-0">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {selectedImage.label}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-y-auto bg-slate-950 border border-slate-300 flex justify-center items-start max-h-[60vh] sm:max-h-[65vh] w-full p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                referrerPolicy="no-referrer"
                className="w-full max-w-full h-auto block object-top shrink-0"
              />
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 shrink-0">
              <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-500 uppercase block mb-1">
                EXECUTIVE CAPTION & ARCHITECTURAL NOTE:
              </span>
              <p className="text-slate-800 text-xs sm:text-sm font-['Fira_Sans'] leading-relaxed">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
