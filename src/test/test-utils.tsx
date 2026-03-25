/**
 * src/test/test-utils.tsx
 *
 * Custom render helper that wraps components with all necessary
 * React context providers for testing.
 *
 * Usage — replace:
 *   import { render } from '@testing-library/react'
 * with:
 *   import { render } from '@/test/test-utils'
 *
 * The renderOptions.language parameter defaults to 'en'.
 */

import { render, type RenderOptions } from '@testing-library/react'
import type { ReactNode } from 'react'
import { LanguageContext }  from '@/context/LanguageContext'
import { translations }     from '@/i18n/translations'
import type { Language }    from '@/i18n/translations'

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  language?: Language
}

function AllTheProviders({
  children,
  language = 'en',
}: {
  children: ReactNode
  language?: Language
}) {
  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage: () => {},
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

function customRender(ui: ReactNode, { language = 'en', ...options }: CustomRenderOptions = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders language={language}>{children}</AllTheProviders>
    ),
    ...options,
  })
}

// Re-export everything from testing-library so tests only import from this file
export * from '@testing-library/react'
export { customRender as render }
