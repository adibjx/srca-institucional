import { Container } from "@/components/ui/Container";

const SECTORS = [
  {
    name: "Agronegócio",
    text:
      "Imunidades constitucionais, regimes especiais de ICMS, transferências de propriedade rural e estruturas de sucessão com impacto patrimonial significativo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M3 20c4-1 6-4 6-9 0 5 2 8 6 9" />
        <path d="M12 11V3" />
        <path d="M9 6c1 1 2 2 3 2s2-1 3-2" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    name: "Saúde",
    text:
      "Enquadramento tributário de atividades médicas, tributação sobre distribuição de resultados entre sócios de clínicas, laboratórios e prestadores de serviços de saúde.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />
      </svg>
    ),
  },
  {
    name: "Construção Civil",
    text:
      "Regime por empreendimento, ICMS sobre materiais, ISS por município e regimes especiais de SPE. Um dos ambientes tributários mais complexos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M4 21V8l8-5 8 5v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
  {
    name: "Transporte e Logística",
    text:
      "ICMS interestadual, contratos com motoristas e planejamento de frota. Questões recorrentes para empresas do Triângulo Mineiro e região.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M1 7h11v10H1z" />
        <path d="M12 10h6l4 4v3h-10z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    name: "Serviços",
    text:
      "ISS municipal, enquadramento de atividades e tributação sobre a remuneração dos sócios. O regime adequado depende do perfil da atividade e da composição societária.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M3 7h18v4H3z" />
        <path d="M5 11v9h14v-9" />
        <path d="M9 7V4h6v3" />
        <path d="M12 11v9" />
      </svg>
    ),
  },
  {
    name: "Indústria e Comércio",
    text:
      "ICMS, IPI e créditos de PIS/COFINS com regras que variam por produto e cadeia de fornecimento. Complexidade alta, margem para estruturação também.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
        <path d="M3 21V10l5 3V10l5 3V10l8 5v6z" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
];

export function Sectors() {
  return (
    <section
      id="setores"
      className="relative bg-cream-100 py-20 md:py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(8,48,62,0.06) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    >
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
            Setores
          </p>
          <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
            Setores em que atuamos
          </h2>
          <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Cada setor tem particularidades tributárias. Conhecemos as do seu.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <article
              key={s.name}
              className="group relative flex flex-col rounded-lg border border-primary-900/10 bg-cream-50 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900/5 text-primary-800 transition-colors duration-300 group-hover:bg-accent-500/10 group-hover:text-accent-600">
                <div className="h-6 w-6">{s.icon}</div>
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary-900">{s.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-600">
                {s.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-gray-600">
          O escritório atende empresas de outros setores além dos listados. A
          estrutura tributária de cada negócio tem suas particularidades — o
          ponto de partida é sempre entender a atividade da empresa.
        </p>
      </Container>
    </section>
  );
}
