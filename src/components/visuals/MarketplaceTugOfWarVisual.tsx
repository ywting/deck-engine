import React, { useState } from 'react';
import { Gamepad2, Building2, Coins, Zap, Handshake, TrendingUp } from 'lucide-react';

type FocusSide = 'demand' | 'supply' | null;

export const MarketplaceTugOfWarVisual: React.FC = () => {
  const [focus, setFocus] = useState<FocusSide>(null);

  const dimmed = (side: 'demand' | 'supply') =>
    focus !== null && focus !== side ? 'opacity-50 saturate-50' : 'opacity-100';

  return (
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Demand side */}
        <button
          onClick={() => setFocus(focus === 'demand' ? null : 'demand')}
          className={`text-left rounded-xl bg-white border border-blue-200 p-3.5 flex flex-col gap-2.5 shadow-2xs transition-all cursor-pointer hover:border-blue-300 ${dimmed('demand')} ${
            focus === 'demand' ? 'ring-2 ring-blue-500/40 border-blue-400' : ''
          }`}
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <Gamepad2 className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Demand: The Gamers (Two Divergent Drivers)
              </h4>
            </div>
            <p className="text-[14px] leading-relaxed text-slate-600">
              <strong className="text-[#0A2540] font-bold">JTBD:</strong> Having quick and easy access
              to more affordable top-ups so that they can jump back into playing the games.
            </p>
          </div>

            <div className="grid grid-cols-1 gap-2.5">
            {/* Value Hunter */}
            <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Coins className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span className="text-[14px] font-bold text-[#0A2540]">The Value Hunter</span>
              </div>
              <div className="text-[14px] font-['Fira_Code'] text-slate-500 font-semibold mb-1.5">
                Emerging Markets
              </div>
              <p className="text-[17px] sm:text-[18px] italic leading-[26px] sm:leading-[28px] text-slate-800 mb-2.5">
                "If it's not cheaper than buying in-game, why am I on a website? Give me bonus gems and
                let me pay with my local e-wallet."
              </p>
              <div className="space-y-1 text-[14px] leading-relaxed">
                <div className="text-slate-600">
                  <strong className="text-[#0A2540] font-bold">Driven by:</strong> Price &amp; FX arbitrage
                </div>
                <div className="text-slate-600">
                  <strong className="text-[#0A2540] font-bold">Friction:</strong> Hidden markups
                </div>
              </div>
            </div>

            {/* Convenience Seeker */}
            <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span className="text-[14px] font-bold text-[#0A2540]">The Convenience Seeker</span>
              </div>
              <div className="text-[14px] font-['Fira_Code'] text-slate-500 font-semibold mb-1.5">
                Whales &amp; Mature Markets
              </div>
              <p className="text-[17px] sm:text-[18px] italic leading-[26px] sm:leading-[28px] text-slate-800 mb-2.5">
                "I don't care about a 5% discount—just remember my 16-digit ID and let me pay in one
                tap with Apple Pay."
              </p>
              <div className="space-y-1 text-[14px] leading-relaxed">
                <div className="text-slate-600">
                  <strong className="text-[#0A2540] font-bold">Driven by:</strong> Zero friction
                </div>
                <div className="text-slate-600">
                  <strong className="text-[#0A2540] font-bold">Friction:</strong> Re-typing info
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Supply side */}
        <button
          onClick={() => setFocus(focus === 'supply' ? null : 'supply')}
          className={`text-left rounded-xl bg-white border border-amber-200 p-3.5 flex flex-col gap-2.5 shadow-2xs transition-all cursor-pointer hover:border-amber-300 ${dimmed('supply')} ${
            focus === 'supply' ? 'ring-2 ring-amber-500/40 border-amber-400' : ''
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Supply: The Publishers
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
            <span className="text-[14px] font-bold text-[#0A2540]">The Margin Maximiser</span>
          </div>
          <p className="text-[17px] sm:text-[18px] italic leading-[26px] sm:leading-[28px] text-slate-800">
            "We need players buying the £99 bundle and seasonal passes—not just 50p micro-top-ups that
            get eaten by processing fees."
          </p>
          <div className="space-y-1.5 text-[14px] leading-relaxed">
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">JTBD:</strong> Maximise AOV &amp; player LTV
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Drive:</strong> Recapture 30% app tax
            </div>
          </div>
        </button>
      </div>

      {/* Common ground — strategic synthesis banner */}
      <div className="p-5 rounded-r-xl shadow-2xs bg-blue-50/70 text-blue-950 border-l-4 border-l-[#2563EB]">
        <div className="font-['Fira_Code'] text-[14px] leading-[16px] font-semibold tracking-wider uppercase mb-1.5 flex items-center gap-1.5 text-[#2563EB]">
          <Handshake className="w-4 h-4" />
          Common Ground
        </div>
        <p className="font-['Fira_Sans'] text-[15px] sm:text-[16px] leading-[24px] italic text-slate-800">
          Transparent bonus math lets Value Hunters trade up to larger packs (solving Publisher AOV),
          while Systemic Memory gives Whales instant 1-tap checkout (protecting Publisher conversion).
        </p>
      </div>
    </div>
  );
};
