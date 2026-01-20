# Arteon - TASKS

**KRYTYCZNE:** przed tworzeniem i realizowaniem zadań zawsze zapoznaj się z `docs/INSTRUCTIONS.md`.

## Zadania

Zrobione zadania: `docs/DONE_TASKS.md`.

- ✅ **[AUDIT-002] Repo: audyt duplikacji logiki (hooks/utils/komponenty)**

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

- ❌ **[CONTENT-005] Realizacje: naprawić placeholder dane w projektach Perly Mocy i Izoluk**

  - Plik: `data/pl/projects.json`
  - Zakres:
    - Projekty 0 i 1 mają placeholder dane z Brewerynka (short, description, process_steps, contentBlocks, cta, faq, seo)
    - Zastąpić placeholder dane prawdziwymi informacjami o tych realizacjach
    - Użyć nowych typów bloków (steps, featureList, metrics) gdzie pasują
  - Kryteria akceptacji:
    - Wszystkie dane w projektach są zgodne z tytułem i klientem
    - Realizacje renderują się bez błędów
  - Weryfikacja: nie jest wymagana (COPY-only).

- 🟡 **[AUDIT-003] Repo: audyt cleanup (puste pliki, martwe exporty, nieużywany kod/warianty)**

  - Cel: utrzymać repo „lean” i bez śmieci (bez zmian w UI/UX).
  - Zakres:
    - puste pliki/komponenty, martwe exporty, nieużywany kod/warianty (zostaw `Tooltip`, nawet jeśli chwilowo nieużywany)
  - Raportowanie:
    - Jeśli wykryjesz problem - dopisz osobne zadanie `CLEANUP-*` z listą plików i kryteriami akceptacji.
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
    - Jeśli wykryjesz problem - dopisz osobne zadanie (np. `SEO-*`) z konkretnymi plikami i kryteriami akceptacji.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- 🟡 **[AUDIT-005] Repo: audyt performance sanity-check (client components/rerender/obrazy)**

  - Cel: wychwycić proste, wysokiego ROI problemy wydajnościowe.
  - Zakres:
    - nadmiarowe `use client`, brak memoization, niepotrzebne re-render
    - obrazy: duże assety, brak `alt`, brak optymalizacji/rozsądnych rozmiarów
  - Raportowanie:
    - Jeśli wykryjesz problem - dopisz osobne zadanie (np. `CLEANUP-*`, `TOOLS-*`) z listą plików i planem zmian.
    - Do `DONE_TASKS.md` dodaj wpis z zakresem audytu + ID nowych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ✅ **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły"**

  - **Status:** Wykonano 2026-01-06
  - **Zakres:** Przegląd 22 nowych komponentów UI + analiza modyfikacji istniejących
  - **Rezultat:** Wygenerowano 30 pomysłów (IDEA-121 do IDEA-150) w sekcji "UI/UX - Wykorzystanie nowych komponentów"
  - **Szczegóły:** Zobacz wpis w `DONE_TASKS.md` (2026-01-06)

- ❌ **[AUDIT-009] Blog: audyt rozbudowy istniejących artykułów pod SEO (nowe sekcje, linkowanie wewnętrzne, rozwinięcia tematów)**

  - Cel: podnieść pozycje istniejących artykułów przez realne wzmocnienie treści (topical coverage), lepsze zaspokojenie intencji użytkownika i mocniejsze linkowanie wewnętrzne.
  - Zakres:
    - Wszystkie artykuły w `data/pl/blog.json`.
    - Priorytet: zacznij od artykułów, które już mają potencjał (jeśli masz dane z GSC/GA4: pozycje ~4–20, wysoki potencjał CTR/ruchu; jeśli nie masz danych: wybierz 8–12 najważniejszych tematycznie dla usług Arteon).
  - Co analizujemy (dla każdego artykułu):
    - Czy odpowiada wprost na główne pytanie/intencję i czy ma brakujące „pod-pytania", które warto dopisać jako nowe H2/H3.
    - Czy są miejsca, gdzie warto dodać:
      - nowe sekcje (np. "Najczęstsze błędy", "Przykłady", "Kroki", "Porównanie opcji", "FAQ")
      - rozwinięcia wyjaśnień (definicje + „po co to?")
      - linki wewnętrzne do:
        - usług (`/uslugi/...`),
        - narzędzi (`/narzedzia/...`),
        - powiązanych artykułów i stron edukacji,
        - oraz ewentualnie realizacji (jeśli pasuje tematycznie).
    - Czy artykuł ma sensowny zestaw "Zobacz też" (2–4 linki) oraz pasujące CTA.
    - Czy nagłówki i kolejność sekcji da się poprawić pod czytelność i crawl (bez lania wody, bez upychania słów kluczowych).
  - Raportowanie (WYNIK AUDYTU = zadania do wdrożenia, nie pomysły):
    - Dla każdego przeanalizowanego artykułu dopisz osobne zadanie `CONTENT-*` (a jeśli dotyczy stricte SEO/linkowania poza blogiem - `SEO-*`) z:
      - slugiem artykułu,
      - listą konkretnych dopisków (nowe sekcje H2/H3 + 1–3 zdania opisu co w nich ma być),
      - listą konkretnych linków wewnętrznych do wplecenia (dokładne URL),
      - kryteriami akceptacji (konkret, mierzalne),
      - plikami do edycji (min. `data/pl/blog.json`).
    - Nie dodawaj `IDEA-*` ani wpisów do sekcji „Pomysły" - wynik ma być egzekwowalnym backlogiem.
    - Do `DONE_TASKS.md` po wykonaniu audytu dopisz wpis: ile artykułów przeanalizowano + ID utworzonych zadań.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-010] Repo: audyt tonu marki na stronach - elementy globalne i copy „wspólne” (bez artykułów)**

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
  - Raportowanie (obowiązkowo - konkretne przykłady):
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
    - `/polityka-prywatnosci`, `/regulamin` (bez zmiany znaczenia prawnego - oceniamy głównie „warstwę ludzką”: nagłówki, wstępy, mikrocopy)
  - Raportowanie (obowiązkowo - konkretne przykłady):
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
  - Raportowanie (obowiązkowo - konkretne przykłady):
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
  - Raportowanie (obowiązkowo - konkretne przykłady):
    - Format jak w `AUDIT-010`.
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per strona.
  - Weryfikacja: nie jest wymagana (AUDIT-only).

- ❌ **[AUDIT-014] Narzędzia: audyt tonu (strona listy + strony narzędzi, bez artykułów)**

  - Cel: sprawdzić, czy opisy narzędzi i mikrocopy UI prowadzą użytkownika „za rękę” (prosto, bez żargonu, krok po kroku).
  - Zakres (strony):
    - `/narzedzia`
    - wszystkie strony narzędzi `/narzedzia/*` (wg `PAGES_CATALOG.md`, w tym desktop-only komunikaty/layout)
  - Raportowanie (obowiązkowo - konkretne przykłady):
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
  - Raportowanie (obowiązkowo - konkretne przykłady):
    - Format jak w `AUDIT-010`.
  - Jeśli wykryjesz problemy:
    - Dopisz osobne zadania `COPY-###` per realizacja (slug).
  - Weryfikacja: nie jest wymagana (AUDIT-only).

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

- ❌ **[CLEANUP-013] Tools: ujednolicić pobieranie Blob → URL przez `downloadBlob`**

