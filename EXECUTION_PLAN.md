
# Arteon – Refactor Master Plan (single source of truth)

## Ustawienia projektu (stack)

- Framework: Next.js `15.3.6` (App Router) + React `19.2.1`
- Dev/build: `next dev --turbopack`, `next build`, `next start`
- TypeScript: `5` (strict) + alias importów `@/*`
- Style: Tailwind CSS `4` + PostCSS (`@tailwindcss/postcss`) + pluginy: forms, typography, aspect-ratio, container-queries, tailwindcss-children, tailwind-scrollbar, tailwindcss-fluid-type
- Lint/format: ESLint `9` (Next + TS + a11y/security/unused-imports/react-hooks) + Prettier `3` (+ `prettier-plugin-tailwindcss`)
- SEO: `next-sitemap` (postbuild) + `next-sitemap.config.cjs`
- Analytics: `@vercel/analytics`, `@vercel/speed-insights`
- Narzędzia/media: `sharp`, `react-easy-crop`, `react-icons`, `framer-motion`, `gray-matter`
- `next.config.ts`: poza produkcją dodaje `X-Robots-Tag: noindex, nofollow`; wymusza host `arteonagency.pl` → `https://www.arteonagency.pl`

Źródła kontekstu, możesz się z nimi zapoznawać przed rozpoczęciem zadania, w szczególności jeśli zadanie dotyczy danego typu treści / komponentów / stron czy hooków:
- `COMPONENTS_CATALOG.md` - opis wszystkich komponentów,
- `HOOKS_CATALOG.md` - opis wszystkich hooków,
- `TOOLS_CATALOG.md` - opis wszystkich narzędzi,
- `PROJECTS_CATALOG.md` - opis wszystkich realizacji / projektów firmowych,

Legenda statusów:
- ✅ zrobione
- 🟡 w toku / częściowo
- ❌ nie zrobione

Ostatnia weryfikacja statusów w kodzie: **2025-12-14**

## Zasady ogólne (zawsze)

