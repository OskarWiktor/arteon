# COMPONENTS_CATALOG

Ten plik opisuje wszystkie komponenty z katalogu `components/` (systemowe, współdzielone, sekcje oraz prymitywy UI).

Struktura repo (w uproszczeniu):

- **`components/systems/*`**: komponenty „systemowe” (a11y, obserwatory, ogłoszenia route).
- **`components/shared/*`**: globalne elementy UI (nav, footer, cookie consent).
- **`components/sections/*`**: sekcje używane na stronach (home, blog, projekty, narzędzia).
- **`components/ui/*`**: prymitywy i klocki design systemu.

---

## System (`components/systems/*`)

### `FocusManager` (`components/systems/FocusManager.tsx`)

- **Co robi**: Zarządza fokusem po zmianie route (a11y) i scrolluje na górę.
- **Odpowiedzialności**:
  - **[hash focus]** Jeśli URL zawiera hash, fokusuje element o danym `id` (dodaje `tabindex="-1"` jeśli brak).
  - **[fallback focus]** Jeśli brak hasha, blur aktywny element i fokusuje `#skip-link` (lub `document.body`).
  - **[scroll reset]** Wykonuje `window.scrollTo({ top: 0, left: 0, behavior: 'auto' })` po route change.
- **Zależności**:
  - `next/navigation`: `usePathname`, `useSearchParams`.

### `RevealObserver` (`components/systems/RevealObserver.tsx`)

- **Co robi**: Obserwuje elementy z klasą `reveal-animation` i przełącza klasę `is-inview` po wejściu do viewport (animacje „reveal”).
- **Odpowiedzialności**:
  - **[IntersectionObserver]** obserwuje elementy, dodaje/usuwa klasę `is-inview`.
  - **[reduced motion]** pomija animacje, jeśli użytkownik ma włączone ograniczenie ruchu.
  - **[cleanup]** odłącza obserwatory.

### `RouteAnnouncer` (`components/systems/RouteAnnouncer.tsx`)

- **Co robi**: Ogłasza zmianę route dla czytników ekranu (aria-live).
- **Odpowiedzialności**:
  - **[aria-live region]** aktualizuje tekst w regionie live (tytuł dokumentu lub pathname).

---

## Shared / global (`components/shared/*`)

### `Navigation` (`components/shared/Navigation.tsx`)

- **Co robi**: Renderuje globalny nagłówek (logo + nawigacja desktop/mobile + social + przycisk menu).
- **Odpowiedzialności**:
  - **[layout]** układ headera i rozmieszczenie elementów.
  - **[menu state]** przełącza otwarcie/zamknięcie menu mobilnego.
  - **[a11y]** obsługa klawisza Escape do zamykania menu.
- **Zależności**:
  - `DesktopNavigation`, `MobileNavigation`.
  - `components/shared/navigation-data/pl.ts` (SSOT dla linków/sekcji w headerze).

### `DesktopNavigation` (`components/shared/navigation-types/DesktopNavigation.tsx`)

- **Co robi**: Złożona nawigacja desktopowa z dropdownami, podmenu, obsługą klawiatury i animacjami.
- **Odpowiedzialności**:
  - **[menu model]** renderuje sekcje/pozycje nawigacji i ich hierarchię.
  - **[dropdown state]** zarządza otwartymi dropdownami.
  - **[a11y]**
    - nawigacja klawiaturą po elementach menu,
    - zamykanie Escape,
    - zamykanie po kliknięciu poza.
  - **[animacje]** animuje dropdowny (Framer Motion).
- **Zależności**:
  - `components/shared/navigation-data/pl.ts` (`DESKTOP_NAV_ITEMS_PL`, `OFFER_SECTIONS_PL`, `TOOLS_SECTIONS_PL`).
  - Hooki: `useEscapeKey`, `useOutsideClick`, `useMenuKeyboardNavigation`.

### `MobileNavigation` (`components/shared/navigation-types/MobileNavigation.tsx`)

- **Co robi**: Drawer nawigacji mobilnej (portal + animacje + focus trap).
- **Odpowiedzialności**:
  - **[portal + overlay]** render w portalu, warstwa tła i panel.
  - **[focus management]** focus trap i przywracanie fokusu.
  - **[scroll lock]** blokada scrolla strony przy otwartym drawerze.
  - **[a11y]** obsługa Escape, nawigacja klawiaturą, aria-atributy.
  - **[animacje]** animacje przejść (Framer Motion).