- Cel: zastąpić ręczne sekwencje `URL.createObjectURL` → `downloadFromUrl` → `URL.revokeObjectURL` wspólnym utilsem `downloadBlob(...)` (spójny revoke z opóźnieniem, jedno źródło prawdy).
- Pliki (migracja użyć):
  - `components/sections/tools/QrCodeGenerator.tsx` (handler pobierania SVG)
  - `components/sections/tools/ImageResizeTool/exportCroppedImage.ts`
  - `lib/tools/email/exportSignature.ts`
  - `components/sections/tools/FaviconGenerator.tsx` (handler pobierania ZIP)
- Kryteria akceptacji:

  - Brak zmian w UI/UX ani treści.
  - Revoke wykonywany automatycznie przez util (brak wycieków URL, zachowane opóźnienie).
  - `npm run lint` i `npm run build` przechodzą.

- ❌ **[CLEANUP-014] Clipboard: ujednolicić timery w `useCopyToClipboard` przez `useTimeout`**

- Plik: `hooks/useCopyToClipboard.ts`
- Zakres:
  - Zastąpić lokalny `setTimeout` + `useRef` hookiem `useTimeout` (istniejący wspólny prymityw do zarządzania timerami).
  - Zachować API hooka oraz zachowanie flagi `copied` (reset po `resetAfterMs`).
- Kryteria akceptacji:

  - `CopyButton` i narzędzia korzystające z hooka działają bez zmian.
  - `npm run lint` i `npm run build` przechodzą.

- ❌ **[TOOLS-060] ZIP: wspólny helper `zipFromUrls` (re-use w narzędziach)**

- Plik: `lib/tools/zip.ts` (lub nowy moduł pomocniczy w `lib/tools/zip/`)
- Zakres:
  - Dodać funkcję `zipFromUrls(entries: { url: string; path: string }[], extras?: { path: string; data: Uint8Array | string }[]): Blob` (pobiera pliki po URL i buduje ZIP).
  - Migracja istniejących użyć ZIP:
    - `components/sections/tools/FaviconGenerator.tsx` (handler ZIP)
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts` (handler ZIP)
- Kryteria akceptacji:

  - Brak regresji: pobieranie ZIP działa identycznie (nazwy plików, zawartość, integracja z auto-download).
  - Obsługa błędów w miejscu wywołania pozostaje (komunikaty bez zmian).
  - `npm run lint` i `npm run build` przechodzą.

- ❌ **[CONTENT-001] Blog: zaktualizować INSTRUCTIONS.md - excerpt artykułu 220-230 znaków**

  - Plik: `docs/INSTRUCTIONS.md`
  - Zakres:
    - Dodać wytyczną w sekcji "ZASADY TECHNICZNE DLA ARTYKUŁÓW": pole `excerpt` musi mieć 220-230 znaków (ze spacjami).
    - Excerpt ma zachęcać do kliknięcia, być spójny z tonem marki i kontekstem artykułu.
  - Kryteria akceptacji:
    - Wytyczna dodana do INSTRUCTIONS.md.
  - Weryfikacja: nie jest wymagana (COPY-only).

- ❌ **[CONTENT-003] Blog: audyt artykułów pod kątem balansu DIY vs kierowanie do oferty**

  - Pliki: `data/pl/blog.json`, wszystkie artykuły
  - Zakres:
    - Sprawdzić każdy artykuł pod kątem:
      1. **Niejasne instrukcje techniczne** - fragmenty typu "Skonfiguruj serwer" bez wyjaśnienia dla osób nietechnicznych
      2. **Brak opcji pomocy** - instrukcje techniczne bez informacji "możemy pomóc / skontaktuj się z nami"
      3. **Zakładanie jednego scenariusza** - brak rozważenia różnych przyczyn problemu
      4. **Zbyt szczegółowe DIY** - instrukcje, które mogłyby zastępować usługę
    - Dla każdego artykułu z problemami: zidentyfikować konkretne fragmenty do poprawy
  - Przykłady problemów (z artykułu o 404):
    - "Skonfiguruj serwer lub CMS, żeby zwracał kod 404 zamiast 200" - niejasne, brak opcji pomocy
    - "W większości systemów można to ustawić w konfiguracji lub przez wtyczkę" - zbyt ogólne
  - Kryteria akceptacji:
    - Lista artykułów z problemami + konkretne fragmenty do poprawy
    - Każdy problem ma zaproponowaną poprawkę zgodną z wytycznymi z INSTRUCTIONS.md (sekcja "Balans DIY vs kierowanie do oferty")
  - Weryfikacja: nie jest wymagana (COPY-only).

---

## Pomysły

- ❌ **[IDEA-019] O nas: „Jak pracujemy"” - podstrona procesu współpracy (krok po kroku)**

  - Cel i uzasadnienie:
    - Strona domykająca decyzję: klarowny proces + mniejsza niepewność przed kontaktem.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Nowa podstrona z etapami (brief → plan → realizacja → testy → publikacja → wsparcie) + deliverables.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/jak-pracujemy/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/jak-pracujemy`
    - `metadata.title`: `Jak pracujemy - proces współpracy krok po kroku - Arteon`
    - `metadata.description`: `Zobacz, jak wygląda współpraca z Arteon: etapy, komunikacja i deliverables. Jasny proces bez chaosu.`
    - OG image: `public/assets/og/o-nas-jak-pracujemy.webp`
    - Schema: `HowTo` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 6 etapów + sekcja deliverables.
    - Strona podpięta do submenu „O nas” (desktop + mobile).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-021] O nas: „Standardy jakości” - WCAG, SEO, performance i bezpieczeństwo (w jednym miejscu)**

  - Cel i uzasadnienie:
    - Strona referencyjna do pytań „czy robicie WCAG/SEO/szybkość/bezpieczeństwo?”.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Sekcje: WCAG, SEO techniczne, CWV, bezpieczeństwo, analityka + linki do usług.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/standardy-jakosci/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/standardy-jakosci`
    - `metadata.title`: `Standardy jakości - WCAG, SEO, performance i bezpieczeństwo - Arteon`
    - `metadata.description`: `Jak dbamy o jakość: dostępność WCAG, SEO techniczne, Core Web Vitals, bezpieczeństwo i analityka.`
    - OG image: `public/assets/og/o-nas-standardy-jakosci.webp`
    - Schema: `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 5 sekcji, każda z konkretnymi punktami „co robimy”.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-022] O nas: „Dlaczego Arteon” - podstrona na obiekcje (dla niezdecydowanych)**

  - Cel i uzasadnienie:
    - Domykać decyzję: zebrać „dla kogo / dla kogo nie”, rozliczenia, ryzyko i co po wdrożeniu.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Bloki obiekcji + CTA do realizacji i kontaktu.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/dlaczego-arteon/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/dlaczego-arteon`
    - `metadata.title`: `Dlaczego Arteon - jak zmniejszamy ryzyko współpracy`
    - `metadata.description`: `Zobacz, jak pracujemy, jak rozliczamy projekty i jak dbamy o przewidywalność współpracy.`
    - OG image: `public/assets/og/o-nas-dlaczego-arteon.webp`
    - Schema: `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 8 konkretnych odpowiedzi/tez (bez ogólników).
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-023] O nas: „Materiały do startu” - podstrona briefu i listy rzeczy do przygotowania**

  - Cel i uzasadnienie:
    - Skrócić czas startu projektu i poprawić jakość zapytań.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Lista: cele/oferta/treści/zdjęcia/inspiracje/dostępy/analityka + CTA do `/kontakt`.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/materialy-do-startu/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/materialy-do-startu`
    - `metadata.title`: `Materiały do strony - lista na start - Arteon`
    - `metadata.description`: `Zobacz listę materiałów, które przyspieszają wycenę i realizację: cele, treści, zdjęcia, inspiracje i dostępy.`
    - OG image: `public/assets/og/o-nas-materialy-do-startu.webp`
    - Schema: `HowTo` lub `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Min. 12 punktów + wariant minimum na start.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-024] O nas: „Partnerzy” - hub dla współpracy (klienci vs partnerzy)**

  - Cel i uzasadnienie:
    - Uporządkować komunikację: osobna ścieżka dla partnerów + linkowanie do `/o-nas/dolacz-do-sieci`.
  - Konkret: co dodajemy/zmieniamy (strona/narzędzie/artykuł/rozbudowa)
    - Hub współpracy + FAQ dla partnerów.
  - Pliki i ścieżki:
    - `app/(pl)/o-nas/partnerzy/page.tsx`
    - `components/shared/navigation-data/pl.ts` (`ABOUT_NAV_ITEMS_PL`)
  - SEO:
    - URL/slug: `/o-nas/partnerzy`
    - `metadata.title`: `Partnerzy Arteon - współpraca projektowa`
    - `metadata.description`: `Jak wygląda współpraca partnerska z Arteon: zasady, komunikacja, rozliczenia i kiedy wracamy do siebie.`
    - OG image: `public/assets/og/o-nas-partnerzy.webp`
    - Schema: `WebPage` + `BreadcrumbList`
  - Kryteria akceptacji:
    - Strona jasno rozróżnia „dla klientów” vs „dla partnerów” i prowadzi do właściwego CTA.
  - Weryfikacja:
    - `npm run lint`
    - `npm run build`

