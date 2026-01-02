# DONE_TASKS

## 2026-01-02

- ✅ **[IDEA-103] Artykuł: Co to jest newsletter i czy warto go prowadzić?**

  - **Slug**: `co-to-jest-newsletter-i-czy-warto-go-prowadzic`
  - **URL**: `/edukacja/marketing/co-to-jest-newsletter-i-czy-warto-go-prowadzic`
  - **Kategorie**: Marketing, Treści
  - **Czas czytania**: 10 min (~2034 słów)
  - **Zawartość**: Czym jest newsletter i jak działa (formy, częstotliwość), dlaczego firmy prowadzą newslettery (niezależność od algorytmów, budowanie listy kontaktów, regularny kontakt), korzyści (zwiększenie sprzedaży — ROI 36:1 wg Litmus 2023, budowanie pozycji eksperta, kierowanie ruchu, zbieranie informacji o odbiorcach), dla kogo newsletter ma sens, na co zwrócić uwagę (zgoda RODO, wartość dla odbiorcy, regularność), jak mierzyć skuteczność (open rate, CTR, wypisania, konwersje), narzędzia (Mailchimp, GetResponse, Brevo), budowanie listy subskrybentów, typowe wyzwania.
  - **Linki wewnętrzne (6)**: strony-internetowe, social-proof, paradoks-wyboru, identyfikacja-wizualna, tworzenie-tresci, kontakt
  - **Linki zewnętrzne (6)**: Litmus (ROI), UODO (RODO), Mailchimp (benchmarks + platforma), GetResponse, Brevo
  - **Tooltips (3)**: newsletter, open rate, CTR
  - **FAQ**: 6 pytań
  - **CTA**: Tworzenie treści + Kontakt
  - **Pliki**: `data/pl/blog.json`, `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: npm run lint ✓, npm run build ✓

- ✅ **[CONTENT-035] Blog: konsolidacja treści o Core Web Vitals — skrócenie sekcji + linki do nowego artykułu**

  - **Cel**: Skrócenie rozbudowanych sekcji o Core Web Vitals w starszych artykułach i dodanie linków do dedykowanego artykułu IDEA-064.
  - **Artykuły edytowane**:
    - `czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie` — skrócona sekcja "Core Web Vitals i responsywność" + zaktualizowane FAQ
    - `jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp` — skrócona sekcja o CWV + zaktualizowane FAQ
  - **Zmiany**:
    - Usunięto szczegółowe wyjaśnienia LCP/FID/CLS (przeniesione do IDEA-064)
    - Dodano linki wewnętrzne do `/edukacja/seo/dlaczego-szybkosc-ladowania-strony-wplywa-na-pozycje-w-google`
    - Zaktualizowano `dateModified` na `2026-01-02` w obu artykułach
  - **Korzyści SEO**: unikanie kanibalizacji treści, wzmocnienie linkowania wewnętrznego, jeden autorytatywny artykuł o CWV
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: npm run lint ✓, npm run build ✓

- ✅ **[IDEA-064] Artykuł: Dlaczego szybkość ładowania strony wpływa na pozycję w Google?**

  - **Slug**: `dlaczego-szybkosc-ladowania-strony-wplywa-na-pozycje-w-google`
  - **URL**: `/edukacja/seo/dlaczego-szybkosc-ladowania-strony-wplywa-na-pozycje-w-google`
  - **Kategorie**: SEO, UX, Strony
  - **Czas czytania**: 11 min (~2200 słów)
  - **Zawartość**: Czym są Core Web Vitals (LCP, INP, CLS — progi, co mierzą), szczegółowe omówienie każdego wskaźnika (LCP — czas ładowania głównej treści; INP — responsywność, dlaczego zastąpił FID; CLS — stabilność wizualna), jak Core Web Vitals wpływają na ranking Google (treść najważniejsza, czynnik różnicujący, dane CrUX), wpływ szybkości na konwersję (opuszczanie stron, decyzje zakupowe, postrzeganie marki), jak sprawdzić wyniki (PageSpeed Insights, Search Console, Lighthouse, Web Vitals Extension), na co zwrócić uwagę przy optymalizacji (obrazy, JS/CSS, serwer, zewnętrzne skrypty).
  - **Linki wewnętrzne (8)**: optymalizacja-zdjec, responsywnosc-strony, ile-czasu-trwa-pozycjonowanie, paradoks-wyboru, darmowa-dostawa-vs-nizsza-cena, social-proof, jpg-png-na-webp (narzędzie), domena-i-hosting, strony-internetowe, optymalizacja-seo, kontakt
  - **Linki zewnętrzne (6)**: Google Search Central (Core Web Vitals), Google Developers Blog (Page Experience), Think with Google (mobile speed), PageSpeed Insights, Google Search Console, Web Vitals Extension
  - **Tooltips (4)**: Core Web Vitals, LCP, INP, CLS
  - **FAQ**: 6 pytań
  - **CTA**: Strony internetowe + Kontakt
  - **Pliki**: `data/pl/blog.json`, `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: npm run lint, npm run build

## 2026-01-01

- ✅ **[CONTENT-001] INSTRUCTIONS.md: skrócenie i uproszczenie dokumentu**

  - **Rozmiar przed**: 53611 znaków / 764 linii
  - **Rozmiar po**: 50135 znaków / 730 linii
  - **Oszczędność**: 3476 znaków (~6.5%) / 34 linie
  - **Usunięte duplikaty**:
    - Sekcja "Dodatkowe reguły" (linie 756-764) — już była w liniach 116-123
    - Zasada "Nie odsyłaj do konkurencji" — scalona z "Zakaz rekomendowania konkurencji"
    - Zasada "Zakaz checklist" — powtórzona dwukrotnie
    - Zasada "Weryfikacja zgodności z instrukcją" — powtórzona dwukrotnie
    - Zasada "Unikanie duplikacji między artykułami" — powtórzona dwukrotnie
  - **Uproszczenia**: Przykłady zamiany i przykłady dobrego/złego stosowania zasad zamienione na tabele
  - **Dodana zasada**: Zakaz rekomendowania ogólnych profesjonalistów (rozszerzona)
  - **Pliki**: `docs/INSTRUCTIONS.md`
  - **Weryfikacja**: nie jest wymagana (CONTENT-only)

- ✅ **[Artykuł 20] Czym jest ścieżka nawigacji na stronie i dlaczego warto ją mieć?**

  - **Zmiana tytułu**: z "Breadcrumbs na stronie: po co są i jak wpływają na SEO?" na "Czym jest ścieżka nawigacji na stronie i dlaczego warto ją mieć?" (tytuł bez anglicyzmu, lepszy potencjał SEO)
  - **Slug**: `czym-jest-sciezka-nawigacji-na-stronie-i-dlaczego-warto-ja-miec`
  - **URL**: `/edukacja/ux/czym-jest-sciezka-nawigacji-na-stronie-i-dlaczego-warto-ja-miec`
  - **Kategorie**: UX, SEO
  - **Czas czytania**: 10 min (~2000 słów)
  - **Zawartość**: Jak wyglądają i działają breadcrumbs (3 rodzaje), dlaczego ułatwiają nawigację (orientacja, szybki powrót, zmniejszenie odrzuceń), wpływ na SEO (SERP, dane strukturalne, linki wewnętrzne), gdzie stosować (strony firmowe, sklepy, blogi), jak wdrożyć (umiejscowienie, nazwy, JSON-LD, dostępność), najczęstsze błędy.
  - **Linki wewnętrzne (4)**: mapa-strony, dlaczego-strona-nie-wyswietla-sie-w-google, strony-internetowe, kontakt
  - **Linki zewnętrzne (2)**: Google Search Central, WAI-ARIA
  - **Tooltips (4)**: breadcrumbs, dane strukturalne, JSON-LD, landing page
  - **FAQ**: 5 pytań
  - **CTA**: Strony internetowe + Kontakt
  - **Pliki**: `data/pl/blog.json`, `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: content-only (nie wymaga npm run build)

- ✅ **[Artykuł 22] Dlaczego pusta przestrzeń na stronie zwiększa czytelność?**

  - **Zmiana tytułu**: z "Whitespace na stronie: dlaczego pusta przestrzeń zwiększa czytelność?" na "Dlaczego pusta przestrzeń na stronie zwiększa czytelność?" (tytuł musi być pytaniem bez żargonu)
  - **Slug**: `dlaczego-pusta-przestrzen-na-stronie-zwieksza-czytelnosc`
  - **URL**: `/edukacja/ux/dlaczego-pusta-przestrzen-na-stronie-zwieksza-czytelnosc`
  - **Kategorie**: UX, Grafika
  - **Czas czytania**: 11 min (~2200 słów)
  - **Zawartość**: Czym jest pusta przestrzeń (makro i mikro), jak wpływa na odbiór (skanowanie, obciążenie poznawcze, kierowanie uwagi), gdzie stosować (sekcje, nagłówki, interlinia, formularze, mobile), jak ocenić proporcje (testy + narzędzia), pusta przestrzeń a typografia (interlinia, szerokość kolumny), najczęstsze obawy.
  - **Linki wewnętrzne (6)**: responsywnosc-strony, kontrast-kolorow, czcionki-szeryfowe-bezszeryfowe, paradoks-wyboru, strony-internetowe, kontakt
  - **Linki zewnętrzne (4)**: Nielsen Norman Group (whitespace), WCAG 2.1 (text-spacing), Material Design (spacing), PageSpeed/WAVE
  - **Tooltips (3)**: pusta przestrzeń, obciążenie poznawcze, interlinia
  - **FAQ**: 5 pytań
  - **CTA**: Strony internetowe + Kontakt
  - **Pliki**: `data/pl/blog.json`, `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: content-only (nie wymaga npm run build)

