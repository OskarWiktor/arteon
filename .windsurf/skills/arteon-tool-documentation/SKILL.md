---
name: arteon-tool-documentation
version: 1.0.0
description: |
  Tworzenie i ulepszanie instrukcji narzędzi. Skill analizuje rzeczywisty kod komponentu,
  mapuje wszystkie funkcje, przyciski i UI, a następnie tworzy ludzką, SEO-zoptymalizowaną
  dokumentację. Integruje się z humanizer (naturalny ton) i arteon-seo (optymalizacja).
  Używaj do: tworzenia instrukcji od zera, ulepszania istniejących, audytu zgodności
  dokumentacji z rzeczywistą funkcjonalnością.
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - CodeSearch
  - AskUserQuestion
---

# Skill: arteon-tool-documentation

Kompleksowy skill do tworzenia dokumentacji i instrukcji narzędzi Arteon.

## Kiedy używać

- Tworzenie instrukcji narzędzia **od zera**
- **Ulepszanie** istniejących instrukcji
- **Audyt** zgodności dokumentacji z kodem
- Dodanie nowych sekcji/komponentów do strony narzędzia
- Przepisanie złej/nieaktualnej instrukcji

---

# CZĘŚĆ 1: PROCES TWORZENIA INSTRUKCJI

## Krok 1: Analiza kodu (OBOWIĄZKOWA)

Przed napisaniem jakiejkolwiek instrukcji, **ZAWSZE**:

```
1. Znajdź główny komponent narzędzia
   → components/sections/tools/{ToolName}/ lub podobny

2. Przeanalizuj CAŁY kod:
   - Props interfejsy → co można konfigurować
   - useState/useReducer → jakie stany ma narzędzie
   - Event handlers (onClick, onChange) → jakie akcje użytkownik może wykonać
   - UI elements (buttons, inputs, selects) → co widzi użytkownik
   - Export/download funkcje → co może wyeksportować
   - Error handling → jakie błędy może zobaczyć

3. Zmapuj UI do funkcji:
   Przycisk "Generuj" → wywołuje generatePalette()
   Select "Harmonia" → zmienia harmoniaType state
   Input "Kolor bazowy" → aktualizuje baseColor

4. Zidentyfikuj wszystkie formaty wyjściowe:
   - Jakie pliki można pobrać?
   - W jakich formatach?
   - Z jakimi ustawieniami?

5. Sprawdź ograniczenia:
   - Max rozmiar pliku?
   - Wspierane formaty wejściowe?
   - Desktop-only funkcje?
```

## Krok 2: Mapowanie funkcjonalności

Stwórz tabelę wszystkich funkcji:

```markdown
| Element UI            | Typ    | Funkcja           | Opis dla użytkownika    |
| --------------------- | ------ | ----------------- | ----------------------- |
| Przycisk "Generuj"    | button | generatePalette() | Generuje nową paletę    |
| Select "Harmonia"     | select | setHarmonyType()  | Wybór typu harmonii     |
| Color picker          | input  | setBaseColor()    | Wybór koloru bazowego   |
| Przycisk "Kopiuj CSS" | button | copyCSS()         | Kopiuje paletę jako CSS |
```

## Krok 3: Weryfikacja z istniejącą dokumentacją

```
1. Przeczytaj istniejący contentBlocks w JSON
2. Porównaj z rzeczywistymi funkcjami z Kroku 2
3. Zidentyfikuj:
   - Brakujące funkcje (są w kodzie, brak w docs)
   - Nieaktualne opisy (docs nie zgadza się z UI)
   - Błędne nazwy przycisków/etykiet
   - Brakujące kroki w instrukcji
```

---

# CZĘŚĆ 2: STRUKTURA INSTRUKCJI

## Wymagane sekcje

### 1. Jak używać (HowTo Steps)

