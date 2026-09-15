import React from 'react';
import { SlideContent } from '../types';
import legacyScreenshot from '../assets/images/codashop_mlbb_legacy_screenshot.jpg';

interface SlideThumbnailPreviewProps {
  slide: SlideContent;
  className?: string;
}

export const SlideThumbnailPreview: React.FC<SlideThumbnailPreviewProps> = ({
  slide,
  className = '',
}) => {
  // Render bespoke miniature visual according to slide.visualType
  const renderMiniVisual = () => {
    switch (slide.visualType) {
      case 'intro-profile-card':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1.5 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-[5px] font-bold">YW</div>
                <span className="text-[7px] font-bold text-[#0F172A] font-['Fira_Code']">Yi Wei, Ting</span>
              </div>
              <span className="text-[5.5px] px-1 py-0.2 rounded bg-blue-50 text-[#2563EB] border border-blue-200 font-bold">
                Lead Designer
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1 my-0.5">
              <div className="h-3 bg-slate-50 rounded-xs border border-slate-200 flex items-center px-1">
                <span className="text-[5px] text-slate-600 font-['Fira_Code'] font-medium">Coda Payments</span>
              </div>
              <div className="h-3 bg-slate-50 rounded-xs border border-slate-200 flex items-center px-1">
                <span className="text-[5px] text-slate-600 font-['Fira_Code'] font-medium">SPH (UX Dir)</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-500 font-semibold">
              <span>Fintech • Gaming • Media</span>
              <span>10+ Yrs</span>
            </div>
          </div>
        );

      case 'intro-track-record':
        return (
          <div className="w-full h-full grid grid-cols-3 gap-1 p-1 bg-white rounded border border-slate-200">
            <div className="bg-slate-50 border border-slate-200 rounded p-0.5 flex flex-col justify-between">
              <span className="text-[5px] font-bold text-[#2563EB] font-['Fira_Code']">4 Orgs</span>
              <span className="text-[4.5px] text-slate-500">Coda • SPH</span>
            </div>
            <div className="bg-emerald-50/50 border border-emerald-200 rounded p-0.5 flex flex-col justify-between">
              <span className="text-[5px] font-bold text-emerald-800 font-['Fira_Code']">2 Voices</span>
              <span className="text-[4.5px] text-slate-500">Hyphen • DBS</span>
            </div>
            <div className="bg-blue-50/50 border border-blue-200 rounded p-0.5 flex flex-col justify-between">
              <span className="text-[5px] font-bold text-[#2563EB] font-['Fira_Code']">Track Record</span>
              <span className="text-[4.5px] text-slate-500">10+ Yrs</span>
            </div>
          </div>
        );

      case 'intro-agenda':
        return (
          <div className="w-full h-full grid grid-cols-3 gap-1 p-1 bg-white rounded border border-slate-200">
            <div className="bg-emerald-50/40 border border-emerald-200 rounded p-1 flex flex-col justify-between">
              <span className="text-[5px] font-['Fira_Code'] font-bold text-emerald-800">Case 1</span>
              <span className="text-[4.5px] text-slate-500">Checkout</span>
              <span className="text-[5px] font-['Fira_Code'] font-bold text-emerald-700">+20% Lift</span>
            </div>
            <div className="bg-blue-50/40 border border-blue-200 rounded p-1 flex flex-col justify-between">
              <span className="text-[5px] font-['Fira_Code'] font-bold text-[#2563EB]">Case 2</span>
              <span className="text-[4.5px] text-slate-500">AI Harness</span>
              <span className="text-[5px] font-['Fira_Code'] font-bold text-[#2563EB]">4.9 / 5.0</span>
            </div>
            <div className="bg-amber-50/40 border border-amber-200 rounded p-1 flex flex-col justify-between">
              <span className="text-[5px] font-['Fira_Code'] font-bold text-amber-800">Case 3</span>
              <span className="text-[4.5px] text-slate-500">Murasu</span>
              <span className="text-[5px] font-['Fira_Code'] font-bold text-amber-800">3x MAU</span>
            </div>
          </div>
        );

      case 'case-cover-checkout':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-emerald-50/40 rounded border border-emerald-300">
            <div className="flex items-center justify-between">
              <span className="text-[5px] font-['Fira_Code'] font-bold text-emerald-800">CASE 01 COVER</span>
              <span className="text-[4px] px-1 py-0.2 rounded bg-emerald-100 text-emerald-900 font-bold">36 Mo</span>
            </div>
            <div className="my-0.5">
              <div className="text-[5.5px] font-bold text-[#0F172A] leading-tight">The 3-Year Checkout</div>
              <div className="text-[4.5px] text-slate-500">Coda Payments • Fintech</div>
            </div>
            <div className="flex items-center justify-between text-[4.5px] font-['Fira_Code'] text-emerald-700 font-bold">
              <span>+20% Lift</span>
              <span>~30% TPV</span>
            </div>
          </div>
        );

      case 'case-cover-harness':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-purple-50/40 rounded border border-purple-300">
            <div className="flex items-center justify-between">
              <span className="text-[5px] font-['Fira_Code'] font-bold text-purple-800">CASE 02 COVER</span>
              <span className="text-[4px] px-1 py-0.2 rounded bg-purple-100 text-purple-900 font-bold">4.9 / 5.0</span>
            </div>
            <div className="my-0.5">
              <div className="text-[5.5px] font-bold text-[#0F172A] leading-tight">AI Design Harness</div>
              <div className="text-[4.5px] text-slate-500">Runnable Code-as-Canvas</div>
            </div>
            <div className="flex items-center justify-between text-[4.5px] font-['Fira_Code'] text-purple-700 font-bold">
              <span>87 Components</span>
              <span>12 Brands</span>
            </div>
          </div>
        );

      case 'case-cover-tamil-murasu':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-amber-50/40 rounded border border-amber-300">
            <div className="flex items-center justify-between">
              <span className="text-[5px] font-['Fira_Code'] font-bold text-amber-800">CASE 03 COVER</span>
              <span className="text-[4px] px-1 py-0.2 rounded bg-amber-100 text-amber-900 font-bold">90 Yrs</span>
            </div>
            <div className="my-0.5">
              <div className="text-[5.5px] font-bold text-[#0F172A] leading-tight">Digitalising Tamil Murasu</div>
              <div className="text-[4.5px] text-slate-500">SPH • Cultural Turnaround</div>
            </div>
            <div className="flex items-center justify-between text-[4.5px] font-['Fira_Code'] text-amber-800 font-bold">
              <span>3x MAU</span>
              <span>90%→2.6% FB</span>
            </div>
          </div>
        );

      case 'checkout-side-by-side':
        return (
          <div className="w-full h-full flex flex-col p-0.5 bg-white rounded border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-1 px-0.5 pb-0.5">
              <div className="w-1 h-1 rounded-full bg-rose-400" />
              <div className="w-1 h-1 rounded-full bg-amber-400" />
              <div className="w-1 h-1 rounded-full bg-emerald-400" />
              <span className="text-[4px] font-['Fira_Code'] text-slate-400 truncate">codashop • Legacy</span>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden rounded-xs border border-slate-200">
              <img
                src={legacyScreenshot}
                alt=""
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        );

      case 'marketplace-tug-of-war':
        return (
          <div className="w-full h-full flex flex-col gap-0.5 p-1 bg-white rounded border border-slate-200">
            <div className="grid grid-cols-3 gap-0.5 flex-1">
              <div className="bg-blue-50 border border-blue-200 rounded p-0.5 flex flex-col justify-between col-span-1">
                <span className="text-[4.5px] font-bold text-[#2563EB] font-['Fira_Code']">Value Hunter</span>
                <span className="text-[4px] text-slate-500">Price & FX</span>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-0.5 flex flex-col justify-between col-span-1">
                <span className="text-[4.5px] font-bold text-[#2563EB] font-['Fira_Code']">Convenience</span>
                <span className="text-[4px] text-slate-500">1-Tap</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-0.5 flex flex-col justify-between col-span-1">
                <span className="text-[4.5px] font-bold text-amber-800 font-['Fira_Code']">Publisher</span>
                <span className="text-[4px] text-slate-500">AOV</span>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded px-0.5 py-px text-center">
              <span className="text-[4.5px] font-bold text-emerald-800 font-['Fira_Code']">Common Ground</span>
            </div>
          </div>
        );

      case 'jtbd-archetypes':
        return (
          <div className="w-full h-full flex flex-col gap-0.5 p-1 bg-white rounded border border-slate-200">
            <div className="grid grid-cols-2 gap-0.5 flex-1">
              <div className="bg-blue-50 border border-blue-200 rounded p-0.5 flex flex-col justify-between">
                <span className="text-[4.5px] font-bold text-[#2563EB] font-['Fira_Code']">Players</span>
                <span className="text-[4px] text-slate-500">Demand</span>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-0.5 flex flex-col justify-between">
                <span className="text-[4.5px] font-bold text-amber-800 font-['Fira_Code']">Publishers</span>
                <span className="text-[4px] text-slate-500">Supply</span>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded px-0.5 py-px text-center">
              <span className="text-[4.5px] font-bold text-emerald-800 font-['Fira_Code']">Common Ground</span>
            </div>
          </div>
        );

      case 'friction-audit-tabs':
        return (
          <div className="w-full h-full flex flex-col gap-0.5 p-1 bg-white rounded border border-slate-200">
            <div className="grid grid-cols-4 gap-0.5">
              {['01', '02', '03', '04'].map((n, i) => (
                <div
                  key={n}
                  className={`rounded text-[4.5px] font-bold font-['Fira_Code'] text-center py-0.5 border ${
                    i === 0
                      ? 'bg-red-50 border-red-200 text-[#E11927]'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="flex-1 grid grid-cols-2 gap-0.5 min-h-0">
              <div className="bg-red-50/60 border border-red-200 rounded p-0.5">
                <span className="text-[4px] font-bold text-[#E11927] font-['Fira_Code']">Anti-Pattern</span>
              </div>
              <div className="bg-amber-50/60 border border-amber-200 rounded p-0.5">
                <span className="text-[4px] font-bold text-amber-800 font-['Fira_Code']">Impact</span>
              </div>
            </div>
          </div>
        );

      case 'craft-interventions':
        return (
          <div className="w-full h-full grid grid-cols-2 gap-1 p-1 bg-white rounded border border-slate-200">
            {[
              { t: '01 Decision', c: 'bg-blue-50 border-blue-200 text-[#2563EB]' },
              { t: '02 Memory', c: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
              { t: '03 Craft', c: 'bg-purple-50 border-purple-200 text-purple-700' },
              { t: '04 Flow', c: 'bg-amber-50 border-amber-200 text-amber-800' },
            ].map((s) => (
              <div key={s.t} className={`rounded p-0.5 border text-[4.5px] font-bold font-['Fira_Code'] ${s.c}`}>
                {s.t}
              </div>
            ))}
          </div>
        );

      case 'design-principles':
        return (
          <div className="w-full h-full flex flex-col gap-0.5 p-1 bg-white rounded border border-slate-200">
            <div className="h-2.5 bg-amber-50 border border-amber-200 rounded flex items-center justify-center">
              <span className="text-[4.5px] font-bold text-amber-800 font-['Fira_Code']">Bite-Sized Strategy</span>
            </div>
            <div className="grid grid-cols-3 gap-0.5 flex-1">
              <div className="bg-blue-50 border border-blue-200 rounded p-0.5 text-[4.5px] font-bold text-[#2563EB] font-['Fira_Code']">Focus</div>
              <div className="bg-emerald-50 border border-emerald-200 rounded p-0.5 text-[4.5px] font-bold text-emerald-800 font-['Fira_Code']">Memory</div>
              <div className="bg-purple-50 border border-purple-200 rounded p-0.5 text-[4.5px] font-bold text-purple-700 font-['Fira_Code']">Guide</div>
            </div>
          </div>
        );

      case 'timeline-evolution':
        return (
          <div className="w-full h-full flex gap-1 p-1 bg-white rounded border border-slate-200">
            <div className="w-2/5 flex flex-col gap-0.5">
              {['00', '04', '07'].map((n, i) => (
                <div
                  key={n}
                  className={`rounded text-[4.5px] font-bold font-['Fira_Code'] text-center py-0.5 border ${
                    i === 0
                      ? 'bg-blue-50 border-[#2563EB] text-[#2563EB]'
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="flex-1 bg-blue-50/60 border border-blue-200 rounded p-0.5 flex flex-col justify-between">
              <span className="text-[4.5px] font-bold text-[#2563EB] font-['Fira_Code']">Milestone Detail</span>
              <span className="text-[4px] text-slate-500">What changed</span>
            </div>
          </div>
        );

      case 'spotlight-video':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>Flow Video</span>
              <span className="font-bold text-[#2563EB]">Play</span>
            </div>
            <div className="flex-1 bg-slate-900 rounded flex items-center justify-center my-0.5 min-h-0">
              <span className="w-3 h-3 rounded-full bg-white flex items-center justify-center text-[5px] text-[#0F172A] font-bold">
                ▶
              </span>
            </div>
          </div>
        );

      case 'video-placeholder':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>Flow Video</span>
              <span className="font-bold text-[#2563EB]">Soon</span>
            </div>
            <div className="flex-1 border-2 border-dashed border-slate-300 bg-slate-50 rounded flex items-center justify-center my-0.5">
              <span className="text-[5px] font-bold text-slate-400 font-['Fira_Code']">16 : 9</span>
            </div>
          </div>
        );

      case 'research-validation-grid':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-emerald-800 font-bold">
              <span>Discovery</span>
              <span>Validated</span>
            </div>
            <div className="h-3.5 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-between px-1">
              <span className="text-[4.5px] font-bold text-[#166534]">Heuristic & Competitive Audit</span>
            </div>
            <div className="h-2.5 bg-blue-50 border border-blue-200 rounded flex items-center justify-between px-1">
              <span className="text-[4.5px] font-bold text-[#2563EB]">100% Preferred Stepped</span>
            </div>
          </div>
        );

      case 'invisible-iceberg':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="h-2.5 bg-blue-50 border border-blue-200 rounded-xs flex items-center justify-between px-1">
              <span className="text-[4.5px] font-bold text-[#2563EB]">Visible UX (10%)</span>
            </div>
            <div className="h-5 bg-slate-50 border border-slate-200 rounded-xs flex flex-col justify-center px-1">
              <span className="text-[4.5px] font-bold text-[#0F172A]">Submerged Walls (90%)</span>
              <span className="text-[4px] text-slate-400">Risk • APIs • Data Dogma</span>
            </div>
          </div>
        );

      case 'local-maximum':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>Year 1 Wins</span>
              <span className="font-bold text-emerald-700">+20% Lift</span>
            </div>
            <div className="h-4 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-emerald-800">Local Maximum Plateau</span>
            </div>
          </div>
        );

      case 'codashop-playground':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>Year 2 D2C</span>
              <span className="font-bold text-[#2563EB]">Activision</span>
            </div>
            <div className="grid grid-cols-2 gap-1 my-0.5">
              <div className="bg-amber-50 border border-amber-200 rounded p-0.5 text-[4.5px] text-amber-900 font-bold">COD:M</div>
              <div className="bg-emerald-50 border border-emerald-200 rounded p-0.5 text-[4.5px] text-emerald-900 font-bold">EA Sports FC</div>
            </div>
          </div>
        );

      case 'hotswap-tokens':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>4-Tier Tokens</span>
              <span className="font-bold text-[#2563EB]">Vue 2 → Vue 3</span>
            </div>
            <div className="grid grid-cols-4 gap-0.5 my-0.5">
              <div className="bg-slate-50 border border-slate-200 rounded text-[4px] text-center py-0.5">Core</div>
              <div className="bg-blue-50 border border-blue-200 rounded text-[4px] text-center py-0.5 text-[#2563EB]">Semantic</div>
              <div className="bg-purple-50 border border-purple-200 rounded text-[4px] text-center py-0.5 text-purple-800">Brand</div>
              <div className="bg-emerald-50 border border-emerald-200 rounded text-[4px] text-center py-0.5 text-emerald-800">Comp</div>
            </div>
          </div>
        );

      case 'ab-showdown-flywheel':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-emerald-800 font-bold">
              <span>A/B Win</span>
              <span>+0.71% Lift</span>
            </div>
            <div className="h-4 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-[#2563EB]">~25% B2B TPV</span>
            </div>
          </div>
        );

      case 'leadership-retro':
        return (
          <div className="w-full h-full grid grid-cols-2 gap-1 p-1 bg-white rounded border border-slate-200">
            <div className="bg-slate-50 border border-slate-200 rounded p-0.5 text-[4.5px] font-bold text-slate-700">1. Strategic Patience</div>
            <div className="bg-slate-50 border border-slate-200 rounded p-0.5 text-[4.5px] font-bold text-slate-700">2. Risk Language</div>
            <div className="bg-slate-50 border border-slate-200 rounded p-0.5 text-[4.5px] font-bold text-slate-700">3. External Pull</div>
            <div className="bg-slate-50 border border-slate-200 rounded p-0.5 text-[4.5px] font-bold text-slate-700">4. Pragmatism</div>
          </div>
        );

      case 'harness-hero':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span className="font-bold text-[#2563EB]">Runnable</span>
              <span>87 Comps</span>
            </div>
            <div className="h-4 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-indigo-900">Runnable Multi-Brand</span>
            </div>
          </div>
        );

      case 'harness-layers':
        return (
          <div className="w-full h-full grid grid-cols-2 gap-1 p-1 bg-white rounded border border-slate-200">
            <div className="bg-blue-50 border border-blue-200 rounded p-0.5 text-[4.5px] font-bold text-[#2563EB]">L1: Toolbar</div>
            <div className="bg-slate-50 border border-slate-200 rounded p-0.5 text-[4.5px] font-bold text-slate-700">L2: Engine</div>
          </div>
        );

      case 'harness-workflow':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>6-Phase Review</span>
              <span className="font-bold text-[#2563EB]">Async</span>
            </div>
            <div className="grid grid-cols-3 gap-0.5 my-0.5 text-[4px] text-center">
              <div className="bg-slate-50 border border-slate-200 rounded py-0.2">Stage</div>
              <div className="bg-slate-50 border border-slate-200 rounded py-0.2">Browse</div>
              <div className="bg-slate-50 border border-slate-200 rounded py-0.2">Inspect</div>
            </div>
          </div>
        );

      case 'harness-maturity':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-[#2563EB] font-bold">
              <span>AI Maturity</span>
              <span>4.9 / 5.0</span>
            </div>
            <div className="h-4 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-[#2563EB]">5-Level Systemic Radar</span>
            </div>
          </div>
        );

      case 'harness-gates':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-emerald-800 font-bold">
              <span>Quality Gates</span>
              <span>96 Tests</span>
            </div>
            <div className="h-4 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-emerald-800">Pre-Human PR Gates</span>
            </div>
          </div>
        );

      case 'harness-handoff':
        return (
          <div className="w-full h-full grid grid-cols-2 gap-1 p-1 bg-white rounded border border-slate-200">
            <div className="bg-blue-50 border border-blue-200 rounded p-0.5 text-[4.5px] font-bold text-[#2563EB]">For Engineers</div>
            <div className="bg-purple-50 border border-purple-200 rounded p-0.5 text-[4.5px] font-bold text-purple-900">For AI Agents</div>
          </div>
        );

      case 'tamil-crisis':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-rose-800 font-bold">
              <span>Heritage Daily</span>
              <span>1935</span>
            </div>
            <div className="h-4 bg-rose-50 border border-rose-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-rose-900">90% Facebook Trap</span>
            </div>
          </div>
        );

      case 'tamil-ingroup':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-slate-600">
              <span>Little India</span>
              <span className="font-bold text-[#2563EB]">In-Group</span>
            </div>
            <div className="h-4 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-[#2563EB]">Hyperlocal Identity</span>
            </div>
          </div>
        );

      case 'tamil-distribution':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-emerald-800 font-bold">
              <span>Owned Rails</span>
              <span>Telegram & PWA</span>
            </div>
            <div className="h-4 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-emerald-800">90% → 2.6% FB Drop</span>
            </div>
          </div>
        );

      case 'tamil-impact':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-emerald-800 font-bold">
              <span>Impact</span>
              <span>3x MAU</span>
            </div>
            <div className="h-4 bg-emerald-50 border border-emerald-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-emerald-800">SPH Blueprint</span>
            </div>
          </div>
        );

      case 'closing-summary':
        return (
          <div className="w-full h-full flex flex-col justify-between p-1 bg-white rounded border border-slate-200">
            <div className="flex items-center justify-between text-[5px] font-['Fira_Code'] text-[#2563EB] font-bold">
              <span>Synthesis</span>
              <span>Contact</span>
            </div>
            <div className="h-4 bg-blue-50 border border-blue-200 rounded flex items-center justify-center">
              <span className="text-[5px] font-bold text-[#2563EB]">Lead Product Designer</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center p-1 bg-white rounded border border-slate-200">
            <span className="text-[5.5px] font-['Fira_Code'] text-slate-500">Slide Preview</span>
          </div>
        );
    }
  };

  const isCover = slide.visualType?.startsWith('case-cover') || slide.id.includes('cover');

  const getCoverThumbnailStyle = () => {
    if (slide.visualType === 'case-cover-checkout') {
      return {
        cardBg: 'bg-emerald-50/90 border-emerald-300 ring-1 ring-emerald-200/60',
        badgeBg: 'bg-emerald-600 text-white',
        badgeText: 'COVER',
      };
    }
    if (slide.visualType === 'case-cover-harness') {
      return {
        cardBg: 'bg-purple-50/90 border-purple-300 ring-1 ring-purple-200/60',
        badgeBg: 'bg-purple-600 text-white',
        badgeText: 'COVER',
      };
    }
    if (slide.visualType === 'case-cover-tamil-murasu') {
      return {
        cardBg: 'bg-amber-50/90 border-amber-300 ring-1 ring-amber-200/60',
        badgeBg: 'bg-amber-600 text-white',
        badgeText: 'COVER',
      };
    }
    return null;
  };

  const coverStyle = getCoverThumbnailStyle();

  return (
    <div
      className={`relative w-full aspect-[16/10] ${
        coverStyle ? coverStyle.cardBg : 'bg-slate-50 border-slate-200'
      } rounded-lg border p-1.5 flex flex-col justify-between overflow-hidden transition-colors ${className}`}
    >
      {/* Mini Title Header */}
      <div className="flex items-center justify-between pb-1 border-b border-slate-200/60 text-[6px] font-['Fira_Code']">
        <div className="flex items-center gap-1 truncate max-w-[80%]">
          {coverStyle && (
            <span className={`px-1 py-0.2 rounded font-bold text-[5px] shrink-0 ${coverStyle.badgeBg}`}>
              {coverStyle.badgeText}
            </span>
          )}
          <span className="font-bold text-[#0F172A] truncate">
            {slide.slideNumber}. {slide.slideTitle}
          </span>
        </div>
        <span className="text-slate-400">#{String(slide.globalIndex + 1).padStart(2, '0')}</span>
      </div>

      {/* Mini Artifact Canvas */}
      <div className="flex-1 my-1 w-full min-h-0 flex items-center justify-center">
        {renderMiniVisual()}
      </div>

      {/* Mini Footer Tag */}
      <div className="flex items-center justify-between text-[5.5px] font-['Fira_Code'] text-slate-400">
        <span className="truncate max-w-[70%]">{slide.tag}</span>
        <span className="text-[#2563EB] font-semibold">{slide.caseStudyTitle}</span>
      </div>
    </div>
  );
};
