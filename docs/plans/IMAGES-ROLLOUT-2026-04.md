# Plan: Rozszerzenie realizacji o wyniki optymalizacji + bump cennika

**Data:** 2026-04-14
**Zakres:** 10 nowych zdjęć .webp w `public/assets/projects/`
**Scope locale:** PL-only (brak `projects.json` w innych locale'ach)

---

## Inwentarz obrazów (po renamie)

| Realizacja        | przed                                                  | po                                                  | single                                           |
| ----------------- | ------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------ |
| `autokorfu/`      | `autokorfu-optymalizacja-strony-wynik-przed.webp`      | `autokorfu-optymalizacja-strony-wynik-po.webp`      | —                                                |
| `camper-albania/` | `camper-albania-optymalizacja-strony-wynik-przed.webp` | `camper-albania-optymalizacja-strony-wynik-po.webp` | —                                                |
| `eliza-wronska/`  | `eliza-wronska-optymalizacja-strony-wynik-przed.webp`  | `eliza-wronska-optymalizacja-strony-wynik-po.webp`  | —                                                |
| `msc/`            | `msc-optymalizacja-strony-wynik-przed.webp`            | `msc-optymalizacja-strony-wynik-po.webp`            | —                                                |
| `finish-masters/` | —                                                      | —                                                   | `finish-masters-optymalizacja-strony-wynik.webp` |
| `izoluk/`         | —                                                      | —                                                   | `izoluk-optymalizacja-strony-wynik.webp`         |

---

## Mapowanie obrazów → realizacje (slugi)

| Obraz          | Slug realizacji w `data/pl/projects.json`                            | Status                                                                                         |
| -------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| finish-masters | `logo-dla-firmy-wykonczeniowej-finish-masters`                       | ⚠️ realizacja = **logo**, nie strona — do potwierdzenia czy dokładać wynik optymalizacji tutaj |
| izoluk         | `strona-internetowa-dla-firmy-budowlanej-ocieplenia-budynkow-izoluk` | ✅ pasuje                                                                                      |
| camper-albania | `strona-internetowa-dla-camper-albania`                              | ✅ pasuje                                                                                      |
| msc            | `strona-dla-psychologa-msc-psychotherapy`                            | ✅ pasuje (strona, nie szablony social media)                                                  |
| autokorfu      | — brak slugu —                                                       | 🆕 nowa realizacja (Faza 3)                                                                    |
| eliza-wronska  | — brak slugu —                                                       | 🆕 nowa realizacja (Faza 3)                                                                    |

---

## Faza 1 — Wynik optymalizacji w istniejących realizacjach

**Cel:** pokazać realny efekt optymalizacji (visual proof zamiast tekstu abstrakcyjnego).

**Wykorzystanie istniejącego mechanizmu:**

- Dla realizacji z parą przed/po → contentBlock typu `beforeAfter` (komponent już obsługiwany w `[slug]/page.tsx:391-428`).
- Dla realizacji tylko z obrazem „wynik" (bez przed) → contentBlock typu `image` (już obsługiwany, linie 186-206).

**Zadania:**

1. **`strona-internetowa-dla-camper-albania`** — dodać `beforeAfter` block + zaktualizować tekst w `description`/`challenges`/`outcomes` żeby odnosił się do widocznej poprawy Core Web Vitals / PageSpeed.
2. **`strona-dla-psychologa-msc-psychotherapy`** — jw.
3. **`strona-internetowa-dla-firmy-budowlanej-ocieplenia-budynkow-izoluk`** — dodać block `image` z `izoluk-optymalizacja-strony-wynik.webp` + tekst tłumaczący dlaczego tylko "po" (brak archiwalnej wersji, screenshot wyniku PageSpeed).
4. **`logo-dla-firmy-wykonczeniowej-finish-masters`** — ⚠️ **WYMAGA DECYZJI**: czy dodawać, czy realizacja pozostaje stricte o logo?

**Struktura danych (przykład dla camper-albania):**

```json
{
  "type": "beforeAfter",
  "title": "Wynik optymalizacji strony",
  "beforeImage": "/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-przed.webp",
  "beforeLabel": "Przed optymalizacją",
  "afterImage": "/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-po.webp",
  "afterLabel": "Po optymalizacji",
  "note": "Wynik PageSpeed Insights — poprawa Core Web Vitals (LCP, INP, CLS) po wdrożeniu optymalizacji.",
  "breakAfter": true
}
```

**Pliki do zmiany:**

- `data/pl/projects.json` (dodać blocki do 3-4 realizacji)

**Weryfikacja:** `npm run lint && npm run build` — wymagane (zmiana danych renderowanych SSG).

---

## Faza 2 — Strona oferty optymalizacji: zdjęcia + bump cennika

**Plik:** `app/(pl)/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress/page.tsx`

### 2a. Social proof — galeria wyników

Dodać sekcję z wybranymi wynikami (np. carousel / grid z 2-3 `beforeAfter`):

- camper-albania (przed/po)
- msc (przed/po)
- izoluk (single "po")

Umiejscowienie: między istniejącą sekcją "proces optymalizacji" a cennikiem (do potwierdzenia po obejrzeniu strony).

### 2b. Cennik — +200 zł uniformowo

| Miejsce                | Przed              | Po                  |
| ---------------------- | ------------------ | ------------------- |
| linia 267 (tier 1)     | `od 450 do 650 zł` | `od 650 do 850 zł`  |
| linia 281 (tier 2)     | `od 650 do 850 zł` | `od 850 do 1050 zł` |
| linia 294 (legal note) | `450-850 zł`       | `650-1050 zł`       |

⚠️ **Uwaga o kolizji:** nowy tier 1 (650-850) = stary tier 2 (650-850). Do potwierdzenia czy to intencja (uniformowa podwyżka +200 zł), czy tier 2 ma iść bardziej agresywnie.

**Pliki do zmiany:**

- `app/(pl)/uslugi/tworzenie-stron-wordpress/optymalizacja-strony-wordpress/page.tsx`

**Weryfikacja:** `npm run lint && npm run build` — wymagane.

---

## Faza 3 — Nowe realizacje (po fazach 1+2)

**Blokada:** wymaga dostarczenia przez klienta (Oskar):

- tytuł + slug
- opis klienta (sector, location, timeline)
- zakres prac, challenges/solutions, outcomes
- ew. testimonial
- dodatkowe zdjęcia (hero, mockup, case study shots)
- link do wdrożonej wersji

**Nowe realizacje:**

1. **autokorfu** — prawdopodobnie slug `strona-internetowa-dla-autokorfu` (do potwierdzenia)
2. **eliza-wronska** — prawdopodobnie slug `strona-internetowa-dla-eliza-wronska` (do potwierdzenia)

**Zakres prac per realizacja:**

- Dodać wpis w `data/pl/projects.json` (pełna struktura: hero, description, contentBlocks, cta, faq, seo)
- Dodać `beforeAfter` block z gotowymi parami przed/po
- Zaktualizować `sitemap-projects.xml` (automatycznie z build)
- Jeśli istnieje karuzela/grid realizacji na stronie głównej — sprawdzić że nowe się pojawią (prawdopodobnie automatyczne z `projects.json`)

---

## Kolejność wykonania

1. ✅ **Zrobione:** rename 10 plików (usunięcie sufiksów wielkości)
2. ✅ **Zrobione:** Faza 1 — podmiana `beforeAfter` w camper-albania i msc-psychotherapy; izoluk/finish-masters przeniesione do Fazy 2
3. ✅ **Zrobione:** Faza 2 — podmiana 2 placeholderów + nowa sekcja „Realne wyniki optymalizacji" + cennik +200 zł (uniform)
4. ✅ **Zrobione:** Lint OK + build OK (do postbuildu sitemap)
5. ⏸️ Faza 3 — czekamy na treści od Oskara dla autokorfu + eliza-wronska

---

## Pytania otwarte (przed startem)

1. **Finish Masters:** dodawać wynik optymalizacji czy pominąć (realizacja = logo, nie strona)?
2. **Cennik tier 2:** czy intencja to `od 850 do 1050 zł` (uniformowy +200 zł), czy inna strategia? Nowy tier 1 = stary tier 2 (850) — kolizja.
3. **Sekcja na ofercie optymalizacji:** wolisz **carousel** z wynikami, **grid 2×1**, czy **pojedynczy featured case** (np. tylko camper-albania)?
4. **Tekst po/przed:** czy mam dopisać też `note` z konkretnymi metrykami (LCP, PageSpeed score), czy uogólnić ("poprawa Core Web Vitals")?
