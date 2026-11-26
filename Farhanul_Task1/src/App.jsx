import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import UrlInputBar from './components/UrlInputBar';
import ProgressBar from './components/ProgressBar';
import ErrorStateCard from './components/ErrorStateCard';
import ScheduleResultsTable from './components/ScheduleResultsTable';
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
  ShieldCheck,
  Calendar
} from 'lucide-react';

export default function App() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [validationError, setValidationError] = useState('');
  const [analysisError, setAnalysisError] = useState(null);
  
  // Start with clean initial state
  const [analysisData, setAnalysisData] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'seo' | 'headings' | 'links' | 'media' | 'performance'
  const [isExportOpen, setIsExportOpen] = useState(false);

  // References for scrolling to tabs
  const resultsRef = useRef(null);

  // Validate URL string
  const validateUrl = (input) => {
    if (!input || !input.trim()) {
      return 'Invalid URL. Please enter a valid website URL.';
    }

    const trimmed = input.trim();
    
    // Check for explicit test error triggers
    if (trimmed.toLowerCase().includes('invalid') || trimmed.toLowerCase().includes('broken') || trimmed.toLowerCase().includes('error-test')) {
      return "Invalid URL. Please enter a valid website URL. Host could not be reached (DNS Resolution Failed).";
    }

    // Check if contains basic domain characters
    const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/i;
    if (!domainRegex.test(trimmed)) {
      return "Invalid URL. Please enter a valid website URL (Missing valid domain or extension like .com, .org, .bd).";
    }

    return '';
  };

  const handleStartAnalysis = (overrideUrl) => {
    const targetUrl = overrideUrl !== undefined ? overrideUrl : url;
    const error = validateUrl(targetUrl);
    if (error) {
      setValidationError(error);
      setAnalysisError({
        url: targetUrl,
        message: error
      });
      setAnalysisData(null);
      setIsLoading(false);
      return;
    }

    setValidationError('');
    setAnalysisError(null);
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
    setAnalysisError(null);
    setAnalysisData(null);
    setIsLoading(false);
    setActiveTab('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerState = (stateName) => {
    try {
      window.history.pushState({}, '', `?state=${stateName}`);
    } catch {}

    if (stateName === 'loading') {
      setAnalysisError(null);
      setValidationError('');
      setAnalysisData(null);
      setIsLoading(true);
      setProgress(58);
      setCurrentStageIndex(2);
    } else if (stateName === 'success' || stateName === 'schedule') {
      setUrl('https://prostutibd.com/');
      setValidationError('');
      setAnalysisError(null);
      setIsLoading(false);
      setProgress(100);
      setAnalysisData(PROSTUTIBD_ANALYSIS_DATA);
      if (stateName === 'schedule') {
        setActiveTab('schedule');
      }
    } else if (stateName === 'error') {
      const errUrl = 'https://invalid-domain-test';
      setUrl(errUrl);
      const errMsg = "Invalid URL. Please enter a valid website URL.";
      setValidationError(errMsg);
      setAnalysisError({
        url: errUrl,
        message: "Invalid URL. Please enter a valid website URL. Host could not be reached (DNS Resolution Failed)."
      });
      setAnalysisData(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get('state');
    if (stateParam) {
      handleTriggerState(stateParam);
    }
  }, []);

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
        <div className="text-center max-w-3xl mx-auto space-y-3 pt-4">
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
            onTriggerState={handleTriggerState}
          />
        </div>

        {/* State 1: Active Analysis Progress Bar (Loading State / লোডিং অবস্থা) */}
        {isLoading && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <ProgressBar 
              progress={progress} 
              currentStageIndex={currentStageIndex} 
            />
          </div>
        )}

        {/* State 2: Error State (Invalid URL / ভুল URL-এর অবস্থা) */}
        {!isLoading && analysisError && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <ErrorStateCard
              failedUrl={analysisError.url}
              errorMessage={analysisError.message}
              onRetryWithUrl={(validUrl) => {
                setUrl(validUrl);
                handleStartAnalysis(validUrl);
              }}
              onClear={handleReset}
            />
          </div>
        )}

        {/* State 3: Analysis Results Section (Success State / সফল অবস্থা) */}
        {!isLoading && !analysisError && analysisData && (
          <div ref={resultsRef} className="space-y-7 animate-fade-in">
            {/* Analysis Successful Message Banner */}
            <div className="bg-emerald-50 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm shadow-emerald-500/5 animate-fade-in">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-600/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-emerald-950 flex items-center gap-2">
                    <span>Analysis Successful!</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                      HTTP 200 OK
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-0.5">
                    Website Analysis Result for <span className="font-semibold underline">{analysisData.url}</span> is ready. SEO Score and diagnostics are displayed below.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 text-xs font-bold text-emerald-800 shadow-2xs self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Verified Diagnostic Ready</span>
              </div>
            </div>

            {/* Demo & Benchmark Disclaimer */}
            <DemoDisclaimerBanner domain={analysisData.domain} />

            {/* Navigation Tabs for Easy Deep-Dive */}
            <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none w-full sm:w-auto">
                {[
                  { id: 'all', label: 'Complete Overview', icon: Layers },
                  { id: 'schedule', label: 'বিষয় ও সময়সূচি (Table)', icon: Calendar },
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

            {/* Subject, Status & Deadline Table (বিষয়, অবস্থা ও সময়সীমা টেবিল) */}
            {(activeTab === 'all' || activeTab === 'schedule') && (
              <ScheduleResultsTable 
                domain={analysisData.domain} 
                url={analysisData.url} 
              />
            )}

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

        {/* Empty / Ready State when no analysis or error is active */}
        {!isLoading && !analysisData && !analysisError && (
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
