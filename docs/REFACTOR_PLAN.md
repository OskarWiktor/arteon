# Plan refaktoryzacji Arteon — v1.0

> Dokument roboczy. Każda faza jest niezależna i może być wdrażana osobno.
> Priorytet: 🔴 krytyczny · 🟡 wysoki · 🟢 średni · ⚪ nice-to-have

---

## FAZA 1 — Blog: podział `blog.json` na pliki per kategoria

### Problem

- `data/pl/blog.json` = **803 KB**, 40 artykułów, 16 kategorii (z duplikatami nazw: `Tresci`/`Treści`, `Bezpieczenstwo`/`Bezpieczeństwo`)
- 28 z 40 artykułów należy do **wielu kategorii** — artykuł ma `primaryCategory` (determinuje URL) i `category[]` (dodatkowe)
- Cały plik jest importowany w `blogDataService.ts` na poziomie modułu — każda strona bloga ładuje wszystkie 40 artykułów do pamięci serwera
- Przy 100+ artykułach plik przekroczy kilka MB, co spowalnia cold start na Vercel

### Plan

1. **Znormalizować nazwy kategorii** — usunąć duplikaty (`Tresci` → `Treści`, `Bezpieczenstwo` → `Bezpieczeństwo`)

2. **Podzielić `blog.json` na pliki per primaryCategory:**

   ```
   data/pl/blog/
   ├── _index.json          ← ArticlePreview[] (slug, title, excerpt, cover, primaryCategory, category, readingTime, datePublished)
   ├── seo.json             ← Article[] z primaryCategory === 'SEO'
   ├── strony.json
   ├── grafika.json
   ├── ux.json
   ├── marketing.json
   ├── branding.json
   ├── sklepy.json
   ├── psychologia.json
   ├── widocznosc.json
   ├── tresci.json
   ├── dostepnosc.json
   ├── bezpieczenstwo.json
   ├── druk.json
   └── zdjecia.json
   ```

3. **`_index.json`** — lekki plik (~20 KB) z `ArticlePreview[]` dla list i karuzeli. Używany przez:

   - `/edukacja` (lista wszystkich)
   - `/edukacja/[category]` (filtrowane listy)
   - `ArticlesCarousel` (karuzele na stronach usługowych)
   - `search-blog.json` (indeks wyszukiwania)

4. **`{category}.json`** — pełne artykuły z `contentBlocks`. Ładowane **tylko** w `/edukacja/[category]/[slug]/page.tsx`

5. **Zaktualizować `blogDataService.ts`:**

   ```ts
   // Listy / karuzele — lekki indeks
   import index from '@/data/pl/blog/_index.json';
   export function getAllArticlePreviews(): ArticlePreview[] {
     return index;
   }

   // Pełny artykuł — lazy load per kategoria
   export async function getArticle(categorySlug: string, slug: string): Promise<Article | undefined> {
     const data = await import(`@/data/pl/blog/${categorySlug}.json`);
     return data.articles.find((a: Article) => a.slug === slug);
   }
   ```

6. **Dodać skrypt `scripts/split-blog.cjs`** — jednorazowy + jako prebuild step. Wczytuje `blog.json`, generuje pliki per kategoria + `_index.json`.

7. **Walidacja Zod** — dodać schemat `ArticleSchema` i `ArticlePreviewSchema` w `types/article.ts`. Walidować dane w `blogDataService.ts` przy imporcie.

### Wpływ

- 🔴 **Wydajność** — cold start: zamiast 803 KB parsowane jest ~20 KB indeksu. Pełny artykuł ładowany on-demand
- 🟡 **SEO** — szybszy TTFB na stronach blogowych
- 🟡 **Skalowalność** — przy 200 artykułach system działa identycznie (indeks ~100 KB, artykuły lazy)
- 🟡 **Clean code** — normalizacja nazw kategorii, eliminacja duplikatów

### Szacowany nakład: 2-3h

---

