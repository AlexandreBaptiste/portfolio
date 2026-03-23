/**
 * src/components/sections/Skills.test.tsx
 */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Skills } from './Skills'
import { SKILL_CATEGORIES, skills } from '@/data/skills'

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
  })

  it('renders an All tab and all category tabs', () => {
    render(<Skills />)
    expect(screen.getByRole('tab', { name: /all/i })).toBeInTheDocument()
    SKILL_CATEGORIES.forEach(cat => {
      expect(screen.getByRole('tab', { name: cat })).toBeInTheDocument()
    })
  })

  it('shows all skills when All tab is active', () => {
    render(<Skills />)
    skills.forEach(skill => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
    })
  })

  it('filters skills when a category tab is clicked', async () => {
    render(<Skills />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('tab', { name: 'Backend' }))
    expect(screen.getByText('C#')).toBeInTheDocument()
    expect(screen.queryByText('React')).not.toBeInTheDocument()
  })
})
