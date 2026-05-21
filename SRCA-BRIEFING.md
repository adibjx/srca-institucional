# Briefing — Site Institucional SRCA Advocacia Tributária

---

## 1. O Cliente

**Nome do escritório:** Squiapati, Romano, Chagas & Afonso Neto Advocacia Tributária (SRCA)
**Posicionamento:** Escritório exclusivamente tributário.
**Localização:** R. Cel. Antônio Rios, 1097, sala 1101 — Santa Marta, Uberaba/MG, CEP 38061-150
**Abrangência:** Atende todo o território nacional. Reuniões presenciais ou online.
**WhatsApp:** (34) 99739-1342
**E-mail:** contato@srcatributario.adv.br
**Instagram:** @srca.tributario
**LinkedIn:** Squiapati, Romano, Chagas & Afonso Neto Sociedade de Advogados
**Horário:** Segunda a sexta, 8h às 18h
**Site atual:** https://srcatributario.adv.br
**Google Tag Manager:** GTM-NXFD7QHC

---

## 2. Sócios

### Manoel Squiapati
- **OAB/MG:** 205.573
- **Atuação:** Planejamento tributário e estruturação patrimonial
- **Foco:** Reorganizações societárias e operações onde o impacto tributário é determinante para a viabilidade do negócio
- **Foto atual:** https://srcatributario.adv.br/assets/socios/manoel-squiapati.png

### Victor Romano
- **OAB/MG:** 244.504
- **Atuação:** Planejamento tributário e contencioso administrativo e judicial
- **Foco:** Análise de cobranças que podem ser questionadas e defesa de empresas autuadas perante a Receita Federal e fazendas estaduais
- **Foto atual:** https://srcatributario.adv.br/assets/socios/victor-romano.png

### Bruno Chagas
- **OAB/MG:** 213.733
- **Atuação:** Holding familiar, planejamento sucessório e contencioso judicial
- **Foco:** Estruturação jurídica de grupos empresariais, organização patrimonial, planejamento de sucessão
- **Foto atual:** https://srcatributario.adv.br/assets/socios/bruno-chagas.png

> **Nota:** O nome "Afonso Neto" aparece na razão social do escritório mas não terá perfil individual no site.

---

## 3. Público-Alvo

Empresários e sócios de empresas do Triângulo Mineiro e de todo o Brasil, com faturamento a partir de R$ 3 milhões/ano. Pessoas que tomam decisões estratégicas sobre o negócio e buscam entender se estão pagando mais imposto do que deveriam.

**Perfil de comunicação:** linguagem acessível, sem juridiquês desnecessário, tom direto e sóbrio. O público não é jurídico — são donos de empresa que precisam entender o valor do trabalho sem precisar de um dicionário.

---

## 4. Objetivo do Site

O site é a principal ferramenta de aquisição orgânica do escritório. Deve:

1. **Educar** o empresário sobre a importância de ter uma estrutura tributária revisada
2. **Demonstrar autoridade** técnica do escritório sem arrogância
3. **Ranquear bem no Google** para buscas relacionadas a advocacia tributária, planejamento tributário, holding patrimonial, contencioso tributário
4. **Converter visitantes em contatos** via formulário ou WhatsApp
5. **Servir de hub de conteúdo** com blog atualizado frequentemente

---

## 5. Identidade Visual

### Paleta de Cores
- **Azul petróleo** — Cor principal. Header, backgrounds de seções de destaque, elementos de autoridade.
- **Grafite** — Textos, elementos secundários, fundos de contraste.
- **Dourado** — Acentos, CTAs, ícones, linhas decorativas, detalhes de sofisticação.
- **Branco / Off-white** — Backgrounds de seções claras, respiro visual.

### Tipografia
- **Títulos:** Fonte serifada (sugestões: Playfair Display, Cormorant Garamond, Libre Baskerville). Transmite tradição, autoridade e sofisticação.
- **Corpo:** Fonte sans-serif limpa e legível (sugestões: Source Sans Pro, DM Sans, Outfit). Garante leitura confortável em blocos de texto.

### Tom Visual
- Profissional, sóbrio, premium
- Inspiração na referência visual fornecida (layout com respiro, cards de advogados, seções bem definidas, elementos dourados)
- Sem exagero visual — nada de animações excessivas, ícones cartunizados ou elementos que pareçam template genérico
- Imagens de alta qualidade (fotografia do escritório quando disponível, ou imagens conceituais de ambiente jurídico/corporativo)

---

## 6. Stack Técnica

- **Framework:** Next.js 14+ (App Router)
- **Estilização:** Tailwind CSS
- **Blog:** MDX (artigos versionados no repositório) — pode migrar para headless CMS no futuro
- **Deploy:** Vercel
- **Domínio:** srcatributario.adv.br
- **Analytics:** Google Tag Manager (já configurado: GTM-NXFD7QHC)

