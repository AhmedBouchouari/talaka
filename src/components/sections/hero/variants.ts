import type { Variants, Transition } from "motion/react";

const easeOut: Transition = { duration: 0.7, ease: [0.25, 1, 0.5, 1] };

export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: easeOut },
};

export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};