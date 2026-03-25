/**
 * src/components/layout/LanguageToggle.tsx
 *
 * A button that switches between English and French, placed next to
 * the ThemeToggle in the top-right corner of the page.
 *
 * - Shows 🇫🇷 when the current language is English  (clicking → French)
 * - Shows 🇬🇧 when the current language is French   (clicking → English)
 * - Uses Framer Motion for a smooth slide animation on toggle
 */

import { motion, AnimatePresence } from 'framer-motion'

interface LanguageToggleProps {
  /** Current language: 'en' or 'fr' */
  language: 'en' | 'fr'
  /** Called when the button is clicked */
  toggleLanguage: () => void
}

// Shows the flag of the language you will switch TO on click:
// currently EN → show 🇫🇷 (click to go French)
// currently FR → show 🇬🇧 (click to go English)
const FLAGS: Record<'en' | 'fr', { emoji: string; ariaLabel: string }> = {
  en: { emoji: '🇫🇷', ariaLabel: 'Switch to French / Passer en français' },
  fr: { emoji: '🇬🇧', ariaLabel: 'Switch to English / Passer en anglais' },
}

export function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  const { emoji, ariaLabel } = FLAGS[language]

  return (
    <button
      onClick={toggleLanguage}
      aria-label={ariaLabel}
      className="fixed top-4 right-14 z-50 w-9 h-9 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 cursor-pointer flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={emoji}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="text-lg leading-none"
          style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}
        >
          {emoji}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