- **Zależności**:
  - `components/shared/navigation-data/pl.ts` (`MOBILE_NAV_ITEMS_PL`, `OFFER_SECTIONS_PL`, `LEGAL_LINKS_PL`).
  - Hooki: `useEscapeKey`, `useFocusTrap`, `useRestoreFocus`, `useScrollLock`, `useEventListener`, `useTimeout`.

### `SkipToContent` (`components/shared/SkipToContent.tsx`)

- **Co robi**: Link „skip to content” (a11y) do przeskoku na `main`.
- **Odpowiedzialności**:
  - **[a11y]** udostępnia szybki skok do treści (zwykle widoczny po focus).

### `CookieConsent` (`components/shared/CookieConsent.tsx`)

- **Co robi**: Obsługuje zgodę na pliki cookie (banner + panel preferencji) oraz integrację z Google Analytics consent.
- **Odpowiedzialności**:
  - **[persist]** odczyt/zapis cookie z preferencjami.
  - **[GA consent]** wywołuje `gtag('consent', 'default' | 'update', ...)` wg ustawień.
  - **[UI]**
    - banner (accept/reject/ustawienia),
    - panel preferencji z przełącznikami kategorii.
  - **[a11y]** focus trap, Escape, klik poza, restore focus.
  - **[global API]** wystawia `window.ArteonConsent?.open()` do otwierania ustawień z innych miejsc.
- **Zależności**:
  - `lib/consent/storage.ts` (persist zgód).
  - `lib/consent/gtag.ts` (aktualizacja consent mode).
  - `lib/consent/ga.ts` (lazy-load GA po zgodzie).

### `CookieSettingsButton` (`components/shared/CookieSettingsButton.tsx`)

- **Co robi**: Przycisk otwierający ustawienia plików cookie.
- **Odpowiedzialności**:
  - **[delegacja]** wywołuje globalne `window.ArteonConsent?.open()`.

### `Footer` (`components/shared/Footer.tsx`)

- **Co robi**: Stopka strony z danymi firmy, linkami, social oraz JSON-LD (SEO).
- **Odpowiedzialności**:
  - **[layout]** sekcje stopki i ich układ.
  - **[nawigacja]** linki do kluczowych podstron.
  - **[SEO]** wstrzykuje schema.org JSON-LD.

---

## Sections (`components/sections/*`)

### `BenefitBelt` (`components/sections/BenefitBelt.tsx`)

- **Co robi**: Pasek korzyści (do 6 elementów) z ikoną i etykietą.
- **Odpowiedzialności**:
  - **[lista]** render listy benefitów w układzie responsywnym.
  - **[a11y]** obsługa `aria-label` dla sekcji.

### `BreadCrumbs` (`components/sections/BreadCrumbs.tsx`)

- **Co robi**: Breadcrumbs + opcjonalny JSON-LD dla SEO.
- **Odpowiedzialności**:
  - **[nawigacja]** render `nav` + lista linków.
  - **[SEO]** opcjonalny schema.org BreadcrumbList.

### `CTABanner` (`components/sections/CTABanner.tsx`)

- **Co robi**: Sekcja CTA (tytuł, opis, grafika tła, overlay, przyciski).
- **Odpowiedzialności**:
  - **[layout]** układ treści na tle z opcjonalnym obrazem.
  - **[akcje]** do 2 przycisków (CTA).
  - **[a11y]** wspiera etykiety i semantykę.

### `Calculator` (`components/sections/Calculator.tsx`)

- **Co robi**: Wieloetapowy kalkulator wyceny (logika wyborów + wynik).
- **Odpowiedzialności**:
  - **[state machine]** przechowuje wybory użytkownika, obsługuje przejścia kroków i branching.
  - **[walidacja]** waliduje wymagane dane przed przejściem dalej.
  - **[wycena]** oblicza widełki cenowe i wynik końcowy.
  - **[UI]** deleguje rendering do `CalculatorSteps` i `CalculatorResult`.

### `ContactForm` (`components/sections/ContactForm.tsx`)

