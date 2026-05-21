import type { Metadata } from "next";
import Image from "next/image";
import {
  breadcrumbJsonLd,
  buildMetadata,
  personJsonLd,
} from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCta } from "@/components/sections/ServiceCta";
import { Methodology } from "@/components/sections/Methodology";

export const metadata: Metadata = buildMetadata({
  title: "Sobre o SRCA | Advocacia Tributária em Uberaba - MG",
  description:
    "Conheça o SRCA Advocacia Tributária. Escritório exclusivamente tributário em Uberaba-MG com atuação nacional. Planejamento tributário, contencioso, holding e sucessão.",
  path: "/sobre",
});

const PARTNERS = [
  {
    slug: "manoel-squiapati",
    name: "Manoel Squiapati",
    oab: "OAB/MG 205.573",
    tag: "Planejamento Tributário · Estruturação Patrimonial",
    photo: "/images/manoel-squiapati.png",
    bio: [
      "Sócio fundador do SRCA. Atua em planejamento tributário e estruturação patrimonial, com foco em reorganizações societárias e operações onde o impacto tributário é determinante para a viabilidade do negócio.",
      "Conduz análises de regime de tributação, composição societária e distribuição de resultados para empresas de diversos setores. Seu trabalho parte do entendimento do negócio do cliente para propor estruturações que sejam juridicamente seguras e economicamente viáveis.",
      "Formado em Direito com especialização em Direito Tributário. Atua há mais de 10 anos na área, com experiência acumulada em operações de reestruturação societária, planejamento de holding e assessoria a grupos empresariais do Triângulo Mineiro e de outras regiões.",
    ],
  },
  {
    slug: "victor-romano",
    name: "Victor Romano",
    oab: "OAB/MG 244.504",
    tag: "Planejamento Tributário · Contencioso",
    photo: "/images/victor-romano.png",
    bio: [
      "Atua em planejamento tributário e contencioso administrativo e judicial. No escritório, conduz a análise de cobranças que podem ser questionadas e a defesa de empresas autuadas perante a Receita Federal e as fazendas estaduais.",
      "Seu trabalho no contencioso inclui a elaboração de impugnações, recursos administrativos e peças judiciais em todas as instâncias. No planejamento, participa da análise de estruturas fiscais e da identificação de oportunidades de correção ou economia.",
      "Formado em Direito com atuação dedicada ao tributário desde o início da carreira. Acompanha de perto as decisões do CARF e dos tribunais superiores que impactam diretamente a defesa de empresas.",
    ],
  },
  {
    slug: "bruno-chagas",
    name: "Bruno Chagas",
    oab: "OAB/MG 213.733",
    tag: "Holding · Sucessão · Contencioso Judicial",
    photo: "/images/bruno-chagas.png",
    bio: [
      "Atua em holding familiar, planejamento sucessório e contencioso judicial. É responsável pela estruturação jurídica de grupos empresariais e pela orientação de sócios na organização patrimonial e planejamento de sucessão.",
      "Conduz o trabalho de constituição de holdings, elaboração de contratos sociais com cláusulas de governança, escrituras de doação com reserva de usufruto e acordos de sócios. No contencioso judicial, atua na defesa de empresas em ações tributárias perante a Justiça Federal e Estadual.",
      "Formado em Direito com especialização em Direito Tributário e Empresarial. Combina a visão patrimonial com a experiência em litígio, o que permite ao escritório oferecer tanto a estruturação preventiva quanto a defesa quando necessário.",
    ],
  },
];

const VALUES = [
  {
    title: "Clareza antes de tudo",
    text:
      "O cliente precisa entender o que está sendo feito e por quê. Relatórios, pareceres e reuniões de devolutiva são escritos e conduzidos em linguagem acessível. Se o empresário não entendeu, o trabalho não está completo.",
  },
  {
    title: "Análise antes de ação",
    text:
      "Nenhuma estruturação é proposta sem análise prévia. O escritório precisa entender o negócio, os números e os objetivos antes de recomendar qualquer caminho. Nem toda empresa precisa de holding. Nem todo contencioso vale a pena.",
  },
  {
    title: "Relação de longo prazo",
    text:
      "A legislação tributária muda com frequência. O que foi estruturado há dois anos pode precisar de revisão hoje. O escritório acompanha os clientes ao longo do tempo e comunica quando algo precisa ser reavaliado.",
  },
];

