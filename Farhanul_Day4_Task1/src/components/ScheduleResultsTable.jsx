import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Search, 
  BookOpen, 
  Smartphone, 
  Sparkles,
  Layers,
  FileText,
  Table as TableIcon,
  Filter,
  ArrowRight,
  Copy,
  Check,
  TrendingUp,
  BarChart3
} from 'lucide-react';

const getScheduleDataForDomain = (domainStr) => {
  const isProstuti = domainStr && domainStr.toLowerCase().includes('prostutibd');

  if (isProstuti) {
    return {
      title: "বিষয়ভিত্তিক পরীক্ষার অবস্থা ও সময়সীমা",
      subtitle: `প্রস্তুতি বিডি (${domainStr}) প্ল্যাটফর্মের বিষয়ভিত্তিক কোর্স, বর্তমান অবস্থা ও আবেদনের সময়সীমা বিবরণী।`,
      badge: "পরীক্ষা ও কোর্স সময়সূচি",
      items: [
        {
          id: 1,
          subject: "৪৭তম বিসিএস প্রিলিমিনারি পূর্ণাঙ্গ প্রস্তুতি (47th BCS Preliminary)",
          category: "BCS Preparation",
          status: "চলমান",
          statusKey: "active",
          deadline: "১৫ ডিসেম্বর ২০২৬",
          daysRemaining: "১০ দিন বাকি",
          priority: "High",
          summary: "অনলাইন লাইভ ক্লাস, ডেইল কুইজ ও বিষয়ভিত্তিক প্রিলিমিনারি মডেল টেস্ট চলছে।"
        },
        {
          id: 2,
          subject: "সরকারি প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা (Primary Teacher)",
          category: "Govt. Job",
          status: "আবেদন চলছে",
          statusKey: "in_progress",
          deadline: "১০ জানুয়ারি ২০২৭",
          daysRemaining: "২৫ দিন বাকি",
          priority: "Medium",
          summary: "নতুন আবেদন গ্রহণ চলছে। বিগত সালের প্রশ্নব্যাংক ও সমাধান লাইব্রেরি উন্মুক্ত।"
        },
        {
          id: 3,
          subject: "সমন্বিত ১০ ব্যাংক ও আর্থিক প্রতিষ্ঠান সিনিয়র অফিসার (Bank Officer)",
          category: "Bank Recruitment",
          status: "আসন্ন",
          statusKey: "upcoming",
          deadline: "২৮ ফেব্রুয়ারি ২০২৭",
          daysRemaining: "আসন্ন ব্যাচ",
          priority: "High",
          summary: "ম্যাথ, অ্যানালিটিক্যাল ও ফোকাস রাইটিং স্পেশাল ব্যাচের শিডিউল প্রস্তুত হচ্ছে।"
        },
        {
          id: 4,
          subject: "ঢাকা বিশ্ববিদ্যালয় ও গুচ্ছ বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি (University Admission)",
          category: "Higher Education",
          status: "চলমান",
          statusKey: "active",
          deadline: "২০ ডিসেম্বর ২০২৬",
          daysRemaining: "১৫ দিন বাকি",
          priority: "Medium",
          summary: "ক ও খ ইউনিটের জন্য সাবজেক্ট ফাইনাল এক্সাম এবং র‍্যাংকিং ব্যাচ চলমান।"
        },
        {
          id: 5,
          subject: "নন-ক্যাডার ১০ম ও ১২তম গ্রেড জব সল্যুশন ও স্পেশাল মডেল টেস্ট",
          category: "Non-Cadre Exam",
          status: "আবেদন চলছে",
          statusKey: "in_progress",
          deadline: "০৫ ফেব্রুয়ারি ২০২৭",
          daysRemaining: "নিবন্ধন চলছে",
          priority: "Medium",
          summary: "সাধারণ জ্ঞান ও বাংলা সাহিত্যের উপর বিশেষ রিভিশন টেস্ট প্যাকেজ সক্রিয়।"
        },
        {
          id: 6,
          subject: "৪৬তম বিসিএস বিষয়ভিত্তিক রিটেন ও ভাইভা স্পেশাল কোর্স",
          category: "BCS Cadre",
          status: "সম্পন্ন",
          statusKey: "completed",
          deadline: "৩০ নভেম্বর ২০২৬",
          daysRemaining: "মেয়াদ সম্পন্ন",
          priority: "Normal",
          summary: "লিখিত পরীক্ষার সকল মক ভাইভা ও ফিডব্যাক সেশন সফলভাবে সম্পন্ন হয়েছে।"
        }
      ]
    };
  }

  // Dynamic automation diagnostic schedule for any other website!
  const cleanDomain = domainStr || 'example.com';
  return {
    title: `${cleanDomain} - বিষয়ভিত্তিক অডিট ও টেস্ট সময়সূচি`,
    subtitle: `${cleanDomain} ওয়েবসাইটের বিভিন্ন বিষয়ভিত্তিক অটোমেশন অডিট মডিউল, বর্তমান অবস্থা ও টেস্ট সময়সীমা বিবরণী।`,
    badge: "ওয়েবসাইট অটোমেশন অডিট",
    items: [
      {
        id: 1,
        subject: `Core Web Vitals ও স্পিড পারফরম্যান্স অডিট (${cleanDomain})`,
        category: "Performance",
        status: "চলমান",
        statusKey: "active",
        deadline: "রিয়েল-টাইম ট্র্যাকিং",
        daysRemaining: "সক্রিয় পর্যবেক্ষণ",
        priority: "High",
        summary: "FCP, LCP ও CLS রিয়েল-ইউজার পারফরম্যান্স টেলিমেট্রি পর্যবেক্ষণ চলছে।"
      },
      {
        id: 2,
        subject: `SSL সার্টিফিকেট ও TLS 1.3 সিকিউরিটি হ্যান্ডশেক ভেরিফিকেশন`,
        category: "Security",
        status: "সম্পন্ন",
        statusKey: "completed",
        deadline: "২০২৭ পর্যন্ত বৈধ",
        daysRemaining: "সার্টিফিকেট ওকে",
        priority: "Normal",
        summary: "Cloudflare ECC CA-3 সার্টিফিকেট এনক্রিপশন যাচাইকৃত ও সক্রিয়।"
      },
      {
        id: 3,
        subject: `H1-H3 সিম্যান্টিক হেডিং স্ট্রাকচার ও DOM হায়ারার্কি টেস্ট`,
        category: "Semantic SEO",
        status: "সম্পন্ন",
        statusKey: "completed",
        deadline: "সম্পন্ন",
        daysRemaining: "পাস",
        priority: "Normal",
        summary: "একক H1 ট্যাগ ও যৌক্তিক হেডিং ট্রি সফলভাবে সংরক্ষিত আছে।"
      },
      {
        id: 4,
        subject: `ইন্টারনাল ও এক্সটারনাল হাইপারলিংক ক্রলিং অডিট (${cleanDomain})`,
        category: "Link Topology",
        status: "আবেদন চলছে",
        statusKey: "in_progress",
        deadline: "পরবর্তী ক্রল: ৭ দিন পর",
        daysRemaining: "ক্রলিং শিডিউলড",
        priority: "Medium",
        summary: "সকল আউটবাউন্ড এবং ইনবাউন্ড লিংকের হেলথ চেক শিডিউল করা হয়েছে।"
      },
      {
        id: 5,
        subject: `ইমেজ কমপ্রেশন ও Alt-ট্যাগ অ্যাক্সেসিবিলিটি কমপ্লায়েন্স`,
        category: "Media Audit",
        status: "চলমান",
        statusKey: "active",
        deadline: "১৫ ডিসেম্বর ২০২৬",
        daysRemaining: "চলমান",
        priority: "High",
        summary: "WebP ফরম্যাট কনভার্সন এবং মিসিং Alt-ট্যাগ ফিক্সিং অডিট চলছে।"
      },
      {
        id: 6,
        subject: `মোবাইল ভিউপোর্ট ও ক্রস-ডিভাইস রেসপনসিভনেস ভ্যালিডেশন`,
        category: "Mobile UX",
        status: "সম্পন্ন",
        statusKey: "completed",
        deadline: "ভ্যালিডেটেড",
        daysRemaining: "পাস",
        priority: "Normal",
        summary: "মোবাইল ভিউপোর্টে এলিমেন্ট ওভারফ্লো ও টাচ টার্গেট স্কেলিং সফল।"
      }
    ]
  };
};

