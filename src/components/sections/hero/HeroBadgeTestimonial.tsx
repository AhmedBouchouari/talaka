"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { heroFadeUp } from "./variants";

type HeroBadgeTestimonialProps = {
  quote: string;
  author: string;
  portraitSrc: string;
  portraitAlt: string;
  className?: string;
};

export function HeroBadgeTestimonial({
  quote,
  author,
  portraitSrc,
  portraitAlt,
  className,
}: HeroBadgeTestimonialProps) {
  return (
    <motion.div
      variants={heroFadeUp}
      className={cn(
        "flex w-[300px] items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_15px_35px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <Image
        src={portraitSrc}
        alt={portraitAlt}
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-[10px] object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-bold leading-snug text-[#1B1B1F]">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#6B7280]">
          — {author}
        </p>
      </div>
    </motion.div>
  );
}
