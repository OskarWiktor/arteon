# BLOG_CATALOG

Ten plik opisuje wszystkie artykuły z `data/pl/blog.json`.

Celem katalogu jest:

- **Ocena jakości treści** (struktura, kompletność, użyteczność).
- **Ocena jakości SEO** (meta, canonical, linkowanie, E-E-A-T, potencjał na featured snippets).
- **Wskazanie braków i ryzyk** (techniczne, redakcyjne, strukturalne).
- **Podanie sugestii ulepszeń** dla każdego wpisu.

---

## Kontekst techniczny (jak blog działa w kodzie)

- **Źródło danych**: `data/pl/blog.json`.
- **Routing**: `/edukacja/[category]/[slug]`.
- **Kategoria kanoniczna (routing)**:
  - jest wyliczana z **pierwszego elementu** tablicy `category[]`.
  - implementacja: `getPrimaryCategorySlug(a)` w `lib/blog.ts`.
- **Canonical URL (w danych artykułu)**:
  - oczekiwany format: `https://www.arteonagency.pl/edukacja/{primaryCategorySlug}/{slug}`.

---

## Spis artykułów (kolejność wg `blog.json`)

- **Jak kolorystyka wpływa na decyzje zakupowe klientów?**

  - **Slug**: `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
  - **URL**: `/edukacja/design/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
  - **Kategorie**: `Design`, `Psychologia`, `Branding`

- **Ile czasu trwa pozycjonowanie strony firmowej i kiedy widać efekty?**

  - **Slug**: `ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
  - **URL**: `/edukacja/seo/ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
  - **Kategorie**: `SEO`, `Widoczność`

- **Czy lokalne firmy potrzebują bloga na stronie internetowej aby rosnąć w Google?**

  - **Slug**: `czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`
  - **URL**: `/edukacja/seo/czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`
  - **Kategorie**: `SEO`, `Widoczność`, `Treści`

- **Jak zoptymalizować zdjęcia na stronę WWW, aby była szybsza - rozmiary, formaty i WebP**

  - **Slug**: `jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
  - **URL**: `/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
  - **Kategorie**: `Zdjęcia`, `SEO`

- **Jak pisać treści na stronie internetowej aby być wyżej w wyszukiwarce Google?**

  - **Slug**: `jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
  - **URL**: `/edukacja/seo/jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
  - **Kategorie**: `SEO`, `Treści`

