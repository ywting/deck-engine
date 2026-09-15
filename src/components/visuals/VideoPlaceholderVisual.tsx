import React from 'react';
import { Clapperboard } from 'lucide-react';

export const VideoPlaceholderVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Clapperboard className="w-4 h-4 text-[#1D4ED8]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            End-to-End Flow Video
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200 font-semibold">
          Coming Soon
        </span>
      </div>

      <div className="flex-1 min-h-[280px] flex items-center justify-center my-3">
        <div className="w-full aspect-video rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/60 flex flex-col items-center justify-center gap-2.5 p-6 text-center">
          <span className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
            <Clapperboard className="w-5 h-5 text-slate-400" />
          </span>
          <span className="text-[14px] font-bold text-slate-600">
            End-to-end video walkthrough
          </span>
          <span className="text-[11px] font-['Fira_Code'] text-slate-400">
            Video of the current checkout flow to be added here
          </span>
        </div>
      </div>

      <div className="pt-2.5 border-t border-slate-100 text-[10px] font-['Fira_Code'] text-slate-500 font-semibold flex items-center justify-between">
        <span>Current Next-Gen Checkout</span>
        <span>16 : 9 Placeholder</span>
      </div>
    </div>
  );
};
