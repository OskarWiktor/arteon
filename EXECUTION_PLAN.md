
# Arteon – Refactor Master Plan (single source of truth)

Ten dokument jest jedynym źródłem prawdy dla refaktoru/standaryzacji. Zastępuje (docelowo do usunięcia po konsolidacji):
- `DECISIONS_REQUIRED.md`
- `COMPONENTS_AUDIT_REPORT.md`

Źródła kontekstu (nie zastępowane):
- `PROJECT_KNOWLEDGE_BASE.md`
- `COMPONENTS_CATALOG.md`
- `HOOKS_CATALOG.md`

Legenda statusów:
- ✅ zrobione
- 🟡 w toku / częściowo
- ❌ nie zrobione

Ostatnia weryfikacja statusów w kodzie: **2025-12-14**

Założenia nadrzędne:
- Nie robimy redesignu.
- Refaktory nie mają zmieniać UI/UX ani treści.
- Na etapie „porządkowania” zachowujemy klasy Tailwinda 1:1 (chyba że etap planu mówi inaczej).

Decyzje (skondensowane; pełne uzasadnienia włączone w sekcjach planu):
- Typografia: **globals-first** (bazujemy na `.h*` i `.p` / globalnych regułach), a wyjątki rozwiązujemy przez klasy.
- Kolory tekstu: **wymuszamy** użycie `.text-light/.text-mid/.text-dark` (eliminujemy `text-gray-*`/`text-neutral-*`/raw hexy dla tekstu).
- Badge/Tag/Tool pills: konsolidujemy do **`Badge`** (jeden komponent + warianty); **`Tag` docelowo nie istnieje**.
- `Button`: warianty „jednorazowe” nie wchodzą do API; `totop` jest lokalny w `ButtonToTop`.
- `Tooltip`: **zostaje** (jedyny wyjątek – może być chwilowo nieużywany).
- Canonical: **bezwzględne (absolute)** i zawsze na `https://www.arteonagency.pl`.
- OpenGraph: **unikalne per typ strony**; gdy fallback, dodajemy komentarz TODO w pliku strony.
- Content renderer: wspólny `HTMLContent` + wspólny `RenderBlocks` (warianty dla typów danych).
- Multi-domain/multi-language: w planie na później; domena determinuje język dla wybranych wspólnych komponentów (np. tools).

## Szybka weryfikacja (wybrane punkty z ✅/ryzyk)

- ✅ **Badge/Tag**: `components/ui/Tag.tsx` nie istnieje; repo używa `components/ui/Badge.tsx` (m.in. w toolach).
- 🟡 **`tool-pill-*`**: klasy nadal są w `app/globals.css`, ale brak ich użyć w TS/TSX (kandydat do usunięcia po upewnieniu się, że nie są używane w treściach HTML/MD).
- ✅ **`Button.variant="minimal"` / `Button.variant="totop"`**: `Button` obsługuje tylko `normal|accent|glass|dark`; brak `variant="minimal"`/`variant="totop"` w repo. `ButtonToTop` ma własne klasy.
- ✅ **Karuzele**: `TestimonialsCarousel`, `ArticlesOverview`, `ProjectsOverview` używają `useCarouselScroller()` + `CarouselDots` + `CarouselNavButtons`.
- 🟡 **Surface**: `.surface-*` istnieją i są używane (`ArticlesList`, `CarouselCard`, `ShareBlock`, `TableOfContent`, `TableBlock`), ale migracja nie jest pełna.
- ✅ **SocialIconLink/IconButton**: `Navigation` i `MobileNavigation` używają tych prymitywów.

---

## 0) Definition of Done (global)

Dla każdego zadania/epiku:
- Kod przechodzi `lint` i `typecheck`.
- Brak zmian w treści widocznej dla użytkownika (poza poprawkami literówek/SEO, jeśli są wprost w backlogu).
- Brak zmian wizualnych (porównanie przed/po w review).
- Zachowana dostępność (focus ring, aria, keyboard).

---

## 2) Faza 1 – Szybkie redukcje API i martwego kodu (małe ryzyko)

### 2.1 Usunięcie nieużywanych wariantów (prymitywy UI)
- **Zakres** (wg audytu):
  - `Button.variant="minimal"` (0 użyć) ✅
  - `Tag.variant="selected" | "success" | "error"` (brak realnych użyć; `Tag` jest wygaszony/usunięty) ✅
- **Zależności**:
  - decyzja jest podjęta: usuwamy wszystko co nieużywane.
