# Data24Zone

Premium marketing site for **Data24Zone** — *Transforming Businesses Through Technology, Automation & AI*.

Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. Features dark/light mode, glassmorphism UI, Framer Motion animations, animated counters, a mega menu, a testimonials carousel, a Supabase-ready contact form, and full SEO metadata.

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens in `src/app/globals.css`)
- **Animation:** Framer Motion (fade-in, slide-up, parallax hero, animated counters)
- **Icons:** lucide-react
- **Forms:** react-hook-form + zod
- **Backend-ready:** Supabase (`@supabase/ssr`) for auth and the contact form
- **Deployment:** Netlify (`netlify.toml` + `@netlify/plugin-nextjs`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase project credentials to enable the contact form and auth:

```bash
cp .env.example .env.local
```

Without these set, the contact form still works end-to-end in a dev fallback mode (submissions are logged to the server console instead of written to Supabase).

If you do configure Supabase, create a `contact_submissions` table with columns matching `src/app/contact/actions.ts` (`name`, `email`, `phone`, `company`, `service`, `message`, `created_at`).

## Project structure

```
src/
  app/                 Routes (App Router) — one folder per page
  components/
    layout/            Navbar, footer, theme toggle, cookie banner, etc.
    sections/          Homepage sections (Hero, Services, Academy, ...)
    ui/                 Reusable primitives (Button, GlassCard, Reveal, ...)
    forms/              Contact form
  data/                Typed content arrays (services, courses, products, ...)
  lib/                 Utilities, constants, Supabase clients
  types/               Shared TypeScript interfaces
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit

## Deployment (Netlify)

This repo is pre-configured for Netlify via `netlify.toml`. Connect the repo in Netlify, set the environment variables from `.env.example` in the site's build settings, and deploy — the `@netlify/plugin-nextjs` plugin handles the rest.
