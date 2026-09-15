import React, { useState } from 'react';
import { Terminal, Gamepad2, Globe, Cpu, CheckCircle, Sparkles } from 'lucide-react';

export const CodashopPlaygroundVisual: React.FC = () => {
  const [selectedMarket, setSelectedMarket] = useState<'ID' | 'BR' | 'PH' | 'US'>('ID');

  const marketData = {
    ID: { name: 'Indonesia', currency: 'IDR', price: 'Rp 149.000', rail: 'GoPay / OVO', flag: '🇮🇩', server: 'SEA-Jakarta-01' },
    BR: { name: 'Brazil', currency: 'BRL', price: 'R$ 54,90', rail: 'PIX Instant', flag: '🇧🇷', server: 'LATAM-SaoPaulo-02' },
    PH: { name: 'Philippines', currency: 'PHP', price: '₱ 499.00', rail: 'GCash / Maya', flag: '🇵🇭', server: 'SEA-Manila-04' },
    US: { name: 'Global / US', currency: 'USD', price: '$9.99', rail: 'Card / ApplePay', flag: '🌐', server: 'NA-Virginia-01' },
  };

  const current = marketData[selectedMarket];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-purple-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Interactive Figma Prototype (High-Fidelity Mockup)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-['Fira_Code'] text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200 font-semibold">
          <Sparkles className="w-3 h-3 text-purple-700" />
          <span>Simulated 60+ Markets</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: Interactive Playground Simulator (White Card) */}
        <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Simulator Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold ml-1">codashop-playground-v2.ts</span>
              </div>
              <span className="text-[9px] font-['Fira_Code'] text-[#166534] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#166534] animate-ping"></span>
                Live Socket Active
              </span>
            </div>

            {/* Currency & Market Selector Tabs */}
            <div className="my-2.5">
              <div className="text-[10px] text-slate-500 mb-1 flex items-center justify-between font-semibold">
                <span>Switch Enterprise Market Rail:</span>
                <span className="text-purple-700 font-['Fira_Code'] text-[9px]">{current.server}</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {(['ID', 'BR', 'PH', 'US'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMarket(m)}
                    className={`py-1 px-1.5 text-center text-[10px] rounded border transition-all flex items-center justify-center gap-1 cursor-pointer font-['Fira_Code'] ${
                      selectedMarket === m
                        ? 'bg-purple-50 border-purple-400 text-purple-900 font-bold shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-[#0A2540]'
                    }`}
                  >
                    <span>{marketData[m].flag}</span>
                    <span>{m}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live Handshake Box */}
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-medium">Target Partner IP</span>
                <span className="text-[10px] font-bold text-[#0A2540]">Call of Duty: Mobile (Activision)</span>
              </div>
              <div className="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200 font-['Fira_Code'] text-[10px]">
                <span className="text-slate-500">UID: 9812401844</span>
                <span className="text-[#166534] font-bold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Player Verified: Ghost_Delta
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-medium">Dynamic SKU Price:</span>
                <span className="font-['Fira_Code'] text-[#166534] font-bold">{current.price}</span>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-500 font-medium">Pre-routed Payment:</span>
                <span className="font-['Fira_Code'] text-[#0A2540] font-semibold">{current.rail}</span>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-['Fira_Code']">
            <span>High-fidelity Figma mockup</span>
            <span className="text-purple-700 font-bold">End-to-end interactive flow</span>
          </div>
        </div>

        {/* Right Column: Strategic Turning Points */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-2">
          {/* Activision Workshop Card (White Card) */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1 text-[#0A2540] text-xs font-bold">
              <Gamepad2 className="w-3.5 h-3.5 text-amber-600" />
              <span>The Activision COD:M Workshop</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-snug">
              When Activision saw this interactive harness, they bought the decoupled bottom sheet on the spot. When we admitted the backend didn't support it yet, leadership stepped in. Client demand transformed it into an urgent company OKR.
            </p>
          </div>

          {/* EA Sports FC Mobile Callout (White Card) */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#0A2540]">EA Sports FC™ Mobile</span>
              <span className="text-[10px] font-['Fira_Code'] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-[#166534] border border-emerald-200">
                White-Label Win
              </span>
            </div>
            <div className="text-lg font-bold text-[#0A2540] font-['Fira_Code']">~300,000 Accounts</div>
            <p className="text-[10px] text-slate-600 mt-0.5 leading-tight">
              Acquired pre-launch via the white-label webstore campaign, proving AAA titles could escape app store 30% fees with high-conversion direct storefronts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
