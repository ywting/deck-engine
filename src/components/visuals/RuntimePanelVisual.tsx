import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Cpu, MonitorPlay, Expand, X } from 'lucide-react';
import asyncCommentsVideo from '../../assets/videos/slide22-async-comments.webm';
import dynamicHandoffVideo from '../../assets/videos/slide22-dynamic-handoff.webm';
import telemetryVideo from '../../assets/videos/slide22-telemetry.webm';
import featureFlagsVideo from '../../assets/videos/slide22-feature-flags.webm';

interface PanelItem {
  id: string;
  index: string;
  name: string;
  detail: string;
  video?: string;
}

const ITEMS: PanelItem[] = [
  {
    id: 'pinpoint-feedback',
    index: '01',
    name: 'Async persistent commenting system',
    detail:
      'Contextual, element-level comments pinned directly onto live UI elements and synced in real time to Supabase.',
    video: asyncCommentsVideo,
  },
  {
    id: 'handoff-specs',
    index: '02',
    name: 'Dynamic Handoff Specs',
    detail:
      'Interactive state matrices (hover, focus, loading, error) with inspectable props and animation choreography.',
    video: dynamicHandoffVideo,
  },
  {
    id: 'telemetry',
    index: '03',
    name: 'Deep Behavioural Telemetry',
    detail:
      'Runtime click streams, scroll-depth reach, dead-click alerts, and rage-click tracking to evaluate real UX friction.',
    video: telemetryVideo,
  },
  {
    id: 'feature-flags',
    index: '04',
    name: 'Zero-Branch Feature Flags',
    detail:
      'In-app control panel and URL overrides (?theme=, ?flow=) to test competing UX hypotheses in a single codebase.',
    video: featureFlagsVideo,
  },
];

export const RuntimePanelVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(ITEMS[0].id);
  const active = ITEMS.find((i) => i.id === activeId) ?? ITEMS[0];

  const [lightbox, setLightbox] = useState<boolean>(false);
  const [lbVisible, setLbVisible] = useState<boolean>(false);
  const lbTimer = useRef<number | null>(null);

  const openLightbox = () => {
    if (!active.video) return;
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
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#1D4ED8]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Runtime Platform · 4 Capabilities
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 items-start">
        {/* Left (2/5): capability cards */}
        <div className="lg:col-span-2 flex flex-col gap-2 min-w-0">
          {ITEMS.map((item) => {
            const selected = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  selected
                    ? 'bg-white border-[#1D4ED8] ring-2 ring-blue-100 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`font-['Fira_Code'] text-[13px] font-extrabold ${
                      selected ? 'text-[#1D4ED8]' : 'text-slate-400'
                    }`}
                  >
                    {item.index}
                  </span>
                  <span className="text-[13px] font-bold text-[#0A2540]">{item.name}</span>
                </div>
                <p className="text-[12px] leading-[18px] text-slate-600">{item.detail}</p>
              </button>
            );
          })}
        </div>

        {/* Right (3/5): interactive video panel */}
        <div className="lg:col-span-3 rounded-xl bg-white border border-slate-200 p-4 shadow-2xs min-w-0">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E11927] animate-pulse" aria-hidden="true" />
            <span className="text-[12px] font-bold text-[#0A2540]">
              {active.index} · {active.name}
            </span>
          </div>
          {active.video ? (
            <button
              onClick={openLightbox}
              className="relative block w-full cursor-zoom-in group/vid text-left"
              aria-label={`Expand ${active.name} recording`}
            >
              <span className="block bg-black p-2 rounded-2xl transition group-hover/vid:ring-2 group-hover/vid:ring-blue-500/40">
                <video
                  key={active.id}
                  src={active.video}
                  className="block w-full h-auto max-h-[52vh] object-contain rounded-lg pointer-events-none"
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
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/70 aspect-video flex flex-col items-center justify-center gap-2 p-6 text-center">
              <MonitorPlay className="w-8 h-8 text-slate-300" />
              <div className="text-[13px] font-bold text-slate-500">{active.name}</div>
              <div className="text-[11px] font-['Fira_Code'] text-slate-400">
                Recording slot ready — wire clip to enable playback
              </div>
            </div>
          )}
          <p className="mt-2.5 text-[13px] leading-[20px] text-slate-600">{active.detail}</p>
        </div>
      </div>

      {lightbox && active.video
        ? createPortal(
            <div
              className={`fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 transition-opacity duration-300 ease-out ${
                lbVisible ? 'opacity-100' : 'opacity-0'
              }`}
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label={`${active.name} expanded view`}
            >
              <button
                onClick={closeLightbox}
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
                  src={active.video}
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl border border-slate-700 shadow-2xl"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="mt-3 text-center text-[12px] font-['Fira_Code'] text-slate-300">
                  {active.name} — live runtime capture
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
};
