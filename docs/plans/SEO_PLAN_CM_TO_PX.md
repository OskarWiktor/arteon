# Plan SEO – Konwerter cm na px (PL → master plan dla 16 lokalizacji)

> **Zasada:** Najpierw doszlifowujemy PL. EN/DE/ES/FR/PT/IT/RO/NL/HU/CS/SV/DA/NO/FI/EL = tłumaczenie 1:1 z lokalnymi nazwami formatów (passport photo, business card, paper sizes).

---

## 1. Stan obecny i diagnoza

### Co robimy dobrze

- Mocny FAQ techniczny (8 pytań), kompletne schemy (SoftwareApplication + HowTo).
- Featurelist sygnalizujący korzyści (DPI 72/96/150/300, kopiowanie, bez rejestracji).
- Tabela `sectionFeatureComparison` cm vs px.
- Lokalne obliczenia (privacy).

### Co tracimy SEO (luki vs. konkurencja i dane z search consoli)

| Luka                                                                                                                              | Skutek                                                                                           | Źródło                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Brak tabeli „1 cm w px dla różnych DPI"                                                                                           | Tracimy long-tail `cm to px 72/96/150/300/600 dpi`                                               | pixelto.net, unitconverters.net                                                           |
| Brak tabeli odwrotnej (px → cm)                                                                                                   | Tracimy `300 px to cm`, `px to cm`, `ile cm ma 1500 px`                                          | pixelto.net px-to-cm                                                                      |
| Brak tabeli formatów (A0–A7, 3,5×4,5, 9×13, 10×15, 4×6, 13×18, 15×21, 20×30, 50×70, 70×100, 85×200 banner, wizytówka 90×50/85×55) | Tracimy `a4 size cm to px`, `passport size cm to px`, `42 x 59.4 cm to px`, `4.5 x 3.5 cm to px` | search vol. 0–10 każde, łącznie ~150 wariantów                                            |
| Brak sekcji o programach (Photoshop, Figma, Canva, Illustrator, Procreate, Word, Excel, PowerPoint, CSS)                          | Tracimy ~80–100 wariantów `cm to px in <software>` (każde 10)                                    | CSV EN: cm to px photoshop / figma / canva / procreate / illustrator / excel / html / css |
| Sztywne pytania FAQ (głównie o druk)                                                                                              | Brak match na popularne intencje typu „ile pikseli ma 1 cm/5 cm/10 cm/20 cm"                     | dane z answerthepublic PL + PAA EN                                                        |
| Brak konkretnych wartości w treści (1 cm = 38 px / 118 px)                                                                        | Tracimy snippet kandydatów w SERP                                                                | pixelto.net wygrywa featured snippet                                                      |
| Brak osobnej mini-sekcji „ile pikseli ma X cm" dla popularnych liczb 1, 2, 3, 5, 10, 20                                           | Tracimy direct-answer                                                                            | answerthepublic + paas csv                                                                |

### Kluczowe dane z analizy CSV (EN, US)

**Head:** `cm to px` 1,3K · `convert cm to px` 210 · `cm to px converter` 170 · `cm to px conversion` 170
**Tools-bound (vol 10 każde):** photoshop, figma, canva, procreate, illustrator, excel, html, css, word, powerpoint
**Wartości (vol 10 każde):** 0,3 · 0,5 · 1,5 · 2 · 2,5 · 3,5 · 4 · 4,5 · 5 · 5,5 · 6 · 6,5 · 7 · 7,5 · 8 · 8,5 · 8,6 · 9 · 9,5 · 10 · 12 · 20 · 40 · 50 · 60 · 70 · 90
**Formaty (vol 0–10):** 42×59,4 (A2) · 21×29,7 (A4) · 4,5×3,5 (passport EU) · 5,4×8,6 (CC) · 4×6 · 9×6 · 50×70 · 30×40 · 20×30 · 13×18 · 70×100 · 85×200
**Pytania:** how to convert · how many px is 1/2/4/5 cm · what is 1/2/5 cm in px · what size is 1/2/4 cm · how wide/small · how to visualize

### Kluczowe pytania PL (od użytkownika + answerthepublic)

