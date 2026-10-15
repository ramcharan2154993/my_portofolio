# PROJECT CONTEXT & RECOVERY DOCUMENT

> **Purpose:** This document serves as the single source of truth and onboarding context for any future AI assistant or developer working on this codebase. It documents the exact architecture, tech stack, data contracts, security guidelines, and design systems implemented in this project.

---

## 1. Project Overview & Exact Tech Stack

This project is a high-performance, accessible, modern personal developer portfolio for **Vangala Ramcharan Reddy**, a B.Tech Computer Science student at Mohan Babu University. It emphasizes a refined designer aesthetic inspired by modern dark-mode portfolios (charcoal canvas, elegant white typography, subtle emerald lighting, and balanced whitespace).

### Exact Dependencies (`package.json`)

- **Runtime & Framework:**
  - `react`: `^19.2.8`
  - `react-dom`: `^19.2.8`
- **Build System & Tooling:**
  - `vite`: `^8.3.0`
  - `@vitejs/plugin-react`: `^6.1.1`
  - `typescript`: `~6.0.2`
  - `oxlint`: `^1.81.0` (Linter)
  - `@types/node`: `^24.13.3`
  - `@types/react`: `^19.2.18`
  - `@types/react-dom`: `^19.2.7`
- **Styling:**
  - `tailwindcss`: `^4.3.3` (Tailwind CSS v4)
  - `@tailwindcss/vite`: `^4.3.3` (Vite integration for Tailwind v4)
- **Icons:**
  - `lucide-react`: `^1.57.0`
  - Custom SVG icons for brand logos (`GithubIcon`, `LinkedinIcon`, `LeetCodeIcon` in `src/components/SocialIcons.tsx`)

---

## 2. Folder Map & File Responsibilities

```
c:\my_portofolio/
├── index.html                    # HTML shell, Plus Jakarta Sans & JetBrains Mono font imports, SEO metadata
├── package.json                  # Dependencies, metadata, and scripts
├── tsconfig.json                 # TypeScript project configuration (references app and node configs)
├── tsconfig.app.json             # TypeScript configuration for src/ application code
├── tsconfig.node.json            # TypeScript configuration for Vite configuration
├── vite.config.ts                # Vite config loading @vitejs/plugin-react and @tailwindcss/vite
├── PROJECT_CONTEXT.md            # This recovery and onboarding context document
├── public/                       # Static public assets served at root path
│   ├── favicon.svg               # Site favicon
│   ├── icons.svg                 # SVG sprite sheet
│   └── profile.jpg               # User profile picture (must never be deleted, generated, or overwritten)
└── src/
    ├── main.tsx                  # React DOM root render with React.StrictMode
    ├── App.tsx                   # Main layout container, background glow overlays, and section orchestrator
    ├── index.css                 # Tailwind v4 import (@import "tailwindcss"), @theme font, base styles, CSS keyframes
    ├── App.css                   # Vite template residual stylesheet (unused by App)
    ├── data/
    │   └── portfolioData.ts      # SINGLE SOURCE OF TRUTH for all portfolio text, links, items, and placeholder logic
    └── components/
        ├── Navbar.tsx            # Sticky header with brand logo "Ramcharan.", desktop nav, contact CTA, mobile drawer
        ├── Hero.tsx              # Hero section: name, headline, bio, CTA buttons, photo frame, floating metrics, platform pills
        ├── About.tsx             # Narrative bio, mindset card, university info card, and academic standing summary
        ├── Skills.tsx            # 4 cards: Languages, Core Specialization (DSA in C++), Tools, Active Interests
        ├── Education.tsx         # Chronological milestones: Mohan Babu University, Narayana Jr College, SVR EM High School
        ├── Achievements.tsx      # 6 real academic awards/milestones, including 10/10 Java distinction with LinkedIn post link
        ├── Projects.tsx          # "Projects Coming Soon" card with active development status & GitHub profile link
        ├── Contact.tsx           # Direct email box (mailto + copy to clipboard), current base location, and platform pills
        ├── Footer.tsx            # Minimalist brand footer with copyright, social icons, and smooth back-to-top button
        └── SocialIcons.tsx       # Accessible SVG icons for GitHub, LinkedIn, and LeetCode
```

---

## 3. Design System & Styling Rules

- **Theme & Colors:**
  - **Canvas Background:** Deep dark charcoal `#0b0f14` (body) and `#090d12` (footer).
  - **Surface / Cards:** `#11161f` with 80% opacity (`bg-[#11161f]/80`) and subtle translucent borders (`border-white/[0.07]`). Inner sub-cards use `#0e141b`.
  - **Primary Text:** Crisp white (`text-white` or `text-slate-100`) for high contrast and modern readability.
  - **Secondary Text:** Balanced muted slate (`text-slate-300`, `text-slate-400`, `text-slate-500`).
  - **Accent Color:** Restrained Emerald Green (`text-emerald-400`, `bg-emerald-500/10`, `border-emerald-500/20`, hover rings `emerald-500/40`). Avoid excessive neon green text or oversized coding badges.
