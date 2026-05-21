export type AuthorSlug =
  | "manoel-squiapati"
  | "victor-romano"
  | "bruno-chagas";

export type Author = {
  name: string;
  oab: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
};

export const authors: Record<AuthorSlug, Author> = {
  "manoel-squiapati": {
    name: "Manoel Squiapati",
    oab: "OAB/MG 205.573",
    role: "Sócio fundador",
    specialty: "Planejamento Tributário e Estruturação Patrimonial",
    bio: "Atua em planejamento tributário e estruturação patrimonial, com foco em reorganizações societárias e operações onde o impacto tributário é determinante.",
    image: "https://srcatributario.adv.br/assets/socios/manoel-squiapati.png",
  },
  "victor-romano": {
    name: "Victor Romano",
    oab: "OAB/MG 244.504",
    role: "Sócio",
    specialty: "Planejamento Tributário e Contencioso",
    bio: "Atua em planejamento tributário e contencioso administrativo e judicial. Conduz a defesa de empresas autuadas perante a Receita Federal e fazendas estaduais.",
    image: "https://srcatributario.adv.br/assets/socios/victor-romano.png",
  },
  "bruno-chagas": {
    name: "Bruno Chagas",
    oab: "OAB/MG 213.733",
    role: "Sócio",
    specialty: "Holding, Sucessão e Contencioso Judicial",
    bio: "Atua em holding familiar, planejamento sucessório e contencioso judicial. Estrutura juridicamente grupos empresariais e orienta sócios na organização patrimonial.",
    image: "https://srcatributario.adv.br/assets/socios/bruno-chagas.png",
  },
};

export function getAuthor(slug: string): Author | null {
  return authors[slug as AuthorSlug] ?? null;
}
