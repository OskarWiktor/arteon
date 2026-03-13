---
name: arteon-i18n-mega
description: >
  Comprehensive internationalization system for Arteon Agency - 16 locales,
  dictionary system, tool translations, cultural adaptation, locale patterns.
  Combines 4 skills into one deep-dive knowledge base.
---

# Skill: arteon-i18n-mega

Kompletny system internacjonalizacji dla Arteon Agency — 16 lokalizacji.

**Łączy:** arteon-i18n, arteon-data-management, arteon-cultural-adaptation, arteon-locale-patterns

## Kiedy używać

- Dodawanie nowych locale
- Tłumaczenie/lokalizacja treści
- Aktualizacja dictionary
- Cultural adaptation
- URL structure

---

# CZĘŚĆ 1: 16 LOCALES

## URL Structure

| Locale | Tools              | About                 | Contact            |
| ------ | ------------------ | --------------------- | ------------------ |
| **pl** | `/narzedzia`       | `/o-nas`              | `/kontakt`         |
| en     | `/en/tools`        | `/en/about`           | `/en/contact`      |
| de     | `/de/werkzeuge`    | `/de/ueber-uns`       | `/de/kontakt`      |
| es     | `/es/herramientas` | `/es/sobre-nosotros`  | `/es/contacto`     |
| fr     | `/fr/outils`       | `/fr/a-propos`        | `/fr/contact`      |
| pt     | `/pt/ferramentas`  | `/pt/sobre-nos`       | `/pt/contacto`     |
| it     | `/it/strumenti`    | `/it/chi-siamo`       | `/it/contatto`     |
| ro     | `/ro/instrumente`  | `/ro/despre-noi`      | `/ro/contact`      |
| nl     | `/nl/tools`        | `/nl/over-ons`        | `/nl/contact`      |
| hu     | `/hu/eszkozok`     | `/hu/rolunk`          | `/hu/kapcsolat`    |
| cs     | `/cs/nastroje`     | `/cs/o-nas`           | `/cs/kontakt`      |
| sv     | `/sv/verktyg`      | `/sv/om-oss`          | `/sv/kontakt`      |
| da     | `/da/vaerktojer`   | `/da/om-os`           | `/da/kontakt`      |
| no     | `/no/verktoy`      | `/no/om-oss`          | `/no/kontakt`      |
| fi     | `/fi/tyokalut`     | `/fi/tietoa-meista`   | `/fi/yhteystiedot` |
| el     | `/el/ergaleia`     | `/el/sxetika-me-emas` | `/el/epikoinonia`  |

**PL = default** (no URL prefix)

---

# CZĘŚĆ 2: DATA STRUCTURE

## File Structure

```
data/
├── {locale}/
│   ├── dictionary.json       # UI strings
│   ├── tools/*.json          # 92 tool pages
│   ├── tools-ui/*.json       # 12 tool UIs
│   └── pages/*.json          # Static pages
└── pl/
    └── blog.json             # PL only
```

## Tool Data Structure

```typescript
interface ToolPageData {
  toolKey: string;
  locale: Locale;
  metadata: {
    title: string;        // 50-60 chars
    description: string;  // 150-160 chars
    ogImage: string;
    path: string;
  };
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  breadcrumbs: { ... };
  schemas: { software, howTo };
  contentBlocks: ToolContentBlock[];
  cta?: { ... };
}
```

## Dictionary Structure

```typescript
interface ClientDictionary {
  nav: { home, about, contact, tools, ... };
  ui: { loading, error, success, cancel, save, ... };
  forms: { name, email, message, submit, ... };
  tools: { upload, download, convert, ... };
}
```

---

# CZĘŚĆ 3: DICTIONARY USAGE

## Server Component

```typescript
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function Page({ params }) {
  const { locale } = await params; // Must await in Next.js 16
  const dict = await getDictionary(locale);

  return <h1>{dict.nav.home}</h1>;
}
```

## Client Component

```typescript
'use client';
import { useDictionary } from '@/lib/LocaleContext';

export function Button() {
  const { dictionary } = useDictionary();
  return <button>{dictionary.ui.submit}</button>;
}
```

