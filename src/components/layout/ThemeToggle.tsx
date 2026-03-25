/**
 * src/components/layout/ThemeToggle.tsx
 *
 * A button in the top-right corner that switches between dark and light mode.
 *
 * - Shows a Sun icon in dark mode (clicking it activates light mode)
 * - Shows a Moon icon in light mode (clicking it activates dark mode)
 * - Uses Lucide React for icons (Sun, Moon)
 * - Uses Framer Motion for a smooth rotation animation on toggle
 * - Receives theme state and toggle function as props from App.tsx
 */

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-4 right-4 z-50 w-9 h-9 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 cursor-pointer flex items-center justify-center"
    >
      {/* AnimatePresence allows Framer Motion to animate elements as they
          enter and leave the DOM (here, swapping Sun <-> Moon icons) */}
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
