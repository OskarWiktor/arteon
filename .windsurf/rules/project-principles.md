# Arteon Agency Project Principles

## Core Development Principles

### 1. TypeScript First

- **Rule:** Wszystkie nowe pliki muszą być TypeScript (`.ts`, `.tsx`)
- **Exception:** Tylko konfiguracja budowania może używać JavaScript
- **Enforcement:** `tsconfig.json` z `strict: true` i `noImplicitAny: true`

### 2. Server Components by Default

- **Rule:** Używaj Server Components jako domyślny wybór
- **Exception:** `'use client'` tylko gdy absolutnie konieczne (interaktywność, stany, API przeglądarki)
- **Pattern:** Minimalizuj granice client - trzymaj logikę po stronie serwera

### 3. Performance First

- **Rule:** Każda zmiana musi spełniać budżety wydajności:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
  - Bundle size < 250KB gzipped

### 4. Security First

- **Rule:** Wszystkie dane wejściowe muszą być walidowane
- **Pattern:** Zod schemas dla walidacji
- **Requirement:** Brak `any` w kodzie produkcyjnym

### 5. Accessibility First

- **Rule:** WCAG 2.1 AA compliance dla wszystkich komponentów
- **Pattern:** Semantic HTML, ARIA labels, keyboard navigation
- **Testing:** Automatyczne testy dostępności w CI/CD

## Code Standards

### File Naming

```typescript
// Komponenty React
ComponentName.tsx; // PascalCase
useHookName.ts; // useCamelCase
utilityFunction.ts; // camelCase
typeDefinition.ts; // camelCase
interfaceDefinition.ts; // camelCase

// Pliki danych
tool - data.json; // kebab-case
ui - translations.json; // kebab-case
dictionary.json; // kebab-case

// Strony
page.tsx; // page (route)
layout.tsx; // layout (route)
loading.tsx; // loading (route)
error.tsx; // error (route)
not - found.tsx; // not-found (route)
```

### Import/Export Patterns

```typescript
// Type imports
import type { User, Tool } from '@/types';

// Default exports dla komponentów
export default ComponentName;

// Named exports dla utilities
export { validateInput, sanitizeHtml };

// Dynamic imports dla ciężkich komponentów
const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

### Component Structure

```typescript
// Struktura komponentu
interface ComponentProps {
  // Props interface na początku
  className?: string;
  children?: React.ReactNode;
}

export default function ComponentName({ className, children }: ComponentProps) {
  // Hooki na początku
  const [state, setState] = useState();

  // Funkcje pomocnicze
  const helperFunction = () => {
    // Logika
  };

  // Render na końcu
  return (
    <div className={className}>
      {children}
    </div>
  );
}
```

## Data Management Rules

### JSON Data Structure

```json
{
  "toolKey": "unique-key",
  "locale": "pl",
  "metadata": {
    "title": "50-60 characters",
    "description": "150-160 characters"
  }
}
```

### Validation Rules

- **UTF-8 bez BOM** dla wszystkich plików JSON
- **Brak polskich cudzysłowów** „" → użyj `&quot;`
- **Brak Unicode escapes** → użyj rzeczywistych znaków (ą, ę, ü, ö)
- **Walidacja Zod** dla wszystkich danych wejściowych

### Database Rules

- **Parameterized queries** - zawsze używaj placeholders
- **Transactions** dla operacji wielokrokowych
- **Connection pooling** - limituj połączenia
- **Encryption** dla danych wrażliwych

## UI/UX Standards

### Design System Tokens

```css
/* --primary: #1b2632 */
.text-primary {
  color: var(--primary);
}
.text-light {
  color: #6b7280;
}
.text-mid {
  color: #374151;
}
.text-dark {
  color: #111827;
}

