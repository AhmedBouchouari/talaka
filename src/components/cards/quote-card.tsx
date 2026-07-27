import { cn } from "@/lib/utils";
import { Card } from "./card";

type QuoteCardProps = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  className?: string;
};

export function QuoteCard({
  quote,
  author,
  role,
  avatarUrl,
  className,
}: QuoteCardProps) {
  return (
    <Card className={cn("flex flex-col gap-6", className)}>
      <p className="text-body-lg leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={author}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-accent" />
        )}
        <div>
          <div className="text-small font-medium text-foreground">{author}</div>
          {role && (
            <div className="text-caption text-muted-foreground">{role}</div>
          )}
        </div>
      </div>
    </Card>
  );
}