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
  project: string
  role: string
  startDate: string
  endDate: string
  /** True when this is the current/ongoing role — use instead of comparing endDate string */
  isCurrent?: boolean
  description: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Capgemini',
    project: 'Project site insurance',
    role: 'Technical Leader, Senior Software Engineer & Junior Architect',
    startDate: '2023',
    endDate: 'Present',
    isCurrent: true,
    description:
      'I still am within this mission today. And it\'s been a drastic change from what I knew with my previous experiences but for the better. '+
      'This project is helping me grow professionally and expand my skill set. OpenShift, Kubernetes and cloud-native technologies have become integral to our workflow. '+
      'I knew the git basics but now I feel fully capable of doing the majority of what could be ask, merge, pull, rebase, finish release ... '+
      'Also being able to work with nearly everything .NET Core related, from API development to microservices architecture, has been a great opportunity to deepen my expertise in this ecosystem.',
    highlights: [
      'Auth — Full implementation of PKJWT authentication flow for secure API access, enhancing security posture and compliance',
      'CI/CD — Established robust CI/CD pipelines using Azure DevOps, automating build, test, and deployment processes to accelerate delivery and improve reliability',
      'Kubernetes — Gained hands-on experience with Kubernetes for container orchestration, enabling scalable and efficient deployment of applications',
      '.NET Core — Led the design and development of RESTful APIs using .NET Core, delivering high-performance (I hope) and migrate version from 6 to 11',
      'Technical Leadership — Inforcing myself to be a technical reference for the team, providing guidance on best practices, code reviews, and architectural decisions',
      'Tests — Discovered Test Driven Development (TDD) and implemented unit and integration testing with Gherkin and SpecFlow'
    ],
  },
  {
    company: 'Capgemini',
    project: 'Non-life insurance',
    role: 'Junior Technical Leader & Intermediate Software Engineer',
    startDate: '2021',
    endDate: '2023',
    description:
      'I really liked the opportunity to do the migration of somes applications with a microservices architecture. ' +
      'That helped me understand a lot about packages and services. ' +
      'Overall this experience helped me grow a lot from the leadership and architect perspectives even if this was mostly legacy and the client was not the most understandable with my technical advices and concerns.',
    highlights: [
      'Oracle — Performances optimisations: Optimized database performance by analyzing and tuning SQL queries, indexes and schema designs',
      'Microservices — Migration: Migrated monolithic applications to microservices architecture, improving scalability and maintainability',
      'Roadmap — Strategic Planning: Collaborated with the client to define the business roadmap and align technical solutions with strategic goals',
      'Team Leadership — Mentoring: Mentored junior developers, fostering a culture of continuous learning and professional growth within the team',
    ],
  },
  {
    company: 'Capgemini',
    project: 'Real estate banking',
    role: 'Junior Software Engineer',
    startDate: '2017',
    endDate: '2021',
    description:
      'It might be the most formative experience of my career. I started as a junior software engineer and gradually took on more responsibilities, ' +
      'learning from experienced colleagues and tackling increasingly complex challenges. ' +
      'I learned a lot about software development, teamwork, and problem-solving during this period. ' +
      'Git, Jenkins, Versioning, old ASP.NET, a big monolithic codebase with a lot of performances issues... It was a tough but rewarding experience!',
    highlights: [
      'Versioning — Migrated version control from SVN to Git, improving collaboration and code management',
      'Jenkins — What is continuous integration?: Tried to maintain Jenkins pipelines as best as I could',
      'Effort Estimation — Learned to estimate effort and plan tasks effectively, contributing to project planning and delivery',
    ],
  },
]