/* Zawsze używaj klas semantycznych */
.bg-primary {
  background-color: var(--primary);
}
.border-primary {
  border-color: var(--primary);
}
```

### Icon Usage

- **Tylko react-icons/ri** - zabronione lucide-react
- **Wymiary:** `width="24" height="24"`
- **Kolor:** `text-[#1b2632]`

### Responsive Design

- **Mobile-first** podejście
- **Tailwind breakpoints:** `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **Container queries** dla komponentów

## Performance Rules

### Bundle Optimization

```typescript
// Dynamic imports
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

// Optimize package imports
experimental: {
  optimizePackageImports: ['react-icons/ri', 'sharp'],
}
```

### Image Optimization

```typescript
// Zawsze next/image
<Image
  src={imageSrc}
  alt={altText}
  width={width}
  height={height}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Caching Strategy

- **React.cache** dla danych serwerowych
- **Cache Components** dla dynamicznych danych
- **ISR** dla stron z częstymi aktualizacjami

## Security Rules

### Input Validation

```typescript
// Zawsze waliduj dane wejściowe
const schema = z.object({
  input: z.string().min(1).max(10000),
  format: z.enum(['jpg', 'png', 'webp']),
});

const validated = schema.parse(input);
```

### API Security

- **Rate limiting** dla wszystkich endpointów
- **CORS headers** skonfigurowane
- **HTTPS** wymuszony w produkcji
- **Environment variables** nigdy w commitach

### Frontend Security

```typescript
// CSP headers
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
`;
```

## Testing Requirements

### Test Coverage

- **Unit tests:** 80% coverage
- **Integration tests:** kluczowe ścieżki
- **E2E tests:** krytyczne ścieżki użytkownika
- **Performance tests:** Core Web Vitals

### Test Structure

```typescript
// Unit tests
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test
  });
});

// E2E tests
test.describe('User Workflow', () => {
  test('should complete conversion', async ({ page }) => {
    // Test
  });
});
```

## Internationalization Rules

### Locale Structure

- **PL:** Domyślna, bez prefiksu URL
- **Inne:** `/[locale]/` prefiks w URL
- **16 locales:** pl, en, de, es, fr, pt, it, ro, nl, hu, cs, sv, da, no, fi, el

### Translation Guidelines

- **Adaptuj, nie tłumacz** - kontekst kulturowy
- **Naturalny język** - unikaj masowych tłumaczeń
- **Spójność w języku** - różnice między regionami

### Data Files

```typescript
// Struktura danych
interface ToolPageData {
  toolKey: string;
  locale: Locale;
  metadata: Metadata;
  hero: Hero;
  contentBlocks: ToolContentBlock[];
}
```

## SEO Requirements

### Meta Tags

```typescript
// Title: 50-60 znaków
// Description: 150-160 znaków
export const metadata: Metadata = {
  title: 'Page Title - Arteon Agency',
  description: 'Page description with keywords',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://arteonagency.pl/page',
  },
};
```

### Schema Markup

- **SoftwareApplication** dla narzędzi
- **HowTo** dla instrukcji
- **FAQPage** dla FAQ
- **BreadcrumbList** dla nawigacji

## Development Workflow

### Git Workflow

```bash
# Branch naming
feature/tool-name
fix/issue-description
hotfix/critical-fix

# Commit messages
feat: add new converter tool
fix: resolve validation error
docs: update API documentation
```

### Code Review Checklist

- [ ] TypeScript types poprawne
- [ ] Testy przechodzą
- [ ] Performance zbadana
- [ ] Accessibility sprawdzona
- [ ] Security zaimplementowana

### Pre-commit Hooks

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test:ci"
    }
  }
}
```

## Error Handling

### Error Boundaries

```typescript
// Komponent błędu dla sekcji
export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border border-red-200 rounded-md bg-red-50">
      <h3>Something went wrong</h3>
      <p>Please try again or contact support.</p>
    </div>
  );
}
```

### Server Actions

```typescript
// Nigdy nie opakowuj błędów nawigacyjnych w try-catch
export async function createAction(formData: FormData) {
  let result;

  try {
    result = await db.action.create({ data: formData });
  } catch (error) {
    return { error: 'Action failed', success: false };
  }

  redirect(`/action/${result.id}`); // Poza try-catch
}
```

## Monitoring & Logging

### Error Logging

