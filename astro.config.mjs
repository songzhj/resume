// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  base: '/resume',
  integrations: [react()],
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },

    plugins: [tailwindcss(), svgr()],
  },
});
