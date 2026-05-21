import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { formatDate } from "@/lib/blog-shared";
import { getAuthor } from "@/lib/authors";
import { CategoryBadge } from "./CategoryBadge";

export function ArticleHeader({
  title,
  category,
  categoryName,
  author,
  authorName,
  date,
  readingTime,
}: {
  title: string;
  category: string;
  categoryName: string;
  author: string;
  authorName: string;
  date: string;
  readingTime: number;
}) {
  const a = getAuthor(author);

  return (
    <header className="relative isolate overflow-hidden bg-primary-950 text-cream-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,150,62,0.16),transparent_55%)]"
      />

      <Container className="relative pb-16 pt-36 md:pb-20 md:pt-44">
        <Breadcrumbs
          variant="light"
          className="mb-8"
          items={[
            { label: "Início", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: categoryName, href: `/blog?categoria=${category}` },
            { label: title.length > 48 ? `${title.slice(0, 45)}…` : title },
          ]}
        />

        <div className="mb-6">
          <CategoryBadge slug={category} name={categoryName} asLink={false} size="md" />
        </div>

        <h1 className="max-w-4xl font-serif text-display-md leading-[1.08] text-cream-50 md:text-display-lg">
          {title}
        </h1>

        <div className="mt-8 h-[2px] w-16 bg-accent-500" aria-hidden="true" />

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-cream-100/80">
          {a ? (
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-primary-900">
              <Image
                src={a.image}
                alt={a.name}
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </span>
          ) : null}
          <span className="font-medium text-cream-50">{authorName}</span>
          <span aria-hidden="true" className="text-cream-100/30">·</span>
          <time dateTime={date}>{formatDate(date)}</time>
          <span aria-hidden="true" className="text-cream-100/30">·</span>
          <span>{readingTime} min de leitura</span>
        </div>
      </Container>
    </header>
  );
}