## FAZA 2 — Wydzielenie słowników i18n (dictionaries)

### Problem

- 6 lokalizacji, planowane **20+**
- Tłumaczenia UI rozrzucone po wielu plikach:
  - `lib/i18n/locales.ts` — `NAVIGATION_UI`, `FOOTER_UI`, `DESKTOP_ONLY_UI`, `LEGAL_LINKS` (270 linii, 6 sekcji × 6 lokalizacji)
  - `lib/i18n/tool-registry.ts` — `TOOL_SECTIONS` + `TOOL_REGISTRY` (568 linii, sekcje + 10 narzędzi × 6 lokalizacji)
  - `lib/i18n/tools/*.ts` — 10 plików, każdy ~200-500 linii z UI strings per lokalizacja
  - `lib/i18n/pages/*.ts` — 4 pliki ze stringami stron
  - `components/shared/navigation-data/pl.ts`, `en.ts` — hardcoded nav items
  - Komponenty z inline tłumaczeniami: `CookieConsent.tsx`, `SkipToContent.tsx`, `SearchDialog.tsx`
- Dodanie nowej lokalizacji = edycja **20+ plików**
- Brak typesafety — brakujące tłumaczenia nie powodują błędu kompilacji

### Plan

1. **Struktura słowników:**

   ```
   dictionaries/
   ├── pl.json       ← UI strings: nav, footer, cookie, search, common
   ├── en.json
   ├── de.json
   ├── es.json
   ├── fr.json
   └── pt.json
   ```

2. **Schemat słownika (Zod):**

   ```ts
   // lib/i18n/dictionary-schema.ts
   const DictionarySchema = z.object({
     nav: z.object({
       mainNavigation: z.string(),
       logoAlt: z.string(),
       closeMenu: z.string(),
       openMenu: z.string(),
       // ...
     }),
     footer: z.object({
       copyright: z.string(),
       description: z.string(),
       // ...
     }),
     cookie: z.object({
       /* ... */
     }),
     search: z.object({
       /* ... */
     }),
     common: z.object({
       readMore: z.string(),
       backToTop: z.string(),
       // ...
     }),
     desktopOnly: z.object({
       /* ... */
     }),
   });
   ```

3. **Loader z walidacją:**

   ```ts
   // lib/i18n/get-dictionary.ts
   import type { Locale } from '@/types/locale';

   const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
     pl: () => import('@/dictionaries/pl.json').then((m) => DictionarySchema.parse(m.default)),
     en: () => import('@/dictionaries/en.json').then((m) => DictionarySchema.parse(m.default)),
     // ...
   };

   export async function getDictionary(locale: Locale): Promise<Dictionary> {
     return dictionaries[locale]();
   }
   ```

4. **Dodanie nowej lokalizacji = 1 plik:**

   - Skopiuj `dictionaries/en.json` → `dictionaries/it.json`
   - Przetłumacz stringi
   - Dodaj `it` do `LOCALE_CONFIG` i `Locale` type
   - Dodaj routing w `app/it/`
   - Gotowe — Zod wyłapie brakujące klucze przy buildzie

5. **Migracja stopniowa:**
   - Faza 2a: przenieść `NAVIGATION_UI`, `FOOTER_UI`, `DESKTOP_ONLY_UI` → `dictionaries/*.json`
   - Faza 2b: przenieść `CookieConsent`, `SkipToContent`, `SearchDialog` stringi
   - Faza 2c: przenieść tool UI strings (`lib/i18n/tools/*.ts`) — te pliki są duże i specyficzne per narzędzie, więc mogą pozostać jako osobne pliki, ale importowane dynamicznie per lokalizacja

### Wpływ

- 🔴 **Skalowalność** — dodanie lokalizacji: 1 plik zamiast 20+
- 🔴 **Clean code** — single source of truth dla tłumaczeń
- 🟡 **Type safety** — Zod walidacja = brakujące tłumaczenie = błąd build
- 🟡 **DX** — łatwiejsze zarządzanie tłumaczeniami, możliwość automatyzacji (np. skrypt do exportu/importu CSV)

