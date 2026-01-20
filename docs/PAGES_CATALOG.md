# PAGES_CATALOG

Ten plik opisuje wszystkie strony (route’y) w katalogu `app/` (Next.js App Router): ich przeznaczenie, kluczowe komponenty oraz elementy SEO (metadata + schema.org).

## Konwencje routingu

- **Route groups**: foldery w nawiasach, np. `(pl)` i `(tools)`, nie wpływają na URL (służą organizacji kodu / layoutom).
- **Dynamic segments**: `[slug]`, `[category]` tworzą dynamiczne route’y.
- **Base URL**: `https://www.arteonagency.pl` (canonical + schema).

## Wspólne elementy SEO (globalne)

- **`app/layout.tsx`**
  - **[metadata]** ustawia globalne `metadata` (`robots`, `icons`, domyślne `openGraph`).
  - **[schema]** JSON-LD: `Organization` + `WebSite`.
- **`components/shared/Footer.tsx`**
  - **[schema]** JSON-LD: `ProfessionalService` (dane firmy / lokalizacji).
- **`components/sections/BreadCrumbs.tsx`**
  - **[schema]** opcjonalny `BreadcrumbList` (gdy `includeJsonLd`).
- **`components/ui/FaqPanels.tsx`**
  - **[schema]** domyślnie generuje `FAQPage` (client-side, po hydracji).

---

## Pliki specjalne App Router (global)

### `RootLayout` (globalny layout)

- **[Route]** dotyczy wszystkich stron
- **[Plik]** `app/layout.tsx`
- **[Cel]**
  - Globalny szkielet dokumentu (`<html>`, `<body>`), `Navigation`, `Footer`.
  - Systemy a11y i UX: `SkipToContent`, `FocusManager`, `RouteAnnouncer`, `RevealObserver`.
  - Integracje: Vercel Analytics / SpeedInsights, GA consent (gdy skonfigurowane env).
- **[SEO]**
  - **[metadata]** globalne `openGraph` (fallback).
  - **[schema]** JSON-LD: `Organization`, `WebSite`.

### `Global Error` (error boundary)

- **[Route]** globalny fallback błędów
- **[Plik]** `app/error.tsx`
- **[Cel]** UI błędu + akcje: retry (`reset`), powrót na `/`, przejście do `/kontakt`.
- **[Komponenty]** `Wrapper`, `Button`.
- **[SEO]** brak page-level `metadata` i schem.

### `Not Found` (404)

- **[Route]** globalny fallback 404
- **[Plik]** `app/not-found.tsx`
- **[Cel]** Prosty ekran 404 z przyciskiem powrotu na `/`.
- **[Komponenty]** `Button`.
- **[SEO]** brak page-level `metadata` i schem.

### `ToolsLayout` (layout dla narzędzi)

- **[Route]** `/narzedzia/*` (wewnątrz segmentu `(tools)`)
- **[Plik]** `app/(pl)/narzedzia/(tools)/layout.tsx`
- **[Cel]**
  - Layout neutralny - renderuje `children` na każdym ekranie (m.in. narzędzia wspierające mobile).
  - Narzędzia desktop-only są w route group `(desktop-only)` i mają osobny layout blokujący na `< lg`.

### `DesktopOnlyToolsLayout` (layout dla narzędzi desktop-only)

- **[Route]** `/narzedzia/*` (wewnątrz segmentu `(tools)/(desktop-only)`)
- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/layout.tsx`
- **[Cel]**
  - Na `>= lg` renderuje narzędzie normalnie.
  - Na `< lg` pokazuje komunikat „To narzędzie działa na większym ekranie” i nie renderuje narzędzia.
- **[Komponenty]** `Wrapper`, `Gap`.

---

## Strony główne i informacyjne

### `/` - Strona główna (PL)

- **[Plik]** `app/(pl)/page.tsx`
- **[Cel / content]** Landing z overview usług, krokami współpracy, tech stackiem, portfolio, opiniami i CTA.
- **[Kluczowe komponenty]**
  - `HeroBanner`, `BenefitBelt`, `FeatureGrid`
  - `SectionSteps`
  - `ProjectsCarousel`
  - `TestimonialsCarousel`
  - `WorkSteps`, `TechStack`, `FeesSteps`
  - `ArticlesCarousel`
  - `CTABanner`
- **[Dane / źródła]** `data/pl/testimonials.json`.
- **[SEO]**
  - **[metadata]** `title`, `description`, canonical: `https://www.arteonagency.pl/`, `openGraph`.
  - **[schema]** JSON-LD:
    - `Organization` (z `AggregateRating` + `Review`)
    - `HowTo` (proces współpracy)

