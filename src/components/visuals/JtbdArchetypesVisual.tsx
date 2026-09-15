import React from 'react';
import { Gamepad2, Building2, Users } from 'lucide-react';

export const JtbdArchetypesVisual: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Demand side */}
        <div className="rounded-xl bg-white border border-blue-200 p-4 flex flex-col gap-2.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4 text-[#1D4ED8]" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Demand // The Players
              </span>
            </div>
          </div>
<div className="text-[14px] font-bold text-[#0A2540]">
            <span className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider text-[#1D4ED8] mr-1.5">DEMAND</span>
            Value Hunters & Convenience Seekers
          </div>
          <p className="text-[20px] sm:text-[22px] italic leading-[28px] sm:leading-[32px] text-slate-800">
            "I have invested so much in this game. Where can I get cheaper top-ups? There is too much
            hassle in buying on the web. In-app is much faster. Make it quick. I want to get back to
            playing."
          </p>
          <div className="space-y-1.5 text-[14px] leading-relaxed">
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Stretch the Budget:</strong> Maximise
              top-up-per-dollar via web bonuses.
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Zero Interruption:</strong> Instant top-up delivery
              before time-sensitive in-game events and banners expire.
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Trusted Payment:</strong> Frictionless checkout
              using familiar regional e-wallets and local payment rails.
            </div>
          </div>
        </div>

        {/* Supply side */}
        <div className="rounded-xl bg-white border border-amber-200 p-4 flex flex-col gap-2.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-700" />
              <span className="text-[14px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Supply // The Publishers
              </span>
            </div>
          </div>
<div className="text-[14px] font-bold text-[#0A2540]">
            <span className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider text-amber-700 mr-1.5">SUPPLY</span>
            The Margin & Volume Drivers
          </div>
          <p className="text-[20px] sm:text-[22px] italic leading-[28px] sm:leading-[32px] text-slate-800">
            "We want players to be able to decide on what they want to buy, FAST. Players should see
            the value in buying bigger ticket items as compared to in game."
          </p>
          <div className="space-y-1.5 text-[14px] leading-relaxed">
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Drive Higher AOV:</strong> Encourage players to
              trade up from micro-purchases to high-tier bundles and passes.
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Recapture 30% Margins:</strong> Shift volume away
              from Apple and Google store commissions to official D2C channels.
            </div>
            <div className="text-slate-600">
              <strong className="text-[#0A2540] font-bold">Brand-Grade Trust:</strong> Deliver a premium,
              seamless checkout that rivals native In-App Purchases (IAP).
            </div>
          </div>
        </div>
      </div>

      {/* Common ground banner */}
      <div className="p-5 rounded-r-xl shadow-2xs bg-blue-50/70 text-blue-950 border-l-4 border-l-[#2563EB]">
        <div className="font-['Fira_Code'] text-[14px] leading-[16px] font-semibold tracking-wider uppercase mb-1.5 flex items-center gap-1.5 text-[#2563EB]">
          <Users className="w-4 h-4" />
          The Shared Sweet Spot: Transparent Value + Effortless Checkout
        </div>
        <p className="font-['Fira_Sans'] text-[15px] sm:text-[16px] leading-[24px] italic text-slate-800">
          Publishers achieve higher basket sizes not by forcing upsells, but through cognitive
          clarity—making the value equation of larger packs obvious while keeping the checkout to a
          3-second, 1-tap habit.
        </p>
      </div>
    </div>
  );
};
