import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-primary-950 text-cream-50 md:min-h-screen"
    >
      <Image
        src="/images/bg-desk.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center opacity-70 md:block"
      />
      <Image
        src="/images/bg-mobile.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="block object-cover object-center opacity-70 md:hidden"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-950/75 via-primary-900/60 to-primary-800/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,150,62,0.18),transparent_55%)]"
      />

      <Container className="relative z-10 py-28 md:py-40">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cream-50/15 bg-primary-950/40 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-cream-100/85 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
            Uberaba · MG <span className="text-cream-100/40">|</span> Atendimento em todo o Brasil
          </div>

          <h1 className="font-serif text-display-md leading-[1.05] text-cream-50 md:text-display-lg">
            Inteligência tributária para seu{" "}
            <span className="text-accent-300">negócio e patrimônio.</span>
          </h1>

          <div className="mt-8 h-[2px] w-20 bg-accent-500" aria-hidden="true" />

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-100/85 md:text-xl">
            O SRCA é um escritório exclusivamente tributário. Revisamos a estrutura
            fiscal da sua empresa para identificar o que está adequado, o que pode
            ser ajustado e onde está o risco.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href={CONTACT.whatsappLink}
              external
              variant="primary"
              size="lg"
              data-cta-label="hero_whatsapp"
            >
              Fale com o escritório
            </Button>
            <Button href="#servicos" variant="outline" size="lg" className="text-accent-300 hover:text-primary-950">
              Conheça nossa atuação
            </Button>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-primary-950/40"
      />
    </section>
  );
}
