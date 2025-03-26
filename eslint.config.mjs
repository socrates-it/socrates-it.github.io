// @ts-check
// eslint.config.mjs
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,astro}'] },
  { languageOptions: { sourceType: 'commonjs', globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPrettier
]