- **Kryteria akceptacji**:
  - brak błędów TS w call-site
  - brak zmian wizualnych

### 2.2 Komponenty do usunięcia / scalenia
- **Tooltip**: nie usuwamy (zostaje do późniejszego realnego wdrożenia).
- **Badge vs Tag**: konsolidujemy do `Badge` (Badge dostaje warianty, Tag jest wygaszany/usuwany). ✅
- **Kryteria akceptacji**:
  - brak importów do usuniętych plików (jeśli Tag zostanie usunięty)
  - brak zmian wizualnych

---

## 3) Faza 2 – Prymitywy „high ROI” (redukcja duplikacji)

### 3.1 Karuzele → jeden prymityw
- Status: ✅
- Odkrycie: `TestimonialsCarousel`, `ArticlesOverview`, `ProjectsOverview` mają bardzo podobną logikę (ResizeObserver + scroll listener + dots + keyboard) i obecnie nie ma wspólnego prymitywu w `components/ui`.
- Wdrożone:
  - `hooks/useCarouselScroller.ts` (właściwa lokalizacja dla hooków) ✅
  - `components/ui/carousel/CarouselNavButtons.tsx` (wspólne kontrolki karuzeli: strzałki) ✅
  - `components/ui/carousel/CarouselDots.tsx` (wspólne kontrolki karuzeli: kropki + SR) ✅
  - Migracja: `TestimonialsCarousel` → `useCarouselScroller()` ✅
  - Migracja: `ProjectsOverview` → `useCarouselScroller()` ✅
  - Migracja: `ArticlesOverview` → `useCarouselScroller()` ✅
- **Zakres**:
  - skonsolidować logikę z:
    - `TestimonialsCarousel`
    - `ArticlesOverview`
    - `ProjectsOverview`
  - docelowo: `components/ui/carousel/*` i/lub `useCarouselScroller()`
- **Zależności**:
  - decyzja o API karuzeli (ile wariantów? jak przekazujemy “card width”/snap?)
- **Kryteria akceptacji**:
  - identyczne zachowanie scroll/dots/nav
  - zachowane `aria-*` (region, roledescription, label)
  - brak zmian w klasach (poza przeniesieniem do prymitywu)

### 3.2 „Surface/Card” – redukcja powtarzalnych stringów klas
- Status: 🟡 (w toku)
- Odkrycie: w repo powtarza się pattern karty (np. `overflow-hidden rounded-2xl bg-white shadow-md transition focus-within:shadow-lg hover:shadow-lg`).
- Wdrożone:
  - globalne klasy: `.surface-card`, `.surface-panel`, `.surface-panel-solid` ✅
  - pierwsze przepięcia: `ArticlesList` + karty w `ArticlesOverview` → `.surface-card` ✅
  - `TableBlock` → `.surface-panel-solid` ✅
  - `ShareBlock` → `.surface-panel` ✅
  - `TableOfContent` (desktop panel) → `.surface-panel-solid` ✅
- **Opcje wdrożenia**:
  - globalne klasy `.surface` / `.surface-solid` w `globals.css`
  - albo komponent `Card` + warianty
- **Zależności**:
  - decyzja: CSS class vs komponent
- **Kryteria akceptacji**:
  - brak zmian wizualnych
  - realna redukcja duplikacji (min. kilka miejsc przepiętych)

### 3.3 IconButton i SocialIconLink
- Status: ✅
- Odkrycie: w `Navigation` i `MobileNavigation` powtarza się ten sam pattern linków ikonowych (target/rel + aria-label + focus ring + ikonka).
- Wdrożone:
  - `components/ui/SocialIconLink.tsx` ✅
  - Migracja: `Navigation` + `MobileNavigation` → `SocialIconLink` ✅
  - `components/ui/buttons/IconButton.tsx` ✅
  - Migracja: `Navigation` (toggle menu) → `IconButton` ✅
- **Cel**: ujednolicić focus ring, aria-label, target/rel.
- **Kryteria akceptacji**:
  - brak zmian wizualnych
  - poprawa spójności a11y

---

## 4) Faza 3 – Nawigacja (single source of truth)

### 4.1 Komponent z danymi do nawigacji + typy
- **Cel**: Mobile i Desktop korzystają z tej samej definicji linków/sekcji.
- **Kryteria akceptacji**:
  - 100% zgodność linków/etykiet między mobile i desktop
  - łatwość dodania nowego linku (1 miejsce)

