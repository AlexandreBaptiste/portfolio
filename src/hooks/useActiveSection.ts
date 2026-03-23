/**
 * src/hooks/useActiveSection.ts
 *
 * Custom hook that tracks which page section is currently visible in the viewport.
 * Used by the Sidebar to underline/highlight the active navigation item.
 *
 * HOW IT WORKS:
 * - Uses the browser's IntersectionObserver API to watch multiple elements.
 * - Each section has an id (e.g. "about", "skills") — we observe them all.
 * - When a section enters the viewport (at least 30% visible),
 *   it becomes the "active" section.
 * - As the user scrolls down, the active section updates automatically.
 *
 * USAGE:
 *   const activeSection = useActiveSection(['about', 'skills', 'projects', 'experience'])
 *   // activeSection === 'skills' when the skills section is in view
 */

import { useState, useEffect } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    // threshold: 0.3 means the section must be 30% visible to become active
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    // Attach observer to each section element
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Cleanup: stop observing when the component using this hook unmounts
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
