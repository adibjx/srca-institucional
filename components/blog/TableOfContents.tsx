"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Heading = { id: string; text: string; level: 2 | 3 };

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    if (!headings.length) return;
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label="Sumário do artigo" className="text-sm">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-accent-600">
        Neste artigo
      </p>
      <ul className="space-y-2 border-l border-gray-200">
        {headings.map((h) => {
          const isActive = active === h.id;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={cn(
                  "block border-l-2 py-1 pl-4 transition-colors",
                  h.level === 3 && "pl-7 text-[0.85rem]",
                  isActive
                    ? "border-accent-500 text-primary-900"
                    : "-ml-px border-transparent text-gray-500 hover:text-primary-800",
                )}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
