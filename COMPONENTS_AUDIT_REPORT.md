# Audyt komponentów (`/components`) – propozycje refaktoru, podziału i reużywalności

## 1) Konfiguracja repo (kontekst decyzji)

- **Framework**: Next.js `^15.3.6` (App Router)
- **React**: `^19.2.1`
- **TypeScript**: strict (`strict: true`, `noImplicitReturns: true`, `noUnusedLocals: true`)
- **ESLint**: eslint v9 + TS rules + `unused-imports`, `import/order`, `jsx-a11y`, `react-hooks`, `sonarjs`, `security`
- **Prettier**: `prettier-plugin-tailwindcss`
- **Tailwind**: v4

Wnioski pod audyt:
- Repo jest skonfigurowane pod **wysoki standard clean code**, więc opłaca się iść w:
  - redukcję duplikacji (hooki i prymitywy UI)
  - zmniejszenie granic `use client` (tam gdzie możliwe)
  - typowanie zamiast `any`
  - wzorce dostępności (keyboard/focus/aria) jako reużywalne prymitywy

---

## 2) Obecna struktura `/components` (stan na dziś)

- `components/ui` – prymitywy i komponenty reużywalne (Button, Link, Tag, Typography, Tool* itp.)
- `components/sections` – sekcje stron (hero, cta, carousel, formy, narzędzia)
- `components/shared` – globalne elementy (Navigation, Footer, CookieConsent)
- `components/systems` – systemowe (FocusManager, RevealObserver, RouteAnnouncer)

Największe pliki (wysokie ROI na podział):
- `components/sections/tools/EmailSignatureGenerator.tsx` (~56 KB)
- `components/sections/tools/ImageResizeTool.tsx` (~48 KB)
- `components/sections/tools/JpgPngToWebp.tsx` (~25 KB)
- `components/sections/tools/FaviconGenerator.tsx` (~22 KB)
- `components/sections/tools/ColorPaletteGenerator.tsx` (~16 KB)
- `components/shared/navigation-types/DesktopNavigation.tsx` (~562 linie)
- `components/shared/CookieConsent.tsx` (~292 linie)

---

## 3) Najważniejsze problemy (cross-cutting)

### 3.1 Duplikacja logiki karuzel (wysokie ROI)
Występuje powtarzalny pattern w:
- `TestimonialsCarousel.tsx`
- `ArticlesOverview.tsx`
- `ProjectsOverview.tsx`

Wspólne elementy:
- `scrollRef` + `cardRef`
- `ResizeObserver` do wyliczania `cardWidth`/`maxSlides`
- `currentSlide` + „dots” + przyciski lewo/prawo
- obsługa `aria-roledescription="carousel"`, `aria-live`, focus ring

Rekomendacja:
- wydzielić **bazowy komponent** `components/ui/carousel/Carousel.tsx` + `CarouselDots.tsx` + `CarouselNav.tsx`
- oraz/lub hook `useCarouselScroller()` (obliczenia + kontrola scroll)

Efekt:
- mniej kodu (3 implementacje → 1)
- mniej ryzyka regresji a11y
- łatwiejsze utrzymanie stylu i zachowania

---

### 3.2 Duplikacja danych nawigacji + rozjazd Mobile/Desktop
`DesktopNavigation.tsx` i `MobileNavigation.tsx` utrzymują **podobne dane** (usługi/narzędzia, linki, sekcje).

Rekomendacja:
- utworzyć jedno źródło prawdy, np.:
  - `components/shared/navigation/navigation.data.ts` (dane: etykiety, hrefy, grupy)
  - `components/shared/navigation/navigation.types.ts`
- podzielić implementację na mniejsze klocki:
  - `NavigationShell` (header + logo + layout)
  - `SocialLinks` (ikony + a11y)
  - `DesktopMegaMenu` (obsługa submenu)
  - `MobileDrawerMenu` (panel + overlay)
  - `NavSection`/`NavItem`

Efekt:
- mniej kodu
- mniejsze ryzyko niespójności treści/URL
- szybsze dodawanie/zmiana pozycji menu

