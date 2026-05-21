import Link from "next/link";
import Image from "next/image";
import { CONTACT, LOGO_URL, OAB_DISCLAIMER, SERVICES, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-cream-100">
      <div className="mx-auto w-full max-w-container px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <Link href="/" aria-label={`${SITE.name} — Início`} className="inline-block">
              <Image
                src={LOGO_URL}
                alt={SITE.name}
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-cream-100/70">
              {SITE.legalName}. Escritório exclusivamente tributário com atendimento em todo o
              território nacional.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base text-accent-300">Áreas de atuação</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="text-cream-100/80 transition-colors hover:text-accent-300"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base text-accent-300">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/80">
              <li>{CONTACT.address.full}</li>
              <li>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-300"
                >
                  WhatsApp: {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent-300">
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-cream-100/60">{CONTACT.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base text-accent-300">Redes</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream-100/80 hover:text-accent-300"
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream-100/80 hover:text-accent-300"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-100/10 pt-8 text-xs leading-relaxed text-cream-100/60">
          <p className="max-w-4xl">{OAB_DISCLAIMER}</p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>© {year} {SITE.legalName}. Todos os direitos reservados.</p>
            <div className="flex gap-5">
              <Link href="#" className="hover:text-accent-300">
                Política de Privacidade
              </Link>
              <Link href="#" className="hover:text-accent-300">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10V17M7 7.5V7.51" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M11 17V13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
