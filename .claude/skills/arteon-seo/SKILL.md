---
name: arteon-seo
description: >
  Comprehensive SEO system for Arteon Agency - meta optimization, schema markup,
  Core Web Vitals, technical SEO, keyword research, AI search optimization,
  hreflang for 16 locales. Combines 6 skills into one deep-dive knowledge base.
---

# Skill: arteon-seo

Kompletny system SEO dla Arteon Agency — od meta tagów po AI search optimization.

**Łączy:** arteon-ai-seo-intelligence, arteon-seo-optimization, arteon-technical-seo, arteon-seo-research-intelligence, arteon-seo-content, arteon-content-seo

## Kiedy używać

- Tworzenie/edycja meta tagów
- Schema markup implementation
- Core Web Vitals optimization
- Keyword research
- Technical SEO (sitemap, robots.txt, hreflang)
- AI search optimization (GEO)
- SEO audits

---

# CZĘŚĆ 1: META TAGS

## Quick Reference

| Element          | Limit          | Target               |
| ---------------- | -------------- | -------------------- |
| Meta title       | 50-60 znaków   | Keyword na początku  |
| Meta description | 150-160 znaków | Keyword + CTA        |
| H1               | 1 per page     | Zawiera keyword      |
| Alt text         | < 125 znaków   | Opisowy, z keywordem |

## Title Tag (50-60 chars)

```typescript
// ✅ Good - keyword front-loaded, benefit, 60 chars
'Darmowy generator palety kolorów - twórz harmonijne palety';

// ❌ Bad - "online" (bezwartościowe), keyword na końcu
'Narzędzie online do tworzenia palet - generator kolorów';

// ❌ Bad - brand first
'Arteon | Generator palety kolorów online';
```

### Title Formula

```
[Primary Keyword] - [Benefit/Feature]
```

## Meta Description (150-160 chars)

```typescript
// ✅ Good - benefit, CTA, trust signal
'Stwórz paletę kolorów w kilka sekund. Bez rejestracji, bez limitu. Eksportuj do CSS, Tailwind, SCSS.';

// ❌ Bad - generic, no CTA
'Generator palety kolorów online. Narzędzie do tworzenia palet.';
```

### Description Formula

```
[Benefit] + [Features] + [Trust Signal]
```

## Forbidden Words in Meta

| ❌ Don't      | Why                      |
| ------------- | ------------------------ |
| online        | Oczywiste, zero wartości |
| najlepszy     | Pusty claim              |
| profesjonalny | Generic                  |
| kompleksowy   | Korpo                    |

## Power Words (use these)

| ✅ Do           | Impact             |
| --------------- | ------------------ |
| Darmowy         | Trust signal       |
| Bez rejestracji | Friction reduction |
| Natychmiast     | Speed              |
| Prosty          | Ease of use        |

## Meta dla realizacji / usług (NIE narzędzi)

W meta tagach realizacji i usług:

- Używaj fraz które ludzie FAKTYCZNIE wyszukują (nie metryki techniczne)
- ❌ "98/100 PageSpeed" — klient nie rozumie co to znaczy
- ✅ "szybka strona widoczna w Google" — korzyść w języku klienta
- Opisuj CO DAJE wynik, nie sam wynik
- Metryki techniczne (PageSpeed, Core Web Vitals, czas ładowania) NIE SĄ keywordami
  chyba że strona jest o tych metrykach

Przykład:

- ❌ "Strona dla firmy budowlanej — 98/100 PageSpeed, 8 dni"
- ✅ "Strona dla firmy budowlanej — szybka, widoczna w Google, z formularzem wyceny"

## Meta descriptions — pełne zdania, nie listy (KRYTYCZNE)

Równoważniki zdań po przecinkach w meta = oczywisty wzorzec AI.
Meta description to pełne zdanie, nie lista cech.

```typescript
// ❌ AI-pattern: lista rzeczownikowa
'Blog firmowy, formularz wyceny, kolory WCAG, szybkie ładowanie. Zobacz.';

// ✅ Ludzkie: pełne zdanie z kontekstem
'Sprawdź realizację strony z firmowym blogiem, dedykowanym formularzem wycen i ekspresowym czasem ładowania na wszystkich urządzeniach.';
```