```typescript
// Loguj błędy produkcyjne
if (process.env.NODE_ENV === 'production') {
  console.error('Production error:', error);
  // Wyślij do serwisu monitoringu
}
```

### Performance Monitoring

```typescript
// Śledź Core Web Vitals
export function reportWebVitals(metric: any) {
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'Web Vitals',
    });
  }
}
```

## Deployment Rules

### Environment Variables

```bash
# .env.example (bezpieczny do commita)
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://arteonagency.pl
DATABASE_URL=postgresql://...
```

### Build Process

```bash
# Pre-build scripts
npm run validate-data
npm run generate-search-index

# Build
npm run build

# Post-build
npm run generate-sitemap
```

## Quality Gates

### Pre-merge Requirements

- ✅ Wszystkie testy przechodzą
- ✅ Linting bez błędów
- ✅ Build pomyślny
- ✅ Performance > 90 Lighthouse
- ✅ Accessibility > 95

### Production Deployment

- ✅ Health checks przechodzą
- ✅ Monitoring aktywny
- ✅ Backup stworzony
- ✅ Rollback plan gotowy

## Documentation Standards

### Code Documentation

```typescript
/**
 * Konwertuje obrazek do formatu WebP
 * @param buffer - Buffer obrazu
 * @param quality - Jakość konwersji (1-100)
 * @returns Promise<Buffer> - Skonwertowany buffer
 */
export async function convertToWebP(buffer: Buffer, quality: number = 85): Promise<Buffer> {
  // Implementacja
}
```

### README Standards

- **Purpose:** Krótki opis przeznaczenia
- **Usage:** Przykłady użycia
- **API:** Dokumentacja API (jeśli dotyczy)
- **Dependencies:** Wymagane zależności

## Anti-Patterns

### Zakazane praktyki

```typescript
// ❌ Nigdy nie używaj any
const data: any = fetchData();

// ❌ Nigdy nie używaj eval
const result = eval(userInput);

// ❌ Nigdy nie ufaj innerHTML bez sanitacji
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ❌ Nigdy nie twórz synchronicznych operacji I/O
const data = fs.readFileSync('file.json');
```

### Zalecane praktyki

```typescript
// ✅ Używaj konkretnych typów
interface User {
  id: string;
  name: string;
}

// ✅ Używaj React.cache dla danych
const getUser = cache(async (id: string) => {
  return await db.user.findUnique({ where: { id } });
});

// ✅ Używaj Server Components domyślnie
export default async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}
```

## Compliance & Legal

### VAT Rules

- **VAT exemption:** Wszystkie ceny są ostateczne (brutto/netto)
- **Brak informacji o VAT:** Nigdy nie wspominaj "VAT 23%" itp.
- **Fakturowanie:** Ceny na fakturach są końcowe

### Data Protection

- **GDPR compliance** dla danych użytkowników
- **Cookie consent** wymagany
- **Data retention** polityka retencji danych
- **Right to deletion** implementacja usuwania danych

## Tool-Specific Rules

### Image Converters (47 tools)

- **File size limit:** 10MB
- **Supported formats:** jpg, png, webp, avif, gif, bmp, tiff
- **Processing timeout:** 60 seconds
- **Quality range:** 1-100

### Text Converters (8 tools)

- **Input size limit:** 1MB
- **Encoding:** UTF-8
- **Line ending normalization:** LF
- **Special character handling**

### Unit Converters (17 tools)

- **Precision:** 2 decimal places
- **Input validation:** numeric ranges
- **Error handling:** invalid inputs
- **Result formatting:** locale-specific

## Maintenance Rules

### Regular Tasks

- **Weekly:** Dependency updates
- **Monthly:** Security audits
- **Quarterly:** Performance reviews
- **Yearly:** Architecture assessment

### Emergency Procedures

- **Critical bugs:** Hotfix deployment
- **Security issues:** Immediate patch
- **Performance degradation:** Rollback
- **Data corruption:** Restore from backup

Te zasady zapewniają spójność, jakość i bezpieczeństwo projektu Arteon Agency przy jednoczesnym wspieraniu wydajności i skalowalności dla 92 narzędzi i 16 lokalizacji.
