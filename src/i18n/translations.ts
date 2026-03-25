/**
 * src/i18n/translations.ts
 *
 * All translatable strings for the portfolio, in English and French.
 * Add new keys here first, then consume them via `useTranslation()`.
 */

export type Language = 'en' | 'fr'

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
  }
  experience: {
    heading: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about:      'About',
      skills:     'Skills',
      projects:   'Projects',
      experience: 'Experience',
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
      ],
    },
    skills: {
      heading: 'Skills',
    },
    projects: {
      heading:      'Projects',
      viewOnGithub: 'View on GitHub',
      aiPowered:    'AI-powered',
    },
    experience: {
      heading: 'Experience',
    },
  },

  fr: {
    nav: {
      about:      'À propos',
      skills:     'Compétences',
      projects:   'Projets',
      experience: 'Expérience',
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
      ],
    },
    skills: {
      heading: 'Compétences',
    },
    projects: {
      heading:      'Projets',
      viewOnGithub: 'Voir sur GitHub',
      aiPowered:    "Propulsé par l'IA",
    },
    experience: {
      heading: 'Expérience',
    },
  },
}
