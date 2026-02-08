import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trackwise.com',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'zh', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true
    }
  }
});
