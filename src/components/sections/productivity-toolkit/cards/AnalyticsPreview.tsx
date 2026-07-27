export function AnalyticsPreview() {
  return (
    <div className="h-full w-full p-4">
      <div className="relative h-full w-full rounded-xl bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] font-medium text-[#6B7280]">Profit and Loss</div>
            <div className="mt-1 text-[16px] font-bold text-[#0F1115]">$682.5</div>
            <div className="mt-0.5 flex items-center gap-1 text-[9px] font-medium text-[#16A34A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
              On track
            </div>
          </div>
          <span className="rounded-md bg-[#DCFCE7] px-1.5 py-0.5 text-[9px] font-semibold text-[#166534]">
            + +2.45%
          </span>
        </div>
        <svg
          viewBox="0 0 200 60"
          className="absolute bottom-3 left-3 right-3 h-14 w-[calc(100%-24px)]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pl-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 C20,40 30,50 45,42 C60,34 75,44 95,30 C115,18 130,26 150,20 C170,14 185,22 200,10 L200,60 L0,60 Z"
            fill="url(#pl-fill)"
          />
          <path
            d="M0,45 C20,40 30,50 45,42 C60,34 75,44 95,30 C115,18 130,26 150,20 C170,14 185,22 200,10"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
