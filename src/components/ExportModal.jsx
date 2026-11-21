import React, { useState } from 'react';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileJson, 
  FileText, 
  X,
  Sparkles
} from 'lucide-react';

export default function ExportModal({ isOpen, onClose, data }) {
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handleDownloadJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `${data.domain}-seo-analysis-report.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const summary = `# Website URL Analysis Report - Biswas IT Automation
- **Target URL**: ${data.url}
- **Website Title**: ${data.metadata.title}
- **SEO Score**: ${data.seoScore.overall}/100 (Grade ${data.seoScore.grade})
- **Performance Rating**: ${data.performance.score}/100
- **Headings**: H1 (${data.headings.h1Count}), H2 (${data.headings.h2Count}), H3 (${data.headings.h3Count})
- **Images**: ${data.images.total} Total (${data.images.withAlt} with Alt, ${data.images.withoutAlt} missing)
- **Links**: ${data.links.total} Total (${data.links.internalCount} Internal, ${data.links.externalCount} External)
- **Status**: ${data.status.code} ${data.status.statusText} (${data.status.responseTime})
- **Analyzed At**: ${new Date(data.analyzedAt).toLocaleString()}
- **Notice**: ${data.demoNotice}
`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-brand-50 text-brand-600">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Export Analysis Report</h3>
              <p className="text-xs text-slate-500">{data.domain}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Export Options */}
        <div className="py-5 space-y-3">
          <button
            onClick={handleDownloadJson}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700 group-hover:scale-105 transition-transform">
                <FileJson className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Download Raw JSON Report</h4>
                <p className="text-xs text-slate-500">Complete structured schema metrics ready for API consumption</p>
              </div>
            </div>
            <Download className="w-4 h-4 text-slate-400 group-hover:text-brand-600" />
          </button>

          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 group-hover:scale-105 transition-transform">
                <Printer className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Print or Save as PDF</h4>
                <p className="text-xs text-slate-500">Generate a formatted printer-friendly presentation report</p>
              </div>
            </div>
            <Printer className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/40 transition-all text-left group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-100 text-purple-700 group-hover:scale-105 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Copy Markdown Summary</h4>
                <p className="text-xs text-slate-500">Instant executive summary for Slack, Jira, or documentation</p>
              </div>
            </div>
            {copiedSummary ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4 text-slate-400 group-hover:text-purple-600" />
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
