import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function ServiceHero({
  eyebrow = "Área de atuação",
  title,
  lede,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-950 text-cream-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,150,62,0.16),transparent_55%)]"
      />

      <Container className="relative pb-20 pt-36 md:pb-28 md:pt-44">
        <Breadcrumbs items={crumbs} variant="light" className="mb-8" />

        <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-display-md leading-[1.08] text-cream-50 md:text-display-lg">
          {title}
        </h1>
        <div className="mt-7 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream-100/85 md:text-xl">
          {lede}
        </p>
      </Container>
    </section>
  );
}
