# Plan: Eliminacja `dangerouslySetInnerHTML` z kodu produkcyjnego

**Data:** 2026-05-08
**Cel:** Zmniejszyć powierzchnię ataku XSS i poprawić bezpieczeństwo zgodnie z best practices Next.js 16 + React 19.

---

## 1. Audyt (stan obecny)

Dokładnie **6 wystąpień** w **3 plikach źródłowych** (poza `.claude/`, `node_modules/`, `docs/`, `scripts/`):

| #   | Plik                                             | Linia | Kontekst                                              | Źródło danych                      | Kategoria    |
| --- | ------------------------------------------------ | ----- | ----------------------------------------------------- | ---------------------------------- | ------------ |
| 1   | `app/(pl)/realizacje/[slug]/page.tsx`            | 234   | imageText block (right side)                          | `data/pl/projects.json` → `b.html` | HTML content |
| 2   | `app/(pl)/realizacje/[slug]/page.tsx`            | 240   | imageText block (left side)                           | `data/pl/projects.json` → `b.html` | HTML content |
| 3   | `app/(pl)/edukacja/page.tsx`                     | 65    | `<script type="application/ld+json">` ItemList        | `JSON.stringify(schema)`           | JSON-LD      |
| 4   | `components/sections/tools/ToolPageRenderer.tsx` | 121   | sectionTabs → `tab.html`                              | `data/{locale}/tools/*.json`       | HTML content |
| 5   | `components/sections/tools/ToolPageRenderer.tsx` | 138   | sectionTimeline → `item.description`                  | `data/{locale}/tools/*.json`       | HTML content |
| 6   | `components/sections/tools/ToolPageRenderer.tsx` | 149   | sectionBasic → `block.html`                           | `data/{locale}/tools/*.json`       | HTML content |
| 7   | `components/sections/tools/ToolPageRenderer.tsx` | 206   | `<Script type="application/ld+json">` combinedSchemas | `JSON.stringify(...)`              | JSON-LD      |

**Profil zawartości HTML w JSON:** proste tagi semantyczne (`<h2>`, `<p>`, `<br/>`, klasy Tailwind) — content autorski zespołu, **nie** input użytkownika. Realne ryzyko XSS: bardzo niskie. Cel: defense-in-depth + eliminacja antywzorca.

**Typy z polem `html: string`:** `types/article.ts`, `types/project.ts`, `types/tool-page.ts` (richtext, callout, sectionBasic, sectionTabs, sectionTimeline, imageText).

---

## 2. Najlepsze praktyki (Next.js 16 / React 19)

- **JSON-LD:** `dangerouslySetInnerHTML` na `<script>` to **kanoniczny i jedyny** wzorzec w dokumentacji Next.js (App Router). React 19 nie wprowadził alternatywy. Rozwiązanie: **escape `</` → `<\/`** w JSON aby zablokować script breakout (CWE-79). Dodatkowo można rozważyć `next/script` z `id` dla deduplikacji.
- **HTML content z trusted source (build-time JSON):** dwie ścieżki:
  - **A. Sanityzacja** (`isomorphic-dompurify`) — defense-in-depth, ale dalej `dangerouslySetInnerHTML`
  - **B. Markdown + react-markdown** — pełna eliminacja, czysty React tree, type-safe
  - **C. MDX** — overkill dla statycznego content
- **React 19** nie wnosi natywnego mechanizmu renderowania HTML stringa bez `dangerouslySetInnerHTML`. Każde "bezpieczne" rozwiązanie wymaga parsera.

---

## 3. Rekomendowany plan (3 fazy)

### Faza 1 — Hardening JSON-LD (1 godz., niskie ryzyko)

1. Stwórz `components/seo/JsonLd.tsx`:
   ```tsx
   export function JsonLd({ schema, id }: { schema: object | object[]; id?: string }) {
     const json = JSON.stringify(schema).replace(/</g, '\\u003c');
     return (
       <script id={id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: json }} />
     );
   }
   ```
   - Escape `<` → `<` blokuje `</script>` injection nawet gdyby content trafił z untrusted źródła.
2. Zamień 2 wystąpienia (`edukacja/page.tsx:65`, `ToolPageRenderer.tsx:206`) na `<JsonLd schema={...} id={...} />`.
3. Dodaj `eslint-disable-next-line` z komentarzem w `JsonLd.tsx` + lint rule `react/no-danger` zakazującą `dangerouslySetInnerHTML` poza `JsonLd`.