---

# CZĘŚĆ 2: KEYWORD STRATEGY

## Keyword Placement (Priority Order)

1. **Meta title** — beginning (most important)
2. **H1** — single, with primary keyword
3. **First 100 words** — natural integration
4. **H2/H3 subheadings** — secondary keywords
5. **Alt text** — descriptive with keyword
6. **URL slug** — clean, keyword-rich

## Tool Keywords (PL)

| Tool            | Primary Keyword          | Secondary                         |
| --------------- | ------------------------ | --------------------------------- |
| Color palette   | generator palety kolorów | paleta kolorów, harmonijne kolory |
| Word counter    | licznik słów             | licznik znaków, ile słów          |
| Meta checker    | sprawdzanie meta tagów   | SEO checker, meta validator       |
| WCAG contrast   | sprawdzanie kontrastu    | kontrast WCAG, accessibility      |
| Image converter | konwerter obrazów        | jpg na webp, zmiana formatu       |

## Dłuższe frazy kluczowe = lepsze

- "Projekt logo" > "Logo" (więcej kontekstu, lepsza fraza)
- "firma zajmująca się wykończeniem mieszkań" > "firma wykończeniowa"
  (long-tail, bardziej naturalne, lepsze dopasowanie do intencji)

Nie skracaj fraz kluczowych. Naturalny, rozbudowany opis = więcej
potencjalnych long-tail keywords.

## Natural Integration

```
❌ "Generator palety kolorów to generator do generowania palet"
   (keyword stuffing)

✅ "Generator palety kolorów tworzy harmonijne zestawienia w sekundy"
   (natural, benefit-focused)
```

## Content Length Targets

| Type         | Target         | Minimum |
| ------------ | -------------- | ------- |
| Tool page    | 800-1200 słów  | 500     |
| Blog article | 1400-2000 słów | 1000    |
| Service page | 1000-1500 słów | 700     |

---

# CZĘŚĆ 3: SCHEMA MARKUP

## SoftwareApplication (Tools)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Generator palety kolorów",
  "alternateName": ["Kreator palet", "Color palette generator"],
  "description": "Darmowy generator palety kolorów z 9 typami harmonii",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "PLN"
  },
  "featureList": ["9 typów harmonii kolorów", "Eksport do CSS, Tailwind, SCSS", "Bez rejestracji"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "156"
  }
}
```

## HowTo (Tool Instructions)

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Jak stworzyć paletę kolorów",
  "description": "Przewodnik po tworzeniu palety kolorów",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Wybierz kolor bazowy",
      "text": "Kliknij na color picker i wybierz główny kolor."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Wybierz harmonię",
      "text": "Wybierz typ harmonii: analogiczna, komplementarna, triadyczna."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Eksportuj paletę",
      "text": "Kliknij przycisk eksportu i wybierz format (CSS, Tailwind, SCSS)."
    }
  ]
}
```

## BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://arteon.pl" },
    { "@type": "ListItem", "position": 2, "name": "Narzędzia", "item": "https://arteon.pl/narzedzia" },
    { "@type": "ListItem", "position": 3, "name": "Generator palety kolorów" }
  ]
}
```

## Article (Blog)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Jak dobrać kolory do strony internetowej",
  "description": "Praktyczny przewodnik po teorii koloru",
  "author": {
    "@type": "Organization",
    "name": "Arteon Agency"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-06-10"
}
```

## ⚠️ Deprecated Schemas (DO NOT USE)

| Schema             | Status                  | Note                           |
| ------------------ | ----------------------- | ------------------------------ |
| FAQPage            | ❌ Deprecated Sept 2023 | Only for government/healthcare |
| HowTo rich results | ❌ Deprecated Sept 2023 | Schema OK, but no rich results |

---

# CZĘŚĆ 4: CORE WEB VITALS (2025)

## Thresholds

