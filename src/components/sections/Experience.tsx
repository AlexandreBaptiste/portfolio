/**
 * src/components/sections/Experience.tsx
 *
 * Displays professional experience in a vertical timeline layout.
 *
 * Data source: src/data/experience.ts — edit that file to add/update entries.
 *
 * Layout: a vertical line on the left with a dot per entry,
 * each entry shows company, role, dates, description, and bullet highlights.
 */

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { useTranslation } from '@/context/LanguageContext'

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-24 pb-32 md:pb-24" aria-labelledby="experience-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="experience-heading"
          className="text-2xl font-semibold mb-10 text-[var(--color-text)]"
        >
          {t.experience.heading}
        </h2>

        {/* Timeline container */}
        <div className="relative flex flex-col gap-10">
          {/* Vertical timeline line */}
          <div className="absolute left-2 top-2 bottom-0 w-px bg-[var(--color-border)]" aria-hidden="true" />

          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[var(--color-text)] bg-[var(--color-bg)]"
                aria-hidden="true"
              />

              {/* Date range */}
              <p className="text-xs font-medium text-[var(--color-muted)] mb-1 tracking-wide uppercase">
                {exp.startDate} — {exp.endDate}
              </p>

              {/* Company & Role */}
              <h3 className="font-semibold text-[var(--color-text)] mb-0.5">{exp.company}</h3>
              <p className="text-sm text-[var(--color-muted)] mb-3 italic">{exp.role}</p>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Highlight bullet points */}
              {exp.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--color-muted)] flex items-start gap-2"
                    >
                      {/* Bullet character */}
                      <span className="mt-1 text-[var(--color-text)] flex-shrink-0" aria-hidden="true">·</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