### Faza 2 — Migracja content blocks na markdown (4–6 godz.)

1. Instalacja: `npm i react-markdown remark-gfm`. Bundle: ~25 KB gz, lazy-loadowane.
2. Stwórz `components/content/Markdown.tsx` z wybraną listą dozwolonych tagów + class passthrough (Tailwind).
3. Skrypt migracyjny `scripts/html-to-markdown.cjs` (turndown):
   - Wczytuje wszystkie `data/**/*.json`
   - Konwertuje pola `html: string` → `markdown: string` (zachowuje classy w `{.cls}` syntax lub re-mapuje na typowe wzorce)
   - Zapisuje z `prettier`
4. Zaktualizuj typy w `types/article.ts`, `types/project.ts`, `types/tool-page.ts`: `html: string` → `markdown: string`.
5. Zamień 5 wystąpień `<div dangerouslySetInnerHTML={{__html: x.html}} />` → `<Markdown source={x.markdown} />`.
6. Edge cases:
   - `imageText.html` używa `<h2 class='h4 mb-2 scroll-mt-26 lg:mb-4 '>` — wymaga rehype plugin lub custom renderer dla nagłówków.
   - **Decyzja:** dla scroll-mt i klas `h4` — przejdź na **structured content** (typed object) zamiast markdown:
     ```ts
     blocks: Array<
       | { type: 'h2'; text: string; id?: string }
       | { type: 'p'; text: string; emphasis?: 'mid' | 'light' }
       | { type: 'list'; items: string[] }
     >;
     ```
     Renderowane czystym JSX bez `dangerouslySetInnerHTML`.

### Faza 3 — Enforcement (30 min)

1. ESLint rule `react/no-danger: 'error'` w całym projekcie (z wyjątkiem `components/seo/JsonLd.tsx`).
2. CI step: `grep -r dangerouslySetInnerHTML app components lib` — fail jeśli znajdzie poza allowlistą.
3. Dodaj test snapshot dla `<JsonLd>` — sprawdza escape `<` → `<`.

---

## 4. Decyzja zatwierdzona (2026-05-08)

**Wybrany wariant:** **B — Structured JSON blocks**

Uzasadnienie: type-safe, 0 KB runtime, pełna kontrola klas Tailwind (kluczowe dla `scroll-mt-26`, `text-mid mb-4` itp.), całkowita eliminacja `dangerouslySetInnerHTML` poza komponentem `JsonLd`.

**Konkretne typy bloków do wprowadzenia** (`types/content-blocks.ts` — nowy plik):

```ts
export type ContentBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: string; className?: string; id?: string }
  | { type: 'paragraph'; text: string; emphasis?: 'mid' | 'light' | 'dark'; className?: string }
  | { type: 'list'; ordered?: boolean; items: string[]; className?: string }
  | { type: 'spacer'; size?: 'sm' | 'md' | 'lg' };
```

**Renderer** `components/content/ContentBlocks.tsx` — pure JSX switch po `type`, brak `dangerouslySetInnerHTML`.

**Migracja JSON:**

- Skrypt `scripts/migrate-html-to-blocks.cjs` (cheerio do parsowania) konwertuje `html: string` → `blocks: ContentBlock[]`.
- Pliki do migracji: `data/pl/projects.json` (~7 case studies), `data/{16 locales}/tools/*.json` (~92 narzędzia × 3 typy bloków = ~4416 fragmentów).
- Skrypt idempotentny — można uruchomić wielokrotnie, raportuje "uncovered HTML patterns" do ręcznej rewizji.

**Type migration** w `types/article.ts`, `types/project.ts`, `types/tool-page.ts`:

- Pole `html: string` → `blocks: ContentBlock[]`
- Wszystkie miejsca: `richtext`, `callout`, `imageText`, `sectionBasic`, `sectionTabs.tab`, `sectionTimeline.item.description`.

---

## 5. Kryteria akceptacji

- [ ] 0 wystąpień `dangerouslySetInnerHTML` poza `components/seo/JsonLd.tsx`.
- [ ] ESLint `react/no-danger: error` aktywne.
- [ ] Build przechodzi (`npm run build`).
- [ ] Wszystkie 92 narzędzia × 16 lokali renderują się bez visualnej regresji (snapshot test lub manual review 5 losowych).
- [ ] Lighthouse SEO ≥ 90 (JSON-LD walidacja).
- [ ] Bundle nie rośnie więcej niż 5 KB gz na route (lub spada przy opcji B).
