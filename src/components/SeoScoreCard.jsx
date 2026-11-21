import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ShieldCheck, 
  FileText, 
  Code2, 
  Image as ImageIcon, 
  Link2,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export default function SeoScoreCard({ seoScore }) {
  const { overall, grade, status, summary, categories, checklist } = seoScore;
  const [filter, setFilter] = useState('all'); // 'all' | 'passed' | 'warning'

  const filteredChecklist = checklist.filter(item => {
    if (filter === 'passed') return item.passed;
    if (filter === 'warning') return !item.passed;
    return true;
  });

  // Calculate circular progress dash offset
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (overall / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">SEO Score & Technical Audit</h3>
            <p className="text-xs text-slate-500">Comprehensive algorithm score & on-page checks</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <TrendingUp className="w-3.5 h-3.5" />
          Grade {grade} ({status})
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Top Score Banner with Circular Gauge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white shadow-md">
          {/* Circular Gauge */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  stroke="#334155"
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r={radius}
                  stroke="#10b981"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold tracking-tight font-mono text-emerald-400">
                  {overall}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                  out of 100
                </span>
              </div>
            </div>
            <span className="mt-2 text-xs font-bold text-slate-300">
              SEO Health Score
            </span>
          </div>

          {/* Audit Narrative */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Grade {grade} • {status} Standing
              </span>
              <span className="text-xs text-slate-400">URL Analyzer Index</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              {summary}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 7 Passed Checks
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-300 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5" /> 1 Optimization Opportunity
              </span>
            </div>
          </div>
        </div>

        {/* Categories Bar Chart */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Audit Breakdown by Category
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {categories.map((cat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    {cat.name}
                  </span>
                  <span className={`text-xs font-mono font-bold ${
                    cat.score >= 90 ? 'text-emerald-700' : cat.score >= 75 ? 'text-amber-700' : 'text-rose-700'
                  }`}>
                    {cat.score}%
                  </span>
                </div>

                <div className="w-full bg-slate-200/70 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      cat.score >= 90 ? 'bg-emerald-500' : cat.score >= 75 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${cat.score}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-500 leading-tight">
                  {cat.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Actionable SEO Checklist */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Diagnostic Checklist & Action Items
            </h4>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setFilter('all')}
                className={`px-2.5 py-0.5 rounded cursor-pointer ${
                  filter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                All ({checklist.length})
              </button>
              <button
                onClick={() => setFilter('passed')}
                className={`px-2.5 py-0.5 rounded cursor-pointer ${
                  filter === 'passed' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-500 hover:text-emerald-700'
                }`}
              >
                Passed (7)
              </button>
              <button
                onClick={() => setFilter('warning')}
                className={`px-2.5 py-0.5 rounded cursor-pointer ${
                  filter === 'warning' ? 'bg-white text-amber-700 shadow-2xs' : 'text-slate-500 hover:text-amber-700'
                }`}
              >
                Attention (1)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {filteredChecklist.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
                  item.passed 
                    ? 'bg-white border-slate-200/90 hover:border-slate-300' 
                    : 'bg-amber-50/60 border-amber-200'
                }`}
              >
                <div className="mt-0.5">
                  {item.passed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  )}
                </div>

                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-bold ${item.passed ? 'text-slate-800' : 'text-amber-900'}`}>
                      {item.rule}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.2 rounded ${
                      item.impact === 'High' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.impact} Impact
                    </span>
                  </div>
                  {item.suggestion && (
                    <p className="text-xs text-amber-800 font-medium">
                      💡 Recommendation: {item.suggestion}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
