export function loadGA(measurementId?: string) {
  if (!measurementId) return;
  if (typeof document === 'undefined') return;

  const gtagSrc = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  const alreadyLoaded = Array.from(document.scripts).some(s => s.src === gtagSrc);
  if (!alreadyLoaded && !document.getElementById('ga4-src')) {
    const s1 = document.createElement('script');
    s1.id = 'ga4-src';
    s1.async = true;
    s1.src = gtagSrc;
    document.head.appendChild(s1);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false });
  }
}

export function sendGAPageView() {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title,
  });
}
