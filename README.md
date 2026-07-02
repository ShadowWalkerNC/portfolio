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