| Metric                              | Good    | Needs Improvement | Poor    |
| ----------------------------------- | ------- | ----------------- | ------- |
| **LCP** (Largest Contentful Paint)  | ≤ 2.5s  | 2.5s - 4s         | > 4s    |
| **INP** (Interaction to Next Paint) | ≤ 200ms | 200ms - 500ms     | > 500ms |
| **CLS** (Cumulative Layout Shift)   | ≤ 0.1   | 0.1 - 0.25        | > 0.25  |

**⚠️ INP replaced FID in March 2024.**

## LCP Optimization

```tsx
// Preload LCP image
<link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />

// Priority loading in Next.js
<Image src="/hero.webp" priority alt="Hero" />

// Avoid render blocking
<Script strategy="lazyOnload" src="/analytics.js" />
```

## INP Optimization

```tsx
// Debounce handlers
const debouncedHandler = useDebouncedCallback(handler, 300);

// Use transitions for expensive updates
const [isPending, startTransition] = useTransition();
startTransition(() => setExpensiveState(value));

// Break up long tasks
await new Promise((resolve) => setTimeout(resolve, 0));
```

## CLS Optimization

```tsx
// ✅ Always set dimensions
<Image src="/photo.webp" width={800} height={600} alt="Photo" />

// ✅ Aspect ratio for responsive
<div className="aspect-video">
  <Image src="/video.webp" fill alt="Video" />
</div>

// ✅ Skeleton loading
{isLoading ? <Skeleton className="h-48" /> : <Content />}
```

---

# CZĘŚĆ 5: TECHNICAL SEO

## Sitemap Configuration

```javascript
// next-sitemap.config.cjs
module.exports = {
  siteUrl: 'https://arteon.pl',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/404'],

  alternateRefs: [
    { href: 'https://arteon.pl', hreflang: 'pl' },
    { href: 'https://arteon.pl/en', hreflang: 'en' },
    { href: 'https://arteon.pl/de', hreflang: 'de' },
    // ... all 16 locales
  ],

  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
};
```

## Robots.txt

```txt
# robots.txt
User-agent: *
Allow: /
Disallow: /api/

# AI Crawlers (allow for GEO)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://arteon.pl/sitemap.xml
```

## Canonical URLs

```tsx
// In Next.js metadata
export const metadata = {
  alternates: {
    canonical: 'https://arteon.pl/narzedzia/generator-palety',
  },
};
```

## Security Headers (vercel.json)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

## IndexNow (Instant Indexing)

```javascript
// scripts/indexnow-notify.cjs
const urls = ['https://arteon.pl/new-page'];

await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  body: JSON.stringify({
    host: 'arteon.pl',
    key: process.env.INDEXNOW_KEY,
    urlList: urls,
  }),
});
```

---

# CZĘŚĆ 6: HREFLANG (16 LOCALES)

## Implementation

```html
<link rel="alternate" hreflang="pl" href="https://arteon.pl/narzedzia/generator-palety-kolorow" />
<link rel="alternate" hreflang="en" href="https://arteon.pl/en/tools/color-palette-generator" />
<link rel="alternate" hreflang="de" href="https://arteon.pl/de/werkzeuge/farbpaletten-generator" />
<link rel="alternate" hreflang="es" href="https://arteon.pl/es/herramientas/generador-de-paletas-de-colores" />
<link rel="alternate" hreflang="x-default" href="https://arteon.pl/en/tools/color-palette-generator" />
```

## Locale URL Mapping

| Locale     | Tools Path         | Example                                            |
| ---------- | ------------------ | -------------------------------------------------- |
| pl         | `/narzedzia`       | `/narzedzia/generator-palety-kolorow`              |
| en         | `/en/tools`        | `/en/tools/color-palette-generator`                |
| de         | `/de/werkzeuge`    | `/de/werkzeuge/farbpaletten-generator`             |
| es         | `/es/herramientas` | `/es/herramientas/generador-de-paletas-de-colores` |
| fr         | `/fr/outils`       | `/fr/outils/generateur-de-palettes-de-couleurs`    |
| pt         | `/pt/ferramentas`  | `/pt/ferramentas/gerador-de-paletas-de-cores`      |
| it         | `/it/strumenti`    | `/it/strumenti/generatore-di-palette-di-colori`    |
| nl         | `/nl/tools`        | `/nl/tools/kleurenpalet-generator`                 |
| (+ 8 more) | ...                | ...                                                |

