"use client";

import { useMemo, useState } from "react";
import type { ArticleMeta } from "@/lib/blog-shared";
import { ArticleCard } from "./ArticleCard";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

export function BlogListing({
  articles,
  categories,
  initialCategory = "todos",
}: {
  articles: ArticleMeta[];
  categories: Array<{ slug: string; name: string; count: number }>;
  initialCategory?: string;
}) {
  const [active, setActive] = useState(initialCategory);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (active === "todos") return articles;
    return articles.filter((a) => a.category === active);
  }, [articles, active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const filters = [{ slug: "todos", name: "Todos", count: articles.length }, ...categories];

  return (
    <>
      <nav aria-label="Filtro por categoria" className="-mx-2 mb-12 flex flex-wrap gap-2 overflow-x-auto px-2">
        {filters.map((f) => {
          const isActive = active === f.slug;
          return (
            <button
              key={f.slug}
              type="button"
              onClick={() => {
                setActive(f.slug);
                setPage(1);
              }}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary-900 bg-primary-900 text-cream-50"
                  : "border-primary-900/20 bg-transparent text-primary-900 hover:border-accent-500/40 hover:text-accent-600",
              )}
            >
              {f.name}
              <span
                className={cn(
                  "rounded-sm px-1.5 py-0.5 text-[0.65rem]",
                  isActive ? "bg-cream-50/15 text-cream-50" : "bg-primary-900/5 text-gray-500",
                )}
              >
                {f.count}
              </span>
            </button>
          );
        })}
      </nav>

      {pageItems.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 bg-cream-50 p-12 text-center">
          <p className="font-serif text-xl text-primary-900">
            Nenhum artigo nesta categoria ainda.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Volte em breve — publicamos com frequência.
          </p>
        </div>
      )}

      {filtered.length > PAGE_SIZE ? (
        <nav aria-label="Paginação" className="mt-12 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center gap-2 rounded-md border border-primary-900/20 px-4 py-2 text-sm font-medium text-primary-900 transition-colors hover:border-accent-500/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span aria-hidden="true">←</span> Anterior
          </button>
          <span className="text-sm text-gray-600">
            Página {page} de {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex items-center gap-2 rounded-md border border-primary-900/20 px-4 py-2 text-sm font-medium text-primary-900 transition-colors hover:border-accent-500/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Próxima <span aria-hidden="true">→</span>
          </button>
        </nav>
      ) : null}
    </>
  );
}
