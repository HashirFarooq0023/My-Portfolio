// lib/content/projects.ts
import type { ImageAsset } from "./types";

import asanDashboard from "./images/AsanShipping/dashboard.png";
import asanInventory from "./images/AsanShipping/inventoryu.png";
import asanManual from "./images/AsanShipping/manual order.png";
import asanSettings from "./images/AsanShipping/SETTINGS.png";

import schoolhubDashboard from "./images/schoolhub_dashboard.jpg";
import bizmanagerCover from "./images/bizmanager-cover.png";
import bizmanagerDashboard from "./images/bizmanager_dashboard.jpg";
import myportalCover from "./images/myportalucp-cover.png";
import myportalDashboard from "./images/myportalucp_dashboard.jpg";
import talentVectorCover from "./images/talentvector-cover.png";
import autopostingDashboard from "./images/autoposting_dashboard.jpg";
import psxQuantitativeCover from "./images/psx-analytics-cover.png";
import psxChart from "./images/PPSM/chart.png";
import psxPortfolio from "./images/PPSM/portfolio .png";

import trendsMain from "./images/trendsstore/ecom main.png";
import trendsAdmin from "./images/trendsstore/admin portal .png";
import trendsProduct from "./images/trendsstore/product page.png";
import trendsCheckout from "./images/trendsstore/cehckoutpage .png";

export interface Project {
  id: string;
  title: string;
  category: "ai" | "fullstack" | "frontend";
  shortDescription: string;
  liveUrl?: string;
  githubUrl?: string;
  role: string;
  featured?: boolean;
  techStack: string[];
  keyFeatures: string[];
  gallery?: readonly ImageAsset[];
}

