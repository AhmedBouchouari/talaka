import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";
import { Button } from "../buttons/button";

type PricingCardProps = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  className?: string;
  footer?: ReactNode;
};

export function PricingCard({
  name,
  price,
  period = "/mo",
  description,
  features,
  cta,
  highlighted,
  className,
  footer,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6",
        highlighted && "border-primary shadow-lg ring-1 ring-primary/20",
        className,
      )}
    >
      <div>
        <h3 className="font-display text-h3 font-semibold text-foreground">
          {name}
        </h3>
        {description && (
          <p className="mt-2 text-small text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-display-lg font-semibold text-foreground">
          {price}
        </span>
        <span className="text-small text-muted-foreground">{period}</span>
      </div>
      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-small text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant={highlighted ? "primary" : "outline"} size="lg">
        <a href={cta.href}>{cta.label}</a>
      </Button>
      {footer}
    </Card>
  );
}