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
    customize(item, page) {
      // News pages get higher priority and weekly updates
      if (page.includes('/news/')) {
        item.changefreq = 'weekly';
        item.priority = 0.9;
      }
      // Homepage gets highest priority
      if (page === 'https://vashonmesh.org/') {
        item.priority = 1.0;
      }
      // Banner page gets high priority (important for sharing)
      if (page.includes('/banner')) {
        item.priority = 0.8;
        item.changefreq = 'monthly';
      }
      return item;
    }
  })],
});
