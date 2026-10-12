# DESIGN.md — Portfolio Design System

> Master design and architecture guide for a single-page portfolio.
> Stack: **Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion)**
> Role: **AI Engineer & Full Stack Developer** — landing page for client acquisition.

---

## 0. Reference analysis

The reference is a motorsport athlete's personal site. These are the traits worth adapting, and the ones to leave behind.

| Trait in the reference | What it does | How we adapt it |
|---|---|---|
| Off-white "chalk" canvas with faint topographic contour lines | Calm, premium, airy; the lines add depth without noise | Keep. Reframe the contours as a **loss-landscape** — the terrain an AI model descends during training. Same look, our meaning. |
| Electric lime as the *only* accent, used on one button | One loud signal on a quiet page; your eye goes straight to "Store" | Keep, and guard it. Lime marks **the action that books work**, and nothing else. |
| Two-line wordmark: light high-contrast serif over heavy grotesk | Editorial meets engineering; the personality of the site | Keep as the core type pairing. Serif = the person, grotesk = the work. |
| Centered cut-out portrait with a 3D visor stripe slicing across the face | The memorable moment; identity + discipline in one image | Adapt as **"the Visor Band"**: a slanted ink-and-lime band that slices across your portrait and carries your value proposition. |
| Notched "Next race" card (label sits in a stepped tab) | Gives a small info card a distinctive silhouette | Adapt as the **Tab Card**, our signature container for status, services and projects. |
| Square outline menu button with offset hamburger lines | Quirky detail that makes chrome feel designed | Keep. |
| Helmet artwork, team marks, monogram logo | Someone else's brand assets | **Do not reuse.** Design your own monogram; no third-party logos or imagery. |

---

## 1. Design concept & vibe

**Concept name: "Paddock Editorial."**

A precision-engineered page that feels like a race-day programme printed on bright paper: a quiet chalk canvas, faint terrain lines underneath, sharp black type, and one electric-lime signal reserved for "book a call." It should read as *fast, exact and confident* — the impression a client should have of someone who ships AI systems and production web apps.

Principles:

1. **One loud thing per screen.** Lime appears once per viewport, on the action we want taken. Everything else is chalk, ink and grey.
2. **The person and the work, in two voices.** Serif lines speak about you (who, why). Grotesk lines speak about the work (what, how). The pairing is used line-by-line, never to accent a single word.
3. **Spend boldness in the hero.** The Visor Band and portrait are the memorable moment. Sections below are disciplined and calm.
4. **Structure carries meaning.** Tab notches label things; numbering appears only where content is a real sequence (the engagement process).
5. **Copy is plain and specific.** Say what you build, for whom, and what happens when they click.

---

## 2. Color palette

### Core tokens

| Token | Hex | Tailwind class | Role |
|---|---|---|---|
| `chalk` | `#F5F5F1` | `bg-chalk` | Page background |
| `paper` | `#FFFFFF` | `bg-paper` | Raised surfaces (cards, Calendly frame) |
| `fog` | `#E8E8E2` | `bg-fog` | Image placeholders, ghost trails, subtle fills |
| `contour` | `#D6D6CF` | `stroke-contour` / `border-contour` | Contour lines, hairline dividers |
| `graphite` | `#62625C` | `text-graphite` | Secondary text, metadata |
| `ink` | `#151514` | `text-ink` / `bg-ink` | Primary text, outlines, dark band |
| `volt` | `#D4FF00` | `bg-volt` | **Primary accent.** CTA fills, Visor Band, contact section |
| `volt-deep` | `#4E6200` | `text-volt-deep` | Lime-family text on light backgrounds (rare) |

### Functional colors

| Token | Hex | Use |
|---|---|---|
| `whatsapp` | `#25D366` | WhatsApp icon tint on hover only |
| `gmail` | `#EA4335` | Gmail icon tint on hover only |
| `signal` | `#1F9D55` | "Available" status dot |
| `danger` | `#C2361F` | Form/embed error text |

### Contrast rules (WCAG AA)

- `ink` on `chalk` ≈ 16.9:1 · `graphite` on `chalk` ≈ 5.6:1 · `ink` on `volt` ≈ 17:1 — all pass.
- **Never** put `volt` text or `volt` focus rings on `chalk`/`paper` (≈1.1:1, invisible). On light backgrounds, lime is a *fill*, never a *line or letter*.
- Text on a `volt` fill is always `ink`.

