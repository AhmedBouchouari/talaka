"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  icon?: React.ReactNode;
  price: string;
  period: string;
  description: string;
  featureHeader: string;
  features: string[];
  cta: { label: string; href?: string };
  featured?: boolean;
  annotation?: string;
};

const plans: Plan[] = [
  {
    name: "Free Plan",
    price: "$0",
    period: "/ FOREVER",
    description: "For everyday users who love simplicity.",
    featureHeader: "INCLUDES:",
    features: [
      "Unlimited notes & to-dos;",
      "Up to 3 task boards;",
      "Sync across 2 devices.",
    ],
    cta: { label: "Start for Free", href: "#" },
  },
  {
    name: "Premium Plan",
    icon: <Rocket className="h-6 w-6 text-[#3B82F6]" aria-hidden />,
    price: "$7.99",
    period: "/ MONTH",
    description: "For everyday users who love simplicity.",
    featureHeader: "INCLUDES EVERYTHING IN FREE, PLUS:",
    features: [
      "Advanced AI assistant;",
      "Unlimited devices;",
      "Collaboration & sharing tools;",
      "Exclusive app themes.",
    ],
    cta: { label: "Upgrade to Pro", href: "#" },
    featured: true,
    annotation: "Upgrade your flow",
  },
];

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white"
    >
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const inner = (
    <div
      className={cn(
        "flex h-full flex-col rounded-[20px] border border-gray-200 bg-white p-8 shadow-sm",
        plan.featured && "relative overflow-hidden rounded-[22px] border-0",
      )}
    >
      <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
        {plan.icon}
        <span>{plan.name}</span>
      </h3>

      <div className="mb-6 inline-flex w-fit items-center gap-1 rounded-md bg-[#F3F4F6] px-3 py-1.5">
        <span className="text-xl font-bold text-slate-900">{plan.price}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {plan.period}
        </span>
      </div>

      <p className="mb-6 text-sm text-slate-600">{plan.description}</p>

      <div className="my-6 border-t border-gray-100" />

      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
        {plan.featureHeader}
      </p>

      <ul className="flex flex-col gap-3.5">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-sm font-medium text-slate-700"
          >
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        {plan.featured && plan.annotation && (
          <div className="mb-2 pr-4 text-right font-[cursive] text-sm italic text-slate-600">
            {plan.annotation} ⤵
          </div>
        )}
        {plan.featured ? (
          <a
            href={plan.cta.href}
            className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#18181B] px-6 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-black hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            {plan.cta.label}
          </a>
        ) : (
          <a
            href={plan.cta.href}
            className="group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 px-6 text-sm font-bold text-slate-900 transition-all duration-200 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            {plan.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </div>
  );

  if (plan.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="rounded-[32px] bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#F59E0B] p-3 shadow-2xl transition-shadow duration-300"
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-[28px] bg-[#F3F4F6]/60 p-3"
    >
      {inner}
    </motion.div>
  );
}

export function PlansOverview() {
  return (
    <section
      id="pricing"
      aria-label="Plans overview"
      className="bg-white px-6 py-24 md:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1 shadow-sm">
            <span
              aria-hidden
              className="inline-block h-3 w-3 rounded-[3px] bg-[#3B82F6]"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
              Plans Overview
            </span>
          </div>

          <h2 className="mb-4 text-center text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
            Free forever. Upgrade{" "}
            <span className="font-light text-gray-400">when</span> you&apos;re
            ready.
          </h2>

          <p className="mx-auto mb-16 max-w-xl text-center text-base text-gray-500">
            Start with everything you need. Add more power only when you want
            it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