### `/o-nas` - O firmie

- **[Plik]** `app/(pl)/o-nas/page.tsx`
- **[Cel / content]** Misja, wyróżniki, proces, tech stack, CTA.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `SectionBasic`, `SectionInfo`, `SectionSteps`, `WorkSteps`, `TechStack`, `ServicesSteps`, `CTABanner`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/o-nas`.
  - **[schema]** microdata na wrapperze: `https://schema.org/AboutPage`.

### `/o-nas/faq` - FAQ (współpraca)

- **[Plik]** `app/(pl)/o-nas/faq/page.tsx`
- **[Cel / content]** Obszerna strona FAQ odpowiadająca na pytania i obawy klientów (proces, wycena, terminy, SEO, utrzymanie). Wspiera SEO long-tail i ułatwia podjęcie decyzji o współpracy.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `FaqPanels`, `CTABanner`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/o-nas/faq`, `openGraph`.
  - **[schema]**
    - JSON-LD: `FAQPage` (emitowany server-side w `page.tsx`; `FaqPanels` ma `generateSchema={false}` aby nie dublować).
    - JSON-LD: `BreadcrumbList` (przez `Breadcrumbs(includeJsonLd)`).
    - Microdata: `FAQPage` na wrapperze (`itemScope` + `itemType`).

### `/o-nas/dolacz-do-sieci` - Dołącz do sieci

- **[Plik]** `app/(pl)/o-nas/dolacz-do-sieci/page.tsx`
- **[Cel / content]** Strona partnerska (nie rekrutacyjna): zaproszenie do współpracy projektowej i dołączenia do sieci kontaktów (web/mobile/wideo/3D/animacja) + formularz kontaktowy z domyślnym tematem.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `ContactForm`, `CTABanner`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/o-nas/dolacz-do-sieci`, `openGraph`.
  - **[schema]**
    - JSON-LD: `BreadcrumbList` (przez `Breadcrumbs(includeJsonLd)`).
    - Microdata: `WebPage` na wrapperze (`itemScope` + `itemType`).

### `/kontakt` - Kontakt

- **[Plik]** `app/(pl)/kontakt/page.tsx`
- **[Cel / content]** Kontakt + opis procesu i formularz.
- **[Kluczowe komponenty]** `HeroBanner`, `SectionSteps`, `ContactForm`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/kontakt`.
  - **[schema]** JSON-LD:
    - `ProfessionalService` (global - `components/shared/Footer.tsx`)
    - `BreadcrumbList`
    - `HowTo` (kroki kontaktu)

### `/mapa-strony` - Mapa strony (dla użytkownika)

- **[Plik]** `app/(pl)/mapa-strony/page.tsx`
- **[Cel / content]** Manualna mapa strony: strony główne, usługi, realizacje, blog, narzędzia.
- **[Kluczowe komponenty]** `SectionInfo`, `NestedList`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/mapa-strony`.
  - **[schema]** JSON-LD budowane dynamicznie: `@graph` (m.in. `WebPage`, `SiteNavigationElement`, `ItemList`).

---

## Edukacja (blog)

### `/edukacja` - Lista artykułów

- **[Plik]** `app/(pl)/edukacja/page.tsx`
- **[Cel / content]** Lista artykułów + filtr kategorii. Opis w hero: „Artykuły i poradniki o marketingu, grafice i widoczności w sieci."
- **[Kluczowe komponenty]** `HeroBanner`, `FilterBar`, `ArticlesList`, `Wrapper`, `Gap`.
- **[Dane / źródła]** `lib/blog` (`getAllArticles`, `getCategoriesWithCount`).
- **[SEO]**
  - **[metadata]** title: `Edukacja - Arteon`, description: krótka i ogólna. canonical: `https://www.arteonagency.pl/edukacja`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (linki do artykułów).

