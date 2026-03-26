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

import { useState, useEffect }   from 'react'
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
import { ChevronUp }             from 'lucide-react'

function ScrollToTopMobile() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="md:hidden fixed bottom-20 right-4 z-50 w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] flex items-center justify-center shadow-sm transition-opacity duration-200"
    >
      <ChevronUp size={18} />
    </button>
  )
}

export default function App() {
  const { theme, toggleTheme }       = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* ---- Layout shell ---- */}
      <Sidebar />
      {/* ---- Fixed top-right controls: language + theme toggles in a shared container ---- */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <MobileNav />
      <ScrollToTopMobile />

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
