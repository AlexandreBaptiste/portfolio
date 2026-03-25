/**
 * src/components/layout/LanguageToggle.tsx
 *
 * A button that switches between English and French, placed next to
 * the ThemeToggle in the top-right corner of the page.
 *
 * - Shows "FR" when the current language is English  (clicking → French)
 * - Shows "EN" when the current language is French   (clicking → English)
 * - Uses Framer Motion for a smooth flip animation on toggle
 * - Receives language state and toggle function as props from App.tsx
 */

import { motion, AnimatePresence } from 'framer-motion'

interface LanguageToggleProps {
  /** Current language: 'en' or 'fr' */
  language: 'en' | 'fr'
  /** Called when the button is clicked */
  toggleLanguage: () => void
}

export function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  const label = language === 'en' ? 'FR' : 'EN'
  const ariaLabel =
    language === 'en'
      ? 'Switch to French / Passer en francais'
      : 'Switch to English / Passer en anglais'

  return (
    <button
      onClick={toggleLanguage}
      aria-label={ariaLabel}
      className="fixed top-4 right-14 z-50 w-9 h-9 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-300 cursor-pointer flex items-center justify-center text-xs font-semibold tracking-wider overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
