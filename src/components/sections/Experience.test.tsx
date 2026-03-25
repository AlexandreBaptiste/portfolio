/**
 * src/components/sections/Experience.test.tsx
 */
import { render, screen } from '@/test/test-utils'
import { describe, it, expect } from 'vitest'
import { Experience } from './Experience'
import { experiences } from '@/data/experience'

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />)
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument()
  })

  it('renders each experience company and role', () => {
    render(<Experience />)
    experiences.forEach(exp => {
      expect(screen.getByText(exp.company)).toBeInTheDocument()
      expect(screen.getByText(exp.role)).toBeInTheDocument()
    })
  })

  it('renders date ranges', () => {
    render(<Experience />)
    experiences.forEach(exp => {
      expect(screen.getByText(new RegExp(exp.startDate))).toBeInTheDocument()
    })
  })
})
