import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    story: z.string().optional(),
    forWho: z.string().optional(),
    group: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    stack: z.array(z.string()),
    status: z.enum(['active', 'stable', 'archived', 'wip']),
    featured: z.boolean().default(false),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
      docs: z.string().url().optional(),
    }).optional(),
    detailedSpecs: z.object({
      architecture: z.string().optional(),
      dataFlow: z.string().optional(),
      keyPatterns: z.array(z.string()).optional(),
      apiSurface: z.string().optional(),
      deployTarget: z.string().optional(),
      notableFiles: z.array(z.string()).optional(),
    }).optional(),
  }),
});

export const collections = { projects };
