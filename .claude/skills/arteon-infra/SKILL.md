---
name: arteon-infra
description: >
  Comprehensive infrastructure system for Arteon Agency - Vercel deployment,
  performance optimization, Core Web Vitals, security, CI/CD, monitoring.
  Combines 6 skills into one deep-dive knowledge base.
---

# Skill: arteon-infra

Kompletny system infrastruktury dla Arteon Agency — deployment, performance, security.

**Łączy:** arteon-infrastructure-intelligence, arteon-deployment-strategy, arteon-performance-intelligence, arteon-performance-optimization, arteon-security-intelligence, arteon-security-best-practices

## Kiedy używać

- Deployment configuration
- Performance optimization
- Security implementation
- CI/CD pipeline
- Monitoring setup
- Environment configuration

---

# CZĘŚĆ 1: DEPLOYMENT (VERCEL)

## Production Stack

| Component | Value               |
| --------- | ------------------- |
| Platform  | Vercel              |
| Framework | Next.js 16.1.6      |
| Runtime   | Node.js 20.x        |
| CDN       | Vercel Edge Network |
| Domain    | arteon.pl           |
| Region    | cdg1 (Paris)        |

## vercel.json

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "regions": ["cdg1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/(.*\\.(jpg|jpeg|png|webp|avif|ico|svg))",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ],
  "redirects": [
    {
      "source": "/tools/:path*",
      "destination": "/narzedzia/:path*",
      "permanent": true
    }
  ]
}
```

## Deploy Commands

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# Rollback
vercel rollback
```

---

# CZĘŚĆ 2: ENVIRONMENT VARIABLES

## Structure

```bash
# .env.local (local dev, not committed)
DATABASE_URL=...
API_SECRET=...
RESEND_API_KEY=...

# .env.example (committed, no values)
DATABASE_URL=
API_SECRET=

# Vercel dashboard for production
```

## Naming Convention

```bash
# Server-only (no prefix)
DATABASE_URL=
API_SECRET=
RESEND_API_KEY=

# Client-accessible (NEXT_PUBLIC_ prefix)
NEXT_PUBLIC_GA_ID=G-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://arteon.pl
```

## Environment Validation

```typescript
// lib/env-validation.ts
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  DATABASE_URL: z.string().min(1).optional(),
});

export const env = envSchema.parse(process.env);
```

---

# CZĘŚĆ 3: BUILD PIPELINE

## package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "prebuild": "node scripts/generate-search-index.cjs",
    "postbuild": "next-sitemap && node scripts/indexnow-notify.cjs"
  }
}
```

## Build Order

1. `prebuild` → generate search index
2. `next build` → Next.js build
3. `postbuild` → sitemap + IndexNow

## CI/CD (GitHub Actions)

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
      - run: npm run build
```

---

# CZĘŚĆ 4: CORE WEB VITALS (2025)

## Thresholds

| Metric  | Good   | Needs Work | Poor   |
| ------- | ------ | ---------- | ------ |
| **LCP** | ≤2.5s  | 2.5-4s     | >4s    |
| **INP** | ≤200ms | 200-500ms  | >500ms |
| **CLS** | ≤0.1   | 0.1-0.25   | >0.25  |

**⚠️ INP replaced FID in March 2024.**

## LCP Optimization

```tsx
// Preload LCP image
<link rel="preload" as="image" href="/hero.webp" fetchPriority="high" />

// Priority loading in Next.js
<Image src="/hero.webp" priority alt="Hero" />

// Avoid render blocking
<Script strategy="lazyOnload" src="/analytics.js" />
```

## INP Optimization

```tsx
// Debounce expensive handlers
const debouncedSearch = useDebouncedCallback(search, 300);

// Use transitions
const [isPending, startTransition] = useTransition();
startTransition(() => setExpensiveState(value));
```

## CLS Prevention

```tsx
// ✅ Always set dimensions
<Image src="/photo.webp" width={800} height={600} alt="Photo" />

// ✅ Aspect ratio container
<div className="aspect-video">
  <Image src="/video.webp" fill alt="Video" />
</div>

// ✅ Skeleton loading
{isLoading ? <Skeleton className="h-48" /> : <Content />}
```

---

# CZĘŚĆ 5: PERFORMANCE OPTIMIZATION

## React.cache (Next.js 16)

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
import dynamic from 'next/dynamic';

// Heavy component - lazy load
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false,
});
```

## Image Optimization

```typescript
// next.config.ts
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
},
```

## Package Import Optimization

```typescript
// next.config.ts
experimental: {
  reactCompiler: true,
  optimizeCss: true,
  optimizePackageImports: [
    'react-icons/ri',
    'sharp',
    'marked',
  ],
},
```

## Bundle Size Targets

| Target     | Size            |
| ---------- | --------------- |
| Initial JS | < 100KB gzipped |
| Total JS   | < 250KB gzipped |
| CSS        | < 50KB gzipped  |

---

# CZĘŚĆ 6: CACHING STRATEGIES

## Static Generation (Default)

```typescript
// Pages are static by default in App Router
export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  return <div>{data}</div>;
}
```

## Revalidation

```typescript
// Time-based
export const revalidate = 3600; // 1 hour