- ❌ **[IDEA-007] Licznik meta title/description: podgląd SERP desktop/mobile + wzory do skopiowania**

  - Cel i uzasadnienie:
    - W Google długość title/description realnie zależy od urządzenia - przełącznik desktop/mobile zwiększy użyteczność.
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

### UI/UX - Wykorzystanie nowych komponentów

- ❌ **[IDEA-121] Strona porównawcza pakietów usług - SectionPackages**

  - Cel: Utworzenie dedykowanej strony `/uslugi/porownanie-pakietow` prezentującej pakiety usług dla różnych typów firm (startup, mała firma, średnia firma) z wykorzystaniem SectionPackages.
  - Uzasadnienie: Ułatwienie klientom wyboru odpowiedniego zakresu współpracy, zwiększenie transparentności oferty.
  - Pliki:
    - `app/(pl)/uslugi/porownanie-pakietow/page.tsx` (nowa strona)
    - `components/ui/sections/SectionPackages.tsx` (istniejący)
  - SEO:
    - URL: `/uslugi/porownanie-pakietow`
    - Title: `Porównanie pakietów usług - znajdź odpowiedni dla swojej firmy | Arteon`
    - Description: `Sprawdź, który pakiet usług Arteon najlepiej odpowiada potrzebom Twojej firmy. Porównaj zakres, funkcje i korzyści.`
    - OG Image: `/assets/og/porownanie-pakietow.webp` (1200x630px)
    - Schema: WebPage + Table
  - Kryteria akceptacji:
    - Tabela porównująca 3 pakiety (Basic, Professional, Enterprise)
    - Min. 8 funkcji do porównania
    - Responsywność mobile (karty) i desktop (tabela)
    - CTA do kontaktu po każdym pakiecie
    - Metadata i OG complete
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-122] Timeline historii Arteon na stronie O nas - SectionTimeline**

  - Cel: Dodanie sekcji SectionTimeline na stronie `/o-nas` pokazującej kamienie milowe rozwoju agencji.
  - Uzasadnienie: Budowanie zaufania poprzez pokazanie doświadczenia i rozwoju firmy.
  - Pliki:
    - `app/(pl)/o-nas/page.tsx` (edycja)
    - `components/ui/sections/SectionTimeline.tsx` (istniejący)
  - SEO: Wzbogacenie istniejącej strony /o-nas o structured content
  - Kryteria akceptacji:
    - Min. 5 etapów timeline (np. założenie, pierwsze projekty, rozwój zespołu, nowe usługi, obecność)
    - Ikony z react-icons/ri dla każdego etapu
    - Treść zgodna z faktami (zasada z memory)
    - Layout alternating desktop, vertical mobile
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-123] Proces realizacji projektu z rozwijanymi szczegółami - SectionSteps expandable**

  - Cel: Rozbudowa sekcji WorkSteps na stronach usług o expandableContent z dodatkowymi szczegółami każdego etapu.
  - Uzasadnienie: Zwiększenie transparentności procesu bez przytłaczania użytkownika na pierwszy rzut oka.
  - Pliki:
    - `app/(pl)/uslugi/strony-internetowe/page.tsx` (edycja)
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx` (edycja)
    - `components/sections/steps/WorkSteps.tsx` (wykorzystanie istniejącej funkcji expandable)
  - SEO: Wzbogacenie content existing pages
  - Kryteria akceptacji:
    - Każdy krok procesu ma expandableContent z min. 2-3 bullet points szczegółów
    - Smooth animation przy rozwijaniu
    - Ikona strzałki wskazująca stan (rozwinięte/zwinięte)
    - Tylko jeden krok może być rozwinięty jednocześnie
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-124] Galeria realizacji z lightboxem - SectionImageGallery**

  - Cel: Dodanie SectionImageGallery na stronie `/realizacje` do prezentacji portfolio projektów graficznych.
  - Uzasadnienie: Lepsze UX przy przeglądaniu portfolio, możliwość powiększenia i porównywania realizacji.
  - Pliki:
    - `app/(pl)/realizacje/page.tsx` (edycja)
    - `components/ui/sections/SectionImageGallery.tsx` (istniejący)
  - SEO: Enhancement existing /realizacje page
  - Kryteria akceptacji:
    - Grid 2/3/4 kolumny (mobile/tablet/desktop)
    - Lightbox z nawigacją klawiszową (← →)
    - Każdy obraz ma alt text zgodny z projektem
    - Counter pokazujący pozycję (np. "3 / 12")
    - Loading na mobile <768px bez przesunięcia layoutu
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-125] Porównanie przed/po dla realizacji - SectionBeforeAfter**

  - Cel: Dodanie SectionBeforeAfter na wybranych stronach realizacji (np. rebrandingi, redesigny) pokazujących transformację.
  - Uzasadnienie: Wizualne pokazanie wartości usług Arteon, case study impact.
  - Pliki:
    - `app/(pl)/realizacje/[slug]/page.tsx` (edycja warunkowa - tylko dla projektów z before/after)
    - `components/ui/sections/SectionBeforeAfter.tsx` (istniejący)
    - `data/pl/projects.json` (dodanie pól beforeImage/afterImage)
  - SEO: Enhancement project case studies
  - Kryteria akceptacji:
    - Slider działa smooth na touch i mouse
    - Labels "Przed" i "Po" wyraźnie widoczne
    - Responsywny aspect ratio
    - Warunkowe renderowanie (tylko jeśli beforeImage i afterImage są zdefiniowane)
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-126] Bento grid na stronie głównej z usługami - SectionBento**

  - Cel: Zastąpienie obecnej sekcji usług na stronie głównej componentem SectionBento dla bardziej dynamicznej prezentacji.
  - Uzasadnienie: Nowoczesny layout, lepsze wykorzystanie przestrzeni, wizualna hierarchia usług.
  - Pliki:
    - `app/(pl)/page.tsx` (edycja)
    - `components/ui/sections/SectionBento.tsx` (istniejący)
  - SEO: Enhancement homepage
  - Kryteria akceptacji:
    - 6-8 elementów bento (główne usługi + narzędzia)
    - Mix rozmiarów (large dla głównych, medium/small dla pozostałych)
    - Ikony z react-icons/ri
    - 2-3 elementy z backgroundImage (realizacje)
    - CTA buttons do kluczowych usług
    - Grid responsive 2 cols mobile, 4 cols desktop
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-127] Metryki projektów na case studies - SectionMetrics**

  - Cel: Dodanie SectionMetrics na stronach realizacji pokazujących kluczowe metryki sukcesu (wzrost ruchu, konwersji, czasu na stronie).
  - Uzasadnienie: Data-driven storytelling, pokazanie wymiernych rezultatów współpracy.
  - Pliki:
    - `app/(pl)/realizacje/[slug]/page.tsx` (edycja)
    - `components/ui/sections/SectionMetrics.tsx` (istniejący)
    - `data/pl/projects.json` (dodanie pola metrics[])
  - SEO: Enhanced case studies with measurable results
  - Kryteria akceptacji:
    - 4 metryki na realizację (np. +150% ruch, 3.2s czas ładowania, 45% bounce rate, 98/100 Lighthouse)
    - Progress bars z animacją przy scroll into view
    - Kolory bars zgodne z znaczeniem (zielony = dobry, czerwony = do poprawy z inverse)
    - Warunkowe renderowanie (tylko jeśli project.metrics istnieje)
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-128] Quick links do popularnych stron - SectionQuickLinks**

  - Cel: Dodanie SectionQuickLinks w footer przed główną stopką z szybkimi linkami do najczęściej odwiedzanych stron.
  - Uzasadnienie: Poprawa nawigacji, zmniejszenie bounce rate, ułatwienie dostępu do kluczowych sekcji.
  - Pliki:
    - `components/shared/Footer.tsx` (edycja)
    - `components/ui/sections/SectionQuickLinks.tsx` (istniejący)
  - SEO: Internal linking boost, UX improvement
  - Kryteria akceptacji:
    - 8-12 linków (usługi, narzędzia, popularne artykuły, realizacje)
    - Ikony z react-icons/ri dla każdego linka
    - Layout flex wrap, center align
    - Hover states z subtle shadow
    - Tło slate-50 dla wizualnego oddzielenia od głównej stopki
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-129] Tabs z kategoriami usług - SectionTabs**

  - Cel: Refactor strony `/uslugi` na SectionTabs grupujące usługi po kategoriach (Web, Grafika, Marketing, Content).
  - Uzasadnienie: Lepszy UX przy dużej liczbie usług, łatwiejsze skanowanie oferty.
  - Pliki:
    - `app/(pl)/uslugi/page.tsx` (refactor)
    - `components/ui/sections/SectionTabs.tsx` (istniejący)
  - SEO: Improved content organization on /uslugi
  - Kryteria akceptacji:
    - 4 zakładki (Strony i sklepy, Projekty graficzne, Marketing i SEO, Treści)
    - Każda zakładka zawiera cards z usługami danej kategorii
    - Active state wyraźnie widoczny
    - Keyboard navigation (tab, arrows)
    - Mobile: ikony bez tekstu w tablist
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-130] Vertical tabs FAQ na dedykowanej stronie - SectionVerticalTabs**

  - Cel: Utworzenie strony `/faq` z SectionVerticalTabs grupującymi FAQ po kategoriach (Usługi, Wycena, Proces, Technologia, SEO).
  - Uzasadnienie: Centralne miejsce na najczęściej zadawane pytania, better SEO dla long-tail queries.
  - Pliki:
    - `app/(pl)/faq/page.tsx` (nowa strona)
    - `components/ui/sections/SectionVerticalTabs.tsx` (istniejący)
  - SEO:
    - URL: `/faq`
    - Title: `Najczęściej zadawane pytania (FAQ) - Arteon`
    - Description: `Odpowiedzi na najczęstsze pytania dotyczące usług, procesu współpracy, wyceny i technologii. Sprawdź FAQ Arteon.`
    - OG Image: `/assets/og/faq.webp` (1200x630px)
    - Schema: FAQPage
  - Kryteria akceptacji:
    - 5 kategorii tabs, min. 4 pytania w każdej
    - Content z istniejących FAQ ze stron usług + nowe
    - Mobile: horizontal scroll tabs
    - Desktop: fixed sidebar z tabs
    - Każde pytanie jako <h3> dla SEO
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-131] Icon badges ze stosami technologicznymi - SectionIconBadges**

  - Cel: Dodanie SectionIconBadges na stronach usług pokazujących technologie używane w projektach.
  - Uzasadnienie: Transparency, pokazanie expertise w konkretnych technologiach.
  - Pliki:
    - `app/(pl)/uslugi/strony-internetowe/page.tsx` (edycja)
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx` (edycja)
    - `components/ui/sections/SectionIconBadges.tsx` (istniejący)
  - SEO: Keyword enrichment (Next.js, React, WordPress, WooCommerce itp.)
  - Kryteria akceptacji:
    - 6-10 badges per strona usług
    - Ikony z react-icons/ri lub logos jako SVG
    - Rounded pills layout
    - Flex wrap, center alignment
    - Subtle border + shadow
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-132] Karuzela obrazów realizacji na case study - SectionImageCarousel**

  - Cel: Dodanie SectionImageCarousel na stronach realizacji pokazującej różne widoki/screeny projektu.
  - Uzasadnienie: Lepsze pokazanie zakresu projektu, multiple perspectives.
  - Pliki:
    - `app/(pl)/realizacje/[slug]/page.tsx` (edycja)
    - `components/ui/sections/SectionImageCarousel.tsx` (istniejący)
    - `data/pl/projects.json` (dodanie pola carouselImages[])
  - SEO: Enhanced visual content on case studies
  - Kryteria akceptacji:
    - 4-8 slajdów per realizacja
    - Autoplay: false (user control)
    - Dots navigation + arrow buttons
    - Overlay z opisem każdego widoku
    - Variant: default (aspect-video)
    - Lazy loading obrazów
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-133] Hero split na stronach usług - SectionHeroSplit**

  - Cel: Zastąpienie HeroBanner componentem SectionHeroSplit na wybranych stronach usług dla lepszej prezentacji.
  - Uzasadnienie: Więcej miejsca na content, image wspiera przekaz, nowocześniejszy layout.
  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx` (edycja)
    - `app/(pl)/uslugi/projekty-graficzne/projekt-wizytowki/page.tsx` (edycja)
    - `components/sections/SectionHeroSplit.tsx` (istniejący)
  - SEO: Enhanced hero section z image + structured content
  - Kryteria akceptacji:
    - Image po prawej, content po lewej
    - ButtonGroup z primary + secondary CTA
    - Subtitle (eyebrow) dla context
    - Aspect square dla images
    - Responsive: stack na mobile
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-134] Feature comparison dla planów hostingowych - SectionFeatureComparison**

  - Cel: Utworzenie strony `/uslugi/hosting-i-wsparcie` z SectionFeatureComparison pokazującą różne plany wsparcia technicznego.
  - Uzasadnienie: Nowa usługa recurring revenue, jasne porównanie planów.
  - Pliki:
    - `app/(pl)/uslugi/hosting-i-wsparcie/page.tsx` (nowa strona)
    - `components/ui/sections/SectionFeatureComparison.tsx` (istniejący)
  - SEO:
    - URL: `/uslugi/hosting-i-wsparcie`
    - Title: `Hosting i wsparcie techniczne stron internetowych | Arteon`
    - Description: `Profesjonalny hosting i wsparcie techniczne dla stron i sklepów internetowych. Porównaj plany i wybierz odpowiedni dla siebie.`
    - OG Image: `/assets/og/hosting-i-wsparcie.webp` (1200x630px)
    - Schema: WebPage + Service
  - Kryteria akceptacji:
    - 3 plany (Basic, Pro, Enterprise)
    - Min. 10 funkcji do porównania
    - Highlighted column dla recommended plan
    - Mobile: karty zamiast tabeli
    - Check/X icons dla features
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-135] Feature list korzyści na landing pages - SectionFeatureList**

  - Cel: Dodanie SectionFeatureList na stronach landing pages dla kampanii pokazującą kluczowe korzyści.
  - Uzasadnienie: Quick scan benefits, conversion optimization.
  - Pliki:
    - Przygotowanie komponentu dla przyszłych landing pages
    - `components/ui/sections/SectionFeatureList.tsx` (istniejący)
  - SEO: Structured benefits for conversion pages
  - Kryteria akceptacji:
    - Centered card max-w-2xl
    - 2 kolumny grid dla features
    - Green checkmarks w circle bg
    - Border + shadow na karcie
    - Reusable dla różnych LP
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-136] Info banner dla promocji/ogłoszeń - SectionInfoBanner**

  - Cel: Dodanie SectionInfoBanner na top of page dla ważnych komunikatów (promocje, wydarzenia, nowe usługi).
  - Uzasadnienie: Zwiększenie visibility ważnych informacji, conversion boost dla ofert czasowych.
  - Pliki:
    - `app/(pl)/layout.tsx` lub warunkowe na `page.tsx` (edycja)
    - `components/ui/sections/SectionInfoBanner.tsx` (istniejący)
  - SEO: Announcement visibility
  - Kryteria akceptacji:
    - Sticky top lub static w headerze
    - Icon (amber) + text + CTA button
    - Dark bg (slate-800) + white text
    - Highlight text bold
    - Warunkowe renderowanie (controlled via config/env)
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-137] Notification banner dla alertów systemowych - SectionNotificationBanner**

  - Cel: Wykorzystanie SectionNotificationBanner dla komunikatów o statusie (sukces, info, warning) po akcjach użytkownika.
  - Uzasadnienie: Better UX feedback, clear system state communication.
  - Pliki:
    - `app/(pl)/kontakt/page.tsx` (po wysłaniu formularza)
    - `components/ui/sections/SectionNotificationBanner.tsx` (istniejący)
  - SEO: N/A (UI component)
  - Kryteria akceptacji:
    - 3 variants (success, info, warning)
    - Dismissible z X button
    - Auto-dismiss po 5s dla success
    - Ikony z react-icons/ri
    - Kolory tła/tekstu zgodne z variant
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-138] News ticker dla aktualności - SectionNewsTicker**

  - Cel: Dodanie SectionNewsTicker na stronie głównej lub /aktualnosci z bieżącymi informacjami o projektach/nagrodach.
  - Uzasadnienie: Dynamic content, pokazanie aktywności firmy, trust building.
  - Pliki:
    - `app/(pl)/page.tsx` (opcjonalne umieszczenie)
    - `components/ui/sections/SectionNewsTicker.tsx` (istniejący)
  - SEO: Fresh content signals
  - Kryteria akceptacji:
    - Marquee animation smooth 30s
    - Dark bg (slate-800)
    - Ikony opcjonalne dla każdego item
    - Duplicated items dla seamless loop
    - Pause on hover (opcjonalne)
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-139] Process steps na stronach narzędzi - SectionProcess**

  - Cel: Dodanie SectionProcess na stronach instrukcji narzędzi pokazującego uproszczony 3-4 krokowy proces użycia.
  - Uzasadnienie: Quick start guide, onboarding UX dla narzędzi.
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/instrukcja/page.tsx` (edycja)
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/instrukcja/page.tsx` (edycja)
    - `components/ui/sections/SectionProcess.tsx` (istniejący)
  - SEO: How-to content enhancement
  - Kryteria akceptacji:
    - 3-4 kroki per narzędzie
    - Ikony z react-icons/ri
    - Numbered steps z label "Krok X"
    - Arrow icons między krokami (desktop only)
    - Stack na mobile, row na desktop
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-140] Countdown dla limitowanych ofert - SectionCountdown**

  - Cel: Przygotowanie SectionCountdown dla przyszłych kampanii z limitowanymi ofertami.
  - Uzasadnienie: FOMO, urgency dla conversion, seasonal campaigns.
  - Pliki:
    - Component ready w systemie dla przyszłego użycia
    - `components/ui/sections/SectionCountdown.tsx` (istniejący)
  - SEO: Seasonal campaign support
  - Kryteria akceptacji:
    - Real-time countdown (dni, godz, min, sek)
    - Gradient bg (red to orange) dla urgency
    - CTA button w center
    - Responsive boxes dla liczb
    - Auto-update co 1s
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-141] Blog card horizontal dla featured posts - SectionBlogCardHorizontal**

  - Cel: Wykorzystanie SectionBlogCardHorizontal na stronie głównej dla featured/latest blog posts.
  - Uzasadnienie: Better visual hierarchy, więcej info na pierwszy rzut oka, lepsze CTR.
  - Pliki:
    - `app/(pl)/page.tsx` (edycja blog section)
    - `components/ui/sections/SectionBlogCardHorizontal.tsx` (istniejący)
  - SEO: Enhanced blog promotion na homepage
  - Kryteria akceptacji:
    - 2-3 featured posts horizontal layout
    - Image po lewej (square), content po prawej
    - Category + date metadata visible
    - Hover scale effect na image
    - Responsive: stack na mobile, row na desktop
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-142] Licznik słów jako standalone narzędzie - WordCountTool dedykowana strona**

  - Cel: Utworzenie dedykowanej strony `/narzedzia/licznik-slow-i-znakow` z pełną integracją WordCountTool.
  - Uzasadnienie: Standalone tool dla content writers, SEO opportunity (high search volume keyword).
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/licznik-slow-i-znakow/page.tsx` (nowa strona)
    - `app/(pl)/narzedzia/(tools)/licznik-slow-i-znakow/instrukcja/page.tsx` (nowa instrukcja)
    - `components/sections/tools/WordCountTool.tsx` (istniejący)
    - `lib/tools/text/wordCount.ts` (istniejący)
  - SEO:
    - URL: `/narzedzia/licznik-slow-i-znakow`
    - Title: `Darmowy licznik słów i znaków online - sprawdź długość tekstu | Arteon`
    - Description: `Zlicz słowa, znaki, akapity i sprawdź czas czytania tekstu. Darmowe narzędzie online z oceną długości dla różnych typów treści.`
    - OG Image: `/assets/og/narzedzia/licznik-slow-i-znakow.webp`
    - Schema: WebApplication + HowTo
  - Kryteria akceptacji:
    - Tool funkcjonalny z wszystkimi metrykami
    - Wybór typu strony (blog, landing, product itp.)
    - Ocena długości z progress bar
    - Copy report button
    - Instrukcja z FAQ
    - Mobile support (non-desktop-only)
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-143] Animated loaders dla tool loading states - SectionAnimatedLoader**

  - Cel: Integracja SectionAnimatedLoader w narzędziach przy długich operacjach (image processing, generation).
  - Uzasadnienie: Better UX podczas wait time, professional feel.
  - Pliki:
    - `components/sections/tools/JpgPngToWebp.tsx` (edycja)
    - `components/sections/tools/ImageResizeTool.tsx` (edycja)
    - `components/ui/sections/SectionAnimatedLoader.tsx` (istniejący)
  - SEO: N/A (UX improvement)
  - Kryteria akceptacji:
    - Spinner variant dla image processing
    - Dots variant dla multi-step operations
    - 3 rozmiary (small, medium, large)
    - Accessibility (role="status", aria-label)
    - Replace existing loading states
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-144] Rozwijane FAQ w SectionSteps na stronach usług**

  - Cel: Wykorzystanie expandableContent w SectionSteps do dodania FAQ bezpośrednio w sekcjach procesowych na stronach usług.
  - Uzasadnienie: Contextual help, reduce scrolling, answer objections inline.
  - Pliki:
    - `app/(pl)/uslugi/strony-internetowe/page.tsx` (edycja WorkSteps)
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx` (edycja WorkSteps)
    - `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx` (edycja TechSteps)
  - SEO: FAQ content embedded w process flow
  - Kryteria akceptacji:
    - 1-2 FAQ per krok procesu w expandableContent
    - Click to expand z arrow icon rotation
    - Smooth accordion animation
    - Only one step expanded at a time
    - FAQ jako <h4> dla SEO
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-145] Bento grid dla narzędzi na /narzedzia - SectionBento**

  - Cel: Refactor strony `/narzedzia` z ToolsCarousel na SectionBento dla lepszej organizacji i visual hierarchy.
  - Uzasadnienie: Więcej narzędzi visible at once, kategorie size = priority, lepsze UX.
  - Pliki:
    - `app/(pl)/narzedzia/page.tsx` (refactor)
    - `components/ui/sections/SectionBento.tsx` (istniejący)
  - SEO: Better tools page organization
  - Kryteria akceptacji:
    - 8-10 narzędzi w bento grid
    - Large size dla popularnych (kontrast WCAG, WebP converter)
    - Medium dla średnio używanych
    - Small dla niszowych
    - Ikony z react-icons/ri
    - CTA "Użyj narzędzia" na każdym
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-146] Timeline procesu projektowego dla case studies - SectionTimeline**

  - Cel: Dodanie SectionTimeline na wybrane strony realizacji pokazującej timeline projektu (brief, design, development, launch).
  - Uzasadnienie: Story-telling, pokazanie profesjonalnego procesu, trust building.
  - Pliki:
    - `app/(pl)/realizacje/[slug]/page.tsx` (edycja warunkowa)
    - `components/ui/sections/SectionTimeline.tsx` (istniejący)
    - `data/pl/projects.json` (dodanie pola timeline[])
  - SEO: Process documentation w case studies
  - Kryteria akceptacji:
    - 4-6 kroków timeline per projekt
    - Alternating layout (desktop)
    - Vertical line przez środek
    - Ikony dla każdego milestone
    - Opis każdego etapu 2-3 zdania
    - Warunkowe renderowanie
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-147] Tabs dla kategorii projektów na /realizacje - SectionTabs**

  - Cel: Dodanie SectionTabs na stronie `/realizacje` grupującej projekty po typie (Strony, Sklepy, Branding, Marketing).
  - Uzasadnienie: Łatwiejsze filtrowanie portfolio, better UX przy dużej liczbie projektów.
  - Pliki:
    - `app/(pl)/realizacje/page.tsx` (refactor)
    - `components/ui/sections/SectionTabs.tsx` (istniejący)
  - SEO: Better content organization
  - Kryteria akceptacji:
    - 4-5 zakładek kategorie
    - ProjectCard grid w każdej zakładce
    - Active state wyraźny
    - Persist active tab w URL query (?category=strony)
    - Mobile: icons only w tablist
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-148] Metryki wydajności na stronach technicznych - SectionMetrics**

  - Cel: Dodanie SectionMetrics na stronie `/uslugi/strony-internetowe` i `/uslugi/sklepy-internetowe` pokazującej typowe metryki Arteon projects.
  - Uzasadnienie: Data-driven marketing, pokazanie expertise w performance.
  - Pliki:
    - `app/(pl)/uslugi/strony-internetowe/page.tsx` (edycja)
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx` (edycja)
    - `components/ui/sections/SectionMetrics.tsx` (istniejący)
  - SEO: Performance keyword enrichment
  - Kryteria akceptacji:
    - 4 metryki (Lighthouse score, Time to Interactive, CLS, LCP)
    - Progress bars z kolorami (green = good, amber = needs improvement)
    - Dane averaged z real Arteon projects
    - Tooltip explaining każdej metryki (opcjonalne)
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-149] Vertical tabs dla kategorii artykułów na /edukacja - SectionVerticalTabs**

  - Cel: Dodanie SectionVerticalTabs na głównej stronie `/edukacja` jako alternatywna nawigacja po kategoriach.
  - Uzasadnienie: Rich navigation, preview treści kategorii, SEO boost.
  - Pliki:
    - `app/(pl)/edukacja/page.tsx` (edycja lub alternativna sekcja)
    - `components/ui/sections/SectionVerticalTabs.tsx` (istniejący)
  - SEO: Category navigation enhancement
  - Kryteria akceptacji:
    - Tabs dla każdej kategorii bloga
    - Content: top 3 artykuły z kategorii + button "Zobacz wszystkie"
    - Desktop: fixed sidebar tabs
    - Mobile: horizontal scroll
    - Lazy load content w tabs
  - Weryfikacja: `npm run lint && npm run build`

