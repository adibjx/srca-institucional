import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { CONTACT, OAB_DISCLAIMER, SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contato | SRCA Advocacia Tributária",
  description:
    "Entre em contato com o SRCA Advocacia Tributária. Escritório em Uberaba-MG com atendimento nacional. WhatsApp, e-mail e endereço.",
  path: "/contato",
});

const MAP_QUERY = encodeURIComponent(
  "R. Cel. Antônio Rios, 1097, Santa Marta, Uberaba - MG, 38061-150",
);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const WHATSAPP_PREFILLED =
  "https://wa.me/5534997391342?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20a%20situa%C3%A7%C3%A3o%20tribut%C3%A1ria%20da%20minha%20empresa.";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.34 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.23a2 2 0 0 1 2.11-.45c.9.32 1.84.54 2.8.66A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9.75h4V21H3V9.75ZM10 9.75h3.84v1.55h.06c.53-.95 1.84-1.95 3.79-1.95C21.62 9.35 22 11.7 22 14.6V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9.75Z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

const CONTACT_BLOCKS = [
  {
    icon: <PinIcon />,
    label: "Endereço",
    lines: [
      "R. Cel. Antônio Rios, 1097, sala 1101",
      "Santa Marta — Uberaba/MG",
      "CEP 38061-150",
    ],
  },
  {
    icon: <PhoneIcon />,
    label: "Telefone / WhatsApp",
    lines: [
      <a
        key="wa"
        href={CONTACT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-900 hover:text-accent-600"
      >
        {CONTACT.whatsappDisplay}
      </a>,
    ],
  },
  {
    icon: <MailIcon />,
    label: "E-mail",
    lines: [
      <a
        key="m"
        href={`mailto:${CONTACT.email}`}
        className="text-primary-900 hover:text-accent-600"
      >
        {CONTACT.email}
      </a>,
    ],
  },
  {
    icon: <ClockIcon />,
    label: "Horário",
    lines: ["Segunda a sexta", "8h às 18h"],
  },
];

export default function ContatoPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Início", path: "/" },
    { name: "Contato", path: "/contato" },
  ]);

  const contactPoint = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.legalName,
    url: SITE.url,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${CONTACT.whatsapp}`,
        email: CONTACT.email,
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPoint) }}
      />

      <ServiceHero
        eyebrow="Contato"
        title="Entre em contato"
        lede="Uma primeira conversa com o escritório. Sem compromisso, sem custo inicial."
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
      />

      <section className="bg-cream-50 py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-gray-200/80 bg-cream-50 p-8 shadow-sm md:p-12">
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
                  Próximo passo
                </p>
                <h2 className="font-serif text-3xl text-primary-900 md:text-4xl">
                  Fale com o escritório
                </h2>
                <div className="mt-5 h-[2px] w-12 bg-accent-500" aria-hidden="true" />

                <p className="mt-7 text-[1.05rem] leading-relaxed text-gray-700">
                  O primeiro contato é feito diretamente com um dos sócios do
                  SRCA. Envie uma mensagem pelo WhatsApp e descreva brevemente
                  a situação da sua empresa. Retornamos em até 2 dias úteis.
                </p>

                <div className="mt-8" data-section="contact">
                  <a
                    href={WHATSAPP_PREFILLED}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-label="contato_whatsapp_principal"
                    className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-md bg-accent-500 px-8 text-base font-medium tracking-wide text-primary-950 shadow-sm transition-all duration-200 hover:bg-accent-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    <span className="h-5 w-5">
                      <WhatsAppIcon />
                    </span>
                    Chamar no WhatsApp
                  </a>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Ou envie um e-mail para{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-medium text-primary-700 underline decoration-accent-500/50 underline-offset-4 hover:text-accent-600"
                  >
                    {CONTACT.email}
                  </a>
                </p>

                <p className="mt-8 border-t border-gray-200 pt-6 text-xs leading-relaxed text-gray-500">
                  O contato será feito diretamente por um dos sócios. Seus
                  dados são tratados com confidencialidade, em conformidade com
                  a LGPD.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-lg border border-gray-200/80 bg-cream-100 p-7 md:p-10">
                <p className="mb-3 font-sans text-xs uppercase tracking-[0.18em] text-accent-600">
                  Dados do escritório
                </p>
                <h2 className="font-serif text-2xl text-primary-900 md:text-3xl">
                  Onde encontrar
                </h2>
                <div className="mt-5 h-[2px] w-12 bg-accent-500" aria-hidden="true" />

                <ul className="mt-8 space-y-6">
                  {CONTACT_BLOCKS.map((block) => (
                    <li key={block.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-500/10 text-accent-600">
                        <span className="h-5 w-5">{block.icon}</span>
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                          {block.label}
                        </p>
                        <div className="mt-1 space-y-0.5 text-[0.98rem] leading-snug text-primary-900">
                          {block.lines.map((line, i) => (
                            <div key={i}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}

                  <li className="flex items-start gap-4 border-t border-primary-900/10 pt-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-500/10 text-accent-600">
                      <span className="h-5 w-5">
                        <InstagramIcon />
                      </span>
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-gray-500">
                        Redes sociais
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <a
                          href={CONTACT.social.instagram.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-primary-900/10 bg-cream-50 px-3 py-1.5 text-sm text-primary-900 transition-colors hover:border-accent-500/40 hover:text-accent-600"
                        >
                          <span className="h-4 w-4">
                            <InstagramIcon />
                          </span>
                          {CONTACT.social.instagram.handle}
                        </a>
                        <a
                          href={CONTACT.social.linkedin.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-primary-900/10 bg-cream-50 px-3 py-1.5 text-sm text-primary-900 transition-colors hover:border-accent-500/40 hover:text-accent-600"
                        >
                          <span className="h-4 w-4">
                            <LinkedInIcon />
                          </span>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <div className="overflow-hidden rounded-lg border border-gray-200/80 shadow-sm">
              <iframe
                src={MAP_EMBED}
                title="Mapa do escritório SRCA — R. Cel. Antônio Rios, 1097, Uberaba/MG"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full md:h-[420px]"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-12 rounded-md border border-gray-200 bg-cream-100 p-6 text-xs leading-relaxed text-gray-600 md:p-7">
            <p>
              O envio de mensagem não estabelece relação de cliente com o
              escritório. O SRCA poderá, após análise inicial, informar se há
              viabilidade de atuação no caso apresentado. Em conformidade com o
              Provimento 94/2000 da OAB e com a Lei Geral de Proteção de Dados
              (Lei 13.709/2018).
            </p>
            <p className="mt-3 text-gray-500">{OAB_DISCLAIMER}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
