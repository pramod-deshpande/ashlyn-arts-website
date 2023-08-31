import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    viewTransitions: true
   },
   site: 'https://pramod-kun.github.io',
   base:'/ashlyn-arts-website'
});