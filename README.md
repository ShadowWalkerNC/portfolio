# Nate Cowperthwaite — Portfolio

Personal portfolio site for **Nate Cowperthwaite** — professional chef, co-founder, and self-taught developer.
Built with [Astro](https://astro.build) and a custom CSS design token system. Hosted on [Render](https://render.com).

🌐 **Live site:** [shadowwalker.onrender.com](https://shadowwalker.onrender.com) *(or your custom domain)*

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 4 (static output) |
| Styling | Custom CSS design tokens — no Tailwind |
| Content | Astro Content Collections (`src/content/projects/`) |
| Icons | Devicon CDN |
| Hosting | Render (static site, free tier, global CDN) |
| Node | 20 |

---

## Site Structure

```
src/
├── components/
│   ├── EcosystemBanner.astro   # "Two worlds, one person" dual-identity banner
│   ├── Footer.astro             # Site-wide footer
│   ├── Hero.astro               # Dev-side hero with orb animations + stat bar
│   ├── ProjectCard.astro        # Full-featured project card (expand/collapse)
│   ├── ProjectGroup.astro       # Grouped project section header
│   └── TechBadge.astro          # Inline tech stack pill badge
├── content/
│   └── projects/                # One .md/.yaml file per project
├── layouts/
│   └── BaseLayout.astro         # Root layout — head, nav, footer, scroll-reveal
├── pages/
│   ├── index.astro              # Landing page — dual identity hub
│   ├── contact.astro            # Contact page
│   ├── 404.astro                # Custom 404
│   ├── dev/
│   │   ├── index.astro          # Dev side — timeline, dev kit, featured projects
│   │   └── projects.astro       # All dev projects grouped by ecosystem
│   └── food/
│       └── index.astro          # Food side — skills table, experience, gallery CTA
├── styles/
│   └── global.css               # Design tokens, resets, shared components
└── utils/                       # Shared JS utilities
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing — dual identity hub with ecosystem banner |
| `/dev` | Developer profile — journey timeline, dev kit, featured projects |
| `/dev/projects` | All dev projects grouped by category |
| `/food` | Chef profile — skills, experience, gallery link |
| `/contact` | Email, GitHub, Discord contact page |
| `/404` | Custom not-found page |

---

## Design System

All styling runs through CSS custom properties defined in `src/styles/global.css`. No utility framework — every component uses scoped `<style>` blocks that reference global tokens.

**Key tokens:**
```css
--bg-base, --bg-surface, --bg-elevated   /* surface layers */
--text-primary, --text-secondary, --text-muted
--accent-blue, --accent-blue-pale        /* dev side */
--accent-ember, --accent-ember-pale      /* food side */
--border-subtle
--radius-sm, --radius-md, --radius-lg, --radius-full
```

---

## Local Dev

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

---

## Deploy (Render)

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Environment Variable | `NODE_VERSION=20` |

Every push to `main` triggers an auto-deploy on Render.

---

## Projects in Content Collection

Projects live in `src/content/projects/` as individual files. Current entries include:

- **CulinaryOS** — AI-powered kitchen operations platform
- **KitchenKit** — BOH management tooling
- **CulinaryOps** — Ops automation utilities
- **Plated** — Food-focused app project
- **Sigil** — Discord bot
- **Shoreline** — Discord bot
- **Post-Pilot** — Social automation tool
- **ASCILINE 2.0** — ASCII art CLI tool
- **ShadowBot** — Discord utility bot

---

## Status

All 12 core components and pages are built, token-clean, and committed to `main`. The site is fully functional and deployable.
