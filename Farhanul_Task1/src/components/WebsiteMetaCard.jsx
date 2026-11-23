import React, { useState } from 'react';
import { 
  Globe, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  Server, 
  Share2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export default function WebsiteMetaCard({ data }) {
  const { url, canonicalUrl, metadata, status } = data;
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState('meta'); // 'meta' | 'opengraph' | 'headers'

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xs border border-slate-200/90 overflow-hidden">
      {/* Header Bar */}
      <div className="px-6 py-4.5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-brand-50 text-brand-600 border border-brand-100">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Website Identity & Meta Tags</h3>
            <p className="text-xs text-slate-500">Core on-page credentials and crawl configuration</p>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center bg-slate-100/80 p-1 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200">
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'meta' ? 'bg-white text-brand-700 shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            Meta Tags
          </button>
          <button
            onClick={() => setActiveTab('opengraph')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'opengraph' ? 'bg-white text-brand-700 shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            Social OpenGraph
          </button>
          <button
            onClick={() => setActiveTab('headers')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'headers' ? 'bg-white text-brand-700 shadow-2xs font-bold' : 'hover:text-slate-900'
            }`}
          >
            HTTP Headers
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Analyzed URL banner */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden w-full">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">
              Analyzed URL:
            </span>
            <span className="text-sm font-semibold text-brand-700 truncate font-mono">
              {url}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs transition-colors cursor-pointer"
            >
              {copiedUrl ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy URL</span>
                </>
              )}
            </button>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 border border-brand-200 text-xs font-medium text-brand-700 transition-colors"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {activeTab === 'meta' && (
          <div className="space-y-5 animate-fade-in">
            {/* Website Title */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-600" />
                  Website Title (&lt;title&gt;)
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 className="w-3 h-3" />
                  {metadata.titleLength} characters (Optimal 50-60)
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {metadata.title}
              </h4>
            </div>

            {/* Meta Description */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-brand-600" />
                  Meta Description (&lt;meta name="description"&gt;)
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 className="w-3 h-3" />
                  {metadata.descriptionLength} characters (Optimal 120-160)
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {metadata.description}
              </p>
            </div>

            {/* Technical Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Canonical URL</span>
                <span className="text-xs font-semibold text-slate-800 truncate block mt-0.5" title={canonicalUrl}>
                  {canonicalUrl}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Language Code</span>
                <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                  {metadata.language}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Encoding Charset</span>
                <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                  {metadata.charset}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Robots Directives</span>
                <span className="text-xs font-semibold text-emerald-700 font-mono block mt-0.5">
                  {metadata.robots}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'opengraph' && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xs text-slate-500">
              Open Graph meta tags define how social platforms like Facebook, LinkedIn, Discord, and X present this webpage when shared.
            </p>

            {/* Preview Card Mockup */}
            <div className="max-w-md mx-auto rounded-2xl border border-slate-300/80 shadow-md overflow-hidden bg-white">
              <div className="h-44 bg-gradient-to-tr from-brand-800 via-brand-600 to-sky-500 flex flex-col items-center justify-center p-6 text-white text-center">
                <Globe className="w-10 h-10 opacity-80 mb-2" />
                <span className="text-xs font-bold tracking-wider uppercase opacity-90">{metadata.openGraph.siteName}</span>
                <span className="text-base font-extrabold line-clamp-1 mt-1">{metadata.openGraph.title}</span>
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  {data.domain}
                </span>
                <h5 className="text-sm font-bold text-slate-900 leading-snug">
                  {metadata.openGraph.title}
                </h5>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {metadata.openGraph.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-400 font-bold block uppercase text-[10px]">og:type</span>
                <span className="font-semibold text-slate-800">{metadata.openGraph.type}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-400 font-bold block uppercase text-[10px]">og:site_name</span>
                <span className="font-semibold text-slate-800">{metadata.openGraph.siteName}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-400 font-bold block uppercase text-[10px]">og:locale</span>
                <span className="font-semibold text-slate-800">{metadata.openGraph.locale}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'headers' && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">HTTP Status</span>
                <span className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {status.code} {status.statusText}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Web Server</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                  {status.server}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">HTTP Protocol</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                  {status.httpProtocol}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">SSL Certificate</span>
                <span className="text-sm font-semibold text-emerald-700 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {status.sslIssuer}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Compression</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                  {status.compression}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Content Type</span>
                <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                  {status.contentType}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
