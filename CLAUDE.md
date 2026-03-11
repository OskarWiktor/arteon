# CLAUDE.md — Arteon Agency

> Before any task: check `docs/TASKS.md`. For content tasks: read `docs/CONTENT_INSTRUCTIONS.md`.

---

## Project

**Arteon Agency** — Polish web dev & digital marketing agency. Multilingual (16 locales), 92 free tools, blog, services, portfolio.

- **Domain:** `https://www.arteonagency.pl`
- **Deployment:** Vercel · **Primary locale:** PL (no URL prefix) · **Global:** EN

---

## Tech Stack

|              | Version | Notes                  |
| ------------ | ------- | ---------------------- |
| Next.js      | 16.1.6  | App Router, `next dev` |
| React        | 19.2.4  |                        |
| TypeScript   | 5.x     | Strict mode            |
| Tailwind CSS | 4       | PostCSS                |
| Node.js      | 18+     |                        |

**Icons:** `react-icons/ri` only. **Never** `lucide-react`.  
**Alias:** `@/*` → `./*`

---

## Hard Rules (always apply)

```
NEVER:
- Global noindex on robots.tsx or robots.txt
- console.log in production (use warn/error)
- barrel index.ts exports
- Generic filenames: helper.ts, utils.ts, data.ts, types.ts
- Polish typographic quotes „" in JSON → use &quot; or apostrophes
- Unicode escapes \u0000 in JSON → use actual characters
- lucide-react icons

ALWAYS:
- UTF-8 without BOM
- type imports: import type { Foo } from '...'
- Unused vars prefixed with _
- Clean up temp/debug files before finishing
- Update relevant *_CATALOG.md after any task
```

---

## File Naming

| Type             | Convention                |
| ---------------- | ------------------------- |
| React components | `PascalCase.tsx`          |
| Hooks            | `useCamelCase.ts`         |
| Data services    | `camelCaseDataService.ts` |
| Utilities        | `camelCase.ts`            |

---

## Project Structure (quick map)

```
app/
  (pl)/          # PL locale, no URL prefix
  en/, de/, es/, fr/, pt/, it/
  ro/, nl/, hu/, cs/, sv/, da/, no/, fi/, el/
components/
  ui/            # Reusable UI
  sections/tools/ # Tool components + ToolPageRenderer + DynamicToolRenderer
  shared/        # Nav, Footer, Breadcrumbs
data/{locale}/
  dictionary.json        # UI translations
  tools/*.json           # 92 tool pages per locale
  tools-ui/*.json        # 12 tool UI strings per locale
lib/
  i18n/          # locales.ts, tool-registry.ts (~400KB), get-dictionary.ts
  LocaleContext.tsx       # useLocale(), useDictionary()
docs/            # INSTRUCTIONS.md, CONTENT_INSTRUCTIONS.md, TASKS.md, *_CATALOG.md
```

---

## Localization

16 locales: `pl en de es fr pt it ro nl hu cs sv da no fi el`

- PL = default, no prefix. All others: `/en/`, `/de/` etc.
- Tools path per locale varies (e.g. `/narzedzia`, `/en/tools`, `/de/werkzeuge`)
- **Localization ≠ Translation** — vary structure and phrasing per locale
- New dictionary key? → update `ClientDictionary` interface + all 16 `dictionary.json` files

→ Full locale URL table: use Skill("arteon-i18n")

---

## Tools System

92 tools in 4 categories: image converters (47), text/data (8), unit converters (17), generators (11).  
Desktop-only tools in `(desktop-only)/` route group.

Tool page flow: `page.tsx` → `ToolPageRenderer` → `DynamicToolRenderer` → specific component

→ Tool data structure & content blocks: use Skill("arteon-tools")

---

## Design System

```css
--primary: #1b2632; /* Deep navy */
--accent: #ffb162; /* Gold */
--background: #f5f5f5;
```

- Text: `.text-light`, `.text-mid`, `.text-dark` — never `text-gray-*` or raw hex
- Icon color: always `text-[#1b2632]`
- Heading in content blocks: `<h2 class="h3">` title, `<h3 class="h5">` subtitle
- Badge = unified pill component (no Tag component)

---

## Sitemap & SEO

- Canonical: absolute, always `https://www.arteonagency.pl`
- OG images: unique per page type
- Meta title: 50-60 chars, front-load keyword
- Meta description: 150-160 chars, keyword + CTA
- Schema: SoftwareApplication, HowTo, FAQPage, BreadcrumbList

**Known issues:**

- `next-sitemap.config.cjs` TOOLS array has only 11/92 tools for hreflang
- Locale homepages (`/en`, `/de`) missing from sitemaps
- `getAlternateRefs()` defined but never called

**Protected:** never modify `next-sitemap.config.cjs` without explicit permission.

---

## Build

```bash
npm run dev        # Turbopack
npm run build      # Production
npm run lint
npm run format
```

Build pipeline: `prebuild` (BOM fix, split-blog, search-index) → `build` → `postbuild` (sitemap, hreflang, IndexNow)

**Build required:** code/UI/logic changes  
**Build NOT required:** copy-only, audit tasks, content-only marked "Weryfikacja: nie jest wymagana"

---

## Task Workflow

1. Check `docs/TASKS.md` for current tasks
2. Read relevant `*_CATALOG.md` before touching components
3. Content task? Read `docs/CONTENT_INSTRUCTIONS.md` in full

**After completing:**

- Update status icon ✅/🟡/❌
- ✅ non-audit → move to `docs/DONE_TASKS.md`, remove from TASKS.md
- Always update relevant `*_CATALOG.md`
- Don't change task numbers

**Definition of Done:** `npm run lint` + `npm run build` pass (unless copy/audit task)

---

## Documentation

**ALWAYS use context7 MCP** (`mcp__context7__*`) when looking up framework or library docs (Next.js, React, Tailwind, TypeScript, etc.). It provides up-to-date, version-accurate documentation. Only fall back to `.next-docs/` if context7 is unavailable.

---

## Skills (load on demand)

| Task type                           | Load                                                                 |
| ----------------------------------- | -------------------------------------------------------------------- |
| Locale URLs, i18n details           | Skill("arteon-i18n")                                                 |
| Tool data structure, content blocks | Skill("arteon-tools")                                                |
| Article/content writing             | `docs/CONTENT_INSTRUCTIONS.md`                                       |
| Next.js API reference               | **context7 MCP first** (`mcp__context7__*`), fallback: `.next-docs/` |
| Humanize AI text                    | Skill("humanizer")                                                   |
| Complex feature build               | Skill("get-shit-done")                                               |

---

## External Services

Google Analytics (G-89KYXWSGYS) · Google AdSense · Formspree · Ahrefs · Metricool · Vercel
