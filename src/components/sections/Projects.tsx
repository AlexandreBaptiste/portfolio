/**
 * src/components/sections/Projects.tsx
 *
 * Displays project cards in a responsive grid.
 *
 * Data source: src/data/projects.ts — edit that file to add/update projects.
 * Adding a project object to that array will automatically render a new card here.
 *
 * Each card contains:
 * - Project title
 * - Description
 * - Technology tag badges
 * - Optional "AI-powered" badge
 * - GitHub link button
 *
 * Hover animation: card lifts slightly via Framer Motion whileHover.
 */

import { motion } from 'framer-motion'
import { Github, ExternalLink, Sparkles } from 'lucide-react'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="projects-heading"
          className="text-2xl font-semibold mb-10 text-[var(--color-text)]"
        >
          Projects
        </h2>

        {/* Responsive grid: 1 column on mobile, 2 on md, 3 on lg screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

/* ---- Helper sub-component: a single project card ---- */
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    /* whileHover: lift the card up by 4px and increase shadow on hover */
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="flex flex-col gap-4 p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-muted)] transition-colors duration-200"
    >
      {/* Card header: title + optional AI badge */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[var(--color-text)]">{project.title}</h3>
        {project.aiPowered && (
          <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] whitespace-nowrap">
            <Sparkles size={10} />
            AI-powered
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Technology tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-200 w-fit"
        aria-label={`View ${project.title} on GitHub`}
      >
        <Github size={13} />
        View on GitHub
        <ExternalLink size={11} />
      </a>
    </motion.article>
  )
}
