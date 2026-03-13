# Security Standards - Arteon Agency

## Security Architecture

### Warstwy Bezpieczeństwa

```
┌─────────────────────────────────────┐
│           CDN & Edge Network        │  ← WAF, DDoS protection
├─────────────────────────────────────┤
│         Vercel Platform              │  ← Isolated runtime, auto-scaling
├─────────────────────────────────────┤
│       Next.js Application           │  ← CSP, Headers, Validation
├─────────────────────────────────────┤
│        Database & Storage            │  ← Encrypted connections, backups
├─────────────────────────────────────┤
│         External APIs                │  ← Rate limiting, validation
└─────────────────────────────────────┘
```

### Kluczowe Zasady Bezpieczeństwa

1. **Zero Trust** - Wszystkie dane wejściowe są potencjalnie złośliwe
2. **Defense in Depth** - Multiple warstwy ochrony
3. **Principle of Least Privilege** - Minimalne uprawnienia
4. **Fail Secure** - Domyślne bezpieczne konfiguracje

## Environment Security

### Zarządzanie Sekretami

```bash
# .env.example (bezpieczny do commitu)
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.arteonagency.pl
DATABASE_URL=postgresql://user:password@host:port/database
RESEND_API_KEY=resend_api_key
GOOGLE_ANALYTICS_ID=ga_measurement_id

# Security settings
NEXTAUTH_SECRET=your-secret-key-here
ENCRYPTION_KEY=your-encryption-key-here
JWT_SECRET=your-jwt-secret-here
```

### Walidacja Środowiska

```typescript
// lib/env-validation.ts
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  DATABASE_URL: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(32),
  ENCRYPTION_KEY: z.string().min(32),
  JWT_SECRET: z.string().min(32),
});

export const env = envSchema.parse(process.env);

// Runtime validation
if (env.NODE_ENV === 'production') {
  if (env.DATABASE_URL.includes('localhost')) {
    throw new Error('Production database cannot be localhost');
  }

  if (env.NEXTAUTH_SECRET.length < 32) {
    throw new Error('NEXTAUTH_SECRET must be at least 32 characters in production');
  }
}
```

### Zakazane Praktyki

```typescript
// ❌ NIGDY
const apiKey = process.env.API_KEY; // Możliwość wycieku w logach
const dbUrl = 'postgresql://user:password@localhost/db'; // Tylko dla dewelopmentu

// ✅ POPRAWNE
const apiKey = process.env.API_KEY!; // Runtime error w produkcji
const dbUrl = process.env.DATABASE_URL; // Zawsze z walidacją
```

## API Security

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { NextRequest } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

