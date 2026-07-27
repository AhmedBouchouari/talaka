"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { heroFadeUp } from "./variants";
import { HeroButtons, type HeroCta } from "./HeroButtons";

type HeroContentProps = {
  headline: string;
  subtitle: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  className?: string;
};

export function HeroContent({
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  className,
}: HeroContentProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <motion.h1
        variants={heroFadeUp}
        className="font-display text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[56px]"
      >
        {headline}
      </motion.h1>
      <motion.p
        variants={heroFadeUp}
        className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-[var(--color-hero-muted)]/90 lg:text-[18px]"
      >
        {subtitle}
      </motion.p>
      <HeroButtons
        primary={primaryCta}
        secondary={secondaryCta}
        className="mt-10"
      />
    </div>
  );
}