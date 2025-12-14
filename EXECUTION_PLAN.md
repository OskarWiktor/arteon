# Execution Plan – Arteon (refactor + standaryzacja + SEO/performance)

Ten plan jest oparty o:
- `COMPONENTS_AUDIT_REPORT.md`
- `PROJECT_KNOWLEDGE_BASE.md`

Założenia nadrzędne:
- Nie robimy redesignu.
- Refaktory nie mają zmieniać UI/UX ani treści.
- Na etapie „porządkowania” zachowujemy klasy Tailwinda 1:1 (chyba że etap planu mówi inaczej).

Decyzje (z `DECISIONS_REQUIRED.md`) – obowiązują w implementacji:
- Typografia: **globals-first** (bazujemy na `.h*` i `.p` / globalnych regułach), a wyjątki rozwiązujemy przez klasy.
- Kolory tekstu: **wymuszamy** użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do **`Badge`** (Badge staje się „pigułką” z wariantami; `Tag` i `tool-pill-*` wchłonięte przez Badge).
- `Button`: wariant `totop` ma być lokalny w `ButtonToTop`, nie w API bazowego `Button`.
- `Tooltip`: **zostaje** (wdrożymy realne użycie później, nie usuwamy).
- Canonical: **względne**.
- OpenGraph: **unikalne per typ strony**, a gdy brak – dodajemy komentarz TODO w pliku strony.
- Content renderer: wspólny `HTMLContent` z wariantami.
- Multi-domain/multi-language: w planie na później (nie teraz), domena determinuje język dla wybranych wspólnych komponentów (np. tools).

---

## 0) Definition of Done (global)

Dla każdego zadania/epiku:
- Kod przechodzi `lint` i `typecheck`.
- Brak zmian w treści widocznej dla użytkownika (poza poprawkami literówek/SEO, jeśli są wprost w backlogu).
- Brak zmian wizualnych (porównanie przed/po w review).
- Zachowana dostępność (focus ring, aria, keyboard).

---

## 1) Faza 0 – Baseline i bezpieczeństwo zmian

### 1.1 Statyczna weryfikacja repo (obowiązkowe)
- **Cel**: złapać regresje zanim zaczniemy większe refaktory.
- **Kroki**:
  - uruchomić `lint`
  - uruchomić `typecheck` (np. `tsc --noEmit` jeśli brak skryptu)
  - uruchomić `build`
- **Kryteria akceptacji**:
  - 0 błędów
  - błędy ostrzegawcze sklasyfikowane (czy poprawiamy teraz czy w osobnym epiku)

### 1.2 „Guardrails” dla przyszłych refaktorów
- **Cel**: zminimalizować ryzyko regresji SEO/a11y.
- **Propozycje (bez narzucania narzędzi)**:
  - spisać check-listę manualną dla:
    - nawigacji (keyboard + focus)
    - karuzeli (scroll + dots + aria)
    - cookie consent (otwieranie ustawień, focus trap, zapis)

---

## 2) Faza 1 – Szybkie redukcje API i martwego kodu (małe ryzyko)

### 2.1 Usunięcie nieużywanych wariantów (prymitywy UI)
- **Zakres** (wg audytu):
  - `Button.variant="minimal"` (0 użyć) ✅
  - `Tag.variant="selected" | "success" | "error"` (brak realnych użyć) ✅
- **Zależności**:
  - decyzja jest podjęta: usuwamy wszystko co nieużywane.
- **Kryteria akceptacji**:
  - brak błędów TS w call-site
  - brak zmian wizualnych

### 2.2 Komponenty do usunięcia / scalenia
- **Tooltip**: nie usuwamy (zostaje do późniejszego realnego wdrożenia).
- **Badge vs Tag**: konsolidujemy do `Badge` (Badge dostaje warianty, Tag jest wygaszany/usuwany). ✅
- **Kryteria akceptacji**:
  - brak importów do usuniętych plików (jeśli Tag zostanie usunięty)
  - brak zmian wizualnych

---

## 3) Faza 2 – Prymitywy „high ROI” (redukcja duplikacji)

