// src/test/setup.ts
// This file runs once before every test suite.

import '@testing-library/jest-dom'
import { vi } from 'vitest'

// -----------------------------------------------------------------------
// Mock localStorage
// jsdom's built-in localStorage implementation is incomplete in some
// environments. We replace it with a simple in-memory mock that fully
// supports getItem, setItem, removeItem, and clear.
// -----------------------------------------------------------------------
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem:    (key: string) => store[key] ?? null,
    setItem:    (key: string, value: string) => { store[key] = value },
    removeItem: (key: string) => { delete store[key] },
    clear:      () => { store = {} },
    get length() { return Object.keys(store).length },
    key:        (index: number) => Object.keys(store)[index] ?? null,
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

// -----------------------------------------------------------------------
// Mock IntersectionObserver
// jsdom does not implement IntersectionObserver (it's a browser API for
// detecting when elements scroll into/out of view). Framer Motion's
// `whileInView` and our `useActiveSection` hook depend on it.
// It must be mocked as a class (invoked with `new`) — not a plain function.
// -----------------------------------------------------------------------
class IntersectionObserverMock {
  observe    = vi.fn()
  unobserve  = vi.fn()
  disconnect = vi.fn()
}

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