---

### 3.3 Powtarzalne „karty” i style interakcji
Wiele komponentów używa zbliżonych klas:
- `rounded-2xl`, `border`, `bg-white`, `shadow-md`, `hover:-translate-y-0.5`, `hover:shadow-lg`, focus ring

Rekomendacja:
- dodać prymityw:
  - `components/ui/Card.tsx` (tylko opakowanie + warianty, bez logiki)
  - opcjonalnie `CardHeader`, `CardBody`, `CardFooter`
- dodać prymityw:
  - `components/ui/IconButton.tsx` (a11y + focus ring + rozmiary)

Efekt:
- mniej „stringów klas”
- spójność UI i a11y
- łatwiejsze globalne zmiany stylu

---

### 3.4 Powielanie `const ui = { pl: ... }` w wielu plikach
To ułatwia lokalność zmian, ale:
- zwiększa rozmiar plików
- utrudnia ponowne użycie tekstów (np. te same labelki w toolach)

Rekomendacja (bez wprowadzania pełnego i18n):
- dla dużych feature’ów (Navigation, CookieConsent, Tools) wydzielić teksty do:
  - `*.copy.ts` / `*.messages.ts` obok komponentu

Efekt:
- krótsze pliki komponentów
- łatwiejszy review

---

## 4) Audyt wg obszarów

### 4.1 `components/ui` – prymitywy

#### `Button.tsx`
Obserwacje:
- Jest `use client`, ale komponent sam w sobie nie ma hooków.
- Przyjmuje `onClick` → to wymusza klienta dla przypadków interaktywnych.

Rekomendacja:
- rozdzielić na:
  - `Button` (client, gdy potrzebny `onClick`)
  - `ButtonLink` (server-friendly) dla czystych linków (`href`), bez handlerów
- ujednolicić linkowanie z `AppLink` (obecnie Button używa `next/link` i własnych reguł dla external)

Efekt:
- redukcja bundle JS w miejscach, gdzie Button jest tylko linkiem

#### `AppLink` (`Link.tsx`)
Obserwacje:
- Jest sensownym wrapperem.

Rekomendacja:
- dodać wariant dla linków z ikoną / chevronem (jeżeli często powtarzane)
- rozważyć kompatybilność z `ButtonLink` (wspólne API: `href`, `aria-label`, `target`/`rel`)

#### `Badge.tsx`
Obserwacje:
- Minimalny komponent; częściowo dubluje `Tag`.

Rekomendacja:
- albo usunąć i używać `Tag` (z ewentualnym wariantem dopasowanym do stylu Badge)
- albo przemianować na coś jednoznacznego (`PillBadge`), jeśli ma pozostać

#### `SectionHeader.tsx`
Obserwacje:
- `description` renderowane jako `<p>` bez użycia `Text`.

Rekomendacja:
- użyć `Text` dla opisu (albo pozwolić na `descriptionAs`)
- opcjonalnie dodać a11y: `aria-describedby` dla sekcji

#### `SectionSteps.tsx`
Obserwacje:
- Bardzo dużo odpowiedzialności: layout, grid resolution, heading tags, render pojedynczej karty, opcjonalne obrazki.

Rekomendacja podziału:
- `resolveStepsGrid()` (util)
- `SectionStepsHeader` (subtitle/title/description/actions)
- `StepCard` (render pojedynczej karty)
- `StepCardMedia` (top image / icon / index)

Efekt:
- mniejszy plik
- łatwiejsze testowanie i reużycie (np. StepCard w innych miejscach)

---

### 4.2 `components/shared` – globalne elementy

#### `CookieConsent.tsx`
Obserwacje:
- Dużo logiki w jednym pliku: cookie read/write, gtag consent, ładowanie GA, focus trap, UI panel.

Rekomendacja podziału:
- `consent.storage.ts` (read/write + typy)
- `consent.gtag.ts` (updateGtag + loadGA)
- `ConsentDialog` (UI wrapper, role/aria)
- `ConsentBanner` (widok podstawowy)
- `ConsentPreferencesPanel` (widok ustawień)
- `useFocusTrap()` + `useRestoreFocus()` (hooki, jeśli przydadzą się też gdzie indziej)