- **Jak identyfikacja wizualna firmy zwiększa zaufanie wśród klientów?**

  - **Slug**: `jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
  - **URL**: `/edukacja/design/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow` (wg routingu)
  - **Kategorie**: `Design`, `Branding`

- **Dlaczego strona internetowa nie wyświetla się w Google i jak to naprawić?**
  - **Slug**: `dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
  - **URL**: `/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
  - **Kategorie**: `SEO`, `Widoczność`

---

## Analiza szczegółowa

## Jak kolorystyka wpływa na decyzje zakupowe klientów?

- **Slug**: `jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow`
- **Kategorie**: `Design` (primary), `Psychologia`, `Branding`
- **Daty**:
  - **`datePublished`**: `2025-12-09`
  - **`dateModified`**: `2025-12-19`
- **Szacowany czas czytania**: `4 min`
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: tylko `richtext`.
  - **Konsekwencja**: dużo nagłówków `H2` i `H3` (dobry „szkielet” pod TOC), ale brak wzbogacenia o `image` / `table`.
- **SEO (meta)**:
  - **`seo.title`**: identyczny jak `title` - poprawne, ale bez wyróżnika marki.
  - **`seo.description`**: bardzo mocne - zawiera obietnicę wartości i wiarygodne źródła.
  - **`seo.canonical`**: wygląda spójnie z routingiem (`/edukacja/design/...`).
- **CTA**:

  - **Występuje**.
  - **Spójność**: bardzo dobra (narzędzie do palet + oferta identyfikacji).

- **Plusy**:

  - **[duża wiarygodność]** tekst opiera się na źródłach (CCICOLOR, Lucidpress, NN/g, HubSpot itd.), co wzmacnia E‑E‑A‑T.
  - **[dobra struktura edukacyjna]** logiczny podział na: psychologia → marka → UX → konwersja → praktyka.
  - **[język „dla biznesu”]** łączy design z mierzalnymi efektami (CTR, konwersja, rozpoznawalność).
  - **[wysoka skanowalność]** krótkie sekcje, listy punktowane - przyjazne dla czytelnika.

- **Minusy / ryzyka**:

  - **[brak tagów]** utrudnia budowę klastrów tematycznych i powiązanych wpisów w obrębie bloga.
  - **[brak FAQ]** ogranicza pokrycie long-tail (PAA) i możliwość rozbudowy o dodatkowe intencje.
  - **[brak linkowania wewnętrznego w treści]** poza CTA artykuł nie prowadzi czytelnika do powiązanych zasobów (narzędzia/usługi/inne wpisy).
  - **[brak materiału wizualnego]** przy temacie „kolor” brak przykładów palet i kontrastów osłabia UX.

- **Braki (co ma / czego nie ma)**:

  - **[ma]** jasne nagłówki, listy, źródła, konkretne wnioski, CTA.
  - **[nie ma]** tagów, FAQ, obrazów/diagramów, tabel podsumowujących, linków wewnętrznych w środku tekstu.

- **Ton i charakter**:

  - **[ekspercki]** odwołania do badań i danych.
  - **[praktyczny]** nastawiony na wdrożenie (jak dobrać kolor, jak wpływa na CTA).
  - **[marketingowo-sprzedażowy]** wnioski prowadzą do konwersji, ale bez agresywnego języka.

- **Sugestie ulepszeń (SEO + UX)**:
  - **[tagi]** dodać spójny zestaw, np.: `psychologia kolorów`, `UX`, `konwersja`, `branding`, `identyfikacja wizualna`, `CTA`.
  - **[FAQ]** dodać 4-7 pytań (pod long-tail), np.:
    - „Jaki kolor przycisku CTA zwiększa konwersję?”
    - „Ile kolorów powinna mieć identyfikacja wizualna?”
    - „Jak sprawdzić kontrast kolorów na stronie?”
  - **[linkowanie wewnętrzne]** dodać w treści 3-6 linków:
    - do narzędzi (generator palet, checker kontrastu),
    - do oferty brandingu/identyfikacji,
    - do powiązanego wpisu o identyfikacji wizualnej.
  - **[multimedia]** dodać 1-2 grafiki (przykłady palet + przykłady CTA na różnych tłach) oraz krótką tabelę „kolor → skojarzenie → zastosowanie w branżach”.
  - **[snippet/TL;DR]** dodać na początku krótkie podsumowanie w punktach (łatwiej o featured snippet).

---

## Ile czasu trwa pozycjonowanie strony firmowej i kiedy widać efekty?

- **Slug**: `ile-czasu-trwa-pozycjonowanie-strony-firmowej-i-kiedy-widac-efekty`
- **Kategorie**: `SEO` (primary), `Widoczność`
- **Daty**:
  - **`datePublished`**: `2025-12-09`
  - **`dateModified`**: `2025-12-09`
- **Szacowany czas czytania**: `4 min`
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: tylko `richtext`.
  - **Konsekwencja**: materiał jest „tekstowy” - bez tabel/wykresów, mimo że temat dobrze się do nich nadaje.
- **SEO (meta)**:
  - **`seo.title`**: bardzo długi (ryzyko ucięcia w SERP).
  - **`seo.description`**: rzeczowy, zgodny z intencją (czas + czynniki).
  - **`seo.canonical`**: spójny z routingiem (`/edukacja/seo/...`).
- **CTA**:

  - **Występuje**.
  - **Spójność**: bardzo dobra (prowadzi do usługi pozycjonowania).

- **Plusy**:

  - **[świetnie dopasowana intencja]** użytkownik chce konkretu („ile trwa i kiedy efekty”) i artykuł daje model czasowy.
  - **[mocne źródła]** Ahrefs, Semrush, BrightLocal, Google Search Central - wzmacnia E‑E‑A‑T.
  - **[dobry układ sekcji]** czytelne bloki: nowe strony vs istniejące, czynniki wpływu, realistyczna oś czasu.
  - **[nadaje się na featured snippet]** fragmenty typu „0-2 miesiące / 2-4 miesiące…” są gotowe pod snippet.

- **Minusy / ryzyka**:

  - **[brak tagów]** trudniej zbudować klaster SEO (czas, indeksacja, audyt, treści) i powiązania między wpisami.
  - **[brak FAQ]** w temacie „czas SEO” FAQ zwykle zbiera dużo long-tail (PAA).
  - **[brak linkowania wewnętrznego w treści]** można naturalnie linkować do audytu SEO, artykułu o indeksacji oraz o treściach.

- **Braki (co ma / czego nie ma)**:

  - **[ma]** dane i źródła, strukturę czasową, logiczne argumenty, CTA.
  - **[nie ma]** tagów, FAQ, tabel/wykresów, sekcji „TL;DR”, linków wewnętrznych w środku tekstu.

- **Ton i charakter**:

  - **[ekspercki i realistyczny]** „SEO to proces” - bez przesadnych obietnic.
  - **[konsultacyjny]** tłumaczy czynniki i prowadzi do działania (CTA).

- **Sugestie ulepszeń (SEO + UX)**:
  - **[meta title]** skrócić (i ewentualnie ustandaryzować dopisek marki) - tak, by nie przekraczać sensownego limitu.
  - **[FAQ]** dodać 5-8 pytań, np.:
    - „Czy da się przyspieszyć efekty SEO?”
    - „Kiedy pojawią się pierwsze leady z Google?”
    - „Dlaczego nowa domena rośnie wolniej?”
    - „Co jest ważniejsze: treści czy linki?”
  - **[tagi]** dodać m.in.: `czas SEO`, `pozycjonowanie stron`, `link building`, `audyt SEO`, `content`.
  - **[format danych]** dodać tabelę „czynnik → wpływ na czas → co zrobić → jak mierzyć”.
  - **[linkowanie wewnętrzne]** wpleść 3-6 linków do:
    - audytu SEO,
    - artykułu o indeksacji (brak widoczności w Google),
    - artykułu o treściach (SEO copywriting).
  - **[porządek w HTML]** ujednolicić `<br/>`.

---

## Czy lokalne firmy potrzebują bloga na stronie internetowej aby rosnąć w Google?

- **Slug**: `czy-lokalne-firmy-potrzebuja-bloga-na-stronie-internetowej-aby-rosnac-w-google`
- **Kategorie**: `SEO` (primary), `Widoczność`, `Treści`
- **Daty**:
  - **`datePublished`**: `2025-12-09`
  - **`dateModified`**: `2025-12-09`
- **Szacowany czas czytania**: `4 min`
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: tylko `richtext`.
  - **Struktura**: seria nagłówków `H2` opartych na korzyściach (ruch, Maps, słowa kluczowe, CAC, częstotliwość publikacji).
- **SEO (meta)**:
  - **`seo.title`**: bardzo długi (ryzyko ucięcia w SERP).
  - **`seo.description`**: krótkie i konkretne, ale warto dodać pełniejsze CTA i doprecyzować „lokalne firmy”.
  - **`seo.canonical`**: spójny z routingiem (`/edukacja/seo/...`).
- **CTA**:

  - **Występuje**.
  - **Spójność**: dobra (prowadzi do pozycjonowania).

- **Plusy**:

  - **[trafiona intencja]** odpowiada na realne pytanie małych firm („czy blog ma sens lokalnie?”).
  - **[konkret i dane]** przywołuje wiele źródeł (HubSpot, Semrush Local, Ahrefs, Backlinko, Neil Patel, Google Search Central).
  - **[przykłady branżowe]** przykłady typu hydraulik/fizjoterapeuta zwiększają zrozumiałość i „Experience”.
  - **[dobra struktura pod PAA]** nagłówki w formie tez/podpytań są bliskie temu, jak ludzie szukają w Google.

- **Minusy / ryzyka**:

  - **[brak tagów]** temat aż prosi się o tagi typu `local seo`, `google maps`, `content marketing`.
  - **[brak FAQ]** utrata potencjału na long-tail (np. „ile artykułów”, „ile kosztuje”, „kiedy efekty”).
  - **[błędy językowe]** w treści widoczne są literówki i niekonsekwencje („lug”, „trafa”, „13 większą…”) - osłabia wizerunek i E‑E‑A‑T.
  - **[linkowanie wewnętrzne]** w praktyce brak linków do:
    - wpisu o czasie SEO,
    - wpisu o pisaniu treści,
    - oferty tworzenia treści.

- **Braki (co ma / czego nie ma)**:

  - **[ma]** mocne argumenty, źródła, przykłady, jasny przekaz biznesowy.
  - **[nie ma]** tagów, FAQ, elementów wizualnych (grafika/tabela), checklisty wdrożeniowej i wewnętrznego linkowania.

- **Ton i charakter**:

  - **[bezpośredni i perswazyjny]** ma przekonać przedsiębiorcę, że blog się opłaca.
  - **[edukacyjny]** tłumaczy mechanizmy Google (Helpful Content, E‑E‑A‑T) w przystępny sposób.
  - **[lokalny]** język i przykłady są dobrane pod biznesy usługowe.

- **Sugestie ulepszeń (SEO + UX)**:
  - **[korekta]** poprawić literówki i sformułowania - to szybki „zysk” jakościowy.
  - **[tagi]** dodać, np.: `lokalne seo`, `google maps`, `blog firmowy`, `content marketing`, `widoczność lokalna`, `pytania klientów`.
  - **[FAQ]** dodać 5-8 pytań, np.:
    - „Ile artykułów miesięcznie wystarczy?”
    - „Czy blog działa bez linków zewnętrznych?”
    - „Czy wpisy muszą mieć 2000 słów?”
    - „Jak mierzyć efekty bloga w GSC?”
  - **[internal linking]** wpleść linki do:
    - wpisu o czasie SEO,
    - wpisu o pisaniu treści,
    - oferty tworzenia treści,
    - narzędzi z sekcji `/narzedzia`.
  - **[sekcja wdrożeniowa]** dodać mini-plan (7-14 dni): wybór tematów, struktura wpisu, CTA, publikacja, pomiar w GSC.

---

## Jak zoptymalizować zdjęcia na stronę WWW, aby była szybsza - rozmiary, formaty i WebP

- **Slug**: `jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp`
- **Kategorie**: `Zdjęcia` (primary), `SEO`
- **Daty**:
  - **`datePublished`**: `2025-11-29`
  - **`dateModified`**: `2025-11-29`
- **Szacowany czas czytania**: `8 min`
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: tylko `richtext`.
  - **Struktura**: formaty (JPEG/PNG/SVG/WebP) → rozmiar → kompresja → wdrożenie → Core Web Vitals → checklisty.
- **SEO (meta)**:
  - **`seo.title`**: bardzo długi (ryzyko ucięcia w SERP).
  - **`seo.description`**: konkret, ale relatywnie krótki (można dopracować pod CTR).
  - **`seo.canonical`**: spójny z routingiem (`/edukacja/zdjecia/...`).
- **Linkowanie**:
  - **Zewnętrzne**: dużo odwołań do `web.dev`, PageSpeed, dokumentacji Google - plus dla wiarygodności.
  - **Wewnętrzne**: wplecione linki do narzędzi `/narzedzia/*` - bardzo dobry wzorzec.
- **CTA**:

  - **Występuje**.
  - **Ryzyko**: `cta.backgroundImage` wskazuje na ścieżkę z inną nazwą katalogu niż `cover` (w repo brak katalogu `.../rozmiary-i-webp/...`). To może powodować brak tła CTA.

- **Plusy**:

  - **[praktyczny poradnik]** krok po kroku i checklisty - wpis jest „wdrożeniowy”, nie tylko teoretyczny.
  - **[dobry temat SEO]** łączy performance (CWV) z SEO - wysoka intencja użytkownika.
  - **[mocne źródła]** linki do Google/web.dev wspierają E‑E‑A‑T.
  - **[internal linking do narzędzi]** pomaga użytkownikowi od razu wykonać zadanie (konwersja + UX).

- **Minusy / ryzyka**:

  - **[brak tagów]** ogranicza widoczność i powiązania (CWV, WebP, PageSpeed).
  - **[brak FAQ]** temat ma ogromny potencjał long-tail (WebP vs AVIF, jakość, rozmiary, alt, lazy loading).
  - **[brak tabel/obrazów]** wpis o obrazach nie ma bloków `image` ani tabel porównawczych wag/formatów.

- **Braki (co ma / czego nie ma)**:

  - **[ma]** dobre linki zewnętrzne, narzędzia wewnętrzne, checklisty, logiczną strukturę.
  - **[nie ma]** tagów, FAQ, porównań w formie tabeli/wykresu, przykładów kodu (np. dla Next.js).

- **Ton i charakter**:

  - **[techniczno-edukacyjny]** tłumaczy prosto, ale merytorycznie.
  - **[narzędziowy]** prowadzi do konkretnych działań (PageSpeed, konwerter WebP).

- **Sugestie ulepszeń (SEO + UX)**:
  - **[naprawa assetu CTA]** ujednolicić `cta.backgroundImage` z realnym katalogiem (spójność z `cover`).
  - **[tagi]** dodać m.in.: `Core Web Vitals`, `PageSpeed`, `WebP`, `AVIF`, `LCP`, `optymalizacja obrazów`.
  - **[FAQ]** dodać 6-10 pytań, np.:
    - „Czy WebP zawsze jest lepszy niż JPEG?”
    - „Czy AVIF daje realną przewagę?”
    - „Jaka jakość WebP jest optymalna?”
    - „Jak pisać atrybut `alt` pod SEO?”
  - **[tabela porównawcza]** dodać tabelę: format → kiedy używać → typowa waga → plusy/minusy.
  - **[przykłady kodu]** rozważyć blok `code` (np. Next.js `<Image>` i zasady `sizes`, lazy loading).
  - **[meta title]** skrócić i dopasować do wzorca (spójność z innymi wpisami + CTR).

---

## Jak pisać treści na stronie internetowej aby być wyżej w wyszukiwarce Google?

- **Slug**: `jak-pisac-tresci-na-stronie-internetowej-aby-byc-wyzej-w-wyszukiwarce-google`
- **Kategorie**: `SEO` (primary), `Treści`
- **Daty**:
  - **`datePublished`**: `2025-10-29`
  - **`dateModified`**: `2025-10-29`
- **Szacowany czas czytania**: `22 min`
- **Tagi**: występują (10):
  - `seo copywriting`
  - `treści seo`
  - `pozycjonowanie`
  - `content marketing`
  - `pisanie tekstów`
  - `intencja użytkownika`
  - `eeat`
  - `meta description`
  - `struktura nagłówków`
  - `linkowanie wewnętrzne`
- **FAQ**: występuje (6).
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: `richtext` + `image`.
  - **Charakter**: bardzo rozbudowany poradnik, z wieloma przykładami w różnych branżach.
- **SEO (meta)**:
  - **`seo.title`**: zawiera dopisek marki `| Arteon` (spójne z częścią wpisów).
  - **`seo.description`**: konkretna, blisko „idealnej” długości pod SERP.
  - **`seo.canonical`**: spójny z routingiem (`/edukacja/seo/...`).
- **CTA**:

  - **Występuje**.
  - **Spójność**: bardzo dobra (prowadzi do usług: tworzenie treści / kontakt).

- **Plusy**:

  - **[największa kompletność]** to najbardziej „pełny” materiał w zbiorze: intencja, struktura, nagłówki, słowa kluczowe, linkowanie, E‑E‑A‑T, aktualizacje.
  - **[tagi + FAQ]** najlepszy zestaw SEO/long-tail wśród wpisów (łatwiej budować topical authority).
  - **[przykłady]** przykłady dla kilku branż budują „Experience” i ułatwiają zrozumienie.
  - **[obrazy]** wzmacniają UX (przerwy wizualne) i potencjalnie czas na stronie.
  - **[spójność z usługami]** końcówka prowadzi do konkretnych ofert i domyka ścieżkę użytkownika.

- **Minusy / ryzyka**:

  - **[długość i „ciężar wejścia”]** przy długim materiale warto mieć krótkie TL;DR na początku.
  - **[brak wewnętrznego linkowania do innych wpisów]** materiał opisuje linkowanie, ale sam mógłby mocniej linkować do wpisów z tego katalogu (czas SEO, indeksacja, blog lokalny, optymalizacja zdjęć).
  - **[tematyka zbyt szeroka]** ryzyko, że część sekcji jest tylko „musnięta”; możliwy split na serię artykułów.

- **Braki (co ma / czego nie ma)**:

  - **[ma]** tagi, FAQ, obrazy, szerokie pokrycie tematu, dużo przykładów, CTA.
  - **[nie ma]** tabel/checklist na początku, powiązań linkami do innych artykułów, bloków `table`/`code` (przydałyby się do mini-checklist i przykładów wdrożeń).

- **Ton i charakter**:

  - **[mentorski i edukacyjny]** prowadzi czytelnika krok po kroku.
  - **[ekspercki]** mocno „procesowy” (jak Google ocenia treści, jak utrzymać pozycje).
  - **[praktyczny]** dużo zaleceń i gotowych struktur.

- **Sugestie ulepszeń (SEO + UX)**:
  - **[TL;DR]** dodać na początku „12 zasad pisania treści SEO” (krótka lista do skanowania).
  - **[linkowanie wewnętrzne]** dodać w treści 5-10 linków do powiązanych wpisów:
    - czas SEO,
    - indeksacja/„strona nie jest w Google”,
    - blog dla firm lokalnych,
    - optymalizacja zdjęć (CWV).
  - **[klastry tematyczne]** rozważyć osobne artykuły i linkowanie:
    - „Jak dobrać słowa kluczowe?”,
    - „Jak pisać meta title/description?”,
    - „Jak budować linkowanie wewnętrzne?”.
  - **[format danych]** dodać tabelę „element treści → cel SEO → jak mierzyć (GSC/GA4)”.
  - **[porządek w HTML]** ujednolicić `<br/>`.

---

## Jak identyfikacja wizualna firmy zwiększa zaufanie wśród klientów?

- **Slug**: `jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
- **Kategorie**: `Design` (primary), `Branding`
- **Daty**:
  - **`datePublished`**: `2025-10-28`
  - **`dateModified`**: `2025-10-28`
- **Szacowany czas czytania**: `7 min`
- **Tagi**: występują (9):
  - `identyfikacja wizualna`
  - `identyfikacja wizualna firmy`
  - `logo`
  - `kolorystyka`
  - `typografia`
  - `brandbook`
  - `zaufanie klientów`
  - `branding`
  - `spójność wizualna`
- **FAQ**: występuje (4).
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: `richtext` + `image`.
  - **Struktura**: sporo `H2`, praktycznie brak głębszej warstwy `H3`.
- **SEO (meta)**:
  - **`seo.title`**: zawiera dopisek marki `| Arteon`, ale jest dość długi.
  - **`seo.description`**: merytoryczny i „sprzedażowy” (zachęca do wdrożenia).
  - **`seo.canonical`**: **niespójny z routingiem**.
    - w danych: `https://www.arteonagency.pl/edukacja/branding/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
    - wg routingu (primary category = `Design`): `/edukacja/design/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow`
- **CTA**:

  - **Występuje**.
  - **Spójność**: bardzo dobra (identyfikacja + kontakt).

- **Plusy**:

  - **[silny temat biznesowy]** „zaufanie” jest bezpośrednio powiązane z konwersją i decyzją zakupową.
  - **[tagi + FAQ]** dobry zestaw pod semantykę i long-tail.
  - **[obrazy]** wspierają UX i wiarygodność (pokazują przykłady w praktyce).
  - **[linkowanie do usług]** w treści pojawiają się linki do ofert (identyfikacja / logo / projekt graficzny) - spójna ścieżka.

- **Minusy / ryzyka**:

  - **[canonical vs primary category]** realne ryzyko konfliktu URL (redirecty, niespójne udostępnienia, rozmycie sygnałów).
  - **[mało źródeł zewnętrznych]** w porównaniu do artykułów „SEO” brak cytowań raportów/badań, które wzmocniłyby E‑E‑A‑T.
  - **[brak H3]** miejscami przydałaby się głębsza hierarchia (lepsza skanowalność i TOC).

- **Braki (co ma / czego nie ma)**:

  - **[ma]** tagi, FAQ, obrazy, linki do usług, logiczne podsumowanie.
  - **[nie ma]** mocnych danych/źródeł, spójnego canonical z routingiem, pogłębienia nagłówków H3.

- **Ton i charakter**:

  - **[doradczy i brandingowy]** skupia się na spójności i profesjonalizmie.
  - **[sprzedażowy]** w naturalny sposób domyka się ofertą.

- **Sugestie ulepszeń (SEO + UX)**:
  - **[naprawa canonical]** zdecydować jedną wersję:
    - jeśli primary ma być `Branding`: przestawić kolejność kategorii na `['Branding', 'Design']`,
    - jeśli primary ma być `Design`: zmienić `seo.canonical` na `/edukacja/design/...`.
  - **[linkowanie wewnętrzne]** dodać link do wpisu o kolorystyce (naturalny klaster: kolorystyka ↔ identyfikacja).
  - **[E‑E‑A‑T]** dodać 2-4 źródła (np. dane o brand consistency, first impression, wpływie spójności na zaufanie).
  - **[struktura]** dodać kilka H3 jako podsekcje (np. logo/kolorystyka/typografia jako osobne warstwy).
  - **[porządek w HTML]** ujednolicić `<br/>`.

---

## Dlaczego strona internetowa nie wyświetla się w Google i jak to naprawić?

- **Slug**: `dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic`
- **Kategorie**: `SEO` (primary), `Widoczność`
- **Daty**:
  - **`datePublished`**: `2025-10-17`
  - **`dateModified`**: `2025-10-28`
- **Szacowany czas czytania**: `13 min`
- **Tagi**: występują (10):
  - `google`
  - `indeksacja`
  - `google search console`
  - `pozycjonowanie`
  - `robot google`
  - `widoczność strony`
  - `sitemap`
  - `plik robots.txt`
  - `algorytm google`
  - `strona internetowa`
- **FAQ**: występuje (3).
- **Format treści (`contentBlocks`)**:
  - **Typy bloków**: `richtext`, `image`, `code`, `table`.
  - **Charakter**: diagnostyczny poradnik z checklistami i przykładami komend/kodu.
- **SEO (meta)**:
  - **`seo.title`**: dość długi (ryzyko ucięcia w SERP).
  - **`seo.description`**: spójny z tematem i obietnicą „kompletny przewodnik”.
  - **`seo.canonical`**: spójny z routingiem (`/edukacja/seo/...`).
- **CTA**:

  - **Występuje**.
  - **Spójność**: bardzo dobra (audyt SEO jako „kolejny krok”).

- **Plusy**:

  - **[najlepsza „narzędziowość”]** to najbardziej praktyczny wpis: pokazuje konkretne kroki, narzędzia i miejsca w GSC.
  - **[różnorodność bloków]** tabele i code bloki poprawiają skanowalność (i są rzadkie w pozostałych artykułach).
  - **[checklisty]** tabele typu „co sprawdzić / gdzie sprawdzić” są bardzo dobre pod featured snippet.
  - **[tagi + FAQ]** wspierają topical authority i long-tail.
  - **[spójne domknięcie]** CTA i link do audytu są naturalnym rozwinięciem problemu.

- **Minusy / ryzyka**:

  - **[miejscami jakość redakcyjna]** drobne literówki i niekonsekwencje („nie widoczna” vs „niewidoczna”, „nie wiele”).
  - **[brak linków do powiązanych wpisów]** materiał naturalnie łączy się z:
    - czasem SEO,
    - pisaniem treści,
    - optymalizacją zdjęć (CWV),
      ale nie linkuje do nich.
  - **[meta title]** warto skrócić dla CTR (temat jest długi, ale powinien być „czytelny w SERP”).

- **Braki (co ma / czego nie ma)**:

  - **[ma]** check-listy, code bloki, obrazy, FAQ, tagi, CTA.
  - **[nie ma]** krótkiego TL;DR na start, większej liczby linków wewnętrznych do powiązanych poradników, dopracowanego HTML (spójne `<br/>`).

- **Ton i charakter**:

  - **[pomocowy i uspokajający]** „to częsty problem, większość błędów da się naprawić”.
  - **[diagnostyczny]** nastawiony na rozwiązywanie problemów krok po kroku.
  - **[konsultacyjny]** naturalnie prowadzi do audytu SEO jako następnego etapu.

- **Sugestie ulepszeń (SEO + UX)**:
  - **[porządek w HTML]** utrzymać spójne łamania linii (`<br/>`).
  - **[internal linking]** dodać linki do powiązanych wpisów (klaster: indeksacja ↔ treści ↔ CWV ↔ czas SEO).
  - **[FAQ]** rozbudować do 6-8 pytań, np.:
    - „Czy sitemap gwarantuje indeksację?”
    - „Co oznacza ‘zeskanowana, ale nie zindeksowana’?”
    - „Jak długo trwa ponowna indeksacja po poprawkach?”
  - **[sekcja scenariuszy]** dodać krótkie podrozdziały: „po migracji”, „po przebudowie strony”, „po aktualizacji core update”.
  - **[meta title]** skrócić i dodać wyraźny benefit (np. „checklista” lub „krok po kroku”).

---

## Wspólne obserwacje i rekomendacje (dla całego bloga)

- **[Tagi]**

  - Tylko część wpisów ma `tags[]`.
  - Rekomendacja: dodać tagi do wszystkich artykułów i ustandaryzować słownictwo (np. `Core Web Vitals` vs `CWV`, `local seo` vs `lokalne seo`).

- **[FAQ]**

  - Tylko część wpisów ma `faq[]`.
  - Rekomendacja: w tematach SEO/marketing/UX dodawać min. 5-8 pytań, bo to zwykle zwiększa pokrycie long-tail.

- **[Linkowanie wewnętrzne]**

  - Największy potencjał do poprawy: pierwsze wpisy (kolorystyka, czas SEO, blog lokalny) praktycznie nie tworzą sieci linków między artykułami.
  - Rekomendacja: budować klastry tematyczne i łączyć wpisy ze sobą:
    - `czas SEO` ↔ `indeksacja / brak widoczności` ↔ `pisanie treści` ↔ `blog lokalny` ↔ `CWV / optymalizacja zdjęć`.

- **[Spójność canonical i routingu]**

  - Występuje realne ryzyko niespójności, gdy `seo.canonical` wskazuje inną kategorię niż primary category (pierwszy element `category[]`).
  - Rekomendacja: dla każdego wpisu dopilnować, aby canonical był równy:
    - `https://www.arteonagency.pl/edukacja/{slugify(category[0])}/{slug}`.

- **[Jakość HTML w `richtext.html`]**

  - Łamania linii są ustandaryzowane do `<br/>`.
  - Rekomendacja: okresowo skanować treści pod kątem błędów HTML.

- **[Standaryzacja meta]**

  - Część wpisów ma dopisek `| Arteon` w `seo.title`, część nie.
  - Rekomendacja: ujednolicić format meta title i pilnować długości (CTR + brak ucięcia w SERP).

- **[Multimedia / struktury danych]**

  - W wielu wpisach dominuje sam `richtext`, mimo że projekt wspiera `image`, `table`, `code`.
  - Rekomendacja: świadomie dodawać:
    - tabele porównawcze (formaty, checklisty),
    - przykłady kodu (SEO techniczne),
    - grafiki (zwłaszcza w wpisach o design/kolorach).

- **[Jakość redakcyjna]**
  - W części tekstów pojawiają się literówki.
  - Rekomendacja: szybka korekta językowa przed publikacją (wizerunek + E‑E‑A‑T).