1. ile px ma 1 cm
2. jak przeliczyć cm na px
3. ile wynosi 1 px w cm
4. ile px to 5 cm
5. ile pikseli ma 10 cm
6. ile pikseli ma 20 cm

---

## 2. Strategia: 5 dźwigni SEO

### Dźwignia 1 – Cross-tab tabela DPI (replace `sectionFeatureComparison`)

Zamiast jednej kolumny przykładów, robimy macierz **cm × DPI** w `sectionInfo` z HTML `<table>`:

| cm     | 72 DPI  | 96 DPI  | 150 DPI | 300 DPI    | 600 DPI  |
| ------ | ------- | ------- | ------- | ---------- | -------- |
| 0,5 cm | 14 px   | 19 px   | 30 px   | 59 px      | 118 px   |
| 1 cm   | 28 px   | 38 px   | 59 px   | **118 px** | 236 px   |
| 1,5 cm | 43 px   | 57 px   | 89 px   | 177 px     | 354 px   |
| 2 cm   | 57 px   | 76 px   | 118 px  | 236 px     | 472 px   |
| 2,5 cm | 71 px   | 94 px   | 148 px  | 295 px     | 591 px   |
| 3 cm   | 85 px   | 113 px  | 177 px  | 354 px     | 709 px   |
| 3,5 cm | 99 px   | 132 px  | 207 px  | 413 px     | 827 px   |
| 4 cm   | 113 px  | 151 px  | 236 px  | 472 px     | 945 px   |
| 4,5 cm | 128 px  | 170 px  | 266 px  | 531 px     | 1063 px  |
| 5 cm   | 142 px  | 189 px  | 295 px  | 591 px     | 1181 px  |
| 6 cm   | 170 px  | 227 px  | 354 px  | 709 px     | 1417 px  |
| 7 cm   | 198 px  | 264 px  | 413 px  | 827 px     | 1654 px  |
| 8 cm   | 227 px  | 302 px  | 472 px  | 945 px     | 1890 px  |
| 9 cm   | 255 px  | 340 px  | 531 px  | 1063 px    | 2126 px  |
| 10 cm  | 283 px  | 378 px  | 591 px  | 1181 px    | 2362 px  |
| 12 cm  | 340 px  | 454 px  | 709 px  | 1417 px    | 2835 px  |
| 15 cm  | 425 px  | 567 px  | 886 px  | 1772 px    | 3543 px  |
| 20 cm  | 567 px  | 756 px  | 1181 px | 2362 px    | 4724 px  |
| 25 cm  | 709 px  | 945 px  | 1476 px | 2953 px    | 5906 px  |
| 30 cm  | 850 px  | 1134 px | 1772 px | 3543 px    | 7087 px  |
| 50 cm  | 1417 px | 1890 px | 2953 px | 5906 px    | 11811 px |
| 100 cm | 2835 px | 3780 px | 5906 px | 11811 px   | 23622 px |

> **Format CSS:** wąska tabela responsywna z `text-mid`, `border`, `tabular-nums`, header sticky na mobile. Wartość 300 DPI wyboldowana (najczęstsza intencja druku).

### Dźwignia 2 – Odwrotna tabela px → cm (nowa sekcja `sectionInfo`)

Najczęściej wyszukiwane szerokości px → cm:

| px      | 72 DPI    | 96 DPI   | 150 DPI  | 300 DPI           |
| ------- | --------- | -------- | -------- | ----------------- |
| 100 px  | 3,53 cm   | 2,65 cm  | 1,69 cm  | 0,85 cm           |
| 200 px  | 7,06 cm   | 5,29 cm  | 3,39 cm  | 1,69 cm           |
| 300 px  | 10,58 cm  | 7,94 cm  | 5,08 cm  | 2,54 cm           |
| 500 px  | 17,64 cm  | 13,23 cm | 8,47 cm  | 4,23 cm           |
| 600 px  | 21,17 cm  | 15,88 cm | 10,16 cm | 5,08 cm           |
| 800 px  | 28,22 cm  | 21,17 cm | 13,55 cm | 6,77 cm           |
| 1000 px | 35,28 cm  | 26,46 cm | 16,93 cm | 8,47 cm           |
| 1200 px | 42,33 cm  | 31,75 cm | 20,32 cm | 10,16 cm          |
| 1500 px | 52,92 cm  | 39,69 cm | 25,40 cm | 12,70 cm          |
| 1920 px | 67,73 cm  | 50,80 cm | 32,51 cm | 16,26 cm          |
| 2480 px | 87,47 cm  | 65,62 cm | 42,00 cm | **21,00 cm** (A4) |
| 3000 px | 105,83 cm | 79,38 cm | 50,80 cm | 25,40 cm          |
| 3508 px | 123,73 cm | 92,82 cm | 59,40 cm | **29,70 cm** (A4) |

