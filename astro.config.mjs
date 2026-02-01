import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://vashonmesh.org', // was github.io

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
  })],
});
