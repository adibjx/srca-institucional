import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { BlogListing } from "@/components/blog/BlogListing";
import { getAllArticles, getAllCategoriesWithCounts } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Blog | SRCA Advocacia Tributária",
  description:
    "Artigos sobre direito tributário escritos pelos advogados do SRCA. Planejamento tributário, contencioso, holding, sucessão e reforma tributária.",
  path: "/blog",
});

export default function BlogPage() {
  const articles = getAllArticles();
  const categories = getAllCategoriesWithCounts();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog SRCA",
    url: `${SITE.url}/blog`,
    publisher: { "@id": `${SITE.url}#organization` },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.description,
      datePublished: a.date,
      url: `${SITE.url}/blog/${a.slug}`,
      author: { "@type": "Person", name: a.authorName },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <ServiceHero
        eyebrow="Blog"
        title="Blog"
        lede="Artigos sobre direito tributário escritos pelos advogados do SRCA. Temas práticos para quem toma decisões sobre a empresa."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-24">
        <Container>
          <BlogListing articles={articles} categories={categories} />
        </Container>
      </section>
    </>
  );
}
