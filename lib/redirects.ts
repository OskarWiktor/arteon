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
  '/realizacje/pilka-nozna-pl': '/realizacje',
  '/realizacje/msc-psychotherapy': '/realizacje/strona-dla-psychologa-msc-psychotherapy',
  '/projects/msc-psychotherapy': '/realizacje/strona-dla-psychologa-msc-psychotherapy',
  '/projects/trilllizo': '/realizacje/sklep-dla-firmy-odziezowej-trilllizo',
  '/realizacje/katalog-produktów-restoquality': '/realizacje/katalog-produktow-restoquality',
  // Usunięte realizacje - thin content (2026-01-30)
  '/realizacje/blog-sportowy-pilka-nozna-pl': '/realizacje',
  '/realizacje/meridol-accessibility': '/realizacje',
  '/realizacje/elmex-accessibility': '/realizacje',
  '/realizacje/sanex-accessibility': '/realizacje',
  '/realizacje/sanex': '/realizacje',
  '/realizacje/palmolive': '/realizacje',
  '/realizacje/colgate': '/realizacje',
  '/realizacje/detergent-regulations': '/realizacje',
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
    '/edukacja/strony/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp',
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
  // Redirects for removed secondary categories to main education page (2026-02-23)
  '/edukacja/tresci': '/edukacja',
  '/edukacja/widocznosc': '/edukacja',
  // Redirects for removed categories to new categories (2026-02-23)
  '/edukacja/druk': '/edukacja/grafika',
  '/edukacja/branding': '/edukacja/marketing',
  '/edukacja/zdjęcia': '/edukacja/strony',
  '/edukacja/dostępność': '/edukacja/strony',
  '/edukacja/bezpieczeństwo': '/edukacja/strony',
  // Redirects for moved articles (2026-02-23)
  '/edukacja/bezpieczeństwo/dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa': '/edukacja/strony/dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa',
  '/edukacja/dostępność/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie': '/edukacja/strony/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie',
  '/edukacja/bezpieczeństwo/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje': '/edukacja/strony/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje',
  '/edukacja/druk/materialy-drukowane-dla-firmy-ktore-zamowic': '/edukacja/grafika/materialy-drukowane-dla-firmy-ktore-zamowic',
  '/edukacja/branding/jak-przygotowac-profesjonalna-stopke-mailowa': '/edukacja/marketing/jak-przygotowac-profesjonalna-stopke-mailowa',
  '/edukacja/zdjęcia/favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie': '/edukacja/strony/favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie',
  '/edukacja/zdjęcia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp':
    '/edukacja/strony/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp',
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
  '/narzedzia/generator-schematow-kolorow/instrukcja': '/narzedzia/generator-palet-kolorow',
  '/narzedzia/generator-palet-kolorow-online': '/narzedzia/generator-palet-kolorow',
  '/narzedzia/generator-palet-kolorow-online/instrukcja': '/narzedzia/generator-palet-kolorow',
  // Zmiana URL ekstraktora kolorów (2026-01-20)
  '/narzedzia/generator-palety-kolorow-z-obrazu': '/narzedzia/ekstraktor-kolorow-z-obrazu',
  '/narzedzia/generator-palety-kolorow-z-obrazu/instrukcja': '/narzedzia/ekstraktor-kolorow-z-obrazu',
  // Zmiana URL edytora zdjęć (2026-01-20) - lepsza fraza kluczowa
  '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia': '/narzedzia/edytor-zdjec-online',
  '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja': '/narzedzia/edytor-zdjec-online',
  // Zmiana URL generatora kodów QR (2026-01-22) - dodanie "darmowy" dla lepszego SEO
  '/narzedzia/generator-kodu-qr': '/narzedzia/darmowy-generator-kodow-qr',
  '/narzedzia/generator-kodu-qr/instrukcja': '/narzedzia/darmowy-generator-kodow-qr',
  // Zmiana URL testera kontrastu (2026-01-22) - szersze pozycjonowanie na "czytelność kolorów"
  // Aktualizacja (2026-01-30) - zmiana na "kontrast-i-czytelnosc-kolorow"
  '/narzedzia/tester-kontrastu-kolorow-wcag': '/narzedzia/kontrast-i-czytelnosc-kolorow',
  '/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja': '/narzedzia/kontrast-i-czytelnosc-kolorow',
  '/narzedzia/sprawdz-czytelnosc-kolorow': '/narzedzia/kontrast-i-czytelnosc-kolorow',
  '/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja': '/narzedzia/kontrast-i-czytelnosc-kolorow',
  // Połączenie stron instrukcji z narzędziami (2026-02) - treść przeniesiona na stronę narzędzia
  '/narzedzia/darmowy-generator-stopki-mailowej/instrukcja': '/narzedzia/darmowy-generator-stopki-mailowej',
  '/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja': '/narzedzia/jpg-png-na-webp-bez-limitu',
  '/narzedzia/edytor-zdjec-online/instrukcja': '/narzedzia/edytor-zdjec-online',
  '/narzedzia/darmowy-generator-favicon-ico/instrukcja': '/narzedzia/darmowy-generator-favicon-ico',
  '/narzedzia/licznik-slow-i-znakow/instrukcja': '/narzedzia/licznik-slow-i-znakow',
  '/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja': '/narzedzia/licznik-dlugosci-meta-title-i-description',
  '/narzedzia/kontrast-i-czytelnosc-kolorow/instrukcja': '/narzedzia/kontrast-i-czytelnosc-kolorow',
  '/narzedzia/generator-palet-kolorow/instrukcja': '/narzedzia/generator-palet-kolorow',
  '/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja': '/narzedzia/ekstraktor-kolorow-z-obrazu',
  '/narzedzia/darmowy-generator-kodow-qr/instrukcja': '/narzedzia/darmowy-generator-kodow-qr',
};

