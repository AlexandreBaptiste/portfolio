/**
 * src/components/sections/Hero.test.tsx
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the full name', () => {
    render(<Hero />)
    expect(screen.getByText('Alexandre')).toBeInTheDocument()
    expect(screen.getByText('BAPTISTE')).toBeInTheDocument()
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
