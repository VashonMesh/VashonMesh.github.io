import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://vashonmesh.org', // was github.io

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    })
  ],

  markdown: {
    remarkPlugins: [
      [remarkToc, {
        heading: 'contents|table[ -]of[ -]contents?',
        tight: true,
        ordered: false
      }]
    ],
    rehypePlugins: [rehypeSlug],
  },
});
