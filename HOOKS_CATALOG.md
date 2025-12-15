# HOOKS_CATALOG

Ten plik opisuje wszystkie współdzielone hooki i helpery w repozytorium Arteon:
- **`/hooks/*`**: hooki UI/behavior (client-side; pliki zawierają `'use client'`).
- **`/utils/*`**: małe utilsy (zwykle pure; mogą działać w SSR).
- **`/lib/*`**: współdzielona logika aplikacji (konteksty, SEO/schema, blog, consent, tool utils).

Uwagi dot. środowiska:
- Nie wszystkie moduły są client-side: część jest SSR-safe (pure), część wymaga DOM (`window`/`document`).

## `useCarouselScroller` (`hooks/useCarouselScroller.ts`)
- **Co robi**: Zarządza karuzelą opartą o poziomy scroll (stan aktualnego slajdu, liczba slajdów, nawigacja, obsługa klawiatury) i reaguje na zmiany rozmiaru.
- **Sygnatura**: `useCarouselScroller({ itemCount, scrollRef, cardRef })`
- **Parametry**:
  - **`itemCount`**: liczba elementów w karuzeli.
  - **`scrollRef`**: `RefObject<HTMLDivElement | null>` – kontener przewijany w poziomie.
  - **`cardRef`**: `RefObject<HTMLElement | null>` – referencja do elementu karty (do pomiaru szerokości).
- **Zwraca**:
  - **`currentSlide`**: `number` – indeks aktualnie „aktywnego” slajdu.
  - **`maxSlides`**: `number` – maksymalna liczba slajdów (uwzględnia ile kart mieści się w viewport).
  - **`cardWidth`**: `number` – szerokość karty + gap (w px).
  - **`isScrollable`**: `boolean` – czy karuzela ma więcej niż 1 slajd.
  - **`scrollByCards`**: `(dir: 'left' | 'right') => void` – przesunięcie o jedną kartę.
  - **`goToSlide`**: `(index: number) => void` – przewinięcie do wskazanego indeksu.
  - **`onKeyDown`**: `(e: KeyboardEvent<HTMLDivElement>) => void` – obsługa `ArrowLeft/ArrowRight/Home/End`.
- **Zależności**:
  - **`ResizeObserver`**: do przeliczeń po zmianie rozmiaru.
  - **`getComputedStyle`**: odczyt `columnGap` dla wyliczenia „card + gap”.
  - **`requestAnimationFrame`**: throttling aktualizacji indeksu podczas scroll.
- **Side effecty**:
  - **[obserwacja rozmiaru]**: podpina `ResizeObserver` do kontenera i karty.
  - **[listener scroll]**: podpina `scroll` na `scrollRef.current`.
  - **[scrollTo]**: ustawia scroll programowo (m.in. przy reflow/resize).

## `useCopyToClipboard` (`hooks/useCopyToClipboard.ts`)
- **Co robi**: Kopiuje tekst do schowka i wystawia flagę `copied` (np. do UI „Skopiowano”).
- **API**:
  - **Wywołanie**: `const { copied, copy } = useCopyToClipboard()`
  - **`copied`**: `boolean`
  - **`copy`**: `async (text: string, options?: { resetAfterMs?: number; onCopy?: () => void; onError?: () => void }) => Promise<boolean>`
- **Zależności**:
  - **`navigator.clipboard.writeText`**: ścieżka preferowana.
  - **Fallback DOM**: `textarea` + `document.execCommand('copy')`.
  - **Timery**: `window.setTimeout` / `window.clearTimeout`.
- **Side effecty**:
  - **[clipboard]**: zapis do schowka.
  - **[DOM]**: tworzy i usuwa tymczasowy `textarea` w fallbacku.
  - **[timeout]**: ustawia timer resetujący `copied`.

## `useEscapeKey` (`hooks/useEscapeKey.ts`)
- **Co robi**: Wywołuje `handler` po wciśnięciu klawisza `Escape` (z opcją `enabled`).
- **Sygnatura**: `useEscapeKey(handler: (event: KeyboardEvent) => void, enabled: boolean = true)`
- **Zależności**:
  - **`document.addEventListener('keydown', ...)`**.
