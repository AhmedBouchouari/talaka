import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-6 shadow-xs",
          interactive &&
            "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
          className,
        )}
        {...rest}
      />
    );
  },
);
Card.displayName = "Card";