- **Co robi**: Formularz kontaktowy (walidacja + wysyłka + statusy).
- **Odpowiedzialności**:
  - **[formularz]** pola: imię, email, temat, wiadomość.
  - **[walidacja]** podstawowe sprawdzenia przed wysyłką.
  - **[submit]** wysyłka i obsługa statusu (loading/success/error).
  - **[message placeholder]** domyślny placeholder można nadpisać przez prop `messagePlaceholder`.

### `FeatureGrid` (`components/sections/FeatureGrid.tsx`)

- **Co robi**: Sekcja z siatką feature’ów (karty + opcjonalny nagłówek/intro).
- **Odpowiedzialności**:
  - **[layout]** tytuł/podtytuł/opis.
  - **[lista]** render listy feature’ów (zwykle przez `FeatureCard`).

### `HeroBanner` (`components/sections/HeroBanner.tsx`)

- **Co robi**: Sekcja hero z wariantami układu, tłem i CTA.
- **Odpowiedzialności**:
  - **[warianty]** różne układy (np. pozycja treści, obraz tła, overlay).
  - **[CTA]** 1-2 przyciski.
  - **[a11y]** aria-label dla elementów interaktywnych.

### `ShareBlock` (`components/sections/ShareBlock.tsx`)

- **Co robi**: Sekcja „udostępnij” (Facebook/LinkedIn/X/Email + kopiowanie linku).
- **Odpowiedzialności**:
  - **[share links]** buduje linki do udostępniania.
  - **[copy]** kopiuje URL do schowka i pokazuje feedback.
  - **[a11y]** etykiety dla ikon/akcji.

### `TableOfContent` (`components/sections/TableOfContent.tsx`)

- **Co robi**: Generuje spis treści z nagłówków w DOM i śledzi aktywną sekcję.
- **Odpowiedzialności**:
  - **[DOM scan]** pobiera headingi z podanego selektora.
  - **[active state]** IntersectionObserver do ustawiania aktywnego wpisu.
  - **[responsive UI]** wariant mobilny (zwijany) i desktop.
  - **[a11y]** poprawne atrybuty i nawigacja.

### `TechStack` (`components/sections/TechStack.tsx`)

- **Co robi**: Przewijana (marquee) lista technologii z ikonami.
- **Odpowiedzialności**:
  - **[animacja]** płynne przewijanie (Framer Motion).
  - **[pause]** pauzuje na hover/focus/touch.
  - **[a11y]** etykiety i dostępność.

### `TestimonialsCarousel` (`components/sections/TestimonialsCarousel.tsx`)

- **Co robi**: Karuzela opinii z nawigacją (przyciski + kropki) i obsługą klawiatury.
- **Odpowiedzialności**:
  - **[scroll carousel]** używa `useCarouselScroller`.
  - **[UI]** używa `CarouselNavButtons`, `CarouselDots`, `CarouselCard`/`TestimonialCard`.
  - **[a11y]** aria-label dla sterowania.

### `Tooltip` (`components/sections/Tooltip.tsx`)

- **Co robi**: Uniwersalny tooltip (hover/focus/touch) z opóźnieniem.
- **Odpowiedzialności**:
  - **[timing]** opóźnione show/hide (`useTimeout` dla `delay` + `clear` przy hide).
  - **[a11y]** role/aria atrybuty.
  - **[CSS inject]** jednorazowo wstrzykuje styl (kropkowane podkreślenie).
- **Uwagi**:
  - Ten komponent został zidentyfikowany jako aktualnie nieużywany.

---

## Sections - Blog (`components/sections/blog/*`)

### `ArticlesList` (`components/sections/blog/ArticlesList.tsx`)

- **Co robi**: Lista artykułów (opcjonalnie filtrowana po kategorii).
- **Odpowiedzialności**:
  - **[render list]** tytuł, obraz, meta (czas czytania, data).
  - **[filtering]** opcjonalny filtr po `categorySlug`.
  - **[i18n]** stringi UI zależne od locale.

### `ArticlesCarousel` (`components/sections/blog/ArticlesCarousel.tsx`)

- **Co robi**: Karuzela z podglądem artykułów (filtrowanie po slugach/kategorii).
- **Odpowiedzialności**:
  - **[carousel]** używa `useCarouselScroller`.
  - **[filtering]** ogranicza listę artykułów wg parametrów.
  - **[UI]** wykorzystuje komponenty karuzeli (`Carousel*`).

### `FilterBar` (`components/sections/blog/FilterBar.tsx`)