### Tailwind v4 theme (`app/globals.css`)

```css
@import "tailwindcss";

@theme {
  /* Color */
  --color-chalk: #F5F5F1;
  --color-paper: #FFFFFF;
  --color-fog: #E8E8E2;
  --color-contour: #D6D6CF;
  --color-graphite: #62625C;
  --color-ink: #151514;
  --color-volt: #D4FF00;
  --color-volt-deep: #4E6200;
  --color-whatsapp: #25D366;
  --color-gmail: #EA4335;
  --color-signal: #1F9D55;
  --color-danger: #C2361F;

  /* Type families (wired to next/font variables) */
  --font-serif: var(--font-instrument-serif), "Times New Roman", serif;
  --font-sans: var(--font-archivo), "Helvetica Neue", Arial, sans-serif;

  /* Radius — different per hierarchy, on purpose */
  --radius-chip: 6px;     /* tags, small badges */
  --radius-control: 14px; /* buttons, inputs */
  --radius-panel: 20px;   /* media frames, Calendly frame */

  /* Motion */
  --ease-snap: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-glide: cubic-bezier(0.65, 0, 0.35, 1);
}

html {
  background: var(--color-chalk);
  color: var(--color-ink);
  scroll-behavior: smooth;
  scroll-padding-top: 96px; /* clears the sticky header on anchor jumps */
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}

::selection { background: var(--color-volt); color: var(--color-ink); }
```

> On Tailwind v3, move the same values into `tailwind.config.ts` under `theme.extend.colors`, `fontFamily`, `borderRadius` and `transitionTimingFunction`.

---

## 3. Typography

### Families

| Role | Family | Source | Why |
|---|---|---|---|
| **Voice / display serif** | **Instrument Serif** (400, regular + italic) | `next/font/google` | Light, high-contrast, slightly condensed — the closest free match to the reference's upper wordmark line. |
| **Work / grotesk** | **Archivo** (variable: weight 400–900, width 62–125) | `next/font/google` | Heavy weights match the bold lower wordmark line; the **width axis** gives us condensed caps for buttons from the same family. |

Two families only. No monospace.

```tsx
// app/fonts.ts
import { Instrument_Serif, Archivo } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});
```

```tsx
// app/layout.tsx (excerpt)
<html lang="en" className={`${instrumentSerif.variable} ${archivo.variable}`}>
  <body className="font-sans bg-chalk text-ink antialiased">{children}</body>
</html>
```

### Scale

Fluid sizes use `clamp()` so the hero scales from 360px phones to 1920px screens without breakpoint jumps.

