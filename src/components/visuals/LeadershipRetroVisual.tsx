import React from 'react';
import { Compass, AlertTriangle, ExternalLink, ShieldCheck, Globe, Linkedin } from 'lucide-react';

export const LeadershipRetroVisual: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Executive Retrospective & Principles
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
          Design Leadership
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: 4 Core Leadership Insights (Pure White Cards) */}
        <div className="md:col-span-7 space-y-2 flex flex-col justify-between">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#166534] border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#0A2540]">1. Strategic Patience is an Active Competency</h5>
              <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                Great visions don't fail because they're wrong; they fail because the organisation isn't ready. Sequencing across 36 months ensured survival.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#0A2540]">2. Speak the Language of Risk</h5>
              <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                When touching the cash register, empathy for your stakeholders' revenue panic matters just as much as empathy for your users.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#0A2540]">3. Create External Pull When Internal Push Fails</h5>
              <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                When internal roadmaps stall, enterprise client demand is the ultimate lever to unlock engineering prioritisation.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E11927] border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#0A2540]">4. Pragmatism Over Dogma</h5>
              <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                A bottom sheet that respects API constraints and ships today is worth infinitely more than an idealised multi-page flow stuck in Figma forever.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Designer & Portfolio Summary Card (Pure White Card) */}
        <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-bold text-xs font-['Fira_Code']">
                DBS
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A2540]">Lead Product Designer</div>
                <div className="text-[10px] text-slate-500 font-['Fira_Code']">Design Technologist</div>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 leading-relaxed">
              Specialising in high-stakes transaction engines, complex multi-brand design systems, and organisational transformation across fintech and enterprise media.
            </p>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[10px] font-['Fira_Code']">
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#166534]" />
                Case Studies
              </span>
              <span className="font-bold text-[#0A2540]">Coda &amp; SPH</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                Leadership
              </span>
              <span className="font-bold text-[#0A2540]">Patience &amp; Sequencing</span>
            </div>
          </div>

          <div className="pt-2 text-center text-[10px] text-slate-500 font-['Fira_Code'] font-semibold">
            Next: Case 2 — Restructure of Tamil Murasu →
          </div>
        </div>
      </div>
    </div>
  );
};
