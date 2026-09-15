import React from 'react';
import { CaseStudyId } from '../../types';
import { ArrowRight, CreditCard, Newspaper, Sparkles, CheckCircle, Cpu } from 'lucide-react';

interface IntroAgendaVisualProps {
  onSelectCaseStudy?: (caseId: CaseStudyId) => void;
  onJumpToSlide?: (index: number) => void;
}

export const IntroAgendaVisual: React.FC<IntroAgendaVisualProps> = ({
  onSelectCaseStudy,
  onJumpToSlide,
}) => {
  const handleNavigate = (caseId: CaseStudyId, slideIndex: number) => {
    if (onSelectCaseStudy) {
      onSelectCaseStudy(caseId);
    } else if (onJumpToSlide) {
      onJumpToSlide(slideIndex);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans']">
      {/* Top Banner */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-['Fira_Code']">
            Presentation Agenda • Selected Works
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200 font-semibold">
          3 Deep-Dive Case Studies
        </span>
      </div>

      {/* High-Impact Interactive Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 flex-1 overflow-y-auto pr-1">
        {/* Case 1: The 3-Year Checkout */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleNavigate('checkout', 3)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate('checkout', 3)}
          className="rounded-xl bg-white border border-slate-200 hover:border-emerald-500 p-4 flex flex-col justify-between relative group transition-all shadow-xs hover:shadow-sm cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-[#166534] border border-emerald-200">
                Case 01 • 7 Slides
              </span>
              <CreditCard className="w-4 h-4 text-[#166534]" />
            </div>

            <h3 className="text-sm sm:text-base font-extrabold text-[#0A2540] group-hover:text-emerald-700 transition-colors">
              Redesigning the Coda Consumer Checkout Flow
            </h3>
            <div className="text-[10.5px] font-medium text-slate-500 mb-2 font-['Fira_Code']">
              Coda Payments • Fintech Checkout
            </div>

            <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[10.5px] text-[#166534] mb-2.5 leading-relaxed">
              <strong>Theme:</strong> Strategic Patience & Multi-Brand Architecture
            </div>

            <p className="text-[11.5px] text-slate-600 leading-relaxed mb-3">
              Transitioning from monolithic DTU form to multi-brand checkout through 36 months of patient de-risking and token design.
            </p>

            {/* Key Outcomes */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                <span><strong className="text-[#0A2540] font-bold">+20%</strong> conversion lift</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                <span><strong className="text-[#0A2540] font-bold">~25%</strong> TPV unlocked</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-['Fira_Code'] text-[#166534] font-semibold">
            <span>Slide 04</span>
            <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Open Case <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Case 2: Digitalising Tamil Murasu */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleNavigate('tamil-murasu', 10)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate('tamil-murasu', 10)}
          className="rounded-xl bg-white border border-slate-200 hover:border-amber-500 p-4 flex flex-col justify-between relative group transition-all shadow-xs hover:shadow-sm cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-500"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                Case 02 • 8 Slides
              </span>
              <Newspaper className="w-4 h-4 text-amber-600" />
            </div>

            <h3 className="text-sm sm:text-base font-extrabold text-[#0A2540] group-hover:text-amber-700 transition-colors">
              Digitalising Tamil Murasu
            </h3>
            <div className="text-[10.5px] font-medium text-slate-500 mb-2 font-['Fira_Code']">
              SPH • Cultural Turnaround
            </div>

            <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-100 text-[10.5px] text-amber-800 mb-2.5 leading-relaxed">
              <strong>Theme:</strong> Proving Ground & Enterprise Transformation
            </div>

            <p className="text-[11.5px] text-slate-600 leading-relaxed mb-3">
              How a 90-year-old newspaper became the proving ground for product-led transformation at SPH.
            </p>

            {/* Key Outcomes */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span><strong className="text-[#0A2540] font-bold">3x</strong> MAU growth</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>FB dependency: <strong className="text-[#0A2540] font-bold">90% → 2.6%</strong></span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-['Fira_Code'] text-amber-700 font-semibold">
            <span>Slide 11</span>
            <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Open Case <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
{/* Case 3: Frontier Design */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => handleNavigate('design-harness', 18)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate('design-harness', 18)}
          className="rounded-xl bg-white border border-slate-200 hover:border-purple-500 p-4 flex flex-col justify-between relative group transition-all shadow-xs hover:shadow-sm cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-purple-500"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
                Case 03 • 7 Slides
              </span>
              <Cpu className="w-4 h-4 text-purple-600" />
            </div>

            <h3 className="text-sm sm:text-base font-extrabold text-[#0A2540] group-hover:text-purple-700 transition-colors">
              Frontier Design
            </h3>
            <div className="text-[10.5px] font-medium text-slate-500 mb-2 font-['Fira_Code']">
              Coda Payments • Tooling & Prototypes
            </div>

            <div className="p-2 rounded-lg bg-purple-50/60 border border-purple-100 text-[10.5px] text-purple-800 mb-2.5 leading-relaxed">
              <strong>Theme:</strong> Code-as-Canvas & Runnable Prototypes
            </div>

            <p className="text-[11.5px] text-slate-600 leading-relaxed mb-3">
              How I shifted from static handoff to a live, interactive deliverable within Coda Payments' design workflow.
            </p>

            {/* Key Outcomes */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong className="text-[#0A2540] font-bold">12</strong> live brand themes</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-700">
                <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span><strong className="text-[#0A2540] font-bold">Zero</strong> visual defects</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-['Fira_Code'] text-purple-700 font-semibold">
            <span>Slide 19</span>
            <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              Open Case <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        
      {/* Bottom Summary Bar */}
      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <span className="text-[11px]">
          <strong className="text-[#0A2540] font-bold">Interactive Deck:</strong> Click any case study card above to jump directly to the chapter.
        </span>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold hidden sm:inline">26 Slides Total</span>
      </div>
    </div>
  );
};
