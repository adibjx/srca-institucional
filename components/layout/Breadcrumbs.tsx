import Link from "next/link";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  variant = "light",
  className,
}: {
  items: Crumb[];
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs uppercase tracking-[0.16em]", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isLight ? "text-cream-100/70 hover:text-accent-300" : "text-gray-500 hover:text-accent-600",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLight ? "text-accent-300" : "text-accent-600")}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden="true" className={isLight ? "text-cream-100/30" : "text-gray-400"}>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
