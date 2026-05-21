export const SITE = {
  name: "SRCA Advocacia Tributária",
  legalName: "Squiapati, Romano, Chagas & Afonso Neto Sociedade de Advogados",
  shortName: "SRCA",
  url: "https://srcatributario.adv.br",
  defaultTitle: "SRCA Advocacia Tributária",
  titleTemplate: "%s | SRCA Advocacia Tributária",
  description:
    "Escritório exclusivamente tributário. Planejamento tributário, contencioso, holding patrimonial e planejamento sucessório para empresas em todo o Brasil.",
  ogImage: "/images/og-default.jpg",
  locale: "pt_BR",
  gtmId: "GTM-NXFD7QHC",
} as const;

export const CONTACT = {
  whatsapp: "5534997391342",
  whatsappLink: "https://wa.me/5534997391342",
  whatsappDisplay: "(34) 99739-1342",
  email: "contato@srcatributario.adv.br",
  hours: "Segunda a sexta, 8h às 18h",
  address: {
    street: "R. Cel. Antônio Rios, 1097, sala 1101",
    neighborhood: "Santa Marta",
    city: "Uberaba",
    state: "MG",
    postalCode: "38061-150",
    country: "BR",
    full: "R. Cel. Antônio Rios, 1097, sala 1101 — Santa Marta, Uberaba/MG, CEP 38061-150",
  },
  social: {
    instagram: {
      handle: "@srca.tributario",
      url: "https://instagram.com/srca.tributario",
    },
    linkedin: {
      handle: "Squiapati, Romano, Chagas & Afonso Neto Sociedade de Advogados",
      url: "https://www.linkedin.com/company/srca-tributario",
    },
  },
} as const;

export type ServiceSlug =
  | "planejamento-tributario"
  | "contencioso-tributario"
  | "holding-patrimonial"
  | "planejamento-sucessorio";

export const SERVICES: ReadonlyArray<{
  slug: ServiceSlug;
  title: string;
  short: string;
}> = [
  {
    slug: "planejamento-tributario",
    title: "Planejamento Tributário",
    short: "Revisão da estrutura fiscal para reduzir carga tributária de forma legal e sustentável.",
  },
  {
    slug: "contencioso-tributario",
    title: "Contencioso Tributário",
    short: "Defesa administrativa e judicial em autuações, cobranças indevidas e execuções fiscais.",
  },
  {
    slug: "holding-patrimonial",
    title: "Holding Patrimonial",
    short: "Estruturação societária para proteção de patrimônio e eficiência tributária.",
  },
  {
    slug: "planejamento-sucessorio",
    title: "Planejamento Sucessório",
    short: "Organização da sucessão empresarial e patrimonial com previsibilidade tributária.",
  },
];

export const NAV: ReadonlyArray<{
  label: string;
  href: string;
  children?: ReadonlyArray<{ label: string; href: string }>;
}> = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/servicos",
    children: SERVICES.map((s) => ({
      label: s.title,
      href: `/servicos/${s.slug}`,
    })),
  },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const PARTNERS = [
  {
    slug: "manoel-squiapati",
    name: "Manoel Squiapati",
    oab: "OAB/MG 205.573",
    role: "Sócio",
    focus: "Planejamento tributário e estruturação patrimonial",
    photo: "https://srcatributario.adv.br/assets/socios/manoel-squiapati.png",
  },
  {
    slug: "victor-romano",
    name: "Victor Romano",
    oab: "OAB/MG 244.504",
    role: "Sócio",
    focus: "Planejamento tributário e contencioso administrativo e judicial",
    photo: "https://srcatributario.adv.br/assets/socios/victor-romano.png",
  },
  {
    slug: "bruno-chagas",
    name: "Bruno Chagas",
    oab: "OAB/MG 213.733",
    role: "Sócio",
    focus: "Holding familiar, planejamento sucessório e contencioso judicial",
    photo: "https://srcatributario.adv.br/assets/socios/bruno-chagas.png",
  },
] as const;

export const OAB_DISCLAIMER =
  "Esta comunicação tem caráter meramente informativo e não configura oferta de serviços advocatícios ou consultoria jurídica formal, em conformidade com o Provimento 94/2000 da OAB.";

export const LOGO_URL =
  "https://srcatributario.adv.br/assets/imagery/logo/srca-logo-cropped.png";
