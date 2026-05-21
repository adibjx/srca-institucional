import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-primary-950 hover:bg-accent-400 shadow-sm hover:shadow-md",
  secondary:
    "bg-primary-800 text-cream-50 hover:bg-primary-700 shadow-sm hover:shadow-md",
  outline:
    "border border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-primary-950 bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded",
  md: "h-11 px-6 text-[0.95rem] rounded-md",
  lg: "h-14 px-8 text-base rounded-md",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props as any;
  const classes = cn(base, variants[variant as Variant], sizes[size as Size], className);

  if ("href" in props && props.href) {
    const { external, href, ...anchorRest } = rest;
    if (external || /^https?:\/\//.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