- **Side effecty**:
  - **[listener keydown]**: podpina/odpina listener na `document`.

## `useEventListener` (`hooks/useEventListener.ts`)
- **Co robi**: Uogólniony helper do dodawania event listenerów na dowolnym `EventTarget` z opcją `enabled` i stabilną referencją callbacka.
- **Sygnatura**: `useEventListener(target, type, listener, options?, enabled = true)`
- **Parametry**:
  - **`target`**: `T | null` (`T extends EventTarget`).
  - **`type`**: `K` (`K extends string`).
  - **`listener`**: `(...args: unknown[]) => void`.
  - **`options`**: `boolean | AddEventListenerOptions`.
  - **`enabled`**: `boolean`.
- **Zależności**:
  - **`target.addEventListener` / `target.removeEventListener`**.
- **Side effecty**:
  - **[listener]**: podpina/odpina listener na `target`.

## `useFocusTrap` (`hooks/useFocusTrap.ts`)
- **Co robi**: „Trzyma” fokus klawiatury wewnątrz kontenera (np. modal/drawer) – cykluje fokus po `Tab` / `Shift+Tab`.
- **Sygnatura**: `useFocusTrap(containerRef, enabled, focusableSelectors = DEFAULT_FOCUSABLE)`
- **Parametry**:
  - **`containerRef`**: `RefObject<HTMLElement | null>`.
  - **`enabled`**: `boolean`.
  - **`focusableSelectors`**: selektor elementów fokusowalnych (domyślnie m.in. `a[href]`, `button`, `input`, `[tabindex]`).
- **Zależności**:
  - **DOM**: `document.addEventListener('keydown', ...)`, `document.activeElement`, `querySelectorAll`, `.focus()`.
- **Side effecty**:
  - **[listener keydown]**: podpina/odpina listener na `document`.

## `useMenuKeyboardNavigation` (`hooks/useMenuKeyboardNavigation.ts`)
- **Co robi**: Zapewnia nawigację klawiaturą po elementach menu (ArrowUp/ArrowDown/Home/End) i helpery do ustawiania fokusu.
- **Sygnatura**: `useMenuKeyboardNavigation(containerRef, options?: { itemSelector?: string })`
- **Parametry**:
  - **`containerRef`**: `RefObject<HTMLElement | null>`.
  - **`options.itemSelector`**: selektor elementów (domyślnie `a[href]`).
- **Zwraca**:
  - **`onKeyDown`**: `(e: React.KeyboardEvent<HTMLElement>) => void`.
  - **`focusItem`**: `(index: number) => void`.
  - **`focusFirst`**: `() => void`.
  - **`focusLast`**: `() => void`.
- **Zależności**:
  - **DOM**: `containerRef.current.querySelectorAll`, `document.activeElement`, `.focus()`.
- **Side effecty**:
  - **[brak]**: hook nie podpina listenerów sam – `onKeyDown` jest przekazywane do komponentu.

## `useOutsideClick` (`hooks/useOutsideClick.ts`)
- **Co robi**: Wykrywa klik/touch poza wskazanym elementem i wywołuje `handler`.
- **Sygnatura**: `useOutsideClick(ref, handler, enabled: boolean = true)`
- **Parametry**:
  - **`ref`**: `RefObject<T | null>` (`T extends HTMLElement`).
  - **`handler`**: `(event: MouseEvent | TouchEvent) => void`.
  - **`enabled`**: `boolean`.
- **Zależności**:
  - **`document.addEventListener('mousedown' | 'touchstart', ...)`**.
- **Side effecty**:
  - **[listeners]**: podpina/odpina `mousedown` i `touchstart` na `document`.

