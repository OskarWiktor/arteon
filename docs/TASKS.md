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

- ✅ **[AUDIT-018] Repo: audyt sitemap — kompletność, duplikaty, poprawność lastmod**

  - Cel:
    - Sprawdzić czy wszystkie istniejące strony są w sitemap.
    - Wykryć duplikaty tras/stron.
    - Zweryfikować poprawność dat `lastmod`.
  - Zakres:
    - `public/sitemap-0.xml` (wygenerowana mapa)
    - `next-sitemap.config.cjs` (konfiguracja)
    - `app/(pl)/**` (wszystkie strony)
    - `data/pl/blog.json` (artykuły)
    - `data/pl/projects.json` (realizacje)
  - Kryteria weryfikacji:
    - Każda strona z `app/(pl)` jest w sitemap (bez dynamicznych `[slug]`).
    - Brak zduplikowanych katalogów/tras (np. dwa katalogi prowadzące do tej samej strony).
    - `lastmod` odpowiada rzeczywistej dacie ostatniej edycji.
  - Raportowanie:
    - Jeśli wykryjesz problemy — napraw je bezpośrednio lub dopisz osobne zadania.
    - Do `DONE_TASKS.md` dodaj wpis z wynikami audytu + co naprawiono.
  - Weryfikacja: `npm run build` (generuje nową sitemap).

  - **Zrobione 2025-12-31**:

    - **Kompletność**: Wszystkie 53 strony statyczne są w sitemap ✓
    - **Duplikaty**: Wykryto i usunięto duplikat katalogu `generator-stopki-mailowej/` (stary katalog obok `darmowy-generator-stopki-mailowej/`) — 2 strony i 2 instrukcje usunięte.
    - **Lastmod**: Naprawiono bug w `next-sitemap.config.cjs` — strona główna `/` nie miała `lastmod` (route group `(pl)` po usunięciu dawał pusty string zamiast `/`).
    - **Naprawione pliki**:
      - Usunięto: `app/(pl)/narzedzia/(tools)/(desktop-only)/generator-stopki-mailowej/` (cały katalog)
      - Edytowano: `next-sitemap.config.cjs` (linia 47: `if (r === '') r = '/';`)
    - `npm run build` przechodzi ✓

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

  - Cel: przepisać artykuły, które najbardziej odbiegają od nowego tonu.
  - Uwaga: zadanie rozbite na mniejsze (1 artykuł = 1 zadanie). Realizacja: `CONTENT-006`, `CONTENT-007`, `CONTENT-008`.
  - Wspólne wytyczne (dla każdego artykułu):
    - Zamienić styl raportowy/formalny na mentorski (prosto, jasno, benefit-first).
    - Każdy termin techniczny wyjaśnić od razu po użyciu (1-2 zdania: co to jest, po co to).
    - Dodać konkretne przykłady z praktyki (bez wstawek typu "Wyobraź sobie...").
    - Dodać sekcję FAQ (min. 4 pytania).
    - Usunąć emoji z tekstu (jeśli są).
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

---

## Pomysły na artykuły (60 szczegółowych tematów)

**Charakterystyka:** Tematy pozwalające na głębokie zagłębienie się w jeden wąski aspekt. Formaty: mity, błędy, porównania, konkretne pytania. Zgodne z tonem mentorskim, bez DIY.

### SEO i Widoczność (15 tematów)

1. ❌ **Czym jest indeksowanie i dlaczego Google może nie widzieć mojej strony?**

   - Kategoria: SEO, Widoczność
   - Uzasadnienie: Fundamentalny temat, wyjaśnia mechanizm crawlera i indeksacji krok po kroku.

2. ❌ **5 mitów o pozycjonowaniu, w które wciąż wierzą właściciele firm**

   - Kategoria: SEO
   - Uzasadnienie: Format "mity" przyciąga uwagę, obala błędne przekonania o SEO.

3. ❌ **Pozycjonowanie lokalne vs ogólnopolskie: czym się różnią i które wybrać?**

   - Kategoria: SEO, Widoczność
   - Uzasadnienie: Porównanie pomaga podjąć decyzję, wyjaśnia różnice w strategii.

4. ❌ **Co to jest crawl budget i czy mała firma powinna się tym przejmować?**

   - Kategoria: SEO
   - Uzasadnienie: Wyjaśnia techniczny termin w kontekście realnych potrzeb małych firm.