export const projects: Project[] = [
  // ==================== ASANSHIPPING (FYP FLAGSHIP) ====================
  {
    id: "asanshipping",
    title: "AsanShipping",
    category: "fullstack",
    shortDescription:
      "Pakistan's premier AI-driven autonomous logistics control tower. Eliminates COD RTO friction with automated WhatsApp verification, multi-courier routing (TCS, Trax, Leopards, PostEx, M&P), and reverse logistics.",
    liveUrl: "https://www.asanshipping.com",
    githubUrl: "https://github.com/MegaTrix-Technologies/AsanShipping-Landing",
    role: "Founder & Full-Stack Architect",
    featured: true,
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "TypeScript", "Python", "FastAPI", "MongoDB", "WhatsApp Cloud API", "Redis"],
    keyFeatures: [
      "Order lifecycle state machine: deterministic state engine tracking orders across Unverified, Confirmed, Booked, In-Transit, Delivered, and RTO stages.",
      "Automated WhatsApp confirmation: interactive buttons and quick-replies sent via WhatsApp Cloud API allowing buyers to confirm or cancel orders in seconds.",
      "Unified multi-courier booking: single-click booking across major regional couriers with automated shipping label generation and tracking numbers.",
      "Intelligent courier routing: automated rule-based assignment matching parcel weight, destination city, and courier delivery success history.",
      "Inventory & reverse logistics: real-time warehouse SKU deduction upon dispatch and automated restock workflows when returned packages are checked in.",
    ],
    gallery: [
      { src: asanDashboard, alt: "AsanShipping autonomous logistics control tower" },
      { src: asanInventory, alt: "Inventory management and warehouse stock ledger" },
      { src: asanManual, alt: "Manual order booking and normalization interface" },
      { src: asanSettings, alt: "Courier API credentials and tenant settings" },
    ],
  },

  // ==================== MEGATRIX ECOSYSTEM PRODUCTS ====================
  {
    id: "school-hub",
    title: "School Hub",
    category: "fullstack",
    shortDescription:
      "Unified school management system by MegaTrix. One workspace for administration, teachers, and students handling attendance, examinations, timetable schedules, notices, and fee vouchers.",
    liveUrl: "https://schoolhub.megatrixai.com",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "Full-Stack Developer (MegaTrix)",
    featured: true,
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth"],
    keyFeatures: [
      "Multi-role portal hierarchy: dedicated dashboards tailored precisely to the daily responsibilities of admins, educators, students, and parents.",
      "Attendance & daily absence tracking: one-click classroom attendance recording with automated monthly percentage summaries.",
      "Fee management & voucher generation: automated monthly invoice calculation with customizable discounts, fines, and payment records.",
      "Exam grading & report cards: teacher gradebook entry with automated GPA calculation and printable student progress reports.",
      "Student & staff directories: comprehensive personnel profiles, emergency contact records, and enrollment histories.",
    ],
    gallery: [
      { src: schoolhubDashboard, alt: "School Hub administrative portal overview" },
    ],
  },
  {
    id: "bizmanager",
    title: "BizManager",
    category: "fullstack",
    shortDescription:
      "Modern dual-language (Urdu & English) Point of Sale, real-time inventory management, customer udhaar khata, and daily net profit analytics for retail and wholesale businesses.",
    liveUrl: "https://bizmanager.megatrixai.com",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "Full-Stack Developer (MegaTrix)",
    featured: true,
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Data Tables"],
    keyFeatures: [
      "Real-time stock depletion & alerts: instant inventory balance tracking with proactive warnings when popular items drop below safety thresholds.",
      "Point of Sale (POS) billing: clean keyboard-friendly billing interface with thermal invoice printing and itemized tax handling.",
      "Customer credit & debt ledger: comprehensive udhaar khata receivables history tracking customer credit, payments received, and overdue debt.",
      "Supplier purchase order management: vendor invoice logging, payables tracking, and automated inventory replenishment on delivery.",
      "Automated profit & loss analytics: real-time calculation of gross revenue, Cost of Goods Sold (COGS), operational expenses, and daily net profit.",
    ],
    gallery: [
      { src: bizmanagerCover, alt: "Supercharge your business with BizManager landing overview" },
      { src: bizmanagerDashboard, alt: "BizManager sales and inventory management terminal" },
    ],
  },
  {
    id: "myportalucp",
    title: "MyPortalUCP",
    category: "fullstack",
    shortDescription:
      "The specialized student ecosystem for the University of Central Punjab, offering real-time academic notifications, past exam archives, end-to-end encrypted sync, and GPA/CGPA forecasting.",
    liveUrl: "https://www.myportalucp.online",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "Creator & Lead Developer",
    featured: true,
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    keyFeatures: [
      "Categorized past exam papers archive: filterable repository of past midterm and final examination papers organized by course and semester.",
      "Precision GPA / CGPA calculator: interactive calculator calibrated to exact UCP grading scale and credit hour weightings.",
      "Course notes & study materials: downloadable slides, assignment references, and syllabus guides contributed by top students.",
      "Community submissions: student upload interface allowing peer collaboration and content enrichment.",
      "Mobile ecosystem: integrated with Android app downloads and responsive student views.",
    ],
    gallery: [
      { src: myportalCover, alt: "MyPortal UCP specialized student ecosystem landing view" },
      { src: myportalDashboard, alt: "MyPortalUCP academic archive and study resources" },
    ],
  },

  // ==================== AI & MACHINE LEARNING ====================
  {
    id: "talent-vector",
    title: "Talent Vector AI",
    category: "ai",
    shortDescription:
      "Next-generation AI recruitment and talent acquisition platform utilizing neural matching, NLP tokenization, and vector embeddings for automated resume parsing and candidate ranking.",
    liveUrl: "https://talentvector-xi.vercel.app",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "AI & Full-Stack Developer",
    featured: true,
    techStack: ["Python", "FastAPI", "NLP", "Scikit-Learn", "Cosine Similarity", "React", "Tailwind CSS", "MongoDB"],
    keyFeatures: [
      "Automated resume parsing: extracts unstructured sections from PDF and DOCX resumes into structured JSON entities.",
      "Semantic job fit scoring: computes contextual compatibility beyond exact keyword matches using neural vector similarity.",
      "Skills gap identification: visual breakdown showing which required skills the candidate possesses and which are missing.",
      "Dual portal access: dedicated interfaces for Recruiters and Job Seekers with seamless Google OAuth authentication.",
      "Ranked candidate shortlist: sorts applicants objectively based on algorithmic fit scores for streamlined interview pipelines.",
    ],
    gallery: [
      { src: talentVectorCover, alt: "Talent Vector next-generation talent acquisition portal" },
    ],
  },
  {
    id: "psx-prediction",
    title: "PSX Quantitative Stock Analysis & Prediction",
    category: "ai",
    shortDescription:
      "Quantitative financial analysis and machine learning forecasting platform for Pakistan Stock Exchange equities, featuring descriptive statistics, OLS regression mapping, and time-series momentum prediction.",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "ML Engineer & Developer (Probability & Statistics)",
    featured: true,
    techStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Time-Series Analysis", "OLS Regression", "React", "Tailwind CSS"],
    keyFeatures: [
      "Descriptive statistics summary: analyzes central tendency indices, mean, median, IQR, and dispersion distributions evaluated over 620 trading sessions.",
      "OLS regression & correlation mapping: evaluates asset co-movement, risk-adjusted beta, and diversification evaluations across leading equities (MEBL, SYS, FFC, HUBC, NPL).",
      "Historical PSX ticker analysis: ingestion and preprocessing of historical daily OHLCV trading data across leading PSX equities.",
      "Technical indicator computation: automated extraction of RSI, MACD, 20/50-day moving averages, and volatility bands.",
      "Supervised ML trend forecasting: machine learning models evaluating price direction probability based on lag feature matrices.",
      "Quantitative benchmarking: visual comparison of predicted trajectories against actual market prices with RMSE and MAE statistics.",
    ],
    gallery: [
      { src: psxQuantitativeCover, alt: "PSX Quantitative Stock Analysis and Descriptive Statistics Dashboard" },
      { src: psxChart, alt: "PSX stock prediction charts and indicators" },
    ],
  },
  {
    id: "psx-portfolio-manager",
    title: "Personal PSX Portfolio Manager",
    category: "ai",
    shortDescription:
      "Personal investment management platform for tracking Pakistan Stock Exchange portfolios, cost-basis calculations, and LLM-assisted corporate disclosure insights.",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "AI & Full-Stack Developer",
    featured: true,
    techStack: ["Python", "FastAPI", "LLMs", "Prompt Engineering", "React", "Tailwind CSS"],
    keyFeatures: [
      "Realized & unrealized P&L tracking: real-time calculations of capital gains across individual stocks and aggregate portfolio holdings.",
      "Sector exposure breakdown: visual allocation metrics helping maintain disciplined sector diversification.",
      "LLM corporate filing summarizer: generates digestible summaries of quarterly financial earnings statements and director reports.",
      "Trade & dividend ledger: complete historical log of buy/sell transactions, cash dividends, and portfolio cash balances.",
    ],
    gallery: [
      { src: psxPortfolio, alt: "Personal PSX portfolio analytics dashboard" },
    ],
  },
  {
    id: "megatrix-ai-social",
    title: "MegaTrix AI Social / AutoPosting",
    category: "ai",
    shortDescription:
      "Autonomous social media pipeline integrating LLMs, Antigravity workflow automation, and Buffer MCP to discover tech topics, generate tailored copy, and publish automatically.",
    liveUrl: "https://auto-posting-engine-web.vercel.app",
    githubUrl: "https://github.com/MegaTrix-Technologies/AutoPostingEngine-Web",
    role: "AI & Automation Engineer",
    featured: true,
    techStack: ["Node.js", "Express", "Google Gemini AI", "OpenAI", "Buffer MCP", "Puppeteer", "Replicate", "MongoDB"],
    keyFeatures: [
      "Automated tech topic curation: continuous scanning of software engineering topics and industry news to inspire relevant content.",
      "Multi-platform copy adaptations: generates punchy short-form posts for X/Twitter alongside detailed narrative insights for LinkedIn.",
      "Buffer MCP direct queueing: dispatches approved content straight into scheduled publishing slots via standard MCP tool calls.",
      "Visual synthesis: coordinates AI models for automated background removal and branded graphic creation.",
    ],
    gallery: [
      { src: autopostingDashboard, alt: "AutoPostingEngine dashboard interface" },
    ],
  },

  // ==================== FULL-STACK & RETAIL ====================
  {
    id: "trendsstore",
    title: "TrendsStore E-Commerce Platform",
    category: "fullstack",
    shortDescription:
      "Production-grade MERN e-commerce application featuring a customer storefront, product catalog, cart, multi-step checkout, and comprehensive merchant back-office management portal.",
    githubUrl: "https://github.com/hashirfarooq0023",
    role: "Full-Stack Developer (NAVTTC Capstone)",
    featured: true,
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth"],
    keyFeatures: [
      "Responsive customer storefront: fast-loading catalog browsing with category filtering, featured carousels, and detailed product views.",
      "Persistent cart & multi-step checkout: local storage cart synchronization with address validation and Cash-on-Delivery payment selection.",
      "Admin product management (CRUD): merchant dashboard to add new items, modify pricing, update stock quantities, and manage featured banners.",
      "Order tracking & fulfillment: administrative pipeline to view incoming orders, inspect customer shipping details, and update dispatch status.",
      "Customer records database: secure customer registration, order histories, and merchant analytics on top-selling items.",
    ],
    gallery: [
      { src: trendsMain, alt: "TrendsStore customer e-commerce storefront" },
      { src: trendsAdmin, alt: "TrendsStore merchant administration panel" },
      { src: trendsProduct, alt: "TrendsStore detailed product page" },
      { src: trendsCheckout, alt: "TrendsStore multi-step checkout page" },
    ],
  },
  {
    id: "megatrix-portal",
    title: "MegaTrix Core Portal",
    category: "fullstack",
    shortDescription:
      "The central enterprise portal for the MegaTrix software ecosystem (megatrixai.com), built with TanStack Start, TanStack Router, Supabase real-time database, and dynamic analytics.",
    liveUrl: "https://megatrixai.com",
    githubUrl: "https://github.com/MegaTrix-Technologies/MegaTrix-General",
    role: "Founder & Lead Architect",
    featured: true,
    techStack: ["TanStack Start", "TanStack Router", "Supabase", "TypeScript", "Tailwind CSS", "Recharts", "Radix UI"],
    keyFeatures: [
      "Modern architecture: TanStack Start and TanStack Router provide end-to-end type safety and rapid SSR rendering.",
      "Real-time database: Supabase PostgreSQL backend with row-level security policies and real-time event subscriptions.",
      "Retro-gaming aesthetic: bespoke pixel-dot styling, glowing neon accents, and scanline overlays creating a memorable brand presence.",
      "Performance metrics: interactive charts and operational KPIs built with Recharts.",
    ],
  },
];
