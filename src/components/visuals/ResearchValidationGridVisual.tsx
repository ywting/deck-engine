import React from 'react';
import { SearchCheck, Lightbulb, FlaskConical, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ResearchValidationGridVisual: React.FC = () => {
  const benchmarks = ['Shopify', 'Steam', 'Epic Games', 'Stripe'];

  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans']">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <SearchCheck className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-['Fira_Code']">
            Discovery & Hypothesis Validation
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
          Evidence-Led
        </span>
      </div>

      {/* Two Card Validation Grid */}
      <div className="grid grid-cols-1 gap-3 my-3 flex-1">
        {/* Top Card: Heuristic & Competitive Audit */}
        <div className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Heuristic & Competitive Audit
              </h4>
            </div>
            <span className="text-[9px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
              INDUSTRY CONSENSUS
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed flex-1">
            Comparative analysis across Shopify, Steam, and Stripe: multi-step progressive disclosure
            established as the gold standard for high-stakes checkout funnels.
          </p>
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5 pt-2.5 border-t border-slate-100">
            {benchmarks.map((b, idx) => (
              <span
                key={idx}
                className="text-[9px] font-['Fira_Code'] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2 py-0.5"
              >
                {b}
              </span>
            ))}
            <span className="text-[9px] font-['Fira_Code'] font-semibold text-[#166534] ml-auto">
              Progressive Disclosure ✓
            </span>
          </div>
        </div>

        {/* Bottom Card: Qualitative User Testing Scorecard */}
        <div className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5 text-[#166534]" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Qualitative User Testing Scorecard
              </h4>
            </div>
            <span className="text-[9px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
              HYPOTHESIS VALIDATED
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed flex-1">
            Head-to-head usability sessions: 100% of participants preferred the stepped prototype over
            the single page, citing clarity of payment options and immediate Game ID confirmation.
          </p>
          <div className="grid grid-cols-3 gap-1.5 mt-2.5 pt-2.5 border-t border-slate-100">
            <div className="rounded-lg bg-emerald-50/60 border border-emerald-200 text-center py-1.5">
              <div className="text-[14px] font-extrabold text-[#166534] leading-none">100%</div>
              <div className="text-[8px] font-['Fira_Code'] text-slate-500 mt-0.5">Preferred Stepped</div>
            </div>
            <div className="rounded-lg bg-emerald-50/60 border border-emerald-200 text-center py-1.5">
              <div className="text-[14px] font-extrabold text-[#166534] leading-none">Earlier</div>
              <div className="text-[8px] font-['Fira_Code'] text-slate-500 mt-0.5">Error Detection</div>
            </div>
            <div className="rounded-lg bg-emerald-50/60 border border-emerald-200 text-center py-1.5">
              <div className="text-[14px] font-extrabold text-[#166534] leading-none flex items-center justify-center gap-0.5">
                Lower
              </div>
              <div className="text-[8px] font-['Fira_Code'] text-slate-500 mt-0.5">Perceived Effort</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-center justify-between">
        <span className="text-[11px] text-emerald-950 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#166534] shrink-0" />
          <strong className="font-bold">Core Takeaway:</strong> The stepped checkout hypothesis was
          already proven by evidence before the organisational fight began.
        </span>
        <span className="text-[9px] font-['Fira_Code'] text-[#166534] font-semibold hidden sm:inline flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Multi-Source
        </span>
      </div>
    </div>
  );
};