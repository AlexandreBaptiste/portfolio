# Portfolio Plan — Alexandre BAPTISTE
> Last updated: 2026-03-23
> Status: Draft v3 — all placeholders filled, ready to start Phase 1

---

## 1. Overview

A single-page personal portfolio for **Alexandre BAPTISTE**, .NET Technical Leader & Senior Software Engineer at Capgemini.
Hosted for free on **GitHub Pages**, built with modern React tooling.

**Goals:**
- Present Alexandre's profile and expertise clearly and professionally
- Highlight AI usage and key projects (linked to GitHub)
- Be easy to navigate on both desktop and mobile
- Be easy to maintain and extend (add projects, update skills)

---

## 2. Tech Stack

| Layer | Tool | Why |
|---|---|---|
| Scaffolding | **Vite + React + TypeScript** | Fast build, modern standard |
| Styling | **Tailwind CSS** | Utility-first CSS — compose styles with class names rather than writing custom CSS files. Very popular in the React ecosystem. |
| Components | **shadcn/ui** | Pre-built, accessible, minimal React components built with Tailwind. Unlike Bootstrap, you own the code — components are copied into your project and can be fully customized. |
| Font | **Montserrat** (Google Fonts) | Clean, modern, professional |
| Icons | **Lucide React** | Lightweight icon library, already used by shadcn/ui |
| Animations | **Framer Motion** | The standard React animation library. Used for smooth scroll transitions, fade-ins, and hover effects. |
| Testing | **Vitest + React Testing Library** | Vitest = Jest equivalent for Vite. React Testing Library tests components from the user's perspective. |
| Deployment | **GitHub Pages via GitHub Actions** | Free hosting, auto-deploys on every push to `main` |

---

## 3. Page Structure (Single-Page)

The page is divided into scrollable **sections**. There is no routing — everything lives on one URL.

```
┌────────────────────────────────────────────────────────────────────┐
│                                                     [🌙 / ☀️ toggle]│  ← Top bar: theme toggle only
├──────────────┬─────────────────────────────────────────────────────┤
│              │                                                      │
│  LEFT SIDEBAR│              MAIN CONTENT                           │
│              │                                                      │
│  Section nav │  ┌─────────────────────────────────────────────┐   │
│  ──────────  │  │  HERO — Alexandre BAPTISTE                   │   │
│  About       │  │  .NET Technical Leader · Senior Engineer     │   │
│  Skills      │  │  @ Capgemini · 8 years                       │   │
│  Projects    │  │  Senior Backend Developer · Technical Leader ·  │   │
│  Experience  │  │  .NET Enthusiast · @Capgemini                   │   │
│              │  └─────────────────────────────────────────────┘   │
│              │                                                      │
│  ──────────  │  ┌─────────────────────────────────────────────┐   │
│              │  │  ABOUT ME                                    │   │
│  [LinkedIn]  │  │  Paragraphs about background, what you love  │   │
│  [GitHub]    │  │  (AI, engineering, building things), values  │   │
│  [Email]     │  └─────────────────────────────────────────────┘   │
│              │                                                      │
│              │  ┌─────────────────────────────────────────────┐   │
│              │  │  SKILLS                                      │   │
│              │  │  [Backend] [Frontend] [Cloud] [AI] [Tools]  │   │
│              │  │                                              │   │
│              │  │  C#          ████████████░░░░  85%           │   │
│              │  │  .NET / ASP  ████████████░░░░  85%           │   │
│              │  │  SQL Server  ██████████░░░░░░  75%           │   │
│              │  │  React       ██████░░░░░░░░░░  40%           │   │
│              │  └─────────────────────────────────────────────┘   │
│              │                                                      │
│              │  ┌─────────────────────────────────────────────┐   │
│              │  │  PROJECTS                                    │   │
│              │  │                                              │   │
│              │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐    │   │
│              │  │  │Project 1 │ │Project 2 │ │Project 3 │    │   │
│              │  │  │          │ │          │ │          │    │   │
│              │  │  │[GitHub ↗]│ │[GitHub ↗]│ │[GitHub ↗]│    │   │
│              │  │  └──────────┘ └──────────┘ └──────────┘    │   │
│              │  └─────────────────────────────────────────────┘   │
│              │                                                      │
│              │  ┌─────────────────────────────────────────────┐   │
│              │  │  EXPERIENCE                                  │   │
│              │  │                                              │   │
│              │  │  Capgemini — Technical Leader & Sr. Engineer │   │
│              │  │  2017 → Present · 8 years                    │   │
│              │  │  [ brief description of role & impact ]      │   │
│              │  └─────────────────────────────────────────────┘   │
└──────────────┴─────────────────────────────────────────────────────┘
```

