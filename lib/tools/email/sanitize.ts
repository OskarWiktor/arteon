export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function formatMultiline(value: string): string {
  return escapeHtml(value).replace(/\n/g, '<br />');
}

export function sanitizeHrefUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';

  const lowered = trimmed.toLowerCase();
  // These protocol prefixes are denylisted here, never executed — this function blocks them.
  // eslint-disable-next-line sonarjs/code-eval
  const forbiddenProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];

  if (forbiddenProtocols.some(proto => lowered.startsWith(proto))) {
    return '';
  }

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  return `https://${trimmed}`;
}

export function sanitizeSrcUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';

  const lowered = trimmed.toLowerCase();
  // These protocol prefixes are denylisted here, never executed — this function blocks them.
  // eslint-disable-next-line sonarjs/code-eval
  const forbiddenProtocols = ['javascript:', 'vbscript:', 'file:'];

  if (forbiddenProtocols.some(proto => lowered.startsWith(proto))) {
    return '';
  }

  return trimmed;
}

export function formatPhone(phone: string): string {
  return phone.trim();
}
