# Arteon - INSTRUCTIONS (read before every task)

## Spis treści

- [Ustawienia projektu (stack)](#ustawienia-projektu-stack)
- [Źródła kontekstu (katalogi)](#źródła-kontekstu-katalogi)
- [Zasady ogólne (zawsze)](#zasady-ogólne-zawsze)
- [Instrukcje operacyjne](#instrukcje-operacyjne)
- [Definition of Done (dla każdego zadania)](#definition-of-done-dla-każdego-zadania)
- [Instrukcje: Treści i artykuły](#instrukcje-treści-i-artykuły)

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

- **ZASADA NADRZĘDNA (zawsze, cały serwis)**: wytyczne tonu i sposobu pisania z tej sekcji stosujesz przy tworzeniu każdej treści w repo (artykuły, strony usług, strony narzędzi, realizacje, strony informacyjne, mikrocopy w komponentach/sekcjach, `metadata.description`, OpenGraph, schema, FAQ, CTA).

- **Cel biznesowy (obowiązkowo)**: każda treść ma prowadzić do realnej sprzedaży (lead do oferty). W praktyce:

  - edukujesz po to, żeby użytkownik wiedział, co zrobić i dlaczego to działa,
  - a na końcu dostaje prostą ścieżkę „co dalej” (link do usługi/narzędzia/kontaktu), bez agresji i bez presji,
  - linki sprzedażowe i CTA wplatasz **naturalnie w zdania**, bez emotek, bez strzałek typu „👉”, bez sekcji „Przydatne linki”.

- **Pomocne, ale nie DIY (obowiązkowo)**: treści mają pomagać zrozumieć temat i podjąć dobrą decyzję, ale nie mogą być tak szczegółowe, żeby zastępowały usługę (np. audyt SEO, strategię, projekt graficzny).

  - Zamiast „jak zrobić X samemu krok po kroku” preferuj: „co powinno zawierać”, „na co zwrócić uwagę”, „jak wygląda proces”, „jakie są ryzyka i typowe błędy”, „co przygotować przed zleceniem”.
  - **Doprecyzowanie (żeby nie wchodził ton nieprzyjemny):** unikaj sformułowań typu „nie będziemy uczyć”, „to zbyt złożone”, „lepiej zlecić”. Zamiast tego prowadź spokojnie: „pokażę Ci, jak to ocenić i jak ustawić priorytety, żeby decyzje miały sens”.
  - Przykłady złego kierunku:
    - ❌ „Jak zrobić audyt SEO samemu i co sprawdzić jako pierwsze?”
    - ❌ „Jak przygotować plik do druku, żeby drukarnia nie odrzuciła projektu?”
  - Przykład dobrego kierunku:
    - ✅ „Co powinien zawierać dobrze przygotowany plik do druku?”

- **Bez wstawek wyobrażeniowych (obowiązkowo)**: nie używaj sformułowań typu "Wyobraź sobie…", "Pomyśl o tym jak o…" itp. Na stronach list/hubów (np. `/edukacja`, `/edukacja/[category]`) opis ma być prosty i informacyjny: co tu jest i do czego to prowadzi.

- **Strony hub/kategorii — tytuły i opisy (obowiązkowo)**:

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

- **ZASADY TECHNICZNE DLA ARTYKUŁÓW (blog) (aktualizacja 2025-12-18):**

  1. **Tytuł = pytanie**: Każdy artykuł blogowy musi mieć tytuł w formie pytania (np. „Dlaczego strona nie wyświetla się w Google i jak to naprawić?”).
  2. **Polskie znaki**: Treść artykułu blogowego MUSI zawierać polskie znaki diakrytyczne (ą, ę, ć, ł, ń, ó, ś, ź, ż). NIE używaj ASCII bez polskich znaków.
  3. **URL = tytuł**: Slug URL artykułu musi być 1:1 zgodny z tytułem (bez polskich znaków, z myślnikami zamiast spacji).
  4. **Czas czytania**: Obliczany na podstawie realnej liczby słów. 200 słów = 1 minuta. Celuj w **5-8 minut** (1000-1600 słów). **Po każdej rozbudowie tekstu przelicz liczbę słów i zaktualizuj `readingTime`.**
  5. **Wsparcie klastra usług**: Artykuły i narzędzia zawsze wspierają klaster tematyczny usług na stronie. Linkuj do odpowiednich usług.
  6. **Nie rozdrabniaj**: Jeśli temat artykułu jest odpowiedzią na jedno pytanie główne, zrób jeden kompleksowy artykuł zamiast kilku małych.
  7. **ZAKAZ polskich cudzysłowów w JSON (aktualizacja 2025-12-20)**: W plikach JSON (np. `data/pl/blog.json`) **NIE UŻYWAJ** polskich cudzysłowów typograficznych „ i ". Te znaki psują parser JSON. Zamiast tego:
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
    - Artykuł o narzędziu → może mieć dużą sekcję „Jak to zrobić krok po kroku” (dla narzędzia Arteon).
    - Artykuł porównawczy → może mieć strukturę „Opcja A vs Opcja B”.
    - Artykuł o procesie → może mieć oś czasu zamiast sekcji.

### Co robić, a czego NIE robić (aktualizacja 2025-12-18)

**✅ TAK — rób to:**

- Zacznij od konkretu, nie od wstępu o wstępie
- Wyjaśniaj terminy od razu po ich użyciu (w nawiasie lub w następnym zdaniu)
- Używaj konkretnych przykładów z praktyki (bez wstawek typu "Wyobraź sobie..." i bez „scenek”)
- Pisz jak do znajomego — naturalnie, bez sztywności, ale bez potocznych sformułowań
- Dodawaj instrukcje krok po kroku do narzędzi Arteon
- Linkuj do powiązanych artykułów i usług tam, gdzie ma to sens (wplecione w zdania)
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
  - ❌ „traktowane po macoszemu" → ✅ „często pozostają puste lub ogólnikowe"
  - ❌ „Nie musisz pisać encyklopedii" → ✅ „Opis nie musi być rozbudowany"
  - ❌ „W SEO kolejność ma znaczenie, bo każda godzina pracy ma swoją cenę" → ✅ „Dzięki temu pierwsze efekty pojawią się szybciej"
  - ❌ „nie jako lista do odhaczania" → ✅ (usuń meta-komentarz, po prostu użyj normalnych akapitów)
  - ❌ „Przydatne linki:\n👉 Link1\n👉 Link2" → ✅ (wpleć linki naturalnie w ostatni akapit, np. „Zajmujemy się [budową sklepów](/uslugi/sklepy-internetowe) oraz [pozycjonowaniem](/uslugi/marketing/pozycjonowanie-stron).")
  - ❌ „Jeśli nie jesteś techniczny..." → ✅ „Nawet bez wiedzy technicznej możesz..."
  - ❌ „to proste", „to oczywiste" → ✅ (usuń lub opisz konkretnie co i dlaczego)

- **Zakaz checklist (doprecyzowanie, bez konfliktów)**: nie twórz w artykułach sekcji „Checklista" ani list „do odhaczania". Jeśli chcesz dać część wdrożeniową, opisz kroki w tekście, a na końcu zrób „Podsumowanie: priorytety". Krótkie listy informacyjne (np. 3–5 wniosków) są dozwolone, o ile nie mają formy „odfajkuj to”.


### Dodatkowe zasady jezykowe i redakcyjne (aktualizacja 2025-12-21)

- **Intencja wyszukiwania (obowiazkowo)**: Wstep i poczatkowe sekcje artykulu musza bezposrednio odpowiadac na pytanie z tytulu. Nie zaczynaj od mowienia, ze temat jest wazny. Zamiast tego od razu pokaz, co czytelnik znajdzie.

- **Spojnosc gramatyczna liczby (obowiazkowo)**: Podmiot i orzeczenie musza sie zgadzac w liczbie. Szczegolna uwaga przy opisach zbiorczych (np. Kolory...Tworza, nie Kolory...Tworzy).

- **Unikanie duplikacji miedzy artykulami (obowiazkowo)**: Jesli istnieje powiazany artykul na zblizony temat, nie duplikuj jego tresci. Odnies sie do niego linkiem.

- **Zrodla zewnetrzne (zalecane)**: W artykulach uzywaj linkow do badan i wiarygodnych zrodel (target=_blank rel=noopener noreferrer). 3-5 linkow na artykul.

### Dodatkowe reguły

- każdy komponent i cały kod powinien być zgodny z najlepszymi praktykami Next
- przy tworzeniu nowych hooków lub komponentów sprawdź raport mówiący o tych które już są, jeśli są już podobne to ich użyj lub stwórz nowy wariant / propsy (bez require), które będą przydatne
- nie zmieniaj wyglądu, treści ani funkcjonalności, chyba że wskazano inaczej
- nie wprowadzaj w `robots.tsx` globalnej blokady indeksacji całej witryny (blokowanie `/` jest zabronione)
- nigdy nie zmieniaj numerów zadań