/**
 * Redirecty dla norweskich narzędzi (poprawki literówek w slugach, 2026-02-16)
 */
export const NO_TOOLS_REDIRECTS: Record<string, string> = {
  '/no/verktoy/fargeuttrrekker-fra-bilde': '/no/verktoy/fargeutrekker-fra-bilde',
};

/**
 * Redirecty dla niemieckich narzędzi (zmiana /de/tools/ → /de/werkzeuge/) (2026-02-12)
 */
export const DE_TOOLS_REDIRECTS: Record<string, string> = {
  '/de/tools': '/de/werkzeuge',
  '/de/tools/jpg-png-zu-webp-konverter': '/de/werkzeuge/jpg-png-zu-webp-konverter',
  '/de/tools/online-bildeditor': '/de/werkzeuge/online-bildeditor',
  '/de/tools/kostenloser-favicon-generator': '/de/werkzeuge/kostenloser-favicon-generator',
  '/de/tools/meta-titel-beschreibung-laengenpruefer': '/de/werkzeuge/meta-titel-beschreibung-laengenpruefer',
  '/de/tools/wort-und-zeichenzaehler': '/de/werkzeuge/wort-und-zeichenzaehler',
  '/de/tools/kostenloser-e-mail-signatur-generator': '/de/werkzeuge/kostenloser-e-mail-signatur-generator',
  '/de/tools/farbkontrast-checker': '/de/werkzeuge/farbkontrast-checker',
  '/de/tools/bild-farbextraktor': '/de/werkzeuge/bild-farbextraktor',
  '/de/tools/farbpaletten-generator': '/de/werkzeuge/farbpaletten-generator',
  '/de/tools/kostenloser-qr-code-generator': '/de/werkzeuge/kostenloser-qr-code-generator',
};

/**
 * Redirecty dla usług (zmienione URL-e)
 */
export const SERVICES_REDIRECTS: Record<string, string> = {
  // Zmiana URL strony internetowe → tworzenie stron WordPress (2026-01-24)
  '/uslugi/strony-internetowe': '/uslugi/tworzenie-stron-wordpress',
  '/uslugi/strony-internetowe/optymalizacja-strony-wordpress': '/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress',
};

/**
 * Redirecty dla usuniętych lokalizacji azjatyckich i afrykańskich (2026-06)
 * Wszystkie URL-e przekierowują na odpowiedniki angielskie.
 */
