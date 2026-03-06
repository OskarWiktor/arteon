import { NextResponse, type NextRequest } from 'next/server';

const CANONICAL_HOST = 'www.arteonagency.pl';
const CANONICAL_PROTOCOL = 'https';

// ---------------------------------------------------------------------------
// Security: known malicious bot user-agent substrings (case-insensitive)
// ---------------------------------------------------------------------------
const BAD_BOTS_RE = new RegExp(
  [
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
  ].join('|'),
  'i',
);

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
  const ua = request.headers.get('user-agent') || '';
  if (ua && BAD_BOTS_RE.test(ua)) {
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

export function middleware(request: NextRequest) {
  // ── Security gate ──────────────────────────────────────────────────────────────
  if (isBlockedRequest(request)) {
    return new NextResponse(null, { status: 403 });
  }

  // ── Canonical host ──────────────────────────────────────────────────────────
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const pathname = request.nextUrl.pathname;

  const needsProtoRedirect = proto === 'http' && process.env.VERCEL_ENV === 'production';
  const needsHostRedirect = host === 'arteonagency.pl';
  const needsSlashRedirect = pathname !== '/' && pathname.endsWith('/');

  if (needsProtoRedirect || needsHostRedirect || needsSlashRedirect) {
    const url = request.nextUrl.clone();
    if (needsProtoRedirect) url.protocol = CANONICAL_PROTOCOL;
    if (needsHostRedirect) url.host = CANONICAL_HOST;
    if (needsSlashRedirect) url.pathname = pathname.slice(0, -1);

    return new NextResponse(null, {
      status: 301,
      headers: {
        Location: url.toString(),
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon|sitemap|robots|ads|llms|\\.well-known|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.ico|.*\\.svg|.*\\.gif|.*\\.avif|.*\\.woff2?|.*\\.css|.*\\.js|.*\\.map|.*\\.txt|.*\\.xml|assets/|fonts/).*)',
  ],
};
