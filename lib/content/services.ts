import type { ProcessContent, ServicesContent } from "./types";

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
      name: "AI Agents & Automation",
      outcome: "Agents and workflows that read your documents, use your tools and take repetitive work off your team's plate.",
      deliverables: [
        "Agent and workflow design, mapped to how your team works",
        "RAG over your documents and data",
        "n8n automations wired into the tools you already use",
        "Guardrails, evals and monitoring",
      ],
      timeline: "3-4 weeks",
      stack: "LangGraph, n8n, Pinecone, FastAPI",
    },
    {
      id: "ai-product",
      name: "AI Product",
      outcome: "A focused AI product or feature, taken from first prototype to something real users rely on.",
      deliverables: [
        "Scoping against your real data and users",
        "LLM pipeline with caching and fallbacks",
        "A clean Next.js interface",
        "Cost and latency tuning",
      ],
      timeline: "2-3 weeks",
      stack: "LangChain, LangGraph, FastAPI, Next.js",
    },
    {
      id: "full-stack",
      name: "Full Stack Application",
      outcome: "Production-grade web apps with real back ends, from database to deployment.",
      deliverables: [
        "Data model, API and role-based auth",
        "Responsive Next.js front end",
        "Tests, CI and deployment",
        "Weekly releases you can click through",
      ],
      timeline: "2-4 weeks",
      stack: "Next.js, TypeScript, FastAPI, PostgreSQL",
    },
    {
      id: "storefronts",
      name: "Web Storefronts and Landing Pages",
      outcome: "Fast, good-looking storefronts and landing pages that turn visitors into customers.",
      deliverables: [
        "Custom design, not a template",
        "Product catalog, cart and checkout where needed",
        "On-page SEO and analytics",
        "Copy you can edit yourself",
      ],
      timeline: "1-2 weeks",
      stack: "Next.js",
    },
  ],
} as const satisfies ServicesContent;

export const howWeWork = {
  index: "05",
  label: "Work",
  headline: { serif: "How we'll work together.", sans: "Four steps. No surprises." },
  steps: [
    { title: "Call", when: "Day 1", body: "A free 30-minute call to understand the problem and what a win looks like." },
    { title: "Proposal", when: "Within 2 days", body: "A clear scope, timeline and fixed price. No vague estimates." },
    { title: "Build", when: "Weekly", body: "A new release every week that you can click through, with short progress notes." },
    { title: "Launch", when: "Handover", body: "Deployment, documentation and a walkthrough so your team owns it." },
  ],
} as const satisfies ProcessContent;
