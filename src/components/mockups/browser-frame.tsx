import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

export function BrowserFrame({ children, url, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-muted" />
        <span className="h-3 w-3 rounded-full bg-muted" />
        <span className="h-3 w-3 rounded-full bg-muted" />
        {url && (
          <div className="ml-4 rounded-md bg-background px-3 py-1 text-caption text-muted-foreground">
            {url}
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}