### 3.1 Karuzele → jeden prymityw
- Status: ✅
- Odkrycie: `TestimonialsCarousel`, `ArticlesOverview`, `ProjectsOverview` mają bardzo podobną logikę (ResizeObserver + scroll listener + dots + keyboard) i obecnie nie ma wspólnego prymitywu w `components/ui`.
- Wdrożone:
  - `hooks/useCarouselScroller.ts` (właściwa lokalizacja dla hooków) ✅
  - `components/ui/carousel/CarouselNavButtons.tsx` (wspólne kontrolki karuzeli: strzałki) ✅
  - `components/ui/carousel/CarouselDots.tsx` (wspólne kontrolki karuzeli: kropki + SR) ✅
  - Migracja: `TestimonialsCarousel` → `useCarouselScroller()` ✅
  - Migracja: `ProjectsOverview` → `useCarouselScroller()` ✅
  - Migracja: `ArticlesOverview` → `useCarouselScroller()` ✅
- **Zakres**:
  - skonsolidować logikę z:
    - `TestimonialsCarousel`
    - `ArticlesOverview`
    - `ProjectsOverview`
  - docelowo: `components/ui/carousel/*` i/lub `useCarouselScroller()`
- **Zależności**:
  - decyzja o API karuzeli (ile wariantów? jak przekazujemy “card width”/snap?)
- **Kryteria akceptacji**:
  - identyczne zachowanie scroll/dots/nav
  - zachowane `aria-*` (region, roledescription, label)
  - brak zmian w klasach (poza przeniesieniem do prymitywu)

### 3.2 „Surface/Card” – redukcja powtarzalnych stringów klas
- Status: 🟡 (w toku)
- Odkrycie: w repo powtarza się pattern karty (np. `overflow-hidden rounded-2xl bg-white shadow-md transition focus-within:shadow-lg hover:shadow-lg`).
- Wdrożone:
  - globalne klasy: `.surface-card`, `.surface-panel`, `.surface-panel-solid` ✅
  - pierwsze przepięcia: `ArticlesList` + karty w `ArticlesOverview` → `.surface-card` ✅
  - `TableBlock` → `.surface-panel-solid` ✅
  - `ShareBlock` → `.surface-panel` ✅
  - `TableOfContent` (desktop panel) → `.surface-panel-solid` ✅
- **Opcje wdrożenia**:
  - globalne klasy `.surface` / `.surface-solid` w `globals.css`
  - albo komponent `Card` + warianty
- **Zależności**:
  - decyzja: CSS class vs komponent
- **Kryteria akceptacji**:
  - brak zmian wizualnych
  - realna redukcja duplikacji (min. kilka miejsc przepiętych)

### 3.3 IconButton i SocialIconLink
- Status: 🟡 (w toku)
- Odkrycie: w `Navigation` i `MobileNavigation` powtarza się ten sam pattern linków ikonowych (target/rel + aria-label + focus ring + ikonka).
- Wdrożone:
  - `components/ui/SocialIconLink.tsx` ✅
  - Migracja: `Navigation` + `MobileNavigation` → `SocialIconLink` ✅
  - `components/ui/buttons/IconButton.tsx` ✅
  - Migracja: `Navigation` (toggle menu) → `IconButton` ✅
- **Cel**: ujednolicić focus ring, aria-label, target/rel.
- **Kryteria akceptacji**:
  - brak zmian wizualnych
  - poprawa spójności a11y

---

## 4) Faza 3 – Nawigacja (single source of truth)

### 4.1 `navigation.data.ts` + typy
- **Cel**: Mobile i Desktop korzystają z tej samej definicji linków/sekcji.
- **Zakres**:
  - `components/shared/navigation/navigation.data.ts`
  - `navigation.types.ts`
- **Kryteria akceptacji**:
  - 100% zgodność linków/etykiet między mobile i desktop
  - łatwość dodania nowego linku (1 miejsce)

### 4.2 Wspólne hooki / utils
- `useOutsideClick` ✅
- `useEscapeKey` ✅
- `useFocusTrap` ✅
- `useRestoreFocus` ✅
- `useScrollLock` ✅
- `useMenuKeyboardNavigation` ✅
- **Kryteria akceptacji**:
  - brak regresji w zachowaniu menu
  - keyboard nav działa co najmniej jak wcześniej

