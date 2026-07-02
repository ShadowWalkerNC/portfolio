# ShadowWalkerNC Portfolio

Personal portfolio site built with [Astro](https://astro.build) + Tailwind CSS, hosted on [Render](https://render.com).

## Stack

- **Astro 4** — static site generator, Island Architecture
- **Tailwind CSS** — utility-first styling
- **React** — interactive islands where needed
- **Render** — static site hosting (free tier, global CDN)

## Pages

- `/` — Hero, About, Stack, Featured Projects
- `/projects` — All projects grouped by category
- `/contact` — Email + GitHub links

## Local Dev

```bash
npm install
npm run dev
```

## Deploy (Render)

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Node Version | `NODE_VERSION=20` (env var) |

Every push to `main` triggers an auto-deploy.

---

## 🗂️ Featured Projects

### NexCMS

**A guided website builder for the restaurant and hospitality industry.**

> Build your restaurant website in minutes — not months.
> Pick a template. Fill in your info. Export and deploy anywhere.
> Or use the online hub and manage everything from your phone.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Status: Phase 0](https://img.shields.io/badge/Status-Phase%200%20Planning-yellow)]()
[![Stack: Astro + Supabase + TypeScript](https://img.shields.io/badge/Stack-Astro%20%2B%20Supabase%20%2B%20TypeScript-blue)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

NexCMS is a guided website builder built specifically for restaurants, food trucks, bars, cafés, and hospitality businesses. It walks users through every step — business info, hours, menu, social media, branding — and produces a professional, SEO-optimized website deployable anywhere.

**Two modes:**
- **Local Builder** — download the app, build on your computer, export a deployable zip with instructions
- **SaaS Hub** — go to nexcms.io, build and manage your site entirely in-browser from any device

**Tech Stack:** Turborepo + pnpm · TypeScript · Astro 5 · React 19 · Supabase (PostgreSQL) · Tailwind CSS · Railway · Cloudflare

**Key Features:**
- Guided onboarding wizard — coached step-by-step, not a blank form
- Two-axis template system — pick a business type + a visual style independently
- 8 hospitality business types: Restaurant, Food Truck, Bar, Café, Bakery, Catering, Food Stand, Ghost Kitchen
- 6 visual styles: Hearth, Spark, Steel, Bloom, Obsidian, Ghost — each with Light/Dark variants
- SEO auto-generation — meta tags, sitemap, robots.txt, Schema.org structured data
- Live editing without rebuild (SaaS mode) — changes go live in under 10 seconds
- Mobile-first SaaS dashboard designed for phone management
- Full Astro source export — no vendor lock-in

**Roadmap:**

| Phase | Timeline | Goal |
|---|---|---|
| **Phase 0 — Replan** | Now → Jul 2026 | Lock types, template spec, Supabase schema, monorepo scaffold |
| **Phase 1 — Generator Core** | Jul → Sep 2026 | `generator` + `template-engine`. JSON in → Astro site out |
| **Phase 2 — Local Builder** | Sep → Nov 2026 | Full wizard UI, all 8 business types, all 6 styles |
| **Phase 3 — SaaS Foundation** | Nov 2026 → Feb 2027 | Supabase, account system, mobile dashboard, live editing |
| **Phase 4 — SaaS Polish** | Feb → Apr 2027 | GitHub push, one-click deploy, analytics, SEO automation |
| **Phase 5 — Public Launch** | Q2 2027 | nexcms.io public, docs, pricing, template marketplace |

🔗 [GitHub Repository](https://github.com/ShadowWalkerNC/NexCMS)

---

## 🗂️ Session TODO Checklist

> This checklist is committed to the repo so context is never lost between sessions.
> Work through these **one at a time**, committing each to `main` before moving to the next.
> Check off items by replacing `[ ]` with `[x]` as they are completed.

### 🏠 Phase 1 — Foundation & Structure
- [ ] **1.1** Audit existing `src/` files — document what's already built vs. placeholder
- [ ] **1.2** Set up base `Layout.astro` with meta tags, Open Graph, and favicon support
- [ ] **1.3** Create global CSS variables / design tokens (colors, fonts, spacing) in `src/styles/`
- [ ] **1.4** Add a `public/` folder with favicon, og-image, and any static assets

### 🦸 Phase 2 — Hero & About Sections
- [ ] **2.1** Build `Hero` component — name, title, tagline, CTA buttons (GitHub / Contact)
- [ ] **2.2** Build `About` component — bio paragraph, avatar/photo slot, location/status badge
- [ ] **2.3** Add animated entrance (CSS or Framer Motion) to Hero section
- [ ] **2.4** Mobile-first responsive check on Hero + About

### 🛠️ Phase 3 — Tech Stack Section
- [ ] **3.1** Build `Stack` component — icon grid of languages/tools (JS, Python, Astro, etc.)
- [ ] **3.2** Source and add SVG icons for each technology
- [ ] **3.3** Add hover tooltips on each stack icon showing skill level or usage context

### 📁 Phase 4 — Projects Pages
- [ ] **4.1** Define project data schema in `src/content/` (Astro Content Collections)
- [ ] **4.2** Add all projects as content entries: Sigil, Shoreline, CulinaryOS, Post-Pilot, ASCILINE 2.0, ShadowBot, NexCMS
- [ ] **4.3** Build `ProjectCard` component — title, description, tags, links (GitHub / live)
- [ ] **4.4** Build `/projects` page — grouped by category (Discord Bots, Food Tech, Tools, etc.)
- [ ] **4.5** Build featured projects section on homepage (top 3 picks)
- [ ] **4.6** Add project detail pages or modal expand for each project

### 📬 Phase 5 — Contact Page
- [ ] **5.1** Build `/contact` page — email link, GitHub link, Discord handle
- [ ] **5.2** Add a simple contact form (Netlify Forms or Formspree) with spam protection
- [ ] **5.3** Social link icons row (GitHub, Discord, LinkedIn if applicable)

### 🎨 Phase 6 — Polish & UI
- [ ] **6.1** Choose and apply a cohesive color theme (dark mode recommended)
- [ ] **6.2** Add smooth page transitions (Astro View Transitions API)
- [ ] **6.3** Add scroll-reveal animations on section entry
- [ ] **6.4** Typography pass — heading sizes, line heights, font pairing
- [ ] **6.5** Add a sticky or fixed navbar with active page highlighting
- [ ] **6.6** Add footer with copyright + links

### ⚙️ Phase 7 — SEO & Performance
- [ ] **7.1** Add `<meta>` SEO tags to all pages (title, description, OG tags)
- [ ] **7.2** Generate sitemap via Astro sitemap integration
- [ ] **7.3** Add `robots.txt`
- [ ] **7.4** Run Lighthouse audit and fix any issues scoring below 90

### 🚀 Phase 8 — Deployment & Finalization
- [ ] **8.1** Confirm Render auto-deploy is working on push to `main`
- [ ] **8.2** Set up custom domain (if applicable)
- [ ] **8.3** Final cross-browser + mobile QA pass
- [ ] **8.4** Write final `README.md` with live site URL, screenshots, and setup instructions

---

> **Session Note:** Always commit the checklist update FIRST before starting a task, and commit again after completing it with `[x]`. This prevents lost progress if a session ends unexpectedly.
