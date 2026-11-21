import React from 'react';
import { Globe, Heart, Shield, Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-white border-t border-slate-200/80 pt-10 pb-8 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">
                B
              </div>
              <span className="text-base font-bold text-slate-900">
                Biswas <span className="text-brand-600">IT</span> Automation
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Modern frontend dashboard engineered for high-precision website diagnostics, SEO scoring, and Core Web Vitals telemetry.
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
              React 19
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
              Vite 8
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700">
              Lucide React
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:text-brand-700 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Biswas IT Automation. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with precision for Internship Frontend Evaluation</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
