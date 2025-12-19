# Arteon - Refactor Master Plan (single source of truth)

## Spis treści

- [Ustawienia projektu (stack)](#ustawienia-projektu-stack)
- [Źródła kontekstu (katalogi)](#źródła-kontekstu-katalogi)
- [Zasady ogólne (zawsze)](#zasady-ogólne-zawsze)
- [Instrukcje operacyjne](#instrukcje-operacyjne)
- [Instrukcje: Treści i artykuły](#instrukcje-treści-i-artykuły)
- [Definition of Done (dla każdego zadania)](#definition-of-done-dla-każdego-zadania)
- [Zadania](#zadania)
- [Zadania: Artykuły (backlog)](#zadania-artykuły-backlog)
- [Pomysły](#pomysły)

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

## Źródła kontekstu (katalogi)

Możesz się z nimi zapoznawać przed rozpoczęciem zadania, w szczególności jeśli zadanie dotyczy danego typu treści / komponentów / stron czy hooków:

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

### Kod / refactor (bez zmian UI)

- Refaktory nie mają zmieniać UI/UX ani treści.
- Na etapie „porządkowania” zachowujemy klasy Tailwinda 1:1 (chyba że zadanie mówi inaczej).
- Content renderer: wspólny `HTMLContent` + wspólny `RenderBlocks` (warianty dla typów danych).

### UI / styl (spójność serwisu)

- Typografia: **globals-first** (bazujemy na `.h*` i `.p` / globalnych regułach), a wyjątki rozwiązujemy przez klasy.
- Kolory tekstu: wymuszamy użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do `Badge` (jeden komponent + warianty); `Tag` docelowo nie istnieje.
- `Button`: warianty „jednorazowe” nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`.
- `Tooltip`: zostaje (jedyny wyjątek - może być chwilowo nieużywany).
- Ikony mają zawsze mieć kolor `text-slate-700`.

### SEO (inwarianty)

- Canonical: **bezwzględne (absolute)** i zawsze na `https://www.arteonagency.pl`.
- OpenGraph: **unikalne per typ strony**; gdy fallback, dodajemy komentarz TODO w pliku strony.

### Nawigacja / IA

- Nowe strony w grupach „Usługi”, „Realizacje”, „O nas”, „Edukacja” i „Narzędzia” po utworzeniu muszą być automatycznie dodawane do wszystkich wariantów nawigacji (desktop + mobile, w tym dropdowny/submenu).

### Inne

- Multi-domain/multi-language: w planie na później; domena determinuje język dla wybranych wspólnych komponentów (np. tools).

### Workflow: jak domykamy zadania

- po zakończeniu zadania:
  - pod zadaniem zapisz co zostało zrobione oraz dodaj odpowiednią ikonę statusu (✅/🟡/❌)
  - jeśli zadanie nie jest z grupy `AUDIT-*`: przenieś wykonane zadanie do `DONE_TASKS.md` (z datą i podsumowaniem); najnowsze wpisy umieszczaj najwyżej pod daną datą; nowe daty twórz na górze pliku
  - jeśli zadanie jest z grupy `AUDIT-*`: zadanie zawsze zostaje w `TASKS.md`, a do `DONE_TASKS.md` dodaj tylko wpis z zakresem wykonanej pracy (np. co sprawdzono + jakie zadania/pomysły dopisano)
  - Zadania artykułowe (sekcja „Zadania: Artykuły”) domykamy tak samo jak resztę: wpis do `DONE_TASKS.md` + aktualizacja `BLOG_CATALOG.md`.
- **KRYTYCZNE (obowiązkowe): po każdym zadaniu/modyfikacji aktualizujesz odpowiedni plik katalogu** (`COMPONENTS_CATALOG.md`, `HOOKS_CATALOG.md`, `TOOLS_CATALOG.md`, `PROJECTS_CATALOG.md`, `PAGES_CATALOG.md`, `BLOG_CATALOG.md`).
  - Dotyczy zarówno dodania nowych elementów, jak i modyfikacji istniejących.
  - Dotyczy także zmian „małych” (np. dopisanie propsa, poprawka w istniejącym komponencie, zmiana treści artykułu).
  - **To jest krok wymagany do domknięcia zadania** (robimy go razem z wpisem do `DONE_TASKS.md`).

### Dodatkowe reguły

- każdy komponent i cały kod powinien być zgodny z najlepszymi praktykami Next
- przy tworzeniu nowych hooków lub komponentów sprawdź raport mówiący o tych które już są, jeśli są już podobne to ich użyj lub stwórz nowy wariant / propsy (bez require), które będą przydatne
- nie zmieniaj wyglądu, treści ani funkcjonalności, chyba że wskazano inaczej
- nie wprowadzaj w `robots.tsx` globalnej blokady indeksacji całej witryny (blokowanie `/` jest zabronione)
- nigdy nie zmieniaj numerów zadań


---

## Instrukcje operacyjne

### Instrukcja przed każdym zadaniem (obowiązkowo)

- Jeśli w trakcie zadania edytujesz/refaktorujesz plik tak, że staje się pusty (0B / tylko whitespace / tymczasowy „barrel” bez wartości), usuń go od razu i popraw wszystkie importy.

- Przed zadaniem, które dotyka komponentów/hooków/narzędzi/stron/artykułów, możesz (i warto) szybko sprawdzić odpowiedni plik katalogu (`*_CATALOG.md`), żeby być zaznajomionym z istniejącymi elementami i nie dublować rozwiązań.

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
- Aktualizacja odpowiedniego `*_CATALOG.md` wykonana (patrz: „Workflow: jak domykamy zadania”).

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
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu (co sprawdzono + jakie zadania/pomysły dopisano).
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

- 🟡 **[AUDIT-003] Repo: audyt cleanup (puste pliki, martwe exporty, nieużywany kod/warianty)**

  - Cel: utrzymać repo „lean” i bez śmieci (bez zmian w UI/UX).
  - Zakres:
    - puste pliki/komponenty, martwe exporty, nieużywany kod/warianty (zostaw `Tooltip`, nawet jeśli chwilowo nieużywany)
  - Raportowanie:
    - Jeśli wykryjesz problem — dopisz osobne zadanie `CLEANUP-*` z listą plików i kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

  - **Zrobione 2025-12-19**:
    - Brak pustych plików (0B / whitespace-only) poza `node_modules` / `.next` / `.git`.
    - Brak pustych katalogów poza `.git`.
    - Sprawdzone „podejrzane” warianty: `Gap variant="line"`, `ToolHelper variant="error"`, `CopyButton variant="dark"` — są używane.
    - Nie dodano nowych zadań `CLEANUP-*`.

- 🟡 **[AUDIT-004] Repo: audyt SEO sanity-check (canonical/OG/schema/robots/sitemap)**

  - Cel: wychwycić regresje SEO i niespójności w metadanych.
  - Zakres (wszystkie strony wg `PAGES_CATALOG.md`):
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

- 🟡 **[AUDIT-007] Repo: audyt prawdziwości informacji i źródeł w istniejących artykułach**

- 🟡 **[AUDIT-008] Blog: audyt artykułów pod kątem nowego tonu (aktualizacja 2025-12-18)**

  - Cel: przeanalizować istniejące artykuły i zidentyfikować, co wymaga poprawy, aby były zgodne z nowymi wytycznymi tonu marki Arteon (mentorski, maksymalnie prosty, bez żargonu).
  - Zakres:
    - Wszystkie artykuły w `data/pl/blog.json` z wyjątkiem dwóch najnowszych (wzorcowych): `jak-przygotowac-profesjonalna-stopke-mailowa` i `favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie`.
  - Kryteria oceny (wg wytycznych z sekcji „Instrukcje: Treści i artykuły"):
    1. **Prostota języka** — czy tekst jest zrozumiały dla osoby bez wiedzy technicznej?
    2. **Wyjaśnianie terminów** — czy każdy termin techniczny jest od razu wyjaśniony (co to jest, po co to)?
    3. **Analogie i przykłady** — czy są użyte porównania z życia („Pomyśl o tym jak o...")?
    4. **Płynna narracja** — czy każde zdanie jest logicznym ciągiem dalszym (bez skoków myślowych)?
    5. **Ludzki język** — czy ton jest jak rozmowa przy kawie, a nie korpo-broszura?
    6. **Instrukcje do narzędzi Arteon** — czy artykuły o narzędziach mają sekcję „Jak to zrobić w naszym narzędziu"?
    7. **Benefit-first** — czy korzyść jest przed informacją techniczną?
    8. **Brak checklisty** — czy artykuł nie zawiera sekcji „Checklista" (zamiast tego: kroki + podsumowanie priorytetów)?
  - Raportowanie:
    - Dla każdego artykułu wypisz konkretne problemy i co wymaga poprawy.
    - Dopisz osobne zadania `CONTENT-*` z listą artykułów do poprawy i kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

  - **Zrobione 2025-12-19**:
    - Przeanalizowano 8 artykułów (wszystkie oprócz 2 wzorcowych).
    - Wzorcowe (OK): `jak-przygotowac-profesjonalna-stopke-mailowa`, `favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie`.
    - Raport problemów dla każdego artykułu — patrz poniżej.
    - Dodano zadania: `CONTENT-002`, `CONTENT-003`, `CONTENT-004`.

  - **Raport szczegółowy (problemy vs wytyczne)**:

    | Slug | Problemy |
    |------|----------|
    | `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony` | Brak analogii; terminy (long-tail, FAQ schema, topical authority) bez wyjaśnienia; ton ekspercki zamiast mentorskiego; brak FAQ |
    | `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow` | Styl raportowy/naukowy; brak analogii; terminy (CTR, CTA, WCAG, UX) bez wyjaśnienia; brak FAQ |
    | `ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty` | Styl formalny/korporacyjny; brak analogii; terminy (Core Web Vitals, autorytet domeny, topical authority) bez wyjaśnienia; brak FAQ |
    | `czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google` | Lepszy ton, ale: terminy (long-tail, CAC) bez wyjaśnienia; brak FAQ |
    | `jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp` | Terminy (LCP, CLS, INP, kompresja stratna/bezstratna) bez wyjaśnienia; **zduplikowane sekcje** (błąd techniczny!); brak FAQ; ma checklistę zamiast podsumowania priorytetów |
    | `jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google` | Bardzo długi (22 min); styl podręcznikowy; terminy (E-E-A-T, klaster tematyczny, meta title, intencja użytkownika) bez wyjaśnienia; brak analogii |
    | `jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow` | Styl formalny/korpo; brak analogii; terminy (brandbook, typografia) bez wyjaśnienia; emoji w tekście |
    | `dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic` | Ma checklistę (tabela); terminy (robots.txt, noindex, sitemap, Googlebot) bez wyjaśnienia "po co to"; styl techniczny |

- 🟡 **[AUDIT-009] Blog: audyt rozbudowy istniejących artykułów pod SEO (nowe sekcje, linkowanie wewnętrzne, rozwinięcia tematów)**

  - Cel: podnieść pozycje istniejących artykułów przez realne wzmocnienie treści (topical coverage), lepsze zaspokojenie intencji użytkownika i mocniejsze linkowanie wewnętrzne.
  - Zakres:
    - Wszystkie artykuły w `data/pl/blog.json`.
    - Priorytet: zacznij od artykułów, które już mają potencjał (jeśli masz dane z GSC/GA4: pozycje ~4–20, wysoki potencjał CTR/ruchu; jeśli nie masz danych: wybierz 8–12 najważniejszych tematycznie dla usług Arteon).
  - Co analizujemy (dla każdego artykułu):
    - Czy odpowiada wprost na główne pytanie/intencję i czy ma brakujące „pod-pytania”, które warto dopisać jako nowe H2/H3.
    - Czy są miejsca, gdzie warto dodać:
      - nowe sekcje (np. "Najczęstsze błędy", "Przykłady", "Kroki", "Porównanie opcji", "FAQ")
      - rozwinięcia wyjaśnień (definicje + „po co to?”)
      - linki wewnętrzne do:
        - usług (`/uslugi/...`),
        - narzędzi (`/narzedzia/...`),
        - powiązanych artykułów i stron edukacji,
        - oraz ewentualnie realizacji (jeśli pasuje tematycznie).
    - Czy artykuł ma sensowny zestaw "Zobacz też" (2–4 linki) oraz pasujące CTA.
    - Czy nagłówki i kolejność sekcji da się poprawić pod czytelność i crawl (bez lania wody, bez upychania słów kluczowych).
  - Raportowanie (WYNIK AUDYTU = zadania do wdrożenia, nie pomysły):
    - Dla każdego przeanalizowanego artykułu dopisz osobne zadanie `CONTENT-*` (a jeśli dotyczy stricte SEO/linkowania poza blogiem — `SEO-*`) z:
      - slugiem artykułu,
      - listą konkretnych dopisków (nowe sekcje H2/H3 + 1–3 zdania opisu co w nich ma być),
      - listą konkretnych linków wewnętrznych do wplecenia (dokładne URL),
      - kryteriami akceptacji (konkret, mierzalne),
      - plikami do edycji (min. `data/pl/blog.json`).
    - Nie dodawaj `IDEA-*` ani wpisów do sekcji „Pomysły” — wynik ma być egzekwowalnym backlogiem.
    - Do `DONE_TASKS.md` po wykonaniu audytu dopisz wpis: ile artykułów przeanalizowano + ID utworzonych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[CONTENT-002] Blog: przepisać artykuły do nowego tonu (priorytet 1 — najgorsze)**

  - Cel: przepisać artykuły, które najbardziej odbiegają od nowego tonu.
  - Zakres (3 artykuły):
    - `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
    - `ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
    - `jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
  - Co poprawić w każdym:
    - Zamienić styl raportowy/formalny na mentorski („Pomyśl o tym jak o...", „Wyobraź sobie...").
    - Każdy termin techniczny wyjaśnić od razu po użyciu (1-2 zdania: co to jest, po co to).
    - Dodać analogie i przykłady z życia.
    - Dodać sekcję FAQ (min. 4 pytania).
    - Usunąć emoji z tekstu (jeśli są).
  - Kryteria akceptacji:
    - Artykuł jest zrozumiały dla osoby bez wiedzy technicznej.
    - Każdy termin techniczny jest wyjaśniony.
    - Są min. 2 analogie/porównania z życia.
    - Jest sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-003] Blog: przepisać artykuły do nowego tonu (priorytet 2 — średnie)**

  - Cel: przepisać artykuły, które częściowo odbiegają od nowego tonu.
  - Zakres (3 artykuły):
    - `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony`
    - `czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`
    - `dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
  - Co poprawić w każdym:
    - Wyjaśnić wszystkie terminy techniczne od razu po użyciu.
    - Dodać analogie i przykłady z życia.
    - Zamienić checklistę/tabelę na podsumowanie priorytetów w tekście (jeśli dotyczy).
    - Dodać sekcję FAQ (jeśli brak).
  - Kryteria akceptacji:
    - Każdy termin techniczny jest wyjaśniony.
    - Są min. 2 analogie/porównania z życia.
    - Brak checklisty — zamiast tego podsumowanie priorytetów.
    - Jest sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-004] Blog: naprawić artykuł o optymalizacji zdjęć (zduplikowane sekcje + ton)**

  - Cel: naprawić błąd techniczny (zduplikowane sekcje) i dostosować ton.
  - Zakres:
    - `jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
  - Co poprawić:
    - Usunąć zduplikowane sekcje (powtórzone fragmenty o formatach JPEG/PNG/SVG/WebP).
    - Wyjaśnić terminy techniczne (LCP, CLS, INP, kompresja stratna/bezstratna).
    - Zamienić checklistę na podsumowanie priorytetów.
    - Dodać sekcję FAQ (min. 4 pytania).
  - Kryteria akceptacji:
    - Brak duplikatów treści.
    - Każdy termin techniczny jest wyjaśniony.
    - Brak checklisty — zamiast tego podsumowanie priorytetów.
    - Jest sekcja FAQ.
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[SEO-013] OG images: dedykowane grafiki dla kluczowych stron (hub pages)**

  - Cel:
    - Unikalne, spójne grafiki OpenGraph dla kluczowych stron (huby) + usunięcie TODO.
  - Zakres (strony):
    - `/uslugi`, `/realizacje`, `/o-nas`, `/kontakt`, `/edukacja`
  - Pliki (co najmniej):
    - `app/(pl)/uslugi/page.tsx`
    - `app/(pl)/realizacje/page.tsx`
    - `app/(pl)/o-nas/page.tsx`
    - `app/(pl)/kontakt/page.tsx`
    - `app/(pl)/edukacja/page.tsx`
    - `public/assets/og/*` (docelowe pliki 1200x630px)
  - Kryteria akceptacji:
    - Każda z ww. stron ma unikalny `openGraph.images[].url` wskazujący na dedykowany plik.
    - Wszystkie URL-e w OG są absolutne (na `https://www.arteonagency.pl`).
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[SEO-017] Ikony: potwierdzić publiczną dostępność + spójne linkowanie (`apple-touch-icon`, `icon-512x512`)**

  - Cel:
    - Brak 404 dla `/apple-touch-icon.png` oraz `/icon-512x512.png` (Lighthouse) + spójne użycie w `metadata` i schema.
  - Pliki:
    - `public/apple-touch-icon.png`
    - `public/icon-512x512.png`
    - `app/layout.tsx`
    - `components/shared/Footer.tsx`
    - `app/(pl)/edukacja/[category]/[slug]/page.tsx`
    - `app/(pl)/realizacje/[slug]/page.tsx`
  - Kryteria akceptacji:
    - Oba URL-e zwracają 200 i serwują właściwe pliki.
    - W schema (logo/publisher/image) używane są absolutne URL-e do ikon.
    - `npm run lint` i `npm run build` przechodzą.

  - Plik: `app/(pl)/o-nas/faq/page.tsx`
  - Zakres:
    - Poprawić literówki i polskie znaki w `FAQ_ITEMS` (m.in. `relizacji`, `Cie`, `szybkosc`, `zawzsze`, `kazdego`, `roboczyć`, `szubko`, `dokłądny`).
    - Usunąć emotikony (`:D`) i ujednolicić styl na mentorski (bez slangu).
    - Poprawić interpunkcję oraz spacje w nawiasach w treściach (np. `(np. ...)`).
  - Kryteria akceptacji:
    - Copy jest poprawne językowo i spójne stylistycznie na całej stronie.
    - Weryfikacja: nie jest wymagana (COPY-only).

  - **Zrobione 2025-12-19**:
    - Poprawiono literówki, polskie znaki, interpunkcję oraz spacje w nawiasach w `FAQ_ITEMS`.
    - Usunięto emotikony i ujednolicono styl odpowiedzi na bardziej mentorski.
    - Ujednolicono `answerSchemaText`, aby odpowiadało treści odpowiedzi (schema bez artefaktów w stylu „skontaktować się z przez”).

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
    - `wizytowki-dla-gastronomii-restoquality`
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
  - Kryteria akceptacji:
    - Powyższe pola są uzupełnione i spójne semantycznie.
    - `npm run lint` i `npm run build` przechodzą.
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

## Instrukcje: Treści i artykuły

- **ZASADY TECHNICZNE (aktualizacja 2025-12-18):**
  1. **Tytuł = pytanie**: Każdy artykuł musi mieć tytuł w formie pytania (np. „Dlaczego strona nie wyświetla się w Google i jak to naprawić?”).
  2. **Polskie znaki**: Treść artykułu MUSI zawierać polskie znaki diakrytyczne (ą, ę, ć, ł, ń, ó, ś, ź, ż). NIE używaj ASCII bez polskich znaków.
  3. **URL = tytuł**: Slug URL musi być 1:1 zgodny z tytułem (bez polskich znaków, z myślnikami zamiast spacji).
  4. **Czas czytania**: Obliczany na podstawie realnej liczby słów. 200 słów = 1 minuta. Celuj w **5-8 minut** (1000-1600 słów).
  5. **Wsparcie klastra usług**: Artykuły i narzędzia zawsze wspierają klaster tematyczny usług na stronie. Linkuj do odpowiednich usług.
  6. **Nie rozdrabniaj**: Jeśli temat jest odpowiedzią na jedno pytanie główne, zrób jeden kompleksowy artykuł zamiast kilku małych.

- **Cel serii**: zwiększać widoczność SEO ofert, domeny i narzędzi Arteon poprzez edukację w mentorskim tonie, bez żargonu (prowadź czytelnika do zrozumienia i działania, ale bez presji).
- **Docelowy czytelnik**: MŚP (usługi + e-commerce), często bez wiedzy technicznej. Tekst ma być zrozumiały bez znajomości SEO/UX, ale nie może być infantylny.
- **Ton**: konkretnie, spokojnie, bez korpo-języka i wodolejstwa. Każde pojęcie „z branży” wyjaśnij w 1-2 zdaniach i od razu pokaż zastosowanie.
- **WAŻNE: Ten styl dotyczy całego serwisu** — nie tylko artykułów. Stosuj go także na podstronach usług (`/uslugi/...`), narzędzi (`/narzedzia/...`), realizacji (`/realizacje/...`) oraz stronach informacyjnych (np. O nas, FAQ, Kontakt, Mapa strony).
- **Spójność z istniejącymi stronami ofert i narzędzi**:
  - Używaj podobnych typów sekcji i nagłówków jak na istniejących podstronach (np. „Co zyskujesz…”, „Na czym polega… i dlaczego działa?”, „Kiedy ma sens?”, „Proces”, „Jak mierzyć efekty?”, „Najczęstsze błędy”, „FAQ”, „Podsumowanie”).
  - Jeśli podajesz liczby/statystyki, dodaj źródło w formie linku (np. „(źródło)”) tak jak na stronach ofert.
- **Ton i rola autora**:
  - Występujesz jako mentor i przewodnik.
  - Pozycja komunikacyjna: „Jestem kilka kroków dalej, rozumiem proces i spokojnie przeprowadzę Cię przez decyzję.”
  - Nie popisujesz się wiedzą techniczną i nie „sprzedajesz się” w treści.
- **KLUCZOWE: Maksymalna prostota i przyjazność** (aktualizacja 2025-12-18):
  - **Pisz tak, żeby zrozumiało 5-letnie dziecko i 60-letnia osoba bez wiedzy technicznej.**
  - **Każdy termin techniczny natychmiast wyjaśniaj** — po użyciu terminu od razu odpowiedz na pytania: „Co to jest?” i „Po co to?”.
  - **Każde zdanie = logiczny ciąg dalszy** — bez skoków myślowych, płynna narracja jak opowieść.
  - **Ludzki język** — pisz jak do znajomego przy kawie, nie jak korporacyjna broszura.
  - **Instrukcje krok po kroku** — przy podstronach narzędzi Arteon (oraz artykułach o narzędziach) dodawaj sekcję „Jak to zrobić w naszym narzędziu” z prostym przewodnikiem.
  - Przykład dobrego wyjaśnienia:
    - ❌ „Wygeneruj favicon.ico i apple-touch-icon.png”
    - ✅ „Stwórz małą ikonkę, która pojawi się na karcie przeglądarki (to właśnie favicon — miniaturowa ikona Twojej strony). Dzięki niej Twoja strona wygląda profesjonalnie i łatwiej ją znaleźć wśród wielu otwartych kart.”
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
- **Struktura** (aktualizacja 2025-12-18):
  - Poniższy układ to **punkt wyjścia**, nie sztywny szablon:
    - Wstęp (o czym artykuł, co czytelnik zyska)
    - Wyjaśnienie problemu/tematu (co to jest, dlaczego ważne)
    - Rozwiązanie / kroki / proces
    - Najczęstsze błędy lub pułapki
    - Podsumowanie + CTA
  - **Dopasuj strukturę do tematu**. Jeśli logiczny podział wymaga innego układu — zrób inaczej. Ważne, żeby artykuł miał sens i płynnie prowadził czytelnika, nie żeby pasował do szablonu.
  - Przykłady elastyczności:
    - Artykuł o narzędziu → może mieć dużą sekcję „Jak to zrobić krok po kroku”.
    - Artykuł porównawczy → może mieć strukturę „Opcja A vs Opcja B”.
    - Artykuł o procesie → może mieć oś czasu zamiast sekcji.

### Co robić, a czego NIE robić (aktualizacja 2025-12-18)

**✅ TAK — rób to:**
- Zacznij od konkretu, nie od wstępu o wstępie
- Wyjaśniaj terminy od razu po ich użyciu (w nawiasie lub w następnym zdaniu)
- Używaj analogii i przykładów z życia („Pomyśl o tym jak o...”, „Wyobraź sobie, że...”)
- Pisz jak do znajomego — naturalnie, bez sztywności
- Dodawaj instrukcje krok po kroku do narzędzi Arteon
- Linkuj do powiązanych artykułów i usług tam, gdzie ma to sens
- Używaj pytań jako nagłówków (np. „Ile to kosztuje?”, „Kiedy warto?”)
- Kończ podsumowaniem z 3-5 konkretnymi wnioskami

**❌ NIE — unikaj tego:**
- Nie zaczyniaj od ogólników („W dzisiejszych czasach...”, „Jak wszyscy wiemy...”)
- Nie używaj żargonu bez wyjaśnienia (SEO, CTA, long-tail — zawsze wyjaśnij)
- Nie pisz korpo-językiem („kompleksowe rozwiązania”, „innowacyjne podejście”)
- Nie kopiuj struktury bezmyślnie — dopasuj do tematu
- Nie twórz checklist ani list do odhaczania
- Nie obiecuj rezultatów ani gwarancji
- Nie upychaj słów kluczowych sztucznie
- Nie pisz długich wstępów przed przejściem do sedna

- **Zakaz checklist**: nie twórz w artykułach sekcji „Checklista” ani list „do odhaczania”. Jeśli chcesz dać część wdrożeniową, opisz kroki w tekście, a na końcu zrób „Podsumowanie: priorytety”.
- **Konkret zamiast ogólników**: jeśli temat jest odpowiedzią na jedno pytanie główne, zrób jeden kompleksowy artykuł zamiast kilku małych.
- **Ludzki język** — pisz jak do znajomego przy kawie, nie jak korporacyjna broszura.
- **Instrukcje krok po kroku** — przy podstronach narzędzi Arteon (oraz artykułach o narzędziach) dodawaj sekcję „Jak to zrobić w naszym narzędziu” z prostym przewodnikiem.
- Przykład dobrego wyjaśnienia:
    - ❌ „Wygeneruj favicon.ico i apple-touch-icon.png”
    - ✅ „Stwórz małą ikonkę, która pojawi się na karcie przeglądarki (to właśnie favicon — miniaturowa ikona Twojej strony). Dzięki niej Twoja strona wygląda profesjonalnie i łatwiej ją znaleźć wśród wielu otwartych kart.”
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
- **Struktura** (aktualizacja 2025-12-18):
  - Poniższy układ to **punkt wyjścia**, nie sztywny szablon:
    - Wstęp (o czym artykuł, co czytelnik zyska)
    - Wyjaśnienie problemu/tematu (co to jest, dlaczego ważne)
    - Rozwiązanie / kroki / proces
    - Najczęstsze błędy lub pułapki
    - Podsumowanie + CTA
  - **Dopasuj strukturę do tematu**. Jeśli logiczny podział wymaga innego układu — zrób inaczej. Ważne, żeby artykuł miał sens i płynnie prowadził czytelnika, nie żeby pasował do szablonu.
  - Przykłady elastyczności:
    - Artykuł o narzędziu → może mieć dużą sekcję „Jak to zrobić krok po kroku”.
    - Artykuł porównawczy → może mieć strukturę „Opcja A vs Opcja B”.
    - Artykuł o procesie → może mieć oś czasu zamiast sekcji.

### Dodatkowe reguły

- każdy komponent i cały kod powinien być zgodny z najlepszymi praktykami Next
- przy tworzeniu nowych hooków lub komponentów sprawdź raport mówiący o tych które już są, jeśli są już podobne to ich użyj lub stwórz nowy wariant / propsy (bez require), które będą przydatne
- nie zmieniaj wyglądu, treści ani funkcjonalności, chyba że wskazano inaczej
- nie wprowadzaj w `robots.tsx` globalnej blokady indeksacji całej witryny (blokowanie `/` jest zabronione)
- nigdy nie zmieniaj numerów zadań


---

## Zadania: Artykuły (backlog)

- ❌ **[2] Blog: Jakie materiały są potrzebne, żeby móc zlecić stronę internetową?**

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

- ❌ **[3] Blog: Struktura strony usługowej: jak ułożyć sekcje, żeby użytkownik łatwiej zrozumiał ofertę?**

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

- ❌ **[6] Blog: 10 najczęstszych błędów w sekcji „O nas” i jak je poprawić**

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

- ❌ **[7] Blog: Jak zaprojektować stronę kontaktową, która zwiększa liczbę zapytań?**

  - **Konspekt (H2/H3)**:
    - H2: Cel strony kontaktowej: więcej zapytań vs lepsza jakość leadów
    - H2: Elementy obowiązkowe (telefon/e-mail/formularz/adres/godziny/mapa)
    - H2: Formularz: minimum pól + kiedy dodać pytania kwalifikacyjne
    - H2: Mikrocopy, które zwiększa wysyłkę (czas odpowiedzi, co dalej, „bez spamu”)
    - H2: Wiarygodność i bezpieczeństwo (RODO, polityka prywatności, antyspam)
    - H2: Mobile UX (czytelność, kliknięcie w numer, błędy walidacji)
    - H2: Jak mierzyć efekty (konwersje: formularz/telefon/mail)
    - H2: Najczęstsze błędy + szybkie poprawki

- ❌ **[18] Blog: Mapa strony dla użytkownika: jak ją wykorzystać do lepszej indeksacji?**

  - **Konspekt (H2/H3)**:
    - H2: Mapa strony dla użytkownika vs sitemap.xml (różnice)
    - H2: Kiedy mapa strony ma sens (rozbudowana oferta/blog/narzędzia)
    - H2: Jak zbudować strukturę (kategorie, głębokość, priorytety)
    - H2: Jak mapa strony wspiera SEO (linkowanie wewnętrzne i crawl)
    - H2: Czego nie dodawać (noindex, duplikaty, strony techniczne)
    - H2: Jak utrzymać aktualność (proces i owner)
    - H2: Podsumowanie wdrożenia + najczęstsze błędy

- ❌ **[25] Blog: Kiedy przebudowa strony ma sens, a kiedy wystarczy jej optymalizacja?**

  - **Konspekt (H2/H3)**:
    - H2: Jak rozpoznać, co jest problemem (treść/UX/SEO/technologia)
    - H2: Kiedy wystarczy optymalizacja (quick wins: treści, szybkość, konwersja)
    - H2: Kiedy przebudowa jest konieczna (architektura, skalowanie, bezpieczeństwo)
    - H2: Ryzyka przebudowy dla SEO i jak je ograniczyć (audyt, 301, canonical)
    - H2: Podejście etapowe (co robić po kolei, żeby nie zatrzymać biznesu)
    - H2: Proste drzewko decyzyjne (pytania „tak/nie”)
    - H2: Co dalej (CTA: audyt + plan działań)

- ❌ **[107] Blog: Karta produktu na stronie: 15 elementów, które zwiększają sprzedaż bez obniżania ceny**

  - **Konspekt (H2/H3)**:
    - H2: Co użytkownik musi zrozumieć w 10 sekund (co, dla kogo, efekt)
    - H2: 15 elementów skutecznej karty produktu (lista + krótkie uzasadnienia)
    - H2: Opis produktu: język korzyści + konkrety (jak pisać, żeby sprzedawało)
    - H2: Redukcja obiekcji (dostawa, zwroty, gwarancja, płatności, zaufanie)
    - H2: UX i mobile (czytelność, kolejność sekcji, sticky CTA, zdjęcia)
    - H2: SEO karty produktu (unikalny content + dane strukturalne Product/Offer)
    - H2: Analityka i testy (add-to-cart, porzucone koszyki, A/B w realnych warunkach)

- ❌ **[108] Blog: Meta title i meta description: jak pisać, żeby zwiększyć CTR i nie być uciętym w Google?**

  - **Konspekt (H2/H3)**:
    - H2: Po co są meta title i description (co zyskujesz: więcej wejść z tych samych pozycji)
    - H2: Jak Google realnie je wyświetla (kiedy podmienia, a kiedy trzyma Twoją wersję)
    - H2: Długość i czytelność: zasady, które działają (bez „magicznych liczb”)
    - H2: Wzory do skopiowania (usługa lokalna / usługa B2B / sklep / artykuł)
    - H2: Najczęstsze błędy (duplikaty, brak konkretu, obietnice bez pokrycia)
    - H2: Jak sprawdzać i poprawiać meta szybko (narzędzie: licznik meta title/description)
    - H2: Podsumowanie: 5 priorytetów na start + CTA (pozycjonowanie stron / konsultacja)

- ❌ **[109] Blog: Favicon i ikony strony: co przygotować, żeby działały w przeglądarkach, Google i Lighthouse?**

  - **Konspekt (H2/H3)**:
    - H2: Co daje favicon i ikony (wiarygodność marki + spójność na mobile)
    - H2: Jakie pliki są potrzebne w praktyce (favicon.ico, apple-touch-icon, ikony 192/512)
    - H2: Skąd biorą się problemy (zły rozmiar, tło, cache, brak manifestu)
    - H2: Jak przygotować zestaw ikon w 10 minut (narzędzie: generator favicon)
    - H2: Jak sprawdzić, czy wszystko działa (Lighthouse, przeglądarki, urządzenia)
    - H2: Najczęstsze błędy i poprawki (na przykładach)
    - H2: Podsumowanie + CTA (strony internetowe / identyfikacja wizualna)

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

  - Cel i uzasadnienie:
    - Użytkownik często ma prosty problem: „strona nie rośnie w Google” i nie wie od czego zacząć.
    - Artykuł będzie lead magnetem do usługi `/uslugi/marketing/audyt-seo` i uporządkuje temat bez żargonu.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł z planem krok po kroku: techniczne minimum (indeksacja, sitemap, canonical), treść, linkowanie, podstawy PageSpeed.
    - Sekcja „Jak zebrać dane w 5 minut” (GSC + Lighthouse) + jak interpretować wynik.
  - Pliki i ścieżki:
    - `data/pl/blog.json` (nowy wpis na górze listy `articles[]`)
    - `public/assets/blog/jak-zrobic-audyt-seo-samemu-i-co-sprawdzic-jako-pierwsze/jak-zrobic-audyt-seo-samemu-i-co-sprawdzic-jako-pierwsze.webp`
  - SEO:
    - URL/slug: `/edukacja/seo/jak-zrobic-audyt-seo-samemu-i-co-sprawdzic-jako-pierwsze`
    - `metadata.title`: `Jak zrobić audyt SEO samemu i co sprawdzić jako pierwsze? | Arteon`
    - `metadata.description`: `Prosty plan audytu SEO w 30 minut: co sprawdzić, jak zebrać dane i jak ustawić priorytety. Bez żargonu, z przykładami.`
    - OG image: `public/assets/blog/jak-zrobic-audyt-seo-samemu-i-co-sprawdzic-jako-pierwsze/jak-zrobic-audyt-seo-samemu-i-co-sprawdzic-jako-pierwsze.webp`
    - Schema: `Article` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Artykuł ma 6–9 minut czytania i zawiera min. 6 FAQ.
    - Zawiera link do: `/uslugi/marketing/audyt-seo` oraz do min. 2 powiązanych artykułów.
    - Zawiera 1 sekcję „priorytety” (co robić najpierw i dlaczego) zamiast checklisty.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-045] Artykuł: „Co to jest canonical URL i jak sprawdzić, czy Twoja strona ma go ustawionego?”**

  - Cel i uzasadnienie:
    - Canonical to częsty, „niewidoczny” problem: duplikacja adresów, parametry, http/https, www/non-www.
    - Artykuł wspiera usługę SEO i zmniejsza liczbę błędnych wdrożeń (szczególnie przy WordPress).
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Artykuł wyjaśnia: co to jest canonical, po co jest, jak go sprawdzić (view-source/devtools), typowe błędy i scenariusze.
    - Przykłady do skopiowania: kiedy canonical ma sens, a kiedy szkodzi.
  - Pliki i ścieżki:
    - `data/pl/blog.json` (nowy wpis na górze listy `articles[]`)
    - `public/assets/blog/co-to-jest-canonical-url-i-jak-sprawdzic-czy-twoja-strona-ma-go-ustawionego/co-to-jest-canonical-url-i-jak-sprawdzic-czy-twoja-strona-ma-go-ustawionego.webp`
  - SEO:
    - URL/slug: `/edukacja/seo/co-to-jest-canonical-url-i-jak-sprawdzic-czy-twoja-strona-ma-go-ustawionego`
    - `metadata.title`: `Co to jest canonical URL i jak sprawdzić, czy Twoja strona ma go ustawionego? | Arteon`
    - `metadata.description`: `Wyjaśniamy canonical prostym językiem. Zobacz, jak sprawdzić ustawienie, kiedy pomaga, a kiedy może zaszkodzić SEO.`
    - OG image: `public/assets/blog/co-to-jest-canonical-url-i-jak-sprawdzic-czy-twoja-strona-ma-go-ustawionego/co-to-jest-canonical-url-i-jak-sprawdzic-czy-twoja-strona-ma-go-ustawionego.webp`
    - Schema: `Article` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Artykuł ma min. 5 minut czytania.
    - Zawiera min. 6 FAQ + 2 krótkie przykłady scenariuszy (np. parametry UTM, duplikaty kategorii/stron).
    - Zawiera CTA do `/uslugi/marketing/optymalizacja-seo` lub `/uslugi/marketing/audyt-seo`.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-046] Artykuł: „Jak sprawdzić kontrast kolorów i zrobić to dobrze (WCAG AA/AAA)?”**

  - Cel i uzasadnienie:
    - Kontrast to szybka do naprawy rzecz, która poprawia czytelność i zmniejsza frustrację użytkownika.
    - Artykuł prowadzi do narzędzia kontrastu i usług WCAG/UX.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Artykuł tłumaczy: co to jest kontrast, progi AA/AAA, typowe pułapki (placeholder, linki, disabled), i jak dobrać kolor.
    - Sekcja „Jak to zrobić w naszym narzędziu” krok po kroku.
  - Pliki i ścieżki:
    - `data/pl/blog.json` (nowy wpis na górze listy `articles[]`)
    - `public/assets/blog/jak-sprawdzic-kontrast-kolorow-i-zrobic-to-dobrze-wcag-aa-aaa/jak-sprawdzic-kontrast-kolorow-i-zrobic-to-dobrze-wcag-aa-aaa.webp`
  - SEO:
    - URL/slug: `/edukacja/design/jak-sprawdzic-kontrast-kolorow-i-zrobic-to-dobrze-wcag-aa-aaa`
    - `metadata.title`: `Jak sprawdzić kontrast kolorów i zrobić to dobrze (WCAG AA/AAA)? | Arteon`
    - `metadata.description`: `Proste wyjaśnienie kontrastu i WCAG. Sprawdź kolory, zobacz wynik AA/AAA i dobierz wariant, który będzie czytelny dla użytkowników.`
    - OG image: `public/assets/blog/jak-sprawdzic-kontrast-kolorow-i-zrobic-to-dobrze-wcag-aa-aaa/jak-sprawdzic-kontrast-kolorow-i-zrobic-to-dobrze-wcag-aa-aaa.webp`
    - Schema: `Article` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Artykuł zawiera min. 5 minut czytania i zawiera min. 6 FAQ.
    - Zawiera link do narzędzia: `/narzedzia/tester-kontrastu-kolorow-wcag`.
    - Zawiera 3–5 przykładów „częstych błędów” z krótkim wyjaśnieniem, dlaczego są problemem.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-047] Artykuł: „Jak zrobić kod QR, który działa w druku i na telefonie?”**

  - Cel i uzasadnienie:
    - Wiele kodów QR nie działa, bo są za małe, mają za niski kontrast albo złe marginesy.
    - Artykuł wspiera generator QR i ofertę projektów do druku.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Wyjaśnienie: jak działa QR, co to jest „margines” (quiet zone), jaka wielkość do druku, jak testować.
    - Sekcja „Jak to zrobić w naszym narzędziu” (rozmiar, margines, korekcja błędów, kolory).
  - Pliki i ścieżki:
    - `data/pl/blog.json` (nowy wpis na górze listy `articles[]`)
    - `public/assets/blog/jak-zrobic-kod-qr-ktory-dziala-w-druku-i-na-telefonie/jak-zrobic-kod-qr-ktory-dziala-w-druku-i-na-telefonie.webp`
  - SEO:
    - URL/slug: `/edukacja/branding/jak-zrobic-kod-qr-ktory-dziala-w-druku-i-na-telefonie`
    - `metadata.title`: `Jak zrobić kod QR, który działa w druku i na telefonie? | Arteon`
    - `metadata.description`: `Zobacz, jak zrobić kod QR, który naprawdę działa: dobry rozmiar, margines, kontrast i testy. Z instrukcją w naszym generatorze.`
    - OG image: `public/assets/blog/jak-zrobic-kod-qr-ktory-dziala-w-druku-i-na-telefonie/jak-zrobic-kod-qr-ktory-dziala-w-druku-i-na-telefonie.webp`
    - Schema: `Article` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Artykuł zawiera min. 5 konkretnych przykładów zastosowań (wizytówka, menu, ulotka, plakat, strona www).
    - Zawiera link do narzędzia: `/narzedzia/generator-kodu-qr`.
    - Zawiera min. 6 FAQ.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

  - Cel i uzasadnienie:
    - Użytkownik chce „ładne zdjęcie”, ale często wrzuca plik 4000px i 5MB, który spowalnia stronę.
    - Artykuł poprowadzi do 2 narzędzi: kadrowania/resize oraz konwersji WebP.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Prosty proces: wybór kadru, docelowy rozmiar, eksport do WebP, test przed publikacją.
    - Sekcja „Jak to zrobić w naszych narzędziach” z krokami.
  - Pliki i ścieżki:
    - `data/pl/blog.json` (nowy wpis na górze listy `articles[]`)
    - `public/assets/blog/jak-przygotowac-zdjecia-na-strone-i-social-media-kadrowanie-i-webp/jak-przygotowac-zdjecia-na-strone-i-social-media-kadrowanie-i-webp.webp`
  - SEO:
    - URL/slug: `/edukacja/zdjecia/jak-przygotowac-zdjecia-na-strone-i-social-media-kadrowanie-i-webp`
    - `metadata.title`: `Jak przygotować zdjęcia na stronę i social media (kadrowanie + WebP)? | Arteon`
    - `metadata.description`: `Prosty sposób na szybkie zdjęcia: dobry kadr, rozsądny rozmiar i lekki format WebP. Z instrukcją w narzędziach Arteon.`
    - OG image: `public/assets/blog/jak-przygotowac-zdjecia-na-strone-i-social-media-kadrowanie-i-webp/jak-przygotowac-zdjecia-na-strone-i-social-media-kadrowanie-i-webp.webp`
    - Schema: `Article` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Zawiera linki do narzędzi: `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia` oraz `/narzedzia/jpg-png-na-webp-bez-limitu`.
    - Zawiera min. 6 FAQ i 3 scenariusze (strona główna, blog, social media).
    - Zawiera jasne rekomendacje „co jest za duże” i „co jest OK” (bez obietnic wyników).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

  - Cel i uzasadnienie:
    - W praktyce wiele firm ma tylko plik z Canvy lub JPG z białym tłem i nie wie, co z tym zrobić.
    - Artykuł wspiera ofertę projektu logo/identyfikacji oraz narzędzie favicon (logo → ikony).
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Wyjaśnienie formatów: kiedy PNG, kiedy SVG, jak przygotować tło, jak dobrać rozmiar i wagę.
    - Sekcja „Jak zrobić z logo zestaw ikon” (favicon + apple/android) w naszym narzędziu.
  - Pliki i ścieżki:
    - `data/pl/blog.json` (nowy wpis na górze listy `articles[]`)
    - `public/assets/blog/jak-przygotowac-logo-do-internetu-png-svg-tlo-i-rozmiary/jak-przygotowac-logo-do-internetu-png-svg-tlo-i-rozmiary.webp`
  - SEO:
    - URL/slug: `/edukacja/branding/jak-przygotowac-logo-do-internetu-png-svg-tlo-i-rozmiary`
    - `metadata.title`: `Jak przygotować logo do internetu: PNG, SVG, tło i rozmiary? | Arteon`
    - `metadata.description`: `Prosty przewodnik: jakie formaty plików logo są potrzebne w internecie i jak je przygotować. Z instrukcją tworzenia ikon favicon.`
    - OG image: `public/assets/blog/jak-przygotowac-logo-do-internetu-png-svg-tlo-i-rozmiary/jak-przygotowac-logo-do-internetu-png-svg-tlo-i-rozmiary.webp`
    - Schema: `Article` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Artykuł ma 5–8 minut czytania i zawiera min. 6 FAQ.
    - Zawiera link do narzędzia: `/narzedzia/darmowy-generator-favicon-ico`.
    - Zawiera CTA do: `/uslugi/projekty-graficzne/projekt-logo` lub `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`.
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

- ❌ **[IDEA-009] Generator palet kolorów: eksport do CSS variables/Tailwind + kopiowanie całej palety**

  - Nazwa planowanego hooka: `useDebouncedValue` lub `useDebouncedEffect`.
  - Miejsca użycia:
    - `hooks/useSearch.ts` (debounce query)
    - `components/sections/tools/QrCodeGenerator.tsx` (debounce generowania podglądu QR)
  - Plan migracji (bez zmiany UI/UX):
    - Dodać hook do `hooks/`.
    - Przepiąć oba miejsca na hook i usunąć lokalne `setTimeout`/`clearTimeout`.
    - Zachować aktualne opóźnienia (`150ms` i `300ms`).

  - Nazwa planowanego utila:
    - const: `SUPPORTED_IMAGE_UPLOAD_TYPES`
    - helper: `isSupportedImageUploadType(file)`
  - Miejsca użycia:
    - `components/sections/tools/FaviconGenerator.tsx`
    - `components/sections/tools/PaletteExtractor.tsx`
  - Plan migracji (bez zmiany UI/UX):
    - Dodać shared util (np. `lib/tools/image/uploadTypes.ts`).
    - Zastąpić lokalne `SUPPORTED_TYPES` importem z utila.

  - Nazwa planowanego utila: `downloadBlob` lub `downloadObjectUrlWithAutoRevoke`.
  - Miejsca użycia:
    - `components/sections/tools/FaviconGenerator.tsx` (zipUrl)
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts` (zipUrl)
  - Plan migracji (bez zmiany UI/UX):
    - Dodać util obok `lib/tools/download.ts`.
    - Przepiąć oba miejsca na util (w środku: `URL.createObjectURL`, `downloadFromUrl`, revoke po czasie).

  - Nazwa planowanego modułu: `lib/tools/clipboard.ts` lub hook `useClipboard`.
  - Miejsca użycia:
    - `hooks/useCopyToClipboard.ts` (copy text + fallback textarea)
    - `components/sections/tools/EmailSignatureGenerator/useSignatureCopy.ts` (copy HTML + fallback clipboard)
  - Plan migracji (bez zmiany UI/UX):
    - Wydzielić wspólne „capability detection” i obsługę błędów.
    - Zostawić dedykowaną ścieżkę dla kopiowania HTML (selection + `execCommand`) i wspólne API do ustawiania statusu.

- ❌ **[CONTENT-001] Poprawa merytoryczna artykułu o kolorystyce i decyzjach zakupowych]**

  - Cel: zwiększyć wiarygodność cytowanych danych w artykule "Jak kolorystyka wpływa na decyzje zakupowe klientów?" poprzez dodanie bardziej szczegółowych odniesień do badań.
  - Zakres:
    - Artykuł w `data/pl/blog.json` o slug `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`.
    - Dodać konkretne daty badań lub bezpośrednie linki do raportów/statystyk (np. dla CCICOLOR, Lucidpress, HubSpot), jeśli dostępne.
    - Jeśli dokładne źródła nie są dostępne, zaznaczyć to jako szacunkowe dane z ogólnym odniesieniem do źródła.
  - Kryteria akceptacji:
    - Cytowane statystyki mają bardziej precyzyjne odniesienia lub wyjaśnienie ich ogólnego charakteru.
    - Brak zmian w UI/UX lub głównych tezach artykułu.
    - Weryfikacja: nie jest wymagana (content-only).