- Refaktory nie mają zmieniać UI/UX ani treści.
- Na etapie „porządkowania” zachowujemy klasy Tailwinda 1:1 (chyba że zadanie mówi inaczej).
- Canonical: **bezwzględne (absolute)** i zawsze na `https://www.arteonagency.pl`.
- OpenGraph: **unikalne per typ strony**; gdy fallback, dodajemy komentarz TODO w pliku strony.
- Typografia: **globals-first** (bazujemy na `.h*` i `.p` / globalnych regułach), a wyjątki rozwiązujemy przez klasy.
- Kolory tekstu: **wymuszamy** użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do **`Badge`** (jeden komponent + warianty); **`Tag` docelowo nie istnieje**.
- `Button`: warianty „jednorazowe” nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`.
- `Tooltip`: **zostaje** (jedyny wyjątek – może być chwilowo nieużywany).
- Content renderer: wspólny `HTMLContent` + wspólny `RenderBlocks` (warianty dla typów danych).
- Multi-domain/multi-language: w planie na później; domena determinuje język dla wybranych wspólnych komponentów (np. tools).
- po zakończeniu zadania pod zadaniem zapisz co zostało zrobione oraz dodaj odpowiednią ikonę a także przetestuj czy wszystko działa i przechodzi
- każdy komponent i cały kod powinien być zgodny z najlepszymi praktykami Next
- przy tworzeniu nowych hooków lub komponentów sprawdź raport mówiący o tych które już są, jeśli są już podobne to ich użyj lub stwórz nowy wariant / propsy ( bez require ), które będą przydatne
- nie zmieniaj wyglądu, treści ani funkcjonalności, chyba że wskazano inaczej
- po zmianie, modyfikacji lub dodaniu nowego komponentu, hooku lub narzędzia opisz co się zmieniło w odpowiednim katalogu 
---

## Definition of Done (dla każdego zadania)

Dla każdego zadania:
- Kod przechodzi `lint` i `typecheck`.
- Zachowana dostępność (focus ring, aria, keyboard).

---

## Zadania

- ✅ **[NAV-001] Dane nawigacji: single source of truth**
  - Mobile i Desktop korzystają z tego samego źródła. Stworzenie nowego komponentu w którym będą wspólne linki dzięki czemu wystarczy będzie dodać kolejne lub zmienić istniejące linki w jednym pliku. Rozbicie nawigacji na mniejsze komponenty i użycie hooków, które już są lub stworzenie nowych jeśli jest to potrzebne. Zachowaj w 100% ten sam wygląd i działanie. Jeśli zauważysz opcję ulepszenia działania lub jakiś błąd poinformuj mnie o tym
  - **Zrobione 2025-12-14**:
    - Dodano SSOT: `components/shared/navigation-data/pl.ts` (nav + sekcje usług + sekcje narzędzi + linki prawne).
    - `DesktopNavigation` i `MobileNavigation` pobierają dane z SSOT (bez zmian UI/UX).
    - `npm run lint` i `npm run build` przechodzą.
- ❌ **[COOKIE-001] CookieConsent: rozdzielenie odpowiedzialności**
  - Wydzielić storage/gtag/UI (mniej “god component”); UX bez zmian.
- 🟡 **[UI-001] `.surface-*`: dokończyć migrację kart/paneli**
  - Przepiąć kolejne miejsca powtarzających się klas; zero zmian wizualnych.
- **[TOOLS-001] Narzędzia: dokończyć prymitywy high-ROI**
  - użyć stworzonych hooków  lub stworzyć nowe jeśli są wspólne funkcjonalności
  - jeśli są wspólne funkcjonalności stworzyć wspolne komponenty ( np. dla wgrywania zdjęć )
  - stworzyć foldery dla każdego narzędzia i rozdzielić każde narzędzie na logiczne komponenty
  - Wynosić logikę do hooków/utils; dopilnować cleanup (blob URLs, event listeners).
  - zachowaj działanie w 100% oraz wygląd ( niczego nie zmieniaj pod tym kątem )
  - przełóż na mniejsze komponenty każde narzędzie
  - Jeśli zauważysz opcję ulepszenia działania lub jakiś błąd poinformuj mnie o tym
  - jeśli tego potrzebujesz rozbij to zadanie na mniejsze, przypisując jedno zadanie do jednego narzędzia
  - **[TOOLS-002] CORE**: audyt kodu narzędzi + sprawdzenie `HOOKS_CATALOG.md`/`COMPONENTS_CATALOG.md` pod kątem reuse
  - **[TOOLS-003] SHARED**: wspólne prymitywy (download, ObjectURL lifecycle, `loadImage` + `canvasToBlob`) i przepięcie min. 2 narzędzi
  - **[TOOLS-004] ColorPaletteGenerator**: rozdzielić logikę (konwersje + generowanie palet) i UI; reuse color utils + copy feedback
  - **[TOOLS-005] MetaTitleDescriptionTool**: wydzielić pomiar (canvas) + heurystyki statusów + snippet preview; zero zmian UI/UX
  - **[TOOLS-006] WcagContrastChecker**: wynieść parsing/kontrast do utils; ujednolicić z color utils tam gdzie ma to sens (bez utraty formatów)
  - **[TOOLS-007] FaviconGenerator**: rozdzielić pipeline PNG/ICO + zarządzanie outputami; reuse shared (download/objectURL); zweryfikować mismatch nazwa pliku vs MIME
  - **[TOOLS-008] JpgPngToWebp**: rozdzielić kolejkę/konwersję/download/raport; reuse shared; zachować smart-quality
  - **[TOOLS-009] ImageResizeTool**: rozdzielić crop math / pointer events / eksport; reuse shared; dopilnować cleanup URL/event listeners
  - **[TOOLS-010] EmailSignatureGenerator**: rozdzielić generowanie HTML + sanitizację URL + kopiowanie HTML; reuse shared tylko jeśli zmniejsza kod
  - **[TOOLS-011] DONE**: `lint` + `typecheck`, szybki manual QA narzędzi; dopisać podsumowanie i status w `EXECUTION_PLAN.md`
  - **[TOOLS-012] Palette Extractor (z obrazu/logo)**: nowy tool + shared color pipeline
    - Cel: dodać nowe narzędzie “Palette Extractor z obrazu / logo”, które lokalnie (client-side) wyciąga dominujące kolory z obrazu i pozwala je kopiować / eksportować. Narzędzie ma korzystać z istniejących prymitywów UI dla tooli oraz (tam gdzie ma to sens) z istniejących utils/wyliczeń kolorów.
    - Zakres:
      - stworzyć nowy tool komponent w components/sections/tools/PaletteExtractor/ (folder + podział na mniejsze komponenty),
      - dodać stronę narzędzia w app/(pl)/narzedzia/(tools)/palette-extractor/page.tsx (lub zgodnie z obecnym schematem slugów),
      - dodać schema WebApplication i canonical absolute: https://www.arteonagency.pl/... (zgodnie z zasadami globalnymi),
      - dodać wpis do TOOLS_CATALOG.md (opis działania + zależności),
      - dopiąć wspólne utilsy do pracy z obrazem/kolorem, jeśli skraca kod i jest do ponownego użycia (bez psucia istniejących tooli).
    - Wymagania funkcjonalne (MVP):
      - upload obrazu (PNG/JPG; SVG best-effort, jeśli obecny loader obsługuje),
      - downscale obrazu do małej siatki (np. 200–300px max) dla wydajności,
      - ignorowanie pikseli przezroczystych (alpha poniżej progu),
      - ekstrakcja top N kolorów (np. 12) z filtrem “zbyt podobne”,
      - prezentacja wyników jako swatche + CopyButton (HEX),
      - feedback “Skopiowano” identyczny jak w istniejących narzędziach (reuse useTimeout / obecny pattern),
      - przycisk “Wyczyść” (czyści stan, revokuje URL),
      - brak uploadu na serwer.
    - Wymagania UX/UI:
      - użyć istniejących prymitywów tools: ToolSection, ToolInfo, ToolHelper, ToolAlert, ToolFieldRow (jeśli pasuje),
      - nie zmieniać globalnego design systemu,
      - styl i mikrocopy zgodne z resztą narzędzi,
      - a11y: opis pola upload, focus ring, obsługa klawiatury dla listy swatchy i przycisków kopiowania.
    - Proponowany podział na pliki (docelowy):
      - components/sections/tools/PaletteExtractor/PaletteExtractor.tsx (kontener toola, state orchestration)
      - components/sections/tools/PaletteExtractor/components/ImageDropzone.tsx (reuse istniejącego dropzone jeśli powstanie w TOOLS-003)
      - components/sections/tools/PaletteExtractor/components/PaletteSwatches.tsx (lista swatchy + copy)
      - components/sections/tools/PaletteExtractor/components/PaletteActions.tsx (clear/export)
      - lib/tools/image/loadImage.ts (shared: ładowanie obrazu do HTMLImageElement)
      - lib/tools/image/canvas.ts (shared: resize/draw + getImageData)
      - lib/tools/color/extractPalette.ts (algorytm ekstrakcji + filtrowanie podobieństwa)
      - lib/tools/color/colorFormat.ts (HEX/RGB konwersje — jeśli da się reuse z istniejących narzędzi)
    - Algorytm (do implementacji w extractPalette.ts):
      - wejście: ImageData, opcje { maxColors, bucketSize, alphaThreshold, minDistance }
      - bucketing: zaokrąglanie kanałów (np. co 16) → klucz r,g,b
      - zliczanie częstotliwości
      - sort malejąco po count
      - filtr “zbyt podobne”: porównanie odległości (RGB lub HSL) i odrzucanie kolorów poniżej minDistance
      - wynik: lista { hex, rgb, count }
    - Ryzyka / rzeczy do przypilnowania:
      - cleanup: ObjectURL zawsze revokowany (jak w innych toolach),
      - obsługa błędów: brak pliku / brak kontekstu canvas / błąd dekodowania obrazu,
      - wydajność: zawsze downscale, żadnego iterowania po pełnym 4000×3000,
      - bezpieczeństwo: brak dangerouslySetInnerHTML, brak zewnętrznych requestów.
    - Kryteria akceptacji:
      - 0 zmian w UI/UX istniejących narzędzi,
      - nowy tool działa w pełni client-side,
      - lint + typecheck przechodzą,
      - manual QA: upload PNG z transparentem → sensowna paleta, kopiowanie działa, clear działa, brak memory leak (URL revoke).
    - Po zakończeniu:
      - dopisać wpis w TOOLS_CATALOG.md,
      - dopisać krótkie podsumowanie w EXECUTION_PLAN.md,
      - oznaczyć status zadania ikoną (✅/🟡/❌).
- ❌ **[STYLES-001] Typografia: dopiąć globals-first**
  - Usunąć `Text` i `Heading` jeśli nie wnoszą wartości; ujednolicić użycia `.h*`, `.p`.
- ❌ **[STYLES-002] Kolory: tokenizacja i usunięcie raw hexów**
  - Kanon: `#080808`, `#5e5e5e`, `#2B2B2B`; usunąć raw hexy w plikach. Jeśli gdzieś jest jakiś inny kolor tekstu niż wskazane z klasy `text-light` lub `text-mid` lub `text-dark` lub `text-light` zaimplementój kolor który jest najbliższy to kolorów z tych klas. Celem jest wdrożenie we wszystkich tekstach wskazanych systemowych kolorów.