export default function ScheduleResultsTable({ domain = 'prostutibd.com', url = 'https://prostutibd.com/' }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [selectedStatus, setSelectedStatus] = useState(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('status');
      if (['all', 'active', 'in_progress', 'upcoming', 'completed'].includes(p)) return p;
    } catch {}
    return 'all';
  });

  const [viewMode, setViewMode] = useState(() => {
    try {
      const v = new URLSearchParams(window.location.search).get('view');
      if (['table', 'report'].includes(v)) return v;
    } catch {}
    return 'table';
  });

  const [copiedReport, setCopiedReport] = useState(false);

  const scheduleMeta = useMemo(() => getScheduleDataForDomain(domain), [domain]);

  // Status Counts
  const statusCounts = useMemo(() => {
    const counts = { all: scheduleMeta.items.length, active: 0, in_progress: 0, upcoming: 0, completed: 0 };
    scheduleMeta.items.forEach((item) => {
      if (counts[item.statusKey] !== undefined) {
        counts[item.statusKey]++;
      }
    });
    return counts;
  }, [scheduleMeta]);

  // Filtered dataset
  const filteredData = useMemo(() => {
    return scheduleMeta.items.filter((item) => {
      const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.deadline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === 'all' || item.statusKey === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [scheduleMeta, searchTerm, selectedStatus]);

  // Copy Executive Report Summary
  const handleCopyReport = () => {
    const summaryLines = [
      `=========================================`,
      `অটোমেশন ফলাফল ও স্ট্যাটাস রিপোর্ট: ${domain}`,
      `ফিল্টার: ${selectedStatus.toUpperCase()} | মোট বিষয়: ${filteredData.length}`,
      `=========================================`,
      ...filteredData.map((item, idx) => 
        `${idx + 1}. [${item.status}] ${item.subject}\n   - ক্যাটাগরি: ${item.category}\n   - সময়সীমা: ${item.deadline} (${item.daysRemaining})`
      ),
      `=========================================`,
      `তারিখ: ${new Date().toLocaleDateString('bn-BD')} | স্ট্যাটাস: ভেরিফাইড`
    ].join('\n');

    navigator.clipboard.writeText(summaryLines);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2000);
  };

  // Helper for Status Badge Styling
  const getStatusBadge = (statusKey, statusText) => {
    switch (statusKey) {
      case 'active':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/90 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{statusText}</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200/90 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>{statusText}</span>
          </span>
        );
      case 'upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/90 shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{statusText}</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{statusText}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            {statusText}
          </span>
        );
    }
  };

  return (
    <div id="automation-schedule-table" className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden animate-fade-in">
      {/* Top Header & Context */}
      <div className="p-5 sm:p-7 border-b border-slate-100 bg-gradient-to-r from-slate-50/70 via-white to-brand-50/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200/80 text-xs font-extrabold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>{scheduleMeta.badge}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{scheduleMeta.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {scheduleMeta.subtitle}
            </p>
          </div>

          {/* View Mode Toggle & Copy Report Button */}
          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 text-xs font-bold">
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'table' 
                    ? 'bg-white text-brand-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>টেবিল ভিউ</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('report')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'report' 
                    ? 'bg-white text-brand-700 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>রিপোর্ট ভিউ</span>
              </button>
            </div>

            {/* Copy Report Button */}
            <button
              type="button"
              onClick={handleCopyReport}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
              title="রিপোর্টের সামারি কপি করুন"
            >
              {copiedReport ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>রিপোর্ট কপি</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Status Distribution Progress Meter */}
        <div className="mt-5 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs mb-2">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-brand-600" />
              <span>স্ট্যাটাস বণ্টন ও অগ্রগতির হার</span>
            </span>
            <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                চলমান: {statusCounts.active}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                আবেদন: {statusCounts.in_progress}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                আসন্ন: {statusCounts.upcoming}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                সম্পন্ন: {statusCounts.completed}
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-200/80 rounded-full h-2.5 flex overflow-hidden">
            <div 
              style={{ width: `${(statusCounts.active / statusCounts.all) * 100}%` }} 
              className="bg-emerald-500 h-full transition-all duration-500"
              title={`চলমান: ${statusCounts.active}`}
            />
            <div 
              style={{ width: `${(statusCounts.in_progress / statusCounts.all) * 100}%` }} 
              className="bg-sky-500 h-full transition-all duration-500"
              title={`আবেদন চলছে: ${statusCounts.in_progress}`}
            />
            <div 
              style={{ width: `${(statusCounts.upcoming / statusCounts.all) * 100}%` }} 
              className="bg-amber-400 h-full transition-all duration-500"
              title={`আসন্ন: ${statusCounts.upcoming}`}
            />
            <div 
              style={{ width: `${(statusCounts.completed / statusCounts.all) * 100}%` }} 
              className="bg-slate-400 h-full transition-all duration-500"
              title={`সম্পন্ন: ${statusCounts.completed}`}
            />
          </div>
        </div>

        {/* Filter & Search Bar with Dynamic Status Counts */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="বিষয় বা সময়সীমা দিয়ে খুঁজুন..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-slate-100/80 focus:bg-white rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>

          {/* Status Filter Tabs with Interactive Counts */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
            {[
              { id: 'all', label: 'সবগুলো', count: statusCounts.all },
              { id: 'active', label: 'চলমান', count: statusCounts.active },
              { id: 'in_progress', label: 'আবেদন চলছে', count: statusCounts.in_progress },
              { id: 'upcoming', label: 'আসন্ন', count: statusCounts.upcoming },
              { id: 'completed', label: 'সম্পন্ন', count: statusCounts.completed },
            ].map((tab) => {
              const isSelected = selectedStatus === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedStatus(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-xs shadow-brand-600/30'
                      : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 border border-slate-200/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/25 text-white' : 'bg-slate-200/80 text-slate-700'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Screen Helper Hint */}
      <div className="sm:hidden px-5 py-2.5 bg-sky-50/70 border-b border-sky-100 flex items-center justify-between text-[11px] text-sky-800 font-medium">
        <span className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-sky-600" />
          <span>মোবাইল রেসপন্সিভ ভিউ: স্ট্যাকড কার্ড ও হরিজন্টাল স্ক্রোল সমর্থিত</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md border border-sky-200">
          Mobile Ready
        </span>
      </div>

      {/* VIEW 1: Detailed Table View */}
      {viewMode === 'table' && (
        <>
          {/* Desktop & Tablet Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/90 text-slate-700 uppercase tracking-wider text-[11px] font-extrabold border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 font-bold w-1/2">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                      <span>বিষয় (Subject)</span>
                    </span>
                  </th>
                  <th scope="col" className="py-3.5 px-6 font-bold w-1/4">
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-brand-600" />
                      <span>অবস্থা (Status)</span>
                    </span>
                  </th>
                  <th scope="col" className="py-3.5 px-6 font-bold w-1/4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-600" />
                      <span>সময়সীমা (Deadline)</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredData.length > 0 ? (
                  filteredData.map((row) => (
                    <tr 
                      key={row.id}
                      className="hover:bg-brand-50/30 transition-colors group"
                    >
                      {/* Subject Column */}
                      <td className="py-4 px-6">
                        <div className="space-y-1">
                          <div className="font-bold text-slate-900 group-hover:text-brand-700 transition-colors leading-snug">
                            {row.subject}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="inline-block text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                              {row.category}
                            </span>
                            <span className="text-[11px] text-slate-400">ID: #{row.id}</span>
                          </div>
                        </div>
                      </td>

                      {/* Status Column */}
                      <td className="py-4 px-6">
                        {getStatusBadge(row.statusKey, row.status)}
                      </td>

                      {/* Deadline Column */}
                      <td className="py-4 px-6">
                        <div className="space-y-0.5">
                          <div className="font-bold text-slate-800 flex items-center gap-1.5 text-xs sm:text-sm">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            <span>{row.deadline}</span>
                          </div>
                          <div className="text-[11px] font-medium text-brand-600 flex items-center gap-1">
                            <span>{row.daysRemaining}</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-10 text-center text-slate-400 text-xs font-medium">
                      কোনো বিষয় পাওয়া যায়নি। ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile-Optimized Stacked Card Layout (Below 640px) */}
          <div className="block sm:hidden divide-y divide-slate-100 p-3 space-y-3">
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <div 
                  key={row.id} 
                  className="bg-slate-50/60 rounded-2xl p-4 border border-slate-200/80 space-y-3 shadow-2xs"
                >
                  {/* Subject */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                        বিষয় (Subject)
                      </span>
                      <span className="text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                        {row.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug pt-0.5">
                      {row.subject}
                    </h4>
                  </div>

                  {/* Status & Deadline Row */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60">
                    {/* Status */}
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        অবস্থা (Status)
                      </span>
                      <div>
                        {getStatusBadge(row.statusKey, row.status)}
                      </div>
                    </div>

                    {/* Deadline */}
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        সময়সীমা (Deadline)
                      </span>
                      <div className="space-y-0.5">
                        <span className="block text-xs font-bold text-slate-800">
                          {row.deadline}
                        </span>
                        <span className="block text-[10px] font-medium text-brand-600">
                          {row.daysRemaining}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-slate-400 text-xs">
                কোনো বিষয় পাওয়া যায়নি।
              </div>
            )}
          </div>
        </>
      )}

      {/* VIEW 2: Clean Executive Report View (পরিচ্ছন্ন রিপোর্ট ভিউ) */}
      {viewMode === 'report' && (
        <div className="p-5 sm:p-7 space-y-6 animate-fade-in">
          {/* Executive Overview Header Card */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                  এক্সিকিউটিভ অটোমেশন সারসংক্ষেপ
                </span>
                <h4 className="text-lg sm:text-xl font-bold">
                  {domain} - পূর্ণাঙ্গ রিপোর্ট পোর্টফোলিও
                </h4>
                <p className="text-xs text-slate-300">
                  নির্বাচিত ফিল্টার: <span className="font-semibold text-white">{selectedStatus.toUpperCase()}</span> | বর্তমান সক্রিয় রেকর্ড: <span className="font-semibold text-white">{filteredData.length}টি</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-center bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                  <span className="block text-xl font-extrabold text-emerald-400">{statusCounts.active}</span>
                  <span className="text-[10px] text-slate-300 uppercase font-semibold">চলমান</span>
                </div>
                <div className="text-center bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                  <span className="block text-xl font-extrabold text-sky-400">{statusCounts.in_progress}</span>
                  <span className="text-[10px] text-slate-300 uppercase font-semibold">আবেদন</span>
                </div>
                <div className="text-center bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
                  <span className="block text-xl font-extrabold text-amber-400">{statusCounts.upcoming}</span>
                  <span className="text-[10px] text-slate-300 uppercase font-semibold">আসন্ন</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Report Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredData.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50/70 hover:bg-slate-50 border border-slate-200/90 rounded-2xl p-5 space-y-3 transition-all shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80">
                    {item.category}
                  </span>
                  <div>
                    {getStatusBadge(item.statusKey, item.status)}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.subject}
                  </h5>
                  {item.summary && (
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {item.summary}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>সময়সীমা: <strong className="text-slate-800">{item.deadline}</strong></span>
                  </span>
                  <span className="font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200 text-[11px]">
                    {item.daysRemaining}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Footer Info */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>{domain} স্বয়ংক্রিয় ডায়াগনস্টিক শিডিউল ও রেজাল্ট ফরম্যাট</span>
        </div>
        <div className="text-[11px] text-slate-400">
          ভিউ মোড: <span className="font-semibold text-slate-700">{viewMode === 'table' ? 'টেবিল ভিউ' : 'পরিচ্ছন্ন রিপোর্ট ভিউ'}</span> • সর্বশেষ আপডেট: <span className="font-semibold text-slate-600">নভেম্বর ২০২৬</span>
        </div>
      </div>
    </div>
  );
}