Dodatkowo:
- unikać zależności od `window.__GA_ID` w środku komponentu; preferować przekazanie przez props lub wspólny moduł konfiguracyjny.

#### `Navigation.tsx` + `navigation-types/*`
Obserwacje:
- `DesktopNavigation.tsx` jest „mega-komponentem” (dane + logika + render)
- powielane klasy focus ring przy ikonach social
- `Navigation.tsx` używa `next/link` bez `AppLink` (logo)

Rekomendacja:
- `SocialIconLink` (aria-label + focus ring + target/rel)
- `navigation.data.ts` (wspólne dane)
- `useMenuKeyboardNavigation()` (wspólny hook: ArrowUp/Down/Home/End)
- `useOutsideClick()` (zamknięcie submenu)

Efekt:
- mniej kodu
- spójność UX
- ta sama lista linków w mobile/desktop

---

### 4.3 `components/sections` – sekcje stron

#### `Tooltip.tsx`
Obserwacje:
- komponent wstrzykuje CSS do `<head>` (jednorazowo) + ma własną logikę open/close.

Rekomendacja:
- wydzielić `injectOnce()`/`useHeadStyleOnce()` util (jeżeli będą kolejne komponenty robiące podobnie)
- rozważyć `TooltipBubble` (render samego dymka) jako osobny komponent

#### `TableOfContent.tsx`
Obserwacje:
- generuje id dla headingów + IntersectionObserver.

Rekomendacja:
- wydzielić `useHeadingAnchors()` i `useActiveHeading()` (hooki)
- opcjonalnie `TocLinkList` jako czysty komponent

---

### 4.4 `components/sections/tools` – narzędzia (największy potencjał oszczędności)

**Wszystkie tool’e** są naturalnie client-side, ale da się:
- mocno ograniczyć rozmiar pojedynczych plików przez ekstrakcję UI i logiki do hooków/utili

#### `EmailSignatureGenerator.tsx`
Rekomendacja podziału:
- `EmailSignatureGenerator` (shell)
- `SignatureLayoutPicker` (wybór layoutu)
- `SignaturePanelTabs` (pane selector)
- `SignatureIdentityForm` / `SignatureCtaForm` / `SignatureSocialForm` / `SignatureAppearanceForm` / `SignatureLegalForm`
- `SignaturePreview` (render + copy)
- `useSignatureConfig()` (stan i walidacje)
- `buildSignatureHtml()` (czysta funkcja generująca HTML)
- `copyRichHtmlToClipboard()` util (obecnie inline, duża funkcja)

Efekt:
- czytelność
- łatwiejsze reużycie `copyRichHtmlToClipboard` w innych miejscach

#### `ImageResizeTool.tsx`
Rekomendacja podziału:
- `ToolFileDropzone` (wspólny komponent dla drag&drop + input)
- `ImageParamsCard` (panel z parametrami)
- `OutputFormatPicker` (zamiast custom pill w wielu toolach)
- `QualitySlider` (dla jpg/webp)
- `CropControls` (grupa ustawień)
- `useImageFile()` (wczytanie, meta, cleanup)
- `useCanvasExport()` (generowanie pliku)

Efekt:
- mniejsze pliki tooli
- wspólne UX dla upload/format/quality

#### `JpgPngToWebp.tsx` / `FaviconGenerator.tsx` / `ColorPaletteGenerator.tsx` / `WcagContrastChecker.tsx`
Wspólne kandydaty do prymitywów:
- `ToolResultList` / `ToolResultRow`
- `ToolStat` / `ToolMetric`
- `ToolActionRow` (CTA + sekundarne akcje)
- `ToolEmptyState` (gdy brak danych)

---

## 5) Proponowane nowe komponenty / hooki (backlog)

### UI Primitives (wysokie ROI)
- `Card`
- `IconButton` (w `components/ui/buttons/IconButton.tsx`)
- `SocialIconLink`
- `Portal` (wydzielone z `MobileNavigation`)

