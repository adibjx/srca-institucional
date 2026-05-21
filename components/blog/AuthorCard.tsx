import Link from "next/link";
import Image from "next/image";
import { getAuthor } from "@/lib/authors";

export function AuthorCard({ slug }: { slug: string }) {
  const a = getAuthor(slug);
  if (!a) return null;

  return (
    <aside className="my-12 grid gap-6 rounded-lg border border-primary-900/10 bg-cream-100 p-6 sm:grid-cols-[112px_1fr] sm:items-center md:p-8">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-primary-900 sm:h-28 sm:w-28">
        <Image
          src={a.image}
          alt={a.name}
          fill
          sizes="112px"
          className="object-cover object-top"
        />
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-accent-600">
          {a.role}
        </p>
        <h3 className="mt-1 font-serif text-2xl text-primary-900">{a.name}</h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-[0.1em] text-gray-500">
          {a.oab} · {a.specialty}
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700">
          {a.bio}
        </p>
        <Link
          href="/sobre"
          className="mt-4 inline-flex items-center text-sm font-medium uppercase tracking-[0.14em] text-accent-600 hover:text-accent-500"
        >
          Conheça a equipe
          <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </aside>
  );
}
