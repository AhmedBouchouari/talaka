import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
};

export function Marquee({ children, className, pauseOnHover }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden [--gap:2rem]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee gap-[var(--gap)]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 gap-[var(--gap)]">{children}</div>
        <div className="flex shrink-0 gap-[var(--gap)]" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}