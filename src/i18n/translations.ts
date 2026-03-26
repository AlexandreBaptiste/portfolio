/**
 * src/i18n/translations.ts
 *
 * All translatable strings for the portfolio, in English and French.
 * Add new keys here first, then consume them via `useTranslation()`.
 */

export type Language = 'en' | 'fr'

export interface ProjectTranslation {
  description: string
}

export interface ExperienceItemTranslation {
  project: string
  role: string
  description: string
  highlights: readonly string[]
}

export interface Translations {
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
  }
  languageToggle: {
    ariaLabel: string
  }
  hero: {
    tagline: string
    certificationLabel: string
  }
  about: {
    heading: string
    paragraphs: readonly string[]
  }
  skills: {
    heading: string
  }
  projects: {
    heading: string
    viewOnGithub: string
    aiPowered: string
    items: readonly ProjectTranslation[]
  }
  experience: {
    heading: string
    present: string
    items: readonly ExperienceItemTranslation[]
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about:      'About',
      skills:     'Skills',
      projects:   'Projects',
      experience: 'Experiences',
    },
    languageToggle: {
      ariaLabel:   'Switch language',
    },
    hero: {
      tagline: 'Senior Backend Developer · Technical Leader · .NET Enthusiast',
      certificationLabel: 'GitHub Copilot Certified · GH-300',
    },
    about: {
      heading: 'About Me',
      paragraphs: [
        'Senior developer with 9 years of experience at Capgemini, primarily focused on backend challenges with a growing interest in front-end development. As a Lead Developer and Junior Architect, I guide a team of around ten developers on high-stakes projects, bringing both a technical and pragmatic perspective.',
        'Detail-oriented and quality-driven, I strive to design performant, maintainable, and sustainable solutions — particularly through migration work and continuous improvement initiatives. Curious and resilient, I enjoy collaborating with business teams to build relevant solutions, while ensuring my team has a clear and effective working framework.',
        'I made this AI-powered portofolio to help me learning ReactJS and showing that I am using and trying to master AI tools in my projects and learning path.',
      ],
    },
    skills: {
      heading: 'Skills',
    },
    projects: {
      heading:      'Projects',
      viewOnGithub: 'View on GitHub',
      aiPowered:    'AI-powered',
      items: [
        {
          description:
            "Questions I may ask for interviews / that were asked to me. Helping me stay up to date and condense knowledge.",
        },
        {
          description:
            "A comprehensive .NET 10 learning repository demonstrating multi-threading concepts — from threads and tasks to synchronization primitives, concurrent collections, and production patterns — each proven correct by unit tests.",
        },
        {
          description:
            "Hands-on .NET 10 performance optimization examples: 14 topics (Span<T>, ArrayPool, SIMD, reflection, GC tuning, and more), each with paired Naive/Optimized implementations, xUnit correctness tests, and BenchmarkDotNet microbenchmarks.",
        },
        {
          description:
            "Full-stack Pomodoro application (Vue 3 + ASP.NET Core + Azure SQL) with JWT authentication, session tracking, and statistics. Built during a GitHub Copilot hands-on workshop with Specify.",
        },
      ],
    },
    experience: {
      heading: 'Experiences',
      present: 'Present',
      items: [
        {
          project: 'Project site insurance',
          role: 'Technical Leader, Senior Software Engineer & Junior Architect',
          description:
            "Still active on this mission today, it represents a significant evolution from my previous experiences — one that has been both challenging and rewarding. The project expanded my skill set considerably: OpenShift, Kubernetes, and cloud-native technologies are now core parts of my daily workflow. My Git proficiency has grown substantially, from basic operations to advanced workflows such as merging, rebasing, and managing releases. Working extensively with .NET Core — from API development to microservices architecture — has deepened my expertise across the entire ecosystem.",
          highlights: [
            'Auth — Full implementation of a PKJWT authentication flow for secure API access, strengthening security posture and compliance',
            'CI/CD — Established robust pipelines using Azure DevOps, automating build, test, and deployment to accelerate delivery and improve reliability',
            'Kubernetes — Gained hands-on experience with Kubernetes for container orchestration, enabling scalable and resilient application deployments',
            '.NET Core — Led the design and development of RESTful APIs, delivering high-performance services and migrating versions from .NET 6 to .NET 11',
            'Technical Leadership — Acting as technical reference for the team, providing guidance on best practices, code reviews, and architectural decisions',
            'Tests — Adopted Test-Driven Development (TDD) and implemented unit and integration tests using Gherkin and SpecFlow',
          ],
        },
        {
          project: 'Non-life insurance',
          role: 'Junior Technical Leader & Intermediate Software Engineer',
          description:
            "A great opportunity to lead migration projects toward a microservices architecture, deepening my understanding of packages and distributed services. This experience accelerated my growth from both a technical leadership and architecture standpoint, even if the context was primarily legacy and the client was not always receptive to technical recommendations.",
          highlights: [
            'Oracle — Performance optimisation: Improved database performance by analyzing and tuning SQL queries, indexes, and schema designs',
            'Microservices — Migrated monolithic applications to microservices architecture, improving scalability and maintainability',
            'Roadmap — Strategic Planning: Collaborated with the client to define the business roadmap and align technical solutions with strategic goals',
            'Team Leadership — Mentoring: Mentored junior developers, fostering a culture of continuous learning and professional growth within the team',
          ],
        },
        {
          project: 'Real estate banking',
          role: 'Junior Software Engineer',
          description:
            "Perhaps the most formative experience of my career. Starting as a junior software engineer, I gradually took on more responsibilities, learning from experienced colleagues and tackling increasingly complex challenges. Git, Jenkins, versioning, legacy ASP.NET, a large monolithic codebase with significant performance issues — a tough but deeply rewarding experience.",
          highlights: [
            'Versioning — Migrated version control from SVN to Git, improving team collaboration and code management',
            'Jenkins — Continuous integration: Maintained Jenkins pipelines to support automated build and deployment processes',
            'Effort Estimation — Learned to estimate effort and plan tasks effectively, contributing to project planning and delivery',
          ],
        },
      ],
    },
  },

  fr: {
    nav: {
      about:      'À propos',
      skills:     'Compétences',
      projects:   'Projets',
      experience: 'Expériences',
    },
    languageToggle: {
      ariaLabel:   'Changer de langue',
    },
    hero: {
      tagline: 'Développeur Backend Senior · Lead Technique · Passionné .NET',
      certificationLabel: 'Certifié GitHub Copilot · GH-300',
    },
    about: {
      heading: 'À propos',
      paragraphs: [
        "Développeur sénior avec 9 ans d'expérience chez Capgemini, j'évolue principalement sur des problématiques backend, avec une ouverture progressive vers le front-end. Lead Developer et Architecte junior, j'accompagne une équipe d'une dizaine de développeurs sur des projets à forts enjeux, en apportant une vision à la fois technique et pragmatique.",
        "Rigoureux et orienté qualité, je m'attache à concevoir des solutions performantes, maintenables et durables, notamment à travers des travaux de migration et d'amélioration continue. Curieux et résilient, j'apprécie collaborer avec les équipes métier pour construire des solutions pertinentes, tout en veillant à offrir à mon équipe un cadre clair et efficace.",
        "J'ai créé ce portfolio assisité par Copilot pour prendre un rôle de mentor sur ReactJS et montrer que j'utilise et essaie de maîtriser les outils d'IA dans mes projets et mon apprentissage quotidien.",

      ],
    },
    skills: {
      heading: 'Compétences',
    },
    projects: {
      heading:      'Projets',
      viewOnGithub: 'Voir sur GitHub',
      aiPowered:    "Assisté par IA",
      items: [
        {
          description:
            "Questions que je pourrais poser lors d'entretiens / qui m'ont été posées. M'aide à rester à jour et à condenser mes connaissances.",
        },
        {
          description:
            "Un dépôt d'apprentissage .NET 10 complet illustrant les concepts de multi-threading — des threads et tâches aux primitives de synchronisation, collections concurrentes et patterns de production — chaque concept validé par des tests unitaires.",
        },
        {
          description:
            "Exemples pratiques d'optimisation des performances .NET 10 (Span<T>, ArrayPool, SIMD, réflexion, optimisation du GC, etc.), chacun avec des implémentations Naïve/Optimisée, des tests de correction xUnit et des microbenchmarks BenchmarkDotNet.",
        },
        {
          description:
            "Application Pomodoro full-stack (Vue 3 + ASP.NET Core + Azure SQL) avec authentification JWT, suivi des sessions et statistiques. Réalisée dans le cadre d'un workshop de mise en pratique de GitHub Copilot avec Specify.",
        },
      ],
    },
    experience: {
      heading: 'Expériences',
      present: "Aujourd'hui",
      items: [
        {
          project: 'Assurance de chantiers',
          role: 'Lead Technique, Développeur Senior & Architecte Junior',
          description:
            "Je suis toujours en mission sur ce projet aujourd'hui, et cela représente un changement radical par rapport à mes expériences précédentes — dans le bon sens. Ce projet m'a permis de progresser professionnellement et d'élargir mes compétences. OpenShift, Kubernetes et les technologies cloud-native font désormais partie intégrante de mon quotidien. Je maîtrisais les bases de Git, mais je me sens aujourd'hui pleinement capable de réaliser la grande majorité des opérations demandées : merge, pull, rebase, gestion des releases… Travailler sur l'ensemble de l'écosystème .NET Core — du développement d'API aux architectures microservices — a été une excellente opportunité d'approfondir mon expertise.",
          highlights: [
            "Auth — Implémentation complète du flux d'authentification PKJWT pour un accès sécurisé aux API, renforçant la sécurité et la conformité",
            "CI/CD — Mise en place de pipelines CI/CD robustes avec Azure DevOps, automatisant les étapes de build, test et déploiement pour accélérer la livraison",
            "Kubernetes — Expérience pratique de Kubernetes pour l'orchestration de conteneurs, permettant des déploiements scalables et résilients",
            ".NET Core — Conception et développement d'API RESTful avec .NET Core, avec migration de la version 6 vers la version 11",
            "Leadership Technique — Référent technique de l'équipe, accompagnement sur les bonnes pratiques, les revues de code et les décisions d'architecture",
            "Tests — Découverte du Test Driven Development (TDD) et mise en œuvre de tests unitaires et d'intégration avec Gherkin et SpecFlow",
          ],
        },
        {
          project: 'Assurance IARD',
          role: 'Lead Technique Junior & Développeur Confirmé',
          description:
            "J'ai vraiment apprécié l'opportunité de piloter la migration de certaines applications vers une architecture microservices, ce qui m'a permis de mieux appréhender les enjeux des packages et des microservices. Au global, cette expérience m'a beaucoup fait progresser sur les aspects leadership et architecture, même si le contexte était majoritairement legacy et que le client n'était pas toujours réceptif à mes recommandations techniques.",
          highlights: [
            "Oracle — Optimisation des performances : Amélioration des performances de la base de données par l'analyse et l'optimisation des requêtes SQL, des index et des schémas",
            "Microservices — Migration d'applications monolithiques vers une architecture microservices, améliorant la scalabilité et la maintenabilité",
            "Roadmap — Planification stratégique : Collaboration avec le client pour définir la roadmap métier et aligner les solutions techniques avec les objectifs stratégiques",
            "Leadership — Mentoring : Accompagnement des développeurs juniors, favorisant une culture d'apprentissage continu et de développement professionnel au sein de l'équipe",
          ],
        },
        {
          project: 'Banque immobilière',
          role: 'Développeur Logiciel Junior',
          description:
            "C'est sans doute l'expérience la plus formatrice de ma carrière. Commençant en tant que développeur junior, j'ai progressivement pris davantage de responsabilités, en apprenant auprès de collègues expérimentés et en relevant des défis de plus en plus complexes. Git, Jenkins, la gestion de versions, ASP.NET legacy, une large base de code monolithique avec de nombreux problèmes de performances… Une expérience exigeante, mais profondément enrichissante !",
          highlights: [
            "Versioning — Migration du contrôle de version de SVN vers Git, améliorant la collaboration et la gestion du code",
            "Jenkins — Intégration continue : Maintenance des pipelines Jenkins pour automatiser les processus de build et de déploiement",
            "Estimation — Apprentissage de l'estimation d'effort et de la planification des tâches, contribuant à la planification et la livraison des projets",
          ],
        },
      ],
    },
  },
}
