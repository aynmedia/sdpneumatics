/** @format */

import { defineCollection, z } from 'astro:content';

const productCollections = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    features: z.array(z.string()),
    image: z.string(),
  }),
});

const serviceCollections = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    features: z.array(z.string()),
    image: z.string(),
  }),
});
export const collections = {
  products: productCollections,
  services: serviceCollections,
};