## `useRestoreFocus` (`hooks/useRestoreFocus.ts`)
- **Co robi**: Zapamiętuje element, który miał fokus w momencie włączenia, a następnie przy wyłączeniu (lub unmount) przywraca fokus.
- **Sygnatura**: `useRestoreFocus(enabled: boolean)`
- **Zależności**:
  - **DOM**: `document.activeElement`, `.focus()`.
  - **`setTimeout(..., 0)`**: odroczenie przywrócenia fokusu.
- **Side effecty**:
  - **[fokus]**: przy wyłączeniu/unmount próbuje przywrócić fokus na zapamiętany element.

## `useScrollLock` (`hooks/useScrollLock.ts`)
- **Co robi**: Blokuje scroll strony przez dodanie/zdjęcie klasy na `document.documentElement`.
- **Sygnatura**: `useScrollLock(locked: boolean, className: string = 'overflow-hidden')`
- **Zależności**:
  - **DOM**: `document.documentElement.classList`.
- **Side effecty**:
  - **[klasa na root]**: dodaje/usuwa klasę (i usuwa w cleanup).

## `useTimeout` (`hooks/useTimeout.ts`)
- **Co robi**: Udostępnia stabilne API do zarządzania timeoutami (`start`, `clear`) z cleanup na unmount.
- **API**:
  - **Wywołanie**: `const { start, clear } = useTimeout()`
  - **`start`**: `(callback: () => void, delayMs: number) => void`
  - **`clear`**: `() => void`
- **Zależności**:
  - **Timery**: `window.setTimeout` / `window.clearTimeout`.
- **Side effecty**:
  - **[timeout]**: tworzy timeout i czyści go na unmount.

## `useLocale` + `LocaleProvider` (`lib/LocaleContext.tsx`)
- **Co robi**: Udostępnia kontekst języka (`'pl' | 'en'`) dla komponentów.
- **API**:
  - **Provider**: `<LocaleProvider value={locale}>{children}</LocaleProvider>`
  - **Hook**: `const locale = useLocale()`
- **Zależności**:
  - **React Context**: `createContext`, `useContext`.
- **Side effecty**:
  - **[brak]**.
- **Uwagi**:
  - **[invariant]**: `useLocale` rzuca błędem, jeśli jest użyty poza `LocaleProvider`.

## `useSite` + `SiteProvider` (`lib/SiteContext.tsx`)
- **Co robi**: Udostępnia kontekst `siteKey` (typ `SiteKey`) dla aplikacji.
- **API**:
  - **Provider**: `<SiteProvider siteKey={siteKey}>{children}</SiteProvider>`
  - **Hook**: `const { siteKey } = useSite()`
- **Zależności**:
  - **React Context**: `createContext`, `useContext`.
  - **Typy**: `SiteKey` importowany z `lib/config/site/pl`.
- **Side effecty**:
  - **[brak]**.
- **Uwagi**:
  - **[invariant]**: `useSite` rzuca błędem, jeśli jest użyty poza `SiteProvider`.

## `slugify` (`utils/slug.ts`)
- **Co robi**: Tworzy slug URL-safe z tekstu (lowercase, usuwa diakrytyki, znaki specjalne, normalizuje spacje i myślniki).
- **Sygnatura**: `slugify(input: string): string`
- **Zależności**:
  - **[brak]**.
- **Side effecty**:
  - **[brak]** (pure).

## `Blog helpers` (`lib/blog.ts`)
- **Co robi**: Helpery do bloga oparte o statyczne dane z `data/pl/blog.json`.
- **API**:
  - `getAllArticles(): Article[]`
  - `getCategoriesWithCount(): Array<{ label: string; slug: string; count: number }>`
  - `getPrimaryCategorySlug(a: Article): string`
  - `findArticleBySlug(slug: string): Article | undefined`
- **Zależności**:
  - `data/pl/blog.json`
  - `types/article`
  - `utils/slug` (`slugify`)
- **Side effecty**:
  - **[brak]** (read-only).

## `buildServiceSchema` (`lib/serviceSchema.ts`)
- **Co robi**: Buduje JSON-LD schema.org `Service` dla podstron usług (URL, provider, offers, opcjonalnie `ServiceChannel`).
- **Sygnatura**: `buildServiceSchema({ baseUrl, path, serviceName, description, availableLanguages?, includeServiceChannel? })`
- **Zależności**:
  - **[brak]**.
