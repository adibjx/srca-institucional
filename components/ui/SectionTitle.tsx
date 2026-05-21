import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  variant = "dark",
  align = "left",
  className,
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 font-sans text-xs uppercase tracking-[0.18em]",
            isLight ? "text-accent-300" : "text-accent-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={cn(
          "font-serif text-display-sm md:text-display-md",
          isLight ? "text-cream-50" : "text-primary-900",
        )}
      >
        {title}
      </Heading>

      <div
        className={cn(
          "mt-5 h-[2px] w-16 bg-accent-500",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />

      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            isLight ? "text-cream-200/90" : "text-gray-600",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
