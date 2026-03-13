---
name: data-management
description: >
  Data structure, validation, and i18n management for Arteon Agency project - 16 locales,
  92 tools, JSON data rules, localization strategies, performance optimization
---

# Skill: arteon-data-management

Zarządzanie danymi w projekcie Arteon Agency - struktura, walidacja, i18n.

## Data Structure Overview

```
data/
├── {locale}/
│   ├── dictionary.json        # UI translations
│   ├── tools/*.json           # 92 tool pages per locale
│   ├── tools-ui/*.json        # 12 tool UI strings per locale
│   ├── pages/*.json           # Static pages (non-PL)
│   └── [locale-specific]/     # PL-only directories
└── search/                    # Search indexes
```

## 16 Locales

**PL = default** (no prefix). All others have prefixes:

| Locale | Tools              | About                 | Contact            |
| ------ | ------------------ | --------------------- | ------------------ |
| pl     | `/narzedzia`       | `/o-nas`              | `/kontakt`         |
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

## Tool Data Structure

**File:** `data/{locale}/tools/{tool}.json`

```typescript
interface ToolPageData {
  toolKey: ToolItemKey;
  locale: Locale;
  metadata: {
    title: string;
    description: string;
    ogImage: string;
    path: string;
  };
  hero: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  breadcrumbs: {
    second: { href: string; label: string };
    third?: { href: string; label: string };
  };
  schemas: {
    software: {
      name: string;
      description: string;
      featureList: string[];
      screenshots: string[];
      technicalSpecs?: Record<string, string>;
    };
    howTo: {
      name: string;
      description: string;
      steps: Array<{
        name: string;
        text: string;
      }>;
    };
  };
  contentBlocks: ToolContentBlock[];
  cta?: {
    title: string;
    description: string;
    btnOne: string;
    btnOneLink: string;
    btnTwo?: string;
    btnTwoLink?: string;
  };
}
```

## Content Block Types

`sectionInfo` | `sectionBasic` | `sectionSteps` | `sectionDemo` | `sectionTabs` | `sectionFeatureComparison` | `sectionTimeline` | `gap` | `faq` | `toolsCarousel` | `contactForm`

## Tool UI Data

**12 files per locale in `data/{locale}/tools-ui/`:**

- `color-palette.json`
- `email-signature.json`
- `favicon.json`
- `image-resize-editor.json`
- `image-resize.json`
- `jpg-png-webp.json`
- `lorem-ipsum.json`
- `meta-title.json`
- `palette-extractor.json`
- `qr-code.json`
- `wcag-contrast.json`
- `word-count.json`

## Dictionary Structure

**File:** `data/{locale}/dictionary.json`

```typescript
interface ClientDictionary {
  // Navigation
  nav: {
    home: string;
    about: string;
    contact: string;
    tools: string;
    // ...
  };

  // Common UI
  ui: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    // ...
  };

  // Forms
  forms: {
    name: string;
    email: string;
    message: string;
    submit: string;
    // ...
  };

  // Tool-specific
  tools: {
    upload: string;
    download: string;
    convert: string;
    // ...
  };
}
```

## Data Validation (TypeScript 5 + Next.js 16)

**Zod schemas in `lib/i18n/`:**

```typescript
// Tool data validation - TypeScript 5 strict mode
const toolDataSchema = z.object({
  toolKey: z.string(),
  locale: z.enum(locales),
  metadata: z.object({
    title: z.string().min(1).max(60),
    description: z.string().min(1).max(160),
    ogImage: z.string(),
    path: z.string(),
  }),
  hero: z.object({
    title: z.string(),
    description: z.string(),
    backgroundImage: z.string(),
  }),
  breadcrumbs: z.object({
    second: z.object({ href: z.string(), label: z.string() }),
    third: z.object({ href: z.string(), label: z.string() }).optional(),
  }),
  schemas: z.object({
    software: z.object({
      name: z.string(),
      description: z.string(),
      featureList: z.array(z.string()),
      screenshots: z.array(z.string()),
    }),
    howTo: z.object({
      name: z.string(),
      description: z.string(),
      steps: z.array(
        z.object({
          name: z.string(),
          text: z.string(),
        }),
      ),
    }),
  }),
  contentBlocks: z.array(z.any()), // Content blocks validation
});

// Dictionary validation
const dictionarySchema = z.object({
  nav: z.record(z.string()),
  ui: z.record(z.string()),
  forms: z.record(z.string()),
  tools: z.record(z.string()),
});

// Type-safe data access with React.cache
export const getToolData = cache(async (locale: string, toolKey: string) => {
  const registry = await import('./tool-registry');
  const toolData = registry[locale]?.[toolKey];

  // Validate with Zod
  return toolDataSchema.parse(toolData);
});
```

