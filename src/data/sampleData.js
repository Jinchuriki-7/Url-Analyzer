/**
 * URL Analyzer Data Engine
 * Realistic sample analysis data for prostutibd.com and smart fallback generator.
 * Clearly marked as Demo / Benchmark data per requirements.
 */

export const PROSTUTIBD_ANALYSIS_DATA = {
  url: "https://prostutibd.com/",
  canonicalUrl: "https://prostutibd.com/",
  domain: "prostutibd.com",
  isDemo: true,
  analyzedAt: new Date().toISOString(),
  demoNotice: "Realistic sample analysis data for prostutibd.com. Displayed in simulation mode without requiring live external crawler access.",

  // Website Status & Server Info
  status: {
    code: 200,
    statusText: "OK",
    responseTime: "318 ms",
    isSecure: true,
    sslIssuer: "Cloudflare Inc ECC CA-3",
    sslValidUntil: "2027-04-18",
    httpProtocol: "HTTP/2",
    server: "Cloudflare / Nginx",
    compression: "Brotli (br)",
    ipAddress: "104.21.72.143",
    contentType: "text/html; charset=UTF-8",
  },

  // On-Page Meta & Identity
  metadata: {
    title: "Prostuti BD - অনলাইন পরীক্ষা ও চাকরির প্রস্তুতি প্ল্যাটফর্ম",
    titleLength: 54,
    titleStatus: "good", // good (50-60 chars)
    description: "বিসিএস, ব্যাংক জব, প্রাথমিক শিক্ষক নিয়োগ এবং বিশ্ববিদ্যালয় ভর্তি পরীক্ষার সেরা অনলাইন প্রস্তুতি প্ল্যাটফর্ম। লাইভ মডেল টেস্ট ও ৩০,০০০+ ব্যাখ্যাসহ প্রশ্নব্যাংক।",
    descriptionLength: 160,
    descriptionStatus: "good", // good (120-160 chars)
    language: "bn-BD",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow",
    author: "Prostuti BD Team",
    faviconUrl: "https://prostutibd.com/favicon.ico",
    openGraph: {
      title: "Prostuti BD - অনলাইন পরীক্ষা ও চাকরির প্রস্তুতি",
      description: "বিসিএস, ব্যাংক ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতি নিন লাইভ মডেল টেস্ট এবং ৩০,০০০+ প্রশ্নব্যাংক এর সাথে।",
      type: "website",
      image: "https://prostutibd.com/assets/images/og-banner.png",
      siteName: "Prostuti BD",
      locale: "bn_BD",
    },
  },

  // SEO Score & Categorical Breakdown
  seoScore: {
    overall: 89,
    grade: "A",
    status: "Excellent",
    summary: "Strong on-page foundation with high keyword relevance, responsive meta tags, and valid SSL. Minor improvements recommended in image alternative tags.",
    categories: [
      { name: "Technical SEO", score: 94, max: 100, status: "passed", icon: "Code2", details: "Clean semantic HTML, valid viewport, UTF-8 charset, canonical URL specified." },
      { name: "Content & Hierarchy", score: 90, max: 100, status: "passed", icon: "FileText", details: "Single H1 heading, logical H2-H3 nesting, descriptive Bengali meta titles." },
      { name: "Media Optimization", score: 75, max: 100, status: "warning", icon: "Image", details: "6 out of 24 images lack alt attributes; modern WebP formats utilized." },
      { name: "Security & Headers", score: 100, max: 100, status: "passed", icon: "ShieldCheck", details: "HTTPS enforced, HSTS header present, TLS 1.3 protocol active." },
      { name: "Link Integrity", score: 88, max: 100, status: "passed", icon: "Link2", details: "Balanced internal navigation architecture; zero broken links detected." }
    ],
    checklist: [
      { rule: "Page Title is optimal length (50-60 chars)", passed: true, impact: "High" },
      { rule: "Meta Description present and well-targeted", passed: true, impact: "High" },
      { rule: "Single H1 tag detected on page", passed: true, impact: "High" },
      { rule: "Responsive mobile viewport configured", passed: true, impact: "High" },
      { rule: "All images have descriptive alt attributes", passed: false, impact: "Medium", suggestion: "6 images require alt tags for better accessibility and image search SEO." },
      { rule: "Canonical URL tag implemented", passed: true, impact: "Medium" },
      { rule: "SSL / HTTPS encryption valid", passed: true, impact: "High" },
      { rule: "Social OpenGraph tags configured", passed: true, impact: "Low" },
    ]
  },

  // Heading Structure (H1, H2, H3)
  headings: {
    total: 12,
    h1Count: 1,
    h2Count: 5,
    h3Count: 6,
    h4Count: 0,
    h5Count: 0,
    h6Count: 0,
    isH1Unique: true,
    structureValid: true,
    list: [
      { level: "H1", text: "ঘরে বসেই সেরা প্রস্তুতি নিন - প্রস্তুতি বিডি", status: "optimal", note: "Primary heading with main brand & value proposition" },
      { level: "H2", text: "জনপ্রিয় কোর্স এবং পরীক্ষার ক্যাটাগরি", status: "optimal", note: "Category section heading" },
      { level: "H3", text: "বিসিএস প্রিলিমিনারি ও লিখিত প্রস্তুতি প্রোগ্রাম", status: "optimal", note: "BCS exam sub-track" },
      { level: "H3", text: "ব্যাংক ও আর্থিক প্রতিষ্ঠান নিয়োগ প্রস্তুতি", status: "optimal", note: "Banking job sub-track" },
      { level: "H3", text: "প্রাথমিক সহকারী শিক্ষক নিয়োগ (Primary Teacher)", status: "optimal", note: "Primary exam sub-track" },
      { level: "H3", text: "বিশ্ববিদ্যালয় ভর্তি ও মেডিকেল প্রস্তুতি কোর্স", status: "optimal", note: "University admission track" },
      { level: "H2", text: "লাইভ মডেল টেস্ট ও রিয়েল-টাইম র‍্যাংকিং", status: "optimal", note: "Live interactive test feature" },
      { level: "H2", text: "৩০,০০০+ ব্যাখ্যাসহ সমৃদ্ধ প্রশ্নব্যাংক", status: "optimal", note: "Question bank feature section" },
      { level: "H3", text: "স্বয়ংক্রিয় ভুল খাতা (Error Notebook) ও পারফরম্যান্স ট্র্যাকিং", status: "optimal", note: "Analytics sub-feature" },
      { level: "H3", text: "বাস্তব পরীক্ষার অভিজ্ঞতা ও নেগেটিভ মার্কিং ব্যবস্থা", status: "optimal", note: "Simulation sub-feature" },
      { level: "H2", text: "আমাদের বিশেষ প্ল্যাটফর্ম বৈশিষ্ট্যসমূহ", status: "optimal", note: "Feature highlight section" },
      { level: "H2", text: "সফল পরীক্ষার্থী ও শিক্ষার্থীদের মতামত", status: "optimal", note: "Social proof / testimonials" }
    ]
  },

  // Images Analysis
  images: {
    total: 24,
    withAlt: 18,
    withoutAlt: 6,
    altRatio: "75%",
    totalSizeEstimate: "1.38 MB",
    formats: {
      webp: 14,
      png: 6,
      jpg: 3,
      svg: 1
    },
    sampleImages: [
      { url: "https://prostutibd.com/assets/logo.png", alt: "Prostuti BD Official Logo", hasAlt: true, format: "PNG", size: "42 KB" },
      { url: "https://prostutibd.com/assets/banners/bcs-2026.webp", alt: "BCS Special Preparation Model Test 2026", hasAlt: true, format: "WebP", size: "118 KB" },
      { url: "https://prostutibd.com/assets/banners/bank-job.webp", alt: "Bank Job Comprehensive Course Banner", hasAlt: true, format: "WebP", size: "95 KB" },
      { url: "https://prostutibd.com/assets/banners/primary-teacher.webp", alt: "Primary Teacher Assistant Recruitment Prep", hasAlt: true, format: "WebP", size: "104 KB" },
      { url: "https://prostutibd.com/assets/icons/feature-timer.svg", alt: "Live Server Timer Icon", hasAlt: true, format: "SVG", size: "8 KB" },
      { url: "https://prostutibd.com/assets/images/app-download-google.webp", alt: "Download Prostuti BD Android App on Google Play", hasAlt: true, format: "WebP", size: "38 KB" },
      { url: "https://prostutibd.com/assets/images/student-avatar-1.jpg", alt: "", hasAlt: false, format: "JPG", size: "28 KB" },
      { url: "https://prostutibd.com/assets/images/student-avatar-2.jpg", alt: "", hasAlt: false, format: "JPG", size: "31 KB" },
      { url: "https://prostutibd.com/assets/images/footer-badge-1.png", alt: "", hasAlt: false, format: "PNG", size: "22 KB" },
      { url: "https://prostutibd.com/assets/images/footer-badge-2.png", alt: "", hasAlt: false, format: "PNG", size: "19 KB" },
      { url: "https://prostutibd.com/assets/images/bg-pattern.png", alt: "", hasAlt: false, format: "PNG", size: "64 KB" },
      { url: "https://prostutibd.com/assets/images/hero-shape.webp", alt: "", hasAlt: false, format: "WebP", size: "15 KB" },
    ]
  },

  // Internal and External Links
  links: {
    total: 68,
    internalCount: 52,
    externalCount: 16,
    brokenCount: 0,
    secureRatio: "100%",
    internalSample: [
      { text: "হোম (Home)", url: "https://prostutibd.com/", status: 200, type: "Internal" },
      { text: "মডেল টেস্ট (Model Tests)", url: "https://prostutibd.com/model-tests", status: 200, type: "Internal" },
      { text: "প্রশ্নব্যাংক (Question Bank)", url: "https://prostutibd.com/questions", status: 200, type: "Internal" },
      { text: "বিসিএস প্রস্তুতি (BCS Prep)", url: "https://prostutibd.com/courses/bcs", status: 200, type: "Internal" },
      { text: "ব্যাংক জব প্রস্তুতি (Bank Prep)", url: "https://prostutibd.com/courses/bank", status: 200, type: "Internal" },
      { text: "পরীক্ষার রুটিন (Exam Routine)", url: "https://prostutibd.com/routine", status: 200, type: "Internal" },
      { text: "ভুল খাতা (Error Notebook)", url: "https://prostutibd.com/student/error-book", status: 200, type: "Internal" },
      { text: "প্যাকেজ ও মূল্য তালিকা (Pricing)", url: "https://prostutibd.com/pricing", status: 200, type: "Internal" },
      { text: "লগইন / রেজিস্টার (Sign In)", url: "https://prostutibd.com/auth/login", status: 200, type: "Internal" },
      { text: "গোপনীয়তা নীতি (Privacy Policy)", url: "https://prostutibd.com/privacy", status: 200, type: "Internal" },
      { text: "ব্যবহারের শর্তাবলী (Terms)", url: "https://prostutibd.com/terms", status: 200, type: "Internal" },
      { text: "যোগাযোগ (Contact)", url: "https://prostutibd.com/contact", status: 200, type: "Internal" },
    ],
    externalSample: [
      { text: "Google Play Store App", url: "https://play.google.com/store/apps/details?id=com.prostutibd", rel: "noopener noreferrer", status: 200, type: "External" },
      { text: "Facebook Official Group", url: "https://www.facebook.com/groups/prostutibd", rel: "noopener noreferrer", status: 200, type: "External" },
      { text: "YouTube Channel Tutorials", url: "https://www.youtube.com/@prostutibd", rel: "noopener noreferrer", status: 200, type: "External" },
      { text: "Telegram Notice Board", url: "https://t.me/prostutibd", rel: "noopener noreferrer", status: 200, type: "External" },
      { text: "Cloudflare CDN Network", url: "https://www.cloudflare.com", rel: "nofollow", status: 200, type: "External" },
      { text: "SSL Certificate Validation", url: "https://letsencrypt.org", rel: "nofollow", status: 200, type: "External" }
    ]
  },

  // Performance Overview (Core Web Vitals & Network)
  performance: {
    score: 86,
    rating: "Good",
    metrics: [
      { name: "First Contentful Paint (FCP)", value: "1.2s", score: 92, status: "good", description: "Marks the time at which the first text or image is painted." },
      { name: "Largest Contentful Paint (LCP)", value: "2.4s", score: 84, status: "good", description: "Measures when the main content of a page has likely loaded." },
      { name: "Cumulative Layout Shift (CLS)", value: "0.04", score: 96, status: "good", description: "Quantifies how much the page layout shifts unexpectedly." },
      { name: "Interaction to Next Paint (INP)", value: "48ms", score: 90, status: "good", description: "Assesses page responsiveness to user interactions." },
      { name: "Time to First Byte (TTFB)", value: "318ms", score: 88, status: "good", description: "Measures server responsiveness and network latency." },
      { name: "Total Blocking Time (TBT)", value: "110ms", score: 82, status: "good", description: "Total amount of time between FCP and Time to Interactive." },
    ],
    network: {
      totalRequests: 48,
      documentSize: "32.4 KB",
      scriptsSize: "480 KB",
      stylesSize: "112 KB",
      imagesSize: "1.38 MB",
      totalPageWeight: "2.04 MB",
      domElements: 780,
    }
  }
};

