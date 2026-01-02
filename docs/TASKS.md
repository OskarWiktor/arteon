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

## Pomysły na artykuły

### SEO i widoczność w wyszukiwarkach

- ❌ **[IDEA-061] Artykuł: Dlaczego strona zniknęła z wyników wyszukiwania i jak to zbadać?**

  - Kategorie: `SEO`, `Widoczność`
  - Slug: `dlaczego-strona-zniknela-z-wynikow-wyszukiwania`
  - Cel: Wyjaśnienie przyczyn spadku widoczności (aktualizacje algorytmu, problemy techniczne, kary) i jak zdiagnozować problem w Google Search Console.
  - Powiązane usługi: `/uslugi/marketing/audyt-seo`, `/uslugi/marketing/pozycjonowanie-stron`
  - Typ artykułu: Edukacyjny z elementami diagnostycznymi

- ❌ **[IDEA-062] Artykuł: Czym są dane strukturalne i dlaczego pomagają w wyświetlaniu strony w Google?**

  - Kategorie: `SEO`, `Strony`
  - Slug: `czym-sa-dane-strukturalne-i-jak-pomagaja-w-google`
  - Cel: Wyjaśnienie Schema.org, typów danych (FAQ, Product, LocalBusiness), jak wpływają na wyniki wyszukiwania (rich snippets).
  - Powiązane usługi: `/uslugi/marketing/optymalizacja-seo`, `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-063] Artykuł: Co to jest indeksowanie strony i dlaczego Google może nie widzieć wszystkich podstron?**

  - Kategorie: `SEO`, `Widoczność`
  - Slug: `co-to-jest-indeksowanie-strony-i-dlaczego-google-nie-widzi-podstron`
  - Cel: Wyjaśnienie procesu indeksowania, crawl budget, przyczyn problemów z indeksacją.
  - Powiązane usługi: `/uslugi/marketing/audyt-seo`, `/uslugi/marketing/optymalizacja-seo`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-065] Artykuł: Czym jest pozycjonowanie lokalne i dlaczego ma znaczenie dla firm usługowych?**

  - Kategorie: `SEO`, `Widoczność`, `Marketing`
  - Slug: `czym-jest-pozycjonowanie-lokalne-i-dlaczego-ma-znaczenie`
  - Cel: Wyjaśnienie local SEO, roli Google Maps, czynników rankingowych dla firm lokalnych.
  - Powiązane usługi: `/uslugi/marketing/pozycjonowanie-stron`, `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-066] Artykuł: Jak Google ocenia jakość treści na stronie i co to oznacza dla właściciela firmy?**

  - Kategorie: `SEO`, `Treści`
  - Slug: `jak-google-ocenia-jakosc-tresci-na-stronie`
  - Cel: Wyjaśnienie E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) i Helpful Content bez żargonu.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/marketing/pozycjonowanie-stron`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-067] Artykuł: Dlaczego stare treści na stronie mogą szkodzić widoczności w Google?**

  - Kategorie: `SEO`, `Treści`
  - Slug: `dlaczego-stare-tresci-moga-szkodzic-widocznosci-w-google`
  - Cel: Wyjaśnienie content decay, znaczenia aktualizacji treści, sygnałów świeżości.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/blogi-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-068] Artykuł: Czym jest kanibalizacja słów kluczowych i jak jej unikać?**

  - Kategorie: `SEO`, `Treści`
  - Slug: `czym-jest-kanibalizacja-slow-kluczowych-i-jak-jej-unikac`
  - Cel: Wyjaśnienie problemu konkurowania własnych stron o te same frazy, jak to diagnozować i rozwiązywać.
  - Powiązane usługi: `/uslugi/marketing/audyt-seo`, `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-069] Artykuł: Co to są przekierowania 301 i kiedy są potrzebne na stronie?**

  - Kategorie: `SEO`, `Strony`
  - Slug: `co-to-sa-przekierowania-301-i-kiedy-sa-potrzebne`
  - Cel: Wyjaśnienie przekierowań, kiedy je stosować (zmiana adresu, migracja), jak wpływają na SEO.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/marketing/optymalizacja-seo`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-070] Artykuł: Dlaczego duplikaty treści mogą obniżać pozycję strony w Google?**

  - Kategorie: `SEO`, `Treści`
  - Slug: `dlaczego-duplikaty-tresci-moga-obnizac-pozycje-w-google`
  - Cel: Wyjaśnienie duplicate content, canonical URL, jak Google radzi sobie z duplikatami.
  - Powiązane usługi: `/uslugi/marketing/audyt-seo`, `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

