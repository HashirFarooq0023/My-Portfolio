import type {
  AboutSectionContent,
  ContactContent,
  FooterContent,
  HeroContent,
  ProjectDetailContent,
  ProjectsSectionContent,
  SiteContent,
} from "./types";
import { aboutContent } from "./about";
import portrait from "./images/hero-portrait.png";

export const site = {
  lang: "en",
  metadata: {
    title: `${aboutContent.name} | ${aboutContent.title}`,
    titleTemplate: `%s | ${aboutContent.name}`,
    siteName: aboutContent.name,
    locale: "en_US",
    keywords: ["AI engineer", "full stack developer", "Next.js developer", "RAG pipelines", "AI agents", "LangGraph", "FastAPI", "Pakistan"],
    ogImageAlt: `${aboutContent.name}, ${aboutContent.title}`,
    ogKicker: "Available for new projects",
    description:
      "AI engineer and full-stack developer in Pakistan. I build AI agents, RAG pipelines and fast Next.js web apps for teams that want to ship.",
  },
  wordmark: { serif: "M. Ahmed", sans: "Javed" },
  skipLink: "Skip to content",
  nav: [
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ],
  bookCall: { label: "Book a call", href: "/#contact" },
  menu: { open: "Open menu", close: "Close menu" },
  social: { github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram", whatsapp: "WhatsApp" },
  fab: { open: "Connect with me", close: "Close social links" },
} as const satisfies SiteContent;

export const hero = {
  meta: {
    role: aboutContent.title,
    availability: "Available for new projects",
  },
  name: { serif: "M. Ahmed", sans: "Javed" },
  lead: "I design and build AI systems and web apps that save your team hours every week.",
  secondaryCta: { label: "See my work", href: "#projects" },
  scroll: { label: "Scroll to projects", href: "#projects" },
  band: ["Agentic AI Systems", "RAG Pipeline", "AI Automation", "Next js apps", "Full stack development"],
  portrait: { src: portrait, alt: "Portrait of Ahmed Javed with arms crossed, standing by a brick and tile pillar" },
} as const satisfies HeroContent;

export const projectsSection = {
  index: "01",
  label: "Projects",
  headline: { serif: "Recent work.", sans: "Shipped, not just sketched." },
  filtersLabel: "Filter projects",
  filters: [
    { id: "all", label: "All", categories: ["ai", "fullstack", "frontend"] },
    { id: "ai", label: "AI systems", categories: ["ai"] },
    { id: "fullstack", label: "Full stack & web", categories: ["fullstack", "frontend"] },
  ],
  typeLabels: { ai: "AI system", fullstack: "Web app", frontend: "Website" },
  featuredLabel: "Featured",
  openLabel: "View project details:",
  liveLabel: "Live site",
  codeLabel: "Code",
  allProjects: "All projects on GitHub",
} as const satisfies ProjectsSectionContent;

export const projectDetail = {
  back: { label: "All projects", href: "/#projects" },
  metaTitle: "Case study",
  roleLabel: "Role",
  stackLabel: "Stack",
  linksLabel: "Links",
  featuresTitle: "What I built",
  galleryTitle: "Screens",
  nextLabel: "Next project",
} as const satisfies ProjectDetailContent;

export const aboutSection = {
  index: "03",
  label: "About",
  headline: { serif: "Engineer first.", sans: "Builder by habit." },
  statement: aboutContent.tagline,
  statementLabel: "In one line",
  snapshotTitle: "Snapshot",
  snapshot: [
    { label: "Role", value: aboutContent.title },
    { label: "Based in", value: `${aboutContent.location}, PKT (UTC+5)` },
    { label: "Studying", value: "BS Artificial Intelligence" },
  ],
  statusLabel: "Available for new projects",
  bioTitle: "The short version",
  experienceTitle: "Experience",
  experience: [
    { role: "AI Remote Internship Program", org: "Arbisoft", detail: "Agentic AI, MCP and multi-tool orchestration" },
    { role: "AI Developer Intern", org: "Sybrid, Innovation Division", detail: "Document automation and local LLMs" },
    { role: "Graphic Designer", org: "1.5 years", detail: "UI, branding and visual design" },
  ],
  offClockTitle: "Off the clock",
  offClockIntro:
    "Good software engineering requires focus, strategy, and problem-solving traits that tend to follow me into my downtime. When I step away from the screen, I like to keep those skills sharp in different ways:",
  offClock: [
    { id: "pubg", label: "PUBG" },
    { id: "snooker", label: "Snooker" },
  ],
  skillsTitle: "Toolkit",
  skillsHint: "The tools I reach for every week.",
  skillLabels: {
    languages: "Languages",
    ai_data: "AI tooling",
    frontend: "Frontend",
    backend: "Backend",
    vector_search: "Vector search",
    devops_tools: "DevOps & tools",
  },
} as const satisfies AboutSectionContent;

export const contact = {
  index: "05",
  label: "Contact",
  headline: { serif: "Got a project in mind?", sans: "Book a free 30-minute call." },
  calendarTitle: "Pick a time",
  whatsappLabel: "WhatsApp",
  whatsappText: "Hi Ahmed, I saw your portfolio and I'd like to talk about a project.",
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
