# Arteon – Project Knowledge Base (single source of truth)

Ten plik ma być „pamięcią roboczą” projektu: architektura, style, komponenty, strony, funkcje oraz backlog usprawnień (SEO / performance / clean code / rozwój).

---

## 1) TL;DR – co to za projekt

- **Produkt**: strona/agencja (Arteon) z usługami, portfolio, blogiem edukacyjnym oraz narzędziami (tools).
- **Stack**:
  - Next.js **15** (App Router)
  - React **19**
  - TypeScript (strict)
  - Tailwind CSS **4** + `@tailwindcss/forms`, `typography`, `aspect-ratio`, `container-queries`, `tailwind-scrollbar`, `tailwindcss-fluid-type`
  - Framer Motion (animacje), React Icons
  - Vercel Analytics + Speed Insights

---

## 2) Struktura repo i odpowiedzialności

- `app/` – routing App Router (strony, layout, error/not-found).
- `components/`
  - `ui/` – prymitywy (Button, Link, Tag, Typography, Tool* itd.)
  - `sections/` – sekcje stron (Hero, CTA, carousels, itd.)
  - `shared/` – globalne elementy (Navigation, Footer, CookieConsent)
  - `systems/` – “systemowe” (FocusManager, RouteAnnouncer, RevealObserver)
- `data/pl/` – źródło treści: `blog.json`, `projects.json`, `testimonials.json`, `calculator/*.ts`.
- `lib/` – logika i utilsy (np. blog/service schema / site context).
- `types/` – typy domenowe.

Kluczowa zasada organizacyjna:
- **UI** ma być „dumb”, bez logiki biznesowej.
- Logika → `lib/`, hooki → `hooks/` (jeśli dodamy), dane/teksty → `data/` / `*.copy.ts`.

---

## 3) Routing (mapa witryny)

Główne ścieżki (PL):
- `/` – home
- `/uslugi` + podstrony:
  - `/uslugi/strony-internetowe`
  - `/uslugi/sklepy-internetowe`
  - `/uslugi/blogi-internetowe`
  - `/uslugi/projekty-graficzne` + wiele podstron
  - `/uslugi/marketing` + `audyt-seo`, `optymalizacja-seo`, `pozycjonowanie-stron`
  - `/uslugi/tworzenie-tresci`
- `/realizacje` + `/realizacje/[slug]`
- `/edukacja` + `/edukacja/[category]` + `/edukacja/[category]/[slug]`
- `/narzedzia` + narzędzia (kilka stron)
- `/kontakt`, `/o-nas`, `/mapa-strony`, `/polityka-prywatnosci`, `/regulamin`

---

## 4) System stylów (Tailwind + `app/globals.css`)

### 4.1 Jak dziś działa typografia
- W `globals.css` istnieją globalne style dla:
  - `h1..h6` oraz klasy `.h1..h6`
  - `p, li, .p` (clamp font-size)
  - `.text-small`
- Równolegle istnieje komponent `Text` (`variant: body/small/xs/caption`, `tone: default/muted/dark`).

Ważna decyzja (do ujednolicenia):
- **albo** typografia idzie globalnym CSS (`.h*`, `.p`) i `Text` jest cienki,
- **albo** typografia idzie przez prymitywy (`Text`/`Heading`) i globalne style minimalizujemy.

### 4.2 Globalne utility klasy (realnie używane)
- **`.inline-link`** – linki w treści (używane także w HTML z `data/pl/blog.json`).
- **`.hover-underline`** – linki UI/nawigacyjne.
- **`.no-scrollbar`** – karuzele.
- **`.reveal-animation`** – animacje/reveal (współpracuje z `RevealObserver`).
- **`tool-*`** i **`calc-*`** – globalne style dla narzędzi/kalkulatora (dobry kierunek redukcji kodu).

### 4.3 Kolory – standard i normalizacja
Obecnie występuje miks hexów i tokenów Tailwinda.

Kanoniczne (zalecane) kolory tekstu:
- `#080808` – default
- `#5e5e5e` – muted
- `#2B2B2B` – mid

Do scalenia jako ekwiwalenty (zależnie od kontekstu):
- `#0A0A0A`, `#1a1a1a`, `#333`, `text-gray-700` → sprowadzać do `#080808` lub `#2B2B2B`.

Wyjątki:
- `CodeBlock` ma „dark theme” – OK, ale warto tokenizować (np. `--code-bg`).

### 4.4 Powtarzalny “surface/card” pattern
Bardzo częsty wzorzec:
- `rounded-2xl border border-black/10 bg-white/... shadow-sm (+backdrop-blur-sm)`

Propozycja globalnych klas/prymitywów:
- `.surface` / `.surface-solid` (albo komponent `Card`).

---

## 5) Design system / komponenty (najważniejsze prymitywy)

### 5.1 Typografia
- `Text` (`components/ui/typography/Text.tsx`)
- `Heading` (`components/ui/typography/Heading.tsx`)
- `Eyebrow` (`components/ui/typography/Eyebrow.tsx`)
- `SectionHeader` (typography) + `SectionHeaderWithAction`

### 5.2 Linki
- `AppLink` (`components/ui/Link.tsx`) – z `.hover-underline` + focus ring.

### 5.3 UI
- `Button` (`components/ui/Button.tsx`)
- `Tag` (`components/ui/Tag.tsx`)
- `ButtonGroup`, `IconText`, `CopyButton`, `ToolSection`

