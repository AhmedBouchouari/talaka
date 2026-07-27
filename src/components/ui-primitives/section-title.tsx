import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-4 text-caption font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-h2 font-semibold tracking-tight text-foreground sm:text-h1">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}