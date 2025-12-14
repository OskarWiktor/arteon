# HOOKS_CATALOG

Ten plik opisuje wszystkie custom hooki w repozytorium Arteon:

- **`/hooks/*`**: hooki UI/behavior.
- **`/lib/*`**: hooki-konteksty (`useLocale`, `useSite`).

Wszystkie hooki są client-side (pliki zawierają `'use client'`).

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