### 4.2 Wspólne hooki / utils
- `useOutsideClick` ✅
- `useEscapeKey` ✅
- `useFocusTrap` ✅
- `useRestoreFocus` ✅
- `useScrollLock` ✅
- `useMenuKeyboardNavigation` ✅
- **Kryteria akceptacji**:
  - brak regresji w zachowaniu menu
  - keyboard nav działa co najmniej jak wcześniej

---

## 5) Faza 4 – Cookie Consent (podział odpowiedzialności)

### 5.1 Podział na moduły
- **Cel**: mniej „god component”, czytelniejszy kod, mniej ryzykownych zmian.
- **Zakres (proponowany)**:
  - `consent.storage.ts` (read/write)
  - `consent.gtag.ts` (updateGtag/loadGA)
  - `ConsentDialog` / `ConsentBanner` / `ConsentPreferencesPanel`
  - ewentualne hooki: `useFocusTrap`, `useRestoreFocus`
- **Kryteria akceptacji**:
  - identyczny UX
  - zapis preferencji działa
  - focus trap działa

---

## 6) Faza 5 – Tools (platformizacja UI + rozbijanie największych narzędzi)

### 6.1 Tool prymitywy
- Status: 🟡 (częściowo)
- Wdrożone (istnieją w `components/ui/tools/*`):
  - `ToolSection` ✅
  - `ToolInfo` ✅
  - `ToolHelper` ✅
  - `ToolFieldRow` ✅
  - `ToolAlert` ✅
- `ToolFileDropzone`
- **Kryteria akceptacji**:
  - brak zmian wizualnych
  - redukcja duplikacji w min. 2 narzędziach

### 6.2 Rozbijanie dużych komponentów
- **Priorytet**:
  - `EmailSignatureGenerator`
  - `ImageResizeTool`
- **Cel**:
  - znaleść i zredukować dublującą się logikę tworząc odpowiednie hooki i utils
  - wydzielić logikę do hooków (`useSignatureConfig`, `useImageFile`, `useCanvasExport`)
  - wydzielić czyste funkcje (`buildSignatureHtml`, clipboard utils)
- **Kryteria akceptacji**:
  - mniejsze pliki
  - brak zmian UX
  - brak memory leaks (cleanup blob URLs, event listeners)

---

## 7) Faza 6 – Content rendering (blog + realizacje)

### 7.1 Ujednolicenie rendererów `contentBlocks`
- **Cel**: nie trzymać dużych helperów w `page.tsx`.
- **Zakres**:
  - uspójnić komponenty używane w stronach realizacji i stronach artykułów
  - stworzyć nowe komponenty które będą używane w obu miejscach
  - jeśli jest jakaś wspólna logika stworzyć wspólne hooki 
  - jeśli jest jakaś wspólna logika stworzyć wspólne utils
  - wynieść wszystkie komponenty do osobnych plików
- **Ryzyko**:
  - miejsca z `dangerouslySetInnerHTML` – trzeba utrzymać identyczny markup.
- **Kryteria akceptacji**:
  - identyczny HTML output
  - brak zmian w stylach

### 7.2 `app/(pl)/mapa-strony/page.tsx`
- wydzielić logikę generowania do `lib/sitemapJsonLd.ts`.

---

## 8) Faza 7 – Standaryzacja stylów (dopiero po refaktorach redukujących duplikację)

### 8.1 Typografia – jedno źródło prawdy
- **Decyzja**: globals-first (ustalone).
- **Kryteria akceptacji**:
  - spójne rozmiary fontów
  - usunąć komponent Text i Heading gdyż nie daje on żadnej korzyści
  - wszystkie czcionki powinny używać globalnej klasy z kolorami, jeśli kolor jest inny typu text-neutral trzeba przypisać mu najbliższy podobny kolor

### 8.2 Kolory i tokenizacja
- wprowadzić kanon: `#080808`, `#5e5e5e`, `#2B2B2B`.
- usunąć wszystkie raw hexy w JSX.

---

## 9) Faza 8 – SEO/Growth backlog

### 9.1 Canonical URL – standaryzacja
- Canonical: **bezwzględne (absolute)** i zawsze na `https://www.arteonagency.pl`.

### 9.2 Schema.org – rozszerzenia
- stworzyć listę możliwych schema do dodania na stronach aby podnieść zrozumienie strony przez boty i pośrednio SEO

