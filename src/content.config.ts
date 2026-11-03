import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '*.json' }),
  schema: z.object({
    pageId: z.string(),
    seo: z.object({
      title: z.string().min(20).max(65),
      description: z.string().min(50).max(170),
      canonical: z.url(),
      keywords: z.array(z.string()).default([]),
    }),
    copy: z.record(z.string(), z.string()),
    imageAlt: z.record(z.string(), z.string()).optional(),
    copyLists: z.object({
      serviceTypes: z.array(z.string()),
      platforms: z.array(z.string()),
      glanceItems: z.array(z.object({ number: z.string(), title: z.string(), description: z.string(), href: z.string().optional() })),
      capabilities: z.array(z.object({ title: z.string(), description: z.string() })),
      teamRoles: z.array(z.object({ role: z.string(), tasks: z.string() })),
      planInclusions: z.array(z.string()),
      outletExamples: z.array(z.number()),
      demoAgenda: z.array(z.object({ title: z.string(), description: z.string() })),
    }).optional(),
    billingLists: z.object({
      steps: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      serviceTypes: z.array(z.object({ number: z.string(), title: z.string(), description: z.string() })),
      details: z.array(z.object({ letter: z.string(), title: z.string(), description: z.string() })),
    }).optional(),
    pricing: z.object({ multiOutletAnnualPerOutlet: z.string(), minimumOutlets: z.number(), exampleOutlets: z.array(z.number()) }).optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    plans: z.array(z.object({ months: z.number(), price: z.string() })).optional(),
  }),
});

export const collections = { pages };
