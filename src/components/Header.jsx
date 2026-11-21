import React, { useState } from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  Sparkles, 
  Download, 
  RotateCcw, 
  ExternalLink,
  Info,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function Header({ onReset, onExport, currentUrl }) {
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-500 text-white shadow-md shadow-brand-500/20 ring-1 ring-white/30">
              <Globe2 className="w-6 h-6 animate-pulse-subtle" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Biswas <span className="text-brand-600 font-extrabold">IT</span> Automation
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
                  Analyzer v2.4
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Enterprise Website URL Analyzer & SEO Intelligence Suite
              </p>
            </div>
          </div>

          {/* Quick Actions & System Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setShowInfoModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-brand-700 bg-slate-100/80 hover:bg-brand-50 rounded-lg border border-slate-200 transition-colors cursor-pointer"
              title="About this Tool"
            >
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Project Info</span>
            </button>

            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              title="Reset to default example"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            <button
              onClick={onExport}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 rounded-lg shadow-sm shadow-brand-600/25 transition-all cursor-pointer"
              title="Export Full Report"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-slide-up">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                  B
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">About Website URL Analyzer</h3>
                  <p className="text-xs text-slate-500">Biswas IT Automation Frontend Evaluation</p>
                </div>
              </div>
              <button
                onClick={() => setShowInfoModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-semibold w-7 h-7 flex items-center justify-center rounded-lg hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3.5 text-xs text-slate-600 leading-relaxed">
              <p>
                This interface was architected for <strong className="text-slate-900">Biswas IT Automation</strong> to provide an executive-level diagnostic dashboard for evaluating website SEO, metadata, DOM heading architecture, media optimization, and Core Web Vitals performance.
              </p>
              
              <div className="p-3 bg-brand-50 rounded-xl border border-brand-100 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-brand-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  Target Website Benchmark
                </div>
                <p className="text-brand-800">
                  Pre-configured with comprehensive realistic analysis data for <strong>https://prostutibd.com/</strong>.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-semibold text-slate-800 block">Technology Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">React.js 19</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Vite 8</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Tailwind CSS</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Lucide React</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">JavaScript (ES6+)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowInfoModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg cursor-pointer"
              >
                Close & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