export default function SobrePage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {PARTNERS.map((p) => (
        <script
          key={p.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              personJsonLd({
                name: p.name,
                jobTitle: "Advogado tributarista — sócio",
                description: p.bio[0],
                image: p.photo,
                slug: p.slug,
              }),
            ),
          }}
        />
      ))}

      <ServiceHero
        eyebrow="O escritório"
        title="Sobre o SRCA"
        lede="Um escritório construído em torno de uma única área do Direito."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre" },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
                Quem somos
              </p>
              <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
                Foco em uma única disciplina
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-8">
              <p>
                O SRCA — Squiapati, Romano, Chagas & Afonso Neto Advocacia
                Tributária — é um escritório com atuação exclusiva em direito
                tributário. Estamos sediados em Uberaba, no Triângulo Mineiro, e
                atendemos empresas de todo o Brasil.
              </p>
              <p>
                A escolha por atuar exclusivamente em tributário não é
                acidental. É uma decisão de posicionamento. Acreditamos que um
                escritório focado entrega mais do que um escritório que tenta
                cobrir todas as áreas. Tributário é uma disciplina que exige
                atualização constante, conhecimento técnico profundo e
                familiaridade com os órgãos fiscalizadores — federal, estadual e
                municipal.
              </p>
              <p>
                O escritório nasceu da reunião de profissionais com trajetórias
                complementares dentro do direito tributário: planejamento,
                contencioso e estruturação patrimonial. Essa composição permite
                que o cliente tenha, no mesmo escritório, a visão preventiva e a
                capacidade de defesa quando necessário.
              </p>
              <p>
                Nosso trabalho começa sempre pela compreensão do negócio do
                cliente. Antes de qualquer parecer ou estruturação, precisamos
                entender como a empresa opera, quem são os sócios, qual é o
                momento do negócio e quais são os objetivos. A partir daí, a
                análise tributária ganha contexto — e as recomendações fazem
                sentido.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="equipe" className="bg-cream-100 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Equipe
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              Quem conduz o trabalho
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              No SRCA, o contato é diretamente com os sócios responsáveis pelo
              caso. Não há intermediários.
            </p>
          </div>

          <div className="mt-16 space-y-16 md:space-y-24">
            {PARTNERS.map((p, i) => {
              const reverse = i % 2 === 1;
              return (
                <article
                  key={p.slug}
                  id={p.slug}
                  className="grid scroll-mt-28 gap-10 md:grid-cols-12 md:items-center"
                >
                  <div className={reverse ? "md:order-2 md:col-span-5" : "md:col-span-5"}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-primary-900 shadow-lg">
                      <Image
                        src={p.photo}
                        alt={`Retrato de ${p.name}`}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover object-top"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent"
                      />
                      <span className="absolute left-5 top-5 inline-flex items-center rounded-sm bg-accent-500/90 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-primary-950 backdrop-blur-sm">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  <div className={reverse ? "md:order-1 md:col-span-7" : "md:col-span-7"}>
                    <p className="text-xs uppercase tracking-[0.16em] text-accent-600">
                      Sócio
                    </p>
                    <h3 className="mt-3 font-serif text-display-sm leading-tight text-primary-900">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-gray-500">
                      {p.oab}
                    </p>
                    <div className="mt-5 h-[2px] w-12 bg-accent-500" aria-hidden="true" />

                    <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-gray-700">
                      {p.bio.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <Methodology
        eyebrow="Método"
        title="Como trabalhamos"
        subtitle="As quatro etapas que estruturam todo trabalho do escritório."
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Valores
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              O que orienta o trabalho do escritório
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="relative flex flex-col rounded-lg border border-primary-900/10 bg-cream-100 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-md md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full bg-accent-500"
                />
                <span className="font-serif text-3xl font-light text-accent-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl text-primary-900 md:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
                  {v.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ServiceCta
        title="Conheça o escritório"
        text="Se sua empresa precisa de orientação tributária, o primeiro passo é uma conversa. Um dos sócios do SRCA entrará em contato."
      />
    </>
  );
}
