/**
 * src/hooks/useTheme.test.ts
 *
 * Tests for the useTheme hook.
 * Uses renderHook from React Testing Library to test hooks in isolation.
 */

import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  beforeEach(() => {
    // Reset localStorage and html class between tests
    localStorage.clear()
    document.documentElement.classList.remove('light')
  })

  it('defaults to dark mode when no preference is saved', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })

  it('reads saved preference from localStorage', () => {
    localStorage.setItem('portfolio-theme', 'light')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('toggles from dark to light', () => {
    const { result } = renderHook(() => useTheme())
    act(() => { result.current.toggleTheme() })
    expect(result.current.theme).toBe('light')
    expect(document.documentElement.classList.contains('light')).toBe(true)
  })

  it('toggles from light back to dark', () => {
    localStorage.setItem('portfolio-theme', 'light')
    const { result } = renderHook(() => useTheme())
    act(() => { result.current.toggleTheme() })
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })

  it('persists preference to localStorage on toggle', () => {
    const { result } = renderHook(() => useTheme())
    act(() => { result.current.toggleTheme() })
    expect(localStorage.getItem('portfolio-theme')).toBe('light')
  })
})
