/**
 * vitest.config.ts
 *
 * Vitest test runner configuration (separate from vite.config.ts because
 * Vite's TypeScript types do not include the 	est property).
 *
 * - environment: 'jsdom' simulates a browser DOM so React components can
 *   render in Node without a real browser.
 * - setupFiles: runs src/test/setup.ts before every test file — loads
 *   the jest-dom custom matchers (toBeInTheDocument, etc.)
 * - globals: true allows using describe/it/expect without importing them.
 * - resolve.alias: mirrors vite.config.ts so "@/" imports work in tests too.
 */
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
