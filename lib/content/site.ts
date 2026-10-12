import type {
  AboutSectionContent,
  ContactContent,
  FooterContent,
  HeroContent,
  SiteContent,
  WorkContent,
} from "./types";
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
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  bookCall: { label: "Book a call", href: "#contact" },
  menu: { open: "Open menu", close: "Close menu" },
  social: { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram" },
} as const satisfies SiteContent;

export const hero = {
  meta: {
    role: aboutContent.title,
    location: `Based in ${aboutContent.location} · PKT (UTC+5)`,
    availability: "Available for new projects",
  },
  name: { serif: "Ahmed", sans: "Javed" },
  lead: "I design and build AI systems and web apps that save your team hours every week.",
  secondaryCta: { label: "See my work", href: "#work" },
  scroll: { label: "Scroll to about", href: "#about" },
  band: ["RAG pipelines", "AI agents", "Next.js apps", "MCP servers", "FastAPI backends", "LLM evals"],
  portrait: { src: portrait, alt: "Portrait of Ahmed Javed with arms crossed, standing by a brick and tile pillar" },
} as const satisfies HeroContent;

export const aboutSection = {
  index: "01",
  label: "About",
  headline: { serif: "Engineer first.", sans: "Builder by habit." },
  statement: aboutContent.tagline,
  image: { src: aboutImage, alt: "Ahmed Javed in a white kurta leaning on a brick wall outdoors" },
  skillsTitle: "Toolkit",
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
  index: "03",
  label: "Work",
  headline: { serif: "Recent work.", sans: "Shipped, not just sketched." },
  filtersLabel: "Filter projects",
  filters: [
    { id: "all", label: "All", categories: ["ai", "fullstack", "frontend"] },
    { id: "ai", label: "AI systems", categories: ["ai"] },
    { id: "fullstack", label: "Full stack & web", categories: ["fullstack", "frontend"] },
  ],
  typeLabels: { ai: "AI system", fullstack: "Web app", frontend: "Website" },
  featuredLabel: "Featured",
  openLabel: "Open project:",
  liveLabel: "Live site",
  codeLabel: "Code",
  allProjects: "All projects on GitHub",
} as const satisfies WorkContent;

export const contact = {
  index: "04",
  label: "Contact",
  headline: { serif: "Let's talk about your project.", sans: "Book a free 30-minute call." },
  calendarTitle: "Pick a time",
  whatsappLabel: "WhatsApp",
  whatsappText: "Hi Ahmed, I saw your portfolio and I'd like to discuss a project.",
  emailLabel: "Email",
  emailSubject: "Project inquiry",
  mailFallback: "or use your mail app",
  reply: "I reply within 24 hours",
  calendlyFallback: "Open the booking page",
} as const satisfies ContactContent;

export const footer = {
  cta: { serif: "Have an idea?", sans: "Let's build it." },
  navTitle: "Navigate",
  socialTitle: "Elsewhere",
  contactTitle: "Say hello",
  backToTop: "Back to top",
  copyright: `© ${new Date().getFullYear()} ${aboutContent.name}`,
} as const satisfies FooterContent;

const { email, whatsapp } = aboutContent.contact;

export const links = {
  whatsapp: `${whatsapp}?text=${encodeURIComponent(contact.whatsappText)}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(contact.emailSubject)}`,
  mailto: `mailto:${email}?subject=${encodeURIComponent(contact.emailSubject)}`,
} as const;
