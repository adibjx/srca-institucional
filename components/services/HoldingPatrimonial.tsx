import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCta } from "@/components/sections/ServiceCta";

const WHEN = [
  "Os sócios possuem imóveis locados a terceiros ou à própria empresa operacional",
  "Há patrimônio relevante concentrado na pessoa física dos sócios",
  "A família empresária precisa definir regras de participação para herdeiros",
  "Há interesse em planejar a sucessão patrimonial antes de um evento forçado (falecimento, incapacidade)",
  "A estrutura atual expõe o patrimônio pessoal dos sócios ao risco da atividade empresarial",
  "A tributação sobre a renda de aluguéis na pessoa física é desproporcional ao valor líquido recebido",
];

const BENEFITS = [
  {
    title: "Organização patrimonial",
    text:
      "Centraliza os bens em uma única estrutura com regras claras de administração, governança e distribuição. Reduz a informalidade na gestão do patrimônio familiar.",
  },
  {
    title: "Eficiência tributária",
    text:
      "Dependendo do perfil do patrimônio, a tributação sobre rendimentos e sobre a transmissão de bens pode ser significativamente menor quando feita por meio de pessoa jurídica.",
  },
  {
    title: "Planejamento sucessório",
    text:
      "A transmissão das quotas da holding pode ser feita em vida, por meio de doação com reserva de usufruto. Isso evita inventário, reduz o custo com ITCMD e previne disputas entre herdeiros.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HoldingPatrimonial() {
  return (
    <>
      <ServiceHero
        title="Holding patrimonial"
        lede="Estruturação jurídica para organizar, proteger e transmitir o patrimônio de sócios e famílias empresárias com eficiência tributária."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Holding Patrimonial" },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
                Definição
              </p>
              <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
                O que é e como funciona
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-8">
              <p>
                Uma holding é uma pessoa jurídica constituída com o objetivo de
                deter e administrar bens — imóveis, participações societárias,
                investimentos financeiros. No contexto familiar e empresarial,
                ela funciona como uma estrutura que centraliza o patrimônio dos
                sócios ou da família em uma única entidade jurídica.
              </p>
              <p>
                A holding não é um artifício. É uma forma legítima e amplamente
                utilizada de organizar o que foi construído, definir regras de
                governança entre os sócios e planejar a transmissão de bens de
                forma mais eficiente do ponto de vista tributário e sucessório.
              </p>
              <p>
                Na prática, os bens que antes estavam no nome pessoal dos sócios
                passam a pertencer à holding. Os sócios se tornam quotistas da
                empresa e as decisões sobre o patrimônio seguem as regras do
                contrato social — o que reduz conflitos e torna a gestão mais
                previsível.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-primary-900 py-20 text-cream-50 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,150,62,0.12),transparent_50%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
              Indicação
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
              Quando faz sentido constituir uma holding
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {WHEN.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-lg border border-cream-50/10 bg-primary-950/60 p-6 transition-colors duration-300 hover:border-accent-400/30"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-400/15 text-accent-300">
                  <span className="h-4 w-4">
                    <CheckIcon />
                  </span>
                </span>
                <span className="text-[0.98rem] leading-relaxed text-cream-100/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-cream-100/65">
            Nem toda situação justifica uma holding. Em alguns casos, a estrutura
            adicional gera mais custo do que benefício. Parte do trabalho do
            escritório é avaliar se faz sentido antes de propor.
          </p>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Benefícios
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              O que uma holding pode proporcionar
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <article
                key={b.title}
                className="group relative flex flex-col rounded-lg border border-primary-900/10 bg-cream-100 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full bg-accent-500"
                />
                <span className="font-serif text-3xl font-light text-accent-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-xl text-primary-900 md:text-2xl">
                  {b.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
                  {b.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ServiceCta
        title="Organização patrimonial começa com uma conversa"
        text="O escritório avalia se uma holding é adequada para a sua situação antes de propor qualquer estruturação."
        related={{
          label: "Planejamento Sucessório",
          href: "/servicos/planejamento-sucessorio",
        }}
      />
    </>
  );
}
