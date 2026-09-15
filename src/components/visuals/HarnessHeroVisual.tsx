import React, { useState } from 'react';
import { Terminal, Layers, Code, Play, CheckCircle2, Sparkles } from 'lucide-react';

export const HarnessHeroVisual: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<'codm' | 'fcm' | 'konami' | 'pokemon'>('codm');

  const brandStyles = {
    codm: {
      name: 'Call of Duty: Mobile',
      publisher: 'Activision',
      primaryColor: '#F59E0B',
      accentColor: '#1F2937',
      cardBg: 'bg-amber-500/10 border-amber-500/30 text-amber-900',
      tagBg: 'bg-amber-100 text-amber-900 border-amber-300',
      sampleSKU: '5,000 (+1,200 Bonus) CP COD Points',
      price: '$39.99 USD',
    },
    fcm: {
      name: 'EA Sports FC™ Mobile',
      publisher: 'Electronic Arts',
      primaryColor: '#10B981',
      accentColor: '#064E3B',
      cardBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900',
      tagBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      sampleSKU: '12,000 FC™ Points Ultimate Bundle',
      price: '$99.99 USD',
    },
    konami: {
      name: 'eFootball™ 2026 / Yu-Gi-Oh!',
      publisher: 'KONAMI',
      primaryColor: '#3B82F6',
      accentColor: '#1E3A8A',
      cardBg: 'bg-blue-500/10 border-blue-500/30 text-blue-900',
      tagBg: 'bg-blue-100 text-blue-900 border-blue-300',
      sampleSKU: '3,280 eFootball™ Coins Booster',
      price: '$29.99 USD',
    },
    pokemon: {
      name: 'Pokémon UNITE',
      publisher: 'The Pokémon Company',
      primaryColor: '#8B5CF6',
      accentColor: '#4C1D95',
      cardBg: 'bg-purple-500/10 border-purple-500/30 text-purple-900',
      tagBg: 'bg-purple-100 text-purple-900 border-purple-300',
      sampleSKU: '2,450 Aeos Gems + Battle Pass',
      price: '$19.99 USD',
    },
  };

  const current = brandStyles[activeBrand];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            coda-webstore-prototype
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold font-['Fira_Code'] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> RUNNABLE PREVIEW
        </span>
      </div>

      {/* Brand Hotswap Selector Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold mr-1">THEME:</span>
        {(Object.keys(brandStyles) as (keyof typeof brandStyles)[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveBrand(key)}
            className={`px-2.5 py-1 rounded text-[11px] font-['Fira_Code'] font-semibold transition-all cursor-pointer ${
              activeBrand === key
                ? 'bg-white text-[#0F172A] shadow-xs border border-slate-300'
                : 'text-slate-600 hover:text-[#0F172A] hover:bg-slate-100/80'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main Interactive Stage Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Sub-Column: Live Brand Render Preview */}
        <div className="md:col-span-7 bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
              <span className="text-[11px] font-bold text-[#0F172A]">{current.name}</span>
              <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold">{current.publisher}</span>
            </div>

            {/* In-Game Player ID Preview */}
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px]">
              <div>
                <span className="text-[9px] font-['Fira_Code'] text-slate-400 uppercase block font-semibold">User Identity</span>
                <span className="font-['Fira_Code'] font-bold text-[#0F172A]">Player#90218-SEA (Verified)</span>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>

            {/* Dynamic SKU Card */}
            <div className={`p-3 rounded-lg border transition-all ${current.cardBg}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[9px] font-['Fira_Code'] uppercase font-bold px-1.5 py-0.5 rounded border ${current.tagBg}`}>
                  Selected SKU
                </span>
                <span className="text-xs font-['Fira_Code'] font-black">{current.price}</span>
              </div>
              <p className="text-xs font-bold leading-tight mt-1">{current.sampleSKU}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
            <span>State: <strong className="text-emerald-700">CheckoutReady</strong></span>
            <span>URL: <code className="text-[#2563EB]">?theme={activeBrand}</code></span>
          </div>
        </div>

        {/* Right Sub-Column: Architecture Specs & Component Metrics */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-2">
          <div className="space-y-1.5">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <span className="text-[9px] font-['Fira_Code'] text-slate-500 block uppercase font-semibold">Living Prototype Scope</span>
              <div className="text-base font-bold text-[#0F172A] font-['Fira_Code'] mt-0.5">87 Components</div>
              <p className="text-[10px] text-slate-500 mt-0.5">Auto-catalogued with live state preview matrices.</p>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <span className="text-[9px] font-['Fira_Code'] text-slate-500 block uppercase font-semibold">Brand Coverage</span>
              <div className="text-base font-bold text-[#2563EB] font-['Fira_Code'] mt-0.5">12 Themes</div>
              <p className="text-[10px] text-slate-500 mt-0.5">Zero CSS overrides; 100% token-driven hotswap.</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-200 text-[10px] text-blue-900 font-['Fira_Code'] space-y-0.5">
            <div className="flex items-center gap-1 font-bold text-[#2563EB]">
              <Sparkles className="w-3 h-3" />
              <span>Runnable Contract</span>
            </div>
            <p className="text-[9.5px] leading-tight text-slate-600 font-sans">
              Replaces static PDFs with interactive URLs engineers and AI agents can execute directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
