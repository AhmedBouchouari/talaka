import type { ReactNode } from "react";

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: ReactNode;
};

export type WithClassName<T = Record<string, unknown>> = T & {
  className?: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};