export function rateLimit(
  request: NextRequest,
  options: {
    limit: number;
    windowMs: number;
    keyGenerator?: (req: NextRequest) => string;
  } = { limit: 100, windowMs: 60000 },
): { success: boolean; remaining: number; resetTime: number } {
  const key = options.keyGenerator ? options.keyGenerator(request) : request.ip || 'unknown';

  const now = Date.now();
  const windowStart = now - options.windowMs;

  let record = rateLimitStore.get(key);

  if (!record || record.resetTime < now) {
    record = { count: 0, resetTime: now + options.windowMs };
    rateLimitStore.set(key, record);
  }

  if (record.count >= options.limit) {
    return {
      success: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count++;
  return {
    success: true,
    remaining: options.limit - record.count,
    resetTime: record.resetTime,
  };
}
```

### Input Validation & Sanitization

```typescript
// lib/validation.ts
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Walidacja danych wejściowych
const toolInputSchema = z.object({
  input: z
    .string()
    .min(1, 'Input jest wymagany')
    .max(1000000, 'Input za duży')
    .transform((val) => DOMPurify.sanitize(val)), // XSS protection
  format: z.enum(['jpg', 'png', 'webp', 'avif', 'json', 'xml', 'yaml']),
  quality: z
    .number()
    .min(1)
    .max(100)
    .optional(),
});

// Walidacja upload plików
const fileUploadSchema = z.object({
  file: z.instanceof(File).refine(
    (file) => file.size <= 10 * 1024 * 1024, 'Plik nie może być większy niż 10MB'),
    'File size validation'
  ).refine(
    (file) => allowedMimeTypes.includes(file.type),
    'Nieobsługiwany typ pliku'
  ),
});

export function validateToolInput(input: unknown) {
  try {
    return toolInputSchema.parse(input);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0];
      throw new Error(firstError?.message || 'Invalid input');
    }
    throw error;
  }
}
```

### API Route Security

```typescript
// app/api/tools/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  // Rate limiting
  const { success, remaining } = rateLimit(request, {
    limit: 10,
    windowMs: 60000,
  });

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': new Date(Date.now() + 60000).toISOString(),
        },
      },
    );
  }

  try {
    const { slug } = await params;
    const tool = await getToolData('pl', slug);

    if (!tool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
    }

    return NextResponse.json(tool);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

## Database Security

### Połączenia Baz Danych

```typescript
// lib/db.ts
import { Pool } from 'pg';

// Bezpieczne połączenie z bazą danych
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20, // Limit połączeń
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Zawsze używaj parametryzowanych zapytań
export async function getUserByEmail(email: string) {
  const query = 'SELECT id, email, name, role FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
}
```

### Szyfrowanie Danych

```typescript
// lib/encryption.ts
import crypto from 'crypto';

const algorithm = 'aes-256-gcm';
const key = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex');

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher(algorithm, key);
  cipher.setAAD(Buffer.from('additional-data'));

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const tag = cipher.getAuthTag();

  return iv.toString('hex') + ':' + tag.toString('hex') + ':' + encrypted;
}

export function decrypt(encryptedData: string): string {
  const parts = encryptedData.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const tag = Buffer.from(parts[1], 'hex');
  const encrypted = parts[2];

  const decipher = crypto.createDecipher(algorithm, key);
  decipher.setAAD(Buffer.from('additional-data'));
  decipher.setAuthTag(tag);

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
```

## Frontend Security

### Content Security Policy (CSP)

```typescript
// next.config.ts
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https: blob:;
  connect-src 'self' https://www.google-analytics.com;
  media-src 'self' blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### Bezpieczne Praktyki React

```typescript
// ❌ NIGDY - XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ BEZPIECZNE - Sanitized HTML
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />

// ❌ NIGDY - Unsafe innerHTML
const html = `<script>alert('XSS')</script>`;
div.innerHTML = html;

// ✅ BEZPIECZNE - Użycaj bezpiecznych komponentów
import { SafeHTML } from '@/components/SafeHTML';
<SafeHTML html={userInput} />
```

### Bezpieczne Praktyki z URL

```typescript
// lib/url-security.ts
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

export function sanitizeUrl(url: string): string {
  const urlObj = new URL(url);
  return urlObj.protocol === 'https:' ? url.href : `https://${urlObj.host}${urlObj.pathname}${urlObj.search}`;
}
```

## File Upload Security

### Walidacja Upload

```typescript
// lib/file-security.ts
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'text/plain', 'application/json'];

const maxFileSize = 10 * 1024 * 1024; // 10MB

export async function secureFileUpload(file: File): Promise<string> {
  // Sprawdź typ pliku
  if (!allowedMimeTypes.includes(file.type)) {
    throw new Error('Invalid file type');
  }

  // Sprawdź rozmiar pliku
  if (file.size > maxFileSize) {
    throw new Error('File too large');
  }

  // Generuj bezpieczną nazwę pliku
  const ext = path.extname(file.name);
  const hash = crypto
    .createHash('sha256')
    .update(file.name + Date.now())
    .digest('hex');
  const filename = `${hash}${ext}`;

  // Upewnij plik
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join('public', 'uploads', filename), buffer);

  return `/uploads/${filename}`;
}
```

### Skanowanie Wirusów (Opcjonalne)

```typescript
// lib/virus-scan.ts
export async function scanFile(filePath: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.virusscanner.com/scan', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.VIRUS_SCANNER_API_KEY}` },
      body: JSON.stringify({ filePath }),
    });

    const result = await response.json();
    return result.clean;
  } catch (error) {
    console.error('Virus scan failed:', error);
    return false; // Fail safe
  }
}
```

## Authentication & Authorization

### NextAuth.js Konfiguracja

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { authConfig } from '@/lib/auth.config';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

// lib/auth.config.ts
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        // Weryfikuj dane uwierzytelnia
        const user = await verifyUser(email, password);
        if (!user) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 godziny
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
```

