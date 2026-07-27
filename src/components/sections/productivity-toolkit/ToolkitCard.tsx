"use client";

import type { ReactNode } from "react";

export type ToolkitCardProps = {
  preview: ReactNode;
  title: string;
  description: string;
  href?: string;
};

export function ToolkitCard({ preview, title, description, href = "#" }: ToolkitCardProps) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="relative mb-6 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#f4f5f0] p-6 transition-all duration-500 ease-in-out group-hover:bg-gradient-to-tr group-hover:from-[#2563eb] group-hover:via-[#6366f1] group-hover:to-[#f59e0b]">
        <div className="flex h-full w-full flex-col justify-between rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
          {preview}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mb-6 min-h-[48px] text-sm leading-relaxed text-slate-500">
          {description}
        </p>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-all group-hover:gap-2.5">
          Learn more <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}
