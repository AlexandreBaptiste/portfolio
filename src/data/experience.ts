/**
 * src/data/experience.ts
 *
 * EDIT THIS FILE to add or update experience entries.
 * Each entry appears as an item in the Experience timeline section.
 *
 * Fields:
 *   company     : Company name
 *   role        : Job title
 *   startDate   : e.g. "2017"
 *   endDate     : e.g. "Present" or "2022"
 *   description : 2-4 sentence summary of the role and impact
 *   highlights  : Short bullet points of key achievements (optional)
 */

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  highlights: string[]
}

/**
 * -----------------------------------------------------------------------
 * EXPERIENCE LIST — most recent entry first.
 * -----------------------------------------------------------------------
 */
export const experiences: Experience[] = [
  {
    company: 'Capgemini',
    role: 'Technical Leader & Senior Software Engineer',
    startDate: '2017',
    endDate: 'Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Led technical teams and delivered high-quality backend solutions for enterprise clients across multiple sectors. ' +
      'Responsible for architecture decisions, code reviews, and mentoring junior developers. ' +
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    highlights: [
      'Lorem ipsum — Placeholder highlight 1: architecture & design leadership',
      'Lorem ipsum — Placeholder highlight 2: delivery of critical systems',
      'Lorem ipsum — Placeholder highlight 3: team mentoring & upskilling',
    ],
  },
]
