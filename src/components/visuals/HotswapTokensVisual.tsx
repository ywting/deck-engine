import React, { useState } from 'react';
import { Layers, GitMerge, Check, Code2 } from 'lucide-react';

export const HotswapTokensVisual: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(2);

  const tiers = [
    {
      id: 0,
      name: 'Tier 1: Seed',
      code: 'brand.primary = #00E599',
      role: 'Foundational brand DNA & raw hex constants.',
      details: 'Immutable brand hex values injected per partner (Activision, EA, KONAMI).',
    },
    {
      id: 1,
      name: 'Tier 2: Palette',
      code: 'emerald[50...950] Ramps',
      role: 'Programmatically generated contrast & tint ramps.',
      details: 'Mathematically generated colour ramps maintaining WCAG AA contrast standards across gaming viewports.',
    },
    {
      id: 2,
      name: 'Tier 3: System',
      code: 'color.surface.interactive',
      role: 'Functional logic decoupled from specific colours.',
      details: 'Defines roles like surface.subtle, border.active, and text.inverse across white-label themes.',
    },
    {
      id: 3,
      name: 'Tier 4: Semantic',
      code: 'sheet.modal.cta.background',
      role: 'Component-specific context & state tokens.',
      details: 'Directly bound to the Next-Gen Bottom Sheet components, allowing 1-click theme swaps without CSS rewrites.',
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Hotswap Token Architecture & Technical Compromise
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
          Vue 2 → Vue 3 Hitchhike
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: 4-Tier Architecture Pipeline (White Card) */}
        <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#0A2540]">4-Tier Token Pipeline</span>
            <span className="text-[10px] text-slate-500 font-['Fira_Code'] font-semibold">Interactive Stack</span>
          </div>

          <div className="space-y-1.5 flex-1 flex flex-col justify-between">
            {tiers.map((t) => {
              const isSelected = activeTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTier(t.id)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer bg-white ${
                    isSelected
                      ? 'border-[#166534] ring-2 ring-emerald-50 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isSelected ? 'bg-[#166534] text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {t.id + 1}
                      </span>
                      <span className="text-xs font-bold text-[#0A2540]">{t.name}</span>
                    </div>
                    <code className="text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-semibold">
                      {t.code}
                    </code>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1 pl-6 leading-tight">{t.role}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
            <strong className="text-[#0A2540] font-bold">Selected Tier Details:</strong> {tiers[activeTier].details}
          </div>
        </div>

        {/* Right Column: East/West Reconciliation & Monolith Bridge */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-2">
          {/* East vs West Scrum Box (White Card) */}
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-[#0A2540]">
              <GitMerge className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>East & West Scrum Reconciliation</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Unified competing regional squads under one design system by tying Hotswap directly to Codashop's core Vue 3 framework migration.
            </p>
            <div className="mt-2.5 flex items-center gap-2 text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 p-2 rounded-lg border border-emerald-200 font-medium">
              <Check className="w-3.5 h-3.5 shrink-0" />
              <span>Rule of 3: Barred global components unless proven across &gt;1 store.</span>
            </div>
          </div>

          {/* Technical Compromise Box (White Card) */}
          <div className="bg-white rounded-xl border border-amber-200 p-3.5 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold text-amber-900">
              <Code2 className="w-3.5 h-3.5 text-amber-700" />
              <span>The Technical Compromise</span>
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Instead of stalling for a 12-month decoupled URL backend rewrite, we built client-side modal sheets that visually stepped the checkout while caching state in memory—satisfying the legacy backend's synchronous single payload.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
