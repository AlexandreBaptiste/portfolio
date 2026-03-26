# Alexandre Baptiste — Portfolio

> **An educational project built with [GitHub Copilot](https://github.com/features/copilot) as the primary AI assistant.**

Live at **[alexandrebaptiste.github.io/portfolio](https://alexandrebaptiste.github.io/portfolio)**

---

## About this project

This portfolio is both a personal showcase and a deliberate experiment: every feature, refactor, translation, and design decision was driven through a conversation with GitHub Copilot agent mode. The goal was to demonstrate that a developer can use an AI assistant correctly — not as an autocomplete, but as a collaborative engineering partner.

What that looked like in practice:
- Asking for code reviews and acting on the findings
- Requesting UI improvements and iterating on suggestions
- Delegating i18n work (EN ↔ FR) including full translation of content sections
- Using the agent to fix bugs it introduced (and learning from the process)
- Keeping tests green through every change

The result is a fully functional, bilingual, dark/light-mode portfolio — and a record of how to prompt, review, and steer an AI assistant on a real front-end project.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) |
| Build tool | [Vite](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion) |
| Icons | [Lucide React](https://lucide.dev) |
| Testing | [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com) |
| Hosting | [GitHub Pages](https://pages.github.com) |

---

## Features

- **Bilingual** — full English / French toggle, all content translated
- **Dark / light mode** — persisted to `localStorage`
- **Animated timeline** — Experience section with staggered Framer Motion entries
- **Skill bars** — per-category cards with animated progress and proficiency labels
- **Project cards** — sourced from a single data file, easy to extend
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Responsive** — desktop sidebar + mobile bottom nav with scroll-to-top

---

## Getting started

```bash
npm install
npm run dev        # development server
npm run build      # production build
npm test           # run tests
```

---

## Project structure

```
src/
├── components/
│   ├── layout/      # Sidebar, ThemeToggle, LanguageToggle
│   └── sections/    # Hero, About, Skills, Projects, Experience
├── context/         # LanguageContext + useTranslation hook
├── data/            # skills.ts, projects.ts, experience.ts  ← edit here
├── hooks/           # useTheme, useLanguage, useActiveSection
└── i18n/            # translations.ts (EN + FR strings)
```

To add a project or experience entry, edit the corresponding file in `src/data/` — no component code needs to change.

---

> Built with [GitHub Copilot](https://github.com/features/copilot) — certified [GH-300](https://learn.microsoft.com/en-us/users/baptistealexandre-5281/credentials/certification/github-copilot?tab=credentials-tab).