### Strony internetowe i UX

- ❌ **[IDEA-071] Artykuł: Co powinna zawierać strona główna firmy, żeby przyciągać klientów?**

  - Kategorie: `Strony`, `UX`, `Marketing`
  - Slug: `co-powinna-zawierac-strona-glowna-firmy`
  - Cel: Wyjaśnienie kluczowych elementów (propozycja wartości, nawigacja, CTA, dowód społeczny) bez instrukcji DIY.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-072] Artykuł: Dlaczego formularz kontaktowy nie działa i co może być przyczyną?**

  - Kategorie: `Strony`, `UX`
  - Slug: `dlaczego-formularz-kontaktowy-nie-dziala`
  - Cel: Typowe problemy z formularzami (spam filtry, walidacja, UX), jak je diagnozować.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny z diagnostyką

- ❌ **[IDEA-073] Artykuł: Czym jest strona błędu 404 i dlaczego warto ją zaprojektować?**

  - Kategorie: `Strony`, `UX`
  - Slug: `czym-jest-strona-bledu-404-i-dlaczego-warto-ja-zaprojektowac`
  - Cel: Wyjaśnienie błędów 404, jak dobra strona 404 pomaga użytkownikom i SEO.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-074] Artykuł: Jak nawigacja na stronie wpływa na sprzedaż i zapytania?**

  - Kategorie: `UX`, `Strony`, `Sklepy`
  - Slug: `jak-nawigacja-na-stronie-wplywa-na-sprzedaz`
  - Cel: Znaczenie intuicyjnej nawigacji, typowe błędy, jak dobra nawigacja zwiększa konwersję.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-075] Artykuł: Dlaczego strona internetowa powinna mieć jasną hierarchię informacji?**

  - Kategorie: `UX`, `Strony`, `Treści`
  - Slug: `dlaczego-strona-powinna-miec-jasna-hierarchie-informacji`
  - Cel: Wyjaśnienie hierarchii wizualnej, nagłówków, skanowania treści przez użytkowników.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-076] Artykuł: Co to jest wezwanie do działania i dlaczego każda strona go potrzebuje?**

  - Kategorie: `UX`, `Marketing`, `Strony`
  - Slug: `co-to-jest-wezwanie-do-dzialania-i-dlaczego-kazda-strona-go-potrzebuje`
  - Cel: Wyjaśnienie CTA (Call to Action) prostym językiem, typy, umiejscowienie, błędy.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-077] Artykuł: Dlaczego zdjęcia stockowe mogą obniżać zaufanie do firmy?**

  - Kategorie: `Grafika`, `UX`, `Branding`
  - Slug: `dlaczego-zdjecia-stockowe-moga-obnizac-zaufanie-do-firmy`
  - Cel: Wpływ autentycznych zdjęć vs stock na postrzeganie marki, kiedy stock jest OK.
  - Powiązane usługi: `/uslugi/projekty-graficzne`, `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-078] Artykuł: Jak długo powinna ładować się strona internetowa?**

  - Kategorie: `Strony`, `UX`, `SEO`
  - Slug: `jak-dlugo-powinna-ladowac-sie-strona-internetowa`
  - Cel: Benchmarki, wpływ na użytkowników i konwersję, co wpływa na szybkość.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/marketing/optymalizacja-seo`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-079] Artykuł: Czym jest strona docelowa i kiedy warto ją mieć?**

  - Kategorie: `Strony`, `Marketing`
  - Slug: `czym-jest-strona-docelowa-i-kiedy-warto-ja-miec`
  - Cel: Wyjaśnienie landing page, różnica od strony głównej, kiedy i dla kogo.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/marketing`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-080] Artykuł: Dlaczego strona firmowa powinna mieć sekcję z opiniami klientów?**

  - Kategorie: `UX`, `Psychologia`, `Strony`
  - Slug: `dlaczego-strona-firmowa-powinna-miec-opinie-klientow`
  - Cel: Znaczenie opinii dla zaufania i konwersji, jak je prezentować, błędy.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-081] Artykuł: Co to jest stopka strony i jakie informacje powinna zawierać?**

  - Kategorie: `Strony`, `UX`
  - Slug: `co-to-jest-stopka-strony-i-co-powinna-zawierac`
  - Cel: Elementy stopki (dane kontaktowe, linki, informacje prawne), dobre praktyki.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

### Sklepy internetowe i e-commerce

- ❌ **[IDEA-082] Artykuł: Dlaczego klienci porzucają koszyki i jak temu zapobiegać?**

  - Kategorie: `Sklepy`, `Psychologia`, `UX`
  - Slug: `dlaczego-klienci-porzucaja-koszyki-i-jak-temu-zapobiegac`
  - Cel: Przyczyny porzucania koszyków (koszty dostawy, skomplikowany proces, brak zaufania), jak je diagnozować.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-083] Artykuł: Co powinna zawierać strona produktu, żeby zwiększać sprzedaż?**

  - Kategorie: `Sklepy`, `UX`, `Treści`
  - Slug: `co-powinna-zawierac-strona-produktu`
  - Cel: Elementy strony produktu (zdjęcia, opis, cena, dostępność, opinie), hierarchia informacji.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-084] Artykuł: Dlaczego opisy produktów mają znaczenie dla sprzedaży i SEO?**

  - Kategorie: `Sklepy`, `Treści`, `SEO`
  - Slug: `dlaczego-opisy-produktow-maja-znaczenie-dla-sprzedazy-i-seo`
  - Cel: Rola opisów w decyzji zakupowej i pozycjonowaniu, typowe błędy.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`, `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-085] Artykuł: Jakie metody płatności powinien oferować sklep internetowy?**

  - Kategorie: `Sklepy`
  - Slug: `jakie-metody-platnosci-powinien-oferowac-sklep-internetowy`
  - Cel: Przegląd metod płatności w Polsce, znaczenie dla konwersji, zaufanie klientów.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-086] Artykuł: Czym jest cross-selling i up-selling w sklepie internetowym?**

  - Kategorie: `Sklepy`, `Psychologia`, `Marketing`
  - Slug: `czym-jest-cross-selling-i-up-selling-w-sklepie-internetowym`
  - Cel: Wyjaśnienie technik zwiększania wartości zamówienia, kiedy działają, kiedy irytują.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-087] Artykuł: Dlaczego zdjęcia produktów mają kluczowe znaczenie w e-commerce?**

  - Kategorie: `Sklepy`, `Grafika`
  - Slug: `dlaczego-zdjecia-produktow-maja-kluczowe-znaczenie-w-e-commerce`
  - Cel: Wpływ jakości zdjęć na sprzedaż, co powinny pokazywać, błędy.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`, `/uslugi/projekty-graficzne`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-088] Artykuł: Co to jest regulamin sklepu internetowego i co musi zawierać?**

  - Kategorie: `Sklepy`, `Bezpieczeństwo`
  - Slug: `co-to-jest-regulamin-sklepu-internetowego-i-co-musi-zawierac`
  - Cel: Wymagania prawne, kluczowe elementy regulaminu, konsekwencje braku.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-089] Artykuł: Dlaczego wyszukiwarka w sklepie internetowym jest ważna?**

  - Kategorie: `Sklepy`, `UX`
  - Slug: `dlaczego-wyszukiwarka-w-sklepie-internetowym-jest-wazna`
  - Cel: Znaczenie wyszukiwarki dla konwersji, cechy dobrej wyszukiwarki, błędy.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-090] Artykuł: Jak kategorie produktów wpływają na sprzedaż w sklepie internetowym?**

  - Kategorie: `Sklepy`, `UX`, `SEO`
  - Slug: `jak-kategorie-produktow-wplywaja-na-sprzedaz`
  - Cel: Znaczenie struktury kategorii dla użytkowników i SEO, dobre praktyki.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-091] Artykuł: Czym jest polityka zwrotów i dlaczego wpływa na decyzje zakupowe?**

  - Kategorie: `Sklepy`, `Psychologia`
  - Slug: `czym-jest-polityka-zwrotow-i-dlaczego-wplywa-na-decyzje-zakupowe`
  - Cel: Znaczenie jasnej polityki zwrotów dla zaufania i konwersji, wymagania prawne.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