- **Side effecty**:
  - **[brak]**.
- **Uwagi**:
  - `baseUrl` powinien być absolute (np. `https://www.arteonagency.pl`).

## `getSiteKeyFromHost` / `getActiveSiteKey` (`lib/site.ts`)
- **Co robi**: Określa `SiteKey` na podstawie hosta (feature-flag `SITE_BY_DOMAIN_ENABLED`).
- **API**:
  - `getSiteKeyFromHost(host: string): SiteKey`
  - `getActiveSiteKey(host?: string): SiteKey`
- **Zależności**:
  - `process.env.SITE_BY_DOMAIN_ENABLED`
  - `lib/config/site/pl` (`SiteKey`)
- **Side effecty**:
  - **[brak]**.

## `Site config` (`lib/config/site/pl.ts`, `lib/config/site/en.ts`)
- **Co robi**: Typ `SiteKey` oraz minimalne konfiguracje per site (scaffold pod multi-domain).
- **API**:
  - `export type SiteKey = 'pl' | 'en'`
  - `export const plConfig`
  - `export const enConfig`
- **Side effecty**:
  - **[brak]**.

## `Consent storage` (`lib/consent/storage.ts`)
- **Co robi**: Persist i odczyt zgód użytkownika w cookie `arteon_consent`.
- **API**:
  - `readConsent(): ConsentState | null`
  - `writeConsent(state: ConsentState): void`
- **Zależności**:
  - DOM: `document.cookie`, `location`.
- **Side effecty**:
  - **[cookie]** zapis/odczyt cookies.
- **Uwagi**:
  - Moduł browser-only (w SSR zwraca `null` / no-op).

## `updateGtagConsent` (`lib/consent/gtag.ts`)
- **Co robi**: Aktualizuje Google Consent Mode przez `window.gtag('consent','update', ...)`.
- **Sygnatura**: `updateGtagConsent(analytics: boolean): void`
- **Zależności**:
  - `window.gtag`.
- **Side effecty**:
  - **[gtag]** wysyła update consent.
- **Uwagi**:
  - Moduł browser-only (no-op bez `window.gtag`).

## `loadGA` (`lib/consent/ga.ts`)
- **Co robi**: Lazy-load GA4 (`gtag.js`) po zgodzie (dodaje skrypty do `<head>`; nie duplikuje ładowania).
- **Sygnatura**: `loadGA(measurementId?: string): void`
- **Zależności**:
  - DOM: `document.createElement('script')`.
- **Side effecty**:
  - **[DOM]** wstrzykuje `<script>` do `<head>`.
- **Uwagi**:
  - Moduł browser-only.

## `formatBytes` (`lib/tools/formatBytes.ts`)
- **Co robi**: Formatuje liczbę bajtów na czytelny string (`B/KB/MB/GB`).
- **Sygnatura**: `formatBytes(bytes: number): string`
- **Side effecty**:
  - **[brak]** (pure).

## `downloadFromUrl` (`lib/tools/download.ts`)
- **Co robi**: Triggeruje download pliku przez tymczasowy `<a download>`.
- **Sygnatura**: `downloadFromUrl(url: string, filename: string): void`
- **Zależności**:
  - DOM: `document.createElement('a')`.
- **Side effecty**:
  - **[DOM]** tworzy i klika element `<a>`.

## `sleep` (`lib/tools/sleep.ts`)
- **Co robi**: Promise wrapper na `setTimeout` (pomocnicze opóźnienia, np. przy batch-download).
- **Sygnatura**: `sleep(ms: number): Promise<void>`
- **Side effecty**:
  - **[timeout]** używa `setTimeout`.

