import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    emoji: z.string(),
    tagline: z.string(),
    description: z.string(),
    status: z.enum(['In Dev', 'Active Rebuild', 'Stable', 'Internal', 'Archived']),
    category: z.enum(['food-tech', 'facility-ops', 'dev-tools', 'experimental']),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