### Szacowany nakład: 4-6h (fazami)

---

## FAZA 3 — Optymalizacja narzędzi pod skalę i prędkość

### Problem

- 10 narzędzi × 6 lokalizacji = **60 stron narzędziowych**
- Przy 20 lokalizacjach × 15 narzędzi = **300 stron**
- Każda strona narzędziowa to ~400-500 linii TSX z hardcoded treścią (metadata, FAQ, sekcje informacyjne, schema.org)
- Duża duplikacja struktury między lokalizacjami — różni się tylko tekst
- `tool-registry.ts` = 568 linii i rośnie liniowo z każdym narzędziem × lokalizacją
- Strony narzędziowe importują ikony z `react-icons/ri` barrel — mogą zostać zoptymalizowane jak NavIcons

### Plan

1. **Template-based tool pages:**

   ```
   Zamiast 60 osobnych page.tsx, stworzyć:

   app/[locale]/tools/[slug]/page.tsx  ← universal tool page template

   Dane per narzędzie/lokalizacja w:
   data/tools/
   ├── jpgToWebp/
   │   ├── pl.json   ← metadata, FAQ, sekcje, schema
   │   ├── en.json
   │   └── ...
   ├── imageResize/
   │   ├── pl.json
   │   └── ...
   └── ...
   ```

2. **Uniwersalny komponent `ToolPage`:**

   ```tsx
   // components/pages/ToolPage.tsx
   export default function ToolPage({ toolKey, locale, content }: Props) {
     return (
       <>
         <HeroBanner title={content.hero.title} ... />
         <Breadcrumbs ... />
         <ToolEditorLayout>
           {/* dynamiczny komponent narzędzia */}
           <ToolComponent toolKey={toolKey} locale={locale} />
         </ToolEditorLayout>
         {content.sections.map(section => <DynamicSection key={section.key} {...section} />)}
         <FaqPanels items={content.faq} ... />
         <ToolsCarousel ... />
       </>
     );
   }
   ```

3. **Walidacja Zod per narzędzie:**

   ```ts
   const ToolContentSchema = z.object({
     meta: z.object({ title: z.string(), description: z.string() }),
     hero: z.object({ title: z.string(), description: z.string() }),
     sections: z.array(SectionSchema),
     faq: z.array(FaqItemSchema),
     schema: z.object({ ... }),
   });
   ```

4. **Inline SVG icons dla stron narzędziowych** — wydzielić ikony używane w sekcjach `SectionSteps` do `ToolIcons.tsx` (analogicznie do `NavIcons.tsx`)

### Wpływ

- 🔴 **Skalowalność** — nowe narzędzie = 1 komponent + N plików JSON (zamiast N plików page.tsx)
- 🔴 **Mniejsza duplikacja** — eliminacja ~400 linii × N lokalizacji per narzędzie
- 🟡 **Błędy** — Zod walidacja treści narzędzi = brakujące FAQ/sekcje = błąd build
- 🟡 **Bundle** — inline SVG ikony zamiast barrel importów react-icons w każdej stronie

### Szacowany nakład: 6-8h

### UWAGA — to refaktor o dużym zasięgu. Rekomendacja: wdrożyć na 1 narzędziu jako proof of concept, potem migrować resztę.

---

## FAZA 4 — SEO: Schema.org, metadata, i strukturalne ulepszenia

### Problem

- Schema.org JSON-LD jest generowany inline w wielu page.tsx — brak standaryzacji
- `siteUrl` jest hardcoded w kilku plikach jako string zamiast importu z jednego miejsca
- Brak `Organization` schema na poziomie globalnym (tylko w poszczególnych artykułach jako `publisher`)
- Brak `WebSite` schema z `SearchAction` (Google Sitelinks Search Box)
- Brak `SameAs` (profile społecznościowe) w Organization schema
- Artykuły blogowe nie mają `BreadcrumbList` w JSON-LD na poziomie artykułu (jest `Breadcrumbs` komponent z `includeJsonLd`, ale warto upewnić się że działa poprawnie)
- Strony usługowe nie mają `Service` schema
- Brak automatycznego testu broken links

