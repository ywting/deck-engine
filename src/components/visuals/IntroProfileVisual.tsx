import React from 'react';
import { Building2, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const IntroProfileVisual: React.FC = () => {
  const careerHistory = [
    {
      company: 'Coda Payments',
      role: 'Lead Product Designer',
      scope: 'Codashop & White-Label D2C Webstores (EA Sports, Activision, KONAMI)',
      period: 'Present',
      highlight: true,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      company: 'Singapore Press Holdings',
      role: 'Associate UX Director',
      scope: 'Digital transformation of Tamil Murasu & newsroom product workflows',
      period: 'Past',
      highlight: false,
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    {
      company: 'Discovery Network Asia',
      role: 'UX Lead',
      scope: 'Pan-regional streaming OTT platforms & consumer digital hubs',
      period: 'Past',
      highlight: false,
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    {
      company: 'Hyphen Group',
      role: 'Senior Product Designer',
      scope: 'Fintech comparison engines, financial wellness portals & design systems',
      period: 'Past',
      highlight: false,
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans']">
      {/* Middle: Leadership Trajectory Matrix */}
      <div className="space-y-3 mb-4 flex-1 flex flex-col justify-center">
        <div className="flex items-center justify-between text-[11px] font-['Fira_Code'] text-slate-500 pb-1">
          <span className="flex items-center gap-1.5 text-[#0A2540] font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#1D4ED8]" />
            Career Trajectory & Commercial Scale
          </span>
          <span className="text-slate-400 font-semibold">10+ YEARS EXPERIENCE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {careerHistory.map((item, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border transition-all ${
                item.highlight
                  ? 'bg-white border-[#1D4ED8]/40 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-bold text-xs text-[#0A2540] flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.highlight ? 'bg-[#E11927]' : 'bg-slate-400'}`} />
                  {item.company}
                </span>
                <span
                  className={`text-[9px] font-['Fira_Code'] px-2 py-0.5 rounded border font-semibold ${item.badgeColor}`}
                >
                  {item.period}
                </span>
              </div>
              <div className="text-[12px] font-semibold text-slate-700">{item.role}</div>
              <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                {item.scope}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: 4 Pillars of Competency */}
      <div className="pt-3 border-t border-slate-100">
        <div className="text-[10px] font-['Fira_Code'] text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between font-semibold">
          <span>Core Competencies & Execution Pillars</span>
          <span className="text-[#1D4ED8] flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#E11927]" /> Strategic Design Operator
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-50 border border-emerald-200 text-[#166534] flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#0A2540]">Growth & Experimentation</div>
              <div className="text-[10px] text-slate-500 leading-tight">Production A/B testing & funnel velocity</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center shrink-0">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#0A2540]">B2B2C Commercial Scale</div>
              <div className="text-[10px] text-slate-500 leading-tight">White-label AAA enterprise client wins</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#0A2540]">Design Engineering Systems</div>
              <div className="text-[10px] text-slate-500 leading-tight">Multi-tier token architectures</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-red-50 border border-red-200 text-[#E11927] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#0A2540]">Executive Transformation</div>
              <div className="text-[10px] text-slate-500 leading-tight">Aligning C-suite risk & tech-debt velocity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
