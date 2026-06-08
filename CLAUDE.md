# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Institutional site for **SRCA Advocacia Tributária** (Uberaba/MG tax law firm). Static-exported Next.js site deployed to Hostinger shared hosting via GitHub Actions FTP. Content in Portuguese (pt-BR).

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Static export → out/
npm run lint         # next lint
npm run type-check   # tsc --noEmit
npx serve out        # Serve the static build locally
```

There is no test suite.

## Architecture

### Static export — non-negotiable constraints
`next.config.mjs` sets `output: "export"` and `trailingSlash: true`. This forbids:
- API routes (`app/api/...`) — contact "form" is a WhatsApp deep link with prefilled text
- `middleware.ts`, dynamic `headers()`/`cookies()`, ISR
- Optimized `next/image` — `images.unoptimized: true`; pre-compress images before adding

Build output goes to `out/`. `public/.htaccess` ships with the build to drive Apache (HTTPS forced, www→non-www, GZIP, asset cache, security headers, `ErrorDocument 404 /404.html`).

### Routes (App Router)
- `app/page.tsx` — Home (Hero, Services, Sectors, Methodology, Team, Faq, CtaFinal)
- `app/servicos/[slug]/page.tsx` — 4 service pages, slugs from `lib/constants.ts:SERVICES`
- `app/sobre/page.tsx` — About + partners (data inline; `app/sobre/page.tsx:20`)
- `app/contato/page.tsx` — WhatsApp CTA + map (no form)
- `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` — MDX-powered blog
- `app/sitemap.ts` — auto-includes blog articles via `getAllArticles()`
- `app/not-found.tsx` — branded 404 (matched by `.htaccess`)

`generateStaticParams` is required on every dynamic segment because of static export.

### Data layer (`lib/`)
- `lib/constants.ts` — single source of truth for `SITE`, `CONTACT`, `SERVICES`, `NAV`, `PARTNERS`, `LOGO_URL`. **Edit here, not in components.**
- `lib/authors.ts`, `lib/categories.ts` — author/category lookup tables keyed by slug used in MDX frontmatter
- `lib/metadata.ts` — `buildMetadata()`, `breadcrumbJsonLd()`, `personJsonLd()`, `articleJsonLd()`, etc. All pages should use `buildMetadata` so canonical/OG/Schema stay consistent
- `lib/blog.ts` — server-only (`fs`/`path`); reads `content/blog/*.mdx`. **Never import from a client component.**
- `lib/blog-shared.ts` — pure helpers (`formatDate`, `ArticleMeta` type) safe to import anywhere. This split exists because importing `lib/blog` into a client bundle triggers `node:fs` webpack errors.
- `lib/mdx.tsx` — MDX components map + rehype/remark plugin config (slug, autolink, gfm)

### Components
- `components/ui/` — primitives (`Button`, `Container`, `Card`, etc.)
- `components/sections/` — home/about page sections. `Faq.tsx` is `"use client"`; its data lives in `faq-items.ts` so server components can also import it (same pattern as the `blog`/`blog-shared` split)
- `components/services/` — service-page building blocks
- `components/layout/Analytics.tsx` — `"use client"`; global click delegation that pushes custom events (`whatsapp_click`, `cta_click`, `social_click`, etc.) to `window.dataLayer`. Add `data-cta-label="..."` to anchors/buttons to track them. GTM is initialized in `app/layout.tsx`; GA4/Ads/Clarity are configured **inside GTM**, not in code

### Blog content flow
1. `content/blog/<slug>.mdx` with frontmatter (see README for schema — `author` and `category` must match slugs in `lib/authors.ts` / `lib/categories.ts`)
2. `lib/blog.ts:getAllArticles` reads + sorts by date
3. Listing page, article page, sitemap, and related-articles all derive from this

### Page-level SEO checklist (apply to any new page, not just blog)
Run before shipping any new route or copy change. Same constraints apply to home, service pages, sobre, contato:

- **Title via `buildMetadata`**: ≤ 50 chars (Seobility flags >580px ≈ 60 chars). Keyword first, brand last. Avoid stacking colons.
- **Description**: ≤ 155 chars (≤ 1000px). Open with primary keyword. State concrete value.
- **H1**: every word in the H1 must appear at least once in body prose (not just in section eyebrows or spans). Crawlers flag mismatches.
- **Title-content match**: every meaningful word in the page title must appear in body prose. If the title says "Advocacia Tributária", the word "advocacia" needs to be somewhere in the page.
- The Hero H1 is a brand element — prefer adding the missing keyword to body copy (e.g. `Educational.tsx`) rather than rewriting the Hero.

### Blog SEO checklist (apply when creating any new article)
The frontmatter `title` is used as **both** the page `<title>` and the rendered `<h1>` — there is no separate SEO-title field. Optimize for both at once:

- **`title`**: ≤ 60 chars. Lead with the primary keyword. Avoid colons that push keywords past char 50. The browser tab will show `<title> | SRCA Advocacia Tributária`, so leave headroom for the brand suffix.
- **`description`**: 140–160 chars. Open with the primary keyword (matches the title). State the concrete value the reader gets. No marketing fluff.
- **First paragraph of body**: must contain the primary keyword **verbatim** (same wording as the H1) plus 2–3 secondary keywords. SEO crawlers flag "H1 words not in text" if the H1 and intro diverge.
- **`date`**: today's date (`YYYY-MM-DD`). Never backdate.
- **`tags`**: 4–6 specific tags. Mix broad (e.g. "reforma tributária") with specific (e.g. "CBS", "LC 214").
- **H2s in body**: include keyword variations naturally; don't keyword-stuff.

### Styling
Tailwind with a custom `srca` typography variant in `tailwind.config.ts` and brand tokens (`primary-*`, `accent-*`, `cream-*`, `font-serif`, `font-sans`, `text-display-*`). Use existing tokens rather than raw hex/px values.

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`: build with `NEXT_PUBLIC_SITE_URL` + `NEXT_PUBLIC_GTM_ID` secrets, then FTP-upload `out/` to Hostinger.

**Hostinger FTP gotcha:** the primary FTP account is chrooted away from the live document root. A domain-scoped FTP sub-account (`u114826194.deploy`) pointing to `/home/u114826194/domains/srcatributario.adv.br/public_html` is used, with `FTP_SERVER_DIR=./`. If a deploy "succeeds" but the site doesn't update, check the FTP account scope first. See `DEPLOY-STATUS.md` for the full history.

## Assets

All images are self-hosted under `public/images/`. Earlier versions referenced `https://srcatributario.adv.br/assets/...` (legacy site); those URLs return 404 — never reintroduce external asset URLs for first-party images.
