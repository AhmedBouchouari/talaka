"use client";

import { motion } from "motion/react";

export function SupportBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mt-30 flex max-w-[820px] flex-col items-start justify-between gap-4 rounded-2xl bg-[#131316] px-8 py-5 sm:flex-row sm:items-center lg:mt-48"
    >
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-[#F5C29A] to-[#B87A56]">
            <svg viewBox="0 0 48 48" className="h-full w-full">
              <circle cx="24" cy="18" r="8" fill="#5C3A2A" />
              <ellipse cx="24" cy="42" rx="14" ry="10" fill="#3B2416" />
            </svg>
          </div>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#131316] bg-[#22C55E]" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-white">
            Hello! 👋 It&apos;s Andy from SaaSSy support team.
          </span>
          <span className="text-sm text-gray-400">
            Let me know if you have any questions.
          </span>
        </div>
      </div>
      <a
        href="#contact"
        className="shrink-0 rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-transparent hover:bg-[#5144ED]"
      >
        Contact Us
      </a>
    </motion.div>
  );
}
