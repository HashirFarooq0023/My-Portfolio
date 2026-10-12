# CLAUDE.md

Portfolio SPA. Design system: `DESIGN.md` (follow it for tokens, type, motion). This file wins on structure and code rules.

## Stack
- Next.js (App Router), TypeScript (`strict: true`), Tailwind CSS v4, Motion (`motion/react`).
- Server Components by default; `"use client"` only where hooks/events/Motion are needed.

## Content isolation (CRITICAL)
- ALL user-facing text lives in `lib/content/*.ts`: copy, headings, button labels, aria-labels, alt text, metadata, links, project/service data.
- Components in `components/` import from `lib/content/`. **Zero string literals rendered in TSX.** Only exceptions: class names, ids/anchors, and import paths.
- Every content export has an interface in `lib/content/types.ts`. No `any`, no untyped object literals.
- Export data `as const satisfies Type` for literal safety.

```
lib/content/
  types.ts      # all content interfaces
  site.ts       # name, email, WhatsApp, Calendly URL, nav, metadata
  hero.ts  about.ts  services.ts  projects.ts  contact.ts  footer.ts
```

```ts
// lib/content/types.ts
export interface Project { slug: string; title: string; type: string; outcome: string; stack: string[]; image: { src: string; alt: string }; href?: string }

// lib/content/projects.ts
import type { Project } from "./types";
export const projects = [/* ... */] as const satisfies readonly Project[];

// components/work/Work.tsx
import { projects } from "@/lib/content/projects";
```

## Code standards
- Functional components only; named exports; typed props via `interface XProps`.
- One component per file, PascalCase filenames; hooks in `hooks/useX.ts`.
- Use `@/` path alias. Tailwind utilities + `@theme` tokens only; no inline styles, no hex values in TSX.
- `next/image` for images, `next/font` for fonts, `next/link` for internal links.
- Section ids: `top`, `about`, `services`, `work`, `contact`.
- Accessibility: semantic HTML, one `h1`, visible focus, `aria-label` on icon buttons (from content), respect `useReducedMotion`.
- Make small, targeted edits; don't refactor unrelated files.

## Commands
```bash
npm install
npm run dev        # localhost:3000
npm run build      # must pass before finishing a task
npm run start
npm run lint
npx tsc --noEmit   # type check
```

## Before finishing
- `npm run lint` and `npx tsc --noEmit` pass.
- No new hardcoded strings in `components/` (grep for `>[A-Za-z]` in `.tsx`).