/**
 * Smart generator for any custom URL entered by the user
 * Generates consistent, realistic demo analysis based on the entered domain.
 */
export function generateAnalysisForUrl(inputUrl) {
  let cleanUrl = inputUrl.trim();
  if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
    cleanUrl = "https://" + cleanUrl;
  }

  let domain = cleanUrl;
  try {
    const parsed = new URL(cleanUrl);
    domain = parsed.hostname;
  } catch {
    domain = cleanUrl.replace(/^https?:\/\//, '').split('/')[0];
  }

  // If user entered prostutibd.com, return the canonical rich benchmark data
  if (domain.toLowerCase().includes("prostutibd")) {
    return PROSTUTIBD_ANALYSIS_DATA;
  }

  // Otherwise synthesize a realistic simulated report for the user's specific URL
  const domainPart = domain.replace(/^www\./, '');
  const brandName = domainPart.split('.')[0].toUpperCase();

  return {
    url: cleanUrl,
    canonicalUrl: cleanUrl,
    domain: domain,
    isDemo: true,
    analyzedAt: new Date().toISOString(),
    demoNotice: `Realistic sample analysis data for ${domain}. Displayed in simulation mode without requiring live external crawler access.`,

    status: {
      code: 200,
      statusText: "OK",
      responseTime: `${Math.floor(280 + Math.random() * 200)} ms`,
      isSecure: cleanUrl.startsWith("https"),
      sslIssuer: "DigiCert Global Root G2",
      sslValidUntil: "2027-08-12",
      httpProtocol: "HTTP/2",
      server: "Nginx / Modern Edge",
      compression: "Gzip",
      ipAddress: "172.67.142.98",
      contentType: "text/html; charset=UTF-8",
    },

    metadata: {
      title: `${brandName} - Official Portal & Enterprise Services`,
      titleLength: 52,
      titleStatus: "good",
      description: `Welcome to ${brandName}. Discover enterprise solutions, developer resources, online tools, and modern automated workflows.`,
      descriptionLength: 135,
      descriptionStatus: "good",
      language: "en-US",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      robots: "index, follow",
      author: `${brandName} Web Team`,
      faviconUrl: `${cleanUrl}/favicon.ico`,
      openGraph: {
        title: `${brandName} - Official Website`,
        description: `Explore the platform features, documentation, and product catalog for ${brandName}.`,
        type: "website",
        image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200`,
        siteName: brandName,
        locale: "en_US",
      },
    },

    seoScore: {
      overall: 84,
      grade: "A-",
      status: "Very Good",
      summary: `Clean technical structure with solid meta hygiene. Recommended actions: optimize image payload and add missing schema markup.`,
      categories: [
        { name: "Technical SEO", score: 90, max: 100, status: "passed", icon: "Code2", details: "Canonical tags, viewport settings, and semantic structure validated." },
        { name: "Content & Hierarchy", score: 82, max: 100, status: "passed", icon: "FileText", details: "Proper H1 and H2 structure detected across key templates." },
        { name: "Media Optimization", score: 72, max: 100, status: "warning", icon: "Image", details: "Some images can be compressed and alt attributes updated." },
        { name: "Security & Headers", score: 98, max: 100, status: "passed", icon: "ShieldCheck", details: "HTTPS active with valid TLS certificates." },
        { name: "Link Integrity", score: 85, max: 100, status: "passed", icon: "Link2", details: "Healthy internal link structure and anchor text diversity." }
      ],
      checklist: [
        { rule: "Page Title is optimal length (50-60 chars)", passed: true, impact: "High" },
        { rule: "Meta Description present and valid", passed: true, impact: "High" },
        { rule: "Single H1 tag detected on page", passed: true, impact: "High" },
        { rule: "Responsive mobile viewport configured", passed: true, impact: "High" },
        { rule: "All images have descriptive alt attributes", passed: false, impact: "Medium", suggestion: "Audit media assets to ensure all decorative and content images have valid alt text." },
        { rule: "Canonical URL tag implemented", passed: true, impact: "Medium" },
        { rule: "SSL / HTTPS encryption valid", passed: true, impact: "High" },
        { rule: "Social OpenGraph tags configured", passed: true, impact: "Low" },
      ]
    },

    headings: {
      total: 9,
      h1Count: 1,
      h2Count: 4,
      h3Count: 4,
      h4Count: 0,
      h5Count: 0,
      h6Count: 0,
      isH1Unique: true,
      structureValid: true,
      list: [
        { level: "H1", text: `Welcome to ${brandName} - Enterprise Intelligence`, status: "optimal", note: "Primary page title" },
        { level: "H2", text: "Core Solutions & Offerings", status: "optimal", note: "Products overview" },
        { level: "H3", text: "Automation & Cloud Infrastructure", status: "optimal", note: "Category sub-topic" },
        { level: "H3", text: "Security and Compliance Auditing", status: "optimal", note: "Category sub-topic" },
        { level: "H2", text: "Platform Architecture & Integration", status: "optimal", note: "Technical highlights" },
        { level: "H3", text: "Developer REST & GraphQL APIs", status: "optimal", note: "API features" },
        { level: "H3", text: "Real-time Monitoring & Observability", status: "optimal", note: "Monitoring capabilities" },
        { level: "H2", text: "Customer Stories & Benchmarks", status: "optimal", note: "Case studies" },
        { level: "H2", text: "Get Started in Minutes", status: "optimal", note: "Call to action" },
      ]
    },

    images: {
      total: 16,
      withAlt: 12,
      withoutAlt: 4,
      altRatio: "75%",
      totalSizeEstimate: "1.12 MB",
      formats: { webp: 10, png: 4, jpg: 2, svg: 0 },
      sampleImages: [
        { url: `${cleanUrl}/assets/brand-logo.svg`, alt: `${brandName} Logo`, hasAlt: true, format: "SVG", size: "12 KB" },
        { url: `${cleanUrl}/assets/hero-banner.webp`, alt: "Enterprise Dashboard Hero Preview", hasAlt: true, format: "WebP", size: "145 KB" },
        { url: `${cleanUrl}/assets/architecture-diagram.webp`, alt: "Cloud Infrastructure Architecture", hasAlt: true, format: "WebP", size: "98 KB" },
        { url: `${cleanUrl}/assets/customer-badge.png`, alt: "Verified Partner Certification", hasAlt: true, format: "PNG", size: "34 KB" },
        { url: `${cleanUrl}/assets/bg-mesh.jpg`, alt: "", hasAlt: false, format: "JPG", size: "82 KB" },
        { url: `${cleanUrl}/assets/decorative-shape.png`, alt: "", hasAlt: false, format: "PNG", size: "26 KB" },
      ]
    },

    links: {
      total: 42,
      internalCount: 34,
      externalCount: 8,
      brokenCount: 0,
      secureRatio: "100%",
      internalSample: [
        { text: "Home", url: `${cleanUrl}/`, status: 200, type: "Internal" },
        { text: "Products", url: `${cleanUrl}/products`, status: 200, type: "Internal" },
        { text: "Solutions", url: `${cleanUrl}/solutions`, status: 200, type: "Internal" },
        { text: "Documentation", url: `${cleanUrl}/docs`, status: 200, type: "Internal" },
        { text: "Pricing", url: `${cleanUrl}/pricing`, status: 200, type: "Internal" },
        { text: "Security", url: `${cleanUrl}/security`, status: 200, type: "Internal" },
        { text: "Contact", url: `${cleanUrl}/contact`, status: 200, type: "Internal" },
      ],
      externalSample: [
        { text: "Documentation GitHub", url: "https://github.com", rel: "noopener", status: 200, type: "External" },
        { text: "X / Twitter Updates", url: "https://twitter.com", rel: "noopener", status: 200, type: "External" },
        { text: "LinkedIn Company Profile", url: "https://linkedin.com", rel: "noopener", status: 200, type: "External" },
      ]
    },

    performance: {
      score: 82,
      rating: "Good",
      metrics: [
        { name: "First Contentful Paint (FCP)", value: "1.4s", score: 88, status: "good", description: "Marks the time at which the first text or image is painted." },
        { name: "Largest Contentful Paint (LCP)", value: "2.6s", score: 81, status: "good", description: "Measures when the main content of a page has likely loaded." },
        { name: "Cumulative Layout Shift (CLS)", value: "0.06", score: 92, status: "good", description: "Quantifies how much the page layout shifts unexpectedly." },
        { name: "Interaction to Next Paint (INP)", value: "54ms", score: 88, status: "good", description: "Assesses page responsiveness to user interactions." },
        { name: "Time to First Byte (TTFB)", value: "340ms", score: 86, status: "good", description: "Measures server responsiveness and network latency." },
        { name: "Total Blocking Time (TBT)", value: "140ms", score: 79, status: "good", description: "Total amount of time between FCP and Time to Interactive." },
      ],
      network: {
        totalRequests: 36,
        documentSize: "28.6 KB",
        scriptsSize: "390 KB",
        stylesSize: "96 KB",
        imagesSize: "1.12 MB",
        totalPageWeight: "1.63 MB",
        domElements: 640,
      }
    }
  };
}
