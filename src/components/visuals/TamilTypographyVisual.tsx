import React, { useState } from 'react';
import { Type, CheckCircle2, AlertTriangle, MessageCircle, Send, Smartphone, Sparkles, Layers, Sliders } from 'lucide-react';

export const TamilTypographyVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'typography' | 'mobile-ia'>('typography');

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs font-['Fira_Sans'] text-slate-900 justify-between gap-5">
      {/* Visual Stage Header & Tab Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3.5">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
            <Type className="w-4 h-4" />
          </div>
          <div>
            <span className="font-['Fira_Code'] text-[11px] font-semibold tracking-wider text-slate-500 uppercase block">
              DESIGN CRAFT // NON-LATIN SYSTEMS
            </span>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Tamil Typography & Mobile Ergonomics
            </h4>
          </div>
        </div>

        {/* Toggle Pills */}
        <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg border border-slate-300/60 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-2.5 py-1 rounded text-xs font-['Fira_Code'] font-medium transition-all cursor-pointer ${
              activeTab === 'typography'
                ? 'bg-white text-blue-600 font-bold shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            01 // Leading Scale
          </button>
          <button
            onClick={() => setActiveTab('mobile-ia')}
            className={`px-2.5 py-1 rounded text-xs font-['Fira_Code'] font-medium transition-all cursor-pointer ${
              activeTab === 'mobile-ia'
                ? 'bg-white text-blue-600 font-bold shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            02 // Mobile IA Hooks
          </button>
        </div>
      </div>

      {/* Main Content Stage */}
      {activeTab === 'typography' ? (
        <div className="flex-1 flex flex-col gap-4">
          {/* Top Card: Diacritic Clearance Comparison */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-500 tracking-wider uppercase flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                TYPOGRAPHIC RHYTHM & DIACRITIC CLEARANCE
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-['Fira_Code'] font-semibold border border-blue-200">
                247 Glyph Support
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1.4x Standard Leading Box (Problem) */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-['Fira_Code'] text-[11px] font-bold text-rose-700 uppercase flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      1.4x Line-Height (Standard)
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-rose-200/80 text-rose-800 text-[10px] font-bold">
                      Collision Error
                    </span>
                  </div>
                  {/* Sample Tamil Text with tight line height */}
                  <div className="text-slate-800 text-sm font-medium leading-[1.35] p-3 bg-white rounded-lg border border-rose-200 relative overflow-hidden">
                    <p className="mb-0">சிங்கப்பூர் தமிழ் முரசு நாளிதழின்</p>
                    <p className="text-rose-600 font-semibold bg-rose-100/70 px-1 rounded">
                      டிஜிட்டல் மறுமலர்ச்சி மற்றும் செய்தி
                    </p>
                    <p className="mt-0">கலாச்சார வளர்ச்சி ஆய்வுகள்.</p>
                    <div className="mt-2 text-[10px] text-rose-700 font-['Fira_Code'] flex items-center gap-1">
                      <span>⚠️ Upper vowel pulli dots (ீ/ி) collide with descenders</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-rose-800 leading-normal">
                  Causes heavy visual friction, character clipping, and reader eye fatigue on mobile screens.
                </div>
              </div>

              {/* 1.75x Engineered Vertical Leading Box (Solution) */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-['Fira_Code'] text-[11px] font-bold text-emerald-800 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      1.75x Engineered Leading
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-200/80 text-emerald-900 text-[10px] font-bold">
                      Optimal Clearance
                    </span>
                  </div>
                  {/* Sample Tamil Text with 1.75x line height */}
                  <div className="text-slate-900 text-sm font-medium leading-[1.75] p-3 bg-white rounded-lg border border-emerald-200">
                    <p className="text-emerald-900 font-bold bg-emerald-100/80 px-1 rounded inline-block">
                      டிஜிட்டல் மறுமலர்ச்சி மற்றும் செய்தி
                    </p>
                    <p className="mt-0">கலாச்சார வளர்ச்சி ஆய்வுகள்.</p>
                    <div className="mt-1 text-[10px] text-emerald-800 font-['Fira_Code'] flex items-center gap-1">
                      <span>✨ 8pt grid vertical clearance around pulli dots (ஃ, ி, ீ)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-emerald-900 leading-normal">
                  Provides breathable line gaps, preserving distinct counters for complex Tamil glyphs.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile IA & Direct Distribution Hooks Stage */
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-500 tracking-wider uppercase flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                MOBILE CARD IA & DIRECT CHAT-SHARE HOOKS
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-['Fira_Code'] font-semibold border border-emerald-200">
                Frictionless Distribution
              </span>
            </div>

            {/* Mobile View Mockup Stream */}
            <div className="max-w-md mx-auto w-full bg-slate-100 p-3 rounded-2xl border border-slate-300 shadow-md">
              {/* Category Rail */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 no-scrollbar text-[11px] font-['Fira_Code']">
                <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white font-bold shrink-0">முகப்பு (Home)</span>
                <span className="px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 font-medium shrink-0">சமூகம்</span>
                <span className="px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 font-medium shrink-0">சினிமா</span>
                <span className="px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 font-medium shrink-0">வணிகம்</span>
              </div>

              {/* Sample Mobile Article Card */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-['Fira_Code'] font-bold">
                    சமூகம் // COMMUNITY
                  </span>
                  <span className="text-[10px] text-slate-400 font-['Fira_Code']">3 mins read</span>
                </div>

                <h5 className="font-bold text-slate-900 text-sm leading-[1.6]">
                  சிங்கப்பூர் தமிழ் சமூகத்தின் டிஜிட்டல் மாற்றம் மற்றும் சாதனையாளர்கள்.
                </h5>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  மாணவர்களின் கல்வி சாதனைகள் மற்றும் உள்ளூர் சமூக தலைவர்களின் சிறப்பு நேர்காணல்.
                </p>

                {/* Integrated Direct Share Triggers */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-500 font-['Fira_Code'] font-medium">Direct Share:</span>
                  <div className="flex items-center gap-2">
                    <button className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-semibold flex items-center gap-1 shadow-2xs transition-transform active:scale-95">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-[11px] font-semibold flex items-center gap-1 shadow-2xs transition-transform active:scale-95">
                      <Send className="w-3.5 h-3.5" />
                      <span>Telegram</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-blue-900 font-['Fira_Code']">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Direct chat triggers directly enabled the 90% → 2.6% Facebook drop
            </span>
            <span className="font-bold text-blue-700">Native PWA Hooks</span>
          </div>
        </div>
      )}

      {/* Visual Footnote / Metric Badge */}
      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-['Fira_Code']">
        <span className="flex items-center gap-1.5 text-slate-700 font-medium">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          Tamil Murasu Production Design System
        </span>
        <span className="text-slate-400">SPH Media Trust</span>
      </div>
    </div>
  );
};
