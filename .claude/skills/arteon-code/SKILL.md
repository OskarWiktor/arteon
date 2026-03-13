---
name: arteon-code
description: >
  Comprehensive code system for Arteon Agency - TypeScript patterns, React 19,
  Next.js 16, custom hooks, lib utilities, build scripts, architecture,
  code quality, documentation. Combines 8 skills into one deep-dive knowledge base.
---

# Skill: arteon-code

Kompletny system kodowania dla Arteon Agency — TypeScript, React 19, Next.js 16.

**Łączy:** arteon-ai-code-intelligence, arteon-types-intelligence, arteon-typescript-advanced-intelligence, arteon-hooks-intelligence, arteon-lib-intelligence, arteon-scripts-intelligence, arteon-architecture-intelligence, arteon-code-documentation-intelligence

## Kiedy używać

- Pisanie nowego kodu
- Code review
- Refaktoryzacja
- TypeScript patterns
- Custom hooks
- Build scripts
- Rozumienie architektury

---

# CZĘŚĆ 1: TECH STACK

## Core Technologies

| Technology       | Version | Notes                         |
| ---------------- | ------- | ----------------------------- |
| **Next.js**      | 16.1.6  | App Router, Server Components |
| **React**        | 19.2.4  | useActionState, ref as prop   |
| **TypeScript**   | 5.x     | Strict mode                   |
| **Tailwind CSS** | 4.x     | v4 syntax                     |
| **Zod**          | latest  | Validation                    |

## Commands

```bash
# Development
npm run dev

# Lint check
npm run lint

# Lint with auto-fix
npm run lint -- --fix

# Type check
npx tsc --noEmit

# Build (includes lint + type check)
npm run build
```

---

# CZĘŚĆ 2: PROJECT ARCHITECTURE

## Structure

```
arteon/
├── app/                    # Next.js App Router
│   ├── (pl)/              # Polish routes (default)
│   ├── en/, de/, es/...   # 15 other locales
│   └── api/               # API routes
├── components/             # React components
│   ├── ui/                # Reusable primitives (Button, Input)
│   ├── sections/          # Page sections (Hero, FAQ)
│   ├── shared/            # Shared (Navigation, Footer)
│   └── pages/             # Page-specific
├── data/                   # JSON data
│   └── {locale}/          # Per-locale data
├── lib/                    # Library code
│   ├── i18n/              # Internationalization
│   ├── consent/           # Analytics consent
│   └── seo/               # SEO utilities
├── hooks/                  # Custom React hooks
├── utils/                  # Utility functions
├── types/                  # TypeScript types
├── scripts/                # Build scripts
└── docs/                   # Documentation
```

## Key Decisions

| Decision               | Why                                          |
| ---------------------- | -------------------------------------------- |
| App Router (not Pages) | Server Components, better performance        |
| Locale as route prefix | `/en/tools` not `en.arteon.pl` — simpler SEO |
| Data in JSON           | Static generation, fast builds, easy editing |
| react-icons/ri         | Remix Icons — project standard               |

---

# CZĘŚĆ 3: TYPESCRIPT PATTERNS

## Async Params (Next.js 16)

```typescript
// ✅ Correct - await params
export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  return <div>{locale}</div>;
}

// ❌ Wrong - direct access (Next.js 15 style)
export default function Page({ params }: { params: { locale: string } }) {
  return <div>{params.locale}</div>; // Error in Next.js 16
}
```

## React 19 Ref Forwarding

```typescript
// ✅ Correct - ref as prop (React 19)
interface ButtonProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, ref, ...props }: ButtonProps) {
  return <button ref={ref} {...props}>{children}</button>;
}

// ❌ Wrong - forwardRef (React 18 style, deprecated)
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <button ref={ref} {...props} />;
});
```

## Server Actions (React 19)

```typescript
// ✅ Correct - useActionState
'use client';
import { useActionState } from 'react';

function Form() {
  const [state, action, pending] = useActionState(submitForm, initialState);
  return (
    <form action={action}>
      <button disabled={pending}>Submit</button>
    </form>
  );
}

// ❌ Wrong - useFormState (deprecated)
import { useFormState } from 'react-dom';
```

---

# CZĘŚĆ 4: CORE TYPES

## Locale Type

