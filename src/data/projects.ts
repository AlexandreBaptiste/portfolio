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
    title: '.NET Interview Prep Kit',
    description:
      'Questions I may ask for interviews / that were asked to me. It\'s helping me to stay up to date and condense knowledge',
    tags: ['C#', '.NET'],
    githubUrl: 'https://github.com/AlexandreBaptiste/dotnet-interviews',
    aiPowered: true,
  },
  {
    title: 'Multithreading',
    description:
      'A comprehensive .NET 10 learning repository demonstrating multi-threading concepts — from threads and tasks to synchronization primitives, concurrent collections, and production patterns — each proven correct by unit tests.',
    tags: ['C#', '.NET', 'Concept', 'Learning'],
    githubUrl: 'https://github.com/AlexandreBaptiste/multithreading',
    aiPowered: false,
  },
  {
    title: '.NET Performance Optimization',
    description:
      'Hands-on .NET 10 performance optimization examples: 14 topics (Span<T>, ArrayPool, SIMD, reflection, GC tuning, and more), each with paired Naive/Optimized implementations, xUnit correctness tests, and BenchmarkDotNet microbenchmarks.',
    tags: ['C#', 'SQL Server', 'BenchmarkDotNet', 'Learning'],
    githubUrl: 'https://github.com/AlexandreBaptiste/performances',
    aiPowered: false,
  },
  {
    title: 'Specify Pomodoro',
    description:
      'Application Pomodoro full-stack (Vue 3 + ASP.NET Core + Azure SQL) avec authentification JWT, suivi des sessions et statistiques. Réalisée dans le cadre d\'un workshop de mise en pratique de GitHub Copilot avec Specify.',
    tags: ['Vue 3', 'ASP.NET Core', 'Azure SQL'],
    githubUrl: 'https://github.com/AlexandreBaptiste/specify-pomodoro',
    aiPowered: true,
  },
]
