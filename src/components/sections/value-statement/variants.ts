import type { Variants, Transition } from "motion/react";

const easeOut: Transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

export const badgeVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut.ease } },
};

export const headlineVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: easeOut.ease },
  },
};

// ── Outer container ───────────────────────────────────────────────────────────
export const wordContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.07,
    },
  },
};

// ── Normal words: tumble in with rotation + drift from below ─────────────────
// Each word rolls into place like a tossed card landing on a table
export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 28, rotate: -6, scale: 0.85, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 0.15 },
      y:       { type: "spring", stiffness: 500, damping: 18, mass: 0.5 },
      rotate:  { type: "spring", stiffness: 400, damping: 14, mass: 0.4 },
      scale:   { type: "spring", stiffness: 500, damping: 18, mass: 0.4 },
      filter:  { duration: 0.18 },
    },
  },
};

// ── Strong word wrapper: staggers its characters ──────────────────────────────
export const strongWordContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

// ── Strong characters: rubber-band pop from zero ─────────────────────────────
// Each char starts invisible + squashed flat, then overshoots and bounces
export const charVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 10,
    rotate: -15,
    filter: "brightness(2)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    filter: "brightness(1)",
    transition: {
      opacity: { duration: 0.05 },
      scale:   { type: "spring", stiffness: 700, damping: 10, mass: 0.3 },
      y:       { type: "spring", stiffness: 600, damping: 12, mass: 0.3 },
      rotate:  { type: "spring", stiffness: 500, damping: 10, mass: 0.3 },
      filter:  { duration: 0.12 },
    },
  },
};

export const compositeVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};
