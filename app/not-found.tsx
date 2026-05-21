import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export default function NotFound() {
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

      <Container className="relative pb-24 pt-36 text-center md:pb-32 md:pt-44">
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-accent-300">
          Erro 404
        </p>
        <h1 className="mt-4 font-serif text-display-md text-cream-50 md:text-display-lg">
          Página não encontrada
        </h1>
        <div className="mx-auto mt-7 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
        <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-cream-100/85">
          O endereço que você acessou não existe ou foi movido.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href="/" variant="primary" size="lg">
            Voltar para o início
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
      </Container>
    </section>
  );
}
