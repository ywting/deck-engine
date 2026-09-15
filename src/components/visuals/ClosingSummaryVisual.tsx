import React from 'react';
import { Mail, Phone, MapPin, Sparkles, Compass, Layers, Users, ExternalLink } from 'lucide-react';

export const ClosingSummaryVisual: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans'] select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-['Fira_Code']">
            Leadership Synthesis & Operating Pillars
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-200 text-[10px] font-bold font-['Fira_Code']">
          EXECUTIVE READY
        </span>
      </div>

      {/* 3 Pillars Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3 flex-1">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#2563EB] mb-1">
              <Compass className="w-4 h-4" />
              <span className="text-[10px] font-bold font-['Fira_Code'] uppercase">Pillar 01</span>
            </div>
            <h5 className="text-xs font-bold text-[#0F172A] mb-1">Strategic Patience</h5>
            <p className="text-[10px] text-slate-500 leading-normal">
              De-risking multi-million dollar monolithic platforms through disciplined incrementalism and commercial alignment.
            </p>
          </div>
          <div className="text-[9.5px] font-['Fira_Code'] text-slate-400 font-semibold mt-2">Case 1 · +20% Lift</div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#2563EB] mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-[10px] font-bold font-['Fira_Code'] uppercase">Pillar 02</span>
            </div>
            <h5 className="text-xs font-bold text-[#0F172A] mb-1">Design Engineering</h5>
            <p className="text-[10px] text-slate-500 leading-normal">
              Building runnable prototypes, multi-brand token harnesses, and automated pre-human AI quality gates.
            </p>
          </div>
          <div className="text-[9.5px] font-['Fira_Code'] text-slate-400 font-semibold mt-2">Case 2 · 4.9/5.0 Maturity</div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[#2563EB] mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[10px] font-bold font-['Fira_Code'] uppercase">Pillar 03</span>
            </div>
            <h5 className="text-xs font-bold text-[#0F172A] mb-1">Human Empathy</h5>
            <p className="text-[10px] text-slate-500 leading-normal">
              Conducting grounded ethnographic research in local communities to rescue cultural heritage institutions.
            </p>
          </div>
          <div className="text-[9.5px] font-['Fira_Code'] text-slate-400 font-semibold mt-2">Case 3 · 3x MAU Growth</div>
        </div>
      </div>

      {/* Contact Badge */}
      <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div>
          <div className="font-bold text-[#0F172A]">Yi Wei, Ting</div>
          <div className="text-[11px] text-slate-600 font-['Fira_Code']">Lead Product Designer</div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-['Fira_Code'] text-slate-600">
          <a
            href="mailto:yw.ting0880@gmail.com"
            className="flex items-center gap-1 text-[#2563EB] hover:underline font-medium select-text"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>yw.ting0880@gmail.com</span>
          </a>
          <a
            href="tel:+6597898825"
            className="flex items-center gap-1 text-[#2563EB] hover:underline font-medium select-text"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+65 9789 8825</span>
          </a>
          <span className="flex items-center gap-1 text-slate-500">
            <MapPin className="w-3.5 h-3.5" />
            <span>Singapore</span>
          </span>
        </div>
      </div>
    </div>
  );
};
