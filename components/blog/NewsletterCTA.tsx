import { CONTACT } from "@/lib/constants";

export function NewsletterCTA() {
  return (
    <aside className="relative overflow-hidden rounded-lg bg-primary-900 p-7 text-cream-50">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/10 blur-2xl"
      />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.16em] text-accent-300">
          SRCA
        </p>
        <p className="mt-3 font-serif text-lg leading-snug text-cream-50">
          Precisa de orientação tributária para sua empresa?
        </p>
        <a
          href={CONTACT.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-accent-500 px-6 text-sm font-medium tracking-wide text-primary-950 transition-colors hover:bg-accent-400"
        >
          Fale com o SRCA
        </a>
        <p className="mt-4 text-xs leading-relaxed text-cream-100/70">
          O contato é feito diretamente com um dos sócios.
        </p>
      </div>
    </aside>
  );
}
