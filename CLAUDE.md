# Personal Portfolio — CLAUDE.md

## Project Overview

Andrea López Palomeque's personal portfolio and brand experience. This is NOT a developer resume template — it's a brand page that establishes trust with creative professionals while also serving recruiters through a dedicated secondary page.

**Live URL**: https://andrealopezpalomeque.dev
**Secondary URL**: https://andrea-lopez-palomeque.web.app (keep working, don't break)
**Repository**: https://github.com/andrealopezpalomeque/personal-portfolio
**Deployment**: Firebase Hosting (static generation)

## Two Audiences — Two Layers

1. **Primary — Creative professionals** (architects, engineers, makers): The homepage (`/`) is a brand experience. No tech badges, no GitHub links, no chronological job list. They need to trust Andrea's taste before anything else.
2. **Secondary — Recruiters**: The developer page (`/dev`) has the full technical picture — work history, tech stacks, project cards with GitHub links, resume download.

This separation is a deliberate strategic choice. Never mix recruiter content into the brand page.

## Tech Stack

- **Framework**: Nuxt (Vue 3) — static site generation
- **Package Manager**: yarn (NEVER npm)
- **Styling**: Tailwind CSS (configured with custom design tokens below)
- **TypeScript**: Strict typing for all data structures
- **Icons**: Iconify (`~icons/pack-name/icon-name`)
- **Deployment**: Firebase Hosting via `yarn generate` + `firebase deploy`
- **Fonts**: Google Fonts CDN (Instrument Serif + DM Sans)
- **Animations**: CSS-only (@keyframes + IntersectionObserver for scroll reveals). NO animation libraries.

## Design Direction

**Editorial, magazine-inspired. Stefan Stefancik's warmth + VandsLab energy in the work section.**

This portfolio should feel like walking into a well-designed space. Confident. Intentional. Alive — but not loud. Think high-end design studio, not developer template.

### Key Design Principles
- **Typography IS the design** — oversized serif headlines are the primary visual element
- **Whitespace communicates confidence** — generous padding, sections that breathe
- **Scroll-driven pacing** — statement, pause, visual, pause, statement
- **Subtle motion only** — fade-ins, gentle reveals, nothing flashy or competing for attention
- **No dark mode** — the warm palette is the identity
- **Muted sophistication** — not pure black on white, warm charcoal on warm off-white

## Typography

### Fonts
- **Display / Headlines**: `Instrument Serif` (Google Fonts)
  - For: Andrea's name, section headings, manifesto statements, project titles
  - Size: 48-120px on desktop, use `clamp()` for fluid scaling
  - Weight: 400 (Regular) only — never bold
  - ⚠️ NEVER use below 40px — this is a display-only font, illegible at small sizes
- **Body / UI / Navigation**: `DM Sans` (Google Fonts)
  - For: paragraphs, navigation, labels, descriptions, buttons, /dev page content
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
  - Body size: 15-16px with generous line-height (1.6-1.7)

### Typography Rules
- Navigation: DM Sans 500, uppercase with letter-spacing (0.05-0.08em), small size (12-13px)
- Labels/dates: DM Sans 400, `--text-muted` color
- Project stories: DM Sans 400, `--text-secondary` color, 15px
- Manifesto big text: Instrument Serif 400, 48-64px desktop, `--text-primary`
- Consider mixing emphasis within manifesto: key words in `--text-secondary` or `--text-muted` for contrast

## Color Palette

```css
:root {
  --bg: #F5F2EE;              /* warm off-white — page background */
  --text-primary: #1A1A1A;    /* near-black — headlines, name */
  --text-secondary: #6B6560;  /* warm gray — body text, descriptions */
  --text-muted: #A39E99;      /* light warm gray — labels, dates */
  --accent: #2D2D2D;          /* charcoal — buttons, interactive elements */
  --divider: #E5E0DA;         /* subtle warm line — section dividers */
}
```

