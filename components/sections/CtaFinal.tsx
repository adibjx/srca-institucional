import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function CtaFinal() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-primary-900 py-20 text-cream-50 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#08303E_0%,#0B3D4E_50%,#125770_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #FCF8EC 25%, transparent 25%, transparent 75%, #FCF8EC 75%, #FCF8EC), linear-gradient(45deg, #FCF8EC 25%, transparent 25%, transparent 75%, #FCF8EC 75%, #FCF8EC)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-500/10 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
            Próximo passo
          </p>
          <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
            Uma primeira conversa com o escritório.
          </h2>
          <div className="mx-auto mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          <p className="mt-7 text-lg leading-relaxed text-cream-100/85">
            Preencha o formulário ou envie uma mensagem pelo WhatsApp. Um dos
            sócios do escritório entrará em contato para entender melhor a
            situação da sua empresa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4" data-section="cta">
            <Button href="/contato" variant="primary" size="lg" data-cta-label="home_final_contato">
              Entrar em contato
            </Button>
            <Button href={CONTACT.whatsappLink} external variant="outline" size="lg" className="text-accent-300 hover:text-primary-950" data-cta-label="home_final_whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
              WhatsApp
            </Button>
          </div>

          <ul className="mx-auto mt-10 grid max-w-2xl gap-2 text-sm text-cream-100/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
              Contato direto com um sócio
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
              Confidencialidade · LGPD
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
              Seg. a sex. · 8h às 18h
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
