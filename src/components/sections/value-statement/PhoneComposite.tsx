"use client";

import { motion, useReducedMotion } from "motion/react";
import { PhoneDark } from "./PhoneDark";
import { PhoneLight } from "./PhoneLight";
import { compositeVariant } from "./variants";

export function PhoneComposite() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? undefined : compositeVariant}
      className="relative mt-16 w-full max-w-[720px]"
    >
      <div className="relative mx-auto flex items-start justify-center">
        {/* Left phone */}
        <motion.div
          className="relative z-10 origin-bottom"
          style={{ rotate: -12 }}
          whileHover={shouldReduce ? undefined : { scale: 1.03, rotate: -12 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <PhoneDark />
        </motion.div>

        {/* Right phone, overlapping */}
        <motion.div
          className="relative z-20 origin-bottom"
          style={{ rotate: 12, marginLeft: -80, marginTop: 40 }}
          whileHover={shouldReduce ? undefined : { scale: 1.03, rotate: 12 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <PhoneLight />
        </motion.div>
      </div>
    </motion.div>
  );
}
