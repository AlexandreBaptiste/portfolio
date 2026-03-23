/**
 * src/components/sections/Skills.tsx
 *
 * Displays skills grouped by category with animated progress bars.
 *
 * Features:
 * - Category filter tabs: click a tab to show only that category's skills
 * - Progress bar: fills from 0% to the skill's level when scrolled into view
 * - The animation is triggered by whileInView on each bar
 *
 * Data source: src/data/skills.ts — edit that file to add/update skills.
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills, SKILL_CATEGORIES, type SkillCategory } from '@/data/skills'
import { cn } from '@/lib/utils'

export function Skills() {
  // Track which category tab is currently selected
  // 'All' shows every skill regardless of category
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All')

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory)

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
          className="text-2xl font-semibold mb-8 text-[var(--color-text)]"
        >
          Skills
        </h2>

        {/* ---- Category filter tabs ---- */}
        <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2 mb-10">
          {/* "All" tab */}
          <CategoryTab
            label="All"
            isActive={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          />
          {SKILL_CATEGORIES.map(category => (
            <CategoryTab
              key={category}
              label={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>

        {/* ---- Skills list with progress bars ---- */}
        <div className="flex flex-col gap-5 max-w-xl">
          {filteredSkills.map(skill => (
            <div key={skill.name}>
              {/* Skill name and numeric level */}
              <div className="flex justify-between mb-1.5 text-sm">
                <span className="font-medium text-[var(--color-text)]">{skill.name}</span>
                <span className="text-[var(--color-muted)]">{skill.level}%</span>
              </div>

              {/* Progress bar container */}
              <div
                className="h-1.5 w-full rounded-full bg-[var(--color-border)]"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name}: ${skill.level}%`}
              >
                {/* Animated filled portion:
                    - starts at width 0 (scaleX: 0 with origin on the left)
                    - animates to the skill's level when scrolled into view
                    - duration scales with the level so longer bars take more time */}
                <motion.div
                  className="h-full rounded-full bg-[var(--color-accent)]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 + skill.level / 200, ease: 'easeOut' }}
                  style={{
                    width: `${skill.level}%`,
                    transformOrigin: 'left',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/* ---- Helper sub-component: a single category filter tab ---- */
interface CategoryTabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

function CategoryTab({ label, isActive, onClick }: CategoryTabProps) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        'px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200 cursor-pointer',
        isActive
          ? 'bg-[var(--color-text)] text-[var(--color-bg)] border-[var(--color-text)]'
          : 'border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]',
      )}
    >
      {label}
    </button>
  )
}
