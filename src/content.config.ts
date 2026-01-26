// https://docs.astro.build/en/guides/content-collections/#the-collection-config-file

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
    schema: z.object({
        title: z.string().optional(),
        pubDate: z.date().optional(),
        description: z.string().optional(),
        author: z.string().optional(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(),
        tags: z.array(z.string()).optional()
    })
});

export const collections = {
    blog,
};
