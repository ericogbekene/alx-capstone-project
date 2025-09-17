# Sendex — Next.js + Supabase Scaffold

This repository is a starter scaffold for Sendex, a location-based errand posting and fulfillment platform. It includes a Next.js 14 App Router setup, Supabase integration, Tailwind, and basic project structure.

Setup

1. Copy environment example: `cp .env.local.example .env.local` and fill in values.
2. Install dependencies: `pnpm install` or `npm install`.
3. Run dev: `pnpm dev` or `npm run dev`.

Notes

- This scaffold provides placeholders for Supabase integration, API routes, and components.
- To fully enable Supabase, set the required environment variables in `.env.local` and install dependencies.

Quick commands:

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

Files of interest

- `src/app` — main Next.js app routes and pages
- `src/lib/supabase` — Supabase client/server helpers
- `docs/` — API, database schema, and deployment notes
