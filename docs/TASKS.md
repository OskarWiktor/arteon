# Arteon - TASKS

**KRYTYCZNE:** przed tworzeniem i realizowaniem zadań zawsze zapoznaj się z `docs/INSTRUCTIONS.md`.

## Zadania

Zrobione zadania: `docs/DONE_TASKS.md`.

- 🟡 **[AUDIT-001] Repo: audyt treści (literówki, ortografia, interpunkcja, spójność copy)**

  - Cel: wychwycić błędy językowe i niespójności w treściach (strony/oferta/blog/realizacje/narzędzia).
  - Zakres (minimum):
    - `app/(pl)/**` (teksty na stronach)
    - `data/pl/blog.json`, `data/pl/projects.json`
    - komponenty zawierające dłuższe copy (sekcje, narzędzia, FAQ)
  - Raportowanie:
    - Jeśli wykryjesz problem — dopisz osobne zadanie w `TASKS.md` (np. `COPY-*`, `CONTENT-*`, `CLEANUP-*`) z kryteriami akceptacji.
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

  - **Zrobione 2025-12-19**:

    - Dodano pomysły wspierające klaster usług `/uslugi/projekty-graficzne` (projekty graficzne) + uporządkowano brakujące nagłówki w sekcji „Pomysły".
    - Dodane ID: `IDEA-048`, `IDEA-049`, `IDEA-050`, `IDEA-051`, `IDEA-052`, `IDEA-053`.

  - **Zrobione 2025-12-20**:
    - Dodano 6 pomysłów na artykuły wzmacniające klastry tematyczne (narzędzia + usługi).
    - Klastry wzmocnione: Dostępność/WCAG, Grafika/Branding, Projekty graficzne (druk), SEO/Marketing, E-commerce.
    - Dodane ID: `IDEA-054`, `IDEA-055`, `IDEA-056`, `IDEA-057`, `IDEA-058`, `IDEA-059`.

  - **Zrobione 2025-12-23**:
    - Dodano 12 pomysłów na artykuły dla kategorii z małą liczbą artykułów.
    - Kategorie wzmocnione: Bezpieczeństwo (2), Druk (2), Psychologia (2), Sklepy (2), UX (2), Marketing (2).
    - Dodane ID: `IDEA-078`, `IDEA-079`, `IDEA-080`, `IDEA-081`, `IDEA-082`, `IDEA-083`, `IDEA-084`, `IDEA-085`, `IDEA-086`, `IDEA-087`, `IDEA-088`, `IDEA-089`.

- 🟡 **[AUDIT-007] Repo: audyt prawdziwości informacji i źródeł w istniejących artykułach**

- 🟡 **[AUDIT-008] Blog: audyt artykułów pod kątem nowego tonu (aktualizacja 2025-12-18)**

  - Cel: przeanalizować istniejące artykuły i zidentyfikować, co wymaga poprawy, aby były zgodne z nowymi wytycznymi tonu marki Arteon (mentorski, maksymalnie prosty, bez żargonu).
  - Zakres:
    - Wszystkie artykuły w `data/pl/blog.json` z wyjątkiem dwóch najnowszych (wzorcowych): `jak-przygotowac-profesjonalna-stopke-mailowa` i `favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie`.
  - Kryteria oceny (wg wytycznych z `docs/INSTRUCTIONS.md`):
    1.  **Prostota języka** — czy tekst jest zrozumiały dla osoby bez wiedzy technicznej?
    2.  **Wyjaśnianie terminów** — czy każdy termin techniczny jest od razu wyjaśniony (co to jest, po co to)?
    3.  **Przykłady i konkrety** — czy są konkretne przykłady z praktyki (bez wstawek typu "Wyobraź sobie...")?
    4.  **Płynna narracja** — czy każde zdanie jest logicznym ciągiem dalszym (bez skoków myślowych)?
    5.  **Ludzki język** — czy ton jest jak rozmowa przy kawie, a nie korpo-broszura?
    6.  **Instrukcje do narzędzi Arteon** — czy artykuły o narzędziach mają sekcję „Jak to zrobić w naszym narzędziu"?
    7.  **Benefit-first** — czy korzyść jest przed informacją techniczną?
    8.  **Brak checklisty** — czy artykuł nie zawiera sekcji „Checklista" (zamiast tego: kroki + podsumowanie priorytetów)?
  - Raportowanie:
    - Dla każdego artykułu wypisz konkretne problemy i co wymaga poprawy.
    - Dopisz osobne zadania `CONTENT-*` z listą artykułów do poprawy i kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-009] Blog: audyt rozbudowy istniejących artykułów pod SEO (nowe sekcje, linkowanie wewnętrzne, rozwinięcia tematów)**

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

