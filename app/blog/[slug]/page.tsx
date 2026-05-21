import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ArticleHeader } from "@/components/blog/ArticleHeader";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { ServiceCta } from "@/components/sections/ServiceCta";
import {
  extractHeadings,
  generateStaticBlogParams,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/blog";
import { SITE } from "@/lib/constants";

type Params = { slug: string };

export function generateStaticParams() {
  return generateStaticBlogParams();
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return buildMetadata({ noIndex: true });

  const meta = buildMetadata({
    title: `${article.title} | SRCA Advocacia Tributária`,
    description: article.description,
    path: `/blog/${article.slug}`,
  });

  return {
    ...meta,
    openGraph: {
      ...(meta.openGraph || {}),
      type: "article",
      publishedTime: article.date,
      authors: [article.authorName],
      section: article.categoryName,
      tags: article.tags,
    },
  };
}

export default function BlogArticlePage({ params }: { params: Params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, article.category, 3);
  const headings = extractHeadings(article.content);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: article.categoryName, path: `/blog?categoria=${article.category}` },
    { name: article.title, path: `/blog/${article.slug}` },
  ]);

  const articleSchema = {
    ...articleJsonLd({
      title: article.title,
      description: article.description,
      slug: article.slug,
      datePublished: article.date,
      authorName: article.authorName,
    }),
    articleSection: article.categoryName,
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <ArticleHeader
        title={article.title}
        category={article.category}
        categoryName={article.categoryName}
        author={article.author}
        authorName={article.authorName}
        date={article.date}
        readingTime={article.readingTime}
      />

      <section className="bg-cream-50 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <ArticleContent source={article.content} />

              <ShareButtons slug={article.slug} title={article.title} />
              <AuthorCard slug={article.author} />
              <RelatedArticles articles={related} />
            </div>

            <aside className="lg:col-span-4">
              <div className="space-y-8 lg:sticky lg:top-28">
                <TableOfContents headings={headings} />
                <NewsletterCTA />
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <ServiceCta
        title="Uma conversa pode esclarecer a sua situação"
        text="Se o tema do artigo se aplica à sua empresa, uma análise inicial pode ajudar a definir o próximo passo."
      />
    </>
  );
}
