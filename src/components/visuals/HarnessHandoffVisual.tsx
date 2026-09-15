import React, { useState } from 'react';
import { Bot, UserCheck, Terminal, FileJson, Link2, Zap } from 'lucide-react';

export const HarnessHandoffVisual: React.FC = () => {
  const [targetAudience, setTargetAudience] = useState<'humans' | 'agents'>('agents');

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            Dual-Audience Handoff Package
          </span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-[10px] font-['Fira_Code']">
          <button
            onClick={() => setTargetAudience('agents')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              targetAudience === 'agents' ? 'bg-white text-[#2563EB] shadow-2xs' : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            For AI Agents
          </button>
          <button
            onClick={() => setTargetAudience('humans')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              targetAudience === 'humans' ? 'bg-white text-[#2563EB] shadow-2xs' : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            For Engineers
          </button>
        </div>
      </div>

      {/* Main Spec Inspection Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        <div className="md:col-span-7 bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
          {targetAudience === 'agents' ? (
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] pb-1 border-b border-slate-200">
                <Bot className="w-4 h-4 text-[#2563EB]" />
                <span>AI Coding Agent Endpoints (Cursor / Claude Code)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 space-y-1 font-['Fira_Code'] text-[10px]">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Discovery Index:</span>
                  <span className="text-[#2563EB] font-bold">/handoff/index.json</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>LLM Guidance File:</span>
                  <span className="text-[#2563EB] font-bold">/llms.txt</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>DOM Dumps:</span>
                  <span className="text-emerald-700 font-bold">SSR JSON Trees</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-normal">
                Engineers prompt their local AI coding agent directly using the live URL without cloning or digging through Figma layers.
              </p>
            </div>
          ) : (
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] pb-1 border-b border-slate-200">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Human Developer Deployment</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 space-y-1 font-['Fira_Code'] text-[10px]">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Deploy URL:</span>
                  <span className="text-[#2563EB] font-bold">coda-preview-v0116.vercel.app</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Deep Link:</span>
                  <span className="text-slate-700 font-medium">?state=step3&theme=codm</span>
                </div>
                <div className="flex items-center justify-between text-slate-500">
                  <span>Dev Chrome:</span>
                  <span className="text-emerald-700 font-bold">Stripped in Staging</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-normal">
                Engineers receive pixel-perfect, isolated store views with deep-linked state replication.
              </p>
            </div>
          )}

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
            <span>Velocity Gain:</span>
            <span className="text-emerald-700 font-bold">Pitch in &lt;24 hours</span>
          </div>
        </div>

        {/* Stats Column */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-2">
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <span className="text-[9px] font-['Fira_Code'] uppercase font-bold text-slate-400">Rework Rate</span>
            <div className="text-sm font-bold text-[#0F172A] font-['Fira_Code']">0 Loops</div>
            <p className="text-[9.5px] text-slate-500">Executable code removes interpretive gaps.</p>
          </div>
          <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
            <span className="text-[9px] font-['Fira_Code'] uppercase font-bold text-slate-400">Token Parity</span>
            <div className="text-sm font-bold text-[#2563EB] font-['Fira_Code']">100% Production</div>
            <p className="text-[9.5px] text-slate-500">Shared token keys across Figma & Code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
