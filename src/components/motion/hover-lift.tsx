"use client";

import { motion } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";
import { hoverLift } from "./variants";

type HoverLiftProps = ComponentPropsWithoutRef<typeof motion.div>;

export function HoverLift(props: HoverLiftProps) {
  return <motion.div {...hoverLift} {...props} />;
}