| Token | Family / weight | Size | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-serif` | Serif 400 | `clamp(3rem, 8.5vw, 8.5rem)` | 0.92 | -0.02em | Hero line 1 |
| `display-sans` | Archivo 800, wdth 100 | `clamp(2.75rem, 7.8vw, 7.75rem)` | 0.9 | -0.035em | Hero line 2 |
| `h2-serif` | Serif 400 | `clamp(2.5rem, 5vw, 4.75rem)` | 1.0 | -0.015em | Section headline, line 1 |
| `h2-sans` | Archivo 750 | `clamp(2.25rem, 4.6vw, 4.25rem)` | 0.95 | -0.03em | Section headline, line 2 |
| `h3` | Archivo 700 | `clamp(1.5rem, 2.2vw, 2rem)` | 1.1 | -0.015em | Service names, project titles |
| `lead` | Serif 400 | `clamp(1.375rem, 2vw, 1.75rem)` | 1.35 | 0 | About statement, intro paragraphs |
| `body` | Archivo 400 | `1.0625rem` (17px) | 1.6 | 0 | Paragraphs |
| `small` | Archivo 500 | `0.875rem` (14px) | 1.45 | 0.005em | Metadata, captions, tab labels |
| `button` | Archivo 800, **wdth 75**, uppercase | `1rem`–`1.125rem` | 1 | 0.01em | Buttons only |

Add these as utilities:

```css
@utility text-display-serif { font-family: var(--font-serif); font-size: clamp(3rem, 8.5vw, 8.5rem); line-height: .92; letter-spacing: -.02em; }
@utility text-display-sans  { font-family: var(--font-sans); font-weight: 800; font-size: clamp(2.75rem, 7.8vw, 7.75rem); line-height: .9; letter-spacing: -.035em; }
@utility text-h2-serif      { font-family: var(--font-serif); font-size: clamp(2.5rem, 5vw, 4.75rem); line-height: 1; letter-spacing: -.015em; }
@utility text-h2-sans       { font-family: var(--font-sans); font-weight: 750; font-size: clamp(2.25rem, 4.6vw, 4.25rem); line-height: .95; letter-spacing: -.03em; }
@utility text-lead          { font-family: var(--font-serif); font-size: clamp(1.375rem, 2vw, 1.75rem); line-height: 1.35; }
@utility font-condensed     { font-stretch: 75%; }
```

### Rules

- **Headlines are always two lines: serif then grotesk.** Line 1 is the human voice, line 2 is the hard statement. Example: *"Hi, I'm Ahmed."* / **"I build AI that ships."** Never style a single word differently inside a line.
- **Uppercase is reserved for button labels** (the condensed caps from the reference). Labels, eyebrows and tab text stay in sentence case.
- Body measure: max `65ch` (`max-w-[65ch]`). Serif lead paragraphs: max `58ch`.
- No eyebrow labels above section headings; the two-line headline does that job.

---

## 4. Component system

### 4.1 Buttons

All buttons: min height 48px (touch target), `rounded-[var(--radius-control)]`, condensed uppercase label, icon on the left (like the reference's bag icon), no trailing arrows.

| Variant | Look | Use |
|---|---|---|
| **Primary** | `bg-volt text-ink`, no border | The one booking action per viewport: "Book a call" |
| **Secondary** | `bg-transparent text-ink border-[1.5px] border-ink` | "See my work", "View project" |
| **On-volt** | `bg-ink text-volt` | Primary action *inside* the lime contact section |
| **Icon (square)** | 56×56, `border-[1.5px] border-ink`, transparent | Menu, WhatsApp, Gmail, external links |

```tsx
// components/ui/Button.tsx
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "on-volt";

const base =
  "inline-flex min-h-12 items-center gap-3 rounded-[var(--radius-control)] px-6 py-3 " +
  "font-sans font-condensed text-[1.0625rem] font-extrabold uppercase tracking-[0.01em] " +
  "transition-[background-color,color,transform] duration-200 ease-[var(--ease-snap)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-volt text-ink hover:bg-ink hover:text-volt",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-chalk",
  "on-volt": "bg-ink text-volt hover:bg-chalk hover:text-ink",
};

