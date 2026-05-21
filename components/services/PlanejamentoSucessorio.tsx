import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCta } from "@/components/sections/ServiceCta";

const COSTS = [
  {
    highlight: "Até 8%",
    text:
      "O ITCMD pode chegar a 8% sobre o valor total dos bens transmitidos. Em patrimônios relevantes, o valor é significativo — e poderia ter sido reduzido ou antecipado com planejamento.",
  },
  {
    highlight: "Anos",
    text:
      "Um inventário judicial pode se estender por anos, especialmente quando há divergência entre os herdeiros. Durante esse período, decisões sobre o patrimônio e as empresas ficam travadas.",
  },
  {
    highlight: "Conflito",
    text:
      "Sem regras definidas previamente, a divisão de bens e participações entre herdeiros se torna fonte de disputas — que impactam tanto a família quanto a continuidade do negócio.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Mapeamento patrimonial",
    text:
      "Levantamento completo dos bens, participações societárias, investimentos e direitos que compõem o patrimônio do titular.",
    label: "Diagnóstico",
  },
  {
    number: "02",
    title: "Análise tributária da transmissão",
    text:
      "Simulação do custo tributário de cada alternativa de transmissão: doação em vida, testamento, holding com doação de quotas, entre outras.",
    label: "Comparativo de cenários",
  },
  {
    number: "03",
    title: "Estruturação jurídica",
    text:
      "Definição da estratégia mais adequada e elaboração dos instrumentos jurídicos: alterações contratuais, escrituras de doação, cláusulas de reserva de usufruto, acordo de sócios.",
    label: "Instrumentação",
  },
  {
    number: "04",
    title: "Implementação e acompanhamento",
    text:
      "Execução da estratégia aprovada e monitoramento ao longo do tempo. A legislação sobre ITCMD está em discussão no Congresso e pode mudar — o escritório acompanha e comunica.",
    label: "Relação contínua",
  },
];

export function PlanejamentoSucessorio() {
  return (
    <>
      <ServiceHero
        title="Planejamento sucessório"
        lede="Organização antecipada da transmissão de bens e participações societárias — com segurança jurídica e eficiência tributária."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Planejamento Sucessório" },
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
                O que é e por que é urgente
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-8">
              <p>
                Planejamento sucessório é a organização antecipada da forma como
                o patrimônio de uma pessoa será transmitido aos seus herdeiros.
                No contexto empresarial, inclui não apenas imóveis e
                investimentos, mas também — e principalmente — as participações
                societárias nas empresas.
              </p>
              <p>
                A urgência existe porque a alternativa à organização antecipada
                é o inventário judicial — um processo lento, caro e
                tributariamente ineficiente. O ITCMD (imposto estadual sobre
                transmissão por falecimento) pode chegar a 8% do valor dos bens,
                e os custos com advogados e cartórios se somam a isso. Além do
                custo financeiro, o inventário frequentemente paralisa decisões
                sobre o negócio e gera conflitos entre herdeiros.
              </p>
              <p>
                Planejar a sucessão em vida permite escolher o momento, a forma
                e o custo. É possível transmitir participações societárias por
                doação, manter o controle por meio de usufruto e definir regras
                claras de governança para a próxima geração — tudo dentro da
                legislação.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-primary-900 py-20 text-cream-50 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,150,62,0.14),transparent_55%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
              Sem planejamento
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
              O custo de não planejar
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {COSTS.map((c) => (
              <article
                key={c.highlight}
                className="relative flex flex-col rounded-lg border border-cream-50/10 bg-primary-950/60 p-8 transition-colors duration-300 hover:border-accent-400/40 md:p-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent-500 to-transparent"
                />
                <span className="font-serif text-5xl font-light leading-none text-accent-300 md:text-6xl">
                  {c.highlight}
                </span>
                <div className="mt-5 h-px w-12 bg-accent-400/40" aria-hidden="true" />
                <p className="mt-5 text-[0.95rem] leading-relaxed text-cream-100/80">
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Processo
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              Como trabalhamos o planejamento sucessório
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <ol className="relative mt-16 grid gap-10 lg:grid-cols-4">
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 hidden h-[2px] w-[calc(100%-3rem)] bg-gradient-to-r from-accent-500/60 via-accent-500/30 to-accent-500/10 lg:block"
            />
            {STEPS.map((step) => (
              <li key={step.number} className="relative flex flex-col">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/40 bg-cream-50 font-serif text-lg text-accent-600">
                  {step.number}
                </div>
                <h3 className="mt-6 font-serif text-xl text-primary-900 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
                  {step.text}
                </p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-sm border border-primary-900/10 bg-cream-100 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-accent-600">
                  <span className="h-1 w-1 rounded-full bg-accent-500" aria-hidden="true" />
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-accent-100 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-lg border-l-4 border-accent-500 bg-cream-50 p-8 md:p-12">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Reforma tributária
            </p>
            <p className="font-serif text-xl leading-snug text-primary-900 md:text-2xl">
              A reforma tributária em discussão no Brasil prevê aumento da
              alíquota máxima do ITCMD e introdução de progressividade.
              Empresários que pretendem planejar a sucessão têm incentivo para
              antecipar a estruturação enquanto as alíquotas atuais estão
              vigentes.
            </p>
            <p className="mt-6 border-t border-accent-500/20 pt-5 text-sm leading-relaxed text-gray-600">
              Esta informação reflete o cenário legislativo atual e pode mudar.
              O escritório acompanha as atualizações e orienta os clientes
              conforme o andamento da reforma.
            </p>
          </div>
        </Container>
      </section>

      <ServiceCta
        title="Planejar custa menos do que remediar"
        text="Se a sucessão do seu patrimônio ou das suas participações societárias ainda não está organizada, o escritório pode avaliar a situação e apresentar as opções disponíveis."
        related={{
          label: "Holding Patrimonial",
          href: "/servicos/holding-patrimonial",
        }}
      />
    </>
  );
}
