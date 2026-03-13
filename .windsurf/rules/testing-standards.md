# Testing Standards - Arteon Agency

## Testing Architecture

### Test Stack

```
┌─────────────────────────────────────┐
│           Unit Tests                    │ ← Jest + React Testing Library
├─────────────────────────────────────┤
│      Integration Tests               │ ← Jest + MSW
├─────────────────────────────────────┤
│           E2E Tests                     │ ← Playwright
├─────────────────────────────────────┤
│      Performance Tests              │ ← Lighthouse CI
├─────────────────────────────────────┤
│      Accessibility Tests            │ ← Playwright + axe-core
├─────────────────────────────────────┘
└─────────────────────────────────────┘
```

### Test Coverage Goals

```typescript
// package.json
{
  "scripts": {
    "test": "npm run test:unit && npm run test:integration",
    "test:unit": "jest --coverage",
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "playwright test",
    "test:performance": "lighthouse",
    "test:accessibility": "playwright test --config=tests/accessibility/playwright.config.ts",
    "test:ci": "npm run test:unit && npm run test:integration && npm run build && npm run test:e2e",
    "test:coverage": "npm run test:unit --coverage && npm run test:coverage:report",
    "test:watch": "jest --watch"
  }
}
```

## Unit Testing

### Struktura Testów

```typescript
// __tests__/components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  beforeEach(() => {
    render(<Button>Click me</Button>);
  });

  it('renders with correct text', () => {
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

  it('is disabled when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
```

### Testy Hooków

```typescript
// __tests__/hooks/useToolConverter.test.ts
import { renderHook, act } from '@testing-library/react';
import { useToolConverter } from '@/hooks/useToolConverter';

describe('useToolConverter', () => {
  it('converts input correctly', () => {
    const { result } = renderHook(() => useToolConverter('text', 'json'));

    expect(result).toBe('{"text": "text"}');
  });

  it('handles format changes', () => {
    const { result, rerender } = renderHook(
      () => useToolConverter('text', 'json')
    );

    act(() => {
      rerender(() => useToolConverter('text', 'yaml'));
    });

    expect(result).toBe('{"text": "text"});
  });
});
```

### Testy Utility Functions

```typescript
// __tests__/lib/validation.test.ts
import { validateToolInput } from '@/lib/validation';

describe('Validation', () => {
  it('validates correct input', () => {
    const result = validateToolInput({
      input: 'test input',
      format: 'json',
    });

    expect(result).toEqual({
      input: 'test input',
      format: 'json',
    });
  });

  it('rejects invalid input', () => {
    expect(() => validateToolInput({ input: '', format: 'json' })).toThrow();
    expect(() => validateToolInput({ input: 'test', format: 'invalid' })).toThrow();
  });
});
```

## Integration Testing

### API Route Testing

```typescript
// __tests__/api/tools/[slug].test.ts
import { createMocks } from 'node-mocks-http';
import { GET, POST } from '@/app/api/tools/[slug]/route';

describe('Tool API', () => {
  it('returns tool data for valid slug', async () => {
    const { req } = createMocks({
      method: 'GET',
      url: 'http://localhost:3000/api/tools/image-converter',
    });

    const response = await GET(req, {
      params: Promise.resolve({ slug: 'image-converter' }),
    });

    expect(response.status).toBe(200);
    const data = await response.json();

    expect(data).toHaveProperty('toolKey', 'image-converter');
  });

  it('returns 404 for invalid slug', async () => {
    const { req } = createMocks({
      method: 'GET',
      url: 'http://localhost:3000/api/tools/nonexistent',
    });

    const response = await GET(req, {
      params: Promise.resolve({ slug: 'nonexistent' }),
    });

    expect(response.status).toBe(404);
  });
});
```

### Component Integration Testing

