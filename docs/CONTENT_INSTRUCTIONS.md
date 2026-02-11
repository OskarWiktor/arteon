# Arteon - Instrukcje tworzenia treści

**KRYTYCZNE:** Przed napisaniem jakiejkolwiek treści (artykuł, strona, opis, FAQ, CTA, metadata) przeczytaj ten dokument w całości.

---

## Zakres stosowania

Ten dokument zawiera wytyczne dotyczące **wszystkich treści** w repo Arteon:

- Artykuły blogowe
- Strony usług
- Strony narzędzi (w tym instrukcje)
- Realizacje
- Strony informacyjne (O nas, FAQ, Kontakt)
- Mikrocopy (opisy, podpisy, etykiety)
- `metadata.description`, OpenGraph, schema
- FAQ i CTA

### Co dotyczy wszystkich treści?

| Sekcja                                         | Dotyczy                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| **2. Ton i styl**                              | ✅ Wszystkich treści                                                     |
| **4a. Nasycenie fraz kluczowych w nagłówkach** | ✅ Wszystkich treści ze strukturą nagłówków                              |
| **6. Źródła i prawdziwość**                    | ✅ Wszystkich treści                                                     |
| **7. Balans DIY vs oferta**                    | ✅ Wszystkich treści                                                     |
| **8. CTA i przyciski**                         | ✅ Wszystkich treści                                                     |
| **9. Zakazy stylistyczne**                     | ✅ Wszystkich treści                                                     |
| **1. Intencja wyszukiwania**                   | ✅ Wszystkich treści (w uproszczonej formie dla krótkich treści)         |
| **3. Struktura artykułów**                     | ⚠️ Tylko artykułów blogowych                                             |
| **4. Zasady techniczne dla artykułów**         | ⚠️ Tylko artykułów blogowych                                             |
| **5. Linkowanie**                              | ⚠️ Wymagania ilościowe tylko dla artykułów, zasady ogólne dla wszystkich |
| **10. Checklista**                             | ⚠️ Część punktów tylko dla artykułów                                     |

### Co NIE dotyczy innych treści niż artykuły?

Następujące wymagania dotyczą **tylko artykułów blogowych**:

- Excerpt 220-230 znaków
- Czas czytania 9-14 minut / 1800-2800 słów
- Minimum 6-8 linków wewnętrznych
- Minimum 4-6 linków zewnętrznych
- Struktura typu: Wstęp → Sekcje → Podsumowanie
- Typy artykułów (edukacyjny, HowTo, porównawczy)

**Wszystkie pozostałe zasady (ton, styl, zakazy, CTA, prawdziwość) obowiązują w każdej treści.**

---

## Spis treści

