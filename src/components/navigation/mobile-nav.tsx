"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";
import { Menu, X } from "lucide-react";
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
  { label: "Features",     href: "#features"     },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing",      href: "#pricing"      },
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
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center text-2xl font-bold text-slate-900"
                      >
                        {item.label}
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
