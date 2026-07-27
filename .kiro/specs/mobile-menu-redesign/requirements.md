# Requirements Document

## Introduction

This feature redesigns the existing `MobileNav` component from a simple dropdown overlay into a full-screen drawer. The new component is self-contained: it owns its hamburger/close toggle, all navigation links, app store download buttons, and a bottom action bar with search input and a CTA button. The drawer is powered by the `vaul` library and targets the `lg:hidden` breakpoint in the existing `HeroHeader`. The design must match a specific layout and visual spec using Tailwind CSS v4.

## Glossary

- **MobileNav**: The React component at `src/components/navigation/mobile-nav.tsx` that renders the mobile menu toggle and the full-screen drawer panel.
- **Drawer**: The full-screen overlay panel opened by the hamburger button, implemented with `vaul`'s `Drawer` primitives.
- **NavItem**: A single navigation link entry rendered inside the Drawer, consisting of a label, href, and an optional dropdown indicator.
- **AppStoreButton**: An outline-style button inside the Drawer that links to the Apple App Store or Google Play Store.
- **BottomActionBar**: The bottom region of the Drawer containing a search input and a "Try for free" CTA button.
- **HeroHeader**: The existing component at `src/components/sections/hero/HeroHeader.tsx` that hosts `MobileNav`.
- **ChevronDown**: The `ChevronDown` icon from `lucide-react`, rendered at `w-4 h-4` next to nav items that have a dropdown indicator.

## Requirements

### Requirement 1: Self-Contained Component with Toggle

**User Story:** As a mobile visitor, I want a visible hamburger button in the header so that I can open the navigation menu without relying on external state.

#### Acceptance Criteria

1. THE MobileNav SHALL render a `<button>` element with `aria-label="Open menu"` when the Drawer is closed.
2. WHEN the Drawer is open, THE MobileNav SHALL change the toggle button's `aria-label` to `"Close menu"` and render the `X` icon from `lucide-react` instead of the `Menu` icon.
3. THE MobileNav SHALL manage its own open/closed state internally without requiring any state props from parent components.
4. THE MobileNav SHALL apply `lg:hidden` to its root element so the toggle is hidden on large viewports.

### Requirement 2: Full-Screen Drawer Panel

**User Story:** As a mobile visitor, I want the menu to open as a full-screen overlay so that I have clear access to all navigation options.

#### Acceptance Criteria

1. WHEN the hamburger button is clicked, THE MobileNav SHALL open a `vaul` Drawer that covers the full viewport using `fixed inset-0`.
2. THE Drawer panel SHALL apply `z-50` to appear above all other page content.
3. THE Drawer panel SHALL use a white background (`bg-white`) with `p-6` padding on mobile and `sm:p-8` on small breakpoints.
4. THE Drawer panel SHALL use a `flex flex-col justify-between` layout so the top content and the BottomActionBar are separated vertically.
5. WHEN the close button (X icon) is clicked, THE MobileNav SHALL close the Drawer and restore the hamburger icon.

### Requirement 3: Close Button Placement

**User Story:** As a mobile visitor, I want a clearly visible close button so that I can dismiss the menu easily.

#### Acceptance Criteria

1. THE Drawer panel SHALL render a close button in the top-right corner using a `flex justify-end` wrapper.
2. THE close button SHALL display the `X` icon from `lucide-react` in `text-slate-900`.
3. THE close button SHALL have `aria-label="Close menu"`.

### Requirement 4: Navigation Links

**User Story:** As a mobile visitor, I want to see all main navigation links in the open drawer so that I can navigate to any section of the site.

#### Acceptance Criteria

1. THE Drawer panel SHALL render the following NavItems in order: Home, Services, Pricing, Pages, Contacts.
2. THE NavItem text SHALL use `text-2xl font-bold text-slate-900` styling.
3. THE list of NavItems SHALL use `flex flex-col gap-5` spacing between items.
4. WHEN a NavItem has `hasDropdown: true`, THE MobileNav SHALL render a `ChevronDown` icon at `w-4 h-4 ml-2` inline after the label text.
5. THE NavItems with `hasDropdown: true` SHALL be Home, Services, and Pages.

### Requirement 5: App Store Buttons

**User Story:** As a mobile visitor, I want to see app store download buttons so that I can download the mobile app directly from the menu.

#### Acceptance Criteria

1. THE Drawer panel SHALL render two AppStoreButtons stacked vertically: one for the Apple App Store and one for Google Play.
2. EACH AppStoreButton SHALL apply the following classes: `w-full h-[50px] border border-slate-900 rounded-xl bg-white text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 mb-3`.
3. THE Apple App Store button SHALL render an inline SVG Apple logo alongside the label text.
4. THE Google Play button SHALL render an inline SVG Google Play logo alongside the label text.

### Requirement 6: Bottom Action Bar

**User Story:** As a mobile visitor, I want a search field and a CTA button at the bottom of the drawer so that I can search the site or start a trial without closing the menu.

#### Acceptance Criteria

1. THE BottomActionBar SHALL be rendered at the bottom of the Drawer panel as a `flex` row container.
2. THE search input SHALL use `flex-1 bg-slate-50 border border-slate-200 rounded-xl h-[48px] px-4` and include a placeholder of `"Search…"`.
3. THE search input SHALL have `aria-label="Search"`.
4. THE CTA button SHALL apply `h-[48px] px-5 border border-slate-900 rounded-xl font-semibold text-sm text-slate-900 transition-all` classes.
5. WHEN the user hovers over the CTA button, THE MobileNav SHALL apply `hover:bg-slate-900 hover:text-white` to the CTA button.
6. THE CTA button SHALL display the label "Try for free".

### Requirement 7: HeroHeader Integration

**User Story:** As a developer, I want the HeroHeader to use the redesigned self-contained MobileNav so that no additional wiring is needed in the header.

#### Acceptance Criteria

1. THE HeroHeader SHALL replace its current `<MobileNav>` usage with the new self-contained `MobileNav` component that accepts no `children` prop for navigation content.
2. THE HeroHeader SHALL pass the nav `items` array and `ctaLabel` as props to `MobileNav` so the drawer can render them without duplication.
3. THE HeroHeader SHALL continue to render `MobileNav` inside the `lg:hidden` wrapper div.

### Requirement 8: Accessibility

**User Story:** As a screen reader user, I want the mobile drawer to be navigable with a keyboard and announced correctly so that I can access navigation without a pointer device.

#### Acceptance Criteria

1. THE Drawer panel SHALL trap focus within itself while it is open.
2. WHEN the Drawer is open, THE MobileNav SHALL set `aria-expanded="true"` on the hamburger toggle button.
3. WHEN the Drawer is closed, THE MobileNav SHALL set `aria-expanded="false"` on the hamburger toggle button.
4. THE Drawer panel SHALL have `role="dialog"` and `aria-modal="true"` applied either directly or via the `vaul` Drawer primitive.
