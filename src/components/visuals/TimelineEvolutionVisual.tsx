import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { History, Image as ImageIcon, X, Expand } from 'lucide-react';
import legacyScreenshot from '../../assets/images/codashop_mlbb_legacy_screenshot.jpg';
import milestone01Pricing from '../../assets/images/milestone-01-item-pricing.jpg';
import milestone02SocialProof from '../../assets/images/milestone-02-social-proof.jpg';
import milestone03SmartDefaults from '../../assets/images/milestone-03-smart-defaults.jpg';
import milestone02BuyNowBar from '../../assets/images/milestone-02-buy-now-bar.png';
import milestone06SeamlessIdentity from '../../assets/images/milestone-06-seamless-identity.jpg';
import milestone04TrustVideo from '../../assets/videos/milestone-04-trust-validation.webm';
import milestone08RolloutVideo from '../../assets/videos/milestone-08-global-rollout.webm';
import milestone07FlowVideo from '../../assets/videos/milestone-07-flow-refinement.webm';
import milestone05Enterprise from '../../assets/images/milestone-05-enterprise.jpg';

interface TimelineItem {
  id: number;
  marker: string;
  phase: string;
  title: string;
  summary: string;
}

interface MilestoneDetail {
  id: number;
  badge: string;
  image?: string;
  video?: string;
  marker?: string;
  title: string;
  whatChanged: string;
  whyItMattered: string;
  takeaway: string;
  artifact: { title: string; caption: string; status: string; memory: string };
}

const ITEMS: TimelineItem[] = [
  { id: 0, marker: '00', phase: 'BASELINE', title: 'Original Codashop', summary: 'The single-page monolith' },
  { id: 1, marker: '01', phase: 'PRICE TRANSPARENCY', title: 'Prices on Item Cards', summary: 'Upfront totals on every pack' },
  { id: 2, marker: '02', phase: 'EARLY OPTIMISATION', title: 'Smart Defaults & Guided Checkout 1', summary: 'Pre-selected items & floating guide' },
  { id: 3, marker: '03', phase: 'SOCIAL PROOF', title: 'Best-Seller Tags', summary: 'Crowd-signal badges on hero packs' },
  { id: 4, marker: '04', phase: 'TRUST & VALIDATION', title: 'Inline Gamer ID Check', summary: 'Live server check & nickname display' },
  { id: 5, marker: '05', phase: 'WHITE-LABEL PILOT', title: 'COD:M Store', summary: 'Clean catalogue & brand immersion' },
  { id: 6, marker: '06', phase: 'SEAMLESS IDENTITY', title: 'FCM Store (EA Login)', summary: 'Direct login & zero manual ID entry' },
  { id: 7, marker: '07', phase: 'FLOW REFINEMENT', title: 'Guided Checkout 2', summary: '-23% error drop & active states' },
  { id: 8, marker: '08', phase: 'GLOBAL ROLLOUT', title: 'Next-Gen Checkout', summary: '+0.71% lift via decoupled sheets' },
];

