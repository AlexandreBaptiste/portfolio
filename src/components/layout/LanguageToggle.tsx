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
import frFlag from 'flag-icons/flags/1x1/fr.svg'
import gbFlag from 'flag-icons/flags/1x1/gb.svg'

interface LanguageToggleProps {
  language: 'en' | 'fr'
  toggleLanguage: () => void
}

const FLAGS: Record<'en' | 'fr', { src: string; ariaLabel: string }> = {
  en: { src: frFlag, ariaLabel: 'Switch to French / Passer en français' },
  fr: { src: gbFlag, ariaLabel: 'Switch to English / Passer en anglais' },
}

export function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  const { src, ariaLabel } = FLAGS[language]

  return (
    <button
      onClick={toggleLanguage}
      aria-label={ariaLabel}
      className="fixed top-4 right-14 z-50 w-9 h-9 rounded-full border border-[var(--color-border)] cursor-pointer overflow-hidden p-0"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full object-cover block"
        />
      </AnimatePresence>
    </button>
  )
}
