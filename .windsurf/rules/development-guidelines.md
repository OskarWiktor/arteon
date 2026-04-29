# Development Guidelines - Arteon Agency

## Development Setup

### Prerequisites

- Node.js 20.x
- npm 10.x
- Git z skonfigurowanych hooks
- VS Code z zalecanymi rozszerzeniami

### Environment Setup

```bash
# 1. Klonuj repo
git clone https://github.com/arteonagency/arteon.git
cd arteon

# 2. Zainstaluj zależności
npm ci

# 3. Skonfiguruj środowisko
cp .env.example .env.local

# 4. Uruchom deweloperski serwer
npm run dev
```

### IDE Configuration

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## Coding Standards

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*", "./types/*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}
```

### ESLint Configuration

```json
// eslint.config.js
{
  "extends": ["next/core-web-vitals", "next/typescript", "@typescript-eslint/recommended"],
  "rules": {
    "prefer-const": "error",
    "no-var": "error",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

### Prettier Configuration

```json
// .prettierrc.json
{
  "semi": true,
  "trailingComma": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

## Component Development

### Struktura Pliku Komponentu

```typescript
// components/ui/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        {
          'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
          'bg-gray-600 text-white hover:bg-gray-700': variant === 'secondary',
          'border border-gray-300 text-gray-700 hover:bg-gray-50': variant === 'outline',
        },
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        'disabled:opacity-50 disabled:cursor-not-allowed': disabled,
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
```

### Server Component Pattern

```typescript
// app/(pl)/narzedzia/[slug]/page.tsx
import { getToolData } from '@/lib/i18n/tool-registry';
import { ToolPageRenderer } from '@/components/sections/tools/ToolPageRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const tool = await getToolData('pl', slug);

  if (!tool) {
    notFound();
  }

  return <ToolPageRenderer tool={tool} />;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolData('pl', slug);

  return {
    title: tool.metadata.title,
    description: tool.metadata.description,
    openGraph: {
      title: tool.metadata.title,
      description: tool.metadata.description,
      url: `https://arteonagency.pl${tool.metadata.path}`,
    },
  };
}
```

### Client Component Pattern

```typescript
// components/sections/tools/ImageConverter.tsx
'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface ImageConverterProps {
  className?: string;
}

export default function ImageConverter({ className }: ImageConverterProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileSelect = useCallback(async (selectedFile: File) => {
    setFile(selectedFile);
    setIsProcessing(true);
    setResult(null);

    try {
      const processed = await processImage(selectedFile);
      setResult(processed);
    } catch (error) {
      console.error('Image conversion failed:', error);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  return (
    <Card className={className}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Image Converter</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Wybierz plik
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              disabled={isProcessing}
              className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md"
            />
          </div>

          {isProcessing && (
            <div className="flex items-center space-x-2">
              <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
              <span className="text-blue-600">Przetwarzanie...</span>
            </div>
          )}

          {result && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800">Konwersja zakończona pomyślnie!</p>
              <Button className="mt-2">Pobierz plik</Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

async function processImage(file: File): Promise<string> {
  // Implementacja konwersji obrazu
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Conversion completed');
    }, 1000);
  });
}
```

## Data Management

### Struktura Danych Narzędzia

```typescript
// types/tool.ts
export interface ToolPageData {
  toolKey: string;
  locale: string;
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

export type ToolContentBlock =
  | { type: 'sectionInfo'; data: SectionInfoData }
  | { type: 'sectionBasic'; data: SectionBasicData }
  | { type: 'sectionSteps'; data: SectionStepsData }
  | { type: 'sectionDemo'; data: SectionDemoData }
  | { type: 'sectionTabs'; data: SectionTabsData }
  | { type: 'sectionFeatureComparison'; data: FeatureComparisonData }
  | { type: 'sectionTimeline'; data: TimelineData }
  | { type: 'gap'; data: GapData }
  | { type: 'faq'; data: FaqData }
  | { type: 'toolsCarousel'; data: ToolsCarouselData }
  | { type: 'contactForm'; data: ContactFormData };
```

### Walidacja Danych

```typescript
// lib/validation.ts
import { z } from 'zod';

export const toolInputSchema = z.object({
  input: z
    .string()
    .min(1, 'Input jest wymagany')
    .max(10000, 'Input za długi')
    .transform((val) => val.trim()),
  format: z.enum(['jpg', 'png', 'webp', 'avif', 'json', 'xml', 'yaml']),
  quality: z.number().min(1, 'Jakość musi być między 1 a 100').max(100, 'Jakość musi być między 1 a 100').optional(),
});

export const fileUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= 10 * 1024 * 1024, 'Plik nie może być większy niż 10MB', 'File size validation')
    .refine((file) => allowedFileTypes.includes(file.type), 'Nieobsługiwany typ pliku'),
});

export function validateToolInput(input: unknown) {
  return toolInputSchema.parse(input);
}
```

### Cache Patterns

```typescript
// lib/cache.ts
import { cache } from 'react';

export const getToolData = cache(async (locale: string, slug: string) => {
  const response = await fetch(`/api/tools/${locale}/${slug}`);
  return response.json();
});

export const getPopularTools = cache(async () => {
  'use cache';
  cacheLife('hours');

  const tools = await db.tool.findMany({
    where: { isPopular: true },
    orderBy: { usage: 'desc' },
    take: 10,
  });

  return tools;
});
```

## Testing Guidelines

### Test Structure

```typescript
// __tests__/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles correctly', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
  });
});
```

### E2E Test Structure

```typescript
// tests/e2e/image-converter.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Image Converter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/narzedzia/image-converter');
  });

  test('converts JPG to PNG', async ({ page }) => {
    // Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('./fixtures/test-image.jpg');

    // Select format
    await page.selectOption('select[name="format"]', 'png');

    // Click convert
    await page.click('button[type="submit"]');

    // Check for download
    const downloadPromise = page.waitForEvent('download');
    await page.click('button[download="true"]');
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toContain('.png');
  });
});
```

## Performance Guidelines

### Bundle Optimization

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons/ri', 'sharp', 'marked', 'js-yaml'],
    reactCompiler: true,
    optimizeCss: true,
  },

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack: (config, { buildId, dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
        },
      };
    }
    return config;
  },
};
```

### Image Optimization

```typescript
// Zawsze używaj next/image
import Image from 'next/image';

<Image
  src={imageSrc}
  alt={altText}
  width={1200}
  height={630}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
/>
```

## Security Guidelines

### Input Validation

```typescript
// app/api/tools/convert/route.ts
import { validateToolInput } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedInput = validateToolInput(body);

    // Przetwarzaj konwersję
    const result = await performConversion(validatedInput);

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid input', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'Conversion failed' }, { status: 500 });
  }
}
```

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { NextRequest } from 'next/server';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  request: NextRequest,
  options: {
    limit: number;
    windowMs: number;
  } = { limit: 100, windowMs: 60000 },
) {
  const key = request.ip || 'unknown';
  const now = Date.now();

  let record = rateLimitStore.get(key);

  if (!record || record.resetTime < now) {
    record = { count: 0, resetTime: now + options.windowMs };
    rateLimitStore.set(key, record);
  }

  if (record.count >= options.limit) {
    return { success: false, remaining: 0 };
  }

  record.count++;
  return { success: true, remaining: options.limit - record.count };
}
```

## Internationalization

### Struktura Lokalizacji

```typescript
// lib/i18n/locales.ts
export const locales = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'] as const;

export type Locale = (typeof locales)[number];

export const localeConfig = {
  pl: {
    name: 'Polski',
    code: 'pl',
    dir: 'ltr',
    flag: '🇵🇵',
  },
  en: {
    name: 'English',
    code: 'en',
    dir: 'ltr',
    flag: '🇬🇧',
  },
  // ... inne locale
};
```

### Dictionary Usage

```typescript
// lib/LocaleContext.tsx
'use client';

import { createContext, useContext } from 'react';

interface LocaleContextType {
  locale: string;
  dictionary: ClientDictionary;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: LocaleContextType;
}) {
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}

export function useDictionary() {
  const { dictionary } = useLocale();
  return dictionary;
}
```

## Error Handling

### Error Boundary Pattern

```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo): ErrorBoundaryState {
    return { hasError: true, error, errorInfo };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-200 rounded-md bg-red-50">
          <h2 className="text-red-800 font-bold">Wystąpił błąd</h2>
          <p className="text-red-600">{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded"
          >
            Spróbuj ponownie
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Server Action Error Handling

```typescript
// app/actions/tools.ts
'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function convertTool(formData: FormData) {
  let result;

  try {
    const input = formData.get('input') as string;
    const format = formData.get('format') as string;

    // Walidacja
    if (!input || !format) {
      return { error: 'Brakujące pola', success: false };
    }

    // Przetwarzanie
    result = await performConversion(input, format);

    // Revalidate cache
    revalidatePath('/tools');

    return { success: true, result };
  } catch (error) {
    console.error('Conversion error:', error);
    return { error: 'Konwersja nieudana', success: false };
  }
}
```

## Git Workflow

### Branch Naming

```bash
# Feature branches
feature/converter-tool-name
feature/ui-component-name
feature/api-endpoint-name

# Fix branches
fix/validation-error
fix/performance-issue
fix/security-vulnerability

# Hotfix branches
hotfix/critical-bug
hotfix/security-patch
```

### Commit Messages

```bash
# Format: type(scope): description
feat(tools): add image to webp converter
fix(security): validate file upload inputs
docs(readme): update installation instructions
refactor(components): optimize button component
test(e2e): add converter workflow tests
chore(deps): update to nextjs 16.1.6
```

### Pre-commit Hooks

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test:ci",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## Debugging

### Debug Mode

```typescript
// lib/debug.ts
export const isDevelopment = process.env.NODE_ENV === 'development';

export function debugLog(message: string, data?: any) {
  if (isDevelopment) {
    console.log(`[DEBUG] ${message}`, data);
  }
}

export function debugError(message: string, error?: Error) {
  if (isDevelopment) {
    console.error(`[ERROR] ${message}`, error);
  }
}
```

### Performance Debugging

```typescript
// lib/performance-debug.ts
export function measurePerformance<T>(name: string, fn: () => T): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  console.log(`[PERF] ${name}: ${end - start}ms`);

  return result;
}

// Usage
const result = measurePerformance('data-fetch', () => {
  return fetchData();
});
```

## Documentation

### Component Documentation

````typescript
/**
 * Komponent przyciskowkowy do konwersji obrazów
 *
 * @example
 * ```tsx
 * <ImageConverter
 *   className="w-full max-w-md"
 *   onConversion={(result) => console.log(result)}
 * />
 * ```
 *
 * @param props - Właściwości komponentu
 * @returns {JSX.Element} Renderowany komponent
 */
export default function ImageConverter(props: ImageConverterProps) {
  // Implementacja
}
````

### API Documentation

```typescript
/**
 * Konwertuje obraz do innego formatu
 *
 * @route POST /api/tools/convert
 * @param body - Dane konwersji
 * @returns {Promise<ConversionResult>} Wynik konwersji
 * @throws {400} Nieprawidłowe dane wejściowe
 * @throws {500} Błąd konwersji
 */
export async function POST(request: Request) {
  // Implementacja
}
```

## Quality Assurance

### Code Review Checklist

- [ ] TypeScript types są poprawne
- [ ] Komponenty są testowane
- [ ] Performance jest zoptymalizowana
- [ ] Accessibility jest spełniona
- [ ] Security jest zaimplementowana
- [ ] Dokumentacja jest aktualna

### Pre-merge Requirements

- [ ] Wszystkie testy przechodzą
- [ ] Linting bez błędów
- [ ] Build pomyślny
- [ ] Performance > 90 Lighthouse
- [ ] Accessibility > 95

Te wytyczne wytyczne zapewniają wysoką jakość kodu, spójność zespołu i optymalne działanie projektu Arteon Agency.