```typescript
// types/locale.ts
export type Locale = 'pl' | 'en' | 'de' | 'es' | 'fr' | 'pt' | 'it' | 'ro' | 'nl' | 'hu' | 'cs' | 'sv' | 'da' | 'no' | 'fi' | 'el';

export const locales: readonly Locale[] = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'] as const;
```

## Tool Data Type

```typescript
// types/tool.ts
export interface ToolPageData {
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
    software: SoftwareSchema;
    howTo: HowToSchema;
  };
  contentBlocks: ToolContentBlock[];
  cta?: CTABlock;
}

export type ToolContentBlock = SectionInfoBlock | SectionBasicBlock | SectionStepsBlock | SectionDemoBlock | FaqBlock | GapBlock | ToolsCarouselBlock;
```

## Key Type Files

| File                | Contains                                             |
| ------------------- | ---------------------------------------------------- |
| `types/locale.ts`   | `Locale`, `LocaleConfig`, `NavigationUi`, `FooterUi` |
| `types/tool.ts`     | `ToolPageData`, `ToolContentBlock`, `ToolItemKey`    |
| `types/ui.ts`       | `BreadcrumbsProps`, `ButtonProps`, etc.              |
| `types/article.ts`  | `Article`, `BlogPost`                                |
| `types/global.d.ts` | Global declarations (window, gtag)                   |

---

# CZĘŚĆ 5: ADVANCED TYPESCRIPT

## Generics

```typescript
// Basic
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

// With constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Multiple generics
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
```

## Utility Types

```typescript
// Partial - all optional
type ToolUpdate = Partial<ToolPageData>;

// Pick - select properties
type ToolMeta = Pick<ToolPageData, 'metadata' | 'hero'>;

// Omit - exclude properties
type ToolWithoutCTA = Omit<ToolPageData, 'cta'>;

// Record - key-value map
type LocaleToolMap = Record<Locale, ToolPageData>;

// Custom: Make specific keys optional
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```

## Type Guards

```typescript
// Custom type guard
function isFaqBlock(block: ContentBlock): block is FaqBlock {
  return block.type === 'faq';
}

// Usage
const faqs = contentBlocks.filter(isFaqBlock);
// faqs is FaqBlock[]
```

## Discriminated Unions

```typescript
type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'faq'; items: FaqItem[] };

function renderBlock(block: ContentBlock) {
  switch (block.type) {
    case 'text':
      return <p>{block.content}</p>;
    case 'image':
      return <img src={block.src} alt={block.alt} />;
    case 'faq':
      return <FaqSection items={block.items} />;
  }
}
```

## satisfies & as const

```typescript
// satisfies - type check without widening
const config = {
  pl: { label: 'Polski', path: '/narzedzia' },
  en: { label: 'English', path: '/en/tools' },
} satisfies Record<Locale, { label: string; path: string }>;
// config.pl.label is string (not string | undefined)

// as const - literal types
const locales = ['pl', 'en', 'de'] as const;
type Locale = (typeof locales)[number]; // 'pl' | 'en' | 'de'
```

---

# CZĘŚĆ 6: ZOD VALIDATION

## Tool Data Validation

```typescript
// lib/i18n/schemas.ts
import { z } from 'zod';
import { locales } from '@/types/locale';

export const toolMetadataSchema = z.object({
  title: z.string().min(1).max(60),
  description: z.string().min(1).max(160),
  ogImage: z.string(),
  path: z.string(),
});

export const toolDataSchema = z.object({
  toolKey: z.string(),
  locale: z.enum(locales),
  metadata: toolMetadataSchema,
  hero: z.object({
    title: z.string(),
    description: z.string(),
    backgroundImage: z.string(),
  }),
  contentBlocks: z.array(z.any()),
});
```

## Form Validation

```typescript
const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi mieć min. 2 znaki'),
  email: z.string().email('Nieprawidłowy email'),
  message: z.string().min(10, 'Wiadomość musi mieć min. 10 znaków'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Zgoda jest wymagana' }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;
```

---

# CZĘŚĆ 7: CUSTOM HOOKS

## Available Hooks