```json
{
  "type": "sectionSteps",
  "title": "Jak używać generatora palety kolorów",
  "columns": 1,
  "items": [
    {
      "title": "1. Wybierz kolor bazowy",
      "description": "Kliknij na pole koloru i wybierz główny kolor swojej palety. Możesz też wpisać kod HEX bezpośrednio."
    },
    {
      "title": "2. Wybierz typ harmonii",
      "description": "Z listy rozwijanej wybierz harmonię: analogiczną, komplementarną, triadyczną lub inną."
    },
    {
      "title": "3. Dostosuj paletę",
      "description": "Użyj suwaków nasycenia i jasności, aby dopasować kolory do swoich potrzeb."
    },
    {
      "title": "4. Eksportuj wynik",
      "description": "Kliknij przycisk eksportu i wybierz format: CSS, Tailwind, SCSS lub PNG."
    }
  ]
}
```

### 2. Opis funkcji (SectionInfo)

```json
{
  "type": "sectionInfo",
  "title": "Co oferuje generator palety kolorów",
  "html": "<p>Generator palety kolorów tworzy harmonijne zestawienia kolorów w oparciu o teorię koloru. Obsługuje 9 typów harmonii: analogiczną, komplementarną, triadyczną, tetrady, monochromatyczną, split-komplementarną, kwadratową, złoty podział i losową.</p><p>Każdy kolor można dostosować — zmienić nasycenie, jasność lub ręcznie edytować kod HEX. Gotową paletę eksportujesz jednym kliknięciem do CSS, Tailwind, SCSS lub jako obraz PNG.</p>"
}
```

### 3. Szczegółowy opis elementów UI

```json
{
  "type": "sectionInfo",
  "title": "Elementy interfejsu",
  "html": "<p><strong>Color picker</strong> — wybierz główny kolor klikając na kolorowe pole lub wpisując kod HEX (np. #FF5733).</p><p><strong>Lista harmonii</strong> — rozwijane menu z 9 typami harmonii kolorów. Każda tworzy inny zestaw pasujących kolorów.</p><p><strong>Suwaki regulacji</strong> — pozwalają precyzyjnie dostosować nasycenie (intensywność) i jasność każdego koloru.</p><p><strong>Przyciski eksportu</strong> — CSS generuje zmienne CSS, Tailwind tworzy konfigurację do pliku tailwind.config, SCSS eksportuje zmienne Sass, PNG pobiera obraz palety.</p>"
}
```

### 4. FAQ (konkretne pytania)

```json
{
  "type": "faq",
  "items": [
    {
      "question": "Jak skopiować pojedynczy kolor z palety?",
      "answer": "Kliknij na wybrany kolor w palecie. Kod HEX zostanie automatycznie skopiowany do schowka."
    },
    {
      "question": "Czy mogę edytować wygenerowane kolory?",
      "answer": "Tak. Kliknij dwukrotnie na dowolny kolor, aby otworzyć edytor. Możesz zmienić kod HEX lub użyć suwaków HSL."
    },
    {
      "question": "Jaka jest różnica między harmoniami?",
      "answer": "Analogiczna używa sąsiednich kolorów (spokojny efekt). Komplementarna łączy kolory przeciwne (wysoki kontrast). Triadyczna wybiera 3 kolory równo rozłożone na kole (żywy efekt)."
    }
  ]
}
```

---

# CZĘŚĆ 3: ZASADY PISANIA

## Integracja z humanizer

**ZAWSZE** stosuj zasady humanizer przy pisaniu:

### Zakazane wzorce

```
❌ "Narzędzie pozwala na generowanie..."
   → "Generujesz paletę jednym kliknięciem"

❌ "W celu wygenerowania palety należy..."
   → "Żeby wygenerować paletę:"

❌ "Funkcjonalność eksportu umożliwia..."
   → "Eksportujesz do CSS, Tailwind lub PNG"

❌ "Użytkownik może skorzystać z..."
   → "Możesz użyć..."
```

### Ton i styl

