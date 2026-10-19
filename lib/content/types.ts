import type { StaticImageData } from "next/image";
import type { AboutSkills } from "./about";
import type { Project } from "./projects";

export type ProjectCategory = Project["category"];

export interface ImageAsset { src: StaticImageData; alt: string }
export interface LinkItem { label: string; href: string }
export interface Headline { serif: string; sans: string }
export interface SectionMeta { index: string; label: string; headline: Headline }

export interface SiteContent {
  lang: string;
  metadata: {
    title: string;
    titleTemplate: string;
    description: string;
    siteName: string;
    locale: string;
    keywords: readonly string[];
    ogImageAlt: string;
    ogKicker: string;
  };
  wordmark: Headline;
  skipLink: string;
  nav: readonly LinkItem[];
  bookCall: LinkItem;
  menu: { open: string; close: string };
  social: { github: string; linkedin: string; instagram: string; whatsapp: string };
  fab: { open: string; close: string };
}

export interface HeroContent {
  meta: { role: string; availability: string };
  name: Headline;
  lead: string;
  secondaryCta: LinkItem;
  scroll: LinkItem;
  band: readonly string[];
  portrait: ImageAsset;
}

export interface ExperienceItem { role: string; org: string; detail: string }

export interface OffClockItem { id: "pubg" | "snooker"; label: string }

export interface AboutSectionContent extends SectionMeta {
  statement: string;
  statementLabel: string;
  snapshotTitle: string;
  snapshot: readonly { label: string; value: string }[];
  statusLabel: string;
  bioTitle: string;
  experienceTitle: string;
  experience: readonly ExperienceItem[];
  offClockTitle: string;
  offClockIntro: string;
  offClock: readonly OffClockItem[];
  skillsTitle: string;
  skillsHint: string;
  skillLabels: Record<keyof AboutSkills, string>;
}

export interface Service {
  id: string;
  name: string;
  outcome: string;
  deliverables: readonly string[];
  timeline: string;
  stack: string;
}

export interface ServicesContent extends SectionMeta {
  deliverablesLabel: string;
  timelineLabel: string;
  stackLabel: string;
  items: readonly Service[];
}

export interface ProcessStep { title: string; when: string; body: string }

export interface ProcessContent extends SectionMeta {
  steps: readonly ProcessStep[];
}

export interface WorkFilter { id: string; label: string; categories: readonly ProjectCategory[] }

export interface ProjectsSectionContent extends SectionMeta {
  filtersLabel: string;
  filters: readonly WorkFilter[];
  typeLabels: Record<ProjectCategory, string>;
  featuredLabel: string;
  openLabel: string;
  liveLabel: string;
  codeLabel: string;
  allProjects: string;
}

export interface ProjectDetailContent {
  back: LinkItem;
  metaTitle: string;
  roleLabel: string;
  stackLabel: string;
  linksLabel: string;
  featuresTitle: string;
  galleryTitle: string;
  nextLabel: string;
}

export interface ContactContent extends SectionMeta {
  calendarTitle: string;
  whatsappLabel: string;
  whatsappText: string;
  emailLabel: string;
  emailSubject: string;
  mailFallback: string;
  reply: string;
  calendlyFallback: string;
}

export interface FooterContent {
  cta: Headline;
  navTitle: string;
  socialTitle: string;
  contactTitle: string;
  backToTop: string;
  copyright: string;
}
