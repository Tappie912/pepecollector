# Rare Pepe Field Guide

A single-page site that explains, in plain language, what collecting Rare Pepe cards on the
Counterparty network actually involves: what Counterparty is, where to read the history, which
wallet to install, and which explorers to use to check an asset or address before trading.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router) on Vite 7
- Tailwind CSS 4
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Building

```bash
npm run build
```

Output goes to `dist/client`, which is what Netlify publishes (see `netlify.toml`).