## Tool Registry (Next.js 16 + React 19)

**File:** `lib/i18n/tool-registry.ts` (~400KB)

```typescript
interface ToolRegistry {
  [locale: string]: {
    [toolKey: string]: ToolPageData;
  };
}

// Type-safe cached access with React.cache
export const getToolData = cache(async (locale: string, toolKey: string) => {
  const registry = await import('./tool-registry');
  const toolData = registry[locale]?.[toolKey];

  if (!toolData) {
    throw new Error(`Tool not found: ${toolKey} in ${locale}`);
  }

  // Validate with Zod
  return toolDataSchema.parse(toolData);
});

// Server Actions for tool data
export async function getToolDataSafe(locale: string, toolKey: string) {
  try {
    return await getToolData(locale, toolKey);
  } catch (error) {
    console.error(`Failed to load tool data:`, error);
    return null;
  }
}

// Client-side data fetching with SWR
export function useToolData(locale: string, toolKey: string) {
  return useSWR([`/api/tools/${locale}/${toolKey}`], () => getToolDataSafe(locale, toolKey), {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });
}
```

## Search Index Management

**Prebuild script:** `scripts/generate-search-index.cjs`

**Generated files:**

- `data/pl/search-blog.json` (16.8KB)
- `data/pl/search-projects.json` (4.2KB)

**Structure:**

```typescript
interface SearchItem {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  tags: string[];
}
```

## JSON Data Rules

### Encoding & Format

- **UTF-8 without BOM**
- **No Polish typographic quotes** „" → use `&quot;` or apostrophes
- **No Unicode escapes** → use actual characters (ą, ę, ü, ö, ù, è, –)
- **Proper diacritics** for each language

### Validation Rules

- All JSON files must be valid
- Required fields must be present
- String length limits enforced
- URL patterns validated

### Localization vs Translation

**CRITICAL:** Each locale must VARY structure, phrasing, presentation - not be 1:1 mirror.

**Examples:**

- PT = Portugal + Brazil + Angola (different terminology)
- DE = Germany + Austria + Switzerland (different legal context)
- EN = Global (neutral terminology)

**Add country/region-specific:**

- Legal requirements
- Cultural references
- Local idioms
- Regional terminology

## Data Loading Patterns (Next.js 16.1.6 + React 19.2.4)

### Server Components

```typescript
// Direct import (server-only) - Next.js 16
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; // Must await in Next.js 16
  const dictionary = await getDictionary(locale);

  return <div>{dictionary.ui.loading}</div>;
}
```

### Client Components

```typescript
// Use context hook - React 19
import { useDictionary } from '@/lib/LocaleContext';

export default function Component() {
  const { dictionary } = useDictionary();

  return <div>{dictionary.ui.loading}</div>;
}

// React 19 ref forwarding (no forwardRef needed)
function Button({ children, ref, ...props }: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  return <button ref={ref} {...props}>{children}</button>;
}
```

## Data Updates Workflow

### Adding New Tool

1. Create `data/{locale}/tools/{tool}.json` for all 16 locales
2. Update `lib/i18n/locales.ts` if new tool key
3. Update `lib/i18n/tool-registry.ts` (auto-generated)
4. Add tool UI strings to `data/{locale}/tools-ui/` if needed
5. Test all locales

### Adding New Locale

1. Create `data/{locale}/` directory
2. Copy and adapt all JSON files
3. Update `lib/i18n/locales.ts`
4. Add locale-specific routing
5. Test translation completeness

### Content Updates

1. Update relevant JSON files
2. Run validation scripts
3. Test affected pages
4. Update search indexes if needed

## Performance Optimization

### Lazy Loading

- Tool data loaded on demand
- Search indexes optimized for size
- Dictionary caching with React.cache()

### Bundle Optimization

- Server-side data fetching
- Minimal client-side JSON
- Proper import/export tree shaking

### Caching Strategy

- Tool registry cached in memory
- Dictionary cached per request
- Search indexes static generation

## Error Handling

### Data Validation Errors

- Graceful fallbacks for missing data
- User-friendly error messages
- Proper logging for debugging

### Missing Locale Data

- Default to English where appropriate
- Clear indicators of missing translations
- Development warnings for incomplete data

## Monitoring & Analytics

### Data Integrity

- JSON validation on build
- Translation completeness checks
- Broken link detection

### Performance Metrics

- JSON file size monitoring
- Bundle size impact tracking
- Search index performance

## Best Practices

### File Organization

- Consistent naming conventions
- Logical directory structure
- Clear separation of concerns

### Code Quality

- Type-safe data access
- Proper error boundaries
- Comprehensive testing

### Maintenance

- Regular data audits
- Translation review process
- Performance optimization reviews