- **Co robi**: Pasek filtrów kategorii bloga.
- **Odpowiedzialności**:
  - **[active state]** wyróżnia aktywną kategorię.
  - **[routing]** linki do stron kategorii.

---

## Sections - Projekty (`components/sections/projects/*`)

### `Filters` (`components/sections/projects/Filters.tsx`)

- **Co robi**: Toolbar filtrów kategorii projektów.
- **Odpowiedzialności**:
  - **[toggle]** przełączanie zaznaczeń.
  - **[clear]** czyszczenie filtrów.
  - **[i18n]** etykiety zależne od locale.

### `ProjectsGrid` (`components/sections/projects/ProjectsGrid.tsx`)

- **Co robi**: Siatka kart projektów, filtrowana wg wybranych kategorii.
- **Odpowiedzialności**:
  - **[filtering]** filtruje projekty po kategorii.
  - **[layout]** render grid.
  - **[animacje]** animuje zmiany (Framer Motion).

### `ProjectsCarousel` (`components/sections/projects/ProjectsCarousel.tsx`)

- **Co robi**: Karuzela podglądu projektów (opcjonalne filtrowanie).
- **Odpowiedzialności**:
  - **[carousel]** `useCarouselScroller` + `Carousel*`.
  - **[filtering]** po kategorii/slugach.

### `ProjectsWithFilters` (`components/sections/projects/ProjectsWithFilters.tsx`)

- **Co robi**: Kompozycja `Filters` + `ProjectsGrid`.
- **Odpowiedzialności**:
  - **[state]** przechowuje `selectedCategories` i przekazuje callbacki.

---

## Sections - Steps (`components/sections/steps/*`)

### `FeesSteps` (`components/sections/steps/FeesSteps.tsx`)

- **Co robi**: Sekcja kroków dot. płatności/bezpieczeństwa.
- **Odpowiedzialności**:
  - **[predefiniowane dane]** zestaw itemów kroków.
  - **[UI]** deleguje do `SectionSteps`.

### `ServicesSteps` (`components/sections/steps/ServicesSteps.tsx`)

- **Co robi**: Sekcja kroków opisująca ofertę usług.
- **Odpowiedzialności**:
  - **[content]** ikony, tytuły, opisy.
  - **[CTA]** przycisk akcji.
  - **[UI]** `SectionSteps`.

### `TechSteps` (`components/sections/steps/TechSteps.tsx`)

- **Co robi**: Sekcja kroków technologicznych.
- **Odpowiedzialności**:
  - **[content]** predefiniowane itemy.
  - **[tło]** overlay/tło dla wariantu.
  - **[UI]** `SectionSteps`.

### `WorkSteps` (`components/sections/steps/WorkSteps.tsx`)

- **Co robi**: Sekcja procesu pracy w kilku wariantach (home/web/marketing/content/design).
- **Odpowiedzialności**:
  - **[variants]** wybiera zestaw kroków zależnie od `variant`.
  - **[UI]** deleguje do `SectionSteps`.

---

## Sections - Tools (`components/sections/tools/*`)

### `ColorPaletteGenerator` (`components/sections/tools/ColorPaletteGenerator.tsx`)

- **Co robi**: Generuje zestawy palet kolorów na bazie koloru HEX.
- **Odpowiedzialności**:
  - **[parsowanie]** waliduje i normalizuje HEX.
  - **[algorytmy]** oblicza palety (monochromatic, triadic, split-complementary, pastel, deep, material-tonal, apple-minimal, analogous, complementary).
  - **[UI]** prezentacja palet + kopiowanie pojedynczych kolorów (`CopyButton`).
  - **[UX]** losowy kolor + reset statusu „copied” (`useTimeout`).

### `EmailSignatureGenerator` (`components/sections/tools/EmailSignatureGenerator.tsx`)

- **Co robi**: Edytor stopki e-mail w HTML (wiele układów + podgląd + kopiowanie do Gmail/Outlook).
- **Odpowiedzialności**:
  - **[konfiguracja]** dane osoby, CTA, social, wygląd, klauzula.
  - **[layout presets]** kilka układów stopki (np. standard, accent-bar, top-banner, label-column, centered).
  - **[HTML generation]** buduje HTML w `buildSignatureHtml` + sanitizuje wartości w `sanitize` (escape + whitelist protokołów dla linków).
  - **[preview]** render podglądu przez `dangerouslySetInnerHTML`.
  - **[copy]** kopiuje HTML przez `useSignatureCopy` (preferencja: `execCommand('copy')` na selekcji; fallback: `navigator.clipboard.writeText`).
  - **[UX]** status kopiowania resetowany timeoutem (`useSignatureCopy` korzysta z `useTimeout`).

