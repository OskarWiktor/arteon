import { NextResponse, type NextRequest } from 'next/server';
import { ALL_STATIC_REDIRECTS } from './lib/redirects';

const CANONICAL_HOST = 'www.arteonagency.pl';
const CANONICAL_PROTOCOL = 'https';

// ---------------------------------------------------------------------------
// Security: known malicious bot user-agent substrings (case-insensitive)
// ---------------------------------------------------------------------------
const BAD_BOTS = [
  'wpscan',
  'sqlmap',
  'nikto',
  'nmap',
  'masscan',
  'zmeu',
  'morfeus',
  'blackwidow',
  'indy library',
  'dirbuster',
  'gobuster',
  'nuclei',
  'httpx',
  'censys',
  'zgrab',
  'commix',
  'havij',
  'acunetix',
  'nessus',
  'openvas',
  'arachni',
];

// ---------------------------------------------------------------------------
// Security: paths commonly probed by bots/scanners (WordPress, PHP, etc.)
// Matched via startsWith or exact match against pathname (lowercased).
// ---------------------------------------------------------------------------
const BLOCKED_PATH_PREFIXES = [
  '/wp-admin',
  '/wp-login',
  '/wp-content',
  '/wp-includes',
  '/wp-json',
  '/xmlrpc',
  '/.env',
  '/.git',
  '/.svn',
  '/.hg',
  '/phpmyadmin',
  '/pma',
  '/myadmin',
  '/adminer',
  '/wp-config',
  '/cgi-bin',
  '/wp-cron',
  '/vendor/',
  '/debug/',
  '/.vscode',
  '/.idea',
  '/server-status',
  '/server-info',
];

const BLOCKED_PATH_EXACT = new Set([
  '/license.txt',
  '/readme.html',
  '/readme.txt',
  '/web.config',
  '/thumbs.db',
  '/desktop.ini',
  '/xmlrpc.php',
  '/wp-login.php',
  '/wp-cron.php',
  '/install.php',
  '/upgrade.php',
  '/admin.php',
  '/.htaccess',
  '/.htpasswd',
  '/.DS_Store',
  '/config.yml',
  '/config.yaml',
  '/config.json',
  '/composer.json',
  '/composer.lock',
  '/package.json',
  '/package-lock.json',
  '/Gruntfile.js',
  '/Gulpfile.js',
]);

// ---------------------------------------------------------------------------
// Security: file extensions that should never be served
// ---------------------------------------------------------------------------
const BLOCKED_EXTENSIONS = ['.php', '.asp', '.aspx', '.jsp', '.cgi', '.sql', '.bak', '.old', '.backup', '.swp', '.log', '.ini', '.conf', '.cfg'];

/**
 * Returns true when the request should be blocked for security reasons.
 */
function isBlockedRequest(request: NextRequest): boolean {
  // --- User-Agent check ---
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  if (ua && BAD_BOTS.some((bot) => ua.includes(bot))) {
    return true;
  }

  const pathLower = request.nextUrl.pathname.toLowerCase();

  // --- Blocked path prefixes ---
  if (BLOCKED_PATH_PREFIXES.some((prefix) => pathLower.startsWith(prefix))) {
    return true;
  }

  // --- Blocked exact paths ---
  if (BLOCKED_PATH_EXACT.has(pathLower)) {
    return true;
  }

  // --- Blocked file extensions ---
  const lastDot = pathLower.lastIndexOf('.');
  if (lastDot !== -1) {
    const ext = pathLower.slice(lastDot);
    if (BLOCKED_EXTENSIONS.includes(ext)) {
      return true;
    }
  }

  return false;
}

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
  // ── Security gate ──────────────────────────────────────────────────────
  if (isBlockedRequest(request)) {
    return new NextResponse(null, { status: 404 });
  }

  // ── Redirects & canonical ──────────────────────────────────────────────
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

  const response = NextResponse.next();
  response.headers.set('x-pathname', url.pathname);

  // Ensure sitemap XML files are served with correct Content-Type
  if (url.pathname.endsWith('.xml')) {
    response.headers.set('Content-Type', 'application/xml; charset=utf-8');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|assets/|fonts/).*)'],
};
