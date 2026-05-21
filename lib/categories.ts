export type CategorySlug =
  | "planejamento-tributario"
  | "contencioso"
  | "holding-e-sucessao"
  | "reforma-tributaria"
  | "gestao-fiscal";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  color: string;
};

export const categories: Record<CategorySlug, Omit<Category, "slug">> = {
  "planejamento-tributario": {
    name: "Planejamento Tributário",
    description:
      "Regime tributário, composição societária e estruturação fiscal.",
    color: "#0B3D4E",
  },
  contencioso: {
    name: "Contencioso",
    description: "Defesa de empresas, autuações e disputas tributárias.",
    color: "#8B6914",
  },
  "holding-e-sucessao": {
    name: "Holding e Sucessão",
    description:
      "Holding familiar, planejamento sucessório e organização patrimonial.",
    color: "#2D4A3E",
  },
  "reforma-tributaria": {
    name: "Reforma Tributária",
    description: "Atualizações e impactos da reforma tributária em andamento.",
    color: "#4A2D2D",
  },
  "gestao-fiscal": {
    name: "Gestão Fiscal",
    description: "Obrigações acessórias, compliance e rotina fiscal.",
    color: "#2D2D4A",
  },
};

export function getCategory(slug: string): Category | null {
  const cat = categories[slug as CategorySlug];
  if (!cat) return null;
  return { slug: slug as CategorySlug, ...cat };
}

export function allCategories(): Category[] {
  return (Object.keys(categories) as CategorySlug[]).map((slug) => ({
    slug,
    ...categories[slug],
  }));
}