### `FaviconGenerator` (`components/sections/tools/FaviconGenerator.tsx`)

- **Co robi**: Generator zestawu favicon (PNG + opcjonalnie `favicon.ico`).
- **Odpowiedzialności**:
  - **[upload]** drag&drop / file picker (PNG/JPG/SVG) + walidacja typu.
  - **[canvas]** render źródła do PNG w różnych rozmiarach.
  - **[ICO]** buduje minimalny kontener `.ico` na bazie PNG 32x32.
  - **[download]** pojedyncze pobieranie i „download all” + opcja auto-download.
  - **[cleanup]** revoke `ObjectURL` dla outputów.

### `ImageResizeTool` (`components/sections/tools/ImageResizeTool.tsx`)

- **Co robi**: Narzędzie do zmiany rozmiaru i kadrowania obrazu (presety social/web, kształty, siatka, jakość, export JPG/PNG/WebP).
- **Odpowiedzialności**:
  - **[upload]** drag&drop / file picker; odczyt oryginalnych wymiarów.
  - **[presety]** gotowe rozmiary (social/web) i tryb „pixels”.
  - **[crop]** interaktywny kadr (move + resize) oparty o pointer events.
  - **[shapes]** prostokąt/kwadrat/koło (koło wymusza format z alfą; JPG blokowany).
  - **[export]** rysuje na canvas i generuje plik do pobrania.
  - **[estimate]** pokazuje szacowany rozmiar wynikowy po wygenerowaniu.
  - **[cleanup]** revoke `ObjectURL` przy zmianie pliku i unmount.

### `JpgPngToWebp` (`components/sections/tools/JpgPngToWebp.tsx`)

- **Co robi**: Batch konwerter JPG/PNG → WebP z kolejką, statusem per plik, auto-download i kopiowaniem podsumowania.
- **Odpowiedzialności**:
  - **[queue]** zarządza listą plików (pending/processing/done/error).
  - **[conversion]** konwersja przez canvas; „smart” obniża jakość jeśli wynik byłby większy od oryginału.
  - **[download]** pobieranie pojedynczo i zbiorczo; oznacza „downloaded”.
  - **[summary]** generuje raport wag i kopiuje do schowka (`useCopyToClipboard`).
  - **[cleanup]** revoke `ObjectURL` dla preview i download.

### `MetaTitleDescriptionTool` (`components/sections/tools/MetaTitleDescriptionTool.tsx`)

- **Co robi**: Analizuje długość meta title i meta description (znaki/słowa/szerokość w px) + pokazuje podgląd wyniku w Google.
- **Odpowiedzialności**:
  - **[pomiar px]** mierzy szerokość tekstu przez canvas `measureText`.
  - **[ocena]** statusy: empty / too-short / ideal / too-long dla title i description.
  - **[preview]** render orientacyjnego snippet-u (title/description/url).

### `WcagContrastChecker` (`components/sections/tools/WcagContrastChecker.tsx`)

- **Co robi**: Checker kontrastu WCAG 2.1 dla pary kolorów (foreground/background) z wizualnym podglądem.
- **Odpowiedzialności**:
  - **[parsing]** wspiera `#rgb`, `#rrggbb`, `rgb(...)`.
  - **[luminance/ratio]** liczy luminancję względną i współczynnik kontrastu.
  - **[wyniki]** pokazuje pass/fail dla AA/AAA (normal/large) i UI graphics.
  - **[preview]** sample tekstu + ikona na tle.

### `PaletteExtractor` (`components/sections/tools/PaletteExtractor/PaletteExtractor.tsx`)