const DETAILS: MilestoneDetail[] = [
  {
    id: 0,
    image: legacyScreenshot,
    badge: 'MILESTONE 00 · BASELINE',
    title: 'Original Codashop: The Single-Page Monolith',
    whatChanged:
      'The legacy 1,046px vertical form. Game ID entry, 20+ SKU packages, and 30+ local payment methods were all stacked on one screen with zero memory and hidden pricing.',
    whyItMattered:
      'It established our commercial baseline volume, but manual typing for 70% returning players caused cognitive fatigue and frequent input drop-offs.',
    takeaway: 'The starting point: high transaction volume, but heavily reliant on player patience.',
    artifact: {
      title: 'Legacy Single-Page Layout',
      caption: '1,046px vertical scroll with 30+ payment channels stacked.',
      status: 'Retired Monolith',
      memory: 'None (0%)',
    },
  },
  {
    id: 1,
    image: milestone01Pricing,
    badge: 'MILESTONE 01 · PRICE TRANSPARENCY',
    title: 'Upfront Prices on Item Cards',
    whatChanged:
      'Added final prices directly onto every denomination card, pairing base top-ups with bonus breakdowns so totals read at a glance with no scrolling required.',
    whyItMattered:
      'Ended mental math at the catalogue step. Players could compare packs instantly, which lifted SKU clarity and pulled purchasable items above the fold.',
    takeaway: "Don't make players do extra work. Help them decide.",
    artifact: {
      title: 'Priced Denomination Grid',
      caption: 'Four first-recharge packs with upfront SGD totals.',
      status: 'Production A/B Win',
      memory: 'Static Price Feed',
    },
  },
  {
    id: 2,
    image: milestone03SmartDefaults,
    badge: 'MILESTONE 02 · EARLY OPTIMISATION',
    title: 'Smart Defaults & Guided Checkout 1',
    whatChanged:
      "Introduced persistent memory to pre-select a returning player's last-used denomination and payment method. Added an active floating guide, the Buy Now Widget which also acts as a mini order summary.",
    whyItMattered:
      'Proved that active guidance, simple memory, and an always-visible summary improved purchase momentum without needing backend API rewrites.',
    takeaway: 'Small interaction improvements compound: memory, guidance, and a persistent mini order summary.',
    artifact: {
      title: 'Smart Defaults + Buy Now Bar',
      caption: 'Pre-selected SKU card with floating guide and sticky mini order summary.',
      status: 'Production A/B Win',
      memory: 'Browser LocalStorage',
    },
  },
  {
    id: 3,
    image: milestone02SocialProof,
    badge: 'MILESTONE 03 · SOCIAL PROOF',
    title: 'Best-Seller Tags',
    whatChanged:
      'Add best seller tags to the most purchased item and the item that generated the most sales in the past month.',
    whyItMattered:
      'Soft recommendations to guide players to what to purchase from the selected title.',
    takeaway: 'Using social proof to lift purchase conversion and AOV with no change in price. Low cost, big impact.',
    artifact: {
      title: 'Social Proof Badges',
      caption: 'Best-seller tags pinned to hero packs with live purchase counts.',
      status: 'Production A/B Win',
      memory: 'CMS Badge Rules',
    },
  },
  {
    id: 4,
    badge: 'MILESTONE 04 · TRUST & VALIDATION',
    video: milestone04TrustVideo,
    title: 'Inline Gamer ID Validation',
    whatChanged:
      "Connected the ID input directly to game servers in real time, instantly displaying the player's verified in-game nickname as soon as they finished typing.",
    whyItMattered:
      'Reassured that the top-ups were going to the right account, and subtly acting as a trust signal as we recognise their in-game account name, rather than just showing a bunch of meaningless characters.',
    takeaway: 'Shifted error handling from late-stage checkout failure to upfront reassurance.',
    artifact: {
      title: 'Real-Time Server Check',
      caption: 'Asynchronous validation checkmark displaying verified player nickname.',
      status: 'Production Rollout',
      memory: 'Server API Handshake',
    },
  },
  {
    id: 5,
    image: milestone05Enterprise,
    badge: 'MILESTONE 05 · WHITE-LABEL PILOT',
    title: 'COD:M White-Label Storefront',
    whatChanged:
      'Designed our first D2C storefront for Activision Call of Duty: Mobile, utilising all the past learnings from Codashop.',
    whyItMattered:
      'Design and tech stack have to scale up to support multiple storefronts. Learnings from experiments can multiply or diverge.',
    takeaway: 'Partner alignment provided the commercial justification to rethink the checkout architecture.',
    artifact: {
      title: 'COD:M Catalogue Page',
      caption: 'Dedicated Call of Duty: Mobile catalogue page with cinematic brand identity.',
      status: 'White-Label Contract Win',
      memory: 'Decoupled Browsing',
    },
  },
  {
    id: 6,
    image: milestone06SeamlessIdentity,
    badge: 'MILESTONE 06 · SEAMLESS IDENTITY',
    title: 'FCM White-Label (EA Account Sign-In)',
    whatChanged:
      'Integrated direct EA Account single sign-on (SSO). Logged-in players no longer had to type an arbitrary Game ID at all, and their account-level items (like Starpass) unlocked automatically.',
    whyItMattered:
      'Transitioned our checkout from manual text fields to authenticated identity, setting the standard for seamless top-ups.',
    takeaway: 'Turned top-up from an anonymous form into an authenticated, personal experience.',
    artifact: {
      title: 'EA Account Single Sign-On',
      caption: 'EA Account SSO with automatic player profile resolution.',
      status: 'Live White-Label Launch',
      memory: 'Direct OAuth / SSO',
    },
  },
  {
    id: 7,
    badge: 'MILESTONE 07 · FLOW REFINEMENT',
    video: milestone07FlowVideo,
    title: 'Guided Checkout 2 (-23.11% Errors)',
    whatChanged:
      "Refined the guided checkout logic to indicate what's the next step for the players. Actively guide players to the next step of the flow.",
    whyItMattered:
      'Delivered an immediate -23.11% drop in checkout input errors, proving our guidance principle on the single-page flow.',
    takeaway: 'We cannot passively wait for players to learn how to use the site. We have to be proactive in helping them achieve their goals.',
    artifact: {
      title: 'Smart Step Guide Widget',
      caption: 'Floating indicator actively resolving validation states.',
      status: 'Production A/B Win',
      memory: 'Dynamic Field State',
    },
  },
  {
    id: 8,
    badge: 'MILESTONE 08 · GLOBAL ROLLOUT',
    video: milestone08RolloutVideo,
    title: 'Next-Gen Checkout (+0.71% Purchase Lift)',
    whatChanged:
      'Full rollout of client-side Next-Gen Bottom Sheets. Decoupled Account Details from Payment Selection into single-task screens while keeping legacy backend APIs intact.',
    whyItMattered:
      'Delivered +0.71% purchase conversion uplift, finally moving Coda Commerce Stores into a multi-step checkout flow.',
    takeaway: 'The multi-step vision shipped: progressive disclosure, zero API breakage, and higher conversion.',
    artifact: {
      title: 'Next-Gen Bottom Sheet',
      caption: 'Client-side modal bottom sheet isolating one decision per viewport.',
      status: 'Global Production Standard',
      memory: 'Client Session Cache',
    },
  },
];

