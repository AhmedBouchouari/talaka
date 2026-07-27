import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BaseProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children?: ReactNode;
};

export function Display({
  as: Tag = "h1",
  size = "xl",
  className,
  ...rest
}: BaseProps & { size?: "xl" | "lg" }) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight text-foreground",
        size === "xl"
          ? "text-display-lg sm:text-display-xl"
          : "text-h1 sm:text-display-lg",
        className,
      )}
      {...rest}
    />
  );
}

export function Heading({
  as: Tag = "h2",
  level = 2,
  className,
  ...rest
}: BaseProps & { level?: 1 | 2 | 3 }) {
  const sizeCls =
    level === 1
      ? "text-h1 sm:text-display-lg"
      : level === 2
        ? "text-h2 sm:text-h1"
        : "text-h3 sm:text-h2";
  return (
    <Tag
      className={cn(
        "font-display font-semibold tracking-tight text-foreground",
        sizeCls,
        className,
      )}
      {...rest}
    />
  );
}

export function Text({
  as: Tag = "p",
  size = "body",
  muted,
  className,
  ...rest
}: BaseProps & {
  size?: "body-lg" | "body" | "small";
  muted?: boolean;
}) {
  const sizeCls =
    size === "body-lg" ? "text-body-lg" : size === "small" ? "text-small" : "text-body";
  return (
    <Tag
      className={cn(
        sizeCls,
        muted ? "text-muted-foreground" : "text-foreground",
        className,
      )}
      {...rest}
    />
  );
}

export function Eyebrow({ as: Tag = "span", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn(
        "text-caption font-medium uppercase tracking-wider text-primary",
        className,
      )}
      {...rest}
    />
  );
}

export function Caption({ as: Tag = "span", className, ...rest }: BaseProps) {
  return (
    <Tag
      className={cn("text-caption text-muted-foreground", className)}
      {...rest}
    />
  );
}