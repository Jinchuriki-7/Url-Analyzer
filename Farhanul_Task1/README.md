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

## 📸 State & Table Screenshots (জমা দেওয়ার স্ক্রিনশট)

| State / অবস্থা | Description / বিবরণ | Screenshot Path |
| :--- | :--- | :--- |
| **1. Loading State (লোডিং অবস্থা)** | 5-ধাপের অ্যানিমেটেড প্রোগ্রেস বার এবং লাইভ স্টেজ মেসেজ | `screenshots/1_loading_state.png` |
| **2. Success State (সফল অবস্থা)** | সম্পূর্ণ SEO স্কোর, হেডিং হায়ারার্কি, লিংক গ্রাফ ও পারফরম্যান্স ড্যাশবোর্ড | `screenshots/2_success_state.png` |
| **3. Error State (ভুল URL-এর অবস্থা)** | ভুল বা অকার্যকর URL-এর স্পষ্ট লাল সতর্কবার্তা, কারণ তালিকা ও সমাধান নির্দেশিকা | `screenshots/3_error_state.png` |
| **4. Results Table (ডেস্কটপ ভিউ)** | বিষয় (Subject), অবস্থা (Status), সময়সীমা (Deadline) সমন্বিত ফলাফলের টেবিল | `screenshots/schedule_table_desktop.png` |
| **5. Mobile Responsive Table** | মোবাইল স্ক্রিনে (৩৯০px) অ্যাডাপ্টিভ রেসপন্সিভ কার্ড ও স্ক্রোল লেআউট | `screenshots/schedule_table_mobile.png` |

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

### 4. Dynamic Results & Schedule Table (ফলাফলের টেবিল: বিষয়, অবস্থা, সময়সীমা)
- **বিষয় (Subject)**: প্রতিটি বিষয়ভিত্তিক কোর্স বা অটোমেশন ডায়াগনস্টিক মডিউল নাম ও ক্যাটাগরি।
- **অবস্থা (Status)**: কালার-কোডেড ও আইকনসহ স্ট্যাটাস ব্যাজ (`চলমান`, `আবেদন চলছে`, `আসন্ন`, `সম্পন্ন`)।
- **সময়সীমা (Deadline)**: সুনির্দিষ্ট শেষ তারিখ ও অবশিষ্ট দিনের কাউন্টডাউন।
- **ডায়নামিক অ্যাডাপ্টেশন**: `prostutibd.com` দিলে কোর্স তালিকা এবং অন্য যেকোনো সাইটের ক্ষেত্রে সেই সাইটের অটোমেশন অডিট শিডিউল ডায়নামিকভাবে প্রদর্শিত হয়।
- **📱 মোবাইল রেসপন্সিভনেস**: ছোট মোবাইল স্ক্রিনে টেবিল কেটে না গিয়ে স্বয়ংক্রিয়ভাবে একটি আধুনিক স্ট্যাকড কার্ড-টেবিলে রূপান্তরিত হয়।
- **লাইভ ফিল্টারিং ও সার্চ**: বিষয় বা সময়সীমা দিয়ে দ্রুত খোঁজার সার্চ ইনপুট ও স্ট্যাটাস ফিল্টার পিলস।

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