export function Button({
  href, variant = "primary", icon, children, className, ...rest
}: {
  href: string; variant?: Variant; icon?: React.ReactNode;
  children: React.ReactNode; className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {icon && <span className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5">{icon}</span>}
      {children}
    </Link>
  );
}
```

**Icon buttons for WhatsApp and Gmail** stay monochrome ink at rest (so lime stays the only accent) and take their brand tint on hover/focus, so recognition arrives the moment intent does.

```tsx
// components/ui/ContactIconButton.tsx (pattern)
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={label}               // "Message me on WhatsApp" / "Email me"
  className="group inline-flex size-14 items-center justify-center rounded-[var(--radius-control)]
             border-[1.5px] border-ink text-ink transition-colors duration-200
             hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
>
  <Icon className="size-6 transition-colors group-hover:text-whatsapp" />  {/* or group-hover:text-gmail */}
</a>
```

When there's room (desktop contact section), use the **labelled** form: icon button + visible text ("WhatsApp", "Email") — icon-only buttons are reserved for the header and mobile.

### 4.2 The Tab Card (signature container)

Adapted from the reference's notched "Next race" card: the label sits in a stepped cut-out at the top-left, and the card's top edge rises at 45° to full height.

```
  Label text  ╱‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾╲
 ┌───────────╯                     │
 │                                 │
 │            content              │
 │                                 │
 └─────────────────────────────────┘
```

Implementation: two stacked layers with the same `clip-path` — an `ink` outer layer and a `paper`/`chalk` inner layer inset by the border width.

```tsx
// components/ui/TabCard.tsx
import { cn } from "@/lib/cn";

export function TabCard({
  label, children, className, tone = "paper",
}: {
  label: string; children: React.ReactNode; className?: string;
  tone?: "paper" | "chalk" | "volt";
}) {
  const bg = { paper: "bg-paper", chalk: "bg-chalk", volt: "bg-volt" }[tone];
  return (
    <div className={cn("relative [--tab-w:9rem] [--tab-h:1.75rem] [--bw:1.5px]", className)}>
      <span className="absolute left-0 top-0 z-10 flex h-[var(--tab-h)] items-center text-sm font-medium text-ink">
        {label}
      </span>
      {/* outer = border */}
      <div className="tab-clip absolute inset-0 bg-ink" aria-hidden />
      {/* inner = surface */}
      <div className={cn("tab-clip relative m-[var(--bw)] p-5 pt-[calc(var(--tab-h)+1.25rem)]", bg)}>
        {children}
      </div>
    </div>
  );
}
```

```css
/* globals.css */
.tab-clip {
  clip-path: polygon(
    0 var(--tab-h),
    var(--tab-w) var(--tab-h),
    calc(var(--tab-w) + var(--tab-h)) 0,
    100% 0, 100% 100%, 0 100%
  );
}
```

Use it for: the hero availability card, service rows' expanded panel, project media frames, and the Calendly frame. Do **not** use it for every box — plain rectangles with `--radius-panel` handle images and secondary content.

### 4.3 Service display — "Spec rows", not a card grid

Services render as **full-width stacked rows** (like a car spec sheet), not identical cards. Each row is a disclosure button.

```
┌──────────────────────────────────────────────────────────────┐
│ AI agents & automation                         From $X   [+] │
├──────────────────────────────────────────────────────────────┤
│ Full-stack web applications                    From $X   [+] │
├──────────────────────────────────────────────────────────────┤
│ Business websites & storefronts                From $X   [+] │  ← open
│   ┌─ What you get ─────────╲──────────────────────────────┐  │
│   │ Deliverables · timeline · stack · ideal client         │  │
│   │ [ BOOK A CALL ]                                        │  │
│   └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

- Row: `border-t border-contour`, padding `py-7 md:py-9`, service name in `h3`, one-line outcome in `graphite` below it, price hint right-aligned.
- `[+]` is a 40px square icon button; rotates 45° to `×` when open.
- Open panel: a `TabCard` labelled "What you get" holding deliverables (short list), typical timeline, stack, and a Primary button.
- Accessibility: `<button aria-expanded aria-controls>`; panel animates height with Motion `AnimatePresence`.

Suggested service set (edit freely):

| Service | One-line outcome |
|---|---|
| AI agents & automation | Agents that read your documents and tools (RAG, MCP) and do the repetitive work. |
| AI features in your product | Chat, search, summarisation and classification added to an existing app. |
| Full-stack web applications | Production Next.js + TypeScript apps, from database to deployment. |
| Business websites & storefronts | Fast Next.js + Tailwind sites for bakeries, restaurants, salons, agencies and shops. |

### 4.4 Project showcase cards

Asymmetric 12-column gallery; never a uniform 3×N grid.

```
Desktop (≥1024px)
┌─────────────── 8 col ───────────────┐┌──── 4 col ────┐
│        Featured project media       ││  Project B    │
│                                     ││  (tall)       │
└─────────────────────────────────────┘│               │
┌──── 4 col ────┐┌─────────── 8 col ──┴───────────────┐
│  Project C    ││        Project D media              │
└───────────────┘└─────────────────────────────────────┘
```

Card anatomy:

- **Media frame**: `rounded-[var(--radius-panel)] bg-fog overflow-hidden`, aspect `16/10` (wide) or `4/5` (tall). Use `next/image` with `sizes` set per column span.
- **Tab label** on the frame (small Tab Card notch overlay) showing the project *type*: "AI system", "Web app", "Storefront", "3D web".
- **Below the frame**: title (`h3`), one-sentence outcome in `graphite`, then stack as plain text separated by commas (no chips cloud, no middle dots).
- Whole card is one link (`<a>` wrapping) to a case-study modal or external URL; secondary "Live site" / "Code" links sit beside the title.

Seed content from current work (replace with real screenshots and outcomes):

| Project | Type | Suggested framing |
|---|---|---|
| Autonomous fleet management platform | AI system | AI agents + MCP + RAG for commercial fleet operations |
| SpecForge | AI tool | Multi-agent CLI that turns a feature request into a spec |
| VeriPix | AI system | Image verification — final-year project |
| AI detection website | Web app | Detection UI and product |
| FYNROSE | Storefront | Herbal skincare e-commerce brand |
| 3D cookie store site | 3D web | Three.js product animation |

### 4.5 Navigation — sticky header + full-screen menu

```
┌───────────────────────────────────────────────────────────────────┐
│ AHMED            ◢ monogram ◣              [◷ BOOK A CALL] [ =̶ ]  │
│ wordmark line 2                                                    │
└───────────────────────────────────────────────────────────────────┘
```

- **Left**: two-line wordmark — line 1 in serif (`Ahmed`), line 2 in Archivo 800 (surname or "Studio"). Links to `#top`.
- **Center (≥768px)**: your own monogram mark (SVG). Optional: faint wireframe ellipse beneath it, echoing the reference's dome.
- **Right**: Primary "Book a call" (calendar icon) + square menu button with **offset hamburger** (top line shorter and shifted right, as in the reference).
- **Behaviour**:
  - `position: sticky; top: 0; z-50`, height 88px desktop / 72px mobile.
  - At scroll-y > 24px: background becomes `bg-chalk/80 backdrop-blur-md`, a `border-b border-contour` fades in, height eases to 72px.
  - On mobile, "Book a call" collapses to a 48px volt icon button.
- **Menu overlay** (opens from menu button): full-screen `bg-chalk`, section links stacked large in alternating serif / grotesk lines (About, Services, Work, Contact), WhatsApp + Email icon buttons at the bottom. Focus is trapped while open; `Esc` closes; body scroll locked.
- **Active section**: `useActiveSection()` hook (IntersectionObserver, `rootMargin: "-45% 0px -50% 0px"`) marks the current link with a 6px volt square beside it and `aria-current="true"`.
- **Anchors**: sections use ids `#top`, `#about`, `#services`, `#work`, `#contact`. `scroll-padding-top` in CSS handles the header offset; no JS scroll math needed. Lenis is optional if you want inertia scrolling — not required.

---

## 5. Section blueprints

### 5.1 Hero (`#top`)

```
┌─────────────────────────────────────────────────────────────────┐
│ header                                                          │
│                                                                 │
│  Hi, I'm Ahmed.  (serif)          ┌──── portrait ────┐          │
│  I build AI that ships. (sans)    │      (cut-out)   │          │
│                                   │══════════════════│ ← Visor  │
│  [◷ BOOK A CALL] [SEE MY WORK]    │  band + ghost    │   Band   │
│                                   │  trails          │          │
│ ┌Available╲─────┐                 └──────────────────┘          │
│ │● Taking new   │                                               │
│ │  projects     │                     contour lines underneath  │
│ │ PKT, UTC+5    │                                               │
│ └───────────────┘                                               │
└─────────────────────────────────────────────────────────────────┘
```

- **Height**: `min-h-[100svh]`.
- **Background**: `ContourField` — an inline SVG of 10–14 smooth closed paths, `stroke-contour`, 1px, no fill, `opacity-70`. Generate once (e.g., from a noise-based contour script) and commit as a static SVG component; no runtime noise.
- **Portrait**: transparent PNG/AVIF cut-out, centered on desktop (col 6–11), bottom-anchored so the shoulders bleed off the bottom edge like the reference. On mobile it sits below the headline at 80% width.
- **The Visor Band**: an absolutely positioned bar crossing the portrait at roughly mid-face height, rotated `-3deg`, `bg-ink` with a lime wave pattern (your own SVG), extending past the portrait with two `bg-fog` blurred **ghost trails** (`blur-sm`, 60% opacity) — the motion streaks from the reference. On it, a slow marquee of short capability phrases in Archivo 800 volt: "RAG pipelines", "AI agents", "Next.js apps", "MCP servers".
  - It is decorative: `aria-hidden="true"`; the same phrases appear as real text elsewhere.
  - Keep it off the eyes; it should cross the lower face or the chest, not obscure identity.
- **Headline**: left-aligned on desktop, two lines (serif / grotesk). Supporting line (`lead`, max 40ch): *"AI engineer and full-stack developer. I design and build AI systems and web apps that save your team hours every week."*
- **CTAs**: Primary "Book a call" → `#contact` (and opens the Calendly panel); Secondary "See my work" → `#work`.
- **Availability Tab Card** (bottom-left, mirrors the reference's "Next race" card): label "Available", content: green dot + "Taking new projects", "Based in Pakistan, PKT (UTC+5)", "Reply within 24 hours".

### 5.2 About (`#about`)

```
┌────────────── 7 col ──────────────┐   ┌──── 5 col ────┐
│ Serif line: who I am               │   │ Spec sheet     │
│ Sans line: what I do               │   │ Role ......... │
│                                    │   │ Focus ........ │
│ Lead paragraph (serif, 58ch)       │   │ Stack ........ │
│ Body paragraph (sans, 65ch)        │   │ Languages .... │
└────────────────────────────────────┘   └────────────────┘
```

- Headline example: *"Engineer first."* / **"Builder by habit."**
- **Spec sheet**: a definition list (`<dl>`) styled like a car spec card — label left in `graphite small`, value right in `ink body`, rows divided by `border-contour` hairlines. Rows: Role, Focus (AI systems, full-stack), Core stack, AI tooling (LLMs, RAG, agents, MCP), Languages, Based in.
- Optional: small square photo or workspace shot in `--radius-panel` frame. No big-number stats row.

### 5.3 Services (`#services`)

- Headline example: *"What I can build for you."* / **"Four ways to work together."**
- Spec rows as described in 4.3.
- Below the rows, the **engagement process** — this *is* a sequence, so numbering is appropriate here: 1 Call, 2 Proposal, 3 Build in weekly releases, 4 Launch and handover. Horizontal on desktop, vertical on mobile, connected by a 1px ink line.

### 5.4 Projects (`#work`)

- Headline example: *"Recent work."* / **"Shipped, not just sketched."**
- Asymmetric gallery per 4.4. Show 4–6 projects; link "All projects" to GitHub if there are more.
- Case-study modal (optional, phase 2): problem, what I built, stack, result, screenshots. Uses `<dialog>` with Motion for open/close.

### 5.5 Contact (`#contact`) — the one full-volt section

The single place the lime floods the screen, signalling "this is where it happens."

```
┌────────────────────── bg-volt, full bleed ──────────────────────┐
│  Let's talk about your project.  (serif)                        │
│  Book a free 30-minute call.     (sans 800)                     │
│                                                                 │
│  ┌ Pick a time ╲───────────────────────┐  [WhatsApp]  WhatsApp  │
│  │                                     │  [  Mail  ]  Email     │
│  │      Calendly inline embed          │                        │
│  │      (paper surface)                │  Reply within 24 hours │
│  └─────────────────────────────────────┘                        │
└─────────────────────────────────────────────────────────────────┘
```

**Calendly** — inline embed, lazy-loaded when the section nears the viewport (keeps the hero fast):

```tsx
// components/contact/CalendlyEmbed.tsx
"use client";
import Script from "next/script";
import { useInView } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/site";

export function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "600px 0px" });
  const url =
    `${site.calendlyUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=151514&primary_color=151514`;

  return (
    <div ref={ref} className="min-h-[680px]">
      {near && (
        <>
          <div className="calendly-inline-widget h-[680px] w-full" data-url={url} />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </>
      )}
      <noscript>
        <a href={site.calendlyUrl}>Book a call on Calendly</a>
      </noscript>
    </div>
  );
}
```

- Calendly's `primary_color` is set to **ink**, not lime: inside the white frame, lime would fail contrast on date buttons.
- Always render a fallback link ("Open the booking page") under the embed in case the script is blocked.

**WhatsApp & Gmail** — central config so links are defined once:

```ts
// lib/site.ts
export const site = {
  name: "Ahmed",
  calendlyUrl: "https://calendly.com/<your-handle>/30min",
  email: "<you>@gmail.com",
  whatsapp: "92XXXXXXXXXX", // international format, digits only, no + or leading 0
};

export const links = {
  whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Ahmed, I saw your portfolio and I'd like to discuss a project."
  )}`,
  // Opens Gmail web compose directly:
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${encodeURIComponent(
    "Project inquiry"
  )}`,
  // Fallback for any mail client:
  mailto: `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`,
};
```

- Desktop: Email button uses `links.gmail`; on mobile, prefer `links.mailto` (opens the native mail app). Detect with a `pointer: coarse` media query, or simply offer both: button → Gmail, small text link "or use your mail app" → mailto.
- Show the email address as selectable text too, so people can copy it.

### 5.6 Footer

`bg-ink text-chalk`, compact: wordmark (inverted), section links, social icons (GitHub, LinkedIn), "© 2026 Ahmed". A thin contour-line strip in `#2A2A27` across the top edge ties it back to the hero.

---

## 6. Layout & spacing

### Grid

| Breakpoint | Width | Columns | Gutter | Outer margin |
|---|---|---|---|---|
| base | < 640px | 4 | 16px | 20px |
| `sm` | ≥ 640px | 8 | 20px | 24px |
| `lg` | ≥ 1024px | 12 | 24px | 40px |
| `xl` | ≥ 1280px | 12 | 32px | 56px |
| `2xl` | ≥ 1536px | 12 | 32px | auto (container max 1440px) |

```tsx
// components/layout/Container.tsx
export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-10 xl:px-14 ${className}`}>{children}</div>
);

// 12-col grid wrapper
<div className="grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-5 lg:grid-cols-12 lg:gap-6 xl:gap-8" />
```

### Alignment

- Headlines and body copy are **left-aligned** everywhere. Only the hero portrait is centered.
- Section headlines start at column 1; body text starts at column 1 and stops by column 8 on desktop to keep line length under 65ch.

### Spacing scale (4px base — Tailwind defaults)

| Token | Value | Use |
|---|---|---|
| `1`–`2` | 4–8px | Icon-to-label gaps |
| `3`–`4` | 12–16px | Inside buttons, list items |
| `6` | 24px | Card padding (mobile), between related blocks |
| `8`–`10` | 32–40px | Card padding (desktop), headline → body |
| `16` | 64px | Headline block → section content |
| Section | `clamp(6rem, 12vw, 11rem)` | Vertical padding of every section (`py-[clamp(6rem,12vw,11rem)]`) |

Define section padding once in a `Section` component so sections never stack conflicting margins:

```tsx
export function Section({ id, className = "", children }: { id: string; className?: string; children: React.ReactNode }) {
  return <section id={id} className={`relative py-[clamp(6rem,12vw,11rem)] ${className}`}>{children}</section>;
}
```

Children of `Section` never set their own top/bottom margins at the root — spacing belongs to the parent.

---

## 7. Interactions & animations

Library: **Motion** (`npm i motion`, import from `motion/react` — the current name of Framer Motion). CSS transitions for simple hovers.

### 7.1 The one orchestrated moment — hero load (≈1.4s)

| t (ms) | Element | Animation |
|---|---|---|
| 0 | Contour lines | `pathLength` 0 → 1, staggered 40ms, 1200ms `ease-glide` |
| 150 | Portrait | opacity 0 → 1, y 24 → 0, 700ms `ease-snap` |
| 450 | **Visor Band** | `clipPath: inset(0 100% 0 0)` → `inset(0 0 0 0)`, 550ms `ease-snap` — slashes in from the left |
| 600 | Ghost trails | opacity 0 → 0.6, x -40 → 0, 600ms |
| 300 | Headline lines | each line rises from a mask (`y: "105%" → 0`), 90ms stagger |
| 800 | CTAs + availability card | opacity 0 → 1, 400ms |
| 1400 | Band marquee | starts scrolling (40s per loop, linear) |

```tsx
// lib/motion.ts
export const ease = {
  snap: [0.22, 1, 0.36, 1] as const,
  glide: [0.65, 0, 0.35, 1] as const,
};

export const lineReveal = {
  hidden: { y: "105%" },
  show: (i: number) => ({ y: 0, transition: { duration: 0.7, ease: ease.snap, delay: 0.3 + i * 0.09 } }),
};

export const visorSlash = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: { clipPath: "inset(0 0% 0 0)", transition: { duration: 0.55, ease: ease.snap, delay: 0.45 } },
};
```

Headline line mask pattern:

```tsx
<span className="block overflow-hidden">
  <motion.span className="block" variants={lineReveal} custom={0} initial="hidden" animate="show">
    Hi, I'm Ahmed.
  </motion.span>