### `/edukacja/[category]` - Lista artykułów w kategorii

- **[Plik]** `app/(pl)/edukacja/[category]/page.tsx`
- **[Cel / content]** Lista artykułów dla danej kategorii (SSR/SSG). Tytuły bez prefixu „Edukacja:" - sama nazwa kategorii. Opisy krótkie i ogólne (1-2 zdania).
- **[Generowanie]**
  - `generateStaticParams()` - generuje strony kategorii.
  - `generateMetadata()` - tytuł: `{label} - Arteon`, opis per kategoria (krótki, ogólny).
- **[Kluczowe komponenty]** `HeroBanner`, `FilterBar`, `ArticlesList`, `Wrapper`, `Gap`.
- **[Dane / źródła]** `lib/blog` + `utils/slug` (`slugify`).
- **[Content]** Mapowanie treści per znane kategorie (SEO/Grafika/Zdjęcia/Branding/Treści/Widoczność/Psychologia) + fallback dla nowych kategorii. Opisy są krótkie i elastyczne - bez technicznych detali.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/edukacja/[category]`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (artykuły w kategorii).

### `/edukacja/[category]/[slug]` - Strona artykułu

- **[Plik]** `app/(pl)/edukacja/[category]/[slug]/page.tsx`
- **[Cel / content]** Artykuł z TOC, blokami contentu, udostępnianiem i CTA.
- **[Generowanie]**
  - `generateStaticParams()` - generuje strony artykułów.
  - `generateMetadata()` - metadata per artykuł.
- **[Kluczowe komponenty]**
  - `HeroBanner`, `Breadcrumbs`, `TableOfContents`, `ButtonToTop`
  - `Badge`, `FaqPanels`, `CTABanner`
  - `CodeBlock`, `TableBlock`
  - `ArticlesCarousel`, `ShareBlock`
- **[Dane / źródła]** `lib/blog` (pobieranie artykułu i powiązań).
- **[Powiązane artykuły]** Na dole strony renderowana jest karuzela artykułów (`ArticlesCarousel`) z wpisami z tej samej kategorii co bieżący artykuł (z wykluczeniem bieżącego wpisu). Nagłówek karuzeli dopasowuje się dynamicznie do kategorii, a link akcji prowadzi do listy artykułów danej kategorii (`/edukacja/[category]`).
- **[SEO]**
  - **[schema]** JSON-LD:
    - `BlogPosting`
    - `BreadcrumbList`
  - **[uwagi]** `BreadcrumbList` jest emitowany tylko przez `Breadcrumbs(includeJsonLd)` (brak duplikacji).

---

## Realizacje (portfolio)

### `/realizacje` - Lista realizacji

- **[Plik]** `app/(pl)/realizacje/page.tsx`
- **[Cel / content]** Lista realizacji z filtrowaniem + CTA do kontaktu.
- **[Kluczowe komponenty]** `HeroBanner` (z description), `ProjectWithFilters`, `CTABanner`, `Wrapper`, `Gap`.
- **[Dane / źródła]** `data/pl/projects.json`.
- **[SEO]**
  - **[metadata]** `title`: „Realizacje - strony internetowe, sklepy i projekty graficzne - Arteon", canonical: `https://www.arteonagency.pl/realizacje`, `openGraph` z obrazem realizacji.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (wszystkie realizacje).

### `/realizacje/[slug]` - Case study realizacji

- **[Plik]** `app/(pl)/realizacje/[slug]/page.tsx`
- **[Cel / content]** Szczegóły realizacji (opis, bloki contentu, statystyki, FAQ, CTA).
- **[Generowanie]**
  - `generateStaticParams()` - generuje strony realizacji.
  - `generateMetadata()` - metadata per realizacja.
- **[Kluczowe komponenty]**
  - `HeroBanner`, `Breadcrumbs`, `Wrapper`, `Gap`, `Badge`
  - `TableOfContents`, `SectionInfo`
  - `FaqPanels`, `ShareBlock`, `ProjectsCarousel`, `CTABanner`
  - `Button` (nawigacja/CTA)
