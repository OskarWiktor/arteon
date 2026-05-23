# Macierz konwersji formatów

Audyt 64 narzędzi konwertujących w `data/pl/tools/converter-*.json` — które pary X⇄Y istnieją, a w których kierunek odwrotny jest niezaimplementowany.

**Stan na dzień:** 2026-05-22

## Statystyki

- **64 narzędzia konwertujące** (`converter-*.json`)
- **18 unikalnych formatów**: avif, base64, bmp, csv, gif, heic, html, image, jpg, json, markdown, pdf, png, svg, tiff, webp, xml, yaml
- **21 par symetrycznych** (oba kierunki istnieją)
- **22 pary asymetryczne** (brakuje konwersji odwrotnej)

---

## Macierz konwersji obrazów

Legenda: `✓` = istnieje · `·` = brak · `-` = N/A (ten sam format).

| from \\ to | avif | bmp | gif | heic | jpg | pdf | png | svg | tiff | webp |
| ---------- | :--: | :-: | :-: | :--: | :-: | :-: | :-: | :-: | :--: | :--: |
| **avif**   |  -   |  ·  |  ·  |  ·   |  ✓  |  ·  |  ✓  |  ·  |  ✓   |  ✓   |
| **bmp**    |  ✓   |  -  |  ✓  |  ·   |  ✓  |  ✓  |  ✓  |  ·  |  ✓   |  ✓   |
| **gif**    |  ✓   |  ·  |  -  |  ·   |  ✓  |  ·  |  ✓  |  ·  |  ·   |  ✓   |
| **heic**   |  ✓   |  ·  |  ·  |  -   |  ✓  |  ✓  |  ✓  |  ·  |  ✓   |  ✓   |
| **jpg**    |  ✓   |  ·  |  ✓  |  ·   |  -  |  ✓  |  ✓  |  ·  |  ✓   |  ✓   |
| **pdf**    |  ·   |  ·  |  ·  |  ·   |  ✓  |  -  |  ✓  |  ·  |  ·   |  ✓   |
| **png**    |  ✓   |  ·  |  ✓  |  ·   |  ✓  |  ✓  |  -  |  ·  |  ✓   |  ✓   |
| **svg**    |  ✓   |  ·  |  ✓  |  ·   |  ✓  |  ✓  |  ✓  |  -  |  ✓   |  ✓   |
| **tiff**   |  ✓   |  ·  |  ·  |  ·   |  ✓  |  ✓  |  ✓  |  ·  |  -   |  ✓   |
| **webp**   |  ✓   |  ·  |  ✓  |  ·   |  ✓  |  ✓  |  ✓  |  ·  |  ✓   |  -   |

### Konwersje tekstowe / dane (osobne klastry, wszystkie symetryczne)

- `html` ⇄ `markdown`
- `csv` ⇄ `json`
- `json` ⇄ `xml`
- `json` ⇄ `yaml`
- `base64` ⇄ `image`

---

## Pary symetryczne (oba kierunki istnieją)

21 par, w których oba narzędzia są zaimplementowane.

| Para            |
| --------------- |
| avif ⇄ jpg      |
| avif ⇄ png      |
| avif ⇄ tiff     |
| avif ⇄ webp     |
| base64 ⇄ image  |
| csv ⇄ json      |
| gif ⇄ jpg       |
| gif ⇄ png       |
| gif ⇄ webp      |
| html ⇄ markdown |
| jpg ⇄ pdf       |
| jpg ⇄ png       |
| jpg ⇄ tiff      |
| jpg ⇄ webp      |
| json ⇄ xml      |
| json ⇄ yaml     |
| pdf ⇄ png       |
| pdf ⇄ webp      |
| png ⇄ tiff      |
| png ⇄ webp      |
| tiff ⇄ webp     |

---

## Brakujące konwersje odwrotne (22 pozycje)

Pary, w których istnieje konwersja `X → Y`, ale **nie ma** narzędzia dla kierunku `Y → X`.

| Istniejące X → Y | Brakujące Y → X | Plik istniejący                                                             |
| ---------------- | --------------- | --------------------------------------------------------------------------- |
| bmp → avif       | **avif → bmp**  | [converter-bmp-to-avif.json](../data/pl/tools/converter-bmp-to-avif.json)   |
| bmp → gif        | **gif → bmp**   | [converter-bmp-to-gif.json](../data/pl/tools/converter-bmp-to-gif.json)     |
| bmp → jpg        | **jpg → bmp**   | [converter-bmp-to-jpg.json](../data/pl/tools/converter-bmp-to-jpg.json)     |
| bmp → pdf        | **pdf → bmp**   | [converter-bmp-to-pdf.json](../data/pl/tools/converter-bmp-to-pdf.json)     |
| bmp → png        | **png → bmp**   | [converter-bmp-to-png.json](../data/pl/tools/converter-bmp-to-png.json)     |
| bmp → tiff       | **tiff → bmp**  | [converter-bmp-to-tiff.json](../data/pl/tools/converter-bmp-to-tiff.json)   |
| bmp → webp       | **webp → bmp**  | [converter-bmp-to-webp.json](../data/pl/tools/converter-bmp-to-webp.json)   |
| gif → avif       | **avif → gif**  | [converter-gif-to-avif.json](../data/pl/tools/converter-gif-to-avif.json)   |
| heic → avif      | **avif → heic** | [converter-heic-to-avif.json](../data/pl/tools/converter-heic-to-avif.json) |
| heic → jpg       | **jpg → heic**  | [converter-heic-to-jpg.json](../data/pl/tools/converter-heic-to-jpg.json)   |
| heic → pdf       | **pdf → heic**  | [converter-heic-to-pdf.json](../data/pl/tools/converter-heic-to-pdf.json)   |
| heic → png       | **png → heic**  | [converter-heic-to-png.json](../data/pl/tools/converter-heic-to-png.json)   |
| heic → tiff      | **tiff → heic** | [converter-heic-to-tiff.json](../data/pl/tools/converter-heic-to-tiff.json) |
| heic → webp      | **webp → heic** | [converter-heic-to-webp.json](../data/pl/tools/converter-heic-to-webp.json) |
| svg → avif       | **avif → svg**  | [converter-svg-to-avif.json](../data/pl/tools/converter-svg-to-avif.json)   |
| svg → gif        | **gif → svg**   | [converter-svg-to-gif.json](../data/pl/tools/converter-svg-to-gif.json)     |
| svg → jpg        | **jpg → svg**   | [converter-svg-to-jpg.json](../data/pl/tools/converter-svg-to-jpg.json)     |
| svg → pdf        | **pdf → svg**   | [converter-svg-to-pdf.json](../data/pl/tools/converter-svg-to-pdf.json)     |
| svg → png        | **png → svg**   | [converter-svg-to-png.json](../data/pl/tools/converter-svg-to-png.json)     |
| svg → tiff       | **tiff → svg**  | [converter-svg-to-tiff.json](../data/pl/tools/converter-svg-to-tiff.json)   |
| svg → webp       | **webp → svg**  | [converter-svg-to-webp.json](../data/pl/tools/converter-svg-to-webp.json)   |
| tiff → pdf       | **pdf → tiff**  | [converter-tiff-to-pdf.json](../data/pl/tools/converter-tiff-to-pdf.json)   |

