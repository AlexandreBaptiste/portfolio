/**
 * src/hooks/useLanguage.ts
 *
 * Custom hook that manages the EN / FR language preference,
 * mirroring the pattern used by useTheme.ts.
 *
 * HOW IT WORKS:
 * - Reads the saved preference from localStorage on first load.
 * - Defaults to "en" if no preference is saved.
 * - Updates the <html lang="..."> attribute so screen readers
 *   and browsers know the page language.
 * - Persists the choice to localStorage so it survives page refreshes.
 *
 * USAGE:
 *   const { language, toggleLanguage } = useLanguage()
 *   // language === 'en' | 'fr'
 */

import { useState, useEffect } from 'react'
import type { Language } from '@/i18n/translations'

const STORAGE_KEY = 'portfolio-language'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'fr' ? 'fr' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'))
  }

  return { language, toggleLanguage }
}
