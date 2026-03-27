import { NextResponse, type NextRequest } from 'next/server';

const CANONICAL_HOST = process.env.NODE_ENV === 'production' ? 'www.arteonagency.pl' : 'localhost:3000';

/**
 * Edge middleware — single-hop canonical enforcement:
 * 1. HTTP → HTTPS
 * 2. non-www → www
 * 3. trailing slash → no trailing slash
 *
 * All conditions are checked once and resolved in a single 301 redirect
 * to avoid multi-hop chains that confuse search engine crawlers.
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const host = request.headers.get('host') || '';

  // Skip canonical redirects in development
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next();
  }

  let needsRedirect = false;

  // 1. Enforce HTTPS
  if (proto === 'http') {
    needsRedirect = true;
  }

  // 2. Enforce www
  if (host && host !== CANONICAL_HOST && host.replace(/:\d+$/, '') !== CANONICAL_HOST) {
    needsRedirect = true;
  }

  // 3. Remove trailing slash (except root "/")
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.replace(/\/+$/, '');
    needsRedirect = true;
  }

  if (needsRedirect) {
    url.protocol = 'https';
    url.host = CANONICAL_HOST;
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
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