## `readFileAsDataUrl` (`lib/tools/readFileAsDataUrl.ts`)
- **Co robi**: Wczytuje `File` jako Data URL (`FileReader.readAsDataURL`) i zwraca wynik jako `Promise<string>`.
- **Sygnatura**: `readFileAsDataUrl(file: File, options?: { errorMessage?: string }): Promise<string>`
- **Zależności**:
  - DOM: `FileReader`.
- **Side effecty**:
  - **[FileReader]** odczyt pliku w przeglądarce.
- **Uwagi**:
  - Moduł browser-only.

## `revokeObjectUrl` / `revokeObjectUrls` (`lib/tools/objectUrl.ts`)
- **Co robi**: Bezpieczny cleanup `URL.createObjectURL`.
- **API**:
  - `revokeObjectUrl(url: string | null | undefined): void`
  - `revokeObjectUrls(urls: Array<string | null | undefined>): void`
- **Zależności**:
  - `URL.revokeObjectURL`.
- **Side effecty**:
  - **[memory]** zwalnia zasoby ObjectURL.

## `loadImage` (`lib/tools/loadImage.ts`)
- **Co robi**: Ładuje obraz z URL do `HTMLImageElement` (Promise) z opcją `crossOrigin`.
- **Sygnatura**: `loadImage(url: string, options?: { crossOrigin?: '' | 'anonymous' | 'use-credentials'; errorMessage?: string }): Promise<HTMLImageElement>`
- **Zależności**:
  - DOM: `new Image()`.
- **Side effecty**:
  - **[network]** pobiera zasób obrazu.
- **Uwagi**:
  - Moduł browser-only.

## `canvasToBlob` (`lib/tools/canvasToBlob.ts`)
- **Co robi**: Promise wrapper na `canvas.toBlob` (z kontrolą błędu).
- **Sygnatura**: `canvasToBlob(canvas, mimeType, quality?, errorMessage?): Promise<Blob>`
- **Zależności**:
  - DOM: `HTMLCanvasElement.toBlob`.
- **Side effecty**:
  - **[brak]** (poza generacją Bloba w pamięci).

## `WebP helpers` (`lib/tools/image/webp.ts`)
- **Co robi**: Konwersja obrazów (`File`) do WebP przez `canvas` + algorytm smart-quality.
- **API**:
  - `convertImageFileToWebp(file, quality, messages): Promise<Blob>`
  - `convertImageFileToWebpSmart(file, originalSize, options): Promise<{ blob; usedQuality }>`
  - `getWebpFileName(originalFileName): string`
- **Zależności**:
  - `lib/tools/readFileAsDataUrl`
  - `lib/tools/loadImage`
  - `lib/tools/canvasToBlob`
- **Side effecty**:
  - **[canvas]** tworzy `canvas` i generuje Blob WebP w pamięci.
- **Uwagi**:
  - Moduł browser-only.

## `WebP report` (`lib/tools/image/webpReport.ts`)
- **Co robi**: Buduje tekstowy raport konwersji JPG/PNG → WebP (do schowka / podsumowania).
- **API**:
  - `buildWebpConversionReportText(items, labels): string`
- **Zależności**:
  - `lib/tools/formatBytes`
- **Side effecty**:
  - **[brak]** (pure).

## `generateFaviconOutputs` (`lib/tools/favicon/generator.ts`)
- **Co robi**: Generuje zestaw favicon (PNG w wielu rozmiarach + opcjonalnie `favicon.ico`) na bazie `HTMLImageElement`.
- **API**:
  - `generateFaviconOutputs(options): Promise<FaviconOutputFile[]>`
  - `suggestFaviconFileName(size, type): string`
  - `FaviconOutputFile`
- **Zależności**:
  - `lib/tools/canvasToBlob`
  - DOM: `document.createElement('canvas')`, `URL.createObjectURL`
- **Side effecty**:
  - **[ObjectURL]** tworzy URL-e do pobierania/podglądu (caller powinien je zwolnić).
- **Uwagi**:
  - Moduł browser-only.

