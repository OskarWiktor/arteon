# Skill: arteon-i18n

Szczegółowe informacje o lokalizacji projektu Arteon Agency.

## 16 Locales URL Table

| Locale | Tools              | About                 | Contact            |
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

## How i18n Works

1. PL = default locale → `app/(pl)/`, no URL prefix
2. Others = explicit dirs `app/en/`, `app/de/` etc.
3. Dictionary: `data/{locale}/dictionary.json`
4. Client: `LocaleProvider` → `useDictionary()` hook
5. Server: `lib/i18n/get-dictionary.ts` with Zod validation
6. Tool data: `data/{locale}/tools/*.json` (92 files/locale)
7. Tool UI strings: `data/{locale}/tools-ui/*.json` (12 files/locale)

## Key i18n Files

- `lib/i18n/locales.ts` — master config, dictionary imports
- `lib/i18n/locale-config.ts` — paths, labels
- `lib/i18n/tool-registry.ts` — 92 tools × 16 locales (~400KB)
- `lib/i18n/client-dictionary.ts` — client loader (server-only import)
- `lib/LocaleContext.tsx` — `useLocale()`, `useLocaleConfig()`, `useDictionary()`
- `types/locale.ts` — Locale, LocaleConfig, NavigationUi, FooterUi types

## PL-only Features

Services, blog/education, portfolio/projects, pricing calculator, testimonials, sitemap page, FAQ, "Dołącz do sieci"

## Non-PL Locales (15)

Each: 4 static pages (about, contact, privacy, terms) + tools index + 92 tool pages = 96 pages

## Data per locale

| File/Dir                                                     | All locales | PL only |
| ------------------------------------------------------------ | ----------- | ------- |
| `dictionary.json`                                            | ✓           |         |
| `tools/*.json`                                               | ✓           |         |
| `tools-ui/*.json`                                            | ✓           |         |
| `pages/*.json`                                               | non-PL only |         |
| `blog/`, `calculator/`, `projects.json`, `testimonials.json` |             | ✓       |

## JSON Rules

- UTF-8 without BOM
- No Polish typographic quotes „" → use `&quot;` or apostrophes
- No Unicode escapes → use actual characters (ą, ę, ü, ö, ù, è, –)
- Use actual diacritics for each language

## Localization vs Translation

Each locale must VARY structure, phrasing, presentation — not be 1:1 mirror.  
Consider all countries per language: PT = Portugal + Brazil + Angola; DE = Germany + Austria + Switzerland; EN = global.  
Add country/region-specific legal context per locale.
