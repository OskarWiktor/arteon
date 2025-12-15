export function loadGA(measurementId?: string) {
  if (!measurementId) return;
  if (typeof document === 'undefined') return;

  const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  const alreadyLoaded = Array.from(document.scripts).some((s) => s.src === gtagSrc);
  if (alreadyLoaded) return;
  if (document.getElementById('ga4-src')) return;

  const s1 = document.createElement('script');
  s1.id = 'ga4-src';
  s1.async = true;
  s1.src = gtagSrc;
  document.head.appendChild(s1);

  const s2 = document.createElement('script');
  s2.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { send_page_view: false });
  `;
  document.head.appendChild(s2);
}
