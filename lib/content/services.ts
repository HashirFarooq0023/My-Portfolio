import type { ServicesContent } from "./types";

export const services = {
  index: "02",
  label: "Services",
  headline: { serif: "What I can build for you.", sans: "Four ways to work together." },
  deliverablesLabel: "What you get",
  timelineLabel: "Typical timeline",
  stackLabel: "Stack",
  items: [
    {
      id: "ai-agents",
      name: "AI agents & automation",
      outcome: "Agents that read your documents and tools (RAG, MCP) and do the repetitive work.",
      deliverables: [
        "Multi-agent workflow design and orchestration",
        "RAG pipeline over your documents and data",
        "Guardrails, evals and monitoring",
        "Deployment and handover docs",
      ],
      timeline: "3–6 weeks",
      stack: "LangGraph, LangChain, Pinecone, FastAPI",
    },
    {
      id: "ai-features",
      name: "AI features in your product",
      outcome: "Chat, search, summarisation and classification added to an existing app.",
      deliverables: [
        "Feature scoping against your real data",
        "LLM integration with caching and fallbacks",
        "UI for chat, search or insights",
        "Cost and latency tuning",
      ],
      timeline: "2–4 weeks",
      stack: "Groq, LlamaIndex, Next.js, PostgreSQL",
    },
    {
      id: "full-stack",
      name: "Full-stack web applications",
      outcome: "Production Next.js and TypeScript apps, from database to deployment.",
      deliverables: [
        "Data model, API and auth with roles",
        "Responsive Next.js front end",
        "Tests, CI and deployment",
        "Weekly releases you can try",
      ],
      timeline: "4–10 weeks",
      stack: "Next.js, TypeScript, FastAPI, PostgreSQL",
    },
    {
      id: "websites",
      name: "Business websites & storefronts",
      outcome: "Fast Next.js and Tailwind sites for restaurants, bakeries, salons, agencies and shops.",
      deliverables: [
        "Custom design, not a template",
        "Catalog, cart and checkout where needed",
        "On-page SEO and analytics",
        "Content you can edit",
      ],
      timeline: "1–3 weeks",
      stack: "Next.js, Tailwind CSS, Vercel",
    },
  ],
  processTitle: "How we'll work",
  process: [
    { title: "Call", body: "A free 30-minute call to understand the problem and what success looks like." },
    { title: "Proposal", body: "A clear scope, timeline and fixed price within two days." },
    { title: "Build", body: "Weekly releases you can click through, with progress notes." },
    { title: "Launch", body: "Deployment, documentation and a handover session." },
  ],
} as const satisfies ServicesContent;
