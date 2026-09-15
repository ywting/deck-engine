import React from 'react';
import { Cpu, PenTool, BarChart3, Clock } from 'lucide-react';

export const NewsroomWorkflowVisual: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 relative overflow-hidden shadow-xs font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-amber-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Modernized Editorial Workflow Architecture
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">
          Automate Commodity → Elevate Journalism
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: Two Stream Workflow (White Cards) */}
        <div className="md:col-span-7 space-y-2 flex flex-col justify-between">
          {/* Stream 1: Automated Commodity Feeds */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#1D4ED8] border border-blue-200 flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-[#0A2540]">Stream A: Automated Commodity Feeds</span>
              </div>
              <span className="text-[10px] font-['Fira_Code'] font-bold text-[#166534] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                0 Journalist Hours
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Programmatic ingestion of currency exchange rates, daily gold bullion prices, and Hindu temple prayer schedules direct into UI widgets.
            </p>
          </div>

          {/* Stream 2: High-Impact Investigative & Community Stories */}
          <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center">
                  <PenTool className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-amber-900">Stream B: High-Impact Community Stories</span>
              </div>
              <span className="text-[10px] font-['Fira_Code'] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                High Evergreen Value
              </span>
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Reporters freed from routine data entry to produce long-form cultural investigations, youth accomplishments, and civic features with sustained shelf life.
            </p>
          </div>
        </div>

        {/* Right Column: Data-Informed Editorial Sync (White Card) */}
        <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-[#0A2540]">The Data-Informed Editorial Sync</span>
              <Clock className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="space-y-2 mt-2.5 text-[11px]">
              <div className="p-2 rounded-lg bg-red-50 border border-red-200">
                <span className="text-[#E11927] text-[10px] uppercase font-['Fira_Code'] font-bold block mb-0.5">Deprecated Metric</span>
                <div className="text-red-800 font-bold line-through">Cheap Clickbait Pageviews</div>
              </div>

              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-300">
                <span className="text-[#166534] text-[10px] uppercase font-['Fira_Code'] font-bold block mb-0.5">Adopted Success Metrics</span>
                <div className="text-[#166534] font-semibold">• Active Engagement Duration</div>
                <div className="text-[#166534] font-semibold">• Monthly Repeat Visits</div>
                <div className="text-[#166534] font-semibold">• Community Share Velocity</div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 italic">
            "You cannot modernize a product without modernizing the people who feed it."
          </div>
        </div>
      </div>
    </div>
  );
};
