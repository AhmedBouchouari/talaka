# Project Structure

## Top-Level Layout
```
app/                  # Next.js App Router (routing, layout, global CSS)
  globals.css         # Tailwind v4 config + design tokens (edit here to change theme)
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home page — composes all section components
public/
  assets/             # Static images (avatars, hero, how-it-works, CTA)
src/                  # All application source code
```

## src/ Directory
```
src/
  components/         # All UI components (see below)
  config/             # App-level configuration constants
  constants/          # Shared constant values
  hooks/              # Custom React hooks
  lib/                # Utility libraries (cn() is at lib/utils)
  types/              # Shared TypeScript types/interfaces
  utils/              # Pure utility functions
```

## src/components/ Structure
```
components/
  buttons/            # Button, IconButton
  cards/              # Card, FeatureCard, FloatingCard, PricingCard, QuoteCard, StatCard
  icons/              # Icon wrapper component
  layout/             # Container, Section, Header, Footer
  mockups/            # BrowserFrame, DeviceMockup
  motion/             # Animation wrappers + shared variants
  navigation/         # Navbar, MobileNav, NavLink
  sections/           # Full page sections (one folder per section)
```

Each folder has an `index.ts` barrel file that re-exports all public components.

## Section Components
Each section lives in its own folder under `src/components/sections/<section-name>/`:
```
sections/
  hero/               # Multiple sub-components + variants.ts per section
  cta-hero/
  features-matrix/
  footer/
  ...
```
Complex sections (like `hero/`) are split into focused sub-components (e.g., `HeroContent`, `HeroVisual`, `HeroMarquee`) and composed in the main named export.

## Conventions

### Component Files
- One component per file; filename matches the component name in PascalCase (e.g., `FeatureCard.tsx`)
- All components are TypeScript; always define explicit prop types (`type FooProps = { ... }`)
- Use named exports (not default exports) for components
- Add `"use client"` at the top only when the component uses browser APIs, state, or motion

### Barrel Exports
- Every component folder has an `index.ts` that re-exports all public members
- Import from the folder, not the file: `import { Button } from "@/components/buttons"` not `"@/components/buttons/button"`

### Styling
- Use `cn()` (from `@/lib/utils`) for conditional class merging — never raw `clsx` or `twMerge` directly
- Use design token classes from `globals.css` (e.g., `text-h2`, `text-muted-foreground`, `bg-surface-muted`)
- Avoid hardcoded colors; use semantic token variables

### Component Variants
- Use **CVA** (`class-variance-authority`) for components with multiple visual variants
- Expose a `*Variants` export (e.g., `buttonVariants`) so the variant logic can be reused with `asChild`

### Animation
- Import motion primitives from `motion/react` (not `framer-motion`)
- Use shared variants from `@/components/motion/variants.ts` — don't define one-off animations inline when a preset fits
- Wrap scroll-triggered animations with `<Reveal>` or `<FadeIn>` wrappers
- Always call `useReducedMotion()` and disable/simplify animations when it returns `true`

### Icons
- Use `lucide-react` for all icons
- Type icon props as `LucideIcon` from `lucide-react`
