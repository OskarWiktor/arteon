# Arteon - Pełny kontekst dla Cascade (synchronizacja między urządzeniami)

> **CEL**: Ten plik zawiera WSZYSTKIE ustalenia, wspomnienia, konwencje i decyzje z sesji roboczych.
> Na nowym urządzeniu poproś Cascade: "Przeczytaj `.windsurf/CONTEXT.md` i zapamiętaj wszystko co tam jest."
> Ostatnia aktualizacja: **2026-02-15**

---

## 1. Stack technologiczny

- **Framework**: Next.js 15.5 (App Router) + React 19
- **TypeScript 5** (strict, alias `@/*`)
- **Tailwind CSS 4** + PostCSS
- **SEO**: `next-sitemap` (postbuild) + `scripts/postbuild-sitemap-hreflang.cjs`
- **Narzędzia**: `sharp`, `react-easy-crop`, `react-icons`, `framer-motion`
- **Domena**: `https://www.arteonagency.pl`
- **Build**: `npm run build` (prebuild: anser fix + split-blog + search-index generation)
- **OS środowiska dev**: Windows

---

## 2. Struktura lokalizacji (i18n)

### 2.1 Obecne lokalizacje (7)

| Locale          | Lang  | Tools base path    | Przykład strony narzędzia                              |
| --------------- | ----- | ------------------ | ------------------------------------------------------ |
| **pl** (master) | pl-PL | `/narzedzia`       | `/narzedzia/kontrast-i-czytelnosc-kolorow`             |
| **en**          | en    | `/en/tools`        | `/en/tools/color-contrast-checker`                     |
| **de**          | de    | `/de/werkzeuge`    | `/de/werkzeuge/farbkontrast-checker`                   |
| **es**          | es    | `/es/herramientas` | `/es/herramientas/comprobador-de-contraste-de-colores` |
| **fr**          | fr    | `/fr/outils`       | `/fr/outils/verificateur-de-contraste-des-couleurs`    |
| **pt**          | pt    | `/pt/ferramentas`  | `/pt/ferramentas/verificador-de-contraste-de-cores`    |
| **it**          | it    | `/it/strumenti`    | `/it/strumenti/verificatore-contrasto-colori`          |

### 2.2 Planowane lokalizacje (NASTĘPNA FAZA - do implementacji)

- **RO** (Romanian)
- **NL** (Dutch)
- **HU** (Hungarian)

### 2.3 Pliki wymagane dla każdej lokalizacji

Każda nowa lokalizacja wymaga zmian w:

1. **`dictionaries/{locale}.json`** - słownik UI (nav, footer, legal, desktopOnly)
2. **`lib/i18n/locales.ts`** - dodać import + `LOCALE_CONFIG` entry (lang, hreflang, label, name, toolsBasePath, toolsIndexHref, aboutHref, contactHref, privacyHref)
3. **`lib/i18n/tool-registry.ts`** - dodać locale entry w każdym `TOOL_SECTIONS[].locales` i `TOOL_REGISTRY[].locales` (slug, title, description)
4. **`lib/i18n/tools/*.ts`** - dodać tłumaczenia UI narzędzi (10 plików: `color-palette.ts`, `email-signature.ts`, `favicon.ts`, `image-resize.ts`, `jpg-png-webp.ts`, `meta-title.ts`, `palette-extractor.ts`, `qr-code.ts`, `wcag-contrast.ts`, `word-count.ts`)
5. **`lib/i18n/pages/*.ts`** - dodać tłumaczenia stron statycznych (about.ts, contact.ts, privacy.ts, tool-meta.ts)
6. **`data/{locale}/tools/*.json`** - 10 plików JSON z contentBlocks (treść narzędzi)
7. **`app/{locale}/`** - routing Next.js (katalogi stron: tools/index, tools/desktop-only, tools/[slug], about, contact, privacy-policy)
8. **`types/locale.ts`** - dodać nowy locale do typu `Locale`

### 2.4 Struktura pliku JSON narzędzia (`data/{locale}/tools/*.json`)

```json
{
  "metadata": {
    "title": "...",          // meta title (50-60 znaków)
    "description": "..."     // meta description (150-160 znaków)
  },
  "hero": {
    "title": "...",          // nagłówek H1
    "description": "..."     // krótki opis pod H1
  },
  "breadcrumbs": { "toolsLabel": "...", "currentLabel": "..." },
  "schema": {
    "software": { "name": "...", "alternateName": [...], "description": "...", ... },
    "howTo": { "name": "...", "description": "...", "steps": [...] }
  },
  "contentBlocks": [
    { "type": "gap", "variant": "line" },
    { "type": "sectionInfo", "title": "...", "html": "..." },
    { "type": "sectionSteps", "title": "...", "items": [...] },
    { "type": "sectionTabs", "title": "...", "tabs": [...] },
    { "type": "sectionDemo", "title": "...", "demoHtml": "...", "html": "..." },
    { "type": "faq", "title": "...", "items": [...] },
    { "type": "toolsCarousel", "title": "..." }
  ]
}
```

### 2.5 Strony statyczne per lokalizacja

Każda lokalizacja (poza PL) ma:

- **about** (o nas)
- **contact** (kontakt)
- **privacy-policy** (polityka prywatności)
- **tools/index** (lista narzędzi)
- **tools/(desktop-only)/[slug]** (4 narzędzia desktop-only: webp-converter, image-editor, favicon, email-signature)
- **tools/[slug]** (6 narzędzi: meta-counter, word-counter, contrast-checker, palette-extractor, color-palette, qr-code)

