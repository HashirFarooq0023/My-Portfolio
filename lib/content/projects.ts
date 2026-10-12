// lib/content/projects.ts

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
}

export const projects: Project[] = [
  // ==================== AI & AGENTIC PROJECTS ====================
  {
    id: "fleet-management-saas",
    title: "Autonomous Fleet Management SaaS",
    category: "ai",
    shortDescription:
      "An autonomous AI-driven Fleet Management SaaS using multi-LLM orchestration and vector search to automate vehicle triage and logistics.",
    liveUrl: "https://fleet-inky.vercel.app",
    githubUrl: "https://github.com/ahmedjavedcodes/fleet",
    role: "AI Engineer & Full Stack Developer",
    featured: true,
    techStack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "LangChain",
      "LangGraph",
      "Groq",
      "Pinecone",
    ],
    keyFeatures: [
      "Multi-Agent Orchestration: Built with LangGraph, LangChain, and the Jev model for intelligent routing and task delegation across specialized agents.",
      "Advanced RAG Pipeline: Implemented Hybrid RAG combining dense and semantic search, featuring re-rankers and an LLM-as-a-judge evaluation mechanism.",
      "Comprehensive AI Hooks: Engineered pre-hooks (input guardrails, semantic caching, RBAC chatbot, query normalization) and post-hooks (cache updaters, alert hooks, LLM evals) for robust pipeline security.",
      "Vision Integration: Developed custom tools/skills to parse images and route them to vision-capable LLMs for vehicle triage and diagnostics.",
      "Enterprise Fleet Logic: Solved 5 major fleet operational problems utilizing strict Role-Based Access Control (RBAC) supporting Admin, Fleet Manager, Driver, and Mechanic roles.",
    ],
  },
  {
    id: "specforge",
    title: "SpecForge",
    category: "ai",
    shortDescription:
      "A multi-agent MCP server powered by Groq that autonomously drafts feature plans and generates spec-driven documentation for seamless integration with AI coding assistants.",
    githubUrl: "https://github.com/ahmedjavedcodes/SpecForge",
    role: "AI Engineer",
    featured: true,
    techStack: ["Python", "Groq", "MCP (Model Context Protocol)", "Multi-Agent Systems"],
    keyFeatures: [
      "Multi-Agent MCP Server: Engineered a custom Model Context Protocol (MCP) server powered by Groq to orchestrate multiple sub-agents.",
      "Autonomous Planning: Automatically drafts detailed feature plans (plan.md) to streamline the development lifecycle.",
      "AI Assistant Integration: Generates spec-driven documentation specifically optimized for seamless integration with AI coding assistants like Claude Code.",
      "Python Tooling: Structured using modern Python project configuration with pyproject.toml.",
    ],
  },
  {
    id: "research-agent",
    title: "ReAct Research Agent",
    category: "ai",
    shortDescription:
      "A ReAct AI agent designed for complex research featuring SerpAPI web search, file-reading plugins, persistent memory, and execution hooks for multi-hop reasoning.",
    githubUrl: "https://github.com/ahmedjavedcodes/research-agent",
    role: "AI Engineer",
    featured: true,
    techStack: ["Python", "ReAct Framework", "SerpAPI", "Execution Hooks"],
    keyFeatures: [
      "ReAct Architecture: Engineered a reasoning and acting (ReAct) AI agent capable of multi-hop reasoning for complex research tasks.",
      "Web Search Integration: Implemented SerpAPI tools allowing the agent to perform live web searches to gather up-to-date information.",
      "Plugin & Memory System: Developed file-reading plugins and persistent memory mechanisms to maintain context across execution states.",
      "Interactive CLI: Built a command-line interface featuring both one-shot execution and an interactive REPL entrypoint.",
      "Testing & Validation: Ensured reliability with comprehensive test coverage spanning the parser, memory components, and tool executions.",
    ],
  },
  {
    id: "hydra-rag",
    title: "Hydra RAG",
    category: "ai",
    shortDescription:
      "A multi-modal RAG platform capable of ingesting, indexing, and querying diverse file formats including PDFs, Word documents, Excel sheets, and web URLs.",
    role: "AI Engineer & Full Stack Developer",
    featured: false,
    techStack: ["LangChain", "Pinecone", "Groq", "Python", "FastAPI", "Next.js"],
    keyFeatures: [
      "Multi-Format Document Parsing: Chat seamlessly with PDFs, Word documents (.docx), Excel spreadsheets (.xlsx), and live web URLs.",
      "LangChain RAG Pipeline: Implemented advanced retrieval-augmented generation pipelines for semantic search, context extraction, and precise answering.",
      "High-Performance Vector Indexing: Integrated Pinecone vector database for high-density embeddings and fast similarity retrieval.",
      "Ultra-Fast Inference: Utilized Groq LPU acceleration for real-time LLM query execution and low-latency responses.",
    ],
  },
  {
    id: "digisinc-chatbot",
    title: "Digisinc AI Assistant",
    category: "ai",
    liveUrl: "https://digisinc.systems/chat",
    shortDescription:
      "A RAG-based AI Assistant built for Digisinc Marketing Agency utilizing LangChain and Llama 3.1.",
    githubUrl: "https://github.com/ahmedjavedcodes/Digisinc-chatbot",
    role: "AI Engineer",
    featured: false,
    techStack: ["Python", "FastAPI", "LangChain", "Llama 3.1", "Pinecone", "Docker"],
    keyFeatures: [
      "Agency AI Assistant: Engineered a specialized RAG-based chatbot tailored for Digisinc Marketing Agency.",
      "Advanced Retrieval: Leveraged LangChain and Llama 3.1 to process and retrieve contextual business information accurately.",
      "Vector Storage: Integrated Pinecone as the vector database for efficient semantic search and data connectivity.",
      "Scalable Backend: Structured the core application using FastAPI for high-performance API endpoints.",
      "Production Ready: Containerized the application with Docker and configured a Procfile for smooth deployment.",
    ],
  },
  {
    id: "sybrid-md-automation",
    title: "Sybrid MD Automation",
    category: "ai",
    shortDescription:
      "An intelligent automation system designed to streamline the extraction and processing of unstructured medical documentation using OCR and Gemini LLM.",
    githubUrl: "https://github.com/ahmedjavedcodes/Sybrid-md-automation",
    role: "AI Engineer",
    featured: false,
    techStack: ["Python", "Gemini LLM", "OCR (Optical Character Recognition)", "LM Studio", "Selenium"],
    keyFeatures: [
      "Medical Document Processing: Built an intelligent extraction pipeline to transform complex healthcare records into structured, actionable data.",
      "Hybrid OCR & LLM Pipeline: Combined Optical Character Recognition with the Gemini LLM to parse unstructured medical files with high precision.",
      "Local LLM Testing: Integrated LM Studio testing scripts for privacy-conscious local model execution.",
      "Clean Modular Architecture: Organized processing workflows into dedicated services, utilities, and configuration modules for production scalability.",
    ],
  },

  // ==================== FULL STACK PROJECTS ====================
  {
    id: "the-bakers-inn",
    title: "The Baker's Inn (Full Stack Storefront)",
    category: "fullstack",
    shortDescription:
      "A full-stack e-commerce solution with a Next.js App Router storefront and a high-performance FastAPI backend with RBAC, PostgreSQL, and SQLAlchemy.",
    githubUrl: "https://github.com/ahmedjavedcodes/thebakersinn_frontend",
    role: "Full Stack Developer",
    featured: true,
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
    ],
    keyFeatures: [
      "Full-Stack E-Commerce Architecture: Built an end-to-end online storefront for a bakery brand, connecting a reactive Next.js client to a FastAPI backend.",
      "Robust Backend & RBAC: Engineered secure admin auth, role-based access control (RBAC), and catalog CRUD operations using SQLAlchemy ORM and Pydantic validation.",
      "Responsive Frontend: Built a modern UI with Next.js App Router, custom components, and production-ready unit test suites.",
    ],
  },
  {
    id: "eatddelight",
    title: "EatDDelight E-Commerce Platform",
    category: "fullstack",
    liveUrl: "https://eatddelight.com",
    shortDescription:
      "A modern, high-performance e-commerce platform for a homemade kitchen brand, featuring smooth navigation animations and custom backend APIs.",
    githubUrl: "https://github.com/ahmedjavedcodes/eatddelight_frontend",
    role: "Full Stack Developer",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Locomotive Scroll", "FastAPI", "PostgreSQL"],
    keyFeatures: [
      "Custom Storefront Experience: Engineered custom catalog browsing, cart functionality, checkout stubs, and polished scroll resets.",
      "Smooth UI & SEO: Leveraged Locomotive Scroll v4 for smooth animations and implemented a production-ready on-page SEO architecture.",
      "Scalable API Layer: Connected to an isolated FastAPI REST API handling public storefront catalogs, user auth, and cart state.",
    ],
  },
  {
    id: "fynrose",
    title: "Fynrose Brand Showcase Page",
    category: "frontend",
    liveUrl: "https:/fynrose.shop",
    shortDescription:
      "A responsive single-product showcase web application for a natural wellness and organic products brand.",
    githubUrl: "https://github.com/ahmedjavedcodes/fynrose",
    role: "Frontend Developer",
    featured: false,
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Smooth Scroll Context"],
    keyFeatures: [
      "Organic Vibe & Branding: Built a responsive, polished landing page featuring customized component layouts, brand asset integration, and clean typography.",
      "Interactive UI: Integrated smooth-scroll context handling and floating header navigation with custom opacity controls.",
      "Isolated Content Architecture: Implemented strict content/code separation storing all brand copy inside `lib/content`.",
    ],
  },
  {
    id: "recipe-web-app",
    title: "Recipe Discovery SPA",
    category: "fullstack",
    shortDescription:
      "A modern, client-side Single Page Application (SPA) that lets users search, detail, save, and create custom recipes.",
    githubUrl: "https://github.com/ahmedjavedcodes/Recipe-Web-App",
    role: "Frontend Developer",
    featured: false,
    techStack: ["Next.js (App Router)", "JavaScript / React Context", "Tailwind CSS", "TheMealDB API"],
    keyFeatures: [
      "TheMealDB API Integration: Real-time search and retrieval of recipe details and cooking instructions from external HTTP APIs.",
      "Custom Form Validation: Built client-side forms for creating custom user recipes with strict validation and local persistence.",
      "State & Testing: Managed global favorites using React Context and covered application components with unit test suites.",
    ],
  },
  {
    id: "digisinc-website",
    title: "Digisinc Agency Corporate Site",
    category: "frontend",
    liveUrl: "https:/digisinc.systems/",
    shortDescription:
      "A responsive, modern agency website built to showcase agency services, case studies, and client portfolios.",
    githubUrl: "https://github.com/ahmedjavedcodes/Digisinc-website",
    role: "Frontend Developer",
    featured: false,
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    keyFeatures: [
      "Service Showcase: Built responsive layouts highlighting corporate service offerings, client testimonials, and agency achievements.",
      "Canonical SEO Optimization: Implemented technical SEO best practices including meta tag headers and optimized canonical routing.",
    ],
  },
  {
    id: "hijab-store",
    title: "Hijab Gallery E-Commerce Storefront",
    category: "fullstack",
    shortDescription:
      "A custom e-commerce storefront engineered from the ground up to deliver a tailored digital shopping experience.",
    githubUrl: "https://github.com/ahmedjavedcodes/hijab-store",
    role: "Web Developer",
    featured: false,
    techStack: ["PHP", "WordPress", "HTML5 / CSS3", "JavaScript"],
    keyFeatures: [
      "Custom E-Commerce Layouts: Built catalog pages, product bundles, cart views, and checkout interfaces.",
      "Tailored Styling: Customized raw PHP/HTML code to deliver an interactive digital storefront.",
    ],
  },
];
