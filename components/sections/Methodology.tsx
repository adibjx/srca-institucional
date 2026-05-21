import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    number: "01",
    title: "Entendimento do negócio",
    text:
      "Antes de qualquer análise técnica, o escritório precisa entender como a empresa funciona: atividade, estrutura societária, operações relevantes e objetivos dos sócios.",
    label: "Conversa inicial",
  },
  {
    number: "02",
    title: "Análise tributária",
    text:
      "Com as informações em mãos, realizamos uma leitura estruturada da situação fiscal: regime de tributação, obrigações, contratos e operações com impacto tributário.",
    label: "SRCA · análise técnica",
  },
  {
    number: "03",
    title: "Orientação e estruturação",
    text:
      "Apresentamos as conclusões de forma clara e discutimos as alternativas disponíveis dentro da legislação. A decisão de cada encaminhamento é sempre do empresário.",
    label: "Reunião de devolutiva",
  },
  {
    number: "04",
    title: "Acompanhamento",
    text:
      "O escritório acompanha a implementação das estruturas, monitora mudanças na legislação e revisita as análises quando o negócio mudar.",
    label: "Relação contínua",
  },
];

export function Methodology({
  eyebrow = "Metodologia",
  title = "Do entendimento do negócio à estruturação tributária.",
  subtitle = "Quatro etapas. O processo começa pelo contexto, não pela alíquota.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
} = {}) {
  return (
    <section
      id="metodologia"
      className="relative isolate overflow-hidden bg-primary-950 py-20 text-cream-50 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(184,150,62,0.14),transparent_55%)]"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
            {eyebrow}
          </p>
          <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
            {title}
          </h2>
          <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-cream-100/80">
            {subtitle}
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-6 top-12 hidden h-[2px] w-[calc(100%-3rem)] bg-gradient-to-r from-accent-500/60 via-accent-500/30 to-accent-500/10 lg:block"
          />

          {STEPS.map((step) => (
            <li key={step.number} className="relative flex flex-col">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-400/40 bg-primary-950 font-serif text-lg text-accent-300">
                {step.number}
              </div>

              <h3 className="mt-6 font-serif text-xl text-cream-50 md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/75">
                {step.text}
              </p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border border-cream-50/10 bg-primary-900/60 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-accent-300">
                <span className="h-1 w-1 rounded-full bg-accent-400" aria-hidden="true" />
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
