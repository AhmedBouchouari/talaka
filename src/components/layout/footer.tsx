import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type FooterProps = {
  children?: ReactNode;
  className?: string;
};

export function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={cn("border-t border-border/60 bg-surface", className)}
    >
      <Container>
        <div className="py-16">{children}</div>
      </Container>
    </footer>
  );
}