"use client";

import { motion } from "motion/react";
import { MessageSquare, MapPin, Sparkles, Zap, type LucideIcon } from "lucide-react";
const portrait = "/assets/features-portrait.jpg";
type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const leftFeatures: Feature[] = [
  {
    icon: MessageSquare,
    title: "Push Notifications",
    description: "Never miss a thing — get friendly nudges to stay on track.",
  },
  {
    icon: MapPin,
    title: "Geolocation Tasks",
    description: "Get reminders based on where you are.",
  },
];

const rightFeatures: Feature[] = [
  {
    icon: Sparkles,
    title: "Personal Themes",
    description: "Make it yours: colors, emojis, widgets, and moods.",
  },
  {
    icon: Zap,
    title: "Quick Actions",
    description: "Add tasks, set timers, and more — instantly.",
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="group rounded-[20px] border border-[#E5E7EB] bg-[#F9F9FA] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#18181B] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[4deg]">
        <Icon className="h-5 w-5" strokeWidth={2.25} />
      </div>
      <h3 className="mt-16 text-lg font-bold tracking-tight text-[#0F1115]">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
        {feature.description}
      </p>
    </div>
  );
}

export function FeaturesMatrix() {
  return (
    <section className="bg-white py-[100px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4F46E5]">
            <span aria-hidden className="mr-1.5">📘</span>Add-on Features
          </span>
          <h2 className="mt-6 text-[42px] font-extrabold leading-[1.1] tracking-tight text-[#0F1115]">
            Packed with features you&apos;ll love
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
            Your daily tasks, notes, and reminders — all in one friendly,
            colorful app that fits your lifestyle.
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-16">
          {/* Handwritten annotation */}
          <div className="pointer-events-none absolute -top-8 right-0 hidden items-center gap-2 lg:flex">
            <span className="font-[cursive] text-lg italic text-[#4B5563]">
              Smart. Simple. Always with you.
            </span>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-[#4B5563]">
              <path d="M4 4 C 18 8, 26 18, 24 32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M18 28 L 24 32 L 28 26" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, staggerChildren: 0.15 }}
              className="order-2 flex flex-col gap-6 md:order-1 lg:col-span-4"
            >
              {leftFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <FeatureCard feature={f} />
                </motion.div>
              ))}
            </motion.div>

            {/* Center portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 overflow-hidden rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:order-2 lg:col-span-4 lg:max-h-[500px] lg:aspect-[3/4]"
            >
              <img
                src={portrait}
                alt="Happy woman using her smartphone outdoors"
                width={800}
                height={1040}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Right column */}
            <div className="order-3 flex flex-col gap-6 lg:col-span-4">
              {rightFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <FeatureCard feature={f} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
