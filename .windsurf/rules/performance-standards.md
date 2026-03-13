# Performance Standards - Arteon Agency

## Performance Targets

### Core Web Vitals

```typescript
// Performance budgets dla wszystkich stron
interface PerformanceBudgets {
  lighthouse: {
    performance: 90; // 0.9+
    accessibility: 95; // 0.95+
    bestPractices: 90; // 0.9+
    seo: 90; // 0.9+
  };
  coreWebVitals: {
    LCP: 2.5; // 2.5s
    FID: 100; // 100ms
    CLS: 0.1; // 0.1
    FCP: 1.8; // 1.8s
    TTI: 3.8; // 3.8s
  };
  bundle: {
    total: 250; // 250KB gzipped
    largest: 100; // 100KB gzipped
  };
}
```

### Tool-Specific Targets

```typescript
// Performance targets dla 92 narzędzi
interface ToolPerformanceTargets {
  imageConverters: {
    lcp: 3.0; // Obrazy przetwarzania
    fid: 150; // Interaktywność
    conversionTime: 5000; // 5s max
  };
  textConverters: {
    lcp: 2.0;
    fid: 50;
    conversionTime: 1000; // 1s max
  };
  unitConverters: {
    lcp: 2.0;
    fid: 50;
    conversionTime: 500; // 500ms max
  };
}
```

## Next.js 16.1.6 Performance Optimization

### Server Components by Default

```typescript
// ✅ Server Component - Brak JavaScript na kliencie
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = await getToolData('pl', slug);

  return <ToolComponent tool={tool} />;
}

// ❌ Client Component - Dodaje JavaScript do paczki
'use client';
export default function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const [tool, setTool] = useState(null);

  useEffect(() => {
    getToolData('pl', params.slug).then(setTool);
  }, [params.slug]);

  if (!tool) return <div>Loading...</div>;
  return <ToolComponent tool={tool} />;
}
```

### React Compiler

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    reactCompiler: true, // Automatyczna optymalizacja
    optimizeCss: true, // Optymalizacja CSS
    optimizePackageImports: ['react-icons/ri', 'sharp', 'marked', 'js-yaml'],
  },
};
```

### Cache Components

```typescript
// Pamięć podręczne dane
async function getToolData(locale: string, slug: string) {
  'use cache';
  cacheLife('hours');

  const response = await fetch(`/api/tools/${locale}/${slug}`);
  return response.json();
}

// Dynamiczne dane z cache
async function getPopularTools() {
  'use cache';
  cacheLife('hours');

  const tools = await db.tool.findMany({
    where: { isPopular: true },
    orderBy: { usage: 'desc' },
    take: 10,
  });

  return tools;
}
```

## Image Optimization

### Zawsade Użycie next/image

```typescript
import Image from 'next/image';

// ✅ Zawsze używaj next/image
<Image
  src={imageSrc}
  alt={altText}
  width={1200}
  height={630}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
  quality={85} // Optymalna jakość
/>
```

### Konfiguracja Obrazów

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'], // Nowoczesne formaty
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

### Przetwarzanie Obrazów

```typescript
// Skrypt do optymalizacji obrazów
import sharp from 'sharp';

export async function processImage(
  buffer: Buffer,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif';
  } = {},
): Promise<Buffer> {
  const sharp = require('sharp');

  let image = sharp(buffer);

  if (options.width || options.height) {
    image = image.resize(options.width, options.height);
  }

  if (options.quality) {
    image = image.webp({ quality: options.quality });
  }

  if (options.format) {
    image = image.toFormat(options.format);
  }

  return image.toBuffer();
}
```

## Bundle Optimization

### Dynamic Imports

```typescript
// ✅ Lazy load ciężkie komponenty
const ImageEditor = dynamic(() => import('./ImageEditor'), {
  loading: () => <div className="animate-pulse">Loading editor...</div>,
  ssr: false, // Tylko po stronie klienta
});

// ✅ Lazy load z preload
const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: <LoadingSpinner />, preload: true }
);