---

## Pogrupowane „do dodania" wg formatu źródłowego

| Format źródłowy | Brakuje konwersji do |
| --------------- | -------------------- |
| **AVIF**        | bmp, gif, heic, svg  |
| **GIF**         | bmp, svg             |
| **JPG**         | bmp, heic, svg       |
| **PDF**         | bmp, heic, svg, tiff |
| **PNG**         | bmp, heic, svg       |
| **TIFF**        | bmp, heic, svg       |
| **WEBP**        | bmp, heic, svg       |

---

## Formaty „in-only" (prawdopodobnie celowo niesymetryczne)

Trzy formaty występują wyłącznie jako **źródło** konwersji, nigdy jako cel:

| Format   | Powód braku odwrotności                                                                                                                                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BMP**  | Format archaiczny — produkcja BMP nie ma użytecznego case'u w 2026. Istnieje 7 konwersji „z BMP" dla użytkowników mających stare pliki.                                                                                                        |
| **HEIC** | Format ekosystemu Apple — pliki HEIC powstają tylko na iPhone'ach/iPadach, nie ma sensu konwertować innych formatów na HEIC. Istnieje 6 konwersji „z HEIC".                                                                                    |
| **SVG**  | Konwersja `raster → SVG` wymaga auto-trace (decyzje projektowe — uproszczenie krzywych, redukcja kolorów, identyfikacja warstw), nie jest możliwa „jednym przyciskiem". Istnieje 7 konwersji „z SVG" (raster jest deterministycznym wynikiem). |

Decyzja: te formaty pozostawiamy jako in-only. Nie traktujemy ich jako luki do uzupełnienia.

---

## Rekomendacje

### Priorytet wysoki (warte uzupełnienia, sensowne user intent)

1. **avif → gif** — animacje AVIF na GIF dla starych systemów i komunikatorów
2. **pdf → tiff** — skanowanie i druk profesjonalny

### Priorytet niski

Pozostałe braki dotyczą głównie formatów „in-only" (BMP/HEIC/SVG). Dokończenie „kwadratu webowego" `avif/gif/jpg/png/tiff/webp` jest już niemal kompletne — brakuje tylko `avif ⇄ gif`.

### Bez działania

Wszystkie pary `* → bmp`, `* → heic`, `* → svg` — patrz sekcja „in-only" powyżej.

---

## Reprodukcja audytu

Skrypt analityczny: `c:/tmp/analyze-converters.js`

Zlicza pliki `data/pl/tools/converter-*.json`, parsuje nazwy w schemacie `converter-X-to-Y.json`, buduje macierz istnienia i wykrywa pary asymetryczne.

---

# Brakujące popularne konwersje plików (web research)

Analiza popularności konwersji plików na podstawie web research (Smallpdf, favicon.io, Convertio, AnyConv, Konwerter-Online.pl, benchmark.pl, pic-convert.com, a2zconverter.com).

**Zakres:** konwersje plików (jpg, png, docx, mp3, mp4, raw, …). **Pominięto:** konwersje jednostek (vw→px, rgb→hsl, tw→px).

## Brakujące konwersje — każda para osobno

Każdy wiersz to konkretna pojedyncza konwersja `X → Y`. Pogrupowane w kategorie.

### Kategoria: Favicon / ICO

| #   | Konwersja     | Uzasadnienie                                | Konkurencja PL                      | Priorytet |
| --- | ------------- | ------------------------------------------- | ----------------------------------- | --------- |
| 1   | **PNG → ICO** | Standard tworzenia favicony z grafiki PNG   | wysoka (favicon.io, convertico.com) | **1**     |
| 2   | **JPG → ICO** | Tworzenie favicony z fotografii/logo JPG    | wysoka                              | **1**     |
| 3   | **SVG → ICO** | Tworzenie favicony z grafiki wektorowej     | średnia                             | **1**     |
| 4   | **ICO → PNG** | Wyciągnięcie grafiki z istniejącej favicony | niska-średnia                       | **3**     |
| 5   | **ICO → JPG** | jw.                                         | niska                               | **3**     |

### Kategoria: Dokumenty Office — DOCX / DOC

| #   | Konwersja       | Uzasadnienie                                                                | Konkurencja PL                              | Priorytet |
| --- | --------------- | --------------------------------------------------------------------------- | ------------------------------------------- | --------- |
| 6   | **DOCX → PDF**  | Najpopularniejsza konwersja Office globalna (Smallpdf 1.7 mld użytkowników) | top 1 (Adobe, Smallpdf, iLovePDF, Soda PDF) | **1**     |
| 7   | **PDF → DOCX**  | Edytowanie PDF w Wordzie                                                    | top 1                                       | **1**     |
| 8   | **DOCX → TXT**  | Wyciągnięcie czystego tekstu z Worda                                        | średnia                                     | **2**     |
| 9   | **DOCX → HTML** | Migracja treści Worda na web                                                | średnia                                     | **2**     |
| 10  | **DOCX → JPG**  | Eksport strony Worda jako obraz                                             | średnia                                     | **2**     |
| 11  | **DOCX → PNG**  | jw.                                                                         | średnia                                     | **2**     |
| 12  | **DOC → DOCX**  | Migracja ze starego formatu Word 97-2003                                    | średnia                                     | **3**     |
| 13  | **DOCX → DOC**  | Kompatybilność wsteczna                                                     | niska                                       | **3**     |
| 14  | **TXT → DOCX**  | Sformatowanie tekstu do Worda                                               | średnia                                     | **1**     |
| 15  | **RTF → DOCX**  | Migracja z Rich Text Format                                                 | niska-średnia                               | **3**     |