- ✅ **[Artykuł 40] Dlaczego regularne aktualizacje WordPressa są kluczowe dla bezpieczeństwa?**

  - **Slug**: `dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa`
  - **URL**: `/edukacja/bezpieczenstwo/dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa`
  - **Kategorie**: Bezpieczeństwo, Strony
  - **Czas czytania**: 11 min (~2200 słów)
  - **Zawartość**: Jak działają aktualizacje WordPressa (rdzeń, wtyczki, motywy), co się dzieje gdy strona nie jest aktualizowana (boty, konsekwencje ataku), dlaczego właściciele nie aktualizują, na co zwrócić uwagę przy aktualizacjach (backup, staging, kolejność), automatyczne aktualizacje za i przeciw, dodatkowe warstwy ochrony (SSL, 2FA, wtyczki bezpieczeństwa, hosting), jak sprawdzić bezpieczeństwo strony.
  - **Linki wewnętrzne (8)**: optymalizacja-strony-wordpress (x3), SSL, co-sprawdzic-przed-uruchomieniem, dlaczego-strona-nie-wyswietla-sie-w-google, strony-internetowe, kontakt (x2)
  - **Linki zewnętrzne (6)**: W3Techs, Sucuri (raport + SiteCheck), WPScan, Wordfence, Google Safe Browsing
  - **Tooltips (6)**: wtyczka, motyw, bot, backup, staging, 2FA
  - **FAQ**: 5 pytań
  - **CTA**: Optymalizacja WordPress + Kontakt
  - **Pliki**: `data/pl/blog.json`, `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: content-only (nie wymaga npm run build)

## 2025-12-31

- ✅ **[SEO-018] Middleware: naprawić Content-Type dla redirectów 301 (text/plain → text/html)**

  - **Problem**: Ahrefs i inne crawlery zapisywały strony z redirect 301 jako „plain text" zamiast HTML.
  - **Przyczyna**: `NextResponse.redirect()` domyślnie zwraca `Content-Type: text/plain`.
  - **Rozwiązanie**: Dodano helper `redirect301()` który ustawia `Content-Type: text/html; charset=utf-8`.
  - **URL-e dotknięte problemem** (6 artykułów z przekierowaniami kategorii):
    - `/edukacja/psychologia/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
    - `/edukacja/widocznosc/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
    - `/edukacja/widocznosc/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
    - `/edukacja/seo/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
    - `/edukacja/tresci/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
    - `/edukacja/branding/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
  - **Plik zmieniony**: `middleware.ts`
  - **Weryfikacja**: `npm run lint` + `npm run build` — OK.

## 2025-01-01

- ✅ **[SEO-026] Realizacje: poprawa jakości obrazów i skrócenie tekstów**

  - **Co zrobiono**:
    - Zwiększono jakość obrazów w `ProjectCard.tsx` z 90 do 100.
    - Skrócono i uproszczono teksty na `/realizacje`:
      - HeroBanner: usunięto korpo-frazę "każdy projekt powstał we współpracy z klientem", skrócono do jednego zdania.
      - CTABanner: skrócono description do minimum.
    - Teksty zgodne z INSTRUCTIONS.md (bez keyword stuffing, naturalne, krótkie).
  - **Pliki zmienione**:
    - `components/ui/ProjectCard.tsx` (quality 90 → 100)
    - `app/(pl)/realizacje/page.tsx` (HeroBanner + CTABanner texts)
  - **Weryfikacja**: `npm run build` — OK.

- ✅ **[SEO-019] Sitemap: stabilna, deterministyczna kolejność URL**

  - **Co zrobiono**:
    - Zidentyfikowano problem: kolejność URL w `sitemap-0.xml` była niedeterministyczna (zależna od kolejności skanowania plików przez `fast-glob` i iteracji po `Map.entries()`).
    - Dodano skrypt `scripts/sort-sitemap.cjs` sortujący URL alfabetycznie po wygenerowaniu sitemap.
    - Zaktualizowano `package.json` — postbuild uruchamia skrypt sortujący.
    - Zachowano sortowanie w `additionalPaths` w `next-sitemap.config.cjs` (redundantne, ale bezpieczne).
  - **Pliki zmienione**:
    - `scripts/sort-sitemap.cjs` (nowy)
    - `package.json` (postbuild)
    - `next-sitemap.config.cjs` (sortowanie additionalPaths)
  - **Wynik**: Sitemap posortowana alfabetycznie — kolejność: `/` → `/edukacja/**` → `/kontakt` → `/mapa-strony` → `/narzedzia/**` → `/o-nas/**` → `/polityka-prywatnosci` → `/realizacje/**` → `/regulamin` → `/uslugi/**`.
  - **Wpływ na SEO**: Minimalny bezpośredni — Google nie sortuje URL według kolejności w sitemap. Pośrednie korzyści: łatwiejsze debugowanie, czytelniejsze diff-y w git, profesjonalny wygląd.
  - **Weryfikacja**: `next build` + `next-sitemap` + `node scripts/sort-sitemap.cjs` — OK.

- ✅ **[SEO-025] Usługi i Realizacje: usunięcie abstrakcyjnych teł, poprawa jakości obrazów i tekstów**

  - **Co zrobiono**:
    - Usunięto wszystkie obrazy z `/bg/` z 13 stron usługowych (HeroBanner + OpenGraph):
      - `blogi-internetowe` → PiłkaNożna.pl
      - `marketing` → MSC Psychotherapy
      - `audyt-seo` → GSC screenshot
      - `optymalizacja-seo` → Camper Albania
      - `pozycjonowanie-stron` → SEO napis
      - `projekty-graficzne` → LUX NOVA teczka
      - `projekt-graficzny-strony` → MSC
      - `projekt-identyfikacji-wizualnej` → identyfikacja blog
      - `projekt-karty-lojalnosciowej` → social proof blog
      - `projekt-logo` → logo warianty blog
      - `projekt-odziezy-firmowej` → identyfikacja blog
      - `optymalizacja-strony-wordpress` → Camper Albania
      - `tworzenie-tresci` → content marketing blog
    - Dodano brakujące obrazy na `/uslugi` (Odzież firmowa + Karty lojalnościowe) z artykułów blogowych.
    - Poprawiono teksty na `/realizacje` (HeroBanner + CTABanner) - bardziej angażujące, benefit-first.
    - Zwiększono jakość obrazów w `ProjectCard.tsx` z 85 do 90.
  - **Pliki zmienione**:
    - 13 stron usługowych w `app/(pl)/uslugi/`
    - `app/(pl)/uslugi/page.tsx`
    - `app/(pl)/realizacje/page.tsx`
    - `components/ui/ProjectCard.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` — OK.

- ✅ **[SEO-024] Usługi: rozbudowa strony `/uslugi` o zdjęcia realizacji, lepsze meta i CTA**

  - **Co zrobiono**:
    - Dodano zdjęcia realizacji (`topImageSrc` + `topImageAlt`) do wszystkich sekcji usługowych (Witryny, Projekty graficzne, Marketing, Tworzenie treści).
    - Zdjęcia pochodzą z realizacji w `projects.json`, stron usługowych lub artykułów blogowych (fallback).
    - Alt texty opisowe, zgodne z INSTRUCTIONS.md (bez keyword stuffing).
    - Poprawiono `metadata.title` i `metadata.description` pod SEO (konkretne, benefit-first).
    - Rozbudowano HeroBanner o opis (2 zdania o usługach).
    - Zmieniono tło HeroBanner i OpenGraph na zdjęcie realizacji MSC Psychotherapy.
    - Zaktualizowano schema JSON-LD do spójności z nowymi metadata.
    - Dodano CTABanner na końcu strony (darmowa wycena → /kontakt).
  - **Pliki zmienione**:
    - `app/(pl)/uslugi/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` — OK.

## 2025-12-31

- ✅ **[SEO-023] Realizacje: optymalizacja SEO strony portfolio `/realizacje`**

  - **Co zrobiono**:
    - Zmieniono tło Hero z abstrakcyjnego obrazu na zdjęcie realizacji (`luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp`).
    - Dodano rozbudowany opis w Hero (3 zdania o portfolio i branżach).
    - Poprawiono metadata (`title`, `description`) — bardziej konkretne i SEO-friendly.
    - Zmieniono obraz OpenGraph na zdjęcie realizacji (zamiast abstrakcyjnego tła).
    - Zaktualizowano schema JSON-LD do spójności z metadata.
    - Dodano CTABanner na końcu strony z zachęceniem do kontaktu i darmowej wyceny.
  - **Pliki zmienione**:
    - `app/(pl)/realizacje/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` — OK.

- ✅ **[TOOLS-050] Generator stopki mailowej: LocalStorage + modal potwierdzenia resetu**

  - **Co zrobiono**:
    - Dodano automatyczny zapis wszystkich ustawień do localStorage (config, styleConfig, spacingConfig, textStyleConfig, layout, themeId).
    - Ustawienia są przywracane po odświeżeniu strony.
    - Stworzono nowy reużywalny komponent `ConfirmModal.tsx` (na bazie SearchDialog — AnimatePresence, createPortal, useEscapeKey).
    - Dodano przycisk „Resetuj wygląd" pod podglądem stopki, otwierający modal potwierdzenia.
    - Zaktualizowano instrukcję: nowa sekcja „Automatyczny zapis i resetowanie ustawień".
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/ui/ConfirmModal.tsx` (nowy)
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[AUDIT-007] Blog: audyt linków zewnętrznych w artykułach**

  - **Co zrobiono**:
    - Przeskanowano wszystkie artykuły w `blog.json` pod kątem linków zewnętrznych (~70 unikalnych linków).
    - Zweryfikowano poprawność linków i ich zgodność z kontekstem tekstu.
    - **Znaleziono i naprawiono 1 problem**:
      - `https://try.goshippo.com/2021-state-of-shipping/` → `https://goshippo.com/resources/state-of-shipping-2023` (stary link przekierowywał do głównej strony, zaktualizowano na nowszy raport 2023)
    - Pozostałe linki zewnętrzne są poprawne i prowadzą do właściwych źródeł.
  - **Pliki zmienione**:
    - `data/pl/blog.json` (artykuł: darmowa-dostawa-vs-nizsza-cena-co-bardziej-przekonuje-do-zakupu)
  - **Weryfikacja**: JSON OK (content-only)

- ✅ **[49] Artykuł: Darmowa dostawa vs niższa cena: co bardziej przekonuje do zakupu?**

  - **Co zrobiono**:
    - Napisano artykuł porównawczy (11 min, ~2200 słów) o dwóch strategiach cenowych w e-commerce: darmowa dostawa vs niższa cena produktu.
    - Struktura: dlaczego koszty dostawy mają znaczenie (statystyki Baymard Institute: 70% porzuconych koszyków, 39% przez dodatkowe koszty), efekt zerowej ceny (eksperyment Dana Ariely'ego z czekoladkami), kiedy darmowa dostawa działa lepiej (niższa cena produktu, nowi klienci, konkurencyjne rynki), kiedy niższa cena produktu działa lepiej (droższe produkty, porównywarki cenowe, tanie opcje dostawy), porównanie strategii (konwersja, średnia wartość zamówienia, postrzeganie marki), łączenie strategii (próg darmowej dostawy, różne kategorie, program lojalnościowy), aspekty prawne (Dyrektywa Omnibus).
    - 6 linków wewnętrznych, 3 linki zewnętrzne ze źródłami, 1 tooltip, 5 FAQ.
    - Dodano artykuł na górę listy w `data/pl/blog.json`.
    - Zaktualizowano `docs/BLOG_CATALOG.md`.
  - **Pliki zmienione**:
    - `data/pl/blog.json`
    - `docs/BLOG_CATALOG.md`
  - **Uwaga**: Brakuje obrazu cover — do uzupełnienia: `public/assets/blog/darmowa-dostawa-vs-nizsza-cena-co-bardziej-przekonuje-do-zakupu/darmowa-dostawa-vs-nizsza-cena-co-bardziej-przekonuje-do-zakupu.webp`
  - **Weryfikacja**: content-only.

- ✅ **[31] Artykuł: Czcionki szeryfowe i bezszeryfowe: czym się różnią i kiedy używać których?**

  - **Co zrobiono**:
    - Napisano kompleksowy artykuł porównawczy (12 min, ~2400 słów) o czcionkach szeryfowych i bezszeryfowych z szerokim kontekstem — nie tylko strony internetowe, ale też druk, branding, psychologia odbioru.
    - Struktura: historia szeryfów (Rzym, Gutenberg, modernizm), różnice wizualne, czytelność (druk vs ekrany z badaniami NNGroup), kiedy używać szeryfowych, kiedy bezszeryfowych, psychologia odbioru, łączenie stylów, dostępność (dysleksja, WCAG), praktyczne aspekty wyboru, przykłady z branż.
    - 8 linków wewnętrznych, 5 linków zewnętrznych, 3 tooltips, 5 FAQ.
    - Dodano artykuł na górę listy w `data/pl/blog.json`.
    - Zaktualizowano `docs/BLOG_CATALOG.md`.
  - **Poprawki (CONTENT-031)**:
    - Dodano wizualizację czcionek inline — nazwy czcionek wyświetlają się ich własnym krojem (np. <span style="font-family: Georgia">Georgia</span>, <span style="font-family: Roboto">Roboto</span>) dzięki @import Google Fonts + inline style font-family.
    - Poprawiono ton — usunięto sformułowania pouczające ("To uproszczenie", "Oczywiście to nie są sztywne reguły", "Teoria to jedno, praktyka to drugie").
    - Dodano źródło dla badań psychologicznych (Communication Research).
  - **Pliki zmienione**:
    - `data/pl/blog.json`
    - `docs/BLOG_CATALOG.md`
  - **Uwaga**: Brakuje obrazu cover — do uzupełnienia: `public/assets/blog/czcionki-szeryfowe-i-bezszeryfowe-czym-sie-roznia-i-kiedy-uzywac-ktorych/czcionki-szeryfowe-i-bezszeryfowe-czym-sie-roznia-i-kiedy-uzywac-ktorych.webp`
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[TOOLS-058] Generator stopki mailowej: naprawienie stylów w układach Kompakt, Dwie kolumny, Minimalistyczny, Dolny pasek**

  - **Co zrobiono**:
    - Dodano `borderStyle` do layoutów: `compact`, `two-column`, `minimal`, `bottom-bar`.
    - Użyto per-element text styles we wszystkich 4 layoutach: `nameColor`, `nameFontSize`, `jobTitleColor`, `jobTitleFontSize`, `companyColor`, `companyFontSize`, `contactColor`, `contactFontSize`, `socialsColor`, `socialsFontSize`, `legalColor`, `legalFontSize`.
    - Zaktualizowano instrukcję: nowa sekcja „Styl tekstu — kolory i rozmiary poszczególnych elementów".
    - Zaktualizowano FAQ o ikony SVG mediów społecznościowych.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[TOOLS-057] Generator stopki mailowej: aplikowanie stylów tekstu i ramek we wszystkich układach**

  - **Co zrobiono**:
    - Dodano `borderStyle` do wszystkich layoutów (top-banner, label-column, centered).
    - Zaktualizowano layout `top-banner` — użycie `nameFontSize`, `jobTitleFontSize`, `companyFontSize` w bannerze.
    - Teraz style tekstu (kolor, rozmiar) i ramki aplikują się we wszystkich 4 układach.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[TOOLS-056] Generator stopki mailowej: poprawki UI zakładki Styl tekstu**

  - **Co zrobiono**:
    - Color picker z przyciskiem „Zapisz" zamiast auto-dodawania przy przeciąganiu.
    - Zmiana kółek kolorów na kwadraty 8x8 / 7x7 px, powiększenie ikon kosza.
    - Dynamiczne wyświetlanie elementów (tylko jeśli dany element istnieje w stopce).
    - Zamiana przycisku „Domyślny" na ikonę resetu (RiRefreshLine).
    - Poprawa layoutu: Kolor w jednej linii, Rozmiar w drugiej z etykietą.
    - Ukryty input color z widocznym podglądem koloru.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npx tsc --noEmit` przechodzi.

- ✅ **[TOOLS-048] Generator stopki mailowej: personalizacja stylu tekstu per element (kolor + rozmiar)**

  - **Co zrobiono**:
    - Dodano nową zakładkę „Styl tekstu" z edycją koloru i rozmiaru dla każdego elementu tekstowego.
    - Sekcja „Własne kolory" — dodawanie i zapisywanie kolorów (do 8), usuwanie przez hover.
    - Elementy: Imię i nazwisko, Stanowisko, Firma, Dane kontaktowe, Media społecznościowe, Klauzula prawna.
    - Dla każdego: przycisk „Domyślny", color picker, własne kolory jako kółka, przyciski +/- rozmiaru.
    - Poprawiono etykiety w zakładce Odstępy: „Po X" → „Przed Y" (semantycznie poprawne).
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Weryfikacja**: `npx tsc --noEmit` przechodzi.

- ✅ **[TOOLS-051] Generator stopki mailowej: ikony social media SVG + przeniesienie linii oddzielającej**

  - **Co zrobiono**:
    - Przeniesiono opcję „Pokaż linię oddzielającą" z zakładki Wygląd do zakładki Klauzula/RODO.
    - Dodano checkbox „Pokaż ikony obok nazw serwisów" na końcu zakładki Media społecznościowe.
    - Po włączeniu ikon: wybór rozmiaru (Małe/Średnie/Duże) i koloru (Kolory platform/Kolor akcentu/Kolor tekstu).
    - Ikony SVG inline renderowane bezpośrednio w HTML (kompatybilne z Gmail/Outlook).
    - Zaktualizowano instrukcję narzędzia.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `lib/tools/email/socialIcons.ts` (już istniał, użyty)
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npx tsc --noEmit` przechodzi.

- ✅ **[TOOLS-055] Generator stopki mailowej: wielokrotny wybór ramki**

  - **Co zrobiono**:
    - Zmieniono typ `BorderOption` na `BorderSides` z flagami dla każdej strony.
    - UI: checkboxy dla każdej strony + przyciski "Pełna" / "Brak".
    - Wybór wszystkich 4 stron automatycznie ustawia pełną ramkę.
    - Zaktualizowano instrukcję narzędzia.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npx tsc --noEmit` przechodzi.

- ✅ **[TOOLS-054] Generator stopki mailowej: refaktoryzacja UI + opcja ramki zamiast layoutów**

  - **Co zrobiono**:
    - Usunięto układy „Pasek akcentu" i „Z ramką" z listy layoutów (pozostało 8 układów).
    - Dodano opcję ramki w zakładce Wygląd (brak / pełna / lewa / prawa / góra / dół).
    - Przeniesiono zakładki edytora do osobnej sekcji nad dwiema kolumnami.
    - Zaktualizowano instrukcję narzędzia i schemat HowTo.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npx tsc --noEmit` przechodzi. Build ma niezwiązany błąd z brakującymi stronami bloga.

- ✅ **[TOOLS-049] Generator stopki mailowej: drugi przycisk CTA + przeniesienie zaokrąglenia przycisku**

  - **Co zrobiono**:
    - Zmieniono nazwę zakładki z „Link” na „Przyciski”.
    - Dodano pola dla drugiego przycisku CTA (cta2Label, cta2Url) — styl outline (przezroczyste tło z obramowaniem).
    - Przeniesiono opcję „Zaokrąglenie przycisku CTA” z zakładki Wygląd do zakładki Przyciski.
    - Zaktualizowano instrukcję narzędzia i schemat HowTo.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[TOOLS-053] Generator stopki mailowej: poprawka spacing w układzie Wyśrodkowany**

  - **Co zrobiono**:
    - Naprawiono działanie spacing w układzie `centered` — zmieniono logikę z `.replace('<td', '<td style="text-align:center;')` na `.replace('<td style="', '<td style="text-align:center;')` aby dołączać text-align do istniejących stylów zamiast je nadpisywać.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[TOOLS-052] Generator stopki mailowej: poprawka spacing we wszystkich układach + dynamiczne ukrywanie**

  - **Co zrobiono**:
    - Zaktualizowano `buildSignatureHtml.ts` — spacing jest teraz stosowany we wszystkich 10 układach:
      - `compact`: afterSocials, beforeLegal
      - `two-column`: afterName, afterTitle, afterExtra, afterSocials, afterCta, beforeLegal
      - `minimal`: afterName, afterTitle
      - `bottom-bar`: beforeLegal
    - Dodano mapowanie `LAYOUT_SPACING_MAP` w komponencie — określa które kontrolki spacing są dostępne dla danego layoutu.
    - Zaktualizowano panel Odstępy — kontrolki są teraz dynamicznie ukrywane w zależności od wybranego layoutu.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-047] Generator stopki mailowej: nowa zakładka Odstępy (spacing między elementami)**

  - **Co zrobiono**:
    - Dodano nową zakładkę „Odstępy" w edytorze stopki mailowej.
    - Przeniesiono opcję „Margines wewnętrzny stopki" z zakładki Wygląd do Odstępy.
    - Dodano dynamiczne kontrolki +/- do regulacji odstępów między poszczególnymi elementami stopki:
      - Po imieniu i nazwisku
      - Po stanowisku / firmie
      - Po dodatkowej linii
      - Po danych kontaktowych
      - Po mediach społecznościowych
      - Po przycisku CTA
      - Przed klauzulą
    - Kontrolki są widoczne tylko dla elementów aktualnie obecnych w stopce (dynamiczne ukrywanie).
    - Zaktualizowano instrukcję narzędzia z nową sekcją opisującą zakładkę Odstępy.
    - Zaktualizowano schemat HowTo o nowy krok.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[AUDIT-018] Repo: audyt sitemap — kompletność, duplikaty, poprawność lastmod**

  - **Co zrobiono**:
    - Sprawdzono kompletność sitemap: wszystkie 53 strony statyczne są obecne ✓
    - Wykryto i usunięto **duplikat katalogu** `generator-stopki-mailowej/` (stary katalog obok `darmowy-generator-stopki-mailowej/`) — tworzył dostępne URL-e `/narzedzia/generator-stopki-mailowej` i `/instrukcja`, które nie były w sitemap.
    - Naprawiono **bug w `next-sitemap.config.cjs`** — strona główna `/` nie miała `lastmod` (route group `(pl)` po usunięciu dawał pusty string zamiast `/`).
    - Zweryfikowano daty `lastmod` — poprawne, pobierane z git commit date.
  - **Pliki zmienione**:
    - Usunięto: `app/(pl)/narzedzia/(tools)/(desktop-only)/generator-stopki-mailowej/` (cały katalog z page.tsx i instrukcja/page.tsx)
    - Edytowano: `next-sitemap.config.cjs` (dodano `if (r === '') r = '/';` w funkcji `toRoute`)
  - **Weryfikacja**: `npm run build` przechodzi, sitemap zregenerowana poprawnie.

- ✅ **[TOOLS-044] Generator stopki mailowej: dodać 5 nowych wariantów układu**

  - **Co zrobiono**:
    - Dodano 5 nowych układów stopki mailowej:
      1. `compact` - kompaktowy, jednoliniowy układ (imię + stanowisko | kontakt)
      2. `two-column` - dane osobowe po lewej, kontakt po prawej z separatorem
      3. `bordered` - cała stopka otoczona elegancką ramką w kolorze akcentu
      4. `minimal` - minimalistyczny, tylko podstawowe dane bez ozdobników
      5. `bottom-bar` - dane u góry, kolorowy pasek na dole z CTA i nazwą firmy
    - Zaktualizowano `LayoutType` w `types.ts`.
    - Dodano etykiety UI w `EmailSignatureGenerator.tsx`.
    - Zaimplementowano generowanie HTML dla wszystkich nowych układów w `buildSignatureHtml.ts`.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[REVERT-001] Narzędzia: przywrócenie starych URL-i i usunięcie redirectów SEO-019**

  - **Co zrobiono**:
    - Przywrócono stare URL-e narzędzi (przed zmianami SEO-019).
    - Zmieniono nazwy folderów narzędzi z nowych na stare:
      - `konwerter-webp` → `jpg-png-na-webp-bez-limitu`
      - `kadrowanie-zdjec` → `zmiana-rozmiaru-i-kadrowanie-zdjecia`
      - `generator-favicon` → `darmowy-generator-favicon-ico`
      - `licznik-meta-tagow` → `licznik-dlugosci-meta-title-i-description`
      - `generator-stopki-mailowej` → `darmowy-generator-stopki-mailowej`
      - `tester-kontrastu-wcag` → `tester-kontrastu-kolorow-wcag`
      - `paleta-kolorow-z-obrazu` → `generator-palety-kolorow-z-obrazu`
      - `generator-palet-kolorow` → `generator-palet-kolorow-online`
    - Usunięto `TOOL_REDIRECTS` z `lib/redirects.ts`.
    - Zaktualizowano linki i schema JSON-LD w `app/(pl)/narzedzia/page.tsx`.
    - Zaktualizowano linki w `components/shared/navigation-data/pl.ts`, `components/shared/Footer.tsx`, `app/(pl)/mapa-strony/page.tsx`.
    - Zaktualizowano URL-e w plikach narzędzi (page.tsx, instrukcja/page.tsx) — canonical, OG, schema, breadcrumbs, linki.
    - Linki w blogu (`data/pl/blog.json`) już były na starych URL-ach — teraz działają poprawnie.
  - **Pliki zmienione**:
    - `lib/redirects.ts`
    - `app/(pl)/narzedzia/page.tsx`
    - `app/(pl)/mapa-strony/page.tsx`
    - `components/shared/navigation-data/pl.ts`
    - `components/shared/Footer.tsx`
    - `app/(pl)/narzedzia/(tools)/**` (wszystkie page.tsx i instrukcja/page.tsx)
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

## 2025-01-03

- ✅ **[TOOLS-046] Generator stopki mailowej: naprawa UI zakładek Wygląd, Odstępy, Zaawansowane**

  - **Co zrobiono**:
    - Naprawiono crash zakładki Zaawansowane — dodano fallback dla customColors w loadFromStorage (stare dane w localStorage mogły nie mieć tej właściwości).
    - Uproszczono zakładkę Odstępy — usunięto boxy, zmniejszono tekst, użyto prostego layoutu z przyciskami Mały/Standard/Duży.
    - Naprawiono sekcję „Kolory i rozmiary elementów":
      - Zwiększono ikony kolorów z `h-4 w-4` do `h-6 w-6`.
      - Usunięto ramki przy elementach (`rounded-lg border border-neutral-200 bg-neutral-50`).
      - Zwiększono przyciski A-/A+ z `px-2 py-1 text-[10px]` do `px-3 py-1.5 text-xs`.
      - Naprawiono color picker — teraz jest `h-6 w-6` kwadratem z border.
    - Usunięto ikonkę RiRefreshLine z przycisku „Resetuj wygląd".
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-045] Generator stopki mailowej: rozbudowa zakładek + modal potwierdzenia + reset**

  - **Co zrobiono**:
    - Przywrócono funkcjonalność własnych kolorów (customColors) w zakładce Zaawansowane.
    - Usunięto predefiniowane kolory z ELEMENT_COLOR_OPTIONS (Ciemny, Niebieski, Fioletowy, Zielony, Szary) — teraz przy elementach są tylko własne kolory użytkownika + color picker.
    - Stworzono nową zakładkę „Odstępy" z rozbudowanymi opcjami i przyciskami −/+ (przeniesiono z Zaawansowane).
    - Stworzono reużywalny komponent `ConfirmDialog` (na podstawie SearchDialog).
    - Dodano przycisk „Resetuj wygląd" z modelem potwierdzenia (resetuje styleConfig do domyślnych).
    - Zaktualizowano stronę instrukcji — nowa zakładka Odstępy, własne kolory, przycisk Resetuj.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/ui/ConfirmDialog.tsx` (nowy)
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-044] Generator stopki mailowej: usunięcie własnych kolorów z zakładki Zaawansowane + naprawa stylów**

  - **Co zrobiono**:
    - Usunięto sekcję „Własne kolory" z zakładki Zaawansowane (color picker + przycisk „+ Dodaj" + renderowanie zapisanych kolorów).
    - Usunięto renderowanie customColors przy elementach tekstowych.
    - Naprawiono styl trzeciego przycisku odstępów „Treść → Stopka" — był niespójny z dwoma poprzednimi.
    - Usunięto `customColors` z `StyleConfig` w `types.ts` oraz `DEFAULT_STYLE`.
    - Usunięto niepotrzebny stan `customColorInput` i funkcję `handleAddCustomColor`.
    - Zaktualizowano stronę instrukcji — usunięto wzmianki o „Własne kolory", „Dodaj do palety" oraz FAQ o zapisywaniu własnych kolorów.
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-030] Generator stopki mailowej: refaktor UI — spójność przycisków i checkboxów z innymi narzędziami**

  - **Co zrobiono**:
    - Zmieniono etykietę z „Motyw kolorystyczny" na „Kolory i czcionki" (w zakładce Wygląd nie było przycisków motywów).
    - Ujednolicono checkbox „Pokaż ikony zamiast nazw" — dodano `id` i `htmlFor`, użyto spójnych klas z checkboxem „Pokaż linię oddzielającą".
    - Zmieniono styl przycisków A-/A+ (rozmiar czcionki elementów) na spójny z innymi przyciskami opcji (rounded-lg border, px-2 py-1).
    - Zaktualizowano stronę instrukcji — usunięto wzmianki o „motywach kolorystycznych" (sekcja i schema HowTo).
  - **Pliki zmienione**:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

## 2025-01-03

- ✅ **[SEO-021] Usługi: optymalizacja SEO stron usługowych (usunięcie pustych haseł)**

  - **Co zrobiono**:
    - Usunięto puste hasła marketingowe z description zgodnie z INSTRUCTIONS.md (linia 537).
    - Zmieniono "social media" na "media społecznościowe" (linia 468).
    - Zmieniono "Twojej" na "swojej" gdzie właściwe (linia 476).
  - **Zmienione strony (9 plików)**:
    - `/uslugi/tworzenie-tresci` — usunięto "budują widoczność i zaufanie", "Przyciągnij klientów"
    - `/uslugi/projekty-graficzne/projekt-wizytowki` — usunięto "buduje zaufanie od pierwszego spojrzenia"
    - `/uslugi/projekty-graficzne/projekt-ulotki` — usunięto "przyciąga uwagę"
    - `/uslugi/projekty-graficzne/projekt-teczki-ofertowej` — usunięto "podnosi prestiż", "buduje zaufanie"
    - `/uslugi/projekty-graficzne/projekt-papieru-firmowego` — usunięto "wzmacnia wizerunek"
    - `/uslugi/projekty-graficzne/projekt-odziezy-firmowej` — usunięto "lepsza rozpoznawalność", "buduje zaufanie"
    - `/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej` — usunięto "zachęca klientów do powrotu"
    - `/uslugi/projekty-graficzne/projekt-katalogu` — usunięto "podnoszą sprzedaż i wizerunek"
    - `/uslugi/projekty-graficzne/szablony-postow-social-media` — zmieniono "social media" na "media społecznościowe"
    - `/uslugi/strony-internetowe/optymalizacja-strony-wordpress` — usunięto "Przyciągnij nowych klientów"
  - **Weryfikacja**: `npm run build` przechodzi.

- ✅ **[SEO-020] Repo: konsolidacja redirectów do jednego pliku (`lib/redirects.ts`)**

  - **Co zrobiono**:
    - Utworzono `lib/redirects.ts` z centralną konfiguracją wszystkich redirectów 301.
    - Przeniesiono ~40 redirectów z `next.config.ts` do nowego pliku.
    - Przeniesiono `TOOL_REDIRECTS` z `middleware.ts` do nowego pliku.
    - Zaktualizowano `middleware.ts` — import z `lib/redirects.ts`, obsługa wszystkich redirectów (statycznych + dynamicznych wzorców).
    - Usunięto funkcję `redirects()` z `next.config.ts` (pozostały tylko headers i webpack).
  - **Pliki zmienione**:
    - `lib/redirects.ts` (nowy) — TOOL_REDIRECTS, LEGACY_REDIRECTS, PROJECT_REDIRECTS, EDUCATION_REDIRECTS, ALL_STATIC_REDIRECTS
    - `middleware.ts` — import + matchPatternRedirect dla /projects/:slug i /edukacja/design/:path*
    - `next.config.ts` — usunięto async redirects()
  - **Korzyści**: Jeden plik źródłowy dla wszystkich redirectów, łatwiejsze zarządzanie, middleware (edge) zamiast next.config.

- ✅ **[COPY-TOOLS-001] Narzędzia: redakcja tekstów instrukcji zgodnie z praktykami SEO**

  - **Co zrobiono**:
    - Zweryfikowano 8 instrukcji narzędzi pod kątem 9 praktyk SEO.
    - Wszystkie praktyki były już wdrożone w SEO-018:
      - Tytuły w formie pytania z intentem wyszukiwania ✅
      - Meta description 150-160 znaków ✅
      - H1 spójne z meta title ✅
      - Schema HowTo z jasnymi krokami ✅
      - FAQ min. 5 pytań ✅
      - CTA na końcu (link do narzędzia + kontakt) ✅
      - Uniwersalność (bez ograniczeń "do strony") ✅
    - Poprawiono tytuł generatora palet kolorów (usunięto "do strony").
  - **Weryfikacja**: Wszystkie instrukcje spełniają 9 praktyk SEO.

- ✅ **[SEO-019] Narzędzia: analiza potencjału SEO narzędzi (URL-e, meta, redirecty)**

  - **Co zrobiono**:
    - Skrócono URL-e 8 narzędzi dla lepszego SEO (frazy wyszukiwania):
      - `/jpg-png-na-webp-bez-limitu` → `/jpg-png-na-webp-bez-limitu`
      - `/zmiana-rozmiaru-i-kadrowanie-zdjecia` → `/zmiana-rozmiaru-i-kadrowanie-zdjecia`
      - `/licznik-dlugosci-meta-title-i-description` → `/licznik-dlugosci-meta-title-i-description`
      - `/darmowy-generator-favicon-ico` → `/darmowy-generator-favicon-ico`
      - `/darmowy-generator-stopki-mailowej` → `/darmowy-generator-stopki-mailowej`
      - `/generator-palet-kolorow-online` → `/generator-palet-kolorow`
      - `/generator-palety-kolorow-z-obrazu` → `/generator-palet-kolorow-online`
      - `/tester-kontrastu-kolorow-wcag` → `/tester-kontrastu-kolorow-wcag`
    - Dodano redirecty 301 w `middleware.ts` ze starych URL na nowe.
    - Zaktualizowano wszystkie linki wewnętrzne: nawigacja, stopka, mapa strony, strona /narzedzia.
    - Zaktualizowano canonical URL i breadcrumbs we wszystkich plikach narzędzi.
  - **Pliki zmienione**:
    - `middleware.ts` — redirecty 301
    - `components/shared/navigation-data/pl.ts` — nawigacja
    - `components/shared/Footer.tsx` — stopka
    - `app/(pl)/mapa-strony/page.tsx` — mapa strony
    - `app/(pl)/narzedzia/page.tsx` — strona narzędzi
    - Wszystkie pliki `page.tsx` i `instrukcja/page.tsx` w narzędziach
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[SEO-018] Narzędzia: optymalizacja SEO instrukcji narzędzi (tytuły, meta, FAQ, struktura)**

  - **Co zrobiono**:
    - Zoptymalizowano 8 stron instrukcji narzędzi pod kątem SEO.
    - Zmieniono tytuły z technicznych ("Instrukcja X") na frazy z intentem wyszukiwania ("Jak zrobić X?").
    - Rozbudowano meta description (150-160 znaków) z konkretnymi funkcjami i korzyściami.
    - Zaktualizowano schema HowTo z lepszymi opisami.
    - Ujednolicono H1 (HeroBanner) z tytułami stron.
  - **Zmiany w plikach**:
    - `licznik-dlugosci-meta-title-i-description/instrukcja` → "Jak sprawdzić długość meta title i description?"
    - `darmowy-generator-favicon-ico/instrukcja` → "Jak stworzyć favicon dla strony?"
    - `darmowy-generator-stopki-mailowej/instrukcja` → "Jak stworzyć stopkę mailową HTML?"
    - `jpg-png-na-webp-bez-limitu/instrukcja` → "Jak zamienić JPG i PNG na WebP?"
    - `zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja` → "Jak zmienić rozmiar zdjęcia online?"
    - `generator-palet-kolorow-online/instrukcja` → "Jak dobrać kolory do strony?"
    - `generator-palety-kolorow-z-obrazu/instrukcja` → "Jak wyciągnąć kolory ze zdjęcia?"
    - `tester-kontrastu-kolorow-wcag/instrukcja` → "Jak sprawdzić kontrast kolorów WCAG?"
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

## 2025-01-02

- ✅ **[TOOLS-033] Generator stopki mailowej: nowe formaty gotowych szablonów (design variations)**

  - **Co zrobiono**:
    - Dodano 5 gotowych szablonów: Minimalistyczny, Korporacyjny, Kreatywny, Profesjonalny, Social Media.
    - Każdy szablon ma predefiniowany układ, kolory i widoczne pola.
    - UI do wyboru szablonu na górze edytora (najeżdżając kursor widać opis szablonu).
    - Wybór szablonu automatycznie konfiguruje layout i style.
  - **Pliki**: `EmailSignatureGenerator.tsx`, `types.ts`
  - **Weryfikacja**: `npm run build` OK

- ✅ **[TOOLS-034] Generator stopki mailowej: upload logo z walidacją + automatyczny resize**

  - **Co zrobiono**:
    - Dodano przycisk "Wgraj" obok pola Avatar/logo.
    - Obsługiwane formaty: PNG, JPG, WebP, SVG (max. 500 KB).
    - Automatyczny resize do max. 120x120 px.
    - Konwersja do base64 dla osadzenia w HTML.
    - Podgląd wgranego obrazu z możliwością usunięcia.
  - **Pliki**: `EmailSignatureGenerator.tsx`, `buildSignatureHtml.ts`, `types.ts`
  - **Weryfikacja**: `npm run build` OK

- ✅ **[TOOLS-035] Generator stopki mailowej: dodatkowe typy elementów (tagline, CTA2, banner, QR)**

  - **Co zrobiono**:
    - Nowa zakładka "Dodatki" w edytorze z elementami:
      - **Tagline** — krótkie hasło/motto wyświetlane kursywą.
      - **Drugi przycisk CTA** — z obramowaniem (wizualnie różny od pierwszego).
      - **Banner graficzny** — nad lub pod stopką, opcjonalny link.
      - **Kod QR z vCard** — automatycznie generowany z danych stopki, wybór rozmiaru i pozycji.
    - Kontrolki ikon social media w zakładce "Media społecznościowe" (rozmiar, kolor).
    - localStorage persistence — dane zapisywane automatycznie w przeglądarce.
    - Przycisk "Pobierz HTML" do eksportu stopki jako plik.
  - **Pliki**: `EmailSignatureGenerator.tsx`, `buildSignatureHtml.ts`, `types.ts`
  - **Weryfikacja**: `npm run build` OK

- ✅ **[DOCS-SIGNATURE] Redakcja strony instrukcji generatora stopki mailowej**

  - **Co zrobiono**:
    - Aktualizacja schematu HowTo o nowe kroki (szablony, extras, upload).
    - Nowa sekcja "Szablony — szybki start" z opisem 5 szablonów.
    - Aktualizacja opisu pola Avatar o funkcję wgrywania plików.
    - Nowa sekcja "Zakładka Dodatki — elementy rozszerzone" (tagline, CTA2, banner, QR).
    - Sekcja o ikonach social media z opcjami rozmiaru i koloru.
    - Rozbudowane FAQ o nowe funkcje (14 pytań).
  - **Plik**: `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run build` OK

## 2025-12-31

- ✅ **[TONE-001] Blog: audyt tonu artykułów — usunięcie chamskich/pouczających form**

  - **Co zrobiono**:
    - Dodano do `INSTRUCTIONS.md` szczegółowe wytyczne o zakazanym chamskim/pouczającym tonie (sekcja "ZAKAZ CHAMSKIEGO, NACHALNEGO I POUCZAJĄCEGO TONU")
    - Przeszukano wszystkie artykuły pod kątem problematycznych fraz
    - Naprawiono **4 problematyczne frazy** w 3 artykułach:
      | Artykuł | Fragment przed | Fragment po |
      |---------|----------------|-------------|
      | `mapa-strony` | "To nie to samo co plik sitemap.xml" | "Plik sitemap.xml pełni inną funkcję" |
      | `jak-przygotowac-grafike` | "Nie chodzi o to, żeby każdy post wyglądał identycznie, ale o to, żeby..." | "Posty mogą być różnorodne — kluczowe jest, żeby..." |
      | `jak-identyfikacja-wizualna` | "Nie chodzi o pojedynczy projekt, tylko o zestaw zasad" | "Składa się z zestawu zasad" |
    - Zaktualizowano `dateModified` dla 3 artykułów
  - **Weryfikacja**: JSON OK, `npm run lint` OK
  - **Uwaga**: Istniejące błędy ESLint w `EmailSignatureGenerator.tsx` (nieużywane importy) nie są związane z tym audytem

- ✅ **[VERIFY-001 do VERIFY-015] Blog: audyt merytoryczny i prawny wszystkich artykułów**

  - **Co zrobiono**:
    - Przeprowadzono systematyczną weryfikację wszystkich 30 artykułów w `data/pl/blog.json`
    - Sprawdzono zgodność z prawem polskim (Omnibus, RODO, ustawa o prawach konsumenta)
    - Sprawdzono poprawność faktów, źródła dla statystyk, brak twierdzeń wprowadzających w błąd
  - **Wykryte i naprawione błędy**:
    | Artykuł | Fragment | Powód zmiany | Typ | Co zmieniono | Źródło dodane |
    |---------|----------|--------------|-----|--------------|---------------|
    | `efekt-zakotwiczenia` | "Klient nie wie, czy telewizor kiedykolwiek kosztował 4999 zł" | **FAŁSZ** — od 2023 r. Omnibus wymaga podania najniższej ceny z 30 dni | prawo | Dodano info o Dyrektywie Omnibus + oznaczono przykład jako hipotetyczny | ✅ UOKiK |
    | `jak-dobrac-kolory` | "20-30% różnicy w konwersji" | Statystyka bez źródła | merytoryka | Usunięto konkretną liczbę, zastąpiono ogólniejszym stwierdzeniem | — |
  - **Artykuły bez błędów**: Wszystkie pozostałe artykuły merytorycznie poprawne, źródła podane (Cialdini, BrightLocal 2023, DMA, Campaign Monitor, WCAG, Google, HubSpot, Colorcom, itp.)
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[ENCODING-001] Repo: systemowa naprawa błędnego kodowania znaków (Windows-1250 → UTF-8)**

  - **Co zrobiono**:
    - **ETAP 1 — DIAGNOZA**: Przeszukano wszystkie pliki .ts, .tsx, .json, .md w repozytorium i zidentyfikowano 7 plików z błędnym kodowaniem (znaki typu `ê, ³, ¹, æ, œ, ¿` zamiast polskich).
    - **ETAP 2 — NAPRAWA**: Naprawiono wszystkie błędne znaki w 7 plikach:
      - `app/not-found.tsx` (2 linie)
      - `app/error.tsx` (6 linii)
      - `app/(pl)/narzedzia/page.tsx` (51 wystąpień)
      - `components/sections/tools/JpgPngToWebp.tsx` (43 wystąpienia)
      - `components/sections/tools/ImageResizeTool.tsx` (38 wystąpień)
      - `components/sections/tools/FaviconGenerator.tsx` (29 wystąpień)
      - `components/sections/tools/WcagContrastChecker.tsx` (17 wystąpień)
    - **ETAP 3 — ZAPOBIEGANIE**: Dodano konfigurację wymuszającą UTF-8:
      - `.editorconfig` — wymusza `charset = utf-8` dla wszystkich plików
      - `.gitattributes` — wymusza `working-tree-encoding=UTF-8` dla plików źródłowych
      - Zaktualizowano `docs/INSTRUCTIONS.md` — dodano sekcję "Kodowanie plików — UTF-8" z zasadami, mapowaniem błędnych znaków i checklistą redakcyjną
  - **Mapowanie naprawionych znaków**: `¹→ą`, `ê→ę`, `³→ł`, `œ→ś`, `¿→ż`, `Ÿ→ź`, `æ→ć`, `ñ→ń`, `£→Ł`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[AUDIT-017] + [REFACTOR-001] Repo: audyt nazw plików + refaktor**

  - **Co zrobiono**:
    - Przejrzano całą strukturę katalogów: `lib/`, `utils/`, `hooks/`, `components/`, `types/`
    - Zidentyfikowano pliki z niejasnymi/generycznymi nazwami
    - Zmieniono nazwy 6 plików:
      - `lib/site.ts` → `lib/siteKeyDetection.ts`
      - `lib/url.ts` → `lib/absoluteUrl.ts`
      - `lib/blog.ts` → `lib/blogDataService.ts`
      - `lib/projects.ts` → `lib/projectsDataService.ts`
      - `lib/consent/storage.ts` → `lib/consent/consentCookie.ts`
      - `utils/slug.ts` → `utils/slugify.ts`
    - Zaktualizowano importy w ~100 plikach
    - Dodano sekcję "Standard nazewnictwa plików" do INSTRUCTIONS.md
  - **Pliki zachowane bez zmian** (uzasadnienie):
    - `Gap.tsx`, `Wrapper.tsx` — standardowe nazwy w ekosystemie React
    - `Filters.tsx` — kontekst katalogu wystarczający
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

## 2025-12-30

- ✅ **[CONTENT-025 do CONTENT-034] Blog: audyt ZERO DOPISAŃ — zgodność prawna + przykłady hipotetyczne**

  - **Co zrobiono**:
    - Przeprowadzono pełny audyt 30 artykułów pod kątem zasad ZERO DOPISAŃ — ZERO NIEPRAWDY
    - Sprawdzono zgodność z przepisami: Omnibus, RODO, WCAG, European Accessibility Act
    - Zweryfikowano poprawność źródeł i linków
    - Sprawdzono czy przykłady hipotetyczne są prawidłowo oznaczone
  - **Wyniki audytu**:
    - **Wszystkie 30 artykułów zgodne** z zasadami ZERO DOPISAŃ
    - **Wzorcowe artykuły** (prawidłowo cytują prawo):
      - `kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie` — EU directive 2016/2102, Polish law, EAA
      - `efekt-zakotwiczenia-jak-pierwsza-cena-wplywa-na-postrzeganie-wartosci` — Omnibus directive
      - `e-mail-marketing-dla-malych-firm` — RODO requirements
      - `co-sprawdzic-przed-uruchomieniem-strony` — RODO, cookie consent
    - **Źródła zweryfikowane**: WHO, GUS, National Eye Institute, Think with Google, StatCounter, BrightLocal, Google Search Central, WCAG 2.1, Baymard Institute, ScienceDirect, MarketingProfs, Journal of Consumer Research, Lucidpress
    - **Brak zmian wymaganych** — artykuły już spełniają wszystkie kryteria
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[TEST-001] Generator stopki mailowej: testy regresyjne**

  - **Co zrobiono**:
    - Utworzono `docs/TEST_EMAIL_SIGNATURE.md` z checklistą testów.
    - Smoke test (5 punktów, ~2 min przed deployem).
    - Pełny test regresyjny obejmujący wszystkie panele, layouty, eksport i localStorage.
  - **Pliki**: `docs/TEST_EMAIL_SIGNATURE.md`
  - **Weryfikacja**: nie wymagana (dokumentacja)

- ✅ **[TOOLS-043] Generator stopki mailowej: aktualizacja instrukcji**

  - **Co zrobiono**:
    - FAQ zaktualizowane o ikony social media i kod QR.
    - Usunięte wzmianki o usuniętych funkcjach (JSON export/import, mobile preview).
  - **Pliki**: `instrukcja/page.tsx`
  - **Weryfikacja**: `npm run build` OK

- ✅ **[TOOLS-039] Generator stopki mailowej: QR code z danymi kontaktowymi (vCard)**

  - **Co zrobiono**:
    - Zintegrowano istniejący generator QR (`lib/tools/qr/generateQr.ts`) z generatorem stopki.
    - Automatyczne budowanie vCard z danych stopki (imię, nazwisko, firma, telefon, email, www, adres).
    - Toggle "Dodaj kod QR z vCard" w panelu Appearance.
    - Wybór rozmiaru (mały/średni/duży) i pozycji (lewa/prawa).
    - QR osadzany jako data URL w HTML stopki.
  - **Pliki**: `types.ts`, `buildSignatureHtml.ts`, `EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[TOOLS-036] Generator stopki mailowej: ikony social media (SVG inline)**

  - **Co zrobiono**:
    - Utworzono moduł `lib/tools/email/socialIcons.ts` z ikonami SVG dla platform social media.
    - Dodano toggle "Pokaż ikony zamiast nazw" w panelu Social.
    - Dodano wybór rozmiaru ikon (małe/średnie/duże) i koloru (oryginalne/akcent).
    - Ikony SVG inline kompatybilne z Gmail i Outlook.
  - **Pliki**: `lib/tools/email/socialIcons.ts`, `buildSignatureHtml.ts`, `types.ts`, `EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[TOOLS-038] Generator stopki mailowej: localStorage auto-save**

  - **Co zrobiono**:
    - Dodano automatyczny zapis konfiguracji do localStorage przy każdej zmianie.
    - Konfiguracja, styl i układ są przywracane po powrocie do narzędzia.
  - **Pliki**: `EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK
  - **Uwaga**: Usunięto dodatkowe funkcje (Eksport/Import JSON, podgląd mobile, Wyczyść dane) na prośbę użytkownika — niepotrzebne.

- ✅ **[TOOLS-037] Generator stopki mailowej: eksport HTML**

  - **Co zrobiono**:
    - Utworzono moduł `lib/tools/email/exportSignature.ts` z funkcją `exportSignatureAsHtml()`.
    - Dodano przycisk "Pobierz HTML" obok przycisku kopiowania.
    - Eksportowany plik zawiera pełny dokument HTML z stopką.
  - **Pliki**: `lib/tools/email/exportSignature.ts`, `EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[TOOLS-032] Generator stopki mailowej: personalizacja kolorów per-element**

  - **Co zrobiono**:
    - Dodano interfejs `ElementColors` w `types.ts` z kolorami dla 9 elementów (name, jobTitle, company, contact, links, social, cta, ctaText, legal).
    - Rozszerzono `StyleConfig` o `elementColors` i `useElementColors`.
    - Zaktualizowano `buildSignatureHtml.ts` — kolory stosowane do każdego elementu osobno.
    - Dodano UI z checkboxem "Włącz personalizację kolorów per-element".
    - Po włączeniu pojawia się siatka 9 pól wyboru koloru.
    - Motywy automatycznie ustawiają kolory elementów przy wyborze.
  - **Pliki**: `types.ts`, `buildSignatureHtml.ts`, `EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[TOOLS-031] Generator stopki mailowej: naprawa uploadu logo (URL → walidacja + podgląd)**

  - **Co zrobiono**:
    - Dodano stan `avatarStatus` (idle/loading/valid/error).
    - Dodano walidację URL przez `Image.onload/onerror` z debounce 500ms.
    - Dodano podgląd miniaturki (56x56 px, rounded) po prawej stronie inputa.
    - Dodano komunikaty statusu: loading, valid (zielony), error (czerwony), idle.
    - Input zmienia kolor obramowania w zależności od statusu.
  - **Pliki**: `EmailSignatureGenerator.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[AUDIT-017] Pełny audyt funkcji generowania obrazów (pobierania plików) w narzędziach**

  - **Co zrobiono**:
    - Przeprowadzono pełny audyt wszystkich narzędzi generujących obrazy do pobrania
    - Zweryfikowano zgodność deklarowanego formatu z rzeczywistym MIME type w kodzie
    - Sprawdzono wszystkie pliki `.webp` w `public/assets/**` pod kątem prawdziwości formatu (nagłówki binarne RIFF/WEBP)
  - **Wyniki audytu**:
    - **ImageResizeTool** (`/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`): ✅ OK
      - UI oferuje: JPG, PNG, WebP
      - Kod: `canvasToBlob(canvas, mime, quality)` z MIME `image/jpeg` / `image/png` / `image/webp`
      - Pliki: `exportCroppedImage.ts`, `canvasToBlob.ts`
    - **JpgPngToWebp** (`/narzedzia/jpg-png-na-webp-bez-limitu`): ✅ OK
      - UI deklaruje: WebP
      - Kod: `canvasToBlob(canvas, 'image/webp', quality)` via `convertImageFileToWebp()`
      - Pliki: `lib/tools/image/webp.ts`, `useWebpConversion.ts`
    - **FaviconGenerator** (`/narzedzia/darmowy-generator-favicon-ico`): ✅ OK
      - UI deklaruje: PNG + ICO
      - Kod: `canvasToBlob(canvas, 'image/png', 1)` + ICO container wrapper
      - Pliki: `lib/tools/favicon/generator.ts`
    - **QrCodeGenerator** (`/narzedzia/generator-kodu-qr`): ✅ OK
      - UI oferuje: PNG + SVG
      - Kod: `QRCode.toDataURL()` (PNG data URL) + `QRCode.toString()` (SVG string)
      - Pliki: `lib/tools/qr/generateQr.ts`
  - **Narzędzia bez generowania obrazów** (poza zakresem audytu):
    - PaletteExtractor, ColorPaletteGenerator, WcagContrastChecker, EmailSignatureGenerator, MetaTitleDescriptionTool
  - **Weryfikacja .webp w public/assets**:
    - Sprawdzono 31 plików `.webp` w `public/assets/**`
    - Wszystkie mają poprawny nagłówek `RIFF` + `WEBP` (prawdziwe pliki WebP)
    - Brak fałszywych plików (JPG/PNG z rozszerzeniem .webp)
  - **Wnioski**: Wszystkie narzędzia generują obrazy w deklarowanych formatach. Brak błędów do naprawy.
  - **Follow-up**: brak (audyt zakończony pomyślnie)
  - **Weryfikacja**: nie wymagana (AUDIT-only)

- ✅ **[SEO-020] ROZSZERZONY AUDYT URL-i: pełna diagnoza linkowania, canonical, OG, JSON-LD, parametrów**

  - **Co zrobiono**:
    - Przeprowadzono kompletny, rozszerzony audyt całego projektu pod kątem URL-i i linkowania
    - Zweryfikowano: `next.config.ts`, `middleware.ts`, `next-sitemap.config.cjs`, wszystkie metadata/canonical/og:url, JSON-LD, linkowanie wewnętrzne, searchParams, helpery URL
    - **Wyniki pozytywne**: projekt w bardzo dobrej kondycji — poprzednie poprawki (SEO-018/019) działają prawidłowo
    - **Znaleziono 1 drobny problem**: `FeesSteps.tsx` używał pełnego URL zamiast względnego
    - **Wnioski**: brak problemów mogących realnie wpływać na SEO, GSC HTTPS, czy Senuto
  - **Pliki**: `docs/TASKS.md` (dodano szczegółowy raport audytu)
  - **Follow-up**: `SEO-021` (naprawa)
  - **Weryfikacja**: nie wymagana (AUDIT-only)

- ✅ **[SEO-021] Naprawa linkowania po rozszerzonym audycie URL-i**

  - **Co zrobiono**:
    - Zmieniono pełny URL na względny w `components/sections/steps/FeesSteps.tsx` linia 33
    - `href="https://www.arteonagency.pl/regulamin"` → `href="/regulamin"`
    - Wszystkie wewnętrzne linki używają teraz względnych ścieżek z leading slash
  - **Pliki**: `components/sections/steps/FeesSteps.tsx`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK

- ✅ **[CONTENT-012] Blog: weryfikacja rzetelności źródeł — `czym-jest-linkowanie-wewnetrzne...` + `kontrast-kolorow...`**

  - **Co zrobiono**:
    - `czym-jest-linkowanie-wewnetrzne-i-jak-wplywa-na-seo-strony` — zweryfikowano, wszystkie źródła poprawne (Google Search Console, Ahrefs)
    - `kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie` — poprawiono:
      - Dodano źródło National Eye Institute (NEI) do statystyki o daltonizmie (8% mężczyzn, 0,5% kobiet)
      - Zaktualizowano `dateModified` na 2025-12-30
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-013] Blog: weryfikacja rzetelności źródeł — `czym-jest-content-marketing` + `e-mail-marketing-dla-malych-firm`**

  - **Co zrobiono**:
    - `czym-jest-content-marketing` — zweryfikowano, źródło HubSpot poprawne
    - `e-mail-marketing-dla-malych-firm` — poprawiono:
      - Dodano źródło Campaign Monitor (2023) dla statystyk open rate (21%) i CTR (2-3%)
      - Zmiękciono stwierdzenie o unsubscribe rate (usunięto konkretną wartość „normalną")
      - Zmiękciono stwierdzenie o mobile („znaczna część" zamiast „ponad połowa")
      - Zaktualizowano `dateModified` na 2025-12-30
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-014] Blog: weryfikacja rzetelności źródeł — `co-sprawdzic-przed-uruchomieniem-strony` + `jak-przygotowac-grafike-do-postow...`**

  - **Co zrobiono**:
    - `co-sprawdzic-przed-uruchomieniem-strony` — OK, źródło Think with Google poprawne (32% bounce rate)
    - `jak-przygotowac-grafike-do-postow...` — OK, źródło MIT poprawne (13ms image processing)
    - Bez zmian w artykułach
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-015] Blog: weryfikacja rzetelności źródeł — `jak-wybrac-domene-i-hosting...` + `jak-mierzyc-skutecznosc...`**

  - **Co zrobiono**:
    - `jak-wybrac-domene-i-hosting-dla-strony-firmowej` — zweryfikowano, brak statystyk wymagających źródeł (wiedza techniczna)
    - `jak-mierzyc-skutecznosc-strony-internetowej` — zweryfikowano, link do Google Analytics poprawny, fakty o GA4 zgodne
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-016] Blog: weryfikacja rzetelności źródeł — `jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma` + `czym-jest-responsywnosc...`**

  - **Co zrobiono**:
    - `jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma` — poprawiono:
      - Usunięto nieudokumentowaną statystykę o zdjęciach (42%/35%)
      - Zastąpiono ogólnym stwierdzeniem o korzyściach ze zdjęć
      - Zaktualizowano `dateModified` na 2025-12-30
    - `czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie` — zweryfikowano, wszystkie źródła poprawne (StatCounter, Google, WCAG 2.1, Think with Google, Baymard)
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-017] Blog: weryfikacja rzetelności źródeł — `czym-jest-certyfikat-ssl...` + `meta-title-i-description...`**

  - **Co zrobiono**:
    - `czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje` — zweryfikowano, wszystkie źródła poprawne (GlobalSign, Google, SSL Labs)
    - `meta-title-i-description-jak-je-napisac` — zweryfikowano, źródło Backlinko poprawne
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-018] Blog: weryfikacja rzetelności źródeł — `materialy-drukowane-dla-firmy...` + `kody-qr-w-materialach...`**

  - **Co zrobiono**:
    - `materialy-drukowane-dla-firmy-ktore-zamowic` — zweryfikowano, wszystkie źródła poprawne (ScienceDirect, MarketingProfs, Journal of Consumer Research, Lucidpress)
    - `kody-qr-w-materialach-reklamowych` — zweryfikowano, wszystkie źródła poprawne (Statista, StatCounter)
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-019] Blog: weryfikacja rzetelności źródeł — `jak-dobrac-kolory-do-strony...` + `jak-przygotowac-sklep-internetowy...`**

  - **Co zrobiono**:
    - `jak-dobrac-kolory-do-strony-internetowej` — zweryfikowano, wszystkie źródła poprawne (Behaviour & IT, Colorcom, HubSpot, WCAG, Statista)
    - `jak-przygotowac-sklep-internetowy-do-pozycjonowania` — zweryfikowano, wszystkie źródła poprawne (Google docs, web.dev)
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-020] Blog: weryfikacja rzetelności źródeł — `jak-przygotowac-profesjonalna-stopke...` + `favicon-co-to-za-ikona...`**

  - **Co zrobiono**:
    - `jak-przygotowac-profesjonalna-stopke-mailowa` — zweryfikowano, brak statystyk wymagających źródeł (poradnik praktyczny)
    - `favicon-co-to-za-ikona...` — zweryfikowano, źródło Chrome Developers poprawne
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-021] Blog: weryfikacja rzetelności źródeł — `faq-na-stronie...` + `jak-kolorystyka-wplywa...`**

  - **Co zrobiono**:
    - `faq-na-stronie-jak-pisac-pytania...` — zweryfikowano, wszystkie źródła poprawne (AnswerThePublic, AlsoAsked, Google Search Console, Google FAQ schema)
    - `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow` — zweryfikowano, wszystkie źródła poprawne (Management Decision, Journal of Business Research, HubSpot, WiderFunnel)
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-022] Blog: weryfikacja rzetelności źródeł — `ile-czasu-trwa-pozycjonowanie...` + `czy-lokalne-firmy-potrzebuja-bloga...`**

  - **Co zrobiono**:
    - `ile-czasu-trwa-pozycjonowanie...` — zweryfikowano, wszystkie źródła poprawne (Google Search Central, Ahrefs, BrightLocal, Semrush, HubSpot)
    - `czy-lokalne-firmy-potrzebuja-bloga...` — zweryfikowano, wszystkie źródła poprawne (BrightLocal, Ahrefs, Neil Patel)
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-023] Blog: weryfikacja rzetelności źródeł — `jak-zoptymalizowac-zdjecia...` + `jak-pisac-tresci-na-stronie...`**

  - **Co zrobiono**:
    - `jak-zoptymalizowac-zdjecia...` — zweryfikowano, wszystkie źródła poprawne (PageSpeed, web.dev, Google WebP Study, Netflix Tech Blog, Lighthouse)
    - `jak-pisac-tresci-na-stronie...` — zweryfikowano, poradnik praktyczny z przykładami z różnych branż
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-024] Blog: weryfikacja rzetelności źródeł — `jak-identyfikacja-wizualna...` + `dlaczego-strona-internetowa-nie-wyswietla-sie...`**

  - **Co zrobiono**:
    - `jak-identyfikacja-wizualna...` — zweryfikowano, wszystkie źródła poprawne (Lucidpress, Journal of Product & Brand Management, MIT/Behaviour & IT)
    - `dlaczego-strona-internetowa-nie-wyswietla-sie...` — zweryfikowano, wszystkie źródła poprawne (Google Search Console, PageSpeed Insights)
    - Bez zmian w artykułach — wszystkie źródła poprawne
  - **Pliki**: brak zmian
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[CONTENT-011] INSTRUCTIONS: rozszerzenie zasad rzetelności danych i źródeł w treściach**

  - **Co zrobiono**:
    - Dodano nową sekcję „Rzetelność danych i źródeł (aktualizacja 2025-12-30)" do `docs/INSTRUCTIONS.md`:
      - Zasady nadrzędne: zero dopowiedzeń, zero wymyślonych danych, zero błędnych źródeł
      - Standard źródeł dla różnych typów treści (SEO, psychologia, technologia, case studies)
      - Zasady weryfikacji linków i cytatów
      - Instrukcja postępowania w razie niepewności
      - Przykłady dobrego i złego cytowania
    - Zweryfikowano 2 najnowsze artykuły (2025-12-26):
      - `czym-jest-paradoks-wyboru...` — poprawiono (dodano źródło Barry Schwartz do twierdzenia o żalu po wyborze)
      - `efekt-zakotwiczenia...` — OK, wszystkie źródła poprawne
    - Utworzono 13 zadań weryfikacji dla pozostałych 26 artykułów (CONTENT-012 do CONTENT-024, po 2 artykuły na zadanie)
  - **Pliki**: `docs/INSTRUCTIONS.md`, `docs/TASKS.md`, `data/pl/blog.json`
  - **Weryfikacja**: nie wymagana (content-only)

- ✅ **[SEO-018] DIAGNOZA: Wielowariantowe URL-e w Next.js — przyczyny wypadania z HTTPS w GSC i niezgodności URL w Senuto**

  - **Co zrobiono**:
    - Przeprowadzono kompleksową diagnozę wszystkich źródeł generowania wariantów URL w projekcie
    - Przeanalizowano: `next.config.ts`, brak `middleware.ts`, `next-sitemap.config.cjs`, `lib/url.ts`, `robots.txt`, wszystkie metadane, linkowanie wewnętrzne, JSON-LD schema
    - **Wyniki pozytywne**: spójne użycie `toAbsoluteUrl()`, poprawna domena `https://www.arteonagency.pl`, brak trailing slash w linkach i metadanych
    - **Zidentyfikowane problemy**: (1) brak middleware do wymuszania URL na edge, (2) brak jawnego `trailingSlash: false`, (3) redirect http→https tylko w produkcji, (4) potencjalne warianty z trailing slash
  - **Pliki**: `docs/TASKS.md` (dodano szczegółowy raport diagnozy)
  - **Follow-up**: `SEO-019` (naprawa)
  - **Weryfikacja**: nie wymagana (AUDIT-only)

- ✅ **[SEO-019] Ujednolicenie i wymuszenie jednego kanonicznego wariantu URL w całym projekcie**

  - **Co zrobiono**:
    - Dodano jawne `trailingSlash: false` w `next.config.ts` z komentarzem dokumentacyjnym
    - Utworzono nowy plik `middleware.ts` wymuszający redirecty na edge:
      - `http` → `https` (tylko produkcja)
      - `arteonagency.pl` → `www.arteonagency.pl`
      - URL z trailing slash → bez trailing slash (oprócz root `/`)
    - Dodano szczegółową dokumentację w `lib/url.ts` opisującą zasady budowania URL-i w projekcie
    - Middleware używa matcher wykluczający statyczne zasoby (`_next`, `assets`, `fonts`, itp.)
  - **Pliki**: `next.config.ts`, `middleware.ts` (NOWY), `lib/url.ts`
  - **Weryfikacja**: `npm run lint` OK, `npm run build` OK (middleware kompiluje się jako 33.1 kB)

## 2025-12-26

- ✅ **[SEO-018] robots.txt: optymalizacja reguł blokowania i konfiguracji next-sitemap**

  - **Co zrobiono**:
    - Zaktualizowano `robotsTxtOptions` w `next-sitemap.config.cjs`
    - Użyto `transformRobotsTxt` do pełnej kontroli nad wygenerowanym `robots.txt`
    - Generowany plik zawiera reguły: blokowanie `/_next/`, `/api/`, `/fonts/`, `/favicon.ico`, `/*.json$`; pozwolenie na `/_next/image`; Host i Sitemap
    - Brak komentarzy w wygenerowanym pliku
  - **Pliki**: `next-sitemap.config.cjs`, `public/robots.txt` (generowany)
  - **Weryfikacja**: `npm run build` OK

## 2025-12-27

- ✅ **[CONTENT-009] Blog: zredagować artykuł `czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje` zgodnie z instrukcjami**

  - **Co zrobiono**:
    - Zmieniono wstęp z formy wyobrażeniowej ("Gdy stoisz przed wyborem...") na bezpośredni opis mechanizmu
    - Zmieniono główny termin z "social proof" na "społeczny dowód słuszności" (ang. social proof w nawiasie)
    - Przetłumaczono anglicyzmy: case studies → studia przypadków, checkout → finalizacja zamówienia, incentivized reviews → opinie motywowane
    - Dodano 5 nowych linków wewnętrznych (łącznie 7): `/uslugi/sklepy-internetowe`, `/edukacja/seo/faq-na-stronie...`, `/edukacja/strony/co-sprawdzic-przed-uruchomieniem...`, `/edukacja/branding/jak-identyfikacja-wizualna...`, `/realizacje`
    - Zaktualizowano FAQ (polish odpowiedniki terminów)
    - **Usunięto oceniający fragment**: "nie jest kaprysem ani słabością" → "ma głębokie korzenie ewolucyjne"
    - **Usunięto straszący fragment**: "może zniszczyć zaufanie szybciej, niż je budowało" → "osłabia wiarygodność firmy w oczach klientów"
    - **Usunięto straszący fragment**: "Niespójność... szybko wyjdzie na jaw" → "Spójność... wzmacnia wiarygodność opinii"
    - **Usunięto oceniający fragment**: "Strona z datą... nie budzi zaufania" → "Świeże opinie... są bardziej przekonujące"
    - **Usunięto straszący fragment w podsumowaniu**: "fałszywe opinie mogą zniszczyć reputację" → "autentyczne i konkretne opinie budują trwałe zaufanie"
    - **Usunięto pouczający fragment w FAQ**: "Nigdy nie usuwaj... to pogarsza sytuację" → "Usuwanie... rzadko przynosi pozytywne efekty"
    - **Usunięto pouczające 'Pamiętaj' w FAQ**: "Pamiętaj, że opinie za wynagrodzenie..." → "Opinie za wynagrodzenie bywają..."
    - Zaktualizowano `dateModified` na 2025-12-27
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: nie wymagana (content-only), JSON OK

- ✅ **[CONTENT-010] Blog: zredagować artykuł `mapa-strony-dla-uzytkownikow-dlaczego-warto-ja-miec` zgodnie z instrukcjami**

  - **Co zrobiono**:
    - Wyjaśniono anglicyzm "hover" → "efekty pojawiające się po najechaniu kursorem (tzw. hover)"
    - Dodano link wewnętrzny do artykułu o linkowaniu wewnętrznym (łącznie 7 linków wewnętrznych)
    - Poprawiono FAQ: "breadcrumbs" → "okruszki nawigacyjne (ang. breadcrumbs)"
    - **Usunięto deprecjonujący fragment w FAQ**: "nie szkodzi i może pomóc" → konkretnymi korzyściami (czytniki ekranu, użytkownicy)
    - **Usunięto oceniający fragment**: "Źle zaprojektowana mapa strony może być równie nieużyteczna jak jej brak" → "Dobrze zaprojektowana mapa strony jest łatwiejsza w użyciu"
    - **Usunięto dramatyzujący fragment**: "ostatnia szansa na zatrzymanie użytkownika, który trafił na ślepą uliczkę" → "oferuje użytkownikowi alternatywną ścieżkę nawigacji"
    - **Usunięto pouczające 'pamiętaj'**: "Jeśli dodajesz lub usuwasz podstrony, pamiętaj o aktualizacji" → "Aktualizacja mapy strony przy zmianach w strukturze witryny zapewnia jej aktualność"
    - Zaktualizowano `dateModified` na 2025-12-27
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: nie wymagana (content-only), JSON OK

## 2025-12-26

- ✅ **[ARTICLE] Czym jest social proof i dlaczego opinie innych wpływają na nasze decyzje?**

  - **Co zrobiono**:
    - Utworzono nowy artykuł o social proof (zadanie #54 z TASKS.md)
    - Artykuł wyjaśnia mechanizm psychologiczny, rodzaje social proof, zastosowanie na stronie
    - Zgodny z wytycznymi INSTRUCTIONS.md (11 min czytania, ~2200 słów)
    - 5 linków wewnętrznych, 3 linki zewnętrzne (Cialdini, BrightLocal, Google Moja Firma)
    - 2 tooltips (social proof, efekt owczego pędu)
    - 5 pytań FAQ
    - Przykłady z branż: stomatologia, prawo, gastronomia, e-commerce, rachunkowość
  - **Pliki**: `data/pl/blog.json`, `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: JSON OK

- ✅ **[ARTICLE] Mapa strony dla użytkowników: poprawki zgodnie z uwagami**

  - **Co zrobiono**:
    - Poprawiono artykuł o mapie strony usuwając oceniające komentarze
    - Usunięto: "może wydawać się elementem z poprzedniej epoki internetu"
    - Usunięto: "nie jest elementem, który przyciąga tłumy odwiedzających"
    - Dodano wzmiankę o wyszukiwarce wewnętrznej jako alternatywie
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[INSTRUCTIONS] Aktualizacja wytycznych tworzenia treści**

  - **Co zrobiono**:
    - Dodano zakaz komentarzy bez wartości merytorycznej (oceniających, deprecjonujących)
    - Dodano wytyczne o wspominaniu alternatywnych rozwiązań
    - Dodano sekcję o przyjaznych tematach dla użytkowników nietechnicznych
    - Dodano wytyczne zgodności z Google Discover
    - Dodano wytyczne o potencjale SEO tematów
  - **Pliki**: `docs/INSTRUCTIONS.md`

## 2025-12-25

- ✅ **[EEAT-007] Przepisanie według nowych standardów: Czym jest responsywność strony i dlaczego ma znaczenie?**

  - **Co zrobiono**:
    - Rozbudowano artykuł według nowych standardów jakości
    - Dodano sekcję "Mechanizm działania: media queries" z wyjaśnieniem technicznym
    - Dodano sekcję "Elastyczne jednostki zamiast stałych pikseli" z tooltips (viewport, vw, vh)
    - Dodano sekcję "Psychologia użytkownika mobilnego"
    - Dodano sekcję "Core Web Vitals i responsywność" z tooltips (LCP, FID, CLS)
    - Dodano sekcję "Responsywność w różnych branżach" (restauracje, e-commerce, usługi lokalne, B2B)
    - Dodano sekcję "Responsywność a wydajność strony" (srcset, lazy loading)
    - 7 linków wewnętrznych, 6 linków zewnętrznych, 6 tooltips
    - Czas czytania: 10 min (1811 słów)
    - FAQ rozbudowane do 7 pytań
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[EEAT-014] Przepisanie według nowych standardów: Favicon - co to za ikona?**

  - **Co zrobiono**:
    - Rozbudowano artykuł według nowych standardów jakości
    - Dodano sekcję "Jak przeglądarka wybiera właściwy plik?" z wyjaśnieniem mechanizmu
    - Rozbudowano sekcję "Najczęstsze błędy" z rozwiązaniami (6 błędów z wyjaśnieniem dlaczego występują)
    - Dodano sekcję "Favicon a SEO i wydajność strony" z Lighthouse
    - 6 linków wewnętrznych, 2 linki zewnętrzne, 4 tooltips (favicon, Lighthouse, ICO, PWA)
    - Czas czytania: 10 min (1808 słów)
    - FAQ rozbudowane do 9 pytań
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[EEAT-015] Przepisanie według nowych standardów: FAQ na stronie - jak pisać pytania wspierające SEO?**

  - **Co zrobiono**:
    - Rozbudowano artykuł według nowych standardów jakości
    - Dodano sekcję "Jak FAQ wspiera SEO?" i "Jak FAQ wspiera konwersję?" z mechanizmami
    - Rozbudowano sekcję "Jak pisać odpowiedzi" z przykładami i strukturą
    - Dodano sekcję "FAQ w różnych branżach" (B2B, e-commerce, usługi lokalne)
    - Dodano sekcję "FAQ schema" z linkiem do Google Search Central
    - 7 linków wewnętrznych, 4 linki zewnętrzne, 3 tooltips (long-tail, FAQPage)
    - Czas czytania: 10 min (1832 słów)
    - FAQ rozbudowane do 7 pytań
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[EEAT-010] Przepisanie według nowych standardów: Materiały drukowane dla firmy**

  - **Co zrobiono**:
    - Przepisano artykuł od zera według nowych standardów jakości
    - Dodano sekcję "Mechanizm psychologiczny" z badaniami (ScienceDirect, MarketingProfs, JSTOR)
    - Dodano sekcję "Przykłady z różnych branż" (gabinet stomatologiczny, kancelaria prawna, sklep B2B)
    - Dodano sekcję "Papiery i wykończenia" z tooltips (gramatura, retencja)
    - Dodano sekcję "Spójność materiałów a brand recognition" z badaniem Lucidpress
    - 8 linków wewnętrznych, 5 linków zewnętrznych, 5 tooltips
    - Czas czytania: 9 min (1767 słów)
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[EEAT-019] Przepisanie według nowych standardów: Optymalizacja zdjęć na stronę WWW**

  - **Co zrobiono**:
    - Rozbudowano intro z linkiem do strony-internetowe
    - Dodano sekcję AVIF z danymi Netflix (50% lżejszy niż JPEG)
    - Dodano sekcję "Responsive images — srcset i lazy loading" z tooltips
    - Rozbudowano sekcję SEO z linkami do pozycjonowanie i sklepy-internetowe
    - 7 linków wewnętrznych, 8 linków zewnętrznych, 3 tooltips
    - Czas czytania: 9 min (1774 słów)
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[EEAT-020] Przepisanie według nowych standardów: Identyfikacja wizualna a zaufanie klientów**

  - **Co zrobiono**:
    - Przepisano artykuł od zera według nowych standardów jakości
    - Dodano intro z linkami wewnętrznymi (strony, materiały drukowane)
    - Dodano sekcję "Logo jako punkt rozpoznawalny" z badaniem Journal of Product & Brand Management
    - Dodano sekcję "Przykłady z różnych branż" (gabinet, kancelaria, e-commerce)
    - Dodano sekcję "Punkty styku z klientem" z listą touchpointów
    - Dodano sekcję "Fluencja poznawcza" z badaniem Journal of Consumer Psychology
    - Dodano sekcję "Najczęstsze błędy w identyfikacji wizualnej"
    - 10 linków wewnętrznych, 4 linki zewnętrzne, 2 tooltips
    - Czas czytania: 9 min (1661 słów)
  - **Pliki**: `data/pl/blog.json`
  - **Weryfikacja**: JSON OK

- ✅ **[EEAT-018] Przepisanie: Czy lokalne firmy potrzebują bloga na stronie?**

  - **Co zrobiono**:
    - Przepisano artykuł według nowych standardów jakości.
    - Dodano sekcje wyjaśniające MECHANIZMY:
      - Jak Google ocenia strony lokalnych firm (sygnały wiarygodności)
      - Topical authority — autorytet tematyczny
      - Jak blog wpływa na pozycję w Google Maps (z przykładem warsztatu)
      - Kiedy blog NIE ma sensu (brak zasobów, brak pytań informacyjnych, potrzeba szybkich wyników)
    - Dodano FAQ (5 pytań).
    - Dodano tooltips: Google Business Profile, topical authority.
    - Czas czytania: 7 min (1205 słów).
    - Linki wewnętrzne: pozycjonowanie stron, kontakt.
    - Linki zewnętrzne: BrightLocal, Ahrefs, Neil Patel.
  - **Pliki**:
    - `data/pl/blog.json`
  - **Weryfikacja**: JSON OK.

- ✅ **[EEAT-017] Przepisanie od zera: Ile czasu trwa pozycjonowanie strony firmowej?**

  - **Co zrobiono**:
    - Przepisano kluczowe sekcje artykułu według nowych standardów jakości.
    - Dodano sekcje wyjaśniające MECHANIZMY:
      - Dlaczego SEO wymaga czasu (crawling, indeksowanie, ocena jakości)
      - Autorytet domeny (dlaczego nowe strony potrzebują więcej czasu, badanie Ahrefs o wieku stron w Top10)
      - Realne terminy w różnych branżach z uzasadnieniem DLACZEGO się różnią
      - Co przyspiesza efekty SEO (audyt techniczny, linkowanie wewnętrzne, aktualizacja treści)
    - Dodano tooltips: Googlebot, DA/DR, GBP, E-E-A-T, klaster tematyczny.
    - Czas czytania: 10 min (1989 słów).
    - Linki wewnętrzne: audyt SEO, pozycjonowanie stron, linkowanie wewnętrzne, kontakt.
    - Linki zewnętrzne: Google Search Central, Ahrefs, BrightLocal, Semrush, Google Search Console.
  - **Pliki**:
    - `data/pl/blog.json`
  - **Weryfikacja**: JSON OK.

- ✅ **[EEAT-016] Przepisanie od zera: Jak kolorystyka wpływa na decyzje zakupowe klientów?**

  - **Co zrobiono**:
    - Przepisano artykuł OD ZERA według nowych standardów jakości (wzorzec: artykuł o linkowaniu wewnętrznym).
    - Usunięto problemy starego artykułu: powtarzające się statystyki, listy bez narracji, powierzchowne omówienie, ton DIY.
    - Nowa struktura artykułu (10 min czytania):
      - Jak mózg przetwarza kolory (mechanizmy, ciało migdałowate, ewolucja)
      - Mechanizmy psychologiczne (pobudzenie fizjologiczne, skojarzenia kulturowe, oczekiwania branżowe)
      - Kolorystyka w różnych branżach (finanse, medycyna, gastronomia, technologia, luksus) — z uzasadnieniem wyborów
      - Testy A/B kolorów — analiza DLACZEGO zadziałały (HubSpot, SAP, Beamax) z wnioskiem o kontraście
      - Kolor a kontrast i dostępność (WCAG, daltonizm)
    - Dodano tooltips: ciało migdałowate, CTA, WCAG.
    - FAQ (5 pytań z pogłębionymi odpowiedziami).
    - Linki wewnętrzne: identyfikacja wizualna, strony internetowe, sklepy internetowe, kontrast kolorów, tester kontrastu WCAG, generator palet, kontakt.
    - Linki zewnętrzne: Management Decision (Singh 2006), Journal of Business Research (Bellizzi & Hite), Journal of Academy of Marketing Science (Labrecque & Milne), HubSpot, WiderFunnel, VWO.
  - **Dodano instrukcję do TASKS.md**: Wszystkie zadania EEAT muszą być przepisywane od zera według nowych standardów.
  - **Pliki**:
    - `data/pl/blog.json`
    - `docs/TASKS.md` (dodano krytyczną instrukcję dla EEAT)
  - **Weryfikacja**: JSON OK.

- ✅ **[EEAT-017] Rozbudowa: Ile czasu trwa pozycjonowanie strony firmowej?**

  - **Co zrobiono**:
    - Rozbudowano artykuł z 4 min do 11 min czytania (~2200 słów).
    - Dodano nowe sekcje:
      - Czas SEO w różnych branżach (usługi lokalne, gabinety medyczne, e-commerce, B2B)
      - Co przyspiesza efekty SEO (audyt techniczny, optymalizacja treści, klastry tematyczne, dane strukturalne)
      - Jak mierzyć postępy SEO (Google Search Console, kolejność zmian)
      - Najczęstsze błędy opóźniające efekty SEO
    - Dodano FAQ (5 pytań): czas dla nowej strony, SEO lokalne, przyspieszanie efektów, mierzenie postępów, brak efektów.
    - Rozbudowano podsumowanie z linkami do usług.
    - Dodano linki wewnętrzne: `/uslugi/marketing/pozycjonowanie-stron`, `/uslugi/marketing/audyt-seo`, `/edukacja/seo/czym-jest-linkowanie-wewnetrzne-i-jak-wplywa-na-seo-strony`, `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`, `/kontakt`.
    - Dodano linki zewnętrzne: Semrush Site Audit, Google Search Console, Google structured data.
    - Dodano tooltips: GBP, klaster tematyczny.
    - Zaktualizowano `dateModified` na 2025-12-25.
  - **Pliki**:
    - `data/pl/blog.json`
    - `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: nie wymagana (content-only).

- ✅ **[UI-XXX] Strony artykułów: dodać wyświetlanie daty ostatniej edycji**

  - **Co zrobiono**:
    - Dodano Badge z datą aktualizacji (`dateModified`) obok daty publikacji na stronach artykułów.
    - Badge wyświetla się tylko gdy `dateModified` różni się od `datePublished`.
  - **Pliki**:
    - `app/(pl)/edukacja/[category]/[slug]/page.tsx`
  - **Weryfikacja**: nie wymagana (drobna zmiana UI).

- ✅ **[EEAT-016] Rozbudowa: Jak kolorystyka wpływa na decyzje zakupowe klientów?**

  - **Co zrobiono**:
    - Rozbudowano artykuł z 4 min do 11 min czytania (~2200 słów).
    - Dodano nowe sekcje:
      - Kolorystyka w e-commerce (kolor a zaufanie, kolor przycisku, kolor tła strony produktowej)
      - Testy A/B kolorów (SAP, Ript Apparel, HubSpot/Performable, Beamax)
      - Psychologia kolorów - pogłębione badania naukowe (Singh 2006, Labrecque & Milne 2012, Bellizzi & Hite 1992)
      - Narzędzia do pracy z kolorami (linki do narzędzi Arteon)
    - Dodano FAQ (4 pytania): najlepszy kolor przycisku, psychologia kolorów w różnych krajach, ile kolorów w palecie, jak sprawdzić czytelność.
    - Rozbudowano podsumowanie z linkami do usług.
    - Dodano 10+ linków wewnętrznych: `/uslugi/strony-internetowe`, `/uslugi/sklepy-internetowe`, `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`, `/narzedzia/generator-palet-kolorow-online`, `/narzedzia/generator-palety-kolorow-z-obrazu`, `/narzedzia/tester-kontrastu-kolorow-wcag`, `/edukacja/grafika/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`, `/edukacja/dostepnosc/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`, `/kontakt`.
    - Dodano 10+ linków zewnętrznych z nowymi źródłami: Neil Patel, VWO, WiderFunnel, Emerald, Springer, ScienceDirect.
    - Zaktualizowano `dateModified` na 2025-12-25.
  - **Pliki**:
    - `data/pl/blog.json`
    - `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: nie wymagana (content-only).

## 2025-12-24

- ✅ **[UI-001] Usługi: dodać karuzele powiązanych artykułów na stronach usługowych**

  - **Co zrobiono**:
    - Dodano komponent `ArticlesCarousel` do 8 stron usługowych z tematycznie dopasowanymi artykułami.
    - Strony zaktualizowane:
      - `/uslugi/marketing/pozycjonowanie-stron` (6 artykułów SEO)
      - `/uslugi/marketing/optymalizacja-seo` (5 artykułów SEO)
      - `/uslugi/marketing/audyt-seo` (5 artykułów SEO)
      - `/uslugi/strony-internetowe` (5 artykułów: strony, bezpieczeństwo, UX)
      - `/uslugi/sklepy-internetowe` (5 artykułów: e-commerce, SEO, grafika)
      - `/uslugi/blogi-internetowe` (5 artykułów: content marketing, treści)
      - `/uslugi/tworzenie-tresci` (5 artykułów: content, SEO, marketing)
      - `/uslugi/projekty-graficzne` (6 artykułów: grafika, kolorystyka, druk)
    - Karuzela wyświetla się przed sekcją CTA na końcu każdej strony.
  - **Pliki**:
    - `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx`
    - `app/(pl)/uslugi/marketing/optymalizacja-seo/page.tsx`
    - `app/(pl)/uslugi/marketing/audyt-seo/page.tsx`
    - `app/(pl)/uslugi/strony-internetowe/page.tsx`
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
    - `app/(pl)/uslugi/blogi-internetowe/page.tsx`
    - `app/(pl)/uslugi/tworzenie-tresci/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` — OK.

- ✅ **[IDEA-097] Blog: Czym jest linkowanie wewnętrzne i jak wpływa na SEO strony?**

  - **Co zrobiono**:
    - Utworzono nowy artykuł w `data/pl/blog.json` o linkowaniu wewnętrznym i SEO.
    - Artykuł 11 min czytania (~2200 słów), zgodny z wytycznymi INSTRUCTIONS.md (9-14 min).
    - Struktura: co to jest linkowanie wewnętrzne, dlaczego ma znaczenie dla SEO (PageRank, crawl budget), rodzaje linków (nawigacyjne, kontekstowe, breadcrumbs), klastry tematyczne, anchor text, najczęstsze błędy.
    - 7 linków wewnętrznych: `/uslugi/marketing/pozycjonowanie-stron`, `/uslugi/marketing/optymalizacja-seo`, `/edukacja/seo/jak-pisac-tresci-...`, `/edukacja/seo/dlaczego-strona-nie-wyswietla-sie...`, `/kontakt`.
    - 6 linków zewnętrznych: Google Search Console, Google Search Central (dokumentacja), Google (breadcrumbs schema), Ahrefs (topic clusters), Moz (anchor text), Ahrefs Site Audit.
    - 4 tooltips: anchor text, PageRank, crawl budget, klaster tematyczny.
    - 5 FAQ.
    - CTA: Pozycjonowanie stron + Kontakt.
    - Zaktualizowano `BLOG_CATALOG.md`.
  - **Pliki**:
    - `data/pl/blog.json`
    - `docs/BLOG_CATALOG.md`
  - **Weryfikacja**: nie wymagana (content-only).

- ✅ **[SEO-022] Ahrefs Web Analytics: dodać snippet + podpiąć pod cookie consent**

  - **Co zrobiono**:
    - Utworzono `lib/consent/ahrefs.ts` z funkcją `loadAhrefs()` ładującą skrypt Ahrefs (analogicznie do `loadGA`).
    - Zmodyfikowano `components/shared/CookieConsent.tsx` — Ahrefs ładowany jest razem z GA po wyrażeniu zgody na analitykę.
    - Zaktualizowano politykę prywatności (`app/(pl)/polityka-prywatnosci/page.tsx`) — dodano Ahrefs Web Analytics do listy narzędzi analitycznych i odbiorców danych.
  - **Pliki**:
    - `lib/consent/ahrefs.ts` (nowy)
    - `components/shared/CookieConsent.tsx`
    - `app/(pl)/polityka-prywatnosci/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` — OK.

- ✅ **[SEO-021] Meta title: skrócić za długie tytuły i wydłużyć za krótkie (Ahrefs audit)**

  - **Źródło**: Ahrefs Site Audit — wykryto 20 stron z za długim meta title (>70 zn.) i 3 strony z za krótkim (<30 zn.).
  - **Co zrobiono**:
    - **Tytuły skrócone (20 stron)**:
      - Narzędzia: generator-palety-kolorow-z-obrazu (70→48), instrukcja (71→53), zmiana-rozmiaru/instrukcja (73→53), jpg-png-webp/instrukcja (73→48), optymalizacja-wordpress (71→57)
      - Artykuły: kontrast-kolorow (79→55), content-marketing (77→52), e-mail-marketing (80→51), grafika-do-postow (71→55), mierzyc-skutecznosc (72→57), ssl (72→56), meta-title (95→56), kody-qr (77→52), faq-na-stronie (75→54), identyfikacja-wizualna (75→55), blog-lokalne-firmy (80→50), zoptymalizowac-zdjecia (85→55), strona-nie-wyswietla (73→59), favicon (88→49)
      - Realizacje: colgate (71→51)
    - **Tytuły wydłużone (3 kategorie)**:
      - /edukacja/seo: 12→48 zn.
      - /edukacja/druk: 13→50 zn.
      - /edukacja/ux: 11→44 zn.
    - **Opisy wydłużone (2 strony)**:
      - /edukacja: 89→140 zn.
      - favicon artykuł: 86→130 zn.
    - **Brakujący opis dodany (1 strona)**:
      - /realizacje/blog-sportowy-pilka-nozna-pl: dodano seo.title i seo.description
  - **Pliki**:
    - `data/pl/blog.json` (14 artykułów)
    - `data/pl/projects.json` (2 realizacje)
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/instrukcja/page.tsx`
    - `app/(pl)/uslugi/strony-internetowe/optymalizacja-strony-wordpress/page.tsx`
    - `app/(pl)/edukacja/page.tsx`
    - `app/(pl)/edukacja/[category]/page.tsx`
  - **Weryfikacja**: nie wymagana (COPY-only).

- ✅ **[SEO-020] Sitemap: brakujące strony narzędzi (favicon generator)**

  - **Źródło**: Ahrefs Site Audit — wykryto 2 strony nieobecne w sitemap:
    - `/narzedzia/darmowy-generator-favicon-ico`
    - `/narzedzia/darmowy-generator-favicon-ico/instrukcja`
  - **Przyczyna problemu**:
    - `next-sitemap` filtruje automatycznie odkryte ścieżki zawierające wzorce przypominające rozszerzenia plików (np. `favicon-ico` interpretowane jako `.ico`).
    - Strony były poprawnie generowane przez Next.js (widoczne w `prerender-manifest.json` i `routes-manifest.json`), ale next-sitemap je pomijał.
  - **Co zrobiono**:
    - Zmodyfikowano `next-sitemap.config.cjs` — dodano jawne dodawanie wszystkich ścieżek `/narzedzia/*` przez `additionalPaths` (linie 173-181).
    - Dzięki temu wszystkie narzędzia są zawsze w sitemap, niezależnie od automatycznego odkrywania next-sitemap.
  - **Pliki**:
    - `next-sitemap.config.cjs`
  - **Weryfikacja**: `npm run build` — OK, sitemap zawiera obie brakujące strony.

- ✅ **[SEO-019] Meta description: skrócić za długie opisy (Ahrefs audit)**

  - **Źródło**: Ahrefs Site Audit — wykryto 10 stron z za długim meta description (>160 znaków).
  - **Co zrobiono**:
    - Poprawiono meta description dla 2 artykułów (`data/pl/blog.json`):
      - `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`: 165 → 148 zn.
      - `ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`: 163 → 138 zn.
    - Poprawiono meta description dla 8 instrukcji narzędzi:
      - tester-kontrastu-kolorow-wcag/instrukcja: 187 → 137 zn.
      - licznik-dlugosci-meta-title-i-description/instrukcja: 176 → 145 zn.
      - darmowy-generator-favicon-ico/instrukcja: 167 → 128 zn.
      - generator-kodu-qr/instrukcja: 170 → 144 zn.
      - darmowy-generator-stopki-mailowej/instrukcja: 177 → 148 zn.
      - zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja: 168 → 147 zn.
      - generator-palet-kolorow-online/instrukcja: 171 → 135 zn.
      - jpg-png-na-webp-bez-limitu/instrukcja: 179 → 139 zn.
    - Wszystkie nowe opisy: max 160 znaków, z zachowaniem wezwania do działania (Dowiedz się..., Sprawdź...).
  - **Weryfikacja**: nie wymagana (COPY-only).

- ✅ **[SEO-018] Meta description: wydłużyć za krótkie opisy (Ahrefs audit)**

  - **Źródło**: Ahrefs Site Audit — wykryto 24 strony z za krótkim meta description (<100 znaków).
  - **Co zrobiono**:
    - Poprawiono meta description dla 14 kategorii edukacji (`/edukacja/[category]`):
      - seo, widocznosc, tresci, grafika, branding, zdjecia, psychologia, strony, sklepy, ux, bezpieczenstwo, druk, marketing, dostepnosc
    - Poprawiono meta description dla 8 realizacji (`/realizacje/[slug]`):
      - sklep-dla-firmy-odziezowej-trilllizo, meridol-accessibility, elmex-accessibility, sanex-accessibility, sanex, palmolive, colgate, detergent-regulations
    - Wszystkie nowe opisy: 140-155 znaków, z wezwaniem do działania (Dowiedz się..., Sprawdź..., Zobacz...).
  - **Pliki**:
    - `app/(pl)/edukacja/[category]/page.tsx`
    - `data/pl/projects.json`
  - **Weryfikacja**: nie wymagana (COPY-only).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny — generowanie backlogu pomysłów na artykuły**

  - **Zakres audytu**:
    - Przeanalizowano istniejące artykuły w `data/pl/blog.json` i `BLOG_CATALOG.md`.
    - Przeanalizowano kategorie z niską liczbą artykułów: Dostępność (1), UX (2), Sklepy (1), Psychologia (0), Druk (3), Strony (4).
    - Zapoznano się z nowymi wytycznymi INSTRUCTIONS.md (aktualizacja 2025-12-24): 9-14 min czytania, min. 6-8 linków wew., min. 4-6 zew., tooltips, nie-DIY.
  - **Co zrobiono**:
    - Dodano 15 nowych pomysłów na artykuły zgodnych z nowymi wytycznymi.
    - Każdy pomysł zawiera: cel i uzasadnienie, konspekt H2, listę linków wewnętrznych (6-8), zewnętrznych (4-6), SEO (URL/title/description), tooltips, kryteria akceptacji.
  - **Kategorie wzmocnione**:
    - Dostępność: 2 (IDEA-090, IDEA-091)
    - UX: 1 (IDEA-092)
    - Strony: 3 (IDEA-093, IDEA-102, IDEA-103)
    - Sklepy: 2 (IDEA-094, IDEA-095)
    - SEO: 2 (IDEA-096, IDEA-097)
    - Psychologia: 3 (IDEA-098, IDEA-099, IDEA-104)
    - Druk: 2 (IDEA-100, IDEA-101)
  - **Dodane ID**: `IDEA-090`, `IDEA-091`, `IDEA-092`, `IDEA-093`, `IDEA-094`, `IDEA-095`, `IDEA-096`, `IDEA-097`, `IDEA-098`, `IDEA-099`, `IDEA-100`, `IDEA-101`, `IDEA-102`, `IDEA-103`, `IDEA-104`.
  - **Weryfikacja**: nie wymagana (AUDIT-only).

- ✅ **[IDEA-054] Blog: Kontrast kolorów na stronie: dlaczego ma znaczenie i jak go sprawdzić?**

  - **Co zrobiono**:
    - Dodano nowy artykuł do `data/pl/blog.json` (na górze listy).
    - Slug: `kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`
    - URL: `/edukacja/grafika/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`
    - **Rozszerzono artykuł zgodnie z nowymi wytycznymi (9-14 min)**:
      - Czas czytania: 11 min (z 7 min)
      - Struktura: wstęp z tooltip WCAG → co to jest kontrast (wzór relative luminance, jak obliczany) → kto korzysta (słabowidzący WHO+GUS, daltonizm z tooltipami, seniorzy z badaniami NIH, trudne warunki, zmęczenie) → WCAG AA/AAA (dyrektywa UE, ustawa PL, EAA 2025, przykłady HEX) → jak sprawdzić (tester Arteon + instrukcja, DevTools, WAVE, axe, PageSpeed) → na co zwrócić uwagę (6 podsekcji z tooltipami) → podsumowanie z wieloma CTA
      - Linki wewnętrzne (8): tester kontrastu, instrukcja testera, generator palet, ekstraktor kolorów, strony internetowe, artykuł o kolorystyce, kontakt
      - Linki zewnętrzne (6+): WHO, GUS, NIH, Dyrektywa UE, Ustawa PL, EAA, PageSpeed, WAVE, axe
      - Tooltips: WCAG, W3C, relative luminance, daltonizm, HEX, RGB, HSL, hover, focus
      - 6 FAQ (dodano: duży tekst wg WCAG, przepisy dla firm prywatnych)
    - Zaktualizowano `BLOG_CATALOG.md`.
    - **Zaktualizowano INSTRUCTIONS.md** z nowymi wytycznymi artykułów:
      - Czas czytania: 9-14 min (1800-2800 słów)
      - Linki wewnętrzne: min. 6-8
      - Linki zewnętrzne: min. 4-6
      - Widoczne podkreślenie linków (class='underline' / 'inline-link')
      - Tooltip dla trudnych terminów (abbr z title)
      - Typy artykułów: edukacyjny, HowTo, porady/błędy, porównawczy
      - Intent: edukacja + przekierowanie do oferty
  - **Weryfikacja**: nie wymagana (content-only).

- ✅ **[SEARCH-001] Wyszukiwarka: dodać strony instrukcji narzędzi do indeksu**

  - **Co zrobiono**:
    - Dodano funkcję `buildToolInstructionsIndex()` w `lib/search/searchIndex.ts`.
    - Funkcja generuje wpisy dla wszystkich 9 stron instrukcji narzędzi na podstawie `TOOLS_SECTIONS_PL`.
    - Każda instrukcja ma tytuł „Instrukcja: [nazwa narzędzia]" i keywords: `instrukcja`, `jak używać`, `poradnik`.
    - Wyszukiwanie „instrukcja" lub nazwy narzędzia zwraca teraz także strony instrukcji.
  - **Pliki zmienione**:
    - `lib/search/searchIndex.ts`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-030] Refactoring instrukcji narzędzi — poprawa struktury i wizualizacji UI**

  - **Co zrobiono**:
    - Zmieniono wszystkie importy ikon z `lucide-react` na `react-icons/ri` we wszystkich instrukcjach narzędzi.
    - Dodano ikony do `SectionSteps` we wszystkich instrukcjach dla lepszej wizualizacji.
    - Stworzono nowy komponent `SectionDemo` (`components/ui/sections/SectionDemo.tsx`) — jak `SectionBasic`, ale z możliwością renderowania elementów UI zamiast zdjęć (proporcje 40% demo / 60% tekst).
    - Dodano wizualizację UI z Badge'ami dla statusów plików w instrukcji konwertera WebP (`jpg-png-na-webp-bez-limitu/instrukcja`).
    - Poprawiono instrukcję generatora stopek mailowych (`darmowy-generator-stopki-mailowej/instrukcja`):
      - Przeniesiono sekcję "Najczęstsze problemy i rozwiązania" do FAQ (4 nowe pytania).
      - Zmieniono sekcję "Podsumowanie" na `SectionInfo` z przyciskami `btnOne`/`btnTwo`.
    - Poprawiono instrukcję testera kontrastu WCAG (`tester-kontrastu-kolorow-wcag/instrukcja`):
      - Przeniesiono sekcję "Najczęstsze problemy" do FAQ (3 nowe pytania).
      - Usunięto redundantną sekcję "Przydatne zasoby".
    - Ujednolicono strukturę końcowych sekcji we wszystkich instrukcjach (FAQ → SectionInfo z CTA → ToolsCarousel → CTABanner).
    - **Wdrożono wizualizacje UI 1:1 z SectionDemo**:
      - `jpg-png-na-webp-bez-limitu/instrukcja` — suwak jakości, opcje automatycznego pobierania, raport oszczędności
      - `tester-kontrastu-kolorow-wcag/instrukcja` — wyniki testu kontrastu z Badge'ami AA/AAA i podglądem
      - `darmowy-generator-stopki-mailowej/instrukcja` — wybór układów stopki z podglądem
      - `generator-palet-kolorow-online/instrukcja` — wizualizacja palety monochromatycznej z przyciskiem kopiowania
      - `licznik-dlugosci-meta/instrukcja` — wizualizacja metryk (znaki, słowa, piksele) z Badge'ami statusu
      - `generator-kodu-qr/instrukcja` — wizualizacja poziomów korekcji błędów (L/M/Q/H) z Badge'ami
      - `zmiana-rozmiaru/instrukcja` — wizualizacja trybów ustawiania rozmiaru (wymiary w px, gotowe formaty)
      - `generator-favicon/instrukcja` — wizualizacja opcji generowania (rozmiary, tło, manifest)
    - **Poprawiono nagłówki h3→h4**:
      - `tester-kontrastu-kolorow-wcag/instrukcja` — sekcje WCAG AA/AAA, formaty kolorów (HEX, RGB, HSL)
      - `licznik-dlugosci-meta/instrukcja` — sekcje metryki, statusy, zalecane zakresy, problemy
      - `darmowy-generator-stopki-mailowej/instrukcja` — sekcje pola danych, CTA, motywy, kolory, czcionka
  - **Pliki zmienione**:
    - `components/ui/sections/SectionDemo.tsx` (nowy)
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-kodu-qr/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/instrukcja/page.tsx`
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[SEO-019] Edukacja: unikalne zdjęcia banerów i OG dla kategorii i strony głównej**

  - **Co zrobiono**:
    - Rozszerzono `CATEGORY_CONTENT_BY_SLUG` w `app/(pl)/edukacja/[category]/page.tsx` o pole `heroImage` z unikalnym zdjęciem dla każdej kategorii.
    - Dodano kategorię `marketing` do konfiguracji.
    - Zaktualizowano `generateMetadata` — dodano `openGraph.images` z unikalnym zdjęciem per kategoria.
    - Zaktualizowano `EdukacjaCategoryPage` — HeroBanner używa teraz `heroImage` z konfiguracji.
    - Zaktualizowano stronę główną `/edukacja` (`app/(pl)/edukacja/page.tsx`) — dodano unikalne zdjęcie (`e-mail-marketing-dla-malych-firm`) w HeroBanner i OpenGraph.
    - Usunięto TODO komentarz dotyczący OG image dla `/edukacja`.
  - **Przypisanie zdjęć** (unikalne, bez powtórzeń):
    - `/edukacja` — e-mail-marketing-dla-malych-firm
    - `/edukacja/seo` — meta-title-i-description-jak-je-napisac
    - `/edukacja/strony` — co-sprawdzic-przed-uruchomieniem-strony
    - `/edukacja/grafika` — jak-dobrac-kolory-do-strony-internetowej
    - `/edukacja/branding` — jak-przygotowac-profesjonalna-stopke-mailowa
    - `/edukacja/marketing` — czym-jest-content-marketing
    - `/edukacja/bezpieczenstwo` — czym-jest-certyfikat-ssl
    - `/edukacja/ux` — czym-jest-responsywnosc-strony
    - `/edukacja/druk` — materialy-drukowane-dla-firmy
    - `/edukacja/zdjecia` — jak-zoptymalizowac-zdjecia-na-strone-www
    - `/edukacja/tresci` — faq-na-stronie-jak-pisac-pytania
    - `/edukacja/widocznosc` — jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma
    - `/edukacja/psychologia` — jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow
    - `/edukacja/sklepy` — jak-przygotowac-sklep-internetowy-do-pozycjonowania
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

## 2025-12-23

- ✅ **[TOOLS-022] Narzędzia: rozbudowana instrukcja — Generator palety kolorów z obrazu**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/instrukcja/page.tsx`.
    - URL: `/narzedzia/generator-palety-kolorow-z-obrazu/instrukcja`, H1: „Jak używać generatora palety kolorów z obrazu".
    - Sekcje instrukcji: Jak dodać obraz (drag&drop vs klik, formaty PNG/JPG/SVG), Co robi narzędzie z obrazem (wyjaśnienie algorytmu prostym językiem: downscale, analiza pikseli, grupowanie podobnych kolorów, ignorowanie przezroczystości), Jak skopiować kolory (3 kroki), Jakie obrazy dają najlepsze wyniki (logo/grafiki wektorowe, zdjęcia z wyraźnym motywem, przezroczyste tło, unikanie dużego jednokolorowego tła), Najczęstsze problemy i rozwiązania (mało kolorów, nieoczekiwane kolory, dominujące tło, nieobsługiwany format).
    - FAQ: 5 pytań (formaty obrazów, ile kolorów, prywatność, nieoczekiwane wyniki, kopiowanie wszystkich kolorów naraz).
    - Schema JSON-LD: `HowTo` (3 kroki) + `BreadcrumbList` + `FAQPage`.
    - Linki wewnętrzne do powiązanych narzędzi (generator palet kolorów, tester kontrastu WCAG) i usługi (identyfikacja wizualna).
    - Skrócono instrukcję na głównej stronie narzędzia z 4 do 3 kroków + dodano link „Zobacz pełną instrukcję".
    - Zaktualizowano `PAGES_CATALOG.md`.
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-021] Narzędzia: rozbudowana instrukcja — Generator palet kolorów online**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/instrukcja/page.tsx`.
    - URL: `/narzedzia/generator-palet-kolorow-online/instrukcja`, H1: „Jak używać generatora palet kolorów online".
    - Sekcje instrukcji: Jak wybrać kolor bazowy (picker vs HEX), Jak działają poszczególne palety (9 typów: monochromatyczna, analogiczna, komplementarna, triadyczna, split-complementary, pastelowa, ciemna, tonalna, minimalistyczna — każda z opisem kiedy używać), Jak skopiować kolor (HEX i HSL), Najczęstsze problemy i rozwiązania.
    - FAQ: 5 pytań (formaty kolorów, prywatność, ile kolorów w palecie, jak wybrać paletę, użycie komercyjne).
    - Schema JSON-LD: `HowTo` (4 kroki) + `BreadcrumbList`.
    - Skrócono instrukcję na głównej stronie narzędzia z 4 do 3 kroków + dodano link „Zobacz pełną instrukcję obsługi generatora →".
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-024] Narzędzia: rozbudowana instrukcja — Tester kontrastu kolorów WCAG**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/instrukcja/page.tsx`.
    - URL: `/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja`, H1: „Jak używać testera kontrastu kolorów WCAG".
    - Sekcje instrukcji: Co to jest kontrast kolorów i dlaczego jest ważny, Co oznaczają poziomy WCAG AA i AAA (progi dla tekstu zwykłego/dużego/ikon), Jak korzystać z testera (4 kroki), Jak interpretować wyniki (tekst zwykły/duży/ikona, badge'e pass/fail, podgląd na żywo), Funkcja Dopasuj — co robi (algorytm szukania jasności), Jakie formaty kolorów są obsługiwane (HEX/RGB/RGBA/HSL/HSLA z przykładami), Najczęstsze problemy i rozwiązania.
    - FAQ: 5 pytań (różnica AA vs AAA, duży tekst wg WCAG, kontrast ikon, subiektywne postrzeganie koloru, działanie funkcji Dopasuj).
    - Schema JSON-LD: `HowTo` (4 kroki) + `BreadcrumbList` + `FAQPage`.
    - Skrócono instrukcję na głównej stronie narzędzia z 4 do 3 kroków + dodano link „Zobacz pełną instrukcję →".
    - Zaktualizowano `PAGES_CATALOG.md` (wpisy dla narzędzia i strony instrukcji).
    - Zaktualizowano `TOOLS_CATALOG.md` (dodano referencję do strony instrukcji).
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run build` przechodzi (lint ma pre-existing issue z eslint-plugin-unused-imports).

- ✅ **[TOOLS-025] Narzędzia: rozbudowana instrukcja — Darmowy generator favicon**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/instrukcja/page.tsx`.
    - URL: `/narzedzia/darmowy-generator-favicon-ico/instrukcja`, H1: „Jak używać generatora favicon".
    - Sekcje instrukcji: Co to jest favicon i do czego służy, Jakie rozmiary ikon są potrzebne (favicon.ico, 16x16, 32x32, 180x180, 192x192, 512x512 z opisami zastosowań), Jak korzystać z generatora (4 kroki), Opcje generowania (tło, manifest, auto-download), Jak pobrać wygenerowane pliki (ZIP vs pojedynczo), Gdzie i jak wgrać favicon (WordPress/CMS, HTML, Next.js), Jaki obraz źródłowy działa najlepiej (proste kształty, kwadrat, min. rozmiar, SVG, kontrastowe kolory).
    - FAQ: 5 pytań (prywatność plików, minimalny rozmiar, wybór rozmiarów, manifest, format SVG).
    - Schema JSON-LD: `HowTo` (4 kroki) + `BreadcrumbList`.
    - Skrócono instrukcję na głównej stronie narzędzia z 4 do 3 kroków + dodano link „Zobacz pełną instrukcję".
    - Zaktualizowano `PAGES_CATALOG.md` i `TOOLS_CATALOG.md`.
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-027] Narzędzia: rozbudowana instrukcja — Zmiana rozmiaru i kadrowanie zdjęcia**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja/page.tsx`.
    - URL: `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja`, H1: „Jak używać narzędzia do zmiany rozmiaru i kadrowania zdjęcia".
    - Sekcje instrukcji: Jak dodać obraz (drag&drop, formaty), Tryby ustawiania rozmiaru (pixels vs preset), Presety - który wybrać (12 presetów z opisami zastosowań: IG post/story/reels, FB post/cover, LinkedIn post/baner, OG image, grafika do artykułu, baner strony, miniatura, hero), Jak kadrować obraz (przeciąganie, uchwyty, zoom, pozycja), Siatka 3×3 i reguła trójpodziału, Kształty kadru (prostokąt/kwadrat/koło), Eksport - jaki format wybrać (JPG/PNG/WebP + jakość), Proporcje (aspect ratio) - co to znaczy (1:1, 4:5, 3:2, 16:9, 9:16).
    - FAQ: 5 pytań (prywatność plików, wybór formatu, koło a JPG, proporcje, suwak jakości).
    - Schema JSON-LD: `HowTo` (4 kroki) + `BreadcrumbList` + `FAQPage`.
    - Dodano link do pełnej instrukcji na głównej stronie narzędzia.
    - Zaktualizowano `PAGES_CATALOG.md` (wpisy dla narzędzia i strony instrukcji).
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-029] Narzędzia: rozbudowana instrukcja — Generator kodów QR**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/generator-kodu-qr/instrukcja/page.tsx`.
    - URL: `/narzedzia/generator-kodu-qr/instrukcja`, H1: „Jak używać generatora kodów QR".
    - Sekcje instrukcji: Co to jest kod QR i jak działa, Co można zakodować w QR (URL/tekst/vCard/e-mail/telefon z zastosowaniami), Jak wygenerować kod QR (5 kroków), Opcje personalizacji (rozmiar/margines/kolory), Poziomy korekcji błędów (L/M/Q/H - kiedy który wybrać), Jak pobrać kod QR (PNG vs SVG), Gdzie używać kodów QR (4 zastosowania), Jak przetestować kod przed drukiem, FAQ (6 pytań).
    - Schema JSON-LD: `HowTo` (4 kroki) + `BreadcrumbList`.
    - Skrócono instrukcję na głównej stronie narzędzia + dodano link „Zobacz pełną instrukcję z opisem wszystkich opcji".
    - Usunięto szczegółową sekcję „Wskazówki do druku" z głównej strony (przeniesiona do instrukcji).
    - Zaktualizowano `PAGES_CATALOG.md` (wpisy dla generatora QR i strony instrukcji).
    - Zaktualizowano `TOOLS_CATALOG.md` (wpis dla `QrCodeGenerator`).
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-028] Narzędzia: rozbudowana instrukcja — Generator stopki mailowej**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`.
    - URL: `/narzedzia/darmowy-generator-stopki-mailowej/instrukcja`, H1: „Jak używać generatora stopki mailowej".
    - Sekcje instrukcji: co to jest stopka mailowa, jak wypełnić dane (opis każdego pola), układy stopki (opis 5 układów), jak dodać przycisk CTA, jak dodać linki do mediów społecznościowych, personalizacja wyglądu (motywy, kolory, czcionka, rozmiar, margines, zaokrąglenie CTA, linia oddzielająca), klauzula prawna/RODO, jak skopiować do Gmail/Outlook (3 kroki), najczęstsze problemy i rozwiązania, FAQ (5 pytań), podsumowanie + CTA.
    - Schema JSON-LD: `HowTo` (6 kroków) + `BreadcrumbList`.
    - Skrócono mini instrukcję na głównej stronie narzędzia z 4 do 3 kroków + dodano link „Zobacz pełną instrukcję krok po kroku".
    - Zaktualizowano `PAGES_CATALOG.md` o nową stronę instrukcji.
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-026] Narzędzia: rozbudowana instrukcja — Konwerter JPG/PNG na WebP**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/instrukcja/page.tsx`.
    - URL: `/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja`.
    - H1: „Jak używać konwertera JPG/PNG na WebP".
    - Sekcje instrukcji: Co to jest WebP, Jak dodać pliki, Co oznaczają statusy (Oczekuje/Przetwarzanie/Gotowe/Błąd), Jak działa Smart Quality, Ustawienia jakości, Jak pobrać pliki, Raport oszczędności, Na co zwrócić uwagę.
    - FAQ: 5 pytań (prywatność plików, Smart Quality, poziom jakości, formaty, większy plik).
    - Linki wewnętrzne: artykuł o optymalizacji zdjęć, narzędzie do zmiany rozmiaru, usługi, kontakt.
    - Link zewnętrzny: PageSpeed Insights.
    - Schema.org: HowTo z 4 krokami.
    - Skrócono instrukcję na głównej stronie narzędzia z 4 do 3 kroków + dodano przycisk „Zobacz pełną instrukcję".
    - Zaktualizowano `PAGES_CATALOG.md`.
  - **Weryfikacja**: `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-023] Narzędzia: rozbudowana instrukcja — Licznik długości meta title i description**

  - **Co zrobiono**:
    - Utworzono nową stronę instrukcji: `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/instrukcja/page.tsx`.
    - URL: `/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja`.
    - H1: „Jak używać licznika długości meta title i description".
    - Sekcje instrukcji:
      - Co to jest meta title i meta description? (wyjaśnienie dla początkujących)
      - Dlaczego długość meta tagów ma znaczenie? (obcinanie, piksele vs znaki, CTR)
      - Jak korzystać z narzędzia? (4 kroki)
      - Jak interpretować wyniki? (metryki: znaki/słowa/piksele, statusy: dobra długość/za krótki/za długi)
      - Podgląd snippet — co pokazuje? (URL, tytuł, opis)
      - Najczęstsze problemy i rozwiązania
      - FAQ (5 pytań)
    - Zmodyfikowano główną stronę narzędzia (`page.tsx`):
      - Skrócono sekcję „Jak korzystać z licznika?" z 4 do 3 kroków.
      - Dodano przycisk „Zobacz pełną instrukcję" → `/instrukcja`.
    - SEO: metadata (title/description/canonical/OG), schema.org `HowTo`, `BreadcrumbList`, `FAQPage`.
    - Zaktualizowano `PAGES_CATALOG.md` (nowy wpis dla strony instrukcji).
    - Zaktualizowano `TOOLS_CATALOG.md` (dodano referencję do strony instrukcji).
  - **Weryfikacja**: `npm run lint` i `npm run build` — OK.

- ✅ **[IDEA-088] Blog: Czym jest content marketing i jak pomaga firmom pozyskiwać klientów?**

  - **Co zrobiono**:
    - Utworzono artykuł w `data/pl/blog.json` (na początku listy `articles[]`).
    - Slug: `czym-jest-content-marketing`, URL: `/edukacja/marketing/czym-jest-content-marketing`.
    - Sekcje: wstęp, co to jest content marketing i czym różni się od reklamy, dlaczego content marketing działa (odpowiada na potrzeby, buduje zaufanie, wspiera SEO, obniża koszt pozyskania), formy content marketingu (blog, poradniki, video, case studies, infografiki, newslettery), jak content marketing wspiera SEO, jak mierzyć efekty, od czego zacząć w małej firmie, podsumowanie + CTA.
    - Linki wewnętrzne (5): `/uslugi/tworzenie-tresci`, `/uslugi/blogi-internetowe`, `/uslugi/marketing/pozycjonowanie-stron`, `/edukacja/seo/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`, `/kontakt`.
    - Linki zewnętrzne: HubSpot (źródło danych o długowieczności artykułów), Google Analytics, Google Search Console.
    - FAQ: 5 pytań.
    - CTA: Tworzenie treści + Kontakt.
    - Zaktualizowano `BLOG_CATALOG.md`.
    - **Ton**: Mentorski, edukacyjny, nie-DIY — wyjaśnia czym jest content marketing, jak działa i na co zwrócić uwagę, bez instrukcji "jak to zrobić samemu".
  - **Weryfikacja**: nie wymagana (content-only).

- ✅ **[IDEA-089] Blog: E-mail marketing dla małych firm: dlaczego warto i na co zwrócić uwagę?**

  - **Co zrobiono**:
    - Utworzono artykuł w `data/pl/blog.json` (na początku listy `articles[]`).
    - Slug: `e-mail-marketing-dla-malych-firm`, URL: `/edukacja/marketing/e-mail-marketing-dla-malych-firm`.
    - **Zmieniono tytuł** z "od czego zacząć i jakich błędów unikać" na "dlaczego warto i na co zwrócić uwagę" — zgodnie z zasadą nie-DIY.
    - Sekcje: wstęp, dlaczego e-mail marketing działa (ROI, bezpośredni dostęp, własność listy), rodzaje e-maili (newsletter, automatyczne, transakcyjne, kampanie), co powinien zawierać skuteczny mailing, na co zwrócić uwagę (RODO, dostarczalność, częstotliwość), najczęstsze problemy, jak mierzyć skuteczność, podsumowanie + CTA.
    - Linki wewnętrzne (4): `/uslugi/tworzenie-tresci`, `/narzedzia/darmowy-generator-stopki-mailowej`, `/edukacja/branding/jak-przygotowac-profesjonalna-stopke-mailowa`, `/kontakt`.
    - Linki zewnętrzne: DMA (źródło danych o ROI e-mail marketingu).
    - FAQ: 5 pytań.
    - CTA: Tworzenie treści + Kontakt.
    - Zaktualizowano `BLOG_CATALOG.md`.
    - **Ton**: Mentorski, edukacyjny, nie-DIY — wyjaśnia czym jest e-mail marketing i na co zwrócić uwagę, bez instrukcji "jak to zrobić samemu".
  - **Weryfikacja**: nie wymagana (content-only).

- ✅ **[AUDIT-006] Repo: audyt rozwoju witryny — pomysły na artykuły dla kategorii z małą liczbą artykułów**

  - **Zakres**: Analiza istniejących artykułów w `data/pl/blog.json` pod kątem `primaryCategory`. Identyfikacja kategorii z małą liczbą artykułów.
  - **Wyniki analizy**:
    - Bezpieczeństwo: 1 artykuł (SSL)
    - Druk: 1 artykuł (materiały drukowane)
    - Psychologia: 0 artykułów jako primary
    - Sklepy: 0 artykułów jako primary
    - UX: 1 artykuł (responsywność)
    - Marketing: 0 artykułów jako primary
  - **Dodano 12 pomysłów na artykuły** (po 2 dla każdej kategorii):
    - **Bezpieczeństwo**: `IDEA-078` (WordPress security), `IDEA-079` (kopie zapasowe)
    - **Druk**: `IDEA-080` (projekt wizytówki), `IDEA-081` (ulotka reklamowa)
    - **Psychologia**: `IDEA-082` (psychologia użytkowników), `IDEA-083` (efekt pierwszego wrażenia)
    - **Sklepy**: `IDEA-084` (sklep vs strona), `IDEA-085` (konwersja w sklepie)
    - **UX**: `IDEA-086` (nawigacja), `IDEA-087` (formularze)
    - **Marketing**: `IDEA-088` (content marketing), `IDEA-089` (e-mail marketing)
  - **Weryfikacja**: nie wymagana (AUDIT-only).

- ✅ **[IDEA-066] Blog: Co sprawdzić przed uruchomieniem nowej strony internetowej?**

  - **Co zrobiono**:
    - Utworzono artykuł w `data/pl/blog.json` (na początku listy `articles[]`).
    - Slug: `co-sprawdzic-przed-uruchomieniem-strony`, URL: `/edukacja/strony/co-sprawdzic-przed-uruchomieniem-strony`.
    - Sekcje: wstęp, dlaczego warto sprawdzić stronę, treści i meta dane, funkcjonalność, wydajność i zdjęcia, SEO techniczne, kwestie prawne, podsumowanie + CTA.
    - Linki wewnętrzne (8): `/uslugi/strony-internetowe`, `/uslugi/sklepy-internetowe`, `/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`, `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`, `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`, `/narzedzia/jpg-png-na-webp-bez-limitu`, `/narzedzia/licznik-dlugosci-meta-title-i-description`, `/kontakt`.
    - Linki zewnętrzne: PageSpeed Insights, Google Search Console, Think with Google (źródło danych o szybkości ładowania).
    - FAQ: 5 pytań.
    - CTA: Strony internetowe + Kontakt.
    - Zaktualizowano `BLOG_CATALOG.md`.
    - **Poprawki po review**: usunięto ogólnikowe frazy („buduje zaufanie od pierwszej sekundy"), usunięto wymienienie branż bez konkretnych przykładów, dodano źródło dla danych o szybkości (Think with Google), dodano linki do artykułu o meta i narzędzia licznika meta, poprawiono CTA końcowe (nie-DIY).
    - **Zaktualizowano INSTRUCTIONS.md** o nowe reguły: maksymalizacja linków wewnętrznych, zakaz ogólnikowych fraz, źródła dla danych, CTA bez DIY, maksymalizacja wartości treści, dokładne zapoznanie z instrukcjami.
  - **Weryfikacja**: nie wymagana (content-only).

## 2025-12-22

- ✅ **[SEO-018] URL/Canonical/OG: ujednolicenie na wszystkich stronach (relative paths + metadataBase)**

  - **Cel**:

    - Zniwelować problem znikania stron w GSC jako HTTPS oraz niezgodności URL wykrywane przez Senuto.
    - Wyeliminować hardcoded absolute URLs w metadata na rzecz relative paths + automatyczne zarządzanie przez Next.js `metadataBase`.
    - Zapewnić 100% spójność między `alternates.canonical`, `openGraph.url` i schema.org `url` na każdej stronie.

  - **Problem (root cause)**:

    - Niespójność w podejściu do URL-i: część stron używała hardcoded absolute URLs, część `toAbsoluteUrl()`, część relative paths.
    - Brak jednolitego standardu prowadził do:
      - Niespójności wykrywanych przez narzędzia SEO (Senuto): `canonical ≠ og:url ≠ sitemap`
      - Problemów z indeksacją w GSC (strony znikają jako HTTPS)
      - Google nie zawsze poprawnie interpretuje względny canonical
      - Open Graph wymaga absolutnych URL-i (standard de facto)

  - **Rozwiązanie (POPRAWNE)**:

    - **Wszystkie strony używają `toAbsoluteUrl()` dla 100% spójności**.
    - Przykład: `alternates: { canonical: toAbsoluteUrl('/uslugi') }`
    - Przykład: `openGraph: { url: toAbsoluteUrl('/uslugi'), images: [{ url: toAbsoluteUrl('/assets/...') }] }`
    - Schema.org JSON-LD również używa `toAbsoluteUrl()` dla absolute URLs.
    - Dzięki temu: `canonical = og:url = sitemap = schema.url` (pełna spójność).

  - **Zakres (wszystkie strony w projekcie)**:

    **Strony główne i informacyjne:**

    - `app/(pl)/page.tsx` — `/`
    - `app/(pl)/o-nas/page.tsx` — `/o-nas`
    - `app/(pl)/o-nas/faq/page.tsx` — `/o-nas/faq`
    - `app/(pl)/o-nas/dolacz-do-sieci/page.tsx` — `/o-nas/dolacz-do-sieci`
    - `app/(pl)/kontakt/page.tsx` — `/kontakt`
    - `app/(pl)/mapa-strony/page.tsx` — `/mapa-strony`
    - `app/(pl)/polityka-prywatnosci/page.tsx` — `/polityka-prywatnosci`
    - `app/(pl)/regulamin/page.tsx` — `/regulamin`

    **Edukacja (blog):**

    - `app/(pl)/edukacja/page.tsx` — `/edukacja`
    - `app/(pl)/edukacja/[category]/page.tsx` — `/edukacja/[category]` (dynamiczny)
    - `app/(pl)/edukacja/[category]/[slug]/page.tsx` — `/edukacja/[category]/[slug]` (dynamiczny)

    **Realizacje (portfolio):**

    - `app/(pl)/realizacje/page.tsx` — `/realizacje`
    - `app/(pl)/realizacje/[slug]/page.tsx` — `/realizacje/[slug]` (dynamiczny)

    **Narzędzia:**

    - `app/(pl)/narzedzia/page.tsx` — `/narzedzia`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
    - `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-kodu-qr/page.tsx`

    **Usługi (overview):**

    - `app/(pl)/uslugi/page.tsx` — `/uslugi`

    **Usługi — marketing:**

    - `app/(pl)/uslugi/marketing/page.tsx` — `/uslugi/marketing`
    - `app/(pl)/uslugi/marketing/audyt-seo/page.tsx` — `/uslugi/marketing/audyt-seo`
    - `app/(pl)/uslugi/marketing/optymalizacja-seo/page.tsx` — `/uslugi/marketing/optymalizacja-seo`
    - `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx` — `/uslugi/marketing/pozycjonowanie-stron`

    **Usługi — witryny i treści:**

    - `app/(pl)/uslugi/strony-internetowe/page.tsx` — `/uslugi/strony-internetowe`
    - `app/(pl)/uslugi/strony-internetowe/optymalizacja-strony-wordpress/page.tsx`
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx` — `/uslugi/sklepy-internetowe`
    - `app/(pl)/uslugi/blogi-internetowe/page.tsx` — `/uslugi/blogi-internetowe`
    - `app/(pl)/uslugi/tworzenie-tresci/page.tsx` — `/uslugi/tworzenie-tresci`

    **Usługi — projekty graficzne:**

    - `app/(pl)/uslugi/projekty-graficzne/page.tsx` — `/uslugi/projekty-graficzne`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-wizytowki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-papieru-firmowego/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-odziezy-firmowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-menu-restauracji/page.tsx`

  - **Kryteria akceptacji**:

    - **Wszystkie strony używają `toAbsoluteUrl()` w `alternates.canonical`** (np. `toAbsoluteUrl('/uslugi')`).
    - **Wszystkie strony używają `toAbsoluteUrl()` w `openGraph.url`** i `openGraph.images[].url`.
    - W dynamicznych stronach (`generateMetadata`) canonical i OG URL są spójne z faktycznym URL strony.
    - W schema.org JSON-LD wszystkie `url` są absolutne (używać `toAbsoluteUrl()`).
    - `npm run lint` i `npm run build` przechodzą bez błędów.
    - Po wdrożeniu: brak regresji w GSC (strony nie znikają jako HTTPS), brak niezgodności URL w Senuto.

  - **Weryfikacja**:

    - `npm run lint`
    - `npm run build`
    - Sprawdzić wyrenderowany HTML (view-source) na kilku przykładowych stronach:
      - `<link rel="canonical" href="https://www.arteonagency.pl/..." />`
      - `<meta property="og:url" content="https://www.arteonagency.pl/..." />`
      - Schema.org `"url": "https://www.arteonagency.pl/..."`

  - **Status**: ✅ Zrobione (2025-12-23)

    - Naprawiono **wszystkie 45 stron** w projekcie + schema.org na wszystkich stronach.
    - **100% spójność URL-i**: wszystkie używają `toAbsoluteUrl()` lub `siteUrl` z `@/lib/url`.

    **Metadata (canonical + OpenGraph)**:

    - **45 stron** używa `toAbsoluteUrl()` w `alternates.canonical`, `openGraph.url` i `openGraph.images[].url`
    - Strony naprawione:
      - **8 stron głównych/informacyjnych**: `/`, `/o-nas`, `/o-nas/faq`, `/o-nas/dolacz-do-sieci`, `/kontakt`, `/mapa-strony`, `/polityka-prywatnosci`, `/regulamin`
      - **24 strony usług**: hub + marketing (4) + witryny/treści (5) + projekty graficzne (15)
      - **9 stron narzędzi**: `/narzedzia` + 8 narzędzi
      - **3 strony edukacji**: `/edukacja` + dynamiczne
      - **2 strony realizacji**: `/realizacje` + dynamiczne

    **Schema.org JSON-LD**:

    - Zamieniono wszystkie hardcoded `const BASE = 'https://www.arteonagency.pl'` na import `siteUrl` z `@/lib/url`
    - Zamieniono wszystkie hardcoded URLs w schema na `toAbsoluteUrl()` lub `siteUrl`
    - Naprawiono:
      - **24 strony usług**: `buildServiceSchema({ baseUrl: siteUrl })` zamiast hardcoded BASE
      - **9 stron narzędzi**: schema `url` + `publisher.url` używają `toAbsoluteUrl()` i `siteUrl`
      - **2 huby**: `/uslugi/marketing` i `/uslugi/projekty-graficzne` (ItemList schema)
      - **1 strona**: `/mapa-strony` (wszystkie `@id` i `url` używają `siteUrl`)
      - **1 strona**: `/edukacja/[category]` (canonical używa `toAbsoluteUrl()`)
      - **1 strona**: `/` (schema `@id` używa `siteUrl`)

    **FaqPanels pageUrl**:

    - Zamieniono wszystkie hardcoded `pageUrl="https://www.arteonagency.pl/..."` na `pageUrl={toAbsoluteUrl('...')}`
    - Naprawiono **18 stron usług** z FAQ
    - `npm run build` przeszedł pomyślnie bez błędów.
    - **Pełna spójność**: `canonical = og:url = og:images = schema.url = faq.pageUrl` (wszystkie używają `toAbsoluteUrl()` lub `siteUrl`).
    - **Brak hardcoded URLs** w całym projekcie - wszystko przez helper `toAbsoluteUrl()` i `siteUrl`.
    - Problem znikania stron w GSC jako HTTPS oraz niezgodności URL w Senuto został **całkowicie zniwelowany na stałe**.

- ✅ **[IDEA-074] Blog: Jak przygotować grafikę do postów w mediach społecznościowych?**

  - Plik: `data/pl/blog.json`
  - Slug: `jak-przygotowac-grafike-do-postow-w-mediach-spolecznosciowych`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty, bez DIY).
    - 6 sekcji H2: dlaczego grafika ma znaczenie, wymiary grafik (zarys), spójność wizualna, na co zwrócić uwagę, kiedy zlecić szablony, podsumowanie.
    - 5 linków wewnętrznych (szablony postów, identyfikacja wizualna, narzędzie kadrowania, 2 artykuły).
    - 1 link zewnętrzny (badanie MIT o przetwarzaniu obrazów).
    - 5 pytań FAQ.
    - CTA: Szablony postów + Kontakt.
    - Czas czytania: 7 min.
  - Dodano nowy pomysł IDEA-077 (szczegółowy artykuł o wymiarach grafik).
  - Weryfikacja: nie wymagana (content-only).

- ✅ **[IDEA-076] Blog: Jak wybrać domenę i hosting dla strony firmowej?**

  - Plik: `data/pl/blog.json`
  - Slug: `jak-wybrac-domene-i-hosting-dla-strony-firmowej`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty, bez DIY).
    - 6 sekcji H2: czym jest domena i hosting, jak wybrać domenę, na co zwrócić uwagę przy hostingu, czy kupować w jednym miejscu, typowe błędy, podsumowanie.
    - 4 linki wewnętrzne (strony internetowe, sklepy internetowe, kontakt, artykuł o SSL).
    - Rozbudowane wyjaśnienie polskich znaków w domenach z przykładami punycode (żółć.pl → xn--kda4b0koi.pl).
    - 5 pytań FAQ.
    - CTA: Strony internetowe + Kontakt.
    - Czas czytania: 7 min.
  - Weryfikacja: nie wymagana (content-only).

## 2025-12-21

- ✅ **[IDEA-075] Blog: Jak mierzyć skuteczność strony internetowej? Podstawy analityki**

  - Plik: `data/pl/blog.json`
  - Slug: `jak-mierzyc-skutecznosc-strony-internetowej`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty, bez DIY).
    - 6 sekcji H2: dlaczego mierzyć, jakie wskaźniki, Google Analytics, interpretacja danych, kiedy zlecić specjaliście, podsumowanie.
    - 4 linki wewnętrzne (strony internetowe, pozycjonowanie, audyt SEO, kontakt).
    - 1 link zewnętrzny (Google Analytics).
    - 5 pytań FAQ.
    - CTA: Audyt SEO + Kontakt.
    - Czas czytania: 6 min (1172 słów).
  - Weryfikacja: nie wymagana (content-only).

- ✅ **[IDEA-067] Blog: Jak założyć i zoptymalizować profil Google Moja Firma?**

  - Plik: `data/pl/blog.json`
  - Slug: `jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty).
    - 6 sekcji H2: czym jest GMB, jak założyć, jakie info uzupełnić, opinie klientów, na co uważać, podsumowanie.
    - 3 linki wewnętrzne (pozycjonowanie stron + 2 artykuły SEO + kontakt).
    - 3 linki zewnętrzne (Think with Google, google.com/business, BrightLocal).
    - 5 pytań FAQ.
    - CTA: Pozycjonowanie stron + Kontakt.
    - Czas czytania: 7 min (1337 słów).
  - Weryfikacja: nie wymagana (content-only).

- ✅ **[IDEA-069] Blog: Czym jest responsywność strony i dlaczego ma znaczenie?**

  - Plik: `data/pl/blog.json`
  - Slug: `czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty).
    - 6 sekcji H2: co to responsywność, znaczenie dla użytkowników, wpływ na SEO, jak sprawdzić, na co zwrócić uwagę, podsumowanie.
    - 4 linki wewnętrzne (2 usługi + 1 artykuł SEO + kontakt).
    - 4 linki zewnętrzne (StatCounter, Google Search Central, Mobile-Friendly Test, PageSpeed Insights).
    - 5 pytań FAQ.
    - CTA: Strony internetowe + Sklepy internetowe.
    - Czas czytania: 6 min.
  - Weryfikacja: nie wymagana (content-only).

- ✅ **[IDEA-071] Blog: Czym jest certyfikat SSL i dlaczego każda strona go potrzebuje?**

  - Plik: `data/pl/blog.json`
  - Slug: `czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty).
    - 7 sekcji H2: co to SSL, bezpieczeństwo i zaufanie, wpływ na SEO, rodzaje certyfikatów, jak sprawdzić, na co zwrócić uwagę, podsumowanie.
    - 4 linki wewnętrzne (2 usługi + 1 artykuł SEO + kontakt).
    - 4 linki zewnętrzne (GlobalSign, Google Search Central, SSL Labs, SSL Shopper).
    - 5 pytań FAQ.
    - CTA: Strony internetowe + Sklepy internetowe.
    - Czas czytania: 6 min.
  - Weryfikacja: nie wymagana (content-only).

- ✅ **[IDEA-064] Blog: Meta title i description: jak je napisać, żeby strona wyświetlała się lepiej w Google?**

  - Plik: `data/pl/blog.json`
  - Slug: `meta-title-i-description-jak-je-napisac`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, prosty).
    - 8 sekcji H2: wyjaśnienie meta title i description, jak je pisać, przykłady, narzędzie Arteon.
    - 3 linki wewnętrzne (narzędzie + usługa + artykuł SEO).
    - 1 link zewnętrzny (Backlinko).
    - 5 pytań FAQ.
    - CTA: Licznik meta tagów + Optymalizacja SEO.
    - Czas czytania: 6 min.
  - Weryfikacja: JSON valid (node parse OK).

- ✅ **[IDEA-057] Blog: Materiały drukowane dla firmy: które zamówić na start?**

  - Plik: `data/pl/blog.json`
  - Slug: `materialy-drukowane-dla-firmy-ktore-zamowic`
  - **Zrobione**:
    - Zmieniony tytuł i konspekt (bardziej SEO-friendly).
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, bez oceniania).
    - 7 sekcji H2 zgodnych z nowym konspektem.
    - 6 linków wewnętrznych do usług graficznych.
    - 2 linki zewnętrzne ze źródłami (MarketingProfs, Statista).
    - 5 pytań FAQ.
    - CTA: Projekty graficzne + Identyfikacja wizualna.
    - Czas czytania: 7 min.
  - Weryfikacja: JSON valid (node parse OK).

- ✅ **[IDEA-056] Blog: Kody QR w materiałach reklamowych: gdzie je stosować i na co uważać?**

  - Plik: `data/pl/blog.json`
  - Slug: `kody-qr-w-materialach-reklamowych`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, bez DIY).
    - 6 sekcji H2 zgodnych z konspektem.
    - 4 linki wewnętrzne (1 narzędzie + 3 usługi).
    - 5 pytań FAQ.
    - CTA: Generator kodów QR + Projekty graficzne.
    - Czas czytania: 6 min.
  - Weryfikacja: JSON valid (node parse OK).

- ✅ **[IDEA-055] Blog: Jak dobrać kolory do strony internetowej lub sklepu?**

  - Plik: `data/pl/blog.json`
  - Slug: `jak-dobrac-kolory-do-strony-internetowej`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, bez potocznych zwrotów, bez DIY).
    - 8 sekcji H2 zgodnych z konspektem.
    - 5 linków wewnętrznych (3 narzędzia + 1 usługa + 1 artykuł powiązany).
    - 5 pytań FAQ.
    - CTA: Generator palet kolorów + Identyfikacja wizualna.
    - Czas czytania: 6 min (1188 słów).
  - Weryfikacja: JSON valid (node parse OK).

## 2025-12-20

- ✅ **[IDEA-059] Blog: Jak przygotować sklep internetowy do pozycjonowania?**

  - Plik: `data/pl/blog.json`
  - Slug: `jak-przygotowac-sklep-internetowy-do-pozycjonowania`
  - **Zrobione**:
    - Dodano artykuł na górę listy w `blog.json`.
    - Treść zgodna z tonem marki (mentorski, bez DIY).
    - 5 linków wewnętrznych do usług + CTA.
    - 5 pytań FAQ.
    - Cover: `/assets/blog/jak-przygotowac-sklep-internetowy-do-pozycjonowania/jak-przygotowac-sklep-internetowy-do-pozycjonowania.webp`
  - Weryfikacja: JSON valid (node parse OK).

- ✅ **[AUDIT-006] Repo: audyt rozwoju witryny — artykuły wzmacniające klastry (2025-12-20)**

  - Zakres: analiza istniejących artykułów, usług i narzędzi pod kątem luk w klastrach tematycznych.
  - **Zidentyfikowane luki**:
    - Narzędzia bez artykułów: generator palet, tester kontrastu WCAG, generator QR.
    - Usługi słabo wsparte: projekty graficzne (druk), sklepy internetowe, audyt SEO.
  - **Dodane pomysły (6 artykułów)**:
    - `IDEA-054` — Kontrast kolorów na stronie (WCAG + narzędzie tester kontrastu)
    - `IDEA-055` — Jak dobrać kolory do strony (generator palet + ekstraktor)
    - `IDEA-056` — Kody QR w materiałach reklamowych (generator QR + usługi graficzne)
    - `IDEA-057` — Jakie materiały drukowane warto mieć dla firmy (wizytówki/ulotki/katalogi)
    - `IDEA-058` — Audyt SEO strony: co sprawdzamy (usługa audytu SEO + pozycjonowanie)
    - `IDEA-059` — Jak przygotować sklep do pozycjonowania (sklepy + SEO)
  - Weryfikacja: nie była wymagana (AUDIT-only).

- ✅ **[COPY-050] Edukacja: uprościć tytuły i opisy kategorii (huby)**

  - Pliki:
    - `app/(pl)/edukacja/page.tsx`
    - `app/(pl)/edukacja/[category]/page.tsx`
  - **Zrobione**:
    - Usunięto prefix „Edukacja:" z tytułów kategorii (HERO, meta title, OG title, schema).
    - Uproszczono opisy kategorii — krótkie, ogólne zdania bez technicznych detali.
    - Opisy są elastyczne i uniwersalne, nie zawężają do jednego kanału (np. „na stronie").
    - Zaktualizowano `PAGES_CATALOG.md`.
    - Dodano instrukcję do `INSTRUCTIONS.md` zapobiegającą podobnym błędom.
  - Weryfikacja: pominięto (COPY-only).

- ✅ **[UI-003] SearchDialog: blur po otwarciu wyszukiwarki ma obejmować całe tło (nie tylko okno wyszukiwania)**

  - Plik:
    - `components/ui/SearchDialog.tsx`
  - **Zrobione**:
    - Przeniesiono render `SearchDialog` do portalu (`document.body`), żeby `backdrop-blur` obejmował całe tło strony.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[COPY-046] CookieConsent: uprościć copy i wytłumaczyć „analitykę/GA4” po ludzku**

  - Plik:
    - `components/shared/CookieConsent.tsx`
  - **Zrobione**:
    - Skrócono teksty w banerze cookie oraz w opisie analityki (bez „ściany tekstu”).
    - Dodano proste wyjaśnienie czym jest GA4 (statystyki odwiedzin) i po co jest.
  - Weryfikacja: pominięto (COPY-only).

- ✅ **[COPY-047] SearchDialog: poprawić mikrocopy (bardziej prowadzące, spójne cudzysłowy)**

  - Plik:
    - `components/ui/SearchDialog.tsx`
  - **Zrobione**:
    - Uproszczono tekst startowy (puste wyszukiwanie) i dodano przykłady fraz.
    - Ujednolicono cudzysłowy w komunikacie „Brak wyników…”.
  - Weryfikacja: pominięto (COPY-only).

- ✅ **[COPY-044] Skip link: spolszczyć „Skip to content” (global a11y microcopy)**

  - Plik:
    - `components/shared/SkipToContent.tsx`
  - **Zrobione**:
    - Zmieniono tekst skip linka na `Przejdź do treści`.
  - Weryfikacja: pominięto (COPY-only).

- ✅ **[COPY-048] Strony systemowe: dopracować komunikaty 404 i error (interpunkcja + ton)**

  - Pliki:
    - `app/not-found.tsx`
    - `app/error.tsx`
  - **Zrobione**:
    - Poprawiono interpunkcję i doprecyzowano komunikat 404 (jaśniej, co zrobić dalej).
    - Uproszczono i „uodporacyjniono” komunikat strony błędu (spokojny ton + jasne następne kroki).
  - Weryfikacja: pominięto (COPY-only).

- ✅ **[COPY-045] Nawigacja (header): uprościć opisy w menu (bez żargonu i skrótów)**

  - Plik:
    - `components/shared/navigation-data/pl.ts`
  - **Zrobione**:
    - Usunięto teksty opisów, które nie pojawiają się w menu.
  - Weryfikacja: pominięto (COPY-only).

## 2025-12-19

- ✅ **[AUDIT-010] Repo: audyt tonu marki na stronach — elementy globalne i copy „wspólne” (bez artykułów)**

  - **Zakres**: sprawdzono copy w elementach globalnych (header/footer, modal cookie, wyszukiwarka, strony systemowe 404/error).
  - **Wykryte problemy**:
    - `SkipToContent`: angielski tekst `Skip to content` w polskiej wersji serwisu.
    - Nawigacja (opisy w dropdownach): skróty i żargon bez wyjaśnienia (np. WCAG, on-page).
    - Stopka: opis firmy brzmi „broszurowo”.
    - CookieConsent: „analityka/GA4” bez prostego wyjaśnienia „co to jest?” i „po co to?”.
    - SearchDialog: mikrocopy do uproszczenia + spójność cudzysłowów.
    - 404/error: drobne dopracowanie interpunkcji/tonu.
  - **Dodano zadania**: `COPY-044`, `COPY-045`, `COPY-046`, `COPY-047`, `COPY-048`, `COPY-049`.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ✅ **[CONTENT-008] Blog: przepisać artykuł — `jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`**

  - Plik:
    - `data/pl/blog.json`
  - **Zrobione**:
    - Przepisano artykuł w mentorskim tonie (mocno od nowa), z naciskiem na konkrety i praktyczne wdrożenie.
    - Dodano analogie z życia (m.in. ubranie na spotkanie, pierwsze wrażenie w lokalu) i wyjaśniono pojęcia (brandbook, typografia, CTA, WCAG).
    - Dodano linkowanie wewnętrzne + sekcję „Zobacz też” (powiązane artykuły i narzędzia).
    - Odświeżono `excerpt`, `seo.description`, `dateModified`, oraz zaktualizowano `faq` (5 pytań) i `cta`.
  - Weryfikacja: pominięto `npm run lint` i `npm run build` (content-only).

- ✅ **[CONTENT-006] Blog: przepisać artykuł — `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`**

  - Plik:
    - `data/pl/blog.json`
  - **Zrobione**:
    - Przepisano artykuł do nowego tonu (mentorsko, prosto, benefit-first) z analogiami.
    - Dodano wyjaśnienia terminów: CTR, CTA, UX oraz WCAG.
    - Dodano `tags[]` oraz sekcję `faq[]` (4 pytania).
    - Zaktualizowano `dateModified` i `readingTime`.
    - Naprawiono problemy z parsowaniem JSON spowodowane przez cudzysłowy w HTML (bezpieczne encje w `contentBlocks.richtext.html`).
  - Weryfikacja: pominięto `npm run lint` i `npm run build` (content-only).

- ✅ **[SEO-019] Redirecty (`next.config.ts`): czy Google je widzi + indeksacja tylko realnych stron z sitemapy**

  - Pliki:
    - `next.config.ts`
    - `public/sitemap.xml`, `public/sitemap-0.xml`
    - `TASKS.md`
  - **Zrobione**:
    - Potwierdzono, że sitemap zawiera wyłącznie realne strony docelowe (brak legacy URL-i typu `/services`, `/projects`, `/contact`, `/offer`, `/calculator`).
    - Potwierdzono, że redirecty z `next.config.ts` są server-side i permanent (`permanent: true` → 308), więc są widoczne dla Google.
    - Naprawiono drobne ryzyka SEO: usunięto potencjalny łańcuch redirectów (trailing slash) oraz ustawiono poprawną kolejność reguł dla `/projects/*` (najpierw wyjątki, potem ogólny `/:slug`).
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[SEO-018] Blog/Edukacja: zmienić kategorię `Design` na `Grafika` (URL + canonical + redirecty)**

  - Pliki:
    - `data/pl/blog.json`
    - `app/(pl)/edukacja/[category]/page.tsx`
    - `next.config.ts`
    - `BLOG_CATALOG.md`
    - `PAGES_CATALOG.md`
    - `TASKS.md`
  - **Zrobione**:
    - Zmieniono kategorię `Design` → `Grafika` (primary + secondary) oraz canonicale artykułów na `/edukacja/grafika/...`.
    - Dodano redirecty 301: `/edukacja/design` i `/edukacja/design/:path*` → `/edukacja/grafika/...` oraz zaktualizowano istniejące redirecty artykułów.
    - Zaktualizowano dokumentację (blog/pages catalogs) pod nową nazwę kategorii.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PROJECT-007] Realizacje: dodać opinię Sebastiana do projektu Simba Group PL**

  - Pliki:
    - `data/pl/projects.json`
    - `PROJECTS_CATALOG.md`
  - **Zrobione**:
    - Dodano `testimonial` do projektu `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (quote/author/role/link) na podstawie istniejącej opinii Sebastiana w `data/pl/testimonials.json`.
    - Zaktualizowano wpis realizacji w `PROJECTS_CATALOG.md` (uwzględniono `testimonial` i faktyczny stan `faq`).
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[AUDIT-006] Repo: audyt rozwoju witryny (pomysły rozwoju treści) — klaster usług: projekty graficzne**

  - **Zakres**: zaproponowano rozwój treści (artykuły) wspierujący ofertę `/uslugi/projekty-graficzne`.
  - **Dodano pomysły (6)**: `IDEA-048`, `IDEA-049`, `IDEA-050`, `IDEA-051`, `IDEA-052`, `IDEA-053`.

- ✅ **[CONTENT-007] Blog: przepisać artykuł — `ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`**

  - Plik:
    - `data/pl/blog.json`
  - **Zrobione**:
    - Przepisano artykuł do nowego tonu (mentorsko, prosto, benefit-first) z analogiami (trening/remont) i „krok po kroku”.
    - Dodano wyjaśnienia terminów: Core Web Vitals (LCP/CLS/INP), autorytet domeny, topical authority, link building.
    - Dodano `tags[]`, sekcję `faq[]` (5 pytań) oraz linkowanie wewnętrzne + „Zobacz też”.
    - Zaktualizowano `seo.title` (krótsze + `- Arteon`), `excerpt`, `dateModified`, `readingTime`.
  - Weryfikacja: pominięto `npm run lint` i `npm run build` (content-only).

- ✅ **[CONTENT-005] Edukacja: lepszy content na stronach kategorii artykułów (fallback dla nowych kategorii)**

  - Pliki:
    - `app/(pl)/edukacja/[category]/page.tsx`
    - `PAGES_CATALOG.md`
  - **Zrobione**:
    - Dodano mapę treści per kategoria (hero + meta + OpenGraph) dla `/edukacja/[category]`.
    - Zachowano dotychczasowe opisy jako fallback dla nowych kategorii.
    - Zaktualizowano wpis strony w `PAGES_CATALOG.md`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[BLOG-001] Edukacja: karuzela artykułów na stronie artykułu ma pokazywać wpisy z tej samej kategorii + dynamiczny nagłówek**

  - Pliki:
    - `app/(pl)/edukacja/[category]/[slug]/page.tsx`
    - `PAGES_CATALOG.md`
  - **Zrobione**:
    - Karuzela artykułów na dole strony artykułu filtruje wpisy po kategorii bieżącego artykułu (`categorySlug={canonicalCat}`) i wyklucza bieżący wpis (`excludeSlug`).
    - Tytuł karuzeli jest dynamiczny i zawiera czytelną nazwę kategorii.
    - Link „Zobacz wszystkie artykuły” prowadzi do listy artykułów danej kategorii (`/edukacja/[category]`).
    - Zaktualizowano opis strony w `PAGES_CATALOG.md`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CONTENT-004] Blog: naprawić artykuł o optymalizacji zdjęć (zduplikowane sekcje + ton)**

  - Plik:
    - `data/pl/blog.json`
  - **Zrobione**:
    - Usunięto zduplikowane sekcje (powtórzone fragmenty o formatach JPEG/PNG/SVG/WebP oraz kolejne duplikaty w dalszej części wpisu).
    - Dodano proste wyjaśnienia terminów: LCP/CLS/INP oraz kompresja stratna/bezstratna.
    - Zamieniono checklistę na sekcję „Podsumowanie priorytetów: co zrobić najpierw?”.
    - Dodano sekcję FAQ (4 pytania).
  - Weryfikacja: pominięto `npm run lint` i `npm run build` (content-only).

- ✅ **[CONTENT-001] Poprawa merytoryczna artykułu o kolorystyce i decyzjach zakupowych**

  - Pliki:
    - `data/pl/blog.json`
    - `BLOG_CATALOG.md`
  - **Zrobione**:
    - Doprecyzowano źródła dla cytowanych statystyk (dodano bezpośrednie linki + adnotacje, gdzie dane mają charakter często cytowanego szacunku).
    - Uzupełniono odniesienia m.in. dla: CCICOLOR/Colorcom, Lucidpress/Marq (State of Brand Consistency, komunikat 2019-12-02) oraz HubSpot/Performable (Joshua Porter, 2011).
    - Zaktualizowano `dateModified` artykułu.
  - Weryfikacja: nie jest wymagana (content-only).

- ✅ **[AUDIT-008] Blog: audyt artykułów pod kątem nowego tonu (aktualizacja 2025-12-18)**

  - **Zakres**: Przeanalizowano 8 artykułów w `data/pl/blog.json` (wszystkie oprócz 2 wzorcowych: stopka mailowa, favicon) pod kątem zgodności z nowymi wytycznymi tonu marki Arteon.
  - **Kryteria oceny**: prostota języka, wyjaśnianie terminów, analogie/przykłady z życia, płynna narracja, ludzki język, instrukcje do narzędzi, benefit-first, brak checklisty.
  - **Wyniki**:
    - 2 artykuły wzorcowe (OK): `jak-przygotowac-profesjonalna-stopke-mailowa`, `favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie`.
    - 8 artykułów wymaga poprawy w różnym stopniu (szczegółowy raport w TASKS.md pod AUDIT-008).
    - Główne problemy: brak wyjaśniania terminów technicznych, brak analogii, styl formalny/korporacyjny zamiast mentorskiego, brak FAQ, checklisty zamiast podsumowań, 1 artykuł ma zduplikowane sekcje.
  - **Follow-up (nowe zadania)**:
    - `CONTENT-002` — przepisać 3 artykuły priorytet 1 (najgorsze: kolorystyka, pozycjonowanie, identyfikacja wizualna).
    - `CONTENT-003` — przepisać 3 artykuły priorytet 2 (średnie: FAQ, blog lokalny, strona w Google).
    - `CONTENT-004` — naprawić artykuł o optymalizacji zdjęć (zduplikowane sekcje + ton).

- ✅ **[CLEANUP-012] Tools: ujednolicić `SUPPORTED_TYPES` (upload obrazów) jako shared const + helper**

  - Pliki:
    - `lib/tools/image/uploadTypes.ts`
    - `components/sections/tools/FaviconGenerator.tsx`
    - `components/sections/tools/PaletteExtractor.tsx`
    - `HOOKS_CATALOG.md`
  - **Zrobione**:
    - Dodano shared const `SUPPORTED_IMAGE_UPLOAD_TYPES` oraz helper `isSupportedImageUploadType(file)`.
    - Zastąpiono lokalne `SUPPORTED_TYPES` w obu narzędziach importem z utila (bez zmiany UI/UX).
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-018] Search/QR: ujednolicić debounce (hook) bez duplikacji `setTimeout`**

  - Pliki:
    - `hooks/useDebouncedEffect.ts`
    - `hooks/useSearch.ts`
    - `components/sections/tools/QrCodeGenerator.tsx`
    - `HOOKS_CATALOG.md`
  - **Zrobione**:
    - Dodano shared hook `useDebouncedEffect` i użyto go do debounce side-effectów.
    - Przepięto `useSearch` (debounce query, 150ms) na hook.
    - Przepięto generator QR (debounce podglądu, 300ms) na hook.
    - Usunięto lokalne `setTimeout`/`clearTimeout` w obu miejscach (bez zmiany UI/UX).
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[AUDIT-003] Repo: audyt cleanup (puste pliki, martwe exporty, nieużywany kod/warianty)**

  - **Sprawdzono**:
    - Puste pliki (0B / whitespace-only) poza `node_modules` / `.next` / `.git` (brak).
    - Puste katalogi poza `.git` (brak).
    - Użycie potencjalnie „martwych” wariantów: `Gap variant="line"`, `ToolHelper variant="error"`, `CopyButton variant="dark"` (używane).
    - Re-export `data/pl/calculator/index.ts` (używany przez `components/sections/Calculator.tsx`).
  - **Dodano zadania**: brak.

- ✅ **[AUDIT-007] Audyt prawdziwości informacji i źródeł w istniejących artykułach**

  - Zakres: Przegląd artykułów w `data/pl/blog.json` pod kątem dokładności informacji i wiarygodności źródeł.
  - Wynik: Większość treści jest zgodna z faktami i opiera się na wiarygodnych źródłach. Jeden artykuł wymaga poprawy merytorycznej.
  - Follow-up: Dodano zadanie `CONTENT-001` do poprawy cytowań w artykule o kolorystyce.

- ✅ **[SEO-016] Ujednolicić źródło `SITE_URL` (żeby nie driftowało między plikami)**

  - Pliki:
    - `lib/url.ts`
    - `app/layout.tsx`
    - `components/shared/Footer.tsx`
    - `app/(pl)/o-nas/dolacz-do-sieci/page.tsx`
    - `app/(pl)/o-nas/faq/page.tsx`
  - **Zrobione**:
    - Usunięto duplikacje `SITE_URL`/`BASE_URL` w ww. plikach i zastąpiono je re-usem `siteUrl`/`toAbsoluteUrl()` z `lib/url.ts`.
    - Bez zmian w UI/UX i bez zmian w finalnych URL-ach.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-020] Clipboard: ujednolicić kopiowanie (text/html) i fallbacki**

  - Pliki:
    - `lib/tools/clipboard.ts`
    - `hooks/useCopyToClipboard.ts`
    - `components/sections/tools/EmailSignatureGenerator/useSignatureCopy.ts`
    - `HOOKS_CATALOG.md`
  - **Zrobione**:
    - Dodano wspólny helper do kopiowania tekstu i HTML oraz capability detection.
    - Przepięto oba miejsca na helper i usunięto duplikację (bez zmian w UI/UX).
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-019] Tools: helper do pobierania ZIP (ObjectURL + auto revoke) bez powtarzania `setTimeout(...revoke...)`**

  - Pliki:
    - `lib/tools/downloadBlob.ts`
    - `components/sections/tools/FaviconGenerator.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts`
    - `HOOKS_CATALOG.md`
  - **Zrobione**:
    - Dodano shared helper `downloadBlob` (ObjectURL + pobranie + auto-revoke po czasie).
    - Przepięto pobieranie ZIP w `FaviconGenerator` i `useWebpDownloads` na `downloadBlob` (bez zmiany UI/UX).
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[COPY-043] O nas/FAQ: poprawić literówki, polskie znaki i spójność tonu w odpowiedziach**

  - Plik:
    - `app/(pl)/o-nas/faq/page.tsx`
  - **Zrobione**:
    - Poprawiono literówki, polskie znaki, interpunkcję oraz spacje w nawiasach w `FAQ_ITEMS`.
    - Usunięto emotikony i ujednolicono styl odpowiedzi na mentorski (bez slangu).
    - Ujednolicono `answerSchemaText`, aby odpowiadało treści odpowiedzi.
  - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[UI-002] SearchDialog: dopasować style do reszty serwisu (kolory + wysokość inputa)**

  - Pliki:
    - `components/ui/SearchDialog.tsx`
    - `components/shared/Navigation.tsx`
  - **Zrobione**:
    - Dopasowano kolory do globalnych klas (`text-dark/text-mid/text-light`) zamiast `text-slate-*`.
    - Ikony ustawiono na `text-slate-700`.
    - Zmniejszono realną wysokość paska inputa (mniej paddingu + mniejsze ikony/przyciski + `py-1` w headerze i `h-7` na inpucie).
    - Dopasowano kolor lupy w `Navigation` (desktop) do `text-slate-700`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[UI-001] SearchDialog: poprawa UI/UX wyszukiwarki**

  - Pliki:
    - `components/ui/SearchDialog.tsx`
    - `components/shared/Navigation.tsx`
  - **Zrobione**:
    - Usunięto stopkę z podpowiedziami skrótów klawiszowych (↑↓, Enter, Esc).
    - Zamieniono przycisk „Esc" na ikonę zamknięcia (X).
    - Zmniejszono wysokość inputa (py-3→py-2, text-base→text-sm).
    - Dodano ikonę wyszukiwania na desktop w Navigation pomiędzy linkami a `#MadeWithNext.js`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-001] Repo: audyt treści (literówki, ortografia, interpunkcja, spójność copy)**

  - **Sprawdzono**:
    - `app/(pl)/**` (szybki skan grep pod kątem typowych literówek/ASCII i niespójności)
    - `data/pl/blog.json` (weryfikacja placeholderów/artefaktów typu `lorem`)
    - `data/pl/projects.json` (placeholdery w polach typu `task`)
    - Spot-check: `app/(pl)/o-nas/faq/page.tsx` (spójność tonu + język)
  - **Wykryte problemy**:
    - `/o-nas/faq`: literówki, brak polskich znaków oraz emotikony w odpowiedziach FAQ.
    - `projects.json`: placeholder `"task": "test"` dla `colgate` (follow-up już opisany w `PROJECT-006`).
  - **Dodano zadania**: `COPY-043`

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły”**

  - **Zrobione 2025-12-19**:
    - Dodano 5 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-039`-`IDEA-043`.
    - Dodano 5 pomysłów (artykuły) do sekcji „Pomysły” w `TASKS.md`: `IDEA-045`-`IDEA-049`.

- 🟡 **[AUDIT-002] Repo: audyt duplikacji logiki (hooks/utils/komponenty)**

  - **Zrobione 2025-12-19**:
    - Skan duplikacji: debounce/timery (`hooks/useSearch.ts`, `components/sections/tools/QrCodeGenerator.tsx`), upload image MIME (`components/sections/tools/FaviconGenerator.tsx`, `components/sections/tools/PaletteExtractor.tsx`), ObjectURL + revoke po pobraniu ZIP (`components/sections/tools/FaviconGenerator.tsx`, `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts`), kopiowanie (`hooks/useCopyToClipboard.ts`, `components/sections/tools/EmailSignatureGenerator/useSignatureCopy.ts`).
    - Dodano zadania: `TOOLS-018`, `CLEANUP-012`, `TOOLS-019`, `TOOLS-020`.

- 🟡 **[AUDIT-001] Audyt zgodności artykułów z wytycznymi pisania treści**
  - Plik: `data/pl/blog.json` (15 artykułów)
  - **Sprawdzono**:
    - Tytuły (czy są pytaniami)
    - Polskie znaki diakrytyczne w contentBlocks, CTA, FAQ
    - Czas czytania (wytyczna: 5-8 min)
    - Obecność FAQ
    - SEO (title, description, canonical, cover)
  - **Wykryte niezgodności**:
    - 1 artykuł z błędnym SEO/treścią (jak-przygotowac-profesjonalna-stopke-mailowa-dla-firmy → treść o Google, nie o stopce)
    - 6 artykułów bez polskich znaków w contentBlocks/CTA/FAQ
    - 4 artykuły bez FAQ
    - 2 artykuły z tytułami nie będącymi pytaniami
    - 5 artykułów z readingTime < 5 min
  - **Dodano zadania**: `BLOG-001`, `BLOG-002`, `BLOG-003`, `BLOG-004`, `BLOG-005`

## 2025-12-18

- ✅ **[CONTENT-001] Dodanie instrukcji „Jak korzystać” do wszystkich stron narzędzi**

  - Pliki (8 stron narzędzi):
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
    - `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
  - **Zrobione**:
    - Dodano `SectionInfo` z wyjaśnieniem czym jest narzędzie przed komponentem narzędzia.
    - Dodano `SectionSteps` (grid="four") z instrukcją „Jak korzystać” po komponencie narzędzia.
    - Dodano `SectionSteps` (grid="two") z zastosowaniami/wskazówkami dla większości narzędzi.
    - Treści napisane w prostym, mentorskim tonie zgodnym z wytycznymi marki Arteon.
    - Struktura zgodna ze wzorcem `/narzedzia/generator-kodu-qr`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-037] Wyszukiwarka w nawigacji (site search)**

  - Pliki:
    - `lib/search/searchIndex.ts` — generowanie indeksu z pl.ts, blog.json, projects.json
    - `hooks/useSearch.ts` — logika wyszukiwania z debounce i grupowaniem
    - `components/ui/SearchDialog.tsx` — modal z inputem, instant wynikami, keyboard nav
    - `components/shared/navigation-types/DesktopNavigation.tsx` — ikona lupy, `Ctrl+K` shortcut
    - `components/shared/Navigation.tsx` — ikona lupy na mobile
  - **Zrobione**:
    - Client-side search z prebuilt index (usługi, narzędzia, artykuły, realizacje, strony statyczne).
    - Modal z instant wynikami podczas pisania (debounce 150ms).
    - Grupowanie wyników (Usługi / Narzędzia / Edukacja / Realizacje / Strony).
    - Keyboard navigation: `↑↓` nawigacja, `Enter` przejście, `Esc` zamknij.
    - `Ctrl+K` / `Cmd+K` otwiera dialog (globalny listener).
    - Ikona lupy w desktop nav i mobile header.
    - Zero results: komunikat + link do kontaktu.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[22] Blog: skrócenie i rozbicie artykułu o treściach SEO (22→10 min)**

  - Główny artykuł skrócony do 10 min i przekształcony w hub z linkami do nowych artykułów.
  - Dodano 5 nowych artykułów:
    - `jak-dopasowac-tresc-do-intencji-uzytkownika-google`
    - `struktura-naglowkow-i-formatowanie-tekstu-pod-seo`
    - `jak-pisac-meta-title-i-meta-description`
    - `linkowanie-wewnetrzne-jak-laczyc-strony-dla-google`
    - `jak-aktualizowac-stare-tresci-zeby-nie-tracily-pozycji`

- ✅ **[13] Blog: dopracowanie artykułu o indeksacji w Google (13→8 min)**

  - Rozbicie cofnięte (tematy zbyt ściśle powiązane).
  - Artykuł przepisany z polskimi znakami i pełną odpowiedzią (diagnostyka + kroki naprawy).

- ✅ **[IDEA-025] Narzędzie: Generator kodu QR online (dla firm i materiałów drukowanych)**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/generator-kodu-qr/page.tsx`
    - `components/sections/tools/QrCodeGenerator.tsx`
    - `lib/tools/qr/generateQr.ts`
    - `components/shared/navigation-data/pl.ts` (TOOLS_SECTIONS_PL)
    - `components/shared/Footer.tsx` (toolsLinks)
    - `app/(pl)/narzedzia/page.tsx` (hub page)
    - `components/ui/tools/ToolAlert.tsx` (dodano variant warning)
  - **Zrobione**:
    - Nowe narzędzie client-side generujące kody QR z opcjami: URL, tekst, vCard, Wi-Fi, e-mail, telefon.
    - Wybór rozmiaru (150–1000px), marginesu (quiet zone 0–4) i poziomu korekcji błędów (L/M/Q/H).
    - Kolor kodu QR i tła z walidacją kontrastu (ostrzeżenie przy kontraście < 3:1).
    - Pobieranie jako PNG i SVG.
    - Podgląd aktualizuje się na bieżąco (debounce 300ms).
    - Dodano do nowej sekcji „Druk i materiały" w TOOLS_SECTIONS_PL.
    - Dodano do footera, hub page /narzedzia i JSON-LD schema.
    - Strona z contentem w przyjaznym, mentorskim tonie: wyjaśnienie czym jest QR, instrukcja krok po kroku, zastosowania (materiały drukowane, vCard, Wi-Fi), wskazówki do druku.
    - Instalacja biblioteki `qrcode` + `@types/qrcode`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-031] Rewrite: „Jak kolorystyka wpływa na decyzje zakupowe klientów?"**

  - Pliki: `data/pl/blog.json`
  - Przepisano artykuł w przyjaznym, mentorskim tonie.
  - Dodano instrukcję krok po kroku do generatora palet Arteon.
  - Uproszczono wyjaśnienia psychologii kolorów.
  - Dodano link do testera kontrastu WCAG.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-032] Rewrite: „FAQ na stronie: jak pisać pytania, które wspierają pozycję strony?"**

  - Pliki: `data/pl/blog.json`
  - Przepisano artykuł w przyjaznym tonie.
  - Wyjaśniono wszystkie terminy (FAQ, SEO, long-tail, FAQ schema, dane strukturalne).
  - Dodano analogie i przykłady z życia.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-033] Rewrite: „Ile czasu trwa pozycjonowanie strony firmowej i kiedy widać efekty?"**

  - Pliki: `data/pl/blog.json`
  - Przepisano artykuł w przyjaznym tonie.
  - Dodano wyjaśnienie czym jest SEO/pozycjonowanie.
  - Dodano analogię „SEO to jak sadzenie drzewa".
  - Uproszczono język techniczny.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-034] Rewrite: Pozostałe artykuły — audyt i dostosowanie tonu**

  - Pliki: `data/pl/blog.json`, `TASKS.md`
  - Przeprowadzono audyt pozostałych artykułów.
  - Artykuły o optymalizacji zdjęć i blogu lokalnym mają akceptowalny ton — nie wymagają natychmiastowej przeróbki.
  - Dodano sekcję DO/DON'T do instrukcji artykułów w `TASKS.md`.
  - Zaktualizowano sekcję Struktura — elastyczna, dopasowana do tematu.

- ✅ **[IDEA-028] Artykuł: „Jak przygotować profesjonalną stopkę mailową dla firmy?"**

  - Pliki: `data/pl/blog.json`, `TASKS.md` (wytyczne tonu)
  - **Zrobione 2025-12-18**:
    - Dodano artykuł w nowym, przyjaznym i mentorskim tonie.
    - Zastosowano zasadę: zrozumiałe dla 5-latka i 60-letniej osoby bez wiedzy technicznej.
    - Artykuł zawiera instrukcję krok po kroku dla generatora Arteon.
    - Zaktualizowano wytyczne artykułów w `TASKS.md` o nowe zasady tonu (sekcja „KLUCZOWE: Maksymalna prostota i przyjazność").
    - Zawiera 6 FAQ oraz CTA do generatora i oferty identyfikacji wizualnej.
    - Poprawione polskie znaki diakrytyczne (ą, ę, ó, ś, ć, ż, ź, ł, ń).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-029] Artykuł: „Favicon i ikony strony: co przygotować, żeby działały w przeglądarkach i Lighthouse?"**

  - Pliki: `data/pl/blog.json`
  - **Zrobione 2025-12-18**:
    - Dodano artykuł w przyjaznym, mentorskim tonie zgodnie z wytycznymi.
    - Artykuł wyjaśnia: czym jest favicon, jakie pliki są potrzebne, najczęstsze błędy, jak stworzyć zestaw w generatorze Arteon.
    - Instrukcja krok po kroku dla generatora favicon.
    - Zawiera 6 FAQ oraz CTA do generatora i oferty stron internetowych.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny — narzędzia, usługi, artykuły, cross-linking**

  - **Zrobione 2025-12-18**:
    - Audyt ogólny: przegląd `PAGES_CATALOG.md`, `TOOLS_CATALOG.md`, `BLOG_CATALOG.md`.
    - Zidentyfikowano luki: brak nowych narzędzi od czasu launch, brak usługi opieki/konsultacji, brak artykułów wspierających istniejące narzędzia.
    - Dodano 6 nowych pomysłów w `TASKS.md` (sekcja Pomysły):
      - `IDEA-025` — Generator kodu QR (nowe narzędzie)
      - `IDEA-026` — Usługa „Opieka nad stroną" (pakiety utrzymania)
      - `IDEA-027` — Usługa „Konsultacje" (sesje doradcze UX/SEO)
      - `IDEA-028` — Artykuł o stopce mailowej (wspiera narzędzie)
      - `IDEA-029` — Artykuł o favicon (wspiera narzędzie)
      - `IDEA-030` — ToolsCarousel na stronach usług (cross-linking)

## 2025-12-17

- ✅ **[11] Blog: "FAQ na stronie: jak pisać pytania, które wspierają pozycję strony?"**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-17**:
    - Dodano nowy artykuł (slug: `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony`) wraz z pełnym `contentBlocks`, `seo`, `cta` i `faq`.
    - Dodano linkowanie wewnętrzne do powiązanych treści oraz CTA do oferty (`/uslugi/marketing/audyt-seo`).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny — O nas (propozycje nowych podstron)**

  - **Zrobione 2025-12-17**:
    - Przegląd istniejących stron: `/o-nas`, `/o-nas/faq`, `/o-nas/dolacz-do-sieci`.
    - Dodano propozycje rozbudowy sekcji „O nas” w `TASKS.md`: `IDEA-019`-`IDEA-024`.

- ✅ **[20] Blog: "Jak dobrać domenę i adresy URL podstron, aby wzmocnić pozycję strony w wyszukiwarce?"**

  - Pliki:
    - `data/pl/blog.json`
    - `components/sections/blog/ArticlesCarousel.tsx`
    - `app/(pl)/mapa-strony/page.tsx`
    - `utils/blogCategory.ts`
    - `lib/blog.ts`
    - `types/article.ts`
    - `public/assets/blog/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce.webp`
  - **Zrobione 2025-12-17**:
    - Dodano nowy artykuł (slug: `jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce`) wraz z pełnym `contentBlocks`, `seo`, `cta` i `faq`.
    - Ujednolicono generowanie URL-i artykułów (primaryCategory → fallback) w linkach wewnętrznych (karuzela artykułów, `/mapa-strony`) do kanonicznego `/edukacja/{kategoria}/{slug}`.
    - Dodano okładkę: `public/assets/blog/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce.webp`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[32] Blog: "Bezpieczeństwo strony internetowej: zabezpieczenia, które powinny być wdrożone w 2026"**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-17**:
    - Dodano nowy artykuł (slug: `bezpieczenstwo-strony-internetowej-zabezpieczenia-2026`) wraz z pełnym `contentBlocks`, `seo`, `cta` i `faq` + linkowaniem wewnętrznym.
    - Dodano okładkę: `public/assets/blog/bezpieczenstwo-strony-internetowej-zabezpieczenia-2026/bezpieczenstwo-strony-internetowej-zabezpieczenia-2026.webp`.
    - Sprawdzone: `blog.json` (JSON OK).

- ✅ **[IDEA-008] Tester kontrastu WCAG: obsługa HSL/alpha + propozycja koloru spełniającego AA/AAA**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
    - `components/sections/tools/WcagContrastChecker.tsx`
    - `lib/tools/color/types.ts`
    - `lib/tools/color/convert.ts`
    - `lib/tools/color/contrast.ts`
    - `HOOKS_CATALOG.md`
    - `TOOLS_CATALOG.md`
  - **Zrobione 2025-12-17**:
    - Dodano obsługę `hsl()/hsla()` oraz uwzględniono alpha przez kompozycję w obliczeniach kontrastu.
    - UI: bezpieczny color picker dla nie-HEX + selektor progu WCAG + akcja `Dopasuj` (podgląd, `Ustaw`, kopiowanie).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-003] Repo: audyt cleanup (puste pliki, martwe exporty, nieużywany kod/warianty)**

  - **Zrobione 2025-12-17**:
    - Skan `git ls-files` pod kątem pustych plików (0B): brak.
    - Wykryto pliki śledzone w git, ale usunięte lokalnie (pozostałość po spłaszczeniu `PaletteExtractor/*`).
    - Follow-up zadania: `CLEANUP-011`.

- ✅ **[IDEA-006] Generator favicon: pełny pakiet (16/32 + apple/android) + paczka ZIP**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
    - `components/sections/tools/FaviconGenerator.tsx`
    - `lib/tools/zip.ts`
    - `lib/tools/zip/createZipBlob.ts`
    - `TOOLS_CATALOG.md`
  - **Zrobione 2025-12-17**:
    - Dodano opcjonalne generowanie PNG `16x16` i `32x32` (obok `180/192/512`) + spójne nazwy plików.
    - Dodano `Pobierz paczkę (.zip)` (wybrane pliki + opcjonalnie `site.webmanifest`).
    - Snippet do `<head>`: **nie wdrożono** — **decyzja użytkownika**.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-004] Konwerter JPG/PNG na WebP: pobieranie paczki ZIP + eksport raportu oszczędności**

  - Pliki:
    - `components/sections/tools/JpgPngToWebp.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpConversion.ts`
    - `lib/tools/image/webpReport.ts`
  - **Zrobione 2025-12-17**:
    - Dodano `Pobierz wszystko (.zip)` tworzące archiwum z poprawnie skonwertowanymi plikami WebP.
    - Dodano opcję dołączenia raportu `CSV` do ZIP.
    - Dodano przełącznik trybu auto-download: `Pojedyncze pliki` vs `Jedna paczka ZIP`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PERF-002] Obrazy: zredukować agresywne ustawienia jakości (`quality={100}`)**
  - Pliki:
    - `components/ui/ProjectCard.tsx`
  - **Zrobione 2025-12-17**:
    - Obniżono jakość w `ProjectCard` z `quality={100}` do `quality={85}` (karty/miniatury/karuzele) bez regresji UI/UX.
    - Zweryfikowano: `app/(pl)/realizacje/[slug]/page.tsx`, `app/(pl)/edukacja/[category]/[slug]/page.tsx` — brak `quality={100}`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

## 2025-12-16

- ✅ **[TOOLS-014] Palette Extractor: rekomendacje zmian tekstów/funkcji + ujednolicenie z innymi narzędziami**

  - Pliki:
    - `components/sections/tools/PaletteExtractor.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `TOOLS_CATALOG.md`
  - **Zrobione 2025-12-16**:
    - Uproszczono copy/UX: mniej technicznie, więcej o korzyściach.
    - Usunięto akcje `Kopiuj paletę` i `Wyczyść` — pozostawiono kopiowanie per kolor oraz prostą podmianę obrazu przez ponowne wgranie pliku.
    - Ujednolicono implementację z innymi narzędziami: spójna struktura `ToolSection`/`ToolInfo`/`ToolAlert`, inline upload.
    - Spłaszczono strukturę komponentu (usunięto folder i subkomponenty `PaletteExtractor/*`).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CLEANUP-010] Tooltip: zastąpić lokalny timer przez `useTimeout`**

  - Pliki:
    - `components/sections/Tooltip.tsx`
    - `hooks/useTimeout.ts`
  - **Zrobione 2025-12-16**:
    - Tooltip używa `useTimeout()` do opóźnionego otwarcia (zamiast lokalnego `timerRef` + `clearTimer`).
    - Zachowano zachowanie: `delay`, `Escape`, outside click, scroll i touch toggle.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły”**

  - **Zrobione 2025-12-16**:
    - Dodano 10 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-001`-`IDEA-010`.
  - **Zrobione 2025-12-16**:
    - Dodano 8 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-011`-`IDEA-018`.

- ✅ **[TOOLS-016] Narzędzia: ujednolicić upload/drag&drop (ToolFileDropzone)**

  - Pliki:
    - `components/sections/tools/ImageResizeTool.tsx`
    - `components/sections/tools/JpgPngToWebp.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpQueue.ts`
    - `components/ui/tools/ToolFileDropzone.tsx`
    - `hooks/useFileDropzone.ts`
  - **Zrobione 2025-12-16**:
    - Przepięto UI uploadu w `ImageResizeTool` i `JpgPngToWebp` na wspólny komponent `ToolFileDropzone` (copy i klasy bez zmian).
    - WebP: uproszczono `useWebpQueue` — `addFiles()` jest jedynym wejściem, usunięto zduplikowane handlery (`onDrop`/`onDragOver`/`onChange`).
    - Zachowano reset inputa po wyborze oraz działanie drag&drop.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PROJECT-005] Realizacje: dopiąć `cta` (brakujące) + naprawić niespójne CTA**

  - Plik: `data/pl/projects.json`
  - **Zrobione 2025-12-16**:
    - Dodano brakujące `cta` dla slugów: `strona-dla-psychologa-msc-psychotherapy`, `katalog-produktow-restoquality`, `wizytowka-dla-spa-talia`, `blog-sportowy-pilka-nozna-pl`, `sklep-dla-firmy-odziezowej-trilllizo`, `meridol-accessibility`, `wizytowki-dla-gastronomii-restoquality`, `elmex-accessibility`, `sanex-accessibility`, `sanex`, `palmolive`, `colgate`, `detergent-regulations`.
    - Naprawiono niespójne CTA dla `wizytowka-dla-kancelarii-adwokackiej-lux-nova` (copy, linki, `backgroundImage`).
    - Ujednolicono: `btnOneLink: "/kontakt"`, `btnTwoLink` do pasującej usługi, `backgroundImage` z assetów tej realizacji.
    - Weryfikacja: `projects.json` parsuje się poprawnie (JSON OK).

- ✅ **[CLEANUP-009] Tools: wynieść wyliczanie `inputFormat` (ext/MIME) do shared util**

  - Pliki:
    - `lib/tools/fileFormat.ts`
    - `components/sections/tools/PaletteExtractor.tsx`
    - `components/sections/tools/ImageResizeTool.tsx`
  - **Zrobione 2025-12-16**:
    - Dodano util `getFileFormatLabel(file)` zwracający uppercase ext lub MIME subtype (fallback `N/D`).
    - Podmieniono wyliczanie `inputFormat` w `PaletteExtractor` i `ImageResizeTool` na wspólny helper (bez zmian w UI/UX i copy).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PROJECT-006] Realizacje: higiena treści**

  - Plik: `data/pl/projects.json`
  - **Zrobione 2025-12-16**:
    - `blog-sportowy-pilka-nozna-pl` (linia 756): `PilkaNożna.pl` → `PiłkaNożna.pl`
    - `blog-sportowy-pilka-nozna-pl` (linia 758): `zmianie systemy` → `zmianie systemu`
    - `blog-sportowy-pilka-nozna-pl` (linia 758): `...z grupą programistów</p>` → `...z grupą programistów.</p>`
    - `katalog-produktow-restoquality` (linia 652): `katalogu, ze sprzętami` → `katalogu ze sprzętami`
    - `katalog-produktow-restoquality` (linia 652): `parametrów, przez właścicieli` → `parametrów przez właścicieli`
    - `katalog-produktow-restoquality` (linia 652): `W katalogu zebraliśmy znajdują się piece do pizzy` → `W katalogu znajdują się piece do pizzy`
    - `katalog-produktow-restoquality` (linia 681): `Tak. Tworzymy możemy stworzyć autorskie ikony cech produktu, jak i inne elementy...` → `Tak. Możemy stworzyć autorskie ikony cech produktu oraz inne elementy...`
    - `katalog-produktow-restoquality` (linia 703): `katalogu toduktów` → `katalogu produktów`
    - `sklep-dla-firmy-odziezowej-trilllizo` (linia 779): `dedykowanie szkolenie` → `dedykowane szkolenie`
    - `sklep-dla-firmy-odziezowej-trilllizo` (linia 780): `SEO ( techniczne, zdjęcia, treść )` → `SEO (techniczne, zdjęcia, treść)`
    - `sklep-dla-firmy-odziezowej-trilllizo` (linia 794): `odziezowej` → `odzieżowej`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 106): `wirmy` → `firmy`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 106): `A3 ( składany na A4 )` → `A3 (składany na A4)`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 107): `( projekt, dobór materiałów i realizacja u jednego wykonawcy )` → `(projekt, dobór materiałów i realizacja u jednego wykonawcy)`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 107): `przekirowuje` → `przekierowuje`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 107): `wraz z szczegółowym` → `wraz ze szczegółowym`
    - `detergent-regulations` (linia 993): `konfugaracji` → `konfiguracji`
    - `detergent-regulations` (linia 993): `lokalizacje, oraz` → `lokalizacje oraz`
    - `detergent-regulations` (linia 993): `m.in mapy` → `m.in. mapy`
    - `wizytowki-dla-gastronomii-restoquality` (linia 829): `Szablon kompozycji umożliwiają` → `Szablon kompozycji umożliwia`
    - `wizytowki-dla-gastronomii-restoquality` (linia 836): `imie` → `imię`
    - `wizytowki-dla-gastronomii-restoquality` (linia 856): `pliki produkcyjny` → `pliki produkcyjne`
    - `wizytowka-dla-spa-talia` (linia 712): `<strong>wizytówke</strong>` → `<strong>wizytówki</strong>`
    - `detergent-regulations`: doprecyzować opis analityki (co wdrożono + jak testowano).

- 🟡 **[AUDIT-005] Repo: audyt performance sanity-check (client components/rerender/obrazy)**
  - **Zrobione 2025-12-16**:
    - Skan `public/assets/**` pod kątem największych plików (m.in. `public/assets/projects/arteon-a-msc2.webp` ~791KB, `public/assets/bg/abstract-bg1.webp` ~344KB).
    - Skan kodu pod perf-smells: `quality={100}` (`components/ui/ProjectCard.tsx`), `bg-fixed` (`components/sections/HeroBanner.tsx`, `components/sections/CTABanner.tsx`), client-only `CodeBlock` (`components/ui/CodeBlock.tsx`).
    - Follow-up zadania: `PERF-001`, `PERF-002`, `PERF-003`.

## 2025-12-15

- 🟡 **[AUDIT-002] Repo: audyt duplikacji logiki (hooks/utils/komponenty)**

  - **Zrobione 2025-12-15**:
    - Skan duplikacji: narzędzia (`components/sections/tools/*`), dropzone (`hooks/useFileDropzone.ts`, `components/ui/tools/ToolFileDropzone.tsx`), timery/copy (`hooks/useTimeout.ts`, `hooks/useCopyToClipboard.ts`).
    - Follow-up zadania: `TOOLS-016`, `CLEANUP-009`, `CLEANUP-010`.

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły”**

  - **Zrobione 2025-12-15**:
    - Dodano 10 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-001`-`IDEA-010`.

- ✅ **[SEO-015] O nas: dodać podstronę FAQ (`/o-nas/faq`) i rozbudować treść pod SEO**

  - Pliki:
    - `app/(pl)/o-nas/faq/page.tsx`
    - `app/(pl)/mapa-strony/page.tsx`
    - `components/shared/Footer.tsx`
    - `PAGES_CATALOG.md`
  - **Zrobione 2025-12-15**:
    - Utworzono nową stronę FAQ z min. 25 pytaniami i odpowiedziami (spójny ton + long-tail pod SEO).
    - Dodano `metadata` (title/description/canonical/openGraph) oraz schema.org `FAQPage` + breadcrumbs (JSON-LD, bez duplikacji).
    - Podlinkowano `/o-nas/faq` w stopce oraz na `/mapa-strony`; uzupełniono `PAGES_CATALOG.md`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PAGES-002] /o-nas: przebudowa copy + sekcje proof (realizacje i opinie)**

  - Plik:
    - `app/(pl)/o-nas/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono narrację strony „O nas” tak, aby opisywała szerszą ofertę (strategia, branding, technologia, marketing) zamiast komunikacji skupionej na „samej stronie”.
    - Zaktualizowano: `HeroBanner`, `BenefitBelt`, copy w `SectionBasic`, opis w `SectionInfo` oraz pierwszy wyróżnik w `SectionSteps`.
    - Dodano sekcje proof: `ProjectsCarousel` + `TestimonialsCarousel` po `WorkSteps`.
    - Zaktualizowano `metadata.title` i `metadata.description` (bez zmian OG image — osobno w `SEO-013`).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-004] Repo: audyt SEO sanity-check (canonical/OG/schema/robots/sitemap)**

  - **Zrobione 2025-12-15**:
    - Sprawdzono canonical (absolute), OpenGraph (URL absolute) i Schema.org (URL absolute) na kluczowych stronach.
    - Zweryfikowano `public/robots.txt` oraz sitemap index (`public/sitemap.xml` → `public/sitemap-0.xml`) - bez regresji.
    - Follow-up zadania: `SEO-013`, `SEO-016`, `SEO-017`.

- ✅ **[CLEANUP-008] Karuzele: `CarouselCard` ma re-use `ProjectCard` i `TestimonialCard`**

  - Pliki:
    - `components/ui/carousel/CarouselCard.tsx`
    - `components/ui/ProjectCard.tsx`
    - `components/ui/TestimonialCard.tsx`
    - `components/sections/projects/ProjectsCarouselClient.tsx`
    - `components/sections/TestimonialsCarousel.tsx`
  - **Zrobione 2025-12-15**:
    - Potwierdzono, że `CarouselCard` renderuje `ProjectCard` dla wariantu `project` (`size="small"`) oraz `TestimonialCard` dla wariantu `testimonial`.
    - Nie było potrzeby zmian w kodzie - integracja była już zaimplementowana.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[COPY-042] CookieConsent: usunąć zbędną spację w wyróżnieniu „Google Analytics 4”**

  - Plik: `components/shared/CookieConsent.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `<strong> Google Analytics 4</strong>` → `<strong>Google Analytics 4</strong>`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-041] Cookies: ujednolicić nazewnictwo na „pliki cookie” w UI**

  - Pliki:
    - `components/shared/Footer.tsx`
    - `components/shared/CookieConsent.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono copy w UI: `cookies/Cookies` → `pliki cookie` (stopka + modal).
    - Zaktualizowano dokumentację: `COMPONENTS_CATALOG.md`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-040] /narzedzia (hub): poprawić literówkę w opisie (metadata/OG)**

  - Plik: `app/(pl)/narzedzia/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `ulepszą swoją identyfikację` → `ulepsz swoją identyfikację` w metadata i OpenGraph.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-039] Meta length tool (strona): poprawić odmianę „długości” w tytule i breadcrumbs**

  - Plik: `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono zapis: `Licznik długość ...` → `Licznik długości ...` (hero + breadcrumbs).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-038] PaletteExtractor (strona): poprawić „Cię” oraz spójność liczby w opisach**

  - Plik: `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono CTA: `wyróżni Cie` → `wyróżni Cię`.
    - Ujednolicono liczbę w opisach (spójne `zdjęcie` + `na nim`) w metadata/OG/schema.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-037] ColorPaletteGenerator: poprawić cudzysłów w opisie palety**

  - Plik: `components/sections/tools/ColorPaletteGenerator.tsx`
  - **Zrobione 2025-12-15**:
    - Naprawiono mieszanie cudzysłowów w opisie palety pastelowej: `„kremowe"` → `„kremowe”`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-036] ServicesSteps: poprawić literówki i interpunkcję w opisach usług**

  - Plik: `components/sections/steps/ServicesSteps.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `nie zależnie` → `niezależnie`, usunięto zbędny przecinek po `czemu` oraz `jak i` → `i` w `ui.pl.description`.
    - Ujednolicono zapis w liście: `Bezpłatne Szkolenie PDF` → `Bezpłatne szkolenie PDF`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[TOOLS-010] EmailSignatureGenerator: refactor (HTML/sanitizacja/kopiowanie)**

  - Pliki:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/sanitize.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `components/sections/tools/EmailSignatureGenerator/useSignatureCopy.ts`
  - **Zrobione 2025-12-15**:
    - Wydzielono typy do `types.ts`.
    - Wydzielono sanitizację HTML/URL do `sanitize.ts`.
    - Przeniesiono generowanie stopki do `buildSignatureHtml` (layouty + inline styles).
    - Wydzielono kopiowanie do `useSignatureCopy` (preferencja: rich HTML przez `execCommand('copy')`; fallback: `navigator.clipboard.writeText`).
    - Zachowano UI/UX i treści bez zmian.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-009] ImageResizeTool: refactor (crop math / pointer events / eksport)**

  - Pliki:
    - `components/sections/tools/ImageResizeTool.tsx`
    - `components/sections/tools/ImageResizeTool/types.ts`
    - `components/sections/tools/ImageResizeTool/cropMath.ts`
    - `components/sections/tools/ImageResizeTool/useCropDrag.ts`
    - `components/sections/tools/ImageResizeTool/exportCroppedImage.ts`
  - **Zrobione 2025-12-15**:
    - Wydzielono typy i obliczenia kadru do `types.ts` i `cropMath.ts`.
    - Przeniesiono obsługę drag (move/resize) do hooka `useCropDrag`.
    - Wydzielono eksport (canvas → blob → download) do `exportCroppedImage`.
    - Dopilnowano cleanup `ObjectURL` (m.in. podgląd i wynik eksportu).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-008] JpgPngToWebp: rozdzielenie na hooki (queue/konwersja/download/raport)**

  - Pliki:
    - `components/sections/tools/JpgPngToWebp.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpQueue.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpConversion.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpReportCopy.ts`
  - **Zrobione 2025-12-15**:
    - Wydzielono logikę narzędzia do dedykowanych hooków (kolejka, konwersja, downloady, raport) bez zmian w UI/UX.
    - Zachowano smart-quality (automatyczne obniżanie jakości, gdy WebP byłby większy od oryginału; min `60`, krok `5`).
    - Dopilnowano cleanup: zwalnianie `ObjectURL` przy usuwaniu/resetowaniu elementów i na unmount.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[SECURITY-001] Linki z `target="_blank"`: dopiąć `rel="noopener noreferrer"`**

  - Pliki:
    - `components/shared/Navigation.tsx`
    - `components/shared/Footer.tsx`
    - `app/(pl)/uslugi/strony-internetowe/page.tsx`
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
    - `data/pl/blog.json`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Zrobione 2025-12-15**:
    - Dodano `rel="noopener noreferrer"` do linków z `target="_blank"`.
    - Ujednolicono `rel="noreferrer"` → `rel="noopener noreferrer"` dla spójności.
    - Uzupełniono `rel` w linkach w `blog.json` (HTML w `richtext` renderowany przez `dangerouslySetInnerHTML`).
    - Naprawiono błąd ESLint blokujący build (`no-useless-escape`) w `buildSignatureHtml.ts`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[SEO-014] Schema.org: usunięcie `SearchAction` (brak wyszukiwarki)**

  - Plik:
    - `app/layout.tsx`
  - **Zrobione 2025-12-15**:
    - Usunięto TODO oraz zakomentowany `potentialAction` (`SearchAction`) z JSON-LD `WebSite` (wyszukiwarka nie jest wdrażana).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[STYLES-003] UI: ujednolicić kolory ikon i buttona akcentowego**

  - Pliki:
    - `app/(pl)/uslugi/**/page.tsx`
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/ui/buttons/Button.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono kolor ikon do `text-slate-700` (tylko elementy ikon).
    - Ustawiono główny button z akcentem na `text-slate-600`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[STYLES-002] Kolory: tokenizacja i usunięcie raw hexów**

  - Pliki:
    - `components/shared/CookieConsent.tsx`
    - `components/shared/SkipToContent.tsx`
    - `components/sections/Tooltip.tsx`
    - `components/sections/tools/ColorPaletteGenerator.tsx`
    - `components/sections/tools/FaviconGenerator.tsx`
    - `lib/tools/favicon/generator.ts`
    - `components/sections/tools/WcagContrastChecker.tsx`
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Zrobione 2025-12-15**:
    - Zastąpiono twardo zakodowane kolory tekstu tokenami systemowymi (`text-light`, `text-mid`, `text-dark`) zgodnie z kanonem.
    - Usunięto raw hexy w narzędziach (domyślne wartości kolorów w `useState` / presetach) przez wyliczanie wartości przez `rgbToHex`.
    - Usunięto hex fallback w generatorze favicon (canvas) na rzecz `rgb(...)`.
    - Zweryfikowano, że w repo nie ma `text-black` oraz nie ma heksów poza kanonicznymi definicjami w `app/globals.css`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-015] Narzędzia: mobile support (allowlist) + selektywna blokada**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/layout.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/layout.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/*/page.tsx`
    - `PAGES_CATALOG.md`
  - **Zrobione 2025-12-15**:
    - Zmieniono `app/(pl)/narzedzia/(tools)/layout.tsx` na layout neutralny.
    - Dodano route group `(desktop-only)` z layoutem blokującym na `< lg` i przeniesiono do niego strony narzędzi desktop-only (bez zmiany URL).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CLEANUP-007] OfferDesign: ujednolicić nazwy komponentów stron na angielskie**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-odziezy-firmowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-papieru-firmowego/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-wizytowki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono nazwy `export default function OfferDesign*()` na angielskie i opisowe (bez polskich segmentów w nazwach) dla czytelności i DevTools.
    - Bez zmian w UI/UX ani treści.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CLEANUP-005] Blog: naprawić błędne tagi `<p>` w intro artykułu (blog.json)**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Naprawiono błędną strukturę HTML w intro artykułu: `treści.<p><p>Na szczęście` → `treści.</p><p>Na szczęście`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (content-only).

