/**
 * src/App.tsx
 *
 * Root layout component. Puts everything together:
 * - Sidebar (desktop left navigation + contact icons)
 * - ThemeToggle (fixed top-right button)
 * - MobileNav (fixed bottom bar on small screens)
 * - All page sections stacked vertically in the main content area
 *
 * The useTheme hook is called here (at the top level) so that the
 * theme state can be passed down to ThemeToggle as a prop.
 * The actual CSS variable switching happens inside useTheme via
 * document.documentElement.classList.
 */

import { Sidebar, MobileNav }   from '@/components/layout/Sidebar'
import { ThemeToggle }           from '@/components/layout/ThemeToggle'
import { LanguageToggle }        from '@/components/layout/LanguageToggle'
import { Hero }                  from '@/components/sections/Hero'
import { About }                 from '@/components/sections/About'
import { Skills }                from '@/components/sections/Skills'
import { Projects }              from '@/components/sections/Projects'
import { Experience }            from '@/components/sections/Experience'
import { useTheme }              from '@/hooks/useTheme'
import { useLanguage }           from '@/hooks/useLanguage'
import { LanguageContext }       from '@/context/LanguageContext'
import { translations }          from '@/i18n/translations'

export default function App() {
  const { theme, toggleTheme }       = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      
      {/* ---- Layout shell ---- */}
      <Sidebar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      <MobileNav />

      {/* ---- Main scrollable content ----
          pl-0 on mobile (no sidebar), pl-48 on md+ to clear the fixed sidebar
          The outer div centers the content horizontally within the remaining space */}
      {/* Hero + About stacked, then Skills/Projects/Experience — all centered */}
      <div className="md:pl-48 flex justify-center">
        <main className="w-full max-w-5xl px-6 md:px-12" id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
      </div>
    </div>
    </LanguageContext.Provider>
  )
}
