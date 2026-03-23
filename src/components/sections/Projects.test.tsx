/**
 * src/components/sections/Projects.test.tsx
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'
import { projects } from '@/data/projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument()
  })

  it('renders a card for every project in the data file', () => {
    render(<Projects />)
    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument()
    })
  })

  it('renders a GitHub link for each project', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link', { name: /github/i })
    expect(links.length).toBeGreaterThanOrEqual(projects.length)
  })

  it('renders AI-powered badge only for ai-powered projects', () => {
    render(<Projects />)
    const aiProjects = projects.filter(p => p.aiPowered)
    const badges = screen.queryAllByText(/AI-powered/i)
    expect(badges.length).toBe(aiProjects.length)
  })
})