### Plan

1. **Centralny helper `lib/seo/schema.ts`:**

   ```ts
   export function organizationSchema() {
     /* ... */
   }
   export function websiteSchema() {
     /* z SearchAction */
   }
   export function serviceSchema(service: ServiceData) {
     /* ... */
   }
   export function articleSchema(article: Article) {
     /* ... */
   }
   export function faqSchema(items: FaqItem[]) {
     /* ... */
   }
   export function breadcrumbSchema(items: BreadcrumbItem[]) {
     /* ... */
   }
   ```

2. **Global schemas w `app/layout.tsx`:**

   - `Organization` z `sameAs` (social profiles), `logo`, `contactPoint`
   - `WebSite` z `SearchAction` (Sitelinks Search Box)

3. **`Service` schema dla stron usługowych:**

   - Dodać JSON-LD `Service` do każdej strony `/uslugi/*`
   - Właściwości: `name`, `description`, `provider` (Organization), `areaServed`, `serviceType`

4. **Standaryzacja `siteUrl`:**

   - Jeden import z `utils/absoluteUrl.ts` (już istnieje `siteUrl` i `toAbsoluteUrl`)
   - Usunąć hardcoded `const siteUrl = 'https://www.arteonagency.pl'` z poszczególnych plików

5. **Skrypt `scripts/check-links.cjs`:**

   - Crawl sitemap.xml po buildzie
   - Sprawdź status HTTP dla każdego URL-a
   - Raportuj 404/5xx
   - Opcjonalnie jako postbuild step lub osobny skrypt npm

6. **Canonical consistency:**
   - Upewnić się że każda strona ma `alternates.canonical` wskazujący na absolutny URL
   - Sprawdzić spójność canonical z hreflang alternates

### Wpływ

- 🔴 **SEO** — rich snippets, Sitelinks Search Box, Service schema
- 🟡 **Utrzymanie** — jeden helper zamiast inline JSON-LD w 60+ plikach
- 🟡 **Błędy** — automatyczny test broken links zapobiega 404 po refaktorze

### Szacowany nakład: 3-4h

---

## FAZA 5 — Clean code: Zod validation, knip, ogólne porządki

### Problem

- Dane JSON (blog, projects, testimonials, calculator) nie są walidowane w runtime
- Potencjalnie martwy kod — 255 elementów w `app/`, 177 w `components/`
- Plik `_icon_paths.txt` (16 KB) — tymczasowy, do usunięcia
- `TOOL_CONTENT_AUDIT.md` — potencjalnie nieaktualny

### Plan

1. **Zod schematy dla kluczowych typów danych:**

   ```
   types/
   ├── article.ts      ← dodać ArticleSchema, ArticlePreviewSchema
   ├── project.ts      ← dodać ProjectSchema
   ├── testimonial.ts  ← dodać TestimonialSchema
   └── tools/common.ts ← dodać ToolDefinitionSchema
   ```

2. **Walidacja w data service layer:**

   - `blogDataService.ts` — walidacja `_index.json` i artykułów per kategoria
   - `projectsDataService.ts` — walidacja `projects.json`
   - Build-time validation: błędne dane = failed build (zamiast runtime crash)

3. **Uruchomić `npm run knip`** — przeanalizować wynik, usunąć martwy kod

4. **Usunąć pliki tymczasowe:**

   - `_icon_paths.txt` — wygenerowany podczas optymalizacji ikon
   - Sprawdzić aktualność `TOOL_CONTENT_AUDIT.md`

