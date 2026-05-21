import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function ServiceCta({
  title,
  text,
  related,
}: {
  title: string;
  text: string;
  related?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-900 py-20 text-cream-50 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#08303E_0%,#0B3D4E_55%,#125770_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
            {title}
          </h2>
          <div className="mx-auto mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/85">
            {text}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/contato" variant="primary" size="lg">
              Entrar em contato
            </Button>
            <Button
              href={CONTACT.whatsappLink}
              external
              variant="outline"
              size="lg"
              className="text-accent-300 hover:text-primary-950"
            >
              WhatsApp
            </Button>
          </div>

          {related ? (
            <p className="mt-8 text-sm text-cream-100/70">
              Também pode interessar:{" "}
              <a href={related.href} className="text-accent-300 underline decoration-accent-500/40 underline-offset-4 hover:text-accent-200">
                {related.label}
              </a>
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
