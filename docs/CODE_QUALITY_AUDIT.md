# Audyt jakości kodu i sprzątanie projektu — Arteon

> **Cel dokumentu:** Living document z konkretnymi, weryfikowalnymi miejscami do poprawy w projekcie. Pisany pod ponowne wykonanie przez asystenta AI (lub człowieka). Obejmuje paczki, pliki konfiguracyjne, wzorce React 19.2 / Next.js 16, error handling i okolice.
>
> **Data ostatniego skanu:** 2026-05-08
> **Ostatnia implementacja:** 2026-05-08 — A3 + A4 (knip removed, missing deps added, package.json scripts cleaned)
> **Sposób użycia:** Daj asystentowi prompt z sekcji [Re-run Prompt](#re-run-prompt). Sekcja [Backlog do dopisywania](#backlog-do-dopisywania) jest po to, żebyś dopisywał nowe rzeczy do sprawdzenia w kolejnych iteracjach.

---

## Kontekst projektu

- **Stack:** Next.js 16.1.6 (App Router, `cacheComponents: true`), React 19.2.4, TypeScript 5 (strict), Tailwind CSS 4
- **16 locale**, 92 narzędzia, ~1600+ URL-i, deploy na Vercel
- **Architektura:** Server Components by default, klienckie komponenty oznaczone `'use client'`, brak Server Actions
- **Aktualne refaktory w toku** (zobacz git log dla pełnej historii):
  - Atom `Card` z 4 wariantami (`default | lift | outlined | section`) zastąpił `surface-card-*` i `tool-section`
  - Usunięty prop `headingLevel` z `HeroBanner`, `SectionSteps`, `SectionHeader`, `SectionHeaderWithAction` — hardcoded `<h1>` (hero) i `<h2 className="h3">` (sekcje)
  - Husky + lint-staged usunięte (folder + plugin)
  - Knit usunięty
  - Kilka małych plików konfiguracyjnych zostało już posprzątanych ręcznie

---

## Zakres audytu — czego szukamy

Lista jest checklistą dla asystenta. Asystent ma to przerobić od góry do dołu i zaznaczyć w sekcji Findings co znalazł.

### A. Paczki (`package.json`)

- [ ] Paczki zadeklarowane w `dependencies`/`devDependencies` ale nie zaimportowane nigdzie
- [ ] Paczki używane przez Next.js transient ale uwzględnione w `serverExternalPackages` (te NIE są nieużywane)
- [ ] Skrypty w `scripts:` które wskazują na usunięte narzędzia (np. `prepare: "husky"` po usunięciu husky)
- [ ] Konfiguracje w `package.json` które straciły powód (np. `lint-staged:` po usunięciu husky)
- [ ] Duplikaty / nadmiarowe wersje (np. dwa testery, dwa formattery)

### B. Pliki konfiguracyjne (root + dotfiles)

- [ ] Pliki przestarzałe przez nowsze API (np. `.eslintignore` jest **deprecated** w ESLint v9 — przeszło do `ignores:` w `eslint.config.js`)
- [ ] Pliki dla nieaktywnych workflow (np. `.npmignore` w aplikacji nie-publikowanej)
- [ ] Pliki dublujące się funkcjonalnie (np. `.editorconfig` vs `.prettierrc`)
- [ ] Pliki o jednolinijkowej zawartości — czy potrzebne (np. `.nvmrc`)
- [ ] Pliki "tymczasowe" w main branch (np. `temp-check-*`, `test-*`, `scratch-*`)
- [ ] Pliki konfiguracyjne, które powinny istnieć ale ich brak (np. `tailwind.config.ts` — w v4 nie jest wymagany, OK)

### C. React 19.2 — czy używamy nowoczesnych wzorców?

| Wzorzec                                 | Co to daje                                                                | Co sprawdzić                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`reactCompiler`** w `next.config.ts`  | Auto-memoizacja → można wywalić ręczne `useMemo`/`useCallback`/`memo`     | Czy włączone? Jeśli tak — czy nadal mamy 155+ ręcznych memo?                                 |
| **`<StrictMode>`**                      | Wykrywa side effects i błędy w devie                                      | Czy w `app/layout.tsx`? Czy `reactStrictMode: true` w `next.config.ts`?                      |
| **`use()`**                             | Konsumpcja Promise/Context bezpośrednio w komponencie (Server lub Client) | Czy jest gdzieś użyte? Jeśli nie — czy `useEffect + setState` można zastąpić `use(promise)`? |
| **Server Actions (`'use server'`)**     | Mutacje danych z formularzy bez REST/API routes                           | Czy są jakieś? Formularze (np. ContactForm) — czy używają Actions?                           |
| **`useActionState`**                    | Stan formy + akcja serwera w jednym hooku                                 | Używane?                                                                                     |
| **`useFormStatus`**                     | Pending state w formie bez prop drillingu                                 | Używane?                                                                                     |
| **`useOptimistic`**                     | Optimistic UI updates                                                     | Używane?                                                                                     |
| **`useTransition` / `startTransition`** | Niepilne updaty stanu (np. otwarcie menu)                                 | Już używane w 4 miejscach (Navigation)                                                       |
| **`Suspense`**                          | Streaming, lazy-loading z fallbackiem                                     | Tylko 1 wystąpienie obecnie                                                                  |
| **`createPortal`**                      | Modale, popovery poza DOM tree                                            | Już używane (~7 miejsc)                                                                      |
| **`createContext`/`useContext`**        | Współdzielony stan bez prop drillingu                                     | Tylko 1 Context (LocaleContext)                                                              |
| **`forwardRef`** (deprecated w R19)     | W R19 `ref` jest zwykłym propem                                           | 0 — czysto                                                                                   |

### D. Memoizacja — czy nadmiarowa?

- [ ] Ile jest `useMemo` / `useCallback` / `memo` / `React.memo` (cel: drastycznie obniżyć po włączeniu React Compiler)
- [ ] Czy wartości memoizowane są primitive (wtedy memo jest bez sensu)?
- [ ] Czy `useCallback`-i są przekazywane do komponentów które i tak nie są memoizowane (memo bez celu)?

### E. `useEffect` — anti-pattern check

Dla każdego `useEffect` zadać sobie pytania:

- [ ] Czy to **derived state** (`useEffect → setState`)? → przepisz na obliczanie w renderze
- [ ] Czy to **fetch w kliencie**? → przenieś do Server Component lub Route Handler + `use()`
- [ ] Czy to **synchronizacja z URL/storage**? → rozważ `useSyncExternalStore`
- [ ] Czy to **event listener + cleanup**? → OK, to legitne (już mamy hook `useEventListener`)
- [ ] Czy to **focus management / scroll lock / outside click**? → OK
- [ ] Czy zależności tablicy są poprawne? (eslint `exhaustive-deps`)

### F. Server vs Client components

- [ ] Ile komponentów ma `'use client'`?
- [ ] Czy każdy z nich realnie potrzebuje (state, effect, browser API, event handler)?
- [ ] Czy klienckie komponenty mogą być rozbite (np. nadrzędny serwerowy + maleńki kliencki interaktywny island)?
- [ ] Czy granice dyrektywy `'use client'` są na tak wysokim poziomie że psują SSR / CWV?

### G. Error handling

- [ ] `error.tsx` w `app/` per locale (mamy tylko `app/(pl)/error.tsx`!)
- [ ] `global-error.tsx` (do top-level błędów)
- [ ] `not-found.tsx` per locale (mamy 17, OK)
- [ ] Empty `.catch()` (silent fail) — np. `.catch(() => {})`
- [ ] `try { ... } catch {}` bez logowania
- [ ] Brak ErrorBoundary class dla granular containment (lub odpowiednika z react-error-boundary)
- [ ] Czy operacje plikowe (heic2any, sharp, jspdf, pdfjs-dist) mają obsługę błędów z komunikatami dla użytkownika?

### H. Inne klasyczne kwestie

- [ ] **Lazy loading** (`dynamic` lub `lazy`) — używane gdzie powinno (ciężkie biblioteki)?
- [ ] **`<Image>` z next/image** — wszystkie obrazy używają? czy są surowe `<img>`? (eslint plugin to pilnuje, sprawdź czy działa)
- [ ] **`<InlineLink>` z next/link** — jw.
- [ ] **Schema markup** (JSON-LD) — czy spójne, czy kompletne dla wszystkich tool pages
- [ ] **Hreflang tags** — czy poprawne dla wszystkich 16 locale
- [ ] **a11y**: ARIA, focus management, kontrast (mamy tool ContrastChecker — ironicznie sami sprawdzamy)
- [ ] **CSS classes w globals.css** — kolejna fala czyszczenia (po `surface-card`/`tool-section`)
- [ ] **Wielkość bundli** — `next/bundle-analyzer` podpięty, ale czy odpalany rutynowo?
- [ ] **Duplikacja kodu** — szukać podobnych komponentów (np. wszystkie _Carousel_, wszystkie _Generator_)

---

## Findings — stan na 2026-05-08

### A. Paczki — co usunąć

#### A1. Nieużywane `dependencies`

- **`sharp`** — knip flaguje jako nieużywane, **ale** jest w `serverExternalPackages` w `next.config.ts:71`. Next.js używa go transiently dla `next/image` w trybie self-host. **Decyzja: zostaw.**

#### A2. Nieużywane `devDependencies`

| Paczka                      | Status                                                                | Akcja                                                                                        |
| --------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `@tailwindcss/aspect-ratio` | Nieużywane (Tailwind v4 ma `aspect-*` natywnie)                       | **Usuń**                                                                                     |
| `@tailwindcss/forms`        | Nieużywane (w v4 trzeba by `@plugin` w CSS, nie ma)                   | **Usuń**                                                                                     |
| `@tailwindcss/typography`   | Nieużywane                                                            | **Usuń**                                                                                     |
| `fast-glob`                 | Nieimportowane nigdzie                                                | **Usuń**                                                                                     |
| `lint-staged`               | Skonfigurowane w `package.json` ale husky usunięte → nie ma trigger-a | **Usuń paczkę + sekcję `lint-staged:` z `package.json`**                                     |
| `tailwind-scrollbar`        | Nieimportowane                                                        | **Usuń**                                                                                     |
| `tailwindcss-children`      | Nieimportowane                                                        | **Usuń**                                                                                     |
| `husky`                     | Folder usunięty, paczka została                                       | **Usuń paczkę + skrypt `prepare: "husky"` z `package.json`** (inaczej `npm install` failuje) |
| `knip`                      | One-off audit tool, nieużywane w CI                                   | **Decyzja użytkownika** — usuń jeśli nie planujesz okresowego audytu                         |

#### A3. Brakujące dependencies — ✅ ZROBIONE 2026-05-08

- ✅ **`@eslint/js`** dodane jako devDependency `^9.28.0` (zgodne z eslint v9)
- ✅ **`server-only`** dodane jako dependency `^0.0.1`
- ✅ **`postcss`** dodane jako devDependency `^8.4.49`

> ⚠️ **`npm install` nie zostało odpalone** (SSL cert issue na sieci). Trzeba uruchomić ręcznie żeby zregenerować `package-lock.json`:
>
> ```bash
> npm install
> ```

#### A4. `package.json` skrypty/sekcje — ✅ ZROBIONE 2026-05-08

- ✅ Usunięte ze `scripts`: `prepare: "husky"`, `knip: "knip"`
- ✅ Usunięta sekcja `lint-staged` w całości
- ✅ Usunięta paczka `knip` z `devDependencies`

> Pozostałe nieużywane paczki z A2 (husky, lint-staged, fast-glob, tailwind-scrollbar, tailwindcss-children, @tailwindcss/aspect-ratio/forms/typography) **nadal są w `devDependencies`** — do usunięcia w kolejnym przebiegu.

---

### B. Pliki konfiguracyjne — co usunąć / czego brakuje

| Plik                       | Wielkość   | Status                                                                                                                | Akcja                                                                                 |
| -------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `.editorconfig`            | 274 B      | Pokrywa się z `.prettierrc` (whitespace, line endings)                                                                | **Usuń** lub zachowaj tylko jeśli zespół używa edytorów bez wsparcia Prettier on-save |
| `.eslintignore`            | 190 B      | **DEPRECATED w ESLint v9** — `eslint.config.js` już ma `ignores:` array. ESLint krzyczy warning na każde uruchomienie | **Usuń** (zawartość już jest w `eslint.config.js`)                                    |
| `.npmignore`               | 80 B       | Tylko sensowne dla pakietów publikowanych do npm. Aplikacja jest `private: true`                                      | **Usuń**                                                                              |
| `.nvmrc`                   | 3 B (`20`) | Użyteczne dla użytkowników nvm                                                                                        | **Zostaw**                                                                            |
| `.prettierignore`          | 34 B       | Ma sens                                                                                                               | Zostaw                                                                                |
| `.prettierrc`              | 233 B      | Ma sens                                                                                                               | Zostaw                                                                                |
| `.gitattributes`           | 980 B      | Wymusza LF, ma sens                                                                                                   | Zostaw                                                                                |
| `.vercelignore`            | 86 B       | Vercel deploy ignore                                                                                                  | Zostaw, jeśli używamy                                                                 |
| `.claudeignore`            | 226 B      | Claude/AI ignore                                                                                                      | Zostaw                                                                                |
| `postcss.config.mjs`       | 81 B       | Wymagane dla Tailwind v4 (`@tailwindcss/postcss` jako plugin PostCSS)                                                 | **Zostaw**                                                                            |
| `tailwind.config.ts`       | usunięty   | W Tailwind v4 nie wymagane                                                                                            | OK                                                                                    |
| `temp-check-categories.js` | usunięty   | Plik dev, usunięty                                                                                                    | OK                                                                                    |
| `tsconfig.tsbuildinfo`     | 282 KB     | Cache TypeScripta (w `.gitignore` powinien być)                                                                       | **Sprawdź `.gitignore`** — czy nie wpadł do commit-u                                  |
| `next-env.d.ts`            | 251 B      | Auto-generowany przez Next.js, w `.gitignore` zwykle                                                                  | Zostaw                                                                                |

---

### C. React 19.2 / Next.js 16 — modernizacja

#### C1. KRYTYCZNE — brakujące fundamenty

| Wzorzec                             | Stan                                                                     | Wpływ                                                                                | Akcja                                                                                 |
| ----------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **`reactCompiler: true`**           | ❌ NIE WŁĄCZONE w `next.config.ts`                                       | 155 ręcznych `useMemo`/`useCallback`/`memo` które mogłyby być zbędne                 | **Włącz `reactCompiler: true` w `experimental:`**, potem stopniowo usuwaj zbędne memo |
| **`reactStrictMode: true`**         | ❌ NIE USTAWIONE jawnie (Next 16 ma default `true`, ale lepiej explicit) | Wykrywa double-render bugs, missing cleanup w effect                                 | **Dodaj `reactStrictMode: true` na top-level `nextConfig`**                           |
| **`<StrictMode>`** w layout         | ❌ Nie używane                                                           | (Patrz wyżej — `reactStrictMode` w next.config to robi automatycznie dla App Router) | OK po włączeniu config flag                                                           |
| **`use()` hook**                    | ❌ Zero użyć                                                             | Idealne do konsumpcji promise w Server Components zamiast useEffect+state            | Refaktor: każde `useEffect+fetch+setState` → `const data = use(promise)` w SC         |
| **Server Actions (`'use server'`)** | ❌ Zero użyć                                                             | Każdy formularz to client→API→client. Marnowanie mocy App Router-a                   | **Refaktor `ContactForm.tsx`** na Server Action z `useActionState`                    |
| **`useActionState`**                | ❌ Zero                                                                  | Stan + akcja w jednym hooku, native progressive enhancement                          | Razem z Server Actions                                                                |
| **`useFormStatus`**                 | ❌ Zero                                                                  | Pending state w buttonach formularza bez prop drilling                               | Razem z Server Actions                                                                |
| **`useOptimistic`**                 | ❌ Zero                                                                  | Optimistic UI dla like/copy/contact                                                  | Tam gdzie ma sens (np. like button, kopiowanie)                                       |

#### C2. Stan obecny — liczby

```text
'use client' files                : 84
useEffect occurrences             : 80 (w 40 plikach)
useMemo + useCallback + memo      : 155 ← prawdopodobnie 80% redundantne po włączeniu React Compiler
useRef                            : 23
forwardRef                        : 0   ✅ (R19 standard — ref jako prop)
Suspense JSX                      : 1   ⚠️ za mało
createPortal                      : ~7  ✅ ok dla modali
createContext                     : 1   (LocaleContext)  ⚠️ za mało
use() hook                        : 0   ❌
'use server'                      : 0   ❌
useActionState/Optimistic         : 0   ❌
useTransition / startTransition   : 4   ✅ używane w Navigation
StrictMode JSX                    : 0   ❌
ErrorBoundary class               : 0   ❌
error.tsx (App Router)            : 1   (tylko PL!) ⚠️ brakuje 15 locale
not-found.tsx                     : 17  ✅ kompletne
loading.tsx                       : 67+ ✅ duża pokrycie
```

#### C3. Context — szansa

Mamy tylko `lib/LocaleContext.tsx`. Kandydaci do Context-a (eliminacja prop drilling):

- **Ustawienia tool-bara** w narzędziach (każdy generator przekazuje config → state przez 5 poziomów props)
- **Theme/Mode** (jeśli planujemy dark mode)
- **Konsent cookies** (mamy `ConsentListener` z effect — mogłoby być Context)
- **Layout state** (czy menu mobile otwarte) — obecnie prop drilling przez Navigation
- **Search context** (`useSearch` hook) — Context-owy jeśli chcemy sticky search

Po przejściu na pełny Atomic Design (atomy → molekuły → organizmy) Context staje się naturalnym mechanizmem do współdzielenia state-u na poziomie organizmu/template.

#### C4. `useEffect` anti-pattern hunt — TODO sprawdzić ręcznie

40 plików z `useEffect`. Kandydaci do refaktoru (prawdopodobne anti-patterns — wymaga deep-dive):

- `components/sections/blog/FilterBar.tsx` — 4 useEffect-y (synchronizacja stanu URL/state)
- `components/sections/Calculator.tsx` — useEffect-driven flow
- `components/sections/tools/EmailSignatureGenerator.tsx` — useEffect dla syncu config
- `components/sections/tools/UnitConverter/UnitConverter.tsx` — derived state?
- `components/sections/tools/WcagContrastChecker.tsx` — derived state from inputs?
- `components/sections/tools/PaletteExtractor.tsx` — image processing in effect?
- `components/sections/tools/ImageResizeTool.tsx` — image processing in effect?

**Heurystyka audytu:** dla każdego `useEffect`:

1. Jeśli effect ustawia state z innych state/props → **derived state, refaktor do obliczenia w renderze**
2. Jeśli effect wywołuje setState dla "transformacji danych" → **`useMemo` lub plain const**
3. Jeśli effect synchronizuje z external system (DOM events, scroll, IntersectionObserver) → **OK**
4. Jeśli effect robi fetch → **Server Component + `use()` lub Server Action**

#### C5. `'use client'` boundary — czy nie za szeroko?

84 pliki klienckie. Wymaga ręcznego przeglądu. Kandydaci do "split" (zostaw tylko interaktywną wyspę jako client, reszta SC):

- `components/sections/TestimonialsCarousel.tsx` — czy całe musi być client czy tylko karuzela?
- `components/sections/blog/ArticlesCarousel.tsx` — j.w.
- `components/sections/projects/ProjectsCarouselClient.tsx` — sufix `Client` sugeruje że już rozdzielone (✅)
- Wszystkie `Section*` które mają `'use client'` ale tylko renderują dane

---

### D. Error handling

#### D1. `error.tsx` — krytyczny brak

```text
app/(pl)/error.tsx        ✅ jest
app/en/error.tsx          ❌ brak
app/de/error.tsx          ❌ brak
app/es/error.tsx          ❌ brak
... (15 brakujących)
```

**Akcja:** dodać `error.tsx` per locale **lub** umieścić jeden generyczny `error.tsx` na poziomie `app/`.

Brak: **`app/global-error.tsx`** — łapie błędy które wybiją się ponad layout.

#### D2. Silent fails

W skanie znaleziono jedno: `hooks/useCopyToClipboard.ts:77 → .catch(() => {})`. Trzeba zrobić deeper grep przez całą bazę (operacje na FS, parsowanie, fetch).

Heurystyka: każde wywołanie `heic2any`, `pdfjs-dist`, `sharp`, `jspdf`, `marked.parse`, `JSON.parse`, `URL.createObjectURL` powinno mieć obsługę błędów z komunikatem dla użytkownika.

#### D3. Brak ErrorBoundary class

Granular containment dla pojedynczych narzędzi (np. PDF crash w jednym narzędziu nie powinien wywalić całej strony). Rozważ:

- Dodać `<ErrorBoundary>` wrapper na poziomie `DynamicToolRenderer`
- Lub lekka biblioteka `react-error-boundary` (bardzo mała, dobre API)

---

### E. Inne klasyczne kwestie do sprawdzenia w przyszłych iteracjach

(Lista uzupełniona po skanie — do priorytetyzacji w kolejnych przebiegach)

- [ ] **`<img>` zamiast `<Image>`** — eslint plugin warning na `'@next/next/no-img-element': 'warn'` — ile warningów?
- [ ] **Silent fails (deep)** — skan wszystkich `try/catch` (mamy 14) i `.catch(`
- [ ] **`useEffect` anti-patterns** — case-by-case audyt 40 plików
- [ ] **Bundle analysis** — odpalić `npm run analyze`, sprawdzić top-N dużych chunks
- [ ] **`'use client'` rightsizing** — które pliki da się przepisać na SC
- [ ] **Memoizacja po React Compiler** — usuwanie zbędnych memo (155 → ~10)
- [ ] **Schema markup completeness** — czy wszystkie tool pages mają SoftwareApplication + HowTo
- [ ] **Hreflang correctness** — testowo dla 5 wybranych URL-i
- [ ] **A11y deep audit** — focus management w modalach (mamy `useFocusTrap` ale nie wszędzie)
- [ ] **CSS klasy w globals.css** (kolejna fala) — `.calc-option-button-*`, `.tool-button-*`, `.tool-input`, `.tool-input`, `.tool-value`, `.faq-details` — czy wszystkie mają sens
- [ ] **Typy w `types/`** — knip wskazuje 34 nieużywane typy eksportowane

---

## Plan działania (priorytety)

Sortowanie po **kosztie wdrożenia × ryzyku regresji × wpływie**.

### Faza 1 — łatwe winy (1-2h, 0 ryzyka regresji)

1. ✅ ~~Usuń `prepare: "husky"` ze scripts~~ (zrobione 2026-05-08)
2. ✅ ~~Usuń sekcję `lint-staged:` z package.json~~ (zrobione 2026-05-08)
3. ⏳ Usuń paczki: `husky`, `lint-staged`, `fast-glob`, `tailwind-scrollbar`, `tailwindcss-children`, `@tailwindcss/aspect-ratio`, `@tailwindcss/forms`, `@tailwindcss/typography` (✅ knip zrobione, reszta TODO)
4. ✅ ~~Dodaj brakujące deps: `@eslint/js`, `server-only`, `postcss`~~ (zrobione 2026-05-08, wymaga `npm install`)
5. ⏳ Usuń `.eslintignore`, `.npmignore`, `.editorconfig`
6. ⏳ Sprawdź czy `tsconfig.tsbuildinfo` jest w `.gitignore`

### Faza 2 — fundamenty React 19 (2-4h, niskie ryzyko)

7. Włącz `reactCompiler: true` w `next.config.ts`
8. Dodaj `reactStrictMode: true` (explicit)
9. Dodaj `app/error.tsx` (generyczny) + `app/global-error.tsx`
10. Po włączeniu Compiler — ESLint plugin `eslint-plugin-react-compiler` żeby wykryć "incompatible patterns"

### Faza 3 — refaktor strukturalny (1-2 dni, średnie ryzyko)

11. ContactForm → Server Action + `useActionState`
12. Pierwszy Context (np. `<ToolConfigContext>` w generatorach) — proof of concept
13. Audyt 40 plików z `useEffect` — refaktor anti-patterns
14. Usunięcie zbędnych `useMemo`/`useCallback`/`memo` (155 → niska liczba)

### Faza 4 — głębsza modernizacja (sprint+)

15. Atomic Design — formalna reorganizacja `components/` (atomy/molekuły/organizmy/templates)
16. Server Components rightsizing — które `'use client'` można zwęzić
17. ErrorBoundary granular containment dla narzędzi
18. Bundle analysis + targetowane optymalizacje

---

## Re-run prompt

> **Skopiuj i wklej do nowej rozmowy z asystentem AI:**
>
> Przeanalizuj projekt Arteon (`c:\Users\proje\Documents\GitHub\arteon`) zgodnie z dokumentem `docs/CODE_QUALITY_AUDIT.md`. Wykonaj cały zakres z sekcji "Zakres audytu — czego szukamy" i porównaj z aktualnym stanem repo. Zaktualizuj sekcję "Findings" w dokumencie nową datą skanu, oznaczając:
>
> - co zostało rozwiązane od poprzedniego audytu (przekreśl lub przenieś do "Done")
> - nowe znaleziska
> - status każdego TODO z sekcji "Plan działania"
>
> Sprawdź też **dodatkowe rzeczy z sekcji "Backlog do dopisywania"** poniżej. Jeśli sekcja jest niepusta — to są moje świeże uwagi do uwzględnienia w tym przebiegu.
>
> Po skanie pokaż mi krótką diff-listę: co nowego, co już zrobione, co pilne. Zapytaj zanim cokolwiek edytujesz w plikach źródłowych.

---

## Backlog do dopisywania

> **Tu wpisuj nowe rzeczy które chcesz, żeby asystent sprawdzał w kolejnych przebiegach.** Po każdym przebiegu asystent przeniesie te punkty do "Zakres audytu" i wyczyści tę sekcję.

- (puste — dopisz swoje obserwacje)

---

## Historia skanów

| Data       | Skanujący | Akcja                 | Najważniejsze ustalenia / co zrobione                                                                                                                                                                                                                  |
| ---------- | --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2026-05-08 | Claude    | Skan                  | 8 unused devDeps, 3 deprecated config files, 0 Server Actions, 0 `use()`, 1 Context, 1 error.tsx (z 16 locale), `reactCompiler` wyłączony mimo 155 manual memo                                                                                         |
| 2026-05-08 | Claude    | Implementacja A3 + A4 | Usunięte ze scripts: `prepare: husky`, `knip: knip`. Usunięta sekcja `lint-staged`. Usunięta paczka `knip` z devDeps. Dodane: `server-only` (deps), `@eslint/js` + `postcss` (devDeps). `npm install` do wykonania ręcznie z powodu SSL cert na sieci. |

---

## Notatka o `.nvmrc`

`nvm` (Node Version Manager) to narzędzie do instalowania wielu wersji Node.js per-projekt. Plik `.nvmrc` z wartością `20` mówi nvm: "ten projekt wymaga Node 20".

**Czy plik jest potrzebny w tym projekcie:**

- ⚠️ **Vercel** czyta `.nvmrc` przy buildzie — usunięcie bez ustawienia alternatywy (`engines.node` w `package.json` lub Project Settings na Vercelu) może zmienić wersję Node na deploy.
- 🤷 **Lokalnie:** ma sens **tylko jeśli** Ty lub zespół używacie nvm/fnm. Jeśli nikt nie używa, plik jest no-op.

**Rekomendacja na przyszłość** (osobne zadanie, nie teraz): dodać `engines.node: ">=20"` do `package.json` jako bardziej standardowy mechanizm — działa na Vercelu, npm pokazuje warning przy złej wersji, IDE rozumie. Wtedy `.nvmrc` można usunąć bez ryzyka.