### Hooki (wysokie ROI)
- `useOutsideClick(ref, handler)` ✅
- `useEscapeKey(handler)` ✅
- `useFocusTrap(containerRef, enabled)` ✅
- `useRestoreFocus()` ✅
- `useScrollLock(locked)` ✅
- `useMenuKeyboardNavigation(containerRef)` ✅
- `useCarouselScroller()`
- `useHeadingAnchors()` + `useActiveHeading()`

### Tooling UI (średnie/wysokie ROI)
- `ToolFileDropzone`
- `ToolPanelTabs`
- `ToolOptionPills` (na bazie `Tag`)
- `ToolMetricCard`

---

## 6) Plan wdrożenia (kolejność pod maks. redukcję kodu)

1. **Karuzele**: wydzielić bazowy `Carousel`/hook i przepiąć 3 miejsca.
2. **Nawigacja**: wydzielić `navigation.data.ts` + wspólne hooki klawiatury/outside click.
3. **CookieConsent**: rozbić na storage/gtag/ui + hook focus trap.
4. **Tools**: zacząć od prymitywów (Dropzone/OptionPills/MetricCard), potem rozbijać największe narzędzia.
5. **UI Card/IconButton**: przepiąć na najczęstszych kartach.

---

## 7) Checklist jakości (Next 15 / clean code)

- Granice `use client`: tylko tam, gdzie są event handlery / hooki.
- Unikać „god components” (500+ linii) – rozbijać na:
  - `components` (render)
  - `hooks` (stan i efekty)
  - `utils` (czyste funkcje)
  - `data` (stałe)
- A11y jako prymitywy: focus ring, aria-label, roledescription, keyboard nav.
- Dublowanie danych (np. linki nav) → jedno źródło prawdy.

---

## 8) Redukcja kodu / elementy zbędne (do usunięcia lub scalenia)

Poniżej lista elementów, które **realnie zmniejszą ilość kodu** przez:
- usunięcie komponentów nieużywanych
- scalenie duplikujących się prymitywów
- ograniczenie “jednorazowych” komponentów do prostych prymitywów

### 8.1 Komponenty nieużywane (martwy kod)

#### `components/sections/Tooltip.tsx`

Status:
- **Brak użyć w JSX/importach** w `app/` i `components/`.
- W repo występuje dużo stringów `tooltip` (np. w danych kalkulatora), ale to nie jest użycie tego komponentu – to tylko pole tekstowe renderowane obecnie w `OptionButton`.

Rekomendacja:
- **Usunąć plik** `components/sections/Tooltip.tsx`, jeżeli nie planujesz wprowadzać tooltips w UI.
- Alternatywnie: jeżeli tooltipy mają wrócić, podłączyć je realnie do `components/ui/calculator/OptionButton.tsx` (lub do innych miejsc), a komponent przenieść z `sections` do `ui`.

Efekt:
- mniej kodu i mniej utrzymania (animacje, eventy, aria)

---

### 8.2 Komponenty „prawie zbędne” (mało użyć + duplikacja innego prymitywu)

#### `components/ui/Badge.tsx`

Status:
- Używany, ale wygląda na **bardzo rzadko** (np. w stronach typu `.../[slug]/page.tsx`).
- Funkcyjnie dubluje `Tag` (pigułka, rounded, uppercase).

Rekomendacja:
- Zamiast utrzymywać dwa prymitywy (`Badge` i `Tag`), ujednolicić do jednego:
  - opcja A: **usunąć `Badge`** i zamienić użycia na `Tag` (np. wariant neutral/dark + odpowiednie klasy)
  - opcja B: jeśli `Badge` ma zostać, to zrobić z niego cienką nakładkę na `Tag` (bez własnych klas na stałe)

Efekt:
- mniej komponentów do utrzymania
- mniej „mikro-API” w projekcie

---

### 8.3 Komponenty jednorazowe (zostawić tylko jeśli są świadomie potrzebne)

#### `components/ui/ButtonToTop.tsx`

