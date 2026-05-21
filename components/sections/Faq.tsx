"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "./faq-items";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-50 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
              Dúvidas comuns
            </p>
            <h2 className="font-serif text-display-sm leading-tight text-primary-900 md:text-display-md">
              Perguntas frequentes
            </h2>
            <div className="mt-5 h-[2px] w-16 bg-accent-500" aria-hidden="true" />
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              As respostas abaixo cobrem as dúvidas que mais aparecem em primeiras
              conversas com o escritório.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-gray-200 border-y border-gray-200">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent-600"
                    >
                      <span className="font-serif text-lg leading-snug text-primary-900 md:text-xl">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent-500/40 text-accent-600 transition-transform duration-300",
                          isOpen && "rotate-45 bg-accent-500/10",
                        )}
                      >
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M6 1v10M1 6h10" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-smooth",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-12 text-[0.95rem] leading-relaxed text-gray-700">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
