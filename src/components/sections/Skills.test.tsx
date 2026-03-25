/**
 * src/components/sections/Skills.test.tsx
 */
import { render, screen } from '@/test/test-utils'
import { describe, it, expect } from 'vitest'
import { Skills } from './Skills'
import { SKILL_CATEGORIES, skills } from '@/data/skills'

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
  })

  it('renders a card heading for each category', () => {
    render(<Skills />)
    SKILL_CATEGORIES.forEach(cat => {
      expect(screen.getByRole('heading', { name: cat })).toBeInTheDocument()
    })
  })

  it('renders all skills visible at once', () => {
    render(<Skills />)
    skills.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
    })
  })
})