---

## 7. Estrutura de Páginas e Rotas

```
/                                    → Home
/servicos                            → Página-mãe (visão geral de todos os serviços)
/servicos/planejamento-tributario     → Página dedicada
/servicos/contencioso-tributario      → Página dedicada
/servicos/holding-patrimonial         → Página dedicada
/servicos/planejamento-sucessorio     → Página dedicada
/sobre                               → Sobre o escritório + equipe
/blog                                → Listagem de artigos
/blog/[slug]                         → Artigo individual
/contato                             → Formulário + dados de contato
```

---

## 8. Conteúdo por Página

### 8.1 Home (`/`)

A home é a página mais importante para SEO e para a primeira impressão. Deve educar o visitante e criar urgência.

**Seções:**

1. **Hero**
   - Headline principal: comunicar inteligência tributária / revisão da estrutura fiscal
   - Subheadline: explicar em uma frase o que o escritório faz
   - CTA primário: "Fale com o escritório" (WhatsApp ou formulário)
   - CTA secundário: "Conheça nossa atuação" (âncora para seção de serviços)

2. **Seção educativa — "Por que revisar sua estrutura tributária"**
   - Texto que explica por que a maioria das empresas paga mais imposto do que deveria
   - Abordagem: a estrutura que funcionava com R$ 3M de faturamento não funciona com R$ 15M
   - 4 pilares em cards: regime tributário, tributação sobre distribuição de lucros, créditos fiscais, proteção patrimonial
   - Tom: educativo, sem vender diretamente

3. **Serviços em destaque**
   - Cards dos 4 serviços principais com ícone, título e descrição curta
   - Link para a página dedicada de cada serviço

4. **Equipe (resumo)**
   - Foto + nome + especialidade de cada sócio
   - Link para página /sobre

5. **Setores de atuação**
   - Grid com os 6 setores: agronegócio, saúde, construção civil, transporte e logística, serviços, indústria e comércio
   - Cada um com imagem e descrição curta

6. **Metodologia — "Como trabalhamos"**
   - As 4 etapas: entendimento do negócio → análise tributária → orientação e estruturação → acompanhamento

7. **FAQ**
   - Perguntas frequentes em accordion (já existem 5 perguntas na landing atual)

8. **CTA final + Formulário de contato resumido**
   - Repetir o CTA principal
   - Formulário simplificado ou link direto para /contato

### 8.2 Serviços (`/servicos`)

Página-mãe com visão geral dos 4 serviços, cada um com:
- Título
- Descrição de 2-3 parágrafos
- Link para a página dedicada

### 8.3 Planejamento Tributário (`/servicos/planejamento-tributario`)

**Keyword alvo:** "planejamento tributário para empresas", "consultoria tributária"

**Conteúdo:**
- O que é planejamento tributário (linguagem acessível)
- Por que é diferente do trabalho do contador
- O que o SRCA analisa: regime de tributação, composição societária, operações com impacto fiscal, distribuição de resultados
- Para quem é indicado
- Como funciona o processo
- CTA: formulário ou WhatsApp

### 8.4 Contencioso Tributário (`/servicos/contencioso-tributario`)

**Keyword alvo:** "advogado contencioso tributário", "defesa auto de infração", "empresa autuada"

**Conteúdo:**
- O que é contencioso tributário
- Situações comuns: autuação fiscal, cobrança indevida, execução fiscal
- Como o SRCA atua na defesa (administrativo e judicial)
- Diferença entre contencioso administrativo e judicial
- CTA

### 8.5 Holding Patrimonial (`/servicos/holding-patrimonial`)

**Keyword alvo:** "holding familiar", "holding patrimonial", "proteção de patrimônio"

**Conteúdo:**
- O que é uma holding e para que serve
- Quando faz sentido criar uma
- Benefícios: proteção patrimonial, organização societária, eficiência tributária na transmissão
- Riscos de não planejar
- CTA

### 8.6 Planejamento Sucessório (`/servicos/planejamento-sucessorio`)

**Keyword alvo:** "planejamento sucessório empresarial", "sucessão patrimonial"

**Conteúdo:**
- O que é planejamento sucessório
- Por que é urgente mesmo que pareça distante
- Custo tributário de não planejar (ITCMD, inventário, conflitos)
- Como o SRCA estrutura a sucessão
- CTA

### 8.7 Sobre (`/sobre`)

**Seções:**
1. História e posicionamento do escritório
2. Perfil completo de cada sócio (foto, OAB, formação, atuação, foco)
3. Metodologia de trabalho (as 4 etapas)
4. Valores / filosofia de trabalho

### 8.8 Blog (`/blog`)

