# AGENTS.md

This document explains the project for developers and AI agents working on this codebase.

## Project Overview

A single-page informational site: a field guide to collecting Rare Pepe cards on the Counterparty
network. It has no backend, no forms, and no database — every section is static content rendered
by one route.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   └── favicon.ico
├── src/
│   ├── routes/
│   │   ├── __root.tsx   # Root HTML shell: fonts, meta tags, global styles import
│   │   └── index.tsx    # The entire page — hero, intro, learn-more links, wallets, explorers
│   ├── router.tsx        # TanStack Router setup from the generated route tree
│   └── styles.css        # Tailwind import + the site's color/type/animation design tokens
├── netlify.toml           # Build command (vite build) and publish dir (dist/client)
├── vite.config.ts
└── tsconfig.json
```

## Key Concepts

### File-based routing

Routes live in `src/routes/`. This project has exactly one page (`index.tsx` → `/`) plus the
shared shell in `__root.tsx`. If more pages are added later, follow TanStack Router's file-based
convention: a new file under `src/routes/` becomes a new route, and `src/routeTree.gen.ts` is
regenerated automatically by the Vite plugin — never hand-edit that generated file.

### Content

All copy (link descriptions, wallet notes, explorer notes) is defined as plain arrays at the top
of `src/routes/index.tsx` (`learnLinks`, `wallets`, `explorers`) and mapped into cards. Update
those arrays to change or add entries rather than editing the JSX in each card.

### Styling

- Design tokens (colors, fonts, animation keyframes) are CSS custom properties and utility classes
  in `src/styles.css` — a dark, hand-tinted "field guide" theme (deep green/void background, frog
  green and lily-yellow accents, Fraunces for display type, Space Mono for labels).
- Layout and spacing use Tailwind utility classes directly in JSX.
- The XCP Wallet Chrome extension intentionally has no direct link — extension store URLs and IDs
  change, and pointing to the wrong crypto wallet extension is a real risk, so the copy tells
  readers to search and verify the publisher instead.

## Development Commands

```bash
npm install
npm run dev      # vite dev, http://localhost:3000
npm run build    # production build to dist/client
```

## Conventions

- Components/route files: PascalCase or the TanStack Router file convention.
- Styling: Tailwind utility classes, inline `style` only for CSS-variable-driven design tokens.
- TypeScript strict mode; no `any`.
