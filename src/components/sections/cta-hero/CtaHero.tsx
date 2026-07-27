"use client";

import { motion } from "motion/react";
import { Apple, Play } from "lucide-react";
const ctaImage = "/assets/cta-lifestyle.jpg";
export function CtaHero() {
  return (
    <section
      aria-label="Download SaaSSy app"
      className="relative flex min-h-[550px] w-full items-center overflow-hidden bg-slate-900"
    >
      <img
        src={ctaImage}
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/90 via-black/70 to-black/60 sm:bg-gradient-to-r sm:from-black/85 sm:via-black/50 sm:to-transparent"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 py-16 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex max-w-xl flex-col items-start gap-6"
        >
          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            Your pocket&rsquo;s new superpower awaits. Go SaaSSy.
          </h2>

          <p className="max-w-lg text-base font-medium leading-relaxed text-gray-200 sm:text-lg">
            Join over 200,000 people already simplifying their lives with
            SaaSSy App.
          </p>

          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#"
              className="flex h-[52px] transform items-center justify-center gap-3 rounded-[10px] bg-[#5144ED] px-7 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4336e0] hover:shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Apple className="h-5 w-5" aria-hidden />
              <span>Download on App Store</span>
            </a>
            <a
              href="#"
              className="flex h-[52px] transform items-center justify-center gap-3 rounded-[10px] bg-white px-7 text-base font-semibold text-[#1B1B1F] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <Play className="h-5 w-5 fill-current" aria-hidden />
              <span>Get it on Google Play</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
