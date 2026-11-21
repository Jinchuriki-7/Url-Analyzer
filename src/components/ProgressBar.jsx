import React from 'react';
import { CheckCircle2, Loader2, Sparkles, Shield, FileSearch, Network, Gauge } from 'lucide-react';

const ANALYSIS_STAGES = [
  { step: 1, title: "Connecting & SSL Handshake", desc: "Checking TLS certificate, HTTP/2 protocol, and response headers", icon: Shield },
  { step: 2, title: "Parsing DOM & Metadata", desc: "Extracting page title, meta description, and social OpenGraph tags", icon: FileSearch },
  { step: 3, title: "Auditing Heading Architecture", desc: "Verifying H1-H6 hierarchy, semantic distribution, and structure", icon: CheckCircle2 },
  { step: 4, title: "Traversing Hyperlinks & Images", desc: "Cataloging internal vs external links and image alt attributes", icon: Network },
  { step: 5, title: "Computing Web Vitals & SEO Score", desc: "Synthesizing Core Web Vitals, speed index, and technical health", icon: Gauge }
];

export default function ProgressBar({ progress, currentStageIndex }) {
  const activeStage = ANALYSIS_STAGES[currentStageIndex] || ANALYSIS_STAGES[0];
  const ActiveIcon = activeStage.icon;

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 p-6 sm:p-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3.5">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 border border-brand-200">
            <Loader2 className="w-6 h-6 animate-spin text-brand-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                Stage {activeStage.step} of 5
              </span>
              <span className="text-xs text-slate-400 font-medium">Running Diagnostics</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {activeStage.title}
            </h3>
            <p className="text-xs text-slate-500">
              {activeStage.desc}
            </p>
          </div>
        </div>

        <div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
          <span className="text-3xl font-extrabold text-brand-600 tracking-tight font-mono">
            {progress}%
          </span>
          <span className="text-xs font-semibold text-slate-400">Analysis Progress</span>
        </div>
      </div>

      {/* Modern Gradient Animated Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200/70">
          <div 
            className="bg-gradient-to-r from-brand-600 via-sky-500 to-emerald-400 h-full rounded-full transition-all duration-300 ease-out shadow-xs relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/25 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-6">
        {ANALYSIS_STAGES.map((stage, idx) => {
          const isDone = idx < currentStageIndex;
          const isCurrent = idx === currentStageIndex;

          return (
            <div 
              key={stage.step}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                isCurrent 
                  ? 'bg-brand-50/80 border-brand-300 ring-1 ring-brand-300/50' 
                  : isDone 
                    ? 'bg-emerald-50/50 border-emerald-200 text-emerald-800' 
                    : 'bg-slate-50 border-slate-100 text-slate-400 opacity-60'
              }`}
            >
              <div className="flex items-center justify-center mb-1">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                ) : (
                  <span className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">
                    {stage.step}
                  </span>
                )}
              </div>
              <p className={`text-[11px] font-bold truncate ${isCurrent ? 'text-brand-900' : isDone ? 'text-emerald-900' : 'text-slate-500'}`}>
                {stage.title.split('&')[0]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