- ❌ **[IDEA-150] Icon badges dla certyfikatów/partnerstw - SectionIconBadges**

  - Cel: Dodanie SectionIconBadges na stronie `/o-nas` pokazującej certyfikaty, partnerstwa, narzędzia których Arteon używa.
  - Uzasadnienie: Trust signals, pokazanie profesjonalizmu, partnerships visibility.
  - Pliki:
    - `app/(pl)/o-nas/page.tsx` (edycja)
    - `components/ui/sections/SectionIconBadges.tsx` (istniejący)
  - SEO: Authority signals
  - Kryteria akceptacji:
    - 8-12 badges (np. Google Partner, Facebook Partner, Semrush, Figma, React, Next.js)
    - Real logos/icons
    - Grayscale z color on hover (opcjonalne)
    - Pills layout centered
    - Alt text dla każdego badge
  - Weryfikacja: `npm run lint && npm run build`

### Treści i narzędzia - licznik słów

- ❌ **[IDEA-151] Artykuł: Ile słów powinien mieć artykuł blogowy w 2025?**

  - Kategorie: `SEO`, `Treści`
  - Slug: `ile-slow-powinien-miec-artykul-blogowy`
  - Cel: Wyjaśnienie optymalnej długości artykułów blogowych w kontekście SEO, różnic między typami treści, badań na temat korelacji długości i pozycji w Google.
  - Powiązane usługi: `/uslugi/tworzenie-tresci`, `/uslugi/blogi-internetowe`
  - Powiązane narzędzia: `/narzedzia/licznik-slow-i-znakow`
  - Typ artykułu: Edukacyjny
  - Wpływ SEO: Wysoki - topical authority dla klastra "treści"
  - Linkowanie: naturalny link do licznika słów jako narzędzia do sprawdzenia długości