- **Typography:**
  - Primary font: **Plus Jakarta Sans** (`--font-sans: 'Plus Jakarta Sans', system-ui, sans-serif`).
  - Secondary/monospace font: **JetBrains Mono** (used sparingly for code chips or data tags, never for full sentences or headings).
  - Clean font weights: standard text `font-normal` or `font-medium`, section titles `font-extrabold tracking-tight`.
- **Atmospheric Glow Effects:**
  - Ambient radial gradients configured in `src/App.tsx`:
    - Top-right: `w-[50rem] h-[50rem] bg-emerald-500/[0.08] blur-[140px]`
    - Bottom-left: `w-[42rem] h-[42rem] bg-emerald-500/[0.05] blur-[130px]`
- **Animations & Keyframes (`src/index.css`):**
  - `heroFadeRise`: Smooth 0.8s entrance animation (`cubic-bezier(0.16, 1, 0.3, 1)`) on initial page load for the hero photo card.
  - `emeraldGlowPulse`: Subtle 4s looping box-shadow pulse around the photo frame.
  - `emeraldAuraPulse`: Subtle 4s scale and opacity loop on the ambient backdrop aura behind the photo.
  - `hover lift`: Scoped exclusively to devices supporting hover via `@media (hover: hover) { .hero-photo-container:hover .hero-photo-card { transform: translateY(-4px); } }`.
- **Reduced Motion Rules:**
  - Global reset inside `@layer base`:
    ```css
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
    ```
  - Explicit component-level disablement: `.hero-photo-entrance`, `.hero-photo-glow`, `.hero-photo-aura`, and `.hero-photo-card` explicitly set `animation: none !important`, `opacity: 1 !important`, and `transform: none !important` under `prefers-reduced-motion: reduce`. The photo and content display completely normally without jumping or animations.
- **Accessibility:**
  - High-contrast visible focus rings: `:focus-visible { outline: 2px solid #10b981; outline-offset: 3px; }`.

---

## 4. Data Rules & Contracts

1. **Single Source of Truth:**
   All personal information, links, education records, achievements, skills, and projects live in `src/data/portfolioData.ts`. Components must import `portfolioData` and read from it; **never hardcode content in JSX**.
2. **Placeholder Identification & Rendering Rule:**
   - Any string value starting with an open bracket `[` (e.g. `"[YOUR_LINKEDIN_PROFILE_URL]"`, `"[ADD TOOLS]"`, `"[ADD LEARNING INTERESTS]"`) is a placeholder.
   - Tested using the helper function `isPlaceholder(value: string | null | undefined): boolean`.
   - **Crucial Rule:** Placeholders must **NEVER** become active clickable links, hrefs, or open broken web targets. When a placeholder is detected:
     - Render as non-clickable muted indicator tags or disabled badges with a tooltip/title explaining it is pending configuration.
     - Never pass placeholder URLs into `<a href="...">`.
3. **URL & Email Formatting Rules:**
   - Web links must be absolute and use `https://`.
   - Email addresses must be formatted as `mailto:${personal.email}`.
   - Profile photo: `personal.photo` points to `"/profile.jpg"`. If missing, whitespace-only, or starting with `[`, fallback to a circular initials avatar (`VR`).
   - Profile `<img>` requirements: `width={256}`, `height={256}`, `alt={personal.photoAlt}`, `fetchPriority="high"` (with lowercase `fetchpriority="high"` HTML attribute fallback), `style={{ objectFit: 'cover' }}`, and **no** lazy loading (`loading="lazy"` is forbidden because the hero image is above the fold).

---

## 5. Security & Quality Rules

1. **External Links:**
   Every external link (`target="_blank"`) **must** include `rel="noopener noreferrer"` to prevent tab-nabbing and reverse window hijacking.
2. **No Unsafe HTML:**
   Do **not** use `dangerouslySetInnerHTML`. All dynamic strings must be safely rendered as React children.
3. **Dependency Control:**
   Do not install new npm libraries without explicit user request. Solve requirements using existing React, Tailwind CSS v4, CSS keyframes, and `lucide-react`.
4. **No Secrets / Private Information:**
   No passwords, API tokens, secret keys, phone numbers, or private addresses may be written to the codebase or documentation.
