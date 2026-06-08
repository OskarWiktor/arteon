const COOKIE_NAME = 'arteon_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

type ConsentState = {
  v: number;
  analytics: boolean;
  ads: boolean;
  updatedAt: string;
};

export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null;

  const m = document.cookie.match(
    new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]+)'),
  );
  if (!m) return null;

  try {
    return JSON.parse(decodeURIComponent(m[1])) as ConsentState;
  } catch {
    return null;
  }
}

export function writeConsent(state: ConsentState) {
  if (typeof document === 'undefined' || typeof location === 'undefined')
    return;

  const value = encodeURIComponent(JSON.stringify(state));
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  let domainAttr = '';

  try {
    const parts = location.hostname.split('.');
    if (parts.length >= 2) {
      const base = parts.slice(-2).join('.');
      domainAttr = `; Domain=.${base}`;
    }
  } catch {
    domainAttr = '';
  }

  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}${domainAttr}`;
}