Wyróżnić 2480/3508 px = A4 przy 300 DPI – mocny snippet kandydat.

### Dźwignia 3 – Tabela popularnych formatów fotograficznych i drukowych (nowa sekcja `sectionInfo`)

Format → wymiary w cm → w pikselach przy 300 DPI (i 150 DPI):

| Format                       | Wymiary (cm) | Piksele 300 DPI | Piksele 150 DPI | Przeznaczenie             |
| ---------------------------- | ------------ | --------------- | --------------- | ------------------------- |
| **A0**                       | 84,1 × 118,9 | 9933 × 14043    | 4967 × 7022     | Plakat wielkoformatowy    |
| **A1**                       | 59,4 × 84,1  | 7016 × 9933     | 3508 × 4967     | Plakat reklamowy          |
| **A2**                       | 42,0 × 59,4  | 4961 × 7016     | 2480 × 3508     | Plakat wystawowy          |
| **A3**                       | 29,7 × 42,0  | 3508 × 4961     | 1754 × 2480     | Plakat A3, ulotki         |
| **A4**                       | 21,0 × 29,7  | **2480 × 3508** | 1240 × 1754     | Druk biurowy, raporty     |
| **A5**                       | 14,8 × 21,0  | 1748 × 2480     | 874 × 1240      | Ulotka, notes             |
| **A6**                       | 10,5 × 14,8  | 1240 × 1748     | 620 × 874       | Pocztówka, ulotka         |
| **A7**                       | 7,4 × 10,5   | 874 × 1240      | 437 × 620       | Bilet, etykieta           |
| **Zdjęcie 9×13**             | 9 × 13       | 1063 × 1535     | 531 × 768       | Standardowe zdjęcie       |
| **Zdjęcie 10×15**            | 10 × 15      | 1181 × 1772     | 591 × 886       | Najpopularniejsza odbitka |
| **Zdjęcie 13×18**            | 13 × 18      | 1535 × 2126     | 768 × 1063      | Powiększenie              |
| **Zdjęcie 15×21**            | 15 × 21      | 1772 × 2480     | 886 × 1240      | Powiększenie A5           |
| **Zdjęcie 20×30**            | 20 × 30      | 2362 × 3543     | 1181 × 1772     | Plakat A4 / poster        |
| **Zdjęcie 30×40**            | 30 × 40      | 3543 × 4724     | 1772 × 2362     | Powiększenie              |
| **Zdjęcie 50×70**            | 50 × 70      | 5906 × 8268     | 2953 × 4134     | Plakat fotograficzny      |
| **Zdjęcie 70×100**           | 70 × 100     | 8268 × 11811    | 4134 × 5906     | Wielki print              |
| **Foto do dowodu/paszportu** | 3,5 × 4,5    | 413 × 531       | 207 × 266       | PL paszport, dowód        |
| **Wizytówka PL**             | 9,0 × 5,0    | 1063 × 591      | 531 × 295       | Standard PL               |
| **Wizytówka EU**             | 8,5 × 5,5    | 1004 × 650      | 502 × 325       | Standard ISO 7810 ID-1    |
| **Wizytówka US**             | 8,89 × 5,08  | 1050 × 600      | 525 × 300       | Standard US               |
| **Roll-up baner**            | 85 × 200     | 10039 × 23622   | 5020 × 11811    | Stand reklamowy           |

Dodać krótki akapit nad tabelą: „**Bezpośrednie odpowiedzi na popularne pytania**: A4 to 2480 × 3508 px przy 300 DPI, zdjęcie 10×15 cm to 1181 × 1772 px, foto do paszportu 3,5×4,5 cm – 413 × 531 px."