## Adding New Key

Add to **all 16** `dictionary.json` files:

```json
// data/pl/dictionary.json
{ "ui": { "newKey": "Nowy tekst" } }

// data/en/dictionary.json
{ "ui": { "newKey": "New text" } }
// ... all 16 locales
```

---

# CZĘŚĆ 4: LOCALIZATION ≠ TRANSLATION

## Key Principle

Each locale should **VARY structure, phrasing, presentation** — not be 1:1 mirror.

```
❌ Translation (same structure)
PL: "Stwórz paletę w 3 krokach"
EN: "Create a palette in 3 steps"

✅ Localization (adapted)
PL: "Stwórz paletę w kilka kliknięć"
EN: "Generate harmonious color palettes instantly"
```

## Regional Considerations

| Locale | Region(s)                       | Notes                 |
| ------ | ------------------------------- | --------------------- |
| pt     | Portugal + Brazil + Angola      | Different terminology |
| de     | Germany + Austria + Switzerland | Formal in CH          |
| en     | Global                          | Neutral terminology   |
| es     | Spain + Latin America           | vosotros vs ustedes   |
| fr     | France + Canada + Belgium       | Quebec French differs |

---

# CZĘŚĆ 5: LANGUAGE FAMILY PATTERNS

## Germanic (DE, NL, EN, SV, DA, NO)

- **Tone:** Direct, practical
- **Structure:** Efficient, no fluff
- **Trust:** Quality, precision

## Romance (FR, ES, PT, IT, RO)

- **Tone:** Warm, expressive
- **Structure:** Relationship-oriented
- **Trust:** Personal connection

## Slavic (PL, CS)

- **Tone:** Practical, detailed
- **Structure:** Thorough explanations
- **Trust:** Expertise, experience

## Nordic (SV, DA, NO, FI)

- **Tone:** Informal, equalitarian
- **Structure:** Straightforward
- **Trust:** Transparency

---

# CZĘŚĆ 6: LOCALE-SPECIFIC PATTERNS

## Polish (PL) - Primary

| Aspect  | Pattern                           |
| ------- | --------------------------------- |
| Voice   | Mentorski, przyjazny              |
| Address | "Ty" dla czytelnika               |
| Company | "My" dla Arteon                   |
| Avoid   | Korpo-język, AI frazy, anglicyzmy |

```
✅ "Stwórz paletę w kilka kliknięć"
✅ "Pomożemy Ci znaleźć idealne kolory"
❌ "Kliknij przycisk aby wygenerować"
```

## German (DE)

| Aspect | Pattern             |
| ------ | ------------------- |
| Voice  | Formal (Sie)        |
| Tone   | Präzise, sachlich   |
| Focus  | Qualitätsorientiert |

```
✅ "Erstellen Sie Ihre Farbpalette"
✅ "Professionelle Werkzeuge für Designer"
```

## English (EN)

| Aspect | Pattern               |
| ------ | --------------------- |
| Voice  | Global neutral        |
| Tone   | Direct, efficient     |
| Avoid  | UK/US specific idioms |

```
✅ "Create stunning color palettes"
✅ "Free tool, no signup required"
```

## French (FR)

| Aspect  | Pattern                          |
| ------- | -------------------------------- |
| Voice   | Élégant, sophistiqué             |
| Address | Vous (formel)                    |
| Notes   | Accents critical, Quebec differs |

## Spanish (ES)

| Aspect  | Pattern                            |
| ------- | ---------------------------------- |
| Voice   | Cálido, expresivo                  |
| Address | Ustedes (LATAM), Vosotros (España) |
| Notes   | ¡! and ¿? marks                    |

---

# CZĘŚĆ 7: CULTURAL ADAPTATIONS

## Formality Levels

| Locale | Level       | Address |
| ------ | ----------- | ------- |
| PL     | Semi-formal | "Ty"    |
| DE     | Formal      | "Sie"   |
| FR     | Semi-formal | "vous"  |
| EN     | Neutral     | "you"   |
| SV     | Informal    | "du"    |

