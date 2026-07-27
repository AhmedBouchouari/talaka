# Design Document

## Overview

This design replaces the existing `MobileNav` component — a simple conditional-render overlay — with a fully self-contained, full-screen drawer powered by the `vaul` library. The component owns its own open/closed state, all navigation content, app store links, and the bottom action bar. `HeroHeader` is updated to pass data as props rather than rendering navigation children itself.

The stack is Next.js 15, React 19, TypeScript 5.8, Tailwind CSS v4, `lucide-react`, and `vaul@1.1.2` (already in `package.json`).

---

## Architecture

### Component Hierarchy

```
HeroHeader
└── MobileNav (lg:hidden)          ← owns all mobile menu state & UI
    ├── HamburgerButton             ← toggle, aria-expanded, aria-label
    └── Drawer.Root (vaul)          ← open state bound to internal useState
        └── Drawer.Portal
            └── Drawer.Content      ← fixed inset-0, z-50, role=dialog aria-modal
                ├── CloseRow        ← flex justify-end, close button
                ├── NavList         ← flex flex-col gap-5, NavItem entries
                ├── AppStoreSection ← two AppStoreButton components
                └── BottomActionBar ← search input + CTA button
```

### State Model

`MobileNav` holds a single piece of state:

```ts
const [open, setOpen] = React.useState(false);
```

`vaul`'s `Drawer.Root` receives `open` and `onOpenChange`. All toggle interactions (hamburger click, close button click, vaul's built-in swipe-to-close, click-outside) funnel through `onOpenChange`.

---

## Component Interfaces

### `MobileNav`

```ts
import type { HeroNavItem } from "@/components/sections/hero/HeroHeader";

type MobileNavProps = {
  items?: HeroNavItem[];
  ctaLabel?: string;
  className?: string;
};
```

The `children` prop is removed. `items` and `ctaLabel` are optional to maintain backward-compatible defaults.

### `HeroNavItem` (unchanged, re-exported)

```ts
export type HeroNavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};
```

### Internal sub-components (not exported)

All sub-components below are defined inside `mobile-nav.tsx` and are not exported.

```ts
// NavItem row
type NavItemRowProps = { label: string; href: string; hasDropdown?: boolean };

// AppStoreButton
type AppStoreButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};
```

---

## Data

### Default NavItems

Defined inside `mobile-nav.tsx` to keep the component self-contained:

```ts
const DEFAULT_NAV_ITEMS: HeroNavItem[] = [
  { label: "Home",     href: "#", hasDropdown: true  },
  { label: "Services", href: "#", hasDropdown: true  },
  { label: "Pricing",  href: "#", hasDropdown: false },
  { label: "Pages",    href: "#", hasDropdown: true  },
  { label: "Contacts", href: "#", hasDropdown: false },
];
```

### SVG Icons

Both store icons are inlined as JSX within `mobile-nav.tsx`. No external icon library or asset file is required.

**Apple logo** (standard monochrome Apple SVG path, 20×24 viewBox):

```tsx
const AppleIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 814 1000"
    className="h-5 w-5 fill-current"
  >
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.7-49 192.3-49 30.5.1 107.8 2.9 167.3 79zM506.1 42.8C518.7 17.6 527 0 527 0 395.4 0 341.8 116.7 338.8 126.1c-.6.1-14.3.1-14.9 0-105.3 0-205.7 51.6-266.7 140.5l498.9 274.2z" />
  </svg>
);
```

**Google Play logo** (standard Play Store triangle mark, 24×24 viewBox):

```tsx
const GooglePlayIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.7 11.76-11.7 11.76zM21.54 10.27l-2.89-1.64L15.9 12l2.75 2.75 2.89-1.64A2.08 2.08 0 0 0 22.79 12a2.08 2.08 0 0 0-1.25-1.73zM4.54.59l11.09 11.09-3.27 3.27L4.54.59zm11.09 12.32L4.54 24.41l8.82-14.36 2.27 2.86z" />
  </svg>
);
```

---

## Full Component Implementation

