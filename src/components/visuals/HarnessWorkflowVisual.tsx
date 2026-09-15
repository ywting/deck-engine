import React, { useState } from 'react';
import { PlayCircle, Eye, MessageSquare, Camera, Send, Layers, CheckCircle2 } from 'lucide-react';

export const HarnessWorkflowVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Set the Stage',
      desc: 'Frame, orientation, dark/light, brand skin via ?theme= and ?sku=',
      icon: Layers,
      color: 'text-blue-600',
    },
    {
      num: 2,
      title: 'Build & Browse',
      desc: '87 auto-catalogued component previews with interactive state matrix',
      icon: PlayCircle,
      color: 'text-indigo-600',
    },
    {
      num: 3,
      title: 'Inspect & Specify',
      desc: 'Click-to-inspect token mapping, computed CSS, and WCAG AA score',
      icon: Eye,
      color: 'text-purple-600',
    },
    {
      num: 4,
      title: 'Align the Room',
      desc: 'Async pixel-pinned comments, recorded cursor tours, heatmaps',
      icon: MessageSquare,
      color: 'text-amber-600',
    },
    {
      num: 5,
      title: 'Capture & Steer',
      desc: '2x WebP screenshot rigs, deterministic reference PNG diffs',
      icon: Camera,
      color: 'text-rose-600',
    },
    {
      num: 6,
      title: 'Ship the Review',
      desc: 'Immutable store-locked URLs + static /handoff/ machine specs',
      icon: Send,
      color: 'text-emerald-600',
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <PlayCircle className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            The 6-Phase Review Workflow
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold">
          Step {activeStep} of 6
        </span>
      </div>

      {/* Interactive Step Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
        {steps.map((s) => {
          const Icon = s.icon;
          const isSelected = activeStep === s.num;
          return (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-50/70 border-[#2563EB] shadow-2xs'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-['Fira_Code'] font-bold ${isSelected ? 'text-[#2563EB]' : 'text-slate-400'}`}>
                  PHASE 0{s.num}
                </span>
                <Icon className={`w-3.5 h-3.5 ${s.color}`} />
              </div>
              <div className="text-xs font-bold text-[#0F172A] leading-tight mb-1">{s.title}</div>
              <p className="text-[9.5px] text-slate-500 line-clamp-2 leading-tight">{s.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Canvas */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[9px] font-['Fira_Code'] uppercase font-bold text-[#2563EB]">
              Selected Phase 0{activeStep} Execution Spec
            </span>
            <h5 className="text-sm font-bold text-[#0F172A] mt-0.5">{steps[activeStep - 1].title}</h5>
          </div>
          <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-['Fira_Code'] font-bold text-slate-600">
            Automated in CLI
          </span>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
          {steps[activeStep - 1].desc}
        </p>
        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
          <span>State: <strong className="text-emerald-700">Deterministic</strong></span>
          <span>Zero Sync Meetings Needed</span>
        </div>
      </div>
    </div>
  );
};