- ✅ **[SEO-001] Canonical: audyt i poprawki**
  - Zapewnić canonical wg zasad powyżej na wszystkich stronach. **Zrobione 2025-12-14**: wszystkie canonical URLs używają formatu `https://www.arteonagency.pl/`
- 🟡 **[SEO-002] OpenGraph: pokrycie i TODO**
  - Unikalne OG per typ strony; gdy fallback, dodać TODO w pliku strony.
- ✅ **[SEO-003] Schema.org: backlog**
  - Spisać możliwe schema i wskazać strony-kandydatów. **Zrobione 2025-12-14**
  - **Schema (propozycje) + strony-kandydaci:**
    - `Organization` + `WebSite` (global) — `app/layout.tsx`
    - `ProfessionalService` / `LocalBusiness` (kontakt / dane firmy) — `app/(pl)/kontakt/page.tsx`, `components/shared/Footer.tsx`
    - `Service` (strony usług) — `app/(pl)/uslugi/**/page.tsx` + helper `lib/serviceSchema.ts`
    - `ItemList` / `OfferCatalog` (huby/listy) — `/uslugi`, `/uslugi/marketing`, `/narzedzia`, `/realizacje`
    - `WebApplication` (pojedyncze narzędzia) — `app/(pl)/narzedzia/(tools)/*/page.tsx`
    - `BlogPosting` (artykuły) — `app/(pl)/edukacja/[category]/[slug]/page.tsx`
    - `CollectionPage` + `ItemList` (listy treści) — `/edukacja`, `/edukacja/[category]`, `/realizacje`, `/narzedzia`
    - `FAQPage` (sekcje FAQ) — komponent `components/ui/FaqPanels.tsx`
    - `BreadcrumbList` (okruszki) — komponent `components/sections/BreadCrumbs.tsx`
    - `AboutPage` (o firmie) — `/o-nas`
    - `PrivacyPolicyPage` (`/polityka-prywatnosci`) i `TermsOfServicePage` (`/regulamin`) — do rozważenia