**Estrutura:**
- Listagem com card de cada artigo: título, data, autor, categoria, excerpt
- Paginação
- Filtro por categoria (opcional na v1)

**Categorias sugeridas:**
- Planejamento Tributário
- Contencioso
- Holding e Sucessão
- Reforma Tributária
- Gestão Fiscal

**Artigos iniciais sugeridos (5):**
1. "Sua empresa cresceu — seu regime tributário acompanhou?" (keyword: trocar regime tributário)
2. "Holding familiar: o que é, quando faz sentido e quando não faz" (keyword: holding familiar)
3. "Empresa autuada pela Receita Federal: o que fazer nos primeiros 30 dias" (keyword: auto de infração receita federal)
4. "Planejamento sucessório: por que esperar custa mais caro" (keyword: planejamento sucessório)
5. "Qual a diferença entre o trabalho do contador e do advogado tributário?" (keyword: advogado tributário x contador)

### 8.9 Contato (`/contato`)

**Conteúdo:**
- Texto breve: "Uma primeira conversa com o escritório"
- Formulário com campos: nome, empresa, e-mail, telefone/WhatsApp, setor de atuação, faturamento anual, regime tributário atual, contexto adicional (opcional)
- Dados de contato: endereço, WhatsApp, e-mail, horário
- Mapa incorporado (Google Maps)
- Aviso LGPD e Provimento 94/2000 da OAB

---

## 9. SEO Técnico — Requisitos Obrigatórios

- Metadata dinâmica por página (title, description, Open Graph, Twitter Cards)
- Schema markup JSON-LD: `Organization`, `LegalService` (em cada página de serviço), `Article` (no blog), `Person` (nos advogados), `FAQPage` (na home)
- Sitemap.xml gerado automaticamente pelo Next.js
- robots.txt configurado
- Canonical URLs em todas as páginas
- Um único H1 por página, hierarquia H2/H3 correta
- Alt text em todas as imagens
- URLs amigáveis (slugs em português, sem acentos)
- Core Web Vitals otimizados: next/image para todas as imagens, fontes com display swap, sem layout shift
- Internal linking: artigos do blog linkam para páginas de serviço e vice-versa
- Breadcrumbs nas páginas de serviço e blog

---

## 10. Funcionalidades Técnicas

- **Formulário de contato:** envio via API (Resend, SendGrid, ou similar). Notificação para contato@srcatributario.adv.br
- **Botão flutuante do WhatsApp:** presente em todas as páginas
- **Responsivo:** mobile-first, breakpoints para tablet e desktop
- **Google Tag Manager:** integrado desde o deploy inicial
- **Acessibilidade:** WCAG 2.1 nível AA básico (contraste, navegação por teclado, aria-labels)

---

## 11. Assets Disponíveis

- Logo: https://srcatributario.adv.br/assets/imagery/logo/srca-logo-cropped.png
- Foto Manoel Squiapati: https://srcatributario.adv.br/assets/socios/manoel-squiapati.png
- Foto Victor Romano: https://srcatributario.adv.br/assets/socios/victor-romano.png
- Foto Bruno Chagas: https://srcatributario.adv.br/assets/socios/bruno-chagas.png
- Imagens de setores: disponíveis em https://srcatributario.adv.br/assets/setores/
- Background: https://srcatributario.adv.br/assets/imagery/bg-desk.jpg

> **Nota:** Avaliar necessidade de novas fotos profissionais dos sócios e do escritório para o novo site.

---

## 12. Compliance Jurídico

Todo o site deve conter:

- Disclaimer: "Esta comunicação tem caráter meramente informativo e não configura oferta de serviços advocatícios ou consultoria jurídica formal, em conformidade com o Provimento 94/2000 da OAB."
- Aviso LGPD no formulário de contato
- Página ou seção de Política de Privacidade
- Nenhuma promessa de resultado em nenhuma página

---

## 13. Cronograma Sugerido de Desenvolvimento

| Sprint | Escopo | Estimativa |
|--------|--------|------------|
| 1 | Scaffold Next.js + Tailwind, layout base (header, footer, nav), design system (cores, tipografia, componentes reutilizáveis), configuração SEO | Dia 1-2 |
| 2 | Home completa com todas as seções | Dia 3-4 |
| 3 | Páginas de serviço (mãe + 4 individuais) | Dia 5-6 |
| 4 | Página Sobre + Página Contato (com formulário funcional) | Dia 7 |
| 5 | Blog: infraestrutura MDX + listagem + página de artigo | Dia 8-9 |
| 6 | 5 artigos iniciais do blog | Dia 10 |
| 7 | Testes (Lighthouse, responsividade, acessibilidade), polimento, deploy na Vercel | Dia 11-12 |
