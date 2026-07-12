# Nate Cowperthwaite
### Chef · Co-Founder · Developer

A dual-identity portfolio where the precision of a professional chef meets the ingenuity of a self-taught developer. I build robust, high-performance digital experiences that blend operational rigor with creative design.

🌐 **Live Site:** [shadowwalker.onrender.com](https://shadowwalker.onrender.com)

---

## 💡 Philosophy

The best software — like the best cuisine — is built on clean ingredients and executed with absolute precision. My background in the culinary arts informs everything I build: a relentless focus on the end user, operational efficiency under pressure, and the discipline to refine until it's right.

---

## 🛠️ Featured Work

| Project | What it does |
|---|---|
| [**CulinaryOS**](https://github.com/ShadowWalkerNC/CulinaryOS) | AI-powered kitchen operations platform — the hub of the culinary ecosystem |
| [**KitchenKit**](https://github.com/ShadowWalkerNC/KitchenKit) | Recipe manager + shift prep planner with ratio engine and mise en place generation |
| [**Plated**](https://github.com/ShadowWalkerNC/Plated) | Open-source restaurant website builder — 6 hospitality themes, one-click deploy, CulinaryOS native |
| [**Post-Pilot**](https://github.com/ShadowWalkerNC/Post-Pilot) | Automated social media post generator for food & hospitality businesses |
| [**Shoreline**](https://github.com/ShadowWalkerNC/Shoreline) | Mission-control Discord bot for care operations |
| [**Sigil**](https://github.com/ShadowWalkerNC/Sigil) | Discord bot for community management |
| [**ASCILINE 2.0**](https://github.com/ShadowWalkerNC/ASCILINE) | ASCII art CLI tool |

→ [View all projects on the live site](/dev/projects)

---

## ⚙️ Stack

- **Framework:** Astro 4 (static output, zero JS by default)
- **Styling:** Custom CSS design token system — no utility framework
- **Content:** Astro Content Collections (`src/content/projects/`)
- **Icons:** Devicon CDN
- **Hosting:** Render (static site, global CDN)
- **Node:** 20

---

## ✨ Signature Features

1. **Dynamic Cursor Spotlight Glows** — JavaScript tracks cursor position (`--mouse-x` / `--mouse-y`) to power interactive glow effects across cards and split-panels
2. **Layered Mesh Gradients** — Deep radial mesh backgrounds replace flat linear gradients on the portal landing screen
3. **Context-Aware Favicons** — Tab emoji swaps dynamically between 💻 (dev routes) and 👨‍🍳 (chef routes)
4. **macOS IDE Code Showcase** — Sleek code preview container on the developer home page
5. **DM Serif Display** — Custom font accents on the chef side for a hand-crafted, artisanal feel
6. **Client-Side Project Filtering** — Animated category filters on `/dev/projects`
7. **Culinary Gallery** — Curated Maine food photography natively embedded on `/food`

---

## 🔬 Architecture

```
src/
├── components/
│   ├── EcosystemBanner.astro   # "Two worlds, one person" dual-identity banner
│   ├── Hero.astro               # Dev-side hero with orb animations + stat bar
│   ├── ProjectCard.astro        # Full-featured card (expand/collapse, spotlight glow)
│   ├── ProjectGroup.astro       # Grouped project section header
│   ├── TechBadge.astro          # Tech stack pill badge
│   └── Footer.astro
├── content/projects/            # One JSON file per project (Content Collections)
├── layouts/BaseLayout.astro     # Root layout — head, nav, scroll-reveal init
├── pages/
│   ├── index.astro              # Landing — dual identity hub
│   ├── dev/index.astro          # Dev profile — timeline, kit, featured projects
│   ├── dev/projects.astro       # All dev projects, grouped + filterable
│   ├── food/index.astro         # Chef profile — skills, experience, gallery
│   ├── contact.astro
│   └── 404.astro
├── styles/global.css            # Design tokens, resets, shared utilities
└── utils/                       # Shared JS helpers
```

**Design tokens (key subset):**
```css
--bg-base, --bg-surface, --bg-elevated
--accent-blue, --accent-blue-pale   /* dev side */
--accent-ember, --accent-ember-pale /* food side */
--text-primary, --text-muted
--border-subtle, --font-serif
```

---

## 🚀 Local Dev

```bash
npm install
npm run dev       # → http://localhost:4321
```

**Deploy (Render):**

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Env Var | `NODE_VERSION=20` |

Every push to `main` auto-deploys on Render.

---

## 📬 Contact

Built and maintained by **Nate Cowperthwaite.**
→ [Live site](https://shadowwalker.onrender.com) · [GitHub](https://github.com/ShadowWalkerNC) · Discord: ShadowWalkerNC