export const REMOVED_LOCALE_REDIRECTS_EU: Record<string, string> = {
  // ── Turkish (tr) ────────────────────────────────────────────────────
  '/tr': '/en',
  '/tr/araclar': '/en/tools',
  '/tr/hakkimizda': '/en/about',
  '/tr/iletisim': '/en/contact',
  '/tr/gizlilik-politikasi': '/en/privacy-policy',
  '/tr/araclar/jpg-png-webp-donusturucu': '/en/tools/jpg-png-to-webp-unlimited',
  '/tr/araclar/gorsel-duzenleyici': '/en/tools/online-image-editor',
  '/tr/araclar/ucretsiz-favicon-olusturucu': '/en/tools/free-favicon-generator',
  '/tr/araclar/meta-baslik-ve-aciklama-kontrol': '/en/tools/meta-title-description-length-checker',
  '/tr/araclar/kelime-ve-karakter-sayaci': '/en/tools/word-and-character-counter',
  '/tr/araclar/ucretsiz-e-posta-imza-olusturucu': '/en/tools/free-email-signature-generator',
  '/tr/araclar/renk-kontrast-kontrolu': '/en/tools/color-contrast-checker',
  '/tr/araclar/gorsel-renk-cikarici': '/en/tools/image-color-extractor',
  '/tr/araclar/renk-paleti-olusturucu': '/en/tools/color-palette-generator',
  '/tr/araclar/ucretsiz-qr-kod-olusturucu': '/en/tools/free-qr-code-generator',
  // ── Albanian (sq) ───────────────────────────────────────────────────
  '/sq': '/en',
  '/sq/mjetet': '/en/tools',
  '/sq/rreth-nesh': '/en/about',
  '/sq/kontakti': '/en/contact',
  '/sq/politika-e-privatesise': '/en/privacy-policy',
  '/sq/mjetet/konvertues-jpg-png-ne-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/sq/mjetet/redaktues-imazhesh': '/en/tools/online-image-editor',
  '/sq/mjetet/gjenerues-favicon-falas': '/en/tools/free-favicon-generator',
  '/sq/mjetet/kontrollues-meta-titull-dhe-pershkrim': '/en/tools/meta-title-description-length-checker',
  '/sq/mjetet/numerues-fjalesh-dhe-karakteresh': '/en/tools/word-and-character-counter',
  '/sq/mjetet/gjenerues-nenshkrimi-email-falas': '/en/tools/free-email-signature-generator',
  '/sq/mjetet/kontrollues-kontrasti-ngjyrave': '/en/tools/color-contrast-checker',
  '/sq/mjetet/nxjerres-ngjyrash-nga-imazhi': '/en/tools/image-color-extractor',
  '/sq/mjetet/gjenerues-paletash-ngjyrash': '/en/tools/color-palette-generator',
  '/sq/mjetet/gjenerues-kodi-qr-falas': '/en/tools/free-qr-code-generator',
  // ── Slovak (sk) ─────────────────────────────────────────────────────
  '/sk': '/en',
  '/sk/nastroje': '/en/tools',
  '/sk/o-nas': '/en/about',
  '/sk/kontakt': '/en/contact',
  '/sk/zasady-ochrany-osobnych-udajov': '/en/privacy-policy',
  '/sk/nastroje/konvertor-jpg-png-na-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/sk/nastroje/editor-obrazkov': '/en/tools/online-image-editor',
  '/sk/nastroje/generator-favicon-zadarmo': '/en/tools/free-favicon-generator',
  '/sk/nastroje/kontrola-meta-titulku-a-popisu': '/en/tools/meta-title-description-length-checker',
  '/sk/nastroje/pocitadlo-slov-a-znakov': '/en/tools/word-and-character-counter',
  '/sk/nastroje/generator-podpisu-emailu-zadarmo': '/en/tools/free-email-signature-generator',
  '/sk/nastroje/kontrola-kontrastu-farieb': '/en/tools/color-contrast-checker',
  '/sk/nastroje/extraktor-farieb-z-obrazka': '/en/tools/image-color-extractor',
  '/sk/nastroje/generator-farebnych-palet': '/en/tools/color-palette-generator',
  '/sk/nastroje/generator-qr-kodov-zadarmo': '/en/tools/free-qr-code-generator',
  // ── Croatian (hr) ───────────────────────────────────────────────────
  '/hr': '/en',
  '/hr/alati': '/en/tools',
  '/hr/o-nama': '/en/about',
  '/hr/kontakt': '/en/contact',
  '/hr/pravila-privatnosti': '/en/privacy-policy',
  '/hr/alati/pretvaranje-jpg-png-u-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/hr/alati/urednik-slika': '/en/tools/online-image-editor',
  '/hr/alati/besplatni-generator-favicona': '/en/tools/free-favicon-generator',
  '/hr/alati/provjera-meta-naslova-i-opisa': '/en/tools/meta-title-description-length-checker',
  '/hr/alati/brojac-rijeci-i-znakova': '/en/tools/word-and-character-counter',
  '/hr/alati/besplatni-generator-potpisa-emaila': '/en/tools/free-email-signature-generator',
  '/hr/alati/provjera-kontrasta-boja': '/en/tools/color-contrast-checker',
  '/hr/alati/izdvajanje-boja-iz-slike': '/en/tools/image-color-extractor',
  '/hr/alati/generator-paleta-boja': '/en/tools/color-palette-generator',
  '/hr/alati/besplatni-generator-qr-kodova': '/en/tools/free-qr-code-generator',
  // ── Lithuanian (lt) ─────────────────────────────────────────────────
  '/lt': '/en',
  '/lt/irankiai': '/en/tools',
  '/lt/apie-mus': '/en/about',
  '/lt/kontaktai': '/en/contact',
  '/lt/privatumo-politika': '/en/privacy-policy',
  '/lt/irankiai/jpg-png-i-webp-konverteris': '/en/tools/jpg-png-to-webp-unlimited',
  '/lt/irankiai/vaizdu-redaktorius': '/en/tools/online-image-editor',
  '/lt/irankiai/nemokamas-favicon-generatorius': '/en/tools/free-favicon-generator',
  '/lt/irankiai/meta-pavadinimo-ir-aprasymo-tikrintuvas': '/en/tools/meta-title-description-length-checker',
  '/lt/irankiai/zodziu-ir-simboliu-skaitiklis': '/en/tools/word-and-character-counter',
  '/lt/irankiai/nemokamas-el-pasto-paraso-generatorius': '/en/tools/free-email-signature-generator',
  '/lt/irankiai/spalvu-kontrasto-tikrintuvas': '/en/tools/color-contrast-checker',
  '/lt/irankiai/spalvu-isrinkimas-is-vaizdo': '/en/tools/image-color-extractor',
  '/lt/irankiai/spalvu-paletes-generatorius': '/en/tools/color-palette-generator',
  '/lt/irankiai/nemokamas-qr-kodo-generatorius': '/en/tools/free-qr-code-generator',
  // Old typo redirect (was in NO_LT_TOOLS_REDIRECTS)
  '/lt/irankiai/nemokamas-el-paraso-paraso-generatorius': '/en/tools/free-email-signature-generator',
  // ── Slovenian (sl) ──────────────────────────────────────────────────
  '/sl': '/en',
  '/sl/orodja': '/en/tools',
  '/sl/o-nas': '/en/about',
  '/sl/kontakt': '/en/contact',
  '/sl/pravilnik-o-zasebnosti': '/en/privacy-policy',
  '/sl/orodja/pretvornik-jpg-png-v-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/sl/orodja/urejevalnik-slik': '/en/tools/online-image-editor',
  '/sl/orodja/brezplacni-generator-faviconov': '/en/tools/free-favicon-generator',
  '/sl/orodja/preverjanje-meta-naslova-in-opisa': '/en/tools/meta-title-description-length-checker',
  '/sl/orodja/stevec-besed-in-znakov': '/en/tools/word-and-character-counter',
  '/sl/orodja/brezplacni-generator-podpisa-eposta': '/en/tools/free-email-signature-generator',
  '/sl/orodja/preverjanje-kontrasta-barv': '/en/tools/color-contrast-checker',
  '/sl/orodja/izlocanje-barv-iz-slike': '/en/tools/image-color-extractor',
  '/sl/orodja/generator-barvnih-palet': '/en/tools/color-palette-generator',
  '/sl/orodja/brezplacni-generator-qr-kod': '/en/tools/free-qr-code-generator',
  // ── Bulgarian (bg) ──────────────────────────────────────────────────
  '/bg': '/en',
  '/bg/instrumenti': '/en/tools',
  '/bg/za-nas': '/en/about',
  '/bg/kontakt': '/en/contact',
  '/bg/politika-za-poveritelnost': '/en/privacy-policy',
  '/bg/instrumenti/konvertor-jpg-png-v-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/bg/instrumenti/redaktor-na-izobrazhenia': '/en/tools/online-image-editor',
  '/bg/instrumenti/bezplaten-generator-na-favicon': '/en/tools/free-favicon-generator',
  '/bg/instrumenti/proverka-na-meta-zaglavie-i-opisanie': '/en/tools/meta-title-description-length-checker',
  '/bg/instrumenti/broiach-na-dumi-i-simvoli': '/en/tools/word-and-character-counter',
  '/bg/instrumenti/bezplaten-generator-na-podpis-za-email': '/en/tools/free-email-signature-generator',
  '/bg/instrumenti/proverka-na-kontrast-na-tsvetove': '/en/tools/color-contrast-checker',
  '/bg/instrumenti/ekstraktor-na-tsvetove-ot-izobrazhenie': '/en/tools/image-color-extractor',
  '/bg/instrumenti/generator-na-tsvetovi-palitri': '/en/tools/color-palette-generator',
  '/bg/instrumenti/bezplaten-generator-na-qr-kod': '/en/tools/free-qr-code-generator',
  // ── Ukrainian (uk) ──────────────────────────────────────────────────
  '/uk': '/en',
  '/uk/instrumenty': '/en/tools',
  '/uk/pro-nas': '/en/about',
  '/uk/kontakt': '/en/contact',
  '/uk/polityka-konfidentsiinosti': '/en/privacy-policy',
  '/uk/instrumenty/konverter-jpg-png-u-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/uk/instrumenty/redaktor-zobrazhen': '/en/tools/online-image-editor',
  '/uk/instrumenty/bezkoshtovnyi-generator-favicon': '/en/tools/free-favicon-generator',
  '/uk/instrumenty/perevirka-meta-zaholovka-ta-opysu': '/en/tools/meta-title-description-length-checker',
  '/uk/instrumenty/lichylnyk-sliv-i-symvoliv': '/en/tools/word-and-character-counter',
  '/uk/instrumenty/bezkoshtovnyi-generator-pidpysu-email': '/en/tools/free-email-signature-generator',
  '/uk/instrumenty/perevirka-kontrastu-koloriv': '/en/tools/color-contrast-checker',
  '/uk/instrumenty/ekstraktor-koloriv-z-zobrazhennia': '/en/tools/image-color-extractor',
  '/uk/instrumenty/generator-kolirnykh-palitr': '/en/tools/color-palette-generator',
  '/uk/instrumenty/bezkoshtovnyi-generator-qr-kodu': '/en/tools/free-qr-code-generator',
};

