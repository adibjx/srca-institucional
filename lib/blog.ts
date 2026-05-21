import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { allCategories, categories, type CategorySlug } from "./categories";
import type { ArticleMeta } from "./blog-shared";

export type { ArticleMeta } from "./blog-shared";
export { formatDate } from "./blog-shared";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Article = ArticleMeta & {
  content: string;
};

function listFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

function parseFile(filename: string): Article {
  const slug = filename.replace(/\.(mdx|md)$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);

  const computedMinutes = Math.max(1, Math.round(readingTime(content).minutes));

  return {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? ""),
    authorName: String(data.authorName ?? ""),
    category: String(data.category ?? ""),
    categoryName:
      String(data.categoryName ?? "") ||
      categories[data.category as CategorySlug]?.name ||
      "",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime:
      typeof data.readingTime === "number" ? data.readingTime : computedMinutes,
    featured: Boolean(data.featured),
    content,
  };
}

function toMeta(a: Article): ArticleMeta {
  const { content: _content, ...meta } = a;
  return meta;
}

function byDateDesc(a: ArticleMeta, b: ArticleMeta) {
  return b.date.localeCompare(a.date);
}

export function getAllArticles(): ArticleMeta[] {
  return listFiles().map((f) => toMeta(parseFile(f))).sort(byDateDesc);
}

export function getArticleBySlug(slug: string): Article | null {
  const filename = listFiles().find((f) => f.replace(/\.(mdx|md)$/, "") === slug);
  if (!filename) return null;
  return parseFile(filename);
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getAllCategoriesWithCounts(): Array<{
  slug: string;
  name: string;
  count: number;
}> {
  const articles = getAllArticles();
  return allCategories()
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count: articles.filter((a) => a.category === c.slug).length,
    }));
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 3,
): ArticleMeta[] {
  const all = getAllArticles().filter((a) => a.slug !== currentSlug);
  const sameCategory = all.filter((a) => a.category === category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = all.filter((a) => a.category !== category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function generateStaticBlogParams(): Array<{ slug: string }> {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function extractHeadings(content: string): Array<{
  id: string;
  text: string;
  level: 2 | 3;
}> {
  const lines = content.split("\n");
  const headings: Array<{ id: string; text: string; level: 2 | 3 }> = [];
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const level = m[1].length as 2 | 3;
    const text = m[2].replace(/[*_`]/g, "").trim();
    const id = slugify(text);
    headings.push({ id, text, level });
  }
  return headings;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
