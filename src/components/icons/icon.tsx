import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = LucideProps & {
  icon: LucideIcon;
};

export function Icon({ icon: LucideIcon, className, ...rest }: IconProps) {
  return <LucideIcon className={cn("h-5 w-5", className)} {...rest} />;
}