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

- ❌ **[IDEA-066] Blog: Co sprawdzić przed uruchomieniem nowej strony internetowej?**

  - Cel i uzasadnienie:
    - Wzmocnić usługi strony/sklepy + klaster SEO/UX.
    - Artykuł edukuje o checkliście przed publikacją strony.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — dlaczego warto sprawdzić stronę przed publikacją
    - H2: Treści i meta dane (title, description, teksty)
    - H2: Funkcjonalność (formularze, linki, nawigacja)
    - H2: Wydajność i zdjęcia (optymalizacja, formaty)
    - H2: SEO techniczne (indeksacja, sitemap, robots)
    - H2: Prawne (polityka prywatności, regulamin, cookies)
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
    - `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
  - SEO:
    - URL/slug: `/edukacja/seo/co-sprawdzic-przed-uruchomieniem-strony`
    - `metadata.title`: `Co sprawdzić przed uruchomieniem nowej strony internetowej? | Arteon`
    - `metadata.description`: `Dowiedz się, co sprawdzić przed publikacją strony: treści, funkcjonalność, wydajność, SEO i kwestie prawne.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-067] Blog: Jak założyć i zoptymalizować profil Google Moja Firma?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster lokalnego SEO + kierować do usług pozycjonowania.
    - Profil Google Business Profile to podstawa widoczności lokalnej — bardzo popularne zapytanie.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — czym jest Google Moja Firma i dlaczego jest ważne dla lokalnych firm
    - H2: Jak założyć profil Google Moja Firma krok po kroku?
    - H2: Jakie informacje warto uzupełnić, żeby wyróżnić się w mapach?
    - H2: Jak zdobywać i odpowiadać na opinie klientów?
    - H2: Najczęstsze błędy przy prowadzeniu profilu
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
    - `/edukacja/seo/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`
  - SEO:
    - URL/slug: `/edukacja/seo/jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma`
    - `metadata.title`: `Jak założyć i zoptymalizować profil Google Moja Firma? | Arteon`
    - `metadata.description`: `Dowiedz się, jak założyć profil Google Moja Firma, jakie informacje uzupełnić i jak zdobywać opinie, żeby wyróżnić się w mapach Google.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
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

- ❌ **[IDEA-074] Blog: Jak przygotować grafikę na posty w mediach społecznościowych?**

  - Cel i uzasadnienie:
    - Wzmocnić usługę szablonów social media + narzędzia (kadrowanie, palety).
    - Artykuł edukuje o wymiarach, formatach i spójności wizualnej w social media.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — dlaczego grafika ma znaczenie w mediach społecznościowych
    - H2: Jakie wymiary grafik dla poszczególnych platform? (Facebook, Instagram, LinkedIn)
    - H2: Jak zachować spójność wizualną w postach?
    - H2: Jakich błędów unikać przy tworzeniu grafik?
    - H2: Kiedy warto zlecić szablony profesjonaliście?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/projekty-graficzne/szablony-postow-social-media`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`
    - `/edukacja/grafika/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
  - SEO:
    - URL/slug: `/edukacja/grafika/jak-przygotowac-grafike-na-posty-w-mediach-spolecznosciowych`
    - `metadata.title`: `Jak przygotować grafikę na posty w mediach społecznościowych? | Arteon`
    - `metadata.description`: `Dowiedz się, jakie wymiary grafik używać na Facebooku, Instagramie i LinkedIn oraz jak zachować spójność wizualną w postach.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-075] Blog: Jak mierzyć skuteczność strony internetowej? Podstawy analityki**

  - Cel i uzasadnienie:
    - Wzmocnić usługi strony/SEO + edukacja o analityce.
    - Pomaga firmom zrozumieć, czy ich strona działa — bez DIY, pokazuje wartość danych.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — dlaczego warto mierzyć skuteczność strony
    - H2: Jakie wskaźniki są najważniejsze? (ruch, konwersje, czas na stronie)
    - H2: Czym jest Google Analytics i jak pomaga?
    - H2: Jak interpretować podstawowe dane?
    - H2: Kiedy warto zlecić analizę specjaliście?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/uslugi/marketing/audyt-seo`
  - SEO:
    - URL/slug: `/edukacja/marketing/jak-mierzyc-skutecznosc-strony-internetowej`
    - `metadata.title`: `Jak mierzyć skuteczność strony internetowej? Podstawy analityki | Arteon`
    - `metadata.description`: `Dowiedz się, jakie wskaźniki mierzyć na stronie internetowej, czym jest Google Analytics i kiedy warto zlecić analizę specjaliście.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty, bez DIY).
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-076] Blog: Jak wybrać domenę i hosting dla strony firmowej?**

  - Cel i uzasadnienie:
    - Wzmocnić usługi strony/sklepy + edukacja dla początkujących.
    - Artykuł edukuje o podstawach technicznych przed uruchomieniem strony.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Wstęp — czym jest domena i hosting
    - H2: Jak wybrać dobrą domenę dla firmy?
    - H2: Na co zwrócić uwagę przy wyborze hostingu?
    - H2: Czy warto kupować domenę i hosting w jednym miejscu?
    - H2: Najczęstsze błędy przy wyborze domeny i hostingu
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne:
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/seo/co-sprawdzic-przed-uruchomieniem-strony`
  - SEO:
    - URL/slug: `/edukacja/strony/jak-wybrac-domene-i-hosting-dla-strony-firmowej`
    - `metadata.title`: `Jak wybrać domenę i hosting dla strony firmowej? | Arteon`
    - `metadata.description`: `Dowiedz się, jak wybrać dobrą domenę i hosting dla strony firmowej oraz na co zwrócić uwagę przed zakupem.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 3 linki wewnętrzne + CTA do usługi.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).
