"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { heroFadeUp } from "./variants";

export type ClientAvatar = {
  src?: string;
  alt: string;
  fallback?: string;
};

type HeroBadgeClientsProps = {
  avatars: ClientAvatar[];
  count: string;
  label: string;
  className?: string;
};

export function HeroBadgeClients({
  avatars,
  count,
  label,
  className,
}: HeroBadgeClientsProps) {
  return (
    <motion.div
      variants={heroFadeUp}
      className={cn(
        "inline-flex items-center gap-4 rounded-2xl border border-white/12 bg-[var(--color-hero-card)] px-[18px] py-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <div className="flex -space-x-2">
        {avatars.slice(0, 3).map((a, i) => (
          <span
            key={i}
            className="grid h-8 w-8 place-items-center overflow-hidden rounded-full border-2 border-[var(--color-hero-card)] bg-white/10 text-[10px] font-semibold text-white"
          >
            {a.src ? (
              <img src={a.src} alt={a.alt} className="h-full w-full object-cover" />
            ) : (
              (a.fallback ?? a.alt.slice(0, 2)).toUpperCase()
            )}
          </span>
        ))}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[18px] font-extrabold text-white">{count}</span>
        <span className="text-[11px] font-medium text-[#9CA3AF]">{label}</span>
      </div>
    </motion.div>
  );
}