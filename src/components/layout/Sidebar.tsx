/**
 * src/components/layout/Sidebar.tsx
 *
 * The left sidebar containing:
 * 1. Section navigation links (About, Skills, Projects, Experience)
 *    — the active section is underlined based on scroll position
 * 2. Contact icon links at the bottom (LinkedIn, GitHub, Email)
 *
 * DESKTOP: Fixed on the left side of the screen.
 * MOBILE:  Hidden. A bottom icon bar is shown instead (defined at the
 *          bottom of this file as MobileNav and rendered in App.tsx).
 *
 * HOW active detection works:
 * - useActiveSection (hook) uses IntersectionObserver to return the id
 *   of the section currently visible in the viewport.
 * - Each nav link compares its sectionId to the activeSection value.
 * - Framer Motion animates a sliding underline under the active item.
 */

import { Linkedin, Github, Mail } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useTranslation } from '@/context/LanguageContext'

const NAV_ITEMS = [
  { id: 'about'      },
  { id: 'skills'     },
  { id: 'projects'   },
  { id: 'experience' },
] as const

const SECTION_IDS = NAV_ITEMS.map(item => item.id)

const CONTACT_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexandre-baptiste-shelter/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AlexandreBaptiste',
    icon: Github,
  },
  {
    label: 'Email',
    href: 'mailto:alexandre.baptiste.etu@gmail.com',
    icon: Mail,
  },
] as const

export function Sidebar() {
  const { activeSection, setActiveSection } = useActiveSection([...SECTION_IDS])
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    // Immediately update the underline so it doesn't wait for the scroll animation
    setActiveSection(id)
    // "About" is the first nav item — scroll to the very top (hero section)
    if (id === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    /* Hidden on mobile (md: = screens >= 768px show it) */
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-48 flex-col items-center py-16 px-6 border-r border-[var(--color-border)] bg-[var(--color-bg)] z-40">
      {/* --- Section navigation --- */}
      <nav aria-label="Page sections">
        <ul className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map(({ id }) => {
            const label = t.nav[id as keyof typeof t.nav]
            const isActive = activeSection === id
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={cn(
                    'relative text-base font-medium transition-colors duration-200 cursor-pointer text-center',
                    isActive
                      ? 'text-[var(--color-text)]'
                      : 'text-[var(--color-muted)] hover:text-[var(--color-text)]',
                  )}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                  {/* Animated underline — Framer Motion layout animation */}
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-text)]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* --- Contact icon links — directly below nav with a top margin --- */}
      <div className="flex flex-col items-center gap-5 mt-10" role="list" aria-label="Contact links">
        {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
          >
            <Icon size={26} />
          </a>
        ))}
      </div>
    </aside>
  )
}

/**
 * MobileNav — shown only on small screens (visible below md breakpoint).
 * Displays only the contact icon links as a fixed bottom bar.
 * Section navigation on mobile can be done by scrolling.
 */
export function MobileNav() {
  return (
    <nav
      aria-label="Contact links"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex justify-center gap-8 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
        >
          <Icon size={20} />
        </a>
      ))}
    </nav>
  )
}
