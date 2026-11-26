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
  Globe
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
        },
        {
          id: 2,
          subject: "সরকারি প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা (Primary Teacher)",
          category: "Govt. Job",
          status: "আবেদন চলছে",
          statusKey: "in_progress",
          deadline: "১০ জানুয়ারি ২০২৭",
          daysRemaining: "২৫ দিন বাকি",
        },
        {
          id: 3,
          subject: "সমন্বিত ১০ ব্যাংক ও আর্থিক প্রতিষ্ঠান সিনিয়র অফিসার (Bank Officer)",
          category: "Bank Recruitment",
          status: "আসন্ন",
          statusKey: "upcoming",
          deadline: "২৮ ফেব্রুয়ারি ২০২৭",
          daysRemaining: "আসন্ন ব্যাচ",
        },
        {
          id: 4,
          subject: "ঢাকা বিশ্ববিদ্যালয় ও গুচ্ছ বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি (University Admission)",
          category: "Higher Education",
          status: "চলমান",
          statusKey: "active",
          deadline: "২০ ডিসেম্বর ২০২৬",
          daysRemaining: "১৫ দিন বাকি",
        },
        {
          id: 5,
          subject: "নন-ক্যাডার ১০ম ও ১২তম গ্রেড জব সল্যুশন ও স্পেশাল মডেল টেস্ট",
          category: "Non-Cadre Exam",
          status: "আবেদন চলছে",
          statusKey: "in_progress",
          deadline: "০৫ ফেব্রুয়ারি ২০২৭",
          daysRemaining: "নিবন্ধন চলছে",
        },
        {
          id: 6,
          subject: "৪৬তম বিসিএস বিষয়ভিত্তিক রিটেন ও ভাইভা স্পেশাল কোর্স",
          category: "BCS Cadre",
          status: "সম্পন্ন",
          statusKey: "completed",
          deadline: "৩০ নভেম্বর ২০২৬",
          daysRemaining: "মেয়াদ সম্পন্ন",
        }
      ]
    };
  }

  // Dynamic automation diagnostic schedule for any custom website!
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
      },
      {
        id: 2,
        subject: `SSL সার্টিফিকেট ও TLS 1.3 সিকিউরিটি হ্যান্ডশেক ভেরিফিকেশন`,
        category: "Security",
        status: "সম্পন্ন",
        statusKey: "completed",
        deadline: "২০২৭ পর্যন্ত বৈধ",
        daysRemaining: "সার্টিফিকেট ওকে",
      },
      {
        id: 3,
        subject: `H1-H3 সিম্যান্টিক হেডিং স্ট্রাকচার ও DOM হায়ারার্কি টেস্ট`,
        category: "Semantic SEO",
        status: "সম্পন্ন",
        statusKey: "completed",
        deadline: "সম্পন্ন",
        daysRemaining: "পাস",
      },
      {
        id: 4,
        subject: `ইন্টারনাল ও এক্সটারনাল হাইপারলিংক ক্রলিং অডিট (${cleanDomain})`,
        category: "Link Topology",
        status: "আবেদন চলছে",
        statusKey: "in_progress",
        deadline: "পরবর্তী ক্রল: ৭ দিন পর",
        daysRemaining: "ক্রলিং শিডিউলড",
      },
      {
        id: 5,
        subject: `ইমেজ কমপ্রেশন ও Alt-ট্যাগ অ্যাক্সেসিবিলিটি কমপ্লায়েন্স`,
        category: "Media Audit",
        status: "চলমান",
        statusKey: "active",
        deadline: "১৫ ডিসেম্বর ২০২৬",
        daysRemaining: "চলমান",
      },
      {
        id: 6,
        subject: `মোবাইল ভিউপোর্ট ও ক্রস-ডিভাইস রেসপনসিভনেস ভ্যালিডেশন`,
        category: "Mobile UX",
        status: "সম্পন্ন",
        statusKey: "completed",
        deadline: "ভ্যালিডেটেড",
        daysRemaining: "পাস",
      }
    ]
  };
};

export default function ScheduleResultsTable({ domain = 'prostutibd.com', url = 'https://prostutibd.com/' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const scheduleMeta = useMemo(() => getScheduleDataForDomain(domain), [domain]);

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
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden animate-fade-in">
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

          {/* Quick Counter */}
          <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-2xl border border-slate-200/80 self-start md:self-auto">
            <div className="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs shadow-brand-600/30">
              {filteredData.length}
            </div>
            <div className="text-xs">
              <span className="block font-bold text-slate-800">মোট বিষয়</span>
              <span className="text-slate-500">তালিকাভুক্ত</span>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
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

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
            {[
              { id: 'all', label: 'সবগুলো' },
              { id: 'active', label: 'চলমান' },
              { id: 'in_progress', label: 'আবেদন চলছে' },
              { id: 'upcoming', label: 'আসন্ন' },
              { id: 'completed', label: 'সম্পন্ন' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedStatus(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedStatus === tab.id
                    ? 'bg-brand-600 text-white shadow-xs shadow-brand-600/30'
                    : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 border border-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Screen Helper Hint */}
      <div className="sm:hidden px-5 py-2.5 bg-sky-50/70 border-b border-sky-100 flex items-center justify-between text-[11px] text-sky-800 font-medium">
        <span className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-sky-600" />
          <span>মোবাইল রেসপন্সিভ ভিউ সক্রিয়</span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md border border-sky-200">
          Mobile Ready
        </span>
      </div>

      {/* 1. Desktop & Tablet Responsive Table View */}
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

      {/* 2. Mobile-Optimized Card-Table Layout (Below 640px) */}
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

      {/* Bottom Footer Info */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>{domain} স্বয়ংক্রিয় ডায়াগনস্টিক শিডিউল ও রেজাল্ট ফরম্যাট</span>
        </div>
        <div className="text-[11px] text-slate-400">
          সর্বশেষ আপডেট: <span className="font-semibold text-slate-600">নভেম্বর ২০২৬</span>
        </div>
      </div>
    </div>
  );
}