- **[Dane / źródła]** `data/pl/projects.json` + typy `types/project`.
- **[SEO]**
  - **[schema]** JSON-LD:
    - `Article`
    - `BreadcrumbList`
  - **[uwagi]** `BreadcrumbList` jest emitowany tylko przez `Breadcrumbs(includeJsonLd)` (brak duplikacji).

---

## Narzędzia

### `/narzedzia` - Lista narzędzi

- **[Plik]** `app/(pl)/narzedzia/page.tsx`
- **[Cel / content]** Lista narzędzi online (karty/sekcje) + opis.
- **[Kluczowe komponenty]** `HeroBanner`, `SectionSteps`, `SectionInfo`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia`.
  - **[schema]** JSON-LD: `ItemList` z elementami typu `WebApplication`.

### `/narzedzia/jpg-png-na-webp-bez-limitu` - Konwerter JPG/PNG → WebP

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/page.tsx`
- **[Cel / content]** Konwersja obrazów do WebP w przeglądarce.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `JpgPngToWebp`, `SectionInfo`, `SectionSteps`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical dla narzędzia.
  - **[schema]** JSON-LD: `WebApplication`.
  - **[uwagi]** Link do pełnej instrukcji w sekcji kroków.

### `/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja` - Instrukcja konwertera WebP

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania konwertera JPG/PNG na WebP. Wyjaśnia: co to jest WebP, jak dodać pliki (drag&drop, wybór), statusy plików (Oczekuje/Przetwarzanie/Gotowe/Błąd), mechanizm Smart Quality, ustawienia jakości, pobieranie (pojedynczo, wszystkie, ZIP), raport oszczędności. Zawiera FAQ (5 pytań).
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` (4 kroki).

### `/narzedzia/edytor-zdjec-online` - Edytor zdjęć online

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/edytor-zdjec-online/page.tsx`
- **[Cel / content]** Darmowy edytor zdjęć online - zmiana rozmiaru, kadrowanie, konwersja formatów, okrągłe avatary (client-side).
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `ImageResizeTool`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/edytor-zdjec-online`.
  - **[schema]** JSON-LD: `SoftwareApplication` z alternateName array.
  - **[uwagi]** Redirect z `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`. Rozbudowana treść z tabelą wymiarów social media i FAQ.

### `/narzedzia/edytor-zdjec-online/instrukcja` - Instrukcja edytora zdjęć

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/edytor-zdjec-online/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja edytora zdjęć online. Wyjaśnia jak dodać obraz, tryby ustawiania rozmiaru (pixels vs preset), tabelę presetów z zastosowaniami, jak kadrować (przeciąganie, uchwyty, zoom), siatkę 3×3 i regułę trójpodziału, kształty kadru (prostokąt, kwadrat, koło), formaty eksportu (JPG/PNG/WebP) i proporcje (aspect ratio). Zawiera FAQ.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `SectionDemo`, `FaqPanels`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/edytor-zdjec-online/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList` + `FAQPage`.

### `/narzedzia/darmowy-generator-favicon-ico` - Generator favicon (.ico)

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
- **[Cel / content]** Generowanie favicon i paczki assetów.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `FaviconGenerator`, `SectionInfo`, `SectionSteps`, `Button`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.
  - **[uwagi]** Link do pełnej instrukcji.

