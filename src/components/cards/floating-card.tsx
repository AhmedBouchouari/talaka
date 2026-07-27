"use client";

import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type FloatingCardProps = ComponentProps<typeof motion.div> & {
  children: ReactNode;
};

export function FloatingCard({
  children,
  className,
  ...rest
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "rounded-xl border border-border bg-card p-4 shadow-lg",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}