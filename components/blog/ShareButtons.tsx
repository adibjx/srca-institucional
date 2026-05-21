"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE.url}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} — ${url}`);

  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsapp = `https://wa.me/?text=${encodedText}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  }

  const btn =
    "inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-cream-50 text-gray-600 transition-all hover:border-accent-500/40 hover:text-accent-600";

  return (
    <div className="my-12 flex items-center justify-between gap-4 border-y border-gray-200 py-6">
      <span className="text-xs uppercase tracking-[0.14em] text-gray-500">
        Compartilhar este artigo
      </span>
      <div className="flex items-center gap-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no LinkedIn"
          className={btn}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9.75h4V21H3V9.75ZM10 9.75h3.84v1.55h.06c.53-.95 1.84-1.95 3.79-1.95C21.62 9.35 22 11.7 22 14.6V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9.75Z" />
          </svg>
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartilhar no WhatsApp"
          className={btn}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
        </a>
        <button type="button" onClick={copy} aria-label="Copiar link" className={btn}>
          {copied ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