**Left sidebar behavior:**
- Section titles are always visible
- The title corresponding to the currently visible section is **underlined / highlighted**
- Clicking a section title **smooth-scrolls** to it
- Contact icons sit at the bottom of the sidebar (LinkedIn, GitHub, Email)
- On **mobile**: sidebar collapses — a hamburger menu or a fixed bottom nav bar replaces it

---

## 4. Sections Detail

### 4.1 Hero
- Full name: **Alexandre BAPTISTE**
- Title: **.NET Technical Leader & Senior Software Engineer**
- Company: **Capgemini**
- Tagline: `Senior Backend Developer · Technical Leader · .NET Enthusiast · @Capgemini`
- Contact links (icon buttons): [LinkedIn](https://www.linkedin.com/in/alexandre-baptiste-shelter/) · [GitHub](https://github.com/AlexandreBaptiste) · alexandre.baptiste.etu@gmail.com
- Subtle animation: name fades/slides in on load

### 4.2 About Me
- No profile photo for now (can be added later)
- Placeholder content (to be replaced with real text):

> **Paragraph 1 — Background:**
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. I am a Senior Software Engineer and Technical Leader with 8 years of experience at Capgemini, specialising in backend development and systems architecture.

> **Paragraph 2 — What I love:**
> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. I am passionate about engineering quality, building maintainable systems, and exploring the intersection of software and artificial intelligence.

> **Paragraph 3 — Now:**
> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. I am currently expanding my skills into frontend development with React, and building AI-powered tools that solve real problems.

### 4.3 Skills
**Categories:**

| Category | Skills (initial list) |
|---|---|
| Backend | C#, .NET / ASP.NET Core, Entity Framework, REST APIs, Microservices |
| Frontend | React, TypeScript, HTML/CSS, Tailwind CSS |
| Cloud & DevOps | Azure, Azure DevOps, Docker, CI/CD |
| AI & LLM | Prompt Engineering, Copilot, AI Agents, LLM Integration |
| Data | SQL Server, T-SQL |
| Tools | Git, Visual Studio, VS Code, Postman |

**Skill level display:** Progress bar (0–100%) with the percentage shown
- Bars animate in (fill from 0 to value) when the section scrolls into view
- Color: accent color (defined in design system)

> **Easy to extend:** Skills are defined in a single `data/skills.ts` TypeScript file — no component changes needed to add or update a skill.

### 4.4 Projects
- Card-based layout (responsive grid: 1 col mobile, 2–3 col desktop)
- Each card contains:
  - Project name
  - Short description (2–3 lines)
  - Tags (technologies used)
  - Link to GitHub repo
  - Optional: "AI-powered" badge if relevant
- Hover effect: subtle card lift (shadow + slight scale)

> **Easy to extend:** Projects are defined in a single `data/projects.ts` TypeScript file — add an object to the array to add a new project.

**Placeholder projects (to be replaced with real ones later):**

| # | Name | Description | Tags | AI badge |
|---|---|---|---|---|
| 1 | **DotNet Starter Kit** | Lorem ipsum dolor sit amet, consectetur adipiscing elit. A robust .NET microservices boilerplate with clean architecture and CI/CD pipeline. | C#, .NET, Docker, Azure DevOps | No |
| 2 | **AI Assistant Toolkit** | Lorem ipsum dolor sit amet, consectetur adipiscing elit. An LLM-powered internal assistant integrating multiple AI providers via a unified .NET API. | C#, .NET, OpenAI, Azure, REST API | ✅ Yes |
| 3 | **SQL Audit Dashboard** | Lorem ipsum dolor sit amet, consectetur adipiscing elit. A real-time SQL Server audit and monitoring dashboard with role-based access control. | C#, SQL Server, React, TypeScript | No |
| 4 | **React Portfolio** | Lorem ipsum dolor sit amet, consectetur adipiscing elit. This very portfolio — built to learn React while showcasing professional work. | React, TypeScript, Tailwind, Vite | No |

> GitHub URLs: all point to `https://github.com/AlexandreBaptiste/<repo-name>` — replace slugs when real repos are created.

### 4.5 Experience
- Timeline-style layout
- Can be extended with earlier experiences later

**Placeholder entry (to be replaced with real content):**

| Field | Value |
|---|---|
| Company | **Capgemini** |
| Role | Technical Leader & Senior Software Engineer |
| Duration | 2017 – Present (8 years) |
| Description | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Led technical teams and delivered high-quality backend solutions for enterprise clients. Responsible for architecture decisions, code reviews, and mentoring junior developers. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. |
| Key highlights | Lorem ipsum — Placeholder highlight 1. Lorem ipsum — Placeholder highlight 2. Lorem ipsum — Placeholder highlight 3. |

---

## 5. Design System

### 5.1 Theme

Monochrome black & white palette — clean, timeless, high contrast. Colour is used only for subtle interactive states, not decoration.

| Token | Dark Mode | Light Mode |
|---|---|---|
| Background | `#0A0A0A` (pure black) | `#FFFFFF` (pure white) |
| Surface (cards) | `#141414` (soft black) | `#F5F5F5` (soft white) |
| Border | `#2A2A2A` | `#E0E0E0` |
| Text primary | `#FFFFFF` | `#0A0A0A` |
| Text muted | `#888888` | `#666666` |
| Accent | `#FFFFFF` (dark) / `#0A0A0A` (light) | inverted |
| Accent hover | `#CCCCCC` | `#333333` |
| Skill bar fill | `#FFFFFF` | `#0A0A0A` |
| Active nav underline | `#FFFFFF` | `#0A0A0A` |

**Design intent:** No colour distractions — your work and words take centre stage. The only "colour" is contrast itself. Interactive elements (hover states, active nav, skill bars) use white-on-black or black-on-white inversion to signal interaction without needing a colour accent.

### 5.2 Typography

- **Font:** Montserrat (Google Fonts) — loaded via `@fontsource/montserrat` npm package
- Heading 1 (name): `3.5rem`, weight `700`
- Heading 2 (section titles): `1.75rem`, weight `600`
- Body: `1rem`, weight `400`
- Muted/labels: `0.875rem`, weight `400`

### 5.3 Animations (Framer Motion)
- **On load:** Hero text fades and slides up (duration 0.6s, ease out)
- **On scroll into view:** Each section fades in with a slight upward movement
- **Skill bars:** Fill animation triggered on scroll-into-view
- **Project cards:** Hover lift — `y: -4px`, shadow increase
- **Theme toggle:** Smooth background and color transitions via Tailwind `transition-colors`
- **Sidebar nav:** Active section indicator slides/transitions between titles

All animations are **subtle and purposeful** — never decorative for its own sake.

---

## 6. Project Structure

```
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx          # Left nav + contact icons
│   │   │   └── ThemeToggle.tsx      # Dark/light mode button (top right)
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Experience.tsx
│   │   └── ui/                      # shadcn/ui components (auto-generated)
│   │       ├── badge.tsx
│   │       ├── card.tsx
│   │       └── progress.tsx
│   ├── data/
│   │   ├── skills.ts                # ← Edit this to add/update skills
│   │   ├── projects.ts              # ← Edit this to add/update projects
│   │   └── experience.ts            # ← Edit this to add/update experience
│   ├── hooks/
│   │   ├── useActiveSection.ts      # Tracks which section is in viewport
│   │   └── useTheme.ts              # Dark/light mode state + localStorage
│   ├── lib/
│   │   └── utils.ts                 # shadcn/ui utility (class merging)
│   ├── App.tsx                      # Root layout: sidebar + main content
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Tailwind directives + custom CSS vars
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions: build + deploy to GitHub Pages
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 7. Agent Tasks — Implementation Phases

Each phase below is a self-contained AI agent task. They are ordered by dependency.

---

### Phase 1 — Project Scaffold
**Goal:** Initialize the Vite + React + TypeScript project with Tailwind CSS and shadcn/ui configured.

**What the agent will do:**
1. Run `npm create vite@latest` with React + TypeScript template
2. Install and configure Tailwind CSS (`tailwind.config.ts`, `index.css`)
3. Install and configure shadcn/ui (init command, configure theme tokens)
4. Install Framer Motion, Lucide React, `@fontsource/montserrat`
5. Install Vitest + React Testing Library
6. Set up `vite.config.ts` with base path for GitHub Pages
7. Create the folder structure above (empty files)
8. Add inline comments explaining each config file

**Deliverable:** A running `npm run dev` with a blank page and all tooling ready.

**Agent input:** GitHub username = `AlexandreBaptiste` → base URL will be `https://AlexandreBaptiste.github.io/portfolio`

---

### Phase 2 — Theme & Layout Shell
**Goal:** Build the persistent layout: sidebar, theme toggle, dark/light mode system.

**What the agent will do:**
1. Implement `useTheme.ts` hook (stores preference in `localStorage`, defaults to dark)
2. Build `ThemeToggle.tsx` (top-right sun/moon icon button)
3. Build `Sidebar.tsx` with:
   - Static section list (links that smooth-scroll)
   - `useActiveSection.ts` hook using `IntersectionObserver` to detect current section
   - Active section underline animation
   - Contact icons at bottom (LinkedIn, GitHub, Email — using Lucide icons)
4. Build `App.tsx` layout (sidebar left, main content right)
5. Mobile responsive: sidebar hidden on small screens, replaced by a fixed bottom icon bar

**Deliverable:** Full layout shell visible, theme toggle working, sidebar highlighting sections on scroll.

---

### Phase 3 — Data Layer
**Goal:** Define all content as typed TypeScript data files.

**What the agent will do:**
1. Create `src/data/skills.ts` with initial skills list + categories + levels
2. Create `src/data/projects.ts` — placeholder entries (Alexandre fills in)
3. Create `src/data/experience.ts` — Capgemini entry (Alexandre fills in description)

**Deliverable:** All data centralized and typed — easy for Alexandre to edit without touching components.

---

### Phase 4 — Sections Implementation
**Goal:** Build all 5 section components.

**What the agent will do:**
1. `Hero.tsx` — name, title, tagline with fade-in animation
2. `About.tsx` — text paragraphs with scroll-triggered fade
3. `Skills.tsx` — category filter tabs, animated progress bars
4. `Projects.tsx` — responsive card grid with hover effects, reads from `data/projects.ts`
5. `Experience.tsx` — timeline layout, reads from `data/experience.ts`
6. Wire all sections into `App.tsx` with scroll IDs

**Deliverable:** Fully functional single-page portfolio (with placeholder content).

---

### Phase 5 — Unit Tests
**Goal:** Write Vitest + React Testing Library tests for each component.

**What the agent will do:**
- `Hero.test.tsx` — renders name and title
- `Skills.test.tsx` — renders all categories, filters work
- `Projects.test.tsx` — renders cards from data, GitHub links present
- `Experience.test.tsx` — renders experience entries
- `useTheme.test.ts` — default is dark, toggle switches, persists to localStorage
- `useActiveSection.test.ts` — correct section is returned for a given scroll position

**Deliverable:** `npm run test` passes all tests with coverage.

---

### Phase 6 — GitHub Pages Deployment
**Goal:** Configure GitHub Actions to auto-deploy on push to `main`.

**What the agent will do:**
1. Create `.github/workflows/deploy.yml`:
   - Trigger: push to `main`
   - Steps: checkout → setup Node → install → build → deploy to `gh-pages` branch
2. Configure `vite.config.ts` base path (`/portfolio/` or `/`)
3. Add `README.md` with local dev instructions

**Deliverable:** Pushing to `main` triggers a deploy. Site is live at `https://AlexandreBaptiste.github.io/portfolio`.

---

## 8. Open Items (To Confirm Before Coding)

| # | Item | Status |
|---|---|---|
| 1 | About Me text (2–3 paragraphs) | ✅ Lorem placeholder added — real text to replace later |
| 2 | Projects list (name, description, GitHub URL, tech tags) | ✅ Placeholder dummy projects added — real ones to replace later |
| 3 | Experience description (Capgemini role details) | ✅ Lorem placeholder added — real text to replace later |
| 4 | GitHub username | ✅ `AlexandreBaptiste` |
| 5 | Tagline | ✅ `Senior Backend Developer · Technical Leader · .NET Enthusiast · @Capgemini` |
| 6 | LinkedIn URL + Email | ✅ linkedin.com/in/alexandre-baptiste-shelter · alexandre.baptiste.etu@gmail.com |
| 7 | Accent color | ✅ Monochrome — black bg + white text (dark) / white bg + black text (light) |
| 8 | Skill levels review (percentages) | ⏳ Alexandre to adjust when ready |

---

## 9. What You Will Need to Learn (Minimal)

Since Alexandre is new to React, here's the minimum knowledge needed to **maintain** this portfolio after it's built:

| Task | What to know |
|---|---|
| Add a project | Edit `src/data/projects.ts` — add an object to the array |
| Add a skill | Edit `src/data/skills.ts` — add an object with name, level, category |
| Update About text | Edit `src/components/sections/About.tsx` — change the paragraph text |
| Change colors | Edit `src/index.css` — CSS variables are listed at the top |
| Run locally | `npm run dev` in the terminal |
| Deploy | `git push origin main` — GitHub Actions handles the rest |
