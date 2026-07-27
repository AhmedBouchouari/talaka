import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  alt: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8 text-caption",
  md: "h-10 w-10 text-small",
  lg: "h-14 w-14 text-body",
} as const;

export function Avatar({ src, alt, fallback, size = "md", className }: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-muted font-medium text-muted-foreground",
        sizeMap[size],
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        (fallback ?? alt.slice(0, 2)).toUpperCase()
      )}
    </span>
  );
}