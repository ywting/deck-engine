import React from 'react';
import { Compass, Lightbulb, Database, Signpost, Quote } from 'lucide-react';

export const DesignPrinciplesVisual: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      {/* Strategy note */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Compass className="w-4 h-4 text-amber-700" />
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Navigating Organisational Hesitation
          </span>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-700">
          Our teams were cautious about touching the checkout all at once. Instead of pushing for a
          risky redesign, I used these three design principles to break our vision into bite-sized
          experiments. Each step delivered measurable wins on its own, building confidence across
          product and engineering teams.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="rounded-xl bg-white border border-blue-200 p-4 flex flex-col gap-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-['Fira_Code'] text-[15px] font-extrabold text-[#1D4ED8]">01</span>
            <span className="text-[9px] font-['Fira_Code'] text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
              PRINCIPLE 1
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-[#1D4ED8]" />
            <span className="text-[14px] font-bold text-[#0A2540]">Contextual Focus</span>
          </div>
          <p className="text-[12px] italic text-slate-600">Show players only what matters for their current choice.</p>
          <div className="space-y-1.5 text-[12px] sm:text-[13px] leading-relaxed mt-auto pt-2 border-t border-slate-100">
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Upfront Pricing:</strong> Displayed total costs
              and bonus math directly on denomination cards (+2.74% clarity).
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Less Scrolling:</strong> Compacted the top banner
              to bring purchasable items above the fold (+1.17% lift).
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white border border-emerald-200 p-4 flex flex-col gap-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-['Fira_Code'] text-[15px] font-extrabold text-[#166534]">02</span>
            <span className="text-[9px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
              PRINCIPLE 2
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Database className="w-4 h-4 text-[#166534]" />
            <span className="text-[14px] font-bold text-[#0A2540]">Systemic Memory</span>
          </div>
          <p className="text-[12px] italic text-slate-600">Never make players repeat information we already have.</p>
          <div className="space-y-1.5 text-[12px] sm:text-[13px] leading-relaxed mt-auto pt-2 border-t border-slate-100">
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Saved Player IDs:</strong> Auto-saved verified
              16-digit IDs in local storage (+0.47% lift).
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Instant Account Check:</strong> Live server checks
              displaying in-game nicknames before payment.
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white border border-purple-200 p-4 flex flex-col gap-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="font-['Fira_Code'] text-[15px] font-extrabold text-purple-700">03</span>
            <span className="text-[9px] font-['Fira_Code'] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-bold">
              PRINCIPLE 3
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Signpost className="w-4 h-4 text-purple-700" />
            <span className="text-[14px] font-bold text-[#0A2540]">Progressive Guidance</span>
          </div>
          <p className="text-[12px] italic text-slate-600">Guide the player forward one simple step at a time.</p>
          <div className="space-y-1.5 text-[12px] sm:text-[13px] leading-relaxed mt-auto pt-2 border-t border-slate-100">
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Next-Step Indicators:</strong> Active guide pointing
              out missing fields (-23.11% errors).
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Stepped Bottom Sheets:</strong> Focused mobile
              sheets within legacy API limits (+0.71% lift).
            </div>
          </div>
        </div>
      </div>

      {/* Synthesis */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
        <Quote className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-[13px] sm:text-[14px] leading-relaxed italic text-slate-700">
          "The design principles were our roadmap. They allowed us to de-risk the redesign, give product
          teams quick wins, and steadily guide the business toward our long-term vision."
        </p>
      </div>
    </div>
  );
};
