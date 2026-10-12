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
  tagline:
    "Bridging the gap between intelligent multi-agent systems and high-performance web applications.",
  bio: [
    "I am an AI Engineer and Full Stack Developer based in Pakistan, currently pursuing a Bachelor of Science in Artificial Intelligence.",
    "My expertise lies at the intersection of modern full-stack web development and advanced AI orchestration. I specialize in building autonomous multi-agent systems, integrating complex Retrieval-Augmented Generation (RAG) pipelines, and developing robust APIs that connect seamless Next.js interfaces with powerful LLM backends.",
    "Recently, I completed an intensive AI Remote Internship Program at Arbisoft, where I mastered agentic AI primitives, Model Context Protocol (MCP), and multi-tool orchestration. Previously, I served as an AI Developer Intern at Sybrid's Innovation Division, focusing on automated document processing and local LLM execution, and spent 1.5 years as a Graphic Designer refining my UI/UX and visual design sensibilities.",
    "Beyond software architecture, I actively handle business development and client acquisition for custom agency projects. When I step away from my IDE, I'm usually playing a four-finger claw setup on PUBG Mobile or spending time with my Siamese cat.",
  ],
  skills: {
    languages: ["Python", "TypeScript"],
    frontend: ["Next.js (App Router)", "React.js", "Tailwind CSS",],
    backend: ["FastAPI", "Node.js", "PostgreSQL", "SQLAlchemy", "Alembic"],
    ai_data: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "n8n",
    ],
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
