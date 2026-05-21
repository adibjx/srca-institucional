import { Container } from "@/components/ui/Container";

export function PlaceholderHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary-900 text-cream-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(184,150,62,0.18),_transparent_50%)]"
      />
      <Container className="relative pb-24 pt-36 md:pb-32 md:pt-44">
        {eyebrow ? (
          <p className="mb-4 font-sans text-xs uppercase tracking-[0.22em] text-accent-300">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-serif text-display-md md:text-display-lg text-cream-50">{title}</h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-cream-100/85">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
      </Container>
    </section>
  );
}
