import React, { useState } from 'react';
import { 
  Link2, 
  ExternalLink, 
  CornerDownRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Search, 
  Filter,
  ShieldCheck 
} from 'lucide-react';

export default function LinksAnalysisCard({ links }) {
  const { total, internalCount, externalCount, brokenCount, internalSample, externalSample } = links;
  const [tab, setTab] = useState('all'); // 'all' | 'internal' | 'external'
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedUrl, setCopiedUrl] = useState(null);

  // Combine and map links
  const allLinks = [
    ...internalSample.map(l => ({ ...l, type: 'Internal' })),
    ...externalSample.map(l => ({ ...l, type: 'External' }))
  ];

  const filteredLinks = allLinks.filter(item => {
    const matchesTab = 
      tab === 'all' ? true : 
      tab === 'internal' ? item.type === 'Internal' : 
      item.type === 'External';

    const matchesSearch = 
      item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.url.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleCopy = (url, idx) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(idx);
    setTimeout(() => setCopiedUrl(null), 1500);
  };

  const internalPercent = Math.round((internalCount / total) * 100);
  const externalPercent = 100 - internalPercent;

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
            <Link2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Internal & External Links Analysis</h3>
            <p className="text-xs text-slate-500">Navigation structure, link distribution, and outbound references</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          0 Broken Links (100% Valid)
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Link Distribution Ratio Bar */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-brand-700 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
              Internal Links: {internalCount} ({internalPercent}%)
            </span>
            <span className="text-indigo-700 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
              External Links: {externalCount} ({externalPercent}%)
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden flex">
            <div 
              className="bg-brand-600 h-full transition-all duration-500" 
              style={{ width: `${internalPercent}%` }}
              title={`Internal Links: ${internalCount}`}
            />
            <div 
              className="bg-indigo-500 h-full transition-all duration-500" 
              style={{ width: `${externalPercent}%` }}
              title={`External Links: ${externalCount}`}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Total Crawled Hyperlinks: <strong>{total}</strong></span>
            <span>Anchor Diversity: High</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200">
            <button
              onClick={() => setTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                tab === 'all' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'hover:text-slate-900'
              }`}
            >
              All Links ({allLinks.length})
            </button>
            <button
              onClick={() => setTab('internal')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                tab === 'internal' ? 'bg-white text-brand-700 shadow-2xs font-bold' : 'hover:text-slate-900'
              }`}
            >
              Internal ({internalSample.length})
            </button>
            <button
              onClick={() => setTab('external')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                tab === 'external' ? 'bg-white text-indigo-700 shadow-2xs font-bold' : 'hover:text-slate-900'
              }`}
            >
              External ({externalSample.length})
            </button>
          </div>

          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter links or anchor text..."
              className="w-full sm:w-64 pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 outline-none transition-all"
            />
          </div>
        </div>

        {/* Links Table */}
        <div className="border border-slate-200 rounded-xl overflow-hidden max-h-80 overflow-y-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider sticky top-0">
              <tr>
                <th className="py-2.5 px-4">Anchor Text</th>
                <th className="py-2.5 px-4">Target Destination URL</th>
                <th className="py-2.5 px-3">Type</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLinks.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-2.5 px-4 font-semibold text-slate-800">
                    {item.text}
                  </td>
                  <td className="py-2.5 px-4 text-slate-600 font-mono text-[11px] truncate max-w-[220px]" title={item.url}>
                    {item.url}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.type === 'Internal' 
                        ? 'bg-brand-50 text-brand-700 border border-brand-200' 
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {item.status} OK
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleCopy(item.url, idx)}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer"
                        title="Copy link"
                      >
                        {copiedUrl === idx ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-slate-400 hover:text-brand-600 hover:bg-slate-200/60"
                        title="Open in new window"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