## `Meta length helpers` (`lib/tools/seo/metaLength.ts`)
- **Co robi**: Analiza długości meta title/description (znaki, słowa, przybliżone piksele + status) oraz truncate do preview.
- **API**:
  - `analyzeMetaTitle(text: string): FieldMetrics`
  - `analyzeMetaDescription(text: string): FieldMetrics`
  - `truncateForPreview(text: string, maxChars: number): string`
- **Zależności**:
  - DOM (opcjonalnie): `document.createElement('canvas')` do pomiaru; w SSR fallback na średnie px/znak.
- **Side effecty**:
  - **[brak]** (poza cache canvas w module).

## `Color types` (`lib/tools/color/types.ts`)
- **Co robi**: Wspólne typy `RGB` i `HSL`.
- **API**:
  - `RGB`, `HSL`

## `Color convert` (`lib/tools/color/convert.ts`)
- **Co robi**: Konwersje i formatowanie kolorów (HEX/RGB/HSL) + walidacja/normalizacja.
- **Wybrane API**:
  - `hexToRgb`, `rgbToHex`, `rgbToHsl`, `hslToRgb`
  - `normalizeHex`, `formatHsl`, `randomHexColor`, `clamp`
- **Side effecty**:
  - **[brak]** (pure).

## `createPaletteFromHex` (`lib/tools/color/palette.ts`)
- **Co robi**: Generuje zestawy palet (np. monochromatic/triadic/analogous) na bazie koloru bazowego HEX.
- **Sygnatura**: `createPaletteFromHex(baseHex: string): PaletteGroup[]`
- **Zależności**:
  - `lib/tools/color/convert`
- **Side effecty**:
  - **[brak]** (pure).

## `getContrastRatio` (`lib/tools/color/contrast.ts`)
- **Co robi**: Helpery do kontrastu (WCAG): parsuje kolor wejściowy i liczy `relativeLuminance` oraz `contrast ratio`.
- **API**:
  - `parseColor(color: string): RGB | null` (obsługa `#rgb`, `#rrggbb`, `rgb(...)`, `rgba(...)`)
  - `relativeLuminance(rgb: RGB): number`
  - `getContrastRatio(foreground: string, background: string): number | null`
- **Zależności**:
  - `lib/tools/color/convert` (`hexToRgb`)
  - `lib/tools/color/types` (`RGB`)
- **Side effecty**:
  - **[brak]** (pure).
- **Uwagi**:
  - `rgba(...)` jest parsowane, ale kanał alpha nie jest uwzględniany (funkcja zwraca `RGB`).

## `extractPalette` (`lib/tools/color/extractPalette.ts`)
- **Co robi**: Ekstrakcja dominujących kolorów z `ImageData` (quantization/bucketing + filtrowanie „zbyt podobnych” kolorów).
- **Sygnatura**: `extractPalette(imageData: ImageData, options?: { maxColors?; bucketSize?; alphaThreshold?; minDistance? }): ExtractedColor[]`
- **Zwraca**: listę `{ hex, rgb, count }`.
- **Zależności**:
  - `lib/tools/color/convert` (`clamp`, `rgbToHex`)
  - `lib/tools/color/types` (`RGB`)
- **Side effecty**:
  - **[brak]** (pure na przekazanym `ImageData`).
- **Uwagi**:
  - Wymaga `ImageData` (typowo browser/canvas).

## `getDownscaledImageDataFromUrl` (`lib/tools/image/canvas.ts`)
- **Co robi**: Ładuje obraz z URL i zwraca downscale `ImageData` (wydajniejsze przetwarzanie pikseli niż praca na pełnym rozmiarze).
- **Sygnatura**: `getDownscaledImageDataFromUrl(url: string, options?: { maxDimension?; crossOrigin?; errorMessage? }): Promise<ImageData>`
- **Zależności**:
  - `lib/tools/loadImage`
  - DOM: `document.createElement('canvas')`, `canvas.getContext('2d')`, `ctx.getImageData(...)`
- **Side effecty**:
  - **[network]** pobiera zasób obrazu.
  - **[DOM]** tworzy canvas w pamięci.
- **Uwagi**:
  - Moduł browser-only.