- ✅ **[SEO-004] Schema.org: pokrycie + sanity-check**
  - Sprawdzić czy strony z listy [SEO-003] faktycznie emitują schema (JSON-LD lub microdata). **Zrobione 2025-12-14**
  - **Jest (OK):**
    - `app/layout.tsx` — `Organization` + `WebSite` (JSON-LD)
    - `/` — `Organization` (AggregateRating/Review) + `HowTo`
    - `/kontakt` — `ProfessionalService` + `BreadcrumbList` + `HowTo`
    - `/uslugi/**` (podstrony usług) — `Service` (`lib/serviceSchema.ts`) + breadcrumbs; często `FAQPage`
    - `/uslugi/marketing` — `ItemList` (marketing services)
    - `/uslugi/projekty-graficzne` — `ItemList` + `FAQPage`
    - `/narzedzia` — `ItemList` (lista `WebApplication`)
    - `/narzedzia/*` (podstrony narzędzi) — `WebApplication`
    - `/edukacja/[category]` — `CollectionPage` + `ItemList`
    - `/edukacja/[category]/[slug]` — `BlogPosting` (JSON-LD) + breadcrumbs; opcjonalnie `FAQPage`
    - `/realizacje/[slug]` — `Article` (JSON-LD) + breadcrumbs; opcjonalnie `FAQPage`
    - `/o-nas` — microdata `AboutPage`
    - `/polityka-prywatnosci`, `/regulamin` — microdata `Article`
    - `components/sections/BreadCrumbs.tsx` — `BreadcrumbList` (JSON-LD)
    - `components/ui/FaqPanels.tsx` — `FAQPage` (JSON-LD)
  - **Brak (do dodania wg SEO-003):**
    - `/uslugi` — brak `ItemList`/`OfferCatalog`
    - `/realizacje` — brak `CollectionPage`/`ItemList`
    - `/edukacja` — brak `CollectionPage`/`ItemList`
  - **Problemy / uwagi jakościowe (do poprawy):**
    - `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia` — `schema.url` i breadcrumb URL używają `/narzedzia/zmiana-rozmiaru-zdjecia` (mismatch vs canonical)
    - `/edukacja/[category]/[slug]` oraz `/realizacje/[slug]` — duplikacja `BreadcrumbList` (Breadcrumbs `includeJsonLd` + dodatkowy ręczny `<script>`)
    - `/kontakt` + global footer — możliwa duplikacja `ProfessionalService` (ten sam `@id` `#local` na wielu stronach)
    - `components/ui/FaqPanels.tsx` jest `use client` — `FAQPage` pojawia się dopiero po hydracji (warto zweryfikować w Rich Results Test)
    - W wielu miejscach JSON-LD jest ładowane przez `next/script` z `strategy='afterInteractive'` — do rozważenia inline `<script type='application/ld+json'>` w SSR
  - **Dodatkowe schema (kandydaci):**
    - `/realizacje/[slug]` — rozważyć `CaseStudy` zamiast `Article`
    - `/polityka-prywatnosci` — rozważyć `PrivacyPolicy` zamiast `Article`
    - `/regulamin` — rozważyć `TermsOfService` zamiast `Article`
