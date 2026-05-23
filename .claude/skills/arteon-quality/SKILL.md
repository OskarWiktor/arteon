---
name: arteon-quality
description: >
  Comprehensive quality system for Arteon Agency - testing (Vitest, Playwright),
  error handling, code review, automation, CI/CD, quality gates.
  Combines 7 skills into one deep-dive knowledge base.
---

# Skill: arteon-quality

Kompletny system jakości dla Arteon Agency — testy, QA, automatyzacja, CI/CD.

**Łączy:** arteon-quality-intelligence, arteon-advanced-testing, arteon-testing-strategy, arteon-error-handling, arteon-automation, arteon-workflow-automation, arteon-ai-agent

## Kiedy używać

- Code review
- Pisanie testów (Vitest, Playwright)
- Error handling implementation
- CI/CD configuration
- Pre-deploy checks
- Automation scripts

---

# CZĘŚĆ 1: QUALITY GATES

## Before Any Code Change

1. **Read relevant files** before editing
2. **Check existing patterns** in similar files
3. **Follow TypeScript strict mode**
4. **Use existing components** where possible

## After Code Change

```bash
# Required checks
npm run lint
npx tsc --noEmit

# For logic changes
npm run build
```

## Skip Build For

- Text-only changes
- Content edits in JSON
- Documentation updates

---

# CZĘŚĆ 2: CODE REVIEW CHECKLIST

## TypeScript

- [ ] No `any` without justification
- [ ] Props interfaces defined
- [ ] Zod validation for external data
- [ ] Strict null handling

## React/Next.js

- [ ] Server Components where possible
- [ ] `'use client'` only when needed
- [ ] Async params in Next.js 16
- [ ] Proper error boundaries

## Performance

- [ ] Images use `next/image`
- [ ] Heavy components lazy loaded
- [ ] No unnecessary re-renders
- [ ] Bundle size considered

## Security

- [ ] Input validated
- [ ] No secrets in client
- [ ] External links have `rel="noopener"`

## Accessibility

- [ ] ARIA labels on icon buttons
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast passing

---

# CZĘŚĆ 3: TESTING

## Commands

```bash
# Unit tests (Vitest)
npm run test
npm run test:watch
npm run test:coverage

# E2E tests (Playwright)
npm run test:e2e
npm run test:e2e:ui
```

## Test Structure

```
__tests__/
├── unit/                    # Vitest unit tests
│   ├── utils/
│   ├── hooks/
│   └── lib/
├── components/              # Component tests
│   ├── ui/
│   └── sections/
├── e2e/                     # Playwright E2E
│   ├── tools/
│   ├── navigation/
│   └── forms/
└── fixtures/                # Test data
```

## Unit Test (Vitest)

```typescript
import { describe, it, expect } from 'vitest';
import { countWords } from '@/lib/tools/text/wordCount';

describe('countWords', () => {
  it('counts Polish words correctly', () => {
    expect(countWords('Cześć świecie')).toBe(2);
  });

  it('handles empty string', () => {
    expect(countWords('')).toBe(0);
  });
});
```

