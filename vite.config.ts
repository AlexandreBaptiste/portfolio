import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

/**
 * Vite configuration for the portfolio project.
 *
 * Key settings:
 * - `base`: Sets the public URL prefix for GitHub Pages deployment.
 *   When deployed to https://AlexandreBaptiste.github.io/portfolio, all
 *   asset paths will be prefixed with "/portfolio/". Change to "/" if
 *   using a custom domain at root.
 * - `plugins`: react() enables JSX transform; tailwindcss() is the
 *   official Tailwind CSS v4 Vite plugin (replaces PostCSS config).
 * - `resolve.alias`: Allows importing from "@/" instead of long relative
 *   paths like "../../components/..."
 *
 * NOTE: Test configuration lives in vitest.config.ts (separate file)
 * because Vite's defineConfig type does not include the `test` property.
 */
export default defineConfig({
  base: '/portfolio/',

  plugins: [
    react(),
    // Tailwind CSS v4 — no tailwind.config.ts needed, configured via CSS @theme
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // "@/" maps to the "src/" folder — e.g. import from '@/components/Hero'
      '@': resolve(__dirname, './src'),
    },
  },
})
