/**
 * Centralna konfiguracja wszystkich redirectów 301
 *
 * Ten plik zawiera wszystkie redirecty używane w projekcie:
 * - Legacy URL-e (angielskie ścieżki, stare slugi)
 * - Zmiany URL-i edukacji (przeniesienia kategorii)
 * - Zmiany URL-i realizacji (nowe slugi)
 *
 * Redirecty są obsługiwane przez middleware.ts (edge, przed renderowaniem).
 * Format: { staryUrl: nowyUrl }
 */

/**
 * Redirecty dla legacy URL-i (angielskie ścieżki, stare struktury)
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // Angielskie URL-e usług
  '/services': '/uslugi',
  '/services/websites': '/uslugi/strony-internetowe',
  '/services/online-stores': '/uslugi/sklepy-internetowe',
  '/services/blogs': '/uslugi/blogi-internetowe',
  '/services/design': '/uslugi/projekty-graficzne',
  '/services/marketing': '/uslugi/marketing',
  '/services/content': '/uslugi/tworzenie-tresci',
  // Inne angielskie URL-e
  '/projects': '/realizacje',
  '/contact': '/kontakt',
  '/offer': '/uslugi',
  '/calculator': '/',
  // Stary polski URL
  '/uslugi/grafika': '/uslugi/projekty-graficzne',
};

/**
 * Redirecty dla realizacji (zmienione slugi)
 */
export const PROJECT_REDIRECTS: Record<string, string> = {
  '/realizacje/cennik-dla-salonu-kosmetycznego': '/realizacje',
  '/realizacje/trilllizo': '/realizacje/sklep-dla-firmy-odziezowej-trilllizo',
  '/realizacje/pilka-nozna-pl': '/realizacje/blog-sportowy-pilka-nozna-pl',
  '/realizacje/msc-psychotherapy': '/realizacje/strona-dla-psychologa-msc-psychotherapy',
  '/projects/msc-psychotherapy': '/realizacje/strona-dla-psychologa-msc-psychotherapy',
  '/projects/trilllizo': '/realizacje/sklep-dla-firmy-odziezowej-trilllizo',
  '/realizacje/katalog-produktów-restoquality': '/realizacje/katalog-produktow-restoquality',
};

/**
 * Redirecty dla edukacji (przeniesienia kategorii)
 */
export const EDUCATION_REDIRECTS: Record<string, string> = {
  '/edukacja/design': '/edukacja/grafika',
  '/edukacja/psychologia/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow': '/edukacja/grafika/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow',
  '/edukacja/widocznosc/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty': '/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty',
  '/edukacja/widocznosc/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google': '/edukacja/seo/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google',
  '/edukacja/seo/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp': '/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp',
  '/edukacja/tresci/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google': '/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google',
  '/edukacja/branding/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow': '/edukacja/grafika/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow',
  '/edukacja/widocznosc/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic': '/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic',
};

/**
 * Wzorce URL z parametrami (wymagają dynamicznego dopasowania w middleware)
 * Format: { wzorzec: docelowy_wzorzec }
 * :path* oznacza dowolną ścieżkę
 * :slug oznacza pojedynczy segment
 */
export const PATTERN_REDIRECTS = {
  '/projects/:slug': '/realizacje/:slug',
  '/edukacja/design/:path*': '/edukacja/grafika/:path*',
} as const;

/**
 * Wszystkie statyczne redirecty (bez wzorców)
 * Używane przez middleware do szybkiego lookup
 */
export const ALL_STATIC_REDIRECTS: Record<string, string> = {
  ...LEGACY_REDIRECTS,
  ...PROJECT_REDIRECTS,
  ...EDUCATION_REDIRECTS,
};
