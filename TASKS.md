
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
- Kolory tekstu: **wymuszamy** użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do **`Badge`** (jeden komponent + warianty); **`Tag` docelowo nie istnieje**.
- `Button`: warianty „jednorazowe” nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`.
- `Tooltip`: **zostaje** (jedyny wyjątek – może być chwilowo nieużywany).
- Content renderer: wspólny `HTMLContent` + wspólny `RenderBlocks` (warianty dla typów danych).
- Multi-domain/multi-language: w planie na później; domena determinuje język dla wybranych wspólnych komponentów (np. tools).
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
- jeśli zadanie jest z grupy `COPY-*` lub `AUDIT-*`, nie odpalaj `npm run lint` ani `npm run build`
- ikony mają zawsze mieć kolor `text-slate-500`

### Instrukcja przed każdym zadaniem (obowiązkowo)

- Jeśli w trakcie zadania edytujesz/refaktorujesz plik tak, że staje się pusty (0B / tylko whitespace / tymczasowy „barrel” bez wartości), usuń go od razu i popraw wszystkie importy.

 **KRYTYCZNE: NIE MODYFIKOWAĆ plików konfiguracji SEO (sitemap/robots)**
  - Pliki chronione:
    - `next-sitemap.config.cjs` – konfiguracja generowania sitemap i robots.txt
    - `public/robots.txt` – plik robots (generowany automatycznie przez `next-sitemap`)
  - Zasady:
    - **NIE EDYTOWAĆ** tych plików bez wyraźnego polecenia użytkownika.
    - **NIE DODAWAĆ** dodatkowej logiki skanowania stron w `additionalPaths` (strony statyczne są już obsługiwane przez `transform`).
    - `additionalPaths` służy WYŁĄCZNIE do dynamicznych ścieżek (projekty z `projects.json`, kategorie/artykuły edukacji).
    - Każda modyfikacja tych plików wymaga pełnej weryfikacji sitemapy po `npm run build`.
  - Uzasadnienie:
    - Historia: duplikacje w sitemapie spowodowane przez podwójne skanowanie plików (raz w `transform`, drugi raz w `additionalPaths`).
    - Sitemap jest krytyczna dla SEO – błędy mogą wpłynąć na indeksację całej witryny.

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

- 🟡 **[AUDIT-002] Repo: audyt duplikacji logiki (propozycje wspólnych hooków/utils)**
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
- 🟡 **[TOOLS-001] Narzędzia: dokończyć prymitywy high-ROI**
  - użyć stworzonych hooków  lub stworzyć nowe jeśli są wspólne funkcjonalności
  - jeśli są wspólne funkcjonalności stworzyć wspolne komponenty ( np. dla wgrywania zdjęć )
  - stworzyć foldery dla każdego narzędzia i rozdzielić każde narzędzie na logiczne komponenty
  - Wynosić logikę do hooków/utils; dopilnować cleanup (blob URLs, event listeners).
  - zachowaj działanie w 100% oraz wygląd ( niczego nie zmieniaj pod tym kątem )
  - przełóż na mniejsze komponenty każde narzędzie
  - Jeśli zauważysz opcję ulepszenia działania lub jakiś błąd poinformuj mnie o tym
  - jeśli tego potrzebujesz rozbij to zadanie na mniejsze, przypisując jedno zadanie do jednego narzędzia
- ❌ **[TOOLS-014] Palette Extractor: rekomendacje zmian tekstów/funkcji + ujednolicenie z innymi narzędziami**
  - Pliki:
    - `components/sections/tools/PaletteExtractor/*`
     - (porównanie) `components/sections/tools/ColorPaletteGenerator.tsx`, `components/sections/tools/FaviconGenerator.tsx`, `components/sections/tools/JpgPngToWebp.tsx`
   - Zakres (UX/copy):
     - uprościć copy w toolu (mniej technicznie, więcej „co dostaję” + zastosowania),
     - zweryfikować sens akcji `Kopiuj paletę` i `Wyczyść` — jeśli zbędne: usunąć lub zastąpić prostszym flow (kopiowanie per kolor + łatwa podmiana obrazu),
     - ujednolicić komunikaty stanów (idle/processing/error) i hinty kopiowania.
   - Zakres (ujednolicenie implementacji):
     - dopasować strukturę `PaletteExtractor` do wzorca używanego w innych tools (sekcje `ToolSection`/`ToolInfo`/`ToolAlert`, spójna obsługa błędów i uploadu),
     - wykorzystać istniejące hooki/utilsy: `useCopyToClipboard`, `revokeObjectUrl`, `useTimeout` (jeśli pasuje do feedbacku po akcji),
     - jeśli ma sens: wynieść `ImageDropzone` do współdzielonego komponentu tools (do re-use w innych narzędziach).
   - Kryteria akceptacji:
     - UI jest prostsze i mniej „techniczne”, bez regresji funkcjonalności,
     - implementacja jest spójna z pozostałymi narzędziami,
     - Sprawdzone: `npm run lint`, `npm run build`.
- ❌ **[SEO-013] Główne strony: dodać dedykowane obrazy OpenGraph (1200×630)**
  - Pliki (TODO w kodzie):
    - `app/(pl)/uslugi/page.tsx` → `/assets/og/uslugi.webp`
    - `app/(pl)/realizacje/page.tsx` → `/assets/og/realizacje.webp`
    - `app/(pl)/o-nas/page.tsx` → `/assets/og/o-nas.webp`
    - `app/(pl)/kontakt/page.tsx` → `/assets/og/kontakt.webp`
    - `app/(pl)/edukacja/page.tsx` → `/assets/og/edukacja.webp`
  - Zakres:
    - Dodać powyższe assety w `public/assets/og/` (1200×630, `.webp`).
    - Przepiąć `openGraph.images` na dedykowane assety (URL absolute, zgodny z `SITE_URL`).
    - Usunąć komentarze `TODO: Add unique OpenGraph image...` z tych plików.
  - Kryteria akceptacji:
    - Brak `TODO: Add unique OpenGraph image...` w repo.
    - Obrazy istnieją i mają format 1200×630.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[COPY-036] ServicesSteps: poprawić literówki i interpunkcję w opisach usług**
  - Plik: `components/sections/steps/ServicesSteps.tsx`
  - Zakres:
    - linia 9 (`ui.pl.description`):
      - `nie zależnie` → `niezależnie`
      - rekomendowana korekta składniowa (bez zmiany sensu):
        - `Posiadamy szeroką ofertę, dzięki czemu, ...` → `Posiadamy szeroką ofertę, dzięki czemu ...` (usunąć zbędny przecinek po `czemu`)
        - `celów jak i budżetu` → `celów i budżetu`
    - linia 57 (lista w sekcji „Sklepy internetowe”): `Bezpłatne Szkolenie PDF` → `Bezpłatne szkolenie PDF`
  - Kryteria akceptacji:
    - Powyższe fragmenty są poprawione.
    - Weryfikacja: nie jest wymagana (COPY-only).

- ❌ **[COPY-037] ColorPaletteGenerator: poprawić cudzysłów w opisie palety**
  - Plik: `components/sections/tools/ColorPaletteGenerator.tsx`
  - Zakres:
    - linia 52 (opis palety pastelowej): `„kremowe"` → `„kremowe”`
  - Kryteria akceptacji:
    - W pliku nie występuje mieszanie cudzysłowów w tym fragmencie (`„..."`).
    - Weryfikacja: nie jest wymagana (COPY-only).

- ❌ **[PROJECT-001] Realizacje: uzupełnić brakujące `seo.title` i `seo.description`**
  - Plik: `data/pl/projects.json`
  - Slugi (brak `seo.title` i `seo.description`):
    - `blog-sportowy-pilka-nozna-pl`
  - Zakres:
    - Dodać `seo.title` i `seo.description` (canonical już jest).
    - Unikalność: `seo.title` nie może duplikować innych realizacji.
    - Długości (best practice):
      - `seo.title`: ~35–65 znaków (brand na końcu, np. `| Arteon`).
      - `seo.description`: ~100–165 znaków (1–2 zdania, konkret: co zrobiono + dla kogo).
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
  - Slugi z galerią „1 obraz” (rozważyć rozbudowę galerii do min. 2–4, zależnie od typu):
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

- ❌ **[PROJECT-005] Realizacje: dopiąć `cta` (brakujące) + naprawić niespójne CTA**
  - Plik: `data/pl/projects.json`
  - Slugi bez `cta` (uzupełnić):
    - `strona-dla-psychologa-msc-psychotherapy`
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
  - CTA do poprawy (jest, ale jest niespójne z realizacją):
    - `wizytowka-dla-kancelarii-adwokackiej-lux-nova` (copy i `btnOne`/`backgroundImage` odnoszą się do teczki)
  - Zakres:
    - Każde CTA ma:
      - `btnOneLink: "/kontakt"`.
      - `btnTwoLink` do najbardziej pasującej usługi.
      - `backgroundImage` z assetów tej realizacji (bez podmieniania na assety innej realizacji).
  - Kryteria akceptacji:
    - Wszystkie powyższe slugi mają CTA zgodne z kontekstem realizacji.

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
    - `palmolive`
    - `colgate`
    - `detergent-regulations`
  - `task` (uzupełnić / naprawić):
    - `colgate` (linia 972): usunąć placeholder `"task": "test"` i dodać realny opis.
  - Higiena treści:
    - `blog-sportowy-pilka-nozna-pl` (linia 756): `PilkaNożna.pl` → `PiłkaNożna.pl`
    - `blog-sportowy-pilka-nozna-pl` (linia 758): `zmianie systemy` → `zmianie systemu`
    - `blog-sportowy-pilka-nozna-pl` (linia 758): `...z grupą programistów</p>` → `...z grupą programistów.</p>`
    - `katalog-produktow-restoquality` (linia 652): `katalogu, ze sprzętami` → `katalogu ze sprzętami`
    - `katalog-produktow-restoquality` (linia 652): `parametrów, przez właścicieli` → `parametrów przez właścicieli`
    - `katalog-produktow-restoquality` (linia 652): `W katalogu zebraliśmy znajdują się piece do pizzy` → `W katalogu znajdują się piece do pizzy`
    - `katalog-produktow-restoquality` (linia 681): `Tak. Tworzymy możemy stworzyć autorskie ikony cech produktu, jak i inne elementy...` → `Tak. Możemy stworzyć autorskie ikony cech produktu oraz inne elementy...`
    - `katalog-produktow-restoquality` (linia 703): `katalogu toduktów` → `katalogu produktów`
    - `sklep-dla-firmy-odziezowej-trilllizo` (linia 779): `dedykowanie szkolenie` → `dedykowane szkolenie`
    - `sklep-dla-firmy-odziezowej-trilllizo` (linia 780): `SEO ( techniczne, zdjęcia, treść )` → `SEO (techniczne, zdjęcia, treść)`
    - `sklep-dla-firmy-odziezowej-trilllizo` (linia 794): `odziezowej` → `odzieżowej`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 106): `wirmy` → `firmy`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 106): `A3 ( składany na A4 )` → `A3 (składany na A4)`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 107): `( projekt, dobór materiałów i realizacja u jednego wykonawcy )` → `(projekt, dobór materiałów i realizacja u jednego wykonawcy)`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 107): `przekirowuje` → `przekierowuje`
    - `folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group` (linia 107): `wraz z szczegółowym` → `wraz ze szczegółowym`
    - `detergent-regulations` (linia 993): `konfugaracji` → `konfiguracji`
    - `detergent-regulations` (linia 993): `lokalizacje, oraz` → `lokalizacje oraz`
    - `detergent-regulations` (linia 993): `m.in mapy` → `m.in. mapy`
    - `wizytowki-dla-gastronomii-restoquality` (linia 829): `Szablon kompozycji umożliwiają` → `Szablon kompozycji umożliwia`
    - `wizytowki-dla-gastronomii-restoquality` (linia 836): `imie` → `imię`
    - `wizytowki-dla-gastronomii-restoquality` (linia 856): `pliki produkcyjny` → `pliki produkcyjne`
    - `wizytowka-dla-spa-talia` (linia 712): `<strong>wizytówke</strong>` → `<strong>wizytówki</strong>`
    - `detergent-regulations`: doprecyzować opis analityki (co wdrożono + jak testowano).
  - Kryteria akceptacji:
    - Powyższe pola są uzupełnione i spójne semantycznie.
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

- ❌ **[IDEA-001] Kalkulator wyceny: dedykowana strona SEO + lead (re-use istniejącego komponentu)**
  - Cel i uzasadnienie:
    - Pozyskać ruch organiczny na frazy intencyjne typu: „kalkulator wyceny strony”, „ile kosztuje strona internetowa”, „wycena sklepu internetowego”.
    - Zwiększyć konwersję z użytkowników, którzy dziś widzą kalkulator tylko jako sekcję (bez dedykowanego URL do indeksacji/udostępniania).
    - Skrócić ścieżkę do kontaktu: wynik kalkulatora → CTA → `/kontakt`.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowa strona z kalkulatorem jako główną treścią + krótkie wprowadzenie + sekcja „Co wpływa na cenę” + FAQ + CTA.
    - (Opcjonalnie) prosty mechanizm prefill w linku do kontaktu: np. `?topic=wycena&estimate=...` (bez wysyłania danych na serwer).
  - Pliki i ścieżki:
    - `app/(pl)/kalkulator-wyceny-strony/page.tsx`
    - Re-use: `components/sections/Calculator.tsx`
    - Linkowanie wewnętrzne (CTA do kalkulatora):
      - `app/(pl)/uslugi/strony-internetowe/page.tsx`
      - `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
      - `app/(pl)/page.tsx` (jeśli kalkulator jest na homepage: dodać link „Zobacz pełny kalkulator”)
    - Dokumentacja:
      - `PAGES_CATALOG.md`
  - SEO:
    - URL/slug: `/kalkulator-wyceny-strony`
    - `metadata.title`: `Kalkulator wyceny strony internetowej i sklepu (2025) | Arteon`
    - `metadata.description`: `Policz orientacyjny koszt strony internetowej lub sklepu. Wybierz typ projektu i zakres, a zobaczysz widełki cenowe oraz co zawiera wycena.`
    - OG image: `public/assets/og/kalkulator-wyceny-strony.webp` (1200×630)
    - Schema: `WebApplication` (JSON-LD; `url` absolute; `operatingSystem: "Any"`; `applicationCategory: "BusinessApplication"`)
  - Kryteria akceptacji:
    - Strona renderuje kalkulator i pozwala przejść cały flow (kroki → wynik → reset).
    - `canonical` jest absolutny i wskazuje `https://www.arteonagency.pl/kalkulator-wyceny-strony`.
    - Po wyniku jest jednoznaczny next-step (CTA do `/kontakt` + linki do kluczowych usług).
    - OG asset istnieje i jest użyty w `openGraph.images` jako URL absolutny.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-002] Narzędzie: generator linków UTM (GA4) + podgląd i kopiowanie**
  - Cel i uzasadnienie:
    - Lead magnet dla usługi marketing/SEO: użytkownik robi UTM-y sam, a przy okazji trafia na ofertę wdrożeń analityki i kampanii.
    - Ruch organiczny na frazy: „generator utm”, „utm builder”, „linki utm ga4”, „parametry utm”.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowe narzędzie tworzące URL z parametrami `utm_source`, `utm_medium`, `utm_campaign` (+ opcjonalnie `utm_term`, `utm_content`).
    - Obsługa URL z istniejącymi query params (merge bez duplikacji; czytelne sortowanie; poprawne kodowanie znaków).
    - Akcje: `Kopiuj link`, `Wyczyść`, (opcjonalnie) „skrócone podsumowanie parametrów” do wklejenia do briefu.
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/generator-linkow-utm/page.tsx` (narzędzie mobile-friendly, poza `(desktop-only)`)
    - `components/sections/tools/UtmLinkBuilder.tsx`
    - `lib/tools/utm/buildUtmUrl.ts` (czysta funkcja: `baseUrl + params -> url`)
    - Aktualizacje listy narzędzi:
      - `app/(pl)/narzedzia/page.tsx` (karta narzędzia + JSON-LD ItemList)
    - Dokumentacja:
      - `TOOLS_CATALOG.md`
      - `PAGES_CATALOG.md`
  - SEO:
    - URL/slug: `/narzedzia/generator-linkow-utm`
    - `metadata.title`: `Generator linków UTM (GA4) – darmowe UTM-y online | Arteon`
    - `metadata.description`: `Zbuduj link z UTM do GA4 w 30 sekund. Wpisz adres strony i parametry kampanii, a potem skopiuj gotowy URL bez błędów kodowania.`
    - OG image: `public/assets/og/narzedzia/generator-linkow-utm.webp` (1200×630)
    - Schema: `WebApplication` (`applicationCategory: "SEOApplication"`; `operatingSystem: "Any"`)
  - Kryteria akceptacji:
    - Narzędzie generuje poprawny URL dla:
      - czystego URL,
      - URL z istniejącymi parametrami,
      - wartości z polskimi znakami/spacjami (poprawne kodowanie).
    - Jest walidacja wejścia (pusty URL / niepoprawny format → czytelny błąd).
    - `Kopiuj link` używa istniejącego hooka `useCopyToClipboard` i daje jasny feedback.
    - Narzędzie jest dodane do `/narzedzia` (UI + JSON-LD).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-003] Narzędzie: konwerter kolorów (HEX/RGB/HSL) + generator zmiennych CSS i tokenów**
  - Cel i uzasadnienie:
    - Spiąć istniejący „klaster” narzędzi kolorystycznych (palety/kontrast) o brakujący fundament: szybkie konwersje + gotowe snippet-y do wdrożenia w kodzie.
    - Ruch organiczny na frazy: „konwerter hex rgb”, „hex to hsl”, „zmienne css kolory”, „design tokens”.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Narzędzie przyjmujące kolor wejściowy (HEX/RGB/HSL) i pokazujące przeliczenia + preview.
    - Generatory:
      - CSS variables (np. `--color-primary: #...;`),
      - snippet Tailwind (np. `theme.extend.colors`),
      - (opcjonalnie) eksport w formacie JSON (design tokens).
    - Copy per sekcja + walidacja formatu (spójne komunikaty błędów jak w innych tools).
  - Pliki i ścieżki:
    - `app/(pl)/narzedzia/(tools)/konwerter-kolorow-i-zmienne-css/page.tsx` (mobile-friendly)
    - `components/sections/tools/ColorConverterTokens.tsx`
    - Re-use/rozbudowa libów:
      - `lib/tools/color/convert.ts` (jeśli brakuje: dodać `rgbToHsl`, `hslToRgb`)
      - (opcjonalnie) `lib/tools/color/format.ts` (formatowanie snippetów)
    - Aktualizacje listy narzędzi:
      - `app/(pl)/narzedzia/page.tsx` (karta + JSON-LD)
    - Dokumentacja:
      - `TOOLS_CATALOG.md`
      - `PAGES_CATALOG.md`
  - SEO:
    - URL/slug: `/narzedzia/konwerter-kolorow-i-zmienne-css`
    - `metadata.title`: `Konwerter kolorów HEX/RGB/HSL + zmienne CSS | Arteon`
    - `metadata.description`: `Konwertuj kolory między HEX, RGB i HSL. Wygeneruj zmienne CSS oraz snippet do Tailwind, żeby szybciej wdrożyć paletę w projekcie.`
    - OG image: `public/assets/og/narzedzia/konwerter-kolorow.webp` (1200×630)
    - Schema: `WebApplication` (`applicationCategory: "UtilityApplication"`; `operatingSystem: "Any"`)
  - Kryteria akceptacji:
    - Konwersje działają dla formatów: `#rgb`, `#rrggbb`, `rgb(r,g,b)`, `hsl(h,s%,l%)`.
    - Walidacja i błędy są czytelne (brak crashy, brak `NaN`).
    - Copy działa osobno dla: HEX/RGB/HSL/CSS variables/Tailwind snippet.
    - Narzędzie jest dodane do `/narzedzia` oraz ma JSON-LD i poprawne metadata.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`
