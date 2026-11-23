import React from 'react';
import { 
  AlertOctagon, 
  XCircle, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  ShieldAlert,
  Search
} from 'lucide-react';

export default function ErrorStateCard({ 
  failedUrl = '', 
  errorMessage = 'The entered website URL could not be analyzed.', 
  onRetryWithUrl, 
  onClear 
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-rose-500/5 border border-rose-200/90 overflow-hidden animate-fade-in max-w-4xl mx-auto">
      {/* Top Warning Banner */}
      <div className="px-6 py-4 bg-gradient-to-r from-rose-500/10 via-rose-50 to-white border-b border-rose-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
            Error State • Analysis Failed (ভুল URL-এর অবস্থা)
          </span>
        </div>

        <span className="text-xs font-mono font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300">
          HTTP / DNS Error
        </span>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        {/* Main Error Hero */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 border border-rose-200 shadow-sm shadow-rose-200/50">
            <AlertOctagon className="w-7 h-7" />
          </div>

          <div className="space-y-1.5 flex-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-rose-700 tracking-tight">
              Invalid URL. Please enter a valid website URL.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {errorMessage}
            </p>

            {/* Display the faulty URL if available */}
            {failedUrl && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-rose-700 font-bold max-w-full truncate">
                <span className="text-slate-500 font-sans font-semibold">Entered URL:</span>
                <span className="truncate">{failedUrl}</span>
              </div>
            )}
          </div>
        </div>

        {/* Diagnostic Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* What went wrong */}
          <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/80 space-y-3">
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-600" />
              What Went Wrong? (কী ভুল হয়েছে?)
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>The entered domain format is invalid or missing a valid Top-Level Domain (TLD) like <code className="bg-white px-1 py-0.5 rounded border border-rose-200 font-mono">.com</code>, <code className="bg-white px-1 py-0.5 rounded border border-rose-200 font-mono">.bd</code>, or <code className="bg-white px-1 py-0.5 rounded border border-rose-200 font-mono">.org</code>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>The DNS resolution or SSL handshake could not be established with the target host.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Contains special characters, spaces, or an unsupported protocol schema.</span>
              </li>
            </ul>
          </div>

          {/* How to resolve */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
            <h4 className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              Recommended Solutions (সমাধান)
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">1.</span>
                <span>Ensure the URL includes protocol and domain (e.g. <strong className="text-brand-800 font-mono">https://prostutibd.com/</strong>).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">2.</span>
                <span>Double-check spelling to eliminate accidental spaces or symbols.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-500 font-bold">3.</span>
                <span>Use one of the one-click verified presets below to test the analyzer.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Recovery Actions */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Quick Test Fix:</span>
            <button
              onClick={() => onRetryWithUrl && onRetryWithUrl('https://prostutibd.com/')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-sm shadow-brand-600/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Load prostutibd.com</span>
            </button>
            <button
              onClick={() => onRetryWithUrl && onRetryWithUrl('https://github.com')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <span>Load github.com</span>
            </button>
          </div>

          <button
            onClick={onClear}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear & Try Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
