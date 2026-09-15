import React, { useState } from 'react';
import { Globe, ExternalLink, RefreshCw, ShieldCheck, Film, TrendingUp, MessageCircle, Send, Newspaper, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import portalScreenshot from '../../assets/images/tamil_murasu_portal_screenshot_1789302339202.jpg';

export const TamilMurasuIframeVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'screenshot' | 'utilities' | 'community'>('screenshot');

  return (
    <div className="flex flex-col w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl font-['Fira_Sans'] my-2">
      {/* Browser Bar */}
      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-1 bg-slate-900 rounded-md border border-slate-700 text-xs text-slate-300 font-['Fira_Code'] flex items-center gap-2 w-72 md:w-96 truncate">
            <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate">https://www.tamilmurasu.com.sg/</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-['Fira_Code']">
            <ShieldCheck className="w-3.5 h-3.5" />
            Live Portal Active
          </span>
          <a
            href="https://www.tamilmurasu.com.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all hover:scale-[1.02]"
          >
            <span>Launch Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-slate-950 text-slate-100 p-6 sm:p-8 flex flex-col gap-6">
        {/* Portal Header & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[11px] font-['Fira_Code'] font-bold">TAMIL MURASU // 1936</span>
              <span className="text-xs text-slate-400">SPH Media Trust Flagship</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Fira_Sans']">
              Singapore's Premier Tamil Digital Voice
            </h3>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('screenshot')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'screenshot' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Portal Screenshot
            </button>
            <button
              onClick={() => setActiveTab('utilities')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'utilities' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Daily Utilities & Movies
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'community' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Broadcast Channels
            </button>
          </div>
        </div>

        {/* Tab Content: Screenshot view */}
        {activeTab === 'screenshot' && (
          <div className="flex flex-col gap-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
              <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-['Fira_Code'] text-slate-200 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Live Website Snapshot Embedded
              </div>
              <img
                src={portalScreenshot}
                alt="Tamil Murasu Digital Portal Screenshot"
                className="w-full h-auto object-cover max-h-[480px] transition-transform duration-500 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex items-center justify-between">
                <span className="text-xs text-slate-300 font-['Fira_Code']">tamilmurasu.com.sg • Desktop Web View</span>
                <a
                  href="https://www.tamilmurasu.com.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Open Live Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'utilities' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-['Fira_Code'] text-amber-400 flex items-center gap-1">
                  <Film className="w-3.5 h-3.5" />
                  CINEMA TICKER
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Live API</span>
              </div>
              <h5 className="font-bold text-white text-base mb-1">Movie Screening Timings</h5>
              <p className="text-xs text-slate-400 mb-3">Automated daily cinema schedules across Golden Village & Cathay cineplexes.</p>
              <div className="p-2.5 rounded-lg bg-slate-950 text-xs font-['Fira_Code'] text-slate-300 border border-slate-800">
                <span>Current Screening: Master, Jailer & Vaadivaasal shows updated hourly.</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-['Fira_Code'] text-blue-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  MARKET RATES
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Synced</span>
              </div>
              <h5 className="font-bold text-white text-base mb-1">Gold & Commodity Feed</h5>
              <p className="text-xs text-slate-400 mb-3">Real-time bullion and SGD-to-INR foreign exchange rates.</p>
              <div className="p-2.5 rounded-lg bg-slate-950 text-xs font-['Fira_Code'] text-slate-300 border border-slate-800 flex justify-between">
                <span>SGD/INR: 63.45</span>
                <span className="text-emerald-400">+0.12%</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-['Fira_Code'] text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  JOB PORTAL
                </span>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px]">Classifieds</span>
              </div>
              <h5 className="font-bold text-white text-base mb-1">Classified Job Portal</h5>
              <p className="text-xs text-slate-400 mb-3">Targeted employment board connecting local talent with employers.</p>
              <div className="p-2.5 rounded-lg bg-slate-950 text-xs font-['Fira_Code'] text-slate-300 border border-slate-800">
                <span>Active Listings: 142 positions across Singapore.</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">WhatsApp Broadcast Channels</h5>
                    <p className="text-xs text-slate-400">Direct morning briefing delivered straight to readers.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Replaced vulnerable social algorithm dependence with owned direct distribution. Over 3x engagement growth achieved through morning digests.
                </p>
              </div>
              <a
                href="https://www.tamilmurasu.com.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Join Broadcast Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Telegram Instant News Feed</h5>
                    <p className="text-xs text-slate-400">Instant breaking news and community alerts.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Real-time push updates ensuring Singapore's Tamil community stays instantly informed on local news, cultural events, and announcements.
                </p>
              </div>
              <a
                href="https://www.tamilmurasu.com.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Open Telegram Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Footer Launch Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Experience the Full Live Portal</h5>
              <p className="text-xs text-slate-300">Click to open Tamil Murasu's official website in a new tab.</p>
            </div>
          </div>
          <a
            href="https://www.tamilmurasu.com.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg transition-all hover:scale-105 shrink-0"
          >
            <span>Open tamilmurasu.com.sg</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-slate-800 px-4 py-2.5 text-xs text-slate-400 font-['Fira_Code'] flex items-center justify-between border-t border-slate-700 shrink-0">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          Embedded Site Screenshot & Portal Showcase • SPH Media Trust
        </span>
        <span>tamilmurasu.com.sg</span>
      </div>
    </div>
  );
};