```typescript
// __tests__/integration/tool-page.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import ToolPage from '@/app/(pl)/narzedzia/[slug]/page';
import { getToolData } from '@/lib/i18n/tool-registry';

// Mock danych
jest.mock('@/lib/i18n/tool-registry');
const mockGetToolData = getToolData as jest.MockedFunction<
  Promise<ToolPageData>
>;

mockGetToolData.mockResolvedValue({
  toolKey: 'image-converter',
  locale: 'pl',
  metadata: {
    title: 'Image Converter',
    description: 'Convert between image formats',
    // ... inne pola
  },
});

describe('Tool Page Integration', () => {
  it('renders tool page with data', async () => {
    render(<ToolPage params={Promise.resolve({ slug: 'image-converter' }} />);

    await waitFor(() =>
      expect(screen.getByRole('heading', { name: /image converter/i })).toBeInTheDocument()
    );
  });
});
```

## E2E Testing

### Test Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: process.env.CI === 'true',
  retries: process.env.CI ? 2 : 0,
  use: {
    ...devices['desktop-chrome'],
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  },
});
```

### Tool Conversion Workflow Tests

```typescript
// tests/e2e/tool-converter.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Image Converter E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/narzedzia/image-converter');
  });

  test('converts JPG to PNG', async ({ page }) => {
    // Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(['./fixtures/test-image.jpg']);

    // Select format
    await page.selectOption('select[name="format"]', 'png');

    // Start conversion
    await page.click('button[type="submit"]');

    // Check for download
    const downloadPromise = page.waitForEvent('download');
    await page.click('button[download="true"]');
    const download = await downloadPromise;

    expect(download.suggestedFilename()).toContain('.png');
  });

  test('shows error for invalid file', async ({ page }) => {
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(['./fixtures/invalid-file.txt']);

    await page.click('button[type="submit"]');

    const errorMessage = page.locator('.error-message');
    await expect(errorMessage).toBeVisible();
    expect(errorMessage).toContain('Invalid file type');
  });

  test('maintains state during navigation', async ({ page }) => {
    // Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(['./fixtures/test-image.jpg']);

    // Navigate away and back
    await page.goto('/');
    await page.goBack();

    // Sprawdź stan
    expect(fileInput).toHaveValue('./fixtures/test-image.jpg');

    // Powrót do nawigacji
    await page.goto('/narzedzia/image-converter');
    expect(fileInput).toHaveValue('./fixtures/test-image.jpg');
  });
});
```

### Performance Tests

```typescript
// tests/performance/lighthouse.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Performance Metrics', () => {
  test('should meet Lighthouse budgets', async ({ page }) => {
    const metrics = await page.evaluate({
      include: 'performance',
    });

    expect(metrics.performance).toBeGreaterThan(90);
    expect(metrics.accessibility).toBeGreaterThan(95);
    expect(metrics.bestPractices).toBeGreaterThan(90);
    expect(metrics.seo).toBeGreaterThan(90);
  });

  test('should load within time limits', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/narzedzia/image-converter');
    await page.waitForLoadState('domcontentloaded');

    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000); // 3s max
  });
});
```

## Accessibility Testing

### Accessibility Test Configuration

```typescript
// tests/accessibility/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/accessibility',
  fullyParallel: true,
  forbidOnly: process.env.CI === 'true',
  retries: process.env.CI ? 2 : 0,
  use: {
    ...devices['desktop-chrome'],
  },
});

// accessibility-audit.js
import { AxeBuilder } from 'axe-core';
import { injectAxe } from '@playwright/test';