```
✅ Bezpośredni — mów do użytkownika ("Wybierz kolor", nie "Użytkownik wybiera")
✅ Konkretny — podawaj dokładne nazwy przycisków ("Kliknij Generuj")
✅ Praktyczny — opisuj co się stanie ("Po kliknięciu pojawi się paleta")
✅ Prosty — unikaj żargonu technicznego bez wyjaśnienia
```

### Czasowniki

```
✅ "Kliknij" / "Wybierz" / "Wpisz" / "Przeciągnij"
❌ "Należy kliknąć" / "Trzeba wybrać" / "Wymagane jest"
```

---

# CZĘŚĆ 4: ZGODNOŚĆ Z RZECZYWISTOŚCIĄ

## Nazwy elementów UI

**Nazwy w dokumentacji MUSZĄ być identyczne z UI:**

```
Jeśli w kodzie:
<Button>Generuj paletę</Button>

To w dokumentacji:
"Kliknij przycisk «Generuj paletę»"

NIE:
"Kliknij przycisk Generuj" (skrócone)
"Kliknij Generate" (angielskie)
"Kliknij Stwórz paletę" (zmienione)
```

## Sprawdzanie UI labels

```typescript
// W kodzie szukaj:
// 1. Dictionary keys (tools-ui/*.json)
const { labels } = useDictionary('tools-ui/color-palette');
<Button>{labels.generate}</Button>

// 2. Hardcoded strings
<Button>Generuj paletę</Button>

// 3. Tooltip/aria-label
<Button aria-label="Kopiuj do schowka">
```

## Weryfikacja kroków

Każdy krok w instrukcji musi być możliwy do wykonania:

```
✅ "Kliknij przycisk «Eksportuj»" — przycisk istnieje
✅ "Wybierz format z listy" — lista istnieje i ma opcje
✅ "Plik zostanie pobrany" — faktycznie się pobiera

❌ "Kliknij przycisk «Zapisz»" — nie ma takiego przycisku
❌ "Wybierz rozmiar" — nie ma takiej opcji
❌ "Poczekaj na przetworzenie" — działa natychmiast
```

---

# CZĘŚĆ 5: INTEGRACJA Z SEO

## Schema HowTo

Każde narzędzie powinno mieć HowTo schema:

```json
{
  "schemas": {
    "howTo": {
      "name": "Jak stworzyć paletę kolorów",
      "description": "Instrukcja krok po kroku jak używać generatora palety kolorów",
      "steps": [
        {
          "name": "Wybierz kolor bazowy",
          "text": "Kliknij na color picker i wybierz główny kolor palety lub wpisz kod HEX."
        },
        {
          "name": "Wybierz harmonię kolorów",
          "text": "Z listy rozwijanej wybierz typ harmonii: analogiczną, komplementarną lub inną."
        },
        {
          "name": "Eksportuj paletę",
          "text": "Kliknij przycisk eksportu i wybierz format: CSS, Tailwind, SCSS lub PNG."
        }
      ]
    }
  }
}
```

## Keywords w instrukcji

Naturalnie wplataj keywords:

```
✅ "Generator palety kolorów tworzy harmonijne zestawienia..."
   (keyword: generator palety kolorów)

✅ "Eksportujesz paletę do CSS lub Tailwind..."
   (keywords: paleta CSS, paleta Tailwind)

❌ "Generator palety kolorów to generator do generowania palet"
   (keyword stuffing)
```

---

# CZĘŚĆ 6: WORKFLOW

## Tworzenie od zera

```
1. [CODE] Znajdź i przeanalizuj komponent narzędzia
2. [MAP] Stwórz mapę wszystkich funkcji UI
3. [WRITE] Napisz instrukcję zgodnie z zasadami
4. [VERIFY] Sprawdź zgodność nazw z kodem
5. [SEO] Dodaj schema HowTo
6. [HUMANIZE] Przejrzyj pod kątem humanizer
7. [UPDATE] Zaktualizuj contentBlocks w JSON
```

## Ulepszanie istniejącej

