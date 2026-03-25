/**
 * src/hooks/useActiveSection.ts
 *
 * Custom hook that tracks which page section is currently visible in the viewport.
 * Used by the Sidebar to underline/highlight the active navigation item.
 *
 * HOW IT WORKS:
 * - Uses the browser's IntersectionObserver API to watch multiple elements.
 * - Tracks how much of each section is visible; the section with the greatest
 *   intersection ratio becomes active. This handles cases where clicking a nav
 *   link scrolls to a section that only partially fills the viewport (e.g. when
 *   the previous section is still partially visible at the top).
 * - `setActiveSection` is also returned so the Sidebar can immediately set the
 *   active section on a nav click, before the scroll animation completes.
 *
 * USAGE:
 *   const { activeSection, setActiveSection } = useActiveSection([...])
 */

import { useState, useEffect, useRef } from 'react'

export function useActiveSection(sectionIds: string[]): {
  activeSection: string
  setActiveSection: (id: string) => void
} {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '')
  // Track the latest ratio for each section so we can pick the most-visible one
  const ratiosRef = useRef<Record<string, number>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio
        })

        // Set active to whichever observed section has the highest visible ratio
        const [mostVisible] = Object.entries(ratiosRef.current).reduce(
          (best, current) => (current[1] > best[1] ? current : best),
          ['', 0],
        )

        if (mostVisible) {
          setActiveSection(mostVisible)
        }
      },
      // Multiple thresholds give us finer-grained ratio updates
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.75, 1.0] },
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return { activeSection, setActiveSection }
}
