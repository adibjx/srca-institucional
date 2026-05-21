import type { Metadata } from "next";
import { CONTACT, SITE } from "./constants";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = SITE.description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const url = new URL(path, SITE.url).toString();
  const resolvedTitle = title ?? SITE.defaultTitle;

  return {
    metadataBase: new URL(SITE.url),
    title: title ? title : { absolute: SITE.defaultTitle },
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: resolvedTitle,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: SITE.titleTemplate,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  generator: "Next.js",
  keywords: [
    "advocacia tributária",
    "planejamento tributário",
    "contencioso tributário",
    "holding patrimonial",
    "planejamento sucessório",
    "consultoria tributária",
    "Uberaba",
  ],
  alternates: { canonical: SITE.url },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: SITE.defaultTitle,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
};

// JSON-LD generators

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}#organization`,
    name: SITE.legalName,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description,
    telephone: `+${CONTACT.whatsapp}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    sameAs: [CONTACT.social.instagram.url, CONTACT.social.linkedin.url],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

export function legalServiceJsonLd(params: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: params.name,
    description: params.description,
    url: new URL(params.path, SITE.url).toString(),
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function articleJsonLd(params: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  image?: string;
}) {
  const url = `${SITE.url}/blog/${params.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    mainEntityOfPage: url,
    url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: { "@type": "Person", name: params.authorName },
    publisher: { "@id": `${SITE.url}#organization` },
    image: params.image ?? `${SITE.url}${SITE.ogImage}`,
  };
}

export function personJsonLd(params: {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  slug?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    image: params.image,
    worksFor: { "@id": `${SITE.url}#organization` },
    url: params.slug ? `${SITE.url}/sobre#${params.slug}` : `${SITE.url}/sobre`,
  };
}

export function breadcrumbJsonLd(items: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}

export function faqPageJsonLd(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
