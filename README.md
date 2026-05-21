# SRCA Advocacia Tributária — Site Institucional

Site institucional do escritório SRCA, gerado como site estático e publicado em hospedagem compartilhada (Hostinger).

## Stack

- **Next.js 14** (App Router) com `output: 'export'` — gera HTML estático
- **TypeScript**
- **Tailwind CSS** + `@tailwindcss/typography`
- **MDX** para os artigos do blog (`next-mdx-remote`, `gray-matter`)

## Comandos

```bash
npm install        # Instalar dependências
npm run dev        # Servidor de desenvolvimento (localhost:3000)
npm run build      # Build estático — gera a pasta out/
npx serve out      # Servir o build localmente para conferência
```

Após `npm run build`, a pasta `out/` contém o site completo em HTML/CSS/JS estáticos, pronto para upload.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` antes do build:

- `NEXT_PUBLIC_SITE_URL` — URL canônica do site (ex.: `https://srcatributario.adv.br`)
- `NEXT_PUBLIC_GTM_ID` — ID do contêiner Google Tag Manager

Como o site é totalmente estático, não há variáveis server-side (sem API keys, sem segredos).

## Adicionar um novo artigo ao blog

1. Crie `content/blog/<slug-do-artigo>.mdx`
2. Preencha o frontmatter (use um artigo existente como referência):

```yaml
---
title: "Título do artigo"
description: "Descrição para SEO (≤ 160 caracteres)"
date: "2025-03-15"
author: "manoel-squiapati"      # slug em lib/authors.ts
authorName: "Manoel Squiapati"
category: "planejamento-tributario"   # slug em lib/categories.ts
categoryName: "Planejamento Tributário"
tags: ["tag1", "tag2"]
readingTime: 8
featured: false
---
```

3. Escreva o conteúdo em Markdown/MDX
4. `npm run build` — o artigo entra automaticamente na listagem e no sitemap

## Deploy na Hostinger (hospedagem compartilhada)

1. `npm run build` localmente
2. Acesse o **hPanel** da Hostinger → **Gerenciador de Arquivos** → `public_html/`
3. **Faça backup** dos arquivos do site antigo, se houver
4. Selecione **todo o conteúdo da pasta `out/`** (não a pasta em si, e sim os arquivos dentro dela) e suba para `public_html/`
   - Para muitos arquivos, prefira FTP (FileZilla) — credenciais em Hospedagem → Conta FTP
5. Confirme que `public_html/.htaccess` está presente (vai junto do build, copiado de `public/.htaccess`)
6. Confirme que o SSL está ativo no painel (Hostinger fornece Let's Encrypt gratuito)
7. Teste em `https://srcatributario.adv.br`

### Atualizar o site no futuro

Sempre que alterar conteúdo (artigo novo, correção de texto):

1. `npm run build`
2. Substitua o conteúdo de `public_html/` pelos arquivos atualizados de `out/`

### O que NÃO funciona em export estático

- API Routes (`app/api/...`) — formulário de contato foi substituído por CTA de WhatsApp
- `headers()`, `cookies()`, `searchParams` server-side dinâmicos
- Middleware (`middleware.ts`)
- ISR (Incremental Static Regeneration)
- `next/image` com otimização — usamos `unoptimized: true`; subir imagens já comprimidas (≤ 500 KB)
