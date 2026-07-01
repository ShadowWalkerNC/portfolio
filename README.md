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
