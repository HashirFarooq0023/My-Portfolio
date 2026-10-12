import type { AboutSectionContent, ContactContent, HeroContent, SiteContent, WorkContent } from "./types";
import { aboutContent } from "./about";
import portrait from "./images/2.jpeg";
import aboutImage from "./images/1.jpeg";

export const site = {
  lang: "en",
  metadata: {
    title: `${aboutContent.name} — ${aboutContent.title}`,
    description: aboutContent.tagline,
  },
  wordmark: { serif: "Ahmed", sans: "Javed" },
  skipLink: "Skip to content",
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  bookCall: { label: "Book a call", href: "#contact" },
  menu: { open: "Open menu", close: "Close menu" },
  footer: { copyright: `© ${new Date().getFullYear()} ${aboutContent.name}`, navLabel: "Footer" },
  social: { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram" },
} as const satisfies SiteContent;

export const hero = {
  headline: { serif: "Hi, I'm Ahmed.", sans: "I build AI that ships." },
  lead: "AI engineer and full-stack developer. I design and build AI systems and web apps that save your team hours every week.",
  secondaryCta: { label: "See my work", href: "#work" },
  availability: {
    label: "Available",
    status: "Taking new projects",
    lines: [`Based in ${aboutContent.location}, PKT (UTC+5)`, "Reply within 24 hours"],
  },
  band: ["RAG pipelines", "AI agents", "Next.js apps", "MCP servers", "FastAPI backends"],
  portrait: { src: portrait, alt: "Portrait of Ahmed Javed with arms crossed, standing by a brick and tile pillar" },
} as const satisfies HeroContent;

export const aboutSection = {
  headline: { serif: "Engineer first.", sans: "Builder by habit." },
  image: { src: aboutImage, alt: "Ahmed Javed in a white kurta leaning on a brick wall outdoors" },
  specTitle: "Spec sheet",
  roleLabel: "Role",
  locationLabel: "Based in",
  skillLabels: {
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    ai_data: "AI tooling",
    vector_search: "Vector search",
    devops_tools: "DevOps & tools",
  },
} as const satisfies AboutSectionContent;

export const work = {
  headline: { serif: "Recent work.", sans: "Shipped, not just sketched." },
  groups: [
    { id: "ai", label: { serif: "Agents, RAG and automation.", sans: "AI systems" }, categories: ["ai"] },
    { id: "fullstack", label: { serif: "From database to deployment.", sans: "Full stack & web" }, categories: ["fullstack", "frontend"] },
  ],
  typeLabels: { ai: "AI system", fullstack: "Web app", frontend: "Website" },
  featuredLabel: "Featured",
  liveLabel: "Live site",
  codeLabel: "Code",
  allProjects: "All projects on GitHub",
} as const satisfies WorkContent;

export const contact = {
  headline: { serif: "Let's talk about your project.", sans: "Book a free 30-minute call." },
  tabLabel: "Pick a time",
  whatsappLabel: "WhatsApp",
  whatsappText: "Hi Ahmed, I saw your portfolio and I'd like to discuss a project.",
  emailLabel: "Email",
  emailSubject: "Project inquiry",
  mailFallback: "or use your mail app",
  reply: "Reply within 24 hours",
  calendlyFallback: "Open the booking page",
} as const satisfies ContactContent;

const { email, whatsapp } = aboutContent.contact;

export const links = {
  whatsapp: `${whatsapp}?text=${encodeURIComponent(contact.whatsappText)}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(contact.emailSubject)}`,
  mailto: `mailto:${email}?subject=${encodeURIComponent(contact.emailSubject)}`,
} as const;
