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
  - Layout neutralny — renderuje `children` na każdym ekranie (m.in. narzędzia wspierające mobile).
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

### `/` — Strona główna (PL)

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

### `/o-nas` — O firmie

- **[Plik]** `app/(pl)/o-nas/page.tsx`
- **[Cel / content]** Misja, wyróżniki, proces, tech stack, CTA.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `SectionBasic`, `SectionInfo`, `SectionSteps`, `WorkSteps`, `TechStack`, `ServicesSteps`, `CTABanner`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/o-nas`.
  - **[schema]** microdata na wrapperze: `https://schema.org/AboutPage`.

### `/o-nas/faq` — FAQ (współpraca)

- **[Plik]** `app/(pl)/o-nas/faq/page.tsx`
- **[Cel / content]** Obszerna strona FAQ odpowiadająca na pytania i obawy klientów (proces, wycena, terminy, SEO, utrzymanie). Wspiera SEO long-tail i ułatwia podjęcie decyzji o współpracy.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `FaqPanels`, `CTABanner`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/o-nas/faq`, `openGraph`.
  - **[schema]**
    - JSON-LD: `FAQPage` (emitowany server-side w `page.tsx`; `FaqPanels` ma `generateSchema={false}` aby nie dublować).
    - JSON-LD: `BreadcrumbList` (przez `Breadcrumbs(includeJsonLd)`).
    - Microdata: `FAQPage` na wrapperze (`itemScope` + `itemType`).

### `/o-nas/dolacz-do-sieci` — Dołącz do sieci

- **[Plik]** `app/(pl)/o-nas/dolacz-do-sieci/page.tsx`
- **[Cel / content]** Strona partnerska (nie rekrutacyjna): zaproszenie do współpracy projektowej i dołączenia do sieci kontaktów (web/mobile/wideo/3D/animacja) + formularz kontaktowy z domyślnym tematem.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `SectionInfo`, `SectionSteps`, `ContactForm`, `CTABanner`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/o-nas/dolacz-do-sieci`, `openGraph`.
  - **[schema]**
    - JSON-LD: `BreadcrumbList` (przez `Breadcrumbs(includeJsonLd)`).
    - Microdata: `WebPage` na wrapperze (`itemScope` + `itemType`).

### `/kontakt` — Kontakt

- **[Plik]** `app/(pl)/kontakt/page.tsx`
- **[Cel / content]** Kontakt + opis procesu i formularz.
- **[Kluczowe komponenty]** `HeroBanner`, `SectionSteps`, `ContactForm`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/kontakt`.
  - **[schema]** JSON-LD:
    - `ProfessionalService` (global — `components/shared/Footer.tsx`)
    - `BreadcrumbList`
    - `HowTo` (kroki kontaktu)

### `/mapa-strony` — Mapa strony (dla użytkownika)

- **[Plik]** `app/(pl)/mapa-strony/page.tsx`
- **[Cel / content]** Manualna mapa strony: strony główne, usługi, realizacje, blog, narzędzia.
- **[Kluczowe komponenty]** `SectionInfo`, `NestedList`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/mapa-strony`.
  - **[schema]** JSON-LD budowane dynamicznie: `@graph` (m.in. `WebPage`, `SiteNavigationElement`, `ItemList`).

---

## Edukacja (blog)

### `/edukacja` — Lista artykułów

- **[Plik]** `app/(pl)/edukacja/page.tsx`
- **[Cel / content]** Lista artykułów + filtr kategorii.
- **[Kluczowe komponenty]** `HeroBanner`, `FilterBar`, `ArticlesList`, `Wrapper`, `Gap`.
- **[Dane / źródła]** `lib/blog` (`getAllArticles`, `getCategoriesWithCount`).
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/edukacja`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (linki do artykułów).

### `/edukacja/[category]` — Lista artykułów w kategorii

- **[Plik]** `app/(pl)/edukacja/[category]/page.tsx`
- **[Cel / content]** Lista artykułów dla danej kategorii (SSR/SSG).
- **[Generowanie]**
  - `generateStaticParams()` — generuje strony kategorii.
  - `generateMetadata()` — tytuł/opis per kategoria.
- **[Kluczowe komponenty]** `HeroBanner`, `FilterBar`, `ArticlesList`, `Wrapper`, `Gap`.
- **[Dane / źródła]** `lib/blog` + `utils/slug` (`slugify`).
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/edukacja/[category]`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (artykuły w kategorii).

