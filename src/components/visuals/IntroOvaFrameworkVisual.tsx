import React, { useState } from 'react';
import { RefreshCw, ArrowRight, Zap, Target, Cpu, CheckCircle2 } from 'lucide-react';

export const IntroOvaFrameworkVisual: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 'optimisation',
      title: '1. Optimisation',
      persona: 'The Growth Driver',
      mindset: 'High-Velocity Experimentation & Funnel Conversion',
      color: 'emerald',
      icon: Zap,
      bulletPoints: [
        'Rigorous A/B experimentation engines',
        'Direct checkout funnel conversion lift',
        'Data-backed incremental de-risking',
        'Removing micro-frictions across checkout',
      ],
      deliverables: ['Production A/B Tests', 'Statistical Dashboards', 'Iterative Rollouts'],
    },
    {
      id: 'vision',
      title: '2. Vision',
      persona: 'The Strategic Architect',
      mindset: 'Qualitative Research & 3-Year Strategic Bets',
      color: 'amber',
      icon: Target,
      bulletPoints: [
        'Uncovering hidden market opportunities',
        'Aligning C-suite stakeholders on long-term bets',
        'Overcoming local maximums with stepped architectures',
        'Deep ethnography & in-group community research',
      ],
      deliverables: ['Stepped Bottom Sheet Vision', 'Brand Modernisation', 'Platform Independence'],
    },
    {
      id: 'architecture',
      title: '3. Architecture',
      persona: 'The Systems Engineer',
      mindset: 'Enterprise Design Systems & Multi-Tier Tokens',
      color: 'purple',
      icon: Cpu,
      bulletPoints: [
        'Scalable 3-tier token architecture (Global, Semantic, Brand)',
        'Unlocking white-label storefronts for AAA partners (EA, Activision, KONAMI)',
        'CI/CD integrated automated token pipelines',
        'Design engineering bridging design and production code',
      ],
      deliverables: ['Multi-Tier Design Tokens', 'CI/CD Sync', 'AI-Driven Velocity'],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between rounded-xl bg-white border border-slate-200 p-5 sm:p-6 relative overflow-hidden shadow-xs font-['Fira_Sans']">
      {/* Header Banner */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-['Fira_Code']">
            The O.V.A Tripartite Leadership Flywheel
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200 font-semibold">
          Click pillars to inspect
        </span>
      </div>

      {/* Flywheel Connection Bar */}
      <div className="my-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-2 text-[11px] font-['Fira_Code'] shrink-0">
          <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#166534] font-bold border border-emerald-200">
            Growth
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 text-[10px]">generates hypotheses →</span>
          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold border border-amber-200">
            Vision
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 text-[10px]">drives strategic roadmaps →</span>
          <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-800 font-bold border border-purple-200">
            Architecture
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500 text-[10px]">provides execution velocity</span>
        </div>
      </div>

      {/* 3 Interactive Pillars Grid (Pure White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2 flex-1 overflow-y-auto pr-1">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activePillar === idx;

          return (
            <div
              key={p.id}
              onClick={() => setActivePillar(idx)}
              className={`p-3.5 rounded-xl border flex flex-col justify-between cursor-pointer transition-all bg-white shadow-2xs ${
                isSelected
                  ? 'border-[#E11927] ring-2 ring-red-50 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`w-6 h-6 rounded-md flex items-center justify-center ${
                        p.color === 'emerald'
                          ? 'bg-emerald-50 text-[#166534] border border-emerald-200'
                          : p.color === 'amber'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-purple-50 text-purple-800 border border-purple-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-extrabold text-xs text-[#0A2540]">{p.title}</span>
                  </div>
                  <span
                    className={`text-[9px] font-['Fira_Code'] px-2 py-0.5 rounded font-semibold ${
                      p.color === 'emerald'
                        ? 'bg-emerald-50 text-[#166534]'
                        : p.color === 'amber'
                        ? 'bg-amber-50 text-amber-800'
                        : 'bg-purple-50 text-purple-800'
                    }`}
                  >
                    {p.persona}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-medium italic mb-2 leading-snug">
                  "{p.mindset}"
                </div>

                {/* Bullets */}
                <div className="space-y-1.5">
                  {p.bulletPoints.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-snug">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          p.color === 'emerald'
                            ? 'text-[#166534]'
                            : p.color === 'amber'
                            ? 'text-amber-600'
                            : 'text-purple-600'
                        }`}
                      />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverables Tag Strip */}
              <div className="mt-3 pt-2.5 border-t border-slate-100">
                <div className="text-[9px] font-['Fira_Code'] text-slate-400 uppercase tracking-wider mb-1 font-semibold">
                  Key Deliverables:
                </div>
                <div className="flex flex-wrap gap-1">
                  {p.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600 font-['Fira_Code'] font-medium"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Takeaway Callout */}
      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <span className="text-[11px]">
          <strong className="text-[#0A2540] font-bold">Leadership Synthesis:</strong> Craft alone is insufficient. Modern lead designers bridge business risk, technical tech debt, and user friction.
        </span>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold hidden md:inline">O.V.A Framework</span>
      </div>
    </div>
  );
};
