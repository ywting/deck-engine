import React, { useState } from 'react';
import { Layers, CheckCircle2, Sliders, Smartphone, AlertTriangle, Eye, Sparkles } from 'lucide-react';

export const MuktaMalarTypographicVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'weights' | 'glare'>('comparison');

  const samplePhrase = 'மனித உரிமைகளை அவமதித்தலும் இகழ்தலும், மனிதகுலத்தின் மனசாட்சியை';

  const weightRamp = [
    { weight: 200, name: 'ExtraLight', style: { fontWeight: 200 }, token: 'font-extralight', useCase: 'Subtle captions & timestamp metadata' },
    { weight: 300, name: 'Light', style: { fontWeight: 300 }, token: 'font-light', useCase: 'Byline credits & photographic attributions' },
    { weight: 400, name: 'Regular', style: { fontWeight: 400 }, token: 'font-normal', useCase: 'Long-form editorial body prose & essays' },
    { weight: 500, name: 'Medium', style: { fontWeight: 500 }, token: 'font-medium', useCase: 'Lead article summaries & category nav rails' },
    { weight: 600, name: 'SemiBold', style: { fontWeight: 600 }, token: 'font-semibold', useCase: 'Section deck subheadings & data labels' },
    { weight: 700, name: 'Bold', style: { fontWeight: 700 }, token: 'font-bold', useCase: 'Primary front-page news card headlines' },
    { weight: 800, name: 'ExtraBold', style: { fontWeight: 800 }, token: 'font-extrabold', useCase: 'Urgent breaking news alerts & hero banners' },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs font-['Fira_Sans'] text-slate-900 justify-between gap-5">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3.5">
        <div className="flex items-center gap-2">
          <div>
            <span className="font-['Fira_Code'] text-[11px] font-semibold tracking-wider text-slate-500 uppercase block">
              TYPOGRAPHIC BENCHMARK
            </span>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <span>Mukta Malar Typographic Panel</span>
            </h4>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg border border-slate-300/60 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-2.5 py-1 rounded text-xs font-['Fira_Code'] font-medium transition-all cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-white text-blue-600 font-bold shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Comparison
          </button>
          <button
            onClick={() => setActiveTab('weights')}
            className={`px-2.5 py-1 rounded text-xs font-['Fira_Code'] font-medium transition-all cursor-pointer ${
              activeTab === 'weights'
                ? 'bg-white text-blue-600 font-bold shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            7-Weight Ramp
          </button>
          <button
            onClick={() => setActiveTab('glare')}
            className={`px-2.5 py-1 rounded text-xs font-['Fira_Code'] font-medium transition-all cursor-pointer ${
              activeTab === 'glare'
                ? 'bg-white text-blue-600 font-bold shadow-2xs border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Glare & Counters
          </button>
        </div>
      </div>

      {/* Tab 1: Mukta Malar: Approachable & Screen-Optimised Full-Width Showcase */}
      {activeTab === 'comparison' && (
        <div className="flex-1 flex flex-col gap-4">
          {/* Wide Card: Digital Mukta Malar: Approachable & Screen-Optimised */}
          <div className="w-full bg-white rounded-xl border border-emerald-300/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-slate-100 pb-3">
                <span className="font-['Fira_Code'] text-xs font-bold text-emerald-800 uppercase flex items-center gap-1.5 tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Digital Mukta Malar: Approachable & Screen-Optimised
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-['Fira_Code'] font-bold">
                    Humanist Sans
                  </span>
                  <span className="text-[11px] font-['Fira_Code'] text-slate-500">
                    font-family: 'Mukta Malar', sans-serif
                  </span>
                </div>
              </div>

              {/* Live Google Font Specimen Boxes (Regular 400 & Bold 700) spanning full width with ample room */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Regular (Weight 400) */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Fira_Code'] text-xs font-bold text-slate-700 uppercase">
                        Regular (Weight 400)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-['Fira_Code'] font-semibold">
                        Body Editorial
                      </span>
                    </div>
                    <p
                      className="font-mukta text-slate-900 text-[17px] sm:text-[19px] leading-[1.8] font-normal my-2 tracking-normal break-normal"
                      style={{ fontFamily: "'Mukta Malar', sans-serif", fontWeight: 400 }}
                    >
                      {samplePhrase}
                    </p>
                  </div>
                  <div className="pt-2.5 mt-2 border-t border-slate-200 text-xs font-['Fira_Code'] text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Open humanist curves • Glare-resistant monolinear strokes
                  </div>
                </div>

                {/* Bold (Weight 700) */}
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-['Fira_Code'] text-xs font-bold text-emerald-900 uppercase">
                        Bold (Weight 700)
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 text-[10px] font-['Fira_Code'] font-bold">
                        Headline Priority
                      </span>
                    </div>
                    <p
                      className="font-mukta text-slate-950 text-[17px] sm:text-[19px] leading-[1.8] font-bold my-2 tracking-normal break-normal"
                      style={{ fontFamily: "'Mukta Malar', sans-serif", fontWeight: 700 }}
                    >
                      {samplePhrase}
                    </p>
                  </div>
                  <div className="pt-2.5 mt-2 border-t border-emerald-200/80 text-xs font-['Fira_Code'] text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    High optical contrast • Inner loops remain open and distinct
                  </div>
                </div>
              </div>

              {/* Typographic Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-0.5">Outdoor Solar Glare</strong>
                    Monolinear strokes eliminate thin-line clipping in tropical Singapore sun.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-0.5">Youth Perception</strong>
                    Dismantles the intimidation barrier; feels inviting, contemporary, and fresh.
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="text-slate-900 block font-semibold mb-0.5">7-Weight Hierarchy</strong>
                    Unlocks nuanced editorial ramps from breaking alerts to body prose.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Full 7-Weight Ramp Display */}
      {activeTab === 'weights' && (
        <div className="flex-1 flex flex-col gap-3">
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-600 tracking-wider uppercase flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                MUKTA MALAR 7-WEIGHT EDITORIAL SCALE (200 → 800)
              </span>
              <span className="text-[10px] font-['Fira_Code'] text-blue-600 font-semibold">
                Bypassing Binary Regular/Bold Constraints
              </span>
            </div>

            <div className="space-y-2.5 divide-y divide-slate-100">
              {weightRamp.map((item) => (
                <div key={item.weight} className="pt-2.5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 sm:w-56 shrink-0">
                    <span className="px-2 py-0.5 rounded bg-slate-100 font-['Fira_Code'] text-[11px] font-bold text-slate-700 w-12 text-center">
                      {item.weight}
                    </span>
                    <span className="font-['Fira_Code'] text-xs font-semibold text-slate-900">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-['Fira_Code'] hidden md:inline">
                      {item.useCase}
                    </span>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <p
                      className="font-mukta text-slate-900 text-[15px] sm:text-[16px] leading-[1.6] truncate"
                      style={{ fontFamily: "'Mukta Malar', sans-serif", ...item.style }}
                      title={samplePhrase}
                    >
                      {samplePhrase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-blue-900 font-['Fira_Code']">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              7 weights enable crisp distinction between breaking headlines, deck subheads, body prose, and utility tickers.
            </span>
            <span className="font-bold text-blue-700 shrink-0">Responsive Scaling</span>
          </div>
        </div>
      )}

      {/* Tab 3: Glare, Monolinear Geometry & Counter-Loops */}
      {activeTab === 'glare' && (
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
              <span className="font-['Fira_Code'] text-[11px] font-bold text-slate-600 tracking-wider uppercase flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                MONOLINEAR MOBILE LEGIBILITY UNDER OUTDOOR GLARE
              </span>
              <span className="text-[10px] font-['Fira_Code'] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Loop Counter Preservation
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Counter Loops Feature */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="font-['Fira_Code'] text-xs font-bold text-slate-900">
                    Open Inner Counter-Loops (ண, ன, ல)
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  In complex glyphs like <strong>ண</strong> (na) and <strong>ன</strong> (na), traditional serif fonts fill in and blur on budget mobile LCD screens. Mukta Malar's widened inner loops maintain distinct apertures even at 13px body text.
                </p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-around font-mukta text-2xl text-slate-900 font-bold" style={{ fontFamily: "'Mukta Malar', sans-serif" }}>
                  <span>ண</span>
                  <span>ன</span>
                  <span>ல</span>
                  <span>ள</span>
                  <span>ழ</span>
                </div>
              </div>

              {/* Outdoor Glare Resilience */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="font-['Fira_Code'] text-xs font-bold text-slate-900">
                    Monolinear Stroke Resilience
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Singapore bus stops and outdoor MRT platforms present intense 10,000+ lux sunlight. Hairline serifs vanish; Mukta Malar's even stroke width ensures contrast remains WCAG AAA compliant.
                </p>
                <div className="p-3 bg-slate-900 rounded-lg text-white font-mukta text-sm leading-relaxed" style={{ fontFamily: "'Mukta Malar', sans-serif" }}>
                  <p className="text-emerald-400 font-semibold mb-1">சிங்கப்பூர் தமிழ் முரசு</p>
                  <p className="text-slate-300 text-xs">உயர் சூரிய ஒளியிலும் தெளிவாக படிக்கக்கூடிய எழுத்துரு வடிவமைப்பு.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-700 font-['Fira_Code']">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-slate-500" />
              Preserves optical clarity across budget Android displays (480p to 1080p).
            </span>
            <span className="text-slate-500">Humanist Indic Geometry</span>
          </div>
        </div>
      )}

    </div>
  );
};