### Kategoria: Dokumenty Office — XLSX / XLS

| #   | Konwersja       | Uzasadnienie                              | Konkurencja PL                | Priorytet |
| --- | --------------- | ----------------------------------------- | ----------------------------- | --------- |
| 16  | **XLSX → PDF**  | Druga najważniejsza konwersja Office      | wysoka                        | **2**     |
| 17  | **PDF → XLSX**  | Odzysk tabel z PDF do Excela              | wysoka                        | **2**     |
| 18  | **XLSX → CSV**  | Eksport do uniwersalnego formatu danych   | wysoka                        | **2**     |
| 19  | **CSV → XLSX**  | Otwarcie CSV jako Excel z formatowaniem   | wysoka (księgowi, marketerzy) | **2**     |
| 20  | **XLSX → JSON** | Eksport do formatu programistycznego      | średnia                       | **3**     |
| 21  | **JSON → XLSX** | Import danych programistycznych do Excela | średnia                       | **3**     |
| 22  | **XLS → XLSX**  | Migracja ze starego Excel 97-2003         | średnia                       | **3**     |

### Kategoria: Dokumenty Office — PPTX / PPT

| #   | Konwersja      | Uzasadnienie                   | Konkurencja PL | Priorytet |
| --- | -------------- | ------------------------------ | -------------- | --------- |
| 23  | **PPTX → PDF** | Eksport prezentacji do PDF     | wysoka         | **2**     |
| 24  | **PDF → PPTX** | Edytowanie PDF w PowerPoincie  | średnia        | **3**     |
| 25  | **PPTX → JPG** | Każdy slajd jako obraz         | średnia-wysoka | **2**     |
| 26  | **PPTX → PNG** | jw. (z przezroczystością)      | średnia        | **2**     |
| 27  | **PPT → PPTX** | Migracja ze starego PowerPoint | średnia        | **3**     |

### Kategoria: RAW (foto)

| #   | Konwersja      | Uzasadnienie                               | Konkurencja PL | Priorytet |
| --- | -------------- | ------------------------------------------ | -------------- | --------- |
| 28  | **NEF → JPG**  | RAW Nikon — najczęściej szukany RAW format | wysoka w niszy | **2**     |
| 29  | **CR2 → JPG**  | RAW Canon (starsze body)                   | wysoka w niszy | **2**     |
| 30  | **CR3 → JPG**  | RAW Canon (nowe body od 2018)              | średnia-wysoka | **2**     |
| 31  | **ARW → JPG**  | RAW Sony                                   | wysoka w niszy | **2**     |
| 32  | **DNG → JPG**  | Adobe DNG / Pixel / iPhone ProRAW          | średnia        | **2**     |
| 33  | **ORF → JPG**  | RAW Olympus / OM System                    | niska          | **3**     |
| 34  | **RAF → JPG**  | RAW Fujifilm                               | średnia        | **3**     |
| 35  | **NEF → PNG**  | RAW Nikon z przezroczystością              | średnia        | **3**     |
| 36  | **CR2 → PNG**  | jw.                                        | średnia        | **3**     |
| 37  | **ARW → PNG**  | jw.                                        | średnia        | **3**     |
| 38  | **DNG → PNG**  | jw.                                        | niska-średnia  | **3**     |
| 39  | **NEF → WebP** | RAW Nikon do nowoczesnego formatu web      | niska          | **3**     |

### Kategoria: Adobe Photoshop

| #   | Konwersja      | Uzasadnienie                                  | Konkurencja PL | Priorytet |
| --- | -------------- | --------------------------------------------- | -------------- | --------- |
| 40  | **PSD → PNG**  | Otworzenie projektu Photoshopa bez Photoshopa | wysoka         | **2**     |
| 41  | **PSD → JPG**  | jw. (mniejszy rozmiar)                        | wysoka         | **2**     |
| 42  | **PSD → PDF**  | Eksport projektu do PDF                       | średnia        | **3**     |
| 43  | **PSD → WebP** | Nowoczesny format web z projektu Photoshopa   | niska-średnia  | **3**     |

### Kategoria: Audio

| #   | Konwersja      | Uzasadnienie                                               | Konkurencja PL    | Priorytet |
| --- | -------------- | ---------------------------------------------------------- | ----------------- | --------- |
| 44  | **MP3 → WAV**  | Edytory wymagają WAV (Audacity, DAW)                       | **bardzo wysoka** | **2**     |
| 45  | **WAV → MP3**  | Kompresja przed wysłaniem/uploadem                         | **bardzo wysoka** | **2**     |
| 46  | **FLAC → MP3** | Konwersja audiofilskiego FLAC do uniwersalnego MP3         | wysoka            | **2**     |
| 47  | **MP3 → FLAC** | Konwersja w drugą stronę (niska wartość — strata już jest) | niska             | **3**     |
| 48  | **WAV → FLAC** | Kompresja bezstratna                                       | średnia           | **3**     |
| 49  | **FLAC → WAV** | Edycja w DAW                                               | średnia           | **3**     |
| 50  | **M4A → MP3**  | Audio z iPhone / iTunes do uniwersalnego MP3               | wysoka            | **2**     |
| 51  | **MP3 → M4A**  | Konwersja do Apple ekosystemu                              | średnia           | **3**     |
| 52  | **AAC → MP3**  | YouTube/streaming audio do MP3                             | wysoka            | **2**     |
| 53  | **MP3 → AAC**  | Lepsze kodowanie dla tej samej jakości                     | średnia           | **3**     |
| 54  | **OGG → MP3**  | Vorbis OGG do uniwersalnego MP3                            | średnia           | **3**     |
| 55  | **MP3 → OGG**  | Wsteczna konwersja                                         | niska             | **3**     |
| 56  | **MP4 → MP3**  | Wyciągnięcie audio z wideo (np. YouTube)                   | **bardzo wysoka** | **2**     |
| 57  | **WAV → AAC**  | Kompresja do streamingu                                    | średnia           | **3**     |