### `/edukacja/[category]/[slug]` — Strona artykułu

- **[Plik]** `app/(pl)/edukacja/[category]/[slug]/page.tsx`
- **[Cel / content]** Artykuł z TOC, blokami contentu, udostępnianiem i CTA.
- **[Generowanie]**
  - `generateStaticParams()` — generuje strony artykułów.
  - `generateMetadata()` — metadata per artykuł.
- **[Kluczowe komponenty]**
  - `HeroBanner`, `Breadcrumbs`, `TableOfContents`, `ButtonToTop`
  - `Badge`, `FaqPanels`, `CTABanner`
  - `CodeBlock`, `TableBlock`
  - `ArticlesCarousel`, `ShareBlock`
- **[Dane / źródła]** `lib/blog` (pobieranie artykułu i powiązań).
- **[SEO]**
  - **[schema]** JSON-LD:
    - `BlogPosting`
    - `BreadcrumbList`
  - **[uwagi]** `BreadcrumbList` jest emitowany tylko przez `Breadcrumbs(includeJsonLd)` (brak duplikacji).

---

## Realizacje (portfolio)

### `/realizacje` — Lista realizacji

- **[Plik]** `app/(pl)/realizacje/page.tsx`
- **[Cel / content]** Lista realizacji z filtrowaniem.
- **[Kluczowe komponenty]** `HeroBanner`, `ProjectWithFilters`, `Wrapper`, `Gap`.
- **[Dane / źródła]** `data/pl/projects.json`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/realizacje`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (wszystkie realizacje).

### `/realizacje/[slug]` — Case study realizacji

- **[Plik]** `app/(pl)/realizacje/[slug]/page.tsx`
- **[Cel / content]** Szczegóły realizacji (opis, bloki contentu, statystyki, FAQ, CTA).
- **[Generowanie]**
  - `generateStaticParams()` — generuje strony realizacji.
  - `generateMetadata()` — metadata per realizacja.
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

### `/narzedzia` — Lista narzędzi

- **[Plik]** `app/(pl)/narzedzia/page.tsx`
- **[Cel / content]** Lista narzędzi online (karty/sekcje) + opis.
- **[Kluczowe komponenty]** `HeroBanner`, `SectionSteps`, `SectionInfo`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/narzedzia`.
  - **[schema]** JSON-LD: `ItemList` z elementami typu `WebApplication`.

### `/narzedzia/jpg-png-na-webp-bez-limitu` — Konwerter JPG/PNG → WebP

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/page.tsx`
- **[Cel / content]** Konwersja obrazów do WebP w przeglądarce.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `JpgPngToWebp`, `SectionInfo`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical dla narzędzia.
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia` — Zmiana rozmiaru i kadrowanie

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`
- **[Cel / content]** Zmiana rozmiaru / kadrowanie zdjęcia (client-side).
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `ImageResizeTool`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.
  - **[uwagi]** URL w `schema.url` i breadcrumbs jest spójny z canonical.

### `/narzedzia/darmowy-generator-favicon-ico` — Generator favicon (.ico)

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
- **[Cel / content]** Generowanie favicon i paczki assetów.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `FaviconGenerator`, `SectionInfo`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/licznik-dlugosci-meta-title-i-description` — Licznik meta title/description

- **[Plik]** `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
- **[Cel / content]** Pomiar długości meta tagów (znaki/piksele) i podgląd.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `MetaTitleDescriptionTool`, `SectionInfo`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/tester-kontrastu-kolorow-wcag` — Tester kontrastu WCAG