- ❌ **[IDEA-152] Artykuł: Jak pisać opisy produktów w sklepie internetowym?**

  - Kategorie: `Sklepy`, `Treści`, `SEO`
  - Slug: `jak-pisac-opisy-produktow-w-sklepie-internetowym`
  - Cel: Wyjaśnienie struktury dobrego opisu produktu, optymalnej długości, elementów wpływających na konwersję i SEO, typowych błędów.
  - Powiązane usługi: `/uslugi/sklepy-internetowe`, `/uslugi/tworzenie-tresci`
  - Powiązane narzędzia: `/narzedzia/licznik-slow-i-znakow`
  - Typ artykułu: Edukacyjny
  - Wpływ SEO: Wysoki - long-tail frazy e-commerce
  - Linkowanie: naturalny link do licznika słów przy sekcji o optymalnej długości opisów

- ❌ **[IDEA-153] Narzędzie: Licznik znaków dla Allegro/OLX z limitami platform**

  - Cel: Wariant licznika słów/znaków z predefiniowanymi limitami dla platform e-commerce (Allegro, OLX, Amazon, eBay).
  - Uzasadnienie: Nowe frazy kluczowe (licznik znaków allegro, ile znaków opis olx), dedykowane UX dla sprzedawców.
  - Pliki:
    - `app/(pl)/narzedzia/(tools)/licznik-znakow-allegro-olx/page.tsx` (nowa strona)
    - `app/(pl)/narzedzia/(tools)/licznik-znakow-allegro-olx/instrukcja/page.tsx` (nowa instrukcja)
    - `lib/tools/text/platformLimits.ts` (nowy plik z limitami platform)
    - `components/sections/tools/PlatformCharCountTool.tsx` (nowy komponent lub wariant WordCountTool)
  - SEO:
    - URL: `/narzedzia/licznik-znakow-allegro-olx`
    - Title: `Licznik znaków dla Allegro i OLX - sprawdź limit opisu`
    - Description: `Darmowy licznik znaków z limitami dla Allegro, OLX, Amazon i eBay. Sprawdź, czy Twój opis produktu mieści się w limicie platformy.`
    - Schema: SoftwareApplication z featureList
  - Kryteria akceptacji:
    - Wybór platformy (Allegro, OLX, Amazon, eBay + opcja "Własny limit")
    - Wyświetlanie aktualnego limitu znaków dla wybranej platformy
    - Wizualna ocena (progress bar + kolor: zielony/żółty/czerwony)
    - Informacja o limitach dla tytułu i opisu (osobno)
    - FAQ z pytaniami o limity konkretnych platform
  - Wpływ SEO: Średni - nowe frazy, dedykowany intent
  - Weryfikacja: `npm run lint && npm run build`

