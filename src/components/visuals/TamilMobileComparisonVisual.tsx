import React, { useState } from 'react';
import { Smartphone, ZoomIn, X, Play } from 'lucide-react';

interface ImageDetail {
  id: string;
  src: string;
  fallbackSrcs: string[];
  label: string;
  caption: string;
  badge?: string;
}

export const TamilMobileComparisonVisual: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageDetail | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const beforeData: ImageDetail = {
    id: 'before-mobile',
    src: '/assets/images/image 6.jpg',
    fallbackSrcs: [
      '/assets/images/image 6.jpg',
      '/assets/images/image6.jpg',
      '/assets/images/image6.png',
      '/src/assets/images/image 6.jpg',
    ],
    label: 'LEGACY MOBILE',
    caption: 'Cramped 2-column layout: squished text, truncated Tamil headlines, tiny touch targets.',
  };

  const afterImages: ImageDetail[] = [
    {
      id: 'after-stream',
      src: '/assets/images/image 7.jpg',
      fallbackSrcs: [
        '/assets/images/image 7.jpg',
        '/assets/images/image7.jpg',
        '/assets/images/image7.png',
        '/src/assets/images/image 7.jpg',
      ],
      label: '1-Column Feed',
      caption: 'Fluid 1-column reading stream with varied modular card hierarchy.',
      badge: 'FLUID STREAM',
    },
    {
      id: 'after-video',
      src: '/assets/images/image 8.jpg',
      fallbackSrcs: [
        '/assets/images/image 8.jpg',
        '/assets/images/image8.jpg',
        '/assets/images/image8.png',
        '/src/assets/images/image 8.jpg',
      ],
      label: 'Portrait Video',
      caption: 'Native portrait video format and high-contrast thumb-friendly interactions.',
      badge: '9:16 VERTICAL VIDEO',
    },
  ];

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
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Before vs. After Architecture Showcase
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-['Fira_Code'] text-slate-500">
          <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
            <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
            Click images to enlarge
          </span>
        </div>
      </div>

      {/* Main Grid Split: Before (1 column) vs After (2 columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0 items-stretch">
        {/* ========================================================= */}
        {/* BEFORE SECTION: Legacy Mobile - 4 lg columns              */}
        {/* ========================================================= */}
        <div className="lg:col-span-4 flex flex-col bg-white rounded-xl border border-rose-200 p-3 sm:p-4 shadow-2xs relative">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-rose-100">
            <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-600 uppercase flex items-center gap-1">
              {beforeData.label}
            </span>
          </div>

          {/* iPhone Mockup Frame */}
          <div
            onClick={() => setSelectedImage(beforeData)}
            className="group relative flex-1 bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-300 shadow-sm cursor-pointer min-h-[280px] sm:min-h-[320px] flex flex-col justify-center items-center"
          >
            {imgErrors[beforeData.id] ? (
              /* Fallback CSS Representation if image asset missing */
              <div className="w-full h-full p-3 bg-slate-100 text-slate-800 flex flex-col gap-2 font-['Fira_Sans'] overflow-hidden">
                <div className="bg-rose-950 text-white p-2 rounded text-center text-xs font-bold font-['Fira_Code']">
                  TAMIL MURASU (LEGACY)
                </div>
                <div className="grid grid-cols-2 gap-1.5 flex-1 opacity-80">
                  <div className="bg-white p-1.5 rounded border border-rose-200 text-[9px]">
                    <div className="h-10 bg-slate-200 rounded mb-1"></div>
                    <p className="font-bold text-rose-900 leading-tight truncate">சிங்கப்பூர் தமிழ் செய்தி...</p>
                    <p className="text-[8px] text-slate-500 line-clamp-2">உள்ளூர் செய்திகள் மற்றும்...</p>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-rose-200 text-[9px]">
                    <div className="h-10 bg-slate-200 rounded mb-1"></div>
                    <p className="font-bold text-rose-900 leading-tight truncate">வர்த்தக செய்திகள்...</p>
                    <p className="text-[8px] text-slate-500 line-clamp-2">பொருளாதார வளர்ச்சி குறித்து...</p>
                  </div>
                </div>
                <div className="text-[10px] text-rose-700 font-['Fira_Code'] font-semibold bg-rose-50 p-1.5 rounded border border-rose-200 text-center">
                  ⚠️ Cramped 2-column mobile layout
                </div>
              </div>
            ) : (
              <img
                src={beforeData.src}
                alt={beforeData.caption}
                referrerPolicy="no-referrer"
                onError={(e) => handleImageError(beforeData.id, beforeData.src, beforeData.fallbackSrcs, e)}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            )}

            {/* Hover overlay button */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-['Fira_Code'] text-xs font-semibold">
              <ZoomIn className="w-4 h-4 text-white" />
              <span>Enlarge View</span>
            </div>
          </div>

          <p className="mt-2.5 text-[11px] text-slate-600 leading-snug font-['Fira_Sans'] bg-rose-50/70 p-2 rounded-lg border border-rose-100">
            {beforeData.caption}
          </p>
        </div>

        {/* ========================================================= */}
        {/* AFTER SECTION: Redesigned Mobile - 8 lg cols              */}
        {/* ========================================================= */}
        <div className="lg:col-span-8 flex flex-col bg-white rounded-xl border border-emerald-300 p-3 sm:p-4 shadow-2xs relative">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-emerald-100">
            <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-800 uppercase flex items-center gap-1">
              REDESIGNED MOBILE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 min-h-0">
            {afterImages.map((img) => (
              <div key={img.id} className="flex flex-col justify-between">
                {/* Image Card */}
                <div
                  onClick={() => setSelectedImage(img)}
                  className="group relative flex-1 bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-300 shadow-sm cursor-pointer min-h-[260px] sm:min-h-[290px] flex flex-col justify-center items-center"
                >
                  {imgErrors[img.id] ? (
                    /* Fallback CSS Representation if image asset missing */
                    <div className="w-full h-full p-3 bg-slate-900 text-slate-100 flex flex-col justify-between font-['Fira_Sans'] overflow-hidden">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="font-bold text-xs text-blue-400 font-['Fira_Code']">TAMIL MURASU</span>
                        <span className="text-[10px] text-emerald-400 font-['Fira_Code']">{img.badge}</span>
                      </div>
                      <div className="p-2 bg-slate-800/90 rounded border border-slate-700 space-y-1.5">
                        <p className="font-mukta text-sm text-white font-bold leading-relaxed" style={{ fontFamily: "'Mukta Malar', sans-serif" }}>
                          சிங்கப்பூர் தமிழ் சமூகத்தின் டிஜிட்டல் மாற்றம்
                        </p>
                        <p className="text-[10px] text-slate-300 leading-normal line-clamp-2">
                          மாணவர்களின் கல்வி சாதனைகள் மற்றும் உள்ளூர் சமூக தலைவர்களின் சிறப்பு நேர்காணல்.
                        </p>
                      </div>
                      {img.id === 'after-video' && (
                        <div className="bg-emerald-950/80 p-2 rounded border border-emerald-600/50 flex items-center gap-2 text-emerald-300 text-[10px] font-['Fira_Code']">
                          <Play className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400" />
                          <span>Native 9:16 Vertical Video Player</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <img
                      src={img.src}
                      alt={img.caption}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(img.id, img.src, img.fallbackSrcs, e)}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 text-white text-[10px] font-['Fira_Code'] font-semibold backdrop-blur-xs border border-white/20">
                    {img.badge}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-['Fira_Code'] text-xs font-semibold">
                    <ZoomIn className="w-4 h-4 text-white" />
                    <span>Enlarge View</span>
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-slate-700 leading-snug font-['Fira_Sans'] bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
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
            className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 flex flex-col gap-4 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
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

            <div className="rounded-xl overflow-y-auto bg-slate-950 border border-slate-300 flex justify-center items-start max-h-[60vh] sm:max-h-[65vh] w-full p-3">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                referrerPolicy="no-referrer"
                className="max-w-[300px] sm:max-w-[360px] w-full h-auto block object-top shrink-0"
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