```tsx
"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HeroNavItem } from "@/components/sections/hero/HeroHeader";

// ─── Inline SVG icons ────────────────────────────────────────────────────────

const AppleIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 814 1000"
    className="h-5 w-5 fill-current"
  >
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 70.1 0 128.4 46.4 172.5 46.4 42.8 0 109.7-49 192.3-49 30.5.1 107.8 2.9 167.3 79zM506.1 42.8C518.7 17.6 527 0 527 0 395.4 0 341.8 116.7 338.8 126.1c-.6.1-14.3.1-14.9 0-105.3 0-205.7 51.6-266.7 140.5l498.9 274.2z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-current"
  >
    <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.7 11.76-11.7 11.76zM21.54 10.27l-2.89-1.64L15.9 12l2.75 2.75 2.89-1.64A2.08 2.08 0 0 0 22.79 12a2.08 2.08 0 0 0-1.25-1.73zM4.54.59l11.09 11.09-3.27 3.27L4.54.59zm11.09 12.32L4.54 24.41l8.82-14.36 2.27 2.86z" />
  </svg>
);

// ─── Default data ─────────────────────────────────────────────────────────────

const DEFAULT_NAV_ITEMS: HeroNavItem[] = [
  { label: "Home",     href: "#", hasDropdown: true  },
  { label: "Services", href: "#", hasDropdown: true  },
  { label: "Pricing",  href: "#"                     },
  { label: "Pages",    href: "#", hasDropdown: true  },
  { label: "Contacts", href: "#"                     },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

type AppStoreButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function AppStoreButton({ href, label, icon }: AppStoreButtonProps) {
  return (
    <a
      href={href}
      className="w-full h-[50px] border border-slate-900 rounded-xl bg-white text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 mb-3"
    >
      {icon}
      {label}
    </a>
  );
}

// ─── MobileNav ────────────────────────────────────────────────────────────────

type MobileNavProps = {
  items?: HeroNavItem[];
  ctaLabel?: string;
  className?: string;
};

export function MobileNav({
  items = DEFAULT_NAV_ITEMS,
  ctaLabel = "Try for free",
  className,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Hamburger toggle */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      {/* Full-screen drawer */}
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-black/20" />
          <Drawer.Content
            aria-modal="true"
            className="fixed inset-0 z-50 bg-white p-6 sm:p-8 flex flex-col justify-between focus:outline-none"
          >
            {/* ── Top section ─────────────────────────────── */}
            <div>
              {/* Close button row */}
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-900 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              {/* Navigation links */}
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-5 mt-6">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="inline-flex items-center text-2xl font-bold text-slate-900"
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown
                            className="w-4 h-4 ml-2"
                            aria-hidden
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* App store buttons */}
              <div className="mt-8">
                <AppStoreButton
                  href="#"
                  label="Download on the App Store"
                  icon={<AppleIcon />}
                />
                <AppStoreButton
                  href="#"
                  label="Get it on Google Play"
                  icon={<GooglePlayIcon />}
                />
              </div>
            </div>

            {/* ── Bottom action bar ────────────────────────── */}
            <div className="flex gap-3 items-center">
              <input
                type="search"
                aria-label="Search"
                placeholder="Search…"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl h-[48px] px-4 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
              />
              <button
                type="button"
                className="h-[48px] px-5 border border-slate-900 rounded-xl font-semibold text-sm text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
              >
                {ctaLabel}
              </button>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
```

---

## HeroHeader Changes

The only changes to `HeroHeader.tsx` are:

1. Remove the `children`-based `MobileNav` call.
2. Pass `items` and `ctaLabel` directly as props.
3. Remove the now-unused imports (`Search` icon can stay; the internal list rendering inside `lg:hidden` is removed).

```tsx
// Before
<div className="lg:hidden">
  <MobileNav>
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="text-body font-medium text-foreground">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </MobileNav>
</div>

// After
<div className="lg:hidden">
  <MobileNav items={items} ctaLabel={ctaLabel} />
</div>
```

---

## vaul Integration Notes

`vaul` v1.x exports a `Drawer` namespace. Key primitives used:

| Primitive | Role |
|---|---|
| `Drawer.Root` | Holds `open`/`onOpenChange`, enables swipe-to-close |
| `Drawer.Portal` | Portals content to `document.body` |
| `Drawer.Overlay` | Scrim backdrop; click-outside closes drawer |
| `Drawer.Content` | The panel element; vaul attaches `role="dialog"` and manages focus trap |

`Drawer.Content` does **not** automatically apply `fixed inset-0`. These layout classes must be explicitly set (as shown above) to achieve full-screen coverage. The `shouldScaleBackground` prop on `Drawer.Root` can optionally scale the page behind the drawer — omit it for this design since the full-screen coverage makes scaling unnecessary.

---

## Error Handling

| Scenario | Handling |
|---|---|
| `items` prop is undefined or empty | Falls back to `DEFAULT_NAV_ITEMS`; empty array renders empty `<ul>` gracefully |
| `ctaLabel` prop is undefined | Falls back to `"Try for free"` |
| vaul not installed | TypeScript import error at compile time — `vaul` is already in `package.json` |
| Focus trap failure | Handled natively by vaul's `Drawer.Content`; no custom implementation needed |
| Swipe gesture on non-touch devices | vaul degrades gracefully; mouse-based click-outside still closes the drawer |

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Nav items order is preserved

*For any* array of `HeroNavItem` objects passed as `items` to `MobileNav`, the rendered navigation links inside the open drawer SHALL appear in the same order as the input array, with no items omitted or duplicated.

**Validates: Requirements 4.1**

### Property 2: NavItem text styling is applied universally

*For any* non-empty `items` array, every rendered navigation link element SHALL have the CSS classes `text-2xl`, `font-bold`, and `text-slate-900` applied to its anchor element.

**Validates: Requirements 4.2**

### Property 3: ChevronDown icon appears if and only if hasDropdown is true

*For any* `items` array, a `ChevronDown` icon SHALL be rendered after the label of every item where `hasDropdown === true`, and SHALL NOT be rendered after any item where `hasDropdown` is `false` or `undefined`.

**Validates: Requirements 4.4, 4.5**

### Property 4: AppStoreButton required classes are present on every button

*For any* rendered `AppStoreButton` instance, the element SHALL have all of the following classes present in its `className`: `w-full`, `h-[50px]`, `border`, `border-slate-900`, `rounded-xl`, `bg-white`, `text-slate-900`, `font-semibold`, `text-sm`, `flex`, `items-center`, `justify-center`, `gap-2`.

**Validates: Requirements 5.2**

### Property 5: CTA button label matches ctaLabel prop

*For any* string passed as `ctaLabel` to `MobileNav`, the CTA button inside the BottomActionBar SHALL render that exact string as its visible text content.

**Validates: Requirements 6.6**

### Property 6: aria-expanded reflects open state

*For any* open state value (true or false), the hamburger toggle button's `aria-expanded` attribute SHALL equal that boolean value, ensuring the ARIA state is always in sync with the actual drawer open/closed state.

**Validates: Requirements 8.2, 8.3**
