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
import portrait from "./images/hashir-glasses.webp";
import certAiForEveryone from "./images/certificates/ai-for-everyone.png";
import certGitAndGithub from "./images/certificates/git-and-github.png";
import certUcpVolunteer from "./images/linkedin-ucp-volunteer.jpg";
import certLhcba from "./images/certificates/lhcba-it-coordinator.jpg";
import certLoopverseCert from "./images/certificates/loopverse-certificate.jpg";

export const site = {
  lang: "en",
  metadata: {
    title: `${aboutContent.name} | ${aboutContent.title}`,
    titleTemplate: `%s | ${aboutContent.name}`,
    siteName: aboutContent.name,
    locale: "en_US",
    keywords: ["Hashir Farooq", "AI developer", "full stack developer", "Next.js", "MERN stack", "MegaTrix", "SaaS", "Pakistan"],
    ogImageAlt: `${aboutContent.name}, ${aboutContent.title}`,
    ogKicker: "Available for new projects",
    description:
      "AI and full-stack software developer. Founder of the MegaTrix software ecosystem. Building practical SaaS, logistics, e-commerce, and automation systems.",
  },
  wordmark: { serif: "Hashir", sans: "Farooq" },
  skipLink: "Skip to content",
  nav: [
    { label: "Projects", href: "/#projects" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Community", href: "/#community" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ],
  bookCall: { label: "Book a call", href: "/#contact" },
  menu: { open: "Open menu", close: "Close menu" },
  social: { github: "GitHub", linkedin: "LinkedIn", instagram: "MegaTrix", whatsapp: "WhatsApp" },
  fab: { open: "Connect with me", close: "Close social links" },
} as const satisfies SiteContent;

export const hero = {
  meta: {
    role: aboutContent.title,
    availability: "Available for new projects",
  },
  name: { serif: "Hashir", sans: "Farooq" },
  lead: "Building software that solves real problems across AI, full-stack SaaS, and workflow automation.",
  secondaryCta: { label: "See my work", href: "#projects" },
  scroll: { label: "Scroll to projects", href: "#projects" },
  band: ["MegaTrix Ecosystem", "AI & Automation", "Full-Stack SaaS", "Logistics & E-Commerce", "MERN & Next.js"],
  portrait: { src: portrait, alt: "Portrait of Hashir Farooq, AI and Full-Stack Software Developer" },
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
    { label: "Studying", value: "BS Computer Science (UCP)" },
  ],
  statusLabel: "Available for new projects",
  bioTitle: "The short version",
  experienceTitle: "Experience",
  experience: [
    { role: "IT Coordinator", org: "Lahore High Court Bar Association", detail: "Annual Biometric Elections (2026-2027) technical infrastructure and voter verification" },
    { role: "Web Developer", org: "IEEE Computer Society UCP", detail: "Revamped and modernized platform with Next.js and PostgreSQL" },
    { role: "Vice President", org: "Cyber Security Society UCP", detail: "FYP Exhibition coordination and cybersecurity engagement" },
    { role: "MERN Stack Developer", org: "NAVTTC", detail: "Built and deployed production-grade full-stack web applications" },
  ],
  certificationsKicker: "Accreditations",
  certificationsTitle: "Certifications & Credentials",
  certificationsHint: "Verified certifications, technical credentials, and professional training programs.",
  verifyCredentialLabel: "Verify Credential",
  viewCertificateLabel: "Inspect Certificate",
  closeModalLabel: "Close certificate preview",
  certifications: [
    {
      id: "loopverse-ai-ml-award",
      title: "2nd Runner-Up in AI/ML — LoopVerse 3.0",
      issuer: "NASTP Lahore · LoopLab & TezHost",
      date: "2026",
      detail:
        "Secured 2nd Runner-Up position at National Aerospace Science & Technology Park (NASTP) Lahore for building an AI Weather Prediction solution utilizing Machine Learning, RAG, and LLMs.",
      skills: ["Machine Learning", "RAG", "LLMs", "Weather Prediction", "AI Systems"],
      credentialUrl: "https://lnkd.in/p/dUV5Zch3",
      image: { src: certLoopverseCert, alt: "LoopLab LoopVerse 3.0 Certificate of Participation awarded to Hashir Farooq" },
    },
    {
      id: "ai-for-everyone",
      title: "AI For Everyone",
      issuer: "DeepLearning.AI / Coursera",
      date: "July 2026",
      detail:
        "Foundations of artificial intelligence, machine learning, deep learning architectures, and AI business application strategy under Andrew Ng.",
      skills: ["AI Foundations", "Machine Learning", "Deep Learning", "AI Strategy"],
      credentialUrl: "https://coursera.org/verify/IL1T9CUOIA55",
      image: { src: certAiForEveryone, alt: "AI For Everyone DeepLearning.AI Certificate" },
    },
    {
      id: "git-and-github",
      title: "Introduction to Git and GitHub",
      issuer: "Google / Coursera",
      date: "August 2026",
      detail:
        "Version control systems, branching strategies, pull requests, conflict resolution, and collaborative GitHub open-source workflows.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "CI/CD"],
      credentialUrl: "https://coursera.org/verify/64Z4KP6LZOF4",
      image: { src: certGitAndGithub, alt: "Introduction to Git and GitHub Google Certificate" },
    },
    {
      id: "lhcba-biometric-elections",
      title: "Certificate of Completion & Appreciation — IT Coordinator",
      issuer: "Lahore High Court Bar Association (LHCBA)",
      date: "February 2026",
      detail:
        "Served with distinction as IT Coordinator for the LHCBA Annual Biometric Elections (2026-2027) following specialized technical training in biometric voter verification systems.",
      skills: ["Biometric Verification", "IT Coordination", "Election Tech", "Infrastructure Support"],
      image: { src: certLhcba, alt: "Certificate of Completion and Appreciation awarded to Hashir Farooq by Election Board Lahore High Court Bar Association" },
    },
    {
      id: "ucp-fyp-volunteer",
      title: "Certificate of Appreciation — FOIT & CS FYP Open House",
      issuer: "University of Central Punjab & DataRopes.ai",
      date: "Fall 2025",
      detail:
        "Awarded in recognition of generous support and dedicated volunteering at the UCP FOIT & CS Final Year Project Open House Exhibition.",
      skills: ["Event Organization", "Department Leadership", "Volunteer Support", "FOIT & CS"],
      credentialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7436066341008334848/",
      image: { src: certUcpVolunteer, alt: "Certificate of Appreciation awarded to Hashir Farooq at UCP FOIT&CS FYP Open House Fall 2025" },
    },
    {
      id: "navttc-mern",
      title: "MERN Stack Web Development",
      issuer: "NAVTTC",
      date: "Nov 2025 – Jan 2026",
      detail:
        "Intensive full-stack development credential covering production MERN applications, RESTful API design, database schemas, and JWT security.",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT"],
      credentialUrl: "https://github.com/hashirfarooq0023",
    },
  ],
  offClockTitle: "Off the clock",
  offClockIntro:
    "Good software engineering requires focus, strategic foresight, and disciplined thinking traits that carry over into my downtime. When I step away from the terminal, I engage my mind with strategic pursuits:",
  offClock: [
    { id: "chess", label: "Chess" },
    { id: "gaming", label: "Gaming" },
  ],
  skillsTitle: "Toolkit",
  skillsHint: "The technologies and frameworks I build with daily.",
  skillLabels: {
    languages: "Languages",
    ai_data: "AI & ML",
    frontend: "Frontend",
    backend: "Backend",
    vector_search: "Databases & Storage",
    devops_tools: "DevOps & APIs",
  },
} as const satisfies AboutSectionContent;

export const contact = {
  index: "06",
  label: "Contact",
  headline: { serif: "Got a project in mind?", sans: "Let's build something exceptional." },
  calendarTitle: "Pick a time",
  whatsappLabel: "WhatsApp",
  whatsappText: "Hi Hashir, I saw your portfolio and I'd like to talk about a project.",
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
