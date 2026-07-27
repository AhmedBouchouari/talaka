"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout";
import { ToolkitCarousel } from "./ToolkitCarousel";
import { SupportBanner } from "./SupportBanner";

export function ProductivityToolkit() {
  return (
    <section
      aria-label="Productivity toolkit"
      className="bg-[#F9F9FA] py-[120px]"
    >
      <Container size="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="inline-flex items-center rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4F46E5]"
          >
            SaaSSy Services
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-4 max-w-3xl font-display text-[32px] font-extrabold leading-[1.15] tracking-tight text-[#0F1115] sm:text-[42px]"
          >
            Your pocket-sized productivity toolkit
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-3 max-w-xl text-base text-[#6B7280]"
          >
            All the tools you need — beautifully packed into one mobile app.
          </motion.p>
        </motion.div>

        <div className="mt-14">
          <ToolkitCarousel />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-30 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <span className="text-[20px] font-bold text-[#0F1115]">
            Discover why people choose SaaSSy App
          </span>
          <a
            href="#services"
            className="rounded-lg bg-[#18181B] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-black"
          >
            Explore Services
          </a>
        </motion.div>

        <SupportBanner />
      </Container>
    </section>
  );
}
