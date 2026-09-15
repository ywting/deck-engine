import React from 'react';
import { Award, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';

export const HarnessMaturityVisual: React.FC = () => {
  const levels = [
    {
      level: 'L1',
      name: 'Context Engineering',
      score: '5.0 / 5.0',
      pct: 100,
      desc: '19 written skills, token atlas, and 12 brand themes ground AI prompts.',
    },
    {
      level: 'L2',
      name: 'Skill Curation',
      score: '5.0 / 5.0',
      pct: 100,
      desc: '26 custom CLI operations automating manual handoff overhead.',
    },
    {
      level: 'L3',
      name: 'Workflow Orchestration',
      score: '4.8 / 5.0',
      pct: 96,
      desc: 'pipeline:loop intelligent dispatch across 3 specialised agent roles.',
    },
    {
      level: 'L4',
      name: 'Evaluation Design',
      score: '5.0 / 5.0',
      pct: 100,
      desc: '87 components × 12 themes WCAG contrast & 783 SSR multi-device sweeps.',
    },
    {
      level: 'L5',
      name: 'Knowledge Compounding',
      score: '4.8 / 5.0',
      pct: 96,
      desc: '96 unit tests (93 pass), 10 bug classes, and 41 banked retrospective learnings.',
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            5-Level AI Design Infrastructure Scorecard
          </span>
        </div>
        <div className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200 text-[11px] font-bold font-['Fira_Code']">
          OVERALL: 4.9 / 5.0
        </div>
      </div>

      {/* 5 Levels Progression Bars */}
      <div className="space-y-2.5 flex-1 justify-center flex flex-col min-h-0">
        {levels.map((l) => (
          <div key={l.level} className="bg-slate-50 border border-slate-200 rounded-lg p-2.5">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.2 rounded bg-white border border-slate-200 text-[10px] font-['Fira_Code'] font-bold text-[#2563EB]">
                  {l.level}
                </span>
                <span className="text-xs font-bold text-[#0F172A]">{l.name}</span>
              </div>
              <span className="font-['Fira_Code'] text-xs font-bold text-slate-700">{l.score}</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1">
              <div
                className="h-full bg-[#2563EB] rounded-full transition-all duration-500"
                style={{ width: `${l.pct}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-500 line-clamp-1">{l.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer Benchmark Synthesis */}
      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
        <span className="flex items-center gap-1 text-emerald-700 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5" /> High-Maturity Tier
        </span>
        <span>Standard: Enterprise Production Harness</span>
      </div>
    </div>
  );
};
