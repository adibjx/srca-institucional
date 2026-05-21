import Link from "next/link";
import { Container } from "@/components/ui/Container";

const SERVICES = [
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

export function Services() {
  return (
    <section
      id="servicos"
      className="relative isolate overflow-hidden bg-primary-900 py-20 text-cream-50 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,150,62,0.12),transparent_50%)]"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
            Atuação
          </p>
          <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
            Como o SRCA atua
          </h2>
          <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-cream-100/80">
            Quatro frentes de trabalho com um objetivo: clareza tributária para o
            empresário.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-cream-50/10 bg-primary-950/60 p-7 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-primary-950/80 md:p-9"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent-500 via-accent-400 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-md border border-accent-400/30 bg-accent-400/5 text-accent-300 transition-colors duration-300 group-hover:bg-accent-400/10">
                  <div className="h-7 w-7">{s.icon}</div>
                </div>
              </div>

              <h3 className="mt-6 font-serif text-2xl text-cream-50 md:text-[1.75rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/75">
                {s.text}
              </p>

              <span className="mt-8 inline-flex items-center text-sm font-medium tracking-wide text-accent-300 transition-colors group-hover:text-accent-200">
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
      </Container>
    </section>
  );
}
