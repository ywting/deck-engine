import React, { useState } from 'react';
import { SearchCheck, Eye, FileWarning, History, Signpost, BarChart3 } from 'lucide-react';
import { CheckoutSideBySideVisual } from './CheckoutSideBySideVisual';

interface FrictionTab {
  id: string;
  tabNumber: string;
  tabTitle: string;
  tabSubtitle: string;
  problemHeadline: string;
  interfaceAntiPattern: string;
  playerImpact: string;
  keyStat: string;
}

const TABS: FrictionTab[] = [
  {
    id: 'buried-content',
    tabNumber: '01',
    tabTitle: 'Buried Content',
    tabSubtitle: '1,046px · 30%+ scroll wasted',
    problemHeadline: 'Meaningful Content Was Hidden Below the Fold',
    interfaceAntiPattern:
      'Purchasable SKUs were pushed 1,046px down the page. Mobile gamers were forced to scroll past non-essential SEO descriptions and marketing banners before seeing a single purchasable pack.',
    playerImpact:
      'Impulse purchase momentum stalled immediately. Players wanting a quick top-up had to scroll through two full viewports just to locate their item.',
    keyStat: '30%+ of the initial scroll was consumed by non-transactional content on 360 × 800px mobile screens.',
  },
  {
    id: 'information-void',
    tabNumber: '02',
    tabTitle: 'Information Voids',
    tabSubtitle: 'Pricing opacity · Forced external calc.',
    problemHeadline: 'Denominations Lacked Essential Pricing and Bonus Data',
    interfaceAntiPattern:
              'SKU cards displayed raw top-up amounts with no pricing finality or clear bonus breakdowns. Prices only surfaced after players scrolled down and selected a payment method.',
    playerImpact:
      'Forced mental math and cognitive fatigue. Players scrolled back and forth repeatedly between denominations and payment channels just to calculate total costs.',
    keyStat: 'Caused purchase slowdown and forced abandonment for external currency calculations.',
  },
  {
    id: 'forgetful-interface',
    tabNumber: '03',
    tabTitle: 'Forgetful Interface',
    tabSubtitle: '70% · Repeated inputs',
    problemHeadline: 'Treating Returning Customers Like Complete Strangers',
    interfaceAntiPattern:
      'Despite 70% of traffic consisting of routine returning players, the interface had zero state persistence. It forced players to re-enter their 16-digit Game ID on every visit.',
    playerImpact:
      'Penalised high-intent loyalty. A player buying their weekly diamond pack had to open their game client, copy their ID string, and re-select their e-wallet every single time.',
    keyStat: '70% of users repeated the exact same inputs with zero system memory.',
  },
  {
    id: 'ambiguous-journey',
    tabNumber: '04',
    tabTitle: 'Ambiguous Journey',
    tabSubtitle: "'False Guidance' · High error rate",
    problemHeadline: 'Vertical Stacking Assumed Sequential Behaviour',
    interfaceAntiPattern:
      "The layout assumed players filled fields 1 ➔ 2 ➔ 3 in strict order. In reality, players jumped around, missed error validation states, and suffered banner blindness on the bottom 'Buy Now' widget.",
    playerImpact:
      "Created 'Progress Paralysis'. Players frequently completed their selections but didn't know what to do next because there was no active signposting or next-step guidance.",
    keyStat: 'High checkout error rate.',
  },
];

const TAB_ICONS = [Eye, FileWarning, History, Signpost];

export const FrictionAuditTabsVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(TABS[0].id);
  const activeIndex = TABS.findIndex((t) => t.id === activeId);
  const active = TABS[activeIndex];
  const ActiveIcon = TAB_ICONS[activeIndex];

  return (
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <SearchCheck className="w-4 h-4 text-[#E11927]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Friction Audit · 4 Themes
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 items-start">
        <div className="lg:col-span-3 flex flex-col gap-3 min-w-0">
      {/* Tab bar */}
      <div className="grid grid-cols-2 gap-2">
        {TABS.map((t, i) => {
          const Icon = TAB_ICONS[i];
          const selected = t.id === activeId;
          return (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selected
                  ? 'bg-white border-[#E11927] ring-2 ring-red-100 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`font-['Fira_Code'] text-[15px] font-extrabold ${
                    selected ? 'text-[#E11927]' : 'text-slate-400'
                  }`}
                >
                  {t.tabNumber}
                </span>
                <Icon className={`w-4 h-4 ${selected ? 'text-[#E11927]' : 'text-slate-400'}`} />
              </div>
              <div className="text-[14px] font-bold text-[#0A2540]">{t.tabTitle}</div>
              <div className="text-[11px] font-['Fira_Code'] text-slate-500 font-medium">{t.tabSubtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Active tab detail */}
      <div
        key={active.id}
        className="rounded-xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs"
      >
        <div className="flex items-center gap-2 mb-2">
          <ActiveIcon className="w-4 h-4 text-[#E11927]" />
          <h4 className="text-[15px] sm:text-[16px] font-bold text-[#0A2540]">{active.problemHeadline}</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-200">
            <div className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider text-[#E11927] mb-1">
              Interface Anti-Pattern
            </div>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-700">
              {active.interfaceAntiPattern}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200">
            <div className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider text-amber-800 mb-1">
              Player Impact
            </div>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-700">
              {active.playerImpact}
            </p>
          </div>
        </div>
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2 text-[12px] sm:text-[13px] font-['Fira_Code'] text-slate-600">
          <BarChart3 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
          <span>
            <strong className="text-[#0A2540] font-bold">Key stat:</strong> {active.keyStat}
          </span>
        </div>
      </div>
        </div>
        <div className="lg:col-span-2 min-w-0">
          {/* Annotated legacy screenshot panel */}
          <CheckoutSideBySideVisual />
        </div>
      </div>
    </div>
  );
};
