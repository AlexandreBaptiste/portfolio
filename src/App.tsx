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

import { Sidebar, MobileNav } from '@/components/layout/Sidebar'
import { ThemeToggle }          from '@/components/layout/ThemeToggle'
import { Hero }                 from '@/components/sections/Hero'
import { About }                from '@/components/sections/About'
import { Skills }               from '@/components/sections/Skills'
import { Projects }             from '@/components/sections/Projects'
import { Experience }           from '@/components/sections/Experience'
import { useTheme }             from '@/hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ---- Layout shell ---- */}
      <Sidebar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <MobileNav />

      {/* ---- Main scrollable content ----
          pl-0 on mobile (no sidebar), pl-48 on md+ to clear the fixed sidebar */}
      <main className="md:pl-48 px-6 md:px-16 max-w-4xl" id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}
