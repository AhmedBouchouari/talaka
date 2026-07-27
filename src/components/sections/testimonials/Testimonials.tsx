"use client";

import { motion } from "motion/react";
const lauraAvatar = "/assets/avatars/laura.jpg";
const emilyAvatar = "/assets/avatars/emily.jpg";
const jessAvatar = "/assets/avatars/jess.jpg";
const amandaAvatar = "/assets/avatars/amanda.jpg";
const jamesAvatar = "/assets/avatars/james.jpg";
const annaAvatar = "/assets/avatars/anna.jpg";
const marcoAvatar = "/assets/avatars/marco.jpg";
const jeremyAvatar = "/assets/avatars/jeremy.jpg";
type Testimonial = {
  quote: string;
  author: string;
  title: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Finally, a productivity app that actually feels personal. Clean, quick, and actually powerful.",
    author: "Laura M.",
    title: "Marketing Lead",
    avatar: lauraAvatar,
  },
  {
    quote: "Colorful, intuitive, and fast. It helps me keep my studies and life balanced.",
    author: "Emily B.",
    title: "Student",
    avatar: emilyAvatar,
  },
  {
    quote: "Finally, an app that doesn't overwhelm me. I use it every morning to plan my day — feels like a friend reminding me what matters.",
    author: "Jess K.",
    title: "Freelance Designer",
    avatar: jessAvatar,
  },
  {
    quote: "We automated weekly reports and cut our manual work in half. SaaSSy App became our invisible teammate!",
    author: "Amanda C.",
    title: "Operations Manager at NovaTeam",
    avatar: amandaAvatar,
  },
  {
    quote: "The push notifications and geolocation features are genius — I never lose track of updates.",
    author: "James O'Neill",
    title: "Head of Operations at PixelPro",
    avatar: jamesAvatar,
  },
  {
    quote: "This app changed the way I organize my day. It's fast, flexible, and everything just syncs perfectly!",
    author: "Anna R.",
    title: "Project Manager",
    avatar: annaAvatar,
  },
  {
    quote: "I replaced three apps with SaaSSy. Tasks, notes, reminders — all in one, and it's fun to use!",
    author: "Marco P.",
    title: "Startup Founder",
    avatar: marcoAvatar,
  },
  {
    quote: "It's like Notion and Slack had a baby, but easier to use. My whole team loves it!",
    author: "Jeremy Smith",
    title: "Blogger",
    avatar: jeremyAvatar,
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-[14px] leading-none text-[#0F1115]">
      {"★★★★★".split("").map((star, i) => (
        <span key={i} aria-hidden="true">
          {star}
        </span>
      ))}
      <span className="sr-only">5 out of 5 stars</span>
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-2xl border border-[#E5E7EB] bg-white p-7 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D1D5DB] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)]"
    >
      <StarRating />
      <p className="mt-5 text-[15px] font-semibold leading-[1.5] text-[#0F1115]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          width={40}
          height={40}
          loading="lazy"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-xs font-extrabold uppercase tracking-wide text-[#0F1115]">
            {testimonial.author}
          </span>
          <span className="text-xs font-normal text-[#6B7280]">{testimonial.title}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#F9F9FA] py-[120px]">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4F46E5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" aria-hidden="true" />
            Testimonials
          </span>
          <h2 className="mt-6 text-[42px] font-extrabold leading-[1.1] tracking-tight text-[#0F1115]">
            Thousands of happy users —{" "}
            <span className="text-[#8A8F9A]">and counting!</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B7280]">
            People love how simple SaaSSy App makes their days. Here&apos;s what they&apos;re saying 👇
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
