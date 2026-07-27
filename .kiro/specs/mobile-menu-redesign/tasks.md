# Implementation Plan: Mobile Menu Redesign

## Overview

Replace the existing `MobileNav` dropdown overlay with a fully self-contained, full-screen `vaul` drawer. The component owns its own state, navigation links, app store buttons, and bottom action bar. `HeroHeader` is updated to pass data as props instead of rendering navigation children.

## Tasks

- [x] 1. Rewrite `MobileNav` component with vaul drawer
  - [x] 1.1 Implement the new self-contained `MobileNav` component
    - Replace `mobile-nav.tsx` with the new implementation using `vaul`'s `Drawer` primitives
    - Add `AppleIcon` and `GooglePlayIcon` inline SVG sub-components
    - Add `AppStoreButton` internal sub-component with required classes
    - Add `DEFAULT_NAV_ITEMS` constant with Home, Services, Pricing, Pages, Contacts
    - Wire `Drawer.Root` open state to internal `useState(false)`
    - Apply `lg:hidden` to root element
    - Render hamburger toggle with `aria-label="Open menu"`, `aria-expanded={open}`
    - Render `Drawer.Portal` > `Drawer.Overlay` > `Drawer.Content` with `fixed inset-0 z-50 bg-white p-6 sm:p-8 flex flex-col justify-between`
    - Render close button row (`flex justify-end`), nav list (`flex flex-col gap-5`), app store section, and bottom action bar
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3_

  - [ ]* 1.2 Write property test for nav items order preservation
    - **Property 1: Nav items order is preserved**
    - **Validates: Requirements 4.1**
    - Use `fast-check` or `@testing-library/react` to generate arbitrary `HeroNavItem[]` arrays and assert rendered link order matches input order

  - [ ]* 1.3 Write property test for NavItem text styling
    - **Property 2: NavItem text styling is applied universally**
    - **Validates: Requirements 4.2**
    - For any non-empty items array, assert every anchor has classes `text-2xl font-bold text-slate-900`

  - [ ]* 1.4 Write property test for ChevronDown icon conditional rendering
    - **Property 3: ChevronDown icon appears if and only if hasDropdown is true**
    - **Validates: Requirements 4.4, 4.5**
    - Assert `ChevronDown` is rendered after items where `hasDropdown === true` and absent otherwise

- [x] 2. Implement navigation links section
  - [x] 2.1 Render `NavItem` entries inside the drawer
    - Map `items` prop (falling back to `DEFAULT_NAV_ITEMS`) into `<ul className="flex flex-col gap-5">` entries
    - Apply `text-2xl font-bold text-slate-900` to each anchor
    - Render `<ChevronDown className="w-4 h-4 ml-2" aria-hidden />` conditionally when `hasDropdown: true`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 2.2 Write unit tests for NavItem rendering
    - Test that all five default nav items render in correct order
    - Test that Home, Services, Pages show ChevronDown; Pricing and Contacts do not
    - _Requirements: 4.1, 4.4, 4.5_

- [x] 3. Implement app store buttons section
  - [x] 3.1 Implement `AppStoreButton` and render both store buttons
    - Confirm `AppStoreButton` applies all required classes: `w-full h-[50px] border border-slate-900 rounded-xl bg-white text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 mb-3`
    - Render Apple App Store button with `AppleIcon` and label "Download on the App Store"
    - Render Google Play button with `GooglePlayIcon` and label "Get it on Google Play"
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ]* 3.2 Write property test for AppStoreButton required classes
    - **Property 4: AppStoreButton required classes are present on every button**
    - **Validates: Requirements 5.2**
    - Assert all required Tailwind classes are present on both rendered store button elements

- [x] 4. Implement bottom action bar
  - [x] 4.1 Implement `BottomActionBar` (inline in `MobileNav`)
    - Render `<div className="flex gap-3 items-center">` at the bottom of the drawer
    - Render search input with `flex-1 bg-slate-50 border border-slate-200 rounded-xl h-[48px] px-4`, `placeholder="Search…"`, `aria-label="Search"`
    - Render CTA button with `h-[48px] px-5 border border-slate-900 rounded-xl font-semibold text-sm text-slate-900 transition-all hover:bg-slate-900 hover:text-white` and text `{ctaLabel}`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

  - [ ]* 4.2 Write property test for CTA button label
    - **Property 5: CTA button label matches ctaLabel prop**
    - **Validates: Requirements 6.6**
    - For any string passed as `ctaLabel`, assert CTA button renders that exact text

- [x] 5. Implement accessibility and ARIA attributes
  - [x] 5.1 Wire ARIA attributes and focus trap
    - Confirm hamburger toggle has `aria-expanded={open}` and correct `aria-label` for both states
    - Confirm `Drawer.Content` carries `aria-modal="true"` (vaul attaches `role="dialog"` natively)
    - Verify focus trap is handled by vaul's `Drawer.Content`
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ]* 5.2 Write property test for aria-expanded state sync
    - **Property 6: aria-expanded reflects open state**
    - **Validates: Requirements 8.2, 8.3**
    - Assert `aria-expanded` on the hamburger button equals the current `open` boolean for both true and false states

- [x] 6. Update `HeroHeader` to use new self-contained `MobileNav`
  - [x] 6.1 Refactor `HeroHeader.tsx` to pass props instead of children
    - Replace the children-based `<MobileNav>` block inside `lg:hidden` with `<MobileNav items={items} ctaLabel={ctaLabel} />`
    - Remove the inline `<ul>` navigation list that was previously passed as children
    - Keep the `lg:hidden` wrapper div
    - _Requirements: 7.1, 7.2, 7.3_

  - [ ]* 6.2 Write unit tests for HeroHeader integration
    - Test that `HeroHeader` renders `MobileNav` inside `lg:hidden`
    - Test that `items` and `ctaLabel` are forwarded correctly
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 7. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- `vaul` v1.1.2 is already listed in `package.json` — no installation needed
- The design document includes a complete reference implementation in the "Full Component Implementation" section
- `Drawer.Content` does not auto-apply `fixed inset-0`; these must be set explicitly as shown in the design
- Property tests validate universal correctness properties; unit tests validate specific examples and edge cases
- All sub-components (`AppleIcon`, `GooglePlayIcon`, `AppStoreButton`) are internal to `mobile-nav.tsx` and not exported

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "3.1", "4.1", "5.1"] },
    { "id": 2, "tasks": ["1.2", "1.3", "1.4", "2.2", "3.2", "4.2", "5.2"] },
    { "id": 3, "tasks": ["6.1"] },
    { "id": 4, "tasks": ["6.2"] }
  ]
}
```
