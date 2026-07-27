"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout";
const howDownload = "/assets/how-download.jpg";
const howRegister = "/assets/how-register.jpg";
const howUse = "/assets/how-use.jpg";
type Step = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    image: howDownload,
    alt: "Smiling woman holding a phone at home",
    title: "1. Download",
    description: "Grab SaaSSy App from your favorite store — it's free!",
  },
  {
    image: howRegister,
    alt: "Sign-up form on a colorful sunset gradient",
    title: "2. Register",
    description: "Create your account in seconds using email or Google.",
  },
  {
    image: howUse,
    alt: "Hands using the SaaSSy app on a smartphone",
    title: "3. Use 🚀",
    description: "Plan your day, jot ideas, track goals — all from your pocket.",
  },
];

const cardHover =
  "transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#D1D5DB] hover:shadow-[0_20px_30px_rgba(0,0,0,0.08)]";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How it works"
      className="bg-white py-[100px]"
    >
      <Container size="xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-[14px] py-[6px]"
          >
            <span className="h-2 w-2 rounded-[2px] bg-[#4F46E5]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#4F46E5]">
              How it works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl font-display text-[32px] font-extrabold leading-[1.2] tracking-tight text-[#0F1115] sm:text-[42px]"
          >
            Getting started is easy as{" "}
            <span className="bg-gradient-to-r from-[#8A8F9A] to-[#C8CCD3] bg-clip-text text-transparent">
              1-2-3
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 max-w-[600px] text-[16px] font-normal text-[#6B7280]"
          >
            Get started in minutes — no setup, no stress, just a smoother life.
          </motion.p>
        </div>

        {/* Cards grid + annotation */}
        <div className="relative mt-16">
          {/* Handwritten annotation (desktop only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-8 right-2 hidden lg:flex lg:flex-col lg:items-end"
            style={{ fontFamily: "'Caveat', 'Kalam', cursive" }}
          >
            <span className="text-[18px] text-[#4B5563]">
              You're just 3 steps away ⤵
            </span>
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              className="mt-1 mr-6"
            >
              <path
                d="M4 4 C 30 20, 55 30, 68 54"
                stroke="#4B5563"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M60 46 L68 54 L58 56"
                stroke="#4B5563"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group rounded-[24px] border border-[#E5E7EB] bg-[#F9F9FA] p-8 ${cardHover}`}
              >
                <div className="overflow-hidden rounded-2xl bg-gray-50">
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-6 font-display text-[20px] font-bold text-[#0F1115]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#6B7280]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
