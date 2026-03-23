/**
 * src/hooks/useTheme.ts
 *
 * Custom hook that manages the dark/light mode theme.
 *
 * HOW IT WORKS:
 * - Reads the saved preference from localStorage on first load.
 * - Defaults to "dark" if no preference is saved.
 * - Adds or removes the "light" class on the <html> element.
 * - Our CSS in index.css overrides the CSS variables when html.light is present,
 *   which automatically updates all Tailwind utility classes using those variables.
 *
 * USAGE IN A COMPONENT:
 *   const { theme, toggleTheme } = useTheme()
 *   // theme === 'dark' | 'light'
 *   // toggleTheme() switches between the two modes and persists the choice
 */

import { useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

const STORAGE_KEY = 'portfolio-theme'

export function useTheme() {
  // Initialise from localStorage, falling back to 'dark'
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    // Apply or remove the "light" class on <html> when theme changes
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    // Persist the preference so it survives page refreshes
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