Status:
- Używany, ale zwykle tylko na 1-2 stronach (np. długie dokumenty: regulamin/polityka).

Rekomendacja:
- Jeśli to ma być stały pattern na wszystkich długich stronach – zostawić.
- Jeśli nie – można:
  - usunąć i zinline’ować prosty scroll handler w danym widoku
  - albo utrzymać, ale bez wariantu `totop` w `Button` (żeby nie rozdymać API `Button` wariantami specyficznymi dla 1 komponentu)

Efekt:
- mniejszy „surface area” komponentów UI

---

### 8.4 Kandydaci do konsolidacji (redukcja kodu przez łączenie podobnych implementacji)

#### Karuzele (`TestimonialsCarousel`, `ArticlesOverview`, `ProjectsOverview`)

Status:
- Trzy niezależne implementacje tego samego mechanizmu (scroll, ResizeObserver, dots, nav).

Rekomendacja:
- Konsolidacja do `Carousel`/`useCarouselScroller()` (opis w sekcji 3.1).

Postęp:
- `useCarouselScroller()` dodany ✅
- `TestimonialsCarousel` przepięty ✅
- `ProjectsOverview` przepięty ✅
- `ArticlesOverview` przepięty ✅
- `useCarouselScroller` przeniesiony do `hooks/` ✅
- Kontrolki (nav + dots + SR) skonsolidowane do `components/ui/carousel/CarouselNavButtons.tsx` + `components/ui/carousel/CarouselDots.tsx` ✅

Efekt:
- duża redukcja kodu + mniej bugów a11y

---

## 9) Audyt stron (`app/`) – lokalne komponenty w page.tsx (wynieść lub zastąpić)

Cel: ograniczyć sytuacje, gdzie strona ma “własne komponenty”, które:
- powielają się między stronami,
- są zbyt duże jak na plik routingu,
- lub dublują istniejące prymitywy z `/components`.

### 9.1 `app/(pl)/uslugi/*/page.tsx` – powtarzalny `ServiceSchema()`

Status:
- W wielu stronach usług istnieje lokalna funkcja `ServiceSchema()` różniąca się głównie:
  - `id` w `<Script id="schema-service-...">`
  - argumentami do `buildServiceSchema({ path, serviceName, description, ... })`

Rekomendacja:
- Utrzymać logikę w `buildServiceSchema` (już istnieje), ale usunąć powtarzalny boilerplate z page:
  - dodać reużywalny komponent np. `components/seo/ServiceSchemaScript.tsx` lub `components/shared/seo/ServiceSchemaScript.tsx`
  - API: `{ scriptId: string; schema: ReturnType<typeof buildServiceSchema> }`
  - albo API wyższego poziomu: `{ scriptId; baseUrl; path; serviceName; description; ... }` i w środku wywołuje `buildServiceSchema`

Efekt:
- mniejsze pliki ofert
- mniej ryzyka niespójności (np. inne `strategy`, inne atrybuty)

### 9.2 `app/(pl)/edukacja/[category]/[slug]/page.tsx` – lokalne: `Aspect`, `FlowGroup`, `RenderBlocks`

Status:
- Strona artykułu zawiera rozbudowane renderowanie `contentBlocks` (grupowanie typów, `dangerouslySetInnerHTML`, obsługa image/code/table/quote).
- `Aspect()` jest lokalnym wrapperem na `Image` + ratio.

Rekomendacja:
- Wyciągnąć z page do:
  - `components/content/Aspect.tsx` (lub `components/ui/media/Aspect.tsx`) – proste ratio wrappery
  - `components/content/RenderBlocks.tsx` – renderer content blocks (dla bloga)
  - `components/content/FlowGroup.tsx` (lub wpiąć w `RenderBlocks` jako prywatny subkomponent)
- Jeśli `contentBlocks` występują też w realizacjach: zunifikować do jednego renderer’a z wariantem/typem danych (Article vs Project).

Efekt:
- plik routingu staje się krótszy
- jedna logika renderowania rich content

