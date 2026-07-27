# Tech Stack

## Core Framework
- **Next.js 15** (App Router) with **React 19**
- **TypeScript 5.8** — strict types throughout
- `app/` directory for routing and layouts; `src/` for all application code

## Styling
- **Tailwind CSS v4** — CSS-based config only (no `tailwind.config.js`)
- All design tokens are defined in `app/globals.css` under `@theme inline { ... }`
- **No utility config file** — extend the theme via CSS variables in `globals.css`
- `tailwind-merge` + `clsx` combined through the `cn()` utility at `@/lib/utils`
- `tw-animate-css` for additional animation utilities

## Design Tokens (defined in globals.css)
- **Colors**: OKLCH color space; semantic tokens (`--primary`, `--background`, `--foreground`, etc.); dark mode via `.dark` class
- **Typography**: `--font-sans` (DM Sans), `--font-display` (Space Grotesk), Caveat for accent/handwritten text
- **Type scale**: `text-display-xl`, `text-display-lg`, `text-h1`–`text-h3`, `text-body-lg`, `text-body`, `text-small`, `text-caption`
- **Motion tokens**: `--duration-fast/normal/slow`, `--ease-out`, `--ease-in-out`, `--ease-spring`

## Animation
- **Motion** (`motion/react`) v12 — used for all animations
- Shared variant presets in `src/components/motion/variants.ts` (`fadeUp`, `fadeDown`, `fadeIn`, `scaleIn`, `reveal`, `float`, `staggerContainer`, etc.)
- Always respect `useReducedMotion()` — fall back to static states when true
- Reusable motion wrappers: `<Reveal>`, `<FadeIn>`, `<Stagger>`, `<HoverLift>`, `<Marquee>`

## UI Primitives
- **Radix UI** — full suite of headless primitives (Dialog, Tabs, Accordion, DropdownMenu, etc.)
- **class-variance-authority (CVA)** — for variant-based component APIs
- **lucide-react** — icon library

## Forms & Data
- **react-hook-form** + **@hookform/resolvers** + **Zod** — form handling and validation
- **@tanstack/react-query** — server state and data fetching

## Other Notable Libraries
- `embla-carousel-react` — carousels
- `recharts` — charts
- `sonner` — toast notifications
- `vaul` — drawer component
- `cmdk` — command palette
- `date-fns` — date utilities
- `react-day-picker` — date picker

## Path Aliases
- `@/*` → `./src/*` (configured by Next.js automatically)

## Common Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```