- **Co robi**: Wyciąga dominujące kolory z obrazu/logo i prezentuje je jako paletę (swatche) z możliwością kopiowania kodów HEX.
- **Odpowiedzialności**:
  - **[upload]** `ImageDropzone` (drag&drop / file picker) + walidacja typu (PNG/JPG/SVG).
  - **[analysis]** downscale obrazu do `ImageData` (`getDownscaledImageDataFromUrl`) + ekstrakcja palety (`extractPalette`).
  - **[UI]** podgląd obrazu + lista swatchy (`PaletteSwatches`) + akcje (`PaletteActions`).
  - **[copy]** kopiowanie pojedynczych kolorów (HEX) i całej palety.
  - **[cleanup]** revoke `ObjectURL` dla podglądu przy zmianie pliku i unmount.

---

## UI (`components/ui/*`)

### `Wrapper` (`components/ui/Wrapper.tsx`)

- **Co robi**: Prosty wrapper na content (max width + `mx-auto`).
- **Odpowiedzialności**:
  - **[layout]** ujednolica szerokość i marginesy.

### `Badge` (`components/ui/Badge.tsx`)

- **Co robi**: Uniwersalny badge (warianty, rozmiary, możliwość renderu jako różne elementy).
- **Odpowiedzialności**:
  - **[variants]** style dla różnych stanów (m.in. selected/success/error/neutral).
  - **[as prop]** możliwość renderowania jako `button`, `a`, itd.
  - **[legacy]** wspiera starszy wariant „text badge”.

### `Link` (`components/ui/Link.tsx`)

- **Co robi**: Stylowany wrapper na `next/link` z wariantami.
- **Odpowiedzialności**:
  - **[variants]** style linków.
  - **[a11y]** obsługa `aria-current` i `aria-label`.

### `Eyebrow` (`components/ui/typography/Eyebrow.tsx`)

- **Co robi**: Mały nagłówek/etykieta sekcji (eyebrow).
- **Odpowiedzialności**:
  - **[typografia]** wyróżnik nad nagłówkiem.

### `SectionHeader` (`components/ui/typography/SectionHeader.tsx`)

- **Co robi**: Składany nagłówek sekcji (sub/heading/description) w spójnych stylach.
- **Odpowiedzialności**:
  - **[layout]** render i odstępy dla tytułów sekcji.

### `Button` (`components/ui/buttons/Button.tsx`)

- **Co robi**: Przycisk/link z wariantami (w tym wykrywanie linków zewnętrznych) i opcjonalną strzałką.
- **Odpowiedzialności**:
  - **[variant/size]** style i rozmiary.
  - **[link vs button]** renderuje jako `<button>` lub link.
  - **[a11y]** aria-atributy, disabled.

### `ButtonGroup` (`components/ui/buttons/ButtonGroup.tsx`)

- **Co robi**: Układ dla 1-2 przycisków (CTA) z alignment/spacing.
- **Odpowiedzialności**:
  - **[layout]** spójne rozmieszczenie przycisków.

### `IconButton` (`components/ui/buttons/IconButton.tsx`)

- **Co robi**: Mały przycisk ikonowy z obowiązkowym label.
- **Odpowiedzialności**:
  - **[a11y]** `aria-label` i rozmiary.

### `CopyButton` (`components/ui/buttons/CopyButton.tsx`)

- **Co robi**: Przycisk „kopiuj” z feedbackiem (zmiana label/ikony) oparty o `useCopyToClipboard`.
- **Odpowiedzialności**:
  - **[clipboard]** kopiuje podany tekst.
  - **[state]** pokazuje stan „copied”.

### `ButtonToTop` (`components/ui/buttons/ButtonToTop.tsx`)

- **Co robi**: Przycisk przewijający do góry, widoczny po przekroczeniu progu scroll.
- **Odpowiedzialności**:
  - **[scroll listener]** nasłuch scroll (`useEventListener`).
  - **[scrollTo]** przewija do top.

### `OptionButton` (`components/ui/buttons/OptionButton.tsx`)

- **Co robi**: Przycisk opcji wyboru (np. w kalkulatorze) z obsługą klawiatury i tooltip.
- **Odpowiedzialności**:
  - **[selected state]** styl dla zaznaczonej opcji.
  - **[a11y]** role/aria dla opcji.

### `IconText` (`components/ui/IconText.tsx`)

- **Co robi**: Układ: ikona + tekst/children.
- **Odpowiedzialności**:
  - **[layout]** alignment/gap.

### `Gap` (`components/ui/Gap.tsx`)

- **Co robi**: Kontrolowany odstęp pionowy (lub separator) z wariantami rozmiaru.
- **Odpowiedzialności**:
  - **[spacing]** spójne przerwy między sekcjami.