---

## 3. Narzędzia (10 sztuk)

| Key                | Sekcja | Desktop-only | PL slug                                     |
| ------------------ | ------ | ------------ | ------------------------------------------- |
| `jpgToWebp`        | obrazy | ✅           | `jpg-png-na-webp-bez-limitu`                |
| `imageResize`      | obrazy | ✅           | `edytor-zdjec-online`                       |
| `favicon`          | obrazy | ✅           | `darmowy-generator-favicon-ico`             |
| `metaCounter`      | seo    | ❌           | `licznik-dlugosci-meta-title-i-description` |
| `wordCounter`      | seo    | ❌           | `licznik-slow-i-znakow`                     |
| `emailSignature`   | email  | ✅           | `darmowy-generator-stopki-mailowej`         |
| `contrastChecker`  | kolory | ❌           | `kontrast-i-czytelnosc-kolorow`             |
| `paletteExtractor` | kolory | ❌           | `ekstraktor-kolorow-z-obrazu`               |
| `colorPalette`     | kolory | ❌           | `generator-palet-kolorow`                   |
| `qrCode`           | druk   | ❌           | `darmowy-generator-kodow-qr`                |

---

## 4. Zasady SEO dla narzędzi (OBOWIĄZKOWE)

### 4.1 Meta Title

- **Długość**: 50-60 znaków
- **Front-load keyword**: główne słowo kluczowe na POCZĄTKU tytułu
- **Power words**: "Free", "Instant", "No signup", "One-click" - zwiększają CTR
- **Numery**: konkretne liczby zwiększają CTR
- **ZAKAZ**: słowa "online" (nic nie wnosi, zabiera miejsce)
- **Wzorzec CTR**: `[Keyword] - [benefit/differentiator] | Arteon`

### 4.2 Meta Description

- **Długość**: 150-160 znaków
- **Zawiera target keyword** (Google pogrubia dopasowania)
- **Aktywny głos + CTA**: "Sprawdź...", "Wygeneruj...", "Stwórz..."
- **Pain point → solution**: problem użytkownika → rozwiązanie
- **Trust signals**: "za darmo", "bez rejestracji", "działa lokalnie", "bez limitu"
- **Unikalny per stronę**: nigdy nie duplikuj opisów

### 4.3 Hero Title

- **BEZ słowa "online"** - usunięte z WSZYSTKICH lokalizacji
- Powinien komunikować korzyść, nie tylko nazwę narzędzia

### 4.4 Favicon - specjalne zasady

- Narzędzie favicon generuje **favicon.ico** (nie jest generatorem ikon ogólnych)
- **ZAKAZ** fraz "icon generator" / "generator ikon" w treści i schematach
- Schemat `name` powinien być "Favicon generator" / "Generator favicon", NIE "Icon generator"
- Treść contentBlocks powinna się skupiać na favicon.ico, apple-touch-icon, PWA manifest icons

---

## 5. Zasady techniczne dla JSON

### 5.1 Kodowanie

- **UTF-8 bez BOM** - zawsze
- Używaj prawdziwych znaków (ą, ę, ć, ł, ń, ó, ś, ź, ż, è, ù, ñ itd.) zamiast Unicode escape (`\u00e8`)
- Unicode escape (`\u2013`, `\u00f9` itd.) **tylko** gdy absolutnie konieczne dla poprawności JSON

### 5.2 Cudzysłowy w JSON

- **ZAKAZ** polskich cudzysłowów typograficznych `„"` - psują parser JSON
- Rozwiązania: usuń cudzysłowy, użyj `&quot;`, lub użyj apostrofów `''`
- Dotyczy WSZYSTKICH pól HTML w JSON (`html`, `answer`, `description`)

### 5.3 Walidacja

- Po każdej edycji JSON: waliduj parsowalnością (`ConvertFrom-Json` w PowerShell)
- Po serii edycji: `npm run build` musi przejść

---

## 6. Ukończone prace (SEO & Content Refinement Phase)

### 6.1 ✅ Meta titles + descriptions (70 plików)

Wszystkie 7 lokalizacji × 10 narzędzi:

- Usunięto "online" z meta titles, descriptions i hero titles
- CTR-zoptymalizowane: front-loaded keywords, power words, pain points, trust signals
- Meta titles ≤60 znaków, descriptions 150-160 znaków

### 6.2 ✅ Hero title cleanup

- ES: image-editor, palette-extractor, qr-code, webp-converter
- IT: image-editor
- PT: image-editor

### 6.3 ✅ Content gap fixes

| Plik                                      | Co dodano                                                                                                         |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| IT `email-signature.json`                 | 8 brakujących sectionInfo (dane, CTA, social, wygląd, styl tekstu, spacing, disclaimer, auto-save) → 19→35 bloków |
| EN/DE/ES/FR/PT/IT `contrast-checker.json` | Brakujący `sectionTabs` (formaty kolorów: HEX, RGB/RGBA, HSL/HSLA)                                                |
| DE/FR/PT/IT `webp-converter.json`         | Brakujący `sectionDemo` (opcje pobierania plików)                                                                 |
| EN `webp-converter.json`                  | Brakujący `sectionInfo` (raport oszczędności)                                                                     |

### 6.4 ✅ Build verification

