export function AiAssistantPreview() {
  const bars = [40, 55, 30, 70, 45, 85, 60];
  return (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-xl bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] font-medium text-[#6B7280]">Daily Traffic</div>
            <div className="mt-1 text-[16px] font-bold text-[#0F1115]">2,579</div>
          </div>
          <span className="rounded-md bg-[#DCFCE7] px-1.5 py-0.5 text-[9px] font-semibold text-[#166534]">
            +12.4%
          </span>
        </div>
        <div className="mt-3 flex h-16 items-end justify-between gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-[#4F46E5] to-[#7C6EF2]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[7px] text-[#9CA3AF]">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex-1 text-center">
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