### `FeatureCard` (`components/ui/FeatureCard.tsx`)

- **Co robi**: Karta feature’u z ikoną, tytułem, opisem i listą punktów.
- **Odpowiedzialności**:
  - **[content]** render ikon/tytułów/punktów.
  - **[SEO]** może zawierać schema markup.

### `ProjectCard` (`components/ui/ProjectCard.tsx`)

- **Co robi**: Karta projektu (obraz, tytuł, krótki opis, CTA).
- **Odpowiedzialności**:
  - **[layout]** spójny UI dla projektów.
  - **[i18n]** etykiety zależne od locale.

### `TestimonialCard` (`components/ui/TestimonialCard.tsx`)

- **Co robi**: Karta opinii (gwiazdki, cytat, autor, avatar, link do źródła).
- **Odpowiedzialności**:
  - **[rating]** używa `StarRating`.
  - **[content]** render cytatu i autora.

### `StarRating` (`components/ui/StarRating.tsx`)

- **Co robi**: Render oceny 0-5 (pełne/połówkowe/puste gwiazdki).
- **Odpowiedzialności**:
  - **[render]** SVG gwiazdek; komponent memoizowany; `aria-hidden`.

### `SocialIconLink` (`components/ui/SocialIconLink.tsx`)

- **Co robi**: Link do social z ikoną.
- **Odpowiedzialności**:
  - **[a11y]** `aria-label`, domyślne `target`/`rel` dla zewnętrznych.

### `TableBlock` (`components/ui/TableBlock.tsx`)

- **Co robi**: Stylowana tabela z caption/note/align i striping.
- **Odpowiedzialności**:
  - **[a11y]** semantyka tabeli (caption).
  - **[layout]** wyrównania i style.

### `CodeBlock` (`components/ui/CodeBlock.tsx`)

- **Co robi**: Prezentacja bloków kodu z dodatkami (filename, caption, line numbers, highlight) i kopiowaniem.
- **Odpowiedzialności**:
  - **[render]** kod + opcjonalne nagłówki.
  - **[copy]** używa `CopyButton`.

### `FaqPanels` (`components/ui/FaqPanels.tsx`)

- **Co robi**: FAQ accordion (a11y + animowane panele) + opcjonalny JSON-LD.
- **Odpowiedzialności**:
  - **[accordion]** rozkładane panele i obsługa klawiatury.
  - **[animacje]** otwieranie/zamykanie.
  - **[SEO]** opcjonalny schema FAQ.

### Carousel UI (`components/ui/carousel/*`)

#### `CarouselCard` (`components/ui/carousel/CarouselCard.tsx`)

- **Co robi**: Karta karuzeli dla kilku typów (project/article/testimonial).
- **Odpowiedzialności**:
  - **[variant dispatch]** deleguje do `ProjectCard`/`TestimonialCard` lub renderuje wariant artykułu.

#### `CarouselDots` (`components/ui/carousel/CarouselDots.tsx`)

- **Co robi**: Kropki nawigacji karuzeli.
- **Odpowiedzialności**:
  - **[a11y]** aria-label i stan „current”.
  - **[visibility]** ukrywa się, gdy karuzela nie jest przewijalna.

#### `CarouselNavButtons` (`components/ui/carousel/CarouselNavButtons.tsx`)

- **Co robi**: Przyciski prev/next dla karuzeli.
- **Odpowiedzialności**:
  - **[controls]** wywołuje `scrollByCards('left'|'right')`.
  - **[visibility]** warunkowe renderowanie jeśli przewijalne.

### Calculator UI (`components/ui/calculator/*`)

#### `CalculatorSteps` (`components/ui/calculator/CalculatorSteps.tsx`)

- **Co robi**: UI kroków kalkulatora (opcje, input, progress, walidacja, nawigacja).
- **Odpowiedzialności**:
  - **[render steps]** lista opcji, inputy.
  - **[controls]** „dalej/wstecz” i progress.

#### `CalculatorResult` (`components/ui/calculator/CalculatorResult.tsx`)

- **Co robi**: Podsumowanie wyniku kalkulatora (widełki, disclaimer, lista, reset).
- **Odpowiedzialności**:
  - **[result]** prezentacja zakresu cen i listy.

