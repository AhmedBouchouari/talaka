"use client";

import { motion } from "motion/react";
import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroFadeUp } from "./variants";

export type HeroCta = {
  label: string;
  sublabel?: string;
  href?: string;
  onClick?: () => void;
};

type HeroButtonsProps = {
  primary?: HeroCta;
  secondary?: HeroCta;
  className?: string;
};

function StoreButton({
  icon,
  cta,
  variant,
}: {
  icon: React.ReactNode;
  cta: HeroCta;
  variant: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-[var(--color-hero-accent)] text-white shadow-[0_10px_25px_rgba(81,68,237,0.4)]"
      : "bg-white text-[var(--color-hero-chip)] shadow-[0_10px_20px_rgba(0,0,0,0.12)]";
  return (
    <a
      href={cta.href ?? "#"}
      onClick={cta.onClick}
      className={cn(
        "inline-flex h-[52px] items-center gap-2 rounded-[10px] px-7 text-[15px] font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-hero-bg)]",
        styles,
      )}
    >
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center">
        {icon}
      </span>
      <span className="flex flex-col items-start leading-tight">
        {cta.sublabel && (
          <span className="text-[10px] font-normal opacity-80">
            {cta.sublabel}
          </span>
        )}
        <span>{cta.label}</span>
      </span>
    </a>
  );
}

const defaults: Required<Pick<HeroButtonsProps, "primary" | "secondary">> = {
  primary: { label: "Download on App Store", sublabel: "Download on the" },
  secondary: { label: "Get it on Google Play", sublabel: "Get it on" },
};

export function HeroButtons({
  primary = defaults.primary,
  secondary = defaults.secondary,
  className,
}: HeroButtonsProps) {
  return (
    <motion.div
      variants={heroFadeUp}
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4",
        className,
      )}
    >
      <StoreButton
        variant="primary"
        cta={primary}
        icon={<Apple className="h-[18px] w-[18px]" aria-hidden />}
      />
      <StoreButton
        variant="secondary"
        cta={secondary}
        icon={<Play className="h-[18px] w-[18px] fill-current" aria-hidden />}
      />
    </motion.div>
  );
}