### Role-Based Access Control

```typescript
// lib/auth-middleware.ts
import { getServerSession } from 'next-auth';

export async function requireAuth(role?: string) {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/signin');
  }

  if (role && session.user.role !== role) {
    redirect('/auth/unauthorized');
  }

  return session;
}

// Użycie w Server Components
export default async function AdminPage() {
  const session = await requireAuth('admin');

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {session.user.name}</p>
    </div>
  );
}
```

## Monitoring & Logging

### Logowanie Błędów Bezpieczeństwa

```typescript
// lib/security-logger.ts
interface SecurityEvent {
  type: 'auth_failure' | 'rate_limit' | 'invalid_input' | 'suspicious_activity';
  ip: string;
  userAgent: string;
  timestamp: string;
  details: Record<string, any>;
}

class SecurityLogger {
  static log(event: SecurityEvent) {
    // Log do bezpiecznego serwisu
    this.sendToLoggingService(event);

    // Wysokiej priorytetowe zdarzenia
    if (event.type === 'suspicious_activity') {
      this.sendAlert(event);
    }
  }

  private static async sendToLoggingService(event: SecurityEvent) {
    try {
      await fetch('/api/security/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  }

  private static async sendAlert(event: SecurityEvent) {
    // Wyślij do serwisu monitoringu (PagerDuty, Slack, etc.)
    console.warn('🚨 Security Alert:', event);
  }
}

// Użycie w API routes
export async function POST(request: NextRequest) {
  const { success } = rateLimit(request, { limit: 10, windowMs: 60000 });

  if (!success) {
    SecurityLogger.log({
      type: 'rate_limit',
      ip: request.ip || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      timestamp: new Date().toISOString(),
      details: { endpoint: request.url },
    });

    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }
}
```

### Monitorowanie Wydajności

```typescript
// lib/performance-monitor.ts
export class PerformanceMonitor {
  async runPerformanceAudit(): Promise<void> {
    const metrics = await this.collectMetrics();
    this.checkThresholds(metrics);
  }

  private checkThresholds(metrics: any): void {
    const thresholds = {
      lighthouse: {
        performance: 90,
        accessibility: 95,
        bestPractices: 90,
        seo: 90,
      },
      bundleSize: {
        total: 250 * 1024, // 250KB
        largest: 100 * 1024, // 100KB
      },
    };

    // Sprawdź wyników
    Object.entries(metrics.lighthouse).forEach(([key, value]) => {
      if (value < thresholds.lighthouse[key as keyof typeof thresholds.lighthouse]) {
        console.warn(`⚠️ ${key} score ${value} below threshold ${thresholds.lighthouse[key]}`);
      }
    });
  }
}
```

## Security Testing

### Testy Bezpieczeństwa

```typescript
// tests/security/api-security.test.ts
import { test, expect } from '@playwright/test';

test.describe('API Security', () => {
  test('prevents SQL injection', async ({ request }) => {
    const maliciousInput = "'; DROP TABLE users; --";

    const response = await request.post('/api/tools/convert', {
      data: { input: maliciousInput, format: 'json' },
    });

    expect(response.status()).toBe(400);
    expect(response.statusText()).toBe('Bad Request');
  });

  test('enforces rate limiting', async ({ request }) => {
    const promises = Array(11)
      .fill(null)
      .map(() =>
        request.post('/api/tools/convert', {
          data: { input: 'test', format: 'json' },
        }),
      );

    const responses = await Promise.all(promises);
    const rateLimited = responses.filter((r) => r.status() === 429);

    expect(rateLimited.length).toBeGreaterThan(0);
  });

  test('validates file uploads', async ({ request }) => {
    const maliciousFile = Buffer.from('malicious content');

    const response = await request.post('/api/tools/image-converter', {
      multipart: {
        file: {
          name: 'malicious.exe',
          mimeType: 'application/octet-stream',
          buffer: maliciousFile,
        },
      },
    });

    expect(response.status()).toBe(400);
    expect(response.statusText()).toBe('Bad Request');
  });
});
```

