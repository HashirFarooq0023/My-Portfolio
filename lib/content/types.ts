import type { StaticImageData } from "next/image";
import type { AboutSkills } from "./about";
import type { Project } from "./projects";

export type ProjectCategory = Project["category"];

export interface ImageAsset { src: StaticImageData; alt: string }
export interface LinkItem { label: string; href: string }
export interface Headline { serif: string; sans: string }

export interface SiteContent {
  lang: string;
  metadata: { title: string; description: string };
  wordmark: Headline;
  skipLink: string;
  nav: readonly LinkItem[];
  bookCall: LinkItem;
  menu: { open: string; close: string };
  footer: { copyright: string; navLabel: string };
  social: { github: string; linkedin: string; instagram: string };
}

export interface HeroContent {
  headline: Headline;
  lead: string;
  secondaryCta: LinkItem;
  availability: { label: string; status: string; lines: readonly string[] };
  band: readonly string[];
  portrait: ImageAsset;
}

export interface AboutSectionContent {
  headline: Headline;
  image: ImageAsset;
  specTitle: string;
  roleLabel: string;
  locationLabel: string;
  skillLabels: Record<keyof AboutSkills, string>;
}

export interface WorkContent {
  headline: Headline;
  groups: readonly { id: string; label: Headline; categories: readonly ProjectCategory[] }[];
  typeLabels: Record<ProjectCategory, string>;
  featuredLabel: string;
  liveLabel: string;
  codeLabel: string;
  allProjects: string;
}

export interface ContactContent {
  headline: Headline;
  tabLabel: string;
  whatsappLabel: string;
  whatsappText: string;
  emailLabel: string;
  emailSubject: string;
  mailFallback: string;
  reply: string;
  calendlyFallback: string;
}
