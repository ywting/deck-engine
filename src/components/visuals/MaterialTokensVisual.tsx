import React, { useState } from 'react';
import { Sparkles, Box, Shield, Zap, Eye } from 'lucide-react';

export const MaterialTokensVisual: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<'cod' | 'pokemon' | 'ea'>('cod');

  const styles = {
    cod: {
      name: 'Call of Duty: Mobile',
      archetype: 'Tactical Carbon Fiber & Chamfers',
      tag: 'Tactical / Military HUD',
      accentColor: '#b45309',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      tokenJson: `{
  "surface": "material.carbon_weave.v3",
  "chamfer_cut": "12px @ 45deg",
  "specular_glow": "rgba(180, 83, 9, 0.15)",
  "border_finish": "1.5px metallic_bezel",
  "backdrop_blur": "16px",
  "asset_format": "WebP (Lossless Alpha)"
}`,
      containerClasses:
        'bg-slate-900 text-white border-2 border-amber-500/80 shadow-md relative overflow-hidden',
      chamferStyle: {
        clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
      },
    },
    pokemon: {
      name: 'Pokémon Webstore',
      archetype: 'Iridescent Holo Foil & Soft Glow',
      tag: 'Whimsical / Foil Collector',
      accentColor: '#6366f1',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      tokenJson: `{
  "surface": "material.holo_foil_sheen",
  "chamfer_cut": "rounded-2xl (20px)",
  "specular_glow": "linear-gradient(45deg, #a855f7, #38bdf8)",
  "border_finish": "1px glass_refraction",
  "backdrop_blur": "24px",
  "asset_format": "WebP (Dynamic Hologram)"
}`,
      containerClasses:
        'bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 text-white border border-indigo-300/60 shadow-md rounded-2xl relative overflow-hidden',
      chamferStyle: {},
    },
    ea: {
      name: 'EA Sports FC Mobile',
      archetype: 'Stadium Floodlight Glow & Pitch Turf',
      tag: 'Athletic / Dynamic Pitch',
      accentColor: '#166534',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      tokenJson: `{
  "surface": "material.pitch_turf_deep",
  "chamfer_cut": "rounded-lg (8px)",
  "specular_glow": "0 0 25px rgba(16, 185, 129, 0.4)",
  "border_finish": "1px high_contrast_neon",
  "backdrop_blur": "12px",
  "asset_format": "WebP (Grass Texture Atlas)"
}`,
      containerClasses:
        'bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white border-2 border-emerald-500 shadow-md rounded-xl relative overflow-hidden',
      chamferStyle: {},
    },
  };

  const active = styles[selectedStyle];

  return (
    <div className="flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 relative overflow-hidden shadow-xs font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E11927]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Multi-Dimensional Material Tokens Explorer
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-['Fira_Code'] text-[#0A2540] bg-slate-50 px-2.5 py-0.5 rounded border border-slate-200 font-semibold">
          <span>Sensory Surface Bundles</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 min-h-0">
        {/* Left Column: Live Material Render Preview (White Card Wrapper) */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-2">
          {/* Style Selector Tabs */}
          <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 font-['Fira_Code']">
            {(['cod', 'pokemon', 'ea'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedStyle(key)}
                className={`py-1 px-2 text-[10px] rounded-md transition-all text-center font-semibold cursor-pointer ${
                  selectedStyle === key
                    ? 'bg-white text-[#0A2540] shadow-xs'
                    : 'text-slate-600 hover:text-[#0A2540]'
                }`}
              >
                {key === 'cod' ? 'COD: Mobile' : key === 'pokemon' ? 'Pokémon' : 'EA Sports'}
              </button>
            ))}
          </div>

          {/* Rendered Component with Chosen Material Token */}
          <div className="flex-1 flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div
              className={`w-full max-w-sm p-4 transition-all duration-300 ${active.containerClasses}`}
              style={active.chamferStyle}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-['Fira_Code'] uppercase tracking-wider text-slate-200 font-bold">
                  {active.tag}
                </span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: active.accentColor }} />
              </div>

              <h4 className="text-sm font-bold text-white mb-1">{active.name}</h4>
              <p className="text-[11px] text-slate-300 mb-3 leading-snug">{active.archetype}</p>

              <div className="p-2 rounded bg-black/40 border border-white/20 flex items-center justify-between text-[11px]">
                <span className="text-slate-200">Sensory Token:</span>
                <span className="font-['Fira_Code'] font-bold text-white">
                  WebP Shader Active
                </span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-500 font-['Fira_Code'] flex items-center justify-between px-1 font-medium">
            <span>Low-bandwidth emerging market safe</span>
            <span className="text-[#1D4ED8]">Zero Figma constraints</span>
          </div>
        </div>

        {/* Right Column: Material Bundle Code Specs (White Card) */}
        <div className="md:col-span-6 bg-white rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-[#0A2540]">Clustered Composite Bundle</span>
              <code className="text-[10px] font-['Fira_Code'] font-bold text-[#E11927]">tokens.material.json</code>
            </div>

            <pre className="mt-2 text-[10.5px] font-['Fira_Code'] text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 overflow-x-auto leading-relaxed">
              {active.tokenJson}
            </pre>
          </div>

          <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-600 leading-snug">
            <strong className="text-[#0A2540] font-bold">Design Engineering Frontier:</strong> Standard design systems only swap hex colours. Composite material tokens bundle corner cuts, specular shines, and WebP animations into reproducible components.
          </div>
        </div>
      </div>
    </div>
  );
};