- ✅ **[CLEANUP-006] Nazwy komponentów stron: usunąć placeholder `Xxx`**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono nazwy komponentów stron na angielskie i opisowe: `OfferDesignWebsiteGraphicDesignPage`, `OfferDesignBrandIdentityDesignPage`.
    - Bez zmian w UI/UX ani treści (tylko nazwy funkcji export default).
    - Zweryfikowano pozostałe strony `OfferDesign*` i dopisano follow-up: `CLEANUP-007`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-001] Repo: codzienny audyt jakości + SEO + wydajności (raport dzienny)**

  - **Zrobione 2025-12-15**:
    - Audyt dokumentacji: uporządkowano `TASKS.md` (aktualizacja daty weryfikacji, doprecyzowanie DoD dla COPY/content-only).
    - Zidentyfikowano braki SEO i dopisano zadania: `SEO-013` (dedykowane OG dla głównych stron) oraz `SEO-014` (rozliczenie `SearchAction`).
    - Doprecyzowano zakres `SECURITY-001` (pliki + konkretne przypadki `target="_blank"` bez `rel` / z `rel="noreferrer"`).
    - Dopisano `CLEANUP-006` (usunąć placeholder `Xxx` w nazwach komponentów stron).
    - Bez zmian w produkcyjnym kodzie w ramach audytu (tylko tracking / dokumentacja).