- Wszystkie JSON zwalidowane
- `npm run build` przeszedł (exit code 0)
- Sitemap z hreflang dla 67 URL

---

## 7. Optymalizacje wydajności (wcześniejsze sesje)

### 7.1 Search Index Optimization

- `lib/search/searchIndex.ts` importował pełne `blog.json` (883KB) + `projects.json` (89KB) = 972KB
- Stworzono `scripts/generate-search-index.cjs` generujący lekkie `search-blog.json` (16.8KB) + `search-projects.json` (4.2KB)
- **Wynik**: 933KB lazy chunk wyeliminowany

### 7.2 Navigation Icons → Inline SVGs

- `components/ui/icons/NavIcons.tsx` z 36 inline SVG zastępujących react-icons/ri w nawigacji
- `components/ui/icons/CalcIcons.ts` z mapą 67 ikon kalkulatora (zamiast barrel import)

### 7.3 Build Results

- Per-page First Load JS: 174KB → 132KB (**-42KB**)
- Shared JS: 102KB (React/Next core)

---

## 8. Ważne konwencje projektowe

### 8.1 Routing

- PL jest master locale - strony w `app/(pl)/` (bez prefiksu w URL)
- Pozostałe locale mają prefiks: `app/{locale}/`
- Desktop-only tools używają route group: `tools/(desktop-only)/[slug]/`

### 8.2 Parytet treści

- PL jest źródłem prawdy dla contentBlocks
- Wszystkie lokalizacje powinny mieć taką samą liczbę i typy contentBlocks co PL
- Sprawdzaj parytet przez porównanie `contentBlocks.Count` między PL a innymi lokalizacjami

### 8.3 Schema.org

- Każda strona narzędzia ma: `SoftwareApplication`, `HowTo`, `WebPage`, `BreadcrumbList`, `FAQPage`
- Schematy powinny być jak najbogatsze - zwiększają widoczność w wyszukiwarkach i indeksację AI
- Waluta w `offers.priceCurrency`: PL→PLN, DE/ES/FR/PT/IT→EUR, EN→USD

### 8.4 AI Discoverability

- Strony narzędzi powinny mieć elementy pomagające platformom AI rozumieć i rekomendować narzędzia
- Rozważ: `llms.txt`, wzbogacone schematy, jasne opisy, semantyczny markup

### 8.5 Stale `.next` cache

- Jeśli `next build` failuje z `Cannot find module for page: /xxx` mimo że route istnieje:
  1. Zatrzymaj procesy Next/node
  2. Usuń katalog `.next`
  3. Uruchom ponownie `npm run build`

### 8.6 Hierarchia nagłówków w sekcjach

- **Główny tytuł sekcji**: `<h2>` z klasą `h3` (np. `<h2 className="h3 ...">`)
- **Podtytuł wewnątrz sekcji**: `<h3>` z klasą `h5` (np. `<h3 className="h5 ...">`)
- **NIGDY** podtytuł z klasą `h3` lub `h4` - podtytuły ZAWSZE `h5`
- Dotyczy: stron narzędzi, artykułów, usług, realizacji, komponentów (SectionDemo, SectionSteps)
- W artykułach blogowych (`blog.json`): H2 main `class='h3 mb-5 scroll-mt-26 lg:mb-6'`, H3 subtitle `class='h5 mb-3 mt-4'`

### 8.7 System tierów typografii w narzędziach

| Tier                      | Klasa CSS                                                         | Zastosowanie                             |
| ------------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| **A - Section Headers**   | `h6` (17-19px, fw600)                                             | "Narzędzia kadrowania", "Dodaj zdjęcie"  |
| **B - Functional Labels** | `text-[14px]! font-medium`                                        | Etykiety inputów, checkboxów, przycisków |
| **C - Helpers/Info**      | `text-light text-xs!`                                             | Info o pliku, helper quality, notatki    |
| **D - Dropzone text**     | Primary: `text-sm! font-medium`, Secondary: `text-light text-xs!` | Tekst dropzone                           |

**Zakazane wzorce w narzędziach** (zastąpione wszędzie):

- `text-sm` bez `!` → użyj `text-sm!` lub `text-[14px]!`
- `text-mid text-sm` → użyj `text-[14px]! font-medium`
- `text-[11px]` → użyj `text-xs!`
- `font-semibold` na zwykłych labelach → użyj `font-medium`
- `text-xs` bez `!` → użyj `text-xs!`
- `Eyebrow` komponent w narzędziach → użyj `span` z odpowiednią klasą tier

### 8.8 Konwencje komponentów i refaktoringu