### Dźwignia 4 – Sekcja „cm na px w popularnych programach" (`sectionTabs`)

Taby z przewodnikami (każdy ~80 słów + 1 zrzut/diagram opisany alt-textem):

1. **Adobe Photoshop** – `Image > Image Size` → przełącz jednostki, ustaw 300 DPI / Resample off
2. **Adobe Illustrator** – `Edit > Preferences > Units > General: Pixels`, ale rozmiar fizyczny zachowany przez DPI dokumentu
3. **Figma** – Figma używa wyłącznie px (96 DPI); aby zaprojektować coś do druku, wpisz wymiar w px przeliczony naszym konwerterem
4. **Canva** – Custom Size → wpisz w cm/mm; Canva przeliczy automatycznie przy eksporcie 300 DPI dla druku
5. **Procreate** – Tworząc canvas wybierz „Centymetry" + 300 DPI, lub wpisz w pikselach z konwertera
6. **MS Word / Excel / PowerPoint** – Office używa cm, ale eksportując PDF/PNG do druku ustaw 300 DPI w opcjach
7. **CSS / HTML** – W CSS `1cm = 96 / 2.54 = 37,8 px` (stała wartość niezależna od ekranu, używaj `px` lub `rem`)

> **Słowa-klucze pokryte:** `cm to px in photoshop` (10) · `cm to px figma` (10) · `cm to px canva` (10) · `cm to px illustrator` (10) · `cm to px procreate` (10) · `cm to px excel` · `word cm to px` · `cm to px html / css`

### Dźwignia 5 – Przebudowane FAQ (focus na cm/px, nie na druk)

Wymieniamy 8 starych pytań na 12 nowych skupionych na intencjach:

1. **Ile pikseli ma 1 cm?** → „Przy standardzie web (96 DPI): 1 cm ≈ 38 px. Przy druku (300 DPI): 1 cm ≈ 118 px. Wzór: px = cm × DPI / 2,54."
2. **Jak przeliczyć cm na px?** → Wzór + przykład krok po kroku (5 cm @ 300 DPI = 590 px)
3. **Ile wynosi 1 px w cm?** → 1 px ≈ 0,0265 cm (96 DPI) lub 0,0085 cm (300 DPI). Wzór: cm = px × 2,54 / DPI
4. **Ile pikseli ma 5 cm?** → 5 cm = 189 px (96 DPI) / 591 px (300 DPI) / 1181 px (600 DPI)
5. **Ile pikseli ma 10 cm?** → 10 cm = 378 px (96 DPI) / 1181 px (300 DPI) / 2362 px (600 DPI)
6. **Ile pikseli ma 20 cm?** → 20 cm = 756 px (96 DPI) / 2362 px (300 DPI) / 4724 px (600 DPI)
7. **Ile pikseli ma A4 przy 300 DPI?** → 2480 × 3508 px (21 × 29,7 cm)
8. **Ile pikseli ma zdjęcie 10×15 cm?** → 1181 × 1772 px przy 300 DPI; idealne do odbitki fotograficznej
9. **Ile pikseli ma foto do paszportu (3,5×4,5 cm)?** → 413 × 531 px przy 300 DPI (zgodne z wymogami biur paszportowych)
10. **Jak przeliczyć cm na px w Photoshopie / Canvie / Figmie?** → 1 zdanie + odesłanie do sekcji „w popularnych programach"
11. **Czym różni się DPI od PPI?** → Krótko: DPI = punkty farby w druku; PPI = piksele na ekranie. Liczbowo identyczne, terminologicznie różne
12. **Ile pikseli ma cm na ekranie Retina (2×)?** → Standardowo zapisujesz grafikę o 2× pikselach (1 cm = 76 px zamiast 38 px) i deklarujesz 96 DPI

> Każde pytanie kończy się jedną twardą liczbą – kandydat na featured snippet.

---

## 3. Nowa struktura `contentBlocks` (finalny szkielet PL)

