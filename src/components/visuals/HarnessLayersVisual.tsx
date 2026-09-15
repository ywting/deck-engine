import React, { useState } from 'react';
import { Smartphone, Cpu, ShieldCheck, Sparkles, Sliders, CheckCircle2, MessageSquare } from 'lucide-react';

export const HarnessLayersVisual: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'layer1' | 'layer2'>('layer1');

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            Two Layers, One Product Architecture
          </span>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-[10px] font-['Fira_Code']">
          <button
            onClick={() => setActiveLayer('layer1')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              activeLayer === 'layer1' ? 'bg-white text-[#2563EB] shadow-2xs' : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            Layer 1: Toolbar
          </button>
          <button
            onClick={() => setActiveLayer('layer2')}
            className={`px-2.5 py-0.5 rounded transition-all font-semibold cursor-pointer ${
              activeLayer === 'layer2' ? 'bg-white text-[#2563EB] shadow-2xs' : 'text-slate-600 hover:text-[#0F172A]'
            }`}
          >
            Layer 2: Engine Room
          </button>
        </div>
      </div>

      {/* Main Layer Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Visual Stage */}
        <div className="md:col-span-7 bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
          {activeLayer === 'layer1' ? (
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] pb-1 border-b border-slate-200">
                <Smartphone className="w-4 h-4 text-[#2563EB]" />
                <span>Layer 1: The DeviceToolbar (Client UI)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
                  <span>Device Frame</span>
                  <span className="font-bold text-[#0F172A]">iPhone 15 Pro • 393×852</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
                  <span>Token Inspector</span>
                  <span className="font-bold text-[#2563EB]">--brand-primary: #F59E0B</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
                  <span>Contrast Ratio</span>
                  <span className="font-bold text-emerald-700">7.4 : 1 (WCAG AAA)</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-200 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5 text-blue-950 font-medium">
                  <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Pixel-Pinned Comments</span>
                </div>
                <span className="font-['Fira_Code'] font-bold text-[#2563EB]">Active on DOM</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A] pb-1 border-b border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Layer 2: The Design Harness (The Engine Room)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 space-y-1.5 font-['Fira_Code'] text-[10px]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">AI Context Skills:</span>
                  <span className="font-bold text-[#0F172A]">19 Written Specs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Automated CLI Tools:</span>
                  <span className="font-bold text-[#2563EB]">26 Operations</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Regression Tests:</span>
                  <span className="font-bold text-emerald-700">96 Unit Suites (93 Pass)</span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-[10px] text-emerald-950 flex items-center justify-between">
                <span className="font-medium">Self-Healing Bounded Loop:</span>
                <span className="font-['Fira_Code'] font-bold text-emerald-800">pipeline:loop PASS</span>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-['Fira_Code'] text-slate-500">
            <span>Separation of Concerns</span>
            <span className="text-[#2563EB] font-bold">Zero Runtime Bleed</span>
          </div>
        </div>

        {/* Feature Cards Column */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-2">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
            <span className="text-[9px] font-['Fira_Code'] uppercase font-bold text-slate-400">Layer 1 Focus</span>
            <h5 className="text-xs font-bold text-[#0F172A]">Stakeholder Ergonomics</h5>
            <p className="text-[10px] text-slate-500 leading-normal">
              Non-blocking UI allowing instant review, responsive framing, and spatial comments.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
            <span className="text-[9px] font-['Fira_Code'] uppercase font-bold text-slate-400">Layer 2 Focus</span>
            <h5 className="text-xs font-bold text-[#0F172A]">AI Governance & Rigour</h5>
            <p className="text-[10px] text-slate-500 leading-normal">
              Grounds AI agents in exact tokens and halts pull requests if visual contrast breaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