```
hooks/
├── useCarouselScroller.ts    # Carousel scroll logic
├── useCopyToClipboard.ts     # Clipboard operations
├── useDebouncedEffect.ts     # Debounced useEffect
├── useEscapeKey.ts           # Escape key handler
├── useFormattedDate.ts       # Date formatting
├── useImageResizer.ts        # Image resize logic
├── useLocalStorage.ts        # localStorage wrapper
├── useMediaQuery.ts          # Media query hook
├── useMousePosition.ts       # Mouse tracking
├── useOnClickOutside.ts      # Click outside detection
├── useQRCode.ts              # QR code generation
├── useScrollPosition.ts      # Scroll position
├── useThrottle.ts            # Throttle values
└── useWindowSize.ts          # Window dimensions
```

## useCopyToClipboard

```typescript
export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
      return true;
    } catch {
      return false;
    }
  }, [resetDelay]);

  return { copied, copy };
}

// Usage
const { copied, copy } = useCopyToClipboard();
<button onClick={() => copy(text)}>
  {copied ? 'Skopiowano!' : 'Kopiuj'}
</button>
```

## useDebounce

```typescript
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const debouncedSearch = useDebounce(search, 300);
```

## useLocalStorage

```typescript
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

## useOnClickOutside

```typescript
export function useOnClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
```

## Hook Rules

1. **Prefix with `use`**
2. **One responsibility per hook**
3. **Return object for multiple values**
4. **Handle SSR** (`typeof window`)
5. **Clean up effects**
6. **Memoize callbacks** (`useCallback`)

---

# CZĘŚĆ 8: LIB UTILITIES

## Structure

```
lib/
├── consent/                # Analytics consent
│   ├── ahrefs.ts
│   ├── consentCookie.ts
│   └── ga.ts
├── i18n/                   # Internationalization
│   ├── get-dictionary.ts
│   ├── locale-config.ts
│   └── tool-registry.ts    # 92 tools × 16 locales
├── seo/
│   └── schema.ts           # JSON-LD schemas
├── LocaleContext.tsx       # Locale provider
└── utils.ts                # General utilities
```

## LocaleContext

```typescript
// lib/LocaleContext.tsx
'use client';

const LocaleContext = createContext<{
  locale: Locale;
  dictionary: ClientDictionary;
} | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used within LocaleProvider');
  return context.locale;
}

export function useDictionary() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useDictionary must be used within LocaleProvider');
  return context;
}
```

## getDictionary (Server)

```typescript
// lib/i18n/get-dictionary.ts
import { cache } from 'react';

const dictionaries: Record<Locale, () => Promise<ClientDictionary>> = {
  pl: () => import('@/data/pl/dictionary.json').then((m) => m.default),
  en: () => import('@/data/en/dictionary.json').then((m) => m.default),
  // ... all 16 locales
};

export const getDictionary = cache(async (locale: Locale) => {
  return dictionaries[locale]();
});
```

## Google Analytics

```typescript
// lib/consent/ga.ts
export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

export function updateConsent(consent: 'granted' | 'denied') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: consent,
    });
  }
}
```

---

# CZĘŚĆ 9: BUILD SCRIPTS

## Script Files

```
scripts/
├── generate-search-index.cjs   # Search index generation
├── indexnow-notify.cjs         # Notify search engines
├── postbuild-sitemap-hreflang.cjs  # Sitemap enhancement
└── split-blog.cjs              # Blog data processing
```

## Script Template

```javascript
// scripts/my-script.cjs
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('Starting script...');

  try {
    // Script logic
    console.log('✅ Done!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
```

## package.json Integration

```json
{
  "scripts": {
    "prebuild": "node scripts/generate-search-index.cjs",
    "build": "next build",
    "postbuild": "next-sitemap && node scripts/indexnow-notify.cjs"
  }
}
```

## Common Patterns

```javascript
// Process all locales
const LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

LOCALES.forEach((locale) => {
  const dataDir = path.join(__dirname, `../data/${locale}/tools`);
  // Process locale
});

// Read JSON safely
function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    console.error(`Failed to read ${filePath}:`, error.message);
    return null;
  }
}