```
1. [READ] Przeczytaj istniejący contentBlocks
2. [CODE] Przeanalizuj aktualny kod komponentu
3. [COMPARE] Porównaj dokumentację z kodem
4. [FIX] Napraw niezgodności:
   - Zmień błędne nazwy przycisków
   - Dodaj brakujące funkcje
   - Usuń nieaktualne informacje
   - Dodaj brakujące kroki
5. [ENHANCE] Rozszerz o:
   - Bardziej szczegółowe opisy
   - Dodatkowe FAQ
   - Tips & tricks
6. [HUMANIZE] Przepuść przez humanizer rules
7. [UPDATE] Zaktualizuj JSON
```

## Audyt zgodności

```
1. [CODE] Przeanalizuj komponent
2. [DOCS] Przeczytaj istniejącą dokumentację
3. [REPORT] Stwórz raport niezgodności:

| Element | W kodzie | W dokumentacji | Status |
|---------|----------|----------------|--------|
| Przycisk export | "Eksportuj" | "Export" | ❌ Niezgodne |
| Select harmonii | 9 opcji | 7 opisanych | ❌ Brakuje 2 |
| Input kolor | HEX, RGB, HSL | tylko HEX | ❌ Niepełne |

4. [FIX] Napraw wszystkie niezgodności
```

---

# CZĘŚĆ 7: TEMPLATE INSTRUKCJI

## Pełny template contentBlocks

```json
{
  "contentBlocks": [
    {
      "type": "sectionSteps",
      "title": "Jak używać [nazwa narzędzia]",
      "columns": 1,
      "items": [
        {
          "title": "1. [Pierwszy krok]",
          "description": "[Dokładny opis co kliknąć/wpisać i co się stanie]"
        },
        {
          "title": "2. [Drugi krok]",
          "description": "[Kolejna akcja z konkretnym rezultatem]"
        },
        {
          "title": "3. [Trzeci krok]",
          "description": "[Finalna akcja — eksport/pobieranie/kopiowanie]"
        }
      ]
    },
    {
      "type": "sectionInfo",
      "title": "Funkcje [nazwa narzędzia]",
      "html": "<p>[Opis głównych funkcji z konkretnymi nazwami UI elements]</p><ul><li><strong>[Nazwa elementu]</strong> — [co robi]</li><li><strong>[Nazwa elementu]</strong> — [co robi]</li></ul>"
    },
    {
      "type": "sectionInfo",
      "title": "Obsługiwane formaty",
      "html": "<p>[Lista formatów wejściowych/wyjściowych z ograniczeniami]</p>"
    },
    {
      "type": "faq",
      "title": "Często zadawane pytania",
      "items": [
        {
          "question": "[Praktyczne pytanie o użycie]",
          "answer": "[Konkretna odpowiedź z nazwami przycisków]"
        },
        {
          "question": "[Pytanie o funkcję]",
          "answer": "[Odpowiedź opisująca gdzie ją znaleźć]"
        },
        {
          "question": "[Pytanie o ograniczenia]",
          "answer": "[Uczciwa odpowiedź o limitach]"
        },
        {
          "question": "[Pytanie o eksport/zapisywanie]",
          "answer": "[Opis procesu eksportu]"
        }
      ]
    },
    {
      "type": "gap"
    },
    {
      "type": "toolsCarousel"
    }
  ]
}
```

---

# CZĘŚĆ 8: CHECKLIST

## Przed publikacją

- [ ] **Kod przeanalizowany** — wszystkie funkcje zmapowane
- [ ] **Nazwy zgodne** — etykiety UI identyczne z dokumentacją
- [ ] **Kroki wykonalne** — każdy krok można wykonać
- [ ] **Formaty kompletne** — wszystkie formaty wejściowe/wyjściowe opisane
- [ ] **Ograniczenia podane** — limity plików, wymiary, wspierane formaty
- [ ] **Ton humanized** — brak korpo-języka, AI-fraz
- [ ] **FAQ praktyczne** — odpowiadają na realne pytania użytkowników
- [ ] **Schema HowTo** — kroki zgodne z contentBlocks
- [ ] **Keywords naturalne** — wplecione bez stuffingu
- [ ] **Brak błędów** — JSON waliduje się poprawnie

