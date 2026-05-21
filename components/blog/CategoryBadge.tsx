import Link from "next/link";
import { categories, type CategorySlug } from "@/lib/categories";
import { cn } from "@/lib/utils";

export function CategoryBadge({
  slug,
  name,
  asLink = true,
  size = "sm",
  className,
}: {
  slug: string;
  name?: string;
  asLink?: boolean;
  size?: "sm" | "md";
  className?: string;
}) {
  const cat = categories[slug as CategorySlug];
  const label = name ?? cat?.name ?? slug;
  const color = cat?.color ?? "#0B3D4E";

  const sizing =
    size === "md"
      ? "px-3 py-1 text-[0.72rem]"
      : "px-2.5 py-0.5 text-[0.68rem]";

  const inner = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border font-medium uppercase tracking-[0.14em]",
        sizing,
        className,
      )}
      style={{
        borderColor: `${color}33`,
        backgroundColor: `${color}11`,
        color,
      }}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );

  if (!asLink) return inner;
  return (
    <Link
      href={`/blog?categoria=${slug}`}
      className="inline-block transition-opacity hover:opacity-80"
    >
      {inner}
    </Link>
  );
}