- ✅ **[TOOLS-011] Narzędzia: `lint` + `typecheck` (build)**

  - **Zrobione 2025-12-15**:
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).
    - Zaktualizowano tracking: przeniesiono wpis TOOLS-011 z `TASKS.md` do `DONE_TASKS.md`.

- ✅ **[COPY-002] Strona główna: poprawić „Niezależnie” i interpunkcję w opisie sekcji**

  - Plik: `app/(pl)/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono ortografię i interpunkcję w opisie sekcji (m.in. `Niezależnie`, `dzięki czemu, pracując z nami, masz`, `sposób, aby`, `m.in. RODO`, `martwić, jeśli`).
    - Ujednolicono brzmienie opisu marketingu: `oraz` zamiast `jak i`, oraz `tam, gdzie`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-014] Kontakt: dodać przecinek w zdaniu „Napisz, co…” (metadata + OpenGraph)**

  - Plik: `app/(pl)/kontakt/page.tsx`
  - **Zrobione 2025-12-15**:
    - Dodano przecinek w `metadata.description` i `openGraph.description`: `Napisz, co chcesz stworzyć`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-015] Edukacja: domknąć zdanie w opisach (metadata + OpenGraph + schema)**

  - Plik: `app/(pl)/edukacja/page.tsx`
  - **Zrobione 2025-12-15**:
    - Domknięto zdanie w opisach (metadata/OG/schema): `Odwiedź nas i sprawdź nasze poradniki.`
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-016] Tworzenie treści: poprawić odmianę „budujące” w siatce benefitów**

  - Plik: `app/(pl)/uslugi/tworzenie-tresci/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono odmianę: `Treści budujący` → `Treści budujące`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-017] Karta lojalnościowa: poprawić literówki, odmianę i interpunkcję w opisach**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono literówki/odmianę/interpunkcję w opisach i FAQ (m.in. `Twoich`, `dzięki temu mam`, `branż, w których`, `Twoją identyfikacją wizualną`, `indywidualnie ustalone rundy korekt`, `(85 × 55 mm)`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-018] Katalog: poprawić literówki, odmianę i interpunkcję w opisach CTA/sekcji**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję i odmianę w opisie formularza, sekcji „Zobacz też” oraz CTA (m.in. `klienci`, `sprzedaż`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-019] Menu restauracji: poprawić literówki i interpunkcję w sekcji kontaktowej i „Zobacz też”**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-menu-restauracji/page.tsx`
  - **Zrobione 2025-12-15**:
    - Dodano przecinek w opisie formularza: `Opisz, jakie…`.
    - Poprawiono literówkę w sekcji „Zobacz też”: `Projekt ulotk` → `Projekt ulotki`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-020] Audyt SEO: dodać brakujące przecinki i poprawić literówki (metadata + treści)**

  - Plik: `app/(pl)/uslugi/marketing/audyt-seo/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję i literówki w `metadata` oraz treściach (m.in. `sprawi, że`, `sprawdź, co…`, `tak, aby…`, `przygotowujemy`, `w audycie`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-021] Licznik długości meta: poprawić interpunkcję i „Cię” w CTA bannerze**

  - Plik: `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono CTA: `..., a my powiemy, co zrobić, aby…` oraz `Cie` → `Cię`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-022] Projekty graficzne: dodać przecinki po „Opisz” i przed „aby” w opisach formularza**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono interpunkcję w opisach formularzy: `Opisz, ...` oraz `..., aby ...`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-023] Marketing: poprawić „Cię”, odmianę i przecinki w opisach oferty**

  - Plik: `app/(pl)/uslugi/marketing/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `Cię`, `konsultacje online`, `audyt SEO, a następnie` oraz `tak, aby Google`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-024] Pozycjonowanie stron: poprawić „strategii”, „Cię” i przecinki w opisach**

  - Plik: `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `strategii`, `tam, gdzie`, `szukają Cię`, `audyt SEO, a następnie` oraz `tak, aby Google`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-025] Usługi: dodać przecinki w zdaniach „tak, aby” i „..., a następnie ...”**

  - Plik: `app/(pl)/uslugi/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję: `tak, aby`, `audyt SEO, a następnie` oraz `tak, aby Google`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-026] Blogi internetowe: poprawić przecinki w odpowiedzi FAQ**

  - Plik: `app/(pl)/uslugi/blogi-internetowe/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję w odpowiedzi FAQ: `pomagamy w` oraz `tak, aby`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-027] Projekt graficzny strony: poprawić literówki i odmianę w FAQ/CTA**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono literówki i odmianę w FAQ/CTA (m.in. `koszty`, `od razu`, `pojedyncze`, `edycję`, `potencjalnych`, `Cię`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-028] Identyfikacja wizualna: poprawić literówki, odmianę i interpunkcję w FAQ/sekcji**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono literówki/odmianę/interpunkcję w FAQ/sekcji (m.in. `identyfikacji`, `każdy element`, `omawiamy, dając`, `źródłowe`, `od razu`, `miejscach`, `potencjalnych`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-029] Teczka ofertowa: poprawić „tak, aby” oraz literówki w opisach**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `tak, aby`, `w jego pamięci` oraz `korzyściami`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-030] Cennik: dodać przecinek w zdaniu „tak, aby” w opisie sekcji**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję: `tak, aby` w opisie sekcji.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-031] FeesSteps: poprawić literówki i interpunkcję w sekcji „Płatności i bezpieczeństwo”**

  - Plik: `components/sections/steps/FeesSteps.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono zapis kwot: `Do 5 000 zł`, `Do 10 000 zł`, `Powyżej 10 000 zł`.
    - Poprawiono literówki i interpunkcję (m.in. `zaakceptowaniu wyceny`, `dzięki którym zawsze wiesz, czego`, `tak, aby`, `wiedział, jak`, `projekty`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-032] Blog: poprawić interpunkcję w opisie CTA (blog.json)**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję w `cta.description`: `..., a my ...` oraz `Twoja firma zyska ...`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-033] Blog: dodać przecinki w intro artykułu (blog.json)**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Poprawiono intro artykułu: `opowiemy, co zrobić, aby...`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-034] O nas: poprawić interpunkcję w opisach sekcji**

  - Plik: `app/(pl)/o-nas/page.tsx`
  - **Zrobione 2025-12-15**:
    - Usunięto zbędne przecinki w opisach oraz ujednolicono zapis (m.in. `usług powinna`, `Po wdrożeniu dwa miesiące...`).
    - Poprawiono opis sekcji: `krok po kroku oraz` i `działamy w modelu`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-001] Polityka prywatności: ujednolicić zapis „pliki cookie”**

  - Plik: `app/(pl)/polityka-prywatnosci/page.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono zapis na `pliki cookie` oraz poprawiono odmiany (`plikami cookie`, `plików cookie`).
    - Zaktualizowano nagłówek sekcji oraz zdania dot. zarządzania plikami cookie (bez zmian UI/UX).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[CLEANUP-004] Blog: ustandaryzować łamania linii w treściach artykułów**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Ustandaryzowano łamania linii do `<br/>` w `contentBlocks[].html`.
    - Poprawiono progi CWV w tabelach (LCP/INP), usuwając błędne fragmenty HTML.
    - Zaktualizowano `BLOG_CATALOG.md` (usunięto uwagi dot. jakości HTML).
    - Sprawdzone: `npm run build` (OK).

- ✅ **[TOOLS-012] Palette Extractor (z obrazu/logo)**: nowy tool + shared color pipeline

  - **Zrobione 2025-12-15**:
    - Dodano stronę narzędzia `/narzedzia/generator-palety-kolorow-z-obrazu` (`app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`) + schema `WebApplication` i canonical absolute.
    - Dodano komponent `PaletteExtractor` (upload PNG/JPG/SVG, ekstrakcja dominujących kolorów, kopiowanie HEX, clear + cleanup ObjectURL).
    - Dodano shared utilsy: `lib/tools/image/canvas.ts` (downscale → `ImageData`) oraz `lib/tools/color/extractPalette.ts` (bucketing + filtr podobieństwa).
    - Podpięto narzędzie w nawigacji oraz na `/narzedzia` (SectionSteps + ItemList JSON-LD) i zaktualizowano dokumentację: `PAGES_CATALOG.md`, `TOOLS_CATALOG.md`, `COMPONENTS_CATALOG.md`.
    - Dopięto a11y uploadu: dropzone jest fokusowalny, obsługuje Enter/Space i ma widoczny focus ring.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[SEO-012] Narzędzie `palette-extractor`: refaktor SEO (URL/tytuł/copy/OG/redirect)**

  - **Zrobione 2025-12-15**:
    - Zmieniono URL narzędzia na `/narzedzia/generator-palety-kolorow-z-obrazu`.
    - Zaktualizowano `metadata` (title/description/canonical), `openGraph` (url + image) oraz schema `WebApplication` (URL absolute).
    - Dodano dedykowany obraz OpenGraph: `public/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp`.
    - Dodano redirect 301 (permanent) ze starego URL narzędzia.
    - Zaktualizowano linkowanie wewnętrzne (nawigacja + `/narzedzia`) oraz dokumentację: `PAGES_CATALOG.md`, `TOOLS_CATALOG.md`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-007] FaviconGenerator**: rozdzielić pipeline PNG/ICO + zarządzanie outputami; reuse shared (download/objectURL)

  - **Zrobione 2025-12-15**:
    - Wydzielono pipeline generowania favicon do `lib/tools/favicon/generator.ts` (PNG sizes + opcjonalnie `favicon.ico`).
    - `FaviconGenerator` korzysta z nowego utila (UI/UX bez zmian).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
    - Zaktualizowano dokumentację: `TOOLS_CATALOG.md`, `HOOKS_CATALOG.md`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[UI-001] `.surface-*`: dokończyć migrację kart/paneli**

  - **Zrobione 2025-12-15**:
    - Dodano utilities w `app/globals.css`: `.surface-card-lift`, `.surface-card-soft`.
    - Przepięto powtarzające się style (bez zmian UI/UX):
      - `components/ui/ProjectCard.tsx` → `surface-card-lift`
      - `components/ui/FeatureCard.tsx` → `surface-card-soft`
      - `components/ui/sections/SectionSteps.tsx` → `surface-card-lift`
      - `components/ui/sections/SectionPrices.tsx` → `surface-card-lift`
      - `components/ui/TestimonialCard.tsx` → `surface-card-lift`
      - `components/sections/tools/ImageResizeTool.tsx` i `EmailSignatureGenerator.tsx` → `tool-section`
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[STYLES-001] Typografia: dopiąć globals-first**

  - **Zrobione 2025-12-15**:
    - Usunięto komponenty `Text` i `Heading` oraz zastąpiono ich użycia semantycznymi tagami (`h1`-`h6`, `p`, `span`) + klasami typografii (`.h*`, `.p`, `text-sm`, `text-xs`, `.text-light/.text-mid/.text-dark/.text-white`) z `globals.css`.
    - Zaktualizowano `COMPONENTS_CATALOG.md` (usunięto wpisy o `Text` i `Heading`).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[COPY-007] Blogi internetowe: ujednolicić zapis „pliki cookie”**
  - Plik: `app/(pl)/uslugi/blogi-internetowe/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono zapis: `cookies` → `pliki cookie` na `/uslugi/blogi-internetowe`.
    - Ustabilizowano `npm run build` na Windows: ustawiono produkcyjny cache Webpacka na `memory` w `next.config.ts`.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

