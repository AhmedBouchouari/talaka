"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { staggerContainer } from "./variants";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}: StaggerProps) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={
        shouldReduce
          ? { hidden: {}, visible: {} }
          : staggerContainer(stagger, delayChildren)
      }
    >
      {children}
    </motion.div>
  );
}