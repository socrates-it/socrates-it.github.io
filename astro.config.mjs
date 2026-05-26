// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'
// noinspection ES6PreferShortImport

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  site: process.env.SITE || 'https://socrates-conference.it',
  base: process.env.BASE_PATH || '/',
  server: {
    allowedHosts: ['socrates-conference.it', 'www.socrates-conference.it', 'localhost', 'www.socrates-conference.local'],
  },
})