- **[Plik]** `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
- **[Cel / content]** Sprawdzenie kontrastu (WCAG) dla kolorów.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `WcagContrastChecker`, `SectionInfo`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/generator-palety-kolorow-z-obrazu` — Paleta kolorów z obrazu / logo

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
- **[Cel / content]** Ekstrakcja dominujących kolorów z obrazu/logo (client-side) i kopiowanie palety jako HEX.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `PaletteExtractor`, `SectionInfo`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/generator-palet-kolorow-online` — Generator palet kolorów

- **[Plik]** `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
- **[Cel / content]** Generowanie palet kolorów (client-side).
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `ColorPaletteGenerator`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

### `/narzedzia/darmowy-generator-stopki-mailowej` — Generator stopki mailowej

- **[Plik]** `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
- **[Cel / content]** Generator HTML stopki mailowej.
- **[Kluczowe komponenty]** `HeroBanner`, `Breadcrumbs`, `EmailSignatureGenerator`, `SectionInfo`, `CTABanner`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[schema]** JSON-LD: `WebApplication`.

---

## Usługi (overview)

### `/uslugi` — Strona zbiorcza usług

- **[Plik]** `app/(pl)/uslugi/page.tsx`
- **[Cel / content]** Lista usług (sekcje: witryny, projekty graficzne, marketing, tworzenie treści) + linkowanie do podstron.
- **[Kluczowe komponenty]** `HeroBanner`, `SectionSteps`, `Button`, `Wrapper`, `Gap`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/uslugi`.
  - **[schema]** JSON-LD: `CollectionPage` + `ItemList` (na bazie tablicy `SERVICES`).

---

## Usługi — marketing

### `/uslugi/marketing` — Hub marketingu

- **[Plik]** `app/(pl)/uslugi/marketing/page.tsx`
- **[Cel / content]** Oferta marketingu + korzyści, proces, cennik, kontakt.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `FeatureGrid`, `SectionSteps`, `TestimonialsCarousel`, `FeesSteps`, `WorkSteps`, `ContactForm`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `ItemList` (podstrony usług marketingowych) + często `BreadcrumbList`.

### `/uslugi/marketing/audyt-seo` — Audyt SEO

- **[Plik]** `app/(pl)/uslugi/marketing/audyt-seo/page.tsx`
- **[Cel / content]** Opis audytu, proces, pricing, FAQ, kontakt.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `SectionInfo`, `SectionBasic`, `FeatureGrid`, `SectionSteps`, `SectionPrices`, `TestimonialsCarousel`, `FeesSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + `BreadcrumbList` + (opcjonalnie) `FAQPage`.

### `/uslugi/marketing/optymalizacja-seo` — Optymalizacja SEO

- **[Plik]** `app/(pl)/uslugi/marketing/optymalizacja-seo/page.tsx`
- **[Cel / content]** Wdrożenia techniczne/treściowe po audycie + pricing + FAQ.
- **[Kluczowe komponenty]** podobny układ jak audyt (sekcje informacyjne, `SectionPrices`, `FaqPanels`, `ContactForm`).
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + (zwykle) breadcrumbs/FAQ.

### `/uslugi/marketing/pozycjonowanie-stron` — Pozycjonowanie

- **[Plik]** `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx`
- **[Cel / content]** Stała usługa SEO (strategia + treści + linkowanie) + pricing + FAQ.
- **[Kluczowe komponenty]** podobny układ jak audyt/optymalizacja.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + (zwykle) breadcrumbs/FAQ.

---

## Usługi — witryny i treści

### `/uslugi/strony-internetowe` — Strony internetowe

- **[Plik]** `app/(pl)/uslugi/strony-internetowe/page.tsx`
- **[Cel / content]** Oferta tworzenia stron (proces, tech, pricing, FAQ, portfolio).
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `SectionInfo`, `FeatureGrid`, `ProjectsCarousel`, `TestimonialsCarousel`, `SectionPrices`, `TechSteps`, `FeesSteps`, `WorkSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/strony-internetowe/optymalizacja-strony-wordpress` — Optymalizacja WordPress

- **[Plik]** `app/(pl)/uslugi/strony-internetowe/optymalizacja-strony-wordpress/page.tsx`
- **[Cel / content]** Usprawnienie i optymalizacja strony na WP (SEO/szybkość/UX) + pricing + FAQ.
- **[Kluczowe komponenty]** sekcje informacyjne + pricing + FAQ + kontakt (podobnie do usług marketingowych).
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/sklepy-internetowe` — Sklepy internetowe

