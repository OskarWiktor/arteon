# Decisions Required (odpowiedz tutaj)

Ten plik zbiera pytania/decyzje, które blokują część backlogu. Odpowiedz w sekcjach „Twoja decyzja”.

---

## 1) Typografia: components-first czy globals-first?

Kontekst:
- `globals.css` styluje `p/li` (clamp) i nagłówki (`.h1..h6`).
- Równolegle mamy `Text`/`Heading`.

Opcje:
- **A) Components-first (rekomendowane przy atomic design)**
  - typografia głównie przez `Text`/`Heading`.
  - globalne style minimalne.
- **B) Globals-first**
  - typografia głównie przez `.h*` i `.p`.
  - `Text` tylko jako wrapper bez `text-*`.

Twoja decyzja:
- Wybrana opcja: B (globals-first)
- Uzasadnienie/uwagi: Zależy mi na tym aby style były wspólne, jeśli mamy jakiś wyjątek to moim zdaniem lepiej dodać klasę. Możesz rozważyć usunięcie tych dwóch komponentów. Przyjmijmy założenie że robimy molekuły a atomy tylko jeśli są bardziej zaawansowane warianty i zależności jak przy Button

---

## 2) Co robimy z `.text-light/.text-mid/.text-dark` w `globals.css`?

Opcje:
- **A) Usuwamy** (jeśli idziemy w `Text tone=...`).
- **B) Zostawiamy i wymuszamy użycie** (koniec raw hexów w JSX).

Twoja decyzja:
- Wybrana opcja: B, chciałbym aby były to jedyne kolory jakie są użyte w tekstach - jeśli tekst jakiś ma natural lub gray chciałbym aby to zostało zamienione do najbliższego koloru z tych styli.

---

## 3) „Surface/Card” – globalna klasa czy komponent?

Opcje:
- **A) Globalne klasy** `.surface` / `.surface-solid`.
- **B) Komponent** `Card` + warianty.

Twoja decyzja:
- Wybrana opcja: Nie jestem pewien gdzie byłby ten komponent używany. Jeśli w karuzelach i byłby to komponent wielokrotnego użytku czyli mamy karuzele jako osobny komponent w nim karte jako osobny komponent z wariantami dzięki któremu możemy zaoszczędzić kod to zróbmy komponenty 

---

## 4) `Tag` – czy usuwamy warianty `selected/success/error`?

Kontekst:
- W kodzie brak realnych użyć, są w dokumentacji.

Opcje:
- **A) Usuwamy** i redukujemy API.
- **B) Zostawiamy i wdrażamy konsekwentnie** (wskaż gdzie mają być użyte).

Twoja decyzja:
- Wybrana opcja: A - usuwamy wszystko co jest nie używane
- Jeśli B: gdzie używamy (np. tools pills / statusy formularza): 

---

## 5) `Button` – wariant `totop`

Kontekst:
- Używany tylko przez `ButtonToTop`.

Opcje:
- **A) Usuwamy `totop` z `Button`** i styl trzymamy w `ButtonToTop`.
- **B) Zostawiamy**, bo traktujemy „scroll to top” jako standardowy pattern.

Twoja decyzja:
- Wybrana opcja: A - to osobne działanie przeznaczone tylko dla tego Buttona więc usuwamy to z Button jeśli jest używane tylko w ButtonToTop

---

## 6) `Tooltip.tsx` – usuwamy czy wdrażamy realny tooltip?

Kontekst:
- Brak użyć w JSX, ale w danych występują pola `tooltip` (to nie jest użycie komponentu).

Opcje:
- **A) Usuwamy Tooltip** (brak planów na UI tooltip).
- **B) Wdrażamy tooltip** (np. w kalkulatorze przy opcjach).

Twoja decyzja:
- Wybrana opcja: B - nie usuwaj póki co będzie on potrzebny później ( jest to jedyny wyjątek )

---

## 7) `Badge` – usuwamy na rzecz `Tag`?

Opcje:
- **A) Usuwamy Badge** i migrujemy do `Tag`.
- **B) Zostawiamy**, bo ma inną semantykę/wygląd (uzasadnij).

Twoja decyzja:
- Wybrana opcja: A - połączmy. Zachowaj komponent Badge i rozszerz go o możliwości Tag tab aby były to warianty ale sam komponent niech się nazywa Badge bo jest to bardziej intuicyjne

---

## 8) Canonical URLs – względne czy absolutne?

Kontekst:
- Jest mix `https://...` i `/path`.

Opcje:
- **A) Względne** (`/path`) – elastyczniejsze przy zmianie domeny.
- **B) Absolutne** (`https://domain/path`) – jednoznaczne, ale trudniejsze przy multi-domain.

Twoja decyzja:
- Wybrana opcja: A

---

## 9) OpenGraph images – czy robimy unikalne per typ strony?

Opcje:
- **A) Zostaje jeden obraz OG** (prościej).
- **B) Unikalne OG** (usługi/blog/projekty/tools) – lepszy share.

Twoja decyzja:
- Wybrana opcja: B - powinny być komentarze w miejscach gdzie nie ma unikalnego zdjęcia. Wybiore sam unikalne zdjęcie odpowiednie dla danej strony. Jeśli nie ma komentarza na stronie że używa nie unikalnego zdjęcia to go dodaj. Dodaj również komentarz jeśli widzisz że np. HP ma zdjęcie z folderu /bg - te zdjęcia tła będą wymieniane również

---

## 10) RenderBlocks / HtmlContent – wspólny renderer czy dwa osobne?

Kontekst:
- Blog i realizacje mają podobne bloki, ale nie identyczne.

Opcje:
- **A) Wspólny renderer** z wariantem `kind`.
- **B) Dwa renderery** (Article/Project), ale współdzielą małe klocki (`Aspect`, `HtmlContent`).

Twoja decyzja:
- Wybrana opcja: A wspólny komponent z wariantami - pozostań przy nazwie HTMLContent bo jest bardziej intuicyjna

---

## 11) Tools – czy „pills” mają być oparte o `Tag`?

Opcje:
- **A) Tak** – jeden system pigułek (Tag) i redukcja `.tool-pill-*`.
- **B) Nie** – zostawiamy `tool-pill-*` jako osobny styl.

Twoja decyzja:
- Wybrana opcja: Pośrednio - niech będą odmianą Badge, Klasy i warianty z Tag i tool-pill wgramy go Badge dla ujednolicenia styli

---

## 12) Multi-language / multi-domain – czy to w ogóle wchodzi w scope?

Opcje:
- **A) Nie w scope**.
- **B) W scope** (wtedy planujemy hreflang, data/en, routing map, sitemap per domain).

Twoja decyzja:
- Wybrana opcja: B tak ale nie w tym momencie. Będzie tylko jeden język który będzie na innej domenie - strony dla tego języka będą również inne, nie będą strikte odzwierciedleniem. Język w wybranych wspólnych komponentach jak tools będzie się zmieniał w zależnosci od języka, który będzie zależny od domeny. Tego teraz nie robimy ale taki będzie plan
