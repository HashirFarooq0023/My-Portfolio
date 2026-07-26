import React, { useState, useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Cpu, 
  LineChart, 
  ShoppingBag, 
  Truck, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Globe, 
  Check, 
  X, 
  Sparkles,
  Maximize2,
  Terminal,
  ArrowUpRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  metrics: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  icon: React.ReactNode;
  featured: boolean;
  coverImage: string;
  gallery: string[];
  highlights?: string[];
  architecture?: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [codeTab, setCodeTab] = useState<'python' | 'mern'>('python');

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeTab(prev => prev === 'python' ? 'mern' : 'python');
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hashir.dev.ai@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const projects: Project[] = [
    {
      id: "asanshipping",
      title: "AsanShipping.com",
      category: "Multi-Tenant SaaS & Logistics",
      description: "An advanced fulfillment platform built for Pakistani e-commerce merchants to automate courier selection, prevent Cash-on-Delivery fraud via IVR verification, and streamline reverse logistics scrap ledgers.",
      detailedDescription: "AsanShipping is an enterprise-grade multi-tenant SaaS logistics intelligence portal designed to solve the critical Cash-on-Delivery (COD) failure rates in Pakistani e-commerce. By automating courier selection based on historical delivery rates and running automated IVR voice verification calls before dispatch, it reduces returned parcels by up to 35%.",
      metrics: ["Shopify Webhooks", "Redis BullMQ", "FastAPI AI Engine"],
      tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Truck className="w-7 h-7 text-cyan-400" />,
      featured: true,
      coverImage: "/Image/AsanShipping/DASHB OARD.png",
      gallery: [
        "/Image/AsanShipping/DASHB OARD.png",
        "/Image/AsanShipping/dashboard.png",
        "/Image/AsanShipping/inventoryu.png",
        "/Image/AsanShipping/manual order.png",
        "/Image/AsanShipping/SETTINGS.png",
        "/Image/AsanShipping/Screenshot 2026-07-26 173625.png"
      ],
      highlights: [
        "Automated IVR call engine for instant Cash-on-Delivery (COD) order confirmation",
        "Real-time courier price & delivery reliability scoring algorithm",
        "Shopify & WooCommerce webhooks for automatic order ingestion & status sync",
        "Reverse logistics scrap ledger to track damaged or returned inventory"
      ],
      architecture: [
        "Frontend: React with TypeScript & Tailwind CSS",
        "Backend: Node.js/Express REST APIs with BullMQ worker queues",
        "AI Engine: Python FastAPI microservice for courier probability scoring",
        "Database: MongoDB with custom indexing for multi-tenant isolation"
      ]
    },
    {
      id: "talentvector",
      title: "Talent Vector (HR-Helper)",
      category: "AI Resume Screening & NLP",
      description: "A production-grade system that automates top-of-funnel corporate recruitment using Multinomial Naive Bayes classification, TF-IDF vector corpus weighting, and custom Levenshtein distance string optimization.",
      detailedDescription: "Talent Vector processes large volumes of candidate resumes in sub-second speeds. It calculates relevance weights using TF-IDF vectorization, classifies skill suitability with Multinomial Naive Bayes, and utilizes fuzzy Levenshtein string matching to parse candidate names, skills, and past job titles accurately.",
      metrics: ["<3ms Match Speed", "962 Corpus Records", "Resend API Integration"],
      tech: ["Python", "FastAPI", "Scikit-Learn", "React", "TailwindCSS", "MongoDB"],
      liveUrl: "https://talentvector-xi.vercel.app/",
      githubUrl: "https://github.com/HashirFarooq0023/Talentvector",
      icon: <Cpu className="w-7 h-7 text-purple-400" />,
      featured: true,
      coverImage: "/Image/TalentVector/Screenshot 2026-07-25 231427.png",
      gallery: [
        "/Image/TalentVector/Screenshot 2026-07-25 231427.png"
      ],
      highlights: [
        "Sub-3ms match speed per candidate using pre-tokenized TF-IDF matrix representation",
        "Custom Levenshtein distance matching for typo-tolerant skill parsing",
        "Multinomial Naive Bayes classification model trained on 962 annotated corpus records",
        "Automated candidate interview invitation workflow integrated with Resend API"
      ],
      architecture: [
        "ML Pipeline: Scikit-Learn, NLTK, NumPy, FastAPI backend API",
        "Frontend: Vite React with interactive matching score analytics",
        "Database: MongoDB for candidate profile and parsing history storage"
      ]
    },
    {
      id: "psxoracle",
      title: "PSX Quantitative & AI Oracle",
      category: "Financial Intelligence & ML",
      description: "A sophisticated data analytics engine that ingests historical Pakistan Stock Exchange equities data, computes statistical tendencies and OLS linear regressions, and powers predictive yield models.",
      detailedDescription: "The PSX Quantitative Oracle is a financial analytics framework for equity markets. It streams raw trade data, computes Ordinary Least Squares (OLS) BLUE regressions, calculates beta indicators, and presents predictive yield insights through interactive charts.",
      metrics: ["OLS Regression (BLUE)", "Dual-Cache Pipeline", "Interactive Recharts"],
      tech: ["Python", "FastAPI", "NumPy", "Pandas", "Statsmodels", "Vite React"],
      liveUrl: "https://prob-project.vercel.app/",
      githubUrl: "https://github.com/HashirFarooq0023",
      icon: <LineChart className="w-7 h-7 text-emerald-400" />,
      featured: true,
      coverImage: "/Image/PPSM/main 1.png",
      gallery: [
        "/Image/PPSM/main 1.png",
        "/Image/PPSM/chart.png",
        "/Image/PPSM/ai-img1.png",
        "/Image/PPSM/ai-img 2.png",
        "/Image/PPSM/ai-img 3.png",
        "/Image/PPSM/portfolio .png"
      ],
      highlights: [
        "Ordinary Least Squares (OLS) linear regression modeling for stock movement forecasting",
        "Dual-layer caching pipeline (In-Memory + File DB) for fast historical data queries",
        "Interactive quantitative risk metrics dashboard using Recharts and React",
        "Statistical central tendency and dispersion metrics calculation engine"
      ],
      architecture: [
        "Backend: Python FastAPI microservice utilizing Pandas, NumPy, and Statsmodels",
        "Frontend: Vite + React with dynamic financial charting",
        "Caching: In-memory LRU cache with compressed disk snapshot fallback"
      ]
    },
    {
      id: "aesthetic-ecom",
      title: "Aesthetic MERN E-Commerce",
      category: "Full-Stack Web Application",
      description: "A sleek, high-performance e-commerce platform featuring an aesthetic theme layout, real-time cart management, multi-address checkout logic, and a secure role-based admin inventory control portal.",
      detailedDescription: "A full-featured MERN e-commerce application designed for high conversion and responsive user experience. Includes end-to-end admin portal for inventory management, order tracking, dynamic product filters, and secure authentication.",
      metrics: ["Secure Admin CRUD", "Dynamic Filtering", "Persistent User State"],
      tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
      liveUrl: "https://www.trendsstorepk.com/",
      githubUrl: "https://github.com/HashirFarooq0023/E-com-Theme-2",
      icon: <ShoppingBag className="w-7 h-7 text-pink-400" />,
      featured: false,
      coverImage: "/Image/trendsstore/ecom main.png",
      gallery: [
        "/Image/trendsstore/ecom main.png",
        "/Image/trendsstore/admin portal .png",
        "/Image/trendsstore/collection veiw.png",
        "/Image/trendsstore/product page.png",
        "/Image/trendsstore/cehckoutpage .png"
      ],
      highlights: [
        "Protected admin dashboard with complete CRUD for product inventory & category management",
        "Optimized cart state persistence with instant local state updates",
        "Multi-address delivery management & streamlined checkout portal",
        "Dynamic multi-attribute product filtering by category, price, and availability"
      ],
      architecture: [
        "Frontend: Next.js / React with Tailwind CSS styling",
        "Backend: Node.js & Express.js with JWT authentication",
        "Database: MongoDB Mongoose with optimized indexing for product search"
      ]
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-100 font-sans relative">
      {/* Digital Grid & Ambient Glow Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-1/3 w-[28rem] h-[28rem] bg-emerald-500/10 rounded-full blur-[140px]"></div>
      </div>

      {/* Floating Glass Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-bold text-lg tracking-tight group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-500 flex items-center justify-center text-slate-950 font-extrabold text-sm group-hover:scale-105 transition-transform">
              HF
            </div>
            <span className="text-slate-100 group-hover:text-cyan-400 transition-colors tracking-tight">Hashir Farooq</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Competencies</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/HashirFarooq0023" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/10"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Enhanced Hero Section with Animated Code Focus */}
        <header className="grid lg:grid-cols-12 gap-12 mb-24 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-sm font-medium mb-8 shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              Full-Stack & AI Solutions Engineer
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              Hashir <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Farooq</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-10 font-light">
              I build high-performance web applications, custom SaaS MVPs, and intelligent data pipelines using the 
              <span className="text-slate-200 font-semibold"> MERN/Next.js stack</span> and <span className="text-slate-200 font-semibold">Python AI/ML integrations</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-950/30 text-lg flex items-center gap-2">
                View Projects
              </a>
              <a href="https://github.com/HashirFarooq0023" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 font-semibold hover:bg-slate-800 transition-all flex items-center gap-2.5 text-lg">
                <Github className="w-6 h-6" /> GitHub
              </a>
              <button 
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all flex items-center gap-2 font-medium"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" /> Copied!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 text-cyan-400" /> Copy Email
                  </>
                )}
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-slate-400 text-sm">
              <a href="mailto:hashir.dev.ai@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" /> hashir.dev.ai@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/hashir-farooq-615aa122a/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-purple-400" /> LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Column: Animated Code Display (Matrix / IDE Style) */}
          <div className="lg:col-span-5 relative group hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-6 font-mono text-xs sm:text-sm leading-relaxed shadow-2xl overflow-hidden">
              
              {/* Code Window Header / Tabs */}
              <div className="flex items-center justify-between mb-5 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                
                <div className="flex items-center gap-2 text-xs">
                  <button 
                    onClick={() => setCodeTab('python')}
                    className={`px-3 py-1 rounded-md transition-colors ${codeTab === 'python' ? 'bg-purple-950 text-purple-300 border border-purple-800/60' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    ai_engine.py
                  </button>
                  <button 
                    onClick={() => setCodeTab('mern')}
                    className={`px-3 py-1 rounded-md transition-colors ${codeTab === 'mern' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    server.ts
                  </button>
                </div>
              </div>
              
              {/* Animated Code Tab 1: Python / FastAPI */}
              {codeTab === 'python' ? (
                <div className="space-y-2.5 text-slate-300 animate-fadeIn">
                  <div>
                    <span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI, HTTPException
                  </div>
                  <div>
                    <span className="text-purple-400">from</span> sklearn.feature_extraction.text <span className="text-purple-400">import</span> TfidfVectorizer
                  </div>
                  <div className="pt-1">
                    <span className="text-cyan-400">app</span> = FastAPI(<span className="text-yellow-300">title</span>=<span className="text-green-300">"AI_Logistics_Engine"</span>)
                  </div>
                  <div className="text-slate-500 py-0.5"># Handles multi-tenant fraud detection & courier routing</div>
                  <div>
                    <span className="text-purple-400">@app</span>.post(<span className="text-green-300">"/optimize_carrier"</span>)
                  </div>
                  <div>
                    <span className="text-purple-400">async def</span> <span className="text-yellow-300">calculate_best_carrier</span>(<span className="text-cyan-400">order</span>: <span className="text-cyan-300">OrderSchema</span>):
                  </div>
                  <div className="pl-4 text-slate-500">
                    # 1. Run automated phone IVR fraud verification
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">if await</span> check_blacklisted(<span className="text-cyan-400">order</span>.<span className="text-cyan-300">phone</span>):
                  </div>
                  <div className="pl-8">
                    <span className="text-purple-400">raise</span> HTTPException(status_code=400)
                  </div>
                  <div className="pl-4 pt-1">
                    score = vectorizer.transform([<span className="text-cyan-400">order</span>.<span className="text-cyan-300">address</span>])
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> &#123;<span className="text-green-300">"carrier"</span>: <span className="text-green-300">"TCS_Express"</span>, <span className="text-green-300">"risk"</span>: <span className="text-green-300">"LOW"</span>&#125;
                  </div>
                  <div className="pt-2 text-purple-400 animate-pulse font-bold">▶ Executing Fast-API microservice &lt;3ms</div>
                </div>
              ) : (
                /* Animated Code Tab 2: TypeScript / Node / MERN */
                <div className="space-y-2.5 text-slate-300 animate-fadeIn">
                  <div>
                    <span className="text-cyan-400">import</span> express <span className="text-cyan-400">from</span> <span className="text-green-300">'express'</span>;
                  </div>
                  <div>
                    <span className="text-cyan-400">import</span> &#123; Queue &#125; <span className="text-cyan-400">from</span> <span className="text-green-300">'bullmq'</span>;
                  </div>
                  <div className="pt-1">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">fulfillmentQueue</span> = <span className="text-cyan-400">new</span> Queue(<span className="text-green-300">'shipping'</span>, &#123; redis &#125;);
                  </div>
                  <div className="text-slate-500 py-0.5">// Ingest Shopify webhooks in real-time</div>
                  <div>
                    app.<span className="text-yellow-300">post</span>(<span className="text-green-300">'/webhooks/shopify'</span>, <span className="text-purple-400">async</span> (req, res) =&gt; &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">const</span> &#123; orderId, customer &#125; = req.body;
                  </div>
                  <div className="pl-4">
                    <span className="text-cyan-400">await</span> fulfillmentQueue.<span className="text-yellow-300">add</span>(<span className="text-green-300">'dispatch'</span>, &#123; orderId &#125;);
                  </div>
                  <div className="pl-4">
                    res.<span className="text-yellow-300">status</span>(200).<span className="text-yellow-300">json</span>(&#123; success: <span className="text-purple-400">true</span> &#125;);
                  </div>
                  <div>&#125;);</div>
                  <div className="pt-2 text-cyan-400 animate-pulse font-bold">✓ BullMQ worker listening on port 5000</div>
                </div>
              )}

            </div>
          </div>
        </header>

        {/* Projects Section - Bento Grid Style */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Code2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Engineering Showcase</h2>
              <p className="text-slate-400 text-sm mt-0.5">High-impact SaaS platforms, AI resume screeners, and quantitative engines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(240px,auto)]">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative rounded-3xl bg-slate-900/60 border border-slate-800/80 p-8 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/5 ${project.featured ? 'md:col-span-3' : 'md:col-span-3 lg:col-span-3'}`}
              >
                {/* Project Screenshot Banner */}
                <div 
                  className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-3xl bg-slate-950 cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <img 
                    src={project.coverImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                      className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-cyan-400 border border-slate-700 backdrop-blur-sm transition-colors"
                      title="View Screenshot & Architecture"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/50 shadow-inner">
                      {project.icon}
                    </div>
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors flex items-center gap-1"
                    >
                      Details <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Metrics Badges */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.metrics.map((metric, mIdx) => (
                      <span key={mIdx} className="text-xs px-3 py-1.5 rounded-lg bg-cyan-950/50 text-cyan-300 border border-cyan-800/70 font-medium">
                        ✨ {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6 pt-6 border-t border-slate-800/70">
                    {project.liveUrl !== "#" ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-2 transition-colors">
                        <ExternalLink className="w-5 h-5" /> Live Demo
                      </a>
                    ) : (
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Internal SaaS
                      </span>
                    )}
                    {project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
                        <Github className="w-5 h-5" /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise Summary */}
        <section id="skills" className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 p-10 lg:p-12 mb-24 shadow-xl scroll-mt-24">
          <h3 className="text-3xl font-bold mb-10 tracking-tight flex items-center gap-3">
            <Terminal className="w-8 h-8 text-purple-400" />
            Full-Stack & AI Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-base">
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 transition-colors">
              <h4 className="font-semibold text-cyan-400 mb-3 text-lg">Frontend Web</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Next.js (App Router), React.js, TypeScript, Vite, TailwindCSS, TanStack Query, Zustand</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-purple-500/40 transition-colors">
              <h4 className="font-semibold text-purple-400 mb-3 text-lg">Backend & APIs</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Node.js, Express.js, Python (FastAPI/Flask), RESTful architectures, JWT Authentication</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-emerald-500/40 transition-colors">
              <h4 className="font-semibold text-emerald-400 mb-3 text-lg">Data & Databases</h4>
              <p className="text-slate-400 text-sm leading-relaxed">MongoDB (Mongoose), NoSQL Data Modeling, Indexing, Automated Scraping Pipelines</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-pink-500/40 transition-colors">
              <h4 className="font-semibold text-pink-400 mb-3 text-lg">AI & ML Integration</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Python (Scikit-Learn, Pandas, NumPy), NLP Classifiers, Predictive OLS Regression Models, OCR</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight mb-3">Let's Connect & Build</h2>
            <p className="text-slate-400">Whether you need full-stack architecture, custom AI automation, or technical collaboration—feel free to reach out.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="mailto:hashir.dev.ai@gmail.com" 
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all text-left group"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-slate-400 mb-1">Email</h4>
              <p className="text-slate-100 font-medium truncate text-sm">hashir.dev.ai@gmail.com</p>
            </a>

            <a 
              href="tel:+923081505859" 
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-all text-left group"
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-slate-400 mb-1">Phone / WhatsApp</h4>
              <p className="text-slate-100 font-medium text-sm">+92 308 1505859</p>
            </a>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-left group">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-slate-400 mb-1">Location</h4>
              <p className="text-slate-100 font-medium text-sm">Lahore, Pakistan</p>
            </div>

            <a 
              href="https://github.com/HashirFarooq0023" 
              target="_blank" 
              rel="noreferrer" 
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-pink-500/50 transition-all text-left group"
            >
              <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-slate-400 mb-1">GitHub</h4>
              <p className="text-slate-100 font-medium text-sm">@HashirFarooq0023</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 pt-10 border-t border-slate-800">
          <p>© {new Date().getFullYear()} Hashir Farooq. Built with Next.js & Tailwind CSS. Specializing in end-to-end software solutions.</p>
        </footer>

      </div>

      {/* Interactive Project Details & Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                {selectedProject.icon}
              </div>
              <div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Main Screenshot Viewer */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative group">
              <img 
                src={selectedProject.gallery[activeImageIndex] || selectedProject.coverImage} 
                alt={`${selectedProject.title} screenshot`}
                className="w-full h-[320px] object-cover object-top"
              />
            </div>

            {/* Thumbnail Carousel */}
            {selectedProject.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
                {selectedProject.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-cyan-400 opacity-100 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.detailedDescription || selectedProject.description}
            </p>

            {/* Architecture / Key Highlights */}
            {selectedProject.highlights && (
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Architectural Features</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.architecture && (
              <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technical Breakdown</h4>
                <ul className="space-y-1 font-mono text-xs text-slate-300">
                  {selectedProject.architecture.map((arch, i) => (
                    <li key={i} className="text-slate-400">
                      • {arch}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-800">
              {selectedProject.githubUrl !== "#" && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-slate-100 text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" /> View Code
                </a>
              )}
              {selectedProject.liveUrl !== "#" && (
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-sm font-semibold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Launch App
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