---

# Zadania redakcyjne artykułów (CONTENT-EDIT)

**Cel:** Pełna redakcja wszystkich 40 artykułów zgodnie z `CONTENT_INSTRUCTIONS.md`.

## Frazy kluczowe z Ahrefs do zachowania/wzmocnienia

| Fraza                            | Pozycja | Volume | Artykuł |
| -------------------------------- | ------- | ------ | ------- |
| `google moja firma`              | 2       | 26K    | #23     |
| `responsywność`                  | 4       | 3.5K   | #24     |
| `favicon`                        | 4       | 3.2K   | #32     |
| `content marketing`              | 5       | 4.8K   | #17     |
| `społeczny dowód słuszności`     | 5       | 1.2K   | #13     |
| `regulamin sklepu internetowego` | 5       | 1.0K   | #3      |
| `czcionka szeryfowa`             | 3       | 900    | #10     |
| `czcionka bezszeryfowa`          | 3       | 900    | #10     |
| `certyfikat ssl co to`           | 5       | 700    | #25     |
| `stopka mailowa`                 | 4       | 600    | #31     |
| `meta description`               | 5       | 600    | #26     |
| `efekt zakotwiczenia`            | 5       | 400    | #12     |
| `social proof`                   | 5       | 400    | #13     |
| `png na webp`                    | 2       | 450    | #37     |

