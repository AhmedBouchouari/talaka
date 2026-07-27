"use client";

import { useState } from "react";
import { Check, GripVertical } from "lucide-react";

type Task = { id: string; label: string; done: boolean };

const initial: Task[] = [
  { id: "1", label: "Landing Page Design", done: false },
  { id: "2", label: "Dashboard Builder", done: true },
  { id: "3", label: "Mobile App Design", done: true },
  { id: "4", label: "Illustrations", done: false },
  { id: "5", label: "Promotional LP", done: true },
];

export function TasksPreview() {
  const [tasks, setTasks] = useState(initial);
  const toggle = (id: string) =>
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  return (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-[#4F46E5]"
              aria-label="Tasks group"
            >
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            </button>
            <span className="text-[11px] font-bold text-[#0F1115]">Tasks</span>
          </div>
          <span className="text-[10px] text-[#9CA3AF]">•••</span>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          {tasks.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => toggle(t.id)}
              className="flex items-center justify-between rounded-md px-1 py-0.5 text-left hover:bg-[#F9FAFB]"
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`flex h-3 w-3 items-center justify-center rounded-[3px] border ${
                    t.done ? "border-[#4F46E5] bg-[#4F46E5]" : "border-[#D1D5DB] bg-white"
                  }`}
                >
                  {t.done && <Check className="h-2 w-2 text-white" strokeWidth={3} />}
                </span>
                <span
                  className={`text-[9px] ${
                    t.done ? "text-[#0F1115] font-medium" : "text-[#9CA3AF]"
                  }`}
                >
                  {t.label}
                </span>
              </div>
              <GripVertical className="h-2.5 w-2.5 text-[#D1D5DB]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
