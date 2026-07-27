import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Dark canvas wrapper for the Hero. Isolates the section's dark theme
 * from the rest of the (light) site.
 */
export function HeroBackground({ children, className }: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-hero-bg)] text-white",
        className,
      )}
    >
      {/* Soft radial glow — decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% 10%, rgba(81,68,237,0.18), transparent 60%), radial-gradient(800px 500px at 10% 90%, rgba(81,68,237,0.10), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}