/**
 * src/components/sections/Skills.tsx
 *
 * Displays all skill categories as a grid of cards, one card per category.
 * Each card shows skills stacked vertically with animated progress bars.
 */

import { motion } from 'framer-motion'
import { skills, SKILL_CATEGORIES } from '@/data/skills'
import { useTranslation } from '@/context/LanguageContext'

function proficiencyLabel(level: number): string {
  if (level <= 33) return 'Learning'
  if (level <= 66) return 'Proficient'
  return 'Expert'
}

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24" aria-labelledby="skills-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="skills-heading"
          className="text-2xl font-semibold mb-10 text-[var(--color-text)]"
        >
          {t.skills.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SKILL_CATEGORIES.map((category, i) => {
            const categorySkills = skills.filter(s => s.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-5 p-6 rounded-lg border border-[var(--color-text)] bg-[var(--color-bg)]"
              >
                <h3 className="font-semibold text-[var(--color-text)]">{category}</h3>

                <div className="flex flex-col gap-4">
                  {categorySkills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5 text-sm">
                        <span className="font-medium text-[var(--color-text)]">{skill.name}</span>
                        <span className="text-xs text-[var(--color-muted)]">{proficiencyLabel(skill.level)}</span>
                      </div>
                      <div
                        className="h-1.5 w-full rounded-full bg-[var(--color-border)]"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}: ${skill.level}%`}
                      >
                        <motion.div
                          className="h-full rounded-full bg-[var(--color-accent)]"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 + skill.level / 200, ease: 'easeOut' }}
                          style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