### `/narzedzia/darmowy-generator-favicon-ico/instrukcja` - Instrukcja generatora favicon

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania generatora favicon. Wyjaśnia: co to jest favicon i do czego służy, jakie rozmiary ikon są potrzebne (favicon.ico, 16x16, 32x32, 180x180, 192x192, 512x512), jak korzystać z generatora (4 kroki), opcje generowania (tło, manifest, auto-download), jak pobrać pliki (ZIP vs pojedynczo), gdzie i jak wgrać favicon (WordPress, HTML, Next.js), jaki obraz źródłowy działa najlepiej. Zawiera FAQ (5 pytań).
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `Button`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/darmowy-generator-favicon-ico/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList`.

### `/narzedzia/licznik-dlugosci-meta-title-i-description` - Licznik meta title/description

- **[Plik]** `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
- **[Cel / content]** Pomiar długości meta tagów (znaki/piksele) i podgląd.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `MetaTitleDescriptionTool`, `SectionInfo`, `SectionSteps`, `Button`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja` - Instrukcja licznika meta title/description

- **[Plik]** `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania licznika meta title i description. Wyjaśnia czym są meta tagi, dlaczego długość ma znaczenie, jak interpretować wyniki (statusy, metryki), jak działa podgląd snippet i zawiera FAQ.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `Button`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList` + `FAQPage`.

### `/narzedzia/tester-kontrastu-kolorow-wcag` - Tester kontrastu WCAG

- **[Plik]** `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
- **[Cel / content]** Sprawdzenie kontrastu (WCAG) dla kolorów.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `WcagContrastChecker`, `SectionInfo`, `SectionSteps`, `Button`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja` - Instrukcja testera kontrastu WCAG

- **[Plik]** `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania testera kontrastu kolorów WCAG. Wyjaśnia poziomy AA/AAA, formaty kolorów, interpretację wyników, funkcję Dopasuj i zawiera FAQ.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `Button`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList` + `FAQPage`.

### `/narzedzia/generator-palety-kolorow-z-obrazu` - Paleta kolorów z obrazu

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
- **[Cel / content]** Ekstrakcja dominujących kolorów z obrazu/logo (client-side) i kopiowanie palety jako HEX. Skrócona instrukcja (3 kroki) + link do pełnej instrukcji.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `PaletteExtractor`, `SectionInfo`, `SectionSteps`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/generator-palety-kolorow-z-obrazu/instrukcja` - Instrukcja generatora palety kolorów z obrazu

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania generatora palety kolorów z obrazu. Wyjaśnia jak dodać obraz (drag&drop vs klik, formaty PNG/JPG/SVG), co robi narzędzie z obrazem (algorytm prostym językiem), jak skopiować kolory, jakie obrazy dają najlepsze wyniki (logo vs zdjęcie, przezroczyste tło), najczęstsze problemy i ich rozwiązania. Zawiera FAQ (5 pytań) i linki do powiązanych narzędzi.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList` + `FAQPage`.

### `/narzedzia/generator-palet-kolorow-online` - Generator palet kolorów

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
- **[Cel / content]** Generowanie palet kolorów (client-side).
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `ColorPaletteGenerator`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/generator-palet-kolorow-online/instrukcja` - Instrukcja generatora palet kolorów

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania generatora palet kolorów. Wyjaśnia jak wybrać kolor bazowy, jak działają poszczególne palety (monochromatyczna, analogiczna, komplementarna, triadyczna, split-complementary, pastelowa, ciemna, tonalna, minimalistyczna), jak skopiować kolory i najczęstsze problemy. Zawiera FAQ.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/generator-palet-kolorow-online/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList`.

### `/narzedzia/generator-kodu-qr` - Generator kodu QR

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-kodu-qr/page.tsx`
- **[Cel / content]** Generowanie kodów QR (URL, tekst, vCard, e-mail, telefon) z opcjami personalizacji (rozmiar, kolory, poziom korekcji błędów). Pobieranie w PNG/SVG.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `QrCodeGenerator`, `SectionInfo`, `SectionSteps`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/generator-kodu-qr/instrukcja` - Instrukcja generatora kodów QR

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-kodu-qr/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja użytkowania generatora kodów QR. Wyjaśnia co to jest kod QR, co można zakodować (URL, tekst, vCard, e-mail, telefon), jak wygenerować kod krok po kroku, opcje personalizacji (rozmiar, margines, kolory), poziomy korekcji błędów, formaty pobierania (PNG vs SVG), zastosowania i jak przetestować kod przed drukiem. Zawiera FAQ.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia/generator-kodu-qr/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` + `BreadcrumbList`.