#### `OptionInput` (`components/ui/calculator/OptionInput.tsx`)

- **Co robi**: Prosty input liczbowy dla kroków.
- **Odpowiedzialności**:
  - **[input]** zmiana wartości i label.

#### `ProgressBar` (`components/ui/calculator/ProgressBar.tsx`)

- **Co robi**: Pasek postępu kroków.
- **Odpowiedzialności**:
  - **[a11y]** `role="progressbar"` + wartości.

### Section UI (`components/ui/sections/*`)

#### `SectionBasic` (`components/ui/sections/SectionBasic.tsx`)

- **Co robi**: Podstawowy layout sekcji z obrazem + treścią.
- **Odpowiedzialności**:
  - **[layout variants]** obraz po lewej/prawej.
  - **[CTA]** opcjonalne przyciski.

#### `SectionHeaderWithAction` (`components/ui/sections/SectionHeaderWithAction.tsx`)

- **Co robi**: Nagłówek sekcji z opcjonalną akcją (button/node).
- **Odpowiedzialności**:
  - **[header]** subtitle/title/description.
  - **[action slot]** element akcji.

#### `SectionInfo` (`components/ui/sections/SectionInfo.tsx`)

- **Co robi**: Blok informacji (nagłówek + opis + children + opcjonalne przyciski).
- **Odpowiedzialności**:
  - **[compose]** łączy `SectionHeader` i `ButtonGroup`.

#### `SectionPrices` (`components/ui/sections/SectionPrices.tsx`)

- **Co robi**: Rozbudowana sekcja cennika (plany, badge, lista cech, CTA, noty prawne).
- **Odpowiedzialności**:
  - **[plans]** render planów i ich zawartości.
  - **[a11y]** czytelna struktura i etykiety.

#### `SectionSteps` (`components/ui/sections/SectionSteps.tsx`)

- **Co robi**: Uniwersalna sekcja kroków (grid, ikony/obrazy, tło, CTA).
- **Odpowiedzialności**:
  - **[layout]** grid itemów.
  - **[background]** opcjonalne tło i overlay.

### Tools UI (`components/ui/tools/*`)

#### `ToolSection` (`components/ui/tools/ToolSection.tsx`)

- **Co robi**: Kontener sekcji w narzędziach (spójne tło/obramowanie/spacing).

#### `ToolInfo` (`components/ui/tools/ToolInfo.tsx`)

- **Co robi**: Pudełko informacyjne (np. na parametry/podglądy).

#### `ToolHelper` (`components/ui/tools/ToolHelper.tsx`)

- **Co robi**: Tekst pomocniczy (w tym wariant błędu).

#### `ToolFieldRow` (`components/ui/tools/ToolFieldRow.tsx`)

- **Co robi**: Wiersz pola formularza: label + helper + children.

#### `ToolAlert` (`components/ui/tools/ToolAlert.tsx`)

- **Co robi**: Alert box (info/success/error) z odpowiednimi rolami i stylami.

### `SearchDialog` (`components/ui/SearchDialog.tsx`)

- **Co robi**: Modal wyszukiwania strony (site search) z instant wynikami podczas pisania.
- **Odpowiedzialności**:
  - **[input]** pole wyszukiwania z debounce (zmniejszona wysokość: `py-1` w headerze, `h-7`, `text-sm`).
  - **[wyniki]** grupowanie wyników (Usługi / Narzędzia / Edukacja / Realizacje / Strony).
  - **[keyboard nav]** `↑↓` nawigacja, `Enter` przejście, `Esc` zamknięcie.
  - **[close]** przycisk zamknięcia z ikoną X (bez tekstu „Esc").
  - **[a11y]** `role="dialog"`, `aria-modal`, `aria-label`.
  - **[animacje]** Framer Motion dla entrance/exit.
- **Props**:
  - **`isOpen`**: `boolean` - czy modal jest otwarty.
  - **`onClose`**: `() => void` - callback zamknięcia.
- **Zależności**:
  - `hooks/useSearch` — logika wyszukiwania.
  - `hooks/useEscapeKey` — zamykanie na Escape.
  - `next/navigation` — `useRouter` do nawigacji.
- **UI (2025-12-19)**: Usunięto stopkę z podpowiedziami skrótów, przycisk zamknięcia to ikona X, kolory dopasowane do `text-dark/text-mid/text-light`.
