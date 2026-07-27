import { Marquee } from "@/components/motion";
import { cn } from "@/lib/utils";

type HeroMarqueeProps = {
  items: string[];
  className?: string;
};

export function HeroMarquee({ items, className }: HeroMarqueeProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-6",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(90deg, #F7931E 0%, #E84393 25%, #6C5CE7 50%, #2DD4A8 75%, #F7931E 100%)",
        }}
        aria-hidden
      />
      <div className="relative z-10">
        <Marquee pauseOnHover>
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 text-[14px] font-semibold uppercase tracking-widest text-white/90"
            >
              {item}
              <span aria-hidden className="text-white/40">
                •
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}