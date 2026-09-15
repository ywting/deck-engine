import React, { useState } from 'react';
import { HeartHandshake, User, Check, X, Clock, Award, MapPin } from 'lucide-react';

export const InGroupIdVisual: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<'utilities' | 'celebration'>('utilities');

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            In-Group Identity Theory &amp; Little India Discovery
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-semibold">
          Hyperlocal Field Research
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: The Persona & Commodity vs In-Group Split (White Card) */}
        <div className="md:col-span-6 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            {/* Persona header */}
            <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-slate-100">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A2540]">The Modern Singaporean Tamilian</div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1 font-['Fira_Code']">
                  <MapPin className="w-3 h-3 text-amber-600" /> Little India Street Interviews (Ages 18-38)
                </div>
              </div>
            </div>

            {/* Rejection of Commodity News */}
            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 mb-2">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#E11927] mb-1 font-['Fira_Code']">
                <X className="w-3.5 h-3.5" />
                <span>Zero Demand for Generic Wire News</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                "Why read Tamil Murasu for US elections or global geopolitics? We already read CNA, Straits Times, or Twitter for that."
              </p>
            </div>

            {/* In-Group Theory Insight */}
            <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-800 mb-1 font-['Fira_Code']">
                <Check className="w-3.5 h-3.5 text-[#166534]" />
                <span>The Irreplaceable In-Group Need</span>
              </div>
              <p className="text-[11px] text-slate-700 leading-tight">
                Deep desire for cultural connection and hyperlocal functional utilities that no mainstream English media outlet provides.
              </p>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-amber-800 font-['Fira_Code'] font-medium">
            Hypothesis: Shift content portfolio to daily utility + community pride.
          </div>
        </div>

        {/* Right Column: The 2 Unshakable Pillars (White Card) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-[11px] font-['Fira_Code']">
            <button
              onClick={() => setActiveSegment('utilities')}
              className={`flex-1 py-1 rounded-md transition-all text-center font-semibold cursor-pointer ${
                activeSegment === 'utilities'
                  ? 'bg-white text-[#0A2540] shadow-2xs'
                  : 'text-slate-600 hover:text-[#0A2540]'
              }`}
            >
              1. Daily Utilities
            </button>
            <button
              onClick={() => setActiveSegment('celebration')}
              className={`flex-1 py-1 rounded-md transition-all text-center font-semibold cursor-pointer ${
                activeSegment === 'celebration'
                  ? 'bg-white text-[#0A2540] shadow-2xs'
                  : 'text-slate-600 hover:text-[#0A2540]'
              }`}
            >
              2. Community Celebrations
            </button>
          </div>

          <div className="flex-1 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
            {activeSegment === 'utilities' ? (
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Functional Daily Life Enablers</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">Movie Screening Timings</span>
                    <span className="text-amber-800 font-['Fira_Code'] text-[10px] font-bold">Daily Ticker</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">Gold Rates (916 &amp; 999 Hallmark)</span>
                    <span className="text-amber-800 font-['Fira_Code'] text-[10px] font-bold">Real-time Live</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-700 font-medium">Remittance Ticker (SGD → INR)</span>
                    <span className="text-[#166534] font-['Fira_Code'] text-[10px] font-bold">Direct Feed</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Cultural Identity &amp; Pride</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[#0A2540] font-bold">Youth &amp; Student Achievements</div>
                    <div className="text-[10px] text-slate-500">Honoring academic and cultural milestones in Singapore.</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-[#0A2540] font-bold">Neighborhood Festivals &amp; Pongal</div>
                    <div className="text-[10px] text-slate-500">Local grassroots coverage missed by mainstream English press.</div>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Transforming readership from passive consumers into daily habitual community members.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
