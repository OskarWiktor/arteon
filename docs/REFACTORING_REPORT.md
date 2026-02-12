# RAPORT REFAKTORYZACJI V2 - Dogłębna Analiza

Data: 2026-02-12

---

## 1. MAPA TŁUMACZEŃ (ui translations) - ROZPROSZONE PO 10 PLIKACH

Każde narzędzie ma inline `const ui = { pl: {...}, en: {...} }` wewnątrz komponentu.

| Plik                            | LOC tłumaczeń           | Status            |
| ------------------------------- | ----------------------- | ----------------- |
| `EmailSignatureGenerator/ui.ts` | ~383                    | ✅ Wyekstrahowane |
| `ImageResizeTool/ui.ts`         | ~180                    | ✅ Wyekstrahowane |
| `ColorPaletteGenerator.tsx`     | ~122 (linie 15-122)     | ❌ Inline         |
| `FaviconGenerator.tsx`          | ~86 (linie 43-128)      | ❌ Inline         |
| `MetaTitleDescriptionTool.tsx`  | ~63 (linie 11-74)       | ❌ Inline         |
| `PaletteExtractor.tsx`          | ~38 (linie 20-57)       | ❌ Inline         |
| `QrCodeGenerator.tsx`           | ~96 (linie 25-120)      | ❌ Inline         |
| `WcagContrastChecker.tsx`       | ~77 (linie 19-96)       | ❌ Inline         |
| `WordCountTool.tsx`             | ~48 (linie 14-61)       | ❌ Inline         |
| `JpgPngToWebp.tsx`              | ? (nie odczytano pełni) | ❌ Inline         |
| **ŁĄCZNIE inline**              | **~530+ LOC**           |                   |

### Rekomendacja: Centralizacja tłumaczeń

Według best practices Next.js i18n, tłumaczenia powinny być w **jednym centralnym miejscu**.
Proponowana struktura:

```
lib/i18n/
  locales.ts          ← już istnieje (ogólne locale)
  tool-registry.ts    ← już istnieje
  tools/              ← NOWY katalog
    color-palette.ts
    favicon.ts
    meta-title.ts
    palette-extractor.ts
    qr-code.ts
    wcag-contrast.ts
    word-count.ts
    jpg-png-webp.ts
    email-signature.ts  ← przenieść z components/
    image-resize.ts     ← przenieść z components/
```

---

## 2. NIEKONSEKWENCJA SUBFOLDERY NARZĘDZI

### Problem: 3 narzędzia mają subfoldery, 7 nie

| Narzędzie                | LOC  | Subfolder?  | Zawartość subfolderu                                                                                                 |
| ------------------------ | ---- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| EmailSignatureGenerator  | 1225 | ✅ 7 plików | ui.ts, constants.ts, types.ts (re-export), buildSignatureHtml.ts, sanitize.ts, TextStyleRow.tsx, useSignatureCopy.ts |
| ImageResizeTool          | 846  | ✅ 5 plików | ui.ts, types.ts (re-export), cropMath.ts, exportCroppedImage.ts, useCropDrag.ts                                      |
| JpgPngToWebp             | 519  | ✅ 4 pliki  | useWebpConversion.ts, useWebpDownloads.ts, useWebpQueue.ts, useWebpReportCopy.ts                                     |
| FaviconGenerator         | 467  | ❌          | -                                                                                                                    |
| WcagContrastChecker      | 451  | ❌          | -                                                                                                                    |
| QrCodeGenerator          | 401  | ❌          | -                                                                                                                    |
| ColorPaletteGenerator    | 238  | ❌          | -                                                                                                                    |
| PaletteExtractor         | 202  | ❌          | -                                                                                                                    |
| WordCountTool            | 199  | ❌          | -                                                                                                                    |
| MetaTitleDescriptionTool | 194  | ❌          | -                                                                                                                    |

### Co jest w subfolderach (i czy tam powinno być):

