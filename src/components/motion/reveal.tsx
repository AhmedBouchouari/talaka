"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";
import { variantMap, type VariantName } from "./variants";
import { cn } from "@/lib/utils";

type RevealProps = ComponentPropsWithoutRef<typeof motion.div> & {
  variant?: VariantName;
  delay?: number;
  once?: boolean;
  amount?: number;
};

export function Reveal({
  variant = "fadeUp",
  delay = 0,
  once = true,
  amount = 0.3,
  className,
  children,
  ...rest
}: RevealProps) {
  const shouldReduce = useReducedMotion();
  const variants = shouldReduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : variantMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}