---

## 5) Faza 4 – Cookie Consent (podział odpowiedzialności)

### 5.1 Podział na moduły
- **Cel**: mniej „god component”, czytelniejszy kod, mniej ryzykownych zmian.
- **Zakres (proponowany)**:
  - `consent.storage.ts` (read/write)
  - `consent.gtag.ts` (updateGtag/loadGA)
  - `ConsentDialog` / `ConsentBanner` / `ConsentPreferencesPanel`
  - ewentualne hooki: `useFocusTrap`, `useRestoreFocus`
- **Kryteria akceptacji**:
  - identyczny UX
  - zapis preferencji działa
  - focus trap działa

---

## 6) Faza 5 – Tools (platformizacja UI + rozbijanie największych narzędzi)

### 6.1 Tool prymitywy
- `ToolFileDropzone`
- `ToolPanelTabs`
- `ToolOptionPills` (docelowo na bazie `Badge`)
- `ToolMetricCard` / `ToolStat`
- `ToolEmptyState`
- **Kryteria akceptacji**:
  - brak zmian wizualnych
  - redukcja duplikacji w min. 2 narzędziach

### 6.2 Rozbijanie dużych komponentów
- **Priorytet**:
  - `EmailSignatureGenerator`
  - `ImageResizeTool`
- **Cel**:
  - wydzielić logikę do hooków (`useSignatureConfig`, `useImageFile`, `useCanvasExport`)
  - wydzielić czyste funkcje (`buildSignatureHtml`, clipboard utils)
- **Kryteria akceptacji**:
  - mniejsze pliki
  - brak zmian UX
  - brak memory leaks (cleanup blob URLs, event listeners)

---

## 7) Faza 6 – Content rendering (blog + realizacje)

### 7.1 Ujednolicenie rendererów `contentBlocks`
- **Cel**: nie trzymać dużych helperów w `page.tsx`.
- **Zakres**:
  - `Aspect` → `components/content/Aspect.tsx`
  - `HTMLContent` (warianty `inline`/`block`)
  - `RenderBlocks` (wspólny renderer z wariantem/typem danych)
- **Ryzyko**:
  - miejsca z `dangerouslySetInnerHTML` – trzeba utrzymać identyczny markup.
- **Kryteria akceptacji**:
  - identyczny HTML output
  - brak zmian w stylach

### 7.2 `app/(pl)/mapa-strony/page.tsx`
- wydzielić logikę generowania do `lib/sitemapJsonLd.ts`.

---

## 8) Faza 7 – Standaryzacja stylów (dopiero po refaktorach redukujących duplikację)

### 8.1 Typografia – jedno źródło prawdy
- **Decyzja**: globals-first (ustalone).
- **Kryteria akceptacji**:
  - spójne rozmiary fontów
  - brak konfliktów między `Text` a globalnym `p/li`.

### 8.2 Kolory i tokenizacja
- wprowadzić kanon: `#080808`, `#5e5e5e`, `#2B2B2B`.
- ograniczyć raw hexy w JSX.

---

## 9) Faza 8 – SEO/Growth backlog

### 9.1 Canonical URL – standaryzacja
- jedna strategia w całym projekcie: **względne**.

### 9.2 Schema.org – rozszerzenia
- `FAQPage` tam, gdzie występuje FAQ
- szerzej `BreadcrumbList`

### 9.3 OpenGraph
- unikalne OG images per typ strony; jeśli strona używa fallbacku (wspólnego obrazu), dodajemy komentarz TODO w pliku strony.

### 9.4 Content SEO
- internal linking, spójna struktura H2/H3 w blokach content

---

## 10) Proponowana kolejność realizacji (najbezpieczniejsza)

1) Faza 0 – lint/typecheck/build
2) Faza 1 – redukcja wariantów + martwe komponenty
3) Faza 2 – karuzele + surface/card
4) Faza 3 – nawigacja
5) Faza 4 – cookie consent
6) Faza 5 – tools prymitywy + split największych tooli
7) Faza 6 – contentBlocks renderer
8) Faza 7/8 – style + SEO growth
