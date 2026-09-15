import React from 'react';
import { Share2, ArrowRight, Smartphone, MessageCircle, Send, CheckCircle2, Shield } from 'lucide-react';

export const DistributionOverhaulVisual: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            The Distribution Overhaul Flowchart
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-['Fira_Code'] text-[10px] text-[#166534] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
          <span>90% → 2.6% Facebook Traffic</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between space-y-3 min-h-0">
        {/* Flowchart Transformation Container */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-2 items-center flex-1">
          {/* Box 1: The Broken Algorithmic Trap (Before - White Card with red accents) */}
          <div className="md:col-span-4 bg-white border border-red-200 rounded-xl p-3.5 flex flex-col justify-between h-full shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#E11927]">BEFORE: Rented Land</span>
                <span className="text-[10px] font-['Fira_Code'] font-bold px-1.5 py-0.5 rounded bg-red-50 text-[#E11927] border border-red-200">
                  90% Traffic
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] space-y-1">
                <div className="text-[#0A2540] font-bold">Algorithmic Facebook Feed</div>
                <p className="text-[11px] text-slate-600 leading-tight">
                  Third-party algorithm changes, high volatility, low brand loyalty, and zero ownership of reader contact details.
                </p>
              </div>
            </div>
            <div className="text-[10px] text-[#E11927] mt-2 flex items-center gap-1 font-['Fira_Code'] font-bold">
              <span>✕ Vulnerable to platform swings</span>
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 text-amber-700 flex items-center justify-center border border-slate-200 shadow-2xs">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Box 2: Direct Owned Broadcast Channels (The Shift - White Card with amber accents) */}
          <div className="md:col-span-3 bg-white border border-amber-200 rounded-xl p-3.5 flex flex-col justify-between h-full shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-900">DIRECT CHANNELS</span>
                <span className="text-[10px] font-['Fira_Code'] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Morning Curated
                </span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700 font-medium">
                  <Send className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                  <span>Telegram Broadcast Alerts</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-slate-700 font-medium">
                  <MessageCircle className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                  <span>WhatsApp Curated Digest</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-amber-800 mt-2 font-['Fira_Code'] font-bold">
              Direct notification to chat
            </div>
          </div>

          {/* Arrow Divider */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 text-[#166534] flex items-center justify-center border border-slate-200 shadow-2xs">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Box 3: Lightweight PWA Destination (After - White Card with emerald accents) */}
          <div className="md:col-span-2 bg-white border border-emerald-300 rounded-xl p-3.5 flex flex-col justify-between h-full shadow-2xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#166534]">LIGHT PWA</span>
                <Smartphone className="w-3.5 h-3.5 text-[#166534]" />
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                Instant loading on low-tier mobile hardware. No app store friction or storage bloat.
              </p>
            </div>
            <div className="text-[10px] text-[#166534] mt-2 flex items-center gap-1 font-['Fira_Code'] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>2.6% FB dep.</span>
            </div>
          </div>
        </div>

        {/* Strategic Takeaway Banner (White Card) */}
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between text-[11px] text-slate-700">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#166534] shrink-0" />
            <span>
              <strong className="text-[#0A2540] font-bold">Sovereign Audience Moat:</strong> By transitioning readers into chat broadcast channels and a lightweight PWA, Tamil Murasu permanently insulated itself from algorithmic censorship and platform dependency.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
