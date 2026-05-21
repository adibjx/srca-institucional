export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorName: string;
  category: string;
  categoryName: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
};

export function formatDate(date: string): string {
  try {
    const d = new Date(date);
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return date;
  }
}