test.describe('Accessibility Audit', () => {
  test('should have no accessibility violations', async ({ page }) => {
    await page.goto('/narzedzia/image-converter');

    await injectAxe(page);
    const results = await page.evaluate({
      include: 'accessibility',
    });

    expect(results.violations).toEqual([]);
  });
});
```

### Keyboard Navigation Tests

```typescript
// tests/accessibility/keyboard-navigation.spec.ts
test.describe('Keyboard Navigation', () => {
  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/narzedzia/image-converter');

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    expect(focused).toBeVisible();

    // Test escape key
    await page.keyboard.press('Escape');
    const cancelButton = page.locator('button[aria-label="Cancel"]');
    expect(cancelButton).toBeVisible();
  });
});
```

## Performance Monitoring

### Lighthouse CI Configuration

```javascript
// lighthouse.config.js
module.exports = {
  ci: {
    collect: {
      url: ['https://arteonagency.pl', 'https://arteonagency.pl/narzedzia'],
      startServerCommand: 'npm run dev',
    startServerReadyPattern: 'ready in \\d+',
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 90 }],
        'categories:accessibility': ['error', { minScore: 95 }],
        'categories: 'best-practices': ['warn', { minScore: 90 }],
        'categories: 'seo': ['warn', { minScore: 90 }],
      },
    },
  },
  },
};
```

### Custom Performance Metrics

```typescript
// scripts/performance-metrics.ts
export class PerformanceMetrics {
  async collectMetrics(): Promise<{
    lighthouse: any;
    bundleSize: { total: number; chunks: number; largest: number };
    coreWebVitals: Record<string, number>;
    toolPerformance: Record<string, number>;
  }> {
    const [lighthouse] = await this.runLighthouse();
    const [bundleSize] = this.analyzeBundleSize();

    const toolPerformance = await this.getToolPerformanceMetrics();

    return {
      lighthouse,
      bundleSize,
      coreWebVitals: {
        lcp: lighthouse.categories.performance.score * 100,
        fid: lighthouse.audits.metrics.fid.value * 1000,
        cls: lighthouse.audits.metrics.cls.value * 100,
        ttfb: lighthouse.audits.metrics.ttfb.value * 100,
      },
      toolPerformance,
    };
  }

  private async function runLighthouse(): Promise<any> {
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
}
```

## Test Data Management

### Test Fixtures

```typescript
// tests/fixtures/image.jpg
import path from 'path';
import fs from 'fs';

// Generowanie testowych danych
export const testImage = fs.readFileSync(path.join(__dirname, 'tests/fixtures', 'test-image.jpg'));

// Mock API responses
export const mockToolData = {
  toolKey: 'image-converter',
  locale: 'pl',
  metadata: {
    title: 'Image Converter',
    description: 'Convert between image formats',
  },
  // ... inne pola
};
```

### Mock Services

```typescript
// __mocks__/lib/i18n/tool-registry.ts
import { getToolData as getToolDataOriginal } from '@/lib/i18n/tool-registry';

jest.mock('@/lib/i18n/tool-registry', () => getToolDataOriginal);
```

## CI/CD Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Complete Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit

      - name: Generate coverage report
        run: npm run test:coverage

      - name: Upload coverage
        uses: codecov/codecov@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          directory: coverage

      - name: Comment coverage on PR
        run: npm run test:coverage:comment

      - name: Upload coverage to Codecov
        uses: codecov/codecov@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          directory: coverage

  integration-tests:
    needs: unit-tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run integration tests
        run: npm run test:integration

      - name: Build application
        run: npm run build

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload E2E results
        uses: codecov/codecov@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          directory: e2e-results

  e2e-tests:
    needs: [unit-tests, integration-tests]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload E2E results
        uses: codecov/codecov@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          directory: e2e-results
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

## Test Data Generation

### Dynamic Test Data

```typescript
// scripts/generate-test-data.ts
import fs from 'fs';

interface TestData {
  toolKey: string;
  locale: string;
  input: string;
  format: string;
  output: string;
  expected: string;
}

export function generateTestData(): TestData[] {
  return [
    {
      toolKey: 'image-converter',
      locale: 'pl',
      input: 'test image data',
      format: 'jpg',
      output: 'png',
      expected: 'data:image/png',
    },
    {
      toolKey: 'text-converter',
      'locale: 'pl',
      input: 'some text content',
      format: 'json',
      output: 'yaml',
      expected: 'data:application/yaml',
    },
    // ... więcej test cases
  ];
}
```

### Test Scenarios

```typescript
// tests/scenarios/conversion-workflows.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Image Conversion Workflows', () => {
  test('complete conversion workflow', async ({ page }) => {
    // 1. Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles(['./fixtures/test-image.jpg']);

    // 2. Select format
    await page.selectOption('select[name="format"]', 'png');

    // 3. Convert
    await page.click('button[type="submit"]');

    // 4. Download
    const downloadPromise = page.waitForEvent('download');
    await page.click('button[download="true"]');
    const download = await downloadPromise;

    // 5. Verify
    expect(download.suggestedFilename()).toContain('.png');
  });
});
```

## Error Handling Tests

### Error Boundary Testing

```typescript
// tests/components/ErrorBoundary.test.tsx
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '@/components/ErrorBoundary';

