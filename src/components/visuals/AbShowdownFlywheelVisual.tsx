import React from 'react';
import { Award, CheckCircle2, RefreshCw, Bot } from 'lucide-react';

export const AbShowdownFlywheelVisual: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            GrowthBook Production A/B Result & The O.V.A Flywheel
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
          p &lt; 0.01 Statistically Significant
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: GrowthBook A/B Showdown Card (White Card) */}
        <div className="md:col-span-6 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-[#0A2540]">Production A/B Test Showdown</span>
              <span className="text-[10px] text-slate-500 font-['Fira_Code'] font-semibold">Live Traffic Run</span>
            </div>

            {/* Test Variants Visualizer */}
            <div className="space-y-2 mt-2.5">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span className="text-slate-600 font-medium">Control: Optimised Single Page</span>
                </div>
                <span className="font-['Fira_Code'] text-slate-500 font-semibold">Baseline (0.00%)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-300 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#166534] animate-pulse"></span>
                  <div>
                    <div className="font-bold text-[#0A2540] flex items-center gap-1.5">
                      Variant B: Next-Gen Bottom Sheet
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#166534]" />
                    </div>
                    <div className="text-[10px] text-[#166534] font-medium font-['Fira_Code']">3-Step Decoupled Sheet Modal</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-bold font-['Fira_Code'] text-[#166534]">+0.71%</div>
                  <div className="text-[9px] text-emerald-700 font-['Fira_Code'] font-semibold">Statistically Sig.</div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 mt-2.5 leading-relaxed">
              At Coda's multi-million TPV scale across 60+ markets, a +0.71% lift represented massive incremental bottom-line revenue. The legacy single-page was permanently sunset.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between font-['Fira_Code']">
            <span>Result Treatment:</span>
            <span className="text-[#0A2540] font-bold">Fully de-risked milestone</span>
          </div>
        </div>

        {/* Right Column: The O.V.A Flywheel (White Card) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-2">
          <div className="text-[11px] font-bold text-[#0A2540] px-1 flex items-center gap-1.5 font-['Fira_Code'] uppercase">
            <RefreshCw className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>The O.V.A Downstream Flywheel</span>
          </div>

          <div className="space-y-2 flex-1 flex flex-col justify-between text-[11px]">
            {/* Step 1: Growth */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
              <div className="w-6 h-6 rounded bg-emerald-50 text-[#166534] border border-emerald-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                G
              </div>
              <div>
                <span className="font-bold text-[#0A2540]">1. Growth: +20% then +0.71%</span>
                <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                  Proved design drove measurable revenue, giving product leadership complete data immunity.
                </p>
              </div>
            </div>

            {/* Step 2: Sales */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
              <div className="w-6 h-6 rounded bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                S
              </div>
              <div>
                <span className="font-bold text-[#0A2540]">2. Sales: ~25% Coda's B2B TPV</span>
                <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                  White-label D2C webstores scaled into a core business unit, onboarding AAA giants in record time.
                </p>
              </div>
            </div>

            {/* Step 3: Systems */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
              <div className="w-6 h-6 rounded bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-bold text-[#0A2540]">3. Systems: AI Self-Serve Builder</span>
                <p className="text-[11px] text-slate-600 leading-tight mt-0.5">
                  Fed token pipeline into AI-driven builders, generating compliant D2C themes for long-tail publishers in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
