import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  breadcrumbJsonLd,
  buildMetadata,
  legalServiceJsonLd,
} from "@/lib/metadata";
import { SERVICES, type ServiceSlug } from "@/lib/constants";
import { PlanejamentoTributario } from "@/components/services/PlanejamentoTributario";
import { ContenciosoTributario } from "@/components/services/ContenciosoTributario";
import { HoldingPatrimonial } from "@/components/services/HoldingPatrimonial";
import { PlanejamentoSucessorio } from "@/components/services/PlanejamentoSucessorio";

type Params = { slug: ServiceSlug };

const SEO: Record<
  ServiceSlug,
  { title: string; description: string; serviceName: string; crumbLabel: string }
> = {
  "planejamento-tributario": {
    title:
      "Planejamento Tributário para Empresas | SRCA Advocacia Tributária",
    description:
      "Análise completa da estrutura fiscal da empresa. Revisão de regime tributário, composição societária e operações para reduzir a carga fiscal com segurança jurídica.",
    serviceName: "Planejamento Tributário",
    crumbLabel: "Planejamento Tributário",
  },
  "contencioso-tributario": {
    title: "Contencioso Tributário | Defesa de Empresas Autuadas | SRCA",
    description:
      "Defesa de empresas autuadas pela Receita Federal ou Secretaria de Fazenda. Questionamento de cobranças indevidas e acompanhamento de execuções fiscais.",
    serviceName: "Contencioso Tributário",
    crumbLabel: "Contencioso Tributário",
  },
  "holding-patrimonial": {
    title: "Holding Patrimonial e Familiar | SRCA Advocacia Tributária",
    description:
      "Estruturação de holding para organizar e proteger o patrimônio de sócios e famílias empresárias. Planejamento da transmissão de bens com eficiência tributária.",
    serviceName: "Holding Patrimonial",
    crumbLabel: "Holding Patrimonial",
  },
  "planejamento-sucessorio": {
    title:
      "Planejamento Sucessório Empresarial | SRCA Advocacia Tributária",
    description:
      "Organização antecipada da sucessão de bens e participações societárias. Redução de custo tributário na transmissão e prevenção de conflitos entre herdeiros.",
    serviceName: "Planejamento Sucessório",
    crumbLabel: "Planejamento Sucessório",
  },
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const seo = SEO[params.slug];
  if (!seo) return buildMetadata({ noIndex: true });

  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/servicos/${params.slug}`,
  });
}

const COMPONENTS: Record<ServiceSlug, React.ComponentType> = {
  "planejamento-tributario": PlanejamentoTributario,
  "contencioso-tributario": ContenciosoTributario,
  "holding-patrimonial": HoldingPatrimonial,
  "planejamento-sucessorio": PlanejamentoSucessorio,
};

export default function ServicoPage({ params }: { params: Params }) {
  const seo = SEO[params.slug];
  const Component = COMPONENTS[params.slug];
  if (!seo || !Component) notFound();

  const path = `/servicos/${params.slug}`;

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/servicos" },
    { name: seo.crumbLabel, path },
  ]);

  const legalService = legalServiceJsonLd({
    name: seo.serviceName,
    description: seo.description,
    path,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <Component />
    </>
  );
}
