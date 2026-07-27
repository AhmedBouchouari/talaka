import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

type FeatureCardProps = {
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function FeatureCard({
  icon: IconComp,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card interactive className={cn("flex flex-col gap-4", className)}>
      {IconComp && (
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
          <IconComp className="h-5 w-5" />
        </div>
      )}
      <div>
        <h3 className="font-display text-h3 font-semibold text-foreground">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-body text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
}