import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "subtle" | "accent";
  className?: string;
};

const variants = {
  default: "bg-primary-800 text-cream-50",
  subtle: "bg-cream-200 text-primary-900",
  accent: "bg-accent-500/15 text-accent-700 border border-accent-500/30",
} as const;

export function Badge({ children, variant = "subtle", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