## Zakres redakcji każdego artykułu

1. **Intencja wyszukiwania** - czy wstęp odpowiada na pytanie z tytułu
2. **Ton** - usunięcie fraz AI ("krok po kroku", "wyobraź sobie", "kompletny przewodnik")
3. **Nagłówki** - czy są pytaniami prowadzącymi
4. **Linkowanie wewnętrzne** - min. 6-8 linków
5. **Linkowanie zewnętrzne** - min. 4-6 linków z `target='_blank' rel='noopener noreferrer'`
6. **Excerpt** - 220-230 znaków
7. **FAQ** - czy pytania są zgodne z intencją
8. **CTA** - czy przyciski są opisowe

## Lista zadań

Plik: `data/pl/blog.json` | Weryfikacja: nie wymagana (COPY-only)

| #   | ID              | Slug                                                                                | Kategoria      | Ahrefs |
| --- | --------------- | ----------------------------------------------------------------------------------- | -------------- | ------ |
| 1   | CONTENT-EDIT-01 | `czym-jest-strona-bledu-404-i-dlaczego-warto-ja-zaprojektowac`                      | Strony         |        |
| 2   | CONTENT-EDIT-02 | `czym-jest-kanibalizacja-slow-kluczowych-i-jak-jej-unikac`                          | SEO            |        |
| 3   | CONTENT-EDIT-03 | `regulamin-sklepu-internetowego-co-musi-zawierac`                                   | Sklepy         | ✓      |
| 4   | CONTENT-EDIT-04 | `co-to-jest-newsletter-i-czy-warto-go-prowadzic`                                    | Marketing      |        |
| 5   | CONTENT-EDIT-05 | `szybkosc-ladowania-strony-a-pozycja-w-google`                                      | SEO            |        |
| 6   | CONTENT-EDIT-06 | `breadcrumbs-sciezka-nawigacji-na-stronie`                                          | UX             |        |
| 7   | CONTENT-EDIT-07 | `dlaczego-pusta-przestrzen-na-stronie-zwieksza-czytelnosc`                          | UX             |        |
| 8   | CONTENT-EDIT-08 | `dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa`         | Bezpieczenstwo |        |
| 9   | CONTENT-EDIT-09 | `darmowa-dostawa-vs-nizsza-cena`                                                    | Sklepy         |        |
| 10  | CONTENT-EDIT-10 | `czcionki-szeryfowe-vs-bezszeryfowe`                                                | Grafika        | ✓      |
| 11  | CONTENT-EDIT-11 | `czym-jest-paradoks-wyboru-i-dlaczego-mniej-opcji-moze-zwiekszyc-sprzedaz`          | Psychologia    |        |
| 12  | CONTENT-EDIT-12 | `efekt-zakotwiczenia-jak-pierwsza-cena-wplywa-na-postrzeganie-wartosci`             | Psychologia    | ✓      |
| 13  | CONTENT-EDIT-13 | `social-proof-spoleczny-dowod-slusznosci`                                           | Psychologia    | ✓      |
| 14  | CONTENT-EDIT-14 | `mapa-strony-dla-uzytkownikow-dlaczego-warto-ja-miec`                               | UX             |        |
| 15  | CONTENT-EDIT-15 | `czym-jest-linkowanie-wewnetrzne-i-jak-wplywa-na-seo-strony`                        | SEO            |        |
| 16  | CONTENT-EDIT-16 | `kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie`                                 | Dostępność     |        |
| 17  | CONTENT-EDIT-17 | `czym-jest-content-marketing`                                                       | Marketing      | ✓      |
| 18  | CONTENT-EDIT-18 | `e-mail-marketing-dla-malych-firm`                                                  | Marketing      |        |
| 19  | CONTENT-EDIT-19 | `co-sprawdzic-przed-uruchomieniem-strony`                                           | Strony         |        |
| 20  | CONTENT-EDIT-20 | `jak-przygotowac-grafike-do-postow-w-mediach-spolecznosciowych`                     | Grafika        |        |
| 21  | CONTENT-EDIT-21 | `jak-wybrac-domene-i-hosting-dla-strony-firmowej`                                   | Strony         |        |
| 22  | CONTENT-EDIT-22 | `jak-mierzyc-skutecznosc-strony-internetowej`                                       | SEO            |        |
| 23  | CONTENT-EDIT-23 | `jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma`                             | SEO            | ✓      |
| 24  | CONTENT-EDIT-24 | `czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie`                            | UX             | ✓      |
| 25  | CONTENT-EDIT-25 | `czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje`                    | Bezpieczeństwo | ✓      |
| 26  | CONTENT-EDIT-26 | `meta-title-i-description-jak-je-napisac`                                           | SEO            | ✓      |
| 27  | CONTENT-EDIT-27 | `materialy-drukowane-dla-firmy-ktore-zamowic`                                       | Druk           |        |
| 28  | CONTENT-EDIT-28 | `kody-qr-w-materialach-reklamowych`                                                 | Grafika        |        |
| 29  | CONTENT-EDIT-29 | `jak-dobrac-kolory-do-strony-internetowej`                                          | Grafika        |        |
| 30  | CONTENT-EDIT-30 | `jak-przygotowac-sklep-internetowy-do-pozycjonowania`                               | SEO            |        |
| 31  | CONTENT-EDIT-31 | `jak-przygotowac-profesjonalna-stopke-mailowa`                                      | Branding       | ✓      |
| 32  | CONTENT-EDIT-32 | `favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie`       | Zdjęcia        | ✓      |
| 33  | CONTENT-EDIT-33 | `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony`                   | SEO            |        |
| 34  | CONTENT-EDIT-34 | `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`                               | Grafika        |        |
| 35  | CONTENT-EDIT-35 | `ile-czasu-trwa-pozycjonowanie-strony`                                              | SEO            |        |
| 36  | CONTENT-EDIT-36 | `czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`    | SEO            |        |
| 37  | CONTENT-EDIT-37 | `jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp` | Zdjęcia        | ✓      |
| 38  | CONTENT-EDIT-38 | `jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`      | SEO            |        |
| 39  | CONTENT-EDIT-39 | `jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`                             | Grafika        |        |
| 40  | CONTENT-EDIT-40 | `dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`          | SEO            |        |

