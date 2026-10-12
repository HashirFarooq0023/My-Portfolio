// lib/content/projects.ts
import type { ImageAsset } from "./types";

import fleet1 from "./images/projects/fleet/1.png";
import fleet2 from "./images/projects/fleet/2.png";
import fleet3 from "./images/projects/fleet/3.png";
import fleet4 from "./images/projects/fleet/4.png";
import bakersHome from "./images/projects/thebakersinn/home.png";
import bakersProducts from "./images/projects/thebakersinn/user-products.png";
import bakersCart from "./images/projects/thebakersinn/cart.png";
import bakersDashboard from "./images/projects/thebakersinn/owner dashboard.png";
import bakersCatalog from "./images/projects/thebakersinn/products.png";
import bakersCategories from "./images/projects/thebakersinn/categories.png";
import bakersTeam from "./images/projects/thebakersinn/team.png";
import eatHome from "./images/projects/eatddelight/home.png";
import eatMenu from "./images/projects/eatddelight/menu.png";
import eatCustom from "./images/projects/eatddelight/custom.png";
import eatCheckout from "./images/projects/eatddelight/checkout.png";
import eatAdmin from "./images/projects/eatddelight/admin.png";
import fyn1 from "./images/projects/fynrose/1.png";
import fyn2 from "./images/projects/fynrose/2.png";
import fyn3 from "./images/projects/fynrose/3.png";
import fyn4 from "./images/projects/fynrose/4.png";
import digi1 from "./images/projects/digisinc/1.png";
import digi2 from "./images/projects/digisinc/2.png";
import digi3 from "./images/projects/digisinc/3.png";
import digi4 from "./images/projects/digisinc/4.png";
import digi5 from "./images/projects/digisinc/5.png";
import recipe1 from "./images/projects/Recipe web app/1.png";
import recipe2 from "./images/projects/Recipe web app/2.png";
import recipe3 from "./images/projects/Recipe web app/3.png";
import hijabHome from "./images/projects/hijab store/home page.png";
import hijabCatalog from "./images/projects/hijab store/hijab page.png";
import hijabProduct from "./images/projects/hijab store/single paghe.png";
import hijabCart from "./images/projects/hijab store/cart.png";

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
  // ==================== AI & AGENTIC PROJECTS ====================
  {
    id: "fleet-management-saas",
    title: "Autonomous Fleet Management SaaS",
    category: "ai",
    shortDescription:
      "A fleet management SaaS where AI agents triage vehicles, answer questions about the fleet and keep logistics moving.",
    liveUrl: "https://fleet-inky.vercel.app",
    githubUrl: "https://github.com/ahmedjavedcodes/fleet",
    role: "AI Engineer & Full Stack Developer",
    featured: true,
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "SQLAlchemy", "LangChain", "LangGraph", "Groq", "Pinecone"],
    keyFeatures: [
      "Multi-agent orchestration: LangGraph and LangChain route each request to the right specialist agent.",
      "Hybrid RAG: dense and semantic search with re-rankers, scored by an LLM-as-a-judge.",
      "Safety hooks: input guardrails, semantic caching, query normalisation and role-aware chat before the model runs, with cache updates, alerts and evals after.",
      "Vision triage: drivers upload photos and vision-capable models help diagnose the vehicle.",
      "Real fleet roles: strict access control for admins, fleet managers, drivers and mechanics across five core operational problems.",
    ],
    gallery: [
      { src: fleet1, alt: "Fleet insights dashboard with a fuel cost trend chart and an Ask AI search bar" },
      { src: fleet2, alt: "Vehicle detail page showing maintenance overview, trip performance and a vehicle health score" },
      { src: fleet3, alt: "Document library where fleet files are uploaded and searched by the RAG pipeline" },
      { src: fleet4, alt: "AI assistant chat answering a question about fleet operations" },
    ],
  },
  {
    id: "specforge",
    title: "SpecForge",
    category: "ai",
    shortDescription:
      "A multi-agent MCP server on Groq that turns a feature idea into a plan and a spec your AI coding assistant can build from.",
    githubUrl: "https://github.com/ahmedjavedcodes/SpecForge",
    role: "AI Engineer",
    featured: true,
    techStack: ["Python", "Groq", "MCP (Model Context Protocol)", "Multi-Agent Systems"],
    keyFeatures: [
      "Multi-agent MCP server: a custom Model Context Protocol server on Groq that coordinates several sub-agents.",
      "Automatic planning: drafts a detailed plan.md for each feature before any code is written.",
      "Built for AI assistants: specs are shaped for tools like Claude Code, so they can pick up the work directly.",
      "Modern Python setup: packaged with pyproject.toml.",
    ],
  },
  {
    id: "research-agent",
    title: "ReAct Research Agent",
    category: "ai",
    shortDescription:
      "A ReAct agent for deep research, with live web search, file reading, memory and multi-hop reasoning.",
    githubUrl: "https://github.com/ahmedjavedcodes/research-agent",
    role: "AI Engineer",
    featured: true,
    techStack: ["Python", "ReAct Framework", "SerpAPI", "Execution Hooks"],
    keyFeatures: [
      "ReAct loop: the agent reasons, acts and checks its work across several hops.",
      "Live web search: SerpAPI tools pull in fresh information as it researches.",
      "Plugins and memory: file-reading plugins and persistent memory keep context between steps.",
      "CLI: run it once from the command line or chat with it in an interactive REPL.",
      "Tested: coverage across the parser, memory and tool execution.",
    ],
  },
  {
    id: "hydra-rag",
    title: "Hydra RAG",
    category: "ai",
    shortDescription:
      "Chat with your PDFs, Word files, spreadsheets and web pages in one place, with fast answers grounded in your own documents.",
    role: "AI Engineer & Full Stack Developer",
    featured: false,
    techStack: ["LangChain", "Pinecone", "Groq", "Python", "FastAPI", "Next.js"],
    keyFeatures: [
      "Any format: PDFs, Word documents (.docx), Excel spreadsheets (.xlsx) and live URLs.",
      "LangChain RAG: semantic search and context extraction for precise answers.",
      "Pinecone index: dense embeddings with fast similarity search.",
      "Groq inference: low-latency responses on LPU hardware.",
    ],
  },
  {
    id: "digisinc-chatbot",
    title: "Digisinc AI Assistant",
    category: "ai",
    liveUrl: "https://digisinc.systems/chat",
    shortDescription:
      "A RAG assistant for Digisinc Marketing Agency that answers client questions with LangChain and Llama 3.1.",
    githubUrl: "https://github.com/ahmedjavedcodes/Digisinc-chatbot",
    role: "AI Engineer",
    featured: false,
    techStack: ["Python", "FastAPI", "LangChain", "Llama 3.1", "Pinecone", "Docker"],
    keyFeatures: [
      "Agency assistant: a RAG chatbot built around Digisinc's own services and content.",
      "Accurate retrieval: LangChain and Llama 3.1 pull the right business context for each question.",
      "Vector storage: Pinecone for fast semantic search.",
      "FastAPI back end: quick, simple API endpoints.",
      "Ready to ship: containerised with Docker, with a Procfile for deployment.",
    ],
  },
  {
    id: "sybrid-md-automation",
    title: "Sybrid MD Automation",
    category: "ai",
    shortDescription:
      "Turns messy medical documents into clean, structured data using OCR and the Gemini LLM.",
    githubUrl: "https://github.com/ahmedjavedcodes/Sybrid-md-automation",
    role: "AI Engineer",
    featured: false,
    techStack: ["Python", "Gemini LLM", "OCR (Optical Character Recognition)", "LM Studio", "Selenium"],
    keyFeatures: [
      "Medical records to data: extracts structured, usable fields from complex healthcare files.",
      "OCR plus LLM: optical character recognition feeds Gemini for precise parsing.",
      "Local models: LM Studio scripts for privacy-friendly testing on local LLMs.",
      "Modular code: services, utilities and config kept separate so it scales cleanly.",
    ],
  },

  // ==================== FULL STACK PROJECTS ====================
  {
    id: "the-bakers-inn",
    title: "The Baker's Inn",
    category: "fullstack",
    shortDescription:
      "A full-stack bakery storefront with a Next.js shop, a FastAPI back end and an owner dashboard for products, categories and staff.",
    githubUrl: "https://github.com/ahmedjavedcodes/thebakersinn_frontend",
    role: "Full Stack Developer",
    featured: true,
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic"],
    keyFeatures: [
      "End-to-end store: a Next.js shop talking to a FastAPI back end.",
      "Owner tools: secure admin login, role-based access and full catalog management with SQLAlchemy and Pydantic.",
      "Polished front end: App Router, custom components and unit tests.",
    ],
    gallery: [
      { src: bakersHome, alt: "The Baker's Inn home page with product categories and featured cakes" },
      { src: bakersProducts, alt: "All products page with category filters and search" },
      { src: bakersCart, alt: "Cart page with order summary and invoice ready to send" },
      { src: bakersDashboard, alt: "Owner dashboard linking to categories, products and team" },
      { src: bakersCatalog, alt: "Admin product list with edit and remove actions" },
      { src: bakersCategories, alt: "Admin categories page for creating and ordering product categories" },
      { src: bakersTeam, alt: "Team page for inviting staff and managing access" },
    ],
  },
  {
    id: "eatddelight",
    title: "EatDDelight",
    category: "fullstack",
    liveUrl: "https://eatddelight.com",
    shortDescription:
      "An online store for a homemade kitchen brand, with a daily specials menu, custom orders, smooth animations and its own API.",
    githubUrl: "https://github.com/ahmedjavedcodes/eatddelight_frontend",
    role: "Full Stack Developer",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Locomotive Scroll", "FastAPI", "PostgreSQL"],
    keyFeatures: [
      "Custom storefront: catalog browsing, cart, checkout flow and tidy scroll handling.",
      "Smooth and searchable: Locomotive Scroll animations and solid on-page SEO.",
      "Own API: a separate FastAPI service for the catalog, accounts and cart.",
    ],
    gallery: [
      { src: eatHome, alt: "EatDDelight home page with today's special and home-kitchen story" },
      { src: eatMenu, alt: "A la carte menu with category filters" },
      { src: eatCustom, alt: "Custom orders page with a three-step meal plan form" },
      { src: eatCheckout, alt: "Checkout page with order summary and WhatsApp ordering" },
      { src: eatAdmin, alt: "Admin panel for creating products" },
    ],
  },
  {
    id: "fynrose",
    title: "Fynrose",
    category: "frontend",
    liveUrl: "https://fynrose.shop",
    shortDescription:
      "A single-product showcase for a natural wellness brand, built to feel as calm and organic as the product.",
    githubUrl: "https://github.com/ahmedjavedcodes/fynrose",
    role: "Frontend Developer",
    featured: false,
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Smooth Scroll Context"],
    keyFeatures: [
      "On-brand design: custom layouts, brand assets and clean typography.",
      "Smooth interactions: smooth-scroll handling and a floating header that fades with scroll.",
      "Easy to edit: all brand copy lives in lib/content, separate from the code.",
    ],
    gallery: [
      { src: fyn1, alt: "Fynrose hero section for the Herbal Skin Detox product" },
      { src: fyn2, alt: "Ingredients section listing each herb and its benefit" },
      { src: fyn3, alt: "Benefits section explaining how the product supports skin health" },
      { src: fyn4, alt: "Customer reviews section" },
    ],
  },
  {
    id: "recipe-web-app",
    title: "Recipe Discovery SPA",
    category: "fullstack",
    shortDescription:
      "A single-page app to search recipes, save favourites and create your own.",
    githubUrl: "https://github.com/ahmedjavedcodes/Recipe-Web-App",
    role: "Frontend Developer",
    featured: false,
    techStack: ["Next.js (App Router)", "JavaScript / React Context", "Tailwind CSS", "TheMealDB API"],
    keyFeatures: [
      "TheMealDB API: live recipe search with full details and instructions.",
      "Your own recipes: client-side forms with strict validation and local saving.",
      "State and tests: favourites in React Context, with unit tests on the components.",
    ],
    gallery: [
      { src: recipe3, alt: "Recipe Box search page with a grid of seafood recipes" },
      { src: recipe1, alt: "Recipe detail page with ingredients at a glance" },
      { src: recipe2, alt: "Add a recipe form with name, category, image and ingredients" },
    ],
  },
  {
    id: "digisinc-website",
    title: "Digisinc Agency Website",
    category: "frontend",
    liveUrl: "https://digisinc.systems/",
    shortDescription:
      "A bold agency site that shows off Digisinc's services, past work and pricing.",
    githubUrl: "https://github.com/ahmedjavedcodes/Digisinc-website",
    role: "Frontend Developer",
    featured: false,
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    keyFeatures: [
      "Service showcase: responsive layouts for services, testimonials and results.",
      "SEO basics done right: meta tags and clean canonical URLs.",
    ],
    gallery: [
      { src: digi1, alt: "Digisinc home page hero: The Performance Driven Agency" },
      { src: digi2, alt: "Projects section showing web and app case studies" },
      { src: digi3, alt: "Graphic design portfolio grid" },
      { src: digi4, alt: "Pricing tiers for landing pages, websites and web apps" },
      { src: digi5, alt: "Ask about Digisinc AI chat prompt" },
    ],
  },
  {
    id: "hijab-store",
    title: "Hijab Gallery Storefront",
    category: "fullstack",
    shortDescription:
      "A custom e-commerce store built from scratch for a hijab brand.",
    githubUrl: "https://github.com/ahmedjavedcodes/hijab-store",
    role: "Web Developer",
    featured: false,
    techStack: ["PHP", "WordPress", "HTML5 / CSS3", "JavaScript"],
    keyFeatures: [
      "Custom shop layouts: catalog pages, product bundles, cart and checkout.",
      "Hand-tuned styling: custom PHP and HTML for an interactive storefront.",
    ],
    gallery: [
      { src: hijabHome, alt: "Hijab Gallery home page with a campaign banner and models" },
      { src: hijabCatalog, alt: "Hijabs catalog with fabric filters and price range" },
      { src: hijabProduct, alt: "Single product page for a black georgette hijab" },
      { src: hijabCart, alt: "Shopping cart with order summary" },
    ],
  },
];
