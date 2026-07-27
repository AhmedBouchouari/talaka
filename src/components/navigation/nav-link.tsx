"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link>;

export function NavLink({ className, ...rest }: NavLinkProps) {
  return (
    <Link
      className={cn(
        "text-small font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
      {...rest}
    />
  );
}
