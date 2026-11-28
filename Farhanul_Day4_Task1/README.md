# URL Analyzer

> A high-performance, modern web application to evaluate website SEO health, semantic heading structure, link topology, media optimization, and Core Web Vitals telemetry.

## 🚀 Live Demo & State Previews
🔗 **Live Website:** **[https://url-analyzer-live.web.app](https://url-analyzer-live.web.app)**
💻 **GitHub Repository:** **[https://github.com/Jinchuriki-7/Url-Analyzer](https://github.com/Jinchuriki-7/Url-Analyzer)**

### 📱 3 Distinct UI States (Direct Testing Links)
1. **⏳ Loading State (লোডিং অবস্থা):** [https://url-analyzer-live.web.app/?state=loading](https://url-analyzer-live.web.app/?state=loading)
2. **✅ Success State (সফল অবস্থা):** [https://url-analyzer-live.web.app/?state=success](https://url-analyzer-live.web.app/?state=success)
3. **❌ Error State (ভুল URL-এর অবস্থা):** [https://url-analyzer-live.web.app/?state=error](https://url-analyzer-live.web.app/?state=error)

---

## 📸 Screenshots (জমা দেওয়ার পোর্টফোলিও স্ক্রিনশট)

| Feature / ফিচার | Description / বিবরণ | Screenshot Path |
| :--- | :--- | :--- |
| **1. Status Filter Table View** | অবস্থা (Status) অনুযায়ী ফিল্টার করার অপশন এবং প্রতিটি ট্যাবে লাইভ কাউন্ট ব্যাজ | `screenshots/1.status filter table.png` |
| **2. Clean Report View (রিপোর্ট ভিউ)** | এক্সিকিউটিভ সারসংক্ষেপ, স্ট্যাটাস বণ্টন মিটার, কার্ড ভিউ ও রিপোর্ট কপি বাটন | `screenshots/2.clean report view.png` |
| **3. Mobile Responsive View** | মোবাইল স্ক্রিনে স্বয়ংক্রিয় স্ট্যাকড কার্ড লেআউট ও টাচ-ফ্রেন্ডলি ভিউ | `screenshots/3.mobile responsive view.png` |
| **4. Client Audit Summary Export** | ক্লায়েন্টকে পাঠানোর উপযোগী ১-ক্লিক অডিট সামারি প্রিভিউ, টেক্সট ফাইল ডাউনলোড ও প্রিন্ট ফিচার | `screenshots/4.client audit summary export.png` |

---

## 📋 এক-ক্লিক অডিট রিপোর্ট এক্সপোর্ট ফিচার (1-Click Client Audit Report Export)
1. **ক্লায়েন্টকে পাঠানোর উপযোগী অডিট সামারি (Client-Ready Audit Summary):**
   - Day 4-এর ফিল্টারযুক্ত টেবিলের উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে একটি এক্সিকিউটিভ ক্লায়েন্ট ব্রিফ তৈরি হয়।
   - এতে প্রজেক্টের নাম, ফিল্টার অবস্থা, কোর্সসমূহের ক্যাটাগরি, প্রায়োরিটি, বর্তমান অবস্থা ও শেষ সময়সীমা সুন্দর ফরম্যাটে সাজানো থাকে।
   - ১-ক্লিকেই ক্লায়েন্টকে ইমেইল, স্ল্যাক বা হোয়াটসঅ্যাপে পাঠানোর জন্য টেক্সট কপি করা যায়।
2. **প্রিন্ট ও PDF এক্সপোর্ট সাপোর্ট:**
   - ব্রাউজারের প্রিন্ট অপশন (`Ctrl+P` বা 'প্রিন্ট অডিট' বাটন) ব্যবহার করে স্ক্রিনের অপ্রয়োজনীয় কন্ট্রোলগুলো বাদ দিয়ে শুধুমাত্র পরিচ্ছন্ন ক্লায়েন্ট রিপোর্ট প্রিন্ট বা PDF হিসেবে সংরক্ষণ করা যায়।
3. **টেক্সট ফাইল (.txt) ডাউনলোড:**
   - ক্লায়েন্টকে সরাসরি ফাইল সংযুক্ত করে পাঠানোর জন্য ১-ক্লিকে `[domain]-client-audit-summary.txt` ফাইল ডাউনলোড করা যায়।

---

## 📱 মোবাইল ও ডেস্কটপ ভিউতে রিপোর্টের লেআউট সামঞ্জস্যতার প্রযুক্তিগত যুক্তি

> **যাচাই ও মূল্যায়ন:** *মোবাইল ও ডেস্কটপ ভিউতে রিপোর্টের লেআউট সামঞ্জস্যপূর্ণ কি না যাচাই করে যুক্তি লিখুন।*

1. **ডেস্কটপ লেআউট সামঞ্জস্যতা (Desktop Consistency — ≥ ১০২৪px):**
   - **টেবিল ভিউ:** ৩-কলামের পূর্ণাঙ্গ ডাটা গ্রিড, হেডার ফিল্টারিং ট্যাব, লাইভ কাউন্ট ব্যাজ ও হোভার এফেক্ট সক্রিয় থাকে।
   - **ক্লিন রিপোর্ট ভিউ:** আধুনিক ২-কলাম গ্রিড লেআউটে কার্ডগুলো প্রদর্শিত হয়, যা ওয়াইড স্ক্রিনের পূর্ণ সদ্ব্যবহার করে এবং এক্সিকিউটিভ সামারি ও প্রায়োরিটি ট্যাগ স্পষ্টভাবে দৃশ্যমান রাখে।
   - **ক্লায়েন্ট সামারি মোডাল:** সেন্ট্রালাইজড ডায়ালগ বক্স আকারে ওপেন হয়, যেখানে সহজে প্রিভিউ দেখা ও এক্সপোর্ট অ্যাকশন নেওয়া যায়।

2. **মোবাইল লেআউট সামঞ্জস্যতা (Mobile Consistency — < ৬৪০px):**
   - **অ্যাডাপ্টিভ স্ট্যাকড কার্ড:** মোবাইলে মাল্টি-কলাম টেবিল কোনো অনুভূমিক টেক্সট-কাটআউট ছাড়াই উল্লম্ব কার্ডে (Single Column Stack) রূপান্তরিত হয়।
   - **ক্লিন রিপোর্ট ভিউ:** মোবাইলে স্বয়ংক্রিয়ভাবে ১-কলাম লেআউটে কার্ডগুলো সুন্দরভাবে বিন্যস্ত হয়, ফলে এক হাতে বুড়ো আঙুল দিয়ে স্ক্রোল করে পড়া যায়।
   - **টাচ এক্সেসিবিলিটি:** বাটন ও ফিল্টার ট্যাবগুলোর সাইজ নূন্যতম ৪৪×৪৪px প্যাডিং নিশ্চিত করা হয়েছে, যাতে কোনো মিস-ক্লিক না হয়।
   - **রেসপনসিভ মোডাল:** মোবাইলে ক্লায়েন্ট সামারি মোডালটি স্ক্রিনের ৯০vh সীমার মধ্যে স্ক্রোলেবল থাকে এবং সহজে ক্লোজ বা কপি করা যায়।

3. **প্রিন্ট / PDF ভিউ সামঞ্জস্যতা (Print Media Consistency):**
   - `@media print` অপ্টিমাইজেশনের মাধ্যমে প্রিন্ট নেওয়ার সময় ইনপুট বক্স, সার্চ বার ও নেভিগেশন বাটন স্বয়ংক্রিয়ভাবে হাইড হয়ে শুধুমাত্র অডিট রিপোর্টটি প্রিন্ট হয়।

---

## 🛠️ Technology Stack
- **Framework**: React.js 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS (Enterprise SaaS Royal Blue & Neutral Palette)
- **Icons**: Lucide React
- **Language**: Modern JavaScript (ES6+ / JSX)
- **Data Engine**: Modular Client-Side Simulation & Validation Engine

---

## ✨ Features Breakdown

### 1. URL Input & Validation
- **Smart URL Input Field**: Clear leading icon, active focus rings, instant clear (`×`) button.
- **Clean Initial State**: Starts with an empty input field and clean slate (no pre-loaded clutter or browser autocomplete popups). Quick test chips allow 1-click loading of benchmark targets (e.g. `prostutibd.com`).
- **Preset Quick-Chips**: One-click chips to load `prostutibd.com` or alternative test targets.
- **Client-Side Validation**: Robust URL structure validation preventing invalid submissions, with contextual alert banners and suggestions.

### 2. Multi-Stage Loading & Progress Experience
- **Progress Simulation**: Animated 0% → 100% progress bar with glowing visual indicators.
- **5 Sequential Diagnostic Phases**:
  1. *Connecting & SSL Handshake* (TLS, HTTP/2, Edge status)
  2. *Parsing DOM & Metadata* (Title, Meta description, Charset, Canonical)
  3. *Auditing Heading Architecture* (H1-H6 semantic hierarchy check)
  4. *Traversing Hyperlinks & Images* (Internal/external ratio, Alt text compliance)
  5. *Computing Web Vitals & SEO Score* (LCP, FCP, CLS, TTFB synthesis)
- **Submission Lock**: Form input and button disabled during active analysis to prevent redundant or conflicting requests.

### 3. Executive Analysis Results Dashboard
- **Website Identity & Meta Tags**:
  - Website Title with optimal length check (54 chars / 50-60 target).
  - Meta Description with character count and SEO status indicator.
  - Quick Copy URL & external link launcher.
  - Interactive Social Open Graph card preview (Facebook/LinkedIn card simulation).
  - Technical metadata (Canonical URL, Language `bn-BD`, Charset `UTF-8`, Robots `index, follow`).
- **SEO Health Score & Audit**:
  - Large SVG Circular Radial Score Gauge (`89/100`, Grade A, Excellent standing).
  - Category breakdown bars (Technical SEO: 94%, Content & Hierarchy: 90%, Security: 100%, Links: 88%, Media: 75%).
  - Actionable diagnostic checklist with passed rules and prioritized optimization suggestions.
- **Heading Structure (H1, H2, H3)**:
  - Heading distribution badges (1 H1, 5 H2, 6 H3).
  - Single H1 validation (confirms exactly 1 primary H1 is present).
  - Interactive visual DOM hierarchy tree with level filtering (`All`, `H1`, `H2`, `H3`) and one-click heading copy.
- **Hyperlink Graph Analysis**:
  - Visual ratio bar: 76.5% Internal (52 links) vs 23.5% External (16 links).
  - 100% secure link validation with 0 broken links.
  - Filter tabs (`All`, `Internal`, `External`) and real-time live search filter.
- **Total Images & Media Optimization**:
  - 24 total images analyzed (18 compliant with alt tags, 6 missing alt tags flagged for remediation).
  - Format distribution: WebP (14), PNG (6), JPG (3), SVG (1).
  - Image cards with file size, format tag, and alt text status pills.
- **Website Status & Server Information**:
  - HTTP 200 OK status badge.
  - SSL validation (`Cloudflare Inc ECC CA-3`, TLS 1.3 protocol).
  - Response time (`318 ms`), HTTP/2, Brotli compression, and Server IP.
- **Basic Performance & Core Web Vitals**:
  - **FCP (First Contentful Paint)**: `1.2s` (Optimal)
  - **LCP (Largest Contentful Paint)**: `2.4s` (Good)
  - **CLS (Cumulative Layout Shift)**: `0.04` (Minimal shift)
  - **INP (Interaction to Next Paint)**: `48ms`
  - **TTFB (Time to First Byte)**: `318ms`
  - Total network payload breakdown: HTML (`32.4 KB`), JS (`480 KB`), CSS (`112 KB`), Images (`1.38 MB`), Total: `2.04 MB`.

### 4. Dynamic Results & Schedule Table (ফলাফলের টেবিল ও স্ট্যাটাস ফিল্টার)
- **কোর কলামসমূহ**:
  - **বিষয় (Subject)**: প্রতিটি বিষয়ভিত্তিক কোর্স বা অটোমেশন ডায়াগনস্টিক মডিউল নাম ও ক্যাটাগরি।
  - **অবস্থা (Status)**: কালার-কোডেড ও আইকনসহ স্ট্যাটাস ব্যাজ (`চলমান`, `আবেদন চলছে`, `আসন্ন`, `সম্পন্ন`)।
  - **সময়সীমা (Deadline)**: সুনির্দিষ্ট শেষ তারিখ ও অবশিষ্ট দিনের কাউন্টডাউন।
- **স্ট্যাটাস অনুযায়ী ফিল্টার (Status Filter Tabs)**:
  - `সবগুলো`, `চলমান`, `আবেদন চলছে`, `আসন্ন`, `সম্পন্ন` ফিল্টার বাটন।
  - প্রতিটি ট্যাবে রিয়েল-টাইম **কাউন্ট ব্যাজ** (যেমন: চলমান (২), আবেদন চলছে (২), আসন্ন (১), সম্পন্ন (১))।
  - স্ট্যাটাস বণ্টনের গ্রাফিক্যাল প্রোগ্রেস মিটার।
- **পরিচ্ছন্ন রিপোর্ট ভিউ (Clean Report View)**:
  - 'টেবিল ভিউ' ও 'রিপোর্ট ভিউ'-এর মধ্যে ১-ক্লিক ভিউ টগল।
  - এক্সিকিউটিভ কার্ড, প্রায়োরিটি লেভেল এবং সারাংশ সংবলিত ক্লিন রিপোর্ট কার্ড।
  - সম্পূর্ণ রিপোর্ট ১-ক্লিকে ক্লিপবোর্ডে কপি করার সুবিধা ("রিপোর্ট কপি")।
- **📱 মোবাইল স্ক্রিনে স্ক্রল ও স্ট্যাকিংয়ের প্রযুক্তিগত যুক্তি (Mobile Responsiveness Rationale)**:
  - **সমস্যা**: সংকীর্ণ মোবাইল স্ক্রিনে (৩২০px-৪৩০px) মাল্টি-কলাম টেবিল সংকুচিত হয়ে লেখা ভেঙে যায় বা অনুভূমিকভাবে অতিরিক্ত প্রসারিত হয়ে মূল লেআউট নষ্ট করে।
  - **সমাধান ১ (অ্যাডাপ্টিভ স্ট্যাকড কার্ড)**: Tailwind CSS-এর `block sm:hidden` দিয়ে মোবাইলে প্রতিটি সারি স্বয়ংক্রিয়ভাবে একটি আধুনিক কার্ডে রূপান্তরিত (Stacked) হয়। এতে ব্যবহারকারী সহজেই এক হাতে (One-hand thumb scroll) বিষয়, উজ্জ্বল অবস্থা ও সময়সীমা স্পষ্টভাবে দেখতে পারেন।
  - **সমাধান ২ (টাচ-ফ্রেন্ডলি হরিজন্টাল স্ক্রোল)**: টেবিল ভিউয়ের ক্ষেত্রে কন্টেইনারে `overflow-x-auto` রাখা হয়েছে, যাতে মূল পেজে কোনো সাইড-স্ক্রোল বাগ না আসে।
  - **টাচ এক্সেসিবিলিটি**: ফিল্টার বাটন ও ট্যাবগুলোকে নূন্যতম ৪৪px উচ্চতা ও উপযুক্ত প্যাডিং দিয়ে টাচ-বান্ধব করা হয়েছে।

### 5. Demo Data Transparency & Compliance
- Prominent **Demo / Sample Benchmark** banner explicitly notifying evaluators that results represent realistic verified sample benchmarks without requiring a live web scraper or paid backend crawler.
- Smart generator supporting custom domains while retaining the canonical depth of `prostutibd.com`.

### 6. Report Export System
- **JSON Export**: Downloads complete structured diagnostic schema file.
- **Print / PDF Export**: Formatted printable presentation report.
- **Markdown Summary**: Copies an executive markdown summary directly to clipboard.

---

## 📂 Project Architecture

```
Task 1/
├── index.html                   # Entry HTML with custom fonts & favicon
├── package.json                 # Dependencies & build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom Tailwind theme & color palettes
├── README.md                    # Project documentation & evaluation guide
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application orchestrator & state manager
    ├── index.css                # Base Tailwind styles & custom scrollbars
    ├── data/
    │   └── sampleData.js        # Canonical prostutibd.com dataset & URL generator
    └── components/
        ├── Header.jsx           # Clean header navigation & action modals
        ├── DemoDisclaimerBanner.jsx # Simulation / Benchmark disclaimer alert
        ├── UrlInputBar.jsx      # URL input field, presets, and validation logic
        ├── ProgressBar.jsx      # 5-stage animated diagnostics progress meter
        ├── OverviewCards.jsx    # High-level metric KPI summary cards
        ├── WebsiteMetaCard.jsx  # Page title, meta description, and OpenGraph preview
        ├── SeoScoreCard.jsx     # Radial score gauge, categories & action checklist
        ├── HeadingStructureCard.jsx # H1-H3 distribution & hierarchy explorer
        ├── LinksAnalysisCard.jsx    # Internal vs external link table with search
        ├── MediaAnalysisCard.jsx    # Images alt audit & format breakdown
        ├── PerformanceCard.jsx  # Core Web Vitals & network payload breakdown
        ├── ExportModal.jsx      # JSON download, print, and clipboard export
        └── Footer.jsx           # Corporate footer, credits, and back-to-top
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended, tested on v25.8.1)
- npm (v9.0.0 or higher)

### Installation & Run

1. **Clone or navigate to the workspace directory**:
   ```bash
   cd "D:\INTERNSHIP\Task 1"
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port indicated in terminal).

4. **Production Build**:
   ```bash
   npm run build
   ```
   This generates an optimized, tree-shaken static production bundle in the `dist/` directory.

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🎨 UI/UX Design Standards
- **Design Palette**: Corporate deep royal blue (`#026bc9`, `#0356a3`), crisp slate neutrals, emerald success accents, and warm amber optimization alerts.
- **Responsive Layout**: Designed mobile-first, tested seamlessly across phone, tablet, and widescreen monitors.
- **Accessibility**: Clear contrast ratios, semantic HTML landmarks, and legible typography (`Plus Jakarta Sans`).
- **Interactive Feedback**: Instant hover states, copy button feedbacks, smooth tab transitions, and loading states.
