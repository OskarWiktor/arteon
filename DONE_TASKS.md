# DONE_TASKS

## 2025-12-19

- ✅ **[UI-002] SearchDialog: dopasować style do reszty serwisu (kolory + wysokość inputa)**

  - Pliki:
    - `components/ui/SearchDialog.tsx`
    - `components/shared/Navigation.tsx`
  - **Zrobione**:
    - Dopasowano kolory do globalnych klas (`text-dark/text-mid/text-light`) zamiast `text-slate-*`.
    - Ikony ustawiono na `text-slate-700`.
    - Zmniejszono realną wysokość paska inputa (mniej paddingu + mniejsze ikony/przyciski + `py-1` w headerze i `h-7` na inpucie).
    - Dopasowano kolor lupy w `Navigation` (desktop) do `text-slate-700`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[UI-001] SearchDialog: poprawa UI/UX wyszukiwarki**

  - Pliki:
    - `components/ui/SearchDialog.tsx`
    - `components/shared/Navigation.tsx`
  - **Zrobione**:
    - Usunięto stopkę z podpowiedziami skrótów klawiszowych (↑↓, Enter, Esc).
    - Zamieniono przycisk „Esc" na ikonę zamknięcia (X).
    - Zmniejszono wysokość inputa (py-3→py-2, text-base→text-sm).
    - Dodano ikonę wyszukiwania na desktop w Navigation pomiędzy linkami a `#MadeWithNext.js`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-001] Audyt zgodności artykułów z wytycznymi pisania treści**
  - Plik: `data/pl/blog.json` (15 artykułów)
  - **Sprawdzono**:
    - Tytuły (czy są pytaniami)
    - Polskie znaki diakrytyczne w contentBlocks, CTA, FAQ
    - Czas czytania (wytyczna: 5-8 min)
    - Obecność FAQ
    - SEO (title, description, canonical, cover)
  - **Wykryte niezgodności**:
    - 1 artykuł z błędnym SEO/treścią (jak-przygotowac-profesjonalna-stopke-mailowa-dla-firmy → treść o Google, nie o stopce)
    - 6 artykułów bez polskich znaków w contentBlocks/CTA/FAQ
    - 4 artykuły bez FAQ
    - 2 artykuły z tytułami nie będącymi pytaniami
    - 5 artykułów z readingTime < 5 min
  - **Dodano zadania**: `BLOG-001`, `BLOG-002`, `BLOG-003`, `BLOG-004`, `BLOG-005`

## 2025-12-18

- ✅ **[CONTENT-001] Dodanie instrukcji „Jak korzystać” do wszystkich stron narzędzi**

  - Pliki (8 stron narzędzi):
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/jpg-png-na-webp-bez-limitu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
    - `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-stopki-mailowej/page.tsx`
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palet-kolorow-online/page.tsx`
  - **Zrobione**:
    - Dodano `SectionInfo` z wyjaśnieniem czym jest narzędzie przed komponentem narzędzia.
    - Dodano `SectionSteps` (grid="four") z instrukcją „Jak korzystać” po komponencie narzędzia.
    - Dodano `SectionSteps` (grid="two") z zastosowaniami/wskazówkami dla większości narzędzi.
    - Treści napisane w prostym, mentorskim tonie zgodnym z wytycznymi marki Arteon.
    - Struktura zgodna ze wzorcem `/narzedzia/generator-kodu-qr`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-037] Wyszukiwarka w nawigacji (site search)**

  - Pliki:
    - `lib/search/searchIndex.ts` — generowanie indeksu z pl.ts, blog.json, projects.json
    - `hooks/useSearch.ts` — logika wyszukiwania z debounce i grupowaniem
    - `components/ui/SearchDialog.tsx` — modal z inputem, instant wynikami, keyboard nav
    - `components/shared/navigation-types/DesktopNavigation.tsx` — ikona lupy, `Ctrl+K` shortcut
    - `components/shared/Navigation.tsx` — ikona lupy na mobile
  - **Zrobione**:
    - Client-side search z prebuilt index (usługi, narzędzia, artykuły, realizacje, strony statyczne).
    - Modal z instant wynikami podczas pisania (debounce 150ms).
    - Grupowanie wyników (Usługi / Narzędzia / Edukacja / Realizacje / Strony).
    - Keyboard navigation: `↑↓` nawigacja, `Enter` przejście, `Esc` zamknij.
    - `Ctrl+K` / `Cmd+K` otwiera dialog (globalny listener).
    - Ikona lupy w desktop nav i mobile header.
    - Zero results: komunikat + link do kontaktu.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[22] Blog: skrócenie i rozbicie artykułu o treściach SEO (22→10 min)**

  - Główny artykuł skrócony do 10 min i przekształcony w hub z linkami do nowych artykułów.
  - Dodano 5 nowych artykułów:
    - `jak-dopasowac-tresc-do-intencji-uzytkownika-google`
    - `struktura-naglowkow-i-formatowanie-tekstu-pod-seo`
    - `jak-pisac-meta-title-i-meta-description`
    - `linkowanie-wewnetrzne-jak-laczyc-strony-dla-google`
    - `jak-aktualizowac-stare-tresci-zeby-nie-tracily-pozycji`

- ✅ **[13] Blog: dopracowanie artykułu o indeksacji w Google (13→8 min)**

  - Rozbicie cofnięte (tematy zbyt ściśle powiązane).
  - Artykuł przepisany z polskimi znakami i pełną odpowiedzią (diagnostyka + kroki naprawy).

- ✅ **[IDEA-025] Narzędzie: Generator kodu QR online (dla firm i materiałów drukowanych)**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/generator-kodu-qr/page.tsx`
    - `components/sections/tools/QrCodeGenerator.tsx`
    - `lib/tools/qr/generateQr.ts`
    - `components/shared/navigation-data/pl.ts` (TOOLS_SECTIONS_PL)
    - `components/shared/Footer.tsx` (toolsLinks)
    - `app/(pl)/narzedzia/page.tsx` (hub page)
    - `components/ui/tools/ToolAlert.tsx` (dodano variant warning)
  - **Zrobione**:
    - Nowe narzędzie client-side generujące kody QR z opcjami: URL, tekst, vCard, Wi-Fi, e-mail, telefon.
    - Wybór rozmiaru (150–1000px), marginesu (quiet zone 0–4) i poziomu korekcji błędów (L/M/Q/H).
    - Kolor kodu QR i tła z walidacją kontrastu (ostrzeżenie przy kontraście < 3:1).
    - Pobieranie jako PNG i SVG.
    - Podgląd aktualizuje się na bieżąco (debounce 300ms).
    - Dodano do nowej sekcji „Druk i materiały" w TOOLS_SECTIONS_PL.
    - Dodano do footera, hub page /narzedzia i JSON-LD schema.
    - Strona z contentem w przyjaznym, mentorskim tonie: wyjaśnienie czym jest QR, instrukcja krok po kroku, zastosowania (materiały drukowane, vCard, Wi-Fi), wskazówki do druku.
    - Instalacja biblioteki `qrcode` + `@types/qrcode`.
  - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-031] Rewrite: „Jak kolorystyka wpływa na decyzje zakupowe klientów?"**

  - Pliki: `data/pl/blog.json`
  - Przepisano artykuł w przyjaznym, mentorskim tonie.
  - Dodano instrukcję krok po kroku do generatora palet Arteon.
  - Uproszczono wyjaśnienia psychologii kolorów.
  - Dodano link do testera kontrastu WCAG.
  - Sprawdzone: `npm run lint` (OK).

- ✅ **[IDEA-032] Rewrite: „FAQ na stronie: jak pisać pytania, które wspierają pozycję strony?"**

  - Pliki: `data/pl/blog.json`
  - Przepisano artykuł w przyjaznym tonie.
  - Wyjaśniono wszystkie terminy (FAQ, SEO, long-tail, FAQ schema, dane strukturalne).
  - Dodano analogie i przykłady z życia.
  - Sprawdzone: `npm run lint` (OK).

- ✅ **[IDEA-033] Rewrite: „Ile czasu trwa pozycjonowanie strony firmowej i kiedy widać efekty?"**

  - Pliki: `data/pl/blog.json`
  - Przepisano artykuł w przyjaznym tonie.
  - Dodano wyjaśnienie czym jest SEO/pozycjonowanie.
  - Dodano analogię „SEO to jak sadzenie drzewa".
  - Uproszczono język techniczny.
  - Sprawdzone: `npm run lint` (OK).