- ✅ **[CLEANUP-001] `tool-pill*`: weryfikacja i ewentualne usunięcie martwego CSS**
  - **Zrobione 2025-12-14**:
    - Potwierdzono brak użyć `tool-pill*` w repo (w tym HTML/MD).
    - Usunięto `.tool-pill`, `.tool-pill-inactive`, `.tool-pill-active` z `app/globals.css`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

---

## Artykuły (SEO) — priorytety + zasady

Źródło tematów: `BLOG_IDEAS_300.md` (numeracja 1–300).

### Jak wybieramy „pierwsze do napisania” (bez zgadywania)

- **Popularność / popyt**: tematy, które mają szeroki i powtarzalny popyt (zwykle: audyt SEO, meta title, robots.txt, przekierowania, Core Web Vitals, Google Business Profile).
- **Intencja**: preferujemy tematy `hybrydowa` lub blisko decyzji (czyli naturalnie prowadzące do konsultacji/audytu/wdrożenia).
- **ROI dla Arteon**: tematy, które da się sensownie podlinkować do usług (audyt SEO, optymalizacja, pozycjonowanie, strony/sklepy, tworzenie treści).
- **Leverage narzędzi**: gdy temat ma naturalny „bridge” do narzędzia (`/narzedzia`), rośnie szansa na szybki ruch + powracających użytkowników.
- **Łatwość realizacji**: na start wybieramy tematy, które nie wymagają danych klientów ani case’ów „z liczbami”.

### Priorytet 1A (pierwsze artykuły) — SEO core + najwyższy intent

