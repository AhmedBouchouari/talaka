"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { heroFadeUp } from "./variants";
import {
  HeroBadgeClients,
  type ClientAvatar,
} from "./HeroBadgeClients";
import { HeroBadgeTestimonial } from "./HeroBadgeTestimonial";

type HeroVisualProps = {
  imageSrc: string;
  imageAlt: string;
  clients: {
    avatars: ClientAvatar[];
    count: string;
    label: string;
  };
  testimonial: {
    quote: string;
    author: string;
    portraitSrc: string;
    portraitAlt: string;
  };
  annotation?: string;
  className?: string;
};

export function HeroVisual({
  imageSrc,
  imageAlt,
  clients,
  testimonial,
  annotation,
  className,
}: HeroVisualProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[520px]", className)}>
      <motion.div
        variants={heroFadeUp}
        className="relative mx-auto aspect-[9/13] w-full max-w-[420px] overflow-hidden rounded-[36px] border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover"
        />
      </motion.div>

      <HeroBadgeClients
        {...clients}
        className="absolute left-[-4%] top-[14%] scale-90 sm:scale-100"
      />

      <HeroBadgeTestimonial
        {...testimonial}
        className="absolute bottom-[18%] right-[-6%] hidden scale-90 sm:block sm:scale-100"
      />

      {annotation && (
        <motion.div
          variants={heroFadeUp}
          className="absolute -bottom-2 right-4 hidden max-w-[220px] items-center gap-2 lg:flex"
        >
          <span
            className="text-white/85"
            style={{
              fontFamily: "var(--font-caveat), 'Segoe Script', cursive",
              fontSize: "18px",
              lineHeight: 1.2,
            }}
          >
            {annotation}
          </span>
          <svg
            width="42"
            height="52"
            viewBox="0 0 42 52"
            fill="none"
            aria-hidden
            className="text-white/70"
          >
            <path
              d="M4 48 C 8 30, 22 14, 36 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M36 6 L 30 10 M36 6 L 34 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
