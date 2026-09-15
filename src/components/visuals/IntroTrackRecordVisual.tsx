import React from 'react';
import { Shield, Building, Gamepad2, Quote, CheckCircle } from 'lucide-react';

export const IntroTrackRecordVisual: React.FC = () => {
  const organizations = [
    {
      name: 'Coda Payments',
      role: 'Lead Product Designer',
      tenure: '2021 – Present',
      type: 'Pan-regional Fintech D2C',
    },
    {
      name: 'Singapore Press Holdings',
      role: 'Associate UX Director',
      tenure: '2019 – 2021',
      type: 'Media Conglomerate',
    },
    {
      name: 'Discovery Network Asia',
      role: 'UX Lead',
      tenure: '2018 – 2019',
      type: 'Broadcast & OTT Streaming',
    },
    {
      name: 'Hyphen Group',
      role: 'Senior Product Designer',
      tenure: '2016 – 2018',
      type: 'Financial Comparison Engine',
    },
  ];

  const enterpriseClients = [
    {
      name: 'EA Sports',
      ip: 'FC™ Mobile, Apex Legends',
      detail: 'Custom webstore token systems & localised direct top-ups',
      highlight: true,
    },
    {
      name: 'Activision Blizzard',
      ip: 'Call of Duty Mobile',
      detail: 'White-label multi-region checkout & compliance flows',
      highlight: true,
    },
    {
      name: 'KONAMI',
      ip: 'eFootball™, Yu-Gi-Oh!',
      detail: 'Bespoke brand architecture & payment method orchestration',
      highlight: true,
    },
    {
      name: 'Moonton & Riot Games',
      ip: 'MLBB, Valorant',
      detail: 'High-throughput flash sales & server-side voucher delivery',
      highlight: false,
    },
  ];

  const testimonials = [
    {
      author: 'Eileen Zhang',
      title: 'Director of Product, Coda Payments',
      badge: 'Product Strategy',
      quote:
        'Yi Wei combines deep technical rigour with commercial pragmatism. He turned our checkout from a conversion bottleneck into our biggest competitive moat.',
    },
    {
      author: 'Joseph Soo',
      title: 'Lead UX Researcher, DBS / ex-Hyphen Group',
      badge: 'Executive Influence',
      quote:
        'His razor-sharp ability to analyse problems and provide business recommendations that make sense is a huge asset... able to quickly rally C-suites, Engineering, and Executive levels.',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between relative overflow-hidden font-['Fira_Sans']">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#166534]" />
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-['Fira_Code']">
            Social Proof & Commercial Validation
          </span>
        </div>
        <span className="text-[10px] font-['Fira_Code'] text-[#166534] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
          Tier-1 Enterprise Delivery
        </span>
      </div>

      {/* Three Columns Structure with White Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 flex-1 overflow-y-auto pr-1">
        {/* Column 1: Organisations Led */}
        <div className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-slate-100">
              <Building className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Organisations Led
              </h4>
            </div>
            <div className="space-y-2">
              {organizations.map((org, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0A2540]">{org.name}</span>
                    <span className="text-[9px] font-['Fira_Code'] text-slate-500 font-semibold">{org.tenure}</span>
                  </div>
                  <div className="text-[10px] text-[#1D4ED8] font-medium mt-0.5">{org.role}</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">{org.type}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 text-[10px] font-['Fira_Code'] text-slate-500 border-t border-slate-100 flex items-center justify-between font-semibold">
            <span>Leadership Track</span>
            <span className="text-[#1D4ED8]">10+ Years</span>
          </div>
        </div>

        {/* Column 2: Enterprise Clients Won & Delivered */}
        <div className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-slate-100">
              <Gamepad2 className="w-3.5 h-3.5 text-[#166534]" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Clients Won & Delivered
              </h4>
            </div>
            <p className="text-[10px] text-slate-500 leading-tight mb-2">
              White-glove executive pitching & custom D2C storefront architectures:
            </p>
            <div className="space-y-1.5">
              {enterpriseClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs transition-colors hover:border-slate-300"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#0A2540] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#166534]" />
                      {client.name}
                    </span>
                    <span className="text-[9px] font-['Fira_Code'] text-[#166534] font-semibold">
                      {client.ip}
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5 leading-tight line-clamp-1">
                    {client.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 text-[10px] font-['Fira_Code'] text-slate-500 border-t border-slate-100 flex items-center justify-between font-semibold">
            <span>Enterprise Win Rate</span>
            <span className="text-[#166534]">AAA Standard</span>
          </div>
        </div>

        {/* Column 3: Stakeholder Endorsements */}
        <div className="rounded-xl bg-white border border-slate-200 p-3.5 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center gap-1.5 mb-2.5 pb-1.5 border-b border-slate-100">
              <Quote className="w-3.5 h-3.5 text-[#E11927]" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540] font-['Fira_Code']">
                Executive Endorsements
              </h4>
            </div>
            <div className="space-y-2">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="text-[11px] text-slate-700 italic leading-relaxed mb-2 font-normal">
                    "{t.quote}"
                  </div>
                  <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[10px]">
                    <div>
                      <div className="font-bold text-[#0A2540] text-[11px]">{t.author}</div>
                      <div className="text-[9px] text-slate-500 font-['Fira_Code']">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 text-[10px] font-['Fira_Code'] text-slate-500 border-t border-slate-100 flex items-center justify-between font-semibold">
            <span>Peer Review Trust</span>
            <span className="text-[#E11927]">Commercial Rigour</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Callout */}
      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
        <span className="text-[11px]">
          <strong className="text-[#0A2540] font-bold">Core Takeaway:</strong> Trusted by executive teams to deliver multi-million dollar flagship brand storefronts and scale without risk.
        </span>
        <span className="text-[10px] font-['Fira_Code'] text-slate-500 font-semibold hidden sm:inline">DBS XD Validation</span>
      </div>
    </div>
  );
};