export const TimelineEvolutionVisual: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0);
  const active = DETAILS.find((d) => d.id === activeId) ?? DETAILS[0];
  const imgScrollRef = useRef<HTMLDivElement>(null);
  const [showImgScrim, setShowImgScrim] = useState<boolean>(false);

  // Show the bottom scrim only while there is overflow left to scroll.
  const updateImgScrim = () => {
    const el = imgScrollRef.current;
    if (!el) {
      setShowImgScrim(false);
      return;
    }
    const canScroll = el.scrollHeight - el.clientHeight > 24;
    const moreBelow = el.scrollHeight - (el.scrollTop + el.clientHeight) > 24;
    setShowImgScrim(canScroll && moreBelow);
  };

  const scrollImgDown = () => {
    const el = imgScrollRef.current;
    if (!el) return;
    el.scrollBy({ top: Math.min(el.clientHeight * 0.75, 500), behavior: 'smooth' });
  };

  const scrollImgToBottom = () => {
    const el = imgScrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight });
  };

  // Image/video lightbox (calm fade in/out).
  const [lightbox, setLightbox] = useState<{ src: string; title: string; kind: 'image' | 'video' } | null>(null);
  const [lbVisible, setLbVisible] = useState<boolean>(false);
  const lbTimer = useRef<number | null>(null);

  const openLightbox = (src: string, title: string, kind: 'image' | 'video' = 'image') => {
    if (lbTimer.current) {
      window.clearTimeout(lbTimer.current);
      lbTimer.current = null;
    }
    setLightbox({ src, title, kind });
    requestAnimationFrame(() => requestAnimationFrame(() => setLbVisible(true)));
  };
  const closeLightbox = () => {
    setLbVisible(false);
    if (lbTimer.current) window.clearTimeout(lbTimer.current);
    lbTimer.current = window.setTimeout(() => {
      setLightbox(null);
      lbTimer.current = null;
    }, 300);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      e.stopPropagation();
    };
    window.addEventListener('keydown', onKey, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey, true);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  useEffect(() => {
    const hasVideo = DETAILS.some((d) => d.id === activeId && d.video);
    const el = imgScrollRef.current;
    if (hasVideo) {
      requestAnimationFrame(() => requestAnimationFrame(() => scrollImgToBottom()));
    } else {
      el?.scrollTo({ top: 0 });
    }
    updateImgScrim();
    const timer = setTimeout(updateImgScrim, 150);
    if (!el) return () => clearTimeout(timer);
    el.addEventListener('scroll', updateImgScrim, { passive: true });
    window.addEventListener('resize', updateImgScrim);
    return () => {
      el.removeEventListener('scroll', updateImgScrim);
      window.removeEventListener('resize', updateImgScrim);
      clearTimeout(timer);
    };
  }, [activeId]);

  return (
    <div className="w-full flex flex-col gap-3 font-['Fira_Sans']">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-[#1D4ED8]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
            Interactive Timeline · 00–08
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 items-start">
        {/* Left: scrollable timeline rail (30%) */}
        <div className="lg:col-span-3 max-h-[580px] overflow-y-auto pr-3 overscroll-contain">
          <div className="relative pl-5">
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200" aria-hidden="true" />
            <div className="space-y-2.5">
              {ITEMS.map((item) => {
                const selected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`relative w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      selected
                        ? 'bg-white border-[#2563EB] ring-2 ring-blue-100 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <span
                      className={`absolute -left-[17.5px] top-4 w-[9px] h-[9px] rounded-full border-2 transition-colors ${
                        selected ? 'bg-[#2563EB] border-[#2563EB]' : 'bg-white border-slate-300'
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={`font-['Fira_Code'] text-[13px] font-extrabold ${
                          selected ? 'text-[#2563EB]' : 'text-slate-400'
                        }`}
                      >
                        [{item.marker}]
                      </span>
                      <span className="font-['Fira_Code'] text-[9px] font-bold uppercase tracking-wider text-slate-500">
                        {item.phase}
                      </span>
                    </div>
                    <div className="text-[13px] font-bold text-[#0A2540]">{item.title}</div>
                    <div className="text-[11px] text-slate-500">{item.summary}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: pinned detail panel (70%) */}
        <div key={active.id} className="lg:col-span-7 rounded-xl bg-white border border-slate-200 p-4 sm:p-5 shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left column: milestone narrative */}
            <div className="flex flex-col gap-2.5 min-w-0">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-['Fira_Code'] text-[28px] font-extrabold text-[#2563EB] leading-none">
                    {ITEMS.find(i => i.id === active.id)?.marker ?? '00'}
                  </span>
                  <span className="inline-block text-[10px] font-['Fira_Code'] text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 font-bold">
                    {active.badge}
                  </span>
                </div>
                <h4 className="text-[16px] sm:text-[18px] font-bold text-[#0A2540]">{active.title}</h4>
              </div>
              <div>
                <div className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider text-[#1D4ED8] mb-1">
                  What Changed
                </div>
                <p className="text-[13px] leading-relaxed text-slate-700">{active.whatChanged}</p>
              </div>
              <div>
                <div className="text-[10px] font-['Fira_Code'] font-bold uppercase tracking-wider text-amber-800 mb-1">
                  Why It Mattered
                </div>
                <p className="text-[13px] leading-relaxed text-slate-700">{active.whyItMattered}</p>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-relaxed italic text-slate-700 border-l-2 border-slate-200 pl-3">
                {active.takeaway}
              </p>
            </div>
            {/* Right column: milestone image */}
            <div className="min-w-0 max-h-[520px] relative">
              <div
                ref={imgScrollRef}
                onScroll={updateImgScrim}
                className="h-[520px] max-h-[60vh] overflow-y-auto overscroll-contain rounded-lg flex flex-col"
              >
              {active.video ? (
                <button
                  onClick={() => active.video && openLightbox(active.video, active.title, 'video')}
                  className="relative block w-full cursor-zoom-in group/vid text-left bg-transparent"
                  aria-label={`Expand ${active.title} video`}
                >
                <video
                  src={active.video}
                  className="w-full h-auto mt-auto shrink-0 rounded-lg border border-slate-200 shadow-2xs pointer-events-none transition group-hover/vid:brightness-95 group-hover/vid:ring-2 group-hover/vid:ring-blue-500/40"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={scrollImgToBottom}
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/vid:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <Expand className="w-3.5 h-3.5" />
                    Click to expand
                  </span>
                </span>
                </button>
              ) : active.image ? (
                <button
                  onClick={() => active.image && openLightbox(active.image, active.title)}
                  className="relative block w-full cursor-zoom-in group/img text-left bg-transparent"
                  aria-label={`Expand ${active.title} image`}
                >
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-auto shrink-0 rounded-lg border border-slate-200 shadow-2xs transition group-hover/img:brightness-95 group-hover/img:ring-2 group-hover/img:ring-blue-500/40"
                  referrerPolicy="no-referrer"
                  onLoad={updateImgScrim}
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-[11px] font-semibold flex items-center gap-1.5">
                    <Expand className="w-3.5 h-3.5" />
                    Click to expand
                  </span>
                </span>
                </button>
              ) : (
                <div className="w-full min-h-[280px] h-full rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/60 flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                  <span className="text-[12px] font-bold text-slate-500">
                    Milestone {active.marker} artwork
                  </span>
                  <span className="text-[11px] font-['Fira_Code'] text-slate-400">Image to be added</span>
                </div>
              )}
              </div>
              {showImgScrim && (
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 via-slate-900/15 to-transparent pointer-events-none rounded-b-lg"
                  aria-hidden="true"
                />
              )}
              {showImgScrim && active.id !== 2 && (
                <button
                  onClick={scrollImgDown}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] shadow-xl flex items-center justify-center border border-slate-200 active:scale-95 transition-all cursor-pointer"
                  title="Scroll image down"
                  aria-label="Scroll image down"
                >
                  <span className="material-symbols text-[20px] leading-none">arrow_downward</span>
                </button>
              )}
              {active.id === 2 && (
                <img
                  src={milestone02BuyNowBar}
                  alt="Sticky Buy Now mini order summary bar"
                  className="absolute inset-x-0 bottom-0 w-full h-auto block border-t border-slate-700 pointer-events-none"
                  aria-hidden="true"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image lightbox */}
      {lightbox ? (
        createPortal(
          <div
            className={`fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8 transition-opacity duration-300 ease-out ${
              lbVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => closeLightbox()}
            role="dialog"
            aria-modal="true"
            aria-label={`${lightbox.title} expanded view`}
          >
            <button
              onClick={() => closeLightbox()}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close expanded view"
            >
              <X className="w-4 h-4" />
            </button>
            <div
              className={`transition-all duration-300 ease-out ${
                lbVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.kind === 'video' ? (
                <video
                  src={lightbox.src}
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl border border-slate-700 shadow-2xl"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl border border-slate-700 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="mt-3 text-center text-[12px] font-['Fira_Code'] text-slate-300">
                {lightbox.title}
              </div>
            </div>
          </div>,
          document.body
        )
      ) : null}
    </div>
  );
};
