import { Receipt, Car, GraduationCap } from "lucide-react";

export function RemindersPreview() {
  const items = [
    { icon: Receipt, label: "Bill & Taxes", date: "Today, 16:36", amount: "-$154.50" },
    { icon: Car, label: "Car Energy", date: "23 Jun, 13:00", amount: "-$40.50" },
    { icon: GraduationCap, label: "Design Course", date: "21 Jun, 19:04", amount: "-$70.00" },
  ];
  return (
    <div className="h-full w-full p-4">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#7C6EF2] to-[#4F46E5] p-3 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] opacity-80">Credit Balance</div>
            <div className="text-[14px] font-bold">$25,215</div>
          </div>
          <div className="text-[10px] opacity-80">•••</div>
        </div>
        <svg
          viewBox="0 0 120 20"
          className="absolute bottom-2 right-2 h-4 w-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,15 C20,10 30,18 45,12 C60,6 75,14 90,8 C100,4 115,10 120,4"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>
      <div className="mt-2 text-[9px] font-semibold text-[#6B7280]">Recent</div>
      <div className="mt-1 flex flex-col gap-1">
        {items.map(({ icon: Icon, label, date, amount }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F3F4F6]">
                <Icon className="h-2.5 w-2.5 text-[#4F46E5]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] font-semibold text-[#0F1115]">{label}</span>
                <span className="text-[7px] text-[#6B7280]">{date}</span>
              </div>
            </div>
            <span className="text-[9px] font-semibold text-[#0F1115]">{amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
