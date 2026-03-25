/**
 * src/context/LanguageContext.tsx
 *
 * Provides the current language and the t() translation accessor
 * to the entire component tree, avoiding prop-drilling through
 * every section component.
 *
 * USAGE in any component:
 *   const { t, language, toggleLanguage } = useTranslation()
 *   <h2>{t.about.heading}</h2>
 *
 * In App.tsx (React 19 — context rendered directly, no .Provider):
 *   <LanguageContext value={{ language, toggleLanguage, t: translations[language] }}>
 *     ...
 *   </LanguageContext>
 */

import { createContext, useContext } from 'react'
import type { Language, Translations } from '@/i18n/translations'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  /** The full translations object for the current language */
  t: Translations
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Convenience hook — throws if used outside the LanguageContext provider.
 */
export function useTranslation(): LanguageContextType {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useTranslation must be used inside a LanguageContext provider')
  }
  return ctx
}
