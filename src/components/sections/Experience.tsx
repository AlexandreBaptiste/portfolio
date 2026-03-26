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

/** Split a highlight string like "Auth — Detail text" into label + body. */
function parseHighlight(highlight: string): { label: string; body: string } {
  const separatorIndex = highlight.indexOf(' — ')
  if (separatorIndex === -1) return { label: '', body: highlight }
  return {
    label: highlight.slice(0, separatorIndex),
    body: highlight.slice(separatorIndex + 3),
  }
}

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
        <div className="relative flex flex-col gap-14">
          {/* Vertical timeline line */}
          <div className="absolute left-2 top-2 bottom-0 w-px bg-[var(--color-border)]" aria-hidden="true" />

          {experiences.map((exp, index) => {
            const tItem = t.experience.items[index]
            return (
            <motion.article
              key={`${exp.project}-${index}`}
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

              {/* Header row: dates */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium text-[var(--color-muted)] tracking-wide uppercase">
                  {exp.startDate} — {exp.endDate === 'Present' ? t.experience.present : exp.endDate}
                </span>
                <span className="text-xs text-[var(--color-muted)] opacity-40" aria-hidden="true">·</span>
              </div>

              {/* Project & Role */}
              <div className="flex flex-wrap items-baseline gap-2 mb-3">
                <h3 className="font-semibold text-[var(--color-text)]">{tItem?.project ?? exp.project}</h3>
                <p className="text-xs text-[var(--color-muted)] italic">{tItem?.role ?? exp.role}</p>
              </div>

              {/* Description — visually lighter */}
              <p className="text-SM text-[var(--color-muted)] leading-relaxed mb-4 opacity-80 border-l-2 border-[var(--color-border)] pl-3">
                {tItem?.description ?? exp.description}
              </p>

              {/* Highlights grid */}
              {(tItem?.highlights ?? exp.highlights).length > 0 && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(tItem?.highlights ?? exp.highlights).map((highlight, i) => {
                    const { label, body } = parseHighlight(highlight)
                    return (
                      <li
                        key={i}
                        className="flex flex-col gap-0.5 bg-[var(--color-border)]/20 rounded-sm px-3 py-2"
                      >
                        {label && (
                          <span className=" font-semibold text-[var(--color-text)] uppercase tracking-wider opacity-70">
                            {label}
                          </span>
                        )}
                        <span className="text-SM text-[var(--color-muted)] leading-snug">
                          {body}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              )}
            </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
