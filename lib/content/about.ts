// lib/content/about.ts

export interface AboutSkills {
  languages: string[];
  frontend: string[];
  backend: string[];
  ai_data: string[];
  vector_search: string[];
  devops_tools: string[];
}

export interface AboutContact {
  email: string;
  phone: string;
  whatsapp: string;
  calendly: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface AboutContent {
  name: string;
  title: string;
  location: string;
  tagline: string;
  bio: string[];
  skills: AboutSkills;
  contact: AboutContact;
}

export const aboutContent: AboutContent = {
  name: "Muhammad Ahmed Javed",
  title: "AI Engineer & Full Stack Developer",
  location: "Pakistan",
  tagline: "I connect multi-agent AI systems to fast, production-ready web apps.",
  bio: [
    "I'm an AI engineer and full-stack developer from Pakistan, currently working toward a BS in Artificial Intelligence.",
    "I work where modern web development meets AI orchestration. I build multi-agent systems, wire up retrieval-augmented generation (RAG) pipelines, and write the APIs that connect clean Next.js front ends to LLM back ends.",
    "Most recently I completed Arbisoft's AI Remote Internship Program, going deep on agentic AI, the Model Context Protocol (MCP) and multi-tool orchestration. Before that I was an AI Developer Intern in Sybrid's Innovation Division, automating document processing and running local LLMs. I also spent 1.5 years as a graphic designer, which is where my eye for UI comes from.",
  ],
  skills: {
    languages: ["Python", "TypeScript"],
    frontend: ["Next.js (App Router)", "React.js", "Tailwind CSS"],
    backend: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic"],
    ai_data: ["LangChain", "LangGraph", "n8n"],
    vector_search: ["Pinecone", "ChromaDB"],
    devops_tools: ["Git/GitHub", "Docker", "Vercel", "Render", "Hostinger", "uv", "Claude Code CLI"],
  },
  contact: {
    email: "ahmedjaved.codes@gmail.com",
    phone: "+92 317 8433864",
    whatsapp: "https://wa.me/923178433864",
    calendly: "https://calendly.com/ahmedjaved-codes",
    github: "https://github.com/ahmedjavedcodes",
    linkedin: "https://www.linkedin.com/in/ahmed-javed-codes",
    instagram: "https://www.instagram.com/ahmedjavedcodes/",
  },
};
