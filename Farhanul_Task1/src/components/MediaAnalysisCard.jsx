import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  CheckCircle2, 
  AlertTriangle, 
  FileCheck, 
  HardDrive, 
  Layers 
} from 'lucide-react';

export default function MediaAnalysisCard({ images }) {
  const { total, withAlt, withoutAlt, altRatio, totalSizeEstimate, formats, sampleImages } = images;
  const [filter, setFilter] = useState('all'); // 'all' | 'missing' | 'hasAlt'

  const filteredImages = sampleImages.filter(item => {
    if (filter === 'missing') return !item.hasAlt;
    if (filter === 'hasAlt') return item.hasAlt;
    return true;
  });

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Total Images & Media Optimization</h3>
            <p className="text-xs text-slate-500">Alt text compliance, format distribution, and weight audit</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          {withoutAlt} Images Missing Alt Text
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Metric summary boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Total Images</span>
            <span className="text-2xl font-extrabold text-slate-900 block mt-0.5">{total}</span>
            <span className="text-[10px] text-slate-400">Payload: ~{totalSizeEstimate}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">With Alt Text</span>
            <span className="text-2xl font-extrabold text-emerald-900 block mt-0.5">{withAlt}</span>
            <span className="text-[10px] text-emerald-700 font-semibold">{altRatio} Compliance</span>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">Missing Alt Tags</span>
            <span className="text-2xl font-extrabold text-amber-900 block mt-0.5">{withoutAlt}</span>
            <span className="text-[10px] text-amber-700 font-semibold">Needs Attention</span>
          </div>

          <div className="p-3.5 rounded-xl bg-brand-50/70 border border-brand-200">
            <span className="text-[11px] font-bold text-brand-700 uppercase tracking-wider block">Modern WebP</span>
            <span className="text-2xl font-extrabold text-brand-900 block mt-0.5">{formats.webp}</span>
            <span className="text-[10px] text-brand-700">Next-gen format</span>
          </div>
        </div>

        {/* Format Breakdown Badges */}
        <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-500 text-[11px] uppercase mr-1">Formats:</span>
            <span className="px-2 py-0.5 rounded bg-brand-100 text-brand-800 font-bold">WebP: {formats.webp}</span>
            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">PNG: {formats.png}</span>
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold">JPG: {formats.jpg}</span>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">SVG: {formats.svg}</span>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-0.5 rounded cursor-pointer ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              All Sample Images ({sampleImages.length})
            </button>
            <button
              onClick={() => setFilter('missing')}
              className={`px-2.5 py-0.5 rounded cursor-pointer ${
                filter === 'missing' ? 'bg-white text-amber-700 shadow-2xs' : 'text-slate-500 hover:text-amber-700'
              }`}
            >
              Missing Alt ({sampleImages.filter(i => !i.hasAlt).length})
            </button>
            <button
              onClick={() => setFilter('hasAlt')}
              className={`px-2.5 py-0.5 rounded cursor-pointer ${
                filter === 'hasAlt' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-500 hover:text-emerald-700'
              }`}
            >
              Compliant ({sampleImages.filter(i => i.hasAlt).length})
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx}
              className={`p-3 rounded-xl border flex flex-col justify-between gap-2.5 transition-all ${
                img.hasAlt 
                  ? 'bg-white border-slate-200 hover:border-slate-300' 
                  : 'bg-amber-50/40 border-amber-200 ring-1 ring-amber-200/60'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {img.format}
                    </span>
                    <span className="text-[10px] text-slate-400 ml-1.5">
                      {img.size}
                    </span>
                  </div>
                </div>

                {img.hasAlt ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Alt Present
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                    Missing Alt
                  </span>
                )}
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 truncate block" title={img.url}>
                  {img.url.split('/').pop()}
                </span>
                <p className="text-xs font-medium text-slate-800 line-clamp-2 mt-0.5">
                  {img.hasAlt ? (
                    <span>"{img.alt}"</span>
                  ) : (
                    <span className="text-amber-800 italic">No alternative text provided. Screen readers will skip this element.</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
