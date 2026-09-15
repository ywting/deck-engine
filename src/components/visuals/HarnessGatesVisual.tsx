import React from 'react';
import { ShieldCheck, CheckCircle2, GitPullRequest, Globe, FileCode2, RefreshCw } from 'lucide-react';

export const HarnessGatesVisual: React.FC = () => {
  const gates = [
    {
      title: 'Gate 01 · 96 Unit Tests',
      scope: '93 passing tests covering token inheritance & SSR hydration',
      status: 'Passed (96 Suites)',
      icon: ShieldCheck,
      color: 'text-emerald-600',
    },
    {
      title: 'Gate 02 · Library Contrast Sweep',
      scope: '87 previews × 12 brands = 1,044 accessibility checks',
      status: 'Passed (0 regressions)',
      icon: RefreshCw,
      color: 'text-blue-600',
    },
    {
      title: 'Gate 03 · 783 SSR Renders & Locale Stress',
      scope: 'Multi-device (iPhone, Samsung) + Arabic & Japanese injection',
      status: 'Passed (0 overflows)',
      icon: Globe,
      color: 'text-purple-600',
    },
    {
      title: 'Gate 04 · Bounded Retry Loop (pipeline:loop)',
      scope: 'Stage failure triage, specialist agent routing & escalation',
      status: 'Automated Recovery',
      icon: FileCode2,
      color: 'text-indigo-600',
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <GitPullRequest className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            Automated PR Quality Gates (GitHub Actions)
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold font-['Fira_Code'] flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ALL CHECKS GREEN
        </span>
      </div>

      {/* Gates List */}
      <div className="space-y-2.5 flex-1 justify-center flex flex-col min-h-0">
        {gates.map((g, idx) => {
          const Icon = g.icon;
          return (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-md bg-white border border-slate-200 shadow-2xs">
                  <Icon className={`w-4 h-4 ${g.color}`} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#0F172A]">{g.title}</h5>
                  <p className="text-[10px] font-['Fira_Code'] text-slate-500">{g.scope}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-['Fira_Code'] font-bold text-emerald-700">
                {g.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Assurance */}
      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
        <span>Execution: Pre-Human Verification</span>
        <span className="text-[#2563EB] font-bold">Zero Visual Regression</span>
      </div>
    </div>
  );
};
