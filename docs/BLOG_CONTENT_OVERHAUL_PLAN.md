# Plan przebudowy treści bloga Arteon

**Data analizy:** 2026-02-28
**Liczba artykułów:** 33
**Kategorie:** SEO (11), Grafika (7), Strony (7), Psychologia (3), UX (4), Marketing (4), Sklepy (2)

---

## SPIS TREŚCI

1. [Analiza systemowa — wzorce AI](#1-analiza-systemowa--wzorce-ai)
2. [Błędy faktyczne do naprawy](#2-błędy-faktyczne-do-naprawy)
3. [Analiza SEO — problemy wspólne](#3-analiza-seo--problemy-wspólne)
4. [Plan per artykuł — szczegółowe rekomendacje](#4-plan-per-artykuł--szczegółowe-rekomendacje)
5. [Priorytetyzacja wdrożenia](#5-priorytetyzacja-wdrożenia)
6. [Zasady implementacji](#6-zasady-implementacji)

---

## 1. Analiza systemowa — wzorce AI

### 1.1 Krytyczne wzorce powtarzające się we WSZYSTKICH artykułach

#### A. Formulaiczne intro (NAJWYŻSZY PRIORYTET)

Prawie każdy artykuł zaczyna się od:

```
"[Definicja tematu]. W tym artykule wyjaśniamy: [lista punktów]."
```

**Przykłady:**

- "W tym artykule wyjaśniamy: skąd wzięły się te dwa style..."
- "W tym artykule wyjaśniamy: czym dokładnie jest kanibalizacja..."
- "W tym artykule wyjaśniamy, jak działa ścieżka nawigacji..."

**Problem:** To jeden z najsilniejszych sygnałów AI — identyczna struktura wstępu w 30+ artykułach. Każdy artykuł potrzebuje unikalnego, naturalnego wstępu.

**Fix:** Każdy artykuł musi mieć unikalne otwarcie. Zamiast listy "co wyjaśniamy", zaczynaj od konkretu, anegdoty, pytania, albo problemu czytelnika.

#### B. Formulaiczne zakończenia

Każdy artykuł kończy się identycznie:

```
"Co warto zapamiętać:" / "Kluczowe informacje:" / "Kluczowe punkty:"
→ lista bullet pointów
→ CTA do usług Arteon
```

**Fix:** Zróżnicować zakończenia. Nie każdy artykuł musi mieć listę "co zapamiętać". Niektóre mogą kończyć się pytaniem, podsumowaniem narracyjnym, call to action bez listy.

#### C. Nadużycie "Wyjaśniamy"

Słowo "wyjaśniamy" pojawia się w prawie KAŻDYM excercie i wielu intro:

- "Wyjaśniamy, jak działa..."
- "Wyjaśniamy, dlaczego..."
- "Wyjaśniamy, czym jest..."

**Fix:** Zastąpić różnorodnymi konstrukcjami: "Pokażemy...", "Dowiesz się...", "Sprawdź...", "Oto..." lub po prostu zacząć od sedna bez zapowiedzi.

#### D. Bold-header vertical lists (Humanizer pattern #15)

Struktura "**Header:** opis" jest nadużywana:

```
- **Kancelarie prawne** - powaga i zaufanie
- **Instytucje finansowe** - stabilność i tradycja
- **Marki luksusowe** - elegancja i ekskluzywność
```

**Fix:** Część list zamienić na prose (akapity), część zostawić ale zróżnicować format.

#### E. Formulaiczne linki wewnętrzne

Pattern: "Więcej o [temat] znajdziesz w artykule o [link]"
Powtarza się dziesiątki razy identycznie.

**Fix:** Naturalniejsze wplecenie linków w treść, np. "Pisaliśmy o tym w kontekście [link]" albo po prostu hyperlink w zdaniu bez zapowiedzi.

#### F. Jednolita długość akapitów

Prawie wszystkie akapity to 2-3 zdania. Brak rytmicznej różnorodności.

**Fix:** Mieszać krótkie (1 zdanie) z dłuższymi (4-5 zdań). Krótkie zdania na punkty, dłuższe na wyjaśnienia.

### 1.2 Wzorce AI drugiego poziomu

| Wzorzec                                                    | Częstość | Priorytet |
| ---------------------------------------------------------- | -------- | --------- |
| "Oto [lista/konteksty/sytuacje]..." jako opener sekcji     | Wysoka   | Średni    |
| "Dlaczego [X] ma znaczenie?" jako nagłówek                 | Wysoka   | Średni    |
| "Na co zwrócić uwagę przy..." jako nagłówek                | Wysoka   | Średni    |
| "Poniżej przedstawiamy..."                                 | Średnia  | Niski     |
| Rule of Three w listach (dokładnie 3-5 elementów)          | Średnia  | Niski     |
| Nadmiar tooltipów data-tooltip                             | Średnia  | Niski     |
| Identyczna struktura FAQ (pytanie+odpowiedź same długości) | Średnia  | Średni    |

### 1.3 Brakujące elementy "duszy" (soulless writing)

Wszystkie artykuły cierpią na:

- **Brak opinii** — czyste raportowanie faktów bez perspektywy autora
- **Brak niepewności** — nigdzie nie ma "to zależy od sytuacji" w naturalny sposób
- **Brak anegdot/historii** — każdy artykuł to encyklopedyczne wyjaśnianie
- **Jednolity ton** — wszystkie artykuły brzmią identycznie
- **Brak "my" jako Arteon** — mimo że brand voice to 1 os. l.mn., artykuły są bezosobowe

---

## 2. Błędy faktyczne do naprawy

### 2.1 KRYTYCZNE (wymagają natychmiastowej korekty)

#### ❌ Artykuł: "Aktualizacje WordPressa"

**Błąd:** "ponad 50% zhakowanych stron WordPress miało nieaktualne oprogramowanie w chwili ataku"
**Fakt:** Raport Sucuri 2023 mówi o **39.1%** stron z nieaktualnym CMS w momencie infekcji, nie 50%.
**Źródło:** https://sucuri.net/reports/2023-hacked-website-report/
**Fix:** Zmienić na "prawie 40% zhakowanych stron WordPress miało nieaktualne oprogramowanie" i zaktualizować link.

#### ⚠️ Artykuł: "Aktualizacje WordPressa" — do weryfikacji

**Twierdzenie:** "Ponad 90% luk WordPress dotyczy wtyczek. Około 6% motywów, a tylko 4% rdzenia."
**Status:** Dane Patchstack ogólnie potwierdzają dominację wtyczek (~96% wg raportu 2024), ale konkretny rozkład 90/6/4 wymaga weryfikacji dokładnego źródła. Raport Patchstack 2024 mówi o 96.77% luk we wtyczkach.
**Fix:** Zaktualizować do "prawie 97% luk WordPress dotyczy wtyczek" z linkiem do Patchstack State of WordPress Security 2025.

### 2.2 DO WERYFIKACJI (potencjalne nieścisłości)

| Artykuł                        | Twierdzenie                                                    | Status                                                                              |
| ------------------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Darmowa dostawa vs niższa cena | "39% klientów wskazuje dodatkowe opłaty jako powód rezygnacji" | Baymard 2024 podaje 48% — **do aktualizacji**                                       |
| Szybkość ładowania             | Dane Think with Google o opuszczaniu stron                     | Link działa, dane ogólnie poprawne ✅                                               |
| Paradoks wyboru                | Eksperyment Iyengar & Lepper (3% vs 30%)                       | Poprawne dane z oryginalnego badania ✅                                             |
| Efekt zakotwiczenia            | Tversky & Kahneman 1974, Kahneman Nobel 2002                   | Poprawne ✅                                                                         |
| Content marketing              | HubSpot "artykuły generują ruch 2-3 lata"                      | Ogólnie poprawne, ale link może być nieaktualny — sprawdzić                         |
| Newsletter                     | Mailchimp benchmarks "15%-28% open rate"                       | Mailchimp dane mogą być nieaktualne po iOS 15 Mail Privacy — zaktualizować kontekst |
| Czcionki szeryfowe             | NNG serif vs sans-serif study                                  | Poprawne, link działa ✅                                                            |
| Grafika social media           | MIT "mózg przetwarza obrazy w 13ms"                            | Poprawne badanie MIT 2014 ✅                                                        |

---

## 3. Analiza SEO — problemy wspólne

### 3.1 Meta titles

**Problem:** Wiele meta titles przekracza 60 znaków po dodaniu " - Arteon":
| Artykuł | Długość meta title | Status |
|---------|-------------------|--------|
| Czym jest paradoks wyboru... | 76 zn. | ❌ Za długi |
| Efekt zakotwiczenia... | 72 zn. | ❌ Za długi |
| Dlaczego regularne aktualizacje... | 75 zn. | ❌ Za długi |
| Czym jest strona błędu 404... | 68 zn. | ❌ Za długi |
| Meta title i description... | 60 zn. | ✅ OK |
| Czcionki szeryfowe... | 75 zn. | ⚠️ W AI Overview — ostrożnie |

**Rekomendacja:** Skrócić meta titles do 50-60 znaków. Keyword na początku. Rozważyć usunięcie " - Arteon" w niektórych, bo zabiera 9 znaków.

### 3.2 Meta descriptions

Większość mieści się w 150-160 znakach. Ale wiele jest generycznych:

- Struktura "Wyjaśniamy, [co]" powtarza się w prawie każdym description
- Brak silnych CTA w opisach
- Brak power words ("darmowy", "natychmiast", "prosty")

### 3.3 Keyword density

Artykuły mają umiarkowaną gęstość słów kluczowych, ale można poprawić:

- **Keyword w pierwszych 100 słowach** — nie zawsze obecny
- **Keyword w H2/H3** — obecny ale niekonsekwentnie
- **LSI keywords** (semantycznie powiązane) — brak świadomego wzbogacania
- **Keyword w alt text** — brak (artykuły nie mają osobnych obrazów inline)

### 3.4 Internal linking — analiza

Linkowanie wewnętrzne jest dobre (5-10 linków per artykuł), ale:

- Zawsze ta sama formulaiczna konstrukcja
- Brak deep-linków do konkretnych sekcji artykułów
- Linkowanie mogłoby lepiej tworzyć klastry tematyczne

### 3.5 Content length

Artykuły mają odpowiednią długość (readingTime 8-12 min, szacunkowo 1400-2200 słów). Spełniają wymóg minimum 1000 słów.

---

## 4. Plan per artykuł — szczegółowe rekomendacje

### TIER 1: OSTROŻNA EDYCJA (artykuły w AI Overview / dobrze pozycjonowane)

---

#### 🟡 czcionki-szeryfowe-vs-bezszeryfowe (GRAFIKA)

**Status:** W AI Overview — edytuj OSTROŻNIE
**Priorytet:** KRYTYCZNY — nie zepsuć pozycji

**Meta (zachować):**

- Title: Zachować obecny (jest w AI Overview)
- Description: Zachować obecny

**Humanizacja (minimalna):**

- Zmienić intro z "W tym artykule wyjaśniamy: skąd wzięły się..." na naturalniejsze otwarcie
- Dodać 1-2 zdania z perspektywą Arteon w podsumowaniu
- Złagodzić bold-header lists w sekcji "skojarzenia z czcionkami" — zamienić część na prose
- NIE zmieniać struktury H2/H3 — zachować obecną hierarchię
- NIE zmieniać FAQ — zachować

**SEO (minimalne):**

- Dodać LSI keywords: "typografia", "font", "krój pisma" w naturalny sposób
- Sprawdzić czy keyword "czcionki szeryfowe" jest w pierwszych 100 słowach ✅

**Faktyczne:** Brak błędów ✅

---

### TIER 2: UMIARKOWANA EDYCJA (artykuły ze średnią pozycją)

---

#### 🔵 czym-jest-kanibalizacja-slow-kluczowych (SEO)

**Priorytet:** Wysoki

**Meta:**

- Title TERAZ: "Czym jest kanibalizacja słów kluczowych i jak jej unikać? - Arteon" (72 zn.)
- Title NOWY: "Kanibalizacja słów kluczowych: czym jest i jak ją naprawić?" (55 zn.)
- Description: OK, zachować

**Humanizacja:**

- Zmienić intro — usunąć "W tym artykule wyjaśniamy:"
- Dodać praktyczną anegdotę na początek (np. "Miałeś kiedyś sytuację, że strona spadła z TOP10 i nie wiesz dlaczego?")
- W sekcji "Przykład z praktyki" — rozbudować narrację, dodać więcej szczegółów
- Podsumowanie — zamienić bullet list na narracyjne podsumowanie z jedną listą kluczowych kroków
- Zróżnicować długość akapitów

**SEO:**

- Dodać LSI: "duplikacja treści", "ranking Google", "pozycjonowanie", "Google Search Console"
- Wzmocnić keyword w pierwszych 100 słowach

**Faktyczne:** OK ✅

---

#### 🔵 szybkosc-ladowania-strony-a-pozycja-w-google (SEO)

**Priorytet:** Wysoki

**Meta:**

- Title TERAZ: "Dlaczego szybkość ładowania strony wpływa na pozycję w Google? - Arteon" (71 zn.)
- Title NOWY: "Szybkość strony a pozycja w Google: Core Web Vitals" (52 zn.)
- Description: OK

**Humanizacja:**

- Zmienić intro — nie zaczynać od definicji
- Sekcje CWV (LCP, INP, CLS) — dodać praktyczne analogie zamiast suchych definicji
- Dodać zdanie "Z naszego doświadczenia..." w sekcji o optymalizacji
- Podsumowanie — mniej formulaiczne

**SEO:**

- LSI: "PageSpeed Insights", "czas ładowania", "optymalizacja strony", "wydajność"
- Wzmocnić keyword density "Core Web Vitals"

**Faktyczne:**

- INP zastąpił FID w marcu 2024 ✅ (poprawna informacja)

---

#### 🔵 dlaczego-regularne-aktualizacje-wordpressa (STRONY)

**Priorytet:** KRYTYCZNY (błąd faktyczny)

**Meta:**

- Title TERAZ: "Dlaczego regularne aktualizacje WordPressa są kluczowe dla bezpieczeństwa? - Arteon" (79 zn.)
- Title NOWY: "Aktualizacje WordPressa: dlaczego są ważne dla bezpieczeństwa?" (58 zn.)
- Description: OK

**Humanizacja:**

- Zmienić intro — zamiast suchych statystyk, zacząć od scenariusza "Wyobraź sobie, że rano..." → NIE, zamiast tego konkretny case: "Typowa sytuacja: właściciel strony nie aktualizuje WordPressa od roku. Pewnego dnia strona zaczyna przekierowywać na spam..."
- Sekcja "Dlaczego wiele stron pozostaje nieaktualnych" — dodać więcej empatii, zrozumienia dla właścicieli
- Zmienić podsumowanie na mniej formulaiczne

**SEO:**

- LSI: "bezpieczeństwo WordPress", "wtyczki WordPress", "backup strony", "hakowanie stron"

**Faktyczne — DO NAPRAWY:**

1. ❌ "ponad 50% zhakowanych stron WordPress miało nieaktualne oprogramowanie" → **39.1%** wg Sucuri 2023
2. ⚠️ "Ponad 90% luk WordPress dotyczy wtyczek" → Zaktualizować do **~97%** wg Patchstack 2024

---

#### 🔵 czym-jest-strona-bledu-404 (STRONY)

**Priorytet:** Średni

**Meta:**

- Title TERAZ: "Czym jest strona błędu 404 i dlaczego warto ją zaprojektować? - Arteon" (68 zn.)
- Title NOWY: "Strona błędu 404: jak ją znaleźć i zaprojektować?" (49 zn.)
- Description: OK

**Humanizacja:**

- Intro: dobre, ale dodać konkretniejszy scenariusz
- Soft 404 sekcja — napisana dobrze, zostawić
- Dodać anegdotę o ciekawych stronach 404 (GitHub, Pixar)
- Podsumowanie — mniej formulaiczne

**SEO:**

- LSI: "błąd 404", "przekierowanie 301", "Google Search Console", "strona nie istnieje"

**Faktyczne:** OK ✅

---

#### 🔵 co-to-jest-newsletter (MARKETING)

**Priorytet:** Średni

**Meta:**

- Title TERAZ: "Co to jest newsletter i czy warto go prowadzić? - Arteon" (55 zn.)
- Title NOWY: OK — mieści się

**Humanizacja:**

- Intro: zbyt suche ("Newsletter to jedno z podstawowych narzędzi...")
- Dodać perspektywę: "Prowadzisz firmę i zastanawiasz się, czy newsletter ma sens?"
- Sekcja o narzędziach — dodać opinię Arteon ("Z naszego doświadczenia GetResponse sprawdza się...")
- FAQ — zróżnicować długość odpowiedzi

**SEO:**

- LSI: "e-mail marketing", "lista mailingowa", "subskrybenci", "mailing", "RODO"

**Faktyczne:**

- ⚠️ Mailchimp benchmarks (15%-28%) mogą być zawyżone po iOS 15 Mail Privacy Protection (od 2021). Dodać wzmiankę o tym.
- Litmus ROI $36/$1 ✅

---

#### 🔵 regulamin-sklepu-internetowego (SKLEPY)

**Priorytet:** Wysoki (treść prawna wymaga dokładności)

**Meta:**

- Title: "Co to jest regulamin sklepu internetowego i co musi zawierać? - Arteon" (67 zn.)
- Title NOWY: "Regulamin sklepu internetowego: co musi zawierać?" (50 zn.)

**Humanizacja:**

- Intro: OK ale suche — dodać "Uruchamiasz sklep? Regulamin to obowiązek, nie opcja."
- Sekcje prawne — tu ton encyklopedyczny jest uzasadniony, ale dodać praktyczne komentarze
- Lista klauzul niedozwolonych — bardzo wartościowa, zostawić
- Podsumowanie — mniej formulaiczne

**SEO:**

- LSI: "prawo konsumenta", "RODO e-commerce", "zwroty w sklepie", "reklamacja", "klauzule abuzywne"

**Faktyczne:**

- Ustawa o prawach konsumenta z 30 maja 2014 ✅
- Dyrektywa Omnibus od stycznia 2023 ✅
- 14 dni na odstąpienie ✅
- Wszystkie informacje prawne sprawdzone — poprawne

---

#### 🔵 darmowa-dostawa-vs-nizsza-cena (SKLEPY)

**Priorytet:** Średni

**Meta:**

- Title: OK (62 zn.)
- Title NOWY: "Darmowa dostawa vs niższa cena: co przekonuje klientów?" (54 zn.)

**Humanizacja:**

- Intro: DOBRE — zaczyna od konkretnego przykładu z ceną. Jeden z lepszych wstępów.
- Sekcja o efekcie zerowej ceny — dobrze napisana
- Podsumowanie — mniej formulaiczne

**SEO:**

- LSI: "porzucone koszyki", "strategie cenowe e-commerce", "próg darmowej dostawy"

**Faktyczne:**

- ⚠️ "39% klientów wskazuje dodatkowe opłaty" — Baymard 2024 podaje **48%** (excluding "just browsing"). Do aktualizacji.
- Baymard 70% cart abandonment ✅

---

#### 🔵 czym-jest-paradoks-wyboru (PSYCHOLOGIA)

**Priorytet:** Średni

**Meta:**

- Title: "Czym jest paradoks wyboru i dlaczego mniej opcji może zwiększyć sprzedaż? - Arteon" (76 zn.)
- Title NOWY: "Paradoks wyboru: dlaczego mniej opcji zwiększa sprzedaż?" (54 zn.)

**Humanizacja:**

- Intro: OK — używa tooltipa i przykładów (restauracja, sklep)
- Eksperyment z dżemami — dobrze opisany
- Dodać opinię Arteon w sekcji "Jak projektować ofertę"
- Podsumowanie — mniej formulaiczne

**SEO:**

- LSI: "paraliż decyzyjny", "choice overload", "konwersja", "UX sklepu"

**Faktyczne:** Iyengar & Lepper 2000 — poprawne ✅

---

#### 🔵 efekt-zakotwiczenia (PSYCHOLOGIA)

**Priorytet:** Średni

**Meta:**

- Title: "Efekt zakotwiczenia: jak pierwsza cena wpływa na postrzeganie wartości? - Arteon" (74 zn.)
- Title NOWY: "Efekt zakotwiczenia: jak pierwsza cena wpływa na decyzje?" (55 zn.)

**Humanizacja:**

- Intro: DOBRE — używa konkretnych kwot (2000 zł, 8000 zł)
- Eksperyment Tversky & Kahneman — dobrze opisany
- Sekcja "Etyczne granice" — wartościowa, zostawić
- Dodać perspektywę Arteon

**SEO:**

- LSI: "anchoring effect", "psychologia cen", "strategia cenowa", "kotwica cenowa"

**Faktyczne:** Tversky & Kahneman 1974, Nobel 2002 ✅

---

#### 🔵 social-proof-spoleczny-dowod-slusznosci (PSYCHOLOGIA)

**Priorytet:** Średni

**Meta:** Sprawdzić długość, prawdopodobnie za długi

**Humanizacja:**

- Standardowe wzorce AI do naprawy
- Dodać polskie przykłady social proof (Allegro opinie, Google Maps recenzje)
- Mniej formulaiczne podsumowanie

---

#### 🔵 czym-jest-linkowanie-wewnetrzne (SEO)

**Priorytet:** Wysoki (dotyczy kluczowej frazy SEO)

**Meta:**

- Title: "Czym jest linkowanie wewnętrzne i jak wpływa na SEO strony? - Arteon" (67 zn.)
- Title NOWY: "Linkowanie wewnętrzne: jak wpływa na SEO strony?" (49 zn.)

**Humanizacja:**

- Zmienić intro
- Dodać przykłady z realnych stron (np. Wikipedia jako wzór linkowania)
- Sekcja o anchor textach — dodać więcej praktycznych przykładów

**SEO:**

- LSI: "linki wewnętrzne", "anchor text", "klastry tematyczne", "struktura witryny"

---

#### 🔵 meta-title-i-description (SEO)

**Priorytet:** Wysoki (autorefencyjny artykuł — musi być wzorcowy)

**Meta:**

- Title: "Meta title i description: jak je dobrze napisać? - Arteon" (55 zn.) ✅ OK

**Humanizacja:**

- Ten artykuł MUSI być wzorcowy, bo sam dotyczy pisania meta tagów
- Dodać screenshots/przykłady z SERP
- Dodać perspektywę Arteon

---

### TIER 3: GŁĘBOKA PRZEBUDOWA (artykuły wymagające większych zmian)

---

#### 🔴 breadcrumbs-sciezka-nawigacji (UX)

**Humanizacja:** Typowe wzorce AI. Zmienić intro, podsumowanie.
**Meta:** Title za długi (66 zn.) → "Breadcrumbs na stronie: po co i jak wdrożyć?" (46 zn.)

#### 🔴 dlaczego-pusta-przestrzen-zwieksza-czytelnosc (UX)

**Humanizacja:** Bardzo formulaiczny. Dodać visual examples.
**Meta:** Title za długi (60 zn.) → OK, mieści się

#### 🔴 mapa-strony-dla-uzytkownikow (UX)

**Humanizacja:** Formulaiczny. Dodać przykłady map stron.
**Meta:** Title za długi (73 zn.) → "Mapa strony HTML: po co ją mieć i jak zaprojektować?" (52 zn.)

#### 🔴 czym-jest-responsywnosc-strony (UX)

**Humanizacja:** Standardowe wzorce AI.
**Meta:** Title za długi (59 zn.) → OK

#### 🔴 jak-przygotowac-grafike-do-postow (GRAFIKA)

**Humanizacja:** Formulaiczny. Dodać trendy 2025.
**Meta:** OK (51 zn.)
**Faktyczne:** Wymiary grafik mogą wymagać aktualizacji (platformy zmieniają je regularnie)

#### 🔴 materialy-drukowane-dla-firmy (GRAFIKA)

**Humanizacja:** Standardowe wzorce. Dodać konkretne rekomendacje papierów/gramatur.
**Meta:** OK

#### 🔴 kody-qr-w-materialach-reklamowych (GRAFIKA)

**Humanizacja:** Standardowe wzorce. Dodać info o QR dynamicznych vs statycznych.
**Meta:** OK

#### 🔴 jak-dobrac-kolory-do-strony (GRAFIKA)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 jak-kolorystyka-wplywa-na-decyzje-zakupowe (GRAFIKA)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 jak-identyfikacja-wizualna-zwieksza-zaufanie (GRAFIKA)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 czym-jest-content-marketing (MARKETING)

**Humanizacja:** Formulaiczny, ale treść solidna.
**Meta:** "Content marketing: czym jest i jak działa? - Arteon" (48 zn.) ✅

#### 🔴 e-mail-marketing-dla-malych-firm (MARKETING)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 jak-przygotowac-profesjonalna-stopke-mailowa (MARKETING)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 kontrast-kolorow-na-stronie (STRONY)

**Humanizacja:** Standardowe wzorce. Dobrze powiązany z narzędziem Arteon (tester kontrastu).
**Meta:** "Kontrast kolorów na stronie: znaczenie i weryfikacja - Arteon" (57 zn.) ✅

#### 🔴 co-sprawdzic-przed-uruchomieniem-strony (STRONY)

**Humanizacja:** Checklistowy artykuł — tu formulaiczność jest mniej problematyczna.
**Meta:** OK

#### 🔴 jak-wybrac-domene-i-hosting (STRONY)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 czym-jest-certyfikat-ssl (STRONY)

**Humanizacja:** Standardowe wzorce. Dodać info o Let's Encrypt.
**Meta:** "Certyfikat SSL: co to jest i dlaczego jest ważny? - Arteon" (56 zn.) ✅

#### 🔴 favicon-co-to-za-ikona (STRONY)

**Humanizacja:** Standardowe wzorce.
**Meta:** "Favicon: co to jest i jak ją przygotować? - Arteon" (49 zn.) ✅

#### 🔴 jak-zoptymalizowac-zdjecia-na-strone (STRONY)

**Humanizacja:** Standardowe wzorce. Dobrze powiązany z narzędziem Arteon (konwerter WebP).
**Meta:** "Optymalizacja zdjęć na stronę WWW: formaty i WebP - Arteon" (57 zn.) ✅

#### 🔴 jak-mierzyc-skutecznosc-strony (SEO)

**Humanizacja:** Standardowe wzorce.
**Meta:** "Jak mierzyć skuteczność strony? Podstawy analityki - Arteon" (57 zn.) ✅

#### 🔴 jak-zalozyc-profil-google-moja-firma (SEO)

**Humanizacja:** Standardowe wzorce. Praktyczny artykuł.
**Meta:** OK

#### 🔴 jak-przygotowac-sklep-do-pozycjonowania (SEO)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 faq-na-stronie (SEO)

**Humanizacja:** Standardowe wzorce.
**Meta:** "FAQ na stronie: jak pisać pytania wspierające SEO? - Arteon" (57 zn.) ✅
**Faktyczne:** ⚠️ FAQ schema deprecated od Sept 2023 (tylko healthcare/government). Artykuł powinien to wyraźnie zaznaczyć!

#### 🔴 ile-czasu-trwa-pozycjonowanie-strony (SEO)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK (choć długi — 72 zn.)
**Meta NOWY:** "Ile czasu trwa pozycjonowanie strony? Realne terminy" (52 zn.)

#### 🔴 czy-lokalne-firmy-potrzebuja-bloga (SEO)

**Humanizacja:** Standardowe wzorce.
**Meta:** OK

#### 🔴 jak-pisac-tresci-na-stronie (SEO)

**Humanizacja:** Standardowe wzorce. Najdłuższy artykuł (22 min reading).
**Meta:** OK

#### 🔴 dlaczego-strona-nie-wyswietla-sie-w-google (SEO)

**Humanizacja:** Standardowe wzorce. Praktyczny troubleshooting.
**Meta:** OK

---

## 5. Priorytetyzacja wdrożenia

### Faza 1: Błędy faktyczne (natychmiast)

1. **aktualizacje-wordpressa** — poprawić 50% → 39.1% (Sucuri) i 90% → ~97% (Patchstack)
2. **darmowa-dostawa-vs-nizsza-cena** — poprawić 39% → 48% (Baymard 2024)
3. **faq-na-stronie** — dodać info o deprecation FAQ schema (Sept 2023)

### Faza 2: Artykuły w AI Overview / najważniejsze (ostrożnie)

4. **czcionki-szeryfowe-vs-bezszeryfowe** — minimalna humanizacja, zachować strukturę

### Faza 3: Artykuły SEO (wysoki priorytet — core business)

5. kanibalizacja-slow-kluczowych
6. szybkosc-ladowania-strony
7. linkowanie-wewnetrzne
8. meta-title-i-description
9. jak-pisac-tresci-na-stronie
10. jak-przygotowac-sklep-do-pozycjonowania
11. ile-czasu-trwa-pozycjonowanie
12. dlaczego-strona-nie-wyswietla-sie-w-google
13. jak-mierzyc-skutecznosc-strony
14. jak-zalozyc-profil-google-moja-firma
15. faq-na-stronie
16. czy-lokalne-firmy-potrzebuja-bloga

### Faza 4: Artykuły Psychologia + Sklepy (konwersja)

17. paradoks-wyboru
18. efekt-zakotwiczenia
19. social-proof
20. regulamin-sklepu
21. darmowa-dostawa-vs-nizsza-cena

### Faza 5: Artykuły Strony + Marketing

22-28. Pozostałe artykuły z kategorii Strony i Marketing

### Faza 6: Artykuły Grafika + UX

29-33. Pozostałe artykuły z kategorii Grafika i UX

---

## 6. Zasady implementacji

### 6.1 Co zmieniać w KAŻDYM artykule

| Element               | Zmiana                                                             | Priorytet |
| --------------------- | ------------------------------------------------------------------ | --------- |
| **Intro**             | Usunąć "W tym artykule wyjaśniamy:" — napisać unikalne otwarcie    | KRYTYCZNY |
| **Podsumowanie**      | Zróżnicować format — nie zawsze "Co warto zapamiętać:" + lista     | WYSOKI    |
| **"Wyjaśniamy"**      | Usunąć z excerptów i intro — zamienić na konkretne konstrukcje     | WYSOKI    |
| **Linki wewnętrzne**  | Zmienić z "Więcej o X znajdziesz w artykule o Y" na naturalniejsze | ŚREDNI    |
| **Bold-header lists** | Zamienić część na prose, zostawić tam gdzie lista ma sens          | ŚREDNI    |
| **Rytm zdań**         | Dodać krótkie zdania, złamać monotonię 2-3 zdaniowych akapitów     | ŚREDNI    |
| **Perspektywa "my"**  | Dodać 1-2 zdania z perspektywy Arteon w podsumowaniu/sekcjach      | ŚREDNI    |
| **FAQ**               | Zróżnicować długość odpowiedzi, dodać głębsze odpowiedzi           | NISKI     |

### 6.2 Czego NIE zmieniać

- ❌ **URLs** — żadnych zmian
- ❌ **Tytuły artykułów (title)** — żadnych zmian w JSON field "title"
- ❌ **Struktura H2** w artykule "czcionki szeryfowe" — w AI Overview
- ❌ **Sprawdzone źródła i linki** — zachować działające linki
- ❌ **Istniejące tooltips data-tooltip** — zostawić
- ❌ **Bloki reklamowe (type: "ad")** — nie ruszać
- ❌ **CTA blocks** — nie ruszać struktury

### 6.3 Meta titles — nowe propozycje

| Artykuł             | Obecny meta title                                                                       | Nowy meta title                                                  | Zmiana                 |
| ------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------- |
| kanibalizacja       | "Czym jest kanibalizacja słów kluczowych i jak jej unikać? - Arteon"                    | "Kanibalizacja słów kluczowych: czym jest i jak ją naprawić?"    | Krótszy, keyword first |
| szybkość            | "Dlaczego szybkość ładowania strony wpływa na pozycję w Google? - Arteon"               | "Szybkość strony a pozycja w Google: Core Web Vitals"            | Krótszy, 2 keywords    |
| wordpress           | "Dlaczego regularne aktualizacje WordPressa są kluczowe dla bezpieczeństwa? - Arteon"   | "Aktualizacje WordPressa: dlaczego są ważne dla bezpieczeństwa?" | Krótszy                |
| 404                 | "Czym jest strona błędu 404 i dlaczego warto ją zaprojektować? - Arteon"                | "Strona błędu 404: jak ją znaleźć i zaprojektować?"              | Krótszy                |
| paradoks            | "Czym jest paradoks wyboru i dlaczego mniej opcji może zwiększyć sprzedaż? - Arteon"    | "Paradoks wyboru: dlaczego mniej opcji zwiększa sprzedaż?"       | Krótszy, keyword first |
| zakotwiczenie       | "Efekt zakotwiczenia: jak pierwsza cena wpływa na postrzeganie wartości? - Arteon"      | "Efekt zakotwiczenia: jak pierwsza cena wpływa na decyzje?"      | Krótszy                |
| breadcrumbs         | "Czym jest ścieżka nawigacji na stronie i dlaczego warto ją mieć? - Arteon"             | "Breadcrumbs na stronie: po co i jak wdrożyć?"                   | Krótszy                |
| mapa strony         | "Mapa strony dla użytkowników: dlaczego warto ją mieć i jak powinna wyglądać? - Arteon" | "Mapa strony HTML: po co ją mieć i jak zaprojektować?"           | Krótszy                |
| pozycjonowanie czas | "Ile czasu trwa pozycjonowanie strony firmowej? Mechanizmy i realne terminy - Arteon"   | "Ile czasu trwa pozycjonowanie strony? Realne terminy"           | Krótszy                |
| regulamin           | "Co to jest regulamin sklepu internetowego i co musi zawierać? - Arteon"                | "Regulamin sklepu internetowego: co musi zawierać?"              | Krótszy                |
| dostawa             | "Darmowa dostawa vs niższa cena: co bardziej przekonuje do zakupu? - Arteon"            | "Darmowa dostawa vs niższa cena: co przekonuje klientów?"        | Krótszy                |
| linkowanie          | "Czym jest linkowanie wewnętrzne i jak wpływa na SEO strony? - Arteon"                  | "Linkowanie wewnętrzne: jak wpływa na SEO strony?"               | Krótszy                |

### 6.4 Humanizer process per artykuł

Dla każdego artykułu zastosować 3-krokowy proces:

1. **Draft rewrite** — przepisać problematyczne sekcje z brand voice Arteon
2. **Anti-AI audit** — pytanie: "Co sprawia, że ten tekst brzmi jak AI?" → naprawić
3. **Final pass** — sprawdzić: czy jest naturalny? czy ma "duszę"? czy fakty poprawne?

### 6.5 Checklist per artykuł (po edycji)

- [ ] Intro nie zawiera "W tym artykule wyjaśniamy"
- [ ] Podsumowanie nie jest identyczne jak w innych artykułach
- [ ] Brak nadmiarowego "Wyjaśniamy" w excercie
- [ ] Meta title 50-60 znaków
- [ ] Meta description 150-160 znaków
- [ ] Keyword w pierwszych 100 słowach
- [ ] Zróżnicowana długość akapitów
- [ ] Min. 1 zdanie z perspektywy Arteon ("Z naszego doświadczenia...")
- [ ] Formulaiczne linki wewnętrzne zamienione na naturalniejsze
- [ ] Wszystkie fakty zweryfikowane
- [ ] JSON syntax poprawny

---

## Podsumowanie

**33 artykuły** wymagają przebudowy w zakresie:

- **Humanizacja** (wszystkie 33) — usunięcie wzorców AI, dodanie głosu marki
- **SEO meta** (12 artykułów) — skrócenie meta titles, poprawa descriptions
- **Błędy faktyczne** (3 artykuły) — natychmiastowa korekta
- **LSI keywords** (wszystkie 33) — wzbogacenie semantyczne

**Szacowany czas implementacji:**

- Faza 1 (błędy): 1 sesja
- Faza 2 (AI Overview): 1 sesja
- Faza 3 (SEO): 3-4 sesje
- Faza 4 (Psychologia/Sklepy): 2 sesje
- Faza 5-6 (pozostałe): 3-4 sesje

**Łącznie: 10-12 sesji roboczych**
