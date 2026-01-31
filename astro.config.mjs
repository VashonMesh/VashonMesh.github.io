import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://vashonmesh.github.io',
    vite: {
        plugins: [tailwindcss()],
    },
});

// markdown options: https://docs.astro.build/en/guides/markdown-content/#markdown-plugins