</span>
```

### 7.2 Scroll behaviour — restrained

- **Only section headlines reveal on scroll**, using the same line-mask rise (`whileInView`, `viewport={{ once: true, amount: 0.6 }}`). Body text, rows and cards are simply *there* — no fade-up on every block.
- **Contour parallax**: the hero `ContourField` drifts up at 0.3× scroll speed (`useScroll` + `useTransform`), and only within the hero.
- **Portrait parallax**: portrait moves at 0.85×, band at 1.0× — the band slides slightly across the face as you scroll, a quiet nod to the reference's 3D visor.

### 7.3 Hover & press (user-triggered — welcome)

| Element | Hover | Press / open |
|---|---|---|
| Primary button | volt ↔ ink swap, 200ms; icon lifts 2px | scale 0.98 |
| Secondary button | fills ink, text chalk | scale 0.98 |
| Contact icon buttons | fill ink, icon takes brand color | scale 0.96 |
| Menu button | lines slide to equal length | lines rotate into × (Motion `layout`) |
| Service row | name shifts right 8px; `+` turns ink-filled | `+` rotates 45°; panel expands (height auto via `AnimatePresence`, 350ms `ease-snap`) |
| Project card | image scales 1.03 over 600ms; a thin **volt band sweeps across the image** once (callback to the Visor Band) | — |
| Nav link (overlay) | serif line shifts to italic | — |

Hover effects apply only on `(hover: hover)` devices — use Tailwind's `hover:` (v4 already scopes it to hover-capable pointers).

### 7.4 Reduced motion & performance

- Wrap animated components with `useReducedMotion()`; when true: no path drawing, no parallax, no marquee (band shows a static phrase), reveals become instant opacity changes.
- Animate only `transform`, `opacity` and `clip-path`. Never animate `width`, `top` or `box-shadow`.
- Mark the hero portrait `priority` in `next/image`; everything below the fold lazy-loads. Calendly loads only near `#contact`.
- Target: LCP < 2.0s on 4G, CLS < 0.05 (reserve heights for the portrait and Calendly frame).