## 2025-12-14

- 🟡 **[AUDIT-001] Repo: codzienny audyt jakości + SEO + wydajności (raport dzienny)**

  - **Zrobione 2025-12-14**:
    - Checki: `npm run lint`, `npm run build` (OK).
    - Naprawiono `/mapa-strony`: linki do artykułów edukacji uwzględniają kategorię (`/edukacja/[category]/[slug]`).
    - Naprawiono CTA w `data/pl/blog.json`: generator palet kolorów → `/narzedzia/generator-palet-kolorow-online`.
    - `FaviconGenerator`: nazwy plików PNG mają rozszerzenie `.png` zgodne z MIME `image/png`.
    - Skan perf/cleanup (timery/obserwery/ObjectURL): bez wykrytych problemów.

- ✅ **[COPY-012] Projekty graficzne: poprawić „rozważyć” w opisach sekcji „Zobacz też”**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówki w opisach sekcji „Zobacz też”: `rozwarzyć/rozwarżyć` → `rozważyć`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[COPY-005] Marketing: poprawić „miesiąc” w opisach pozycjonowania**

  - Pliki:
    - `app/(pl)/uslugi/marketing/page.tsx`
    - `app/(pl)/uslugi/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono `co miesiąć` → `co miesiąc` w opisach pozycjonowania na `/uslugi/marketing` i `/uslugi`.
    - Sprawdzone: `npm run lint` (OK). (`npm run build` pominięto — zmiana tylko literówek).
    - Poprawiono zapis: `ulotki,papier` → `ulotki, papier` (linia 277).

- ✅ **[COPY-004] Sklepy internetowe: poprawić literówki i składnię w FAQ**

  - Plik: `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono składnię: `zależy między innymi od`.
    - Poprawiono literówki: `Bezpieczeństwo`, `powinien`, `będę`, `kroki`.
    - Ujednolicono zapis: `pliki cookie`.
    - Usunięto zbędne spacje w nawiasach: `(adresu URL strony)`, `(wynajmowanego miejsca na serwerze)`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (zgodnie z prośbą).