// ❌ Importuj wszystko na starcie
import HeavyComponent from './HeavyComponent';
```

### Package Import Optimization

```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons/ri', 'sharp', 'heic2any', 'utif2', 'gifenc', 'pdfjs-dist', 'jspdf', 'qrcode', 'marked', 'turndown', 'js-yaml'],
  },
};
```

### Bundle Analysis

```bash
# Analiza rozmiaru paczki
npm run build
npx @next/bundle-analyzer

# Sprawdź rozmiaru paczki
npx webpack-bundle-analyzer .next/static/chunks/
```

## Data Fetching Optimization

### Parallel Data Fetching

```typescript
// ✅ Równoleść - jednocześnie
export default async function Dashboard() {
  const [user, tools, analytics] = await Promise.all([
    getUser(),
    getTools(),
    getAnalytics(),
  ]);

  return (
    <DashboardLayout user={user} tools={tools} analytics={analytics} />
  );
}

// ❌ Sekwencyjnie - wodospody
export default async function Dashboard() {
  const user = await getUser();
  const tools = await getTools(); // Czeka na zakończenie user
  const analytics = await getAnalytics(); // Czeka na zakończenie tools

  return (
    <DashboardLayout user={user} tools={tools} analytics={analytics} />
  );
}
```

### React Cache dla Danych

```typescript
// Pamięć podrzęczne dane
export const getToolData = cache(async (locale: string, slug: string) => {
  const response = await fetch(`/api/tools/${locale}/${slug}`);
  return response.json();
});

// Streamowanie danych
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const tool = getToolData('pl', slug);
  const relatedTools = getRelatedTools(slug);

  return (
    <div>
      <ToolComponent tool={tool} />
      <RelatedTools tools={relatedTools} />
    </div>
  );
}
```

## Tool-Specific Performance

### Image Converters (47 tools)

```typescript
// Procesowanie obrazów w chunkach
export async function processImageInChunks(file: File): Promise<Buffer> {
  const chunks = [];
  const chunkSize = 1024 * 1024; // 1MB chunks

  for (let i = 0; i < file.size; i += chunkSize) {
    const chunk = file.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  let result = Buffer.alloc(0);

  for (const chunk of chunks) {
    const processed = await processChunk(chunk);
    result = Buffer.concat([result, processed]);
  }

  return result;
}

// Streaming konwersji
export async function* streamImageConversion(
  file: File,
  onProgress: (progress: number) => void
): AsyncGenerator<Buffer> {
  const reader = file.stream();
  const transformer = sharp().resize(800, 600).webp();

  for await reader.read(); !reader.done; ) {
    const chunk = reader.value;
    const processed = await transformer.write(chunk);
    yield processed;
  }
}
```

### Text Converters (8 tools)

```typescript
// Optymalizacja dla dużych tekstów
export async function processLargeText(text: string): Promise<string> {
  const chunks = text.match(/.{1,1000}/g) || [];

  let result = '';

  for (const chunk of chunks) {
    const processed = await processChunk(chunk);
    result += processed;

    // Pozwól UI aktualizacje
    if (onProgress) {
      onProgress(result.length / text.length);
    }

    // Pozwól na UI aktualizacje
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  return result;
}
```

### Unit Converters (17 tools)

```typescript
// Błyska konwersja z pamięcią podręcznej
const conversionCache = new Map<string, number>();

export function convertUnit(from: string, to: string, value: number): number {
  const cacheKey = `${from}-${to}-${value}`;

  if (conversionCache.has(cacheKey)) {
    return conversionCache.get(cacheKey);
  }

  const result = performConversion(from, to, value);
  conversionCache.set(cacheKey, result);

  return result;
}
```

## Monitoring & Analytics

### Core Web Vitals Tracking

```typescript
// app/layout.tsx
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals',
      });
    }

    // Wyślij do niestandardowego monitoringu
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    });
  }
}
```

### Performance Monitoring Dashboard

```typescript
// scripts/performance-monitor.ts
interface PerformanceMetrics {
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  bundleSize: {
    total: number;
    chunks: number;
    largest: number;
  };
  buildTime: number;
  conversionTimes: Record<string, number>;
  errorRates: Record<string, number>;
}

export class PerformanceMonitor {
  async collectMetrics(): Promise<PerformanceMetrics> {
    const [lighthouse, bundleSize, buildTime] = await Promise.all([this.runLighthouse(), this.analyzeBundleSize(), this.measureBuildTime()]);

    const conversionTimes = await this.getConversionTimes();

    return {
      lighthouse,
      bundleSize,
      buildTime,
      conversionTimes,
    };
  }