## CTA Translations

| Locale | "Contact us"         |
| ------ | -------------------- |
| pl     | Skontaktuj się       |
| de     | Kontaktieren Sie uns |
| fr     | Contactez-nous       |
| es     | Contáctenos          |
| en     | Get in touch         |

## Trust Signals

| Locale | "Free, no signup"           |
| ------ | --------------------------- |
| pl     | Bezpłatnie, bez rejestracji |
| de     | Kostenlos, ohne Anmeldung   |
| fr     | Gratuit, sans inscription   |
| es     | Gratis, sin registro        |
| en     | Free, no signup required    |

## Date Formats

| Locale | Format       | Example          |
| ------ | ------------ | ---------------- |
| PL     | D MMMM YYYY  | 15 stycznia 2024 |
| EN     | MMMM D, YYYY | January 15, 2024 |
| DE     | D. MMMM YYYY | 15. Januar 2024  |

## Currency

```json
// PL
{ "price": "od 3 500 zł" }

// DE
{ "price": "ab 3.500 €" }

// EN
{ "price": "from €3,500" }
```

---

# CZĘŚĆ 8: JSON RULES

## Encoding

- **UTF-8 without BOM**
- **Actual diacritics** (ą, ę, ü, ö, ù, è, –)
- **No Unicode escapes** (`\u00f3` → `ó`)

## Polish Quotes

```json
// ❌ Wrong - breaks JSON
{ "text": "Tekst „cytowany"" }

// ✅ Correct
{ "text": "Tekst &quot;cytowany&quot;" }
// or
{ "text": "Tekst 'cytowany'" }
```

---

# CZĘŚĆ 9: HREFLANG

```typescript
// Metadata in layout
export const metadata = {
  alternates: {
    canonical: 'https://arteon.pl/narzedzia/generator-palety',
    languages: {
      pl: 'https://arteon.pl/narzedzia/generator-palety',
      en: 'https://arteon.pl/en/tools/color-palette-generator',
      de: 'https://arteon.pl/de/werkzeuge/farbpaletten-generator',
      // ... all 16
    },
  },
};
```

---

# CZĘŚĆ 10: WORKFLOWS

## Adding New Tool

1. Create `data/{locale}/tools/{tool}.json` for all 16 locales
2. Add tool UI strings to `data/{locale}/tools-ui/` if interactive
3. Create component in `components/sections/tools/`
4. Update `lib/i18n/tool-registry.ts`
5. Test all locales

## Adding New Locale

1. Create `data/{locale}/` directory
2. Copy all JSON files from existing locale
3. Translate/localize content (not 1:1!)
4. Update `lib/i18n/locales.ts`
5. Create routes in `app/{locale}/`
6. Add hreflang entries
7. Build and test

## Adding Dictionary Key

1. Add key to all 16 `dictionary.json` files
2. Update TypeScript interface (if typed)
3. Test affected components

---

# CZĘŚĆ 11: KEY FILES

| File                         | Purpose            |
| ---------------------------- | ------------------ |
| `lib/i18n/locales.ts`        | Locale config      |
| `lib/i18n/get-dictionary.ts` | Server dictionary  |
| `lib/LocaleContext.tsx`      | Client dictionary  |
| `lib/i18n/tool-registry.ts`  | Tool data (~400KB) |
| `types/locale.ts`            | Type definitions   |

---

# CZĘŚĆ 12: CHECKLISTS

## New Content

- [ ] All 16 locales have the text
- [ ] Proper diacritics used
- [ ] No JSON parse errors
- [ ] **Localized** (not just translated)
- [ ] Cultural fit for each region

## New Locale

- [ ] Directory created
- [ ] All files copied
- [ ] Content localized (not 1:1)
- [ ] Routes created
- [ ] Hreflang updated
- [ ] Build passes

## Quality Per Locale

- [ ] Correct grammar
- [ ] Proper diacritics
- [ ] Appropriate formality
- [ ] Cultural fit
- [ ] Not literal translation
- [ ] Local legal references (if applicable)
- [ ] Regional terminology