5. ❌ **Dlaczego fraza kluczowa nie wystarczy, żeby być wysoko w Google?**

   - Kategoria: SEO, Treści
   - Uzasadnienie: Tłumaczy, że SEO to więcej niż słowa kluczowe — intencja, jakość, linki.

6. ❌ **Jak Google ocenia jakość treści? E-E-A-T wyjaśnione prostym językiem**

   - Kategoria: SEO, Treści
   - Uzasadnienie: Kluczowy koncept Google wyjaśniony bez żargonu.

7. ❌ **Czym jest kanibalizacja słów kluczowych i jak ją rozpoznać?**

   - Kategoria: SEO
   - Uzasadnienie: Konkretny problem techniczny z praktycznymi przykładami.

8. ❌ **Google Search Console: 5 raportów, które powinieneś sprawdzać co miesiąc**

   - Kategoria: SEO, Widoczność
   - Uzasadnienie: Praktyczny przewodnik po najważniejszych danych GSC.

9. ❌ **Czym jest featured snippet i jak zwiększyć szanse na jego zdobycie?**

   - Kategoria: SEO, Widoczność
   - Uzasadnienie: Wyjaśnia mechanizm "pozycji zero" i strategie jej zdobycia.

10. ❌ **Dlaczego nowa strona potrzebuje więcej czasu na pozycjonowanie niż stara?**

    - Kategoria: SEO
    - Uzasadnienie: Wyjaśnia pojęcie autorytetu domeny i sandbox effect.

11. ❌ **Robots.txt vs meta robots: jaka jest różnica i kiedy używać którego?**

    - Kategoria: SEO
    - Uzasadnienie: Dwa mechanizmy kontroli indeksacji — jasne rozróżnienie.

12. ❌ **Co to jest anchor text i dlaczego ma znaczenie dla linkowania?**

    - Kategoria: SEO
    - Uzasadnienie: Szczegółowe wyjaśnienie jednego elementu linkowania.

13. ❌ **Jak długo utrzymują się efekty pozycjonowania po zakończeniu współpracy?**

    - Kategoria: SEO
    - Uzasadnienie: Częste pytanie klientów, uczciwa odpowiedź buduje zaufanie.

14. ❌ **Czym jest sitemap.xml i dlaczego każda strona firmowa go potrzebuje?**

    - Kategoria: SEO
    - Uzasadnienie: Prosty temat techniczny z konkretną wartością.

15. ❌ **Nofollow, sponsored, ugc: czym są atrybuty linków i kiedy ich używać?**
    - Kategoria: SEO
    - Uzasadnienie: Wyjaśnia rodzaje linków i ich wpływ na SEO.

### Strony i UX (12 tematów)

16. ❌ **Czym jest above the fold i dlaczego pierwsze 600 pikseli decyduje o konwersji?**

    - Kategoria: UX, Strony
    - Uzasadnienie: Konkretny element UX z wymiernym wpływem na wyniki.

17. ❌ **Hamburger menu vs rozwinięta nawigacja: co lepiej konwertuje na mobile?**

    - Kategoria: UX, Strony
    - Uzasadnienie: Porównanie dwóch podejść z danymi i kontekstem.

18. ❌ **7 błędów w formularzach kontaktowych, które zmniejszają liczbę zapytań**

    - Kategoria: UX, Strony
    - Uzasadnienie: Format "błędy" z konkretnymi przykładami i rozwiązaniami.

19. ❌ **Sticky header: kiedy pomaga, a kiedy przeszkadza użytkownikom?**

    - Kategoria: UX
    - Uzasadnienie: Konkretny element interfejsu z analizą za i przeciw.

20. ❌ **Breadcrumbs na stronie: po co są i jak wpływają na SEO?**

    - Kategoria: UX, SEO
    - Uzasadnienie: Łączy UX z SEO — podwójna wartość jednego elementu.

21. ❌ **Czym jest CTA i dlaczego jeden przycisk działa lepiej niż pięć?**

    - Kategoria: UX, Strony
    - Uzasadnienie: Wyjaśnia call-to-action i paradoks wyboru.

22. ❌ **Whitespace na stronie: dlaczego pusta przestrzeń zwiększa czytelność?**

    - Kategoria: UX, Grafika
    - Uzasadnienie: Kontraintuicyjny temat — mniej znaczy więcej.