```
1.  gap line
2.  sectionBasic   – „Co to znaczy przeliczyć centymetry na piksele?" (kontekst + 1 cm = 38 / 118 px direct answer w pierwszych 60 słowach)
3.  sectionSteps (3 cols) – „Jak korzystać z konwertera" (bez zmian, ulepszony copy)
4.  gap line
5.  sectionInfo (HTML table)   – „Tabela: 1 cm = ile px przy 72 / 96 / 150 / 300 / 600 DPI" [DŹWIGNIA 1]
6.  gap line
7.  sectionInfo (HTML table)   – „Odwrotnie: ile cm to popularne wartości px" [DŹWIGNIA 2]
8.  gap line
9.  sectionInfo (HTML table)   – „Popularne formaty w cm i pikselach (A0–A7, zdjęcia, paszport, wizytówki, banery)" [DŹWIGNIA 3]
10. gap line
11. sectionTabs   – „Jak ustawić cm na px w popularnych programach" (7 tabów) [DŹWIGNIA 4]
12. gap line
13. sectionInfo   – „Jak działa konwersja cm na px (wzór + przykład)"
14. gap line
15. sectionSteps (4 cols) – „Kiedy przydaje się ten konwerter" (4 use case)
16. gap line
17. sectionFeatureComparison – „Centymetr vs piksel" (zachować, kompaktowa wartość edukacyjna)
18. gap line
19. faq   – 12 pytań [DŹWIGNIA 5]
20. gap line
21. contactForm
22. gap line
23. toolsCarousel
```

> **Razem:** ~14 sekcji treści (było 11) – tylko +3 bloki, ale +400% pokrytych długich ogonów.

---

## 4. Zmiany w metadata / hero / schema

### Metadata

- **Title (≤60 znaków):** `Konwerter cm na px – ile pikseli ma centymetr (DPI)`
- **Description (≤160 znaków):** `Przelicz centymetry na piksele dla 72/96/150/300/600 DPI. 1 cm = 38 px (web) lub 118 px (druk). Tabele formatów A4, zdjęć, paszportu. Bez rejestracji.`

### Hero

- **Title:** `Konwerter cm na px – ile pikseli ma centymetr przy danym DPI`
- **Description:** `Wpisz wymiary w cm, ustaw DPI i sprawdź wynik w px. Tabele dla A0–A7, zdjęć, paszportu i wizytówek przy 300 DPI. Działa w przeglądarce, bez instalacji.`

### Schema – SoftwareApplication

- `name`: `Konwerter cm na px (centymetry na piksele) – kalkulator DPI`
- `alternateName`: `["Przelicznik cm na px", "Kalkulator cm na piksele", "Ile pikseli ma centymetr", "cm to pixels converter", "Konwerter centymetrów na piksele"]`
- `description`: dodać „1 cm = 38 px przy 96 DPI, 118 px przy 300 DPI"
- `featureList`: dodać:
  - „Cross-tab tabela cm × DPI (72/96/150/300/600)"
  - „Tabela formatów A0–A7 w pikselach"
  - „Wymiary fotografii 9×13, 10×15, 13×18, 20×30 w px"
  - „Foto do paszportu 3,5×4,5 cm w pikselach"
  - „Wizytówki PL/EU/US w pikselach"
  - „Przewodniki dla Photoshop, Figma, Canva, Illustrator, Procreate"

### Schema – HowTo

Bez zmian funkcji, ale doprecyzować step 1: „Wpisz liczbę centymetrów (np. 5, 10, 20) – zobacz wynik w px"

---

## 5. Reguły kopirajterskie (zgodne z brand voice)

