import { defineCollection, z } from 'astro:content';

// Shared URL field: must be a valid URL string or explicitly null.
// Using z.string().url() | z.null() gives a clear build-time error
// if a project entry has a malformed link instead of silently rendering broken hrefs.
const urlOrNull = z.string().url().nullable();

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    // ── Core identity ──────────────────────────────────────────
    title:       z.string().min(1),
    tagline:     z.string().min(1),
    description: z.string().min(1),

    // ── Narrative fields (food/culinary projects) ──────────────
    story:   z.string().optional(),
    journey: z.string().optional(),
    forWho:  z.string().optional(),

    // ── Taxonomy ───────────────────────────────────────────────
    // group:    loose label for display grouping (e.g. 'SaaS', 'CLI')
    // type:     subcategory within a group
    // category: primary display category (e.g. 'dev', 'food')
    group:    z.string().optional(),
    type:     z.string().optional(),
    category: z.enum(['dev', 'food', 'other']),

    // ── Tags & stack ──────────────────────────────────────────
    tags:  z.array(z.string().min(1)).min(1),
    stack: z.array(z.string().min(1)),

    // ── Lifecycle ─────────────────────────────────────────────
    status:   z.enum(['active', 'stable', 'archived', 'wip']),
    featured: z.boolean().default(false),

    // ── External links ────────────────────────────────────────
    // All link values must be valid URLs or explicit null.
    // Omitting the field entirely is also fine (optional wrapper).
    links: z.object({
      github: urlOrNull.optional(),
      live:   urlOrNull.optional(),
      demo:   urlOrNull.optional(),
      docs:   urlOrNull.optional(),
    }).optional(),

    // ── Technical detail (dev projects) ───────────────────────
    detailedSpecs: z.object({
      architecture:  z.string().optional(),
      dataFlow:      z.string().optional(),
      keyPatterns:   z.array(z.string()).optional(),
      apiSurface:    z.string().optional(),
      deployTarget:  z.string().optional(),
      notableFiles:  z.array(z.string()).optional(),
    }).optional(),
  }),
});

export const collections = { projects };
