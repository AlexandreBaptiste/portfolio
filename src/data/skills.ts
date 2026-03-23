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

/**
 * The ordered list of category tab labels shown above the skills grid.
 * Add a new entry here if you add a new category to the skills list below.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  'Backend',
  'Frontend',
  'Cloud & DevOps',
  'AI & LLM',
  'Data',
  'Tools',
]

/**
 * -----------------------------------------------------------------------
 * SKILLS LIST — edit levels and add new entries freely.
 * -----------------------------------------------------------------------
 */
export const skills: Skill[] = [
  // ---- Backend ----
  { name: 'C#',                     level: 90, category: 'Backend' },
  { name: '.NET / ASP.NET Core',    level: 90, category: 'Backend' },
  { name: 'Entity Framework',       level: 80, category: 'Backend' },
  { name: 'REST APIs',              level: 85, category: 'Backend' },
  { name: 'Microservices',          level: 75, category: 'Backend' },

  // ---- Frontend ----
  { name: 'React',                  level: 40, category: 'Frontend' },
  { name: 'TypeScript',             level: 70, category: 'Frontend' },
  { name: 'HTML / CSS',             level: 60, category: 'Frontend' },
  { name: 'Tailwind CSS',           level: 40, category: 'Frontend' },

  // ---- Cloud & DevOps ----
  { name: 'Azure',                  level: 75, category: 'Cloud & DevOps' },
  { name: 'Azure DevOps',           level: 80, category: 'Cloud & DevOps' },
  { name: 'Docker',                 level: 65, category: 'Cloud & DevOps' },
  { name: 'CI/CD',                  level: 70, category: 'Cloud & DevOps' },

  // ---- AI & LLM ----
  { name: 'Prompt Engineering',     level: 80, category: 'AI & LLM' },
  { name: 'GitHub Copilot',         level: 85, category: 'AI & LLM' },
  { name: 'AI Agents',              level: 70, category: 'AI & LLM' },
  { name: 'LLM Integration',        level: 65, category: 'AI & LLM' },

  // ---- Data ----
  { name: 'SQL Server',             level: 80, category: 'Data' },
  { name: 'T-SQL',                  level: 75, category: 'Data' },

  // ---- Tools ----
  { name: 'Git',                    level: 85, category: 'Tools' },
  { name: 'Visual Studio',          level: 90, category: 'Tools' },
  { name: 'VS Code',                level: 85, category: 'Tools' },
  { name: 'Postman',                level: 75, category: 'Tools' },
]