- **Bez „online", bez emoji, bez clickbaitu** (zgodnie z `arteon-seo`)
- **Konkretne liczby w pierwszych 60 słowach każdej sekcji** (`1 cm = 38 px`, `1 cm = 118 px`)
- **Naturalne pytania użytkownika** w nagłówkach: „Ile pikseli ma…", „Jak przeliczyć…"
- **Polskie przykłady** (PL paszport 3,5×4,5; PL wizytówka 9×5; PL drukarnie wymagają spadu 3 mm)
- **2 os. l. poj.** dla użytkownika, 1 os. l. mn. dla Arteon
- **Wzory matematyczne raz** (w sekcji „Jak działa") – nie powtarzać w każdej sekcji

---

## 6. Plan przeniesienia na inne lokalizacje

Po zatwierdzeniu PL, dla każdej z 15 pozostałych lokalizacji:

| Lokalizacja     | Adaptacje treści (poza tłumaczeniem)                                                            |
| --------------- | ----------------------------------------------------------------------------------------------- |
| **EN**          | „passport photo 2×2 inch" obok 3,5×4,5; CC business card 3,5×2 inch; Letter (8,5×11 in) obok A4 |
| **DE**          | DIN A-Formate (te same wymiary); Visitenkarte 85×55 mm; Passbild 35×45 mm (jak PL)              |
| **ES**          | Foto carnet 32×26 mm + DNI 32×40 mm; Letter mniej popularny                                     |
| **FR**          | Photo identité 35×45 mm; Carte de visite 85×55 mm                                               |
| **PT**          | Foto passe 35×45 mm; Cartão de visita 85×55 mm                                                  |
| **IT**          | Foto tessera 35×45 mm; Biglietto da visita 85×55 mm                                             |
| **RO**          | Poza standardami EU, dodać `unelte`-style przykłady                                             |
| **NL**          | Pasfoto 35×45 mm; standardowo formaty EU                                                        |
| **HU**          | Igazolványkép 35×45 mm                                                                          |
| **CS**          | Fotografie na občanku/pas 35×45 mm                                                              |
| **SV/DA/NO/FI** | Skandynawskie standardy: passfoto 35×45 mm                                                      |
| **EL**          | Φωτογραφία ταυτότητας 36×40 mm + standardy EU                                                   |

**Wszystkie tabele konwersji DPI (Dźwignia 1, 2) są uniwersalne – kopiujemy 1:1.**
**Tabela formatów (Dźwignia 3) – wymienić tylko foto do dokumentów i wizytówki w wierszach lokalnych.**

---

## 7. KPI sukcesu (do mierzenia po 60 dniach)

| Metryka                                                   | Baseline (szacunek) | Cel     |
| --------------------------------------------------------- | ------------------- | ------- |
| Pozycja PL `konwerter cm na px`                           | top 3–5             | top 1–3 |
| Pozycja PL `ile pikseli ma 1 cm`                          | brak / 10+          | top 5   |
| Liczba unikalnych zapytań w GSC (PL)                      | ~50                 | 150+    |
| CTR sniprtu PL                                            | ~3%                 | 6%+     |
| Czas na stronie                                           | –                   | +20%    |
| Strony per sesja (do innych narzędzi przez ToolsCarousel) | –                   | +15%    |

---

## 8. Kolejność wdrożenia

1. **Krok 1** – aktualizacja `data/pl/tools/unit-cm-to-px-dpi.json` zgodnie z sekcją 3 (struktura) + sekcją 4 (metadata).
2. **Krok 2** – jeśli `sectionInfo` z HTML <table> nie ma dobrego stylu responsywnego, dorobić Tailwindowe klasy w `SectionInfo.tsx` (sticky header, `overflow-x-auto`, `tabular-nums`).
3. **Krok 3** – build + lint + lokalny smoke test (3 widoki: mobile 360 / tablet 768 / desktop 1440).
4. **Krok 4** – deploy → odczekać 7–14 dni → sprawdzić GSC (impresje + CTR + pozycje).
5. **Krok 5** – kopiować strukturę PL do `data/en/tools/...` z lokalnymi formatami.
6. **Krok 6** – pozostałe 14 lokalizacji (batch 3–4 dziennie).

---

## 9. Co świadomie pomijamy

- **FAQPage schema** – wg Google 2025 tylko dla rządowych/medycznych domen, na nasze nie zadziała w SERP.
- **Tabele cm → px dla 1–600 DPI co 1 DPI** (jak pixelto.net) – zbyt długie, mała wartość per wiersz, gorsze UX, ryzyko thin content.
- **Sekcja „Historia DPI"** – niska intencja transakcyjna, brak ruchu.
- **Wbudowane kalkulatory mm/inch** – mamy je w innych narzędziach (cross-link przez `toolsCarousel` + `RelatedUnitConverters`).
