const AHREFS_KEY = process.env.NEXT_PUBLIC_AHREFS_KEY;

export function loadAhrefs() {
  if (!AHREFS_KEY) return;
  if (typeof document === 'undefined') return;

  const ahrefsSrc = 'https://analytics.ahrefs.com/analytics.js';

  const alreadyLoaded = Array.from(document.scripts).some(
    s => s.src === ahrefsSrc,
  );
  if (alreadyLoaded) return;
  if (document.getElementById('ahrefs-analytics')) return;

  const script = document.createElement('script');
  script.id = 'ahrefs-analytics';
  script.async = true;
  script.src = ahrefsSrc;
  script.setAttribute('data-key', AHREFS_KEY);
  document.head.appendChild(script);
}