describe('Error Boundary', () => {
  test('catches render errors and shows fallback', async ({ page }) => {
      const ErrorBoundary = () => (
        <div className="p-4 border border-red-200 rounded-lg bg-red-50">
          <h2>Wystąpił błąd</h2>
          <p>Coś spróbuj ponownie.</p>
          <button onClick={() => window.location.reload()}>
            Spróbuj ponownie
          </button>
        </div>
      );

      const { rerender } = render(
        <div>
          <ErrorBoundary>
            <div>ComponentWithError />
          </ErrorBoundary>
        </div>
      );

      render(rerender);

      // Symulowanie błąd
      const error = new Error('Test error');
      const { rerender } = render(
        <div>
          <ErrorBoundary error={error} />
        </div>
      );

      expect(screen.getByText(/Wystąpił błąd/)).toBeInTheDocument();
    });
  });
});
```

### API Error Testing

```typescript
// tests/api/errors/api-error-handling.test.ts
import { test, expect } from '@playwright/test';

test.describe('API Error Handling', () => {
  test('returns 400 for invalid input', async ({ page }) => {
    const response = await page.request.post('/api/tools/convert', {
      data: { input: '', format: 'json' },
    });

    expect(response.status()).toBe(400);
    expect(response.statusText()).toBe('Bad Request');

    const error = await response.json();
    expect(error).toHaveProperty('error');
  });

  test('returns 500 for server errors', async ({ page }) => {
    const response = await page.request.post('/api/tools/convert', {
      data: { input: 'test', format: 'json' },
    });

    expect(response.status()).toBe(500);
    expect(response.statusText()).toBe('Internal Server Error');
  });
});
```

## Performance Testing

### Bundle Size Analysis

```typescript
// tests/performance/bundle-size.test.ts
import { execSync } from 'child_process';

describe('Bundle Size Analysis', () => {
  test('total bundle size is within limits', () => {
    const { stdout } = execSync('npm run build', { encoding: 'utf8' });
    const output = stdout.toString();

    // Wyoduj rozmiar rozmiaru paczki
    const sizeMatch = output.match(/webpack.*Total Size: (\d+\.?\d*)KB/);
    const totalSize = parseFloat(sizeMatch?.[1] || '0');

    expect(totalSize).toBeLessThan(250); // 250KB gzipped
  });

  test('largest chunk is within limits', () => {
    const { stdout } = execSync('npx @next/bundle-analyzer', {
      output: 'json',
    });
    const { largestChunk } = JSON.parse(stdout).chunks[0];

    expect(largestChunk.size).toBeLessThan(100); // 100KB gzipped
  });
});
```

### Memory Usage Tests

```typescript
// tests/performance/memory-usage.test.ts
import { test, expect } from '@playwright/test';

test.describe('Memory Usage', () => {
  test('memory usage stays within limits', async ({ page }) => {
    // Symuluj użycie pamięci
    const metrics = await page.evaluate({
      include: ['memory'],
    });

    expect(metrics.memory.usedJS).toBeLessThan(50 * 1024 * 1024); // 50MB
  });
});
```

## Testing Best Practices

### Test Organization

```
tests/
├── unit/                    # Testy jednostkowe
│   ├── components/
│   │   ├── ui/
│   │   └── hooks/
│   └── lib/
├── integration/             # Testy integracyjne
│   ├── api/
│   │   └── tools/
├── e2e/                     # Testy E2E
│   ├── tools/
│   │   └── pages/
├── performance/            # Testy wydajności
│   └── accessibility/       # Testy dostępności
└── visual/             # Testy wizualne
├── fixtures/              # Dane testowe
└── mocks/               # Mocki danych
```

### Test Naming Conventions

```typescript
// Component tests
ComponentName.test.tsx;

// Hook tests
useHookName.test.ts;

// Integration tests
feature - name.integration.test.ts;

// E2E tests
user - workflow.spec.ts;

// Performance tests
performance.spec.ts;

// Accessibility tests
accessibility.spec.ts;

// Visual tests
visual.spec.ts;
```

### Test Data Management

```typescript
// Fixtures
tests/fixtures/
├── test-image.jpg
├── test-data.json

