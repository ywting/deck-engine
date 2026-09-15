import React from 'react';
import { LayoutGrid, Quote } from 'lucide-react';

interface Solution {
  number: string;
  badge: string;
  title: string;
  color: 'blue' | 'emerald' | 'purple' | 'amber';
  interventions: { label: string; detail: string }[];
}

const SOLUTIONS: Solution[] = [
  {
    number: '01',
    badge: 'DECISION EFFICIENCY',
    title: 'SKU Card & Catalogue Architecture',
    color: 'blue',
    interventions: [
      {
        label: 'Upfront Price Finality',
        detail: 'Eliminated back-and-forth scrolling by displaying total prices and currency breakdowns directly on denomination cards (+2.74% SKU clarity).',
      },
      {
        label: 'Transparent Bonus Math',
        detail: "Explicitly separated base credits from bonus rewards (e.g. '366 + 37 Bonus'), motivating players to trade up with zero mental calculation.",
      },
      {
        label: 'Vertical Space Compaction',
        detail: 'Compacted header summaries and moved SEO blocks below the transaction, surfacing purchasable items above the fold (+1.17% purchase lift).',
      },
    ],
  },
  {
    number: '02',
    badge: 'SYSTEMIC MEMORY',
    title: 'Account Verification & Memory',
    color: 'emerald',
    interventions: [
      {
        label: 'Inline Server Handshakes',
        detail: "Introduced real-time validation against game servers, displaying the player's verified in-game nickname to eliminate wrong-account anxiety.",
      },
      {
        label: 'Auto-Saved Credentials',
        detail: 'Cached verified 16-digit Game IDs in local storage, allowing 70% returning players to bypass manual entry (+0.47% purchase lift).',
      },
      {
        label: 'Trust & Authenticity Tags',
        detail: "Embedded official distributor badges and 'Instant Delivery' guarantees right at the identity block to build first-time buyer confidence.",
      },
    ],
  },
  {
    number: '03',
    badge: 'INTERACTION CRAFT',
    title: 'The Next-Gen Bottom-Sheet Pivot',
    color: 'purple',
    interventions: [
      {
        label: 'Client-Side Progressive Disclosure',
        detail: 'Bypassed backend URL routing limits by designing mobile-native bottom sheets that isolate Account Verification from Payment Selection.',
      },
      {
        label: 'Single-Focus Viewports',
        detail: 'Reduced cognitive clutter by restricting the mobile screen to one decision at a time, resulting in a +0.71% lift in checkout completion.',
      },
      {
        label: 'Monolithic API Compatibility',
        detail: 'Held transaction state in client-side memory across sheet transitions, satisfying the legacy single-payload API call upon final submit.',
      },
    ],
  },
  {
    number: '04',
    badge: 'FLOW ORIENTATION',
    title: 'Active Signposting & Payment Grid',
    color: 'amber',
    interventions: [
      {
        label: 'Dynamic Guided Signposting',
        detail: 'Replaced the passive bottom button with an active floating widget that dynamically points players to their next required step.',
      },
      {
        label: 'Checkout Error Reduction',
        detail: 'Achieved an immediate -23.11% drop in checkout input errors by eliminating progress paralysis and banner blindness.',
      },
      {
        label: '2-Column Payment Scannability',
        detail: 'Restructured 30+ regional payment rails into a clean 2-column comparative grid (+0.64% order initiation) with pre-selected favourites.',
      },
    ],
  },
];

const COLOR_MAP: Record<Solution['color'], { text: string; chipBg: string; border: string; number: string }> = {
  blue: {
    text: 'text-[#1D4ED8]',
    chipBg: 'bg-blue-50 border-blue-200 text-[#1D4ED8]',
    border: 'border-blue-200 hover:border-blue-300',
    number: 'text-[#1D4ED8]',
  },
  emerald: {
    text: 'text-[#166534]',
    chipBg: 'bg-emerald-50 border-emerald-200 text-[#166534]',
    border: 'border-emerald-200 hover:border-emerald-300',
    number: 'text-[#166534]',
  },
  purple: {
    text: 'text-purple-700',
    chipBg: 'bg-purple-50 border-purple-200 text-purple-700',
    border: 'border-purple-200 hover:border-purple-300',
    number: 'text-purple-700',
  },
  amber: {
    text: 'text-amber-700',
    chipBg: 'bg-amber-50 border-amber-200 text-amber-700',
    border: 'border-amber-200 hover:border-amber-300',
    number: 'text-amber-700',
  },
};

export const CraftInterventionsVisual: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-[#1D4ED8]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Four Intervention Tracks
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200 font-semibold">
          Monolith ➔ Modular
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SOLUTIONS.map((s) => {
          const c = COLOR_MAP[s.color];
          return (
            <div
              key={s.number}
              className={`rounded-xl bg-white border p-4 flex flex-col gap-2 shadow-2xs transition-colors ${c.border}`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-['Fira_Code'] text-[15px] font-extrabold ${c.number}`}>
                  {s.number}
                </span>
                <span
                  className={`text-[9px] font-['Fira_Code'] px-2 py-0.5 rounded border font-bold ${c.chipBg}`}
                >
                  {s.badge}
                </span>
              </div>
              <div className="text-[14px] font-bold text-[#0A2540]">{s.title}</div>
              <div className="space-y-1.5">
                {s.interventions.map((iv, i) => (
                  <div key={i} className="text-[12px] sm:text-[13px] leading-relaxed text-slate-600">
                    <strong className="text-[#0A2540] font-bold">{iv.label}:</strong> {iv.detail}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
        <Quote className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p className="text-[13px] sm:text-[14px] leading-relaxed italic text-slate-700">
          "We didn't just split a form into steps; we re-engineered the decision model. Every component
          was redesigned to eliminate mental math, remember intent, and isolate cognitive load."
        </p>
      </div>
    </div>
  );
};
