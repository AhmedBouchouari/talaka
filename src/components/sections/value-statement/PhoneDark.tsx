import { Check, MessageSquare } from "lucide-react";

/**
 * Dark-mode phone frame: "Today's Schedule" + "Messages" preview.
 * Rendered in pure CSS so it stays crisp at any scale.
 */
export function PhoneDark() {
  return (
    <div
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0F1115]"
      style={{
        width: 240,
        height: 500,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      role="img"
      aria-label="Dark mode phone showing today's schedule and messages"
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

      {/* status bar */}
      <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-white/70">
        <span>9:41</span>
        <span>•••</span>
      </div>

      <div className="flex flex-col gap-4 px-4 pt-10">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/40">
            Today
          </p>
          <h3 className="mt-1 text-[15px] font-semibold text-white">
            Today's Schedule
          </h3>
        </div>

        {/* schedule cards */}
        <div className="flex flex-col gap-2">
          {[
            { time: "09:00", title: "Design review", tone: "bg-indigo-500/20 text-indigo-300" },
            { time: "11:30", title: "Standup w/ team", tone: "bg-emerald-500/20 text-emerald-300" },
            { time: "14:00", title: "Focus block", tone: "bg-amber-500/20 text-amber-300" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-semibold ${item.tone}`}
              >
                {item.time}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-white">
                  {item.title}
                </p>
                <p className="text-[9px] text-white/40">30 min</p>
              </div>
              <Check className="h-3 w-3 text-white/30" />
            </div>
          ))}
        </div>

        {/* messages */}
        <div className="mt-2">
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-[12px] font-semibold text-white">Messages</h4>
            <MessageSquare className="h-3 w-3 text-white/40" />
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { name: "Priya", msg: "Deck looks great ✨", accent: "bg-fuchsia-400" },
              { name: "Marcus", msg: "Pushed the update", accent: "bg-sky-400" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-2 rounded-xl bg-white/[0.04] p-2">
                <div className={`h-6 w-6 rounded-full ${m.accent}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium text-white">{m.name}</p>
                  <p className="truncate text-[9px] text-white/50">{m.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
