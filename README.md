# SaaSSy — Next.js 15 (App Router)

Next.js export of the SaaSSy landing page, converted from a TanStack Start project.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/` — UI components, sections, motion, cards, layout
- `src/hooks`, `src/lib`, `src/utils`, `src/config`, `src/constants`, `src/types`
- `public/assets/` — images (referenced as `/assets/...`)

The `@/*` path alias resolves to `./src/*`.
