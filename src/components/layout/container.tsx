import { forwardRef, type ElementType, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-[1280px]",
  full: "max-w-none",
} as const;

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as: Tag = "div", size = "xl", className, ...rest }, ref) => {
    return (
      <Tag
        ref={ref as never}
        className={cn(
          "mx-auto w-full px-6 sm:px-8 lg:px-10",
          sizeMap[size],
          className,
        )}
        {...rest}
      />
    );
  },
);
Container.displayName = "Container";