// Mocks
__mocks__/api/
├── __mocks__/lib/
```

## CI/CD Pipeline

### Quality Gates

```yaml
# Pre-merge requirements
name: Quality Gates
on:
  pull_request:
    branches: [main, develop]
jobs:
  quality-check:
    runs-on: ubuntu-latest
    steps:
      - name: Run unit tests
      run: npm run test:unit
      run: npm run test:coverage
      run: npm run lint
      run: npm run type-check
      run: npm run build
      run: npm run lighthouse:ci

      - name: Check performance
      run: npm run test:performance

      - name: Check accessibility
      run: npm run test:accessibility

      - name: Generate reports
      run: npm run test:coverage:report

      - name: Upload artifacts
      uses: codecov/codecov@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          directory: coverage

      - name: Check all status
        run: npm run lint:ci
        run: npm run test:ci
        run: npm run build
        run: npm run lighthouse:ci

        - name: Update documentation
        run: npm run docs:update

        - name: Notify team
        if: failure() {
          // Send notification
        }
```

### Deployment Testing

```yaml
# Post-deployment requirements
name: Deployment Tests
on:
  deployment_success:
    needs: [quality-check]
    runs-on: ubuntu-latest
    steps:
      - name: Health checks
        run: npm run health:check
        run: npm run test:e2e:production

      - name: Performance validation
        run: npm run test:performance

      - name: Post-deployment tests
        run: npm run test:e2e:production

      - name: Update monitoring
        run: npm run monitoring:check
```

````

## Monitoring & Alerting

### Performance Alerting
```typescript
// scripts/alerts/performance-alerts.ts
export function checkPerformanceThresholds(metrics: PerformanceMetrics): void {
  const thresholds = {
    lighthouse: {
      performance: 90,
      accessibility: 95,
      bestPractices: 90,
      seo: 90,
    },
    bundleSize: {
      total: 250,
      largest: 100,
    },
  };

  const issues: string[] = [];

  Object.entries(metrics.lighthouse).forEach(([key, value]) => {
    if (value < thresholds.lighthouse[key as keyof typeof thresholds.lighthouse]) {
      issues.push(`Lighthouse ${key}: ${value} (threshold: ${thresholds.lighthouse[key]})`);
    }
  });

  if (issues.length > 0) {
    // Wyślij alerty
    console.error('🚨 Performance Issues:');
    issues.forEach(issue => console.error(`  - ${issue}`));

    // Wyślij do serwisu monitoringu
    if (process.env.NODE_ENV === 'production') {
      await fetch('/api/alerts/performance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ issues }),
      });
    }
  }
}
````

### Regular Maintenance

```bash
#!/bin/bash
# scripts/maintenance-performance.sh

echo "🔧 Running performance maintenance..."

# 1. Sprawdź stary logi
echo "📝 Cleaning up old logs..."
find . -name "*.log" -mtime +30 -delete

# 2. Analiza rozmiar paczki
echo "📊 Analyzing bundle sizes..."
npm run build
npx @next/bundle-analyzer

# 3. Sprawdź testy wydajności
echo "⚡ Running performance tests..."
npm run test:performance

# 4. Generuj raport wydajności
echo "📊 Generating performance report..."
npm run generate:performance-report

echo "✅ Performance maintenance completed!"
```

## Testing Best Practices Summary

### Do's

1. **Test early and often** - TDD approach
2. **Test the happy path** - Critical user paths
3. **Test edge cases** - Error boundaries, invalid inputs
4. **Automate testing** - CI/CD integration
5. **Monitor in production** - Real-user metrics

### Don'ts

1. **Don't ignore test failures** - Fix issues immediately
2. **Don't skip E2E testing** - Critical for UX
3. **Don't ignore accessibility** - Legal requirement
4. **Don't ignore performance** - User experience suffers
5. **Don't skip security** - Data protection

### Tool-Specific Testing

1. **Image Converters:** Test various formats, sizes, edge cases
2. **Text Converters:** Test encoding, large texts, special characters
3. **Unit Converters:** Test precision, edge cases
4. **Generators:** Test output generation, error handling

This comprehensive testing strategy ensures quality, reliability, and optimal performance across all 92 tools and 16 locales.
