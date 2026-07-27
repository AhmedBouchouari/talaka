import { ArrowUpRight, CircleDashed } from "lucide-react";

/**
 * Light-mode phone frame: "Task — In Progress" dashboard.
 */
export function PhoneLight() {
  return (
    <div
      className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white"
      style={{
        width: 240,
        height: 500,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      role="img"
      aria-label="Light mode phone showing task in progress dashboard"
    >
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />

      <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-neutral-500">
        <span>9:41</span>
        <span>•••</span>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400">
              Task
            </p>
            <h3 className="mt-1 text-[15px] font-semibold text-neutral-900">
              In Progress
            </h3>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* progress ring card */}
        <div className="rounded-2xl bg-neutral-50 p-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <svg viewBox="0 0 40 40" className="h-12 w-12 -rotate-90">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#E5E7EB" strokeWidth="4" />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="4"
                  strokeDasharray="100.5"
                  strokeDashoffset="30"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-neutral-900">
                70%
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-neutral-900">
                Mobile app redesign
              </p>
              <p className="text-[9px] text-neutral-500">7 of 10 tasks done</p>
            </div>
          </div>
        </div>

        {/* task list */}
        <div className="flex flex-col gap-1.5">
          {[
            { title: "Design onboarding", done: true },
            { title: "Wire pricing page", done: true },
            { title: "Ship value section", done: false },
            { title: "QA on iOS", done: false },
          ].map((t) => (
            <div
              key={t.title}
              className="flex items-center gap-2 rounded-xl border border-neutral-100 bg-white p-2.5"
            >
              {t.done ? (
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600">
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white">
                    <path
                      d="M2 6.5L4.5 9L10 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <CircleDashed className="h-4 w-4 text-neutral-300" />
              )}
              <span
                className={`text-[10px] ${t.done ? "text-neutral-400 line-through" : "text-neutral-900"}`}
              >
                {t.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
