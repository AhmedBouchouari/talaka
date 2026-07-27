import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-caption font-medium",
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-foreground",
        primary:
          "border-primary/20 bg-primary/10 text-primary",
        success:
          "border-success/20 bg-success/10 text-success",
        warning:
          "border-warning/30 bg-warning/15 text-warning-foreground",
        error:
          "border-destructive/20 bg-destructive/10 text-destructive",
        outline: "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...rest }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...rest} />;
}

export { badgeVariants };