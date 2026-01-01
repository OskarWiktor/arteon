import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ALL_STATIC_REDIRECTS } from './lib/redirects';

const CANONICAL_HOST = 'www.arteonagency.pl';
const CANONICAL_PROTOCOL = 'https';

function redirect301(url: URL): NextResponse {
  return new NextResponse(null, {
    status: 301,
    headers: {
      Location: url.toString(),
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

function matchPatternRedirect(pathname: string): string | null {
  if (pathname.startsWith('/projects/') && pathname !== '/projects/') {
    const slug = pathname.replace('/projects/', '');
    if (slug && !slug.includes('/')) {
      return `/realizacje/${slug}`;
    }
  }

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

  const staticRedirect = ALL_STATIC_REDIRECTS[url.pathname];
  if (staticRedirect) {
    url.pathname = staticRedirect;
    return redirect301(url);
  }

  const patternRedirect = matchPatternRedirect(url.pathname);
  if (patternRedirect) {
    url.pathname = patternRedirect;
    return redirect301(url);
  }

  if (proto === 'http' && process.env.VERCEL_ENV === 'production') {
    url.protocol = CANONICAL_PROTOCOL;
    shouldRedirect = true;
  }

  if (host === 'arteonagency.pl') {
    url.host = CANONICAL_HOST;
    shouldRedirect = true;
  }

  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return redirect301(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|sitemap.*\\.xml|robots\\.txt|assets/|fonts/).*)',
  ],
};
