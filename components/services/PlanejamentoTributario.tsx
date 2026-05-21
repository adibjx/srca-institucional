import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCta } from "@/components/sections/ServiceCta";

const ANALYSIS = [
  {
    number: "01",
    title: "Regime de tributação",
    text:
      "Simples Nacional, Lucro Presumido ou Lucro Real. A escolha impacta diretamente o quanto a empresa paga. Avaliamos qual regime é o mais adequado considerando atividade, faturamento e margem de lucro.",
  },
  {
    number: "02",
    title: "Composição societária",
    text:
      "A forma como a empresa está organizada — quem são os sócios, como participam, como recebem — tem consequência tributária direta. Reorganizações societárias podem gerar economia significativa.",
  },
  {
    number: "03",
    title: "Distribuição de resultados",
    text:
      "Pró-labore, distribuição de lucros, juros sobre capital próprio. Cada forma de remunerar os sócios tem tratamento tributário diferente. Avaliamos a combinação mais eficiente.",
  },
  {
    number: "04",
    title: "Créditos fiscais",
    text:
      "Operações de compra e venda frequentemente geram créditos de PIS, COFINS e ICMS que não são aproveitados. Identificamos créditos retroativos e orientamos o aproveitamento correto.",
  },
  {
    number: "05",
    title: "Contratos e operações",
    text:
      "Contratos de prestação de serviço, industrialização por encomenda, operações intercompany. Cada um tem implicação fiscal específica que precisa ser considerada na estruturação.",
  },
  {
    number: "06",
    title: "Incentivos e benefícios fiscais",
    text:
      "Programas estaduais e federais de incentivo, regimes especiais, isenções aplicáveis ao setor. Mapeamos o que está disponível para a empresa.",
  },
];

const CHECKLIST = [
  "A empresa mudou de patamar de faturamento nos últimos 2 a 3 anos",
  "O regime tributário nunca foi revisado desde a abertura",
  "Há sócios recebendo de formas diferentes sem análise tributária",
  "A empresa fez ou pretende fazer uma reorganização societária",
  "Existem operações entre empresas do mesmo grupo sem estruturação",
  "Os sócios estão planejando vender, fundir ou transferir o negócio",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlanejamentoTributario() {
  return (
    <>
      <ServiceHero
        title="Planejamento tributário"
        lede="Uma análise técnica e estruturada da situação fiscal da empresa, com o objetivo de identificar o que está adequado, o que pode ser corrigido e onde há oportunidade de economia."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Planejamento Tributário" },
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
                O que é e por que importa
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-8">
              <p>
                Planejamento tributário é a análise da estrutura fiscal de uma
                empresa com o objetivo de identificar a forma mais eficiente — e
                legal — de cumprir suas obrigações com o fisco. Não se trata de
                sonegação. Trata-se de organizar o negócio de modo que ele pague
                exatamente o que deve, sem mais e sem menos.
              </p>
              <p>
                Para a maioria das empresas, o enquadramento tributário é
                definido uma vez e raramente revisado. O problema é que empresas
                mudam: o faturamento cresce, a atividade se diversifica, a
                composição societária se altera. O que era adequado no início
                pode já não ser.
              </p>
              <p>
                Um planejamento tributário bem conduzido revisa todos esses
                pontos e apresenta ao empresário, com clareza, o que pode ser
                ajustado — e quais são os riscos e benefícios de cada
                alternativa.
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
              Escopo da análise
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
              O que analisamos
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-lg bg-cream-50/10 sm:grid-cols-2 lg:grid-cols-3">
            {ANALYSIS.map((item) => (
              <li
                key={item.number}
                className="group flex flex-col bg-primary-950/80 p-7 transition-colors duration-300 hover:bg-primary-950 md:p-8"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl font-light text-accent-400">
                    {item.number}
                  </span>
                  <span className="h-px w-10 bg-accent-400/40" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-cream-50">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/75">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
                Comparativo
              </p>
              <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
                O papel do advogado tributário e o papel do contador
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-8">
              <p>
                São funções diferentes e complementares. O contador cuida da
                rotina fiscal: apura impostos, gera guias, entrega obrigações
                acessórias e mantém a empresa em dia com o fisco. É um trabalho
                operacional e essencial.
              </p>
              <p>
                O advogado tributário atua em outra camada: analisa a estrutura
                jurídica por trás dessas obrigações. O regime está adequado? A
                composição societária é eficiente? Existe crédito não
                aproveitado? Existe risco de autuação no modelo atual? Essa
                análise é pontual ou periódica, e complementa — não substitui — o
                trabalho contábil.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Indicação
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              Quando faz sentido contratar um planejamento tributário
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />

            <ul className="mt-12 grid gap-px overflow-hidden rounded-lg bg-primary-900/10 sm:grid-cols-2">
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 bg-cream-50 p-6 transition-colors duration-300 hover:bg-cream-100"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <span className="h-4 w-4">
                      <CheckIcon />
                    </span>
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ServiceCta
        title="Revisão da estrutura tributária"
        text="Se algum dos pontos acima se aplica à sua empresa, o escritório pode avaliar a situação e apresentar as alternativas disponíveis."
        related={{
          label: "Holding Patrimonial",
          href: "/servicos/holding-patrimonial",
        }}
      />
    </>
  );
}