### 9.3 `app/(pl)/realizacje/[slug]/page.tsx` – lokalne: `Inline`, `Block`, `Aspect`, `RenderBlocks`

Status:
- Powtarza bardzo podobne helpery do tych z artykułu:
  - `Aspect()` (ratio wrapper dla obrazów)
  - `RenderBlocks()` dla `Project['contentBlocks']`
  - `Inline`/`Block` jako sanitizowany render string/ReactNode przez `dangerouslySetInnerHTML`

Rekomendacja:
- Zamiast utrzymywać te helpery w page:
  - wydzielić `components/content/HtmlContent.tsx` z 2 wariantami renderu:
    - `InlineHtml` (span)
    - `BlockHtml` (div)
  - zunifikować `Aspect` z sekcji 9.2
  - zunifikować `RenderBlocks` (albo wspólny komponent, albo wspólna biblioteka + cienkie wrappery dla Article/Project)

Efekt:
- redukcja duplikacji między blogiem a realizacjami

### 9.4 `app/(pl)/mapa-strony/page.tsx` – lokalne: `NestedList`, `buildJsonLd`, `slugifyCategory`, `abs`, `toListElements`

Status:
- Dużo logiki budowy struktury sitemap + JSON-LD w pliku strony.

Rekomendacja:
- Podzielić:
  - `lib/sitemap.ts` lub `lib/sitemapJsonLd.ts` – budowanie struktur danych i JSON-LD (czyste funkcje)
  - `components/sitemap/NestedList.tsx` – render listy (jeśli ma być użyty gdzie indziej)
- Dodatkowo: jeżeli nawigacja ma jedno źródło prawdy (sekcja 3.2), to sitemap może korzystać z tej samej definicji linków.

Efekt:
- krótszy page
- łatwiejsze testowanie logiki generowania

### 9.5 `app/(pl)/page.tsx` (home) – lokalny `HomePageSchemas()`

Status:
- Lokalny komponent generujący JSON-LD (AggregateRating + HowTo).

Rekomendacja:
- Jeśli schema na homepage będzie rozbudowywana / reużywana:
  - przenieść do `components/seo/HomePageSchemas.tsx`.
- Jeśli pozostaje tylko tu: może zostać lokalnie, ale warto trzymać go w osobnym pliku obok strony (dla czytelności i mniejszych diffów).

---

## 10) Audyt stylów i standaryzacja (globals.css + kolory/odstępy + nieużywane warianty)

Cel:
- zminimalizować powtarzające się „łańcuchy klas”
- ujednolicić kolory (usunąć mikro-odchyłki typu `#333` vs `#2B2B2B`)
- ujednolicić odstępy i rozmiary (spacing, radius, shadow)
- usunąć nieużywane warianty w komponentach UI (mniej API, mniej dead code)

### 10.1 `app/globals.css` – co już jest, co dubluje komponenty i co jest potencjalnie martwe

#### Klasy tekstowe `.text-light` / `.text-mid` / `.text-dark`

Status:
- Te klasy są zdefiniowane w `globals.css`, ale **nie widać ich realnych użyć** w komponentach/stronach (poza definicją w CSS).
- Jednocześnie w repo konsekwentnie pojawia się kolorystyka tekstu jako:
  - `text-[#080808]` (default)
  - `text-[#5e5e5e]` (muted)
  - `text-[#2B2B2B]` (mid)
  - oraz mieszanka `text-neutral-*` / `text-gray-*`

Rekomendacja:
- Jeśli repo ma iść w stronę komponentów (`Text`), to:
  - **usunąć `.text-light/.text-mid/.text-dark`** (martwe) i polegać na `Text tone=...`.
- Jeśli chcesz iść w stronę globalnych utility klas:
  - zostawić, ale **wymusić użycie** i przestać używać raw hexów w JSX.

#### Reguły dla `p, li, .p` oraz `.text-small`

Status:
- Globalny CSS nadpisuje typografię (`font-size: clamp(...)`) dla `p` i `li`.
- W projekcie równolegle używany jest komponent `Text` z wariantami (`text-base`, `text-sm`, `text-xs`).

