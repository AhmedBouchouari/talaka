"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ToolkitCard } from "./ToolkitCard";
import { TeamChatPreview } from "./cards/TeamChatPreview";
import { AnalyticsPreview } from "./cards/AnalyticsPreview";
import { RemindersPreview } from "./cards/RemindersPreview";
import { TasksPreview } from "./cards/TasksPreview";
import { DashboardPreview } from "./cards/DashboardPreview";
import { AiAssistantPreview } from "./cards/AiAssistantPreview";

const cards = [
  {
    id: "chat",
    title: "Team Chat",
    description: "Seamless communication hub for real-time collaboration.",
    preview: <TeamChatPreview />,
  },
  {
    id: "analytics",
    title: "Analytics Hub",
    description: "Track performance and insights with visual reports.",
    preview: <AnalyticsPreview />,
  },
  {
    id: "reminders",
    title: "Smart Reminders",
    description:
      "Never miss a thing with intelligent notifications that adapt to you.",
    preview: <RemindersPreview />,
  },
  {
    id: "tasks",
    title: "Task Boards",
    description: "Visualize your goals with drag-and-drop simplicity.",
    preview: <TasksPreview />,
  },
  {
    id: "dashboard",
    title: "Personal Dashboard",
    description: "See your progress and daily stats at a glance.",
    preview: <DashboardPreview />,
  },
  {
    id: "ai",
    title: "AI Assistant",
    description: "Get smart suggestions and automate your workflow.",
    preview: <AiAssistantPreview />,
  },
];

export function ToolkitCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(4);
      else if (w >= 768) setPerView(2);
      else setPerView(1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const maxIndex = Math.max(0, cards.length - perView);
  const clampedIndex = Math.min(index, maxIndex);
  const slidePercent = 100 / perView;

  const go = (dir: -1 | 1) => {
    setIndex((i) => Math.min(Math.max(i + dir, 0), maxIndex));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex"
          animate={{ x: `-${clampedIndex * slidePercent}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="shrink-0 px-3 first:pl-0 last:pr-0"
              style={{ flex: `0 0 ${slidePercent}%` }}
            >
              <ToolkitCard
                preview={card.preview}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(-1)}
        disabled={clampedIndex === 0}
        className="absolute -left-4 top-[90px] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#18181B] text-white shadow-md transition-transform duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 lg:-left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(1)}
        disabled={clampedIndex >= maxIndex}
        className="absolute -right-4 top-[90px] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#18181B] text-white shadow-md transition-transform duration-200 hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 lg:-right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
}
