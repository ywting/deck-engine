import React, { useState } from 'react';
import { Smartphone, Send, Award, Quote } from 'lucide-react';

export const CulturalPreservationImpactVisual: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'telegram' | 'mobile' | 'widgets'>('mobile');

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Multi-Device Digital Ecosystem Mockup
          </span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-[10px] font-['Fira_Code']">
          <button
            onClick={() => setActiveDevice('mobile')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              activeDevice === 'mobile' ? 'bg-white text-[#0A2540] shadow-2xs' : 'text-slate-600 hover:text-[#0A2540]'
            }`}
          >
            PWA Reader
          </button>
          <button
            onClick={() => setActiveDevice('telegram')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              activeDevice === 'telegram' ? 'bg-white text-[#1D4ED8] shadow-2xs' : 'text-slate-600 hover:text-[#0A2540]'
            }`}
          >
            Telegram Alert
          </button>
          <button
            onClick={() => setActiveDevice('widgets')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              activeDevice === 'widgets' ? 'bg-white text-[#166534] shadow-2xs' : 'text-slate-600 hover:text-[#0A2540]'
            }`}
          >
            Daily Utilities
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: Interactive Multi-Device Mockup (White Card) */}
        <div className="md:col-span-6 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          {activeDevice === 'mobile' && (
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 text-[10px]">
                <span className="text-[#0A2540] font-bold text-sm">தமிழ் முரசு • Mobile PWA</span>
                <span className="text-[#166534] font-['Fira_Code'] font-bold">Instant Load</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-[9px] font-['Fira_Code'] font-bold uppercase text-amber-800 block mb-0.5">Top Story</span>
                <h5 className="font-bold text-[#0A2540] text-xs leading-snug">
                  Singapore Tamil Youths Lead Regional AI Innovation Summit in Little India
                </h5>
                <p className="text-[10px] text-slate-500 mt-1">3 min read • Community Spotlight</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">Temple Pooja</div>
                  <div className="text-amber-900 font-['Fira_Code'] font-bold">18:30 SGT</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 font-medium">Gold 916 Rate</div>
                  <div className="text-amber-900 font-['Fira_Code'] font-bold">$108.50/g</div>
                </div>
              </div>
            </div>
          )}

          {activeDevice === 'telegram' && (
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-[#1D4ED8] font-bold text-xs pb-1 border-b border-slate-100">
                <Send className="w-3.5 h-3.5" />
                <span>Tamil Murasu Morning Digest (Telegram)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-200 text-[10px] space-y-1">
                <div className="text-blue-950 font-bold">🌅 காலை வணக்கம்! Today's Curated 3:</div>
                <div className="text-slate-700 font-medium">• 1. Little India Pongal Street Light-Up Details</div>
                <div className="text-slate-700 font-medium">• 2. SGD to INR Remittance Rate: ₹62.40</div>
                <div className="text-slate-700 font-medium">• 3. Sri Veeramakaliamman Temple evening pooja: 6:30 PM</div>
                <div className="text-blue-800 font-['Fira_Code'] font-bold pt-1">Direct link: tm.sg/morning-0912</div>
              </div>
              <p className="text-[10px] text-slate-500 font-['Fira_Code']">Pushed to 45,000+ daily subscribers directly in chat.</p>
            </div>
          )}

          {activeDevice === 'widgets' && (
            <div className="space-y-2 text-[11px]">
              <div className="text-xs font-bold text-[#0A2540] pb-1 border-b border-slate-100">
                Automated Utility Feeds Live In App
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px]">
                  <span className="text-slate-700 font-medium">Daily Gold 22K (916) Hallmark</span>
                  <span className="font-['Fira_Code'] text-amber-900 font-bold">$108.50 / gram</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px]">
                  <span className="text-slate-700 font-medium">SGD → INR Remittance</span>
                  <span className="font-['Fira_Code'] text-[#166534] font-bold">1 SGD = 62.40 INR</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-[10px]">
                  <span className="text-slate-700 font-medium">Today's Auspicious Nalla Neram</span>
                  <span className="font-['Fira_Code'] text-amber-900 font-bold">10:45 AM - 11:45 AM</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-['Fira_Code'] flex items-center justify-between font-semibold">
            <span>Owned sovereign channels</span>
            <span className="text-[#166534] font-bold">3x MAU Growth</span>
          </div>
        </div>

        {/* Right Column: Key Outcomes & Reflection Quote (White Card) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-2">
          {/* Big outcome pills */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-500 block font-['Fira_Code'] font-semibold">Monthly Active Users</span>
              <div className="text-xl font-bold text-[#0A2540] font-['Fira_Code'] mt-0.5">3x Growth</div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-[10px] text-slate-500 block font-['Fira_Code'] font-semibold">Facebook Dependency</span>
              <div className="text-xl font-bold text-[#166534] font-['Fira_Code'] mt-0.5">90% → 2.6%</div>
            </div>
          </div>

          {/* Lead Designer Reflection Quote Card */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-300 shadow-2xs relative">
            <Quote className="w-5 h-5 text-amber-400 absolute top-2 right-2" />
            <span className="text-[10px] font-['Fira_Code'] font-bold text-amber-900 uppercase block mb-1">
              Enterprise Lighthouse Takeaway
            </span>
            <p className="text-[11px] italic text-slate-800 leading-relaxed">
              "When an organisation is resistant to change, you don’t fight the mothership head-on. You build a working, undeniable lighthouse at the perimeter. Tamil Murasu proved that human-centred research and modern product rigour can revitalise a 90-year-old cultural icon—and in doing so, created the courage for a media giant to modernise."
            </p>
            <div className="mt-2 text-[10px] font-bold text-[#0A2540] font-['Fira_Code']">
              — Lead Designer &amp; Product Manager (Associate UX Director)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