## All 16 Locales

```
pl, en, de, es, fr, pt, it, ro, nl, hu, cs, sv, da, no, fi, el
```

---

# CZĘŚĆ 7: AI SEARCH OPTIMIZATION (GEO)

## llms.txt

```txt
# Arteon Agency
> Agencja kreatywna oferująca projektowanie stron, SEO, grafikę

## Darmowe narzędzia
- Generator palety kolorów: /narzedzia/generator-palety-kolorow
- Konwerter obrazów: /narzedzia/konwerter-jpg-na-webp
- Licznik słów: /narzedzia/licznik-slow-i-znakow

## Usługi
- Strony internetowe: /uslugi/strony-internetowe
- SEO: /uslugi/seo
- Grafika: /uslugi/grafika
```

## Content for AI Citability

```markdown
<!-- ✅ Good - citable, specific, factual -->

Generator palety kolorów Arteon obsługuje 9 typów harmonii:
analogiczną, komplementarną, triadyczną, tetrady, monochromatyczną,
split-komplementarną, kwadratową, złoty podział i losową.

<!-- ❌ Bad - vague, not citable -->

Nasz generator oferuje wiele różnych opcji harmonii kolorów.
```

## AI Plugin Manifest

```json
// public/.well-known/ai-plugin.json
{
  "schema_version": "v1",
  "name_for_human": "Arteon Agency Tools",
  "name_for_model": "arteon_tools",
  "description_for_human": "Free online design tools",
  "description_for_model": "Free tools for color palettes, image conversion, SEO checking",
  "api": {
    "type": "none"
  }
}
```

---

# CZĘŚĆ 8: IMAGE SEO

## Alt Text

```
✅ "Generator palety kolorów - interfejs z 5 kolorami harmonicznymi"
   (descriptive, keyword-rich)

❌ "image1"
   (not descriptive)

❌ "generator palety kolorów darmowy online narzędzie"
   (keyword stuffing)
```

## File Names

```
✅ color-palette-generator.webp
✅ generator-palety-kolorow-pl.webp

❌ IMG_20240115.webp
❌ screenshot.png
```

## Image Optimization

```typescript
// next.config.ts
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
},
```

## OG Image Requirements

- Dimensions: **1200x630px**
- Format: WebP or PNG
- Quality: 85%
- Include: Title, description, branding

---

# CZĘŚĆ 9: INTERNAL LINKING

## Link Structure

```
Tool page → Related tools (carousel)
Tool page → Service page (CTA)
Blog → Tool mentions (inline links)
Blog → Service pages
Blog → Related articles
```

## Anchor Text

```
✅ "generator palety kolorów" (descriptive)
✅ "sprawdź nasze usługi SEO" (descriptive with context)

❌ "kliknij tutaj" (generic)
❌ "więcej" (generic)
❌ "link" (generic)
```

## Internal Links per Page

| Page Type    | Target Links |
| ------------ | ------------ |
| Tool page    | 3-5          |
| Blog article | 5-10         |
| Service page | 3-5          |

---

# CZĘŚĆ 10: E-E-A-T SIGNALS

## Experience

- Real examples from projects
- Practical, actionable tips
- Tool demonstrations
- Before/after comparisons

## Expertise

- Accurate, up-to-date information
- Technical depth where appropriate
- Industry-specific knowledge
- Cite sources for statistics

## Authority

- Quality internal linking
- Consistent publishing
- Clear brand identity
- Professional design

## Trust

- Contact information visible
- Privacy policy accessible
- Transparent pricing (no hidden costs)
- Secure site (HTTPS)
- Fast response promise (24h)

---

