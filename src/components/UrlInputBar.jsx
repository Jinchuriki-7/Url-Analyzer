import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  X, 
  AlertTriangle, 
  ExternalLink, 
  Check, 
  ArrowRight,
  Globe
} from 'lucide-react';

const PRESETS = [
  { label: 'prostutibd.com', url: 'https://prostutibd.com/', isError: false },
  { label: 'github.com', url: 'https://github.com', isError: false },
  { label: 'invalid-domain-test (ভুল URL পরীক্ষা)', url: 'https://invalid-domain-test', isError: true },
];

export default function UrlInputBar({ 
  url, 
  setUrl, 
  onAnalyze, 
  isLoading, 
  validationError, 
  setValidationError,
  onTriggerState 
}) {
  const [copiedPreset, setCopiedPreset] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    onAnalyze();
  };

  const handleClear = () => {
    if (isLoading) return;
    setUrl('');
    setValidationError('');
  };

  const handleSelectPreset = (presetUrl) => {
    if (isLoading) return;
    setUrl(presetUrl);
    setValidationError('');
    setCopiedPreset(true);
    setTimeout(() => setCopiedPreset(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/90 p-5 sm:p-7 transition-all">
      <div className="mb-4">
        <label htmlFor="url-input" className="block text-sm font-bold text-slate-900 tracking-tight">
          Enter Website URL to Analyze
        </label>
        <p className="text-xs text-slate-500 mt-0.5">
          Provide a complete web address (HTTP/HTTPS) or domain name.
        </p>
      </div>

      <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3">
        <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
          {/* Input field wrapper */}
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-600 transition-colors">
              <Globe className="w-5 h-5" />
            </div>

            <input
              id="url-input"
              name="url_analyzer_query"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              data-lpignore="true"
              data-form-type="other"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (validationError) setValidationError('');
              }}
              disabled={isLoading}
              placeholder="e.g. https://example.com"
              className={`w-full pl-11 pr-10 py-3.5 text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 bg-slate-50/70 hover:bg-slate-50 focus:bg-white rounded-xl border transition-all duration-200 outline-none ${
                validationError 
                  ? 'border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15' 
                  : 'border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15'
              } ${isLoading ? 'opacity-70 cursor-not-allowed bg-slate-100' : ''}`}
            />

            {/* Clear Button */}
            {url && !isLoading && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                title="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Analyze Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`sm:w-auto w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white rounded-xl shadow-md transition-all duration-200 cursor-pointer ${
              isLoading
                ? 'bg-brand-400 cursor-not-allowed opacity-80'
                : 'bg-gradient-to-r from-brand-700 via-brand-600 to-sky-600 hover:from-brand-800 hover:via-brand-700 hover:to-sky-700 active:scale-[0.99] shadow-brand-600/30 hover:shadow-lg hover:shadow-brand-600/25'
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing Website...</span>
              </>
            ) : (
              <>
                <span>Analyze Website</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </>
            )}
          </button>
        </div>

        {/* Validation Error Message */}
        {validationError && (
          <div className="flex items-center gap-2 p-3 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl animate-fade-in">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}
      </form>

      {/* Quick Example Chips */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500">Examples:</span>
        {PRESETS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            disabled={isLoading}
            onClick={() => handleSelectPreset(item.url)}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              item.isError
                ? url === item.url
                  ? 'bg-rose-100 text-rose-800 border-rose-300 ring-1 ring-rose-300'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                : url === item.url
                  ? 'bg-brand-50 text-brand-700 border-brand-300 ring-1 ring-brand-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-800'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span>{item.label}</span>
            {url === item.url && <Check className="w-3 h-3 text-brand-600" />}
          </button>
        ))}
      </div>
    </div>
  );
}
