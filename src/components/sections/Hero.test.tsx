/**
 * src/components/sections/Hero.test.tsx
 */
import { render, screen } from '@/test/test-utils'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the full name across two lines', () => {
    render(<Hero />)
    const h1 = document.querySelector('h1')!
    expect(h1.textContent).toContain('Alexandre')
    expect(h1.textContent).toContain('Baptiste')
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/Technical Leader/i)).toBeInTheDocument()
    expect(screen.getByText(/\.NET Enthusiast/i)).toBeInTheDocument()
  })

  it('has the correct section id for scroll navigation', () => {
    render(<Hero />)
    expect(document.getElementById('hero')).toBeInTheDocument()
  })
})
