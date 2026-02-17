import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export function GET() {
  try {
    const xml = readFileSync(join(process.cwd(), '.sitemap-cache', 'sitemap-0.xml'), 'utf-8');
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><error>Sitemap not found</error>', {
      status: 404,
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
  }
}