### Grafika i branding

- ❌ **[IDEA-092] Artykuł: Czym jest logo i dlaczego firma go potrzebuje?**

  - Kategorie: `Grafika`, `Branding`
  - Slug: `czym-jest-logo-i-dlaczego-firma-go-potrzebuje`
  - Cel: Rola logo w budowaniu marki, co sprawia że logo jest dobre, typowe błędy.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-logo`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-093] Artykuł: Dlaczego spójność wizualna marki ma znaczenie dla klientów?**

  - Kategorie: `Branding`, `Grafika`
  - Slug: `dlaczego-spojnosc-wizualna-marki-ma-znaczenie`
  - Cel: Wpływ spójności na rozpoznawalność i zaufanie, co obejmuje, jak utrzymać.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-094] Artykuł: Co to jest księga znaku i czy każda firma jej potrzebuje?**

  - Kategorie: `Branding`, `Grafika`
  - Slug: `co-to-jest-ksiega-znaku-i-czy-kazda-firma-jej-potrzebuje`
  - Cel: Wyjaśnienie brand book/brandbook, co zawiera, kiedy jest potrzebny.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-095] Artykuł: Jakie formaty plików graficznych stosować w różnych sytuacjach?**

  - Kategorie: `Grafika`, `Strony`
  - Slug: `jakie-formaty-plikow-graficznych-stosowac`
  - Cel: Wyjaśnienie JPG, PNG, SVG, WebP, PDF - kiedy który, dla kogo.
  - Powiązane usługi: `/uslugi/projekty-graficzne`, `/narzedzia/jpg-png-na-webp-bez-limitu`
  - Typ artykułu: Edukacyjny / porównawczy

- ❌ **[IDEA-096] Artykuł: Dlaczego wizytówka firmowa wciąż ma znaczenie w erze cyfrowej?**

  - Kategorie: `Grafika`, `Branding`, `Druk`
  - Slug: `dlaczego-wizytowka-firmowa-wciaz-ma-znaczenie`
  - Cel: Rola wizytówki w kontaktach biznesowych, co powinna zawierać, typowe błędy.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-wizytowki`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-097] Artykuł: Jak kolory marki wpływają na postrzeganie firmy przez klientów?**

  - Kategorie: `Branding`, `Psychologia`, `Grafika`
  - Slug: `jak-kolory-marki-wplywaja-na-postrzeganie-firmy`
  - Cel: Psychologia kolorów w kontekście brandingu, wybór kolorów dla różnych branż.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`, `/narzedzia/generator-palet-kolorow-online`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-098] Artykuł: Co to jest typografia i dlaczego ma znaczenie dla Twojej marki?**

  - Kategorie: `Grafika`, `Branding`
  - Slug: `co-to-jest-typografia-i-dlaczego-ma-znaczenie-dla-marki`
  - Cel: Podstawy typografii w kontekście brandingu, wybór czcionek, czytelność.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-099] Artykuł: Dlaczego ulotka reklamowa wciąż może być skuteczna?**

  - Kategorie: `Grafika`, `Marketing`, `Druk`
  - Slug: `dlaczego-ulotka-reklamowa-wciaz-moze-byc-skuteczna`
  - Cel: Kiedy ulotki działają, co powinny zawierać, jak łączyć z digital.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-ulotki`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-100] Artykuł: Co to jest infografika i kiedy warto ją wykorzystać?**

  - Kategorie: `Grafika`, `Marketing`, `Treści`
  - Slug: `co-to-jest-infografika-i-kiedy-warto-ja-wykorzystac`
  - Cel: Rola infografik w komunikacji, kiedy działają, dobre praktyki.
  - Powiązane usługi: `/uslugi/projekty-graficzne`
  - Typ artykułu: Edukacyjny

