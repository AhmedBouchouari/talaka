import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "sm" | "md" | "lg";
  bare?: boolean;
};

const spacingMap = {
  sm: "py-16 sm:py-20",
  md: "py-20 lg:py-32",
  lg: "py-24 lg:py-40",
} as const;

export function Section({
  eyebrow,
  title,
  description,
  align = "left",
  containerSize = "xl",
  spacing = "md",
  bare,
  className,
  children,
  ...rest
}: SectionProps) {
  const hasHeader = eyebrow || title || description;
  return (
    <section className={cn(spacingMap[spacing], className)} {...rest}>
      <Container size={containerSize}>
        {hasHeader && !bare && (
          <header
            className={cn(
              "mb-12 max-w-2xl sm:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <div className="mb-4 text-caption font-medium uppercase tracking-wider text-primary">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-h2 font-semibold text-foreground sm:text-h1">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-body-lg text-muted-foreground">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}