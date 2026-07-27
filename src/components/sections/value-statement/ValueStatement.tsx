"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { ValueBadge } from "./ValueBadge";
import { ValueHeadline } from "./ValueHeadline";
import { PhoneComposite } from "./PhoneComposite";

export function ValueStatement() {
  return (
    <section
      aria-label="Core value statement"
      className="bg-surface-muted py-[60px] sm:py-20 lg:py-[120px]"
    >
      <Container size="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <ValueBadge />
          <div className="mt-8 flex w-full justify-center">
            <ValueHeadline />
          </div>
          <PhoneComposite />
        </motion.div>
      </Container>
    </section>
  );
}