1. [Intencja wyszukiwania](#1-intencja-wyszukiwania)
2. [Ton i styl](#2-ton-i-styl) - **dotyczy wszystkich treści**
3. [Struktura artykułów](#3-struktura-artykułów) - tylko artykuły
4. [Zasady techniczne dla artykułów](#4-zasady-techniczne-dla-artykułów) - tylko artykuły
   4a. [Nasycenie fraz kluczowych w nagłówkach H2/H3](#4a-nasycenie-fraz-kluczowych-w-nagłówkach-h2h3) - **dotyczy wszystkich treści**
5. [Linkowanie](#5-linkowanie)
6. [Źródła i prawdziwość](#6-źródła-i-prawdziwość) - **dotyczy wszystkich treści**
7. [Balans DIY vs oferta](#7-balans-diy-vs-oferta) - **dotyczy wszystkich treści**
8. [CTA i przyciski](#8-cta-i-przyciski) - **dotyczy wszystkich treści**
9. [Zakazy stylistyczne](#9-zakazy-stylistyczne) - **dotyczy wszystkich treści**
10. [Google Discover - cel jakościowy](#9a-google-discover--cel-jakościowy-ważne)
11. [Checklista przed publikacją](#10-checklista-przed-publikacją--google-discover)
12. [Po zakończeniu zadania](#11-po-zakończeniu-zadania)

---

## 1. Intencja wyszukiwania

> **Dotyczy:** wszystkich treści (dla krótkich treści jak FAQ czy opisy - w uproszczonej formie)

**Każda treść MUSI odpowiadać na pytanie: czego szuka użytkownik, który tu trafił?** To fundament SEO i decyduje o tym, czy treść będzie użyteczna.

### Czym jest intencja wyszukiwania?

Intencja (search intent) to powód, dla którego użytkownik wpisuje daną frazę w Google. Google premiuje treści, które najlepiej odpowiadają na tę intencję.

### Typy intencji

| Typ intencji     | Co użytkownik chce                 | Przykład frazy                            | Jak pisać                                              |
| ---------------- | ---------------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| **Informacyjna** | Zrozumieć temat, poznać definicję  | "czym jest kanibalizacja słów kluczowych" | Wyjaśnij koncept, pokaż przyczyny, skutki, rozwiązania |
| **Nawigacyjna**  | Znaleźć konkretną stronę/narzędzie | "Google Search Console login"             | Podaj link, krótki opis                                |
| **Transakcyjna** | Kupić, zamówić, skontaktować się   | "audyt SEO cena"                          | Jasna oferta, CTA, korzyści                            |
| **Komercyjna**   | Porównać opcje przed decyzją       | "JPG vs WebP który lepszy"                | Porównanie, zalety/wady, rekomendacja                  |

### Jak określić intencję przed pisaniem?

1. **Wpisz frazę w Google** - zobacz, jakie treści są w TOP 10 (format, długość, struktura)
2. **Przeanalizuj SERP** - czy są featured snippets, listy, tabele?
3. **Zadaj sobie pytanie** - "Czego szuka osoba wpisująca tę frazę? Co chce osiągnąć?"

### Zasady dopasowania do intencji

1. **Wstęp MUSI bezpośrednio odpowiadać na pytanie z tytułu** - nie zaczynaj od mówienia, że temat jest ważny
2. **Struktura musi pasować do intencji** - jeśli użytkownik szuka definicji, daj definicję w pierwszym akapicie
3. **Nie wyłaż poza intencję** - jeśli ktoś szuka "co to jest X", nie pisz 80% artykułu o "jak zrobić X"
4. **Odpowiedz na pytania podrzędne** - jeśli pytanie główne to "Czym jest X?", naturalne pytania to "Jak rozpoznać X?", "Jak naprawić X?"

### Przykład: fraza "czym jest kanibalizacja słów kluczowych"

**Intencja:** Informacyjna - użytkownik chce zrozumieć koncept, nie wie co to jest.

**Co MUSI być w artykule:**

- Jasna definicja w pierwszym akapicie
- Wyjaśnienie mechanizmu (dlaczego to problem)
- Jak rozpoznać (Google Search Console)
- Jak naprawić (opcje rozwiązań)
- Jak zapobiegać

**Czego NIE robić:**

- Nie zaczynaj od "SEO jest ważne w dzisiejszych czasach..."
- Nie pisz 50% artykułu o historii SEO
- Nie zakładaj, że czytelnik wie, czym jest kanibalizacja

---

## 2. Ton i styl

> **Dotyczy:** wszystkich treści (artykuły, strony usług, narzędzia, FAQ, CTA, metadata, mikrocopy)

### Trzy style pisania (obowiązkowo)

Każda treść MUSI łączyć trzy wzajemnie uzupełniające się style:

#### 1.1 Język afirmatywno-informacyjny

Stwierdzaj fakty bezpośrednio, bez zbędnych zastrzeżeń i wstępów. Używaj prostego języka zrozumiałego bez wiedzy technicznej.

- ✅ „Błąd 404 oznacza, że strona pod danym adresem nie istnieje"
- ✅ „Google Search Console to darmowe narzędzie, które pokazuje błędy na Twojej stronie"
- ❌ „W dzisiejszych czasach każdy właściciel strony powinien wiedzieć, że..."

**Zasady:**

- Rozpoczynaj od sedna, nie od wstępu o wstępie
- Termin techniczny = natychmiastowe wyjaśnienie prostym językiem
- Bez wodolejstwa typu „w dzisiejszych czasach", „jak wszyscy wiemy"

#### 1.2 Język heurystyczno-edukacyjny

Prowadź czytelnika przez temat pytaniami i instrukcjami krok po kroku. Wyjaśniaj „dlaczego" przy każdym kroku.

- ✅ Nagłówek: „Skąd biorą się błędy 404?" (pytanie prowadzące)
- ✅ „Krok 1: Otwórz raport Strony. Krok 2: Znajdź błędy 404."
- ❌ Nagłówek: „Przyczyny błędów 404" (suchy, nieprowadzący)

**Zasady:**

- Nagłówki jako pytania prowadzące przez artykuł
- Instrukcje numerowane krok po kroku
- Po każdej informacji technicznej odpowiedz „Dlaczego to ważne?"

#### 1.3 Język analityczno-diagnostyczny

Dawaj czytelnikowi konkretne kryteria decyzyjne. Pokazuj, jak ocenić sytuację i co z nią zrobić.

- ✅ „Sprawdź, skąd pochodzi link: link wewnętrzny → popraw, link zewnętrzny → przekierowanie 301, literówka → ignoruj"
- ✅ „Jeden błąd z literówki? Można zignorować. Setki błędów po migracji? Wymaga systematycznych przekierowań."
- ❌ „Błędy 404 mogą mieć różne źródła i wymagają różnego podejścia" (brak konkretów)

**Zasady:**

- Decyzyjne drzewka: jeśli X → zrób Y, jeśli Z → zrób W
- Konkretne scenariusze z rozwiązaniami
- Skala problemu + odpowiednia reakcja

### Rola autora

- Występujesz jako **mentor i przewodnik**
- Pozycja: „Jestem kilka kroków dalej, rozumiem proces i spokojnie przeprowadzę Cię przez decyzję."
- Nie popisujesz się wiedzą techniczną i nie „sprzedajesz się" w treści

### Narracja

- **Druga osoba liczby pojedynczej** dla czytelnika: „Twoja firma", „zyskujesz", „widzisz efekt"
- **Pierwsza osoba liczby mnogiej** dla Arteon: „wyjaśniamy", „pokazujemy", „przygotowujemy" (nigdy „wyjaśnię" - Arteon to zespół)
- **Zaimki dzierżawcze**: „na swojej stronie" zamiast „na Twojej stronie"

### Prostota i przyjazność

- Pisz tak, żeby zrozumiał każdy, ale bez protekcjonalnego tonu
- **Każdy termin techniczny natychmiast wyjaśniaj** - po użyciu odpowiedz: „Co to jest?" i „Po co to?"
- Każde zdanie = logiczny ciąg dalszy - bez skoków myślowych
- Ludzki język - spokojnie i naturalnie, bez potocznych skrótów i slangu

**Przykład dobrego wyjaśnienia:**

- ❌ „Wygeneruj favicon.ico i apple-touch-icon.png"
- ✅ „Stwórz małą ikonkę, która pojawi się na karcie przeglądarki (to właśnie favicon - miniaturowa ikona Twojej strony). Dzięki niej Twoja strona wygląda profesjonalnie i łatwiej ją znaleźć wśród wielu otwartych kart."

---

## 3. Struktura artykułów

> **Dotyczy:** tylko artykułów blogowych (nie dotyczy stron usług, narzędzi, FAQ itp.)

### Typy artykułów

**1. Artykuł edukacyjny (domyślny)**

- Odpowiada na pytanie „Co to jest X i dlaczego ma znaczenie?"
- Struktura: Wstęp → Wyjaśnienie tematu → Dla kogo to ważne → Jak to działa → Jak sprawdzić/ocenić → Na co zwrócić uwagę → Podsumowanie + CTA

**2. Artykuł HowTo (instrukcja)**

- Odpowiada na pytanie „Jak zrobić X?" lub „Jak osiągnąć Y?"
- Struktura: Wstęp (co osiągniesz) → Wymagania/przygotowanie → Kroki (numerowane) → Typowe problemy → Podsumowanie + CTA
- UWAGA: Instrukcje dotyczą narzędzi Arteon lub ogólnych procesów. NIE twórz instrukcji zastępujących usługi.

**3. Artykuł z poradami i błędami**

- Odpowiada na pytanie „Na co zwrócić uwagę przy X?"
- Struktura: Wstęp → Kontekst → Lista porad/błędów (każdy z wyjaśnieniem) → Jak unikać problemów → Podsumowanie + CTA
- Ton: mentorski, nie wytykający

**4. Artykuł porównawczy**

- Odpowiada na pytanie „X czy Y - co wybrać?"
- Struktura: Wstęp → Wyjaśnienie obu opcji → Porównanie punkt po punkcie → Kiedy wybrać X, kiedy Y → Podsumowanie + CTA

### Struktura ogólna

1. **Wstęp** - 2-3 zdania: co się dzieje (prosty język), co czytelnik znajdzie w artykule
2. **Sekcje diagnostyczne** - pytające nagłówki, instrukcje krok po kroku
3. **Sekcje decyzyjne** - kiedy reagować, kiedy ignorować, jakie opcje
4. **Przykład hipotetyczny** - konkretny scenariusz z opcjami rozwiązań (oznaczony jako hipotetyczny)
5. **Podsumowanie** - 3-5 konkretnych wniosków + naturalny CTA

---

## 4. Zasady techniczne dla artykułów

> **Dotyczy:** tylko artykułów blogowych. Wymagania ilościowe (excerpt, czas czytania, liczba linków) nie dotyczą innych treści.

| Parametr             | Wymaganie                                                   |
| -------------------- | ----------------------------------------------------------- |
| **Tytuł**            | Pytanie (np. „Dlaczego strona nie wyświetla się w Google?") |
| **Excerpt**          | 220-230 znaków (ze spacjami), zachęcający do kliknięcia     |
| **Slug URL**         | 1:1 zgodny z tytułem, bez polskich znaków, z myślnikami     |
| **Czas czytania**    | 9-14 minut (1800-2800 słów), obliczany: 200 słów = 1 min    |
| **Polskie znaki**    | Obowiązkowo (ą, ę, ć, ł, ń, ó, ś, ź, ż)                     |
| **Linki wewnętrzne** | Minimum 6-8                                                 |
| **Linki zewnętrzne** | Minimum 4-6 (z `target='_blank' rel='noopener noreferrer'`) |

### Widoczność linków

- Linki zewnętrzne: `class='underline'`
- Linki wewnętrzne: `class='inline-link'`

### Tooltip dla trudnych terminów

Format: `<span data-tooltip='Wyjaśnienie terminu'>termin</span>`

### Polskie cudzysłowy w JSON

**ZAKAZ** używania polskich cudzysłowów typograficznych „ i " w plikach JSON - psują parser. Alternatywy:

- Usuń cudzysłowy
- Użyj encji HTML `&quot;`
- Użyj apostrofów `'`

### SEO w tytułach i slugach

- Polskie odpowiedniki zamiast anglicyzmów (zamiast „breadcrumbs" → „ścieżka nawigacji")
- Frazy kluczowe w tytule
- Anglicyzm dozwolony w treści z tooltipem, ale NIE w tytule ani w slug URL

---

## 4a. Nasycenie fraz kluczowych w nagłówkach H2/H3

> **Dotyczy:** wszystkich treści ze strukturą nagłówków (artykuły, strony usług, strony narzędzi, instrukcje)

### Zasada ogólna

**Każdy nagłówek H2/H3 powinien zawierać frazę kluczową lub jej odmianę**, jeśli brzmi to naturalnie językowo. Zwiększa to nasycenie fraz i sygnały tematyczne dla wyszukiwarek.

### Jak to robić?

1. **Zidentyfikuj główne frazy strony** - sprawdź tytuł, meta description, URL. To są Twoje frazy bazowe.

2. **Użyj odmian i synonimów** - nie powtarzaj tej samej frazy. Używaj:

   - Odmian gramatycznych (stopka mailowa / stopki mailowej / stopkę mailową)
   - Synonimów (generator / kreator / narzędzie)
   - Wariantów (stopka mailowa / podpis email / sygnaturka)
   - Fraz long-tail (darmowy generator stopki mailowej online)

3. **Wplataj naturalnie** - fraza musi brzmieć jak część zdania, nie jak wciśnięta na siłę

### Przykłady transformacji nagłówków

| ❌ Przed (zbyt ogólne)        | ✅ Po (z frazą kluczową)                               |
| ----------------------------- | ------------------------------------------------------ |
| "Jak korzystać z narzędzia?"  | "Jak korzystać z generatora stopki mailowej?"          |
| "Co możesz skonfigurować?"    | "Co możesz skonfigurować w generatorze podpisu email?" |
| "Dla kogo jest to narzędzie?" | "Dla kogo jest generator stopki mailowej?"             |
| "Dlaczego warto?"             | "Dlaczego warto mieć profesjonalną stopkę mailową?"    |
| "Jak wkleić stopkę?"          | "Jak wkleić stopkę mailową do Gmail lub Outlook?"      |
| "Najczęstsze pytania"         | "Najczęstsze pytania o generator stopki mailowej"      |

### Czego unikać (keyword stuffing)

| ❌ Źle (keyword stuffing)                                           | ✅ Dobrze (naturalne)                             |
| ------------------------------------------------------------------- | ------------------------------------------------- |
| "Generator stopki mailowej - jak używać generatora stopki mailowej" | "Jak korzystać z generatora stopki mailowej?"     |
| "Darmowy generator stopki mailowej online za darmo"                 | "Darmowy generator stopki mailowej online"        |
| "Stopka mailowa: profesjonalna stopka mailowa HTML"                 | "Jak stworzyć profesjonalną stopkę mailową HTML?" |

### Zasady bezpieczeństwa

1. **Naturalność > nasycenie** - jeśli fraza brzmi sztucznie, zostaw prostszy nagłówek
2. **Różnorodność odmian** - nie powtarzaj tej samej frazy w każdym nagłówku
3. **Kontekst strony** - używaj fraz, na które strona realnie się rankinguje
4. **Bez przesady** - 1 fraza na nagłówek wystarczy, nie kombinuj 2-3 fraz

### Checklista dla nagłówków

- [ ] Czy główna fraza kluczowa pojawia się w przynajmniej 2-3 nagłówkach H2?
- [ ] Czy użyto różnych odmian/synonimów (nie ta sama fraza wszędzie)?
- [ ] Czy każdy nagłówek brzmi naturalnie językowo?
- [ ] Czy nagłówki nadal są pytaniami prowadzącymi (nie tylko hasłami)?

---

## 5. Linkowanie

> **Dotyczy:** wszystkich treści (zasady ogólne). Wymagania ilościowe (min. 6-8 wewnętrznych, 4-6 zewnętrznych) dotyczą tylko artykułów.

### Linki wewnętrzne

- Im więcej naturalnych linków do innych artykułów i narzędzi Arteon, tym lepiej
- Przy każdym temacie sprawdź, czy istnieje powiązany artykuł/narzędzie i podlinkuj
- Linki wplecione naturalnie w zdania (bez sekcji „Przydatne linki")

### Linki zewnętrzne

- Gdy wspominasz o zewnętrznych narzędziach (Google Search Console, PageSpeed Insights), zawsze dodawaj link
- Atrybuty: `target='_blank' rel='noopener noreferrer'`

---

## 6. Źródła i prawdziwość

> **Dotyczy:** wszystkich treści (artykuły, strony usług, narzędzia, FAQ, CTA, metadata)

### Zasady absolutne

1. **Każda liczba MUSI mieć źródło**

   - Format: „wg [źródło] z [rok]" + działający link
   - ❌ „90% użytkowników opuszcza stronę po 3 sekundach" (brak źródła = ZABRONIONE)

2. **Każde powołanie na prawo MUSI być zgodne z aktualnym stanem prawnym PL**

   - Kluczowe: Omnibus (ceny w e-commerce), RODO, ustawa o prawach konsumenta

3. **Każdy przykład MUSI być oznaczony**
   - Przykład oparty na faktach: cytuj źródło
   - Przykład hipotetyczny: oznacz jako „_(przykład hipotetyczny)_"
   - Wystarczy słowo „hipotetyczny" - nie pisz „(wymyślony, nie oparty o realny sklep)"

### Dozwolone bez źródeł

- Ogólne stwierdzenia: „większość", „często", „wiele firm"
- Jasno oznaczone przykłady hipotetyczne
- Opisy procesów bez kwantyfikacji

### Standard źródeł

| Typ treści         | Preferowane źródła                                   |
| ------------------ | ---------------------------------------------------- |
| SEO/marketing      | Google Search Central, web.dev, Ahrefs, Semrush, Moz |
| Psychologia/biznes | Journal of Consumer Research, Kahneman, Cialdini     |
| Technologia        | Oficjalna dokumentacja, MDN, web.dev                 |
| Prawo              | isap.sejm.gov.pl, EUR-Lex, UOKiK, UODO               |

---

## 7. Balans DIY vs oferta

> **Dotyczy:** wszystkich treści (artykuły, strony usług, narzędzia, FAQ)

Treści dostarczają **realną wartość edukacyjną**. Piszemy z pozycji eksperta, który dzieli się wiedzą.

### Zasady

1. **Delikatne DIY jest OK** - jeśli coś jest nieskomplikowane, wyjaśnij jak to zrobić. Nie każdy temat wymaga kierowania do kontaktu.

   - ✅ Wyjaśnić co to jest plik robots.txt i jak wygląda jego struktura
   - ✅ Pokazać gdzie w Google Search Console znaleźć błędy 404
   - ❌ Przy każdym temacie pisać „skontaktuj się z nami" bez realnego wyjaśnienia

2. **Przy złożonych kwestiach - opcja pomocy** - przy naprawdę technicznych zagadnieniach dodaj naturalnie wplecioną informację o możliwości pomocy

3. **Nigdy nie oceniaj czytelnika** - unikaj sformułowań sugerujących brak wiedzy

   - ❌ „Jeśli nie masz doświadczenia, lepiej skonsultować..."
   - ❌ „Dla osób nietechnicznych może to być trudne..."
   - ✅ Po prostu wyjaśnij temat bez oceny

4. **Unikaj niejasnych instrukcji** - wyjaśnij kontekst i mechanizm

   - ❌ „Skonfiguruj serwer, żeby zwracał kod 404 zamiast 200."
   - ✅ „Kod 200 oznacza: strona istnieje. Kod 404 oznacza: strona nie istnieje. Jeśli strona faktycznie nie istnieje, ale serwer zwraca 200, to problem w konfiguracji."

5. **Zakładaj różne scenariusze** - nie zakładaj jednej przyczyny problemu

### Przykłady podejścia

| Temat                | Podejście                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| robots.txt           | Wyjaśnij co to za plik, gdzie się znajduje, jak wygląda struktura. To proste - można pokazać.            |
| Przekierowania 301   | Wyjaśnij co to jest i dlaczego ważne. Przy szczegółach technicznych można wspomnieć o możliwości pomocy. |
| Konfiguracja serwera | To bardziej techniczne - wyjaśnij co i dlaczego, a przy praktyce zaproponuj wsparcie.                    |

---

## 8. CTA i przyciski

> **Dotyczy:** wszystkich treści (artykuły, strony usług, narzędzia, strony informacyjne)

### Cel biznesowy

Każda treść prowadzi do oferty Arteon:

- Edukujesz, żeby użytkownik wiedział co zrobić i dlaczego to działa
- Na końcu prosta ścieżka „co dalej" (link do usługi/kontaktu), bez agresji i presji
- Linki i CTA wplatasz naturalnie w zdania

### Opisowe teksty przycisków CTA

Tekst przycisku musi jasno komunikować, co się stanie po kliknięciu:

| ❌ Źle               | ✅ Dobrze                            |
| -------------------- | ------------------------------------ |
| „Strony internetowe" | „Sprawdź ofertę stron internetowych" |
| „Sklepy"             | „Zobacz jak tworzymy sklepy"         |
| „Kontakt"            | „Skontaktuj się z nami"              |

### Zakaz rekomendowania konkurencji

- ❌ „skorzystaj z pomocy profesjonalisty" → ✅ „skontaktuj się z nami" + link do `/kontakt`
- ❌ „zatrudnij specjalistę" → ✅ „w Arteon zajmujemy się..."
- Arteon jest jedynym rekomendowanym źródłem pomocy

## 9. Zakazy stylistyczne

> **Dotyczy:** wszystkich treści (artykuły, strony usług, narzędzia, FAQ, CTA, metadata, mikrocopy). To najważniejsza sekcja dla spójności językowej.

### ZAKAZANE wstawki wyobrażeniowe i konstrukcje (KRYTYCZNE)

**Nigdy nie używaj tych konstrukcji:**

| ❌ ZAKAZANE                       | Dlaczego złe                | ✅ Zamiennik                       |
| --------------------------------- | --------------------------- | ---------------------------------- |
| "Wyobraź sobie..."                | Infantylne, wydłuża tekst   | Załóżmy, że... / Przykład:         |
| "Pomyśl o tym jak o..."           | Zbędna analogia             | (wyjaśnij bezpośrednio)            |
| "Pewnie zastanawiasz się..."      | Zakładanie myśli czytelnika | (przejdź do sedna)                 |
| "Teraz wyobraź sobie..."          | Wstawka wyobrażeniowa       | Załóżmy... / Przykład:             |
| "Co by było, gdyby..."            | Retoryczne, bez wartości    | (podaj fakt lub przykład)          |
| "Spójrzmy na to z perspektywy..." | Zbędny wstęp                | (przejdź do sedna)                 |
| "X krok po kroku"                 | Brzmi jak AI, bez wartości  | "Jak zrobić X?" / "Jak wygląda X?" |

### DOZWOLONE konstrukcje prowadzące

| ✅ DOZWOLONE      | Przykład użycia                                                         |
| ----------------- | ----------------------------------------------------------------------- |
| "Załóżmy, że..."  | Załóżmy, że masz dwie strony o tym samym temacie.                       |
| "Przykład:"       | Przykład: kancelaria prawna ma artykuły o rozwodach i prawie rodzinnym. |
| "W praktyce..."   | W praktyce wygląda to tak, że Google widzi dwie konkurujące strony.     |
| "Jak to wygląda?" | Jak to wygląda? Obie strony otrzymują mniej ruchu.                      |

### ZAKAZANE frazy brzmiące jak AI (KRYTYCZNE)

Treści muszą brzmieć naturalnie - jak napisane przez człowieka, nie przez AI. Unikaj fraz, które są "sygnaturą" generowanych tekstów:

| ❌ ZAKAZANE                       | Dlaczego złe             | ✅ Zamiennik                       |
| --------------------------------- | ------------------------ | ---------------------------------- |
| "X krok po kroku" w nagłówku      | Typowa fraza AI, banalna | "Jak zrobić X?" / "Jak wygląda X?" |
| "Kompletny przewodnik po X"       | Przesadzona obietnica    | "Co warto wiedzieć o X"            |
| "Wszystko co musisz wiedzieć o X" | Clickbaitowa, niemożliwa | (konkretny tytuł pytający)         |
| "Odkryj sekrety X"                | Marketingowy żargon      | (przejdź do sedna)                 |
| "Dowiedz się, jak..." w nagłówku  | Zbędny wstęp             | (zacznij od "Jak...")              |

**Zasada:** Jeśli fraza brzmi jak mogła być wygenerowana przez ChatGPT - usuń ją lub przeformułuj.

### ZAKAZANE konstrukty AI - łączniki i wypełniacze (KRYTYCZNE)

Frazy, które AI nadużywa jako "klej zdaniowy". Nie wnoszą wartości, a sygnalizują tekst generowany.

| ❌ ZAKAZANE                               | Dlaczego złe                    | ✅ Zamiennik                                 |
| ----------------------------------------- | ------------------------------- | -------------------------------------------- |
| „Jest to X" na początku zdania            | AI-filler definiujący           | „To X" / po prostu opisz                     |
| „Dzięki temu" (nadużywane, >1× na sekcję) | AI uwielbia ten łącznik         | Max 1× na sekcję, reszta: „-", „więc", „to"  |
| „W praktyce oznacza to, że..."            | Zbędne tłumaczenie oczywistości | Usuń i przejdź do sedna                      |
| „co sprawia, że..."                       | Sztuczny łącznik                | Napisz wprost skutek                         |
| „Przekłada się to na..."                  | Korpo-żargon                    | Napisz wprost co z czego wynika              |
| „właśnie dlatego"                         | Zbędne wzmocnienie              | „dlatego"                                    |
| „Warto zauważyć/podkreślić/wspomnieć"     | Wstęp o wstępie                 | Usuń ramę, przejdź do treści                 |
| „Należy pamiętać, że..."                  | Bezosobowy filler               | Usuń, zacznij od treści                      |
| „w erze cyfrowej/internetu"               | Pusty kontekst czasowy          | Usuń, zacznij od faktu                       |
| „jest kluczowy/kluczowa/kluczowe"         | Ogólnik zamiast konkretu        | Opisz konkretną rolę                         |
| „stanowi fundament/podstawę"              | Korpo-pustosłowie               | Napisz wprost co robi                        |
| „ogromny wpływ/znaczenie/potencjał"       | Przesada, brak konkretu         | „duży", „istotny" lub podaj dane             |
| „kompleksowy/kompleksowo"                 | Korpo-filler nr 1               | „pełny", „szczegółowy", „w pełnym zakresie"  |
| „idealne rozwiązanie"                     | Marketingowa przesada           | „sprawdza się najlepiej w..." + konkret      |
| „aspekt" (nadużywane)                     | AI-ulubieniec                   | „element", „cecha", „część" lub przeformułuj |
| „z myślą o" (nadużywane, >1× na stronę)   | Powtarzalny wzorzec AI          | Max 1× na stronę                             |
| „nie tylko X, ale także Y"                | Negative parallelism, sygnał AI | Napisz wprost oba elementy osobno            |
| „odgrywa kluczową rolę"                   | Puste wzmocnienie               | Opisz konkretnie co robi i jaki ma wpływ     |
| „niezwykle istotny/ważny"                 | Przesada bez konkretu           | „ważny" + wyjaśnij dlaczego                  |
| „ma ogromne znaczenie"                    | Przesada, brak danych           | Opisz konkretny wpływ lub podaj dane         |
| „rewolucjonizuje"                         | Marketingowa hiperbola          | „zmienia sposób" + opisz co konkretnie       |
| „innowacyjny" (bez konkretu)              | Pusty przymiotnik               | Opisz co dokładnie jest nowe                 |
| „bezproblemowa integracja"                | Korpo-filler                    | „łatwe połączenie z..." + konkret            |
| „przełomowy"                              | Hiperbola AI                    | Opisz konkretną zmianę                       |
| „szeroki wachlarz/zakres"                 | Ogólnik zamiast listy           | Wymień konkretne elementy                    |
| „doskonale się sprawdza"                  | Przesada bez dowodu             | „sprawdza się w..." + konkretny kontekst     |
| „nieodzowny element"                      | Korpo-pustosłowie               | Opisz konkretną funkcję                      |
| „stanowi" / „służy jako" (zamiast „jest") | AI unika prostych kopulatywów   | Używaj „jest/są" tam, gdzie to naturalne     |

### ZAKAZANE wzorce strukturalne AI (KRYTYCZNE)

AI-content ma charakterystyczne wzorce strukturalne, które algorytmy Google wykrywają przez pattern analysis. Źródła: Google Search Quality Guidelines, Wikipedia:Signs of AI writing, SiegeMedia, Stanford 2024.

| Wzorzec                              | Opis problemu                                                                               | Jak naprawić                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Szablonowe otwarcia**              | "W dzisiejszym konkurencyjnym świecie...", "W dobie cyfryzacji..." - AI zaczyna od ogólnika | Zacznij od konkretu, faktu, pytania lub danych                  |
| **Wyrównane akapity**                | AI tworzy akapity o zbliżonej długości (~3-4 zdania każdy) - sygnał niskiej burstiness      | Celowo mieszaj długość: 1 zdanie, 3 zdania, 5 zdań, 1 zdanie    |
| **Formulaiczne podsumowania**        | "Wdrażając X, Twoja firma zyska Y" - szablon zakończenia akapitu                            | Zamień na konkretną rekomendację lub CTA                        |
| **Nadużycie trójek (rule of three)** | "szybkość, bezpieczeństwo i niezawodność" - AI lubi trójki przymiotników                    | Unikaj nadmiernego stosowania; jeśli lista, rozwiń każdy punkt  |
| **Negatywne paralelizmy**            | "To nie tylko X, to także Y" - AI buduje efekt przez negację                                | Napisz wprost co to jest, bez negacji dla efektu                |
| **Podsumowanie bez wartości**        | Powtórzenie punktów z artykułu bez nowego insightu                                          | Dodaj konkretną rekomendację, następny krok lub nowy wniosek    |
| **Nadużycie myślników (-)**          | AI nadużywa em dashes zamiast przecinków, nawiasów, dwukropków                              | Max 2 myślniki na sekcję; reszta: przecinki, nawiasy, dwukropki |
| **Powtarzanie tej samej myśli**      | AI lubi powiedzieć to samo 2-3 razy innymi słowami                                          | Każde zdanie musi wnosić nową informację                        |

### Zasady anty-AI - jakość i E-E-A-T (KRYTYCZNE)

Google ocenia treści przez pryzmat E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). AI-content regularnie zawodzi w tych kategoriach. Źródła: Google E-E-A-T Guidelines 2025/2026, SEO Sherpa, ProductiveShop.

1. **Experience (doświadczenie)** - treść musi zawierać przykłady z własnej praktyki Arteon, konkretne case studies, dane z realizacji. AI nie ma doświadczenia - dlatego ogólnikowe treści bez własnych przykładów sygnalizują AI.
2. **Głębia, nie szerokość** - lepiej szczegółowo omówić 3 aspekty niż powierzchownie 10. AI daje powierzchowne wyjaśnienia, które brzmią wyczerpująco, ale nie mają głębi.
3. **Brak powtórzeń** - każde zdanie musi wnosić nową informację. Jeśli czytasz zdanie i myślisz "to już było powiedziane" - usuń je.
4. **Stanowisko i opinia** - Arteon ma prawo mieć opinię i ją wyrażać. AI pisze neutralnie. Pisz: "Naszym zdaniem lepszym rozwiązaniem jest X, bo..." zamiast "Istnieją różne podejścia do tego tematu."
5. **Konkretne wprowadzenia** - zamiast "SEO jest ważne dla każdej firmy" zacznij od faktu, danych lub pytania: "73% użytkowników nie scrolluje poza pierwszą stronę Google."
6. **Brak generycznych wyjaśnień** - AI daje szerokie, ogólnikowe opisy. Podawaj konkrety: nazwy narzędzi, wartości liczbowe, przykłady kodu, screenshoty procesów.

### Stylometria - jak pisać, żeby nie brzmieć jak AI (WAŻNE)

Algorytmy Google analizują stylometrię tekstu - statystyczne wzorce pisania. Źródła: Stanford 2024, Koanthic 2026, Wikipedia:Signs of AI writing.

1. **Burstiness (zróżnicowanie)** - ludzie piszą nierówno: krótkie zdania obok długich, krótkie akapity obok dłuższych. AI ma niską burstiness = równe, przewidywalne zdania. **Celowo mieszaj:** zdanie 3-słowowe obok 20-słowowego.
2. **Proste kopulatywów** - AI zastępuje "jest/są" wyszukanymi formami ("stanowi", "służy jako", "oferuje"). Używaj prostego "jest/są" tam, gdzie to naturalne.
3. **Formalność** - AI pisze jak raport korporacyjny. Pisz jak do klienta przy kawie - profesjonalnie, ale bez sztywności. Dopuszczalne: "To działa tak:", "Efekt? Więcej zapytań."
4. **Zaimki osobowe** - AI unika "ja/my/nasz". Arteon pisze "my", "nasz", "robimy", "nasze doświadczenie pokazuje" - podkreśl osobowość marki.
5. **Pytania retoryczne** - ludzie zadają pytania w tekście. AI rzadko to robi. Wplataj naturalne pytania: "Jak to wygląda w praktyce?" "Co to oznacza dla Twojej strony?"

### Zakazane formy stylistyczne i zamienniki

| ❌ Zakazane                       | ✅ Zamiennik                   |
| --------------------------------- | ------------------------------ |
| „W dzisiejszych czasach...”       | (usuń, zacznij od sedna)       |
| „To nie jest X, tylko Y”          | „Y oznacza...”                 |
| „Wbrew pozorom...”                | „W praktyce...”                |
| „Musisz zrozumieć, że...”         | (usuń, przejdź do sedna)       |
| „To oczywiste” / „To proste”      | (usuń lub wyjaśnij)            |
| „Jeśli nie masz doświadczenia...” | (wyjaśnij bez oceny)           |
| „traktowane po macoszemu”         | „często pozostają puste”       |
| „kompleksowe rozwiązania”         | (konkret zamiast korpo-języka) |
| Emotki 👉 ✅ ❌                   | (bez emotek w treściach)       |
| Sekcja „Przydatne linki”          | (wpleć linki w tekst)          |
| Równoważniki zdań po przecinku    | (pełne zdania z wyjaśnieniem)  |

### Zakaz równoważników zdań po przecinku (KRYTYCZNE)

Nie używaj list elementów oddzielonych przecinkami bez kontekstu. Każdy element powinien być pełnym zdaniem lub mieć wyjaśnienie.

| ❌ Zakazane                                             | ✅ Zamiennik                                   |
| ------------------------------------------------------- | ---------------------------------------------- |
| „Widoczność w Google, wydajność, faktura po realizacji" | Rozwinięcie w punkty z opisem każdego elementu |
| „Responsywność, SEO, formularze, mapy"                  | Lista z opisem korzyści każdego elementu       |
| „Szybkość, bezpieczeństwo, wsparcie"                    | Pełne zdania wyjaśniające każdy punkt          |

**Zasada:** Jeśli wymieniasz cechy/korzyści po przecinku - rozwiń je w listę punktowaną lub pełne zdania. Czytelnik musi wiedzieć, co każdy element oznacza i dlaczego jest ważny.

### Zasady tonu

1. Nigdy nie poprawiaj czytelnika
2. Nigdy nie zakładaj niewiedzy
3. Nigdy nie używaj ironii ani sarkazmu
4. Nigdy nie deprecjonuj pytania/tematu
5. Nigdy nie porównuj do „gorszych” praktyk innych

### Anglicyzmy

Używaj polskich odpowiedników tam, gdzie brzmią naturalnie:

- „media społecznościowe” → „media społecznościowe”
- Anglicyzmy dozwolone tylko gdy polski odpowiednik brzmi sztucznie

### Przykłady z innych branż

W artykułach edukacyjnych nie używaj przykładów z branży Arteon (grafika, marketing, strony WWW). Podawaj przykłady z: prawo, medycyna, gastronomia, nieruchomości, e-commerce, produkcja.

---

## 9a. Google Discover - cel jakościowy (WAŻNE)

Piszemy treści z myślą o Google Discover. To oznacza najwyższy standard jakości - artykuły muszą być na tyle dobre, żeby Google uznał je za warte pokazania użytkownikom bez ich aktywnego wyszukiwania.

### Czym jest Google Discover?

Google Discover to personalizowany feed treści w aplikacji Google i na stronie google.com. Google wybiera artykuły na podstawie:

- Jakości treści (E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness)
- Zaangażowania użytkowników (CTR, czas na stronie)
- Świeżości i aktualności tematu
- Jakości technicznej strony (Core Web Vitals)

### Jak pisać dla Google Discover?

| Czynnik       | Wymaganie                                                                           |
| ------------- | ----------------------------------------------------------------------------------- |
| **Tytuł**     | Intrygujący, ale nie clickbaitowy. Odpowiada na pytanie, nie obiecuje "wszystkiego" |
| **Wstęp**     | Natychmiast daje wartość - definicja, odpowiedź, konkret                            |
| **Treść**     | Unikalna perspektywa, nie przepisany TOP 10 z Google                                |
| **Głębia**    | Konkretne przykłady, dane, mechanizmy - nie ogólniki                                |
| **Język**     | Naturalny, ludzki, bez fraz typowych dla AI                                         |
| **Struktura** | Czytelna, skanowalna, z pytającymi nagłówkami                                       |
| **Obrazy**    | Wysokiej jakości, min. 1200px szerokości (wymóg Discover)                           |

### Czego unikać?

- **Clickbait** - tytuły obiecujące więcej niż treść dostarcza
- **Frazy AI** - "krok po kroku", "kompletny przewodnik", "wszystko co musisz wiedzieć"
- **Ogólniki** - "SEO jest ważne", "w dzisiejszych czasach"
- **Kopiowanie** - przepisywanie treści z innych źródeł
- **Brak unikalności** - powtarzanie tego, co już jest w TOP 10

### Cel

Każdy artykuł powinien odpowiadać na pytanie: **"Czy ten artykuł jest na tyle dobry, żeby Google pokazał go komuś, kto go nie szukał?"**

Jeśli odpowiedź brzmi "nie" - przepisz.

---

## 10. Checklista przed publikacją

### Dla wszystkich treści

**Ton i styl:**

- [ ] Wstęp/opis zaczyna od sedna (nie od „W dzisiejszych czasach...")?
- [ ] Każdy termin techniczny jest natychmiast wyjaśniony?
- [ ] Brak wstawek wyobrażeniowych ("Wyobraź sobie...")?
- [ ] Brak fraz typowych dla AI ("krok po kroku" w nagłówku, "kompletny przewodnik")?
- [ ] Używam "Załóżmy..." lub "Przykład:" zamiast "Wyobraź sobie..."?

**Prawdziwość:**

- [ ] Każde zdanie jest prawdziwe? (żadnych domysłów)
- [ ] Każda liczba/statystyka ma źródło z linkiem?
- [ ] Przykłady hipotetyczne są oznaczone?
- [ ] Wszystkie linki działają?

**CTA:**

- [ ] Przyciski CTA są opisowe (nie "Kontakt" tylko "Skontaktuj się z nami")?
- [ ] Brak rekomendowania konkurencji?

**Techniczne:**

- [ ] Brak polskich cudzysłowów w JSON?

### Tylko dla artykułów blogowych

**Intencja wyszukiwania:**

- [ ] Czy określiłem intencję frazy kluczowej?
- [ ] Czy wstęp bezpośrednio odpowiada na pytanie z tytułu?
- [ ] Czy struktura pasuje do intencji (informacyjna/transakcyjna/porównawcza)?
- [ ] Czy odpowiadam na pytania podrzędne, które naturalnie wynikają z głównego?

**Struktura:**

- [ ] Nagłówki są pytaniami prowadzącymi przez artykuł?
- [ ] Instrukcje są ponumerowane krok po kroku?
- [ ] Są konkretne scenariusze „jeśli X → zrób Y"?

**Wymagania ilościowe:**

- [ ] Excerpt ma 220-230 znaków?
- [ ] Czas czytania 9-14 minut (1800-2800 słów)?
- [ ] Minimum 6-8 linków wewnętrznych?
- [ ] Minimum 4-6 linków zewnętrznych?

---

## 11. Po zakończeniu zadania

**OBOWIĄZKOWO:** Po zakończeniu każdego zadania dotyczącego treści (artykuł, strona, edycja) przedstaw zmiany w formie tabeli:

| Element             | Przed           | Po             |
| ------------------- | --------------- | -------------- |
| (element zmieniony) | (stara wartość) | (nowa wartość) |

Tabela powinna zawierać wszystkie istotne zmiany: tytuły, CTA, fragmenty tekstu, linki, itp.