### 9.3 OpenGraph
- unikalne OG images per typ strony; jeśli strona używa fallbacku (wspólnego obrazu), dodajemy komentarz TODO w pliku strony.

---

## 11) Uzupełnienia z audytu + katalogów (stan faktyczny vs backlog)

Ta sekcja istnieje po to, żeby po usunięciu `DECISIONS_REQUIRED.md` i `COMPONENTS_AUDIT_REPORT.md` nie utracić kluczowych ustaleń i żeby plan był aktualny względem kodu.

### 11.1 Rzeczy już zrobione (oznaczyć jako „done”, bo to był cel audytu)

- ✅ **Karuzele**: istnieje `useCarouselScroller` + kontrolki `CarouselDots`/`CarouselNavButtons` i są użyte w 3 karuzelach.
- ✅ **Przeniesienie logiki do hooków**: repo ma wydzielony zestaw hooków używanych w nawigacji (`useOutsideClick`, `useEscapeKey`, `useFocusTrap`, `useRestoreFocus`, `useScrollLock`, `useMenuKeyboardNavigation`).
- ✅ **Surface classes**: istnieją `.surface-card`, `.surface-panel`, `.surface-panel-solid` i są już użyte w kilku miejscach.
- ✅ **Icon link/button prymitywy**: istnieją `SocialIconLink` oraz `IconButton`, a nawigacja korzysta z nich.
- ✅ **Redukcja API**:
  - `Text.variant="caption"` nie istnieje (varianty: `body|small|xs`).
  - `Button` nie ma `minimal` ani `totop`.
  - `Tag` jako osobny komponent nie istnieje (konsolidacja w `Badge`).

### 11.2 Rzeczy z backlogu, które nadal są nie zrobione (albo tylko częściowo)

- ❌ **Navigation: single source of truth dla danych** (`navigation.data.ts`): Mobile i Desktop nadal utrzymują osobne dane/sekcje.
- ❌ **CookieConsent: rozbicie na moduły** (storage/gtag/ui): `CookieConsent.tsx` nadal jest „god component”.
- 🟡 **Tools: platformizacja UI**:
  - istnieją bazowe prymitywy w `components/ui/tools/*` (sekcja 6.1),
  - brakuje wspólnych prymitywów wysokiego ROI (Dropzone / Tabs / OptionPills / MetricCard).
- ❌ **Content rendering**:
  - brak wspólnego `HTMLContent`/`RenderBlocks` jako komponentów z `/components` (logika nadal jest lokalnie w stronach `app/(pl)/edukacja/...` i `app/(pl)/realizacje/...`).
  - `app/(pl)/mapa-strony/page.tsx` nadal zawiera sporo logiki generowania JSON-LD (brak `lib/sitemapJsonLd.ts`).
- 🟡 **OpenGraph**: część stron ma TODO o unikalnych OG obrazach, ale pokrycie nie jest pełne.

