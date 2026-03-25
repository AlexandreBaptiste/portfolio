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
    <section id="about" className="pt-4 pb-20" aria-labelledby="about-heading">
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

        <div className="flex flex-col gap-5 text-[var(--color-muted)] leading-relaxed">
          <p>
            Développeur sénior avec 9 ans d’expérience chez Capgemini, j’évolue principalement sur des problématiques backend,
            avec une ouverture progressive vers le front-end. Lead Developer et Architecte junior, 
            j’accompagne une équipe d’une dizaine de développeurs sur des projets à forts enjeux,
            en apportant une vision à la fois technique et pragmatique.
          </p>
          <p>
            Rigoureux et orienté qualité, je m’attache à concevoir des solutions performantes, maintenables et durables, 
            notamment à travers des travaux de migration et d’amélioration continue.
            Curieux et résilient, j’apprécie collaborer avec les équipes métier pour construire des solutions pertinentes, 
            tout en veillant à offrir à mon équipe un cadre clair et efficace.
          </p>          
        </div>
      </motion.div>
    </section>
  )
}
