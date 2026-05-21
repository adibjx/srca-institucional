import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const PARTNERS = [
  {
    slug: "manoel-squiapati",
    name: "Manoel Squiapati",
    tag: "Planejamento Tributário",
    oab: "OAB/MG 205.573",
    bio:
      "Sócio fundador. Atua em planejamento tributário e estruturação patrimonial, com foco em reorganizações societárias e operações onde o impacto tributário é determinante para a viabilidade do negócio.",
    photo: "/images/manoel-squiapati.png",
  },
  {
    slug: "victor-romano",
    name: "Victor Romano",
    tag: "Planejamento e Contencioso",
    oab: "OAB/MG 244.504",
    bio:
      "Atua em planejamento tributário e contencioso administrativo e judicial. Conduz a análise de cobranças questionáveis e a defesa de empresas autuadas perante a Receita Federal e as fazendas estaduais.",
    photo: "/images/victor-romano.png",
  },
  {
    slug: "bruno-chagas",
    name: "Bruno Chagas",
    tag: "Holding, Sucessão e Contencioso",
    oab: "OAB/MG 213.733",
    bio:
      "Atua em holding familiar, planejamento sucessório e contencioso judicial. Estrutura juridicamente grupos empresariais e orienta sócios na organização patrimonial e planejamento de sucessão.",
    photo: "/images/bruno-chagas.png",
  },
];

export function Team() {
  return (
    <section id="equipe" className="bg-cream-50 py-20 md:py-28">
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
            O SRCA é formado por advogados com atuação exclusiva em direito
            tributário. O contato é sempre com quem é responsável pelo caso.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PARTNERS.map((p) => (
            <article
              key={p.slug}
              className="group relative flex flex-col overflow-hidden rounded-lg bg-cream-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-primary-900">
                <Image
                  src={p.photo}
                  alt={`Retrato de ${p.name}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/10 to-transparent"
                />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-sm bg-accent-500/90 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-primary-950 backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-2xl text-primary-900">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent-600">
                  {p.oab}
                </p>
                <div className="mt-4 h-px w-10 bg-accent-500/50" aria-hidden="true" />
                <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-700">
                  {p.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/sobre"
            className="group inline-flex items-center text-sm font-medium uppercase tracking-[0.16em] text-primary-800 transition-colors hover:text-accent-600"
          >
            Conheça o escritório
            <span
              aria-hidden="true"
              className="ml-3 transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
