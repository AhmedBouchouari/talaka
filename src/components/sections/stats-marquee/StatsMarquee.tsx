import { motion } from "motion/react";

interface MetricItem {
  icon: string;
  label: string;
}

const metrics: MetricItem[] = [
  { icon: "⏰", label: "Saves 2 hours a day" },
  { icon: "🫂", label: "50,000+ downloads in 3 months" },
  { icon: "📱", label: "200K+ downloads" },
  { icon: "📈", label: "5x faster planning" },
  { icon: "🌐", label: "Used in 60+ countries" },
  { icon: "⭐", label: "4.8 average app rating" },
  { icon: "🔄", label: "99.9% sync reliability" },
  { icon: "📊", label: "5x faster task completion" },
];

function Metric({ item }: { item: MetricItem }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-2.5">
      <span className="text-base" aria-hidden="true">
        {item.icon}
      </span>
      <span className="whitespace-nowrap text-base font-bold text-[#0F1115]">
        {item.label}
      </span>
    </div>
  );
}

export function StatsMarquee() {
  return (
    <section
      className="relative w-screen overflow-hidden border-y border-[#E5E7EB] bg-[#F3F4F6] py-5"
      aria-label="Key metrics"
    >
      <motion.div
        className="flex w-max items-center gap-12 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {metrics.map((item, index) => (
          <Metric key={`metric-a-${index}`} item={item} />
        ))}
        {metrics.map((item, index) => (
          <Metric key={`metric-b-${index}`} item={item} />
        ))}
      </motion.div>
    </section>
  );
}
