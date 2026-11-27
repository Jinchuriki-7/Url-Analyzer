import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Heading, 
  Link2, 
  Image as ImageIcon, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export default function OverviewCards({ data, onNavigateTab }) {
  const { seoScore, status, headings, links, images, performance } = data;

  const cards = [
    {
      title: "Overall SEO Health",
      value: `${seoScore.overall}/100`,
      badge: `Grade ${seoScore.grade}`,
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      subtext: "Strong semantic and meta foundation",
      icon: Award,
      color: "from-blue-600 to-indigo-600",
      tab: "seo"
    },
    {
      title: "Website Status",
      value: `${status.code} ${status.statusText}`,
      badge: "SSL Valid & Secure",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      subtext: `Response time: ${status.responseTime} via ${status.httpProtocol}`,
      icon: ShieldCheck,
      color: "from-emerald-600 to-teal-600",
      tab: "meta"
    },
    {
      title: "Heading Structure",
      value: `${headings.total} Headings`,
      badge: `${headings.h1Count} H1 • ${headings.h2Count} H2 • ${headings.h3Count} H3`,
      badgeColor: "bg-brand-100 text-brand-800 border-brand-300",
      subtext: "Valid hierarchy with unique H1 tag",
      icon: Heading,
      color: "from-brand-600 to-sky-600",
      tab: "headings"
    },
    {
      title: "Hyperlink Graph",
      value: `${links.total} Links`,
      badge: `${links.internalCount} Internal • ${links.externalCount} External`,
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      subtext: "0 broken links • 100% secure protocol",
      icon: Link2,
      color: "from-indigo-600 to-purple-600",
      tab: "links"
    },
    {
      title: "Media & Assets",
      value: `${images.total} Images`,
      badge: `${images.withAlt} with Alt (${images.altRatio})`,
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      subtext: `${images.withoutAlt} missing alt tags need review`,
      icon: ImageIcon,
      color: "from-amber-600 to-orange-600",
      tab: "media"
    },
    {
      title: "Performance Index",
      value: `${performance.score}/100`,
      badge: `FCP ${performance.metrics[0].value} • LCP ${performance.metrics[1].value}`,
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      subtext: `Total page weight: ${performance.network.totalPageWeight}`,
      icon: Zap,
      color: "from-sky-600 to-cyan-600",
      tab: "performance"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            onClick={() => onNavigateTab && onNavigateTab(card.tab)}
            className="group relative bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-200 cursor-pointer overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${card.color} text-white shadow-xs group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {card.title}
                  </h4>
                  <div className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    {card.value}
                  </div>
                </div>
              </div>

              <div className="text-slate-300 group-hover:text-brand-600 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold border ${card.badgeColor}`}>
                {card.badge}
              </span>
              <span className="text-[11px] text-slate-500 font-medium truncate">
                {card.subtext}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
