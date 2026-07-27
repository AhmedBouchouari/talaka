import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DeviceMockupProps = {
  children: ReactNode;
  device?: "desktop" | "tablet" | "phone";
  className?: string;
};

const deviceMap = {
  desktop: "aspect-[16/10] max-w-5xl",
  tablet: "aspect-[4/3] max-w-2xl",
  phone: "aspect-[9/19] max-w-[280px]",
} as const;

export function DeviceMockup({
  children,
  device = "desktop",
  className,
}: DeviceMockupProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl",
        deviceMap[device],
        className,
      )}
    >
      {children}
    </div>
  );
}