## Niezgodności do wyłapania

```
❌ Przycisk ma inną nazwę niż w docs
❌ Opisana funkcja nie istnieje w kodzie
❌ Brakuje opisu istniejącej funkcji
❌ Błędna kolejność kroków
❌ Nieaktualne screenshoty/opisy
❌ Opis mówi "kliknij X" ale X się nazywa Y
```

---

# CZĘŚĆ 9: PRZYKŁADY

## Dobry przykład instrukcji

```json
{
  "type": "sectionSteps",
  "title": "Jak używać generatora QR kodów",
  "columns": 1,
  "items": [
    {
      "title": "1. Wprowadź treść kodu",
      "description": "W polu «Treść QR kodu» wpisz adres URL, tekst lub dane kontaktowe. Maksymalnie 2048 znaków."
    },
    {
      "title": "2. Dostosuj wygląd",
      "description": "Wybierz kolor kodu i tła za pomocą color pickerów. Opcjonalnie dodaj logo klikając «Dodaj logo» i wybierając plik PNG lub JPG."
    },
    {
      "title": "3. Pobierz kod QR",
      "description": "Kliknij «Pobierz PNG» dla obrazu rastrowego lub «Pobierz SVG» dla wektorowego. Kod zostanie zapisany na Twoim urządzeniu."
    }
  ]
}
```

## Zły przykład (do poprawy)

```json
{
  "type": "sectionSteps",
  "title": "Instrukcja",
  "items": [
    {
      "title": "Krok 1",
      "description": "Wprowadź dane do narzędzia."
    },
    {
      "title": "Krok 2",
      "description": "Dostosuj ustawienia według potrzeb."
    },
    {
      "title": "Krok 3",
      "description": "Pobierz wynik."
    }
  ]
}
```

**Problemy:**

- Brak konkretnych nazw pól/przycisków
- Ogólnikowe opisy ("dane", "ustawienia")
- Brak informacji o formatach/limitach
- Nie wiadomo co dokładnie kliknąć

---

# CZĘŚĆ 10: INTEGRACJA ZE SKILLAMI

## Używaj razem z:

### humanizer

- Przepuść treść przez humanizer rules po napisaniu
- Sprawdź czy nie ma AI-patterns
- Upewnij się, że ton jest naturalny

### arteon-seo

- Sprawdź czy schema HowTo jest poprawna
- Upewnij się, że keywords są naturalnie wplecione
- Zweryfikuj meta title/description

### arteon-content

- Stosuj brand voice guidelines
- Unikaj forbidden phrases
- Używaj przykładów z właściwych branż

---

# QUICK REFERENCE

## Proces skrócony

```
1. Przeanalizuj kod komponentu
2. Zmapuj wszystkie funkcje UI
3. Napisz instrukcję z konkretnymi nazwami
4. Sprawdź zgodność z kodem
5. Przepuść przez humanizer
6. Zaktualizuj JSON
```

## Złote zasady

1. **Nazwy identyczne z UI** — kopiuj dokładnie
2. **Kroki wykonalne** — testuj mentalnie każdy
3. **Formaty kompletne** — opisz wszystkie
4. **Ton ludzki** — pisz jak do kolegi
5. **SEO naturalne** — keywords bez stuffingu

## Pliki do sprawdzenia

| Typ        | Lokalizacja                          |
| ---------- | ------------------------------------ |
| Komponenty | `components/sections/tools/{Tool}/`  |
| UI strings | `data/{locale}/tools-ui/{tool}.json` |
| Tool data  | `data/{locale}/tools/{tool}.json`    |
| Schema     | W pliku tool data, sekcja `schemas`  |
