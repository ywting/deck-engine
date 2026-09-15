import React, { useState } from 'react';
import { ShieldAlert, Server, Binary, Eye, Info } from 'lucide-react';

export const InvisibleIcebergVisual: React.FC = () => {
  const [selectedBlock, setSelectedBlock] = useState<number>(0);

  const blocks = [
    {
      id: 0,
      zone: 'submerged',
      title: 'Track 1 · The A/B Dogma',
      subtitle: 'Nothing Assumed, Everything Tested',
      icon: ShieldAlert,
      color: 'red',
      tag: 'Cultural Bottleneck',
      stat: 'Zero currency for teardowns',
      description:
        'Competitor teardowns and external benchmarks carried zero currency. The vision was broken into smaller provable steps instead of fighting the culture.',
    },
    {
      id: 1,
      zone: 'submerged',
      title: 'Track 2 · Tech Migration Chain',
      subtitle: 'Coupled Architecture Dictates Pace',
      icon: Server,
      color: 'amber',
      tag: 'Technical Bottleneck',
      stat: 'CSR → SSR • Vue 2 → Vue 3',
      description:
        'The real bottleneck was a coupled architecture. Moving from CSR to SSR, and Vue 2 to Vue 3, dictated release velocity.',
    },
    {
      id: 2,
      zone: 'submerged',
      title: 'Track 3 · Business Horizon',
      subtitle: 'Quarterly Targets, No Mandate',
      icon: Binary,
      color: 'blue',
      tag: 'Commercial Bottleneck',
      stat: 'Self-carried long-term vision',
      description:
        'Squads were measured on short-term quarterly targets with no top-down mandate. The long-term design vision had to be entirely self-carried.',
    },
  ];

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#1D4ED8]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Three Parallel Bottlenecks
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 font-semibold">
          3 Parallel Tracks
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-2.5 min-h-0">
        {/* Above Waterline: Visible UI Surface */}
        <div className="bg-[#F0F7FF] border border-blue-200 rounded-xl p-3 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-[#1D4ED8] uppercase tracking-wide border border-blue-200 font-['Fira_Code']">
                Above Waterline (Visible)
              </span>
              <span className="text-xs font-bold text-[#0A2540]">The 1,046px Monolith Form</span>
            </div>
            <span className="text-[10px] text-slate-500 font-['Fira_Code']">Perception: "Just redesign it in Figma"</span>
          </div>

          <p className="text-[12px] text-slate-700 leading-relaxed">
            70% high-intent returning gamers treated like strangers. Endless vertical scrolling, 20+ SKU grid, and 30+ hyper-local payment rails crammed into one giant page.
          </p>

          {/* Waterline graphic indicator */}
          <div className="mt-2 pt-1 border-b-2 border-dashed border-[#1D4ED8]/40 flex items-center justify-between text-[10px] text-[#1D4ED8] font-['Fira_Code'] font-semibold">
            <span>~~~~~~~~~~~~~~~~~ WATERLINE (SURFACE PERCEPTION) ~~~~~~~~~~~~~~~~~</span>
          </div>
        </div>

        {/* Below Waterline: The 3 Submerged White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mt-1 flex-1">
          {blocks.map((block) => {
            const Icon = block.icon;
            const isSelected = selectedBlock === block.id;

            return (
              <button
                key={block.id}
                onClick={() => setSelectedBlock(block.id)}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between relative cursor-pointer bg-white shadow-2xs ${
                  isSelected
                    ? 'border-[#E11927] ring-2 ring-red-50 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                        block.color === 'red'
                          ? 'bg-red-50 text-[#E11927] border border-red-200'
                          : block.color === 'amber'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-blue-50 text-[#1D4ED8] border border-blue-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[9px] font-['Fira_Code'] uppercase px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200 font-semibold">
                      {block.tag}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-[#0A2540] mb-0.5">{block.title}</h4>
                  <p className="text-[10px] text-slate-500 mb-2 font-medium">{block.subtitle}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[10px] font-['Fira_Code'] font-bold text-[#1D4ED8] mb-1">{block.stat}</div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-tight">
                    {block.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Callout for Selected Block */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed">
            <span className="font-bold text-[#0A2540]">
              {blocks[selectedBlock].title}:{' '}
            </span>
            <span className="text-slate-600">
              {blocks[selectedBlock].description} A simple visual redesign was unviable until sequencing across all three tracks unlocked the roadmap.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
