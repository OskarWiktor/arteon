# Arteon - Refactor Master Plan (single source of truth)

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
- `HOOKS_CATALOG.md` - opis wszystkich hooków i utilis i lib,
- `TOOLS_CATALOG.md` - opis wszystkich narzędzi,
- `PROJECTS_CATALOG.md` - opis wszystkich realizacji / projektów firmowych,
- `PAGES_CATALOG.md` - opis wszystkich stron,
- `BLOG_CATALOG.md` - opis wszystkich artykułów na blogu,

Legenda statusów:

- ✅ zrobione
- 🟡 w toku / częściowo
- ❌ nie zrobione

Ostatnia weryfikacja statusów w kodzie: **2025-12-15**

## Zasady ogólne (zawsze)

- Refaktory nie mają zmieniać UI/UX ani treści.
- Na etapie „porządkowania” zachowujemy klasy Tailwinda 1:1 (chyba że zadanie mówi inaczej).
- Canonical: **bezwzględne (absolute)** i zawsze na `https://www.arteonagency.pl`.
- OpenGraph: **unikalne per typ strony**; gdy fallback, dodajemy komentarz TODO w pliku strony.
- Typografia: **globals-first** (bazujemy na `.h*` i `.p` / globalnych regułach), a wyjątki rozwiązujemy przez klasy.
- Kolory tekstu: wymuszamy użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do `Badge` (jeden komponent + warianty); `Tag` docelowo nie istnieje.
- `Button`: warianty „jednorazowe” nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`.
- `Tooltip`: zostaje (jedyny wyjątek - może być chwilowo nieużywany).
- Content renderer: wspólny `HTMLContent` + wspólny `RenderBlocks` (warianty dla typów danych).
- Multi-domain/multi-language: w planie na później; domena determinuje język dla wybranych wspólnych komponentów (np. tools).
- Nowe strony w grupach „Usługi”, „Realizacje”, „O nas”, „Edukacja” i „Narzędzia” po utworzeniu muszą być automatycznie dodawane do wszystkich wariantów nawigacji (desktop + mobile, w tym dropdowny/submenu).
- po zakończeniu zadania:
  - pod zadaniem zapisz co zostało zrobione oraz dodaj odpowiednią ikonę statusu (✅/🟡/❌)
  - jeśli zadanie nie jest z grupy `AUDIT-*`: przenieś wykonane zadanie do `DONE_TASKS.md` (z datą i podsumowaniem); najnowsze wpisy umieszczaj najwyżej pod daną datą; nowe daty twórz na górze pliku
  - jeśli zadanie jest z grupy `AUDIT-*`: zadanie zawsze zostaje w `TASKS.md`, a do `DONE_TASKS.md` dodaj tylko wpis z zakresem wykonanej pracy (np. co sprawdzono + jakie zadania/pomysły dopisano)
  - zaktualizuj odpowiedni katalog z danymi projektu (`COMPONENTS_CATALOG.md`, `HOOKS_CATALOG.md`, `TOOLS_CATALOG.md`, `PROJECTS_CATALOG.md`, `PAGES_CATALOG.md`)
- każdy komponent i cały kod powinien być zgodny z najlepszymi praktykami Next
- przy tworzeniu nowych hooków lub komponentów sprawdź raport mówiący o tych które już są, jeśli są już podobne to ich użyj lub stwórz nowy wariant / propsy (bez require), które będą przydatne
- nie zmieniaj wyglądu, treści ani funkcjonalności, chyba że wskazano inaczej
- po zmianie, modyfikacji lub dodaniu nowego komponentu, hooku lub narzędzia opisz co się zmieniło w odpowiednim katalogu
- nie wprowadzaj w `robots.tsx` globalnej blokady indeksacji całej witryny (blokowanie `/` jest zabronione)
- ikony mają zawsze mieć kolor `text-slate-700`
- nigdy nie zmieniaj numerów zadań

### Instrukcja przed każdym zadaniem (obowiązkowo)

- Jeśli w trakcie zadania edytujesz/refaktorujesz plik tak, że staje się pusty (0B / tylko whitespace / tymczasowy „barrel” bez wartości), usuń go od razu i popraw wszystkie importy.

  **KRYTYCZNE: NIE MODYFIKOWAĆ plików konfiguracji SEO (sitemap/robots)**

  - Pliki chronione:
    - `next-sitemap.config.cjs` - konfiguracja generowania sitemap i robots.txt
    - `public/robots.txt` - plik robots (generowany automatycznie przez `next-sitemap`)
  - Zasady:
    - **NIE EDYTOWAĆ** tych plików bez wyraźnego polecenia użytkownika.
    - **NIE DODAWAĆ** dodatkowej logiki skanowania stron w `additionalPaths` (strony statyczne są już obsługiwane przez `transform`).
    - `additionalPaths` służy WYŁĄCZNIE do dynamicznych ścieżek (projekty z `projects.json`, kategorie/artykuły edukacji).
    - Każda modyfikacja tych plików wymaga pełnej weryfikacji sitemapy po `npm run build`.
  - Uzasadnienie:
    - Historia: duplikacje w sitemapie spowodowane przez podwójne skanowanie plików (raz w `transform`, drugi raz w `additionalPaths`).
    - Sitemap jest krytyczna dla SEO - błędy mogą wpłynąć na indeksację całej witryny.

---

## Definition of Done (dla każdego zadania)

Dla każdego zadania:

- Domyślnie: `npm run lint` i `npm run build` przechodzą.
- Weryfikacji nie wykonujemy (nie odpalamy `npm run lint` ani `npm run build`) dla:
  - zadań z grupy **COPY** (`COPY-*`)
  - zadań z grupy **AUDIT** (`AUDIT-*`)
  - zadań content-only / docs-only, które w treści mają wpis `Weryfikacja: nie jest wymagana`
- Zachowana dostępność (focus ring, aria, keyboard).

---

## Zadania

Zrobione zadania: `DONE_TASKS.md`.

- 🟡 **[AUDIT-001] Repo: audyt treści (literówki, ortografia, interpunkcja, spójność copy)**

  - Cel: wychwycić błędy językowe i niespójności w treściach (strony/oferta/blog/realizacje/narzędzia).
  - Zakres (minimum):
    - `app/(pl)/**` (teksty na stronach)
    - `data/pl/blog.json`, `data/pl/projects.json`
    - komponenty zawierające dłuższe copy (sekcje, narzędzia, FAQ)
  - Raportowanie:
    - Jeśli wykryjesz problem — dopisz osobne zadanie w `TASKS.md` (np. `COPY-*`, `CLEANUP-*`, `PROJECT-*`) z kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu (co sprawdzono + jakie zadania dopisano).
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- 🟡 **[AUDIT-002] Repo: audyt duplikacji logiki (hooks/utils/komponenty)**

  - Cel: znaleźć powtarzalne wzorce w kodzie i zaproponować re-use (bez zmiany UI/UX).
  - Zakres (przykłady do sprawdzenia):
    - upload/drag&drop, kopiowanie, timeouty, event listenery, cleanup (np. blob URLs)
    - wspólne prymitywy dla narzędzi (np. dropzone, sekcje, alerty)
  - Raportowanie:
    - Każdą propozycję zapisz jako osobne zadanie (np. `TOOLS-*`, `CLEANUP-*`) z:
      - nazwą planowanego hooka/utils/komponentu,
      - miejscami użycia (konkretne pliki),
      - planem migracji (bez zmiany UI/UX).
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

  - **Zrobione 2025-12-15**:
    - Skan duplikacji: narzędzia (`components/sections/tools/*`), dropzone (`hooks/useFileDropzone.ts`, `components/ui/tools/ToolFileDropzone.tsx`), timery/copy (`hooks/useTimeout.ts`, `hooks/useCopyToClipboard.ts`).
    - Dodano zadania: `TOOLS-016`, `CLEANUP-009`, `CLEANUP-010`.

- 🟡 **[AUDIT-003] Repo: audyt cleanup (puste pliki, martwe exporty, nieużywany kod/warianty)**

  - Cel: utrzymać repo „lean” i bez śmieci (bez zmian w UI/UX).
  - Zakres:
    - puste pliki/komponenty, martwe exporty, nieużywany kod/warianty (zostaw `Tooltip`, nawet jeśli chwilowo nieużywany)
  - Raportowanie:
    - Jeśli wykryjesz problem — dopisz osobne zadanie `CLEANUP-*` z listą plików i kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- 🟡 **[AUDIT-004] Repo: audyt SEO sanity-check (canonical/OG/schema/robots/sitemap)**

  - Cel: wychwycić regresje SEO i niespójności w metadanych.
  - Zakres (kluczowe strony wg `PAGES_CATALOG.md`):
    - Canonical: absolute i zawsze na `https://www.arteonagency.pl`.
    - OpenGraph: URL absolutne; unikalne per typ strony.
    - Schema.org: URL absolute; brak duplikacji encji.
    - Robots + sitemap: bez regresji (nie wprowadzać globalnej blokady `/` w `robots.tsx`).
  - Raportowanie:
    - Jeśli wykryjesz problem — dopisz osobne zadanie (np. `SEO-*`) z konkretnymi plikami i kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- 🟡 **[AUDIT-005] Repo: audyt performance sanity-check (client components/rerender/obrazy)**

  - Cel: wychwycić proste, wysokiego ROI problemy wydajnościowe.
  - Zakres:
    - nadmiarowe `use client`, brak memoization, niepotrzebne re-render
    - obrazy: duże assety, brak `alt`, brak optymalizacji/rozsądnych rozmiarów
  - Raportowanie:
    - Jeśli wykryjesz problem — dopisz osobne zadanie (np. `CLEANUP-*`, `TOOLS-*`) z listą plików i planem zmian.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

  - **Zrobione 2025-12-16**:
    - Skan `public/assets/**` pod kątem największych obrazów (bg/blog/projects/tools).
    - Skan kodu pod perf-smells: `quality={100}` (`components/ui/ProjectCard.tsx`), `bg-fixed` (`components/sections/HeroBanner.tsx`, `components/sections/CTABanner.tsx`), client-only `CodeBlock`.
    - Dodano follow-up: `PERF-001`, `PERF-003`.

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły”**

  - Cel: proponować spójny rozwój serwisu (rozbudowa istniejących obszarów: usługi/realizacje/blog/narzędzia).
  - Zasada: propozycje zapisuj jako osobne zadania w sekcji **„Pomysły”** na dole pliku.
  - ID pomysłu: `IDEA-###` (np. `IDEA-001`).

  - Format każdego pomysłu (wymagane):
    - cel i uzasadnienie (dlaczego to ma sens dla Arteon)
    - konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - pliki i ścieżki (co najmniej: gdzie powstanie nowa strona w `app/` i jakie komponenty/dane wykorzysta)
    - SEO: proponowany URL/slug + `metadata.title`/`description` + OG image + schema (jeśli dotyczy)
    - kryteria akceptacji (konkretne, mierzalne)
  - Raportowanie:
    - Do `DONE_TASKS.md` dodaj wpis: ile pomysłów dodano + ID dodanych pomysłów.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

  - **Zrobione 2025-12-16**:

    - Dodano pomysły ulepszeń dla istniejących narzędzi: `IDEA-011`-`IDEA-018`.

  - **Zrobione 2025-12-17**:
    - Audyt sekcji `/o-nas` + propozycje rozbudowy: `IDEA-019`-`IDEA-024`.

- ❌ **[PERF-001] Assets: odchudzić największe obrazy w `public/assets/**` (bez zmiany wyglądu)\*\*

  - Pliki (największe):
    - `public/assets/projects/arteon-a-msc2.webp` (~791KB)
    - `public/assets/bg/abstract-bg1.webp` (~344KB)
    - `public/assets/blog/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp.webp` (~312KB)
    - `public/assets/blog/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow.webp` (~299KB)
  - Kryteria akceptacji:
    - Rozmiary plików są mniejsze (w szczególności tła wykorzystywane jako CSS background).
    - Brak broken image paths.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[PERF-003] Edukacja: `CodeBlock` jako Server Component (JS tylko dla kopiowania)**

  - Pliki:
    - `components/ui/CodeBlock.tsx`
    - `components/ui/buttons/CopyButton.tsx`
  - Zakres:
    - Usunąć `'use client'` z `CodeBlock` i zostawić client boundary tylko dla `CopyButton`.
  - Kryteria akceptacji:
    - Brak zmian w UI/UX.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[PROJECT-001] Realizacje: uzupełnić brakujące `seo.title` i `seo.description`**

  - Plik: `data/pl/projects.json`
  - Slugi (brak `seo.title` i `seo.description`):
    - `blog-sportowy-pilka-nozna-pl`
  - Zakres:
    - Dodać `seo.title` i `seo.description` (canonical już jest).
    - Unikalność: `seo.title` nie może duplikować innych realizacji.
    - Długości (best practice):
      - `seo.title`: ~35-65 znaków (brand na końcu, np. `| Arteon`).
      - `seo.description`: ~100-165 znaków (1-2 zdania, konkret: co zrobiono + dla kogo).
  - Kryteria akceptacji:
    - `npm run lint` i `npm run build` przechodzą.
    - `/realizacje/blog-sportowy-pilka-nozna-pl` ma `title` i `meta name="description"` (nie tylko canonical).

- ❌ **[PROJECT-002] Realizacje: dodać `contentBlocks` (galerie) + dopiąć ALT dla projektów bez galerii**

  - Pliki:
    - `data/pl/projects.json`
    - `public/assets/projects/**` (obrazy)
  - Slugi bez `contentBlocks` (dodać galerie):
    - `strona-internetowa-dla-camper-albania`
    - `strona-dla-psychologa-msc-psychotherapy`
    - `blog-sportowy-pilka-nozna-pl`
    - `sklep-dla-firmy-odziezowej-trilllizo`
    - `meridol-accessibility`
    - `elmex-accessibility`
    - `sanex-accessibility`
    - `sanex`
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - Slugi z galerią „1 obraz” (rozważyć rozbudowę galerii do min. 2-4, zależnie od typu):
    - `szablony-postow-na-media-spolecznosciowe-dla-psychologa-msc`
    - `bon-walentynkowy-dla-salonu-kosmetycznego-kasia`
    - `papier-firmowy-dla-kancelarii-adwokackiej-lux-nova`
    - `katalog-produktow-restoquality`
    - `wizytowka-dla-spa-talia`
    - `wizytowki-dla-gastronomii-restoquality`
  - Zakres:
    - Dodać w `contentBlocks` realne screeny/mockupy:
      - web/sklep: min. 6 obrazów (home + kluczowe sekcje + mobile).
      - WCAG: min. 4 obrazy „przed/po” (focus states, formularze, komponenty krytyczne).
      - lokalizacje: min. 3 obrazy różnic w treści/UI (różne markety/language selectors).
    - Każdy blok `image`/`imageText` ma unikalny, opisowy `alt` (bez keyword stuffing).
  - Kryteria akceptacji:
    - Brak broken image paths na stronach z listy.
    - `lint` + `typecheck`/`build` przechodzą.

- ❌ **[PROJECT-003] Realizacje: dodać `outcomes[]` (efekty / metryki) dla projektów bez wyników**

  - Plik: `data/pl/projects.json`
  - Slugi bez `outcomes` (uzupełnić):
    - `plakat-sezonowy-dla-kawiarni-brewerynka`
    - `karta-koktajli-dla-baru-nocturna`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group`
    - `szablony-postow-na-media-spolecznosciowe-dla-psychologa-msc`
    - `bon-walentynkowy-dla-salonu-kosmetycznego-kasia`
    - `katalog-produktow-restoquality`
    - `wizytowka-dla-spa-talia`
    - `blog-sportowy-pilka-nozna-pl`
    - `sklep-dla-firmy-odziezowej-trilllizo`
    - `meridol-accessibility`
    - `wizytowki-dla-gastronomii-restoquality`
    - `elmex-accessibility`
    - `sanex-accessibility`
    - `sanex`
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - Zakres:
    - Dodać min. 2 wpisy `outcomes` na projekt (format: `{ value, label, note? }`).
    - Web/sklep/WCAG: przynajmniej 1 outcome oparty o weryfikowalną metrykę (np. Lighthouse/PSI/QA checklist) lub konkretny, mierzalny fakt (np. liczba rynków/landingów).
  - Kryteria akceptacji:
    - Każdy slug z listy ma min. 2 `outcomes`.
    - Brak placeholderów typu „test”.

- ❌ **[PROJECT-004] Realizacje: dodać `faq[]` dla projektów bez FAQ (long-tail + intent)**

  - Plik: `data/pl/projects.json`
  - Slugi bez `faq` (uzupełnić):
    - `plakat-sezonowy-dla-kawiarni-brewerynka`
    - `karta-koktajli-dla-baru-nocturna`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group`
    - `szablony-postow-na-media-spolecznosciowe-dla-psychologa-msc`
    - `bon-walentynkowy-dla-salonu-kosmetycznego-kasia`
    - `strona-internetowa-dla-camper-albania`
    - `blog-sportowy-pilka-nozna-pl`
    - `sklep-dla-firmy-odziezowej-trilllizo`
    - `meridol-accessibility`
    - `elmex-accessibility`
    - `sanex-accessibility`
    - `sanex`
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - Zakres:
    - Dodać min. 4 pytania na projekt.
    - Dopasować FAQ do typu realizacji (web/sklep/WCAG/analityka/druk), bez kopiowania odpowiedzi 1:1 między realizacjami.
  - Kryteria akceptacji:
    - Każdy slug z listy ma `faq.length >= 4`.
    - Pytania i odpowiedzi są unikalne i konkretne (bez lania wody).

- ❌ **[PROJECT-006] Realizacje: komplet danych case study (client/deliverables/stack/process/task) + higiena treści**

  - Plik: `data/pl/projects.json`
  - `client` (uzupełnić min. `name` + `sector`):
    - `katalog-produktow-restoquality`
    - `blog-sportowy-pilka-nozna-pl`
    - `sklep-dla-firmy-odziezowej-trilllizo`
    - `meridol-accessibility`
    - `wizytowki-dla-gastronomii-restoquality`
    - `elmex-accessibility`
    - `sanex-accessibility`
    - `sanex`
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - `deliverables` (uzupełnić):
    - `strona-internetowa-dla-camper-albania`
    - `meridol-accessibility`
    - `elmex-accessibility`
    - `sanex-accessibility`
    - `sanex`
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - `stack` (uzupełnić jako technologie/narzędzia, nie zakres prac):
    - `sklep-dla-firmy-odziezowej-trilllizo`
    - `meridol-accessibility`
    - `elmex-accessibility`
    - `sanex-accessibility`
    - `sanex`
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - `process_steps` (uzupełnić):
    - `blog-sportowy-pilka-nozna-pl`
    - `sanex`
  - `task` (uzupełnić / naprawić):
    - `colgate` (linia 972): usunąć placeholder `"task": "test"` i dodać realny opis.
  - ✅ Higiena treści (przeniesione do `DONE_TASKS.md`)
  - Kryteria akceptacji:
    - Powyższe pola są uzupełnione i spójne semantycznie.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-017] Karuzela: nowy wariant karty dla stron narzędzi (tools)**
  - Cel:
    - Dodać wariant karty w karuzeli, który pozwoli wyświetlać strony narzędzi (`/narzedzia/...`) w karuzeli.
  - Pliki:
    - `components/ui/carousel/CarouselCard.tsx`
    - (jeśli potrzebne) `components/shared/navigation-data/pl.ts` (re-use `TOOLS_SECTIONS_PL` jako lista narzędzi)
  - Zakres:
    - Dodać `variant="tool"` do `CarouselCard` (bez regresji dla `project`/`article`/`testimonial`).
    - Ustalić minimalny zestaw danych wejściowych do renderowania karty narzędzia w karuzeli (np. `title`, `href`, opcjonalnie `icon`/`image`).
    - Dodać użycie nowego wariantu w co najmniej jednym miejscu (żeby nie powstał martwy wariant).
  - Kryteria akceptacji:
    - Karty narzędzi w karuzeli prowadzą do poprawnych URL-i `/narzedzia/...`.
    - Brak regresji UI/UX istniejących karuzel.
    - `npm run lint` i `npm run build` przechodzą.

---

## Pomysły

Backlog rozwoju generowany przez `AUDIT-006`. Dopisuj pomysły jako osobne zadania `IDEA-*`.

Wymagany format (kopiuj i uzupełnij):

- ❌ **[IDEA-XXX] [Tytuł pomysłu]**

  - Cel i uzasadnienie:
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
  - Pliki i ścieżki:
  - SEO:
    - URL/slug:
    - `metadata.title`:
    - `metadata.description`:
    - OG image:
    - Schema:
  - Kryteria akceptacji:
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-019] O nas: „Jak pracujemy” — podstrona procesu współpracy (krok po kroku)**

  - Cel i uzasadnienie:
    - Strona domykająca decyzję: klarowny proces + mniejsza niepewność przed kontaktem.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowa podstrona z etapami (brief → plan → realizacja → testy → publikacja → wsparcie) + deliverables.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/jak-pracujemy/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/jak-pracujemy`
    - `metadata.title`: `Jak pracujemy — proces współpracy krok po kroku | Arteon`
    - `metadata.description`: `Zobacz, jak wygląda współpraca z Arteon: etapy, komunikacja i deliverables. Jasny proces bez chaosu.`
    - OG image: `public/assets/og/o-nas-jak-pracujemy.webp`
    - Schema: `HowTo` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 6 etapów + sekcja deliverables.
    - Strona podpięta do submenu „O nas” (desktop + mobile).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-020] O nas: „Zespół” — podstrona kompetencji i ról (bez „ściany CV”)**

  - Cel i uzasadnienie:
    - Wzmocnić zaufanie i ułatwić linkowanie z ofert/FAQ do konkretnej podstrony.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Karty ról/kompetencji + „jak dobieramy zespół do projektu”.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/zespol/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/zespol`
    - `metadata.title`: `Zespół Arteon — strategia, design, wdrożenie i SEO`
    - `metadata.description`: `Poznaj kompetencje stojące za projektami Arteon i zobacz, jak dobieramy zespół do celu i zakresu.`
    - OG image: `public/assets/og/o-nas-zespol.webp`
    - Schema: `Organization` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 4 role/obszary kompetencji opisane konkretnie.
    - Strona podpięta do submenu „O nas” (desktop + mobile).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-021] O nas: „Standardy jakości” — WCAG, SEO, performance i bezpieczeństwo (w jednym miejscu)**

  - Cel i uzasadnienie:
    - Strona referencyjna do pytań „czy robicie WCAG/SEO/szybkość/bezpieczeństwo?”.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Sekcje: WCAG, SEO techniczne, CWV, bezpieczeństwo, analityka + linki do usług.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/standardy-jakosci/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/standardy-jakosci`
    - `metadata.title`: `Standardy jakości — WCAG, SEO, performance i bezpieczeństwo | Arteon`
    - `metadata.description`: `Jak dbamy o jakość: dostępność WCAG, SEO techniczne, Core Web Vitals, bezpieczeństwo i analityka.`
    - OG image: `public/assets/og/o-nas-standardy-jakosci.webp`
    - Schema: `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 5 sekcji, każda z konkretnymi punktami „co robimy”.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-022] O nas: „Dlaczego Arteon” — podstrona na obiekcje (dla niezdecydowanych)**

  - Cel i uzasadnienie:
    - Domykać decyzję: zebrać „dla kogo / dla kogo nie”, rozliczenia, ryzyko i co po wdrożeniu.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Bloki obiekcji + CTA do realizacji i kontaktu.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/dlaczego-arteon/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/dlaczego-arteon`
    - `metadata.title`: `Dlaczego Arteon — jak zmniejszamy ryzyko współpracy`
    - `metadata.description`: `Zobacz, jak pracujemy, jak rozliczamy projekty i jak dbamy o przewidywalność współpracy.`
    - OG image: `public/assets/og/o-nas-dlaczego-arteon.webp`
    - Schema: `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 8 konkretnych odpowiedzi/tez (bez ogólników).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-023] O nas: „Materiały do startu” — podstrona briefu i listy rzeczy do przygotowania**

  - Cel i uzasadnienie:
    - Skrócić czas startu projektu i poprawić jakość zapytań.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Lista: cele/oferta/treści/zdjęcia/inspiracje/dostępy/analityka + CTA do `/kontakt`.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/materialy-do-startu/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/materialy-do-startu`
    - `metadata.title`: `Materiały do strony — lista na start | Arteon`
    - `metadata.description`: `Zobacz listę materiałów, które przyspieszają wycenę i realizację: cele, treści, zdjęcia, inspiracje i dostępy.`
    - OG image: `public/assets/og/o-nas-materialy-do-startu.webp`
    - Schema: `HowTo` lub `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 12 punktów + wariant minimum na start.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-024] O nas: „Partnerzy” — hub dla współpracy (klienci vs partnerzy)**

  - Cel i uzasadnienie:
    - Uporządkować komunikację: osobna ścieżka dla partnerów + linkowanie do `/o-nas/dolacz-do-sieci`.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Hub współpracy + FAQ dla partnerów.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/partnerzy/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/partnerzy`
    - `metadata.title`: `Partnerzy Arteon — współpraca projektowa`
    - `metadata.description`: `Jak wygląda współpraca partnerska z Arteon: zasady, komunikacja, rozliczenia i kiedy wracamy do siebie.`
    - OG image: `public/assets/og/o-nas-partnerzy.webp`
    - Schema: `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Strona jasno rozróżnia „dla klientów” vs „dla partnerów” i prowadzi do właściwego CTA.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-005] Kadrowanie i zmiana rozmiaru zdjęcia: obrót/flip + poprawna orientacja EXIF**

  - Cel i uzasadnienie:
    - Zdjęcia z telefonu często mają orientację EXIF i w edytorze wyglądają na obrócone — to psuje kadrowanie i eksport.
    - Dodać brakujące podstawy edycji (obrót/odbicie) bez przenoszenia użytkownika do zewnętrznych narzędzi.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Przy imporcie poprawnie uwzględniać `EXIF Orientation` (podgląd = realny kadr).
    - Dodać akcje: `Obróć 90° w lewo/prawo`, `Odbij w poziomie/pionie`.
    - Ująć transformacje w eksporcie (`exportCroppedImage`) tak, aby wynik był zgodny z preview.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`
    - `components/sections/tools/ImageResizeTool.tsx`
    - `components/sections/tools/ImageResizeTool/exportCroppedImage.ts`
    - (opcjonalnie nowe) `lib/tools/image/exifOrientation.ts` (odczyt orientacji)
  - SEO:
    - URL/slug: `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`
    - `metadata.title`: `Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund`
    - `metadata.description`: `Darmowe narzędzie do zmiany kadru i rozmiaru zdjęcia. Wybierz gotowy format i przygotuj zdjęcie pod media społecznościowe lub stronę. Bez limitu kreacji.`
    - OG image: `public/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp`
    - Schema: `WebApplication`
  - Kryteria akceptacji:
    - Zdjęcia z orientacją EXIF (np. portrait z iPhone) są wyświetlane poprawnie bez ręcznego obracania.
    - Eksport uwzględnia obrót/flip i jest w 100% zgodny z podglądem.
    - Brak regresji w ograniczeniach formatu (np. `circle` wymusza alpha → JPG niedostępny).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-007] Licznik meta title/description: podgląd SERP desktop/mobile + wzory do skopiowania**

  - Cel i uzasadnienie:
    - W Google długość title/description realnie zależy od urządzenia — przełącznik desktop/mobile zwiększy użyteczność.
    - Wzory do skopiowania skracają czas pracy i podnoszą jakość meta (CTR) bez „zgadywania”.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Dodać przełącznik urządzenia (desktop/mobile) z podglądem SERP.
    - Dodać wzory do skopiowania (np. 3-5) z automatycznym wypełnieniem danych.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/licznik-meta-title-i-description/page.tsx`
    - `components/sections/tools/MetaTitleDescriptionTool.tsx`
    - (opcjonalnie nowe) `lib/tools/seo/*` (limity/formatowanie podglądu)
  - SEO:
    - URL/slug: `/narzedzia/licznik-meta-title-i-description`
    - `metadata.title`: `Licznik długości meta title i description`
    - `metadata.description`: `Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu`
    - OG image: `public/assets/tools/narzedzia-licznik-meta-title-i-description.webp`
    - Schema: `WebApplication` (`applicationCategory: "SEOApplication"`)
  - Kryteria akceptacji:
    - Przełącznik urządzenia zmienia limity i realnie wpływa na statusy (za krótkie/dobre/za długie).
    - Wzory generują poprawny tekst bez placeholderów (lub jasno oznaczają pola do uzupełnienia).
    - Brak regresji w istniejących analizach (znaki/słowa/piksele).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-008] Tester kontrastu WCAG: obsługa HSL/alpha + propozycja koloru spełniającego AA/AAA**

  - Cel i uzasadnienie:

    - Projektanci częściej pracują na HSL, a w UI realnie występują też kolory z alpha (RGBA) — wsparcie formatów zmniejsza tarcie.
    - Propozycja „najbliższego” koloru spełniającego AA/AAA zwiększa wartość narzędzia (nie tylko diagnoza, ale i rozwiązanie).

  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Rozszerzyć parser o `hsl()` / `hsla()`.
    - Jeśli kolor ma alpha (`rgba/hsla`) liczyć kontrast po kompozycji na tle.
    - Dodać akcję `Dopasuj`, która proponuje wariant koloru spełniający docelowy poziom (np. AA dla tekstu zwykłego) i pozwala skopiować wynik.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
    - `components/sections/tools/WcagContrastChecker.tsx`
    - `lib/tools/color/contrast.ts`
    - `lib/tools/color/convert.ts`
  - SEO:
    - URL/slug: `/narzedzia/tester-kontrastu-kolorow-wcag`
    - `metadata.title`: `Tester kontrastu kolorów WCAG 2.1 AA i AAA`
    - `metadata.description`: `Sprawdź kontrast kolorów zgodnie z wytycznymi WCAG 2.1. Wpisz kolory, zobacz czy spełniasz współczynnik kontrastu na poziomie AA i AAA`
    - OG image: `public/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp`
    - Schema: `WebApplication`
  - Kryteria akceptacji:
    - Narzędzie poprawnie przyjmuje: `#rgb/#rrggbb`, `rgb()`, `rgba()`, `hsl()`, `hsla()`.
    - Dla kolorów z alpha kontrast jest liczony po kompozycji (brak mylących wyników).
    - Akcja `Dopasuj` generuje kolor, który spełnia wybrany próg i da się go skopiować jednym kliknięciem.
  - Weryfikacja:

    - `npm run lint`
    - `npm run build`

  - **Zrobione 2025-12-17**:
    - Dodano parsing `hsl()/hsla()` + uwzględniono alpha przez kompozycję w `getContrastRatio()`.
    - UI: bezpieczny color picker dla nie-HEX + selektor progu WCAG + akcja `Dopasuj` (podgląd, `Ustaw`, kopiowanie).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ❌ **[IDEA-009] Generator palet kolorów: eksport do CSS variables/Tailwind + kopiowanie całej palety**

  - Cel i uzasadnienie:

    - Użytkownik częściej potrzebuje „gotowego do wdrożenia” zestawu tokenów niż pojedynczego koloru.
    - Eksport skraca czas implementacji palety w UI/brandingu i spina narzędzie z codziennym workflow.

  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Dodać akcje `Kopiuj paletę` per grupa (np. monochromatyczna, analogiczna, itd.).
    - Dodać eksport w formatach: `CSS variables` (np. `--brand-...`) oraz snippet do `Tailwind`.
    - (Opcjonalnie) dodać ustawienie `prefix` (np. `brand`/`primary`) do nazw tokenów.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
    - `components/sections/tools/ColorPaletteGenerator.tsx`
    - `lib/tools/color/palette.ts`
    - (opcjonalnie nowe) `lib/tools/color/format.ts` (formatowanie exportów)
  - SEO:
    - URL/slug: `/narzedzia/generator-palet-kolorow-online`
    - `metadata.title`: `Generator palet kolorów online - system barw z jednego koloru`
    - `metadata.description`: `Wpisz jeden kolor i wygeneruj kompletne palety barw dla swojej identyfikacji wizualnej. Darmowe narzędzie bez logowania, limitu, reklam i opłat`
    - OG image: `public/assets/tools/narzedzia-generator-palet-kolorow-online.webp`
    - Schema: `WebApplication`
  - Kryteria akceptacji:
    - `Kopiuj paletę` generuje poprawny snippet (bez błędów składni) i działa dla każdej grupy.
    - Eksport działa w dwóch wariantach: CSS variables i Tailwind.
    - Brak regresji w istniejącym kopiowaniu pojedynczych kolorów.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-010] Generator palety kolorów z obrazu: wybór liczby kolorów + filtrowanie tła + formaty HEX/RGB/HSL**

  - Cel i uzasadnienie:
    - Dominujące kolory z obrazu bywają „za podobne” lub zawierają tło (biel/czerń) — kontrola jakości wyniku poprawia użyteczność.
    - Przełącznik formatów ułatwia pracę w design/dev (HEX/RGB/HSL).
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Dodać wybór liczby kolorów (np. `3/5/7/9`).
    - Dodać opcję filtrowania kolorów skrajnych (np. ignoruj „prawie białe” i „prawie czarne”).
    - Dodać przełącznik prezentacji i kopiowania: `HEX / RGB / HSL` + (opcjonalnie) eksport do `CSS variables`.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `components/sections/tools/PaletteExtractor.tsx`
    - `lib/tools/color/extractPalette.ts`
    - `lib/tools/color/convert.ts`
  - SEO:
    - URL/slug: `/narzedzia/generator-palety-kolorow-z-obrazu`
    - `metadata.title`: `Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia`
    - `metadata.description`: `Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.`
    - OG image: `public/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp`
    - Schema: `WebApplication`
  - Kryteria akceptacji:
    - Użytkownik może zmienić liczbę kolorów, a wynik aktualizuje się deterministycznie (dla tego samego obrazu i ustawień).
    - Filtrowanie tła działa i nie psuje wyniku dla obrazów o ciemnym/jasnym tle.
    - Prezentacja/kopiowanie działa dla HEX/RGB/HSL bez `NaN` i bez błędów walidacji.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-011] Generator stopki mailowej: instrukcje instalacji (Gmail/Outlook) + pobieranie HTML + walidacja URL**

  - Cel i uzasadnienie:

    - Największa bariera to nie wygenerowanie stopki, tylko poprawne wklejenie jej do klienta pocztowego.
    - Pobranie pliku `.html` ułatwia testy i przekazywanie stopki do działu IT/marketingu.

  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Dodać krótką sekcję `Jak wkleić stopkę` (Gmail / Outlook / Apple Mail) jako accordion lub tabs.
    - Dodać akcję `Pobierz HTML` (plik z gotową stopką).
    - Dodać walidację/warningi dla URL (np. brak `https://`, podejrzany protokół) bez blokowania generowania.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `components/sections/tools/EmailSignatureGenerator/sanitize.ts`
    - `lib/tools/download.ts`
  - SEO:
    - URL/slug: `/narzedzia/darmowy-generator-stopki-mailowej`
    - `metadata.title`: `Darmowy generator stopki mailowej HTML - bez limitu`
    - `metadata.description`: `Stwórz profesjonalną stopkę mailową HTML w kilka minut. Skorzystaj z naszego darmowego generator podpisu email, stwórz własny podpis i skopiuj gotowy kod`
    - OG image: `public/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp`
    - Schema: `WebApplication`
  - Kryteria akceptacji:
    - Sekcja instrukcji jest czytelna i pokrywa min. Gmail i Outlook (krok po kroku).
    - `Pobierz HTML` tworzy plik, który po otwarciu wygląda jak preview.
    - Narzędzie pokazuje ostrzeżenia dla niepoprawnych URL, ale nie crashuje i nie gubi danych.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

## Artykuły

### Instrukcje tworzenia artykułów (wnioski na podstawie tej listy tematów)

- **Cel serii**: zwiększać widoczność SEO ofert, domeny i narzędzi Arteon poprzez edukację w mentorskim tonie, bez żargonu (prowadź czytelnika do zrozumienia i działania, ale bez presji).
- **Docelowy czytelnik**: MŚP (usługi + e-commerce), często bez wiedzy technicznej. Tekst ma być zrozumiały bez znajomości SEO/UX, ale nie może być infantylny.
- **Ton**: konkretnie, spokojnie, bez korpo-języka i wodolejstwa. Każde pojęcie „z branży” wyjaśnij w 1-2 zdaniach i od razu pokaż zastosowanie.
- **Spójność z istniejącymi stronami ofert i narzędzi**:
  - Używaj podobnych typów sekcji i nagłówków jak na istniejących podstronach (np. „Co zyskujesz…”, „Na czym polega… i dlaczego działa?”, „Kiedy ma sens?”, „Proces”, „Jak mierzyć efekty?”, „Najczęstsze błędy”, „FAQ”, „Podsumowanie”).
  - Jeśli podajesz liczby/statystyki, dodaj źródło w formie linku (np. „(źródło)”) tak jak na stronach ofert.
- **Ton i rola autora**:
  - Występujesz jako mentor i przewodnik.
  - Pozycja komunikacyjna: „Jestem kilka kroków dalej, rozumiem proces i spokojnie przeprowadzę Cię przez decyzję.”
  - Nie popisujesz się wiedzą techniczną i nie „sprzedajesz się” w treści.
- **Styl językowy**:
  - Pełne, poprawne zdania (bez równoważników zdań).
  - Naturalny rytm (jak w dobrej rozmowie): spokojnie, rzeczowo, klarownie.
  - Bez slangu i kolokwializmów.
- **Narracja**:
  - Druga osoba liczby pojedynczej („Twoja firma”, „zyskujesz”, „widzisz efekt”).
- **Zakazane formy**:
  - Hasła marketingowe bez treści („kompleksowe rozwiązania”, „nowoczesne podejście”).
  - Żargon techniczny bez wyjaśnienia.
  - Clickbait.
- **Zasada benefit-first (kluczowa)**: każdą informację techniczną poprzedź korzyścią.
  - Schemat: co zyskujesz → dlaczego to ważne → jakim narzędziem jest to realizowane.
  - Przykład:
    - ❌ „Strona jest oparta o Next.js”
    - ✅ „Strona działa szybciej, jest stabilna i łatwa w rozwoju. Dlatego korzystamy z nowoczesnych technologii takich jak Next.js.”
- **Struktura**: w każdym artykule utrzymuj podobny układ:
  - TL;DR (3-6 punktów: najważniejsze wnioski)
  - Co to jest / kiedy ma sens (dla kogo)
  - Kroki / plan wdrożenia (kolejność działań)
  - Najczęstsze błędy + szybkie poprawki
  - Podsumowanie + CTA
- **Zakaz checklist**: nie twórz w artykułach sekcji „Checklista” ani list „do odhaczania”. Jeśli chcesz dać część wdrożeniową, opisz kroki w tekście, a na końcu zrób „Podsumowanie: priorytety”.
- **Konkret zamiast ogólników**: w każdym tekście dodaj co najmniej 1 „do skopiowania”:
  - wzór sekcji (template),
  - przykłady zdań/mikrocopy,
  - listę pytań (FAQ),
  - mini-audyt w formie pytań kontrolnych (co sprawdzić u siebie),
  - podsumowanie: 3-7 priorytetów/wniosków (co zrobić teraz i dlaczego).
- **Linkowanie jako seria**: buduj klaster tematyczny i prowadź czytelnika po serwisie (naturalnie, bez „upychania” linków):
  - W treści lub na końcu dodaj „Zobacz też” z 2-4 linkami do powiązanych artykułów z tej listy.
  - W CTA na końcu zawsze daj 1 sensowny next-step do oferty (`/uslugi/...`) lub narzędzia (`/narzedzia/...`) dopasowanego do tematu (opcjonalnie drugi link).
  - Jeśli temat dotyczy narzędzia, pierwszy link kieruj do narzędzia, a drugi (jeśli ma sens) do powiązanej oferty.
- **Kolejność artykułów w plikach**: nowy artykuł zawsze wstawiaj na górze listy, żeby zachować prawidłową kolejność (najnowsze pierwsze) — w szczególności w `data/pl/blog.json` (początek `articles[]`).
- **SEO - jak pisać pod Google w 2025 roku**:
  - People-first content / Helpful Content Update / nacisk na E‑E‑A‑T.
  - Tekst pisany dla człowieka, nie algorytmu.
  - Naturalne użycie fraz (bez powtórek „pod SEO”).
  - Logiczna struktura i realna wartość edukacyjna.
  - Struktura docelowa:
    - 1 główny temat (H1).
    - 8-12 sekcji (H2/H3).
    - Pytania użytkownika jako nagłówki.
  - Długość:
    - Blog: ok. 1 800-2 200 słów.
    - Dla ofert: tyle, ile potrzeba do podjęcia decyzji (bez sztucznego „dopisywania pod SEO”).
- **Semantyka i scoring (dla copywritera)**:
  - Cel: Content Score min. 70 (NeuronWriter / Surfer) bez psucia jakości.
  - Używaj naturalnych synonimów i pojęć powiązanych.
  - Zakaz: sztucznych bloków „frazy kluczowe” i powtarzania słów dla samego SEO.
- **E‑E‑A‑T (wiarygodność)**:
  - Gdy wspominasz standardy lub „best practices”, podeprzyj je źródłem (Google Search Central, OWASP, WCAG) albo opisem z praktyki wdrożeń („najczęściej widzimy…”).
  - Pokazuj doświadczenie praktyczne i tłumacz „dlaczego coś działa”.
  - Unikaj obietnic wyników i gwarancji efektów.
  - Dopuszczalne: statystyki, dane z wiarygodnych źródeł, konkretne przykłady.
  - Zakazane: gwarancje efektów, wymyślanie liczb, „100% skuteczności”.
- **Projekty koncepcyjne i przykłady**: jeśli tekst zawiera przykładową wycenę/przykładowy projekt/symulację efektu, dopisz: „Projekt koncepcyjny — dane przykładowe.”
- **CTA**: na końcu 1 jasny next-step dopasowany do tematu. CTA ma być spokojne, nienaciskające, informacyjne.
  - Przykłady CTA:
    - „Sprawdź, czy to rozwiązanie ma sens w Twoim przypadku”
    - „Porozmawiajmy o Twoim projekcie”
    - „Zobacz możliwe scenariusze”
- **Model ofertowy (Value-Based Offers / Hormozi)**:
  - Skupienie na rezultacie, nie na „usłudze”.
  - Jasno pokaż: problem → mechanizm rozwiązania → zakres pracy → ograniczenia (czego nie robimy).
  - Opisuj zmianę, jaką klient przejdzie, i jasno określ, co dokładnie otrzymuje.
  - Buduj poczucie bezpieczeństwa decyzji (bez presji).
- **Zasada nadrzędna**: jeśli treść brzmi jak reklama — jest zła. Jeśli brzmi jak rozmowa z kompetentnym doradcą — jest dobra.

### Lista artykułów + briefy (konspekt nagłówków/tematów)

#### [2] Jakie materiały są potrzebne, żeby móc zlecić stronę internetową?

- **Konspekt (H2/H3)**:
  - H2: Dlaczego przygotowane materiały przyspieszają realizację i obniżają koszt
  - H2: Minimum na start: co jest niezbędne, żeby stworzyć stronę internetową?
  - H3: Informacje o firmie i ofercie (dla kogo, co sprzedajesz, przewagi)
  - H3: Cele i priorytety (leady, sprzedaż, marka, rekrutacja) + co mierzymy
  - H3: Treści na podstrony (home/usługi/o nas/kontakt) + jaka długość i styl
  - H3: Materiały wizualne (logo, kolory, fonty, zdjęcia: własne vs stock)
  - H3: Dowody zaufania (opinie, realizacje, case studies, liczby)
  - H3: Dostępy i technikalia (domena/DNS/hosting/poczta/GA4/GSC)
  - H3: Funkcje i integracje (formularze, CRM, newsletter, kalendarz) - jak je spisać
  - H2: Najczęstsze braki, które opóźniają realizację strony i jak ich uniknąć

#### [3] Struktura strony usługowej: jak ułożyć sekcje, żeby użytkownik łatwiej zrozumiał ofertę?

- **Konspekt (H2/H3)**:
  - H2: Co użytkownik musi zrozumieć w 10 sekund (co, dla kogo, efekt)
  - H2: Proponowany układ strony usługi (sekcje krok po kroku)
  - H2: Hero i pierwsza sekcja: jak pisać nagłówki i leady (bez żargonu)
  - H2: Zakres usługi: jak opisać „co dostaję” (deliverables) + granice
  - H2: Proces współpracy: jak pokazać etapy i skrócić niepewność
  - H2: Dowody i wiarygodność (opinie, case study, liczby, realizacje)
  - H2: FAQ i obiekcje (co dodać, żeby odciążyć sprzedaż)
  - H2: CTA i konwersja (gdzie i ile CTA, jak nie być nachalnym)
  - H2: Podsumowanie: priorytety strony usługowej (co poprawić najpierw i dlaczego)

#### [6] 10 najczęstszych błędów w sekcji „O nas” i jak je poprawić

- **Konspekt (H2/H3)**:
  - H2: Po co jest „O nas” (zaufanie, domykanie decyzji, wiarygodność)
  - H2: 10 najczęstszych błędów (lista + dlaczego to szkodzi)
  - H3: Ogólniki („dynamiczna firma”) - jak przerobić na konkrety (przykłady zdań)
  - H3: Brak ludzi i kompetencji - jak to pokazać bez „ściany CV”
  - H3: Brak dowodów (opinie, liczby, realizacje) - co dodać zamiast obietnic
  - H3: Historia firmy zamiast wartości dla klienta - jak zmienić narrację
  - H2: Proponowana struktura sekcji/strony „O nas” (układ do skopiowania)
  - H2: Jak wpleść CTA i next-step (bez agresywnego tonu)
  - H2: Podsumowanie: czy „O nas” buduje zaufanie (najważniejsze sygnały)

#### [7] Jak zaprojektować stronę kontaktową, która zwiększa liczbę zapytań?

- **Konspekt (H2/H3)**:
  - H2: Cel strony kontaktowej: więcej zapytań vs lepsza jakość leadów
  - H2: Elementy obowiązkowe (telefon/e-mail/formularz/adres/godziny/mapa)
  - H2: Formularz: minimum pól + kiedy dodać pytania kwalifikacyjne
  - H2: Mikrocopy, które zwiększa wysyłkę (czas odpowiedzi, co dalej, „bez spamu”)
  - H2: Wiarygodność i bezpieczeństwo (RODO, polityka prywatności, antyspam)
  - H2: Mobile UX (czytelność, kliknięcie w numer, błędy walidacji)
  - H2: Jak mierzyć efekty (konwersje: formularz/telefon/mail)
  - H2: Najczęstsze błędy + szybkie poprawki

#### [11] FAQ na stronie: jak pisać pytania, które wspierają pozycję strony?

- **Konspekt (H2/H3)**:

  - H2: FAQ jako SEO + sprzedaż (long-tail i obiekcje)
  - H2: Skąd brać pytania (sprzedaż, e-maile, GSC, rozmowy, konkurencja)
  - H2: Jak wybierać i grupować pytania (priorytety, tematy, unikanie duplikacji)
  - H2: Jak pisać odpowiedzi (krótko na start → rozwinięcie → link do szczegółów)
  - H2: FAQ vs osobny artykuł (kiedy rozdzielić, żeby nie kanibalizować)
  - H2: Wdrożenie na stronie (czytelność, dostępność, indeksowalność)
  - H2: FAQ schema: kiedy ma sens i jak nie przesadzić
  - H2: Przykładowe pytania (dla usług/stron) + podsumowanie: jak utrzymać FAQ aktualne

- ✅ **Zrobione 2025-12-17**:
  - Dodano artykuł do `data/pl/blog.json` (slug: `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony`) wraz z `seo`, `contentBlocks`, `cta` i `faq`.
  - Dodano linkowanie wewnętrzne do powiązanych treści oraz CTA do oferty.
  - Weryfikacja: `npm run lint` (OK), `npm run build` (OK).

#### [18] Mapa strony dla użytkownika: jak ją wykorzystać do lepszej indeksacji?

- **Konspekt (H2/H3)**:
  - H2: Mapa strony dla użytkownika vs sitemap.xml (różnice)
  - H2: Kiedy mapa strony ma sens (rozbudowana oferta/blog/narzędzia)
  - H2: Jak zbudować strukturę (kategorie, głębokość, priorytety)
  - H2: Jak mapa strony wspiera SEO (linkowanie wewnętrzne i crawl)
  - H2: Czego nie dodawać (noindex, duplikaty, strony techniczne)
  - H2: Jak utrzymać aktualność (proces i owner)
  - H2: Podsumowanie wdrożenia + najczęstsze błędy

#### [20] Jak dobrać domenę i adresy URL podstron, aby wzmocnić pozycję strony w wyszukiwarce?

- **Konspekt (H2/H3)**:

  - H2: Domena: marka vs fraza (co dziś realnie pomaga, a co jest mitem)
  - H2: TLD i kwestie praktyczne (np. `.pl`, przekierowania www/non-www)
  - H2: Zasady dobrych URL (krótko, czytelnie, myślniki, spójność)
  - H2: Struktura URL dla usług i bloga (przykłady „dobry vs zły”)
  - H2: Canonical i przekierowania: minimum, które musi działać
  - H2: Zmiana URL / migracja: plan minimum (mapa 301, testy, monitoring)
  - H2: Najczęstsze błędy (mieszanie języków, losowe slugi, duplikaty)
  - H2: Podsumowanie: planowanie URL-i przed startem projektu (priorytety i pułapki)

- ✅ **Zrobione 2025-12-17**:
  - Dodano artykuł do `data/pl/blog.json` (slug: `jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce`) wraz z `seo`, `contentBlocks`, `cta` i `faq`.
  - Dodano okładkę: `public/assets/blog/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce.webp`.
  - Ujednolicono generowanie URL w linkach wewnętrznych (primaryCategory → fallback) w karuzeli artykułów i na `/mapa-strony`.
  - Weryfikacja: `npm run lint` (OK), `npm run build` (OK).

#### [25] Kiedy przebudowa strony ma sens, a kiedy wystarczy jej optymalizacja?

- **Konspekt (H2/H3)**:
  - H2: Jak rozpoznać, co jest problemem (treść/UX/SEO/technologia)
  - H2: Kiedy wystarczy optymalizacja (quick wins: treści, szybkość, konwersja)
  - H2: Kiedy przebudowa jest konieczna (architektura, skalowanie, bezpieczeństwo)
  - H2: Ryzyka przebudowy dla SEO i jak je ograniczyć (audyt, 301, canonical)
  - H2: Podejście etapowe (co robić po kolei, żeby nie zatrzymać biznesu)
  - H2: Proste drzewko decyzyjne (pytania „tak/nie”)
  - H2: Co dalej (CTA: audyt + plan działań)

#### [32] Bezpieczeństwo strony internetowej: zabezpieczenia, które powinny być wdrożone w 2026

- **Konspekt (H2/H3)**:

  - H2: Najczęstsze zagrożenia dla stron firmowych (realne scenariusze)
  - H2: Minimum bezpieczeństwa (HTTPS, aktualizacje, backup)
  - H2: Dostępy i role (MFA, hasła, zasada najmniejszych uprawnień)
  - H2: Formularze i antyspam (walidacja, rate-limit, honeypot, ochrona przed botami)
  - H2: Dane i prywatność (RODO, retencja, minimalizacja)
  - H2: Nagłówki bezpieczeństwa w praktyce (co dają i kiedy warto)
  - H2: Monitoring i reakcja (alerty, logi, co robić po incydencie)
  - H2: Podsumowanie: minimum / rekomendowane / advanced (priorytety wdrożenia)

- ✅ **Zrobione 2025-12-17**:
  - Dodano artykuł do `data/pl/blog.json` (slug: `bezpieczenstwo-strony-internetowej-zabezpieczenia-2026`) wraz z `seo`, `contentBlocks`, `cta` i `faq` + linkowaniem wewnętrznym.
  - Dodano okładkę: `public/assets/blog/bezpieczenstwo-strony-internetowej-zabezpieczenia-2026/bezpieczenstwo-strony-internetowej-zabezpieczenia-2026.webp`.
  - Weryfikacja: `blog.json` (JSON OK).

#### [107] Karta produktu na stronie: 15 elementów, które zwiększają sprzedaż bez obniżania ceny

- **Konspekt (H2/H3)**:
  - H2: Co ma zrobić karta produktu (zredukować ryzyko i ułatwić decyzję)
  - H2: 15 elementów skutecznej karty produktu (lista + krótkie uzasadnienia)
  - H2: Opis produktu: język korzyści + konkrety (jak pisać, żeby sprzedawało)
  - H2: Redukcja obiekcji (dostawa, zwroty, gwarancja, płatności, zaufanie)
  - H2: UX i mobile (czytelność, kolejność sekcji, sticky CTA, zdjęcia)
  - H2: SEO karty produktu (unikalny content + dane strukturalne Product/Offer)
  - H2: Analityka i testy (add-to-cart, porzucone koszyki, A/B w realnych warunkach)

#### [108] Meta title i meta description: jak pisać, żeby zwiększyć CTR i nie być uciętym w Google?

- **Konspekt (H2/H3)**:
  - H2: Po co są meta title i description (co zyskujesz: więcej wejść z tych samych pozycji)
  - H2: Jak Google realnie je wyświetla (kiedy podmienia, a kiedy trzyma Twoją wersję)
  - H2: Długość i czytelność: zasady, które działają (bez „magicznych liczb”)
  - H2: Wzory do skopiowania (usługa lokalna / usługa B2B / sklep / artykuł)
  - H2: Najczęstsze błędy (duplikaty, brak konkretu, obietnice bez pokrycia)
  - H2: Jak sprawdzać i poprawiać meta szybko (narzędzie: licznik meta title/description)
  - H2: Podsumowanie: 5 priorytetów na start + CTA (pozycjonowanie stron / konsultacja)

#### [109] Favicon i ikony strony: co przygotować, żeby działały w przeglądarkach, Google i Lighthouse?

- **Konspekt (H2/H3)**:
  - H2: Co daje favicon i ikony (wiarygodność marki + spójność na mobile)
  - H2: Jakie pliki są potrzebne w praktyce (favicon.ico, apple-touch-icon, ikony 192/512)
  - H2: Skąd biorą się problemy (zły rozmiar, tło, cache, brak manifestu)
  - H2: Jak przygotować zestaw ikon w 10 minut (narzędzie: generator favicon)
  - H2: Jak sprawdzić, czy wszystko działa (Lighthouse, przeglądarki, urządzenia)
  - H2: Najczęstsze błędy i poprawki (na przykładach)
  - H2: Podsumowanie + CTA (strony internetowe / identyfikacja wizualna)