5. **Photo Integrity:**
   `public/profile.jpg` must never be deleted, generated, or overwritten by an AI assistant.

---

## 6. Component Inventory & Sections

| Component | File Path | Section ID | Description |
| :--- | :--- | :--- | :--- |
| `Navbar` | `src/components/Navbar.tsx` | N/A | Sticky navigation, brand mark `Ramcharan.`, navigation links, mobile drawer. |
| `Hero` | `src/components/Hero.tsx` | `#hero` | Primary hero banner, headline, name, CTA buttons, photo frame, floating metric cards, bottom platform pills. |
| `About` | `src/components/About.tsx` | `#about` | Narrative summary, engineering mindset, location and university overview. |
| `Skills` | `src/components/Skills.tsx` | `#skills` | 4 cards: Languages, Core Focus (DSA), Tools, Interests. |
| `Education` | `src/components/Education.tsx` | `#education` | Mohan Babu University (B.Tech CSE), Narayana Junior College, SVR EM High School. |
| `Achievements`| `src/components/Achievements.tsx` | `#achievements` | 6 verified achievements with award tags and LinkedIn proof post link. |
| `Projects` | `src/components/Projects.tsx` | `#projects` | Honest showcase card indicating projects are under active development, linking to GitHub. |
| `Contact` | `src/components/Contact.tsx` | `#contact` | Direct email box with copy button, location info, platform link pills. |
| `Footer` | `src/components/Footer.tsx` | N/A | Footer with brand signature, academic attribution, social links, and smooth back-to-top button. |
| `SocialIcons` | `src/components/SocialIcons.tsx` | N/A | Pure SVG icons for GitHub, LinkedIn, and LeetCode. |

---

## 7. Current Project Status (Honest Audit)

| Section / Feature | Status | Real Implementation Details |
| :--- | :--- | :--- |
| **Personal Identity** | **Done** | Name: Vangala Ramcharan Reddy. Location: Nellore, Andhra Pradesh. Email: ramcharan2154993@gmail.com. |
| **Social Profiles** | **Done** | GitHub (`ramcharan2154993`), LeetCode (`ramcharan_reddy`), and LinkedIn (`vangala-ramcharan-reddy-365a0536a`) are live. |
| **Profile Photo** | **Done** | Configured in `portfolioData.ts` as `/profile.jpg`. Displays with emerald glow ring and hover lift. Has robust fallback to `VR` initials if missing or unconfigured. |
| **Typography & Theme**| **Done** | Plus Jakarta Sans loaded and active. Dark charcoal canvas `#0b0f14` with ambient emerald glows. |
| **Hero Section** | **Done** | Complete with floating stat callouts (`9.89 CGPA`, `10/10 Java Distinction`, `DSA in C++`), CTA buttons, and bottom platform pills. |
| **Education Section** | **Done** | All 3 institutions with dates, degrees, and current semester status (2nd year, 1st semester). |
| **Achievements** | **Done** | 6 verified academic milestones. Includes working LinkedIn proof link for the 10/10 Java distinction. |
| **Skills** | **Done** | Modern Bento Grid layout: Core Specialization (DSA in C++), Programming Languages with role tags, categorized Tools & Development Workflow, and AI/ML Exploration narrative card. |
| **Projects** | **In Development** | Real projects have not been built yet. The section honestly presents "Projects Coming Soon" with an active development banner and GitHub link. No fabricated projects. |
| **Contact & Actions** | **Done** | `mailto:` action and clipboard copy button with "Copied" feedback state. |
| **Build & Lint** | **Passing** | `npm run build` exits with code 0. `oxlint` reports 0 errors and 0 warnings. |

---

## 8. CLI Commands

```bash
# Start local development server (runs with Vite)
npm run dev

# Run TypeScript compilation and build production bundle into /dist
npm run build

# Run Oxlint fast linter
npm run lint

# Preview the local production build
npm run preview
```

---

## 9. Operating Rules for Future AI Assistants

1. **Read Before Editing:** Always inspect the actual file content before proposing or making edits. Never guess interfaces, prop names, or class names.
2. **Preserve User Data:** Never overwrite or delete user information in `src/data/portfolioData.ts`. Never fabricate fake project repositories, degrees, or certifications.
3. **Small Batches & Verification:** Make targeted changes one logical unit at a time. Always run `npm run build` after editing to ensure zero TypeScript or bundling regressions.
4. **Scope Control:** Touch only the files explicitly requested by the user. Do not arbitrarily refactor or delete unrelated files or assets (specifically `public/profile.jpg`).
5. **No AI Template Tropes:** Maintain the clean, restrained designer portfolio aesthetic. Avoid adding loud animations, neon monospace banners, or gratuitous gradients.