### Marketing i treści

- ❌ **[IDEA-101] Artykuł: Czym jest strategia treści i dlaczego firma jej potrzebuje?**

  - Kategorie: `Marketing`, `Treści`
  - Slug: `czym-jest-strategia-tresci-i-dlaczego-firma-jej-potrzebuje`
  - Cel: Wyjaśnienie content strategy, korzyści, elementy składowe.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/blogi-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-102] Artykuł: Dlaczego treści na stronie powinny odpowiadać na pytania klientów?**

  - Kategorie: `Treści`, `SEO`, `UX`
  - Slug: `dlaczego-tresci-na-stronie-powinny-odpowiadac-na-pytania-klientow`
  - Cel: Znaczenie intent-based content, jak identyfikować pytania, korzyści SEO.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/marketing/pozycjonowanie-stron`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-103] Artykuł: Co to jest newsletter i czy warto go prowadzić?**

  - Kategorie: `Marketing`, `Treści`
  - Slug: `co-to-jest-newsletter-i-czy-warto-go-prowadzic`
  - Cel: Rola newslettera w marketingu, korzyści, na co zwrócić uwagę.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-104] Artykuł: Dlaczego opisy usług na stronie są kluczowe dla pozyskiwania klientów?**

  - Kategorie: `Treści`, `Strony`, `Marketing`
  - Slug: `dlaczego-opisy-uslug-na-stronie-sa-kluczowe`
  - Cel: Rola opisów usług w konwersji, co powinny zawierać, typowe błędy.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-105] Artykuł: Czym jest ton komunikacji marki i jak go określić?**

  - Kategorie: `Branding`, `Treści`, `Marketing`
  - Slug: `czym-jest-ton-komunikacji-marki-i-jak-go-okreslic`
  - Cel: Wyjaśnienie tone of voice, znaczenie dla spójności, przykłady z branż.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-106] Artykuł: Dlaczego strona O nas ma znaczenie dla zaufania klientów?**

  - Kategorie: `Treści`, `Strony`, `Branding`
  - Slug: `dlaczego-strona-o-nas-ma-znaczenie-dla-zaufania`
  - Cel: Rola strony O nas w budowaniu zaufania, co powinna zawierać, błędy.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-107] Artykuł: Co to są studia przypadków i dlaczego warto je mieć na stronie?**

  - Kategorie: `Marketing`, `Treści`, `Strony`
  - Slug: `co-to-sa-studia-przypadkow-i-dlaczego-warto-je-miec`
  - Cel: Rola case studies w budowaniu autorytetu, co powinny zawierać.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/tworzenie-tresci`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-108] Artykuł: Jak często aktualizować treści na stronie firmowej?**

  - Kategorie: `Treści`, `SEO`
  - Slug: `jak-czesto-aktualizowac-tresci-na-stronie-firmowej`
  - Cel: Znaczenie świeżości treści, co aktualizować, jak planować.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/blogi-internetowe`
  - Typ artykułu: Edukacyjny

### Psychologia sprzedaży

- ❌ **[IDEA-109] Artykuł: Czym jest pilność w marketingu i kiedy działa uczciwie?**

  - Kategorie: `Psychologia`, `Marketing`, `Sklepy`
  - Slug: `czym-jest-pilnosc-w-marketingu-i-kiedy-dziala-uczciwie`
  - Cel: Wyjaśnienie urgency/scarcity, etyczne vs manipulacyjne użycie, przepisy.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-110] Artykuł: Dlaczego pierwsze wrażenie na stronie decyduje o pozostaniu użytkownika?**

  - Kategorie: `Psychologia`, `UX`, `Strony`
  - Slug: `dlaczego-pierwsze-wrazenie-na-stronie-decyduje-o-pozostaniu-uzytkownika`
  - Cel: Psychologia pierwszego kontaktu, co wpływa, badania o czasie oceny.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-111] Artykuł: Czym jest efekt halo i jak wpływa na postrzeganie marki?**

  - Kategorie: `Psychologia`, `Branding`
  - Slug: `czym-jest-efekt-halo-i-jak-wplywa-na-postrzeganie-marki`
  - Cel: Wyjaśnienie efektu halo, jak jakość jednego elementu wpływa na ocenę całości.
  - Powiązane usługi: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`, `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-112] Artykuł: Dlaczego ludzie ufają markom, które wyglądają profesjonalnie?**

  - Kategorie: `Psychologia`, `Branding`, `UX`
  - Slug: `dlaczego-ludzie-ufaja-markom-ktore-wygladaja-profesjonalnie`
  - Cel: Związek między wyglądem a zaufaniem, badania, praktyczne implikacje.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/projekty-graficzne`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-113] Artykuł: Czym jest reguła wzajemności i jak działa w marketingu?**

  - Kategorie: `Psychologia`, `Marketing`
  - Slug: `czym-jest-regula-wzajemnosci-i-jak-dziala-w-marketingu`
  - Cel: Wyjaśnienie reciprocity, przykłady etycznego użycia (content, narzędzia).
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/narzedzia`
  - Typ artykułu: Edukacyjny

### Bezpieczeństwo i dostępność

- ❌ **[IDEA-114] Artykuł: Co to jest RODO i jakie obowiązki nakłada na właścicieli stron?**

  - Kategorie: `Bezpieczeństwo`, `Strony`
  - Slug: `co-to-jest-rodo-i-jakie-obowiazki-naklada-na-wlascicieli-stron`
  - Cel: Podstawy RODO dla właścicieli stron, obowiązki, typowe błędy.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-115] Artykuł: Dlaczego polityka prywatności jest wymagana na każdej stronie?**

  - Kategorie: `Bezpieczeństwo`, `Strony`
  - Slug: `dlaczego-polityka-prywatnosci-jest-wymagana-na-kazdej-stronie`
  - Cel: Wymagania prawne, co musi zawierać, konsekwencje braku.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-116] Artykuł: Co to jest dostępność cyfrowa i dlaczego ma znaczenie dla firm?**

  - Kategorie: `Dostępność`, `UX`, `Strony`
  - Slug: `co-to-jest-dostepnosc-cyfrowa-i-dlaczego-ma-znaczenie`
  - Cel: Wyjaśnienie WCAG prostym językiem, kto korzysta, korzyści biznesowe.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/narzedzia/tester-kontrastu-kolorow-wcag`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-117] Artykuł: Dlaczego zgoda na pliki cookie musi być zgodna z przepisami?**

  - Kategorie: `Bezpieczeństwo`, `Strony`
  - Slug: `dlaczego-zgoda-na-pliki-cookie-musi-byc-zgodna-z-przepisami`
  - Cel: Wymagania prawne dotyczące cookies, co jest zgodne, typowe błędy.
  - Powiązane usługi: `/uslugi/strony-internetowe`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-118] Artykuł: Jak zabezpieczyć stronę przed atakami i włamaniami?**

  - Kategorie: `Bezpieczeństwo`, `Strony`
  - Slug: `jak-zabezpieczyc-strone-przed-atakami-i-wlamaniami`
  - Cel: Podstawy bezpieczeństwa stron (aktualizacje, SSL, hasła, backup), na co zwrócić uwagę.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/strony-internetowe/optymalizacja-strony-wordpress`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-119] Artykuł: Co to jest kopia zapasowa strony i dlaczego jest niezbędna?**

  - Kategorie: `Bezpieczeństwo`, `Strony`
  - Slug: `co-to-jest-kopia-zapasowa-strony-i-dlaczego-jest-niezbedna`
  - Cel: Znaczenie backupów, rodzaje, częstotliwość, co może pójść nie tak bez kopii.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/strony-internetowe/optymalizacja-strony-wordpress`
  - Typ artykułu: Edukacyjny

- ❌ **[IDEA-120] Artykuł: Dlaczego European Accessibility Act zmieni wymagania dla stron firmowych?**

  - Kategorie: `Dostępność`, `Strony`, `Bezpieczeństwo`
  - Slug: `dlaczego-european-accessibility-act-zmieni-wymagania-dla-stron`
  - Cel: Wyjaśnienie EAA 2025, kogo dotyczy, jakie zmiany wprowadza, jak się przygotować.
  - Powiązane usługi: `/uslugi/strony-internetowe`, `/uslugi/sklepy-internetowe`
  - Typ artykułu: Edukacyjny

---
