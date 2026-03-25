/**
 * src/data/skills.ts
 *
 * EDIT THIS FILE to add, remove, or update skills.
 * No component code needs to change — the Skills section reads this array.
 *
 * Structure of each skill:
 *   name     : Display name shown on the portfolio
 *   level    : 0-100, shown as a filled progress bar
 *   category : Groups skills under a tab. Must match a value in SKILL_CATEGORIES.
 */

export type SkillCategory = 'Backend' | 'Frontend' | 'Cloud & DevOps' | 'AI & LLM' | 'Data' | 'Tools'

export interface Skill {
  name: string
  /** Proficiency level from 0 (none) to 100 (expert) */
  level: number
  category: SkillCategory
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Backend',
  'Frontend',
  'Cloud & DevOps',
  'AI & LLM',
  'Data',
  'Tools',
]

export const skills: Skill[] = [
  { name: 'C#',                     level: 90, category: 'Backend' },
  { name: '.NET Core',              level: 90, category: 'Backend' },
  { name: 'Entity Framework',       level: 80, category: 'Backend' },
  { name: 'REST APIs',              level: 80, category: 'Backend' },
  { name: 'Microservices',          level: 70, category: 'Backend' },
  { name: 'SpecFlow / Gherkin',     level: 80, category: 'Backend' },
  { name: 'Clean Architecture',     level: 50, category: 'Backend' },

  { name: 'React',                  level: 10, category: 'Frontend' },
  { name: 'TypeScript',             level: 40, category: 'Frontend' },
  { name: 'HTML / CSS',             level: 60, category: 'Frontend' },
  { name: 'Tailwind CSS',           level: 10, category: 'Frontend' },

  { name: 'Azure',                  level: 70, category: 'Cloud & DevOps' },
  { name: 'Azure DevOps',           level: 80, category: 'Cloud & DevOps' },
  { name: 'Docker',                 level: 60, category: 'Cloud & DevOps' },
  { name: 'Kubernetes',             level: 50, category: 'Cloud & DevOps' },

  { name: 'Prompt Engineering',     level: 80, category: 'AI & LLM' },
  { name: 'GitHub Copilot',         level: 90, category: 'AI & LLM' },
  { name: 'AI Agents',              level: 70, category: 'AI & LLM' },
  { name: 'LLM Integration',        level: 20, category: 'AI & LLM' },

  { name: 'SQL Server',             level: 80, category: 'Data' },
  { name: 'Oracle',                 level: 70, category: 'Data' },
  { name: 'NoSQL',                  level: 10, category: 'Data' },

  { name: 'Git',                    level: 80, category: 'Tools' },
  { name: 'Visual Studio',          level: 90, category: 'Tools' },
  { name: 'VS Code',                level: 80, category: 'Tools' },
  { name: 'Postman / Bruno',        level: 70, category: 'Tools' },
  { name: 'SonarQube',              level: 80, category: 'Tools' },
]
