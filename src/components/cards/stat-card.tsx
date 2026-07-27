import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

type StatCardProps = {
  value: ReactNode;
  label: ReactNode;
  hint?: ReactNode;
  className?: string;
};

export function StatCard({ value, label, hint, className }: StatCardProps) {
  return (
    <Card className={cn("flex flex-col gap-2", className)}>
      <div className="font-display text-display-lg font-semibold text-foreground">
        {value}
      </div>
      <div className="text-small font-medium text-foreground">{label}</div>
      {hint && <div className="text-caption text-muted-foreground">{hint}</div>}
    </Card>
  );
}