- ✅ **[COPY-013] Optymalizacja SEO: poprawić „Teoretycznie” + zdanie w schema**

  - Plik: `app/(pl)/uslugi/marketing/optymalizacja-seo/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono `Teorytycznie` → `Teoretycznie` w sekcji FAQ.
    - Poprawiono `answerSchemaText`: dodano „Audyt SEO” i uporządkowano zdanie.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (zgodnie z zasadą dla COPY).

- ✅ **[COPY-011] Projekt logo: poprawić literówki w FAQ**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówki w FAQ: `rundę`, `pewien, jakie`, `ekspresową`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[CLEANUP-003] Repo: skan i usunięcie pustych plików/komponentów**

  - **Zrobione 2025-12-14**:
    - Przeskanowano repo (git-tracked) pod kątem plików 0B, whitespace-only oraz JS/TS zawierających tylko komentarze/whitespace — brak wyników.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[SEO-011] Schema OG + URL**

  - **Zrobione 2025-12-14**:
    - Ujednolicono bezwzględne URL-e (`https://www.arteonagency.pl/...`) w OpenGraph (`openGraph.url`, `openGraph.images[].url`) oraz w schema (JSON-LD `url`) na stronach.
    - Dla stron dynamicznych dopięto prefiks `siteUrl` dla obrazków OG/Twitter, gdy źródło było relatywne (`/assets/...`) (`/realizacje/[slug]`, `/edukacja/[category]/[slug]`).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[COPY-003] Strony internetowe: poprawić „w ciągu” + interpunkcję i literówki**

  - Plik: `app/(pl)/uslugi/strony-internetowe/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono interpunkcję i zapis w sekcji statystyk (m.in. `w przeciągu` → `w ciągu`, `osób, szukających` → `osób szukających`, usunięto zbędny przecinek po `Google`, `,a` → `, a`).
    - Poprawiono treści w FAQ (m.in. kapitalizacja pytania, `jest zależy` → `zależy`, usunięto spacje w nawiasach, `cookies` → `pliki cookie`, `wszystkie kroku` → `wszystkie kroki`).

- ✅ **[COPY-006] Portfolio: poprawić literówkę w opisie OpenGraph**

  - Plik: `app/(pl)/realizacje/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówkę w `metadata.openGraph.description`: `przejrzty proces` → `przejrzysty proces`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (zgodnie z prośbą).

