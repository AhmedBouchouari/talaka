export function TeamChatPreview() {
  const rows = [
    { name: "From Alex Manda", time: "Today, 16:36", amount: "+$50", tone: "pos" as const },
    { name: "To Laura Santos", time: "Today, 08:49", amount: "-$27", tone: "neg" as const },
    { name: "From Jadon S.", time: "Yesterday, 14:36", amount: "+$157", tone: "pos" as const },
  ];
  return (
    <div className="h-full w-full p-4">
      <div className="h-full w-full rounded-xl bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="text-[13px] font-bold text-[#0F1115]">Your Transfers</div>
        <div className="mt-3 flex flex-col gap-2">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#E5E7EB] to-[#C7CBD1]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-semibold text-[#0F1115]">{r.name}</span>
                  <span className="text-[8px] text-[#6B7280]">{r.time}</span>
                </div>
              </div>
              <span
                className={`rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${
                  r.tone === "pos"
                    ? "bg-[#DCFCE7] text-[#166534]"
                    : "bg-[#FEE2E2] text-[#991B1B]"
                }`}
              >
                {r.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
