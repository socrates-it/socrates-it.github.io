// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'
import { BASE_PATH } from './src/common/constants.js'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  site: `https://doubleloop-io.github.io${BASE_PATH}`,
  base: `${BASE_PATH}`,
})