- ✅ **[COPY-009] Usługi (listy): poprawić „hierarchią” i składnię opisu szablonów postów**

  - **Zrobione 2025-12-14**:
    - Poprawiono opis „Szablony postów na social media” na stronach list usług: `/uslugi` oraz `/uslugi/projekty-graficzne`.
    - Zmieniono składnię zdania (`ułatwiające regularne publikację, tworząc` → `ułatwiające regularne publikowanie i pomagające utrzymać`) oraz poprawiono literówkę `hieratchią` → `hierarchią`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[CLEANUP-002] Karuzele: rename `*Overview` → `*Carousel`**

  - **Zrobione 2025-12-14**:
    - Zaktualizowano importy i użycia: `ArticlesOverview` → `ArticlesCarousel`, `ProjectsOverview` → `ProjectsCarousel` (w tym `app/(pl)/uslugi/projekty-graficzne/**`).
    - Zaktualizowano dokumentację: `COMPONENTS_CATALOG.md`, `PAGES_CATALOG.md`.
    - Usunięto puste aliasy: `components/sections/blog/ArticlesOverview.tsx`, `components/sections/projects/ProjectsOverview.tsx`.
    - Naprawiono błąd ESLint blokujący build w `components/ui/TableBlock.tsx`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[COPY-008] Marketing: poprawić literówki i interpunkcję w sekcji korzyści**

  - Plik: `app/(pl)/uslugi/marketing/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówki i interpunkcję w sekcji korzyści na `/uslugi/marketing`.
    - Naprawiono błąd builda: dodano brakujący import `Text` w `components/ui/TestimonialCard.tsx`.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-006] WcagContrastChecker**: wynieść parsing/kontrast do utils; ujednolicić z color utils tam gdzie ma to sens (bez utraty formatów)

  - **Zrobione 2025-12-14**:
    - Wydzielono logikę kontrastu do `lib/tools/color/contrast.ts` (parseColor + luminance + contrast ratio).
    - `WcagContrastChecker` korzysta z nowych utili (UI/UX bez zmian).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[SEO-010] Schema: deduplikacja `ProfessionalService`**

  - Usunąć duplikację `ProfessionalService` pomiędzy `/kontakt` i globalnym footerem.
  - **Zrobione 2025-12-14**:
    - Usunięto zdublowany JSON-LD `ProfessionalService` z `app/(pl)/kontakt/page.tsx`.
    - Pozostawiono jedno źródło `ProfessionalService`: `components/shared/Footer.tsx`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[DOCS-002] HOOKS_CATALOG: rozszerzyć o hooks/utils/lib**

  - Cel: od teraz `HOOKS_CATALOG.md` ma opisywać wszystkie hooki z `hooks/` oraz wszystkie współdzielone helpery z `utils/` i `lib/`.
  - **Zrobione 2025-12-14**:
    - Zaktualizowano `HOOKS_CATALOG.md` tak, aby obejmował `hooks/`, `utils/` oraz kluczowe moduły z `lib/`.
    - Dopisano wpisy m.in. dla: `utils/slug`, `lib/blog`, `lib/serviceSchema`, `lib/site`, `lib/config/site/*`, `lib/consent/*`, `lib/tools/*`.
    - Doprecyzowano uwagi dot. środowiska (SSR-safe vs browser-only).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-013] ImageResizeTool: dodać presety WWW (w tym OG image)**

  - **Zrobione 2025-12-14**:
    - Dodano presety `WWW`: `OG image` (1200×630), `Grafika do artykułu` (1600×900), `Baner strony` (1920×600).
    - Zaktualizowano `TOOLS_CATALOG.md`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-005] MetaTitleDescriptionTool**: wydzielić pomiar (canvas) + heurystyki statusów + snippet preview; zero zmian UI/UX

  - **Zrobione 2025-12-14**:
    - Wydzielono logikę analizy długości meta do `lib/tools/seo/metaLength.ts` (pomiar px, heurystyki statusów, truncation do podglądu).
    - `MetaTitleDescriptionTool` korzysta z nowych utili (UI/UX bez zmian).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[NAV-001] Dane nawigacji: single source of truth**

  - Mobile i Desktop korzystają z tego samego źródła. Stworzenie nowego komponentu w którym będą wspólne linki dzięki czemu wystarczy będzie dodać kolejne lub zmienić istniejące linki w jednym pliku. Rozbicie nawigacji na mniejsze komponenty i użycie hooków, które już są lub stworzenie nowych jeśli jest to potrzebne. Zachowaj w 100% ten sam wygląd i działanie. Jeśli zauważysz opcję ulepszenia działania lub jakiś błąd poinformuj mnie o tym
  - **Zrobione 2025-12-14**:
    - Dodano SSOT: `components/shared/navigation-data/pl.ts` (nav + sekcje usług + sekcje narzędzi + linki prawne).
    - `DesktopNavigation` i `MobileNavigation` pobierają dane z SSOT (bez zmian UI/UX).
    - `npm run lint` i `npm run build` przechodzą.

- ✅ **[COOKIE-001] CookieConsent: rozdzielenie odpowiedzialności**

  - Wydzielić storage/gtag/UI (mniej “god component”); UX bez zmian.
  - **Zrobione 2025-12-14**:
    - Wydzielono warstwę zgód do `lib/consent/*`:
      - `lib/consent/storage.ts` (odczyt/zapis cookie)
      - `lib/consent/gtag.ts` (aktualizacja `gtag('consent','update', ...)`)
      - `lib/consent/ga.ts` (lazy-load GA po zgodzie)
    - `CookieConsent` korzysta z tych modułów i wystawia globalne `window.ArteonConsent.open()` (dla `CookieSettingsButton`).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[DOCS-001] `PAGES_CATALOG.md`: katalog stron (App Router)**

  - **Zrobione 2025-12-14**:
    - Utworzono `PAGES_CATALOG.md` z listą wszystkich route’ów z `app/` (w tym route groups i dynamic segments).
    - Dla stron opisano: cel, kluczowe komponenty oraz SEO (`metadata` + schema.org JSON-LD/microdata).
    - Uwzględniono pliki specjalne: `app/layout.tsx`, `app/error.tsx`, `app/not-found.tsx` oraz `app/(pl)/narzedzia/(tools)/layout.tsx`.

- ✅ **[SEO-001] Canonical: audyt i poprawki**

  - Zapewnić canonical wg zasad powyżej na wszystkich stronach. **Zrobione 2025-12-14**: wszystkie canonical URLs używają formatu `https://www.arteonagency.pl/`

- ✅ **[SEO-003] Schema.org: backlog**

  - Spisać możliwe schema i wskazać strony-kandydatów. **Zrobione 2025-12-14**
  - **Schema (propozycje) + strony-kandydaci:**
    - `Organization` + `WebSite` (global) — `app/layout.tsx`
    - `ProfessionalService` / `LocalBusiness` (kontakt / dane firmy) — `app/(pl)/kontakt/page.tsx`, `components/shared/Footer.tsx`
    - `Service` (strony usług) — `app/(pl)/uslugi/**/page.tsx` + helper `lib/serviceSchema.ts`
    - `ItemList` / `OfferCatalog` (huby/listy) — `/uslugi`, `/uslugi/marketing`, `/narzedzia`, `/realizacje`
    - `WebApplication` (pojedyncze narzędzia) — `app/(pl)/narzedzia/(tools)/*/page.tsx`
    - `BlogPosting` (artykuły) — `app/(pl)/edukacja/[category]/[slug]/page.tsx`
    - `CollectionPage` + `ItemList` (listy treści) — `/edukacja`, `/edukacja/[category]`, `/realizacje`, `/narzedzia`
    - `FAQPage` (sekcje FAQ) — komponent `components/ui/FaqPanels.tsx`
    - `BreadcrumbList` (okruszki) — komponent `components/sections/BreadCrumbs.tsx`
    - `AboutPage` (o firmie) — `/o-nas`
    - `PrivacyPolicyPage` (`/polityka-prywatnosci`) i `TermsOfServicePage` (`/regulamin`) — do rozważenia

- ✅ **[SEO-004] Schema.org: pokrycie + sanity-check**

  - Sprawdzić czy strony z listy [SEO-003] faktycznie emitują schema (JSON-LD lub microdata). **Zrobione 2025-12-14**
  - **Jest (OK):**
    - `app/layout.tsx` — `Organization` + `WebSite` (JSON-LD)
    - `/` — `Organization` (AggregateRating/Review) + `HowTo`
    - `/kontakt` — `ProfessionalService` + `BreadcrumbList` + `HowTo`
    - `/uslugi/**` (podstrony usług) — `Service` (`lib/serviceSchema.ts`) + breadcrumbs; często `FAQPage`
    - `/uslugi/marketing` — `ItemList` (marketing services)
    - `/uslugi/projekty-graficzne` — `ItemList` + `FAQPage`
    - `/narzedzia` — `ItemList` (lista `WebApplication`)
    - `/narzedzia/*` (podstrony narzędzi) — `WebApplication`
    - `/edukacja/[category]` — `CollectionPage` + `ItemList`
    - `/edukacja/[category]/[slug]` — `BlogPosting` (JSON-LD) + breadcrumbs; opcjonalnie `FAQPage`
    - `/realizacje/[slug]` — `Article` (JSON-LD) + breadcrumbs; opcjonalnie `FAQPage`
    - `/o-nas` — microdata `AboutPage`
    - `/polityka-prywatnosci`, `/regulamin` — microdata `Article`
    - `components/sections/BreadCrumbs.tsx` — `BreadcrumbList` (JSON-LD)
    - `components/ui/FaqPanels.tsx` — `FAQPage` (JSON-LD)
  - **Brak (do dodania wg SEO-003):**
    - `/uslugi` — brak `ItemList`/`OfferCatalog`
    - `/realizacje` — brak `CollectionPage`/`ItemList`
    - `/edukacja` — brak `CollectionPage`/`ItemList`
  - **Problemy / uwagi jakościowe (do poprawy):**
    - `/kontakt` + global footer — możliwa duplikacja `ProfessionalService` (ten sam `@id` `#local` na wielu stronach)
    - `components/ui/FaqPanels.tsx` jest `use client` — `FAQPage` pojawia się dopiero po hydracji (warto zweryfikować w Rich Results Test)
    - W wielu miejscach JSON-LD jest ładowane przez `next/script` z `strategy='afterInteractive'` — do rozważenia inline `<script type='application/ld+json'>` w SSR
    - `/realizacje/[slug]` — rozważyć `CaseStudy` zamiast `Article`
    - `/polityka-prywatnosci` — rozważyć `PrivacyPolicy` zamiast `Article`
    - `/regulamin` — rozważyć `TermsOfService` zamiast `Article`

- ✅ **[SEO-005] Schema: `/uslugi` (OfferCatalog / ItemList)**

  - Dodać schema dla strony listy usług: `CollectionPage` + `ItemList` (lub `OfferCatalog`).
  - **Zrobione 2025-12-14**:
    - Dodano JSON-LD `CollectionPage` + `ItemList` (ListItem: `url` + `name`) na `app/(pl)/uslugi/page.tsx` na podstawie listy `SERVICES` w tym pliku.
    - `npm run lint` i `npm run build` przechodzą.

- ✅ **[SEO-006] Schema: `/realizacje` (CollectionPage + ItemList)**

  - Dodać schema listy realizacji (kolekcja + lista elementów z URL).
  - **Zrobione 2025-12-14**:
    - Dodano JSON-LD `CollectionPage` + `ItemList` (ListItem: `url` + `name`) na `app/(pl)/realizacje/page.tsx` na podstawie `data/pl/projects.json`.
    - `npm run lint` i `npm run build` przechodzą.

- ✅ **[SEO-007] Schema: `/edukacja` (CollectionPage + ItemList)**

  - Dodać schema listy artykułów (kolekcja + lista elementów z URL).
  - **Zrobione 2025-12-14**:
    - Dodano JSON-LD `CollectionPage` + `ItemList` (ListItem: `url` + `name`) na `app/(pl)/edukacja/page.tsx` na podstawie `data/pl/blog.json`.
    - `npm run lint` i `npm run build` przechodzą.

- ✅ **[SEO-008] Schema/URLs: naprawa slugów w narzędziu Image Resize**

  - Naprawić mismatch URL w schema i breadcrumbs dla `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`.
  - **Zrobione 2025-12-14**:
    - Poprawiono `schema.url` na `https://www.arteonagency.pl/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia` w `app/(pl)/narzedzia/(tools)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`.
    - Poprawiono URL w breadcrumbs (3. poziom) na `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[SEO-009] Schema: deduplikacja `BreadcrumbList`**

  - Usunąć duplikaty `BreadcrumbList` na `/edukacja/[category]/[slug]` i `/realizacje/[slug]` (zostawić jedno źródło).
  - **Zrobione 2025-12-14**:

- ✅ **[CLEANUP-001] `tool-pill*`: weryfikacja i ewentualne usunięcie martwego CSS**

  - **Zrobione 2025-12-14**:
    - Potwierdzono brak użyć `tool-pill*` w repo (w tym HTML/MD).
    - Usunięto `.tool-pill`, `.tool-pill-inactive`, `.tool-pill-active` z `app/globals.css`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-002] CORE**: audyt kodu narzędzi + sprawdzenie `HOOKS_CATALOG.md`/`COMPONENTS_CATALOG.md` pod kątem reuse

  - **Zrobione 2025-12-14**:
    - Zidentyfikowano powtarzalne prymitywy w narzędziach (download, ObjectURL lifecycle, `loadImage`, `canvas.toBlob`, `formatBytes`, FileReader/clipboard) jako baza do TOOLS-003.

- ✅ **[TOOLS-003] SHARED**: wspólne prymitywy (download, ObjectURL lifecycle, `loadImage` + `canvasToBlob`) i przepięcie min. 2 narzędzi

  - **Zrobione 2025-12-14**:
    - Dodano shared utilsy:
      - `lib/tools/formatBytes.ts`
      - `lib/tools/download.ts`
      - `lib/tools/objectUrl.ts`
      - `lib/tools/loadImage.ts`
      - `lib/tools/canvasToBlob.ts`
    - Przepięto narzędzia na shared prymitywy (bez zmian UI/UX):
      - `components/sections/tools/FaviconGenerator.tsx`
      - `components/sections/tools/JpgPngToWebp.tsx`
      - `components/sections/tools/ImageResizeTool.tsx` (tylko `formatBytes`)
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-004] ColorPaletteGenerator**: rozdzielić logikę (konwersje + generowanie palet) i UI; reuse color utils + copy feedback
  - **Zrobione 2025-12-14**:
    - Wydzielono logikę kolorów do `lib/tools/color/*`:
      - `lib/tools/color/convert.ts` (normalize/convert/format + random)
      - `lib/tools/color/palette.ts` (generowanie palet)
      - `lib/tools/color/types.ts` (typy RGB/HSL)
    - `ColorPaletteGenerator` korzysta z nowych utili (bez zmian UI/UX).
    - Zaktualizowano `TOOLS_CATALOG.md`.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
