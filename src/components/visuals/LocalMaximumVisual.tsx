import React, { useState } from 'react';
import { TrendingUp, Target, Database, Compass, AlertCircle } from 'lucide-react';

export const LocalMaximumVisual: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principles = [
    {
      id: 0,
      name: '1. Contextual Focus',
      stat: '+1.17% purchase',
      substat: '+2.74% SKU pricing clarity',
      icon: Target,
      desc: 'Show purchasable SKUs upfront and remove mental math. Gamers immediately see local currency conversions without manual recalculation.',
      research: 'Indonesia & Philippines gamer diary studies revealed high anxiety around hidden checkout taxes.',
    },
    {
      id: 1,
      name: '2. Systemic Memory',
      stat: '+0.47% purchase',
      substat: 'Validated ID caching',
      icon: Database,
      desc: 'Auto-save validated Game IDs and pre-select routine payment rails. Returning 70% users are immediately recognised.',
      research: 'Brazil & SEA gamers repeatedly fat-fingered complex 9-digit alphanumeric User IDs.',
    },
    {
      id: 2,
      name: '3. Progressive Guidance',
      stat: '-23.11% errors',
      substat: 'Dynamic step signposts',
      icon: Compass,
      desc: 'Replace blind scrolling with dynamic step signposting. Visual cues clearly indicate what step is active and what is completed.',
        research: 'Usability testing revealed gamers scrolled past required input fields without realising they were mandatory.',
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Year 1: Optimisation Run & The Local Maximum Curve
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">
          Cumulative +20% Lift → Flatline
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: Plateau Curve Graph (White Card) */}
        <div className="md:col-span-6 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-[#0A2540]">The "Local Maximum" Plateau</span>
            <span className="text-[10px] text-amber-700 font-['Fira_Code'] font-semibold">Micro-optimisations hit ceiling</span>
          </div>

          {/* SVG Plateau Curve */}
          <div className="my-2 relative w-full h-32 flex items-center justify-center">
            <svg viewBox="0 0 340 140" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="curveGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#166534" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#d97706" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="30" y1="20" x2="330" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" />
              <line x1="30" y1="60" x2="330" y2="60" stroke="#E2E8F0" strokeDasharray="3 3" />
              <line x1="30" y1="100" x2="330" y2="100" stroke="#E2E8F0" strokeDasharray="3 3" />
              <line x1="30" y1="120" x2="330" y2="120" stroke="#CBD5E1" />

              {/* Axis labels */}
              <text x="5" y="24" fill="#64748B" fontSize="9" fontFamily="monospace">+20%</text>
              <text x="5" y="64" fill="#64748B" fontSize="9" fontFamily="monospace">+10%</text>
              <text x="15" y="123" fill="#64748B" fontSize="9" fontFamily="monospace">0%</text>

              {/* The S-Curve leading to Flatline */}
              <path
                d="M 35 120 C 70 115, 110 50, 180 32 C 220 28, 260 25, 325 25"
                fill="none"
                stroke="url(#curveGradientLight)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Milestone Dots */}
              <circle cx="110" cy="75" r="4" fill="#166534" />
              <text x="100" y="95" fill="#166534" fontSize="9" fontWeight="700">Principle Wins</text>

              <circle cx="210" cy="30" r="4" fill="#d97706" />
              <text x="195" y="16" fill="#d97706" fontSize="9" fontWeight="700">+20% Cumulative</text>

              {/* Flatline Ceiling Dot */}
              <circle cx="310" cy="25" r="5" fill="#dc2626" />
              <text x="245" y="42" fill="#dc2626" fontSize="9" fontWeight="700">Ceiling: +0.05%</text>

              {/* Wall marker */}
              <line x1="280" y1="10" x2="280" y2="120" stroke="#dc2626" strokeDasharray="2 2" opacity="0.6" />
            </svg>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-2.5 text-[11px] text-red-800 flex items-start gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#E11927]" />
            <span>
              <strong>The Architectural Ceiling:</strong> Micro-tweaks on a single-page form yielded diminishing returns. Internal engineering squads refused a stepped rewrite until an external catalyst appeared.
            </span>
          </div>
        </div>

        {/* Right Column: 3 Coda Commerce Design Principles (White Cards) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-1.5">
          <div className="text-[11px] font-bold text-[#0A2540] px-1 font-['Fira_Code'] uppercase">
            3 Coda Commerce Design Principles
          </div>

          <div className="space-y-2 flex-1 flex flex-col justify-between">
            {principles.map((p) => {
              const Icon = p.icon;
              const isSelected = activePrinciple === p.id;

              return (
                <button
                  key={p.id}
                  onClick={() => setActivePrinciple(p.id)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer bg-white shadow-2xs ${
                    isSelected
                      ? 'border-[#E11927] ring-2 ring-red-50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                        <Icon className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-bold text-[#0A2540]">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-['Fira_Code'] text-[10px]">
                      <span className="text-[#166534] font-bold px-1.5 py-0.5 bg-emerald-50 rounded border border-emerald-200">
                        {p.stat}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">{p.desc}</p>

                  {isSelected && (
                    <div className="mt-2 pt-1.5 border-t border-slate-100 text-[10px] text-amber-800 font-['Fira_Code'] font-medium">
                      Research Origin: {p.research}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