23. ❌ **Jak projektować strony dla osób starszych? Dostępność bez kompromisów**

    - Kategoria: UX, Dostępność
    - Uzasadnienie: Konkretna grupa docelowa z jasnymi wytycznymi.

24. ❌ **Czym jest dark pattern i dlaczego warto go unikać na swojej stronie?**

    - Kategoria: UX, Psychologia
    - Uzasadnienie: Edukuje o nieetycznych praktykach i ich konsekwencjach.

25. ❌ **404 vs soft 404: jaka jest różnica i która opcja jest lepsza?**

    - Kategoria: UX, SEO
    - Uzasadnienie: Techniczny temat z praktycznymi implikacjami.

26. ❌ **Jak zaprojektować stronę FAQ, która faktycznie odpowiada na pytania klientów?**

    - Kategoria: UX, Treści
    - Uzasadnienie: Głęboka analiza jednej sekcji strony.

27. ❌ **Czym jest loading skeleton i dlaczego poprawia wrażenie szybkości strony?**
    - Kategoria: UX, Strony
    - Uzasadnienie: Konkretna technika UX z psychologicznym uzasadnieniem.

### Grafika i Branding (10 tematów)

28. ❌ **RGB vs CMYK: dlaczego logo na ekranie wygląda inaczej niż na wizytówce?**

    - Kategoria: Grafika, Druk
    - Uzasadnienie: Wyjaśnia różnicę przestrzeni kolorów w praktyce.

29. ❌ **Czym jest księga znaku i czy mała firma jej potrzebuje?**

    - Kategoria: Branding, Grafika
    - Uzasadnienie: Demistyfikuje brand book, pokazuje minimalny zakres.

30. ❌ **5 błędów przy wyborze kolorów firmowych i jak ich uniknąć**

    - Kategoria: Grafika, Branding
    - Uzasadnienie: Format "błędy" z konkretnymi przykładami.


32. ❌ **Czym jest paleta kolorów i ile kolorów powinna mieć marka?**

    - Kategoria: Grafika, Branding
    - Uzasadnienie: Podstawy teorii koloru dla firm.

33. ❌ **Logo w formacie PNG vs SVG vs EPS: kiedy używać którego?**

    - Kategoria: Grafika
    - Uzasadnienie: Praktyczny przewodnik po formatach plików graficznych.

34. ❌ **Dlaczego logo ze stocka to zły pomysł? Ryzyka gotowych rozwiązań**

    - Kategoria: Branding, Grafika
    - Uzasadnienie: Wyjaśnia wartość unikalnego logo vs szablony.

35. ❌ **Czym jest visual hierarchy i jak prowadzić wzrok użytkownika na stronie?**

    - Kategoria: Grafika, UX
    - Uzasadnienie: Podstawowa zasada projektowa z praktycznymi przykładami.

36. ❌ **Retina i HiDPI: dlaczego grafiki wyglądają rozmyto na nowych ekranach?**

    - Kategoria: Grafika, Strony
    - Uzasadnienie: Techniczny problem z jasnym rozwiązaniem.

37. ❌ **Aspect ratio: dlaczego proporcje zdjęć mają znaczenie przy projektowaniu?**
    - Kategoria: Grafika, Zdjęcia
    - Uzasadnienie: Fundamentalna zasada kompozycji w kontekście stron.

### Bezpieczeństwo (8 tematów)

38. ❌ **HTTP vs HTTPS: dlaczego kłódka w przeglądarce ma znaczenie dla firmy?**

    - Kategoria: Bezpieczeństwo, Strony
    - Uzasadnienie: Podstawa bezpieczeństwa wyjaśniona prostym językiem.

39. ❌ **Czym jest atak DDoS i jak może wpłynąć na dostępność strony firmowej?**

    - Kategoria: Bezpieczeństwo
    - Uzasadnienie: Wyjaśnia zagrożenie bez technicznego żargonu.

40. ❌ **Dlaczego regularne aktualizacje WordPressa są kluczowe dla bezpieczeństwa?**

    - Kategoria: Bezpieczeństwo, Strony
    - Uzasadnienie: Konkretna praktyka z uzasadnieniem.