# CZĘŚĆ 11: RANKING FACTORS (2025)

## Priority Order

1. **Quality Content** — depth, E-E-A-T, unique value
2. **Backlinks** — quality over quantity
3. **Technical SEO** — speed, mobile, CWV
4. **Keywords** — title, H1, first 100 words
5. **User Experience** — dwell time, low bounce
6. **Schema Markup** — enhanced results
7. **CTR** — click-through rate from SERP

## AI Search Factors (GEO)

- Factual, citable content
- Clear answers to questions
- Structured data
- llms.txt availability
- AI crawler accessibility

---

# CZĘŚĆ 12: SEO FILES IN ARTEON

| File                                     | Purpose                |
| ---------------------------------------- | ---------------------- |
| `next-sitemap.config.cjs`                | Sitemap generation     |
| `public/robots.txt`                      | Crawler rules          |
| `public/.well-known/ai-plugin.json`      | AI plugin manifest     |
| `public/llms.txt`                        | AI search optimization |
| `app/layout.tsx`                         | Global metadata        |
| `lib/seo/schema.ts`                      | Schema generation      |
| `data/{locale}/tools/*.json`             | Tool page metadata     |
| `scripts/indexnow-notify.cjs`            | Instant indexing       |
| `scripts/postbuild-sitemap-hreflang.cjs` | Hreflang generation    |

---

# CZĘŚĆ 13: SEO CHECKLISTS

## Per Page Checklist

- [ ] Meta title 50-60 chars, keyword FIRST
- [ ] Meta description 150-160 chars, keyword + CTA
- [ ] No "online" in meta tags
- [ ] One H1 with primary keyword
- [ ] Keyword in first 100 words
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Internal links (3-5)
- [ ] Schema markup present
- [ ] Canonical URL set
- [ ] Hreflang for all locales

## Site-wide Checklist

- [ ] XML sitemap accessible (`/sitemap.xml`)
- [ ] Robots.txt configured
- [ ] Hreflang for all 16 locales
- [ ] HTTPS everywhere
- [ ] Mobile-friendly (responsive)
- [ ] Core Web Vitals passing (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- [ ] AI crawlers allowed
- [ ] llms.txt available
- [ ] No broken links
- [ ] Security headers set

## Pre-publish SEO Review

- [ ] Keyword density natural (1-2%)
- [ ] No duplicate content
- [ ] Images optimized (WebP, proper sizes)
- [ ] Schema validates (Rich Results Test)
- [ ] Page loads fast (< 3s)
- [ ] Content meets length targets

---

# CZĘŚĆ 14: MONITORING

## Tools

- **Google Search Console** — index coverage, keywords, CWV
- **PageSpeed Insights** — Core Web Vitals
- **Lighthouse** — performance audits
- **Rich Results Test** — schema validation
- **Ahrefs/Semrush** — backlinks, rankings (if available)

## Key Metrics to Track

| Metric                 | Target     |
| ---------------------- | ---------- |
| Organic traffic growth | +20%/month |
| Click-through rate     | >3%        |
| Average position       | Top 10     |
| Core Web Vitals        | All green  |
| Index coverage         | 100%       |

## Regular Audits

- Weekly: Check GSC for errors
- Monthly: Review keyword rankings
- Quarterly: Full technical audit
- After deploys: Verify sitemaps updated

---

# QUICK REFERENCE

## Meta Tag Lengths

| Element     | Length        |
| ----------- | ------------- |
| Title       | 50-60 chars   |
| Description | 150-160 chars |

## Core Web Vitals (Good)

| Metric | Threshold |
| ------ | --------- |
| LCP    | ≤ 2.5s    |
| INP    | ≤ 200ms   |
| CLS    | ≤ 0.1     |

## Commands

```bash
# Generate sitemap
npm run postbuild

# Validate JSON
node -e "JSON.parse(require('fs').readFileSync('data/pl/tools/x.json'))"

# Notify IndexNow
node scripts/indexnow-notify.cjs

# Run Lighthouse
npx lighthouse https://arteon.pl --view
```