### Kategoria: Wideo

| #   | Konwersja      | Uzasadnienie                                         | Konkurencja PL    | Priorytet |
| --- | -------------- | ---------------------------------------------------- | ----------------- | --------- |
| 58  | **MP4 → MOV**  | Wideo do ekosystemu Apple/Final Cut                  | wysoka            | **2**     |
| 59  | **MOV → MP4**  | Wideo z iPhone do uniwersalnego MP4                  | **bardzo wysoka** | **2**     |
| 60  | **MP4 → AVI**  | Kompatybilność z starszymi odtwarzaczami             | średnia           | **3**     |
| 61  | **AVI → MP4**  | Migracja starego AVI do nowoczesnego MP4             | wysoka            | **2**     |
| 62  | **MKV → MP4**  | Streamy/filmy MKV do uniwersalnego MP4               | wysoka            | **2**     |
| 63  | **MP4 → MKV**  | Kontener bez kompresji video                         | niska-średnia     | **3**     |
| 64  | **WEBM → MP4** | Wideo z webu (Twitter, YouTube) do uniwersalnego MP4 | wysoka            | **2**     |
| 65  | **MP4 → WEBM** | Optymalizacja pod web                                | średnia           | **3**     |
| 66  | **MP4 → GIF**  | Animacja z fragmentu wideo                           | **bardzo wysoka** | **2**     |
| 67  | **MOV → GIF**  | jw. dla iPhone                                       | wysoka            | **2**     |
| 68  | **AVI → GIF**  | jw. dla starszych formatów                           | średnia           | **3**     |
| 69  | **GIF → MP4**  | Optymalizacja GIF (mniejszy plik, lepsza jakość)     | wysoka            | **2**     |
| 70  | **GIF → WebM** | jw. dla web                                          | średnia           | **3**     |

### Kategoria: Tekst / Markdown / RTF

| #   | Konwersja      | Uzasadnienie                                 | Konkurencja PL | Priorytet |
| --- | -------------- | -------------------------------------------- | -------------- | --------- |
| 71  | **TXT → PDF**  | Trywialna konwersja czystego tekstu do druku | średnia        | **1**     |
| 72  | **PDF → TXT**  | Wyciągnięcie czystego tekstu z PDF           | wysoka         | **2**     |
| 73  | **TXT → HTML** | Sformatowanie tekstu jako web                | niska-średnia  | **3**     |
| 74  | **HTML → TXT** | Wyciągnięcie czystego tekstu z HTML          | niska-średnia  | **3**     |
| 75  | **TXT → MD**   | Konwersja tekstu na Markdown                 | niska          | **3**     |
| 76  | **MD → TXT**   | Strip Markdown do czystego tekstu            | niska          | **3**     |
| 77  | **RTF → DOCX** | Migracja z Rich Text Format                  | niska-średnia  | **3**     |
| 78  | **RTF → PDF**  | jw.                                          | niska-średnia  | **3**     |
| 79  | **PDF → RTF**  | Edycja PDF w RTF (legacy editors)            | niska          | **3**     |
| 80  | **RTF → TXT**  | Strip formatowania                           | niska          | **3**     |
| 81  | **MD → PDF**   | Eksport dokumentacji Markdown do PDF         | średnia        | **2**     |
| 82  | **MD → DOCX**  | Eksport dokumentacji do Worda                | średnia        | **3**     |

### Kategoria: Ebook

| #   | Konwersja       | Uzasadnienie                        | Konkurencja PL | Priorytet |
| --- | --------------- | ----------------------------------- | -------------- | --------- |
| 83  | **EPUB → PDF**  | Czytanie e-booka jako PDF           | średnia        | **3**     |
| 84  | **PDF → EPUB**  | Czytanie PDF na Kindle/Kobo         | średnia        | **3**     |
| 85  | **EPUB → MOBI** | E-book na starsze Kindle            | niska-średnia  | **3**     |
| 86  | **MOBI → EPUB** | E-book z Kindle do innych czytników | średnia        | **3**     |
| 87  | **AZW3 → EPUB** | Kindle KF8 do uniwersalnego EPUB    | niska          | **3**     |
| 88  | **EPUB → TXT**  | Wyciągnięcie czystego tekstu        | niska          | **3**     |

### Kategoria: Fonty webowe

| #   | Konwersja       | Uzasadnienie                            | Konkurencja PL                | Priorytet |
| --- | --------------- | --------------------------------------- | ----------------------------- | --------- |
| 89  | **TTF → WOFF2** | Font desktopowy do nowoczesnego web     | niska, stabilna (dev tooling) | **3**     |
| 90  | **TTF → WOFF**  | jw. (starsza wersja)                    | niska                         | **3**     |
| 91  | **OTF → WOFF2** | Font OpenType do web                    | niska                         | **3**     |
| 92  | **OTF → WOFF**  | jw.                                     | niska                         | **3**     |
| 93  | **WOFF2 → TTF** | Wyciągnięcie fonta z web do desktopu    | niska                         | **3**     |
| 94  | **WOFF → TTF**  | jw.                                     | niska                         | **3**     |
| 95  | **TTF → OTF**   | Konwersja między formatami desktopowymi | niska                         | **3**     |
| 96  | **OTF → TTF**   | jw.                                     | niska                         | **3**     |

### Kategoria: Animacje (uzupełnienie istniejących)

| #   | Konwersja               | Uzasadnienie                      | Konkurencja PL | Priorytet |
| --- | ----------------------- | --------------------------------- | -------------- | --------- |
| 97  | **GIF → APNG**          | Animowany PNG z przezroczystością | niska-średnia  | **3**     |
| 98  | **APNG → GIF**          | APNG do uniwersalnego GIF         | niska          | **3**     |
| 99  | **GIF → animated WebP** | Nowoczesny animowany format       | niska-średnia  | **3**     |
| 100 | **animated WebP → GIF** | Wsteczna kompatybilność           | niska          | **3**     |