## Tytuły artykułów (pełne)

1. Czym jest strona błędu 404 i dlaczego warto ją zaprojektować?
2. Czym jest kanibalizacja słów kluczowych i jak jej unikać?
3. Co to jest regulamin sklepu internetowego i co musi zawierać?
4. Co to jest newsletter i czy warto go prowadzić?
5. Dlaczego szybkość ładowania strony wpływa na pozycję w Google?
6. Czym jest ścieżka nawigacji na stronie i dlaczego warto ją mieć?
7. Dlaczego pusta przestrzeń na stronie zwiększa czytelność?
8. Dlaczego regularne aktualizacje WordPressa są kluczowe dla bezpieczeństwa?
9. Darmowa dostawa vs niższa cena: co bardziej przekonuje do zakupu?
10. Czcionki szeryfowe i bezszeryfowe: czym się różnią i kiedy używać których?
11. Czym jest paradoks wyboru i dlaczego mniej opcji może zwiększyć sprzedaż?
12. Efekt zakotwiczenia: jak pierwsza cena wpływa na postrzeganie wartości?
13. Czym jest social proof i dlaczego opinie innych wpływają na nasze decyzje?
14. Mapa strony dla użytkowników: dlaczego warto ją mieć i jak powinna wyglądać?
15. Czym jest linkowanie wewnętrzne i jak wpływa na SEO strony?
16. Kontrast kolorów na stronie: dlaczego ma znaczenie i jak go sprawdzić?
17. Czym jest content marketing i jak pomaga firmom pozyskiwać klientów?
18. E-mail marketing dla małych firm: dlaczego warto i na co zwrócić uwagę?
19. Co sprawdzić przed uruchomieniem nowej strony internetowej?
20. Jak przygotować grafikę do postów w mediach społecznościowych?
21. Jak wybrać domenę i hosting dla strony firmowej?
22. Jak mierzyć skuteczność strony internetowej? Podstawy analityki
23. Jak założyć i zoptymalizować profil Google Moja Firma?
24. Czym jest responsywność strony i dlaczego ma znaczenie?
25. Czym jest certyfikat SSL i dlaczego każda strona go potrzebuje?
26. Meta title i description: jak je napisać, żeby strona wyświetlała się lepiej w Google?
27. Materiały drukowane dla firmy: które zamówić na start?
28. Kody QR w materiałach reklamowych: gdzie je stosować i na co uważać?
29. Jak dobrać kolory do strony internetowej lub sklepu?
30. Jak przygotować sklep internetowy do pozycjonowania?
31. Jak przygotować profesjonalną stopkę mailową?
32. Favicon: co to za ikona, jak ją stworzyć i przygotować, aby działała poprawnie?
33. FAQ na stronie: jak pisać pytania, które wspierają pozycję strony?
34. Jak kolorystyka wpływa na decyzje zakupowe klientów?
35. Ile czasu trwa pozycjonowanie strony firmowej i kiedy widać efekty?
36. Czy lokalne firmy potrzebują bloga na stronie internetowej, aby rosnąć w Google?
37. Jak zoptymalizować zdjęcia na stronę WWW, aby była szybsza - rozmiary, formaty i WebP
38. Jak pisać treści na stronie internetowej, aby być wyżej w wyszukiwarce Google?
39. Jak identyfikacja wizualna firmy zwiększa zaufanie wśród klientów?
40. Dlaczego strona internetowa nie wyświetla się w Google i jak to naprawić?

---

**Status:** Do wklejenia do `TASKS.md` po zatwierdzeniu przez użytkownika.