/**
 * Redirecty dla usuniętych lokalizacji azjatyckich i afrykańskich (2026-06)
 * Wszystkie URL-e przekierowują na odpowiedniki angielskie.
 */
export const REMOVED_LOCALE_REDIRECTS: Record<string, string> = {
  // ── Vietnamese (vi) ──────────────────────────────────────────────────
  '/vi': '/en',
  '/vi/cong-cu': '/en/tools',
  '/vi/ve-chung-toi': '/en/about',
  '/vi/lien-he': '/en/contact',
  '/vi/chinh-sach-bao-mat': '/en/privacy-policy',
  '/vi/cong-cu/chuyen-doi-jpg-png-sang-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/vi/cong-cu/chinh-sua-hinh-anh': '/en/tools/online-image-editor',
  '/vi/cong-cu/tao-favicon-mien-phi': '/en/tools/free-favicon-generator',
  '/vi/cong-cu/kiem-tra-meta-title-va-description': '/en/tools/meta-title-description-length-checker',
  '/vi/cong-cu/dem-tu-va-ky-tu': '/en/tools/word-and-character-counter',
  '/vi/cong-cu/tao-chu-ky-email-mien-phi': '/en/tools/free-email-signature-generator',
  '/vi/cong-cu/kiem-tra-do-tuong-phan-mau': '/en/tools/color-contrast-checker',
  '/vi/cong-cu/trich-xuat-mau-tu-hinh-anh': '/en/tools/image-color-extractor',
  '/vi/cong-cu/tao-bang-mau': '/en/tools/color-palette-generator',
  '/vi/cong-cu/tao-ma-qr-mien-phi': '/en/tools/free-qr-code-generator',
  // ── Indonesian (id) ──────────────────────────────────────────────────
  '/id': '/en',
  '/id/alat': '/en/tools',
  '/id/tentang-kami': '/en/about',
  '/id/kontak': '/en/contact',
  '/id/kebijakan-privasi': '/en/privacy-policy',
  '/id/alat/konverter-jpg-png-ke-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/id/alat/editor-gambar': '/en/tools/online-image-editor',
  '/id/alat/generator-favicon-gratis': '/en/tools/free-favicon-generator',
  '/id/alat/pemeriksa-meta-judul-dan-deskripsi': '/en/tools/meta-title-description-length-checker',
  '/id/alat/penghitung-kata-dan-karakter': '/en/tools/word-and-character-counter',
  '/id/alat/generator-tanda-tangan-email-gratis': '/en/tools/free-email-signature-generator',
  '/id/alat/pemeriksa-kontras-warna': '/en/tools/color-contrast-checker',
  '/id/alat/ekstraktor-warna-dari-gambar': '/en/tools/image-color-extractor',
  '/id/alat/generator-palet-warna': '/en/tools/color-palette-generator',
  '/id/alat/generator-kode-qr-gratis': '/en/tools/free-qr-code-generator',
  // ── Malay (ms) ───────────────────────────────────────────────────────
  '/ms': '/en',
  '/ms/alatan': '/en/tools',
  '/ms/tentang-kami': '/en/about',
  '/ms/hubungi-kami': '/en/contact',
  '/ms/dasar-privasi': '/en/privacy-policy',
  '/ms/alatan/penukar-jpg-png-ke-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/ms/alatan/editor-imej': '/en/tools/online-image-editor',
  '/ms/alatan/penjana-favicon-percuma': '/en/tools/free-favicon-generator',
  '/ms/alatan/penyemak-meta-tajuk-dan-penerangan': '/en/tools/meta-title-description-length-checker',
  '/ms/alatan/pengira-perkataan-dan-aksara': '/en/tools/word-and-character-counter',
  '/ms/alatan/penjana-tandatangan-emel-percuma': '/en/tools/free-email-signature-generator',
  '/ms/alatan/penyemak-kontras-warna': '/en/tools/color-contrast-checker',
  '/ms/alatan/pengekstrak-warna-dari-imej': '/en/tools/image-color-extractor',
  '/ms/alatan/penjana-palet-warna': '/en/tools/color-palette-generator',
  '/ms/alatan/penjana-kod-qr-percuma': '/en/tools/free-qr-code-generator',
  // ── Hindi (hi) ───────────────────────────────────────────────────────
  '/hi': '/en',
  '/hi/upkaran': '/en/tools',
  '/hi/hamare-baare-mein': '/en/about',
  '/hi/sampark-karein': '/en/contact',
  '/hi/gopaneeyata-neeti': '/en/privacy-policy',
  '/hi/upkaran/jpg-png-se-webp-badlein': '/en/tools/jpg-png-to-webp-unlimited',
  '/hi/upkaran/chitra-sampadak': '/en/tools/online-image-editor',
  '/hi/upkaran/favicon-nirmata': '/en/tools/free-favicon-generator',
  '/hi/upkaran/meta-sheerashak-jaanch': '/en/tools/meta-title-description-length-checker',
  '/hi/upkaran/shabd-ganak': '/en/tools/word-and-character-counter',
  '/hi/upkaran/email-hastakshar-nirmata': '/en/tools/free-email-signature-generator',
  '/hi/upkaran/rang-virodh-jaanch': '/en/tools/color-contrast-checker',
  '/hi/upkaran/chitra-se-rang-nikaalein': '/en/tools/image-color-extractor',
  '/hi/upkaran/rang-palette-nirmata': '/en/tools/color-palette-generator',
  '/hi/upkaran/qr-code-nirmata': '/en/tools/free-qr-code-generator',
  // ── Bengali (bn) ─────────────────────────────────────────────────────
  '/bn': '/en',
  '/bn/yantra': '/en/tools',
  '/bn/amader-somporke': '/en/about',
  '/bn/jogajog': '/en/contact',
  '/bn/goponeeyota-neeti': '/en/privacy-policy',
  '/bn/yantra/jpg-png-theke-webp-rupantor': '/en/tools/jpg-png-to-webp-unlimited',
  '/bn/yantra/chhobi-sompadok': '/en/tools/online-image-editor',
  '/bn/yantra/favicon-toyri': '/en/tools/free-favicon-generator',
  '/bn/yantra/meta-shirshonam-pariksha': '/en/tools/meta-title-description-length-checker',
  '/bn/yantra/shobdo-gonok': '/en/tools/word-and-character-counter',
  '/bn/yantra/email-shakkhor-toyri': '/en/tools/free-email-signature-generator',
  '/bn/yantra/rong-boiporitto-pariksha': '/en/tools/color-contrast-checker',
  '/bn/yantra/chhobi-theke-rong-ber-korun': '/en/tools/image-color-extractor',
  '/bn/yantra/rong-palette-toyri': '/en/tools/color-palette-generator',
  '/bn/yantra/qr-code-toyri': '/en/tools/free-qr-code-generator',
  // ── Filipino (tl) ────────────────────────────────────────────────────
  '/tl': '/en',
  '/tl/mga-kasangkapan': '/en/tools',
  '/tl/tungkol-sa-amin': '/en/about',
  '/tl/makipag-ugnayan': '/en/contact',
  '/tl/patakaran-sa-privacy': '/en/privacy-policy',
  '/tl/mga-kasangkapan/jpg-png-sa-webp-converter': '/en/tools/jpg-png-to-webp-unlimited',
  '/tl/mga-kasangkapan/editor-ng-larawan': '/en/tools/online-image-editor',
  '/tl/mga-kasangkapan/libreng-favicon-generator': '/en/tools/free-favicon-generator',
  '/tl/mga-kasangkapan/tagasuri-ng-meta-title-at-description': '/en/tools/meta-title-description-length-checker',
  '/tl/mga-kasangkapan/tagabilang-ng-salita-at-character': '/en/tools/word-and-character-counter',
  '/tl/mga-kasangkapan/libreng-email-signature-generator': '/en/tools/free-email-signature-generator',
  '/tl/mga-kasangkapan/tagasuri-ng-contrast-ng-kulay': '/en/tools/color-contrast-checker',
  '/tl/mga-kasangkapan/tagakuha-ng-kulay-mula-sa-larawan': '/en/tools/image-color-extractor',
  '/tl/mga-kasangkapan/generator-ng-palette-ng-kulay': '/en/tools/color-palette-generator',
  '/tl/mga-kasangkapan/libreng-qr-code-generator': '/en/tools/free-qr-code-generator',
  // ── Cebuano (ceb) ────────────────────────────────────────────────────
  '/ceb': '/en',
  '/ceb/mga-himan': '/en/tools',
  '/ceb/mahitungod-kanamo': '/en/about',
  '/ceb/kontaka-kami': '/en/contact',
  '/ceb/palisiya-sa-pribasiya': '/en/privacy-policy',
  '/ceb/mga-himan/jpg-png-ngadto-webp-converter': '/en/tools/jpg-png-to-webp-unlimited',
  '/ceb/mga-himan/editor-sa-hulagway': '/en/tools/online-image-editor',
  '/ceb/mga-himan/libre-nga-favicon-generator': '/en/tools/free-favicon-generator',
  '/ceb/mga-himan/tigsusi-sa-meta-titulo-ug-deskripsyon': '/en/tools/meta-title-description-length-checker',
  '/ceb/mga-himan/tigihap-sa-pulong-ug-karakter': '/en/tools/word-and-character-counter',
  '/ceb/mga-himan/libre-nga-email-pirma-generator': '/en/tools/free-email-signature-generator',
  '/ceb/mga-himan/tigsusi-sa-kontras-sa-kolor': '/en/tools/color-contrast-checker',
  '/ceb/mga-himan/tigkuha-sa-kolor-gikan-sa-hulagway': '/en/tools/image-color-extractor',
  '/ceb/mga-himan/generator-sa-paleta-sa-kolor': '/en/tools/color-palette-generator',
  '/ceb/mga-himan/libre-nga-qr-code-generator': '/en/tools/free-qr-code-generator',
  // ── Swahili (sw) ─────────────────────────────────────────────────────
  '/sw': '/en',
  '/sw/zana': '/en/tools',
  '/sw/kuhusu-sisi': '/en/about',
  '/sw/wasiliana-nasi': '/en/contact',
  '/sw/sera-ya-faragha': '/en/privacy-policy',
  '/sw/zana/kibadilishaji-jpg-png-hadi-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/sw/zana/kihariri-cha-picha': '/en/tools/online-image-editor',
  '/sw/zana/kitengenezaji-favicon-bure': '/en/tools/free-favicon-generator',
  '/sw/zana/kikaguzi-cha-meta-kichwa-na-maelezo': '/en/tools/meta-title-description-length-checker',
  '/sw/zana/kihesabuji-maneno-na-herufi': '/en/tools/word-and-character-counter',
  '/sw/zana/kitengenezaji-saini-barua-pepe-bure': '/en/tools/free-email-signature-generator',
  '/sw/zana/kikaguzi-cha-utofautishaji-rangi': '/en/tools/color-contrast-checker',
  '/sw/zana/kitoa-rangi-kutoka-picha': '/en/tools/image-color-extractor',
  '/sw/zana/kitengenezaji-paleti-za-rangi': '/en/tools/color-palette-generator',
  '/sw/zana/kitengenezaji-msimbo-qr-bure': '/en/tools/free-qr-code-generator',
  // ── Hausa (ha) ───────────────────────────────────────────────────────
  '/ha': '/en',
  '/ha/kayan-aiki': '/en/tools',
  '/ha/game-da-mu': '/en/about',
  '/ha/tuntube-mu': '/en/contact',
  '/ha/manufar-sirri': '/en/privacy-policy',
  '/ha/kayan-aiki/mai-canza-jpg-png-zuwa-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/ha/kayan-aiki/editan-hoto': '/en/tools/online-image-editor',
  '/ha/kayan-aiki/samar-da-favicon-kyauta': '/en/tools/free-favicon-generator',
  '/ha/kayan-aiki/tantance-meta-take-da-bayani': '/en/tools/meta-title-description-length-checker',
  '/ha/kayan-aiki/kidaya-kalmomi-da-haruffa': '/en/tools/word-and-character-counter',
  '/ha/kayan-aiki/samar-da-sa-hannu-imel-kyauta': '/en/tools/free-email-signature-generator',
  '/ha/kayan-aiki/tantance-bambancin-launuka': '/en/tools/color-contrast-checker',
  '/ha/kayan-aiki/fitar-launuka-daga-hoto': '/en/tools/image-color-extractor',
  '/ha/kayan-aiki/samar-da-fayafayan-launuka': '/en/tools/color-palette-generator',
  '/ha/kayan-aiki/samar-da-lambar-qr-kyauta': '/en/tools/free-qr-code-generator',
  // ── Yoruba (yo) ──────────────────────────────────────────────────────
  '/yo': '/en',
  '/yo/awon-irinse': '/en/tools',
  '/yo/nipa-wa': '/en/about',
  '/yo/kan-si-wa': '/en/contact',
  '/yo/ilana-asiri': '/en/privacy-policy',
  '/yo/awon-irinse/oluyipada-jpg-png-si-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/yo/awon-irinse/olootu-aworan': '/en/tools/online-image-editor',
  '/yo/awon-irinse/olupilese-favicon-ofe': '/en/tools/free-favicon-generator',
  '/yo/awon-irinse/atunyewo-meta-akole-ati-apejuwe': '/en/tools/meta-title-description-length-checker',
  '/yo/awon-irinse/oluka-oro-ati-ohun-kikoo': '/en/tools/word-and-character-counter',
  '/yo/awon-irinse/olupilese-ibuwolu-imeeli-ofe': '/en/tools/free-email-signature-generator',
  '/yo/awon-irinse/atunyewo-iyato-awon-awoo': '/en/tools/color-contrast-checker',
  '/yo/awon-irinse/iseduro-awoo-lati-aworan': '/en/tools/image-color-extractor',
  '/yo/awon-irinse/olupilese-paleti-awoo': '/en/tools/color-palette-generator',
  '/yo/awon-irinse/olupilese-koodu-qr-ofe': '/en/tools/free-qr-code-generator',
  // ── Igbo (ig) ────────────────────────────────────────────────────────
  '/ig': '/en',
  '/ig/ngwa-oru': '/en/tools',
  '/ig/maka-anyi': '/en/about',
  '/ig/kpoturu-anyi': '/en/contact',
  '/ig/iwu-nzuzo': '/en/privacy-policy',
  '/ig/ngwa-oru/gbanwee-jpg-png-gaa-webp': '/en/tools/jpg-png-to-webp-unlimited',
  '/ig/ngwa-oru/edita-onyonyo': '/en/tools/online-image-editor',
  '/ig/ngwa-oru/njikota-favicon-nefu': '/en/tools/free-favicon-generator',
  '/ig/ngwa-oru/nyocha-meta-aha-na-nkowa': '/en/tools/meta-title-description-length-checker',
  '/ig/ngwa-oru/agu-okwu-na-mkpuruedemede': '/en/tools/word-and-character-counter',
  '/ig/ngwa-oru/njikota-mbinye-aka-email-nefu': '/en/tools/free-email-signature-generator',
  '/ig/ngwa-oru/nyocha-idi-iche-agba': '/en/tools/color-contrast-checker',
  '/ig/ngwa-oru/mweputa-agba-site-na-onyonyo': '/en/tools/image-color-extractor',
  '/ig/ngwa-oru/njikota-palette-agba': '/en/tools/color-palette-generator',
  '/ig/ngwa-oru/njikota-koodu-qr-nefu': '/en/tools/free-qr-code-generator',
  // ── Afrikaans (af) ───────────────────────────────────────────────────
  '/af': '/en',
  '/af/gereedskap': '/en/tools',
  '/af/oor-ons': '/en/about',
  '/af/kontak': '/en/contact',
  '/af/privaatheidsbeleid': '/en/privacy-policy',
  '/af/gereedskap/jpg-png-na-webp-omskakelaar': '/en/tools/jpg-png-to-webp-unlimited',
  '/af/gereedskap/beeldredigeerder': '/en/tools/online-image-editor',
  '/af/gereedskap/gratis-favicon-generator': '/en/tools/free-favicon-generator',
  '/af/gereedskap/meta-titel-en-beskrywing-nagaaier': '/en/tools/meta-title-description-length-checker',
  '/af/gereedskap/woord-en-karakter-teller': '/en/tools/word-and-character-counter',
  '/af/gereedskap/gratis-e-pos-handtekening-generator': '/en/tools/free-email-signature-generator',
  '/af/gereedskap/kleurkontras-nagaaier': '/en/tools/color-contrast-checker',
  '/af/gereedskap/kleur-onttrekker-uit-beeld': '/en/tools/image-color-extractor',
  '/af/gereedskap/kleurpalet-generator': '/en/tools/color-palette-generator',
  '/af/gereedskap/gratis-qr-kode-generator': '/en/tools/free-qr-code-generator',
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
  ...NO_TOOLS_REDIRECTS,
  ...DE_TOOLS_REDIRECTS,
  ...SERVICES_REDIRECTS,
  ...REMOVED_LOCALE_REDIRECTS_EU,
  ...REMOVED_LOCALE_REDIRECTS,
};
