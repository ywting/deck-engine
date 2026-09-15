import React from 'react';
import { Newspaper, ArrowRight, Heart, Users, Sparkles, CheckCircle2, ShieldCheck, Globe, Building2, Compass, Layers } from 'lucide-react';

export const CaseCoverVisualTamilMurasu: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans'] bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 p-4 sm:p-5 rounded-xl border border-amber-200 shadow-2xs">
      {/* Top Meta Header */}
      <div className="flex items-center justify-between pb-3 border-b border-amber-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
          <span className="text-[11px] font-['Fira_Code'] font-bold text-amber-800 uppercase tracking-wider">
            CASE STUDY 03 // ORGANISATIONAL TRANSFORMATION
          </span>
        </div>
        <span className="text-[11px] font-['Fira_Code'] text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">
          The SPH Proving Ground
        </span>
      </div>

      {/* Hero Body */}
      <div className="my-auto py-3 space-y-4">
        {/* Title & Core Framing */}
        <div className="bg-amber-50/90 border border-amber-300 rounded-xl p-4.5 shadow-2xs">
          <div className="flex items-center gap-2 text-amber-800 font-['Fira_Code'] text-[11px] font-bold uppercase mb-1">
            <Building2 className="w-4 h-4 text-amber-700" />
            <span>Singapore Press Holdings (SPH) · Editorial, Product, Engineering</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight mb-2">
            Digitalising Tamil Murasu
          </h2>
          <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#334155]">
            How a 90-year-old newspaper became the proving ground for product-led transformation at SPH. Slashing Facebook dependency from <strong>90% to 2.6%</strong>, delivering <strong>3x MAU growth</strong>, and establishing the enterprise blueprint for newsroom modernisation.
          </p>
        </div>

        {/* 3 Core Transformation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {/* Pillar 1 */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 shadow-2xs hover:border-amber-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-slate-500">Pillar 1</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">Discovery</span>
            </div>
            <div className="text-[12.5px] font-bold text-[#0F172A] mb-1">In-Group Cultural Identity</div>
            <p className="text-[11px] leading-relaxed text-slate-600">
              Field discovery in Little India shifting content from commodity wire reports to hyperlocal utility and community pride.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 shadow-2xs hover:border-amber-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-slate-500">Pillar 2</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">90% → 2.6%</span>
            </div>
            <div className="text-[12.5px] font-bold text-[#0F172A] mb-1">Owned Chat &amp; PWA Moat</div>
            <p className="text-[11px] leading-relaxed text-slate-600">
              Bypassing algorithm volatility with WhatsApp/Telegram daily feeds and an instant lightweight Progressive Web App.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="border border-amber-300 rounded-xl p-3 shadow-2xs bg-amber-50/40 hover:border-amber-400 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-amber-800">Pillar 3</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">3x MAU</span>
            </div>
            <div className="text-[12.5px] font-bold text-amber-950 mb-1">The Enterprise Blueprint</div>
            <p className="text-[11px] leading-relaxed text-slate-700">
              Scorecard presented to SPH executive leadership, unlocking product-led newsroom transformation across flagship titles.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Key Badges */}
      <div className="pt-3 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-2 text-[11.5px] text-slate-600">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-['Fira_Code'] text-slate-700 font-semibold">
            <Compass className="w-3.5 h-3.5 text-amber-600" /> Perimeter Lighthouse Strategy
          </span>
          <span className="flex items-center gap-1 font-['Fira_Code'] text-slate-700 font-semibold">
            <Layers className="w-3.5 h-3.5 text-amber-600" /> Scaled SPH Newsroom Impact
          </span>
        </div>
        <span className="font-['Fira_Code'] text-[11px] font-bold text-amber-800 flex items-center gap-1">
          Case 03 · 8 Comprehensive Slides
        </span>
      </div>
    </div>
  );
};
