import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const reqWithGeo = request as any;

  const country = reqWithGeo.geo?.country || 'US';
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  const isPL = hostname.includes('arteonagency.pl');
  const isCOM = hostname.includes('arteonagency.com');

  if (country === 'PL' && !isPL) {
    return NextResponse.redirect(`https://www.arteonagency.pl${url.pathname}${url.search}`);
  }

  if (country !== 'PL' && !isCOM) {
    return NextResponse.redirect(`https://www.arteonagency.com${url.pathname}${url.search}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
