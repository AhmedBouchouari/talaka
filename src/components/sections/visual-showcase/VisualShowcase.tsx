"use client";

import { motion } from "motion/react";

function PhoneFrame({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`relative w-[260px] shrink-0 rounded-[42px] border-[10px] border-[#0F1115] shadow-[0_30px_60px_rgba(0,0,0,0.35)] ${
        tone === "dark" ? "bg-[#0F1115]" : "bg-white"
      } ${className ?? ""}`}
      style={{ aspectRatio: "9/19.5" }}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0F1115]" />
      <div className={`h-full w-full overflow-hidden rounded-[32px] ${tone === "dark" ? "bg-[#111114]" : "bg-white"}`}>
        {/* status bar */}
        <div className={`flex items-center justify-between px-5 pt-4 pb-2 text-[11px] font-semibold ${tone === "dark" ? "text-white" : "text-[#0F1115]"}`}>
          <span>9:41</span>
          <span className="opacity-80">•ıı 🔋</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function TaskScreen() {
  return (
    <div className="px-4 pt-2">
      <div className="text-[18px] font-extrabold text-[#0F1115]">🔥 Task</div>
      <div className="mt-3 overflow-hidden rounded-2xl border border-[#F1F1F3] bg-white p-3">
        <span className="inline-block rounded-md bg-[#4F46E5] px-2 py-0.5 text-[10px] font-bold text-white">Design</span>
        <div className="mt-2 h-28 w-full rounded-xl bg-gradient-to-br from-[#F97316] via-[#EA580C] to-[#7C2D12]" />
        <div className="mt-3 text-[12px] font-bold text-[#0F1115]">Copywriting Content</div>
        <div className="mt-1 text-[9px] text-[#6B7280]">Create content for peaceland App</div>
        <div className="mt-2 flex items-center justify-between">
          <span className="rounded-md border border-[#E5E7EB] px-2 py-0.5 text-[9px] text-[#6B7280]">Aug 20, 2021</span>
          <div className="flex -space-x-1.5">
            {["#F5C29A", "#7C6EF2", "#22C55E"].map((c) => (
              <div key={c} className="h-4 w-4 rounded-full border border-white" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-[#0F1115]">
        In Progress <span className="text-[#9CA3AF]">•••</span>
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="px-4 pt-2">
      <div className="flex items-center justify-between">
        <div className="text-[13px] font-bold text-[#0F1115]">
          Member <span className="text-[#4F46E5]">(25)</span>
        </div>
        <span className="text-[10px] font-semibold text-[#4F46E5]">View All</span>
      </div>
      <div className="mt-2 flex -space-x-2">
        {["#FBBF24", "#F5C29A", "#F87171", "#60A5FA", "#F5C29A", "#A78BFA"].map((c, i) => (
          <div key={i} className="h-7 w-7 rounded-full border-2 border-white" style={{ background: c }} />
        ))}
      </div>
      <div className="mt-3 text-[12px] font-bold text-[#0F1115]">Group Chat</div>
      <div className="mt-2 flex items-start gap-2">
        <div className="h-6 w-6 rounded-full bg-[#F5C29A]" />
        <div>
          <div className="rounded-2xl rounded-tl-sm bg-[#F3F4F6] px-3 py-1.5 text-[10px] text-[#0F1115]">Hello! 👋</div>
          <div className="mt-0.5 text-[8px] text-[#9CA3AF]">08:00 am</div>
        </div>
      </div>
      <div className="mt-2 flex items-start justify-end gap-2">
        <div className="text-right">
          <div className="rounded-2xl rounded-tr-sm bg-[#4F46E5] px-3 py-1.5 text-[10px] text-white">Hi, Everyone 🔥</div>
          <div className="mt-0.5 text-[8px] text-[#9CA3AF]">✓✓ 08:01 am</div>
        </div>
        <div className="h-6 w-6 rounded-full bg-[#F87171]" />
      </div>
      <div className="mt-2 flex items-start gap-2">
        <div className="h-6 w-6 rounded-full bg-[#60A5FA]" />
        <div>
          <div className="rounded-2xl rounded-tl-sm bg-[#F3F4F6] px-3 py-1.5 text-[10px] text-[#0F1115]">
            How are you, What did you do everyone
          </div>
          <div className="mt-0.5 text-[8px] text-[#9CA3AF]">08:03 am</div>
        </div>
      </div>
    </div>
  );
}

function ProjectScreen() {
  const rows = [
    { name: "UX Research", color: "bg-[#4F46E5]", icon: "+" },
    { name: "Information Arc…", color: "bg-[#4F46E5]", icon: "+" },
    { name: "Design Phase", color: "bg-transparent", icon: "" },
    { name: "Build Wireframe", color: "bg-transparent", icon: "" },
    { name: "User Interface D…", color: "bg-transparent", icon: "" },
    { name: "Phototyping", color: "bg-transparent", icon: "" },
    { name: "Development", color: "bg-transparent", icon: "" },
  ];
  return (
    <div className="px-3 pt-2">
      {rows.map((r, i) => (
        <div key={i} className="mt-2 flex items-center justify-between rounded-xl bg-[#1C1C21] px-2.5 py-2">
          <div className="flex items-center gap-2">
            {r.icon && (
              <span className={`grid h-4 w-4 place-items-center rounded ${r.color} text-[10px] font-bold text-white`}>
                {r.icon}
              </span>
            )}
            <span className="text-[10px] font-medium text-white">{r.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1">
              {["#FBBF24", "#F87171", "#60A5FA"].map((c) => (
                <div key={c} className="h-3.5 w-3.5 rounded-full border border-[#1C1C21]" style={{ background: c }} />
              ))}
            </div>
            <span className="text-[10px] text-[#6B7280]">•••</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function VisualShowcase() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1A56EE 0%, #C832A1 50%, #E69832 100%)",
        }}
      />
      {/* noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[32px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            Bright. Friendly. Effortless.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base font-medium text-white/85 sm:text-lg">
            Take a peek inside your new favorite app — where every screen feels like home.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <span className="text-base font-bold text-white sm:text-lg">
              Want to see it in action?
            </span>
            <a
              href="#download"
              className="inline-flex items-center rounded-full bg-white px-7 py-3 text-[15px] font-bold text-[#0F1115] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-transform duration-200 hover:scale-[1.04]"
            >
              Download for free
            </a>
          </div>
        </motion.div>

        {/* Phone trio */}
        <div className="relative mt-20 sm:mt-24 lg:mt-32">
          {/* handwritten annotation */}
          <div className="pointer-events-none absolute -top-6 left-2 z-30 hidden items-center gap-1 text-white/90 sm:flex">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M26 4 C 14 8, 8 16, 8 26" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M14 22 L 8 26 L 12 30" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-[cursive] text-lg italic">See SaaSSy in action</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end justify-center pt-16 sm:pt-20 lg:pt-24"
            style={{ marginBottom: "-80px" }}
          >
            <div className="origin-bottom scale-[0.5] sm:scale-[0.7] lg:scale-90" style={{ transform: "rotate(-15deg) translateX(40px)" }}>
              <PhoneFrame tone="light">
                <TaskScreen />
              </PhoneFrame>
            </div>
            <div className="relative z-10 origin-bottom scale-[0.55] sm:scale-[0.8] lg:scale-100">
              <PhoneFrame tone="light">
                <ChatScreen />
              </PhoneFrame>
            </div>
            <div className="origin-bottom scale-[0.5] sm:scale-[0.7] lg:scale-90" style={{ transform: "rotate(15deg) translateX(-40px)" }}>
              <PhoneFrame tone="dark">
                <ProjectScreen />
              </PhoneFrame>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
