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
  name: "Hashir Farooq",
  title: "AI & Full-Stack Software Developer",
  location: "Pakistan",
  tagline: "Building software that solves real problems.",
  bio: [
    "Computer Science student at University of Central Punjab and software developer focused on AI, full-stack development, SaaS, and automation.",
    "I build practical software products across education, business management, e-commerce, logistics, AI, and automation. As the founder of the MegaTrix software ecosystem, I develop end-to-end applications designed to replace chaotic manual workflows with clean, reliable digital systems.",
    "Served with distinction as IT Coordinator at the Lahore High Court Bar Association (LHCBA), Web Developer at IEEE Computer Society UCP, and certified in MERN Stack Web Development by NAVTTC.",
  ],
  skills: {
    languages: ["C++", "Python", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    ai_data: ["LLMs", "RAG", "AI Agents", "NLP", "AI Content Generation", "Scikit-Learn"],
    vector_search: ["MongoDB", "PostgreSQL", "Mongoose", "Redis"],
    devops_tools: ["Git/GitHub", "Vercel", "Docker", "Render", "WhatsApp Cloud API", "Buffer MCP", "Postman"],
  },
  contact: {
    email: "hashirfarooq48@gmail.com",
    phone: "+92 308 1505859",
    whatsapp: "https://wa.me/923081505859",
    calendly: "",
    github: "https://github.com/hashirfarooq0023",
    linkedin: "https://linkedin.com/in/hashir-farooq-615aa122a",
    instagram: "https://github.com/MegaTrix-Technologies",
  },
};
