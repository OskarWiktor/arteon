# CLAUDE.md — Arteon Agency Project Guide

> Read this file **in full** before starting any task. It contains all project rules, architecture decisions, and constraints.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack & Dependencies](#tech-stack--dependencies)
3. [Project Structure](#project-structure)
4. [Localization (i18n)](#localization-i18n)
5. [Tools System](#tools-system)
6. [Data Architecture](#data-architecture)
7. [Routing & App Structure](#routing--app-structure)
8. [Sitemap & SEO](#sitemap--seo)
9. [Styling & Design System](#styling--design-system)
10. [Code Conventions](#code-conventions)
11. [Build & Scripts](#build--scripts)
12. [Content Rules](#content-rules)
13. [Protected Files & Forbidden Actions](#protected-files--forbidden-actions)
14. [Task Workflow](#task-workflow)
15. [Known Issues & Context](#known-issues--context)

---

## Project Overview

**Arteon Agency** — a Polish web development and digital marketing agency website. The site is multilingual (16 locales), features 92 free tools (converters, generators, checkers), a blog, services pages, portfolio, and static pages.

- **Domain:** `https://www.arteonagency.pl`
- **Deployment:** Vercel
- **Primary locale:** PL (Polish) — default, no URL prefix
- **Global locale:** EN (English) — most comprehensive version
- **Contact:** kontakt@arteonagency.pl, +48 516 466 255

---

## Tech Stack & Dependencies

### Core

| Technology   | Version | Notes                                 |
| ------------ | ------- | ------------------------------------- |
| Next.js      | 15.3.6  | App Router, `next dev --turbopack`    |
| React        | 19.2.1  |                                       |
| TypeScript   | 5.x     | Strict mode enabled                   |
| Tailwind CSS | 4       | With PostCSS (`@tailwindcss/postcss`) |
| Node.js      | 18+     | Required minimum                      |

### Key Dependencies

- **Icons:** `react-icons` (primarily `react-icons/ri` — Remix Icons). **Do NOT use `lucide-react`.**
- **Image processing:** `sharp` (server), `heic2any`, `utif2`, `gifenc` (client converters)
- **PDF:** `pdfjs-dist`, `jspdf`
- **QR codes:** `qrcode`
- **Text processing:** `marked`, `turndown`, `turndown-plugin-gfm`, `js-yaml`
- **Validation:** `zod`
- **Analytics:** `@vercel/analytics`, `@vercel/speed-insights`
- **SEO:** `next-sitemap` (postbuild)

### Dev Dependencies

- **Linting:** ESLint 9 (with `@next/eslint-plugin-next`, `jsx-a11y`, `security`, `sonarjs`, `unused-imports`, `react-hooks`, `promise`, `import`)
- **Formatting:** Prettier 3 (with `prettier-plugin-tailwindcss`)
- **Analysis:** `@next/bundle-analyzer`, `knip`
- **Git hooks:** `husky`, `lint-staged`

### Import Aliases

```
@/* → ./*
```

Example: `import { foo } from '@/lib/tools/bar'`

---

## Project Structure

```
arteon/
├── app/                          # Next.js App Router
│   ├── (pl)/                     # PL locale (default, no URL prefix)
│   │   ├── page.tsx              # Homepage
│   │   ├── narzedzia/            # Tools index + individual tool pages
│   │   │   └── (tools)/          # Route group for tools
│   │   ├── uslugi/               # Services (PL-only)
│   │   ├── realizacje/           # Portfolio/projects (PL-only)
│   │   ├── edukacja/             # Blog/education (PL-only)
│   │   ├── o-nas/                # About (with FAQ, "Dołącz do sieci")
│   │   ├── kontakt/              # Contact
│   │   ├── polityka-prywatnosci/ # Privacy policy
│   │   ├── regulamin/            # Terms of service
│   │   └── mapa-strony/          # Sitemap page
│   ├── en/                       # EN locale (96 pages)
│   ├── de/                       # DE locale (96 pages)
│   ├── es/, fr/, pt/, it/        # Other 7-locale group
│   ├── ro/, nl/, hu/             # Newer 3-locale group
│   ├── cs/, sv/, da/, no/, fi/, el/ # Newest 6-locale group
│   ├── globals.css               # Global styles + Tailwind theme
│   └── layout.tsx                # Root layout
├── components/
│   ├── ui/                       # Reusable UI (Button, Badge, Tooltip, Carousel, etc.)
│   ├── sections/                 # Page sections
│   │   └── tools/                # Tool components (converters, generators, etc.)
│   │       ├── ToolPageRenderer.tsx      # Universal tool page renderer
│   │       ├── DynamicToolRenderer.tsx   # Dynamic tool component loader
│   │       ├── ImageFormatConverter/     # Image format conversion tool
│   │       ├── UnitConverter/            # Unit conversion tool
│   │       ├── TextFormatConverter/      # Text format conversion tool
│   │       ├── converters/              # 64 individual converter wrappers
│   │       └── unit-wrappers/           # 17 unit converter wrappers
│   ├── shared/                   # Navigation, Footer, Breadcrumbs
│   └── systems/                  # System components (FocusManager)
├── data/
│   ├── {locale}/                 # Per-locale data (16 directories)
│   │   ├── dictionary.json       # UI translations (nav, footer, forms, etc.)
│   │   ├── tools/                # 92 tool data JSON files per locale
│   │   ├── tools-ui/             # 12 tool UI translation JSON files
│   │   └── pages/                # Static page data (about, contact, etc.)
│   └── pl/
│       ├── blog/                 # Blog articles (split by category)
│       ├── calculator/           # Pricing calculator steps
│       ├── projects.json         # Portfolio projects
│       └── testimonials.json     # Testimonials
├── lib/
│   ├── i18n/                     # Internationalization
│   │   ├── locales.ts            # LOCALE_CONFIG, exports dictionaries
│   │   ├── locale-config.ts      # Locale configuration (paths, labels)
│   │   ├── tool-registry.ts      # All 92 tools × 16 locales registry (~400KB)
│   │   ├── client-dictionary.ts  # Client-side dictionary loader
│   │   ├── get-dictionary.ts     # Server-side dictionary with Zod schema
│   │   └── detect-locale.ts      # Locale detection from pathname
│   ├── LocaleContext.tsx          # React context for locale/dictionary
│   ├── tools/                    # Tool utility functions
│   ├── redirects.ts              # All 301 redirects
│   └── seo/                      # SEO utilities
├── types/                        # TypeScript type definitions
│   ├── locale.ts                 # Locale, LocaleConfig types
│   ├── tool-page.ts              # ToolPageData, ToolContentBlock types
│   └── tools/                    # Tool-specific types
├── hooks/                        # Custom React hooks
├── scripts/                      # Build/postbuild scripts
│   ├── postbuild-sitemap-hreflang.cjs  # Splits sitemap into per-locale files
│   ├── indexnow-notify.cjs       # IndexNow notifications
│   ├── split-blog.cjs            # Splits blog data by category
│   └── generate-search-index.cjs # Generates search index
├── docs/                         # Project documentation
│   ├── INSTRUCTIONS.md           # Full project instructions (READ FIRST)
│   ├── CONTENT_INSTRUCTIONS.md   # Content/article writing rules
│   ├── TASKS.md                  # Active tasks
│   ├── DONE_TASKS.md             # Completed tasks archive
│   ├── COMPONENTS_CATALOG.md     # All components catalog
│   ├── HOOKS_CATALOG.md          # All hooks catalog
│   ├── TOOLS_CATALOG.md          # All tools catalog
│   ├── PAGES_CATALOG.md          # All pages catalog
│   ├── BLOG_CATALOG.md           # All blog articles catalog
│   └── PROJECTS_CATALOG.md       # All portfolio projects catalog
├── public/                       # Static assets
│   ├── assets/                   # Images (projects, blog, tools, OG)
│   ├── sitemap*.xml              # Generated sitemaps
│   └── robots.txt                # Generated by next-sitemap
├── next-sitemap.config.cjs       # Sitemap generation config
├── next.config.ts                # Next.js config (CSP, redirects, headers)
└── vercel.json                   # Vercel deployment config (caching, redirects)
```

---

## Localization (i18n)

### 16 Supported Locales

```typescript
type Locale = 'pl' | 'en' | 'de' | 'es' | 'fr' | 'pt' | 'it' | 'ro' | 'nl' | 'hu' | 'cs' | 'sv' | 'da' | 'no' | 'fi' | 'el';
```

### Locale URL Prefixes

| Locale | Tools base path    | About                 | Contact            |
| ------ | ------------------ | --------------------- | ------------------ |
| **pl** | `/narzedzia`       | `/o-nas`              | `/kontakt`         |
| **en** | `/en/tools`        | `/en/about`           | `/en/contact`      |
| **de** | `/de/werkzeuge`    | `/de/ueber-uns`       | `/de/kontakt`      |
| **es** | `/es/herramientas` | `/es/sobre-nosotros`  | `/es/contacto`     |
| **fr** | `/fr/outils`       | `/fr/a-propos`        | `/fr/contact`      |
| **pt** | `/pt/ferramentas`  | `/pt/sobre-nos`       | `/pt/contacto`     |
| **it** | `/it/strumenti`    | `/it/chi-siamo`       | `/it/contatto`     |
| **ro** | `/ro/instrumente`  | `/ro/despre-noi`      | `/ro/contact`      |
| **nl** | `/nl/tools`        | `/nl/over-ons`        | `/nl/contact`      |
| **hu** | `/hu/eszkozok`     | `/hu/rolunk`          | `/hu/kapcsolat`    |
| **cs** | `/cs/nastroje`     | `/cs/o-nas`           | `/cs/kontakt`      |
| **sv** | `/sv/verktyg`      | `/sv/om-oss`          | `/sv/kontakt`      |
| **da** | `/da/vaerktojer`   | `/da/om-os`           | `/da/kontakt`      |
| **no** | `/no/verktoy`      | `/no/om-oss`          | `/no/kontakt`      |
| **fi** | `/fi/tyokalut`     | `/fi/tietoa-meista`   | `/fi/yhteystiedot` |
| **el** | `/el/ergaleia`     | `/el/sxetika-me-emas` | `/el/epikoinonia`  |

### How Localization Works

1. **PL** is the default locale — pages are under `app/(pl)/` route group, URLs have no prefix
2. **Other locales** have explicit directories: `app/en/`, `app/de/`, etc.
3. **Dictionary files** at `data/{locale}/dictionary.json` provide all UI translations
4. **Client-side dictionary** loaded via `LocaleProvider` → accessed via `useDictionary()` hook
5. **Server-side dictionary** loaded in `lib/i18n/get-dictionary.ts` with Zod validation
6. **Tool data** at `data/{locale}/tools/*.json` — 92 files per locale with full content
7. **Tool UI strings** at `data/{locale}/tools-ui/*.json` — 12 files per locale

### Key i18n Files

- `lib/i18n/locales.ts` — Master locale config, dictionary imports, exports for all UI sections
- `lib/i18n/locale-config.ts` — Locale configuration (paths, labels)
- `lib/i18n/tool-registry.ts` — Registry of all 92 tools × 16 locales (~400KB)
- `lib/i18n/client-dictionary.ts` — Client-side dictionary loader (server-only import)
- `lib/LocaleContext.tsx` — React context providing `useLocale()`, `useLocaleConfig()`, `useDictionary()`
- `types/locale.ts` — `Locale`, `LocaleConfig`, `NavigationUi`, `FooterUi` types

### Localization Rules

- **Localization ≠ Translation**: Each locale must be a localized version, NOT a 1:1 mirror translation
- Each locale must vary structure, phrasing, and presentation to avoid being flagged as spam/duplicate
- Consider ALL countries using a given language (e.g., PT covers Portugal + Brazil + Angola; DE covers Germany + Austria + Switzerland; EN is global)
- Add country/region-specific legal and contextual information per locale
- When adding new dictionary keys: update `ClientDictionary` interface in `lib/LocaleContext.tsx` and add translations to all 16 `dictionary.json` files

### JSON Rules for Translation Files

- **UTF-8 without BOM** — all files must be UTF-8 encoded, no BOM bytes
- **No Polish typographic quotes** (`„"`) in JSON — they break the parser. Use `&quot;` or apostrophes
- **No Unicode escape sequences** (`\u2013`, `\u00f9`, etc.) unless absolutely necessary — use actual characters (`–`, `ù`, `è`)
- **Use actual diacritics** — proper characters for each language (ą, ę, ü, ö, etc.)

---

## Tools System

### 92 Tools organized by category:

**Image converters** (47 tools): JPG/PNG/WebP/AVIF/BMP/GIF/HEIC/SVG/TIFF cross-conversions, image-to-base64, base64-to-image, PDF conversions

**Text/data converters** (8 tools): CSV↔JSON, JSON↔XML, JSON↔YAML, HTML↔Markdown

**Unit converters** (17 tools): px/em/rem/pt/vw/cm/mm/inches, bytes, DPI/PPI, Mbps/MBs, hex↔RGB, RGB↔CMYK/HSL, decimal↔binary/hex, Unix timestamp, Tailwind spacing

**Generators & tools** (11 tools): QR code, favicon, color palette, email signature, lorem ipsum, image color extractor, WCAG contrast checker, meta title checker, word counter, JPG/PNG-to-WebP (batch), image editor

**Desktop-only tools** (in route group `(desktop-only)/`): image editor, email signature, favicon, JPG-to-WebP, PNG-to-WebP

### Tool Architecture

```
Tool page request
  → app/{locale}/tools/{slug}/page.tsx      # Imports tool JSON data
    → components/sections/tools/ToolPageRenderer.tsx   # Renders page layout, SEO, content blocks
      → components/sections/tools/DynamicToolRenderer.tsx  # Dynamically loads tool component
        → Specific tool component (e.g., ImageFormatConverter, UnitConverter, etc.)
```

### Tool Data Structure (`data/{locale}/tools/{tool}.json`)

```typescript
interface ToolPageData {
  toolKey: ToolItemKey;
  locale: Locale;
  metadata: { title, description, ogImage, path };
  hero: { title, description, backgroundImage };
  breadcrumbs: { second: {href, label}, third: {href, label} };
  schemas: {
    software: { name, description, featureList, ... };
    howTo: { name, description, steps: [{name, text}] };
  };
  contentBlocks: ToolContentBlock[];  // sectionInfo, sectionBasic, sectionSteps, faq, etc.
  cta?: { title, description, btnOne, btnOneLink, ... };
}
```

### Tool UI Translations (`data/{locale}/tools-ui/*.json`)

12 files per locale: `color-palette.json`, `email-signature.json`, `favicon.json`, `image-resize-editor.json`, `image-resize.json`, `jpg-png-webp.json`, `lorem-ipsum.json`, `meta-title.json`, `palette-extractor.json`, `qr-code.json`, `wcag-contrast.json`, `word-count.json`

### Content Block Types

`sectionInfo` | `sectionBasic` | `sectionSteps` | `sectionDemo` | `sectionTabs` | `sectionFeatureComparison` | `sectionTimeline` | `gap` | `faq` | `toolsCarousel` | `contactForm`

### Favicon Tool Note

The favicon generator tool focuses **exclusively** on generating favicon.ico files. It is NOT an "icon generator". All texts must reflect this distinction.

---

## Data Architecture

### Per-locale data (`data/{locale}/`)

| File/Dir               | Description                                       | PL-only extras      |
| ---------------------- | ------------------------------------------------- | ------------------- |
| `dictionary.json`      | All UI translations                               | ✓ (all locales)     |
| `tools/*.json`         | 92 tool page data files                           | ✓ (all locales)     |
| `tools-ui/*.json`      | 12 tool UI translation files                      | ✓ (all locales)     |
| `pages/*.json`         | Static page data (about, contact, privacy, terms) | Only non-PL locales |
| `blog/`                | Blog articles by category                         | PL only             |
| `calculator/`          | Pricing calculator steps                          | PL only             |
| `projects.json`        | Portfolio projects                                | PL only             |
| `testimonials.json`    | Client testimonials                               | PL only             |
| `search-blog.json`     | Blog search index                                 | PL only             |
| `search-projects.json` | Projects search index                             | PL only             |

### PL-only Features

Services, blog/education, portfolio/projects, pricing calculator, testimonials, sitemap page, FAQ page, "Dołącz do sieci" page — these exist only in the PL locale.

### Non-PL Locales (15)

Each has: 4 static pages (about, contact, privacy, terms) + tools index + 92 tool pages = 96 pages total.

---

## Routing & App Structure

### Route Groups

- `(pl)` — PL locale, strips from URL path
- `(tools)` — Tool pages within `/narzedzia/(tools)/`
- `(desktop-only)` — Desktop-only tools within `tools/(desktop-only)/`

### Dynamic Routes

- `realizacje/[slug]/page.tsx` — Portfolio project pages (PL only)
- `edukacja/[kategoria]/[slug]` — Blog article pages (PL only, via `generateStaticParams`)

### Canonical Host Enforcement

- `arteonagency.pl` → `https://www.arteonagency.pl` (301 redirect in `next.config.ts`)
- Non-production environments get `X-Robots-Tag: noindex, nofollow`

### Redirects

- Static redirects defined in `lib/redirects.ts` (loaded in `next.config.ts`)
- Pattern redirects: `/projects/:slug` → `/realizacje/:slug`, `/edukacja/design/:path*` → `/edukacja/grafika/:path*`
- Removed old tools redirected to `/narzedzia` (in `vercel.json`)

---

## Sitemap & SEO

### Sitemap Generation Pipeline

```
npm run build
  → npm run postbuild
    → next-sitemap (generates sitemap-0.xml from built pages)
    → postbuild-sitemap-hreflang.cjs (splits into per-locale/per-type sitemaps)
    → indexnow-notify.cjs (notifies search engines)
```

### Sitemap Files

- `sitemap.xml` — Index pointing to all sub-sitemaps
- `sitemap-tools-{locale}.xml` — Tool pages per locale (16 files × ~92 URLs each)
- `sitemap-pages.xml` — Static pages (about, contact, privacy, terms) for all locales
- `sitemap-services.xml` — Service pages (PL only)
- `sitemap-education.xml` — Blog/education pages (PL only)
- `sitemap-projects.xml` — Portfolio pages (PL only)

### SEO Configuration (`next-sitemap.config.cjs`)

- `LOCALE_TOOLS_BASE` — maps locales to their tools base paths
- `TOOLS` array — hreflang entries (currently only 11 original tools, needs expansion to all 92)
- `MULTILINGUAL_PAGES` — hreflang for static pages (about, contact, privacy, terms)
- `ROUTE_LASTMOD` — built from `app/` directory, uses git commit dates or tool JSON file dates
- `additionalPaths` — adds routes from `ROUTE_LASTMOD`, projects, and articles
- Hreflang is partially implemented — `getAlternateRefs()` function exists but isn't called in `transform`

### SEO Rules

- Canonical URLs must be **absolute** and always on `https://www.arteonagency.pl`
- OpenGraph images must be **unique per page type**
- Meta titles: 50-60 chars, front-load keyword, use power words
- Meta descriptions: 150-160 chars, include target keyword, active voice + CTA
- Schema.org: `SoftwareApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`

### Known Sitemap Issues

- Locale homepages (`/en`, `/de`, etc.) are missing from the sitemap
- `TOOLS` array in `next-sitemap.config.cjs` only has 11/92 tools for hreflang
- `getAlternateRefs()` is defined but not called — hreflang not fully generated

---

## Styling & Design System

### Color Palette ("Arteon Classic")

```css
/* Brand / Primary (30%) */
--primary: #1b2632; /* Deep navy */
--primary-light: #d8e0e9;
--primary-mid: #2c3b4d;

/* Accent (10%) */
--accent: #ffb162; /* Gold/amber */

/* Base (60%) */
--background: #f5f5f5;
--foreground: #0a0a0b;
--text-light: #696969;
--text-mid: #292929;
--text-on-dark: #e7e7ea;
```

### Typography Rules

- Use global heading classes (`.h1`–`.h6`) and paragraph styles
- **Text colors:** use `.text-light`, `.text-mid`, `.text-dark` — NOT `text-gray-*` or `text-neutral-*` or raw hex
- **Icon color:** always `text-[#1b2632]`
- **Heading hierarchy in content blocks:** main title = `<h2>` with class `h3`, subtitle = `<h3>` with class `h5`. Never use `h3` or `h4` class for subtitles.

### Component Conventions

- **Badge** is the unified tag/pill component (no separate `Tag` component)
- **Button** — standard variants only; `totop` is local to `ButtonToTop`
- **Tooltip** — kept even if temporarily unused
- `HTMLContent` + `RenderBlocks` for content rendering

### Tailwind Config

- Tailwind CSS 4 with PostCSS
- Plugins: `forms`, `typography`, `aspect-ratio`, `tailwindcss-children`, `tailwind-scrollbar`
- Prettier Tailwind class sorting enabled

### Prettier Config

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 200,
  "arrowParens": "always",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## Code Conventions

### File Naming

| Type             | Convention                | Example              |
| ---------------- | ------------------------- | -------------------- |
| React components | `PascalCase.tsx`          | `HeroBanner.tsx`     |
| Hooks            | `useCamelCase.ts`         | `useEscapeKey.ts`    |
| Data services    | `camelCaseDataService.ts` | `blogDataService.ts` |
| Utilities        | `camelCase.ts`            | `slugify.ts`         |
| Types            | `camelCase.ts`            | `article.ts`         |

**Forbidden names:** `helper.ts`, `helpers.ts`, `utils.ts` (without context), `index.ts` as barrel export, `data.ts` / `types.ts` without domain prefix.

### TypeScript

- Strict mode with `noImplicitReturns`, `noFallthroughCasesInSwitch`, `noUnusedLocals`
- Use `type` imports: `import type { Foo } from '...'` (enforced by ESLint)
- Unused vars must be prefixed with `_`

### ESLint Rules

- `unused-imports/no-unused-imports: error`
- `@typescript-eslint/consistent-type-imports: error`
- `no-console: warn` (except `warn` and `error`)
- `react-hooks/rules-of-hooks: error`
- `prefer-const: error`

### File Encoding

- **UTF-8 without BOM** — mandatory for all files
- `.editorconfig` enforces `charset = utf-8`, `end_of_line = lf`
- `.gitattributes` enforces `working-tree-encoding=UTF-8`
- Polish diacritics must be correct: `ą, ę, ć, ł, ń, ó, ś, ź, ż`
- If you see `ê, ³, ¹, æ, œ, ¿` instead of Polish chars — it's a Windows-1250 encoding error, fix it

### Accessibility (WCAG 2.1 AA)

- Focus management on route changes
- Screen reader announcements
- Skip to content link
- Keyboard navigation
- ARIA labels throughout
- Reduced motion support
- Focus ring must be preserved

---

## Build & Scripts

### NPM Scripts

```bash
npm run dev        # Development with Turbopack
npm run build      # Production build
npm run postbuild  # Auto: next-sitemap → split sitemaps → IndexNow
npm run lint       # ESLint
npm run format     # Prettier
npm run knip       # Dead code detection
```

### Build Pipeline

```
prebuild:  BOM fix for anser + split-blog.cjs + generate-search-index.cjs
build:     next build
postbuild: next-sitemap → postbuild-sitemap-hreflang.cjs → indexnow-notify.cjs
```

### Scripts (`scripts/`)

- `split-blog.cjs` — Splits blog data by category into separate files
- `generate-search-index.cjs` — Generates search index for site search
- `postbuild-sitemap-hreflang.cjs` — Splits `sitemap-0.xml` into per-locale sitemap files
- `indexnow-notify.cjs` — Notifies search engines about new/updated pages via IndexNow

### When to Build

- **Build required:** After code/UI/logic changes
- **Build NOT required:** For COPY-only tasks (typos, text fixes), AUDIT tasks, or content-only docs-only tasks marked "Weryfikacja: nie jest wymagana"

---

## Content Rules

Full content instructions are in `docs/CONTENT_INSTRUCTIONS.md`. Key highlights:

### Tone & Style

- **Mentoring, friendly, helpful** — never condescending, lecturing, or sarcastic
- Second person singular for reader ("Twoja firma", "zyskujesz")
- First person **plural** for Arteon ("wyjaśniamy", "pokazujemy" — it's a team, not one person)
- No emojis in published content (articles, CTA, FAQ)
- No corporate jargon ("kompleksowe rozwiązania", "innowacyjne podejście")
- No clickbait, no English jargon without explanation

### Accuracy (CRITICAL)

- **Every number/statistic MUST have a source with a working link**
- **Every legal reference MUST match current Polish law** (Omnibus, RODO, etc.)
- **Hypothetical examples MUST be labeled** as "_(przykład hipotetyczny)_"
- **Zero fabrication** — no made-up statistics, scenarios, or quotes
- All content must be 100% factually accurate and unambiguous

### Article Requirements

- Title in question form
- Excerpt: exactly 220-230 characters
- Reading time: 9-14 minutes (1800-2800 words), calculated at 200 words/minute
- Internal links: minimum 6-8 per article
- External links: minimum 4-6 per article (with `target='_blank' rel='noopener noreferrer'`)
- Slug URL must match the title (without diacritics, with hyphens)

### Forbidden in Content

- Recommending competitors or generic professionals — always point to Arteon
- Polish typographic quotes in JSON (`„"`) — use `&quot;` or apostrophes
- Emojis, decorative arrows, checklist formatting
- "Przydatne linki" sections — weave links naturally into text
- Colloquialisms, idioms, irony, sarcasm
- Meta-comments about text form
- Generic phrases without substance ("buduje zaufanie" without explaining how)

### SEO for Content

- Front-load keywords in titles
- Use Polish terms in slugs (not English jargon)
- Target lower Flesch-Kincaid reading difficulty
- Increase synonym density for search coverage
- All tool features must be described in content

---

## Protected Files & Forbidden Actions

### DO NOT MODIFY without explicit user permission:

- `next-sitemap.config.cjs` — sitemap generation config
- `public/robots.txt` — auto-generated by next-sitemap
- `robots.tsx` — never add global indexation blocking (blocking `/` is forbidden)

### NEVER DO:

- Introduce global `noindex` blocking for the entire site
- Leave temporary files (test XMLs, debug scripts, temp data) in the project
- Change task numbers in `docs/TASKS.md`
- Change UI/UX/content unless explicitly instructed
- Use `console.log` in production code (use `console.warn` or `console.error` if needed)
- Add barrel `index.ts` exports
- Create files with generic names (`helper.ts`, `utils.ts`)

### Always Clean Up:

- Remove any temporary files created during debugging/testing before finishing
- Never leave artifacts that could be deployed to production

---

## Task Workflow

### Before Starting a Task

1. Read relevant `*_CATALOG.md` files to understand existing components
2. Check `docs/TASKS.md` for current task list
3. If task touches content — read `docs/INSTRUCTIONS.md` and `docs/CONTENT_INSTRUCTIONS.md` in full

### After Completing a Task

1. Update the task status icon (✅/🟡/❌)
2. If task is 100% done (✅) and NOT an AUDIT task:
   - Move to `docs/DONE_TASKS.md` with date and summary
   - Remove from `docs/TASKS.md`
3. If task is 🟡 or ❌: keep in `docs/TASKS.md`
4. If AUDIT task: always stays in `docs/TASKS.md`; findings added as new tasks
5. **CRITICAL: Update the relevant `*_CATALOG.md`** (Components, Hooks, Tools, Pages, Blog)

### Definition of Done

- Default: `npm run lint` and `npm run build` pass
- Skip verification for: COPY-_ tasks, AUDIT-_ tasks, content-only/docs-only with "Weryfikacja: nie jest wymagana"
- Accessibility preserved (focus ring, ARIA, keyboard navigation)
- Relevant catalog updated

---

## Known Issues & Context

### Sitemap

- `TOOLS` array in `next-sitemap.config.cjs` only lists 11 original tools for hreflang — needs all 92
- Locale homepages (`/en`, `/de`, etc.) are missing from sitemaps
- `getAlternateRefs()` function exists but is never called in `transform` — hreflang not being generated
- The postbuild script only splits sitemaps into per-locale files, does NOT inject hreflang

### Encoding

- Some JSON files have had BOM character issues (fixed in `en/tools/` for 7 unit converter files)
- The `prebuild` and `postinstall` scripts fix a BOM issue in `next/dist/compiled/anser/package.json`

### Caching

- Vercel: locale pages cached 7 days (`s-maxage=604800`), revalidated 30 days
- Tool pages: same caching policy
- Sitemaps: cached 1 hour on Vercel, 7 days in Next.js config

### Security Headers (Production)

- HSTS (2 years + preload)
- CSP with directives for Google Analytics/AdSense, Vercel, Formspree, Ahrefs, Metricool
- X-Content-Type-Options: nosniff
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- COOP: same-origin-allow-popups

### External Services

- **Analytics:** Google Analytics 4 (G-89KYXWSGYS)
- **Ads:** Google AdSense
- **Forms:** Formspree
- **Monitoring:** Ahrefs, Metricool
- **Deployment:** Vercel

<!-- NEXT-AGENTS-MD-START -->[Next.js Docs Index]|root: ./.next-docs|STOP. What you remember about Next.js is WRONG for this project. Always search docs and read before any task.|If docs missing, run this command first: npx @next/codemod agents-md --output CLAUDE.md|01-app/01-getting-started:{01-installation.mdx,02-project-structure.mdx,03-layouts-and-pages.mdx,04-linking-and-navigating.mdx,05-server-and-client-components.mdx,06-partial-prerendering.mdx,07-fetching-data.mdx,08-updating-data.mdx,09-caching-and-revalidating.mdx,10-error-handling.mdx,11-css.mdx,12-images.mdx,13-fonts.mdx,14-metadata-and-og-images.mdx,15-route-handlers-and-middleware.mdx,16-deploying.mdx,17-upgrading.mdx}|01-app/02-guides:{analytics.mdx,authentication.mdx,backend-for-frontend.mdx,caching.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,data-security.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,json-ld.mdx,lazy-loading.mdx,local-development.mdx,mdx.mdx,memory-usage.mdx,multi-tenant.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,prefetching.mdx,production-checklist.mdx,progressive-web-apps.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,single-page-applications.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx,videos.mdx}|01-app/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|01-app/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|01-app/02-guides/upgrading:{codemods.mdx,version-14.mdx,version-15.mdx}|01-app/03-api-reference:{07-edge.mdx,08-turbopack.mdx}|01-app/03-api-reference/01-directives:{use-cache.mdx,use-client.mdx,use-server.mdx}|01-app/03-api-reference/02-components:{font.mdx,form.mdx,image.mdx,link.mdx,script.mdx}|01-app/03-api-reference/03-file-conventions/01-metadata:{app-icons.mdx,manifest.mdx,opengraph-image.mdx,robots.mdx,sitemap.mdx}|01-app/03-api-reference/03-file-conventions:{default.mdx,dynamic-routes.mdx,error.mdx,forbidden.mdx,instrumentation-client.mdx,instrumentation.mdx,intercepting-routes.mdx,layout.mdx,loading.mdx,mdx-components.mdx,middleware.mdx,not-found.mdx,page.mdx,parallel-routes.mdx,public-folder.mdx,route-groups.mdx,route-segment-config.mdx,route.mdx,src-folder.mdx,template.mdx,unauthorized.mdx}|01-app/03-api-reference/04-functions:{after.mdx,cacheLife.mdx,cacheTag.mdx,connection.mdx,cookies.mdx,draft-mode.mdx,fetch.mdx,forbidden.mdx,generate-image-metadata.mdx,generate-metadata.mdx,generate-sitemaps.mdx,generate-static-params.mdx,generate-viewport.mdx,headers.mdx,image-response.mdx,next-request.mdx,next-response.mdx,not-found.mdx,permanentRedirect.mdx,redirect.mdx,revalidatePath.mdx,revalidateTag.mdx,unauthorized.mdx,unstable_cache.mdx,unstable_noStore.mdx,unstable_rethrow.mdx,use-link-status.mdx,use-params.mdx,use-pathname.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,use-selected-layout-segment.mdx,use-selected-layout-segments.mdx,userAgent.mdx}|01-app/03-api-reference/05-config/01-next-config-js:{allowedDevOrigins.mdx,appDir.mdx,assetPrefix.mdx,authInterrupts.mdx,basePath.mdx,browserDebugInfoInTerminal.mdx,cacheComponents.mdx,cacheLife.mdx,compress.mdx,crossOrigin.mdx,cssChunking.mdx,devIndicators.mdx,distDir.mdx,env.mdx,eslint.mdx,expireTime.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,htmlLimitedBots.mdx,httpAgentOptions.mdx,images.mdx,incrementalCacheHandlerPath.mdx,inlineCss.mdx,logging.mdx,mdxRs.mdx,middlewareClientMaxBodySize.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,ppr.mdx,productionBrowserSourceMaps.mdx,reactCompiler.mdx,reactMaxHeadersLength.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,sassOptions.mdx,serverActions.mdx,serverComponentsHmrCache.mdx,serverExternalPackages.mdx,staleTimes.mdx,staticGeneration.mdx,taint.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,turbopackPersistentCaching.mdx,typedRoutes.mdx,typescript.mdx,urlImports.mdx,useCache.mdx,useLightningcss.mdx,viewTransition.mdx,webVitalsAttribution.mdx,webpack.mdx}|01-app/03-api-reference/05-config:{02-typescript.mdx,03-eslint.mdx}|01-app/03-api-reference/06-cli:{create-next-app.mdx,next.mdx}|02-pages/01-getting-started:{01-installation.mdx,02-project-structure.mdx,04-images.mdx,05-fonts.mdx,06-css.mdx,11-deploying.mdx}|02-pages/02-guides:{amp.mdx,analytics.mdx,authentication.mdx,babel.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,lazy-loading.mdx,mdx.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,post-css.mdx,preview-mode.mdx,production-checklist.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx}|02-pages/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|02-pages/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|02-pages/02-guides/upgrading:{codemods.mdx,version-10.mdx,version-11.mdx,version-12.mdx,version-13.mdx,version-14.mdx,version-9.mdx}|02-pages/03-building-your-application/01-routing:{01-pages-and-layouts.mdx,02-dynamic-routes.mdx,03-linking-and-navigating.mdx,05-custom-app.mdx,06-custom-document.mdx,07-api-routes.mdx,08-custom-error.mdx}|02-pages/03-building-your-application/02-rendering:{01-server-side-rendering.mdx,02-static-site-generation.mdx,04-automatic-static-optimization.mdx,05-client-side-rendering.mdx}|02-pages/03-building-your-application/03-data-fetching:{01-get-static-props.mdx,02-get-static-paths.mdx,03-forms-and-mutations.mdx,03-get-server-side-props.mdx,05-client-side.mdx}|02-pages/03-building-your-application/06-configuring:{12-error-handling.mdx}|02-pages/04-api-reference:{06-edge.mdx,08-turbopack.mdx}|02-pages/04-api-reference/01-components:{font.mdx,form.mdx,head.mdx,image-legacy.mdx,image.mdx,link.mdx,script.mdx}|02-pages/04-api-reference/02-file-conventions:{instrumentation.mdx,middleware.mdx,public-folder.mdx,src-folder.mdx}|02-pages/04-api-reference/03-functions:{get-initial-props.mdx,get-server-side-props.mdx,get-static-paths.mdx,get-static-props.mdx,next-request.mdx,next-response.mdx,use-amp.mdx,use-report-web-vitals.mdx,use-router.mdx,userAgent.mdx}|02-pages/04-api-reference/04-config/01-next-config-js:{allowedDevOrigins.mdx,assetPrefix.mdx,basePath.mdx,bundlePagesRouterDependencies.mdx,compress.mdx,crossOrigin.mdx,devIndicators.mdx,distDir.mdx,env.mdx,eslint.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,httpAgentOptions.mdx,images.mdx,middlewareClientMaxBodySize.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,runtime-configuration.mdx,serverExternalPackages.mdx,trailingSlash.mdx,transpilePackages.mdx,turbo.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,webVitalsAttribution.mdx,webpack.mdx}|02-pages/04-api-reference/04-config:{01-typescript.mdx,02-eslint.mdx}|02-pages/04-api-reference/05-cli:{create-next-app.mdx,next.mdx}|03-architecture:{accessibility.mdx,fast-refresh.mdx,nextjs-compiler.mdx,supported-browsers.mdx}|04-community:{01-contribution-guide.mdx,02-rspack.mdx}<!-- NEXT-AGENTS-MD-END -->