### 11.3 Notatki dot. `tool-pill` (ważne, bo często wraca w backlogu)

 - Aktualnie `tool-pill`, `tool-pill-active`, `tool-pill-inactive` są zdefiniowane w `app/globals.css`.
 - Nie znaleziono użyć `tool-pill*` w TS/TSX; realne „pills” w narzędziach są budowane na `Badge`.
 - W praktyce oznacza to:
  - **migracja użyć jest już zrobiona (✅)**,
  - **usunięcie martwego CSS jest osobnym, bezpiecznym zadaniem (🟡)**.

 ---

 ## 12) Faza 9 – Tworzenie artykułów (SEO) — priorytety + zasady

 Źródło tematów: `BLOG_IDEAS_300.md` (numeracja 1–300).

 ### 12.1 Jak wybieramy „pierwsze do napisania” (bez zgadywania)

 - **Popularność / popyt**: tematy, które mają szeroki i powtarzalny popyt (zwykle: audyt SEO, meta title, robots.txt, przekierowania, Core Web Vitals, Google Business Profile).
 - **Intencja**: preferujemy tematy `hybrydowa` lub blisko decyzji (czyli naturalnie prowadzące do konsultacji/audytu/wdrożenia).
 - **ROI dla Arteon**: tematy, które da się sensownie podlinkować do usług (audyt SEO, optymalizacja, pozycjonowanie, strony/sklepy, tworzenie treści).
 - **Leverage narzędzi**: gdy temat ma naturalny „bridge” do narzędzia (`/narzedzia`), rośnie szansa na szybki ruch + powracających użytkowników.
 - **Łatwość realizacji**: na start wybieramy tematy, które nie wymagają danych klientów ani case’ów „z liczbami”.

 ### 12.2 Priorytet 1A (pierwsze artykuły) — SEO core + najwyższy intent

 - `51` — Audyt SEO: co dokładnie sprawdzamy (technika, treść, linki) i dlaczego
 - `56` — Optymalizacja SEO vs pozycjonowanie: czym się różnią i kiedy potrzebujesz której usługi
 - `89` — SEO techniczne dla małych firm: 15 rzeczy, które sprawdzamy w pierwszej kolejności
 - `97` — Strona nie rośnie w Google: 7 najczęstszych przyczyn i jak je sprawdzić
 - `63` — Jak pisać meta title, które zwiększa CTR (bez clickbaitu) — 12 szablonów
 - `70` — Robots.txt: najczęstsze błędy, przez które strona znika z Google
 - `71` — Noindex, canonical, redirect: jak nie zrobić sobie „niewidzialnej” strony
 - `72` — Przekierowania 301 po zmianie URL: jak to zrobić bez utraty ruchu (i jak testować)
 - `90` — Core Web Vitals: jak interpretować LCP/INP/CLS i które poprawki są najtańsze
 - `67` — Linkowanie wewnętrzne: proste zasady, które pomagają Google i użytkownikom

 ### 12.3 Priorytet 1B (następne po core) — local SEO + narzędzia (szybki ruch)

 - `83` — Google Business Profile: 20 ustawień, które realnie wpływają na wyświetlenia
 - `84` — Local Pack (mapy Google): jak zwiększyć szansę na top 3 w Twoim mieście
 - `85` — NAP (nazwa-adres-telefon): jak spójność danych wpływa na SEO lokalne
 - `86` — Opinie klientów a SEO: jak prosić o opinie i jak na nie odpowiadać (szablony)
 - `87` — Strony lokalizacji (miasto + usługa): kiedy to działa, a kiedy grozi spamem
 - `65` — Dlaczego liczy się szerokość meta title w pikselach, a nie tylko znaki
 - `66` — Jak używać licznika meta title/description: workflow dla strony i bloga
 - `81` — Optymalizacja zdjęć przed wrzuceniem na stronę: checklista w 5 minut
 - `27` — WebP vs AVIF: kiedy warto przejść na AVIF, a kiedy WebP wystarczy?
 - `69` — Sitemap.xml vs mapa strony dla użytkownika: co jest czym i po co potrzebujesz obu

 ### 12.4 Priorytet 2 (po zbudowaniu fundamentu) — e-commerce SEO + pomiar

 - `107` — Karta produktu: 15 elementów, które zwiększają konwersję bez obniżania ceny
 - `126` — SEO dla sklepu: co powinno być na stronie kategorii, żeby rankowała (bez lania wody)
 - `127` — SEO dla kart produktu: title, opis, dane strukturalne, opinie — checklista
 - `129` — Duplikacja w sklepach: warianty, filtry i parametry URL — jak nie zrobić chaosu
 - `136` — Migracja sklepu (zmiana platformy): jak zaplanować przekierowania i zachować ruch
 - `92` — GA4, Meta Pixel i inne tagi: jak wdrożyć, żeby nie spowolnić strony
 - `93` — UTM-y w praktyce: jak mierzyć, skąd przychodzą leady (i nie robić chaosu)
 - `259` — Tracking konwersji: co jest „konwersją” dla firmy usługowej (formularz, telefon, mail)
 - `260` — GTM vs wtyczki vs kod: jak wdrażać tagi marketingowe bez psucia performance
 - `261` — Consent Mode i cookie banner: jak wpływa na pomiar kampanii (bez straszenia)

 ### 12.5 Definition of Done dla artykułu (żeby SEO było powtarzalne)

 - Artykuł ma jasno określoną **intencję** (informacyjna / hybrydowa) i pasuje do etapu decyzji użytkownika.
 - W treści są min. **2–4 linki wewnętrzne**:
   - do powiązanej usługi,
   - do 1–2 artykułów wspierających z tego samego klastra,
   - opcjonalnie: do narzędzia, jeśli temat jest „tool-adjacent”.
 - Jest sekcja „najczęstsze błędy” + krótka checklista (łatwa do zacytowania i linkowania).
 - Wdrożone podstawowe elementy E-E-A-T: autor/źródła/aktualizacja (bez lania wody).
