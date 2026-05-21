import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BaseProps = {
  title: string;
  description?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

type CardProps =
  | (BaseProps & { variant?: "plain" })
  | (BaseProps & { variant: "image"; imageSrc: string; imageAlt: string })
  | (BaseProps & { variant: "icon"; icon: React.ReactNode });

const cardShell =
  "group relative flex flex-col overflow-hidden rounded-lg border border-gray-200/70 bg-cream-50 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-lg hover:border-accent-500/40";

export function Card(props: CardProps) {
  const { title, description, href, className, children } = props;
  const variant = "variant" in props ? props.variant : "plain";

  const inner = (
    <>
      {variant === "image" && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <Image
            src={(props as Extract<CardProps, { variant: "image" }>).imageSrc}
            alt={(props as Extract<CardProps, { variant: "image" }>).imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-7">
        {variant === "icon" && (
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-800/5 text-accent-600">
            {(props as Extract<CardProps, { variant: "icon" }>).icon}
          </div>
        )}

        <h3 className="font-serif text-xl md:text-2xl text-primary-900">{title}</h3>

        {description ? (
          <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">{description}</p>
        ) : null}

        {children ? <div className="mt-4">{children}</div> : null}

        {href ? (
          <span className="mt-6 inline-flex items-center text-sm font-medium tracking-wide text-accent-600 transition-colors group-hover:text-accent-500">
            Saiba mais
            <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        ) : null}
      </div>
    </>
  );

  const merged = cn(cardShell, className);

  return href ? (
    <Link href={href} className={merged}>
      {inner}
    </Link>
  ) : (
    <div className={merged}>{inner}</div>
  );
}