### Color Rules
- Background is ALWAYS `--bg` (#F5F2EE), never pure white
- Text is ALWAYS `--text-primary` (#1A1A1A), never pure black (#000)
- No bright accent colors — the typography is the accent
- Hover states: subtle opacity changes or underlines, not color shifts
- Links on the brand page: styled subtly, no aggressive blue

## Site Structure

### Homepage (`/`) — Brand Experience
```
Hero Section
  → Name in oversized Instrument Serif with fluid clamp() sizing
  → Option A statement ("I build digital spaces for people who care deeply about their craft...")
  → "Frontend Developer · Buenos Aires" label
  → Minimal right-aligned nav: Work / About / Contact / For Recruiters
  → Staggered fade-in animations on load
  → Pulsing "scroll" indicator

Breathing Divider
  → Thin vertical line + whitespace

Featured Work Section (VandsLab energy)
  → Two full-width stacked projects: El Gran Peón + Text the Check
  → Large screenshots (video-ready markup — can swap <img> for <video>)
  → Project titles in Instrument Serif
  → 2-sentence stories in DM Sans
  → "Visit" links
  → Scroll-reveal animations (fade/slide, staggered, one-shot)

Manifesto Block
  → "Your brand should feel like a natural extension of who you are..."
  → Big Instrument Serif statement (48-64px desktop)
  → Supporting line in DM Sans
  → Generous whitespace

About Section
  → DM Sans throughout (no Instrument Serif except maybe a small label)
  → Short bio: 4+ years, startups, brand identity, WiseUtils with Imanol
  → Links to WiseUtils, LinkedIn inline

Contact Section
  → "Let's talk" in Instrument Serif
  → Warm invitation copy
  → Email link (prominent)
  → GitHub + LinkedIn text links
  → Small footer with copyright
```

### Developer Page (`/dev`) — For Recruiters
```
  → "For Recruiters" heading
  → Chronological work experience (Meowtel, Asteroid, TelCo, WiseUtils)
  → Full project cards with tech stacks + GitHub links + live demo links
  → Skills/tools section
  → Resume download link
  → Styled in the warm palette, DM Sans throughout
```

## Animation Patterns

### Load Animations (Hero only)
- Staggered fade-in: elements appear one after another with slight delay
- CSS @keyframes with animation-delay — no JavaScript libraries
- Keep it subtle — opacity 0→1, maybe slight translateY

### Scroll Reveal (All other sections)
- Use IntersectionObserver (via @vueuse/nuxt `useIntersectionObserver`)
- Elements start with opacity: 0, translate-y: 20px
- Transition to opacity: 1, translate-y: 0 when entering viewport
- One-shot triggers — animate once, don't repeat
- Stagger child elements with incremental delay

### What NOT to animate
- No parallax scrolling
- No horizontal scroll sections
- No cursor followers or custom cursors
- No page transition animations
- No bouncing or elastic easing — use ease-out or cubic-bezier for calm motion

## Component Conventions

### File Organization
```
components/
  sections/
    Hero.vue
    FeaturedWork.vue
    Manifesto.vue
    About.vue
    Contact.vue
  ui/
    (minimal — only if truly reusable)
pages/
  index.vue          ← Brand experience homepage
  dev.vue             ← Recruiter page
assets/
  css/main.css        ← CSS variables, font imports, global resets
public/
  images/projects/    ← Project screenshots
```

### Component Rules
- One section component per major page block
- Props for content when it makes sense, but hardcoded copy is fine for a personal portfolio
- Keep components focused — don't nest more than 2 levels deep
- Use Tailwind exclusively — no `<style>` blocks unless absolutely necessary

## Code Standards

- **Language**: Code and comments in English
- **TypeScript**: Strict typing for data structures
- **Styling**: Tailwind CSS only — custom CSS only for things Tailwind can't do (like font-face, CSS variables, keyframes)
- **Icons**: Iconify only
- **No additional UI libraries**: No Vuetify, Quasar, Headless UI, etc.
- **No additional font libraries**: Only Instrument Serif + DM Sans via Google Fonts

## Content — Andrea's Story

Andrea López Palomeque is a frontend developer based in Buenos Aires, Argentina, with 4+ years of experience. She has a design eye and product-oriented approach. She's positioning herself as the person who builds digital presences for creative professionals — architects, engineers, independent makers.

### Key projects to feature:
- **El Gran Peón** (elgranpeon.com) — Full brand identity + e-commerce for Argentine artisanal goods. Shows brand thinking.
- **Text the Check** (textthecheck.app) — WhatsApp-first financial companion with AI (Gemini). Shows product thinking.

### Background:
- Co-founding WiseUtils with Imanol Corimayo — AI-first solutions for small businesses
- Former frontend developer at Meowtel (cat-sitting marketplace, acquired by Rover)
- Former fullstack developer at Asteroid Technologies
- Starting Software Engineering degree in 2026
- From Corrientes, based in Buenos Aires

### Voice:
- Warm, confident, intentional
- Speaks about helping others show their work to the world
- Believes a portfolio should feel like a natural extension of who you are
- Not corporate, not overly casual — professional with soul

## Deployment

```bash
# Build static site
yarn generate

# Deploy to Firebase (serves both andrealopezpalomeque.dev and .web.app)
firebase deploy
```

## What to NEVER Do

- Don't add tech badges or skill pills to the homepage
- Don't add dark mode — the warm palette is the brand identity
- Don't use Inter, Roboto, Arial, or any generic font
- Don't use pure black (#000) or pure white (#FFF)
- Don't add heavy animation libraries (GSAP, Framer Motion, etc.)
- Don't put GitHub links or tech stacks on the homepage — those belong on /dev
- Don't use npm — always yarn
- Don't break the .web.app URL — both domains must work
- Don't make the site feel like a developer template — it should feel like a design studio