/**
 * src/data/projects.ts
 *
 * EDIT THIS FILE to add or update projects.
 * Each entry appears as a card in the Projects section.
 *
 * To add a new project: copy an existing object, paste it at the end of the
 * array, and update the fields. The card will appear automatically.
 *
 * Fields:
 *   title       : Project name displayed as card heading
 *   description : 2-3 sentence summary shown on the card
 *   tags        : Technology/language labels shown as badges
 *   githubUrl   : Full URL to the GitHub repository
 *   aiPowered   : (optional) Shows an "AI-powered" badge when true
 */

export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  aiPowered?: boolean
}

export const projects: Project[] = [
  {
    title: 'DotNet Starter Kit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A robust .NET microservices boilerplate with clean architecture and a fully automated CI/CD pipeline ready to deploy to Azure.',
    tags: ['C#', '.NET', 'Docker', 'Azure DevOps'],
    githubUrl: 'https://github.com/AlexandreBaptiste/dotnet-starter-kit',
    aiPowered: false,
  },
  {
    title: 'AI Assistant Toolkit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. An LLM-powered internal assistant integrating multiple AI providers via a unified .NET API with streaming responses.',
    tags: ['C#', '.NET', 'OpenAI', 'Azure', 'REST API'],
    githubUrl: 'https://github.com/AlexandreBaptiste/ai-assistant-toolkit',
    aiPowered: true,
  },
  {
    title: 'SQL Audit Dashboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A real-time SQL Server audit and monitoring dashboard with role-based access control and alerting.',
    tags: ['C#', 'SQL Server', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/AlexandreBaptiste/sql-audit-dashboard',
    aiPowered: false,
  },
  {
    title: 'React Portfolio',
    description:
      'This very portfolio — built to learn React 19 while showcasing professional work. Single-page, dark/light mode, deployed to GitHub Pages via GitHub Actions.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/AlexandreBaptiste/portfolio',
    aiPowered: false,
  },
]
