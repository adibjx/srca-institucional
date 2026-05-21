import type { ArticleMeta } from "@/lib/blog-shared";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles({ articles }: { articles: ArticleMeta[] }) {
  if (!articles.length) return null;
  return (
    <section className="mt-16">
      <h2 className="font-serif text-2xl text-primary-900 md:text-3xl">
        Artigos relacionados
      </h2>
      <div className="mt-3 h-[2px] w-12 bg-accent-500" aria-hidden="true" />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
