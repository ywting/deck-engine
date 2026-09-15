import React from 'react';
import { X, Mic, Quote, MessageSquare } from 'lucide-react';
import { SlideContent } from '../types';

interface SpeakerNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: SlideContent;
}

export const SpeakerNotesDrawer: React.FC<SpeakerNotesDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white border border-slate-200 rounded-2xl shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/80">
        <div className="flex items-center gap-2">
          <Mic className="w-4 h-4 text-[#2563EB]" />
          <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-['Fira_Code']">
            Speaker Notes &amp; Live Cues
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-md hover:bg-slate-200/60 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close speaker notes"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5 space-y-3.5 max-h-80 overflow-y-auto">
        <div className="text-[11px] font-['Fira_Code'] text-[#2563EB] bg-blue-50/60 p-2.5 rounded-lg border border-blue-100 font-medium">
          Slide {currentSlide.slideNumber}: {currentSlide.slideTitle}
        </div>

        {currentSlide.speakerNotes ? (
          <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 relative">
            <Quote className="w-5 h-5 text-slate-300 absolute top-3 right-3" />
            <div className="text-[11px] font-semibold text-[#0F172A] uppercase tracking-wide mb-1.5 flex items-center gap-1.5 font-['Fira_Code']">
              <MessageSquare className="w-3.5 h-3.5 text-[#2563EB]" />
              Executive Presenter Prompt
            </div>
            <p className="font-['Fira_Sans'] text-[14px] leading-[22px] text-slate-700 italic">
              "{currentSlide.speakerNotes}"
            </p>
          </div>
        ) : (
          <p className="font-['Fira_Sans'] text-xs text-slate-400 italic">
            No custom speaker notes recorded for this slide.
          </p>
        )}

        <div className="text-[10px] text-slate-400 border-t border-slate-100 pt-2.5 flex items-center justify-between font-['Fira_Code']">
          <span>Toggle with [N]</span>
          <span>Executive Briefing Mode</span>
        </div>
      </div>
    </div>
  );
};