// Write JSON formatted
function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}
```

---

# CZĘŚĆ 10: CODE QUALITY

## ESLint Config

```javascript
// eslint.config.js
export default [
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
```

## Code Review Checklist

### TypeScript

- [ ] No `any` without justification
- [ ] Interfaces for component props
- [ ] Zod validation for external data
- [ ] Strict null checks

### React / Next.js

- [ ] Server Components where possible
- [ ] `'use client'` only when needed
- [ ] Async params in Next.js 16
- [ ] React.cache() for expensive computations

### Performance

- [ ] No unnecessary re-renders
- [ ] Images via `next/image`
- [ ] Lazy loading for heavy components
- [ ] Bundle size awareness

### Security

- [ ] Sanitized user input
- [ ] No secrets in client code
- [ ] Proper CORS headers

---

# CZĘŚĆ 11: PERFORMANCE PATTERNS

## React.cache

```typescript
import { cache } from 'react';

// Deduplicate data fetches per request
export const getToolData = cache(async (locale: string, toolKey: string) => {
  const data = await fetchToolData(locale, toolKey);
  return data;
});
```

## Dynamic Imports

```typescript
// Heavy component - lazy load
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false,
});
```

## Image Optimization

```typescript
// ✅ Correct
import Image from 'next/image';

<Image
  src="/hero.webp"
  alt="Hero"
  width={1200}
  height={630}
  priority // dla LCP image
/>

// ❌ Wrong
<img src="/hero.webp" alt="Hero" />
```

---

# CZĘŚĆ 12: FILE ORGANIZATION

## Import Order

```typescript
// 1. React/Next
import { useState, useEffect } from 'react';
import Image from 'next/image';

// 2. External packages
import { z } from 'zod';

// 3. Internal - absolute imports
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/lib/LocaleContext';

// 4. Internal - relative imports
import { ToolPanel } from './ToolPanel';

// 5. Types
import type { ToolPageData } from '@/types/tool';

// 6. Styles (if any)
import styles from './Tool.module.css';
```

## Naming Conventions

| Element     | Convention       | Example          |
| ----------- | ---------------- | ---------------- |
| Components  | PascalCase       | `ToolPanel.tsx`  |
| Hooks       | camelCase, use\* | `useDebounce.ts` |
| Utils       | camelCase        | `formatDate.ts`  |
| Types       | PascalCase       | `ToolPageData`   |
| Constants   | SCREAMING_SNAKE  | `MAX_FILE_SIZE`  |
| CSS classes | kebab-case       | `tool-panel`     |

---

# CZĘŚĆ 13: DOCUMENTATION

## JSDoc Pattern

```typescript
/**
 * Formats a date for display
 * @param date - Date to format
 * @param locale - Locale code (default: 'pl')
 * @returns Formatted date string
 * @example
 * formatDate('2024-01-15', 'pl') // "15 stycznia 2024"
 */
export function formatDate(date: Date | string, locale = 'pl'): string {
  // Implementation
}
```

## Component Props Documentation

```typescript
interface ButtonProps {
  /** Button content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
}
```

## Inline Comments

```typescript
// ✅ Explain WHY, not WHAT
// Skip first page of results to avoid duplicates from cache
const results = data.slice(1);

// ✅ Complex logic
// Calculate contrast ratio per WCAG 2.1 formula
const ratio = (L1 + 0.05) / (L2 + 0.05);

// ❌ Obvious - don't comment
// Get the user
const user = getUser();
```

---

# CZĘŚĆ 14: COMMON ERRORS

| Error                               | Cause              | Fix                              |
| ----------------------------------- | ------------------ | -------------------------------- |
| `Type 'X' is not assignable to 'Y'` | Type mismatch      | Check types, add type guard      |
| `Property 'X' does not exist`       | Missing property   | Add to interface or use optional |
| `Object is possibly 'undefined'`    | Nullable value     | Add null check or `!` assertion  |
| `Cannot find module`                | Wrong import path  | Check path, tsconfig paths       |
| `useClient must be at top`          | Directive position | Move `'use client'` to line 1    |
| `Hydration mismatch`                | Server/client diff | Check SSR-safe code              |
| `Too many re-renders`               | Infinite loop      | Check useEffect deps             |

---

# QUICK REFERENCE

## Commands

```bash
npm run dev          # Development
npm run build        # Production build
npm run lint         # Lint check
npx tsc --noEmit     # Type check
```

## File Locations

| Need       | Location      |
| ---------- | ------------- |
| Types      | `types/`      |
| Hooks      | `hooks/`      |
| Utilities  | `utils/`      |
| Services   | `lib/`        |
| Components | `components/` |
| Scripts    | `scripts/`    |

## React 19 Changes

| Old (React 18) | New (React 19)   |
| -------------- | ---------------- |
| `forwardRef()` | `ref` as prop    |
| `useFormState` | `useActionState` |
