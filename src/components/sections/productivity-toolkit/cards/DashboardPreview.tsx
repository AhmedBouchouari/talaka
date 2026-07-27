export function DashboardPreview() {
  return (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-xl bg-gradient-to-br from-[#0F1115] to-[#2A2438] p-3 text-white">
        <div className="text-[9px] font-medium opacity-70">Today&apos;s Course</div>
        <div className="mt-1 text-[12px] font-bold leading-tight">
          What do you need to know to create better products?
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["#F5C29A", "#7C6EF2", "#22C55E"].map((c) => (
              <div
                key={c}
                className="h-4 w-4 rounded-full border border-[#0F1115]"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="text-[8px] opacity-70">+12 enrolled</span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-[#7C6EF2]" />
        </div>
        <div className="mt-1 flex items-center justify-between text-[8px] opacity-70">
          <span>Progress</span>
          <span>67%</span>
        </div>
      </div>
    </div>
  );
}
