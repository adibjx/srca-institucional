import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCta } from "@/components/sections/ServiceCta";

const SITUATIONS = [
  {
    number: "01",
    title: "Autuação fiscal",
    text:
      "A empresa recebe um auto de infração da Receita Federal, da SEFAZ estadual ou da prefeitura. O auto pode questionar a classificação fiscal de produtos, o aproveitamento de créditos, a base de cálculo utilizada ou o cumprimento de obrigações acessórias.",
  },
  {
    number: "02",
    title: "Cobrança indevida",
    text:
      "A empresa identifica que pagou tributo a mais, que um crédito não foi reconhecido ou que uma cobrança não tem fundamento legal. É possível pedir a restituição ou compensação do valor pago indevidamente.",
  },
  {
    number: "03",
    title: "Execução fiscal",
    text:
      "A dívida tributária foi inscrita em dívida ativa e o fisco ingressou com ação de execução. A empresa precisa se defender para evitar penhora de bens e bloqueio de contas.",
  },
  {
    number: "04",
    title: "Exclusão de regime ou benefício",
    text:
      "A empresa foi excluída do Simples Nacional, de um regime especial de ICMS ou de um programa de incentivo fiscal. É possível questionar a exclusão e buscar a reintegração.",
  },
];

export function ContenciosoTributario() {
  return (
    <>
      <ServiceHero
        title="Contencioso tributário"
        lede="Defesa técnica de empresas diante de autuações, cobranças indevidas e execuções fiscais — nas esferas administrativa e judicial."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Contencioso Tributário" },
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
                Quando a empresa precisa se defender
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            </div>
            <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-700 lg:col-span-8">
              <p>
                Contencioso tributário é o nome dado à disputa entre a empresa e
                o fisco — seja na esfera administrativa (perante a própria
                Receita Federal ou Secretaria de Fazenda), seja na esfera
                judicial (perante o Poder Judiciário). Sempre que a empresa é
                autuada, recebe uma cobrança que considera indevida ou precisa
                contestar um tributo, ela está diante de uma situação de
                contencioso.
              </p>
              <p>
                Nem toda autuação é legítima. Erros de cálculo, interpretações
                equivocadas da legislação e aplicação indevida de multas são
                situações frequentes. Em muitos casos, a empresa pode e deve
                questionar — mas precisa fazer isso dentro dos prazos e com
                fundamentação técnica adequada.
              </p>
              <p>
                O SRCA atua na defesa de empresas nessas situações. A análise
                começa pela autuação ou cobrança em si: o que está sendo cobrado,
                com que base legal, se há fundamento para questionar e quais são
                as alternativas disponíveis.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-primary-900 py-20 text-cream-50 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(184,150,62,0.14),transparent_55%)]"
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-300">
              Casos típicos
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-cream-50 md:text-display-md">
              Situações em que o contencioso tributário se aplica
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SITUATIONS.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-lg border border-cream-50/10 bg-primary-950/70 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 md:p-9"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-accent-500 via-accent-400 to-transparent opacity-70"
                />
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl font-light text-accent-300">
                    {item.number}
                  </span>
                  <span className="h-px w-12 bg-accent-400/30" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/75">
                  {item.text}
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
              Esferas
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              Administrativo e judicial
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="relative rounded-lg border border-primary-900/10 bg-cream-100 p-8 md:p-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-accent-500"
              />
              <p className="text-xs uppercase tracking-[0.18em] text-accent-600">
                Esfera 1
              </p>
              <h3 className="mt-3 font-serif text-2xl text-primary-900">
                Contencioso administrativo
              </h3>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-gray-700">
                A defesa é apresentada perante o próprio órgão que realizou a
                autuação — Receita Federal, SEFAZ estadual ou prefeitura. Inclui
                impugnações, manifestações de inconformidade e recursos em
                segunda instância administrativa (CARF, no caso federal). É a
                primeira etapa e, em muitos casos, resolve a questão sem
                necessidade de ir ao Judiciário.
              </p>
            </article>

            <article className="relative rounded-lg border border-primary-900/10 bg-cream-100 p-8 md:p-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-accent-500"
              />
              <p className="text-xs uppercase tracking-[0.18em] text-accent-600">
                Esfera 2
              </p>
              <h3 className="mt-3 font-serif text-2xl text-primary-900">
                Contencioso judicial
              </h3>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-gray-700">
                Quando a via administrativa se esgota ou quando a estratégia
                mais adequada é ir diretamente ao Judiciário, o escritório
                ingressa com as ações cabíveis: anulatória de débito, mandado de
                segurança, embargos à execução fiscal, entre outras. A atuação
                judicial abrange tribunais estaduais e federais em todo o Brasil.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <ServiceCta
        title="Sua empresa foi autuada ou recebeu uma cobrança?"
        text="O prazo para defesa é limitado. Fale com o escritório para uma análise inicial da situação."
        related={{
          label: "Planejamento Tributário",
          href: "/servicos/planejamento-tributario",
        }}
      />
    </>
  );
}
