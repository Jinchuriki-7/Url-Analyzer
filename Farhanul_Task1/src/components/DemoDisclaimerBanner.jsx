import React from 'react';
import { AlertCircle, CheckCircle, Info, Sparkles } from 'lucide-react';

export default function DemoDisclaimerBanner({ domain = "prostutibd.com" }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50/60 to-sky-50 border border-blue-200/90 rounded-2xl p-4 sm:p-5 shadow-xs transition-all">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 p-2 rounded-xl bg-brand-600 text-white shadow-xs">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-brand-100 text-brand-800 border border-brand-300">
                DEMO / SAMPLE BENCHMARK MODE
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Target: <span className="text-brand-700 font-mono font-bold">https://prostutibd.com/</span>
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Displaying verified realistic benchmark sample data for <strong>{domain}</strong> for frontend evaluation.
              This interface is operating in standalone simulation mode and does not require an active backend web crawler.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-blue-200 text-xs font-semibold text-brand-800 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            100% Client-Side Engine
          </span>
        </div>
      </div>
    </div>
  );
}