- `51` — Audyt SEO: co dokładnie sprawdzamy (technika, treść, linki) i dlaczego
- `56` — Optymalizacja SEO vs pozycjonowanie: czym się różnią i kiedy potrzebujesz której usługi
- `89` — SEO techniczne dla małych firm: 15 rzeczy, które sprawdzamy w pierwszej kolejności
- `97` — Strona nie rośnie w Google: 7 najczęstszych przyczyn i jak je sprawdzić
- `63` — Jak pisać meta title, które zwiększa CTR (bez clickbaitu) — 12 szablonów
- `70` — Robots.txt: najczęstsze błędy, przez które strona znika z Google
- `71` — Noindex, canonical, redirect: jak nie zrobić sobie „niewidzialnej” strony
- `72` — Przekierowania 301 po zmianie URL: jak to zrobić bez utraty ruchu (i jak testować)
- `90` — Core Web Vitals: jak interpretować LCP/INP/CLS i które poprawki są najtańsze
- `67` — Linkowanie wewnętrzne: proste zasady, które pomagają Google i użytkownikom

### Priorytet 1B (następne po core) — local SEO + narzędzia (szybki ruch)

- `83` — Google Business Profile: 20 ustawień, które realnie wpływają na wyświetlenia
- `84` — Local Pack (mapy Google): jak zwiększyć szansę na top 3 w Twoim mieście
- `85` — NAP (nazwa-adres-telefon): jak spójność danych wpływa na SEO lokalne
- `86` — Opinie klientów a SEO: jak prosić o opinie i jak na nie odpowiadać (szablony)
- `87` — Strony lokalizacji (miasto + usługa): kiedy to działa, a kiedy grozi spamem
- `65` — Dlaczego liczy się szerokość meta title w pikselach, a nie tylko znaki
- `66` — Jak używać licznika meta title/description: workflow dla strony i bloga
- `81` — Optymalizacja zdjęć przed wrzuceniem na stronę: checklista w 5 minut
- `27` — WebP vs AVIF: kiedy warto przejść na AVIF, a kiedy WebP wystarczy?
- `69` — Sitemap.xml vs mapa strony dla użytkownika: co jest czym i po co potrzebujesz obu

### Priorytet 2 (po zbudowaniu fundamentu) — e-commerce SEO + pomiar

- `107` — Karta produktu: 15 elementów, które zwiększają konwersję bez obniżania ceny
- `126` — SEO dla sklepu: co powinno być na stronie kategorii, żeby rankowała (bez lania wody)
- `127` — SEO dla kart produktu: title, opis, dane strukturalne, opinie — checklista
- `129` — Duplikacja w sklepach: warianty, filtry i parametry URL — jak nie zrobić chaosu
- `136` — Migracja sklepu (zmiana platformy): jak zaplanować przekierowania i zachować ruch
- `92` — GA4, Meta Pixel i inne tagi: jak wdrożyć, żeby nie spowolnić strony
- `93` — UTM-y w praktyce: jak mierzyć, skąd przychodzą leady (i nie robić chaosu)
- `259` — Tracking konwersji: co jest „konwersją” dla firmy usługowej (formularz, telefon, mail)
- `260` — GTM vs wtyczki vs kod: jak wdrażać tagi marketingowe bez psucia performance
- `261` — Consent Mode i cookie banner: jak wpływa na pomiar kampanii (bez straszenia)

### Definition of Done dla artykułu (żeby SEO było powtarzalne)

- Artykuł ma jasno określoną **intencję** (informacyjna / hybrydowa) i pasuje do etapu decyzji użytkownika.
- W treści są min. **2–4 linki wewnętrzne**:
  - do powiązanej usługi,
  - do 1–2 artykułów wspierających z tego samego klastra,
  - opcjonalnie: do narzędzia, jeśli temat jest „tool-adjacent”.
- Jest sekcja „najczęstsze błędy” + krótka checklista (łatwa do zacytowania i linkowania).
- Wdrożone podstawowe elementy E-E-A-T: autor/źródła/aktualizacja (bez lania wody).

---
