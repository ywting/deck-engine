import React from 'react';
import { Newspaper, AlertTriangle, Flame, TrendingDown, Users, ShieldAlert, ArrowRight } from 'lucide-react';

export const TamilMurasuCrisisVisual: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-amber-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Strategic Problem · Internal Resistance &amp; External Trap
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">
          SPH Proving Ground Context
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: 1935 Heritage Print Masthead Visual (White Card) */}
        <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between relative overflow-hidden shadow-2xs">
          <div className="border-b border-slate-100 pb-2 mb-2">
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-['Fira_Code'] font-semibold">
              <span>SINGAPORE'S ONLY TAMIL DAILY</span>
              <span>FOUNDED 1935</span>
            </div>
            {/* Heritage Masthead mockup */}
            <div className="my-2 py-2 text-center border-y-2 border-double border-slate-300 bg-amber-50/40 rounded">
              <h3 className="text-2xl font-bold tracking-tight text-[#0A2540]">
                தமிழ் முரசு
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-amber-900 font-['Fira_Code'] font-bold mt-0.5">
                TAMIL MURASU
              </p>
            </div>
            <div className="text-[10px] text-slate-500 text-center italic">
              "The cultural heartbeat &amp; civic voice of Singapore's Indian Community"
            </div>
          </div>

          <div className="space-y-1.5 text-[11px] text-slate-600">
            <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200">
              <div className="text-[10px] text-amber-900 font-bold uppercase font-['Fira_Code'] mb-0.5">Cultural Pillar at Risk</div>
              <p className="text-[11px] text-slate-700 leading-tight">
                90 years of community heritage endangered by terminal print subscription attrition and zero natural replacement.
              </p>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-['Fira_Code'] flex items-center justify-between font-semibold">
            <span>The Proving Ground</span>
            <span className="text-amber-800">High Urgency · Low Risk</span>
          </div>
        </div>

        {/* Right Column: The Dual Crisis */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-2">
          <div className="text-[11px] font-bold text-[#0A2540] px-1 flex items-center gap-1.5 font-['Fira_Code'] uppercase">
            <AlertTriangle className="w-3.5 h-3.5 text-[#E11927]" />
            <span>The Dual Crisis (Internal Resistance vs. External Trap)</span>
          </div>

          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            {/* Crisis 1: Institutional Resistance (Internal) */}
            <div className="p-3.5 rounded-lg bg-white border border-rose-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded bg-rose-50 text-rose-700 border border-rose-200 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-3 h-3" />
                </div>
                <span className="font-bold text-[#0A2540] text-[12px]">1. Institutional Resistance (Internal)</span>
                <span className="ml-auto text-[9.5px] font-['Fira_Code'] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">Newsroom Scepticism</span>
              </div>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">
                Traditional journalists and editors view tech jargon such as "data-led processes", "agile", and "digital transformation" with suspicion. "Why change something that is not broken" and "We know our readers best" are common mindsets. Tamil Murasu was picked to test out a new product- and design-centred workflow as it was the smallest publication, and therefore carries the lowest risks of being experimental.
              </p>
            </div>

            {/* Crisis 2: Platform Trap (External) */}
            <div className="p-3.5 rounded-lg bg-white border border-amber-200 shadow-2xs">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                  <Flame className="w-3 h-3" />
                </div>
                <span className="font-bold text-[#0A2540] text-[12px]">2. The Platform Trap (External)</span>
                <span className="ml-auto text-[9.5px] font-['Fira_Code'] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">90% FB Dependent</span>
              </div>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">
                Readership was ageing out; young Tamilians consumed news exclusively through fragmented Facebook feeds. 90% of web traffic was captive to third-party social algorithms. Readers had zero direct affinity with Tamil Murasu—they read an article in-app and bounced back to Facebook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