- ✅ **[IDEA-034] Rewrite: Pozostałe artykuły — audyt i dostosowanie tonu**

  - Pliki: `data/pl/blog.json`, `TASKS.md`
  - Przeprowadzono audyt pozostałych artykułów.
  - Artykuły o optymalizacji zdjęć i blogu lokalnym mają akceptowalny ton — nie wymagają natychmiastowej przeróbki.
  - Dodano sekcję DO/DON'T do instrukcji artykułów w `TASKS.md`.
  - Zaktualizowano sekcję Struktura — elastyczna, dopasowana do tematu.

- ✅ **[IDEA-028] Artykuł: „Jak przygotować profesjonalną stopkę mailową dla firmy?"**

  - Pliki: `data/pl/blog.json`, `TASKS.md` (wytyczne tonu)
  - **Zrobione 2025-12-18**:
    - Dodano artykuł w nowym, przyjaznym i mentorskim tonie.
    - Zastosowano zasadę: zrozumiałe dla 5-latka i 60-letniej osoby bez wiedzy technicznej.
    - Artykuł zawiera instrukcję krok po kroku dla generatora Arteon.
    - Zaktualizowano wytyczne artykułów w `TASKS.md` o nowe zasady tonu (sekcja „KLUCZOWE: Maksymalna prostota i przyjazność").
    - Zawiera 6 FAQ oraz CTA do generatora i oferty identyfikacji wizualnej.
    - Poprawione polskie znaki diakrytyczne (ą, ę, ó, ś, ć, ż, ź, ł, ń).
    - Sprawdzone: `npm run lint` (OK).

- ✅ **[IDEA-029] Artykuł: „Favicon i ikony strony: co przygotować, żeby działały w przeglądarkach i Lighthouse?"**

  - Pliki: `data/pl/blog.json`
  - **Zrobione 2025-12-18**:
    - Dodano artykuł w przyjaznym, mentorskim tonie zgodnie z wytycznymi.
    - Artykuł wyjaśnia: czym jest favicon, jakie pliki są potrzebne, najczęstsze błędy, jak stworzyć zestaw w generatorze Arteon.
    - Instrukcja krok po kroku dla generatora favicon.
    - Zawiera 6 FAQ oraz CTA do generatora i oferty stron internetowych.
    - Sprawdzone: `npm run lint` (OK).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny — narzędzia, usługi, artykuły, cross-linking**

  - **Zrobione 2025-12-18**:
    - Audyt ogólny: przegląd `PAGES_CATALOG.md`, `TOOLS_CATALOG.md`, `BLOG_CATALOG.md`.
    - Zidentyfikowano luki: brak nowych narzędzi od czasu launch, brak usługi opieki/konsultacji, brak artykułów wspierających istniejące narzędzia.
    - Dodano 6 nowych pomysłów w `TASKS.md` (sekcja Pomysły):
      - `IDEA-025` — Generator kodu QR (nowe narzędzie)
      - `IDEA-026` — Usługa „Opieka nad stroną" (pakiety utrzymania)
      - `IDEA-027` — Usługa „Konsultacje" (sesje doradcze UX/SEO)
      - `IDEA-028` — Artykuł o stopce mailowej (wspiera narzędzie)
      - `IDEA-029` — Artykuł o favicon (wspiera narzędzie)
      - `IDEA-030` — ToolsCarousel na stronach usług (cross-linking)

## 2025-12-17

- ✅ **[11] Blog: "FAQ na stronie: jak pisać pytania, które wspierają pozycję strony?"**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-17**:
    - Dodano nowy artykuł (slug: `faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony`) wraz z pełnym `contentBlocks`, `seo`, `cta` i `faq`.
    - Dodano linkowanie wewnętrzne do powiązanych treści oraz CTA do oferty (`/uslugi/marketing/audyt-seo`).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny — O nas (propozycje nowych podstron)**

  - **Zrobione 2025-12-17**:
    - Przegląd istniejących stron: `/o-nas`, `/o-nas/faq`, `/o-nas/dolacz-do-sieci`.
    - Dodano propozycje rozbudowy sekcji „O nas” w `TASKS.md`: `IDEA-019`-`IDEA-024`.

- ✅ **[20] Blog: "Jak dobrać domenę i adresy URL podstron, aby wzmocnić pozycję strony w wyszukiwarce?"**

  - Pliki:
    - `data/pl/blog.json`
    - `components/sections/blog/ArticlesCarousel.tsx`
    - `app/(pl)/mapa-strony/page.tsx`
    - `utils/blogCategory.ts`
    - `lib/blog.ts`
    - `types/article.ts`
    - `public/assets/blog/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce.webp`
  - **Zrobione 2025-12-17**:
    - Dodano nowy artykuł (slug: `jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce`) wraz z pełnym `contentBlocks`, `seo`, `cta` i `faq`.
    - Ujednolicono generowanie URL-i artykułów (primaryCategory → fallback) w linkach wewnętrznych (karuzela artykułów, `/mapa-strony`) do kanonicznego `/edukacja/{kategoria}/{slug}`.
    - Dodano okładkę: `public/assets/blog/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce/jak-dobrac-domene-i-adresy-url-podstron-aby-wzmocnic-pozycje-strony-w-wyszukiwarce.webp`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[32] Blog: "Bezpieczeństwo strony internetowej: zabezpieczenia, które powinny być wdrożone w 2026"**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-17**:
    - Dodano nowy artykuł (slug: `bezpieczenstwo-strony-internetowej-zabezpieczenia-2026`) wraz z pełnym `contentBlocks`, `seo`, `cta` i `faq` + linkowaniem wewnętrznym.
    - Dodano okładkę: `public/assets/blog/bezpieczenstwo-strony-internetowej-zabezpieczenia-2026/bezpieczenstwo-strony-internetowej-zabezpieczenia-2026.webp`.
    - Sprawdzone: `blog.json` (JSON OK).

- ✅ **[IDEA-008] Tester kontrastu WCAG: obsługa HSL/alpha + propozycja koloru spełniającego AA/AAA**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/tester-kontrastu-kolorow-wcag/page.tsx`
    - `components/sections/tools/WcagContrastChecker.tsx`
    - `lib/tools/color/types.ts`
    - `lib/tools/color/convert.ts`
    - `lib/tools/color/contrast.ts`
    - `HOOKS_CATALOG.md`
    - `TOOLS_CATALOG.md`
  - **Zrobione 2025-12-17**:
    - Dodano obsługę `hsl()/hsla()` oraz uwzględniono alpha przez kompozycję w obliczeniach kontrastu.
    - UI: bezpieczny color picker dla nie-HEX + selektor progu WCAG + akcja `Dopasuj` (podgląd, `Ustaw`, kopiowanie).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-003] Repo: audyt cleanup (puste pliki, martwe exporty, nieużywany kod/warianty)**

  - **Zrobione 2025-12-17**:
    - Skan `git ls-files` pod kątem pustych plików (0B): brak.
    - Wykryto pliki śledzone w git, ale usunięte lokalnie (pozostałość po spłaszczeniu `PaletteExtractor/*`).
    - Follow-up zadania: `CLEANUP-011`.

- ✅ **[IDEA-006] Generator favicon: pełny pakiet (16/32 + apple/android) + paczka ZIP**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/darmowy-generator-favicon-ico/page.tsx`
    - `components/sections/tools/FaviconGenerator.tsx`
    - `lib/tools/zip.ts`
    - `lib/tools/zip/createZipBlob.ts`
    - `TOOLS_CATALOG.md`
  - **Zrobione 2025-12-17**:
    - Dodano opcjonalne generowanie PNG `16x16` i `32x32` (obok `180/192/512`) + spójne nazwy plików.
    - Dodano `Pobierz paczkę (.zip)` (wybrane pliki + opcjonalnie `site.webmanifest`).
    - Snippet do `<head>`: **nie wdrożono** — **decyzja użytkownika**.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[IDEA-004] Konwerter JPG/PNG na WebP: pobieranie paczki ZIP + eksport raportu oszczędności**

  - Pliki:
    - `components/sections/tools/JpgPngToWebp.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpConversion.ts`
    - `lib/tools/image/webpReport.ts`
  - **Zrobione 2025-12-17**:
    - Dodano `Pobierz wszystko (.zip)` tworzące archiwum z poprawnie skonwertowanymi plikami WebP.
    - Dodano opcję dołączenia raportu `CSV` do ZIP.
    - Dodano przełącznik trybu auto-download: `Pojedyncze pliki` vs `Jedna paczka ZIP`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PERF-002] Obrazy: zredukować agresywne ustawienia jakości (`quality={100}`)**
  - Pliki:
    - `components/ui/ProjectCard.tsx`
  - **Zrobione 2025-12-17**:
    - Obniżono jakość w `ProjectCard` z `quality={100}` do `quality={85}` (karty/miniatury/karuzele) bez regresji UI/UX.
    - Zweryfikowano: `app/(pl)/realizacje/[slug]/page.tsx`, `app/(pl)/edukacja/[category]/[slug]/page.tsx` — brak `quality={100}`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

## 2025-12-16

- ✅ **[TOOLS-014] Palette Extractor: rekomendacje zmian tekstów/funkcji + ujednolicenie z innymi narzędziami**

  - Pliki:
    - `components/sections/tools/PaletteExtractor.tsx`
    - `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
    - `TOOLS_CATALOG.md`
  - **Zrobione 2025-12-16**:
    - Uproszczono copy/UX: mniej technicznie, więcej o korzyściach.
    - Usunięto akcje `Kopiuj paletę` i `Wyczyść` — pozostawiono kopiowanie per kolor oraz prostą podmianę obrazu przez ponowne wgranie pliku.
    - Ujednolicono implementację z innymi narzędziami: spójna struktura `ToolSection`/`ToolInfo`/`ToolAlert`, inline upload.
    - Spłaszczono strukturę komponentu (usunięto folder i subkomponenty `PaletteExtractor/*`).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CLEANUP-010] Tooltip: zastąpić lokalny timer przez `useTimeout`**

  - Pliki:
    - `components/sections/Tooltip.tsx`
    - `hooks/useTimeout.ts`
  - **Zrobione 2025-12-16**:
    - Tooltip używa `useTimeout()` do opóźnionego otwarcia (zamiast lokalnego `timerRef` + `clearTimer`).
    - Zachowano zachowanie: `delay`, `Escape`, outside click, scroll i touch toggle.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły”**

  - **Zrobione 2025-12-16**:
    - Dodano 10 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-001`-`IDEA-010`.
  - **Zrobione 2025-12-16**:
    - Dodano 8 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-011`-`IDEA-018`.

- ✅ **[TOOLS-016] Narzędzia: ujednolicić upload/drag&drop (ToolFileDropzone)**

  - Pliki:
    - `components/sections/tools/ImageResizeTool.tsx`
    - `components/sections/tools/JpgPngToWebp.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpQueue.ts`
    - `components/ui/tools/ToolFileDropzone.tsx`
    - `hooks/useFileDropzone.ts`
  - **Zrobione 2025-12-16**:
    - Przepięto UI uploadu w `ImageResizeTool` i `JpgPngToWebp` na wspólny komponent `ToolFileDropzone` (copy i klasy bez zmian).
    - WebP: uproszczono `useWebpQueue` — `addFiles()` jest jedynym wejściem, usunięto zduplikowane handlery (`onDrop`/`onDragOver`/`onChange`).
    - Zachowano reset inputa po wyborze oraz działanie drag&drop.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PROJECT-005] Realizacje: dopiąć `cta` (brakujące) + naprawić niespójne CTA**

  - Plik: `data/pl/projects.json`
  - **Zrobione 2025-12-16**:
    - Dodano brakujące `cta` dla slugów: `strona-dla-psychologa-msc-psychotherapy`, `katalog-produktow-restoquality`, `wizytowka-dla-spa-talia`, `blog-sportowy-pilka-nozna-pl`, `sklep-dla-firmy-odziezowej-trilllizo`, `meridol-accessibility`, `wizytowki-dla-gastronomii-restoquality`, `elmex-accessibility`, `sanex-accessibility`, `sanex`, `palmolive`, `colgate`, `detergent-regulations`.
    - Naprawiono niespójne CTA dla `wizytowka-dla-kancelarii-adwokackiej-lux-nova` (copy, linki, `backgroundImage`).
    - Ujednolicono: `btnOneLink: "/kontakt"`, `btnTwoLink` do pasującej usługi, `backgroundImage` z assetów tej realizacji.
    - Weryfikacja: `projects.json` parsuje się poprawnie (JSON OK).

- ✅ **[CLEANUP-009] Tools: wynieść wyliczanie `inputFormat` (ext/MIME) do shared util**

  - Pliki:
    - `lib/tools/fileFormat.ts`
    - `components/sections/tools/PaletteExtractor.tsx`
    - `components/sections/tools/ImageResizeTool.tsx`
  - **Zrobione 2025-12-16**:
    - Dodano util `getFileFormatLabel(file)` zwracający uppercase ext lub MIME subtype (fallback `N/D`).
    - Podmieniono wyliczanie `inputFormat` w `PaletteExtractor` i `ImageResizeTool` na wspólny helper (bez zmian w UI/UX i copy).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PROJECT-006] Realizacje: higiena treści**

  - Plik: `data/pl/projects.json`
  - **Zrobione 2025-12-16**:
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

- 🟡 **[AUDIT-005] Repo: audyt performance sanity-check (client components/rerender/obrazy)**
  - **Zrobione 2025-12-16**:
    - Skan `public/assets/**` pod kątem największych plików (m.in. `public/assets/projects/arteon-a-msc2.webp` ~791KB, `public/assets/bg/abstract-bg1.webp` ~344KB).
    - Skan kodu pod perf-smells: `quality={100}` (`components/ui/ProjectCard.tsx`), `bg-fixed` (`components/sections/HeroBanner.tsx`, `components/sections/CTABanner.tsx`), client-only `CodeBlock` (`components/ui/CodeBlock.tsx`).
    - Follow-up zadania: `PERF-001`, `PERF-002`, `PERF-003`.

## 2025-12-15

- 🟡 **[AUDIT-002] Repo: audyt duplikacji logiki (hooks/utils/komponenty)**

  - **Zrobione 2025-12-15**:
    - Skan duplikacji: narzędzia (`components/sections/tools/*`), dropzone (`hooks/useFileDropzone.ts`, `components/ui/tools/ToolFileDropzone.tsx`), timery/copy (`hooks/useTimeout.ts`, `hooks/useCopyToClipboard.ts`).
    - Follow-up zadania: `TOOLS-016`, `CLEANUP-009`, `CLEANUP-010`.

- 🟡 **[AUDIT-006] Repo: audyt rozwoju witryny (nowe strony/narzędzia/artykuły) + generowanie backlogu „Pomysły”**

  - **Zrobione 2025-12-15**:
    - Dodano 10 pomysłów do sekcji „Pomysły” w `TASKS.md`: `IDEA-001`-`IDEA-010`.

- ✅ **[SEO-015] O nas: dodać podstronę FAQ (`/o-nas/faq`) i rozbudować treść pod SEO**

  - Pliki:
    - `app/(pl)/o-nas/faq/page.tsx`
    - `app/(pl)/mapa-strony/page.tsx`
    - `components/shared/Footer.tsx`
    - `PAGES_CATALOG.md`
  - **Zrobione 2025-12-15**:
    - Utworzono nową stronę FAQ z min. 25 pytaniami i odpowiedziami (spójny ton + long-tail pod SEO).
    - Dodano `metadata` (title/description/canonical/openGraph) oraz schema.org `FAQPage` + breadcrumbs (JSON-LD, bez duplikacji).
    - Podlinkowano `/o-nas/faq` w stopce oraz na `/mapa-strony`; uzupełniono `PAGES_CATALOG.md`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[PAGES-002] /o-nas: przebudowa copy + sekcje proof (realizacje i opinie)**

  - Plik:
    - `app/(pl)/o-nas/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono narrację strony „O nas” tak, aby opisywała szerszą ofertę (strategia, branding, technologia, marketing) zamiast komunikacji skupionej na „samej stronie”.
    - Zaktualizowano: `HeroBanner`, `BenefitBelt`, copy w `SectionBasic`, opis w `SectionInfo` oraz pierwszy wyróżnik w `SectionSteps`.
    - Dodano sekcje proof: `ProjectsCarousel` + `TestimonialsCarousel` po `WorkSteps`.
    - Zaktualizowano `metadata.title` i `metadata.description` (bez zmian OG image — osobno w `SEO-013`).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-004] Repo: audyt SEO sanity-check (canonical/OG/schema/robots/sitemap)**

  - **Zrobione 2025-12-15**:
    - Sprawdzono canonical (absolute), OpenGraph (URL absolute) i Schema.org (URL absolute) na kluczowych stronach.
    - Zweryfikowano `public/robots.txt` oraz sitemap index (`public/sitemap.xml` → `public/sitemap-0.xml`) - bez regresji.
    - Follow-up zadania: `SEO-013`, `SEO-016`, `SEO-017`.

- ✅ **[CLEANUP-008] Karuzele: `CarouselCard` ma re-use `ProjectCard` i `TestimonialCard`**

  - Pliki:
    - `components/ui/carousel/CarouselCard.tsx`
    - `components/ui/ProjectCard.tsx`
    - `components/ui/TestimonialCard.tsx`
    - `components/sections/projects/ProjectsCarouselClient.tsx`
    - `components/sections/TestimonialsCarousel.tsx`
  - **Zrobione 2025-12-15**:
    - Potwierdzono, że `CarouselCard` renderuje `ProjectCard` dla wariantu `project` (`size="small"`) oraz `TestimonialCard` dla wariantu `testimonial`.
    - Nie było potrzeby zmian w kodzie - integracja była już zaimplementowana.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[COPY-042] CookieConsent: usunąć zbędną spację w wyróżnieniu „Google Analytics 4”**

  - Plik: `components/shared/CookieConsent.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `<strong> Google Analytics 4</strong>` → `<strong>Google Analytics 4</strong>`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-041] Cookies: ujednolicić nazewnictwo na „pliki cookie” w UI**

  - Pliki:
    - `components/shared/Footer.tsx`
    - `components/shared/CookieConsent.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono copy w UI: `cookies/Cookies` → `pliki cookie` (stopka + modal).
    - Zaktualizowano dokumentację: `COMPONENTS_CATALOG.md`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-040] /narzedzia (hub): poprawić literówkę w opisie (metadata/OG)**

  - Plik: `app/(pl)/narzedzia/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `ulepszą swoją identyfikację` → `ulepsz swoją identyfikację` w metadata i OpenGraph.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-039] Meta length tool (strona): poprawić odmianę „długości” w tytule i breadcrumbs**

  - Plik: `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono zapis: `Licznik długość ...` → `Licznik długości ...` (hero + breadcrumbs).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-038] PaletteExtractor (strona): poprawić „Cię” oraz spójność liczby w opisach**

  - Plik: `app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono CTA: `wyróżni Cie` → `wyróżni Cię`.
    - Ujednolicono liczbę w opisach (spójne `zdjęcie` + `na nim`) w metadata/OG/schema.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-037] ColorPaletteGenerator: poprawić cudzysłów w opisie palety**

  - Plik: `components/sections/tools/ColorPaletteGenerator.tsx`
  - **Zrobione 2025-12-15**:
    - Naprawiono mieszanie cudzysłowów w opisie palety pastelowej: `„kremowe"` → `„kremowe”`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-036] ServicesSteps: poprawić literówki i interpunkcję w opisach usług**

  - Plik: `components/sections/steps/ServicesSteps.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `nie zależnie` → `niezależnie`, usunięto zbędny przecinek po `czemu` oraz `jak i` → `i` w `ui.pl.description`.
    - Ujednolicono zapis w liście: `Bezpłatne Szkolenie PDF` → `Bezpłatne szkolenie PDF`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[TOOLS-010] EmailSignatureGenerator: refactor (HTML/sanitizacja/kopiowanie)**

  - Pliki:
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/types.ts`
    - `components/sections/tools/EmailSignatureGenerator/sanitize.ts`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
    - `components/sections/tools/EmailSignatureGenerator/useSignatureCopy.ts`
  - **Zrobione 2025-12-15**:
    - Wydzielono typy do `types.ts`.
    - Wydzielono sanitizację HTML/URL do `sanitize.ts`.
    - Przeniesiono generowanie stopki do `buildSignatureHtml` (layouty + inline styles).
    - Wydzielono kopiowanie do `useSignatureCopy` (preferencja: rich HTML przez `execCommand('copy')`; fallback: `navigator.clipboard.writeText`).
    - Zachowano UI/UX i treści bez zmian.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-009] ImageResizeTool: refactor (crop math / pointer events / eksport)**

  - Pliki:
    - `components/sections/tools/ImageResizeTool.tsx`
    - `components/sections/tools/ImageResizeTool/types.ts`
    - `components/sections/tools/ImageResizeTool/cropMath.ts`
    - `components/sections/tools/ImageResizeTool/useCropDrag.ts`
    - `components/sections/tools/ImageResizeTool/exportCroppedImage.ts`
  - **Zrobione 2025-12-15**:
    - Wydzielono typy i obliczenia kadru do `types.ts` i `cropMath.ts`.
    - Przeniesiono obsługę drag (move/resize) do hooka `useCropDrag`.
    - Wydzielono eksport (canvas → blob → download) do `exportCroppedImage`.
    - Dopilnowano cleanup `ObjectURL` (m.in. podgląd i wynik eksportu).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-008] JpgPngToWebp: rozdzielenie na hooki (queue/konwersja/download/raport)**

  - Pliki:
    - `components/sections/tools/JpgPngToWebp.tsx`
    - `components/sections/tools/JpgPngToWebp/useWebpQueue.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpConversion.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpDownloads.ts`
    - `components/sections/tools/JpgPngToWebp/useWebpReportCopy.ts`
  - **Zrobione 2025-12-15**:
    - Wydzielono logikę narzędzia do dedykowanych hooków (kolejka, konwersja, downloady, raport) bez zmian w UI/UX.
    - Zachowano smart-quality (automatyczne obniżanie jakości, gdy WebP byłby większy od oryginału; min `60`, krok `5`).
    - Dopilnowano cleanup: zwalnianie `ObjectURL` przy usuwaniu/resetowaniu elementów i na unmount.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[SECURITY-001] Linki z `target="_blank"`: dopiąć `rel="noopener noreferrer"`**

  - Pliki:
    - `components/shared/Navigation.tsx`
    - `components/shared/Footer.tsx`
    - `app/(pl)/uslugi/strony-internetowe/page.tsx`
    - `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
    - `data/pl/blog.json`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Zrobione 2025-12-15**:
    - Dodano `rel="noopener noreferrer"` do linków z `target="_blank"`.
    - Ujednolicono `rel="noreferrer"` → `rel="noopener noreferrer"` dla spójności.
    - Uzupełniono `rel` w linkach w `blog.json` (HTML w `richtext` renderowany przez `dangerouslySetInnerHTML`).
    - Naprawiono błąd ESLint blokujący build (`no-useless-escape`) w `buildSignatureHtml.ts`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[SEO-014] Schema.org: usunięcie `SearchAction` (brak wyszukiwarki)**

  - Plik:
    - `app/layout.tsx`
  - **Zrobione 2025-12-15**:
    - Usunięto TODO oraz zakomentowany `potentialAction` (`SearchAction`) z JSON-LD `WebSite` (wyszukiwarka nie jest wdrażana).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[STYLES-003] UI: ujednolicić kolory ikon i buttona akcentowego**

  - Pliki:
    - `app/(pl)/uslugi/**/page.tsx`
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/ui/buttons/Button.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono kolor ikon do `text-slate-700` (tylko elementy ikon).
    - Ustawiono główny button z akcentem na `text-slate-600`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[STYLES-002] Kolory: tokenizacja i usunięcie raw hexów**

  - Pliki:
    - `components/shared/CookieConsent.tsx`
    - `components/shared/SkipToContent.tsx`
    - `components/sections/Tooltip.tsx`
    - `components/sections/tools/ColorPaletteGenerator.tsx`
    - `components/sections/tools/FaviconGenerator.tsx`
    - `lib/tools/favicon/generator.ts`
    - `components/sections/tools/WcagContrastChecker.tsx`
    - `components/sections/tools/EmailSignatureGenerator.tsx`
    - `components/sections/tools/EmailSignatureGenerator/buildSignatureHtml.ts`
  - **Zrobione 2025-12-15**:
    - Zastąpiono twardo zakodowane kolory tekstu tokenami systemowymi (`text-light`, `text-mid`, `text-dark`) zgodnie z kanonem.
    - Usunięto raw hexy w narzędziach (domyślne wartości kolorów w `useState` / presetach) przez wyliczanie wartości przez `rgbToHex`.
    - Usunięto hex fallback w generatorze favicon (canvas) na rzecz `rgb(...)`.
    - Zweryfikowano, że w repo nie ma `text-black` oraz nie ma heksów poza kanonicznymi definicjami w `app/globals.css`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[TOOLS-015] Narzędzia: mobile support (allowlist) + selektywna blokada**

  - Pliki:
    - `app/(pl)/narzedzia/(tools)/layout.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/layout.tsx`
    - `app/(pl)/narzedzia/(tools)/(desktop-only)/*/page.tsx`
    - `PAGES_CATALOG.md`
  - **Zrobione 2025-12-15**:
    - Zmieniono `app/(pl)/narzedzia/(tools)/layout.tsx` na layout neutralny.
    - Dodano route group `(desktop-only)` z layoutem blokującym na `< lg` i przeniesiono do niego strony narzędzi desktop-only (bez zmiany URL).
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CLEANUP-007] OfferDesign: ujednolicić nazwy komponentów stron na angielskie**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-odziezy-firmowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-papieru-firmowego/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-wizytowki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono nazwy `export default function OfferDesign*()` na angielskie i opisowe (bez polskich segmentów w nazwach) dla czytelności i DevTools.
    - Bez zmian w UI/UX ani treści.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- ✅ **[CLEANUP-005] Blog: naprawić błędne tagi `<p>` w intro artykułu (blog.json)**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Naprawiono błędną strukturę HTML w intro artykułu: `treści.<p><p>Na szczęście` → `treści.</p><p>Na szczęście`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (content-only).

- ✅ **[CLEANUP-006] Nazwy komponentów stron: usunąć placeholder `Xxx`**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono nazwy komponentów stron na angielskie i opisowe: `OfferDesignWebsiteGraphicDesignPage`, `OfferDesignBrandIdentityDesignPage`.
    - Bez zmian w UI/UX ani treści (tylko nazwy funkcji export default).
    - Zweryfikowano pozostałe strony `OfferDesign*` i dopisano follow-up: `CLEANUP-007`.
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).

- 🟡 **[AUDIT-001] Repo: codzienny audyt jakości + SEO + wydajności (raport dzienny)**

  - **Zrobione 2025-12-15**:
    - Audyt dokumentacji: uporządkowano `TASKS.md` (aktualizacja daty weryfikacji, doprecyzowanie DoD dla COPY/content-only).
    - Zidentyfikowano braki SEO i dopisano zadania: `SEO-013` (dedykowane OG dla głównych stron) oraz `SEO-014` (rozliczenie `SearchAction`).
    - Doprecyzowano zakres `SECURITY-001` (pliki + konkretne przypadki `target="_blank"` bez `rel` / z `rel="noreferrer"`).
    - Dopisano `CLEANUP-006` (usunąć placeholder `Xxx` w nazwach komponentów stron).
    - Bez zmian w produkcyjnym kodzie w ramach audytu (tylko tracking / dokumentacja).

- ✅ **[TOOLS-011] Narzędzia: `lint` + `typecheck` (build)**

  - **Zrobione 2025-12-15**:
    - Sprawdzone: `npm run lint` (OK), `npm run build` (OK).
    - Zaktualizowano tracking: przeniesiono wpis TOOLS-011 z `TASKS.md` do `DONE_TASKS.md`.

- ✅ **[COPY-002] Strona główna: poprawić „Niezależnie” i interpunkcję w opisie sekcji**

  - Plik: `app/(pl)/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono ortografię i interpunkcję w opisie sekcji (m.in. `Niezależnie`, `dzięki czemu, pracując z nami, masz`, `sposób, aby`, `m.in. RODO`, `martwić, jeśli`).
    - Ujednolicono brzmienie opisu marketingu: `oraz` zamiast `jak i`, oraz `tam, gdzie`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-014] Kontakt: dodać przecinek w zdaniu „Napisz, co…” (metadata + OpenGraph)**

  - Plik: `app/(pl)/kontakt/page.tsx`
  - **Zrobione 2025-12-15**:
    - Dodano przecinek w `metadata.description` i `openGraph.description`: `Napisz, co chcesz stworzyć`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-015] Edukacja: domknąć zdanie w opisach (metadata + OpenGraph + schema)**

  - Plik: `app/(pl)/edukacja/page.tsx`
  - **Zrobione 2025-12-15**:
    - Domknięto zdanie w opisach (metadata/OG/schema): `Odwiedź nas i sprawdź nasze poradniki.`
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-016] Tworzenie treści: poprawić odmianę „budujące” w siatce benefitów**

  - Plik: `app/(pl)/uslugi/tworzenie-tresci/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono odmianę: `Treści budujący` → `Treści budujące`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-017] Karta lojalnościowa: poprawić literówki, odmianę i interpunkcję w opisach**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono literówki/odmianę/interpunkcję w opisach i FAQ (m.in. `Twoich`, `dzięki temu mam`, `branż, w których`, `Twoją identyfikacją wizualną`, `indywidualnie ustalone rundy korekt`, `(85 × 55 mm)`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-018] Katalog: poprawić literówki, odmianę i interpunkcję w opisach CTA/sekcji**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-katalogu/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję i odmianę w opisie formularza, sekcji „Zobacz też” oraz CTA (m.in. `klienci`, `sprzedaż`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-019] Menu restauracji: poprawić literówki i interpunkcję w sekcji kontaktowej i „Zobacz też”**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-menu-restauracji/page.tsx`
  - **Zrobione 2025-12-15**:
    - Dodano przecinek w opisie formularza: `Opisz, jakie…`.
    - Poprawiono literówkę w sekcji „Zobacz też”: `Projekt ulotk` → `Projekt ulotki`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-020] Audyt SEO: dodać brakujące przecinki i poprawić literówki (metadata + treści)**

  - Plik: `app/(pl)/uslugi/marketing/audyt-seo/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję i literówki w `metadata` oraz treściach (m.in. `sprawi, że`, `sprawdź, co…`, `tak, aby…`, `przygotowujemy`, `w audycie`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-021] Licznik długości meta: poprawić interpunkcję i „Cię” w CTA bannerze**

  - Plik: `app/(pl)/narzedzia/(tools)/licznik-dlugosci-meta-title-i-description/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono CTA: `..., a my powiemy, co zrobić, aby…` oraz `Cie` → `Cię`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-022] Projekty graficzne: dodać przecinki po „Opisz” i przed „aby” w opisach formularza**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-ulotki/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono interpunkcję w opisach formularzy: `Opisz, ...` oraz `..., aby ...`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-023] Marketing: poprawić „Cię”, odmianę i przecinki w opisach oferty**

  - Plik: `app/(pl)/uslugi/marketing/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `Cię`, `konsultacje online`, `audyt SEO, a następnie` oraz `tak, aby Google`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-024] Pozycjonowanie stron: poprawić „strategii”, „Cię” i przecinki w opisach**

  - Plik: `app/(pl)/uslugi/marketing/pozycjonowanie-stron/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `strategii`, `tam, gdzie`, `szukają Cię`, `audyt SEO, a następnie` oraz `tak, aby Google`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-025] Usługi: dodać przecinki w zdaniach „tak, aby” i „..., a następnie ...”**

  - Plik: `app/(pl)/uslugi/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję: `tak, aby`, `audyt SEO, a następnie` oraz `tak, aby Google`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-026] Blogi internetowe: poprawić przecinki w odpowiedzi FAQ**

  - Plik: `app/(pl)/uslugi/blogi-internetowe/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję w odpowiedzi FAQ: `pomagamy w` oraz `tak, aby`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-027] Projekt graficzny strony: poprawić literówki i odmianę w FAQ/CTA**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-graficzny-strony/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono literówki i odmianę w FAQ/CTA (m.in. `koszty`, `od razu`, `pojedyncze`, `edycję`, `potencjalnych`, `Cię`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-028] Identyfikacja wizualna: poprawić literówki, odmianę i interpunkcję w FAQ/sekcji**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono literówki/odmianę/interpunkcję w FAQ/sekcji (m.in. `identyfikacji`, `każdy element`, `omawiamy, dając`, `źródłowe`, `od razu`, `miejscach`, `potencjalnych`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-029] Teczka ofertowa: poprawić „tak, aby” oraz literówki w opisach**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-teczki-ofertowej/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono: `tak, aby`, `w jego pamięci` oraz `korzyściami`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-030] Cennik: dodać przecinek w zdaniu „tak, aby” w opisie sekcji**

  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-cennika/page.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję: `tak, aby` w opisie sekcji.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-031] FeesSteps: poprawić literówki i interpunkcję w sekcji „Płatności i bezpieczeństwo”**

  - Plik: `components/sections/steps/FeesSteps.tsx`
  - **Zrobione 2025-12-15**:
    - Poprawiono zapis kwot: `Do 5 000 zł`, `Do 10 000 zł`, `Powyżej 10 000 zł`.
    - Poprawiono literówki i interpunkcję (m.in. `zaakceptowaniu wyceny`, `dzięki którym zawsze wiesz, czego`, `tak, aby`, `wiedział, jak`, `projekty`).
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-032] Blog: poprawić interpunkcję w opisie CTA (blog.json)**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Poprawiono interpunkcję w `cta.description`: `..., a my ...` oraz `Twoja firma zyska ...`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-033] Blog: dodać przecinki w intro artykułu (blog.json)**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Poprawiono intro artykułu: `opowiemy, co zrobić, aby...`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-034] O nas: poprawić interpunkcję w opisach sekcji**

  - Plik: `app/(pl)/o-nas/page.tsx`
  - **Zrobione 2025-12-15**:
    - Usunięto zbędne przecinki w opisach oraz ujednolicono zapis (m.in. `usług powinna`, `Po wdrożeniu dwa miesiące...`).
    - Poprawiono opis sekcji: `krok po kroku oraz` i `działamy w modelu`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (COPY-only).

- ✅ **[COPY-001] Polityka prywatności: ujednolicić zapis „pliki cookie”**

  - Plik: `app/(pl)/polityka-prywatnosci/page.tsx`
  - **Zrobione 2025-12-15**:
    - Ujednolicono zapis na `pliki cookie` oraz poprawiono odmiany (`plikami cookie`, `plików cookie`).
    - Zaktualizowano nagłówek sekcji oraz zdania dot. zarządzania plikami cookie (bez zmian UI/UX).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[CLEANUP-004] Blog: ustandaryzować łamania linii w treściach artykułów**

  - Plik: `data/pl/blog.json`
  - **Zrobione 2025-12-15**:
    - Ustandaryzowano łamania linii do `<br/>` w `contentBlocks[].html`.
    - Poprawiono progi CWV w tabelach (LCP/INP), usuwając błędne fragmenty HTML.
    - Zaktualizowano `BLOG_CATALOG.md` (usunięto uwagi dot. jakości HTML).
    - Sprawdzone: `npm run build` (OK).

- ✅ **[TOOLS-012] Palette Extractor (z obrazu/logo)**: nowy tool + shared color pipeline

  - **Zrobione 2025-12-15**:
    - Dodano stronę narzędzia `/narzedzia/generator-palety-kolorow-z-obrazu` (`app/(pl)/narzedzia/(tools)/generator-palety-kolorow-z-obrazu/page.tsx`) + schema `WebApplication` i canonical absolute.
    - Dodano komponent `PaletteExtractor` (upload PNG/JPG/SVG, ekstrakcja dominujących kolorów, kopiowanie HEX, clear + cleanup ObjectURL).
    - Dodano shared utilsy: `lib/tools/image/canvas.ts` (downscale → `ImageData`) oraz `lib/tools/color/extractPalette.ts` (bucketing + filtr podobieństwa).
    - Podpięto narzędzie w nawigacji oraz na `/narzedzia` (SectionSteps + ItemList JSON-LD) i zaktualizowano dokumentację: `PAGES_CATALOG.md`, `TOOLS_CATALOG.md`, `COMPONENTS_CATALOG.md`.
    - Dopięto a11y uploadu: dropzone jest fokusowalny, obsługuje Enter/Space i ma widoczny focus ring.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[SEO-012] Narzędzie `palette-extractor`: refaktor SEO (URL/tytuł/copy/OG/redirect)**

  - **Zrobione 2025-12-15**:
    - Zmieniono URL narzędzia na `/narzedzia/generator-palety-kolorow-z-obrazu`.
    - Zaktualizowano `metadata` (title/description/canonical), `openGraph` (url + image) oraz schema `WebApplication` (URL absolute).
    - Dodano dedykowany obraz OpenGraph: `public/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp`.
    - Dodano redirect 301 (permanent) ze starego URL narzędzia.
    - Zaktualizowano linkowanie wewnętrzne (nawigacja + `/narzedzia`) oraz dokumentację: `PAGES_CATALOG.md`, `TOOLS_CATALOG.md`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-007] FaviconGenerator**: rozdzielić pipeline PNG/ICO + zarządzanie outputami; reuse shared (download/objectURL)

  - **Zrobione 2025-12-15**:
    - Wydzielono pipeline generowania favicon do `lib/tools/favicon/generator.ts` (PNG sizes + opcjonalnie `favicon.ico`).
    - `FaviconGenerator` korzysta z nowego utila (UI/UX bez zmian).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
    - Zaktualizowano dokumentację: `TOOLS_CATALOG.md`, `HOOKS_CATALOG.md`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[UI-001] `.surface-*`: dokończyć migrację kart/paneli**

  - **Zrobione 2025-12-15**:
    - Dodano utilities w `app/globals.css`: `.surface-card-lift`, `.surface-card-soft`.
    - Przepięto powtarzające się style (bez zmian UI/UX):
      - `components/ui/ProjectCard.tsx` → `surface-card-lift`
      - `components/ui/FeatureCard.tsx` → `surface-card-soft`
      - `components/ui/sections/SectionSteps.tsx` → `surface-card-lift`
      - `components/ui/sections/SectionPrices.tsx` → `surface-card-lift`
      - `components/ui/TestimonialCard.tsx` → `surface-card-lift`
      - `components/sections/tools/ImageResizeTool.tsx` i `EmailSignatureGenerator.tsx` → `tool-section`
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[STYLES-001] Typografia: dopiąć globals-first**

  - **Zrobione 2025-12-15**:
    - Usunięto komponenty `Text` i `Heading` oraz zastąpiono ich użycia semantycznymi tagami (`h1`-`h6`, `p`, `span`) + klasami typografii (`.h*`, `.p`, `text-sm`, `text-xs`, `.text-light/.text-mid/.text-dark/.text-white`) z `globals.css`.
    - Zaktualizowano `COMPONENTS_CATALOG.md` (usunięto wpisy o `Text` i `Heading`).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[COPY-007] Blogi internetowe: ujednolicić zapis „pliki cookie”**
  - Plik: `app/(pl)/uslugi/blogi-internetowe/page.tsx`
  - **Zrobione 2025-12-15**:
    - Zmieniono zapis: `cookies` → `pliki cookie` na `/uslugi/blogi-internetowe`.
    - Ustabilizowano `npm run build` na Windows: ustawiono produkcyjny cache Webpacka na `memory` w `next.config.ts`.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

## 2025-12-14

- 🟡 **[AUDIT-001] Repo: codzienny audyt jakości + SEO + wydajności (raport dzienny)**

  - **Zrobione 2025-12-14**:
    - Checki: `npm run lint`, `npm run build` (OK).
    - Naprawiono `/mapa-strony`: linki do artykułów edukacji uwzględniają kategorię (`/edukacja/[category]/[slug]`).
    - Naprawiono CTA w `data/pl/blog.json`: generator palet kolorów → `/narzedzia/generator-palet-kolorow-online`.
    - `FaviconGenerator`: nazwy plików PNG mają rozszerzenie `.png` zgodne z MIME `image/png`.
    - Skan perf/cleanup (timery/obserwery/ObjectURL): bez wykrytych problemów.

- ✅ **[COPY-012] Projekty graficzne: poprawić „rozważyć” w opisach sekcji „Zobacz też”**

  - Pliki:
    - `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
    - `app/(pl)/uslugi/projekty-graficzne/szablony-postow-social-media/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówki w opisach sekcji „Zobacz też”: `rozwarzyć/rozwarżyć` → `rozważyć`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[COPY-005] Marketing: poprawić „miesiąc” w opisach pozycjonowania**

  - Pliki:
    - `app/(pl)/uslugi/marketing/page.tsx`
    - `app/(pl)/uslugi/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono `co miesiąć` → `co miesiąc` w opisach pozycjonowania na `/uslugi/marketing` i `/uslugi`.
    - Sprawdzone: `npm run lint` (OK). (`npm run build` pominięto — zmiana tylko literówek).
    - Poprawiono zapis: `ulotki,papier` → `ulotki, papier` (linia 277).

- ✅ **[COPY-004] Sklepy internetowe: poprawić literówki i składnię w FAQ**

  - Plik: `app/(pl)/uslugi/sklepy-internetowe/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono składnię: `zależy między innymi od`.
    - Poprawiono literówki: `Bezpieczeństwo`, `powinien`, `będę`, `kroki`.
    - Ujednolicono zapis: `pliki cookie`.
    - Usunięto zbędne spacje w nawiasach: `(adresu URL strony)`, `(wynajmowanego miejsca na serwerze)`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (zgodnie z prośbą).

- ✅ **[COPY-013] Optymalizacja SEO: poprawić „Teoretycznie” + zdanie w schema**
  - Plik: `app/(pl)/uslugi/marketing/optymalizacja-seo/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono `Teorytycznie` → `Teoretycznie` w sekcji FAQ.
    - Poprawiono `answerSchemaText`: dodano „Audyt SEO” i uporządkowano zdanie.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (zgodnie z zasadą dla COPY).
- ✅ **[COPY-011] Projekt logo: poprawić literówki w FAQ**
  - Plik: `app/(pl)/uslugi/projekty-graficzne/projekt-logo/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówki w FAQ: `rundę`, `pewien, jakie`, `ekspresową`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[CLEANUP-003] Repo: skan i usunięcie pustych plików/komponentów**
  - **Zrobione 2025-12-14**:
    - Przeskanowano repo (git-tracked) pod kątem plików 0B, whitespace-only oraz JS/TS zawierających tylko komentarze/whitespace — brak wyników.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
- ✅ **[SEO-011] Schema OG + URL**
  - **Zrobione 2025-12-14**:
    - Ujednolicono bezwzględne URL-e (`https://www.arteonagency.pl/...`) w OpenGraph (`openGraph.url`, `openGraph.images[].url`) oraz w schema (JSON-LD `url`) na stronach.
    - Dla stron dynamicznych dopięto prefiks `siteUrl` dla obrazków OG/Twitter, gdy źródło było relatywne (`/assets/...`) (`/realizacje/[slug]`, `/edukacja/[category]/[slug]`).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[COPY-003] Strony internetowe: poprawić „w ciągu” + interpunkcję i literówki**
  - Plik: `app/(pl)/uslugi/strony-internetowe/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono interpunkcję i zapis w sekcji statystyk (m.in. `w przeciągu` → `w ciągu`, `osób, szukających` → `osób szukających`, usunięto zbędny przecinek po `Google`, `,a` → `, a`).
    - Poprawiono treści w FAQ (m.in. kapitalizacja pytania, `jest zależy` → `zależy`, usunięto spacje w nawiasach, `cookies` → `pliki cookie`, `wszystkie kroku` → `wszystkie kroki`).
- ✅ **[COPY-006] Portfolio: poprawić literówkę w opisie OpenGraph**
  - Plik: `app/(pl)/realizacje/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówkę w `metadata.openGraph.description`: `przejrzty proces` → `przejrzysty proces`.
    - Weryfikacja: pominięto `npm run lint` i `npm run build` (zgodnie z prośbą).
- ✅ **[COPY-009] Usługi (listy): poprawić „hierarchią” i składnię opisu szablonów postów**
  - **Zrobione 2025-12-14**:
    - Poprawiono opis „Szablony postów na social media” na stronach list usług: `/uslugi` oraz `/uslugi/projekty-graficzne`.
    - Zmieniono składnię zdania (`ułatwiające regularne publikację, tworząc` → `ułatwiające regularne publikowanie i pomagające utrzymać`) oraz poprawiono literówkę `hieratchią` → `hierarchią`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[CLEANUP-002] Karuzele: rename `*Overview` → `*Carousel`**
  - **Zrobione 2025-12-14**:
    - Zaktualizowano importy i użycia: `ArticlesOverview` → `ArticlesCarousel`, `ProjectsOverview` → `ProjectsCarousel` (w tym `app/(pl)/uslugi/projekty-graficzne/**`).
    - Zaktualizowano dokumentację: `COMPONENTS_CATALOG.md`, `PAGES_CATALOG.md`.
    - Usunięto puste aliasy: `components/sections/blog/ArticlesOverview.tsx`, `components/sections/projects/ProjectsOverview.tsx`.
    - Naprawiono błąd ESLint blokujący build w `components/ui/TableBlock.tsx`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[COPY-008] Marketing: poprawić literówki i interpunkcję w sekcji korzyści**

  - Plik: `app/(pl)/uslugi/marketing/page.tsx`
  - **Zrobione 2025-12-14**:
    - Poprawiono literówki i interpunkcję w sekcji korzyści na `/uslugi/marketing`.
    - Naprawiono błąd builda: dodano brakujący import `Text` w `components/ui/TestimonialCard.tsx`.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-006] WcagContrastChecker**: wynieść parsing/kontrast do utils; ujednolicić z color utils tam gdzie ma to sens (bez utraty formatów)

  - **Zrobione 2025-12-14**:
    - Wydzielono logikę kontrastu do `lib/tools/color/contrast.ts` (parseColor + luminance + contrast ratio).
    - `WcagContrastChecker` korzysta z nowych utili (UI/UX bez zmian).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[SEO-010] Schema: deduplikacja `ProfessionalService`**

  - Usunąć duplikację `ProfessionalService` pomiędzy `/kontakt` i globalnym footerem.
  - **Zrobione 2025-12-14**:
    - Usunięto zdublowany JSON-LD `ProfessionalService` z `app/(pl)/kontakt/page.tsx`.
    - Pozostawiono jedno źródło `ProfessionalService`: `components/shared/Footer.tsx`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[DOCS-002] HOOKS_CATALOG: rozszerzyć o hooks/utils/lib**
  - Cel: od teraz `HOOKS_CATALOG.md` ma opisywać wszystkie hooki z `hooks/` oraz wszystkie współdzielone helpery z `utils/` i `lib/`.
  - **Zrobione 2025-12-14**:
    - Zaktualizowano `HOOKS_CATALOG.md` tak, aby obejmował `hooks/`, `utils/` oraz kluczowe moduły z `lib/`.
    - Dopisano wpisy m.in. dla: `utils/slug`, `lib/blog`, `lib/serviceSchema`, `lib/site`, `lib/config/site/*`, `lib/consent/*`, `lib/tools/*`.
    - Doprecyzowano uwagi dot. środowiska (SSR-safe vs browser-only).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
- ✅ **[TOOLS-013] ImageResizeTool: dodać presety WWW (w tym OG image)**
  - **Zrobione 2025-12-14**:
    - Dodano presety `WWW`: `OG image` (1200×630), `Grafika do artykułu` (1600×900), `Baner strony` (1920×600).
    - Zaktualizowano `TOOLS_CATALOG.md`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[TOOLS-005] MetaTitleDescriptionTool**: wydzielić pomiar (canvas) + heurystyki statusów + snippet preview; zero zmian UI/UX
  - **Zrobione 2025-12-14**:
    - Wydzielono logikę analizy długości meta do `lib/tools/seo/metaLength.ts` (pomiar px, heurystyki statusów, truncation do podglądu).
    - `MetaTitleDescriptionTool` korzysta z nowych utili (UI/UX bez zmian).
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
- ✅ **[NAV-001] Dane nawigacji: single source of truth**
  - Mobile i Desktop korzystają z tego samego źródła. Stworzenie nowego komponentu w którym będą wspólne linki dzięki czemu wystarczy będzie dodać kolejne lub zmienić istniejące linki w jednym pliku. Rozbicie nawigacji na mniejsze komponenty i użycie hooków, które już są lub stworzenie nowych jeśli jest to potrzebne. Zachowaj w 100% ten sam wygląd i działanie. Jeśli zauważysz opcję ulepszenia działania lub jakiś błąd poinformuj mnie o tym
  - **Zrobione 2025-12-14**:
    - Dodano SSOT: `components/shared/navigation-data/pl.ts` (nav + sekcje usług + sekcje narzędzi + linki prawne).
    - `DesktopNavigation` i `MobileNavigation` pobierają dane z SSOT (bez zmian UI/UX).
    - `npm run lint` i `npm run build` przechodzą.
- ✅ **[COOKIE-001] CookieConsent: rozdzielenie odpowiedzialności**
  - Wydzielić storage/gtag/UI (mniej “god component”); UX bez zmian.
  - **Zrobione 2025-12-14**:
    - Wydzielono warstwę zgód do `lib/consent/*`:
      - `lib/consent/storage.ts` (odczyt/zapis cookie)
      - `lib/consent/gtag.ts` (aktualizacja `gtag('consent','update', ...)`)
      - `lib/consent/ga.ts` (lazy-load GA po zgodzie)
    - `CookieConsent` korzysta z tych modułów i wystawia globalne `window.ArteonConsent.open()` (dla `CookieSettingsButton`).
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[DOCS-001] `PAGES_CATALOG.md`: katalog stron (App Router)**
  - **Zrobione 2025-12-14**:
    - Utworzono `PAGES_CATALOG.md` z listą wszystkich route’ów z `app/` (w tym route groups i dynamic segments).
    - Dla stron opisano: cel, kluczowe komponenty oraz SEO (`metadata` + schema.org JSON-LD/microdata).
    - Uwzględniono pliki specjalne: `app/layout.tsx`, `app/error.tsx`, `app/not-found.tsx` oraz `app/(pl)/narzedzia/(tools)/layout.tsx`.
- ✅ **[SEO-001] Canonical: audyt i poprawki**
  - Zapewnić canonical wg zasad powyżej na wszystkich stronach. **Zrobione 2025-12-14**: wszystkie canonical URLs używają formatu `https://www.arteonagency.pl/`
- ✅ **[SEO-003] Schema.org: backlog**
  - Spisać możliwe schema i wskazać strony-kandydatów. **Zrobione 2025-12-14**
  - **Schema (propozycje) + strony-kandydaci:**
    - `Organization` + `WebSite` (global) — `app/layout.tsx`
    - `ProfessionalService` / `LocalBusiness` (kontakt / dane firmy) — `app/(pl)/kontakt/page.tsx`, `components/shared/Footer.tsx`
    - `Service` (strony usług) — `app/(pl)/uslugi/**/page.tsx` + helper `lib/serviceSchema.ts`
    - `ItemList` / `OfferCatalog` (huby/listy) — `/uslugi`, `/uslugi/marketing`, `/narzedzia`, `/realizacje`
    - `WebApplication` (pojedyncze narzędzia) — `app/(pl)/narzedzia/(tools)/*/page.tsx`
    - `BlogPosting` (artykuły) — `app/(pl)/edukacja/[category]/[slug]/page.tsx`
    - `CollectionPage` + `ItemList` (listy treści) — `/edukacja`, `/edukacja/[category]`, `/realizacje`, `/narzedzia`
    - `FAQPage` (sekcje FAQ) — komponent `components/ui/FaqPanels.tsx`
    - `BreadcrumbList` (okruszki) — komponent `components/sections/BreadCrumbs.tsx`
    - `AboutPage` (o firmie) — `/o-nas`
    - `PrivacyPolicyPage` (`/polityka-prywatnosci`) i `TermsOfServicePage` (`/regulamin`) — do rozważenia
- ✅ **[SEO-004] Schema.org: pokrycie + sanity-check**
  - Sprawdzić czy strony z listy [SEO-003] faktycznie emitują schema (JSON-LD lub microdata). **Zrobione 2025-12-14**
  - **Jest (OK):**
    - `app/layout.tsx` — `Organization` + `WebSite` (JSON-LD)
    - `/` — `Organization` (AggregateRating/Review) + `HowTo`
    - `/kontakt` — `ProfessionalService` + `BreadcrumbList` + `HowTo`
    - `/uslugi/**` (podstrony usług) — `Service` (`lib/serviceSchema.ts`) + breadcrumbs; często `FAQPage`
    - `/uslugi/marketing` — `ItemList` (marketing services)
    - `/uslugi/projekty-graficzne` — `ItemList` + `FAQPage`
    - `/narzedzia` — `ItemList` (lista `WebApplication`)
    - `/narzedzia/*` (podstrony narzędzi) — `WebApplication`
    - `/edukacja/[category]` — `CollectionPage` + `ItemList`
    - `/edukacja/[category]/[slug]` — `BlogPosting` (JSON-LD) + breadcrumbs; opcjonalnie `FAQPage`
    - `/realizacje/[slug]` — `Article` (JSON-LD) + breadcrumbs; opcjonalnie `FAQPage`
    - `/o-nas` — microdata `AboutPage`
    - `/polityka-prywatnosci`, `/regulamin` — microdata `Article`
    - `components/sections/BreadCrumbs.tsx` — `BreadcrumbList` (JSON-LD)
    - `components/ui/FaqPanels.tsx` — `FAQPage` (JSON-LD)
  - **Brak (do dodania wg SEO-003):**
    - `/uslugi` — brak `ItemList`/`OfferCatalog`
    - `/realizacje` — brak `CollectionPage`/`ItemList`
    - `/edukacja` — brak `CollectionPage`/`ItemList`
  - **Problemy / uwagi jakościowe (do poprawy):**
    - `/kontakt` + global footer — możliwa duplikacja `ProfessionalService` (ten sam `@id` `#local` na wielu stronach)
    - `components/ui/FaqPanels.tsx` jest `use client` — `FAQPage` pojawia się dopiero po hydracji (warto zweryfikować w Rich Results Test)
    - W wielu miejscach JSON-LD jest ładowane przez `next/script` z `strategy='afterInteractive'` — do rozważenia inline `<script type='application/ld+json'>` w SSR
    - `/realizacje/[slug]` — rozważyć `CaseStudy` zamiast `Article`
    - `/polityka-prywatnosci` — rozważyć `PrivacyPolicy` zamiast `Article`
    - `/regulamin` — rozważyć `TermsOfService` zamiast `Article`
- ✅ **[SEO-005] Schema: `/uslugi` (OfferCatalog / ItemList)**
  - Dodać schema dla strony listy usług: `CollectionPage` + `ItemList` (lub `OfferCatalog`).
  - **Zrobione 2025-12-14**:
    - Dodano JSON-LD `CollectionPage` + `ItemList` (ListItem: `url` + `name`) na `app/(pl)/uslugi/page.tsx` na podstawie listy `SERVICES` w tym pliku.
    - `npm run lint` i `npm run build` przechodzą.
- ✅ **[SEO-006] Schema: `/realizacje` (CollectionPage + ItemList)**
  - Dodać schema listy realizacji (kolekcja + lista elementów z URL).
  - **Zrobione 2025-12-14**:
    - Dodano JSON-LD `CollectionPage` + `ItemList` (ListItem: `url` + `name`) na `app/(pl)/realizacje/page.tsx` na podstawie `data/pl/projects.json`.
    - `npm run lint` i `npm run build` przechodzą.
- ✅ **[SEO-007] Schema: `/edukacja` (CollectionPage + ItemList)**
  - Dodać schema listy artykułów (kolekcja + lista elementów z URL).
  - **Zrobione 2025-12-14**:
    - Dodano JSON-LD `CollectionPage` + `ItemList` (ListItem: `url` + `name`) na `app/(pl)/edukacja/page.tsx` na podstawie `data/pl/blog.json`.
    - `npm run lint` i `npm run build` przechodzą.
- ✅ **[SEO-008] Schema/URLs: naprawa slugów w narzędziu Image Resize**
  - Naprawić mismatch URL w schema i breadcrumbs dla `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`.
  - **Zrobione 2025-12-14**:
    - Poprawiono `schema.url` na `https://www.arteonagency.pl/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia` w `app/(pl)/narzedzia/(tools)/zmiana-rozmiaru-i-kadrowanie-zdjecia/page.tsx`.
    - Poprawiono URL w breadcrumbs (3. poziom) na `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).
- ✅ **[SEO-009] Schema: deduplikacja `BreadcrumbList`**
  - Usunąć duplikaty `BreadcrumbList` na `/edukacja/[category]/[slug]` i `/realizacje/[slug]` (zostawić jedno źródło).
  - **Zrobione 2025-12-14**:
- ✅ **[CLEANUP-001] `tool-pill*`: weryfikacja i ewentualne usunięcie martwego CSS**

  - **Zrobione 2025-12-14**:
    - Potwierdzono brak użyć `tool-pill*` w repo (w tym HTML/MD).
    - Usunięto `.tool-pill`, `.tool-pill-inactive`, `.tool-pill-active` z `app/globals.css`.
    - Sprawdzone: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-002] CORE**: audyt kodu narzędzi + sprawdzenie `HOOKS_CATALOG.md`/`COMPONENTS_CATALOG.md` pod kątem reuse

  - **Zrobione 2025-12-14**:
    - Zidentyfikowano powtarzalne prymitywy w narzędziach (download, ObjectURL lifecycle, `loadImage`, `canvas.toBlob`, `formatBytes`, FileReader/clipboard) jako baza do TOOLS-003.

- ✅ **[TOOLS-003] SHARED**: wspólne prymitywy (download, ObjectURL lifecycle, `loadImage` + `canvasToBlob`) i przepięcie min. 2 narzędzi

  - **Zrobione 2025-12-14**:
    - Dodano shared utilsy:
      - `lib/tools/formatBytes.ts`
      - `lib/tools/download.ts`
      - `lib/tools/objectUrl.ts`
      - `lib/tools/loadImage.ts`
      - `lib/tools/canvasToBlob.ts`
    - Przepięto narzędzia na shared prymitywy (bez zmian UI/UX):
      - `components/sections/tools/FaviconGenerator.tsx`
      - `components/sections/tools/JpgPngToWebp.tsx`
      - `components/sections/tools/ImageResizeTool.tsx` (tylko `formatBytes`)
    - Weryfikacja: `npm run lint`, `npm run build` (OK).

- ✅ **[TOOLS-004] ColorPaletteGenerator**: rozdzielić logikę (konwersje + generowanie palet) i UI; reuse color utils + copy feedback
  - **Zrobione 2025-12-14**:
    - Wydzielono logikę kolorów do `lib/tools/color/*`:
      - `lib/tools/color/convert.ts` (normalize/convert/format + random)
      - `lib/tools/color/palette.ts` (generowanie palet)
      - `lib/tools/color/types.ts` (typy RGB/HSL)
    - `ColorPaletteGenerator` korzysta z nowych utili (bez zmian UI/UX).
    - Zaktualizowano `TOOLS_CATALOG.md`.
    - Weryfikacja: `npm run lint`, `npm run build` (OK).
