import type { Metadata } from "next";
import { buildMetadata, faqPageJsonLd } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Educational } from "@/components/sections/Educational";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Sectors } from "@/components/sections/Sectors";
import { Methodology } from "@/components/sections/Methodology";
import { Faq } from "@/components/sections/Faq";
import { FAQ_ITEMS } from "@/components/sections/faq-items";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = buildMetadata({
  title: "Advocacia Tributária para Empresas | SRCA",
  description:
    "Advocacia tributária em Uberaba-MG com atuação nacional. Planejamento, contencioso, holding e sucessão para empresas em todo o Brasil.",
  path: "/",
});

export default function HomePage() {
  const faqJsonLd = faqPageJsonLd(
    FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Educational />
      <Services />
      <Team />
      <Sectors />
      <Methodology />
      <Faq />
      <CtaFinal />
    </>
  );
}
