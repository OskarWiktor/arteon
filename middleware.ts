/**
 * Next.js Edge Middleware - URL Canonicalization + Redirects
 *
 * Ten middleware wymusza jedną kanoniczną wersję URL dla całego projektu:
 * - Protokół: HTTPS (redirect z HTTP)
 * - Domena: www.arteonagency.pl (redirect z arteonagency.pl)
 * - Trailing slash: brak (redirect z /path/ na /path, oprócz root /)
 * - Redirecty 301 dla zmienionych URL-i (narzędzia, usługi, edukacja, realizacje)
 *
 * Dlaczego middleware zamiast next.config.ts redirects?
 * - Middleware działa na edge, przed renderowaniem strony
 * - Zapewnia spójność URL-i na poziomie serwera
 * - Eliminuje ryzyko indeksowania różnych wariantów URL przez Google
 * - Działa również dla preview/development
 *
 * SEO impact:
 * - Zapobiega "niezgodności URL" w Senuto
 * - Zapobiega wypadaniu stron z raportu HTTPS w GSC
 * - Zapewnia, że canonical, og:url, sitemap i rzeczywisty URL są identyczne
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ALL_STATIC_REDIRECTS } from './lib/redirects';

const CANONICAL_HOST = 'www.arteonagency.pl';
const CANONICAL_PROTOCOL = 'https';

/**
 * Helper: redirect 301 z poprawnym Content-Type
 * NextResponse.redirect() domyślnie zwraca text/plain, co powoduje
 * że crawlery (Ahrefs) zapisują te strony jako "plain text" zamiast HTML.
 */
function redirect301(url: URL): NextResponse {
  return new NextResponse(null, {
    status: 301,
    headers: {
      Location: url.toString(),
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

/**
 * Sprawdza czy ścieżka pasuje do wzorca z parametrami
 * Obsługuje :slug (pojedynczy segment) i :path* (wiele segmentów)
 */
function matchPatternRedirect(pathname: string): string | null {
  // /projects/:slug → /realizacje/:slug
  if (pathname.startsWith('/projects/') && pathname !== '/projects/') {
    const slug = pathname.replace('/projects/', '');
    if (slug && !slug.includes('/')) {
      return `/realizacje/${slug}`;
    }
  }

  // /edukacja/design/:path* → /edukacja/grafika/:path*
  if (pathname.startsWith('/edukacja/design/')) {
    const rest = pathname.replace('/edukacja/design/', '');
    return `/edukacja/grafika/${rest}`;
  }

  return null;
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';

  let shouldRedirect = false;

  // 0. Statyczne redirecty 301 (narzędzia, usługi, edukacja, realizacje)
  const staticRedirect = ALL_STATIC_REDIRECTS[url.pathname];
  if (staticRedirect) {
    url.pathname = staticRedirect;
    return redirect301(url);
  }

  // 0b. Dynamiczne redirecty (wzorce z parametrami)
  const patternRedirect = matchPatternRedirect(url.pathname);
  if (patternRedirect) {
    url.pathname = patternRedirect;
    return redirect301(url);
  }

  // 1. Wymuszenie HTTPS (tylko produkcja - Vercel automatycznie obsługuje to dla preview)
  if (proto === 'http' && process.env.VERCEL_ENV === 'production') {
    url.protocol = CANONICAL_PROTOCOL;
    shouldRedirect = true;
  }

  // 2. Wymuszenie www (arteonagency.pl → www.arteonagency.pl)
  if (host === 'arteonagency.pl') {
    url.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  // 3. Usunięcie trailing slash (oprócz root /)
  // Ścieżka "/" jest OK, ale "/uslugi/" powinno być "/uslugi"
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    shouldRedirect = true;
  }

  // Wykonaj redirect 301 jeśli potrzebny
  if (shouldRedirect) {
    return redirect301(url);
  }

  return NextResponse.next();
}

// Matcher: uruchamiaj middleware dla wszystkich ścieżek oprócz statycznych zasobów
// Wykluczone: _next (build artifacts), api (API routes), statyczne pliki (obrazy, fonty, itp.)
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (SEO files)
     * - public folder files (assets, images)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|sitemap.*\\.xml|robots\\.txt|assets/|fonts/).*)',
  ],
};
