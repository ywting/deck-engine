import React from 'react';
import { CreditCard, ArrowRight, ShieldCheck, CheckCircle2, Layers, Globe, Sparkles, TrendingUp } from 'lucide-react';

export const CaseCoverVisualCheckout: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans'] bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/40 p-4 sm:p-5 rounded-xl border border-emerald-200 shadow-2xs">
      {/* Top Meta Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-[11px] font-['Fira_Code'] font-bold text-emerald-800 uppercase tracking-wider">
            CASE STUDY 01 // COMMERCIAL FINTECH TRANSFORMATION
          </span>
        </div>
        <span className="text-[11px] font-['Fira_Code'] text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
          36-Month Strategic Timeline
        </span>
      </div>

      {/* Hero Body */}
      <div className="my-auto py-3 space-y-4">
        {/* Title & Core Framing */}
        <div className="bg-emerald-50/90 border border-emerald-300 rounded-xl p-4.5 shadow-2xs">
          <div className="flex items-center gap-2 text-emerald-800 font-['Fira_Code'] text-[11px] font-bold uppercase mb-1">
            <CreditCard className="w-4 h-4 text-emerald-700" />
            <span>Coda Payments • Global Top-Up Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight mb-2">
            Redesigning the Coda Consumer Checkout Flow
          </h2>
          <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#334155]">
            How I demonstrated design leadership and influence to shape commercial and user-centricity outcomes. Transitioning a high-risk legacy monolith into a stepped checkout unlocking <strong>~25% Coda's B2B TPV</strong> and <strong>+20% cumulative conversion</strong>.
          </p>
        </div>

        {/* 3-Year Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {/* Year 1 */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 shadow-2xs hover:border-emerald-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-slate-500">Year 1</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">+1.17% Lift</span>
            </div>
            <div className="text-[13px] font-bold text-[#0F172A] mb-1">Squeeze the Monolith</div>
            <p className="text-[11.5px] leading-relaxed text-slate-600">
              Optimise single-page layout without API changes to build statistical trust and establish baseline principles.
            </p>
          </div>

          {/* Year 2 */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 shadow-2xs hover:border-emerald-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-slate-500">Year 2</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">+3.4% Lift</span>
            </div>
            <div className="text-[13px] font-bold text-[#0F172A] mb-1">The Stepped Drawer</div>
            <p className="text-[11.5px] leading-relaxed text-slate-600">
              Introduce modular bottom sheets and dynamic pricing while keeping backend monolithic payloads intact.
            </p>
          </div>

          {/* Year 3 */}
          <div className="border border-emerald-300 rounded-xl p-3 shadow-2xs bg-emerald-50/40 hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-emerald-800">Year 3</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">+20% & ~25% B2B TPV</span>
            </div>
            <div className="text-[13px] font-bold text-emerald-950 mb-1">Multi-Brand Token Engine</div>
            <p className="text-[11.5px] leading-relaxed text-slate-700">
              Unleash enterprise white-label storefronts for Activision (COD:M), EA Sports, and KONAMI.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Key Badges */}
      <div className="pt-3 border-t border-emerald-200/80 flex flex-wrap items-center justify-between gap-2 text-[11.5px] text-slate-600">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-['Fira_Code'] text-slate-700 font-semibold">
            <Globe className="w-3.5 h-3.5 text-emerald-600" /> 60+ Global Markets
          </span>
          <span className="flex items-center gap-1 font-['Fira_Code'] text-slate-700 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Tier-1 Enterprise Delivery
          </span>
        </div>
        <span className="font-['Fira_Code'] text-[11px] font-bold text-emerald-800 flex items-center gap-1">
          Case 01 • 8 Comprehensive Slides
        </span>
      </div>
    </div>
  );
};
