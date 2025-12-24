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

  - **Zrobione 2025-12-24**:
    - Dodano 15 pomysłów na artykuły zgodnych z nowymi wytycznymi INSTRUCTIONS.md (aktualizacja 2025-12-24).
    - Kategorie wzmocnione: Dostępność (2), UX (1), Strony (3), Sklepy (2), SEO (2), Psychologia (3), Druk (2).
    - Wszystkie pomysły zawierają: konspekt H2, min. 6-8 linków wewnętrznych, min. 4-6 zewnętrznych, tooltips dla trudnych terminów, kryteria 9-14 min czytania, ton nie-DIY.
    - Dodane ID: `IDEA-090`, `IDEA-091`, `IDEA-092`, `IDEA-093`, `IDEA-094`, `IDEA-095`, `IDEA-096`, `IDEA-097`, `IDEA-098`, `IDEA-099`, `IDEA-100`, `IDEA-101`, `IDEA-102`, `IDEA-103`, `IDEA-104`.

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

- ✅ **[SEO-022] Ahrefs Web Analytics: dodać snippet + podpiąć pod cookie consent (zgodność prawna)** — DONE 2024-12-24

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
      - `seo.title`: ~35-65 znaków (brand na końcu, np. `- Arteon`).
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

- ✅ **[SEO-018] Meta description: wydłużyć za krótkie opisy (Ahrefs audit)**

  - Cel: poprawić meta description na stronach wykrytych przez Ahrefs jako za krótkie (<100 znaków).
  - Wytyczne (wg artykułu Arteon „Meta title i description"):
    - Optymalna długość: 140-155 znaków
    - Odpowiada na intencję użytkownika
    - Zawiera wezwanie do działania (Dowiedz się..., Sprawdź..., Zobacz...)
    - Spójny z treścią strony
  - Pliki:
    - `app/(pl)/edukacja/page.tsx` (strona główna /edukacja)
    - `app/(pl)/edukacja/[category]/page.tsx` (kategorie: seo, druk, strony, bezpieczenstwo, branding, zdjecia, grafika, marketing, ux, dostepnosc, psychologia, sklepy, widocznosc, tresci)
    - `data/pl/projects.json` (realizacje: sanex-accessibility, elmex-accessibility, meridol-accessibility, palmolive, detergent-regulations, sanex, colgate, sklep-dla-firmy-odziezowej-trilllizo)
  - Kryteria akceptacji:
    - Każdy meta description ma 140-155 znaków
    - Zawiera wezwanie do działania
    - `npm run lint` przechodzi
  - Weryfikacja: nie jest wymagana (COPY-only).

- ✅ **[SEO-019] Meta description: skrócić za długie opisy (Ahrefs audit)**

  - Cel: poprawić meta description na stronach wykrytych przez Ahrefs jako za długie (>160 znaków).
  - Wytyczne (wg instrukcji narzędzia licznika meta title i description Arteon):
    - Optymalna długość: 120-160 znaków (max 160)
    - Zachować wezwanie do działania (Dowiedz się..., Sprawdź..., Zobacz...)
    - Spójny z treścią strony
    - Zachować kluczowe informacje
  - Strony do poprawy (10):
    - `/edukacja/grafika/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow` (165 zn.)
    - `/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty` (163 zn.)
    - `/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja` (187 zn.)
    - `/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja` (176 zn.)
    - `/narzedzia/darmowy-generator-favicon-ico/instrukcja` (167 zn.)
    - `/narzedzia/generator-kodu-qr/instrukcja` (170 zn.)
    - `/narzedzia/darmowy-generator-stopki-mailowej/instrukcja` (177 zn.)
    - `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja` (168 zn.)
    - `/narzedzia/generator-palet-kolorow-online/instrukcja` (171 zn.)
    - `/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja` (179 zn.)
  - Pliki:
    - `data/pl/blog.json` (2 artykuły)
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-kodu-qr/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/instrukcja/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/instrukcja/page.tsx`
  - Kryteria akceptacji:
    - Każdy meta description ma max 160 znaków
    - Zachowane wezwanie do działania
    - Spójność z treścią strony
  - Weryfikacja: nie jest wymagana (COPY-only).

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

- ✅ **[TOOLS-021] Narzędzia: rozbudowana instrukcja — Generator palet kolorów online**

  - Cel: dodać szczegółową instrukcję użytkowania narzędzia, która wyjaśnia każdą pojedynczą funkcję w prostym, mentorskim tonie.
  - **Struktura SEO**:
    - Instrukcja na osobnej podstronie: `/narzedzia/generator-palet-kolorow-online/instrukcja`
    - H1: „Jak używać generatora palet kolorów online" (intent: how-to)
    - Na głównej stronie narzędzia: skrócić obecne sekcje „Jak korzystać?" do 2-3 kroków + dodać link „Zobacz pełną instrukcję" → `/instrukcja`
    - Przy każdej edycji narzędzia (nowe funkcje) — aktualizować też instrukcję.
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
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/instrukcja/page.tsx` (nowa strona instrukcji)
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx` (skrócić mini instrukcję + link)
  - Kryteria akceptacji:
    - Instrukcja na osobnej podstronie `/instrukcja` z H1 „Jak używać...".
    - Instrukcja wyjaśnia każdą funkcję narzędzia krok po kroku.
    - Główna strona narzędzia ma skróconą instrukcję + link do pełnej.
    - Ton zgodny z INSTRUCTIONS.md (mentorski, prosty, bez żargonu).
    - Min. 4 FAQ.
    - `npm run lint` i `npm run build` przechodzą.

- ✅ **[TOOLS-022] Narzędzia: rozbudowana instrukcja — Generator palety kolorów z obrazu** — wykonane 2025-12-23

- ✅ **[TOOLS-025] Narzędzia: rozbudowana instrukcja — Darmowy generator favicon** — wykonane 2025-12-23

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
    - `metadata.title`: `Jak pracujemy — proces współpracy krok po kroku - Arteon`
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
    - `metadata.title`: `Standardy jakości — WCAG, SEO, performance i bezpieczeństwo - Arteon`
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
    - `metadata.title`: `Materiały do strony — lista na start - Arteon`
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
    - `metadata.title`: `Audyt SEO strony: co sprawdzamy i po co to robić przed pozycjonowaniem? - Arteon`
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
    - `metadata.title`: `Jak powstaje dobre logo i na co zwrócić uwagę przy jego projektowaniu? - Arteon`
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
    - `metadata.title`: `Od czego zacząć budowanie identyfikacji wizualnej małej firmy? - Arteon`
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
    - `metadata.title`: `Jak napisać skuteczny tekst na stronę główną firmy? - Arteon`
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
    - `metadata.title`: `Jak przyspieszyć stronę internetową? Core Web Vitals w praktyce - Arteon`
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
    - `metadata.title`: `Strona internetowa czy reklamy Google Ads: od czego zacząć promocję firmy? - Arteon`
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
    - `metadata.title`: `Czym jest UX i jak wpływa na skuteczność strony internetowej? - Arteon`
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
    - `metadata.title`: `Jakie wymiary grafik na Facebooku, Instagramie i LinkedIn? - Arteon`
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
    - `metadata.title`: `Jak zabezpieczyć stronę WordPress przed atakami i włamaniami? - Arteon`
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
    - `metadata.title`: `Kopie zapasowe strony: dlaczego są ważne i jak często je robić? - Arteon`
    - `metadata.description`: `Dowiedz się, czym są kopie zapasowe strony, jak często je wykonywać i gdzie przechowywać, żeby nie stracić danych.`
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
    - `metadata.title`: `Jak zwiększyć konwersję w sklepie internetowym bez obniżania cen? - Arteon`
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
    - `metadata.title`: `Nawigacja na stronie: jak ułatwić użytkownikom znalezienie tego, czego szukają? - Arteon`
    - `metadata.description`: `Dowiedz się, jak zaprojektować nawigację na stronie, żeby użytkownicy szybko znajdowali to, czego szukają.`
  - Kryteria akceptacji:
    - Artykuł zgodny z tonem marki (mentorski, prosty).
    - Min. 4 linki wewnętrzne + CTA.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-090] Blog: Co to jest dostępność cyfrowa i kogo dotyczy European Accessibility Act 2025?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Dostępność (obecnie 1 artykuł o kontraście).
    - Temat aktualny — EAA wchodzi w życie w czerwcu 2025, wiele firm nie wie o obowiązkach.
    - Artykuł edukuje o przepisach i kieruje do usług Arteon.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Co to jest dostępność cyfrowa i dlaczego ma znaczenie?
    - H2: European Accessibility Act — co to za przepis i kogo dotyczy?
    - H2: Jakie wymagania wprowadza EAA dla stron i aplikacji?
    - H2: Które firmy muszą dostosować się do przepisów?
    - H2: Co grozi za brak dostępności? (sankcje, odpowiedzialność)
    - H2: Jak sprawdzić, czy strona spełnia wymagania dostępności?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/narzedzia/tester-kontrastu-kolorow-wcag`
    - `/edukacja/dostepnosc/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`
    - `/edukacja/ux/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - European Accessibility Act (EUR-Lex)
    - Dyrektywa 2016/2102 (EUR-Lex)
    - Ustawa o dostępności cyfrowej (ISAP)
    - WCAG 2.1 (W3C)
    - Ministerstwo Cyfryzacji (dostepnoscplus.gov.pl)
  - SEO:
    - URL/slug: `/edukacja/dostepnosc/co-to-jest-dostepnosc-cyfrowa-european-accessibility-act-2025`
    - `metadata.title`: `Co to jest dostępność cyfrowa i kogo dotyczy European Accessibility Act 2025? - Arteon`
    - `metadata.description`: `Dowiedz się, czym jest dostępność cyfrowa, jakie wymagania wprowadza European Accessibility Act i które firmy muszą dostosować strony do przepisów od 2025 roku.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania (1800-2800 słów).
    - Ton mentorski, nie-DIY — wyjaśnia przepisy, nie instruuje jak samemu wdrożyć.
    - Tooltips dla: WCAG, EAA, a11y, screen reader.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-091] Blog: Jak przygotować stronę do obsługi osób niewidomych i słabowidzących?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Dostępność — praktyczny artykuł o a11y.
    - Duży potencjał long-tail (screen reader, czytnik ekranu, NVDA, VoiceOver).
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Jak osoby niewidome korzystają ze stron internetowych?
    - H2: Czym jest czytnik ekranu i jak działa?
    - H2: Struktura nagłówków — dlaczego kolejność H1-H6 ma znaczenie
    - H2: Teksty alternatywne dla obrazów — co powinien zawierać dobry alt
    - H2: Formularze dostępne dla czytników ekranu
    - H2: Nawigacja klawiaturowa — focus, skip links, tabindex
    - H2: Jak przetestować stronę czytnikiem ekranu?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/narzedzia/tester-kontrastu-kolorow-wcag`
    - `/edukacja/dostepnosc/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`
    - `/edukacja/dostepnosc/co-to-jest-dostepnosc-cyfrowa-european-accessibility-act-2025` (gdy powstanie)
    - `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - NVDA (nvaccess.org)
    - VoiceOver (Apple)
    - WCAG 2.1 — Success Criterion 1.1.1 (W3C)
    - WebAIM (webaim.org)
    - axe DevTools
  - SEO:
    - URL/slug: `/edukacja/dostepnosc/jak-przygotowac-strone-dla-osob-niewidomych`
    - `metadata.title`: `Jak przygotować stronę do obsługi osób niewidomych i słabowidzących? - Arteon`
    - `metadata.description`: `Dowiedz się, jak osoby niewidome korzystają ze stron internetowych, czym jest czytnik ekranu i na co zwrócić uwagę przy projektowaniu dostępnej strony.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski, nie-DIY — wyjaśnia zasady, nie instruuje wdrożenia.
    - Tooltips dla: screen reader, NVDA, VoiceOver, alt, aria, focus.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-092] Blog: Dlaczego strona internetowa musi działać na telefonie i jak to sprawdzić?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię UX + powiązanie z responsywnością.
    - Temat fundamentalny — ponad 60% ruchu z mobile.
    - Artykuł łączy UX z SEO (mobile-first indexing).
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Jak wygląda ruch mobilny w Polsce i na świecie?
    - H2: Czym jest mobile-first indexing i dlaczego Google indeksuje wersję mobilną?
    - H2: Najczęstsze problemy stron na telefonie
    - H2: Jak sprawdzić, czy strona działa poprawnie na mobile?
    - H2: Na co zwrócić uwagę przy projektowaniu strony mobilnej?
    - H2: Kiedy zlecić audyt mobilny?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/ux/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`
    - `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
    - `/edukacja/seo/jak-mierzyc-skutecznosc-strony-internetowej`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - StatCounter (statcounter.com)
    - Google Search Central (mobile-first indexing)
    - Mobile-Friendly Test (Google)
    - PageSpeed Insights
  - SEO:
    - URL/slug: `/edukacja/ux/dlaczego-strona-musi-dzialac-na-telefonie`
    - `metadata.title`: `Dlaczego strona internetowa musi działać na telefonie i jak to sprawdzić? - Arteon`
    - `metadata.description`: `Dowiedz się, jaki odsetek użytkowników korzysta z telefonu, czym jest mobile-first indexing i jak sprawdzić, czy strona działa poprawnie na urządzeniach mobilnych.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski, prosty — dane + praktyczne wskazówki.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-093] Blog: Jakie informacje powinny znajdować się na stronie firmy usługowej?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster Strony + wsparcie usługi stron internetowych.
    - Temat uniwersalny — dotyka każdej firmy usługowej.
    - Artykuł edukuje o strukturze, nie instruuje budowy strony.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego kompletność informacji wpływa na zaufanie klientów?
    - H2: Strona główna — co użytkownik musi zrozumieć w pierwszych sekundach
    - H2: Strona usług — jak opisać ofertę bez żargonu
    - H2: Strona O nas — jak budować wiarygodność bez pustych fraz
    - H2: Strona kontaktowa — elementy obowiązkowe i dobre praktyki
    - H2: Dodatkowe elementy: realizacje, opinie, FAQ, blog
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/uslugi/tworzenie-tresci`
    - `/edukacja/strony/co-sprawdzic-przed-uruchomieniem-strony`
    - `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
    - `/edukacja/seo/meta-title-i-description-jak-je-napisac`
    - `/narzedzia/licznik-dlugosci-meta-title-i-description`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Nielsen Norman Group (nngroup.com)
    - Think with Google
    - HubSpot (research o stronach firmowych)
  - SEO:
    - URL/slug: `/edukacja/strony/jakie-informacje-powinny-byc-na-stronie-firmy-uslugowej`
    - `metadata.title`: `Jakie informacje powinny znajdować się na stronie firmy usługowej? - Arteon`
    - `metadata.description`: `Dowiedz się, jakie informacje musi zawierać strona firmy usługowej, żeby budować zaufanie klientów i ułatwiać kontakt.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — pokazuje co powinno być, nie jak zrobić samemu.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-094] Blog: Jak wybrać system płatności dla sklepu internetowego?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Sklepy (obecnie mało artykułów).
    - Temat praktyczny dla każdego właściciela e-commerce.
    - Linkowanie do usługi sklepów internetowych.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego wybór systemu płatności wpływa na sprzedaż?
    - H2: Rodzaje systemów płatności: operatorzy, bramki, BLIK, karty
    - H2: Na co zwrócić uwagę przy wyborze? (prowizje, integracje, wsparcie)
    - H2: Bezpieczeństwo płatności — certyfikaty, PCI DSS, 3D Secure
    - H2: Popularne rozwiązania na polskim rynku
    - H2: Kiedy warto zmienić operatora płatności?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/seo/jak-przygotowac-sklep-internetowy-do-pozycjonowania`
    - `/edukacja/bezpieczenstwo/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje`
    - `/edukacja/strony/co-sprawdzic-przed-uruchomieniem-strony`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - PCI Security Standards Council
    - Przelewy24, PayU, Stripe (oficjalne strony)
    - NBP (dane o płatnościach elektronicznych w Polsce)
  - SEO:
    - URL/slug: `/edukacja/sklepy/jak-wybrac-system-platnosci-dla-sklepu-internetowego`
    - `metadata.title`: `Jak wybrać system płatności dla sklepu internetowego? - Arteon`
    - `metadata.description`: `Dowiedz się, jakie rodzaje systemów płatności są dostępne, na co zwrócić uwagę przy wyborze i jak wpływają na konwersję w sklepie.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — pokazuje co rozważyć, nie jak wdrożyć.
    - Tooltips dla: PCI DSS, 3D Secure, BLIK, gateway.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-095] Blog: Polityka zwrotów w sklepie internetowym: co musi zawierać i jak wpływa na sprzedaż?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Sklepy.
    - Temat łączy aspekty prawne, UX i konwersję.
    - Duży potencjał long-tail (prawo konsumenta, 14 dni, zwroty e-commerce).
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego polityka zwrotów wpływa na decyzje zakupowe?
    - H2: Co mówi prawo? (ustawa o prawach konsumenta, 14 dni)
    - H2: Co powinna zawierać dobra polityka zwrotów?
    - H2: Jak prezentować informacje o zwrotach na stronie sklepu?
    - H2: Czy wydłużona polityka zwrotów zwiększa sprzedaż?
    - H2: Najczęstsze błędy w politykach zwrotów
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/sklepy/jak-zwiekszyc-konwersje-w-sklepie-internetowym` (gdy powstanie)
    - `/edukacja/strony/co-sprawdzic-przed-uruchomieniem-strony`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Ustawa o prawach konsumenta (ISAP)
    - UOKiK
    - Dyrektywa 2011/83/UE (EUR-Lex)
    - Badania o wpływie polityki zwrotów na konwersję (Baymard, Narvar)
  - SEO:
    - URL/slug: `/edukacja/sklepy/polityka-zwrotow-w-sklepie-internetowym`
    - `metadata.title`: `Polityka zwrotów w sklepie internetowym: co musi zawierać i jak wpływa na sprzedaż? - Arteon`
    - `metadata.description`: `Dowiedz się, co musi zawierać polityka zwrotów zgodna z prawem, jak ją prezentować na stronie i jak wpływa na decyzje zakupowe klientów.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia przepisy i dobre praktyki.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-096] Blog: Jak działa algorytm Google i co wpływa na pozycję strony w wynikach wyszukiwania?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster SEO — artykuł fundamentalny o mechanizmach Google.
    - Duży potencjał ruchu — temat wiecznie aktualny.
    - Linkowanie do usług pozycjonowania i audytu SEO.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Jak Google indeksuje i ocenia strony internetowe?
    - H2: Czym są czynniki rankingowe i ile ich jest?
    - H2: Najważniejsze sygnały jakości strony (E-E-A-T, content, linki)
    - H2: Core Updates — czym są i jak wpływają na pozycje?
    - H2: Czego Google oficjalnie szuka na stronach?
    - H2: Mity o pozycjonowaniu — co nie działa
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/uslugi/marketing/audyt-seo`
    - `/uslugi/marketing/optymalizacja-seo`
    - `/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
    - `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
    - `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Google Search Central
    - Google Quality Raters Guidelines (PDF)
    - Ahrefs/Semrush (badania o czynnikach rankingowych)
    - Google Blog (oficjalne komunikaty o Core Updates)
  - SEO:
    - URL/slug: `/edukacja/seo/jak-dziala-algorytm-google`
    - `metadata.title`: `Jak działa algorytm Google i co wpływa na pozycję strony w wynikach wyszukiwania? - Arteon`
    - `metadata.description`: `Dowiedz się, jak Google indeksuje i ocenia strony, czym są czynniki rankingowe, E-E-A-T i Core Updates oraz co naprawdę wpływa na pozycję w wyszukiwarce.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia mechanizmy bez obietnic gwarancji.
    - Tooltips dla: E-E-A-T, Core Update, crawler, indeksacja, PageRank.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-097] Blog: Czym jest linkowanie wewnętrzne i jak wpływa na SEO strony?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster SEO — temat często pomijany przez właścicieli stron.
    - Bezpośrednio wspiera praktykę budowania klastrów tematycznych.
    - Linkowanie do usług pozycjonowania i tworzenia treści.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Co to jest linkowanie wewnętrzne i jak działa?
    - H2: Dlaczego linkowanie wewnętrzne ma znaczenie dla SEO?
    - H2: Rodzaje linków wewnętrznych (nawigacja, kontekstowe, breadcrumbs)
    - H2: Co to są klastry tematyczne i jak je budować?
    - H2: Anchor text — jak pisać tekst linku?
    - H2: Najczęstsze błędy w linkowaniu wewnętrznym
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/marketing/pozycjonowanie-stron`
    - `/uslugi/marketing/optymalizacja-seo`
    - `/uslugi/tworzenie-tresci`
    - `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
    - `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Google Search Central (internal linking)
    - Moz (internal linking guide)
    - Ahrefs (cluster content)
  - SEO:
    - URL/slug: `/edukacja/seo/czym-jest-linkowanie-wewnetrzne`
    - `metadata.title`: `Czym jest linkowanie wewnętrzne i jak wpływa na SEO strony? - Arteon`
    - `metadata.description`: `Dowiedz się, czym jest linkowanie wewnętrzne, jak wpływa na pozycjonowanie strony i jak budować klastry tematyczne.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia zasady i dobre praktyki.
    - Tooltips dla: anchor text, klaster tematyczny, PageRank, crawl budget.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-098] Blog: Jak psychologia kolorów wpływa na zachowania użytkowników na stronie?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Psychologia (obecnie brak dedykowanych artykułów).
    - Rozwinięcie tematu z istniejącego artykułu o kolorystyce i decyzjach zakupowych.
    - Linkowanie do narzędzi kolorystycznych i usług.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Jak mózg przetwarza kolory i co to oznacza dla stron internetowych?
    - H2: Znaczenie kolorów w różnych kulturach i kontekstach
    - H2: Kolory a emocje — co mówią badania?
    - H2: Jak kolory wpływają na postrzeganie marki?
    - H2: Kolory przycisków CTA — czy czerwony naprawdę konwertuje lepiej?
    - H2: Na co zwrócić uwagę przy doborze kolorów?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/narzedzia/generator-palet-kolorow-online`
    - `/narzedzia/generator-palety-kolorow-z-obrazu`
    - `/narzedzia/tester-kontrastu-kolorow-wcag`
    - `/edukacja/grafika/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
    - `/edukacja/grafika/jak-dobrac-kolory-do-strony-internetowej`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Badania o psychologii kolorów (Journal of Business Research, Color Research & Application)
    - Nielsen Norman Group
    - Colour Affects (Angela Wright)
  - SEO:
    - URL/slug: `/edukacja/psychologia/jak-psychologia-kolorow-wplywa-na-zachowania-uzytkownikow`
    - `metadata.title`: `Jak psychologia kolorów wpływa na zachowania użytkowników na stronie? - Arteon`
    - `metadata.description`: `Dowiedz się, jak mózg przetwarza kolory, jakie emocje wywołują różne barwy i jak świadomie wykorzystać psychologię kolorów przy projektowaniu strony.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia badania i praktyczne implikacje.
    - Źródła dla wszystkich danych o psychologii kolorów.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-099] Blog: Jak pierwsze wrażenie o stronie wpływa na decyzje użytkowników?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Psychologia.
    - Temat łączy UX, design i psychologię — uniwersalny dla wszystkich stron.
    - Klasyczne badania (50ms first impression) dają mocne argumenty.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Ile czasu użytkownik potrzebuje, żeby ocenić stronę?
    - H2: Co mózg ocenia w pierwszych sekundach?
    - H2: Efekt halo — jak pierwsze wrażenie wpływa na dalsze postrzeganie
    - H2: Zaufanie wizualne — elementy, które budują lub niszczą wiarygodność
    - H2: Mobile vs desktop — czy pierwsze wrażenie różni się na urządzeniach?
    - H2: Na co zwrócić uwagę przy projektowaniu strony głównej?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/uslugi/projekty-graficzne/projekt-graficzny-strony`
    - `/edukacja/grafika/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
    - `/edukacja/grafika/jak-dobrac-kolory-do-strony-internetowej`
    - `/edukacja/ux/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Badanie 50ms (Behaviour & Information Technology, Lindgaard et al.)
    - Stanford Web Credibility Research
    - Nielsen Norman Group (trust and credibility)
  - SEO:
    - URL/slug: `/edukacja/psychologia/jak-pierwsze-wrazenie-o-stronie-wplywa-na-decyzje`
    - `metadata.title`: `Jak pierwsze wrażenie o stronie wpływa na decyzje użytkowników? - Arteon`
    - `metadata.description`: `Dowiedz się, ile czasu użytkownik potrzebuje na ocenę strony, co mózg analizuje w pierwszych sekundach i jak projektować stronę, która budzi zaufanie.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia badania i daje praktyczne wskazówki.
    - Źródła dla badań o pierwszym wrażeniu.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-100] Blog: Jak prawidłowo przygotować materiały do druku? Rozdzielczość, spaddy, kolory CMYK**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Druk — temat praktyczny dla wszystkich projektów drukowanych.
    - Artykuł edukuje o wymaganiach, nie instruuje jak projektować samemu.
    - Linkowanie do usług projektów graficznych.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego przygotowanie pliku do druku wymaga wiedzy technicznej?
    - H2: Rozdzielczość — co to jest DPI i ile powinno być dla druku?
    - H2: Spaddy (bleed) — czym są i dlaczego drukarnia ich wymaga?
    - H2: Przestrzenie kolorów — RGB vs CMYK i co się dzieje przy konwersji
    - H2: Fonty i krzywe — dlaczego tekst może wyglądać inaczej po druku?
    - H2: Formaty plików — PDF, TIFF, EPS i ich zastosowanie
    - H2: Na co zwrócić uwagę przy odbiorze projektu od grafika?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/projekty-graficzne/projekt-wizytowki`
    - `/uslugi/projekty-graficzne/projekt-ulotki`
    - `/uslugi/projekty-graficzne/projekt-katalogu`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/edukacja/grafika/materialy-drukowane-dla-firmy-ktore-zamowic`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Adobe (color management)
    - Printing Industry Standards (Fogra, ISO 12647)
  - SEO:
    - URL/slug: `/edukacja/druk/jak-przygotowac-materialy-do-druku`
    - `metadata.title`: `Jak prawidłowo przygotować materiały do druku? Rozdzielczość, spaddy, kolory CMYK - Arteon`
    - `metadata.description`: `Dowiedz się, czym są DPI, spaddy i CMYK, dlaczego mają znaczenie dla druku i na co zwrócić uwagę przy odbiorze projektu od grafika.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia wymagania, nie instruuje jak projektować.
    - Tooltips dla: DPI, bleed, CMYK, RGB, bezier, PDF/X.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-101] Blog: Wizytówka firmowa: co powinna zawierać i jakie są standardowe wymiary?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Druk + klaster projektów graficznych.
    - Temat wiecznie aktualny — wizytówka to podstawowy materiał firmowy.
    - Linkowanie do usługi projektowania wizytówek.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Czy wizytówki są jeszcze potrzebne w erze cyfrowej?
    - H2: Standardowe wymiary wizytówek w Polsce i na świecie
    - H2: Co powinna zawierać dobra wizytówka firmowa?
    - H2: Papier i wykończenie — jak wpływają na odbiór?
    - H2: Wizytówka jednostronna czy dwustronna?
    - H2: Najczęstsze błędy przy projektowaniu wizytówek
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/projekty-graficzne/projekt-wizytowki`
    - `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
    - `/edukacja/grafika/materialy-drukowane-dla-firmy-ktore-zamowic`
    - `/edukacja/druk/jak-przygotowac-materialy-do-druku` (gdy powstanie)
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - ISO 7810 (standardy wymiarów kart)
    - Badania o percepcji materiałów drukowanych
  - SEO:
    - URL/slug: `/edukacja/druk/wizytowka-firmowa-co-powinna-zawierac`
    - `metadata.title`: `Wizytówka firmowa: co powinna zawierać i jakie są standardowe wymiary? - Arteon`
    - `metadata.description`: `Dowiedz się, jakie są standardowe wymiary wizytówek, co powinna zawierać dobra wizytówka firmowa i na co zwrócić uwagę przy zamawianiu projektu.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia standardy i dobre praktyki.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-102] Blog: Jak wygląda proces tworzenia strony internetowej krok po kroku?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster Strony — artykuł demistyfikuje proces dla potencjalnych klientów.
    - Temat redukuje niepewność przed zleceniem projektu.
    - Linkowanie do usług stron i kontaktu.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego warto znać etapy tworzenia strony przed zleceniem projektu?
    - H2: Etap 1: Brief i analiza potrzeb
    - H2: Etap 2: Strategia i struktura strony
    - H2: Etap 3: Projekt graficzny (UX/UI)
    - H2: Etap 4: Wdrożenie i programowanie
    - H2: Etap 5: Testy i poprawki
    - H2: Etap 6: Publikacja i przekazanie
    - H2: Co dzieje się po uruchomieniu strony?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/uslugi/projekty-graficzne/projekt-graficzny-strony`
    - `/edukacja/strony/co-sprawdzic-przed-uruchomieniem-strony`
    - `/edukacja/strony/jakie-informacje-powinny-byc-na-stronie-firmy-uslugowej` (gdy powstanie)
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Nielsen Norman Group (UX process)
    - Google Web Fundamentals
  - SEO:
    - URL/slug: `/edukacja/strony/jak-wyglada-proces-tworzenia-strony-internetowej`
    - `metadata.title`: `Jak wygląda proces tworzenia strony internetowej krok po kroku? - Arteon`
    - `metadata.description`: `Dowiedz się, jakie etapy obejmuje tworzenie strony internetowej, czego możesz oczekiwać na każdym kroku i jak przygotować się do współpracy.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia proces, nie instruuje jak zrobić stronę samemu.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-103] Blog: Czym jest hosting i jak wpływa na działanie strony internetowej?**

  - Cel i uzasadnienie:
    - Wzmocnić klaster Strony — temat fundamentalny, często niezrozumiany.
    - Rozwinięcie istniejącego artykułu o domenach i hostingu.
    - Linkowanie do usług stron internetowych.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Co to jest hosting i jak działa?
    - H2: Rodzaje hostingu: shared, VPS, dedykowany, cloud
    - H2: Jak hosting wpływa na szybkość strony?
    - H2: Czym jest uptime i dlaczego 99,9% to nie 100%?
    - H2: Bezpieczeństwo hostingu — certyfikaty, kopie zapasowe, ochrona DDoS
    - H2: Na co zwrócić uwagę przy wyborze hostingu?
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/edukacja/strony/jak-wybrac-domene-i-hosting-dla-strony-firmowej`
    - `/edukacja/bezpieczenstwo/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje`
    - `/edukacja/bezpieczenstwo/kopie-zapasowe-strony-dlaczego-sa-wazne` (gdy powstanie)
    - `/edukacja/seo/jak-mierzyc-skutecznosc-strony-internetowej`
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - Google Web Vitals (wpływ serwera na LCP)
    - Cloudflare (wyjaśnienie CDN)
    - HostingAdvice / WebsiteSetup (porównania)
  - SEO:
    - URL/slug: `/edukacja/strony/czym-jest-hosting-jak-wplywa-na-dzialanie-strony`
    - `metadata.title`: `Czym jest hosting i jak wpływa na działanie strony internetowej? - Arteon`
    - `metadata.description`: `Dowiedz się, czym jest hosting, jakie są jego rodzaje, jak wpływa na szybkość i bezpieczeństwo strony oraz na co zwrócić uwagę przy wyborze.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia techniczne aspekty prostym językiem.
    - Tooltips dla: VPS, uptime, CDN, DDoS, SSL, LCP.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).

- ❌ **[IDEA-104] Blog: Jak opinie klientów wpływają na zaufanie i sprzedaż?**

  - Cel i uzasadnienie:
    - Wzmocnić kategorię Psychologia + Marketing.
    - Temat uniwersalny — opinie wpływają na wszystkie branże.
    - Linkowanie do usług stron, sklepów i kontaktu.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowy artykuł w `data/pl/blog.json`.
  - Konspekt (H2):
    - H2: Dlaczego opinie innych ludzi wpływają na nasze decyzje?
    - H2: Social proof — co to jest i jak działa w internecie?
    - H2: Gdzie zbierać opinie? (Google, Facebook, własna strona, platformy branżowe)
    - H2: Jak prezentować opinie na stronie?
    - H2: Jak reagować na negatywne opinie?
    - H2: Opinie a SEO — wpływ na widoczność w wyszukiwarce
    - H2: Podsumowanie + CTA
  - Linkowanie wewnętrzne (min. 6-8):
    - `/uslugi/strony-internetowe`
    - `/uslugi/sklepy-internetowe`
    - `/edukacja/seo/jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma`
    - `/edukacja/psychologia/jak-pierwsze-wrazenie-o-stronie-wplywa-na-decyzje` (gdy powstanie)
    - `/kontakt`
  - Linkowanie zewnętrzne (min. 4-6):
    - BrightLocal (Local Consumer Review Survey)
    - Spiegel Research Center (badania o opiniach)
    - Google Business Profile Help
  - SEO:
    - URL/slug: `/edukacja/psychologia/jak-opinie-klientow-wplywaja-na-zaufanie-i-sprzedaz`
    - `metadata.title`: `Jak opinie klientów wpływają na zaufanie i sprzedaż? - Arteon`
    - `metadata.description`: `Dowiedz się, dlaczego opinie innych ludzi wpływają na decyzje zakupowe, gdzie zbierać recenzje i jak prezentować je na stronie.`
  - Kryteria akceptacji:
    - Artykuł 9-14 min czytania.
    - Ton mentorski — wyjaśnia psychologię i dobre praktyki.
    - Tooltips dla: social proof, UGC, review schema.
    - Min. 6 linków wewnętrznych + min. 4 zewnętrzne.
    - Sekcja FAQ (min. 4 pytania).
  - Weryfikacja: nie jest wymagana (content-only).