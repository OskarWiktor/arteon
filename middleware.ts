import { NextResponse, type NextRequest } from 'next/server';

const CANONICAL_HOST = process.env.NODE_ENV === 'production' ? 'www.arteonagency.pl' : 'localhost:3000';

// All locale-specific tool base paths — used to detect concatenated cross-locale URLs
// that Google discovered from old broken links (e.g. /da/vaerktojer/slug/no/verktoy/slug).
// Returning 410 Gone for these signals Google to permanently deindex them.
const TOOL_BASES = [
  '/narzedzia/',
  '/en/tools/',
  '/de/werkzeuge/',
  '/es/herramientas/',
  '/fr/outils/',
  '/pt/ferramentas/',
  '/it/strumenti/',
  '/ro/instrumente/',
  '/nl/tools/',
  '/hu/eszkozok/',
  '/cs/nastroje/',
  '/sv/verktyg/',
  '/da/vaerktojer/',
  '/no/verktoy/',
  '/fi/tyokalut/',
  '/el/ergaleia/',
];

function isConcatenatedLocaleUrl(pathname: string): boolean {
  let matchCount = 0;
  for (const base of TOOL_BASES) {
    if (pathname.includes(base)) {
      matchCount++;
      if (matchCount >= 2) return true;
    }
  }
  return false;
}

// HSTS header — must be present on EVERY response (including redirects)
// so that hstspreload.org sees it on arteonagency.pl (non-www) redirect too.
const HSTS_VALUE = 'max-age=63072000; includeSubDomains; preload';

/**
 * Edge middleware — single-hop canonical enforcement:
 * 0. Block Vercel preview/deployment URLs from indexing
 * 1. 410 Gone for concatenated cross-locale URLs (SEO cleanup)
 * 2. HTTP → HTTPS
 * 3. non-www → www
 * 4. trailing slash → no trailing slash
 *
 * All conditions are checked once and resolved in a single 301 redirect
 * to avoid multi-hop chains that confuse search engine crawlers.
 * HSTS is attached to every response (redirects + pass-through) for preload eligibility.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host') || '';

  // 0. Block Vercel preview/deployment URLs from search engine indexing.
  // If Google discovers *.vercel.app URLs, return noindex instead of redirecting
  // to canonical — a redirect would signal "this is the same page" to crawlers.
  if (host.endsWith('.vercel.app')) {
    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
    res.headers.set('Strict-Transport-Security', HSTS_VALUE);
    return res;
  }

  // 1. Return 410 Gone for concatenated cross-locale URLs
  // Pattern: /da/vaerktojer/slug-a/no/verktoy/slug-b (two locale tool paths in one URL)
  // These are ghost URLs from old broken links — 410 tells Google to stop crawling them.
  if (isConcatenatedLocaleUrl(url.pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'X-Robots-Tag': 'noindex',
        'Strict-Transport-Security': HSTS_VALUE,
      },
    });
  }

  // Skip canonical redirects in development
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  let needsRedirect = false;

  // 2. Enforce HTTPS
  if (proto === 'http') {
    needsRedirect = true;
  }

  // 3. Enforce www
  if (host && host !== CANONICAL_HOST && host.replace(/:\d+$/, '') !== CANONICAL_HOST) {
    needsRedirect = true;
  }

  // 4. Remove trailing slash (except root "/")
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
    needsRedirect = true;
  }

  if (needsRedirect) {
    url.protocol = 'https';
    url.host = CANONICAL_HOST;
    url.port = '';
    const res = NextResponse.redirect(url, 301);
    // HSTS on redirect responses — required for hstspreload.org eligibility.
    // Without this, arteonagency.pl (non-www) redirect lacks HSTS headers.
    res.headers.set('Strict-Transport-Security', HSTS_VALUE);
    return res;
  }

  // Pass-through — attach HSTS to normal responses too
  const res = NextResponse.next();
  res.headers.set('Strict-Transport-Security', HSTS_VALUE);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - _next/data (data routes — handled by Next.js)
     * - favicon.ico, sitemap*.xml, robots.txt, ads.txt (static SEO files)
     * - assets/ (static assets)
     * - fonts/ (font files)
     * - *.png, *.jpg, *.webp, *.svg, *.ico, *.xml, *.txt, *.pdf, *.mjs (static files)
     */
    '/((?!_next/static|_next/image|_next/data|favicon\\.ico|icon-512x512\\.png|apple-touch-icon\\.png|assets/|fonts/|sitemap.*\\.xml|robots\\.txt|ads\\.txt|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|xml|txt|pdf|mjs)$).*)',
  ],
};
