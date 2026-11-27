import React from 'react';
import { 
  Zap, 
  Activity, 
  Server, 
  Wifi, 
  Cpu, 
  HardDrive, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export default function PerformanceCard({ performance, status }) {
  const { score, rating, metrics, network } = performance;

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Basic Performance & Core Web Vitals</h3>
            <p className="text-xs text-slate-500">Page load experience, server latency, and network payload</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-sky-50 text-sky-700 border border-sky-200">
          <Activity className="w-3.5 h-3.5" />
          Performance Score: {score}/100 ({rating})
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* Core Web Vitals 6-metric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 truncate" title={m.name}>
                  {m.name.split('(')[0]}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {m.score}%
                </span>
              </div>

              <div className="text-2xl font-extrabold text-slate-900 font-mono tracking-tight">
                {m.value}
              </div>

              <p className="text-[11px] text-slate-500 leading-tight">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Network & Resource Weight Distribution */}
        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Network Payload Breakdown (Total: {network.totalPageWeight})
            </h4>
            <span className="text-xs text-slate-500 font-medium">
              {network.totalRequests} HTTP Requests • {network.domElements} DOM Nodes
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">HTML Document</span>
              <span className="text-sm font-bold text-slate-800">{network.documentSize}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">JavaScript Bundles</span>
              <span className="text-sm font-bold text-slate-800">{network.scriptsSize}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">CSS Stylesheets</span>
              <span className="text-sm font-bold text-slate-800">{network.stylesSize}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">Media / Images</span>
              <span className="text-sm font-bold text-slate-800">{network.imagesSize}</span>
            </div>
          </div>
        </div>

        {/* Server & Edge Infrastructure */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-brand-900 via-brand-950 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white">
              <Server className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block">
                Infrastructure Overview
              </span>
              <h5 className="text-sm font-bold">
                {status.server} with {status.compression} Compression
              </h5>
              <p className="text-xs text-slate-400">
                Protocol: {status.httpProtocol} • Response Time: {status.responseTime} • IP: {status.ipAddress}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs font-semibold text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Edge CDN Active
          </div>
        </div>
      </div>
    </div>
  );
}
