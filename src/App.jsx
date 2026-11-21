import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import UrlInputBar from './components/UrlInputBar';
import ProgressBar from './components/ProgressBar';
import DemoDisclaimerBanner from './components/DemoDisclaimerBanner';
import OverviewCards from './components/OverviewCards';
import WebsiteMetaCard from './components/WebsiteMetaCard';
import SeoScoreCard from './components/SeoScoreCard';
import HeadingStructureCard from './components/HeadingStructureCard';
import LinksAnalysisCard from './components/LinksAnalysisCard';
import MediaAnalysisCard from './components/MediaAnalysisCard';
import PerformanceCard from './components/PerformanceCard';
import ExportModal from './components/ExportModal';
import Footer from './components/Footer';

import { 
  PROSTUTIBD_ANALYSIS_DATA, 
  generateAnalysisForUrl 
} from './data/sampleData';

import { 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  FileSearch, 
  Heading, 
  Link2, 
  Image as ImageIcon, 
  Zap, 
  Award, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [validationError, setValidationError] = useState('');
  
  // Start with clean initial state
  const [analysisData, setAnalysisData] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'seo' | 'headings' | 'links' | 'media' | 'performance'
  const [isExportOpen, setIsExportOpen] = useState(false);

  // References for scrolling to tabs
  const resultsRef = useRef(null);

  // Validate URL string
  const validateUrl = (input) => {
    if (!input || !input.trim()) {
      return 'Please enter a website URL to begin analysis.';
    }

    const trimmed = input.trim();
    
    // Check if contains basic domain characters
    const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i;
    if (!domainRegex.test(trimmed)) {
      return 'Please enter a valid web URL or domain name (e.g. https://prostutibd.com).';
    }

    return '';
  };

  const handleStartAnalysis = (overrideUrl) => {
    const targetUrl = overrideUrl || url;
    const error = validateUrl(targetUrl);
    if (error) {
      setValidationError(error);
      return;
    }

    setValidationError('');
    setIsLoading(true);
    setProgress(0);
    setCurrentStageIndex(0);

    // Multi-stage realistic progress simulation
    const stageCheckpoints = [
      { pct: 20, stage: 0, delay: 400 },
      { pct: 45, stage: 1, delay: 850 },
      { pct: 68, stage: 2, delay: 1350 },
      { pct: 86, stage: 3, delay: 1900 },
      { pct: 100, stage: 4, delay: 2400 },
    ];

    stageCheckpoints.forEach(({ pct, stage, delay }) => {
      setTimeout(() => {
        setProgress(pct);
        setCurrentStageIndex(stage);
      }, delay);
    });

    // Finalize analysis
    setTimeout(() => {
      const generated = generateAnalysisForUrl(targetUrl);
      setAnalysisData(generated);
      setIsLoading(false);
      setProgress(100);

      // Smooth scroll to results
      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 2650);
  };

  const handleReset = () => {
    setUrl('');
    setValidationError('');
    setAnalysisData(null);
    setActiveTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearToEmpty = () => {
    setUrl('');
    setValidationError('');
    setAnalysisData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 font-sans text-slate-800">
      {/* Top Header */}
      <Header 
        onReset={handleReset} 
        onExport={() => setIsExportOpen(true)}
        currentUrl={url}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>URL Analyzer • Live SEO Intelligence Platform</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-sky-600">Website URL Analyzer</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Deep on-page SEO diagnostics, semantic heading tree validation, hyperlink graph mapping, image optimization, and Core Web Vitals telemetry.
          </p>
        </div>

        {/* URL Input Form Component */}
        <div className="max-w-4xl mx-auto">
          <UrlInputBar
            url={url}
            setUrl={setUrl}
            onAnalyze={() => handleStartAnalysis(url)}
            isLoading={isLoading}
            validationError={validationError}
            setValidationError={setValidationError}
          />
        </div>

        {/* Active Analysis Progress Bar */}
        {isLoading && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <ProgressBar 
              progress={progress} 
              currentStageIndex={currentStageIndex} 
            />
          </div>
        )}

        {/* Results Section */}
        {!isLoading && analysisData && (
          <div ref={resultsRef} className="space-y-7 animate-fade-in">
            {/* Demo & Benchmark Disclaimer */}
            <DemoDisclaimerBanner domain={analysisData.domain} />

            {/* Navigation Tabs for Easy Deep-Dive */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none w-full sm:w-auto">
                {[
                  { id: 'all', label: 'Complete Overview', icon: Layers },
                  { id: 'seo', label: 'SEO Audit', icon: Award },
                  { id: 'headings', label: 'Headings (H1-H3)', icon: Heading },
                  { id: 'links', label: 'Hyperlinks', icon: Link2 },
                  { id: 'media', label: 'Images & Media', icon: ImageIcon },
                  { id: 'performance', label: 'Performance', icon: Zap },
                ].map((tabItem) => {
                  const Icon = tabItem.icon;
                  const isActive = activeTab === tabItem.id;
                  return (
                    <button
                      key={tabItem.id}
                      onClick={() => setActiveTab(tabItem.id)}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-brand-600 text-white shadow-sm shadow-brand-600/30'
                          : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tabItem.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="text-xs font-semibold text-slate-500 hidden sm:block">
                Last Analyzed: <span className="font-mono text-slate-700">{new Date(analysisData.analyzedAt).toLocaleTimeString()}</span>
              </div>
            </div>

            {/* Executive Overview Stat Cards */}
            <OverviewCards 
              data={analysisData} 
              onNavigateTab={(tab) => setActiveTab(tab)} 
            />

            {/* Tab Specific Content or Full Dashboard */}
            {(activeTab === 'all' || activeTab === 'seo') && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <WebsiteMetaCard data={analysisData} />
                <SeoScoreCard seoScore={analysisData.seoScore} />
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'headings') && (
              <HeadingStructureCard headings={analysisData.headings} />
            )}

            {(activeTab === 'all' || activeTab === 'links') && (
              <LinksAnalysisCard links={analysisData.links} />
            )}

            {(activeTab === 'all' || activeTab === 'media') && (
              <MediaAnalysisCard images={analysisData.images} />
            )}

            {(activeTab === 'all' || activeTab === 'performance') && (
              <PerformanceCard 
                performance={analysisData.performance} 
                status={analysisData.status} 
              />
            )}
          </div>
        )}

        {/* Empty State when no analysis has been run */}
        {!isLoading && !analysisData && (
          <div className="max-w-xl mx-auto my-10 text-center p-8 bg-white rounded-3xl border border-slate-200/90 shadow-xs space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto border border-brand-200">
              <Globe2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Ready to Analyze Website
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
              Enter any website URL in the search field above and click <strong>Analyze Website</strong> to generate a complete SEO audit, heading hierarchy, link structure, and performance metrics.
            </p>
            <div className="pt-2 flex flex-wrap justify-center items-center gap-2">
              <button
                onClick={() => {
                  setUrl('https://prostutibd.com/');
                  handleStartAnalysis('https://prostutibd.com/');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 border border-slate-200 hover:border-brand-300 text-xs font-semibold transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Test with prostutibd.com</span>
              </button>
              <button
                onClick={() => {
                  setUrl('https://github.com');
                  handleStartAnalysis('https://github.com');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 border border-slate-200 hover:border-brand-300 text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Test with github.com</span>
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Export Report Modal */}
      {analysisData && (
        <ExportModal 
          isOpen={isExportOpen} 
          onClose={() => setIsExportOpen(false)} 
          data={analysisData} 
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