Ryzyko:
- Dublowanie systemu typografii (CSS clamp vs Tailwind `text-*`) powoduje niespójności (szczególnie gdy `Text` renderuje `p`/`span`).

Rekomendacja:
- Ustalić jedno źródło prawdy:
  - opcja A (preferowana w kontekście clean code + atomic components): **typografia przez `Text` / `Heading`** + minimalne style globalne
  - opcja B: typografia przez globalne klasy (`.h1..h6`, `.p`) i `Text` tylko jako „wrapper” bez własnych `text-*`

#### `.inline-link` vs `.hover-underline`

Status:
- `.inline-link` jest realnie używany (w stronach oraz w HTML z `data/pl/blog.json`).
- `.hover-underline` jest realnie używany (np. `AppLink`, `Footer`, `CookieSettingsButton`).

Rekomendacja:
- Zostawić oba, ale rozdzielić odpowiedzialności:
  - `inline-link` = link w treści (underline)
  - `hover-underline` = link nawigacyjny / UI (pseudo-element)
- Docelowo dopiąć to do `AppLink` (np. wariant `inline`/`nav`) tak, aby ograniczyć ręczne klasy.

#### `.no-scrollbar`

Status:
- Realnie używany w karuzelach (`TestimonialsCarousel`, `ArticlesOverview`, `ProjectsOverview`).

Rekomendacja:
- Zostawić.
- W przyszłości przenieść do wspólnego prymitywu karuzeli (żeby nie powtarzać listy klas na `scrollRef`).

#### `.reveal-animation`

Status:
- Realnie używany (w HTML z `data/pl/blog.json` i w systemie `RevealObserver`).

Rekomendacja:
- Zostawić.

#### Klasy „tools” (`tool-*`) i „calculator” (`calc-*`)

Status:
- `tool-section` jest używany przez `components/ui/tools/ToolSection.tsx`.
- `tool-input`, `tool-pill`, `tool-badge-*`, `calc-option-button`, `calc-input-*` są używane w toolach/kalkulatorze.

Rekomendacja:
- To dobry kierunek (globalne klasy redukują powtarzalny Tailwind w dużych narzędziach).
- Warto rozwinąć to konsekwentnie o kolejne prymitywy:
  - `surface-card` / `surface-panel`
  - `focus-ring` (wspólny ring + offset)
  - `icon-button` (często powtarzany pattern)

### 10.2 Standaryzacja kolorów – „prawie identyczne” wartości i zasady redukcji

Obserwacje:
- Repo używa miksu:
  - hexów: `#080808`, `#5e5e5e`, `#2B2B2B`, `#333`, `#0a0a0a`, `#1a1a1a`
  - tailwindowych tokenów: `text-neutral-800`, `text-gray-700`, itd.
  - alpha: `black/10`, `white/70`, `bg-white/80` itd.

Rekomendacja zasad:
- Ustalić „kanoniczne” kolory tekstu:
  - **text default**: `#080808`
  - **text muted**: `#5e5e5e`
  - **text mid**: `#2B2B2B`
- Traktować jako równoważne / do scalenia:
  - `#0A0A0A`, `#1a1a1a`, `#333`, `text-gray-700` → zwykle można sprowadzić do `#080808` lub `#2B2B2B` (zależnie od kontekstu kontrastu)
- Dla spójności i redukcji kodu:
  - przenieść te wartości do `:root` jako zmienne (np. `--text-default`, `--text-muted`, `--text-mid`) i mapować je w `@theme inline`
  - a w komponentach przejść na `Text tone=...` lub globalne klasy `.text-*` (jedna strategia)

Uwagi o „dark”/code theme:
- `CodeBlock` celowo używa oddzielnej palety (`from-[#0b0b0c]` → `to-[#121215]`, `text-[#e7e7ea]`, `white/70`).
- To jest OK jako wyjątek, ale warto:
  - skonsolidować tło do jednego tokenu (np. `--code-bg`) żeby nie mnożyć hexów.