### `/narzedzia/darmowy-generator-stopki-mailowej` - Generator stopki mailowej

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
- **[Cel / content]** Generator HTML stopki mailowej.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `EmailSignatureGenerator`, `SectionInfo`, `SectionSteps`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/darmowy-generator-stopki-mailowej/instrukcja` - Instrukcja generatora stopki mailowej

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
- **[Cel / content]** Szczegółowa instrukcja krok po kroku: jak wypełnić dane, wybrać układ, dodać CTA, linki do mediów społecznościowych, dostosować wygląd i skopiować stopkę do Gmail/Outlook.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `FaqPanels`, `CTABanner`, `ToolsCarousel`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** title: „Jak używać generatora stopki mailowej - instrukcja krok po kroku", canonical: `https://www.arteonagency.pl/narzedzia/darmowy-generator-stopki-mailowej/instrukcja`.
  - **[schema]** JSON-LD: `HowTo` (6 kroków), `BreadcrumbList`.

---

## Usługi (overview)

### `/uslugi` - Strona zbiorcza usług

- **[Plik]** `app/(pl)/uslugi/page.tsx`
- **[Cel / content]** Lista usług (sekcje: witryny, projekty graficzne, marketing, tworzenie treści) + linkowanie do podstron.
- **[Kluczowe komponenty]** `HeroBanner`, `SectionSteps`, `Button`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/uslugi`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (na bazie tablicy `SERVICES`).

---

## Usługi - marketing

### `/uslugi/marketing` - Hub marketingu

- **[Plik]** `app/(pl)/uslugi/marketing/page.tsx`
- **[Cel / content]** Oferta marketingu + korzyści, proces, cennik, kontakt.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `FeatureGrid`, `SectionSteps`, `TestimonialsCarousel`, `FeesSteps`, `WorkSteps`, `ContactForm`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `ItemList` (podstrony usług marketingowych) + często `BreadcrumbList`.

### `/uslugi/marketing/audyt-seo` - Audyt SEO

- **[Plik]** `app/(pl)/uslugi/marketing/audyt-seo/page.tsx`
- **[Cel / content]** Opis audytu, proces, pricing, FAQ, kontakt.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `SectionInfo`, `SectionBasic`, `FeatureGrid`, `SectionSteps`, `SectionPrices`, `TestimonialsCarousel`, `FeesSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + `BreadcrumbList` + (opcjonalnie) `FAQPage`.

### `/uslugi/marketing/optymalizacja-seo` - Optymalizacja SEO

- **[Plik]** `app/(pl)/uslugi/marketing/optymalizacja-seo/page.tsx`
- **[Cel / content]** Wdrożenia techniczne/treściowe po audycie + pricing + FAQ.
- **[Kluczowe komponenty]** podobny układ jak audyt (sekcje informacyjne, `SectionPrices`, `FaqPanels`, `ContactForm`).
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + (zwykle) breadcrumbs/FAQ.

### `/uslugi/marketing/pozycjonowanie-stron` - Pozycjonowanie

- **[Plik]** `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx`
- **[Cel / content]** Stała usługa SEO (strategia + treści + linkowanie) + pricing + FAQ.
- **[Kluczowe komponenty]** podobny układ jak audyt/optymalizacja.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + (zwykle) breadcrumbs/FAQ.

---

## Usługi - witryny i treści

### `/uslugi/strony-internetowe` - Strony internetowe

- **[Plik]** `app/(pl)/uslugi/strony-internetowe/page.tsx`
- **[Cel / content]** Oferta tworzenia stron (proces, tech, pricing, FAQ, portfolio).
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `SectionInfo`, `FeatureGrid`, `ProjectsCarousel`, `TestimonialsCarousel`, `SectionPrices`, `TechSteps`, `FeesSteps`, `WorkSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/strony-internetowe/optymalizacja-strony-wordpress` - Optymalizacja WordPress