## Component Test

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Kliknij</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Kliknij');
  });

  it('calls onClick handler', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

## Hook Test

```typescript
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

describe('useCopyToClipboard', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it('copies text to clipboard', async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy('test text');
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test text');
    expect(result.current.copied).toBe(true);
  });
});
```

## E2E Test (Playwright)

```typescript
import { test, expect } from '@playwright/test';

test.describe('Word Counter Tool', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/narzedzia/licznik-slow-i-znakow');
  });

  test('counts words correctly', async ({ page }) => {
    const textarea = page.locator('textarea');
    await textarea.fill('Jeden dwa trzy cztery pięć');

    const wordCount = page.locator('[data-testid="word-count"]');
    await expect(wordCount).toHaveText('5');
  });
});
```

## Coverage Thresholds

```typescript
// vitest.config.ts
coverage: {
  thresholds: {
    statements: 80,
    branches: 80,
    functions: 80,
    lines: 80,
  },
}
```

---

# CZĘŚĆ 4: ERROR HANDLING

## Error Boundary (app/error.tsx)

```typescript
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">Coś poszło nie tak</h2>
      <p className="text-gray-600 mt-2">{error.message}</p>
      <button onClick={reset} className="btn mt-4">
        Spróbuj ponownie
      </button>
    </div>
  );
}
```

## API Route Error Handling (Next.js 16)

```typescript
export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params; // Must await in Next.js 16
    const tool = await getToolData('pl', slug);

    if (!tool) {
      return Response.json({ error: 'Tool not found' }, { status: 404 });
    }

    return Response.json(tool);
  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

## Server Action Error Handling (React 19)

```typescript
'use server';

export async function convertTool(formData: FormData) {
  try {
    const input = formData.get('input') as string;
    const format = formData.get('format') as string;

    const validated = conversionSchema.parse({ input, format });
    const result = await performConversion(validated);

    return { success: true, result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }
    return { success: false, error: 'Conversion failed' };
  }
}
```

## Client Form with useActionState

```typescript
'use client';

import { useActionState } from 'react';

export default function ToolForm() {
  const [state, formAction, isPending] = useActionState(convertTool);

  return (
    <form action={formAction}>
      <input name="input" type="text" />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Converting...' : 'Convert'}
      </button>

      {state?.error && (
        <div className="text-red-600 text-sm mt-2">{state.error}</div>
      )}
    </form>
  );
}
```

---

# CZĘŚĆ 5: AUTOMATION

## Build Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint . --ext .ts,.tsx",
    "postbuild": "next-sitemap && node scripts/indexnow-notify.cjs"
  }
}
```

## Script Files

| File                                     | Purpose                 |
| ---------------------------------------- | ----------------------- |
| `scripts/generate-search-index.cjs`      | Search index generation |
| `scripts/indexnow-notify.cjs`            | Notify search engines   |
| `scripts/postbuild-sitemap-hreflang.cjs` | Sitemap enhancement     |

## Git Hooks (Husky)

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
```

## JSON Validation Script

```javascript
const Ajv = require('ajv');
const fs = require('fs');

const toolSchema = {
  type: 'object',
  required: ['toolKey', 'locale', 'metadata', 'hero'],
  properties: {
    metadata: {
      type: 'object',
      properties: {
        title: { type: 'string', maxLength: 60 },
        description: { type: 'string', maxLength: 160 },
      },
    },
  },
};

function validateToolData(locale) {
  const toolsDir = `data/${locale}/tools`;
  const files = fs.readdirSync(toolsDir);

  files.forEach(file => {
    const data = JSON.parse(fs.readFileSync(`${toolsDir}/${file}`));
    const valid = ajv.validate(toolSchema, data);
    if (!valid) console.error(`Invalid: ${file}`, ajv.errors);
  });
}
```

---

# CZĘŚĆ 6: CI/CD PIPELINE

## GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

## Test Pipeline

```yaml
# .github/workflows/test.yml
jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:coverage

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npm run test:e2e
```

---

# CZĘŚĆ 7: QUALITY METRICS

## Code Quality

| Metric            | Target |
| ----------------- | ------ |
| ESLint errors     | 0      |
| TypeScript errors | 0      |
| Test coverage     | ≥80%   |
| Build time        | <60s   |

## Content Quality

| Metric           | Target          |
| ---------------- | --------------- |
| Meta title       | 50-60 chars     |
| Meta desc        | 150-160 chars   |
| Brand voice      | 90%+ compliance |
| Factual accuracy | 100%            |

## Performance

| Metric          | Target |
| --------------- | ------ |
| LCP             | ≤2.5s  |
| INP             | ≤200ms |
| CLS             | ≤0.1   |
| Lighthouse perf | ≥90    |

---

# CZĘŚĆ 8: TEST PATTERNS

## What to Test in Arteon Tools

| Priority     | Test             | Example                          |
| ------------ | ---------------- | -------------------------------- |
| **Critical** | Conversion works | JPG → WebP generates valid file  |
| **Critical** | Input validation | Rejects too large files          |
| **High**     | UI feedback      | Loading state during conversion  |
| **High**     | Error handling   | Readable error for invalid input |
| **Medium**   | Edge cases       | Empty files, unicode names       |

## Form Tests

| Test             | Assertion                    |
| ---------------- | ---------------------------- |
| Email validation | `test@example.com` → valid   |
| Required fields  | Submit without data → errors |
| Success state    | Submit → loading → success   |

## Common Test Errors

| Error                        | Solution                            |
| ---------------------------- | ----------------------------------- |
| `Cannot find module '@/...'` | Check aliases in `vitest.config.ts` |
| `act() warning`              | Wrap in `await waitFor()`           |
| Test timeout                 | Increase timeout, check async/await |
| Flaky test                   | Use `waitFor` not fixed delays      |

---

# CZĘŚĆ 9: MOCKING

## Mock fetch

```typescript
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
  usePathname: () => '/narzedzia',
}));
```

## Mock LocaleContext

```typescript
const mockDictionary = {
  nav: { home: 'Strona główna' },
  ui: { loading: 'Ładowanie...' },
};

const wrapper = ({ children }) => (
  <LocaleProvider locale="pl" dictionary={mockDictionary}>
    {children}
  </LocaleProvider>
);

render(<Component />, { wrapper });
```

---

# CZĘŚĆ 10: PR CHECKLIST

## Before Merge

- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] New features have tests (coverage ≥80%)
- [ ] E2E for critical user flows
- [ ] No `test.skip` without comment
- [ ] No `console.log` in tests
- [ ] Descriptive test names

## Test Naming

```typescript
// ✅ Good - descriptive
it('shows error message when email is invalid', () => {});

// ❌ Bad - unclear
it('works', () => {});
```

## Arrange-Act-Assert

```typescript
it('increments counter on click', () => {
  // Arrange
  render(<Counter initialValue={0} />);

  // Act
  fireEvent.click(screen.getByRole('button', { name: '+' }));

  // Assert
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

---

# CZĘŚĆ 11: PRE-DEPLOY CHECKLIST

## Code

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] No console.log in production
- [ ] Environment variables set

## Content

- [ ] All 16 locales updated
- [ ] JSON valid
- [ ] No broken links
- [ ] Images optimized

## SEO

- [ ] Meta tags set
- [ ] Schema markup correct
- [ ] Hreflang configured
- [ ] Sitemap updated

## Performance

- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Bundle < 250KB gzipped

---

# QUICK REFERENCE

## Commands

```bash
npm run lint              # Lint check
npm run test              # Unit tests
npm run test:e2e          # E2E tests
npm run build             # Build
npx tsc --noEmit          # Type check
npx knip                  # Find unused code
```

## Test Files

| File                   | Purpose           |
| ---------------------- | ----------------- |
| `vitest.config.ts`     | Vitest config     |
| `playwright.config.ts` | Playwright config |
| `vitest.setup.ts`      | Test setup        |

## Quality Tools

| Tool       | Purpose               |
| ---------- | --------------------- |
| ESLint     | Code linting          |
| TypeScript | Type checking         |
| Vitest     | Unit testing          |
| Playwright | E2E testing           |
| Knip       | Unused code detection |
| Lighthouse | Performance audits    |