- **UI/UX changes** dozwolone TYLKO jeśli wynikają bezpośrednio z zadania (np. nowa strona/komponent lub zadanie jawnie dotyczy wyglądu)
- **Refaktory/logika** (hooks/utils/split) NIE MOGĄ zmieniać UI/UX ani treści
- **Reuse first**: zawsze szukaj istniejących komponentów/hooków/utils zanim tworzysz nowe
- **Puste pliki po splicie**: usuwaj natychmiast (bez pustych barrel exports)
- Typografia: usunięto `Text.tsx` i `Heading.tsx` - używamy semantycznego HTML (`h1`-`h6`, `p`, `span`) + global/tailwind classes (`.h*`, `.p`, `text-sm`, `text-xs`, `.text-light/.text-mid/.text-dark/.text-white`)
- `components/ui/typography/` zawiera tylko: `Eyebrow.tsx` i `SectionHeader.tsx`
- Content renderer: wspólny `HTMLContent` + wspólny `RenderBlocks` (warianty dla typów danych)
- `Badge` → jeden komponent + warianty; `Tag` docelowo nie istnieje
- `Button` → warianty "jednorazowe" nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`
- `Tooltip` → zostaje (jedyny wyjątek - może być chwilowo nieużywany)

### 8.8a Konwencje nazewnictwa plików

| Typ              | Konwencja                 | Przykład                             |
| ---------------- | ------------------------- | ------------------------------------ |
| Komponenty React | `PascalCase.tsx`          | `Button.tsx`, `HeroBanner.tsx`       |
| Hooki            | `useCamelCase.ts`         | `useEscapeKey.ts`, `useFocusTrap.ts` |
| Serwisy danych   | `camelCaseDataService.ts` | `blogDataService.ts`                 |
| Utile            | `camelCase.ts`            | `slugify.ts`, `colorConvert.ts`      |
| Typy             | `camelCase.ts` (domena)   | `article.ts`, `project.ts`           |

**Zakazane nazwy**: `helper.ts`, `helpers.ts`, `utils.ts` (bez kontekstu), `index.ts` jako barrel, `data.ts`/`types.ts` bez prefiksu

### 8.8b Konwencje UI/styl

- **Kolory tekstu**: `.text-light`, `.text-mid`, `.text-dark` - **ZAKAZ** `text-gray-*`, `text-neutral-*`, raw hexy
- **Ikony**: zawsze kolor `text-[#1b2632]`
- **Globals-first typografia**: bazujemy na `.h*` i `.p` / globalnych regułach, wyjątki przez klasy
- **Tailwind klasy przy refaktorze**: zachowujemy 1:1 (chyba że zadanie mówi inaczej)

### 8.8c UTF-8 Encoding (KRYTYCZNE)

- Wszystkie pliki: **UTF-8 bez BOM**
- Polskie znaki diakrytyczne MUSZĄ być prawidłowe: ą, ę, ć, ł, ń, ó, ś, ź, ż
- **ZABLOKOWANE** znaki (błędna konwersja Win-1250→UTF-8): `ê→ę`, `³→ł`, `¹→ą`, `æ→ć`, `œ→ś`, `¿→ż`, `Ÿ→ź`, `ñ→ń`, `£→Ł`
- Wymuszane przez `.editorconfig` + `.gitattributes`

### 8.9 SEO techniczne (audytowane)

- **Canonical**: zawsze absolute URL na `https://www.arteonagency.pl`
- **OpenGraph**: URL absolute, unikalne per typ strony
- **Schema.org**: URL absolute, brak duplikacji encji
- **Robots + sitemap**: bez regresji (NIGDY nie blokować globalnie `/` w `robots.tsx`)
- **Icons**: upewnić się że `/apple-touch-icon.png` i `/icon-512x512.png` są publicznie dostępne

### 8.10 Bezpieczeństwo linków

- Zewnętrzne linki z `target="_blank"` MUSZĄ mieć `rel="noopener noreferrer"`
- Wewnętrzne linki nawigacji: weryfikuj `rel` attributes

### 8.11 Chronione pliki konfiguracji SEO

- **`next-sitemap.config.cjs`** i **`public/robots.txt`** - **NIE EDYTOWAĆ** bez wyraźnego polecenia użytkownika
- `additionalPaths` służy WYŁĄCZNIE do dynamicznych ścieżek (projects, edukacja)
- NIE dodawać logiki skanowania stron w `additionalPaths` (strony statyczne → `transform`)
- Historia: duplikacje w sitemapie z podwójnego skanowania

### 8.12 next.config.ts

- Poza produkcją: dodaje `X-Robots-Tag: noindex, nofollow`
- Wymusza redirect `arteonagency.pl` → `https://www.arteonagency.pl`
- NIE zmieniaj bez powodu

### 8.13 Nawigacja i nowe strony

- Nowe strony w grupach "Usługi", "Realizacje", "O nas", "Edukacja", "Narzędzia" → automatycznie dodawane do WSZYSTKICH wariantów nawigacji (desktop + mobile, w tym dropdowny/submenu)
- Nigdy nie zmieniaj numerów zadań w `TASKS.md`

### 8.14 Dostępność (a11y)

- Zachowana dostępność: focus ring, aria, keyboard navigation
- Każde narzędzie musi być operowalne klawiaturą
- `alt` text na obrazach: opisowy, bez keyword stuffing

---

## 9. Workflow domykania zadań i zarządzania taskami

### 9.1 Po zakończeniu zadania

1. Zapisz co zrobiono + status (✅/🟡/❌)
2. Jeśli ✅ i nie AUDIT: **USUŃ** z `docs/TASKS.md` (nie tylko oznacz!) + dodaj wpis do `docs/DONE_TASKS.md`
3. **KRYTYCZNE**: zaktualizuj odpowiedni `*_CATALOG.md` (PAGES, TOOLS, COMPONENTS, HOOKS, BLOG, PROJECTS)
4. Domyślnie: `npm run lint` i `npm run build` muszą przejść
5. Wyjątek: zadania COPY-_, AUDIT-_, content-only - bez build verification (jawnie: "Weryfikacja: nie jest wymagana")

### 9.2 Kategorie zadań

| Prefix       | Typ                          | Build wymagany    | Przykład                 |
| ------------ | ---------------------------- | ----------------- | ------------------------ |
| `TOOLS-*`    | Narzędzia (nowe/modyfikacja) | ✅                | TOOLS-060 ZIP helper     |
| `CLEANUP-*`  | Czyszczenie kodu             | ✅                | CLEANUP-013 downloadBlob |
| `SEO-*`      | SEO fixes                    | ✅                | SEO-017 favicon assets   |
| `PROJECT-*`  | Realizacje (dane)            | ✅                | PROJECT-002 galerie      |
| `CONTENT-*`  | Treści blogowe               | ❌ (content-only) | CONTENT-001 excerpt rule |
| `COPY-*`     | Korekta copy/tonu            | ❌ (COPY-only)    | COPY-### per strona      |
| `AUDIT-*`    | Audyty                       | ❌ (AUDIT-only)   | AUDIT-003 cleanup        |
| `IDEA-*`     | Pomysły (backlog)            | -                 | IDEA-019 "Jak pracujemy" |
| `STYLES-*`   | Style/typografia             | ✅                | STYLES-001 typography    |
| `SECURITY-*` | Bezpieczeństwo               | ✅                | SECURITY-001 rel attrs   |

### 9.3 Zasady audytów

- Wynik audytu = **konkretne zadania follow-up** z kryteriami akceptacji, NIE "wykryte problemy" bez zadań
- Audyty NIE trafiają do sekcji Pomysły - mają być egzekwowalnym backlogiem
- Po audycie: dopisz wpis do `DONE_TASKS.md` z zakresem + ID utworzonych zadań

### 9.4 Dokumentacja projektu (catalogi)

| Plik                         | Co dokumentuje                                      |
| ---------------------------- | --------------------------------------------------- |
| `docs/PAGES_CATALOG.md`      | Wszystkie strony (URL, pliki, status)               |
| `docs/TOOLS_CATALOG.md`      | Narzędzia interaktywne (komponenty, algorytmy, API) |
| `docs/COMPONENTS_CATALOG.md` | Komponenty UI wielokrotnego użytku                  |
| `docs/HOOKS_CATALOG.md`      | Custom hooks                                        |
| `docs/BLOG_CATALOG.md`       | Artykuły blogowe                                    |
| `docs/PROJECTS_CATALOG.md`   | Realizacje/case studies                             |
| `docs/REFACTORING_REPORT.md` | Raport refaktoringu                                 |
| `docs/SECURITY_CHECKLIST.md` | Checklist bezpieczeństwa                            |
| `docs/BLOG_IDEAS_300.md`     | Pomysły na artykuły (300+)                          |

---

## 10. Zasady treści (pełne w `docs/INSTRUCTIONS.md` + `docs/CONTENT_INSTRUCTIONS.md`)

> **KRYTYCZNE**: Przed KAŻDYM zadaniem treściowym przeczytaj oba pliki!

### 10.1 Ton i styl

- **Ton**: mentorski, życzliwy, prosty, "przy kawie" - bez pouczania
- **Narracja**: 2 os. l.poj. dla czytelnika ("Twoja firma", "na swojej stronie" - NIE "na Twojej stronie"), 1 os. l.mn. dla Arteon ("wyjaśniamy")
- **Benefit-first**: korzyść → dlaczego ważne → narzędzie
- Termin techniczny → od razu "co to jest?" i "po co to?"
- Bez skoków myślowych - spójny tok narracji

### 10.2 Zakazy stylistyczne (OBOWIĄZUJĄ ZAWSZE)

- **"online"** - NIGDY w meta titles, descriptions, hero titles, treści narzędzi
- **Emotki** - NIGDY w treści
- **Korpo-język** - NIGDY ("leveragujemy synergię", "holistycznie")
- **Clickbait** - NIGDY ("Nie uwierzysz co...", "Szok!")
- **Źródła bez linków** - NIGDY (każda statystyka/fakt musi mieć źródło z linkiem)
- **Anglicyzmy** - polskie odpowiedniki (social media → media społecznościowe)
- **Rekomendowanie konkurencji** - NIGDY (tylko "skontaktuj się z nami" + link do `/kontakt`)
- **Łagodne określenia** - "słabsze" zamiast "słabe", "mniej skuteczne" zamiast "złe"
- **Niedoprecyzowania** - NIGDY; wszystko musi być 100% zgodne z rzeczywistością i jednoznaczne
- **Przykłady z branży Arteon** - NIGDY; używaj: prawo, medycyna, gastronomia, nieruchomości, e-commerce, produkcja

### 10.3 CTR i marketing psychologiczny (narzędzia i meta)

Wszystkie meta titles/descriptions i treści narzędzi MUSZĄ stosować:

1. **Pain points**: co użytkownik ma za problem ("tired of complex tools?")
2. **Benefits over features**: co zyska, nie co robi narzędzie
3. **User intent**: dopasuj do search intent
4. **Differentiation**: czym się wyróżniamy w SERP
5. **Urgency/ease**: "w sekundę", "jednym kliknięciem", "natychmiast"
6. **Trust signals**: "bez rejestracji", "za darmo", "bez limitu", "działa w przeglądarce"
7. **Emotional triggers**: ulga, pewność, efektywność

### 10.4 Balans DIY vs oferta

- Treści mają być **pomocne**, ale NIE mogą być DIY "zrób to sam"
- Preferuj: co powinno zawierać / na co uważać / proces / ryzyka
- NIE: szczegółowe instrukcje zastępujące usługę
- Instrukcje narzędzi muszą być 1:1 zgodne z realnym UI/mikrocopy (nazwy przycisków/etykiet)

### 10.5 Artykuły blogowe (dodatkowe zasady)

- **Excerpt**: 220-230 znaków (ściśle)
- **Długość**: 1800-2800 słów (9-14 min czytania)
- **Linki wewnętrzne**: min. 6-8 per artykuł
- **Linki zewnętrzne**: min. 4-6 per artykuł (zawsze z linkiem do źródła)
- **Intencja wyszukiwania**: KAŻDA treść odpowiada na pytanie "czego szuka użytkownik?"
- **Nasycenie fraz kluczowych**: w nagłówkach H2/H3 - dotyczy WSZYSTKICH treści
- **Linki do zewnętrznych narzędzi**: zawsze dodawać linki (GSC, PageSpeed Insights itp.)
- **Zaimki dzierżawcze**: "na swojej stronie" zamiast "na Twojej stronie"

### 10.6 Weryfikacja zgodności

- **PRZED** napisaniem tekstu: sprawdź `INSTRUCTIONS.md` i `CONTENT_INSTRUCTIONS.md`
- **PO** napisaniu: sprawdź ponownie zgodność ze wszystkimi zasadami

---

## 11. Pending / Następne kroki

> Pełna lista zadań: `docs/TASKS.md`. Poniżej kluczowe priorytety.

### 🔴 NAJWYŻSZY PRIORYTET: Nowe lokalizacje (RO, NL, HU)

- Pełna checklist implementacji: patrz §14
- Status: **pending** - czeka na review usera po fazie SEO & Content Refinement

### 🟡 Pending audyty

- `AUDIT-003` - cleanup (puste pliki, martwe exporty, nieużywany kod)
- `AUDIT-004` - SEO sanity-check (canonical/OG/schema/robots/sitemap) - **ZROBIONY**, follow-up SEO-013/016/017 pending
- `AUDIT-005` - performance (client components, rerender, obrazy)
- `AUDIT-009` - blog rozbudowa artykułów pod SEO
- `AUDIT-010..015` - audyty tonu marki (strony info, usługi, narzędzia, realizacje)

### 🟡 Pending zadania techniczne

- `CLEANUP-013` - downloadBlob util (ujednolicić pobieranie Blob)
- `CLEANUP-014` - useCopyToClipboard → useTimeout
- `TOOLS-060` - zipFromUrls helper (re-use ZIP w narzędziach)
- `CONTENT-001` - dodać wytyczną excerpt 220-230 znaków do INSTRUCTIONS.md

### 🟡 Pending realizacje

- `PROJECT-002` - galerie contentBlocks + ALT (brakujące screeny/mockupy)
- `PROJECT-003` - outcomes[] (metryki efektów)
- `PROJECT-004` - FAQ dla realizacji bez FAQ
- `PROJECT-006` - komplet danych case study (client/deliverables/stack)

### 📝 Pomysły (IDEA-\*)

- ~50 pomysłów na nowe strony, artykuły i rozszerzenia komponentów
- Szczegóły w `docs/TASKS.md` sekcje "Pomysły" i "Pomysły na artykuły"

---

## 12. Przydatne komendy PowerShell

```powershell
# Walidacja wszystkich JSON narzędzi
Get-ChildItem "data\*\tools\*.json" -Recurse | ForEach-Object { try { Get-Content $_.FullName -Raw | ConvertFrom-Json | Out-Null } catch { Write-Output "INVALID: $($_.FullName)" } }

# Porównanie liczby bloków między lokalizacjami
foreach ($tool in @('contrast-checker','webp-converter','email-signature')) { foreach ($locale in @('pl','en','de','es','fr','pt','it')) { $path = "data\$locale\tools\$tool.json"; if (Test-Path $path) { $j = Get-Content $path -Raw | ConvertFrom-Json; Write-Output "$locale/$tool : $($j.contentBlocks.Count)" } } }

# Szukanie "online" w meta titles
Get-ChildItem "data\*\tools\*.json" -Recurse | ForEach-Object { $j = Get-Content $_.FullName -Raw | ConvertFrom-Json; if ($j.metadata.title -match 'online') { Write-Output "$($_.FullName): $($j.metadata.title)" } }
```

---

## 13. Kluczowe pliki projektu

### 13.1 Dokumentacja i zasady

| Plik                           | Opis                                                          |
| ------------------------------ | ------------------------------------------------------------- |
| `docs/INSTRUCTIONS.md`         | Pełne instrukcje projektu (**ZAWSZE czytaj przed zadaniami**) |
| `docs/CONTENT_INSTRUCTIONS.md` | Szczegółowe zasady pisania treści                             |
| `docs/TASKS.md`                | Lista zadań do zrobienia (usuwaj zrobione!)                   |
| `docs/DONE_TASKS.md`           | Ukończone zadania                                             |
| `docs/PAGES_CATALOG.md`        | Katalog wszystkich stron                                      |
| `docs/TOOLS_CATALOG.md`        | Katalog narzędzi interaktywnych                               |
| `docs/COMPONENTS_CATALOG.md`   | Katalog komponentów UI                                        |
| `docs/HOOKS_CATALOG.md`        | Katalog custom hooks                                          |
| `docs/BLOG_CATALOG.md`         | Katalog artykułów blogowych                                   |
| `docs/PROJECTS_CATALOG.md`     | Katalog realizacji                                            |
| `docs/SECURITY_CHECKLIST.md`   | Checklist bezpieczeństwa                                      |
| `docs/REFACTORING_REPORT.md`   | Raport refaktoringu                                           |
| `docs/BLOG_IDEAS_300.md`       | Pomysły na artykuły (300+)                                    |

### 13.2 Infrastruktura i18n

| Plik                          | Opis                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `types/locale.ts`             | Typ `Locale` (union) + `LocaleConfig`, `NavigationUi`, `FooterUi`, `DesktopOnlyUi`, `LegalLink`                                 |
| `lib/i18n/locales.ts`         | `LOCALE_CONFIG`, `SUPPORTED_LOCALES`, import słowników                                                                          |
| `lib/i18n/tool-registry.ts`   | `TOOL_SECTIONS[]` + `TOOL_REGISTRY[]` (klucze, sekcje, slugi, titles, descriptions per locale)                                  |
| `lib/i18n/get-dictionary.ts`  | Dynamiczny import `dictionaries/{locale}.json`                                                                                  |
| `lib/i18n/pages/tool-meta.ts` | `getToolAlternates()`, `getToolsIndexAlternates()`, `getToolSoftwareSchema()`, `getToolHowToSchema()`, `getToolWebPageSchema()` |
| `lib/i18n/tools/*.ts`         | 10 plików UI tłumaczeń narzędzi (etykiety, placeholdery, alerty)                                                                |
| `lib/i18n/pages/*.ts`         | Tłumaczenia stron statycznych (about, contact, privacy)                                                                         |
| `dictionaries/{locale}.json`  | Słowniki UI (nav, footer, legal, desktopOnly)                                                                                   |
| `data/{locale}/tools/*.json`  | 10 plików contentBlocks per locale                                                                                              |

### 13.3 Routing i konfiguracja

| Plik                                     | Opis                                                              |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `middleware.ts`                          | Security (bad bots, blocked paths/ext), redirects, canonical host |
| `next-sitemap.config.cjs`                | Konfiguracja sitemap (**CHRONIONY - nie edytować bez polecenia**) |
| `scripts/postbuild-sitemap-hreflang.cjs` | Dodaje hreflang do sitemap po build                               |
| `scripts/generate-search-index.cjs`      | Prebuild: generuje lekkie search-\*.json                          |
| `app/(pl)/`                              | Routing PL (master, bez prefiksu URL)                             |
| `app/{locale}/`                          | Routing per locale (en, de, es, fr, pt, it)                       |

### 13.4 Komponenty nawigacji (ważne przy dodawaniu locale)

| Plik                                          | Opis                                                        |
| --------------------------------------------- | ----------------------------------------------------------- |
| `components/shared/LanguageSwitcher.tsx`      | Przełącznik języków (wymaga aktualizacji przy nowym locale) |
| `components/shared/Navigation.tsx`            | Główna nawigacja                                            |
| `components/shared/MobileNavigation.tsx`      | Nawigacja mobilna                                           |
| `components/shared/DesktopNavigation.tsx`     | Nawigacja desktop                                           |
| `components/shared/navigation-data/pl.ts`     | Dane nawigacji PL (30 ikon inline SVG)                      |
| `components/shared/navigation-data/en.ts`     | Dane nawigacji EN (11 ikon)                                 |
| `components/sections/tools/ToolsCarousel.tsx` | Karuzela narzędzi (wymaga locale support)                   |
| `components/ui/icons/NavIcons.tsx`            | 36 inline SVG ikon nawigacji                                |
| `components/ui/icons/CalcIcons.ts`            | Mapa 67 ikon kalkulatora                                    |

### 13.5 Inne ważne pliki

| Plik                                                             | Opis                                           |
| ---------------------------------------------------------------- | ---------------------------------------------- |
| `lib/tools/text/wordCount.ts`                                    | `PAGE_TYPES` + `EVAL_UI` - wymaga locale entry |
| `components/sections/tools/ImageResizeTool/ui.ts`                | UI strings - wymaga locale entry               |
| `components/sections/tools/EmailSignatureGenerator/constants.ts` | Email sig constants - wymaga locale entry      |
| `types/ui.ts`                                                    | `BreadcrumbsProps` - locale prop               |
| `components/sections/BreadCrumbs.tsx`                            | Breadcrumbs komponent                          |

---

## 14. Dodawanie nowego locale - PEŁNA CHECKLIST

Sprawdzony proces (użyty dla ES, FR, PT, IT):

### Faza 1: Infrastruktura TypeScript

1. `types/locale.ts` - dodaj `'{locale}'` do union type `Locale`
2. `dictionaries/{locale}.json` - stwórz (bazuj na `en.json`): `navigation`, `footer`, `legal[]`, `desktopOnly`
3. `lib/i18n/locales.ts` - dodaj `LOCALE_CONFIG['{locale}']` z: `lang`, `hreflang`, `label`, `name`, `toolsBasePath`, `toolsIndexHref`, `aboutHref`, `contactHref`, `privacyHref`
4. `lib/i18n/get-dictionary.ts` - dodaj import case dla nowego locale

### Faza 2: Tool Registry

5. `lib/i18n/tool-registry.ts` - dodaj locale entry w KAŻDYM:
   - `TOOL_SECTIONS[].locales` (5 sekcji: obrazy, seo, email, kolory, druk)
   - `TOOL_REGISTRY[].locales` (10 narzędzi: slug + title + description)
6. `lib/i18n/tools/*.ts` - dodaj tłumaczenia w 10 plikach (UI etykiety, placeholdery, alerty)

### Faza 3: Strony statyczne

7. `lib/i18n/pages/about.ts` - dodaj tłumaczenia about page
8. `lib/i18n/pages/contact.ts` - dodaj tłumaczenia contact page
9. `lib/i18n/pages/privacy.ts` - dodaj tłumaczenia privacy page

### Faza 4: Content JSON

10. `data/{locale}/tools/*.json` - stwórz 10 plików:
    - `contrast-checker.json`, `color-palette.json`, `email-signature.json`
    - `favicon.json`, `image-editor.json`, `meta-counter.json`
    - `palette-extractor.json`, `qr-code.json`, `webp-converter.json`, `word-counter.json`
    - Bazuj na PL master, zachowaj parytet contentBlocks

### Faza 5: Routing Next.js

11. `app/{locale}/layout.tsx` - layout z `getDictionary('{locale}')`
12. `app/{locale}/tools/page.tsx` - tools index
13. `app/{locale}/tools/loading.tsx` - loading state
14. `app/{locale}/tools/(desktop-only)/layout.tsx` - desktop-only layout
15. Stwórz 10 stron narzędzi (6 regular + 4 desktop-only):
    - Regular: `tools/{slug}/page.tsx`
    - Desktop-only: `tools/(desktop-only)/{slug}/page.tsx`
16. `app/{locale}/about/page.tsx` - strona O nas
17. `app/{locale}/contact/page.tsx` - strona Kontakt
18. `app/{locale}/privacy-policy/page.tsx` - polityka prywatności

### Faza 6: Aktualizacje globalne

19. `components/shared/LanguageSwitcher.tsx` - dodaj nowy locale
20. `components/shared/Navigation.tsx` - upewnij się że obsługuje nowy locale
21. `components/shared/MobileNavigation.tsx` - j.w.
22. `components/sections/tools/ToolsCarousel.tsx` - j.w.
23. `components/sections/tools/ImageResizeTool/ui.ts` - dodaj UI strings
24. `components/sections/tools/EmailSignatureGenerator/constants.ts` - dodaj constants
25. `lib/tools/text/wordCount.ts` - dodaj `PAGE_TYPES` + `EVAL_UI`
26. `lib/i18n/pages/tool-meta.ts` - dodaj `priceCurrency` mapping (RO→RON, HU→HUF, NL→EUR)

### Faza 7: Walidacja

27. Waliduj wszystkie JSON: `Get-ChildItem "data\{locale}\tools\*.json" -Recurse | ForEach-Object { ... ConvertFrom-Json ... }`
28. `npm run lint` - musi przejść
29. `npm run build` - musi przejść
30. Sprawdź sitemap - hreflang musi obejmować nowy locale

---

## 15. Ukończone większe prace (historia)

### 15.1 ✅ Dodawanie lokalizacji ES, FR, PT, IT

- Pełna implementacja 4 nowych lokalizacji (wzorzec opisany w §14)
- Każda: infrastructure + registry + pages + content + routing + global updates
- Build: 227+ stron, 0 błędów

### 15.2 ✅ SEO & Content Refinement Phase (7 lokalizacji × 10 narzędzi)

- Meta titles/descriptions CTR-optimized, "online" removed
- Hero title cleanup (ES, IT, PT)
- Content gap fixes (sectionTabs, sectionDemo, sectionInfo)
- Build verified, sitemap z hreflang dla 67 URL

### 15.3 ✅ Performance Optimization

- Search index: -933KB (lightweight prebuild JSON)
- Navigation icons: inline SVGs (36 NavIcons, 67 CalcIcons)
- FaqPanels: inline SVG (removed react-icons/fi)
- Calculator OptionButton: explicit icon map (removed barrel import)
- Per-page First Load JS: 174KB → 132KB (-42KB)

### 15.4 ✅ Typography Refactor (STYLES-001)

- Usunięto `Text.tsx` i `Heading.tsx`
- Semantic HTML + global/tailwind classes
- Tool text tier system (A/B/C/D) applied across all tools

### 15.5 ✅ SEO Audit (AUDIT-004)

- Canonical/OG/Schema URL - all absolute
- Robots/sitemap - no regressions
- Follow-up: SEO-013, SEO-016, SEO-017

### 15.6 ✅ Strona "Dołącz do sieci"

- `app/(pl)/o-nas/dolacz-do-sieci/page.tsx`
- `ABOUT_NAV_ITEMS_PL` w navigation-data
- Dropdown desktop + mobile podlinkowane

### 15.7 ✅ Artykuł blog [32] "Bezpieczeństwo strony internetowej"

- `data/pl/blog.json` slug: `bezpieczenstwo-strony-internetowej-zabezpieczenia-2026`
- Cover image + SEO/CTA/FAQ/contentBlocks + internal links

### 15.8 ✅ ToolsCarousel

- `components/sections/tools/ToolsCarousel.tsx` - karuzela narzędzi na stronie głównej
- `CarouselCard` variant `'tool'` z `title`, `href`, `icon`

### 15.9 ✅ Edukacja - per-category content

- `CATEGORY_CONTENT_BY_SLUG` + `DEFAULT_*` fallbacks
- Per-category HeroBanner description + metadata + OG