- ❌ **[AUDIT-010] Repo: audyt tonu marki na stronach — elementy globalne i copy „wspólne” (bez artykułów)**

  - Cel:
    - Sprawdzić, czy teksty w elementach globalnych (widoczne na wielu stronach) są zgodne z nowymi zasadami tonu (mentorski, prosty, „przy kawie”, bez skoków myślowych).
    - Wychwycić miejsca, gdzie pojawia się „korpo-ton”, żargon bez wyjaśnienia albo obietnice nie do obrony.
  - Zakres (minimum):
    - `app/layout.tsx` (globalne elementy UI/copy, jeśli występują)
    - `components/shared/**` (nawigacja, footer, CTA, itp.)
    - `components/shared/CookieConsent.tsx`
    - `components/ui/SearchDialog.tsx`
    - `app/error.tsx`, `app/not-found.tsx`
  - Kryteria oceny (skrót):
    - Prostota języka (zrozumiałe dla osoby nietechnicznej).
    - Termin techniczny → od razu „co to jest?” i „po co to?” (jeśli pada).
    - Spójność narracji (bez przeskoków myślowych).
    - Ludzki język (bez broszury/korpo).
    - Prawdziwość i jednoznaczność (bez „100% gwarancji”/niejasnych obietnic, jeśli nie są literalnie prawdziwe).
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Dla każdego problemu podaj:
      - URL (jeśli dotyczy) + plik (ścieżka) + sekcja/komponent
      - dokładny cytat (1–3 zdania)
      - dlaczego to jest niespójne z tonem (konkretnie: co łamie wytyczne)
      - propozycja poprawki (2–4 zdania w nowym tonie)
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` (1 strona/obszar = 1 zadanie) z:
      - listą cytatów do poprawy,
      - kryteriami akceptacji (np. „brak żargonu bez wyjaśnienia”, „spójny mentorski ton”),
      - `Weryfikacja: nie jest wymagana (COPY-only)`.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

  - **Zrobione 2025-12-19**:

    - Sprawdzono pliki z zakresu (minimum):

      - `app/layout.tsx`
      - `components/shared/**` (Navigation + Desktop/Mobile + Footer + SkipToContent + CookieConsent)
      - `components/ui/SearchDialog.tsx`
      - `app/error.tsx`, `app/not-found.tsx`

    - **Wykryte problemy (URL + plik + cytat + propozycja)**:

      - **[/ (global)] `components/shared/SkipToContent.tsx` / `SkipToContent`**

        - Cytat: `Skip to content`
        - Dlaczego: angielski tekst w polskiej wersji serwisu — brzmi obco i nie prowadzi użytkownika „za rękę”.
        - Propozycja poprawki: `Przejdź do treści` albo `Przejdź do głównej treści`.

      - **[/ (header)] `components/shared/navigation-data/pl.ts` / opisy w menu usług**

        - Cytaty:
          - `WCAG 2.2 AA, projekt na miarę`
          - `Płatności, integracje, automatyzacje`
          - `Architektura treści i CMS`
          - `On-page, technikalia, treści`
          - `Strategia, linki, wzrost fraz`
        - Dlaczego: żargon i skróty bez wyjaśnienia (np. WCAG, on-page) — dla części osób to „korpo/technicznie” i nie jest oczywiste, co realnie dostaną.
        - Propozycja poprawki (wzorzec): krótkie, proste zdania z efektem dla użytkownika, np. `Strona, którą łatwo czytać i klikać` / `Sklep, który sprzedaje i działa szybko` / `Porządek w treściach, żeby Google je lepiej rozumiał`.

      - **[/ (footer)] `components/shared/Footer.tsx` / opis firmy w stopce**

        - Cytat: `Realizujemy projekty dla polskich firm na całym świecie - z siedzibą w Małopolsce, w okolicach Krakowa.`
        - Dlaczego: brzmi „broszurowo” i mało „po ludzku”; do dopracowania również interpunkcja (dywiz zamiast pauzy).
        - Propozycja poprawki: `Pomagamy polskim firmom (także tym za granicą). Pracujemy z Małopolski, spod Krakowa.`

      - **[/ (cookies)] `components/shared/CookieConsent.tsx` / opis i nazwy kategorii**

        - Cytaty:
          - `Używamy technologii niezbędnych do działania serwisu oraz analityki do ulepszania strony.`
          - `Analityka (GA4)` / `Włącza Google Analytics 4 po Twojej zgodzie.`
        - Dlaczego: dla części osób „analityka/GA4” to skrót myślowy; brakuje prostego „co to jest?” i „po co to?”.
        - Propozycja poprawki: prosto wyjaśnić cel, np. `Te statystyki pokazują nam, które podstrony są najczęściej odwiedzane. Dzięki temu możemy poprawiać stronę.`

      - **[/ (search)] `components/ui/SearchDialog.tsx` / mikrocopy i cytaty**

        - Cytaty:
          - `Wpisz frazę, aby wyszukać usługi, narzędzia, artykuły lub realizacje`
          - `Brak wyników dla „{query}"`
        - Dlaczego: komunikat można uprościć i uczynić bardziej „prowadzącym”; dodatkowo są mieszane cudzysłowy.
        - Propozycja poprawki: `Wpisz frazę, np. "audyt SEO" albo "favicon".` oraz `Nie znaleźliśmy nic dla "{query}". Spróbuj innej frazy.`

      - **[/404 i /error] `app/not-found.tsx`, `app/error.tsx` / komunikaty błędów**
        - Cytat (404): `Kliknij przycisk aby wrócić na stronę główną.`
        - Cytat (error): `Wystąpił nieoczekiwany błąd.`
        - Dlaczego: 404 ma błąd interpunkcyjny; komunikaty są poprawne, ale można je lekko „uczłowieczyć” i doprecyzować kolejny krok.
        - Propozycja poprawki: 404: `Kliknij przycisk, aby wrócić na stronę główną.`; error: `Coś poszło nie tak po naszej stronie. Spróbuj ponownie za chwilę...`.

    - **Dodano zadania**: `COPY-044`, `COPY-045`, `COPY-046`, `COPY-047`, `COPY-048`, `COPY-049`.

- ❌ **[AUDIT-011] Strony informacyjne: audyt tonu (bez artykułów)**

  - Cel: upewnić się, że tone-of-voice na stronach informacyjnych jest spójny z nowymi zasadami (mentorski, prosty, „ludzki”).
  - Zakres (strony):
    - `/`
    - `/o-nas`, `/o-nas/faq`, `/o-nas/dolacz-do-sieci`
    - `/kontakt`
    - `/mapa-strony`
    - `/polityka-prywatnosci`, `/regulamin` (bez zmiany znaczenia prawnego — oceniamy głównie „warstwę ludzką”: nagłówki, wstępy, mikrocopy)
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Format jak w `AUDIT-010` (URL + plik + cytat + dlaczego + propozycja poprawki).
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per strona.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-012] Usługi: audyt tonu (marketing + witryny/treści)**

  - Cel: sprawdzić, czy oferta jest napisana prosto, mentorsko i bez „sprzedażowego nadmuchania”.
  - Zakres (strony):
    - `/uslugi`
    - `/uslugi/marketing`
    - `/uslugi/marketing/audyt-seo`
    - `/uslugi/marketing/optymalizacja-seo`
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/uslugi/strony-internetowe`
    - `/uslugi/strony-internetowe/optymalizacja-strony-wordpress`
    - `/uslugi/sklepy-internetowe`
    - `/uslugi/blogi-internetowe`
    - `/uslugi/tworzenie-tresci`
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Format jak w `AUDIT-010`.
    - Dodatkowo: wypisz każde miejsce, gdzie pada termin typu SEO/UX/CTR/WCAG/CWV itp. bez wyjaśnienia.
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per strona.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-013] Usługi: audyt tonu (projekty graficzne)**

  - Cel: dopasować ton do nowego stylu marki na stronach usług graficznych (bez „agencji kreatywnej”, bardziej „prosto i konkretnie”).
  - Zakres (strony):
    - `/uslugi/projekty-graficzne`
    - wszystkie podstrony z `app/(pl)/uslugi/projekty-graficzne/**` (wg `PAGES_CATALOG.md`)
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Format jak w `AUDIT-010`.
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per strona.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-014] Narzędzia: audyt tonu (strona listy + strony narzędzi, bez artykułów)**

  - Cel: sprawdzić, czy opisy narzędzi i mikrocopy UI prowadzą użytkownika „za rękę” (prosto, bez żargonu, krok po kroku).
  - Zakres (strony):
    - `/narzedzia`
    - wszystkie strony narzędzi `/narzedzia/*` (wg `PAGES_CATALOG.md`, w tym desktop-only komunikaty/layout)
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Format jak w `AUDIT-010`.
    - Dodatkowo: wypisz miejsca, gdzie instrukcja jest zbyt techniczna lub pomija „po co to?” (np. tylko „kliknij X”, bez wyjaśnienia efektu).
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per strona narzędzia.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-015] Realizacje: audyt tonu (lista + case studies)**

  - Cel: sprawdzić spójność tonu w portfolio (bez „case-study korpo”), w tym w treściach pobieranych z `projects.json`.
  - Zakres (strony i dane):
    - `/realizacje`
    - `/realizacje/[slug]`
    - `data/pl/projects.json` (tylko pola renderowane na stronach realizacji)
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Format jak w `AUDIT-010`.
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per realizacja (slug).
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-016] Edukacja (huby, bez artykułów): audyt tonu list i kategorii**

  - Cel: sprawdzić ton na stronach listujących edukację (intro/hero/teksty pomocnicze), bez wchodzenia w treści artykułów.
  - Zakres (strony):
    - `/edukacja`
    - `/edukacja/[category]`
  - Wykluczenia (ważne):
    - NIE obejmuje `/edukacja/[category]/[slug]`.
    - NIE obejmuje treści artykułów w `data/pl/blog.json` (to jest osobny proces).
  - Raportowanie (obowiązkowo — konkretne przykłady):
    - Format jak w `AUDIT-010`.
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per strona.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[CONTENT-002] Blog: przepisać artykuły do nowego tonu (priorytet 1 — najgorsze)**

  - Cel: przepisać artykuły, które najbardziej odbiegają od nowego tonu.
  - Uwaga: zadanie rozbite na mniejsze (1 artykuł = 1 zadanie). Realizacja: `CONTENT-006`, `CONTENT-007`, `CONTENT-008`.
  - Wspólne wytyczne (dla każdego artykułu):
    - Zamienić styl raportowy/formalny na mentorski (prosto, jasno, benefit-first).
    - Każdy termin techniczny wyjaśnić od razu po użyciu (1-2 zdania: co to jest, po co to).
    - Dodać konkretne przykłady z praktyki (bez wstawek typu "Wyobraź sobie...").
    - Dodać sekcję FAQ (min. 4 pytania).
    - Usunąć emoji z tekstu (jeśli są).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-003] Blog: przepisać artykuły do nowego tonu (priorytet 2 — średnie)**

  - Cel: przepisać artykuły, które częściowo odbiegają od nowego tonu.
  - Uwaga: zadanie rozbite na mniejsze (1 artykuł = 1 zadanie). Realizacja: `CONTENT-009`, `CONTENT-010`, `CONTENT-011`.
  - Wspólne wytyczne (dla każdego artykułu):
    - Wyjaśnić wszystkie terminy techniczne od razu po użyciu.
    - Dodać analogie i przykłady z życia.
    - Zamienić checklistę/tabelę na podsumowanie priorytetów w tekście (jeśli dotyczy).
    - Dodać sekcję FAQ (jeśli brak).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-009] Blog: przepisać artykuł — `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony`**

  - Plik: `data/pl/blog.json`
  - Co poprawić:
    - Dodać analogie/przykłady z życia (np. rozmowa ze sprzedawcą, pytania na recepcji, FAQ jak „sekcja wątpliwości").
    - Wyjaśnić terminy techniczne od razu po użyciu (m.in. long-tail, FAQ schema, topical authority — i inne użyte w tekście).
    - Uprościć ton (mniej „ekspercko”, bardziej „mentorsko").
    - Dodać sekcję FAQ (min. 4 pytania).
  - Kryteria akceptacji:
    - Każdy termin techniczny jest wyjaśniony.
    - Są min. 2 analogie/porównania z życia.
    - Jest sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-010] Blog: przepisać artykuł — `czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`**

  - Plik: `data/pl/blog.json`
  - Co poprawić:
    - Wyjaśnić terminy techniczne od razu po użyciu (m.in. long-tail, CAC — i inne użyte w tekście).
    - Dodać min. 2 analogie/porównania (np. „tablica ogłoszeń w mieście”, „polecanie z ust do ust, tylko w Google").
    - Dodać sekcję FAQ (min. 4 pytania).
  - Kryteria akceptacji:
    - Każdy termin techniczny jest wyjaśniony.
    - Są min. 2 analogie/porównania z życia.
    - Jest sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-011] Blog: przepisać artykuł — `dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`**

  - Plik: `data/pl/blog.json`
  - Co poprawić:
    - Zamienić checklistę/tabelę na „podsumowanie priorytetów” w tekście (kroki, co sprawdzić najpierw).
    - Wyjaśnić terminy techniczne od razu po użyciu (m.in. robots.txt, noindex, sitemap, Googlebot — i inne użyte w tekście).
    - Dodać analogie/przykłady (np. „adres vs droga do sklepu”, „Google jak kurier, który nie może wejść do budynku").
    - Dodać sekcję FAQ (min. 4 pytania).
  - Kryteria akceptacji:
    - Każdy termin techniczny jest wyjaśniony.
    - Są min. 2 analogie/porównania z życia.
    - Brak checklisty — zamiast tego podsumowanie priorytetów.
    - Jest sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[CONTENT-012] Blog: przepisać artykuł — `jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`**

  - Plik: `data/pl/blog.json`
  - Co poprawić:
    - Skrócić artykuł (obecnie bardzo długi) i wyciąć lanie wody, celując w **5-8 minut** czytania.
    - Zamienić styl „podręcznikowy” na mentorski (proste prowadzenie, konkretne przykłady).
    - Wyjaśnić terminy techniczne od razu po użyciu (m.in. E-E-A-T, klaster tematyczny, meta title, intencja użytkownika — i inne użyte w tekście).
    - Dodać min. 2 analogie/porównania.
    - Dodać sekcję FAQ (min. 4 pytania).
  - Kryteria akceptacji:
    - Artykuł jest zrozumiały dla osoby bez wiedzy technicznej.
    - Każdy termin techniczny jest wyjaśniony.
    - Są min. 2 analogie/porównania z życia.
    - Jest sekcja FAQ (min. 4 pytania).
    - Artykuł jest wyraźnie krótszy i bardziej konkretny.
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

- ❌ **[TOOLS-021] Narzędzia: rozbudowana instrukcja — Generator palet kolorów online**

  - Cel: dodać szczegółową instrukcję użytkowania narzędzia, która wyjaśnia każdą pojedynczą funkcję w prostym, mentorskim tonie.
  - **Etap 1 — Analiza funkcjonalności** (co narzędzie robi):
    - Input: picker + pole HEX (walidacja `#rgb`/`#rrggbb`).
    - Akcje: `Zaktualizuj kolor`, `Losowy kolor`.
    - Output: 9 typów palet (monochromatyczna, analogiczna, komplementarna, triadyczna, split-complementary, pastelowa, ciemna, tonalna, apple-minimal).
    - Kopiowanie: HEX i HSL pojedynczego koloru.
    - Edge cases: niepoprawny HEX, brak prefixu `#`.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące do wykorzystania: `SectionInfo`, `SectionSteps`, `FaqPanels`, `ToolHelper`, `Gap`.
    - Rozważyć nowy komponent: `ToolInstructionStep` (krok z numerem + screenshot/ikona + opis) — uniwersalny dla wszystkich narzędzi.
    - Sprawdzić czy obecna sekcja „Jak korzystać z generatora?" jest wystarczająca.
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Jak wybrać kolor bazowy?" (picker vs wpisywanie HEX, co jeśli nie masz koloru).
    - Sekcja: „Jak działają poszczególne palety?" (wyjaśnienie każdego typu palety — do czego służy, kiedy użyć).
    - Sekcja: „Jak skopiować kolor?" (gdzie kliknąć, co trafia do schowka).
    - Sekcja: „Najczęstsze problemy" (zły format HEX, kolor nie aktualizuje się).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
    - (opcjonalnie) nowy komponent `components/ui/tools/ToolInstructionStep.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą funkcję narzędzia krok po kroku.
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-022] Narzędzia: rozbudowana instrukcja — Generator palety kolorów z obrazu**

  - Cel: dodać szczegółową instrukcję użytkowania narzędzia ekstrakcji palety z obrazu/logo.
  - **Etap 1 — Analiza funkcjonalności**:
    - Upload: drag&drop lub wybór pliku (PNG/JPG/SVG).
    - Processing: downscale + bucketing + filtrowanie podobnych kolorów.
    - Output: do 12 dominujących kolorów (HEX + RGB).
    - Kopiowanie: pojedynczy kolor lub cała paleta.
    - Edge cases: przezroczyste tło (ignorowane), bardzo jednorodny obraz, duży plik.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `FaqPanels`, `ToolFileDropzone`, `ToolAlert`.
    - Rozważyć: sekcja „Jakie obrazy działają najlepiej?" z przykładami.
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Jak dodać obraz?" (drag&drop vs klik, jakie formaty).
    - Sekcja: „Co robi narzędzie z obrazem?" (wyjaśnienie algorytmu prostym językiem).
    - Sekcja: „Jak skopiować kolory?" (pojedynczo vs cała paleta).
    - Sekcja: „Jakie obrazy dają najlepsze wyniki?" (logo vs zdjęcie, kontrast, tło).
    - Sekcja: „Najczęstsze problemy" (mało kolorów, dziwne wyniki).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą funkcję narzędzia.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-023] Narzędzia: rozbudowana instrukcja — Licznik długości meta title i description**

  - Cel: dodać szczegółową instrukcję dla narzędzia SEO do analizy meta tagów.
  - **Etap 1 — Analiza funkcjonalności**:
    - Inputy: URL (opcjonalny), title, description.
    - Metryki: znaki, słowa, szerokość w px (symulacja SERP).
    - Statusy: empty/too-short/ideal/too-long.
    - Podgląd: snippet Google (title + URL + description).
    - Truncation: automatyczne obcinanie do 65/165 znaków.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `ToolFieldRow`, `ToolHelper`.
    - Rozważyć: wizualne wyjaśnienie „dlaczego szerokość w px ma znaczenie" (różne znaki mają różną szerokość).
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Co to jest meta title i description?" (wyjaśnienie dla początkujących).
    - Sekcja: „Dlaczego długość ma znaczenie?" (obcinanie w Google, CTR).
    - Sekcja: „Jak korzystać z narzędzia?" (krok po kroku).
    - Sekcja: „Jak interpretować wyniki?" (co oznaczają statusy, co robić gdy za krótki/długi).
    - Sekcja: „Podgląd snippet — co pokazuje?" (jak to wygląda w Google).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą metrykę i status.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-024] Narzędzia: rozbudowana instrukcja — Tester kontrastu kolorów WCAG**

  - Cel: dodać szczegółową instrukcję dla narzędzia dostępności WCAG.
  - **Etap 1 — Analiza funkcjonalności**:
    - Inputy: foreground (tekst), background (tło), próbka tekstu.
    - Formaty kolorów: HEX (`#rgb`, `#rrggbb`), RGB(A), HSL(A).
    - Wyniki: ratio (X.XX:1), pass/fail dla AA/AAA (normal/large text, UI).
    - Akcje: zamień kolory, reset, dopasuj (auto-suggest).
    - Podgląd: tekst i ikona na tle.
    - Edge cases: alpha channel, niepoprawny format.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `ToolFieldRow`, `Badge`, `ToolHelper`.
    - Rozważyć: tabela wyjaśniająca progi WCAG (AA vs AAA, normal vs large).
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Co to jest kontrast i dlaczego jest ważny?" (dostępność, czytelność).
    - Sekcja: „Co oznaczają poziomy WCAG AA i AAA?" (progi, kiedy który wymagany).
    - Sekcja: „Jak korzystać z testera?" (krok po kroku).
    - Sekcja: „Jak interpretować wyniki?" (co oznacza ratio, co robić gdy fail).
    - Sekcja: „Funkcja Dopasuj — co robi?" (auto-suggest wyjaśnienie).
    - Sekcja: „Jakie formaty kolorów są obsługiwane?" (HEX/RGB/HSL z przykładami).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia progi WCAG i interpretację wyników.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-025] Narzędzia: rozbudowana instrukcja — Darmowy generator favicon**

  - Cel: dodać szczegółową instrukcję dla generatora favicon.
  - **Etap 1 — Analiza funkcjonalności**:
    - Upload: drag&drop lub wybór pliku (PNG/JPG/SVG).
    - Konfiguracja: wybór rozmiarów PNG (16/32/180/192/512), include ICO, tło (transparent/kolor), manifest, auto-download.
    - Output: pliki PNG + opcjonalnie favicon.ico + opcjonalnie site.webmanifest.
    - Pobieranie: pojedynczo, wszystkie, paczka ZIP.
    - Edge cases: za mały obraz źródłowy, złożona grafika vs proste logo.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `ToolAlert`, `Badge`.
    - Obecna strona ma już sekcje „Jak korzystać?" i „Gdzie wgrać pliki?" — rozbudować.
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Co to jest favicon i do czego służy?" (karty przeglądarki, zakładki, PWA).
    - Sekcja: „Jakie rozmiary ikon są potrzebne?" (wyjaśnienie każdego rozmiaru).
    - Sekcja: „Jak korzystać z generatora?" (rozbudowane kroki).
    - Sekcja: „Opcje generowania" (tło, manifest, auto-download — co każda robi).
    - Sekcja: „Jak pobrać pliki?" (pojedynczo vs ZIP).
    - Sekcja: „Gdzie i jak wgrać favicon?" (WordPress, HTML, Next.js).
    - Sekcja: „Jaki obraz źródłowy działa najlepiej?" (proste logo, kwadratowe, min. rozmiar).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą opcję i rozmiar.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-026] Narzędzia: rozbudowana instrukcja — Konwerter JPG/PNG na WebP**

  - Cel: dodać szczegółową instrukcję dla batch konwertera do WebP.
  - **Etap 1 — Analiza funkcjonalności**:
    - Upload: drag&drop lub wybór wielu plików (JPG/PNG).
    - Kolejka: statusy per plik (pending/processing/done/error).
    - Smart quality: automatyczne obniżanie jakości jeśli wynik większy od oryginału.
    - Opcje: jakość (60-100%), auto-download.
    - Pobieranie: pojedynczo, wszystkie, raport oszczędności.
    - Edge cases: już mały plik, bardzo duży plik, duplikaty.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `ToolAlert`, `Badge`.
    - Rozważyć: sekcja wyjaśniająca „Smart Quality" z przykładem.
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Co to jest WebP i dlaczego warto konwertować?" (rozmiar, wsparcie przeglądarek).
    - Sekcja: „Jak dodać pliki do konwersji?" (drag&drop, wybór wielu).
    - Sekcja: „Co oznaczają statusy plików?" (pending/processing/done/error).
    - Sekcja: „Jak działa Smart Quality?" (automatyczne dostosowanie jakości).
    - Sekcja: „Ustawienia jakości — co wybrać?" (kiedy 80%, kiedy wyższa).
    - Sekcja: „Jak pobrać przekonwertowane pliki?" (pojedynczo, wszystkie, raport).
    - Sekcja: „Raport oszczędności — co pokazuje?" (ile zaoszczędzono).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą funkcję i status.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-027] Narzędzia: rozbudowana instrukcja — Zmiana rozmiaru i kadrowanie zdjęcia**

  - Cel: dodać szczegółową instrukcję dla narzędzia do resize/crop.
  - **Etap 1 — Analiza funkcjonalności**:
    - Upload: drag&drop lub wybór pliku (dowolny obraz).
    - Tryby rozmiaru: pixels (ręcznie) vs preset (social/web).
    - Presety: IG (1080×1080, 1080×1350, 1080×1920), FB, LinkedIn, OG image, baner, hero.
    - Kadrowanie: interaktywne (move + resize handles), zoom, siatka 3×3.
    - Kształty: prostokąt (aspect ratio), kwadrat, koło.
    - Eksport: JPG/PNG/WebP, jakość (60-100%).
    - Edge cases: koło wymaga PNG (alpha), bardzo mały oryginał.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `ToolAlert`, `Badge`.
    - Rozważyć: tabela presetów z zastosowaniami.
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Jak dodać obraz?" (drag&drop, formaty).
    - Sekcja: „Tryby ustawiania rozmiaru" (pixels vs preset).
    - Sekcja: „Presety — który wybrać?" (tabela: preset → do czego służy).
    - Sekcja: „Jak kadrować obraz?" (przeciąganie, uchwyty, zoom).
    - Sekcja: „Siatka 3×3 — do czego służy?" (kompozycja, reguła trójpodziału).
    - Sekcja: „Kształty kadru" (prostokąt, kwadrat, koło — kiedy który).
    - Sekcja: „Eksport — jaki format wybrać?" (JPG vs PNG vs WebP, jakość).
    - Sekcja: „Proporcje (aspect ratio) — co to znaczy?" (4:5, 16:9 itp.).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą funkcję, preset i opcję eksportu.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-028] Narzędzia: rozbudowana instrukcja — Generator stopki mailowej**

  - Cel: dodać szczegółową instrukcję dla generatora e-mail signature.
  - **Etap 1 — Analiza funkcjonalności**:
    - Dane: imię, email, telefon, strona, adres, firma, stanowisko, avatar URL.
    - CTA: label + URL.
    - Social: LinkedIn, Instagram, Facebook, TikTok, YouTube, X.
    - Układy: standard, accent-bar, top-banner, label-column, centered.
    - Style: kolor akcentu, kolor tekstu, tło, font, rozmiar, padding, radius CTA, divider.
    - Klauzula prawna: textarea (wieloliniowa).
    - Kopiowanie: rich HTML (Gmail/Outlook) lub plain text fallback.
    - Edge cases: brak wymaganych pól, długa klauzula.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `Button`, `Badge`.
    - Rozważyć: galeria układów z podglądem.
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Co to jest stopka mailowa i do czego służy?" (profesjonalizm, kontakt).
    - Sekcja: „Jak wypełnić dane?" (które pola są wymagane, które opcjonalne).
    - Sekcja: „Układy stopki — który wybrać?" (opis każdego układu z zastosowaniem).
    - Sekcja: „Jak dodać przycisk CTA?" (co wpisać, gdzie prowadzi).
    - Sekcja: „Jak dodać linki do social media?" (które pola wypełnić).
    - Sekcja: „Personalizacja wyglądu" (kolory, font, rozmiar — co każde ustawienie robi).
    - Sekcja: „Klauzula prawna/RODO — kiedy dodać?" (przykłady).
    - Sekcja: „Jak skopiować stopkę do Gmail/Outlook?" (krok po kroku).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdy panel i opcję.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-029] Narzędzia: rozbudowana instrukcja — Generator kodów QR**

  - Cel: dodać szczegółową instrukcję dla generatora kodów QR.
  - **Etap 1 — Analiza funkcjonalności**:
    - Inputy: tekst/URL do zakodowania.
    - Opcje: rozmiar, kolor QR, kolor tła, poziom korekcji błędów.
    - Podgląd: live preview kodu QR.
    - Pobieranie: PNG/SVG.
    - Edge cases: za długi tekst, specjalne znaki.
  - **Etap 2 — Analiza komponentów**:
    - Istniejące: `SectionInfo`, `SectionSteps`, `ToolFieldRow`, `ToolHelper`.
    - Rozważyć: sekcja „Gdzie używać kodów QR?" z przykładami (wizytówki, plakaty, opakowania).
  - **Etap 3 — Stworzenie instrukcji**:
    - Sekcja: „Co to jest kod QR i jak działa?" (skanowanie, pojemność).
    - Sekcja: „Co można zakodować w QR?" (URL, tekst, vCard, Wi-Fi).
    - Sekcja: „Jak wygenerować kod QR?" (krok po kroku).
    - Sekcja: „Opcje personalizacji" (rozmiar, kolory, korekcja błędów — co każde robi).
    - Sekcja: „Poziomy korekcji błędów — który wybrać?" (L/M/Q/H, kiedy który).
    - Sekcja: „Jak pobrać kod QR?" (PNG vs SVG, do czego który).
    - Sekcja: „Gdzie używać kodów QR?" (przykłady zastosowań).
    - Sekcja: „Jak przetestować kod przed drukiem?" (skanowanie telefonem).
    - Sekcja FAQ (min. 4 pytania).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/generator-kodu-qr/page.tsx`
  - Kryteria akceptacji:
    - Instrukcja wyjaśnia każdą opcję i format.
    - Ton zgodny z INSTRUCTIONS.md.
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

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

---

## Pomysły

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

- ❌ **[IDEA-054] Blog: Kontrast kolorów na stronie: dlaczego ma znaczenie i jak go sprawdzić?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster dostępności/WCAG + dać kontekst dla narzędzia tester kontrastu.
    - Artykuł edukuje, dlaczego kontrast wpływa na czytelność i dostępność, oraz kieruje do narzędzia Arteon.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2/H3):
    - H2: Co to jest kontrast kolorów i dlaczego ma znaczenie dla użytkowników
    - H2: Kto korzysta z dobrego kontrastu (osoby słabowidzące, seniorzy, użytkownicy w słońcu)
    - H2: Standard WCAG: co oznaczają poziomy AA i AAA (proste wyjaśnienie)
    - H2: Jak sprawdzić kontrast na swojej stronie (narzędzie Arteon + inne metody)
    - H2: Najczęstsze błędy kontrastowe i jak je poprawić (przykłady)
    - H2: Podsumowanie + CTA (tester kontrastu / oferta stron)
  - Linkowanie wewnętrzne:
    - `/narzedzia/tester-kontrastu-kolorow-wcag`
    - `/uslugi/strony-internetowe`
    - `/edukacja/grafika/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
  - SEO:
    - URL/slug: `/edukacja/grafika/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`
    - `metadata.title`: `Kontrast kolorów na stronie: dlaczego ma znaczenie i jak go sprawdzić? | Arteon`
    - `metadata.description`: `Dowiedz się, czym jest kontrast kolorów, jak wpływa na czytelność i dostępność strony oraz jak sprawdzić, czy Twoja strona spełnia standardy WCAG.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 3 linki wewnętrzne + CTA do narzędzia lub usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-058] Blog: Audyt SEO strony: co sprawdzamy i po co to robić przed pozycjonowaniem?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster SEO/Marketing + dać kontekst dla usługi audytu SEO.
    - Artykuł edukuje, czym jest audyt, co obejmuje i dlaczego warto zacząć od niego.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2/H3):
    - H2: Co to jest audyt SEO i dlaczego warto go zrobić przed pozycjonowaniem
    - H2: Co sprawdzamy w audycie technicznym (indeksacja, szybkość, mobile, błędy)
    - H2: Co sprawdzamy w audycie treści (struktura, słowa kluczowe, thin content)
    - H2: Co sprawdzamy w audycie linków (profil linków, linkowanie wewnętrzne)
    - H2: Jak wygląda raport z audytu i co z nim zrobić
    - H2: Kiedy audyt jest konieczny, a kiedy można go pominąć
    - H2: Podsumowanie + CTA (audyt SEO / pozycjonowanie)
  - Linkowanie wewnętrzne:
    - `/uslugi/marketing/audyt-seo`
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/uslugi/marketing/optymalizacja-seo`
    - `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
    - `/narzedzia/licznik-dlugosci-meta-title-i-description`
  - SEO:
    - URL/slug: `/edukacja/seo/audyt-seo-strony-co-sprawdzamy`
    - `metadata.title`: `Audyt SEO strony: co sprawdzamy i po co to robić przed pozycjonowaniem? | Arteon`
    - `metadata.description`: `Dowiedz się, czym jest audyt SEO, co obejmuje i dlaczego warto go zrobić przed rozpoczęciem pozycjonowania strony.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (bez DIY — pokazuje proces i wartość, nie instrukcję samodzielnego audytu).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-060] Audyt: przegląd artykułów i stron pod kątem pomysłów na nowe komponenty**

  - Cel i uzasadnienie:
    - Zwiększyć różnorodność wizualną strony poprzez dodanie nowych komponentów do artykułów i stron.
    - Zidentyfikować miejsca, gdzie dodatkowe komponenty (np. wizualizacje, interaktywne elementy, porównania) wzbogaciłyby treść.
  - Zakres:
    - Przegląd wszystkich artykułów w `data/pl/blog.json`.
    - Przegląd stron usług, narzędzi i realizacji.
    - Analiza innych stron internetowych pod kątem inspiracji.
  - Oczekiwany wynik:
    - Lista pomysłów na nowe komponenty (np. porównanie przed/po, timeline, karty z ikonami, interaktywne kalkulatory, wizualizacje danych).
    - Dla każdego pomysłu: nazwa, opis, przykładowe użycie, priorytety.
  - Kryteria akceptacji:
    - Min. 5-10 pomysłów na nowe komponenty.
    - Każdy pomysł z opisem i przykładowym zastosowaniem.
    - Lista zapisana jako osobne zadania `COMPONENTS-*` lub notatka w `DONE_TASKS.md`.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[IDEA-063] Blog: Jak powstaje dobre logo i na co zwrócić uwagę przy jego projektowaniu?**

  - Cel i uzasadnienie:
    - Wzmocnić usługę projekt logo + edukacja o brandingu.
    - Artykuł pokazuje proces i wartość profesjonalnego projektu logo.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — rola logo w identyfikacji firmy
    - H2: Cechy dobrego logo (prostota, skalowalność, unikalność)
    - H2: Rodzaje logo (typograficzne, symboliczne, kombinowane)
    - H2: Jak wygląda proces projektowania logo?
    - H2: Co powinieneś przygotować przed zleceniem projektu?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/projekty-graficzne/projekt-logo`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/edukacja/grafika/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
  - SEO:
    - URL/slug: `/edukacja/grafika/jak-powstaje-dobre-logo`
    - `metadata.title`: `Jak powstaje dobre logo i na co zwrócić uwagę przy jego projektowaniu? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie cechy ma dobre logo, jak wygląda proces projektowania i co przygotować przed zleceniem projektu logo.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (bez DIY — pokazuje proces i wartość).
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-065] Blog: Od czego zacząć budowanie identyfikacji wizualnej małej firmy?**

  - Cel i uzasadnienie:
    - Wzmocnić usługę identyfikacji wizualnej + klaster branding/grafika.
    - Artykuł pokazuje kolejność działań i wartość spójnego wizerunku.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — co to jest identyfikacja wizualna
    - H2: Dlaczego nawet mała firma potrzebuje spójnego wizerunku?
    - H2: Z czego składa się identyfikacja wizualna? (logo, kolory, typografia, materiały)
    - H2: Od czego zacząć i w jakiej kolejności?
    - H2: Co przygotować przed zleceniem identyfikacji?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/uslugi/projekty-graficzne/projekt-logo`
    - `/edukacja/druk/materialy-drukowane-dla-firmy-ktore-zamowic`
  - SEO:
    - URL/slug: `/edukacja/grafika/od-czego-zaczac-budowanie-identyfikacji-wizualnej`
    - `metadata.title`: `Od czego zacząć budowanie identyfikacji wizualnej małej firmy? | Arteon`
    - `metadata.description`: `Dowiedz się, z czego składa się identyfikacja wizualna, w jakiej kolejności ją budować i co przygotować przed zleceniem projektu.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (bez DIY — pokazuje proces i wartość).
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-068] Blog: Jak napisać skuteczny tekst na stronę główną firmy?**

  - Cel i uzasadnienie:
    - Wzmocnić usługę tworzenia treści + klaster copywriting/UX.
    - Artykuł edukuje o strukturze i treściach strony głównej.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — rola strony głównej w komunikacji z klientem
    - H2: Co powinno znaleźć się na stronie głównej? (sekcje i ich funkcje)
    - H2: Jak pisać nagłówki i teksty, które przyciągają uwagę?
    - H2: Najczęstsze błędy na stronach głównych firm
    - H2: Jak dostosować treści do grupy docelowej?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/tworzenie-tresci`
    - `/uslugi/strony-internetowe`
    - `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
  - SEO:
    - URL/slug: `/edukacja/tresci/jak-napisac-tekst-na-strone-glowna-firmy`
    - `metadata.title`: `Jak napisać skuteczny tekst na stronę główną firmy? | Arteon`
    - `metadata.description`: `Dowiedz się, co powinno znaleźć się na stronie głównej firmy, jak pisać nagłówki i jakich błędów unikać.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-070] Blog: Jak przyspieszyć stronę internetową? Core Web Vitals w praktyce**

  - Cel i uzasadnienie:
    - Wzmocnić usługi strony/optymalizacja + klaster SEO/wydajność.
    - Artykuł edukuje o szybkości strony i wskaźnikach Core Web Vitals.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — dlaczego szybkość strony ma znaczenie
    - H2: Co to są Core Web Vitals? (LCP, INP, CLS)
    - H2: Jak sprawdzić szybkość swojej strony?
    - H2: Najczęstsze przyczyny wolnego działania strony
    - H2: Co można zrobić, żeby strona działała szybciej?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/strony-internetowe/optymalizacja-strony-wordpress`
    - `/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
    - `/narzedzia/jpg-png-na-webp-bez-limitu`
  - SEO:
    - URL/slug: `/edukacja/seo/jak-przyspieszyc-strone-internetowa-core-web-vitals`
    - `metadata.title`: `Jak przyspieszyć stronę internetową? Core Web Vitals w praktyce | Arteon`
    - `metadata.description`: `Dowiedz się, co to są Core Web Vitals, jak sprawdzić szybkość strony i co zrobić, żeby strona działała szybciej.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-072] Blog: Strona internetowa czy reklamy Google Ads: od czego zacząć promocję firmy?**

  - Cel i uzasadnienie:
    - Wzmocnić usługi strony + pozycjonowanie vs płatne reklamy.
    - Bardzo popularne pytanie wśród firm rozpoczynających działania online.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — dwie drogi do klientów online
    - H2: Czym jest strona internetowa i SEO jako fundament?
    - H2: Czym są reklamy Google Ads i kiedy działają najlepiej?
    - H2: Porównanie: koszty, czas, efekty długoterminowe
    - H2: Kiedy zacząć od strony, a kiedy od reklam?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
  - SEO:
    - URL/slug: `/edukacja/marketing/strona-internetowa-czy-reklamy-google-ads-od-czego-zaczac`
    - `metadata.title`: `Strona internetowa czy reklamy Google Ads: od czego zacząć promocję firmy? | Arteon`
    - `metadata.description`: `Dowiedz się, czy lepiej zainwestować w stronę internetową i SEO, czy w reklamy Google Ads. Porównanie kosztów, czasu i efektów.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty, bez DIY).
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-073] Blog: Czym jest UX i jak wpływa na skuteczność strony internetowej?**

  - Cel i uzasadnienie:
    - Wzmocnić usługi strony/sklepy + klaster UX/konwersja.
    - Artykuł edukuje o podstawach UX i jego wpływie na biznes.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — co to jest UX (user experience)
    - H2: Dlaczego UX ma znaczenie dla strony firmowej?
    - H2: Elementy dobrego UX na stronie internetowej
    - H2: Jak rozpoznać problemy z UX na swojej stronie?
    - H2: Przykłady dobrych praktyk UX
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/uslugi/projekty-graficzne/projekt-graficzny-strony`
    - `/edukacja/grafika/jak-dobrac-kolory-do-strony-internetowej`
  - SEO:
    - URL/slug: `/edukacja/ux/czym-jest-ux-i-jak-wplywa-na-skutecznosc-strony`
    - `metadata.title`: `Czym jest UX i jak wpływa na skuteczność strony internetowej? | Arteon`
    - `metadata.description`: `Dowiedz się, czym jest UX, dlaczego ma znaczenie dla strony firmowej i jak rozpoznać problemy z doświadczeniem użytkownika.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-077] Blog: Jakie wymiary grafik na Facebooku, Instagramie i LinkedIn?**

  - Cel i uzasadnienie:
    - Rozwinięcie tematu wymiarów grafik z IDEA-074 w formie kompletnego przewodnika.
    - Artykuł będzie szczegółowym źródłem wiedzy o wymiarach dla każdej platformy.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — dlaczego wymiary mają znaczenie
    - H2: Wymiary grafik na Facebooku (post, cover, story, reklama)
    - H2: Wymiary grafik na Instagramie (post kwadratowy, pionowy, poziomy, stories, reels, profil)
    - H2: Wymiary grafik na LinkedIn (post, banner firmowy, cover)
    - H2: Wymiary grafik na innych platformach (TikTok, YouTube, Pinterest)
    - H2: Co się dzieje, gdy wymiary są niepoprawne?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/projekty-graficzne/szablony-postow-social-media`
    - `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`
    - `/edukacja/grafika/jak-przygotowac-grafike-na-posty-w-mediach-spolecznosciowych`
  - SEO:
    - URL/slug: `/edukacja/grafika/jakie-wymiary-grafik-na-facebooku-instagramie-i-linkedin`
    - `metadata.title`: `Jakie wymiary grafik na Facebooku, Instagramie i LinkedIn? | Arteon`
    - `metadata.description`: `Kompletny przewodnik po wymiarach grafik na media społecznościowe. Poznaj dokładne rozmiary dla postów, stories, reklam i banerów na każdej platformie.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Szczegółowe wymiary dla każdej platformy z konkretnymi wartościami px.
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-078] Blog: Jak zabezpieczyć stronę WordPress przed atakami i włamaniami?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Bezpieczeństwo (obecnie 1 artykuł o SSL).
    - WordPress to najpopularniejszy CMS — temat ma duży potencjał wyszukiwań.
    - Artykuł edukuje o zagrożeniach i kieruje do usługi optymalizacji/wsparcia.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego strony WordPress są częstym celem ataków?
    - H2: Najczęstsze rodzaje zagrożeń (brute force, malware, SQL injection, XSS)
    - H2: Podstawy bezpieczeństwa: aktualizacje, hasła, użytkownicy
    - H2: Wtyczki bezpieczeństwa: co robią i kiedy warto je mieć
    - H2: Kopie zapasowe jako ostatnia linia obrony
    - H2: Kiedy zlecić audyt bezpieczeństwa specjaliście?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe/optymalizacja-strony-wordpress`
    - `/uslugi/strony-internetowe`
    - `/edukacja/bezpieczenstwo/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/bezpieczenstwo/jak-zabezpieczyc-strone-wordpress-przed-atakami`
    - `metadata.title`: `Jak zabezpieczyć stronę WordPress przed atakami i włamaniami? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie zagrożenia czyhają na strony WordPress, jak się przed nimi chronić i kiedy warto zlecić audyt bezpieczeństwa.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, bez DIY — pokazuje zagrożenia i wartość profesjonalnej opieki).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-079] Blog: Kopie zapasowe strony: dlaczego są ważne i jak często je robić?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Bezpieczeństwo.
    - Temat często pomijany przez właścicieli stron, a kluczowy dla ciągłości działania.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Co to jest kopia zapasowa strony i co zawiera?
    - H2: Kiedy kopia zapasowa ratuje firmę? (przykłady scenariuszy)
    - H2: Jak często robić kopie zapasowe? (zależy od typu strony)
    - H2: Gdzie przechowywać kopie? (hosting, chmura, lokalnie)
    - H2: Automatyczne vs ręczne kopie zapasowe
    - H2: Jak sprawdzić, czy hosting robi kopie?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/strony-internetowe/optymalizacja-strony-wordpress`
    - `/edukacja/strony/jak-wybrac-domene-i-hosting-dla-strony-firmowej`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/bezpieczenstwo/kopie-zapasowe-strony-dlaczego-sa-wazne`
    - `metadata.title`: `Kopie zapasowe strony: dlaczego są ważne i jak często je robić? | Arteon`
    - `metadata.description`: `Dowiedz się, czym są kopie zapasowe strony, jak często je wykonywać i gdzie przechowywać, żeby nie stracić danych.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-080] Blog: Co powinien zawierać dobry projekt wizytówki firmowej?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Druk (obecnie 1 artykuł o materiałach drukowanych).
    - Wizytówki to najpopularniejszy materiał drukowany — temat ma duży potencjał.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Rola wizytówki w kontakcie z klientem
    - H2: Jakie informacje powinny znaleźć się na wizytówce?
    - H2: Format i wymiary wizytówki (standardowe vs niestandardowe)
    - H2: Papier i wykończenie: co wybrać i dlaczego ma znaczenie
    - H2: Najczęstsze błędy przy projektowaniu wizytówek
    - H2: Jak przygotować się do zlecenia projektu wizytówki?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/projekty-graficzne/projekt-wizytowki`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/edukacja/druk/materialy-drukowane-dla-firmy-ktore-zamowic`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/druk/co-powinien-zawierac-dobry-projekt-wizytowki`
    - `metadata.title`: `Co powinien zawierać dobry projekt wizytówki firmowej? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie informacje umieścić na wizytówce, jaki format wybrać i na co zwrócić uwagę przy zamawianiu projektu.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, bez DIY).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-081] Blog: Jak przygotować skuteczną ulotkę reklamową dla firmy?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Druk.
    - Ulotki to drugi najpopularniejszy materiał drukowany po wizytówkach.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Kiedy ulotka ma sens jako narzędzie marketingowe?
    - H2: Formaty ulotek i ich zastosowania (DL, A5, A4, składane)
    - H2: Co powinno znaleźć się na ulotce? (struktura treści)
    - H2: Jak przyciągnąć uwagę i zachęcić do działania?
    - H2: Papier i wykończenie: wpływ na odbiór ulotki
    - H2: Najczęstsze błędy przy projektowaniu ulotek
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/projekty-graficzne/projekt-ulotki`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/edukacja/druk/materialy-drukowane-dla-firmy-ktore-zamowic`
    - `/edukacja/grafika/kody-qr-w-materialach-reklamowych`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/druk/jak-przygotowac-skuteczna-ulotke-reklamowa`
    - `metadata.title`: `Jak przygotować skuteczną ulotkę reklamową dla firmy? | Arteon`
    - `metadata.description`: `Dowiedz się, jaki format ulotki wybrać, co na niej umieścić i jak zaprojektować ulotkę, która przyciągnie uwagę i zachęci do kontaktu.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, bez DIY).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-082] Blog: Jak psychologia wpływa na zachowania użytkowników na stronie internetowej?**

  - Cel i uzasadnienie:
    - Stworzyć kategorię Psychologia (obecnie 0 artykułów jako primary).
    - Temat łączy UX z marketingiem i wspiera usługi stron/sklepów.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego zrozumienie użytkownika jest kluczowe dla strony?
    - H2: Efekt pierwszego wrażenia (pierwsze 3-5 sekund)
    - H2: Zasada Hicka: jak liczba opcji wpływa na decyzje
    - H2: Społeczny dowód słuszności: opinie, liczby, logotypy klientów
    - H2: Strach przed utratą (FOMO) i pilność: kiedy działają, a kiedy irytują
    - H2: Jak wykorzystać te zasady na stronie firmowej?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/grafika/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
    - `/edukacja/ux/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/psychologia/jak-psychologia-wplywa-na-zachowania-uzytkownikow`
    - `metadata.title`: `Jak psychologia wpływa na zachowania użytkowników na stronie internetowej? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie mechanizmy psychologiczne wpływają na decyzje użytkowników i jak wykorzystać je na stronie firmowej.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-083] Blog: Efekt pierwszego wrażenia: jak strona buduje zaufanie w kilka sekund?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Psychologia.
    - Temat bezpośrednio wpływa na konwersję i wspiera usługi stron.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Co decyduje o pierwszym wrażeniu na stronie?
    - H2: Ile czasu masz na przekonanie użytkownika? (dane z badań)
    - H2: Elementy budujące zaufanie powyżej linii załamania
    - H2: Sygnały ostrzegawcze: co odstrasza użytkowników
    - H2: Jak sprawdzić pierwsze wrażenie swojej strony?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/projekty-graficzne/projekt-graficzny-strony`
    - `/edukacja/psychologia/jak-psychologia-wplywa-na-zachowania-uzytkownikow`
    - `/edukacja/grafika/jak-dobrac-kolory-do-strony-internetowej`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/psychologia/efekt-pierwszego-wrazenia-jak-strona-buduje-zaufanie`
    - `metadata.title`: `Efekt pierwszego wrażenia: jak strona buduje zaufanie w kilka sekund? | Arteon`
    - `metadata.description`: `Dowiedz się, co decyduje o pierwszym wrażeniu na stronie, ile czasu masz na przekonanie użytkownika i jakie elementy budują zaufanie.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Źródła dla danych z badań (np. Google, Stanford Web Credibility).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-084] Blog: Czym różni się sklep internetowy od strony firmowej i kiedy warto go mieć?**

  - Cel i uzasadnienie:
    - Stworzyć kategorię Sklepy jako primary (obecnie 0 artykułów).
    - Popularne pytanie wśród firm rozważających sprzedaż online.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Strona firmowa vs sklep internetowy: podstawowe różnice
    - H2: Kiedy wystarczy strona z formularzem zamówienia?
    - H2: Kiedy warto zainwestować w pełny sklep internetowy?
    - H2: Co jest potrzebne do uruchomienia sklepu? (koszty, czas, obowiązki prawne)
    - H2: Hybrydowe rozwiązania: strona + koszyk lub integracja z marketplace
    - H2: Jak podjąć decyzję? (pytania do przemyślenia)
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/sklepy-internetowe`
    - `/uslugi/strony-internetowe`
    - `/edukacja/seo/jak-przygotowac-sklep-internetowy-do-pozycjonowania`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/sklepy/czym-rozni-sie-sklep-internetowy-od-strony-firmowej`
    - `metadata.title`: `Czym różni się sklep internetowy od strony firmowej i kiedy warto go mieć? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie są różnice między stroną firmową a sklepem internetowym, kiedy warto zainwestować w e-commerce i co jest potrzebne do startu.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-085] Blog: Jak zwiększyć konwersję w sklepie internetowym bez obniżania cen?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Sklepy.
    - Temat bezpośrednio wpływa na wyniki biznesowe klientów e-commerce.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Co to jest konwersja i dlaczego warto ją mierzyć?
    - H2: Karta produktu: elementy, które zwiększają sprzedaż
    - H2: Proces zakupowy: jak nie stracić klienta przy kasie
    - H2: Zaufanie i bezpieczeństwo: opinie, gwarancje, zwroty
    - H2: Szybkość i wygoda: wpływ wydajności na sprzedaż
    - H2: Jak mierzyć i testować zmiany? (podstawy A/B testing)
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/sklepy-internetowe`
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/edukacja/seo/jak-przygotowac-sklep-internetowy-do-pozycjonowania`
    - `/edukacja/psychologia/jak-psychologia-wplywa-na-zachowania-uzytkownikow`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/sklepy/jak-zwiekszyc-konwersje-w-sklepie-internetowym`
    - `metadata.title`: `Jak zwiększyć konwersję w sklepie internetowym bez obniżania cen? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie elementy sklepu internetowego wpływają na konwersję i jak zwiększyć sprzedaż bez obniżania cen.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, bez DIY).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-086] Blog: Nawigacja na stronie: jak ułatwić użytkownikom znalezienie tego, czego szukają?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię UX (obecnie 1 artykuł + IDEA-073).
    - Nawigacja to fundament UX — temat praktyczny i konkretny.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego nawigacja decyduje o skuteczności strony?
    - H2: Rodzaje nawigacji: główna, stopka, breadcrumbs, wyszukiwarka
    - H2: Ile pozycji w menu to optymalna liczba?
    - H2: Nazewnictwo: jak nazywać podstrony, żeby były zrozumiałe
    - H2: Nawigacja mobilna: hamburgery, sticky menu, bottom nav
    - H2: Najczęstsze błędy w nawigacji i jak ich unikać
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/ux/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/ux/nawigacja-na-stronie-jak-ulatwic-uzytkownikom-znalezienie`
    - `metadata.title`: `Nawigacja na stronie: jak ułatwić użytkownikom znalezienie tego, czego szukają? | Arteon`
    - `metadata.description`: `Dowiedz się, jak zaprojektować nawigację na stronie, żeby użytkownicy szybko znajdowali to, czego szukają.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-087] Blog: Formularze na stronie: jak je projektować, żeby użytkownicy je wypełniali?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię UX.
    - Formularze to kluczowy element konwersji — temat praktyczny.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego formularze są tak ważne dla strony firmowej?
    - H2: Ile pól powinien mieć formularz kontaktowy?
    - H2: Etykiety, placeholdery i komunikaty błędów
    - H2: Walidacja: jak pomagać, a nie frustrować użytkownika
    - H2: Przycisk wysyłania i co dzieje się po kliknięciu
    - H2: Formularze wieloetapowe: kiedy mają sens
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/ux/nawigacja-na-stronie-jak-ulatwic-uzytkownikom-znalezienie`
    - `/kontakt`
  - SEO:
    - URL/slug: `/edukacja/ux/formularze-na-stronie-jak-projektowac`
    - `metadata.title`: `Formularze na stronie: jak je projektować, żeby użytkownicy je wypełniali? | Arteon`
    - `metadata.description`: `Dowiedz się, ile pól powinien mieć formularz, jak pisać etykiety i komunikaty błędów oraz jak zwiększyć liczbę wypełnień.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

