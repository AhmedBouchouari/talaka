"use client";

import { motion } from "motion/react";
import { Search } from "lucide-react";
import { Container } from "@/components/layout";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { heroFadeUp } from "./variants";

export type HeroNavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

type HeroHeaderProps = {
  brand?: { name: string; suffix?: string };
  items?: HeroNavItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
};

const defaultItems: HeroNavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export function HeroHeader({
  brand = { name: "SaaSSy", suffix: "app" },
  items = defaultItems,
  ctaLabel = "Try for free",
  onCtaClick,
}: HeroHeaderProps) {
  return (
    <motion.header
      variants={heroFadeUp}
      className="relative z-20 w-full pt-6"
    >
      <Container size="xl">
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-lg text-white shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #7C6BF6 0%, #5144ED 60%, #3822B8 100%)",
              }}
            >
              <span className="block h-4 w-4 rotate-45 rounded-[3px] bg-white/90" />
            </span>
            <span className="text-[22px] font-bold tracking-tight text-white">
              {brand.name}
              {brand.suffix && (
                <span className="font-light text-white/60">{brand.suffix}</span>
              )}
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[15px] font-semibold text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 md:flex">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white"
            >
              <Search className="h-3.5 w-3.5" aria-hidden />
              Search
            </button>
            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--color-hero-chip)] px-5 text-[14px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {ctaLabel}
            </button>
          </div>

          <div className="lg:hidden">
            <MobileNav items={items} ctaLabel={ctaLabel} />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}