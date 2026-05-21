import Link from "next/link";
import Image from "next/image";
import type { ArticleMeta } from "@/lib/blog-shared";
import { formatDate } from "@/lib/blog-shared";
import { getAuthor } from "@/lib/authors";
import { CategoryBadge } from "./CategoryBadge";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  const author = getAuthor(article.author);
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-gray-200/80 bg-cream-50 p-6 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-accent-500/40 hover:shadow-lg md:p-7">
      <div className="flex-1">
        <CategoryBadge slug={article.category} name={article.categoryName} asLink={false} />

        <h2 className="mt-4 font-serif text-xl leading-snug text-primary-900 transition-colors group-hover:text-accent-600 md:text-2xl">
          <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-gray-600">
          {article.description}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5 text-xs text-gray-500">
        {author ? (
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-primary-900">
            <Image
              src={author.image}
              alt={author.name}
              fill
              sizes="32px"
              className="object-cover object-top"
            />
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-gray-700">{article.authorName}</p>
          <p className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.1em] text-gray-500">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime} min de leitura</span>
          </p>
        </div>
      </div>
    </article>
  );
}