## Podsumowanie priorytetów

### Priorytet 1 (najwyższy — wysoki ROI, prosta implementacja)

| #   | Konwersja      | Tech-stack                           |
| --- | -------------- | ------------------------------------ |
| 1   | **PNG → ICO**  | Canvas API + ICO encoder (~kilka KB) |
| 2   | **JPG → ICO**  | jw.                                  |
| 3   | **SVG → ICO**  | jw. + SVG rasterizer                 |
| 6   | **DOCX → PDF** | Mammoth.js + pdf-lib                 |
| 7   | **PDF → DOCX** | pdf.js + docx.js                     |
| 14  | **TXT → DOCX** | docx.js                              |
| 71  | **TXT → PDF**  | pdf-lib                              |

### Priorytet 2 (wysoki popyt, średnia trudność)

Dokumenty: 8, 9, 10, 11, 16, 17, 18, 19, 23, 25, 26, 72, 81
RAW: 28, 29, 30, 31, 32
Photoshop: 40, 41
Audio: 44, 45, 46, 50, 52, 56
Wideo: 58, 59, 61, 62, 64, 66, 67, 69

### Priorytet 3 (niche, niska konkurencja)

Większość pozostałych konwersji — patrz kolumna „Priorytet" w tabelach powyżej.

## Quick-wins (najmniejszy effort, oczywiste luki)

| #   | Konwersja       | Powód                                                                       |
| --- | --------------- | --------------------------------------------------------------------------- |
| 1   | **PNG → ICO**   | Brakuje w naszej kategorii, prosty Canvas, idealny target Arteon (web devs) |
| 2   | **JPG → ICO**   | Pair do #1                                                                  |
| 71  | **TXT → PDF**   | Trywialny pdf-lib                                                           |
| 72  | **PDF → TXT**   | Mamy już pdf.js dla istniejących PDF→JPG/PNG                                |
| 81  | **MD → PDF**    | Mamy MD→HTML — dodać pdf-lib chain                                          |
| 19  | **CSV → XLSX**  | Mamy JSON→CSV — SheetJS zamknie pętlę z XLSX                                |
| 21  | **JSON → XLSX** | jw.                                                                         |

---

# Niszowe formaty (mniejsza popularność, mniejsza konkurencja)

Strategia long-tail SEO: 91.8% wszystkich zapytań to long-tail, 95% terminów ma ≤10 wyszukań/miesiąc. Konwertery niszowych formatów mają niską konkurencję (low KD <20) i lojalnych użytkowników w specyficznych zawodach (3D artists, fotografy RAW, archiwiści, dev tooling).

Każdy wiersz = pojedyncza konwersja `X → Y`.

### Kategoria: 3D / gamedev / VFX

| #   | Konwersja      | Use case                                                    | Konkurencja   | Trudność                  |
| --- | -------------- | ----------------------------------------------------------- | ------------- | ------------------------- |
| 101 | **DDS → PNG**  | Tekstury gier (Unreal, Unity, Source) na uniwersalny format | niska         | średnia                   |
| 102 | **DDS → JPG**  | jw. (mniejszy rozmiar)                                      | niska         | średnia                   |
| 103 | **PNG → DDS**  | Eksport tekstur do silników gier                            | niska-średnia | średnia                   |
| 104 | **JPG → DDS**  | jw.                                                         | niska-średnia | średnia                   |
| 105 | **TGA → PNG**  | Tekstury 3D (gamedev, Targa) na web format                  | niska         | niska                     |
| 106 | **TGA → JPG**  | jw.                                                         | niska         | niska                     |
| 107 | **PNG → TGA**  | Eksport do 3D pipeline                                      | niska         | niska                     |
| 108 | **EXR → PNG**  | Render VFX (Blender, Maya, Houdini) do podglądu             | niska         | wysoka (HDR tone mapping) |
| 109 | **EXR → JPG**  | jw.                                                         | niska         | wysoka                    |
| 110 | **HDR → PNG**  | Environment maps z HDRi do podglądu LDR                     | niska         | wysoka                    |
| 111 | **HDR → EXR**  | Konwersja między HDR formatami                              | bardzo niska  | wysoka                    |
| 112 | **DDS → TGA**  | Stary pipeline gamedev                                      | bardzo niska  | średnia                   |
| 113 | **TGA → DDS**  | jw.                                                         | bardzo niska  | średnia                   |
| 114 | **EXR → HDR**  | Migracja między HDR formatami                               | bardzo niska  | wysoka                    |
| 115 | **DDS → EXR**  | Tekstura HDR z DDS do EXR                                   | bardzo niska  | wysoka                    |
| 116 | **STL → OBJ**  | 3D drukowanie ↔ 3D modeling                                | niska         | średnia                   |
| 117 | **OBJ → STL**  | jw.                                                         | niska         | średnia                   |
| 118 | **STL → GLB**  | 3D do AR / web (model-viewer)                               | niska         | średnia                   |
| 119 | **OBJ → GLB**  | jw.                                                         | niska         | średnia                   |
| 120 | **GLB → GLTF** | Binary glTF do JSON glTF                                    | bardzo niska  | niska                     |
| 121 | **GLTF → GLB** | jw. (kompresja)                                             | bardzo niska  | niska                     |
| 122 | **STL → PLY**  | 3D scanning ↔ modeling                                     | bardzo niska  | średnia                   |
| 123 | **FBX → GLB**  | Mixamo / Maya do web AR                                     | niska         | wysoka                    |
| 124 | **OBJ → USDZ** | 3D model do Apple AR Quick Look                             | niska         | wysoka                    |
| 125 | **GLB → USDZ** | jw.                                                         | niska         | wysoka                    |
| 126 | **3DS → OBJ**  | Stary 3D Studio Max do nowoczesnego pipeline                | bardzo niska  | średnia                   |