  private async runLighthouse(): Promise<any> {
    const lighthouse = require('lighthouse');

    const results = await lighthouse('https://arteonagency.pl', {
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: 3000,
      output: 'json',
    });

    return results.lhr;
  }

  private analyzeBundleSize(): Promise<{ total: number; chunks: number; largest: number }> {
    const stats = fs.statSync('.next/static/chunks');
    const files = fs.readdirSync('.next/static/chunks');

    let total = 0;
    let largest = 0;
    let chunks = 0;

    for (const file of files) {
      const stats = fs.statSync(path.join('.next/static/chunks', file));
      total += stats.size;
      largest = Math.max(largest, stats.size);
      chunks++;
    }

    return { total, chunks, largest };
  }

  private measureBuildTime(): Promise<number> {
    const start = Date.now();
    execSync('npm run build', { stdio: 'pipe' });
    return Date.now() - start;
  }
}
```

## Cache Strategies

### Next.js Cache Configuration

```typescript
// app/api/tools/[slug]/route.ts
export const dynamic = 'force-static';

// Static cache dla danych narzędzi
export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = await getToolData('pl', slug);

  return NextResponse.json(tool, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Vercel-CDN-Cache-Control': 'public, max-age=3600',
    },
  });
}
```

### React Cache dla Danych

```typescript
// lib/data-cache.ts
import { cache } from 'react';

export const getToolData = cache(async (locale: string, slug: string) => {
  const response = await fetch(`/api/tools/${locale}/${slug}`);
  return response.json();
});

// Cache z określonym czasem życia
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

### Cache Invalidation

```typescript
// app/actions/tools.ts
'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function updateToolData(toolId: string) {
  // Zaktualizuj dane
  await db.tool.update({
    where: { id: toolId },
    data: { updatedAt: new Date() },
  });

  // Unvalidate cache
  revalidatePath('/tools');
  revalidateTag('tool-data');

  return { success: true };
}
```

## Memory Management

### Memory Leaks Prevention

```typescript
// ❌ Memory leak w komponencie
export default function ComponentWithLeak() {
  const [data, setData] = useState([]);

  // ❌ Nie czyściści referencji w useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData().then(setData);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{data.map(item => <Item key={item.id} />)}</div>;
}

// ✅ Poprawne cleanup
export default function ComponentWithoutLeak() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);

    return () => {
      // Cleanup
    };
  }, []);

  return <div>{data.map(item => <Item key={item.id} />)}</div>;
}
```

### Obiektywność Pamięci

```typescript
// lib/memory-optimized.ts
export class MemoryOptimized {
  private cache = new Map<string, any>();

  set(key: string, value: any): void {
    // Ogranicz rozmiar cache
    if (this.cache.size > 1000) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
```

## Testing Performance

### Performance Testy

```typescript
// tests/performance/tool-converter.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Image Converter Performance', () => {
  test('should convert image within time limit', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/narzedzia/image-converter');

    // Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(['./fixtures/test-image.jpg']);

    // Select format
    await page.selectOption('select[name="format"]', 'webp');

    // Start conversion
    const convertButton = page.locator('button[type="submit"]');
    await convertButton.click();

    // Czekaj czas konwersji
    const downloadPromise = page.waitForEvent('download');
    await page.click('button[download="true"]');
    const download = await downloadPromise;

    const conversionTime = Date.now() - startTime;

    expect(conversionTime).toBeLessThan(5000); // 5s max
    expect(download.suggestedFilename()).toContain('.webp');
  });
});
```

### Lighthouse CI

```yaml
# .github/workflows/performance.yml
name: Performance Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Build application
        run: npm run build

      - name: Run Lighthouse CI
        run: npm run lighthouse:ci

      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: lighthouse-results
          path: .lighthouseci/

      - name: Check thresholds
        run: node scripts/check-lighthouse-thresholds.js
```

## Performance Checklist

### Pre-Deployment

- [ ] Lighthouse score > 90
- [ ] Bundle size < 250KB gzipped
- [ ] Core Web Vitals w normach
- [ ] Performance testy przechodzą
- [ ] Memory usage optymalizowana
- [ ] Cache strategie zaimplementowana