5. **TypeScript strictness:**
   - Rozważyć `noUnusedParameters: true` w `tsconfig.json` (obecnie `false`)
   - ESLint rule `@typescript-eslint/strict-boolean-expressions` — zapobieganie truthy/falsy bugom

### Wpływ

- 🟡 **Stabilność** — walidacja danych = wczesne wykrywanie błędów
- 🟡 **Clean code** — usunięcie martwego kodu, plików tymczasowych
- 🟢 **DX** — knip w CI = automatyczne wykrywanie nieużywanych eksportów

### Szacowany nakład: 2-3h

---

## FAZA 6 — Wydajność: bundle analysis, lazy loading, caching

### Problem

- Shared JS: 102 KB (React/Next core — nie do zmniejszenia)
- Strony usługowe: ~133 KB First Load JS
- Strony narzędziowe: 145-170 KB First Load JS
- Strony blogowe: 116-130 KB First Load JS
- `react-icons` wciąż używany w stronach narzędziowych (barrel import w page.tsx)

### Plan

1. **Uruchomić `npm run analyze`** (bundle analyzer) — zidentyfikować największe chunki

2. **Inline SVG dla ikon w stronach narzędziowych:**

   - Analogicznie do `NavIcons.tsx` — wydzielić ikony `RiListCheck2`, `RiBarChartLine`, etc. używane w `SectionSteps`
   - Plik `components/ui/icons/ToolPageIcons.tsx`
   - Potencjalne oszczędności: jeśli react-icons/ri barrel jest tree-shaken poprawnie to mało, ale jeśli nie — kilkadziesiąt KB per stronę

3. **Dynamic imports dla ciężkich komponentów narzędziowych:**

   - `WordCountTool`, `ImageResizeTool`, `EmailSignatureTool` — lazy load z `next/dynamic`
   - Użytkownik widzi skeleton → narzędzie ładuje się asynchronicznie

4. **Sprawdzić cache headers:**
   - `_next/static/` — czy Vercel poprawnie ustawia `immutable`
   - Fonty — czy cache jest ustawiony (już jest w `next.config.ts`)
   - JSON data files — rozważyć `stale-while-revalidate`

### Wpływ

- 🟡 **Wydajność** — mniejszy First Load JS na stronach narzędziowych
- 🟢 **Core Web Vitals** — lepszy LCP dzięki lazy loading
- 🟢 **SEO** — szybsze TTFB = lepszy ranking

### Szacowany nakład: 3-4h

---

## Kolejność wdrażania (rekomendacja)

| Kolejność | Faza                             | Priorytet | Uzasadnienie                                        |
| --------- | -------------------------------- | --------- | --------------------------------------------------- |
| 1         | **Faza 5** — Clean code + Zod    | 🔴        | Fundament — porządkuje kod zanim zaczniemy refaktor |
| 2         | **Faza 1** — Blog split          | 🔴        | Największy zysk wydajnościowy przy niskim ryzyku    |
| 3         | **Faza 4** — SEO schemas         | 🟡        | Bezpośredni wpływ na widoczność w Google            |
| 4         | **Faza 2** — Dictionaries i18n   | 🟡        | Kluczowe przed dodaniem nowych lokalizacji          |
| 5         | **Faza 6** — Bundle optimization | 🟢        | Zysk wydajnościowy, ale mniejszy niż Faza 1         |
| 6         | **Faza 3** — Tool page templates | 🟢        | Duży refaktor — wdrażać po ustabilizowaniu Faz 1-4  |

---

## Nowe paczki do rozważenia w przyszłości

| Paczka                      | Kiedy  | Uzasadnienie                             |
| --------------------------- | ------ | ---------------------------------------- |
| `@t3-oss/env-nextjs`        | Faza 5 | Walidacja zmiennych środowiskowych z Zod |
| `next-bundle-analyzer` (CI) | Faza 6 | Automatyczny raport bundla w CI/CD       |

---

_Ostatnia aktualizacja: 2025-02-14_
