import { Container } from "@/components/ui/Container";

const PILLARS = [
  {
    number: "01",
    title: "Regime tributário",
    text:
      "O enquadramento certo faz diferença desde o início do exercício. A adequação do regime à atividade e ao momento atual da empresa é o primeiro ponto de qualquer análise.",
  },
  {
    number: "02",
    title: "Distribuição de resultados",
    text:
      "A tributação sobre distribuição de lucros e pró-labore dos sócios se relaciona diretamente com a estrutura societária. Nem sempre a forma praticada é a mais eficiente.",
  },
  {
    number: "03",
    title: "Créditos fiscais",
    text:
      "Operações de compra e venda frequentemente geram créditos de PIS, COFINS e ICMS que passam despercebidos sem análise técnica específica.",
  },
  {
    number: "04",
    title: "Proteção patrimonial",
    text:
      "Estruturar juridicamente o que foi construído antes que seja necessário. Organização patrimonial e planejamento sucessório evitam custo tributário elevado e conflitos futuros.",
  },
];

export function Educational() {
  return (
    <section id="educacao" className="bg-cream-50 py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
            Por que revisar
          </p>
          <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
            A estrutura tributária da maioria das empresas nunca foi revisada.
          </h2>
          <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-7">
            <p>
              Para a maioria das empresas, o imposto é tratado como despesa fixa:
              apura-se, paga-se e segue adiante. O problema é que essa lógica
              ignora um dado prático — a estrutura tributária adequada quando a
              empresa faturava R$ 3 milhões não é, necessariamente, a mais
              eficiente quando ela chega a R$ 15 milhões. Regimes de tributação,
              composição societária e perfil de operações mudam ao longo do
              tempo. A análise raramente acompanha.
            </p>
            <p>
              Uma revisão tributária bem feita não começa pela alíquota. Começa
              pela compreensão do negócio: como a empresa está organizada, como
              distribui resultados, quais operações realiza e como cada uma é
              tratada fiscalmente. A partir daí, é possível apontar o que está
              correto, o que pode ser corrigido e o que representa risco real.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <figure className="relative h-full rounded-lg border-l-4 border-accent-500 bg-primary-900 p-8 text-cream-50 md:p-10">
              <span
                aria-hidden="true"
                className="absolute -top-6 left-6 font-serif text-7xl leading-none text-accent-400/60"
              >
                &ldquo;
              </span>
              <blockquote className="relative font-serif text-2xl leading-snug text-cream-50 md:text-3xl">
                Tributário mal estruturado custa mais do que o imposto em si.
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-accent-300">
                SRCA · Princípio de trabalho
              </figcaption>
            </figure>
          </aside>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <li
              key={p.number}
              className="group relative flex flex-col bg-cream-50 p-7 transition-colors duration-300 hover:bg-cream-100 md:p-9"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent-500 transition-transform duration-300 group-hover:scale-y-100"
              />
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-4xl font-light text-accent-500 md:text-5xl">
                  {p.number}
                </span>
                <span className="h-px w-12 bg-accent-500/40" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary-900 md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