### Kategoria: Wektory niszowe (Adobe, Corel, AutoCAD)

| #   | Konwersja     | Use case                            | Konkurencja   | Trudność                |
| --- | ------------- | ----------------------------------- | ------------- | ----------------------- |
| 127 | **AI → SVG**  | Adobe Illustrator → web vector      | niska-średnia | wysoka (AI=PDF wrapper) |
| 128 | **AI → PNG**  | Podgląd Illustrator bez Adobe       | niska-średnia | wysoka                  |
| 129 | **AI → PDF**  | Eksport do uniwersalnego PDF        | niska-średnia | średnia                 |
| 130 | **EPS → SVG** | PostScript wektory na web           | niska         | wysoka                  |
| 131 | **EPS → PNG** | Podgląd EPS bez Adobe               | niska         | wysoka                  |
| 132 | **EPS → PDF** | jw.                                 | niska         | średnia                 |
| 133 | **CDR → SVG** | CorelDRAW → web (lojalna nisza PL!) | niska         | wysoka                  |
| 134 | **CDR → PNG** | Podgląd CorelDRAW bez Corela        | niska         | wysoka                  |
| 135 | **CDR → PDF** | jw.                                 | niska         | wysoka                  |
| 136 | **CDR → AI**  | Migracja Corel → Illustrator        | bardzo niska  | wysoka                  |
| 137 | **DXF → SVG** | AutoCAD → web                       | niska         | wysoka                  |
| 138 | **DXF → PNG** | jw.                                 | niska         | wysoka                  |
| 139 | **DXF → PDF** | Drawings do PDF                     | niska         | wysoka                  |
| 140 | **DWG → PDF** | AutoCAD natywny do PDF              | niska         | bardzo wysoka           |
| 141 | **DWG → DXF** | AutoCAD → otwarty standard CAD      | niska         | bardzo wysoka           |
| 142 | **WMF → SVG** | Windows Metafile → web              | bardzo niska  | wysoka                  |
| 143 | **EMF → SVG** | Enhanced Metafile → web             | bardzo niska  | wysoka                  |
| 144 | **WMF → PNG** | jw. (raster)                        | bardzo niska  | średnia                 |
| 145 | **EMF → PNG** | jw.                                 | bardzo niska  | średnia                 |
| 146 | **XCF → PNG** | GIMP natywny → uniwersalny          | bardzo niska  | wysoka                  |
| 147 | **XCF → JPG** | jw.                                 | bardzo niska  | wysoka                  |
| 148 | **PCX → PNG** | Legacy raster (DOS era)             | bardzo niska  | niska                   |
| 149 | **PCX → JPG** | jw.                                 | bardzo niska  | niska                   |

### Kategoria: OpenDocument (LibreOffice)

| #   | Konwersja      | Use case                                         | Konkurencja   | Trudność |
| --- | -------------- | ------------------------------------------------ | ------------- | -------- |
| 150 | **ODT → PDF**  | LibreOffice Writer → PDF (rządowe / open source) | niska-średnia | średnia  |
| 151 | **ODT → DOCX** | LibreOffice → Word                               | niska-średnia | średnia  |
| 152 | **DOCX → ODT** | Word → LibreOffice                               | niska         | średnia  |
| 153 | **ODT → TXT**  | Czysty tekst                                     | niska         | niska    |
| 154 | **ODS → PDF**  | LibreOffice Calc → PDF                           | niska         | średnia  |
| 155 | **ODS → XLSX** | LibreOffice → Excel                              | niska         | średnia  |
| 156 | **XLSX → ODS** | Excel → LibreOffice                              | bardzo niska  | średnia  |
| 157 | **ODS → CSV**  | Czyste dane tabelaryczne                         | niska         | niska    |
| 158 | **ODP → PDF**  | LibreOffice Impress → PDF                        | niska         | średnia  |
| 159 | **ODP → PPTX** | LibreOffice → PowerPoint                         | niska         | średnia  |
| 160 | **PPTX → ODP** | PowerPoint → LibreOffice                         | bardzo niska  | średnia  |
| 161 | **ODP → JPG**  | Slajd LibreOffice jako obraz                     | bardzo niska  | średnia  |

### Kategoria: Apple iWork

| #   | Konwersja          | Use case                            | Konkurencja  | Trudność |
| --- | ------------------ | ----------------------------------- | ------------ | -------- |
| 162 | **Pages → PDF**    | Apple Pages → PDF dla nie-Mac users | niska        | wysoka   |
| 163 | **Pages → DOCX**   | Apple Pages → Word                  | niska        | wysoka   |
| 164 | **DOCX → Pages**   | Word → Apple Pages                  | bardzo niska | wysoka   |
| 165 | **Numbers → PDF**  | Apple Numbers → PDF                 | niska        | wysoka   |
| 166 | **Numbers → XLSX** | Apple Numbers → Excel               | niska        | wysoka   |
| 167 | **Keynote → PDF**  | Apple Keynote → PDF                 | niska        | wysoka   |
| 168 | **Keynote → PPTX** | Apple Keynote → PowerPoint          | niska        | wysoka   |

### Kategoria: Napisy / subtitles

| #   | Konwersja           | Use case                             | Konkurencja  | Trudność |
| --- | ------------------- | ------------------------------------ | ------------ | -------- |
| 169 | **SRT → VTT**       | YouTube → web HTML5 video            | niska        | niska    |
| 170 | **VTT → SRT**       | Web → odtwarzacz desktopowy          | niska        | niska    |
| 171 | **SRT → ASS**       | Plain subtitle → Aegisub (styling)   | bardzo niska | niska    |
| 172 | **ASS → SRT**       | Aegisub → uniwersalny SRT            | bardzo niska | niska    |
| 173 | **SRT → SSA**       | Stary SubStation Alpha               | bardzo niska | niska    |
| 174 | **SUB → SRT**       | MicroDVD → uniwersalny               | bardzo niska | niska    |
| 175 | **SBV → SRT**       | YouTube własny format → SRT          | bardzo niska | niska    |
| 176 | **SRT → TXT**       | Tylko transkrypt bez czasów          | niska        | niska    |
| 177 | **TXT → SRT**       | Transkrypt z czasami (timing wizard) | niska        | średnia  |
| 178 | **SRT → CSV**       | Eksport do arkusza tłumaczeń         | bardzo niska | niska    |
| 179 | **SRT → JSON**      | Programistyczny dostęp               | bardzo niska | niska    |
| 180 | **SRT → DFXP/TTML** | Broadcast / streaming                | bardzo niska | średnia  |
| 181 | **LRC → SRT**       | Lyrics karaoke → subtitle            | bardzo niska | niska    |