---

## 8. Accessibility baseline

- Focus ring: `outline-2 outline-offset-4 outline-ink` everywhere (on volt sections too — ink on lime is high contrast). Never remove outlines.
- Skip link: "Skip to content" as the first focusable element, visible on focus.
- All icon-only buttons have `aria-label`; decorative SVGs (`ContourField`, Visor Band) are `aria-hidden`.
- Headline hierarchy: one `h1` (hero), one `h2` per section, `h3` for service and project titles.
- Color is never the only signal (active nav uses a square marker *and* `aria-current`).
- Test at 200% zoom and at 360px width.

---

## 9. File architecture

```
app/
  layout.tsx            # fonts, metadata, <body>
  page.tsx              # composes sections in order
  globals.css           # @theme tokens, utilities, .tab-clip
  fonts.ts
components/
  layout/  Header.tsx  MenuOverlay.tsx  Footer.tsx  Container.tsx  Section.tsx
  hero/    Hero.tsx  ContourField.tsx  VisorBand.tsx  AvailabilityCard.tsx
  about/   About.tsx  SpecSheet.tsx
  services/ Services.tsx  ServiceRow.tsx  Process.tsx
  work/    Work.tsx  ProjectCard.tsx
  contact/ Contact.tsx  CalendlyEmbed.tsx  ContactIconButton.tsx
  ui/      Button.tsx  TabCard.tsx  Icon.tsx
content/
  services.ts           # typed service data
  projects.ts           # typed project data
lib/
  site.ts               # name, email, WhatsApp, Calendly URL
  motion.ts             # easings and variants
  cn.ts                 # clsx + tailwind-merge
hooks/
  useActiveSection.ts
public/
  portrait.avif         # transparent cut-out
  projects/*.avif
```

Server Components by default; add `"use client"` only to `Header`, `MenuOverlay`, `VisorBand`, `ContourField` (parallax), `ServiceRow`, `CalendlyEmbed`, and anything using Motion hooks.

---

## 10. Do / Don't checklist

**Do**
- Keep lime to one action per viewport, plus the contact section.
- Write every headline as serif line + grotesk line.
- Use the Tab Card for labelled information, not as a default box.
- Ship real screenshots and one-sentence outcomes for every project.

**Don't**
- Reuse any logos, helmet art or imagery from the reference site.
- Add an all-caps eyebrow above each heading, or numbered markers on non-sequential content.
- Fade-up every card and paragraph on scroll.
- Use lime as text, borders or focus rings on light backgrounds.
- Add a third typeface.
