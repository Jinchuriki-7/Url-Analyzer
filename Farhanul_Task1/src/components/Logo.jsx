import React from 'react';

export default function Logo({ size = 'md', withText = false, className = '' }) {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Sleek Gradient App Icon */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size] || sizeClasses.md} bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-500 text-white shadow-md shadow-brand-600/25 ring-1 ring-white/30 transition-transform duration-200 group-hover:scale-105`}>
        {/* Bespoke URL Analyzer Vector Icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={iconSizes[size] || iconSizes.md}
        >
          {/* Outer Web Ring */}
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.4" />
          <ellipse cx="12" cy="12" rx="4.2" ry="9" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.5" />
          <line x1="3.5" y1="12" x2="20.5" y2="12" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.5" />

          {/* Intersecting Link & Pulse Scan Node */}
          <path 
            d="M9 15L15 9" 
            stroke="#ffffff" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
          />
          <circle cx="9" cy="15" r="2.2" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="15" cy="9" r="2.2" fill="#10b981" stroke="#ffffff" strokeWidth="1.2" />

          {/* Top subtle radar flare */}
          <circle cx="18" cy="6" r="1.5" fill="#ffffff" />
        </svg>

        {/* Live glowing pulse badge */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
        </span>
      </div>

      {withText && (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900">
          <span className="text-lg">URL</span>
          <span className="text-lg text-brand-600 font-extrabold">Analyzer</span>
        </div>
      )}
    </div>
  );
}
