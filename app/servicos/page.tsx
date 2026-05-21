import type { Metadata } from "next";
import Link from "next/link";
import {
  breadcrumbJsonLd,
  buildMetadata,
  legalServiceJsonLd,
} from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CONTACT, SERVICES } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Áreas de Atuação | SRCA Advocacia Tributária",
  description:
    "Planejamento tributário, contencioso, holding patrimonial e planejamento sucessório. Conheça as áreas de atuação do SRCA.",
  path: "/servicos",
});

const SERVICE_CARDS = [
  {
    slug: "planejamento-tributario",
    title: "Planejamento Tributário",
    text:
      "Análise completa da estrutura fiscal da empresa. Revisamos o regime de tributação, a composição societária, os contratos e as operações para identificar o que pode ser ajustado com segurança jurídica.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M6 21V10l6-5 6 5v11" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    slug: "contencioso-tributario",
    title: "Contencioso Tributário",
    text:
      "Defesa de empresas autuadas pela Receita Federal ou Secretaria de Fazenda. Questionamento de cobranças indevidas e acompanhamento de execuções fiscais, nas esferas administrativa e judicial.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M5 8h14" />
        <path d="M8 8l-3 7a3 3 0 0 0 6 0L8 8Z" />
        <path d="M16 8l-3 7a3 3 0 0 0 6 0L16 8Z" />
      </svg>
    ),
  },
  {
    slug: "holding-patrimonial",
    title: "Holding Patrimonial",
    text:
      "Estruturação jurídica para organizar e proteger o patrimônio de sócios e famílias empresárias. Planejamento da participação societária e da transmissão de bens com eficiência tributária.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M4 21V10l8-6 8 6v11" />
        <path d="M4 21h16" />
        <path d="M10 21v-7h4v7" />
        <path d="M9 10h6" />
      </svg>
    ),
  },
  {
    slug: "planejamento-sucessorio",
    title: "Planejamento Sucessório",
    text:
      "Organização antecipada da sucessão de bens e participações societárias. Redução do custo tributário na transmissão e prevenção de conflitos entre herdeiros.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <path d="M12 13v-3" />
      </svg>
    ),
  },
];

export default function ServicosPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
  ]);

  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Áreas de atuação SRCA",
    provider: { "@id": "https://srcatributario.adv.br#organization" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços tributários",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: legalServiceJsonLd({
          name: s.title,
          description: s.short,
          path: `/servicos/${s.slug}`,
        }),
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />

      <ServiceHero
        eyebrow="Áreas de atuação"
        title="Áreas de atuação"
        lede="O SRCA atua exclusivamente em direito tributário. Cada área de trabalho parte do mesmo princípio: entender o negócio antes de propor qualquer estruturação. Abaixo, as quatro frentes em que o escritório pode contribuir."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços" },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_CARDS.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200/80 bg-cream-50 p-7 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-lg md:p-9"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent-500 via-accent-400 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-accent-500/30 bg-accent-500/5 text-accent-600">
                  <div className="h-7 w-7">{s.icon}</div>
                </div>

                <h2 className="mt-6 font-serif text-2xl text-primary-900 md:text-[1.75rem]">
                  {s.title}
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
                  {s.text}
                </p>

                <span className="mt-8 inline-flex items-center text-sm font-medium tracking-wide text-accent-600 transition-colors group-hover:text-accent-500">
                  Saiba mais
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-lg border border-primary-900/10 bg-cream-100 p-8 text-center md:p-10">
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Não tem certeza de qual área se aplica à sua situação? Uma conversa
              inicial com o escritório pode esclarecer.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={CONTACT.whatsappLink} external variant="primary" size="lg">
                Fale com o escritório
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
