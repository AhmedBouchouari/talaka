"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Search, X } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
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

// ── Searchable index of page content ──────────────────────────────────────────
type SearchResult = {
  title: string;
  description: string;
  sectionId: string;
  sectionLabel: string;
};

const PAGE_INDEX: SearchResult[] = [
  // Features section
  {
    title: "Push Notifications",
    description: "Never miss a thing — get friendly nudges to stay on track.",
    sectionId: "features",
    sectionLabel: "Features",
  },
  {
    title: "Geolocation Tasks",
    description: "Get reminders based on where you are.",
    sectionId: "features",
    sectionLabel: "Features",
  },
  {
    title: "Personal Themes",
    description: "Make it yours: colors, emojis, widgets, and moods.",
    sectionId: "features",
    sectionLabel: "Features",
  },
  {
    title: "Quick Actions",
    description: "Add tasks, set timers, and more — instantly.",
    sectionId: "features",
    sectionLabel: "Features",
  },
  // How it works
  {
    title: "Download the app",
    description: "Grab SaaSSy App from your favorite store — it's free!",
    sectionId: "how-it-works",
    sectionLabel: "How It Works",
  },
  {
    title: "Register your account",
    description: "Create your account in seconds using email or Google.",
    sectionId: "how-it-works",
    sectionLabel: "How It Works",
  },
  {
    title: "Start using SaaSSy",
    description: "Plan your day, jot ideas, track goals — all from your pocket.",
    sectionId: "how-it-works",
    sectionLabel: "How It Works",
  },
  // Pricing
  {
    title: "Free Plan",
    description: "Unlimited notes & to-dos. Up to 3 task boards. Sync across 2 devices.",
    sectionId: "pricing",
    sectionLabel: "Pricing",
  },
  {
    title: "Premium Plan",
    description: "Advanced AI assistant. Unlimited devices. Collaboration & sharing tools. Exclusive app themes.",
    sectionId: "pricing",
    sectionLabel: "Pricing",
  },
  // Testimonials
  {
    title: "User Reviews",
    description: "See what 1.2M+ happy users say about SaaSSy App.",
    sectionId: "testimonials",
    sectionLabel: "Testimonials",
  },
  // Sections
  {
    title: "Productivity Toolkit",
    description: "All the tools you need — beautifully packed into one mobile app.",
    sectionId: "how-it-works",
    sectionLabel: "How It Works",
  },
];

function search(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PAGE_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.sectionLabel.toLowerCase().includes(q),
  ).slice(0, 6);
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80; // navbar height compensation
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

// ── Component ─────────────────────────────────────────────────────────────────

export function HeroHeader({
  brand = { name: "SaaSSy", suffix: "app" },
  items = defaultItems,
  ctaLabel = "Try for free",
  onCtaClick,
}: HeroHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const results = search(query);
  const showDropdown = searchOpen && query.trim().length > 0;

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setQuery("");
    setActiveIndex(-1);
  }, []);

  const handleResultClick = useCallback(
    (result: SearchResult) => {
      scrollToSection(result.sectionId);
      closeSearch();
    },
    [closeSearch],
  );

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      const id = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [searchOpen]);

  // Close on Escape key, arrow key navigation
  useEffect(() => {
    if (!searchOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
      } else if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
        handleResultClick(results[activeIndex]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchOpen, results, activeIndex, closeSearch, handleResultClick]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  // Close when clicking outside
  useEffect(() => {
    if (!searchOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [searchOpen, closeSearch]);

  const expandVariants = {
    collapsed: { width: 0, opacity: 0 },
    expanded: { width: "260px", opacity: 1 },
  };

  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] };

  return (
    <motion.header variants={heroFadeUp} className="relative z-20 w-full pt-6">
      <Container size="xl">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Brand */}
          <a href="#" className="flex shrink-0 items-center gap-2">
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

          {/* Desktop nav links */}
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

          {/* Desktop right side: search + CTA */}
          <div className="hidden items-center gap-5 md:flex" ref={containerRef}>
            <div className="relative flex items-center gap-2">
              {/* Animated search input */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    key="search-input"
                    initial={reducedMotion ? undefined : expandVariants.collapsed}
                    animate={expandVariants.expanded}
                    exit={reducedMotion ? undefined : expandVariants.collapsed}
                    transition={transition}
                    className="overflow-hidden"
                    style={{ originX: 1 }}
                  >
                    <input
                      ref={inputRef}
                      type="search"
                      role="combobox"
                      aria-label="Search page content"
                      aria-expanded={showDropdown}
                      aria-autocomplete="list"
                      aria-controls="search-results"
                      placeholder="Search…"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full h-9 rounded-lg bg-white/15 border border-white/25 px-3 text-[14px] text-white placeholder:text-white/50 outline-none focus:bg-white/20 focus:border-white/40 transition-colors"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search toggle button */}
              <button
                type="button"
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
                onClick={() => {
                  if (searchOpen) {
                    closeSearch();
                  } else {
                    setSearchOpen(true);
                  }
                }}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white/80 transition-colors hover:text-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {searchOpen ? (
                    <motion.span
                      key="close"
                      initial={reducedMotion ? undefined : { opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="h-3.5 w-3.5" aria-hidden />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="search"
                      initial={reducedMotion ? undefined : { opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={reducedMotion ? undefined : { opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Search className="h-3.5 w-3.5" aria-hidden />
                    </motion.span>
                  )}
                </AnimatePresence>
                {!searchOpen && "Search"}
              </button>

              {/* Results dropdown */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.ul
                    id="search-results"
                    role="listbox"
                    aria-label="Search results"
                    initial={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 right-0 mt-2 max-h-[360px] overflow-y-auto rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl"
                    style={{ minWidth: "300px" }}
                  >
                    {results.length === 0 ? (
                      <li className="px-4 py-3 text-sm text-white/60">
                        No results for &ldquo;{query}&rdquo;
                      </li>
                    ) : (
                      results.map((result, i) => (
                        <li
                          key={`${result.sectionId}-${result.title}`}
                          role="option"
                          aria-selected={i === activeIndex}
                          onMouseEnter={() => setActiveIndex(i)}
                          onClick={() => handleResultClick(result)}
                          className={`flex cursor-pointer flex-col gap-0.5 px-4 py-3 transition-colors ${
                            i === activeIndex
                              ? "bg-white/20"
                              : "hover:bg-white/10"
                          } ${i !== results.length - 1 ? "border-b border-white/10" : ""}`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-white">
                              {result.title}
                            </span>
                            <span className="shrink-0 rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium text-white/70">
                              {result.sectionLabel}
                            </span>
                          </div>
                          <span className="line-clamp-1 text-xs text-white/60">
                            {result.description}
                          </span>
                        </li>
                      ))
                    )}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={onCtaClick}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--color-hero-chip)] px-5 text-[14px] font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {ctaLabel}
            </button>
          </div>

          {/* Mobile nav toggle */}
          <div className="lg:hidden">
            <MobileNav items={items} ctaLabel={ctaLabel} />
          </div>
        </div>
      </Container>
    </motion.header>
  );
}
