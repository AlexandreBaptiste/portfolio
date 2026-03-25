/**
 * src/components/sections/Hero.tsx
 *
 * The top hero section showing:
 * - Full name
 * - Job title
 * - Tagline
 *
 * Animation: each element fades in and slides up from below on page load.
 * This uses Framer Motion's motion.div with initial/animate variants.
 * The viewport={{ once: true }} option means the animation plays only
 * the first time the element enters the screen — not every time you scroll.
 */

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { useTranslation } from '@/context/LanguageContext'

// Reusable animation variant:
// "hidden" = starting state (invisible, 20px below final position)
// "visible" = end state (fully visible, in position)
const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="pt-16 pb-25"
      aria-label="Introduction"
    >
      {/* Staggered container: each child animates after the previous one
          staggerChildren: 0.15s delay between each child animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="flex flex-col gap-4"
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-thin tracking-widest text-[var(--color-text)] leading-tight"
        >
          Alexandre<br /><span className="uppercase">Baptiste</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-lg text-[var(--color-muted)] font-medium"
        >
          {t.hero.tagline}
        </motion.p>

        {/* Certification badge */}
        <motion.a
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          href="https://learn.microsoft.com/en-us/users/baptistealexandre-5281/credentials/certification/github-copilot?tab=credentials-tab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.hero.certificationLabel}
          className="w-fit flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] text-sm font-medium tracking-wide hover:border-[var(--color-text)] hover:text-[var(--color-text)] transition-colors duration-200 group"
        >
          <Award size={16} className="text-[var(--color-accent)] flex-shrink-0" />
          {t.hero.certificationLabel}
        </motion.a>
      </motion.div>
    </section>
  )
}