- **[Plik]** `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
- **[Cel / content]** Oferta tworzenia sklepów (proces, tech, pricing, FAQ, portfolio).
- **[Kluczowe komponenty]** podobne do `/uslugi/strony-internetowe` (z `TechSteps`, `SectionPrices`, `FaqPanels`, `ProjectsCarousel`).
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/blogi-internetowe` — Blogi internetowe

- **[Plik]** `app/(pl)/uslugi/blogi-internetowe/page.tsx`
- **[Cel / content]** Oferta blogów (CMS, SEO, proces) + pricing + FAQ + portfolio.
- **[Kluczowe komponenty]** podobne do `/uslugi/strony-internetowe`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

### `/uslugi/tworzenie-tresci` — Tworzenie treści

- **[Plik]** `app/(pl)/uslugi/tworzenie-tresci/page.tsx`
- **[Cel / content]** Copywriting/treści dla stron, SEO i social + proces + FAQ + kontakt.
- **[Kluczowe komponenty]** `HeroBanner`, `BenefitBelt`, `Breadcrumbs`, `FeatureGrid`, `SectionSteps`, `TestimonialsCarousel`, `FeesSteps`, `WorkSteps`, `ContactForm`, `FaqPanels`, `ServicesSteps`.
- **[SEO]**
  - **[schema]** JSON-LD: `Service` (przez `buildServiceSchema`) + breadcrumbs/FAQ.

---

## Usługi — projekty graficzne

### `/uslugi/projekty-graficzne` — Hub projektów graficznych

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

### `/uslugi/projekty-graficzne/projekt-wizytowki` — Projekt wizytówki

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-wizytowki/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-ulotki` — Projekt ulotki

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-teczki-ofertowej` — Teczka ofertowa

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-papieru-firmowego` — Papier firmowy

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-papieru-firmowego/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-odziezy-firmowej` — Odzież firmowa

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-odziezy-firmowej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-logo` — Projekt logo

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-katalogu` — Projekt katalogu

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej` — Identyfikacja wizualna

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-graficzny-strony` — Projekt graficzny strony

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/szablony-postow-social-media` — Szablony social media

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera` — Kupony i vouchery

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-cennika` — Projekt cennika

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej` — Karta lojalnościowa

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

### `/uslugi/projekty-graficzne/projekt-menu-restauracji` — Menu restauracji

- **[Plik]** `app/(pl)/uslugi/projekty-graficzne/projekt-menu-restauracji/page.tsx`
- **[Schema]** `Service` (buildServiceSchema) + breadcrumbs/FAQ.

---

## Strony prawne

### `/polityka-prywatnosci` — Polityka prywatności

- **[Plik]** `app/(pl)/polityka-prywatnosci/page.tsx`
- **[Cel / content]** Dokument prawny z TOC, sekcjami i linkiem do PDF.
- **[Kluczowe komponenty]** `Wrapper`, `SectionInfo`, `Gap`, `TableOfContents`, `ButtonToTop`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/polityka-prywatnosci`.
  - **[schema]** microdata na wrapperze: `https://schema.org/Article`.

### `/regulamin` — Regulamin świadczenia usług

- **[Plik]** `app/(pl)/regulamin/page.tsx`
- **[Cel / content]** Dokument regulaminu z TOC, sekcjami i linkiem do PDF.
- **[Kluczowe komponenty]** `Wrapper`, `SectionInfo`, `Gap`, `TableOfContents`, `ButtonToTop`.
- **[SEO]**
  - **[metadata]** canonical: `https://www.arteonagency.pl/regulamin`.
  - **[schema]** microdata na wrapperze: `https://schema.org/Article`.
