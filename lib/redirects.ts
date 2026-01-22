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
  '/edukacja/widocznosc/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty': '/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony',
  '/edukacja/widocznosc/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google': '/edukacja/seo/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google',
  '/edukacja/seo/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp':
    '/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp',
  '/edukacja/tresci/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google': '/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google',
  '/edukacja/branding/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow': '/edukacja/grafika/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow',
  '/edukacja/widocznosc/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic': '/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic',
  // Zmienione slugi artykułów (2026-01-17)
  '/edukacja/sklepy/co-to-jest-regulamin-sklepu-internetowego-i-co-musi-zawierac': '/edukacja/sklepy/regulamin-sklepu-internetowego-co-musi-zawierac',
  '/edukacja/seo/dlaczego-szybkosc-ladowania-strony-wplywa-na-pozycje-w-google': '/edukacja/seo/szybkosc-ladowania-strony-a-pozycja-w-google',
  '/edukacja/ux/czym-jest-sciezka-nawigacji-na-stronie-i-dlaczego-warto-ja-miec': '/edukacja/ux/breadcrumbs-sciezka-nawigacji-na-stronie',
  '/edukacja/sklepy/darmowa-dostawa-vs-nizsza-cena-co-bardziej-przekonuje-do-zakupu': '/edukacja/sklepy/darmowa-dostawa-vs-nizsza-cena',
  '/edukacja/grafika/czcionki-szeryfowe-i-bezszeryfowe-czym-sie-roznia-i-kiedy-uzywac-ktorych': '/edukacja/grafika/czcionki-szeryfowe-vs-bezszeryfowe',
  '/edukacja/psychologia/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje': '/edukacja/psychologia/social-proof-spoleczny-dowod-slusznosci',
  '/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty': '/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony',
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
 * Redirecty dla narzędzi (zmienione URL-e)
 */
export const TOOLS_REDIRECTS: Record<string, string> = {
  // Zmiana URL generatora palet kolorów (2026-01-20) - lepsza fraza kluczowa
  '/narzedzia/generator-schematow-kolorow': '/narzedzia/generator-palet-kolorow',
  '/narzedzia/generator-schematow-kolorow/instrukcja': '/narzedzia/generator-palet-kolorow/instrukcja',
  '/narzedzia/generator-palet-kolorow-online': '/narzedzia/generator-palet-kolorow',
  '/narzedzia/generator-palet-kolorow-online/instrukcja': '/narzedzia/generator-palet-kolorow/instrukcja',
  // Zmiana URL ekstraktora kolorów (2026-01-20)
  '/narzedzia/generator-palety-kolorow-z-obrazu': '/narzedzia/ekstraktor-kolorow-z-obrazu',
  '/narzedzia/generator-palety-kolorow-z-obrazu/instrukcja': '/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja',
  // Zmiana URL edytora zdjęć (2026-01-20) - lepsza fraza kluczowa
  '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia': '/narzedzia/edytor-zdjec-online',
  '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja': '/narzedzia/edytor-zdjec-online/instrukcja',
  // Zmiana URL generatora kodów QR (2026-01-22) - dodanie "darmowy" dla lepszego SEO
  '/narzedzia/generator-kodu-qr': '/narzedzia/darmowy-generator-kodow-qr',
  '/narzedzia/generator-kodu-qr/instrukcja': '/narzedzia/darmowy-generator-kodow-qr/instrukcja',
  // Zmiana URL testera kontrastu (2026-01-22) - szersze pozycjonowanie na "czytelność kolorów"
  '/narzedzia/tester-kontrastu-kolorow-wcag': '/narzedzia/sprawdz-czytelnosc-kolorow',
  '/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja': '/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja',
};

/**
 * Wszystkie statyczne redirecty (bez wzorców)
 * Używane przez middleware do szybkiego lookup
 */
export const ALL_STATIC_REDIRECTS: Record<string, string> = {
  '/uslugi/projekty-graficzne/szablony-postow-social-media': '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
  ...LEGACY_REDIRECTS,
  ...PROJECT_REDIRECTS,
  ...EDUCATION_REDIRECTS,
  ...TOOLS_REDIRECTS,
};
