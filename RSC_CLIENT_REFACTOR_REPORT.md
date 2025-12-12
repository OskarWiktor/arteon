# Raport refaktoryzacji granic RSC/Client

## Cel
Przeniesienie komponentów z `'use client'`, które nie wymagają interakcji klienta, na Server Components. Tylko elementy interaktywne pozostają jako małe Client Components.

## Zasady refaktoryzacji
1. Część statyczna → Server Component
2. Tylko element interakcji → mały Client Component (np. button od cookies)
3. Nie zmieniano UI, routingu ani tekstów

## Komponenty przeniesione na Server Components

### 1. `components/sections/BreadCrumbs.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**: 
- Komponent renderuje tylko statyczną nawigację breadcrumbs
- Nie używa żadnych hooków React (useState, useEffect, useRef, etc.)
- Nie ma żadnych event handlerów (onClick, onChange, etc.)
- Używa tylko props i renderuje JSX
- JSON-LD schema może być renderowana po stronie serwera

### 2. `components/sections/HeroBanner.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent renderuje tylko statyczny hero banner
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i renderuje JSX
- Button jest Client Component, ale to nie wymusza Client Component na rodzicu

### 3. `components/shared/Footer.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component (z wyekstraktowanym Client Component)

**Uzasadnienie**:
- Komponent renderuje głównie statyczną stopkę
- Nie używa żadnych hooków React
- Miał jeden event handler: `onClick={() => window.ArteonConsent?.open()}` dla ustawień cookies
- **Rozwiązanie**: Wyekstraktowano interaktywny przycisk do osobnego Client Component `CookieSettingsButton.tsx`
- Footer jest teraz Server Component, a tylko mały przycisk jest Client Component

**Nowy plik**: `components/shared/CookieSettingsButton.tsx`
- Mały Client Component tylko dla interakcji z ustawieniami cookies
- Minimalny bundle size

### 4. `components/sections/steps/WorkSteps.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent tylko renderuje `SectionSteps` z danymi
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i przekazuje dane do `SectionSteps`

### 5. `components/sections/steps/TechSteps.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent tylko renderuje `SectionSteps` z danymi
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i przekazuje dane do `SectionSteps`

### 6. `components/sections/steps/FeesSteps.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent tylko renderuje `SectionSteps` z danymi
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i przekazuje dane do `SectionSteps`

### 7. `components/sections/steps/ServicesSteps.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent tylko renderuje `SectionSteps` z danymi
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i przekazuje dane do `SectionSteps`

### 8. `components/ui/sections/SectionBasic.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent renderuje tylko statyczną sekcję z obrazem i tekstem
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i renderuje JSX
- Button jest Client Component, ale to nie wymusza Client Component na rodzicu

### 9. `components/ui/sections/SectionInfo.tsx`
**Status przed**: `'use client'`  
**Status po**: Server Component

**Uzasadnienie**:
- Komponent renderuje tylko statyczną sekcję informacyjną
- Nie używa żadnych hooków React
- Nie ma żadnych event handlerów
- Używa tylko props i renderuje JSX
- Button jest Client Component, ale to nie wymusza Client Component na rodzicu

## Komponenty pozostawione jako Client Components (uzasadnione)

### Komponenty z interakcjami użytkownika
- **Wszystkie narzędzia (tools)**: `ColorPaletteGenerator`, `WcagContrastChecker`, `JpgPngToWebp`, `ImageResizeTool`, `FaviconGenerator`, `EmailSignatureGenerator`, `MetaTitleDescriptionTool`
  - Używają formularzy, drag & drop, state management
  - Wymagają interakcji użytkownika

- **Carousels**: `ArticlesOverview`, `ProjectsOverview`, `TestimonialsCarousel`
  - Używają scroll, state, event handlers
  - Wymagają interakcji użytkownika

- **Formularze**: `ContactForm`, `Calculator`
  - Używają form submission, state management
  - Wymagają interakcji użytkownika

- **Filtry**: `Filters`, `FilterBar`, `ProjectsWithFilters`
  - Używają state, event handlers
  - Wymagają interakcji użytkownika

- **Interaktywne komponenty**: `Tooltip`, `FaqPanels`, `ShareBlock`, `CodeBlock`, `ButtonToTop`, `TableOfContent`
  - Używają state, event handlers, DOM manipulation
  - Wymagają interakcji użytkownika

- **Animacje**: `TechStack` (framer-motion), `RevealObserver`
  - Używają framer-motion, IntersectionObserver
  - Wymagają client-side animacji

- **Systemy**: `FocusManager`, `RouteAnnouncer`, `CookieConsent`
  - Używają hooks, DOM manipulation, browser APIs
  - Wymagają client-side logiki

## Korzyści z refaktoryzacji

### 1. Mniejszy bundle size
- Server Components nie są wysyłane do klienta
- Tylko małe Client Components są bundle'owane
- **Oczekiwana redukcja**: ~20-30% mniejszy bundle JavaScript

### 2. Lepsze SEO
- Server Components są renderowane po stronie serwera
- Pełna treść dostępna dla crawlerów
- Lepsze indeksowanie przez Google

### 3. Szybsze First Contentful Paint (FCP)
- Mniej JavaScript do parsowania i wykonywania
- Szybsze renderowanie początkowego HTML
- **Oczekiwana poprawa**: -100-200ms FCP

### 4. Lepsze Core Web Vitals
- Mniejszy Total Blocking Time (TBT)
- Mniejszy JavaScript execution time
- **Oczekiwana poprawa**: +5-10 punktów w PageSpeed Insights

### 5. Lepsze zarządzanie stanem
- Tylko interaktywne części mają state
- Mniej niepotrzebnych re-renderów
- Prostsze debugowanie

## Pliki zmienione

1. ✅ `components/sections/BreadCrumbs.tsx` - usunięto `'use client'`
2. ✅ `components/sections/HeroBanner.tsx` - usunięto `'use client'`
3. ✅ `components/shared/Footer.tsx` - usunięto `'use client'`
4. ✅ `components/shared/CookieSettingsButton.tsx` - **NOWY** Client Component dla przycisku cookies
5. ✅ `components/sections/steps/WorkSteps.tsx` - usunięto `'use client'`
6. ✅ `components/sections/steps/TechSteps.tsx` - usunięto `'use client'`
7. ✅ `components/sections/steps/FeesSteps.tsx` - usunięto `'use client'`
8. ✅ `components/sections/steps/ServicesSteps.tsx` - usunięto `'use client'`
9. ✅ `components/ui/sections/SectionBasic.tsx` - usunięto `'use client'`
10. ✅ `components/ui/sections/SectionInfo.tsx` - usunięto `'use client'`

## Weryfikacja

- ✅ Brak błędów lintera
- ✅ Wszystkie komponenty działają poprawnie
- ✅ UI nie zmienione
- ✅ Routing nie zmieniony
- ✅ Teksty nie zmienione
- ✅ Tylko interaktywne części są Client Components

## Podsumowanie

**Przeniesiono na Server Components**: 9 komponentów  
**Utworzono nowy Client Component**: 1 (CookieSettingsButton)  
**Pozostawiono jako Client Components**: ~40 komponentów (uzasadnione interakcjami)

**Główna zasada**: Jeśli komponent nie używa hooków React ani event handlerów, może być Server Component. Tylko interaktywne części powinny być Client Components.

