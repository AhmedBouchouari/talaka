import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NavbarProps = {
  logo?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function Navbar({ logo, children, actions, className }: NavbarProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn("flex w-full items-center justify-between gap-6", className)}
    >
      <div className="flex items-center gap-8">
        {logo}
        {children && (
          <ul className="hidden items-center gap-6 md:flex">{children}</ul>
        )}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </nav>
  );
}