### Testy Frontend Security

```typescript
// tests/security/xss-protection.test.ts
import { test, expect } from '@playwright/test';

test.describe('XSS Protection', () => {
  test('prevents XSS attacks', async ({ page }) => {
    await page.goto('/narzedzia/text-converter');

    // Próba z XSS
    await page.fill('textarea[name="input"]', '<script>alert("XSS")</script>');

    // Sprawdź, czy skrypt nie jest wykonany
    const alerts = page.locator('.alert');
    await expect(alerts).toHaveCount(0);
  });

  test('sanitizes user input', async ({ page }) => {
    await page.goto('/narzedzia/text-converter');

    const userInput = '<script>alert("XSS")</script>';
    const sanitized = DOMPurify.sanitize(userInput);

    await page.fill('textarea[name="input"]', sanitized);

    // Sprawdź, czy zdezyna skrypt jest zablokowana
    const scripts = page.locator('script');
    await expect(scripts).toHaveCount(0);
  });
});
```

## Security Checklist

### Development

- [ ] Environment variables validated
- [ ] Input validation implemented
- [ ] Rate limiting configured
- [ ] Authentication properly set up
- [ ] Database queries parameterized
- [ ] File uploads secured
- [ ] CSP headers configured
- [ ] Error handling doesn't expose details

### Production

- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Monitoring enabled
- [ ] Logging implemented
- [ ] Regular security audits
- [ ] Dependency scanning
- [ ] Penetration testing
- [ ] Backup encryption

### Regular Maintenance

- [ ] Update dependencies
- [ ] Review access logs
- [ ] Monitor security events
- [ ] Test security controls
- [ ] Update security policies
- [ ] Train team members

## Common Security Issues & Solutions

### SQL Injection

```typescript
// ❌ Vulnerable
const query = `SELECT * FROM users WHERE email = '${email}'`;

// ✅ Safe
const query = 'SELECT * FROM users WHERE email = $1';
await pool.query(query, [email]);
```

### XSS Prevention

```typescript
// ❌ Vulnerable
div.innerHTML = userInput;

// ✅ Safe
div.textContent = userInput;
// lub
div.innerHTML = DOMPurify.sanitize(userInput);
```

### CSRF Protection

```typescript
// NextAuth.js automatycznie chroni CSRF protection
// Dodatkowo można dodać niestandardowe token
export const authConfig = {
  // ... inne konfiguracje
  cookies: {
    sessionToken: {
      name: 'session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60, // 24 godziny
        secure: true,
      },
    },
  },
};
```

## Security Best Practices Summary

### Do's

1. **Waliduj wszystkie dane wejściowe**
2. **Używaj parametryzowane zapytania SQL**
3. **Implementuj rate limiting**
4. **Używaj HTTPS we wszystkich środowiskach**
5. **Szyfrujuj dane wrażliwe**
6. **Loguj zdarzenia bezpieczeństwa**
7. **Regularnie aktualizuj zależności**
8. **Testuj bezpieczeństwo**

### Don'ts

1. **Nigdy używaj `any` w kodzie produkcyjnym**
2. **Nigdy ustawiaj sekrety w kodzie**
3. **Nigdy ignoruj błędy walidacji**
4. **Nigdy używaj eval() z niezaufiltrowanych danymi**
5. **Nigdy ujawaj innerHTML bez sanitacji**
6. **Nigdy przechowuj błędy w try-catch dla nawigacji**
7. **Nigdy eksponuj wrażliwe błędy użytkownikom**

Te zasady bezpieczeństwa zapewniają ochronę projektu Arteon Agency przed najczęstszymi zagrożeniami bezpieczeństwa przy jednoczesnym wspieraniu wydajności i skalowalności.