### Kategoria: Kalendarz i kontakty

| #   | Konwersja               | Use case                            | Konkurencja  | Trudność |
| --- | ----------------------- | ----------------------------------- | ------------ | -------- |
| 182 | **VCF → CSV**           | Kontakty z iPhone/Android do Excela | niska        | niska    |
| 183 | **CSV → VCF**           | Import kontaktów z arkusza          | niska        | niska    |
| 184 | **ICS → CSV**           | Eksport kalendarza do arkusza       | niska        | niska    |
| 185 | **CSV → ICS**           | Import wydarzeń z arkusza           | niska        | niska    |
| 186 | **VCF → JSON**          | Kontakty dla programistów           | bardzo niska | niska    |
| 187 | **ICS → JSON**          | Kalendarz dla programistów          | bardzo niska | niska    |
| 188 | **VCF → vCard 3.0/4.0** | Migracja wersji vCard               | bardzo niska | średnia  |

### Kategoria: Komiksy / archiwa książkowe

| #   | Konwersja      | Use case                            | Konkurencja  | Trudność |
| --- | -------------- | ----------------------------------- | ------------ | -------- |
| 189 | **CBR → CBZ**  | Niezarchiwizowany RAR → ZIP komiks  | niska        | niska    |
| 190 | **CBZ → CBR**  | Wsteczna konwersja                  | bardzo niska | niska    |
| 191 | **CBR → PDF**  | Komiks na czytnik PDF               | niska        | średnia  |
| 192 | **CBZ → PDF**  | jw.                                 | niska        | średnia  |
| 193 | **PDF → CBZ**  | PDF z komiksem do natywnego CBZ     | bardzo niska | średnia  |
| 194 | **CBR → EPUB** | Komiks na Kindle/Kobo               | niska        | wysoka   |
| 195 | **CBZ → EPUB** | jw.                                 | niska        | wysoka   |
| 196 | **CB7 → CBZ**  | 7zip-based komiks → uniwersalny ZIP | bardzo niska | niska    |

### Kategoria: Dokumenty niszowe i naukowe

| #   | Konwersja       | Use case                                    | Konkurencja  | Trudność |
| --- | --------------- | ------------------------------------------- | ------------ | -------- |
| 197 | **DJVU → PDF**  | Skany akademickie / archiwa biblioteczne    | niska        | wysoka   |
| 198 | **DJVU → JPG**  | Strony DJVU jako obrazy                     | niska        | wysoka   |
| 199 | **DJVU → TXT**  | OCR z DJVU (jeśli zawiera warstwę tekstową) | bardzo niska | wysoka   |
| 200 | **PDF → DJVU**  | Kompresja akademicka                        | bardzo niska | wysoka   |
| 201 | **XPS → PDF**   | Microsoft alternatywa PDF → uniwersalny PDF | bardzo niska | średnia  |
| 202 | **OXPS → PDF**  | Office Open XPS → PDF                       | bardzo niska | średnia  |
| 203 | **DOCM → DOCX** | Word z makrami → bez makr (bezpieczeństwo)  | niska        | średnia  |
| 204 | **FB2 → EPUB**  | FictionBook (Rosja/PL) → uniwersalny EPUB   | bardzo niska | średnia  |
| 205 | **FB2 → PDF**   | jw. → PDF                                   | bardzo niska | średnia  |

### Kategoria: Audio niszowe

| #   | Konwersja       | Use case                          | Konkurencja  | Trudność             |
| --- | --------------- | --------------------------------- | ------------ | -------------------- |
| 206 | **AIFF → MP3**  | Apple AIFF → uniwersalny MP3      | bardzo niska | średnia              |
| 207 | **AIFF → WAV**  | jw. (bezstratny)                  | bardzo niska | niska                |
| 208 | **AU → MP3**    | Unix AU audio → MP3               | bardzo niska | niska                |
| 209 | **ALAC → FLAC** | Apple Lossless → uniwersalny FLAC | niska        | średnia              |
| 210 | **DSD → FLAC**  | Audiofile DSD → FLAC              | bardzo niska | wysoka               |
| 211 | **Opus → MP3**  | Telegram/Discord voice → MP3      | niska        | średnia              |
| 212 | **MP3 → Opus**  | Optymalizacja dla voice messaging | bardzo niska | średnia              |
| 213 | **AMR → MP3**   | Stary nagrania telefonów → MP3    | bardzo niska | średnia              |
| 214 | **MIDI → MP3**  | MIDI z syntezatorem → audio MP3   | niska        | wysoka (sample bank) |

### Kategoria: Playlisty muzyczne

| #   | Konwersja      | Use case                        | Konkurencja  | Trudność |
| --- | -------------- | ------------------------------- | ------------ | -------- |
| 215 | **M3U → M3U8** | UTF-8 playlist (Spotify/iTunes) | bardzo niska | niska    |
| 216 | **M3U8 → M3U** | Wsteczna konwersja              | bardzo niska | niska    |
| 217 | **PLS → M3U**  | Winamp playlist → uniwersalny   | bardzo niska | niska    |
| 218 | **XSPF → M3U** | XML Sharable Playlist → M3U     | bardzo niska | niska    |

## Top 20 niche quick-wins (najlepszy ROI w niche)

Konwersje z **niską konkurencją + realnym popytem + niskim/średnim effortem**:

| Pozycja | Konwersja      | Powód                                                    |
| ------- | -------------- | -------------------------------------------------------- |
| 1       | **DDS → PNG**  | Każdy gracz/modder Skyrim/Fallout/Counter-Strike to robi |
| 2       | **TGA → PNG**  | Gamedev pipeline, niskie KD                              |
| 3       | **STL → OBJ**  | 3D printing community (rosnąca)                          |
| 4       | **OBJ → STL**  | jw.                                                      |
| 5       | **GLB → GLTF** | Web AR / model-viewer — trywialna implementacja          |
| 6       | **GLTF → GLB** | jw.                                                      |
| 7       | **SRT → VTT**  | Wszystkie YouTube → web migracje                         |
| 8       | **VTT → SRT**  | jw.                                                      |
| 9       | **CDR → SVG**  | CorelDRAW jest popularny w PL (lojalna baza)             |
| 10      | **CDR → PNG**  | jw.                                                      |
| 11      | **ODT → PDF**  | LibreOffice w sektorze rządowym PL                       |
| 12      | **ODT → DOCX** | jw.                                                      |
| 13      | **ODS → XLSX** | jw.                                                      |
| 14      | **VCF → CSV**  | Wszyscy eksportują kontakty z telefonu                   |
| 15      | **CSV → VCF**  | Import kontaktów do telefonu                             |
| 16      | **ICS → CSV**  | Eksport kalendarza                                       |
| 17      | **CBR → CBZ**  | Comic community                                          |
| 18      | **CBZ → PDF**  | jw. (na e-czytnik)                                       |
| 19      | **EPS → PNG**  | Niskie KD, dev tooling                                   |
| 20      | **EMF → PNG**  | Windows-specific niche, prawie zero konkurencji          |

## Strategia long-tail

**Dlaczego niche ma sens dla Arteon:**

1. **Niska konkurencja → łatwy ranking** — formaty jak DDS, TGA, CDR, CBR, FB2 mają KD <15 (dla nowych domen idealnie)
2. **Wysoka intencja** — kto szuka „dds na png" wie czego chce, konwertuje i wraca (raczej nie wraca, ale konwertuje 100% z czasem wejścia na stronę)
3. **Mało aktualizacji** — formaty są stabilne, raz zbudowane narzędzie żyje latami
4. **Brand authority** — bycie „one-stop converter" buduje organic rank dla generycznych zapytań typu „file converter"
5. **Bundle small** — większość konwersji niche to JS bez WASM (ICO, SRT, VTT, M3U, VCF, CSV, ODT poprzez biblioteki)

**Czego unikać:**

- **DICOM/medyczne** — regulacje (HIPAA, RODO/medyczne), ryzyko prawne
- **DWG (AutoCAD natywny)** — wymaga komercyjnego SDK Autodesk
- **EXR/HDR HDR-aware** — wysoka trudność, niskie volume = niewart effort
- **MIDI → MP3** — wymaga banku sampli (~100MB+)
- **DSD, ALAC niskoaktywne** — bardzo wąska audiofilska nisza

## Źródła (niche research)

- [Convertio Vector Converter](https://convertio.co/vector-converter/), [Vector Magic](https://vectormagic.com/)
- [reaConverter — 700+ formatów](https://www.reaconverter.com/features/formats.html)
- [GoTranscript Subtitle Converter](https://gotranscript.com/subtitle-converter), [SubtitleWise](https://www.subtitlewise.com/converter)
- [DDS Converter Convertio](https://convertio.co/dds-converter/), [AnyConv DDS](https://anyconv.com/dds-to-tga-converter/)
- [ACBR Comic Reader/Converter (GitHub)](https://github.com/binarynonsense/comic-book-reader)
- [OpenDocument Reader](https://opendocument.app/) — wspiera ODT/ODS/ODP + Apple iWork
- [SyncWiz VCF/ICS converter](http://www.sync-wiz.com/), [vCard Wizard](https://www.vcardwizard.com/)
- [Niche keyword strategy — Passionfruit](https://www.getpassionfruit.com/blog/niche-keyword-research-how-to-find-low-competition-keywords-that-actually-convert)
- [Low-competition keywords — SEOprofy](https://seoprofy.com/blog/low-competition-keywords/)

## Wniosek strategiczny

Obecne 92 narzędzia są mocne w niche **image conversion (raster ⇄ raster)**. Główne kategorie globalne, których brak:

1. **Office / dokumenty** (DOCX, XLSX, PPTX) — największy ruch, najtrudniejsza implementacja w pełni in-browser
2. **Favicon / ICO** — najlepszy ROI, prosta implementacja, oczywista luka
3. **Audio/Video** — ogromny popyt PL, ale wymaga ffmpeg.wasm i większego bundla
4. **RAW** — mała lojalna nisza, dobrze wpisuje się w filozofię „lokalna konwersja bez serwera"

**Rekomendacja immediate:** dodać **ICO converter** (PNG→ICO, JPG→ICO, kompletny favicon pack z manifestem) — oczywista luka w istniejącej kategorii image converters, minimalna implementacja, wysoki ROI dla web devów (grupa docelowa Arteon).

## Źródła

- [Konwerter-Online.pl](https://konwerter-online.pl/) — 127 mln plików od 2013, 150+ formatów, 750+ konwerterów
- [AnyConv](https://anyconv.com/), [Convertio](https://convertio.co/) (309+ formatów), [Convertman PL](https://convertman.com/pl)
- [a2zconverter.com — File Formats to Watch in 2025](https://www.a2zconverter.com/blog/file-formats-to-watch-in-2025-and-how-to-convert-them-easily)
- [Smallpdf Word→PDF](https://smallpdf.com/pl/word-to-pdf) — 1.7 mld użytkowników
- [favicon.io](https://favicon.io/), [convertico.com](https://convertico.com/), [icoconverter.com](https://www.icoconverter.com/), [realfavicongenerator.net](https://realfavicongenerator.net/)
- [pic-convert.com RAW formats](https://pic-convert.com/raw-formats), [convertico RAW](https://convertico.com/raw-to-image/)
- [benchmark.pl — najlepsze konwertery audio i video](https://www.benchmark.pl/testy_i_recenzje/najlepsze-konwertery-audio-i-video.html)
- [Adobe Acrobat Word→PDF PL](https://www.adobe.com/pl/acrobat/online/word-to-pdf.html)
- [CloudConvert DOCX](https://cloudconvert.com/docx-converter)