- **[Plik]** `app/(pl)/uslugi/strony-internetowe/optymalizacja-strony-wordpress/page.tsx`
- **[Cel / content]** Usprawnienie i optymalizacja strony na WP (SEO/szybkość/UX) + pricing + FAQ.
- **[Kluczowe komponenty]** sekcje informacyjne + pricing + FAQ + kontakt (podobnie do usług marketingowych).
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/sklepy-internetowe` - Sklepy internetowe

- **[Plik]** `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
- **[Cel / content]** Oferta tworzenia sklepów (proces, tech, pricing, FAQ, portfolio).
- **[Kluczowe komponenty]** podobne do `/uslugi/strony-internetowe` (z `TechSteps`, `SectionPrices`, `FaqPanels`, `ProjectsCarousel`).
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/blogi-internetowe` - Blogi internetowe

- **[Plik]** `app/(pl)/uslugi/blogi-internetowe/page.tsx`
- **[Cel / content]** Oferta blogów (CMS, SEO, proces) + pricing + FAQ + portfolio.
- **[Kluczowe komponenty]** podobne do `/uslugi/strony-internetowe`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/tworzenie-tresci` - Tworzenie treści

- **[Plik]** `app/(pl)/uslugi/tworzenie-tresci/page.tsx`
- **[Cel / content]** Copywriting/treści dla stron, SEO i social + proces + FAQ + kontakt.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `FeatureGrid`, `SectionSteps`, `TestimonialsCarousel`, `FeesSteps`, `WorkSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

---

## Usługi - projekty graficzne

### `/uslugi/projekty-graficzne` - Hub projektów graficznych

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/page.tsx`
- **[Cel / content]** Opis oferty projektów graficznych + lista pod-usług + portfolio + pricing + FAQ.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `SectionInfo`, `FeatureGrid`, `ProjectsCarousel`, `TestimonialsCarousel`, `SectionSteps`, `FeesSteps`, `WorkSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `ItemList` (podstrony projektów graficznych) + (często) `FAQPage`.

### Podstrony usług graficznych (wspólny wzorzec)

Większość podstron w `app/(pl)/uslugi/projekty-graficzne/**` ma podobny układ:

- **[UI]** `HeroBanner` + `BenefitBelt` + `Breadcrumbs(includeJsonLd)` + sekcje (`SectionInfo`, `FeatureGrid`, `SectionPrices`, `ProjectsCarousel`, `TestimonialsCarousel`, `WorkSteps(variant='design')`, `ContactForm`, `FaqPanels`, `ServicesSteps`, `CTABanner`).
- **[SEO]** `metadata` (title/description/canonical/openGraph).
- **[schema]** `Service` (JSON-LD) przez `buildServiceSchema` + często `BreadcrumbList` i `FAQPage`.

Poniżej lista konkretnych route’ów:

### `/uslugi/projekty-graficzne/projekt-wizytowki` - Projekt wizytówki

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-wizytowki/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-ulotki` - Projekt ulotki

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-teczki-ofertowej` - Teczka ofertowa

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-papieru-firmowego` - Papier firmowy

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-papieru-firmowego/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-odziezy-firmowej` - Odzież firmowa

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-odziezy-firmowej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-logo` - Projekt logo

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-katalogu` - Projekt katalogu

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej` - Identyfikacja wizualna

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-graficzny-strony` - Projekt graficzny strony

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/szablony-postow-social-media` - Szablony social media

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera` - Kupony i vouchery

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-cennika` - Projekt cennika

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej` - Karta lojalnościowa

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-menu-restauracji` - Menu restauracji

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-menu-restauracji/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

---

## Strony prawne

### `/polityka-prywatnosci` - Polityka prywatności

- **[Plik]** `app/(pl)/polityka-prywatnosci/page.tsx`
- **[Cel / content]** Dokument prawny z TOC, sekcjami i linkiem do PDF.
- **[Kluczowe komponenty]** `Wrapper`, `SectionInfo`, `Gap`, `TableOfContents`, `ButtonToTop`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/polityka-prywatnosci`.
  - **[schema]** microdata na wrapperze: `https://schema.org/Article`.

### `/regulamin` - Regulamin świadczenia usług

- **[Plik]** `app/(pl)/regulamin/page.tsx`
- **[Cel / content]** Dokument regulaminu z TOC, sekcjami i linkiem do PDF.
- **[Kluczowe komponenty]** `Wrapper`, `SectionInfo`, `Gap`, `TableOfContents`, `ButtonToTop`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/regulamin`.
  - **[schema]** microdata na wrapperze: `https://schema.org/Article`.
