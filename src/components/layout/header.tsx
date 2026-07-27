import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type HeaderProps = {
  children?: ReactNode;
  className?: string;
  sticky?: boolean;
};

export function Header({ children, className, sticky = true }: HeaderProps) {
  return (
    <header
      className={cn(
        "top-0 z-30 w-full border-b border-border/60 bg-background/80 backdrop-blur-md",
        sticky && "sticky",
        className,
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          {children}
        </div>
      </Container>
    </header>
  );
}