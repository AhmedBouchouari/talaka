import { Sparkles, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export type SideToolbarItem = {
  label: string;
  icon: React.ReactNode;
  color: string;
  href?: string;
  onClick?: () => void;
};

type HeroSideToolbarProps = {
  items?: SideToolbarItem[];
  className?: string;
};

const defaults: SideToolbarItem[] = [
  {
    label: "Skins",
    icon: <Sparkles className="h-5 w-5" aria-hidden />,
    color: "var(--color-hero-orange)",
  },
  {
    label: "Buy Now",
    icon: <ShoppingBag className="h-5 w-5" aria-hidden />,
    color: "var(--color-hero-green)",
  },
];

export function HeroSideToolbar({
  items = defaults,
  className,
}: HeroSideToolbarProps) {
  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex",
        className,
      )}
    >
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href ?? "#"}
          onClick={item.onClick}
          aria-label={item.label}
          className="grid h-[50px] w-[50px] place-items-center text-white shadow-lg transition-transform hover:-translate-x-0.5"
          style={{ backgroundColor: item.color }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}