**EmailSignatureGenerator/**

- `ui.ts` → powinno być w `lib/i18n/tools/`
- `constants.ts` → OK, kolokacja z komponentem
- `types.ts` → czysty re-export z `@/types/tools/email` (26 linii re-exportów) → **zbędny proxy**
- `buildSignatureHtml.ts` (540 LOC) → logika biznesowa, mogłoby być w `lib/tools/email/`
- `sanitize.ts` → pure utility (escapeHtml, sanitizeHrefUrl, etc.) → powinno być w `lib/tools/` lub `utils/`
- `TextStyleRow.tsx` → sub-komponent, OK w subfolderze
- `useSignatureCopy.ts` → hook specyficzny dla tego narzędzia, OK

**ImageResizeTool/**

- `ui.ts` → powinno być w `lib/i18n/tools/`
- `types.ts` → czysty re-export z `@/types/tools/image` (10 linii) → **zbędny proxy**
- `cropMath.ts` → pure math utility → mogłoby być w `lib/tools/image/`
- `exportCroppedImage.ts` → logika biznesowa → mogłoby być w `lib/tools/image/`
- `useCropDrag.ts` (238 LOC) → hook specyficzny, OK

**JpgPngToWebp/**

- `useWebpConversion.ts` → hook specyficzny, OK
- `useWebpDownloads.ts` → hook specyficzny, OK
- `useWebpQueue.ts` → hook specyficzny, OK
- `useWebpReportCopy.ts` → hook specyficzny, OK

---

## 3. CHAOS: `lib/` vs `utils/`

### utils/ - 2 pliki (prawie pusty)

- `slugify.ts` - pure utility, 10 LOC
- `blogCategory.ts` - pure utility, 11 LOC, importuje slugify

### lib/ - 38+ plików w rozbudowanej strukturze

```
lib/
├── LocaleContext.tsx     ← React context (OK w lib)
├── absoluteUrl.ts        ← pure utility → powinno być w utils/
├── blogDataService.ts    ← data service (OK w lib)
├── projectsDataService.ts ← data service (OK w lib)
├── redirects.ts          ← Next.js config (OK w lib)
├── serviceSchema.ts      ← schema.org helper (OK w lib)
├── config/               ← PUSTY KATALOG
├── consent/              ← 3rd party integrations (OK w lib)
│   ├── ahrefs.ts
│   ├── consentCookie.ts
│   ├── ga.ts
│   └── gtag.ts
├── i18n/                 ← i18n config (OK w lib)
│   ├── locales.ts
│   └── tool-registry.ts
├── search/               ← search logic (OK w lib)
│   └── searchIndex.ts
└── tools/                ← CHAOS - mieszanka pure utils i domain logic
    ├── canvasToBlob.ts     (15 LOC) → pure utility
    ├── clipboard.ts        (64 LOC) → pure utility
    ├── download.ts         (8 LOC)  → pure utility
    ├── downloadBlob.ts     (16 LOC) → pure utility (importuje download.ts)
    ├── fileFormat.ts       (14 LOC) → pure utility
    ├── formatBytes.ts      (7 LOC)  → pure utility
    ├── loadImage.ts        (19 LOC) → pure utility
    ├── objectUrl.ts        (8 LOC)  → pure utility
    ├── readFileAsDataUrl.ts (23 LOC) → pure utility
    ├── sleep.ts            (3 LOC)  → pure utility
    ├── statusClasses.ts    (16 LOC) → UI utility
    ├── types.ts            (1 LOC)  → zbędny re-export proxy
    ├── zip.ts              (107 LOC) → domain logic (OK)
    ├── color/              → domain logic (OK)
    │   ├── contrast.ts
    │   ├── convert.ts
    │   ├── extractPalette.ts
    │   ├── palette.ts
    │   └── types.ts        (1 LOC) → zbędny re-export proxy
    ├── email/              → domain logic (OK)
    │   ├── exportSignature.ts
    │   └── socialIcons.ts
    ├── favicon/            → domain logic (OK)
    │   └── generator.ts
    ├── image/              → domain logic (OK)
    │   ├── canvas.ts
    │   ├── uploadTypes.ts
    │   ├── webp.ts
    │   ├── webpQueue.ts
    │   └── webpReport.ts
    ├── qr/                 → domain logic (OK)
    │   └── generateQr.ts
    ├── seo/                → domain logic (OK)
    │   └── metaLength.ts
    └── text/               → domain logic (OK)
        └── wordCount.ts
```

### Wnioski:

- **`utils/` ma 2 pliki a `lib/tools/` ma ~12 pure utilities** które powinny być w `utils/`
- `lib/tools/` miesza **pure utilities** (formatBytes, sleep, objectUrl, clipboard, download) z **domain logic** (color/, email/, favicon/, image/, qr/, seo/, text/)
- `lib/` ogólnie jest OK dla: data services, consent, i18n, search, redirects, serviceSchema

---

## 4. ZBĘDNE RE-EXPORT PROXY PLIKI (4 pliki)

| Plik                                              | Treść                                      | Importowany przez                                          |
| ------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| `lib/tools/types.ts`                              | 1 LOC re-export z `@/types/tools/common`   | FaviconGenerator, PaletteExtractor                         |
| `lib/tools/color/types.ts`                        | 1 LOC re-export z `@/types/tools/color`    | contrast.ts, convert.ts                                    |
| `components/.../EmailSignatureGenerator/types.ts` | 26 LOC re-exportów z `@/types/tools/email` | EmailSignatureGenerator, useSignatureCopy                  |
| `components/.../ImageResizeTool/types.ts`         | 10 LOC re-exportów z `@/types/tools/image` | ImageResizeTool, cropMath, exportCroppedImage, useCropDrag |

### Rekomendacja:

Usunąć proxy pliki i importować bezpośrednio z `@/types/tools/*`.

---

## 5. DUPLIKOWANE WZORCE W TOOLACH

### 5.1 File upload + validation pattern (3 narzędzia)

FaviconGenerator, PaletteExtractor i ImageResizeTool mają prawie identyczny wzorzec:

```
function handleFiles(files) {
  if (!isSupportedImageUploadType(file)) { setError(...); return; }
  setError(null); setStatus('idle');
  revokeObjectUrl(previewUrl);
  const url = URL.createObjectURL(file);
  setFile(file); setPreviewUrl(url);
}
```

### 5.2 ZIP download pattern (2 narzędzia)

FaviconGenerator i JpgPngToWebp mają zbliżoną logikę:

```
setIsZipping(true);
try {
  for (item of outputs) {
    const res = await fetch(item.url);
    const blob = await res.blob();
    const buffer = await blob.arrayBuffer();
    files.push({ path: ..., data: new Uint8Array(buffer) });
  }
  createZipBlob(files); downloadFromUrl(url, 'name.zip');
} catch { setError(zipError); }
finally { setIsZipping(false); }
```

### 5.3 Status state pattern (3 narzędzia)

FaviconGenerator, PaletteExtractor, ImageResizeTool:

```
const [status, setStatus] = useState<ToolStatus>('idle');
const [error, setError] = useState<string | null>(null);
const isProcessing = status === 'processing';
```

### Rekomendacja:

Te wzorce NIE muszą być wyciągnięte do hooków - są zbyt różne w szczegółach.
Jednak useToolStatus() hook mógłby zunifikować #5.3.

---

## 6. DEAD CODE

### 6.1 components/ui/sections/ - 14 nieużywanych komponentów

(zachowujemy na życzenie usera)

### 6.2 components/sections/projects/ - 2 nieużywane pliki

- `Filters.tsx` - 0 importów, identyczny z ProjectFilters.tsx
- `ProjectFilters.tsx` - 0 importów, identyczny z Filters.tsx

### 6.3 lib/config/ - pusty katalog

---

## 7. NAMING: `navigation-types/` zawiera KOMPONENTY

`components/shared/navigation-types/` zawiera:

- `DesktopNavigation.tsx` (422 LOC)
- `MobileNavigation.tsx` (580 LOC)

Nazwa `-types` jest myląca - to pełne komponenty, nie typy.

---

## 8. HOOKI - ANALIZA

### 8.1 Hooki w hooks/ (14) - wszystkie używane ✅

Każdy hook ma od 2 do 16 importów w projekcie.

### 8.2 Hooki w tool subfolderach (6) - wszystkie specyficzne ✅

- `useSignatureCopy` - EmailSignatureGenerator
- `useCropDrag` - ImageResizeTool
- `useWebpConversion` - JpgPngToWebp
- `useWebpDownloads` - JpgPngToWebp
- `useWebpQueue` - JpgPngToWebp
- `useWebpReportCopy` - JpgPngToWebp

Te hooki są silnie powiązane z jednym narzędziem - kolokacja w subfolderze jest **akceptowalna** wg Next.js best practices. Nie ma sensu ich przenosić do globalnego `hooks/`.

### 8.3 Brakujące hooki - potencjał ekstrakcji

Mały potencjał. Wzorce z pkt 5.1-5.3 są zbyt różne w szczegółach, aby opłacało się tworzyć shared hook. Jedyna sensowna kandydatura:

- `useToolStatus()` - zunifikowanie `[status, setStatus, error, setError, isProcessing]` - ale zysk minimalny.

---

## 9. PROPONOWANY PLAN REFAKTORYZACJI

### FAZA 1: Centralizacja tłumaczeń → `lib/i18n/tools/`

Wyekstrahować inline `ui` z 8 komponentów do `lib/i18n/tools/`:

| Komponent                | Nowy plik                             |
| ------------------------ | ------------------------------------- |
| ColorPaletteGenerator    | `lib/i18n/tools/color-palette.ts`     |
| FaviconGenerator         | `lib/i18n/tools/favicon.ts`           |
| MetaTitleDescriptionTool | `lib/i18n/tools/meta-title.ts`        |
| PaletteExtractor         | `lib/i18n/tools/palette-extractor.ts` |
| QrCodeGenerator          | `lib/i18n/tools/qr-code.ts`           |
| WcagContrastChecker      | `lib/i18n/tools/wcag-contrast.ts`     |
| WordCountTool            | `lib/i18n/tools/word-count.ts`        |
| JpgPngToWebp             | `lib/i18n/tools/jpg-png-webp.ts`      |

Przenieść istniejące:

- `EmailSignatureGenerator/ui.ts` → `lib/i18n/tools/email-signature.ts`
- `ImageResizeTool/ui.ts` → `lib/i18n/tools/image-resize.ts`

### FAZA 2: Konsolidacja `utils/` - przeniesienie pure utilities z `lib/tools/`

| Obecna lokalizacja                          | Nowa lokalizacja              | Typ          |
| ------------------------------------------- | ----------------------------- | ------------ |
| `lib/tools/formatBytes.ts`                  | `utils/formatBytes.ts`        | Pure utility |
| `lib/tools/fileFormat.ts`                   | `utils/fileFormat.ts`         | Pure utility |
| `lib/tools/objectUrl.ts`                    | `utils/objectUrl.ts`          | Pure utility |
| `lib/tools/sleep.ts`                        | `utils/sleep.ts`              | Pure utility |
| `lib/tools/download.ts` + `downloadBlob.ts` | `utils/download.ts` (scalony) | Pure utility |
| `lib/tools/clipboard.ts`                    | `utils/clipboard.ts`          | Pure utility |
| `lib/tools/canvasToBlob.ts`                 | `utils/canvasToBlob.ts`       | Pure utility |
| `lib/tools/loadImage.ts`                    | `utils/loadImage.ts`          | Pure utility |
| `lib/tools/readFileAsDataUrl.ts`            | `utils/readFileAsDataUrl.ts`  | Pure utility |
| `lib/tools/statusClasses.ts`                | `utils/statusClasses.ts`      | UI utility   |
| `lib/absoluteUrl.ts`                        | `utils/absoluteUrl.ts`        | Pure utility |

Przenieść z `utils/` do `utils/blog/`:

- `utils/slugify.ts` → `utils/slugify.ts` (zostaje)
- `utils/blogCategory.ts` → `utils/blogCategory.ts` (zostaje)

### FAZA 3: Przeniesienie logiki biznesowej z tool subfolderów do `lib/tools/`

| Obecna lokalizacja                              | Nowa lokalizacja                        |
| ----------------------------------------------- | --------------------------------------- |
| `EmailSignatureGenerator/sanitize.ts`           | `lib/tools/email/sanitize.ts`           |
| `EmailSignatureGenerator/buildSignatureHtml.ts` | `lib/tools/email/buildSignatureHtml.ts` |
| `ImageResizeTool/cropMath.ts`                   | `lib/tools/image/cropMath.ts`           |
| `ImageResizeTool/exportCroppedImage.ts`         | `lib/tools/image/exportCroppedImage.ts` |

### FAZA 4: Usunięcie re-export proxy plików

- Usunąć `lib/tools/types.ts` → redirect 2 importy do `@/types/tools/common`
- Usunąć `lib/tools/color/types.ts` → redirect 2 importy do `@/types/tools/color`
- Usunąć `EmailSignatureGenerator/types.ts` → redirect importy do `@/types/tools/email`
- Usunąć `ImageResizeTool/types.ts` → redirect importy do `@/types/tools/image`

### FAZA 5: Rename + cleanup

- Rename `navigation-types/` → `navigation/`
- Usunąć `lib/config/` (pusty)
- Usunąć `projects/Filters.tsx` + `projects/ProjectFilters.tsx` (dead code)

### FAZA 6: Weryfikacja

- `npm run lint`
- `npm run build`

---

## 10. DOCELOWA STRUKTURA

```
utils/                          ← PURE UTILITIES (nie zależą od domeny)
├── absoluteUrl.ts
├── blogCategory.ts
├── canvasToBlob.ts
├── clipboard.ts
├── download.ts                 ← scalony download + downloadBlob
├── fileFormat.ts
├── formatBytes.ts
├── loadImage.ts
├── objectUrl.ts
├── readFileAsDataUrl.ts
├── sleep.ts
├── slugify.ts
└── statusClasses.ts

lib/                            ← DOMAIN LOGIC + INTEGRATIONS + CONFIG
├── LocaleContext.tsx
├── blogDataService.ts
├── projectsDataService.ts
├── redirects.ts
├── serviceSchema.ts
├── consent/                    ← 3rd party integrations
├── i18n/
│   ├── locales.ts
│   ├── tool-registry.ts
│   └── tools/                  ← CENTRALNE TŁUMACZENIA NARZĘDZI
│       ├── color-palette.ts
│       ├── email-signature.ts
│       ├── favicon.ts
│       ├── image-resize.ts
│       ├── jpg-png-webp.ts
│       ├── meta-title.ts
│       ├── palette-extractor.ts
│       ├── qr-code.ts
│       ├── wcag-contrast.ts
│       └── word-count.ts
├── search/
└── tools/                      ← DOMAIN-SPECIFIC LOGIC (nie pure utils)
    ├── color/
    ├── email/
    │   ├── buildSignatureHtml.ts  ← przeniesione z komponentu
    │   ├── exportSignature.ts
    │   ├── sanitize.ts            ← przeniesione z komponentu
    │   └── socialIcons.ts
    ├── favicon/
    ├── image/
    │   ├── canvas.ts
    │   ├── cropMath.ts            ← przeniesione z komponentu
    │   ├── exportCroppedImage.ts  ← przeniesione z komponentu
    │   ├── uploadTypes.ts
    │   ├── webp.ts
    │   ├── webpQueue.ts
    │   └── webpReport.ts
    ├── qr/
    ├── seo/
    ├── text/
    └── zip.ts

components/sections/tools/      ← TYLKO KOMPONENTY + KOLOKOWANE HOOKI
├── ColorPaletteGenerator.tsx
├── EmailSignatureGenerator.tsx
├── EmailSignatureGenerator/
│   ├── constants.ts            ← specyficzne dla komponentu
│   ├── TextStyleRow.tsx        ← sub-komponent
│   └── useSignatureCopy.ts     ← hook specyficzny
├── FaviconGenerator.tsx
├── ImageResizeTool.tsx
├── ImageResizeTool/
│   └── useCropDrag.ts          ← hook specyficzny
├── JpgPngToWebp.tsx
├── JpgPngToWebp/
│   ├── useWebpConversion.ts
│   ├── useWebpDownloads.ts
│   ├── useWebpQueue.ts
│   └── useWebpReportCopy.ts
├── ...reszta narzędzi (flat)
└── ToolsCarousel.tsx
```

### Podsumowanie zmian:

- ~530 LOC tłumaczeń → scentralizowane w `lib/i18n/tools/`
- ~12 pure utilities → przeniesione z `lib/tools/` do `utils/`
- 4 pliki logiki biznesowej → przeniesione do `lib/tools/`
- 4 zbędne re-export proxy → usunięte
- 3 dead code pliki → usunięte
- 1 folder rename (navigation-types → navigation)
- 1 pusty folder → usunięty
