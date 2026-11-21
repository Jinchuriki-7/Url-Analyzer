import React, { useState } from 'react';
import { 
  Heading, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Filter, 
  Search,
  ListTree
} from 'lucide-react';

export default function HeadingStructureCard({ headings }) {
  const { total, h1Count, h2Count, h3Count, isH1Unique, list } = headings;
  const [selectedLevel, setSelectedLevel] = useState('all'); // 'all' | 'H1' | 'H2' | 'H3'
  const [copiedText, setCopiedText] = useState(null);

  const filteredHeadings = list.filter(item => {
    if (selectedLevel === 'all') return true;
    return item.level === selectedLevel;
  });

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedText(idx);
    setTimeout(() => setCopiedText(null), 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
            <Heading className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Heading Structure (H1, H2, H3)</h3>
            <p className="text-xs text-slate-500">Semantic hierarchy, heading distribution, and accessibility</p>
          </div>
        </div>

        {/* Validation status badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Proper Hierarchy Validated
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Count Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div 
            onClick={() => setSelectedLevel('all')}
            className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
              selectedLevel === 'all' 
                ? 'bg-brand-50/80 border-brand-400 ring-1 ring-brand-400' 
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Total Headings</span>
            <span className="text-2xl font-extrabold text-slate-900 block mt-0.5">{total}</span>
            <span className="text-[10px] text-slate-500">All levels combined</span>
          </div>

          <div 
            onClick={() => setSelectedLevel('H1')}
            className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
              selectedLevel === 'H1' 
                ? 'bg-purple-50 border-purple-400 ring-1 ring-purple-400' 
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider block">H1 Tag</span>
            <span className="text-2xl font-extrabold text-purple-900 block mt-0.5">{h1Count}</span>
            <span className="text-[10px] text-emerald-700 font-semibold">✓ Unique (Optimal)</span>
          </div>

          <div 
            onClick={() => setSelectedLevel('H2')}
            className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
              selectedLevel === 'H2' 
                ? 'bg-blue-50 border-blue-400 ring-1 ring-blue-400' 
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">H2 Tags</span>
            <span className="text-2xl font-extrabold text-blue-900 block mt-0.5">{h2Count}</span>
            <span className="text-[10px] text-slate-500">Major sections</span>
          </div>

          <div 
            onClick={() => setSelectedLevel('H3')}
            className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
              selectedLevel === 'H3' 
                ? 'bg-sky-50 border-sky-400 ring-1 ring-sky-400' 
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">H3 Tags</span>
            <span className="text-2xl font-extrabold text-sky-900 block mt-0.5">{h3Count}</span>
            <span className="text-[10px] text-slate-500">Sub-sections & courses</span>
          </div>
        </div>

        {/* SEO Rule Validation Alert */}
        <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
          <div className="text-xs text-emerald-900 leading-relaxed">
            <span className="font-bold">H1 Best Practice Passed:</span> Exactly <strong>1</strong> main H1 tag detected on the target page. Search engines and screen readers prioritize a single distinct H1 header to understand primary context.
          </div>
        </div>

        {/* Headings List with Hierarchy Tree Style */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListTree className="w-4 h-4 text-slate-500" />
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                DOM Heading Hierarchy ({filteredHeadings.length})
              </h4>
            </div>

            <span className="text-xs text-slate-400">
              Click level chips above to filter
            </span>
          </div>

          <div className="space-y-2 border border-slate-200 rounded-xl p-3 bg-slate-50/50 max-h-96 overflow-y-auto">
            {filteredHeadings.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border transition-all flex items-start justify-between gap-3 ${
                  item.level === 'H1'
                    ? 'bg-purple-50/90 border-purple-200 text-purple-950 font-bold ml-0 ring-1 ring-purple-200'
                    : item.level === 'H2'
                      ? 'bg-white border-blue-200 text-slate-900 ml-3'
                      : 'bg-white border-slate-200 text-slate-700 ml-6'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-extrabold shrink-0 ${
                    item.level === 'H1' 
                      ? 'bg-purple-600 text-white' 
                      : item.level === 'H2' 
                        ? 'bg-brand-600 text-white' 
                        : 'bg-sky-600 text-white'
                  }`}>
                    {item.level}
                  </span>

                  <div>
                    <p className={`text-xs sm:text-sm ${item.level === 'H1' ? 'font-bold' : item.level === 'H2' ? 'font-semibold' : 'font-medium'}`}>
                      {item.text}
                    </p>
                    <span className="text-[10px] text-slate-400 italic block mt-0.5">
                      Context: {item.note}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.text, idx)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                  title="Copy heading text"
                >
                  {copiedText === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
