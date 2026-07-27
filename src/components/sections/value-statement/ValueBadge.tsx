"use client";

import { motion, useReducedMotion } from "motion/react";
import { badgeVariant } from "./variants";

/**
 * 3D glassmorphic stacked-cube emblem. Rendered with layered gradients so it
 * scales cleanly and adapts to both themes.
 */
export function ValueBadge() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : badgeVariant}
      className="relative flex h-14 w-14 items-center justify-center"
      style={{
        filter: "drop-shadow(0 12px 24px rgba(79, 70, 229, 0.25))",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 56 56"
        width="56"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B7FFF" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#3730A3" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#2E2A8A" />
          </linearGradient>
          <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Lower cube */}
        <g transform="translate(8, 22)">
          <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="url(#cubeTop)" />
          <path d="M0 10 L20 20 L20 32 L0 22 Z" fill="url(#cubeLeft)" />
          <path d="M40 10 L20 20 L20 32 L40 22 Z" fill="url(#cubeRight)" />
        </g>

        {/* Upper cube (stacked) */}
        <g transform="translate(8, 6)">
          <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="url(#cubeTop)" />
          <path d="M0 10 L20 20 L20 22 L0 12 Z" fill="url(#cubeLeft)" opacity="0.9" />
          <path d="M40 10 L20 20 L20 22 L40 12 Z" fill="url(#cubeRight)" opacity="0.9" />
          {/* glass sheen on top */}
          <path d="M20 0 L40 10 L20 20 L0 10 Z" fill="url(#glassSheen)" opacity="0.7" />
        </g>
      </svg>
    </motion.div>
  );
}