### Post-Deployment

- [ ] Health checks przechodzą
- [ ] Core Web Vitals monitorowane
- [ ] Error rates niskie
- [ ] Performance metryki spełnione
- [ ] Użytkownicy monitorowane

### Regular Maintenance

- [ ] Tygodniowe audyty wydajności
- [ ] Analiza rozmiarów paczki
- [ ] Sprawdź stary zależności
- [ ] Optymalizacja zapytań

## Tool-Specific Performance Patterns

### Image Converter Optimization

```typescript
// Progresywna konwersja
export async function* progressiveImageConversion(
  file: File,
  options: ConversionOptions
): AsyncGenerator<string> {
  const reader = file.stream();
  const transformer = sharp()
    .resize(options.width, options.height)
    .webp({ quality: options.quality });

  for await reader.read(); !reader.done; ) {
    const chunk = reader.value;
    const processed = await transformer.write(chunk);
    yield processed;

    // Aktualizuj postępuj
    if (options.onProgress) {
      options.onProgress(processed / file.size);
    }
  }
}
```

### Text Converter Optimization

```typescript
// Buforowanie dużych tekstów
export function* streamTextConversion(text: string, onProgress?: (progress: number) => void): AsyncGenerator<string> {
  const chunkSize = 10000;
  const chunks = text.match(/.{1,10000}/g) || [];

  let processed = '';
  let totalProcessed = 0;

  for (const chunk of chunks) {
    const processed = await processTextChunk(chunk);
    processed += processed;
    totalProcessed += chunk.length;

    if (onProgress) {
      onProgress(totalProcessed / text.length);
    }

    // Pozwól na UI
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  return processed;
}
```

### Unit Converter Optimization

```typescript
// Pamięć podręne wyniki
const conversionCache = new Map<string, number>();

export function convertUnit(from: string, to: string, value: number): number {
  const cacheKey = `${from}-${to}-${value}`;

  return (
    conversionCache.get(cacheKey) ??
    (() => {
      const result = performConversion(from, to, value);
      conversionCache.set(cacheKey, result);
      return result;
    })
  );
}
```

## Performance Debugging

### Debug Mode Tools

```typescript
// lib/performance-debug.ts
export function measurePerformance<T>(name: string, fn: () => T): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  console.log(`[PERF] ${name}: ${end - start}ms`);

  return result;
}

// Użycie w komponentach
export function usePerformanceDebug(componentName: string) {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  }, [componentName]);

  return renderCount;
}
```

### Memory Profiling

```typescript
// lib/memory-profiler.ts
export function profileMemoryUsage() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const used = process.memoryUsage();
  console.log(`Memory Usage:`);
  console.log(`  RSS: ${Math.round(used.rss / 1024 / 1024)}MB`);
  console.log(`  Heap Used: ${Math.round(used.heapUsed / 1024 / 1024)}MB`);
  console.log(`  External: ${Math.round(used.external / 1024 / 1024)}MB`);
}
```

## Performance Best Practices Summary

### Do's

1. **Używaj Server Components** domyślnie
2. **Implementuj cache** dla często używanych danych
3. **Optymalizuj obrazy** (WebP, AVIF)
4. **Lazy load ciężkie komponenty**
5. **Minimalizuj rozmiar paczki**
6. **Monitoruj Core Web Vitals**

### Don'ts

1. **Nie używaj Client Components** bez potrzeby
2. **Nie twórz synchronicznych operacji I/O**
3. **Nie ignoruj budżetów wydajności**
4. **Nie przechowujuj błędów w try-catch**
5. **Nie używaj innerHTML bez sanitacji**
6. **Nie twórzuj dużych plików synchronicznie**

### Tool-Specific Optimization

1. **Image Converters:** Streamowanie, chunking, WebP/AVIF
2. **Text Converters:** Buforowanie, streaming, progress indicators
3. **Unit Converters:** Cache, memoization, instant conversion
4. **Generators:** Lazy loading, progressive enhancement

Te standardy wydajności zapewniają optymalne działanie wszystkich 92 narzędzi przy jednoczesnym utrzymaniu wydajności i skalowalności.
