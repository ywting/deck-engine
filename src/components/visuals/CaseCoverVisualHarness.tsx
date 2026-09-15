import React from 'react';
import { Cpu, ArrowRight, Layers, Code2, Sparkles, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export const CaseCoverVisualHarness: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans'] bg-gradient-to-br from-purple-50/90 via-white to-purple-50/40 p-4 sm:p-5 rounded-xl border border-purple-200 shadow-2xs">
      {/* Top Meta Header */}
      <div className="flex items-center justify-between pb-3 border-b border-purple-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
          <span className="text-[11px] font-['Fira_Code'] font-bold text-purple-800 uppercase tracking-wider">
            CASE STUDY 02 // FRONTIER DESIGN
          </span>
        </div>
        <span className="text-[11px] font-['Fira_Code'] text-purple-800 bg-purple-100/80 px-2.5 py-0.5 rounded border border-purple-200 font-semibold">
          Runnable Harness • 4.9/5
        </span>
      </div>

      {/* Hero Body */}
      <div className="my-auto py-3 space-y-4">
        {/* Title & Core Framing */}
        <div className="bg-purple-50/90 border border-purple-300 rounded-xl p-4.5 shadow-2xs">
          <div className="flex items-center gap-2 text-purple-800 font-['Fira_Code'] text-[11px] font-bold uppercase mb-1">
            <Cpu className="w-4 h-4 text-purple-700" />
            <span>Coda Payments • Frontier Design</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight mb-2">
            Frontier Design
          </h2>
          <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#334155]">
            How I shifted from static handoff to a live, interactive deliverable within Coda's design workflow. Replacing static Figma mockups and fragile handoff documents with a runnable, multi-brand TypeScript prototype harness.
          </p>
        </div>

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {/* Pillar 1 */}
          <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-slate-500">Layer 1</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Client Shell</span>
            </div>
            <div className="text-[13px] font-bold text-[#0F172A] mb-1">Interactive DeviceToolbar</div>
            <p className="text-[11.5px] leading-relaxed text-slate-600">
              Live viewport switching (iPhone, Android, Desktop) and instant hot-swapping across 12 enterprise brand themes.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-purple-50/70 border border-purple-200/80 rounded-xl p-3 shadow-2xs hover:border-purple-300 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-slate-500">Layer 2</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">87 Components</span>
            </div>
            <div className="text-[13px] font-bold text-[#0F172A] mb-1">Automated Quality Engine</div>
            <p className="text-[11.5px] leading-relaxed text-slate-600">
              Automated AST contract parsing, token hygiene scanners, and WCAG AA contrast gates running continuously.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="border border-purple-300 rounded-xl p-3 shadow-2xs bg-purple-50/40 hover:border-purple-400 transition-colors">
            <div className="flex items-center justify-between mb-1">
              <span className="font-['Fira_Code'] text-[10px] font-bold uppercase text-purple-800">Layer 3</span>
              <span className="font-['Fira_Code'] text-[10px] font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded">AI Ready</span>
            </div>
            <div className="text-[13px] font-bold text-purple-950 mb-1">Machine-Readable Specs</div>
            <p className="text-[11.5px] leading-relaxed text-slate-700">
              AGENTS.md contracts allowing autonomous coding agents to build UI features directly against verified design primitives.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Key Badges */}
      <div className="pt-3 border-t border-purple-200/80 flex flex-wrap items-center justify-between gap-2 text-[11.5px] text-slate-600">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-['Fira_Code'] text-slate-700 font-semibold">
            <Code2 className="w-3.5 h-3.5 text-purple-600" /> TypeScript + Tailwind + Motion
          </span>
          <span className="flex items-center gap-1 font-['Fira_Code'] text-slate-700 font-semibold">
            <Terminal className="w-3.5 h-3.5 text-purple-600" /> 0 Handoff Ambiguity
          </span>
        </div>
        <span className="font-['Fira_Code'] text-[11px] font-bold text-purple-800 flex items-center gap-1">
          Case 02 • 7 Comprehensive Slides
        </span>
      </div>
    </div>
  );
};