### 5.4 Shared / Systems (a11y)
- `CookieConsent`, `Navigation`, `Footer`, `SkipToContent`
- `FocusManager`, `RouteAnnouncer`, `RevealObserver`

---

## 6) Granice RSC/Client (Next 15)

Zasada:
- komponent bez hooków i bez event handlerów powinien być **Server Component**.
- interakcje → małe **Client Components**.

Wcześniej wykonano refaktor (przykłady):
- `BreadCrumbs`, `HeroBanner`, `Footer`, `WorkSteps`, `TechSteps`, `FeesSteps`, `ServicesSteps`, `SectionBasic`, `SectionInfo` → Server.
- `CookieSettingsButton` → mały Client.

Pozostają client (uzasadnione):
- tools, karuzele, formularze, filtry, `FaqPanels`, `ShareBlock`, `CodeBlock`, `ButtonToTop`, `TableOfContent`, `TechStack` (framer-motion), systemy.

---

## 7) SEO / Analytics / a11y – stan i zasady

### SEO
- `metadata` w stronach (`title`, `description`, `alternates.canonical`, `openGraph`).
- Schema.org:
  - `Organization` + `WebSite` w `app/layout.tsx`
  - `Service` schema na stronach ofert (generowane przez `buildServiceSchema`)
  - `BlogPosting/Article` na dynamicznych stronach.

Audyt SEO/a11y (skrót najważniejszy):
- Ujednolicić canonical (pełne URL vs ścieżki względne).
- Rozważyć rozszerzenia schema: `FAQPage`, BreadcrumbList szerzej.
- Wykonać pełny audyt altów/hierarchii nagłówków.

### Analytics
- GA jest warunkowy w `app/layout.tsx` (env-based) + Vercel Analytics/SpeedInsights.
- Dodać zasadę: zero hardcodów ID → tylko env.

### Accessibility
- Skupienie na WCAG 2.1 AA, focus management, skip link, announcer.

---

## 8) Wydajność (performance) – praktyki i standardy

### Obrazy
Standard `sizes` (ważne dla `next/image` z `fill`):
- grid 3-col: `(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw`
- grid 2-col: `(min-width:768px) 50vw, 100vw`
- content: `(min-width:768px) 75vw, 100vw`

Dynamiczne obrazy w toolach (`blob:`) → `<img>` (uzasadnione).

---

## 9) Największe źródła duplikacji (konkretne ROI)

- **Karuzele**: `TestimonialsCarousel`, `ArticlesOverview`, `ProjectsOverview` – powielona logika scroll/ResizeObserver/dots.
- **Nawigacja**: Mobile/Desktop utrzymują podobne dane i logikę.
- **Strony**: lokalne helpery w `page.tsx` (np. `Aspect`, `RenderBlocks`, `ServiceSchema`) – do wyniesienia do `/components` lub `/lib`.
- **Karty/panele**: powtarzalny string klas (border/shadow/radius).

---

## 10) Dead code / do usunięcia / do scalenia

- `components/sections/Tooltip.tsx` – wygląda na nieużywany (brak importów/JSX), same pola `tooltip` w danych to nie użycie komponentu.
- `Badge.tsx` – minimalny i rzadki; dubluje `Tag`.

---

## 11) Backlog usprawnień (pomysły – optymalizacja, SEO, rozwój)

### P0 (najwyższy wpływ / szybkość)
- **Konsolidacja karuzeli** do jednego `Carousel` + `useCarouselScroller()`.
- **Konsolidacja “surface/card”**: globalna klasa `.surface` lub komponent `Card`.
- **Standaryzacja kolorów** (kanon `#080808/#5e5e5e/#2B2B2B`) + redukcja raw hexów.
- **Usunięcie nieużywanych wariantów**:
  - `Text.variant="caption"`
  - `Button.variant="minimal"`
  - `Tag.variant="selected/success/error"` (jeśli nie wdrożymy ich realnie)

### P1 (duży wpływ)
- **Navigation data single source of truth** (`navigation.data.ts`) + wspólne hooki (keyboard nav/outside click).
- **Rozbicie dużych tooli** (EmailSignatureGenerator, ImageResizeTool) na:
  - `hooks/` + `utils/` + mniejsze komponenty UI.
- **Wyniesienie helperów stron**:
  - `ServiceSchemaScript`
  - `Aspect`
  - `RenderBlocks` / `HtmlContent`
  - `sitemapJsonLd` w `lib/`

### P2 (SEO + growth)
- **Canonical**: jedna strategia (preferowane względne).
- **Schema**: `FAQPage` dla stron z FAQ, ujednolicone BreadcrumbList.
- **Unikalne OG images** dla typów stron (usługi/blog/projekty).
- **Content SEO**:
  - internal linking w artykułach
  - spójne H2/H3 w contentBlocks

### P3 (długoterminowe / architektura)
- Multi-domain/multi-language (jeśli wróci temat): hreflang, osobne sitemapy, `data/en/`, route map.
- Testy (smoke): minimalne testy dla krytycznych prymitywów i utili.

---

## 12) Notatki operacyjne (dla Ciebie / dla kolejnych sesji)

- **Zasada zmian**: nie zmieniać UI/UX przy refaktorach (tylko porządkowanie kodu).
- **Tailwind**: zachowywać klasy 1:1 przy migracji do komponentów, dopiero później standaryzować globalnie.
- **Kolejność refaktorów** (najbardziej opłacalna):
  1) Karuzele
  2) Nawigacja
  3) CookieConsent (podział na storage/gtag/ui)
  4) Tools prymitywy
  5) Standaryzacja surface/kolory