### 10.3 Standaryzacja spacing / radius / shadow (redukcja powtarzalnych łańcuchów klas)

Najczęściej powtarzany pattern „karty/panelu”:
- `rounded-2xl border border-black/10 bg-white/.. shadow-sm` (+ czasem `backdrop-blur-sm`)

Rekomendacja:
- Dodać globalną klasę (przykład nazwy):
  - `.surface` = `rounded-2xl border border-black/10 bg-white/70 shadow-sm backdrop-blur-sm`
  - `.surface-solid` = `rounded-2xl border border-black/10 bg-white shadow-sm`
- Następnie przepiąć komponenty, które mają identyczny wygląd (np. `ShareBlock`, panele w toolach, karty w sekcjach) na te klasy.

Postęp:
- Dodane: `.surface-card`, `.surface-panel`, `.surface-panel-solid` ✅
- Przepięte: `ArticlesList` + karty w `ArticlesOverview` na `.surface-card` ✅
- Przepięte: `TableBlock` na `.surface-panel-solid` ✅
- Przepięte: `ShareBlock` na `.surface-panel` ✅
- Przepięte: `TableOfContent` (desktop panel) na `.surface-panel-solid` ✅

Spacing:
- `Gap` już pełni rolę globalnego prymitywu spacingu i jest używany bardzo często.
- Warto doprecyzować „kanon”:
  - `xs` = mała przerwa (aktualnie clamp 40–80)
  - `sm` = sekcyjna (80–128)
  - `md` = duża (128–192)
  - `xl` = hero (160–256)

### 10.4 Audyt nieużywanych wariantów w komponentach UI (do usunięcia)

#### `Text` (`components/ui/typography/Text.tsx`)

Status (wg użyć `variant="..."`):
- `xs` – używany
- `small` – używany
- `body` – używany
- `caption` – **brak użyć** (0)

Rekomendacja:
- Usunąć `caption` (dubluje `xs`) albo zostawić tylko jako alias, jeśli chcesz wspierać semantykę (ale to nie redukuje API). ✅

Status (wg użyć `tone="..."`):
- `muted` – używany
- `dark` – używany
- `default` – zwykle nie jest ustawiany jawnie (jest defaultem)

#### `Tag` (`components/ui/Tag.tsx`)

Status (wg użyć `variant="..."` w JSX):
- `default` – używany
- `dark` – używany
- `neutral` – używany
- `selected` – brak realnych użyć (poza dokumentacją)
- `success` – brak realnych użyć (poza dokumentacją)
- `error` – brak realnych użyć

Rekomendacja:
- Usunąć nieużywane warianty: `selected`, `success`, `error` (albo wdrożyć konsekwentnie zamiast lokalnych klas). ✅
- Jeśli `Tag` ma być bazą dla tool pills, to w dłuższej perspektywie:
  - zastąpić `.tool-pill-*` wariantami `Tag` (jedna implementacja zamiast dwóch systemów).

Status (wg użyć `size="..."`):
- `sm` – używany
- `lg` – używany
- `md` – domyślny (nie występuje jawnie)

#### `Button` (`components/ui/Button.tsx`)

Status (wg użyć `variant="..."`):
- `accent` – używany
- `dark` – używany
- `glass` – używany
- `totop` – używany, ale tylko przez `ButtonToTop` (wąski przypadek)
- `minimal` – **brak użyć**
- `normal` – najczęściej przez default (bez ustawiania prop)

Rekomendacja:
- Usunąć `minimal`. ✅
- Rozważyć usunięcie `totop` z `Button` i przenieść ten styl do samego `ButtonToTop` (żeby nie rozdymać API bazowego przycisku wariantem “jednej funkcji”). ✅

#### `Gap` (`components/ui/Gap.tsx`)

Status (wg użyć `size="..."`):
- `xs` – używany bardzo często
- `sm` – używany bardzo często
- `xl` – używany rzadko, ale występuje
- `md` – głównie jako default (bez ustawiania prop)

Rekomendacja:
- Zostawić (prymityw jest realnie używany, a API jest małe).




