/**
 * src/components/sections/About.tsx
 *
 * The About Me section with a short bio.
 *
 * TO UPDATE: Edit the paragraph text directly in this file.
 * The content is kept inline here (not in a data file) because it is
 * free-form prose that doesn't benefit from a structured data format.
 *
 * Animation: the section fades in when it scrolls into view.
 * whileInView triggers the animation when the element enters the viewport.
 * viewport={{ once: true }} prevents re-animating on scroll back up.
 */

import { motion } from 'framer-motion'
import { useTranslation } from '@/context/LanguageContext'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="pb-15" aria-labelledby="about-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="about-heading"
          className="text-2xl font-semibold mb-10 text-[var(--color-text)]"
        >
          {t.about.heading}
        </h2>

        <div className="flex flex-col gap-3 text-[var(--color-muted)] leading-relaxed">
          {t.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