41. ❌ **Czym jest phishing i jak rozpoznać fałszywe e-maile dotyczące domeny?**

    - Kategoria: Bezpieczeństwo
    - Uzasadnienie: Praktyczny temat ochrony przed oszustwami.

42. ❌ **Two-factor authentication: dlaczego samo hasło już nie wystarczy?**

    - Kategoria: Bezpieczeństwo
    - Uzasadnienie: Podstawa bezpieczeństwa kont z prostym wyjaśnieniem.

43. ❌ **Czym jest WAF (Web Application Firewall) i kiedy warto go mieć?**

    - Kategoria: Bezpieczeństwo, Strony
    - Uzasadnienie: Wyjaśnia warstwę ochrony dla właścicieli stron.

44. ❌ **RODO a strona internetowa: jakie dane zbierasz i co musisz o tym powiedzieć?**

    - Kategoria: Bezpieczeństwo, Strony
    - Uzasadnienie: Praktyczne aspekty RODO dla właścicieli stron.

45. ❌ **Czym jest malware na stronie i jak sprawdzić, czy strona nie jest zainfekowana?**
    - Kategoria: Bezpieczeństwo
    - Uzasadnienie: Praktyczny temat diagnostyczny.

### Sklepy i E-commerce (8 tematów)

46. ❌ **Karta produktu vs strona kategorii: która jest ważniejsza dla SEO sklepu?**

    - Kategoria: Sklepy, SEO
    - Uzasadnienie: Porównanie strategii optymalizacji w e-commerce.

47. ❌ **Czym jest porzucony koszyk i dlaczego 70% klientów nie kończy zakupów?**

    - Kategoria: Sklepy, Psychologia
    - Uzasadnienie: Kluczowy problem e-commerce z danymi.

48. ❌ **Trust badges w sklepie: które odznaczenia faktycznie zwiększają zaufanie?**

    - Kategoria: Sklepy, Psychologia
    - Uzasadnienie: Konkretne elementy budujące wiarygodność.

50. ❌ **Czym jest cross-selling i up-selling? Różnice i przykłady zastosowania**

    - Kategoria: Sklepy
    - Uzasadnienie: Dwa terminy często mylone, jasne rozróżnienie.

51. ❌ **Filtry i sortowanie w sklepie: jak ułatwić znalezienie produktu?**

    - Kategoria: Sklepy, UX
    - Uzasadnienie: Konkretny element UX sklepu z wpływem na konwersję.

52. ❌ **Opisy produktów: co pisać, żeby klient nie musiał szukać informacji?**

    - Kategoria: Sklepy, Treści
    - Uzasadnienie: Praktyczne wskazówki copywriterskie dla e-commerce.

53. ❌ **Guest checkout vs rejestracja: która opcja zwiększa sprzedaż?**
    - Kategoria: Sklepy, UX
    - Uzasadnienie: Porównanie z danymi o konwersji.

### Psychologia i Marketing (7 tematów)

55. ❌ **Efekt zakotwiczenia: jak pierwsza cena wpływa na postrzeganie wartości?**

    - Kategoria: Psychologia
    - Uzasadnienie: Konkretny mechanizm psychologiczny z przykładami.

56. ❌ **FOMO w marketingu: kiedy ograniczenie czasu działa, a kiedy odstrasza?**

    - Kategoria: Psychologia, Marketing
    - Uzasadnienie: Analiza techniki z etycznymi granicami.

57. ❌ **Czym jest paradoks wyboru i dlaczego mniej opcji może zwiększyć sprzedaż?**

    - Kategoria: Psychologia
    - Uzasadnienie: Klasyczne badanie z praktycznymi implikacjami.

58. ❌ **Jak działa reguła wzajemności w marketingu? Dawanie, które buduje relacje**

    - Kategoria: Psychologia, Marketing
    - Uzasadnienie: Zasada Cialdiniego wyjaśniona w kontekście biznesowym.

59. ❌ **Storytelling w biznesie: dlaczego historie sprzedają lepiej niż fakty?**

    - Kategoria: Marketing, Treści
    - Uzasadnienie: Wyjaśnia mechanizm narracji w komunikacji marki.

60. ❌ **Czym jest brand awareness i jak mierzyć rozpoznawalność marki?**
    - Kategoria: Marketing, Branding
    - Uzasadnienie: Podstawowy termin marketingowy z metodyką pomiaru.
