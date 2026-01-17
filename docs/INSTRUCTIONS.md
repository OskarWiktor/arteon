# Arteon - INSTRUCTIONS (read before every task)

## Spis treści

- [Ustawienia projektu (stack)](#ustawienia-projektu-stack)
- [Źródła kontekstu (katalogi)](#źródła-kontekstu-katalogi)
- [Zasady ogólne (zawsze)](#zasady-ogólne-zawsze)
- [Instrukcje operacyjne](#instrukcje-operacyjne)
  - [Kodowanie plików — UTF-8](#kodowanie-plików--utf-8-obowiązkowo-aktualizacja-2025-12-31)
- [Definition of Done (dla każdego zadania)](#definition-of-done-dla-każdego-zadania)
- [Instrukcje: Treści i artykuły](#instrukcje-treści-i-artykuły) → **osobny plik: `docs/CONTENT_INSTRUCTIONS.md`**

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

- `docs/COMPONENTS_CATALOG.md` - opis wszystkich komponentów,
- `docs/HOOKS_CATALOG.md` - opis wszystkich hooków i utilis i lib,
- `docs/TOOLS_CATALOG.md` - opis wszystkich narzędzi,
- `docs/PROJECTS_CATALOG.md` - opis wszystkich realizacji / projektów firmowych,
- `docs/PAGES_CATALOG.md` - opis wszystkich stron,
- `docs/BLOG_CATALOG.md` - opis wszystkich artykułów na blogu,

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

### Standard nazewnictwa plików (aktualizacja 2025-12-31)

Każdy plik z kodem źródłowym musi mieć nazwę jasno wskazującą jego przeznaczenie i typ.

**Konwencje nazewnictwa:**

- **Komponenty React** (`components/`): `PascalCase.tsx` — nazwa = nazwa eksportowanego komponentu (np. `Button.tsx`, `HeroBanner.tsx`)
- **Hooki** (`hooks/`): `useCamelCase.ts` — prefiks `use` + opisowa nazwa (np. `useEscapeKey.ts`, `useFocusTrap.ts`)
- **Serwisy danych** (`lib/`): `camelCaseDataService.ts` — sufiks `DataService` dla plików pobierających dane (np. `blogDataService.ts`, `projectsDataService.ts`)
- **Utile** (`utils/`, `lib/tools/`): `camelCase.ts` — nazwa funkcji głównej lub opisowa (np. `slugify.ts`, `colorConvert.ts`)
- **Typy** (`types/`): `camelCase.ts` — nazwa domeny (np. `article.ts`, `project.ts`)
- **Konfiguracja** (`lib/config/`): `camelCase.ts` — nazwa modułu konfiguracji

**Zakazane nazwy (zbyt generyczne):**

- ❌ `helper.ts`, `helpers.ts`, `utils.ts` (bez kontekstu)
- ❌ `index.ts` jako barrel export (chyba że to root pakietu)
- ❌ `data.ts`, `types.ts` (bez prefiksu domeny)

**Checklist przed utworzeniem pliku:**

1. Czy nazwa mówi, co plik robi? (nie gdzie jest)
2. Czy nazwa odróżnia typ pliku? (komponent vs hook vs util)
3. Czy nazwa jest spójna z istniejącymi plikami w katalogu?
4. Czy eksportowana funkcja/komponent ma nazwę zgodną z nazwą pliku?

### UI / styl (spójność serwisu)

- Typografia: **globals-first** (bazujemy na `.h*` i `.p` / globalnych regułach), a wyjątki rozwiązujemy przez klasy.
- Kolory tekstu: wymuszamy użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do `Badge` (jeden komponent + warianty); `Tag` docelowo nie istnieje.
- `Button`: warianty „jednorazowe” nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`.
- `Tooltip`: zostaje (jedyny wyjątek - może być chwilowo nieużywany).
- Ikony mają zawsze mieć kolor `text-slate-800`.

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
  - jeśli zadanie jest **w 100% zrobione** (✅) i **nie** jest z grupy `AUDIT-*`:
    - zadanie **MUSI** zostać przeniesione do `docs/DONE_TASKS.md` (z datą i podsumowaniem); najnowsze wpisy umieszczaj najwyżej pod daną datą; nowe daty twórz na górze pliku,
    - a następnie **MUSI** zostać usunięte z listy w `docs/TASKS.md` (w `docs/TASKS.md` nie trzymamy zadań ✅ poza `AUDIT-*`).
  - jeśli zadanie jest 🟡 lub ❌: zostaje w `docs/TASKS.md`.
  - jeśli zadanie jest z grupy `AUDIT-*`: zadanie zawsze zostaje w `docs/TASKS.md`, a do `docs/DONE_TASKS.md` dodaj tylko wpis z zakresem wykonanej pracy (np. co sprawdzono + jakie zadania/pomysły dopisano)
  - jeśli zadanie jest z grupy `AUDIT-*` i wykrywasz problemy: wynik audytu MUSI być zapisany jako normalne zadania (np. `COPY-*`, `SEO-*`, `CONTENT-*`, `CLEANUP-*`) z kryteriami akceptacji; sam opis typu „wykryte problemy” bez zadań follow-up jest niepoprawny
  - Zadania artykułowe (sekcja „Zadania: Artykuły”) domykamy tak samo jak resztę: wpis do `docs/DONE_TASKS.md` + aktualizacja `docs/BLOG_CATALOG.md`.
- **KRYTYCZNE (obowiązkowe): po każdym zadaniu/modyfikacji aktualizujesz odpowiedni plik katalogu** (`docs/COMPONENTS_CATALOG.md`, `docs/HOOKS_CATALOG.md`, `docs/TOOLS_CATALOG.md`, `docs/PROJECTS_CATALOG.md`, `docs/PAGES_CATALOG.md`, `docs/BLOG_CATALOG.md`).
  - Dotyczy zarówno dodania nowych elementów, jak i modyfikacji istniejących.
  - Dotyczy także zmian „małych” (np. dopisanie propsa, poprawka w istniejącym komponencie, zmiana treści artykułu).
  - **To jest krok wymagany do domknięcia zadania** (robimy go razem z wpisem do `docs/DONE_TASKS.md`).

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

- Jeśli edytujesz treści w JSON (np. `data/pl/blog.json`) i w copy pojawiają się typograficzne cudzysłowy `„”`, to:

  - w treści preferuj zwykłe cudzysłowy ASCII `"` (żeby uniknąć problemów z automatycznymi edycjami),
  - a jeśli musisz wyszukiwać/patchować fragment z `„”` w parametrach narzędzi (tool-call JSON), używaj escape: `\u201e` (dla `„`) i `\u201d` (dla `”`) zamiast wklejać znaki bezpośrednio.

### Kodowanie plików — UTF-8 (obowiązkowo, aktualizacja 2025-12-31)

Wszystkie pliki tekstowe w repo MUSZĄ być zapisane w kodowaniu **UTF-8 bez BOM**.

**Zasady:**

1. **Nowe teksty**: mogą być dodawane do repo TYLKO w UTF-8. Niedopuszczalne są inne kodowania (Windows-1250, ISO-8859-2, CP1252 itp.).

2. **Polskie znaki**: używaj prawidłowych polskich znaków diakrytycznych: `ą, ę, ć, ł, ń, ó, ś, ź, ż` (oraz wielkie: `Ą, Ę, Ć, Ł, Ń, Ó, Ś, Ź, Ż`).

3. **Błędne znaki (ZABLOKOWANE)**: jeśli w tekście pojawiają się znaki typu `ê, ³, ¹, æ, œ, ¿, Ÿ, ñ, £` zamiast polskich — **commit jest ZABLOKOWANY**. Te znaki powstają z błędnej konwersji Windows-1250 → UTF-8.

**Mapowanie błędnych znaków na poprawne:**

| Błędny | Poprawny |
| ------ | -------- |
| `¹`    | `ą`      |
| `ê`    | `ę`      |
| `³`    | `ł`      |
| `œ`    | `ś`      |
| `¿`    | `ż`      |
| `Ÿ`    | `ź`      |
| `æ`    | `ć`      |
| `ñ`    | `ń`      |
| `£`    | `Ł`      |

**Checklist redakcyjna przed commit (dla plików z tekstem polskim):**

- [ ] Czy polskie znaki są prawidłowe? (nie ma `ê, ³, ¹, æ, œ, ¿`)
- [ ] Czy plik jest zapisany jako UTF-8?
- [ ] Czy w pliku nie ma BOM (Byte Order Mark)?

**Konfiguracja wymuszająca UTF-8:**

- `.editorconfig` — wymusza `charset = utf-8` dla wszystkich plików
- `.gitattributes` — wymusza `working-tree-encoding=UTF-8` dla plików źródłowych

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

## Instrukcje: Treści i artykuły

**⚠️ PEŁNE WYTYCZNE PRZENIESIONE DO OSOBNEGO PLIKU: `docs/CONTENT_INSTRUCTIONS.md`**

Przed napisaniem jakiejkolwiek treści (artykuł, strona, opis, FAQ, CTA, metadata) przeczytaj plik `CONTENT_INSTRUCTIONS.md` w całości.

**Kiedy czytać CONTENT_INSTRUCTIONS.md:**

- Tworzenie nowego artykułu blogowego
- Edycja istniejącego artykułu
- Tworzenie/edycja strony usługi, narzędzia, realizacji
- Pisanie FAQ, CTA, metadata.description, OpenGraph
- Pisanie mikrocopy w komponentach

**Kluczowe zasady (skrót):**

- Ton: afirmatywno-informacyjny, heurystyczno-edukacyjny, analityczno-diagnostyczny
- Excerpt: 220-230 znaków
- Linki wewnętrzne: minimum 6-8, zewnętrzne: minimum 4-6
- Przyciski CTA: opisowe („Sprawdź ofertę stron" zamiast „Strony internetowe”)
- Przykłady hipotetyczne: oznaczone jako „hipotetyczny" (bez przesady)
- Źródła: każda liczba/statystyka musi mieć źródło z linkiem
- Po zakończeniu zadania: zmiany przedstaw w formie tabeli

  - **Tytuły**: bez prefixów typu „Edukacja:", „Usługi:" itp. — sama nazwa kategorii (np. „Widoczność", „SEO", „Grafika").
  - **Opisy**: krótkie (maks. 2 zdania), ogólne, bez technicznych detali. Wzorzec: „Artykuły o [temat]." lub „Poradniki dotyczące [temat]."
  - **Bez wyjaśnień**: w opisach kategorii NIE wyjaśniaj terminów (np. „WebP to format, który..."). Wyjaśnienia należą do artykułów, nie do opisów hub.
  - **Bez zawężania kontekstu**: nie ograniczaj opisu do jednego kanału (np. „na stronie"). Usługi Arteon są szerokie (www, sklepy, grafika, marketing), a artykuły mogą dotyczyć różnych zastosowań (strona, social media, druk).
  - **Elastyczność**: opisy mają być uniwersalne — treści będą rozbudowywane, więc opis nie może być zbyt konkretny ani zawężający.
  - Przykłady:
    - ✅ „Widoczność" + „Artykuły o widoczności Twojej marki w sieci."
    - ✅ „Zdjęcia" + „Poradniki o zdjęciach i grafikach."
    - ✅ „SEO" + „Artykuły o pozycjonowaniu i widoczności w Google."
    - ❌ „Edukacja: Zdjęcia" + „WebP to format, który często waży mniej niż JPG..."
    - ❌ „Zdjęcia" + „Poradniki o zdjęciach na stronie." (zawęża do jednego kanału)

- **Analogie: nie nadużywaj (opcjonalnie)**: analogie nie są wymagane. Jeśli już pomagają w wyjaśnieniu trudnego pojęcia, użyj jednej, krótkiej i bez „scenek”.

- **Prawdziwość i jednoznaczność (obowiązkowo)**: każda informacja w treściach musi być w 100% zgodna z rzeczywistością. Nie ma miejsca na niedoprecyzowane sformułowania ani takie, które można błędnie zinterpretować.

  - **Zero pseudo-liczb**: nie podawaj sformułowań typu „nawet o kilkanaście procent”, „zwykle 6–12 miesięcy”, „większość zakupów”, jeśli nie podajesz warunków i źródła. Jeśli nie masz twardych danych, pisz opisowo i uczciwie: „to zależy od…”.
  - **Źródła dla danych**: jeśli podajesz liczby/statystyki, dodaj źródło w formie linku „(źródło)”. Używaj tylko wiarygodnych źródeł (Google Search Central, web.dev, dokumentacja narzędzi, raporty branżowe).
  - **Precyzja zamiast skrótów**: zamiast „Google premiuje szybkie strony” preferuj: „wydajność wpływa na doświadczenie użytkownika i jest częścią sygnałów jakości strony”.
  - **Spójność z UI/mikrocopy (obowiązkowo)**: jeśli w tekście podajesz instrukcję „kliknij X / wybierz Y”, nazwa przycisku/etykiety musi być 1:1 zgodna z realnym UI (nie wymyślaj elementów). Przykład: jeśli przycisk ma tekst `Kopiuj stopkę (Gmail / Outlook)`, instrukcja nie może mówić „Kliknij „Skopiuj HTML””.

- **ZASADY TECHNICZNE DLA ARTYKUŁÓW (blog) (aktualizacja 2026-01-16):**

  1. **Tytuł = pytanie**: Każdy artykuł blogowy musi mieć tytuł w formie pytania (np. „Dlaczego strona nie wyświetla się w Google i jak to naprawić?").
  2. **Excerpt 220-230 znaków (OBOWIĄZKOWO)**: Pole `excerpt` musi mieć **dokładnie 220-230 znaków** (ze spacjami). Excerpt wyświetla się wszędzie, gdzie pojawiają się artykuły (listy, karuzele, linki). Ma zachęcać do kliknięcia, być spójny z tonem marki i kontekstem artykułu. Nie może być za krótki (za mało informacji) ani za długi (obcinany w UI).
  3. **Polskie znaki**: Treść artykułu blogowego MUSI zawierać polskie znaki diakrytyczne (ą, ę, ć, ł, ń, ó, ś, ź, ż). NIE używaj ASCII bez polskich znaków.
  4. **URL = tytuł**: Slug URL artykułu musi być 1:1 zgodny z tytułem (bez polskich znaków, z myślnikami zamiast spacji).
  5. **Czas czytania (AKTUALIZACJA 2025-12-24)**: Obliczany na podstawie realnej liczby słów. 200 słów = 1 minuta. Celuj w **9-14 minut** (1800-2800 słów). Artykuły mają być wnikliwe i kompleksowe — odpowiadać na główne pytanie z tytułu w sposób dogłębny. **Po każdej rozbudowie tekstu przelicz liczbę słów i zaktualizuj `readingTime`.**
  6. **Wsparcie klastra usług**: Artykuły i narzędzia zawsze wspierają klaster tematyczny usług na stronie. Linkuj do odpowiednich usług.
  7. **Nie rozdrabniaj**: Jeśli temat artykułu jest odpowiedzią na jedno pytanie główne, zrób jeden kompleksowy artykuł zamiast kilku małych.
  8. **Linki wewnętrzne — minimum (AKTUALIZACJA 2025-12-24)**: Każdy artykuł musi zawierać **minimum 6-8 linków wewnętrznych** do innych stron serwisu (usługi, narzędzia, inne artykuły). Linki muszą być naturalnie wplecione w tekst. Proporcjonalnie do dłuższego czasu czytania (9-14 min) wymagana jest większa gęstość linkowania.
  9. **Linki zewnętrzne — minimum (AKTUALIZACJA 2025-12-24)**: Każdy artykuł musi zawierać **minimum 4-6 linków zewnętrznych** do wiarygodnych źródeł (dokumentacja, badania, narzędzia, oficjalne strony organizacji). Wszystkie z atrybutami `target='_blank' rel='noopener noreferrer'`.
  10. **Widoczność linków w tekście (AKTUALIZACJA 2025-12-24)**: Każdy link w treści artykułu MUSI mieć widoczne podkreślenie. Używaj klasy `class='underline'` dla linków zewnętrznych i `class='inline-link'` dla linków wewnętrznych (ta klasa już zawiera podkreślenie).
  11. **Tooltip dla trudnych terminów (AKTUALIZACJA 2025-12-24)**: Dla skrótów, terminów technicznych i trudnych pojęć używaj komponentu `Tooltip` ze zwięzłym wyjaśnieniem. Tooltip zwiększa czytelność i pozwala osobom wnikliwym poznać znaczenie terminu bez przerywania lektury. Jeśli termin jest już wyjaśniony w tekście, Tooltip może zawierać dodatkowy kontekst lub ciekawostkę. Format w HTML: `<span data-tooltip='Wyjaśnienie terminu'>termin</span>`.
  12. **ZAKAZ polskich cudzysłowów w JSON (aktualizacja 2025-12-20)**: W plikach JSON (np. `data/pl/blog.json`) **NIE UŻYWAJ** polskich cudzysłowów typograficznych „ i ". Te znaki psują parser JSON. Zamiast tego:

  - Usuń cudzysłowy z tekstu (np. zamiast „pozycjonować" napisz: pozycjonować)
  - Lub użyj encji HTML `&quot;` (np. `&quot;pozycjonować&quot;`)
  - Lub użyj apostrofów (np. 'pozycjonować')
  - Dotyczy wszystkich pól HTML w JSON (`html`, `answer`, `description` itp.)

- **Cel serii**: zwiększać widoczność SEO ofert, domeny i narzędzi Arteon poprzez edukację w mentorskim tonie, bez żargonu (prowadź czytelnika do zrozumienia i działania, ale bez presji).
- **Docelowy czytelnik**: MŚP (usługi + e-commerce), często bez wiedzy technicznej. Tekst ma być zrozumiały bez znajomości SEO/UX, ale nie może być infantylny.
- **Ton**: konkretnie, spokojnie, bez korpo-języka i wodolejstwa. Każde pojęcie „z branży” wyjaśnij w 1-2 zdaniach i od razu pokaż zastosowanie.
- **KRYTYCZNE: ten styl stosujesz zawsze, gdy tworzysz jakąkolwiek treść** — nie tylko artykuły. Dotyczy także podstron usług (`/uslugi/...`), narzędzi (`/narzedzia/...`), realizacji (`/realizacje/...`) oraz stron informacyjnych (np. O nas, FAQ, Kontakt, Mapa strony).

- **Spójność z istniejącymi stronami ofert i narzędzi**:

  - Używaj podobnych typów sekcji i nagłówków jak na istniejących podstronach (np. „Co zyskujesz…”, „Na czym polega… i dlaczego działa?”, „Kiedy ma sens?”, „Proces”, „Jak mierzyć efekty?”, „Najczęstsze błędy”, „FAQ”, „Podsumowanie”).
  - Jeśli podajesz liczby/statystyki, dodaj źródło w formie linku (np. „(źródło)”) tak jak na stronach ofert.
  - Jeśli wspominasz narzędzie (Google lub inne), dodaj od razu link do niego w tekście (bez emotek).

- **Ton i rola autora**:

  - Występujesz jako mentor i przewodnik.
  - Pozycja komunikacyjna: „Jestem kilka kroków dalej, rozumiem proces i spokojnie przeprowadzę Cię przez decyzję.”
  - Nie popisujesz się wiedzą techniczną i nie „sprzedajesz się” w treści.

- **KLUCZOWE: Maksymalna prostota i przyjazność** (aktualizacja 2025-12-18):

  - **Pisz tak, żeby zrozumiało 5-letnie dziecko i 60-letnia osoba bez wiedzy technicznej**, ale bez protekcjonalnego tonu.
  - **Nie etykietuj czytelnika**: nie pisz „nie jesteś techniczny”, „dla laików”, „nie znasz się”. Zamiast tego: „Nawet jeśli masz niewielką wiedzę techniczną…”, „Jeśli dopiero zaczynasz…”.
  - **Każdy termin techniczny natychmiast wyjaśniaj** — po użyciu terminu od razu odpowiedz na pytania: „Co to jest?” i „Po co to?”.
  - **Każde zdanie = logiczny ciąg dalszy** — bez skoków myślowych, płynna narracja jak opowieść.
  - **Ludzki język** — pisz spokojnie i naturalnie, bez potocznych skrótów i bez slangu.
  - **Życzliwy framing (bez presji)** — nie strasz konsekwencjami, nie zawstydzaj i nie porównuj do konkurencji (np. unikaj zwrotów w stylu „a nie do konkurencji”). Zamiast tego: mów konkretnie, co czytelnik zyska i jakie są kolejne kroki.
  - **Instrukcje krok po kroku** — przy podstronach narzędzi Arteon (oraz artykułach o narzędziach) dodawaj sekcję „Jak to zrobić w naszym narzędziu" z prostym przewodnikiem. To ma być instrukcja użycia narzędzia Arteon (zgodna 1:1 z UI), a nie poradnik „zrób usługę samodzielnie”.
  - Przykład dobrego wyjaśnienia:
    - ❌ „Wygeneruj favicon.ico i apple-touch-icon.png”
    - ✅ „Stwórz małą ikonkę, która pojawi się na karcie przeglądarki (to właśnie favicon — miniaturowa ikona Twojej strony). Dzięki niej Twoja strona wygląda profesjonalnie i łatwiej ją znaleźć wśród wielu otwartych kart.”

- **Styl językowy**:

  - Pełne, poprawne zdania (bez równoważników zdań).
  - Naturalny rytm (jak w dobrej rozmowie): spokojnie, rzeczowo, klarownie.
  - Bez slangu i kolokwializmów.
  - Bez emotek w treściach (w tym w CTA i podsumowaniach).

- **Narracja**:

  - Druga osoba liczby pojedynczej („Twoja firma”, „zyskujesz”, „widzisz efekt”).
  - **Pierwsza osoba liczby mnogiej dla Arteon** — zawsze „wyjaśniamy”, „pokazujemy”, „przygotowujemy”, nigdy „wyjaśnię”, „pokażę” (liczba pojedyncza). Arteon to zespół, nie jedna osoba.

- **Zakazane formy**:

  - Hasła marketingowe bez treści („kompleksowe rozwiązania”, „nowoczesne podejście”).
  - Żargon techniczny bez wyjaśnienia.
  - Clickbait.

- **Zasada benefit-first (kluczowa)**: każdą informację techniczną poprzedź korzyścią.

  - Schemat: co zyskujesz → dlaczego to ważne → jakim narzędziem jest to realizowane.
  - Przykład:
    - ❌ „Strona jest oparta o Next.js”
    - ✅ „Strona działa szybciej, jest stabilna i łatwa w rozwoju. Dlatego korzystamy z nowoczesnych technologii takich jak Next.js.”

- **Intent artykułów (AKTUALIZACJA 2025-12-24)**: Główny cel każdego artykułu to **edukacja budująca autorytet firmy + naturalne przekierowanie do oferty lub narzędzi**. Artykuł ma:

  - Odpowiadać wnikliwie na pytanie z tytułu (czytelnik musi wyjść z pełnym zrozumieniem tematu).
  - Budować zaufanie do Arteon jako eksperta w danej dziedzinie.
  - Naturalnie prowadzić do usług lub narzędzi Arteon (bez agresywnej sprzedaży, ale z jasną ścieżką „co dalej”).
  - Być wartościowy sam w sobie — nawet jeśli czytelnik nie skorzysta z oferty, powinien zyskać wiedzę.

- **Typy artykułów (AKTUALIZACJA 2025-12-24)**: Artykuły mogą przyjmować różne formy w zależności od tematu. Poniżej główne typy z ich strukturą:

  **1. Artykuł edukacyjny (domyślny)**

  - Odpowiada na pytanie „Co to jest X i dlaczego ma znaczenie?"
  - Struktura: Wstęp → Wyjaśnienie tematu → Dla kogo to ważne → Jak to działa / standardy → Jak sprawdzić/ocenić → Na co zwrócić uwagę → Podsumowanie + CTA
  - Przykład: „Kontrast kolorów na stronie: dlaczego ma znaczenie i jak go sprawdzić?”

  **2. Artykuł HowTo (instrukcja)**

  - Odpowiada na pytanie „Jak zrobić X?" lub „Jak osiągnąć Y?"
  - Struktura: Wstęp (co osiągniesz) → Wymagania/przygotowanie → Kroki (numerowane) → Typowe problemy i rozwiązania → Podsumowanie + CTA
  - UWAGA: Instrukcje dotyczą narzędzi Arteon lub ogólnych procesów. NIE twórz instrukcji zastępujących usługi.
  - Przykład: „Jak sprawdzić kontrast kolorów na stronie?”

  **3. Artykuł z poradami i błędami**

  - Odpowiada na pytanie „Na co zwrócić uwagę przy X?" lub „Jakie błędy popełniają firmy przy Y?"
  - Struktura: Wstęp → Kontekst (dlaczego to ważne) → Lista porad/błędów (każdy z wyjaśnieniem i przykładem) → Jak unikać problemów → Podsumowanie + CTA
  - Ton: mentorski, nie wytykający — wyjaśniaj dlaczego coś nie działa, zamiast krytykować
  - Przykład: „Na co zwrócić uwagę przy wyborze kolorów na stronę?”

  **3a. Artykuł obalający mity (dozwolony format)**

  - Odpowiada na pytanie „Co jest prawdą, a co mitem w temacie X?"
  - Struktura: Wstęp (skąd biorą się mity) → Lista mitów (każdy z wyjaśnieniem, dlaczego to mit i jaka jest prawda) → Podsumowanie + CTA
  - Ton: edukacyjny, bez wyśmiewania — pokazuj fakty i badania, nie krytykuj osób wierzących w mity
  - Dozwolone tytuły: „5 mitów o X", „Mity o X — co jest prawdą?", „X mitów, w które wciąż wierzą właściciele firm"
  - Przykład: „5 mitów o pozycjonowaniu, w które wciąż wierzą właściciele firm”

  **3b. Artykuł o błędach (dozwolony format z zastrzeżeniami)**

  - Odpowiada na pytanie „Jakich błędów unikać przy X?"
  - Struktura: Wstęp → Lista błędów (każdy z wyjaśnieniem konsekwencji i lepszym podejściem) → Podsumowanie + CTA
  - Ton: pomocny, nie oskarżający — „wiele firm nieświadomie popełnia..." zamiast „firmy robią źle”
  - Dozwolone tytuły: „X błędów przy Y", „Najczęstsze błędy przy X i jak ich uniknąć"
  - WAŻNE: Treść artykułu musi być konstruktywna — każdy błąd omawiaj z perspektywy „dlaczego to się zdarza" i „jak zrobić lepiej”
  - Przykład: „7 błędów w formularzach kontaktowych, które zmniejszają liczbę zapytań”

  **4. Artykuł porównawczy**

  - Odpowiada na pytanie „X czy Y — co wybrać?" lub „Różnice między X a Y"
  - Struktura: Wstęp (po co porównanie) → Wyjaśnienie obu opcji → Porównanie punkt po punkcie → Kiedy wybrać X, kiedy Y → Podsumowanie + CTA
  - Ton: obiektywny, bez faworyzowania (chyba że jedna opcja jest obiektywnie lepsza w danym kontekście)
  - Przykład: „JPG czy WebP — który format wybrać na stronę?”

- **Struktura** (aktualizacja 2025-12-24):
  - Struktura zależy od **typu artykułu** (patrz wyżej). Poniższy układ to punkt wyjścia dla artykułu edukacyjnego:
    - Wstęp (o czym artykuł, co czytelnik zyska)
    - Wyjaśnienie problemu/tematu (co to jest, dlaczego ważne)
    - Rozwiązanie / kroki / proces
    - Najczęstsze błędy lub pułapki
    - Podsumowanie + CTA
  - **Dopasuj strukturę do tematu i typu**. Jeśli logiczny podział wymaga innego układu — zrób inaczej. Ważne, żeby artykuł miał sens i płynnie prowadził czytelnika, nie żeby pasował do szablonu.
  - Przykłady elastyczności:
    - Artykuł o narzędziu → może mieć dużą sekcję „Jak to zrobić krok po kroku" (dla narzędzia Arteon).
    - Artykuł porównawczy → może mieć strukturę „Opcja A vs Opcja B".
    - Artykuł o procesie → może mieć oś czasu zamiast sekcji.

### Co robić, a czego NIE robić (aktualizacja 2025-12-18)

**✅ TAK — rób to:**

- Zacznij od konkretu, nie od wstępu o wstępie
- Wyjaśniaj terminy od razu po ich użyciu (w nawiasie lub w następnym zdaniu)
- Używaj konkretnych przykładów z praktyki (bez wstawek typu "Wyobraź sobie..." i bez „scenek”)
- Pisz jak do znajomego — naturalnie, bez sztywności, ale bez potocznych sformułowań
- Dodawaj instrukcje krok po kroku do narzędzi Arteon
- Linkuj do powiązanych artykułów i usług tam, gdzie ma to sens (wplecione w zdania) — **szczególnie do istniejących artykułów na powiązane tematy**
- **Zagłębiaj się w szczegóły** — podawaj konkretne przykłady, pokazuj jak coś wygląda w praktyce (np. jak wygląda URL z polskimi znakami po konwersji do punycode), wyjaśniaj mechanizmy. Wartość artykułu powinna wynikać z głębi wiedzy, nie z ogólników.
- Używaj pytań jako nagłówków (np. „Ile to kosztuje?”, „Kiedy warto?”)
- Kończ podsumowaniem z 3-5 konkretnymi wnioskami (to nie jest checklista „do odhaczania”)

**❌ NIE — unikaj tego:**

- Nie zaczynaj od ogólników („W dzisiejszych czasach...”, „Jak wszyscy wiemy...”)
- Nie używaj żargonu bez wyjaśnienia (SEO, CTA, long-tail — zawsze wyjaśnij)
- Nie pisz korpo-językiem („kompleksowe rozwiązania”, „innowacyjne podejście”)
- Nie kopiuj struktury bezmyślnie — dopasuj do tematu
- Nie twórz checklist ani list „do odhaczania”
- Nie obiecuj rezultatów ani gwarancji
- Nie upychaj słów kluczowych sztucznie
- Nie pisz długich wstępów przed przejściem do sedna

- **Dodatkowe zakazy stylu (obowiązkowo, bez wyjątków)**:

  - **Bez emotek i ozdobników**: w treściach, CTA, FAQ i podsumowaniach nie używaj emotek, strzałek ani „dekoracyjnych” leadów (np. 👉, ✅, ❌) poza sekcjami instrukcji, gdzie są one częścią tego dokumentu. W artykułach i stronach publikowanych na serwisie — nigdy.

  - **Bez sekcji typu "Przydatne linki" / "Dalsze kroki" na końcu**: linki do usług i podstron wplataj **wyłącznie naturalnie w zdania**, w miejscach gdzie wynikają z kontekstu (np. gdy mowa o budowie sklepu → link do usługi sklepy internetowe). Nie twórz końcowych bloków linków.

  - **Bez potocznych zwrotów i idiomów**: zakazane są sformułowania potoczne i kolokwialne, m.in. „traktowane po macoszemu”, „nie musisz pisać encyklopedii”, „to proste”, „to oczywiste”, „na szybko”, „jak ktoś ogarnia”, „nie jesteś techniczny”. Zamiast tego używaj neutralnych, profesjonalnych odpowiedników.

  - **Bez meta-komentarzy o formie tekstu**: nie pisz zdań typu „nie jako lista do odhaczania”, „checklista”, „do odhaczenia”, „w punktach”, „w skrócie” itp. Po prostu zastosuj właściwą formę: normalne akapity, logiczne przejścia i krótkie listy informacyjne tylko wtedy, gdy są niezbędne.

  - **Bez pouczania i tekstów oceniających**: nie używaj zdań, które mogą brzmieć jak przytyk, presja lub ocena (np. „każda godzina pracy ma swoją cenę”, „nie stać Cię na błędy”, „to strata czasu”). Zamiast tego wyjaśniaj spokojnie priorytety i sens kolejności działań, bez moralizowania.

  - **Zasada języka neutralnego**: mów o możliwościach i konsekwencjach w sposób rzeczowy, bez ironii i bez skrótów myślowych. Jeśli coś jest zależne od wielu czynników, nazywaj je wprost i doprecyzuj warunki.

- **PRZYKŁADY ZAMIANY (referencja przy redakcji)**:

  | ❌ Zakazane                         | ✅ Zamiennik                                   |
  | ----------------------------------- | ---------------------------------------------- |
  | „traktowane po macoszemu"           | „często pozostają puste lub ogólnikowe"        |
  | „Nie musisz pisać encyklopedii"     | „Opis nie musi być rozbudowany"                |
  | „każda godzina pracy ma swoją cenę" | „Dzięki temu efekty pojawią się szybciej"      |
  | „nie jako lista do odhaczania"      | (usuń meta-komentarz)                          |
  | „Przydatne linki: 👉"               | (wpleć linki naturalnie w akapit)              |
  | „Jeśli nie jesteś techniczny..."    | „Nawet bez wiedzy technicznej możesz..."       |
  | „to proste", „to oczywiste"         | (usuń lub opisz konkretnie)                    |
  | „wiele firm robi źle. Efekt? Y"     | „X działa najlepiej w konkretnych kontekstach" |
  | „to absurd", „wręcz szkodzi"        | „nie jest potrzebny", „wydłuża drogę do celu"  |
  | pytania retoryczne z ironią         | pełne zdania opisowe                           |
  | „stosowany z głową"                 | „w konkretnych kontekstach"                    |
  | „wymaga więcej pracy"               | „wymaga większej ilości pracy"                 |

  ⚠️ „Najczęstsze błędy przy X" → dozwolone w tytułach, ale treść konstruktywna

- **Zakaz anglicyzmów bez wyjaśnienia (obowiązkowo)**: Nie używaj angielskich terminów marketingowych (np. „direct mail", „response rate") bez natychmiastowego wyjaśnienia po polsku. Zamiast „4,4% response rate" napisz „4-5 osób na 100 odpowiada”. Czytelnik musi zrozumieć przekaz bez znajomości angielskiego.

- **Statystyki muszą być zrozumiałe (obowiązkowo)**: Podając dane liczbowe, przelicz je na konkretne przykłady. Zamiast „4,4% wskaźnik odpowiedzi" napisz „na 100 wysłanych ulotek, 4-5 osób odpowiada”. Zamiast „0,12%" napisz „1 osoba na 1000”.

### Dodatkowe zasady językowe i redakcyjne (aktualizacja 2025-12-21)

- **Intencja wyszukiwania (obowiązkowo)**: Wstęp i początkowe sekcje artykułu muszą bezpośrednio odpowiadać na pytanie z tytułu. Nie zaczynaj od mówienia, że temat jest ważny. Zamiast tego od razu pokaż, co czytelnik znajdzie.

- **Spójność gramatyczna liczby (obowiązkowo)**: Podmiot i orzeczenie muszą się zgadzać w liczbie. Szczególna uwaga przy opisach zbiorczych (np. Kolory...Tworzą, nie Kolory...Tworzy).

- **Unikanie duplikacji między artykułami (obowiązkowo)**: Jeśli istnieje powiązany artykuł na zbliżony temat, nie duplikuj jego treści. Odnieś się do niego linkiem.

- **Anglicyzmy a polskie odpowiedniki (obowiązkowo)**: Używaj polskich odpowiedników tam, gdzie brzmią naturalnie. Zamiast „social media" pisz „media społecznościowe" (odmienione odpowiednio do kontekstu). Anglicyzmy dozwolone tylko gdy polski odpowiednik brzmi sztucznie lub jest nieznany.

- **Przykłady z innych branż (obowiązkowo)**: W artykułach edukacyjnych nie używaj przykładów z branży Arteon (grafika, marketing, strony WWW). Podawaj przykłady z innych branż (prawo, medycyna, gastronomia, nieruchomości, e-commerce, produkcja itp.) — to buduje większy autorytet i uniwersalność treści.

- **Wymienianie branż tylko przy konkretnych przykładach (obowiązkowo)**: Nie wymieniaj branż ogólnikowo (np. „dla właściciela kancelarii, gabinetu czy sklepu to może być wyzwaniem" — to dotyczy każdej branży). Wymieniaj branże **tylko** gdy podajesz konkretny, praktyczny przykład dla danej branży (np. „Gabinet stomatologiczny może używać bieli i błękitu — kolorów kojarzonych z czystością"). Jeśli stwierdzenie jest uniwersalne, pisz ogólnie bez wyliczania branż.

- **Linki do zewnętrznych narzędzi (obowiązkowo)**: Gdy wspominasz o zewnętrznych narzędziach (Google Search Console, PageSpeed Insights, Ahrefs itp.), zawsze dodawaj do nich link z atrybutami `target='_blank' rel='noopener noreferrer'`.

- **Zaimki dzierżawcze w kontekście czytelnika (obowiązkowo)**: W zwrotach typu „na Twojej stronie" używaj formy „na swojej stronie" — jest bardziej naturalna i poprawna gramatycznie w kontekście instrukcji dla czytelnika.

- **Zakaz rekomendowania konkurencji i ogólnych profesjonalistów (obowiązkowo)**: Wszystkie treści muszą prowadzić do oferty Arteon, nigdy do ogólnych profesjonalistów. Zakazane sformułowania:

  - ❌ „skorzystaj z pomocy profesjonalisty" → ✅ „skontaktuj się z nami" + link do `/kontakt`
  - ❌ „zatrudnij specjalistę" → ✅ „w Arteon zajmujemy się..."
  - ❌ „skontaktuj się z osobą, która tworzyła stronę" → ✅ „skontaktuj się z nami"
  - ❌ „zamów u projektanta lub agencji" → ✅ „W Arteon możesz zamówić wszystko w jednym miejscu"
    Arteon jest jedynym rekomendowanym źródłem pomocy we wszystkich artykułach, CTA i FAQ.

- **Unikanie kategorycznych określeń (zalecane)**: Zamiast mocnych słów typu „słabe", „złe", „fatalne" używaj łagodniejszych form: „słabsze", „mniej skuteczne", „wymagające poprawy". Wyjątek: gdy kontrast jest celowy i uzasadniony merytorycznie.

- **Zakaz komentarzy bez wartości merytorycznej (OBOWIAZKOWO)**: Nie dodawaj zdań, które oceniają temat bez wnoszenia informacji. Zakazane sa sformulowania typu:

  - „X moze wydawac sie elementem z poprzedniej epoki" — to ocena, nie informacja
  - „Wiekszosc uzytkownikow nigdy tego nie uzyje — i to jest w porzadku" — komentarz bez wartosci
  - „To nie jest cos, co przyciaga tlumy" — deprecjonuje temat zamiast go wyjasniać
    Zamiast tego: przejdz do konkretow. Jesli cos ma ograniczone zastosowanie, opisz dla kogo jest przydatne i dlaczego.

- **🚨 ZAKAZ CHAMSKIEGO, NACHALNEGO I POUCZAJĄCEGO TONU (OBOWIĄZKOWO, aktualizacja 2025-12-31)**:

  Treści Arteon mają być **mentorskie, życzliwe i pomocne** — nigdy nie mogą brzmieć jak pouczanie, karcenie, wyśmiewanie lub deprecjonowanie czytelnika. Ton ma budować zaufanie, nie dystans.

  **Zakazane konstrukcje i formy:**

  | Zakazana forma                                    | Dlaczego jest zła                               | Zamiennik                                |
  | ------------------------------------------------- | ----------------------------------------------- | ---------------------------------------- |
  | „To nie jest X, tylko Y"                          | Brzmienie korekcyjne, jakby czytelnik się mylił | „Y oznacza..." (neutralne wyjaśnienie)   |
  | „Wbrew pozorom..."                                | Sugeruje, że czytelnik ma błędne wyobrażenie    | „W praktyce..." lub po prostu wyjaśnij   |
  | „Nie chodzi o X, chodzi o Y"                      | Ton poprawiania                                 | „Kluczowe jest Y"                        |
  | „To częsty błąd" (bez kontekstu)                  | Może brzmieć oskarżająco                        | „Wiele osób zaczyna od X, ale lepiej..." |
  | „Musisz zrozumieć, że..."                         | Protekcjonalne                                  | Usuń frazę, przejdź do sedna             |
  | „Nie wystarczy X"                                 | Negatywne otwarcie                              | „Oprócz X warto też..."                  |
  | „To oczywiste" / „To proste"                      | Umniejsza trudność dla czytelnika               | Usuń lub wyjaśnij krok po kroku          |
  | „Każdy wie, że..."                                | Zakłada wiedzę, której czytelnik może nie mieć  | Wyjaśnij bez zakładania                  |
  | „Prawda jest taka, że..."                         | Pouczający ton                                  | Po prostu podaj informację               |
  | „Niestety..." (wielokrotnie)                      | Buduje negatywny nastrój                        | Opisz neutralnie lub podaj rozwiązanie   |
  | „Błędem jest..." (bez konstruktywnej alternatywy) | Krytyka bez wartości                            | „Lepszym podejściem jest..."             |
  | Pytania retoryczne z ironią                       | Mogą brzmieć wyśmiewająco                       | Zamień na zdania oznajmujące             |

  **Zasady tonu:**

  1. **Nigdy nie poprawiaj czytelnika** — zamiast korygować jego domniemane błędy, po prostu wyjaśniaj temat. Czytelnik przyszedł się nauczyć, nie być poprawiany.

  2. **Nigdy nie zakładaj niewiedzy** — nie pisz „może nie wiesz, że...", „wielu nie zdaje sobie sprawy...". Po prostu podaj informację.

  3. **Nigdy nie używaj ironii ani sarkazmu** — nawet subtelnego. Tekst ma być neutralny emocjonalnie.

  4. **Nigdy nie deprecjonuj pytania/tematu** — każde pytanie jest ważne dla osoby, która je zadaje.

  5. **Nigdy nie porównuj do „gorszych" praktyk innych** — zamiast „wiele firm robi źle", opisz dobre praktyki bez oceniania innych.

  **Przykłady zamiany:**

  - ❌ „To nie jest mapa strony, tylko sitemap.xml" → ✅ „Sitemap.xml to plik techniczny przeznaczony dla wyszukiwarek"
  - ❌ „Wbrew pozorom, favicon nie jest tylko ozdobnikiem" → ✅ „Favicon pełni kilka praktycznych funkcji"
  - ❌ „Musisz zrozumieć, że Google nie indeksuje stron natychmiast" → ✅ „Google potrzebuje czasu na zindeksowanie nowej strony"
  - ❌ „To częsty błąd — firmy nie aktualizują treści" → ✅ „Regularna aktualizacja treści wspiera widoczność w wyszukiwarkach"
  - ❌ „Niestety, większość stron nie spełnia standardów WCAG" → ✅ „Wiele stron można poprawić pod kątem dostępności"

- **Wspominanie alternatywnych rozwiazan (zalecane)**: Przy opisywaniu problemu lub rozwiazania mozesz wspomnieć o innych metodach osiagniecia podobnego celu (np. wyszukiwarka na stronie jako alternatywa dla mapy strony). To daje wartość czytelnikowi i otwiera mozliwość linkowania do przyszlych artykulow. Nie odbiegaj jednak od glownego tematu — wzmianka ma byc krotka i naturalna.

### Zasady linkowania i wartości treści (aktualizacja 2025-12-23)

- **Maksymalizacja linków wewnętrznych (OBOWIĄZKOWO)**: Artykuły mają wzmacniać wszystkie inne strony serwisu. Im więcej naturalnych linków do innych artykułów i narzędzi Arteon, tym lepiej. Przy każdym temacie sprawdź, czy istnieje powiązany artykuł lub narzędzie i podlinkuj je w treści. Linki muszą być wplecione naturalnie w zdania.

- **Zakaz ogólnikowych fraz bez wartości (OBOWIĄZKOWO)**: Nie używaj pustych fraz typu „buduje zaufanie", „profesjonalnie wygląda", „robi dobre wrażenie" bez konkretnego wyjaśnienia, co to oznacza w praktyce. Każde stwierdzenie musi nieść konkretną informację lub wartość dla czytelnika.

- **Źródła dla wszystkich danych i badań (OBOWIĄZKOWO)**: Jeśli powołujesz się na badania, statystyki lub dane liczbowe, MUSISZ podać konkretne źródło z linkiem. Sformułowania typu „badania pokazują" bez źródła są zabronione — obniżają autorytet treści. Jeśli nie masz źródła, opisz zjawisko bez odwoływania się do badań.

- **CTA bez tonu DIY (OBOWIĄZKOWO)**: W podsumowaniach i CTA nie sugeruj, że czytelnik może coś zrobić samodzielnie z pomocą artykułu. Zamiast „zajmujemy się weryfikacją przed publikacją" (sugeruje tylko jeden element usługi) pisz „tworzymy strony od podstaw" lub „możemy pomóc z [konkretna rzecz]". Arteon oferuje kompleksowe usługi, nie pojedyncze elementy.

- **Opisowe teksty przycisków CTA (OBOWIĄZKOWO, aktualizacja 2026-01-16)**: Tekst przycisku w sekcji CTA musi jasno komunikować, co się stanie po kliknięciu. Unikaj ogólnych nazw kategorii — używaj fraz opisujących akcję lub ofertę.

  - Źle: "Strony internetowe" (brzmi jak nazwa kategorii, nie akcja)
  - Dobrze: "Sprawdź ofertę stron internetowych", "Zobacz ofertę tworzenia stron", "Zamów stronę internetową"
  - Źle: "Sklepy" (za ogólne)
  - Dobrze: "Sprawdź ofertę sklepów internetowych", "Zobacz jak tworzymy sklepy"
  - Źle: "Kontakt" (poprawne, ale można lepiej)
  - Dobrze: "Skontaktuj się z nami", "Porozmawiajmy o projekcie", "Napisz do nas"
    Przycisk ma brzmieć naturalnie i zachęcać do działania, nie być suchą etykietą.

- **Maksymalizacja wartości i głębokości treści (OBOWIĄZKOWO)**: Artykuły mają zawierać jak najwięcej konkretnych, praktycznych informacji. Każda sekcja powinna wnosić realną wartość. Unikaj akapitów, które można by usunąć bez straty merytorycznej. Głębokość i szczegółowość treści bezpośrednio wpływa na pozycję strony w wyszukiwarce.

- **Dokładne zapoznanie się z instrukcjami przed tworzeniem treści (OBOWIĄZKOWO)**: Przed napisaniem jakiejkolwiek treści (artykuł, strona, opis) MUSISZ przeczytać pełną instrukcję INSTRUCTIONS.md i upewnić się, że rozumiesz wszystkie zasady. To nie jest opcjonalne — błędy wynikające z nieznajomości instrukcji są niedopuszczalne.

### Tematy artykułów i Google Discover (aktualizacja 2025-12-26)

- **Przyjazne tematy dla użytkowników nietechnicznych (OBOWIĄZKOWO)**: Tematy artykułów muszą być zrozumiałe i atrakcyjne dla przeciętnego użytkownika, nie tylko dla specjalistów. Unikaj tytułów z żargonem technicznym, który nie ma potencjału wyszukiwania. Zamiast „Jak zoptymalizować LCP i CLS?" pisz „Dlaczego strona ładuje się wolno i jak to poprawić?". Tytuł ma odpowiadać na pytanie, które realnie zadaje właściciel firmy.

- **Zgodność z Google Discover (OBOWIĄZKOWO)**: Artykuły powinny spełniać wymagania Google Discover:

  - **Tytuł przyciągający uwagę bez clickbaitu** — ma wzbudzać ciekawość, ale nie wprowadzać w błąd
  - **Temat angażujący szerszą publiczność** — nie tylko specjalistów z branży
  - **Wartość informacyjna** — artykuł musi dostarczać realnej wiedzy, nie być tylko reklamą usług
  - **Unikanie technicznego żargonu w tytułach** — Discover pokazuje treści osobom, które mogą nie znać terminologii
  - **Evergreen lub aktualny temat** — treści ponadczasowe lub związane z aktualnymi trendami
    Dokumentacja: https://developers.google.com/search/docs/appearance/google-discover

- **Potencjał SEO tematów (zalecane)**: Przed wyborem tematu artykułu rozważ, czy fraza z tytułu ma realny potencjał wyszukiwania. Tematy zbyt niszowe lub zbyt techniczne mogą nie przynosić ruchu. Preferuj tematy, które:

  - Odpowiadają na pytania zadawane przez właścicieli firm
  - Używają języka naturalnego (jak ludzie pytają)
  - Mają szersze zastosowanie (nie tylko jedna wąska branża)

- **Maksymalizacja potencjału SEO w tytułach i slugach (OBOWIĄZKOWO, aktualizacja 2026-01-01)**: Każdy tytuł artykułu i slug URL musi być przemyślany pod kątem maksymalizacji szans na znalezienie przez użytkowników. Zasady:
  - **Polskie odpowiedniki zamiast anglicyzmów**: W tytułach i slugach używaj polskich terminów, które ludzie wpisują w wyszukiwarkę. Zamiast "breadcrumbs" → "ścieżka nawigacji", zamiast "whitespace" → "pusta przestrzeń".
  - **Slug = tytuł po polsku**: URL musi być zrozumiały bez znajomości angielskiego. Slug `czym-jest-sciezka-nawigacji` ma większy potencjał SEO niż `czym-sa-breadcrumbs`.
  - **Frazy kluczowe w tytule**: Tytuł powinien zawierać frazy, które ludzie realnie wyszukują. Sprawdź, czy fraza ma potencjał wyszukiwania.
  - **Dotyczy wszystkich treści**: Ta zasada dotyczy nie tylko artykułów, ale też stron usług, narzędzi, realizacji — wszędzie, gdzie jest tytuł i URL.
  - **Wyjątek**: Anglicyzm dozwolony w treści artykułu (z tooltipem/wyjaśnieniem), ale NIE w tytule ani w slug URL.

### 🚨 ZERO DOPISAŃ — ZERO NIEPRAWDY (aktualizacja 2025-12-30)

**Ta sekcja ma priorytet nad wszystkimi innymi zasadami dotyczącymi treści.**

Dotyczy KAŻDEJ treści w serwisie: artykułów, stron ofert, opisów narzędzi, realizacji, FAQ, CTA, metadata — wszędzie, gdzie pojawiają się informacje, dane, przykłady lub odwołania.

---

#### 🔴 ZASADY ABSOLUTNE (bez wyjątków)

##### 1. Każda liczba MUSI mieć źródło

Dotyczy: procentów, kwot, zakresów czasowych, dat, statystyk, wyników badań.

- **Format**: „wg [źródło] z [rok]" + działający link
- **Przykład ✅**: „Wg raportu Ahrefs z 2023 roku, 5,7% stron w Top10 ma mniej niż rok ([źródło](https://ahrefs.com/blog/how-long-does-it-take-to-rank/))"
- **Przykład ❌**: „90% użytkowników opuszcza stronę po 3 sekundach" (brak źródła = ZABRONIONE)

##### 2. Każde powołanie na prawo MUSI być zgodne z aktualnym stanem prawnym PL

**Kluczowe obszary prawne wymagające szczególnej uwagi:**

| Obszar                    | Ustawa/Rozporządzenie                       | Kluczowe wymogi                                            | Rok wejścia w życie |
| ------------------------- | ------------------------------------------- | ---------------------------------------------------------- | ------------------- |
| **Ceny w e-commerce**     | Dyrektywa Omnibus (implementacja PL)        | Obowiązek podawania najniższej ceny z 30 dni przy promocji | 2023                |
| **Ochrona konsumenta**    | Ustawa o prawach konsumenta                 | 14 dni na odstąpienie, informacje obowiązkowe              | 2014 (nowelizacje)  |
| **Prywatność / cookies**  | RODO (GDPR) + Prawo telekomunikacyjne       | Zgoda na cookies, polityka prywatności, DPIA               | 2018                |
| **Dostępność cyfrowa**    | Ustawa o dostępności cyfrowej               | WCAG 2.1 AA dla podmiotów publicznych                      | 2019                |
| **AI content disclosure** | AI Act (UE)                                 | Oznaczanie treści generowanych przez AI                    | 2024+               |
| **Reklama**               | Ustawa o zwalczaniu nieuczciwej konkurencji | Zakaz reklamy wprowadzającej w błąd                        | 1993 (nowelizacje)  |

**⚠️ KRYTYCZNE**: Jeśli piszesz o promocjach/cenach w e-commerce, ZAWSZE uwzględnij wymóg Omnibus (najniższa cena z 30 dni). Pominięcie tego wymogu = wprowadzenie czytelnika w błąd co do prawa.

##### 3. Każdy przykład MUSI być oznaczony

- **Przykład oparty na faktach**: cytuj źródło
- **Przykład hipotetyczny**: MUSI zawierać oznaczenie: „_(przykład hipotetyczny — nie oparty o dane historyczne)_"
- **Przykład z praktyki Arteon**: dozwolony bez oznaczenia, ale musi być prawdziwy

##### 4. Absolutny zakaz dopowiadania

**ZABRONIONE:**

- Wymyślanie statystyk, liczb, procentów
- Tworzenie „prawdopodobnych" scenariuszy bez oznaczenia jako hipotetyczne
- Upraszczanie badań w sposób zmieniający ich sens
- Sugerowanie rzeczy nieprawdziwych lub niemożliwych do weryfikacji
- Podawanie nieaktualnych informacji prawnych jako obowiązujących

**DOZWOLONE:**

- Ogólne stwierdzenia bez liczb: „większość", „często", „wiele firm"
- Jasno oznaczone przykłady hipotetyczne
- Cytaty ze źródeł z linkiem
- Opisy procesów bez kwantyfikacji (gdy brak danych)

---

#### 📋 OBOWIĄZKI PRZED NAPISANIEM TREŚCI

1. **Sprawdź źródła PRZED pisaniem**:

   - Czy masz wiarygodne źródło dla każdej liczby/statystyki, którą chcesz podać?
   - Czy źródło jest aktualne (max 2-4 lata dla SEO/marketingu, sprawdź aktualność dla prawa)?
   - Czy link do źródła działa?

2. **Sprawdź zgodność prawną PRZED pisaniem**:

   - Czy temat dotyczy obszaru regulowanego prawem (e-commerce, prywatność, reklama)?
   - Czy znasz aktualne wymogi prawne w PL?
   - Czy treść nie będzie sugerować działań niezgodnych z prawem?

3. **Oznacz niepewność**:
   - Jeśli nie masz pewności — NIE PISZ
   - Jeśli źródła są sprzeczne — zaznacz to w tekście
   - Jeśli przykład jest hipotetyczny — oznacz to wyraźnie

---

#### 📋 CHECKLISTA PRZED PUBLIKACJĄ (obowiązkowa)

Przed dodaniem jakiejkolwiek treści do repo, sprawdź:

- [ ] **Czy każde zdanie jest prawdziwe?** — żadnych domysłów, założeń, „prawdopodobnie"
- [ ] **Czy każda liczba/statystyka ma źródło z linkiem?** — brak źródła = usuń liczbę
- [ ] **Czy przykłady są oznaczone?** — fakty vs hipotetyczne
- [ ] **Czy treści dot. prawa PL są zgodne z aktualnym stanem?** — Omnibus, RODO, ustawa o prawach konsumenta
- [ ] **Czy wszystkie linki działają?** — sprawdź każdy URL
- [ ] **Czy cytaty są dokładne?** — nie zmieniaj sensu źródła

---

#### 🔒 TRYB RESTRYKCYJNY (RESTRICTIVE MODE)

**Ta zasada obowiązuje od teraz przy każdym generowaniu treści:**

> 🚫 **Jeśli generowany tekst zawiera zdanie/liczbę/fakt bez potwierdzonego źródła — NIE WOLNO go dodać do repo.**

Moduł autoweryfikacji:

```
PRZED ZAPISEM KAŻDEJ TREŚCI:
1. Czy są liczby bez źródeł? → TAK = NIE ZAPISUJ, popraw najpierw
2. Czy są twierdzenia prawne? → TAK = sprawdź zgodność z prawem PL
3. Czy są przykłady bez oznaczenia? → TAK = oznacz lub usuń
4. Czy są linki? → TAK = sprawdź czy działają
5. Wszystko OK? → ZAPISZ
```

---

#### Standard źródeł dla różnych typów treści

**Treści o SEO / marketingu / analityce**:

- Preferowane źródła: dokumentacja Google (Search Central, web.dev), blogi i raporty uznanych firm SEO/analitycznych (Ahrefs, Semrush, Moz, HubSpot, Backlinko), oficjalne komunikaty Google.
- Aktualność: źródła z ostatnich 2–4 lat; starsze źródła dopuszczalne tylko jeśli są nadal istotne i wyraźnie oznaczone jako starsze.

**Treści o psychologii / biznesie / zachowaniach użytkowników**:

- Preferowane źródła: uznane czasopisma naukowe (Journal of Consumer Research, Management Decision, itp.), uczelnie, znani autorzy (np. Kahneman, Cialdini).
- Nie wolno „upraszczać" badań w sposób, który wypacza ich sens — cytować dokładnie to, co badanie wykazało.

**Treści o technologii (Next.js, WordPress, narzędzia webowe)**:

- Preferowane źródła: oficjalna dokumentacja, repozytoria GitHub, blogi twórców narzędzi, uznane źródła techniczne (MDN, web.dev).

**Treści o prawie / regulacjach**:

- Preferowane źródła: oficjalne dzienniki ustaw (isap.sejm.gov.pl), EUR-Lex, oficjalne strony UOKiK, UODO.
- ZAWSZE podawaj datę stanu prawnego i rok wejścia w życie przepisu.
- Przy zmianach prawa — aktualizuj treści niezwłocznie.

**Case studies / przykłady realizacji**:

- Treści muszą być zgodne z faktami: zakres, wyniki, terminy — bez dopisywania „sukcesów", które nie miały miejsca.
- Jeśli brak danych o konkretnych wynikach, nie wymyślać ich — opisać zakres prac bez kwantyfikacji efektów.

---

#### Zasady weryfikacji linków i cytatów (OBOWIĄZKOWO)

- **Sprawdzenie każdego linku przed publikacją**:

  - Czy link działa (nie zwraca 404)?
  - Czy prowadzi do właściwej strony (nie do strony głównej zamiast do konkretnego artykułu)?
  - Czy treść na stronie odpowiada temu, na co się powołujemy?

- **Sprawdzenie daty dla cytowanych danych**:

  - Żadnych „bezczasowych" statystyk typu „90% użytkowników robi X" bez wskazania roku i źródła.
  - Format: „wg raportu [nazwa] (2024)" lub „badanie [autorzy] z 2023 roku".

- **Format cytowania w treści**:
  - Wszystkie cytaty, dane, statystyki muszą być opisane źródłem w tekście.
  - Link do źródła: w nawiasie `(źródło)` lub jako naturalny link w zdaniu.
  - Dla linków zewnętrznych zawsze: `target='_blank' rel='noopener noreferrer'`.

---

#### Postępowanie w razie niepewności (OBOWIĄZKOWO)

Jeśli podczas tworzenia treści:

- nie ma pewności co do jakiejś liczby / faktu / interpretacji,
- lub znajdują się sprzeczne informacje w źródłach,

to:

1. Wybrać najbardziej rzetelne i aktualne źródło.
2. Jeśli są rozbieżności między źródłami — zaznaczyć to w tekście (np. „dane wahają się od X do Y w zależności od źródła").
3. Jeśli nadal jest niepewność — **zrezygnować z podawania konkretu** (lepiej nie podać liczby niż wprowadzić czytelnika w błąd).

---

#### Przykłady dobrego i złego stosowania zasad

| ❌ ŹLE                                                 | ✅ DOBRZE                                                            |
| ------------------------------------------------------ | -------------------------------------------------------------------- |
| „90% użytkowników opuszcza stronę po 3s" (brak źródła) | „Wg Ahrefs z 2023, średni wiek strony w Top10 to 2+ lata ([źródło])" |
| „Przy promocji wystarczy stara i nowa cena"            | „Należy podać najniższą cenę z 30 dni (Omnibus, PL 2023)"            |
| „Firma X zwiększyła sprzedaż o 350%" (wymyślone)       | „Załóżmy... _(przykład hipotetyczny)_"                               |
| „Badania pokazują, że..." (bez linku)                  | „Czas SEO zależy od wielu czynników: konkurencji, techniki, treści"  |