// On-demand
import { revalidatePath } from 'next/cache';
revalidatePath('/tools');
```

## Cache Headers (vercel.json)

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

---

# CZĘŚĆ 7: SECURITY HEADERS

## vercel.json Configuration

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

## Content Security Policy

```typescript
// next.config.ts
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://www.google-analytics.com;
  frame-ancestors 'none';
`;

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [{ key: 'Content-Security-Policy', value: cspHeader.replace(/\n/g, '') }],
      },
    ];
  },
};
```

---

# CZĘŚĆ 8: INPUT VALIDATION

## Zod Validation

```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Min 2 znaki').max(100, 'Max 100 znaków'),
  email: z.string().email('Nieprawidłowy email'),
  message: z.string().min(10).max(5000),
  consent: z.literal(true),
});

// Server Action
export async function submitContact(formData: FormData) {
  const result = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    consent: formData.get('consent') === 'on',
  });

  if (!result.success) {
    return { error: result.error.flatten() };
  }

  // Process validated data
}
```

## File Upload Security

```typescript
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

function validateFile(file: File): { valid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'Plik za duży (max 10MB)' };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { valid: false, error: 'Niedozwolony format' };
  }

  return { valid: true };
}
```

---

# CZĘŚĆ 9: XSS & CSRF PROTECTION

## XSS Prevention

```typescript
// ✅ React auto-escapes
<div>{userInput}</div>

// ⚠️ dangerouslySetInnerHTML - sanitize first!
import DOMPurify from 'dompurify';

const sanitizedHTML = DOMPurify.sanitize(userHTML);
<div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />

// ❌ Never trust user input
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

## CSRF Protection

Server Actions in Next.js have built-in CSRF protection.

```typescript
'use server';

export async function updateProfile(formData: FormData) {
  // Safe from CSRF - built-in protection
}
```

## External Links

```tsx
// ✅ Secure external links
<a href={externalUrl} target='_blank' rel='noopener noreferrer'>
  External Link
</a>
```

---

# CZĘŚĆ 10: RATE LIMITING

## Implementation

```typescript
// lib/rateLimit.ts
const rateLimit = new Map<string, { count: number; timestamp: number }>();

export function checkRateLimit(ip: string, limit = 10, window = 60000) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.timestamp > window) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count++;
  return true;
}
```

## Usage in Route Handler

```typescript
export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  if (!checkRateLimit(ip)) {
    return Response.json({ error: 'Too many requests' }, { status: 429 });
  }

  // Process request
}
```

---

# CZĘŚĆ 11: MONITORING

## Vercel Analytics

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Google Analytics 4

```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga4" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

## Health Check Endpoint

```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}
```

---

# CZĘŚĆ 12: ERROR HANDLING

## Error Boundary

```typescript
// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Coś poszło nie tak</h2>
      <button onClick={reset}>Spróbuj ponownie</button>
    </div>
  );
}
```

## Not Found

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h1>404 - Strona nie znaleziona</h1>
      <Link href="/">Wróć na stronę główną</Link>
    </div>
  );
}
```

---

# CZĘŚĆ 13: TROUBLESHOOTING

## Build Fails

```bash
# Clear cache
rm -rf .next node_modules/.cache
npm run build

# Memory issues
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## Windows Build Issues

If build fails with missing manifest files when `next dev` is running:

1. Stop all Next/node processes
2. Delete `.next` folder
3. Run `npm run build`

## Environment Variables Not Working

1. Check Vercel dashboard
2. Redeploy after adding vars
3. Check `NEXT_PUBLIC_` prefix for client vars

---

# CZĘŚĆ 14: CHECKLISTS

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Linting completed
- [ ] Bundle size optimized
- [ ] Security headers configured
- [ ] Environment variables set
- [ ] Cache strategies implemented
- [ ] Monitoring configured

## Post-Deployment Checklist

- [ ] Health checks passing
- [ ] Core Web Vitals monitored
- [ ] Error rates checked
- [ ] Performance metrics reviewed
- [ ] Security scans completed

## Security Checklist

- [ ] Zod validation on all inputs
- [ ] Rate limiting on submissions
- [ ] `rel="noopener noreferrer"` on external links
- [ ] No secrets in client code
- [ ] Security headers configured
- [ ] CSP configured

---

# QUICK REFERENCE

## Commands

```bash
npm run dev          # Development
npm run build        # Build
npm run lint         # Lint
vercel               # Preview deploy
vercel --prod        # Production deploy
```

## Core Web Vitals (Good)

| Metric | Threshold |
| ------ | --------- |
| LCP    | ≤ 2.5s    |
| INP    | ≤ 200ms   |
| CLS    | ≤ 0.1     |

## Key Files

| File             | Purpose               |
| ---------------- | --------------------- |
| `vercel.json`    | Vercel configuration  |
| `next.config.ts` | Next.js configuration |
| `.env.local`     | Local environment     |
| `package.json`   | Build scripts         |

## Common Vulnerabilities Prevention

| Issue       | Prevention         |
| ----------- | ------------------ |
| XSS         | Sanitize user HTML |
| CSRF        | Use Server Actions |
| Injection   | Validate with Zod  |
| File upload | Check type & size  |
