# PROJECTS_CATALOG

Ten plik opisuje wszystkie realizacje (portfolio / case studies) zdefiniowane w `data/pl/projects.json`.

## Cel katalogu

- **Ułatwić ocenę jakości danych**: co jest opisane dobrze, a co wymaga dopracowania.
- **Ujednolicić standard case study**: tak, aby realizacje były spójne w odbiorze i mocne pod SEO.
- **Wyłapać braki i niespójności** (pola, copy, CTA, SEO).

## Źródło danych

- **Plik**: `data/pl/projects.json`
- **Klucz**: `projects[]`
- **URL**: w praktyce `slug` jest używany w ścieżce `/realizacje/{slug}`.

## Jak czytać ocenę

W każdej realizacji opisuję:

- **Ton i charakter**: jaki klimat buduje opis i warstwa wizualna.
- **Co ma / czego brakuje**: które pola i elementy case study są obecne, a które nie.
- **Plusy i minusy**: mocne strony i ryzyka (content, wiarygodność, kompletność).
- **Sugestie ulepszeń (SEO)**: konkretne rzeczy, które zwykle poprawiają widoczność i konwersję (bez zmiany UI, bo to jest analiza treści/danych).

---

## Projekty (kolejność jak w `projects.json`)

### `Plakat sezonowy dla kawiarni Brewerynka` (`plakat-sezonowy-dla-kawiarni-brewerynka`)

- **Kategorie**: `grafika`
- **Klient / branża**: Brewerynka Coffee Roasters - Gastronomia
- **Link**: brak
- **Ton i charakter**: minimalistyczny, spokojny, „slow coffee” + estetyka skandynawska; narracja o spójnej kampanii sezonowej.
- **Co ma (w danych)**:
  - **`short` + `description`**: tak (opis jest dość kompletny, w HTML)
  - **`process_steps`**: tak
  - **`contentBlocks`**: tak (2 obrazy + `alt`)
  - **`cta`**: tak
  - **`seo`**: tak (`title`, `description`, `canonical`)
- **Czego brakuje / do dopracowania**:
  - **`deliverables`**: brak (np. format, warianty, przygotowanie do druku)
  - **`outcomes`**: brak (jak projekt działał w kampanii / jaki był efekt)
  - **`faq`**: brak
- **Plusy**:
  - **Spójna narracja**: jasno opisany cel (oferta limitowana + spójność offline/online).
  - **Mockup witryny**: dobry „dowód użycia” (ułatwia wyobrażenie skali i kontekstu).
  - **Alt teksty**: opisowe i tematyczne.
- **Minusy / ryzyka**:
  - **„Koncepcyjna kawiarnia”**: obniża wiarygodność jako case study, jeśli nie jest to jasno podkreślone na stronie.
  - **Brak konkretu produkcyjnego**: w projektach drukowanych odbiorcy często szukają formatu, papieru, uszlachetnień.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać sekcję H2 „Format i przygotowanie do druku”** (nawet jeśli krótko: format, spady, kolorystyka).
  - **Dodać FAQ**: koszt projektu plakatu, terminy, co jest potrzebne od klienta.
  - **Dodać `deliverables`** i 1-2 „miękkie” outcomes (np. łatwość adaptacji do social, spójność kampanii).

### `Karta koktajli dla baru Nocturna` (`karta-koktajli-dla-baru-nocturna`)

- **Kategorie**: `grafika`
- **Klient / branża**: Nocturna Cocktail Atelier - Gastronomia
- **Link**: brak
- **Ton i charakter**: premium, nastrojowy klimat speakeasy; opowieść o atmosferze (światło świec, klasyka, elegancja).
- **Co ma (w danych)**:
  - **`short` + `description`**: tak
  - **`process_steps`**: tak
  - **`contentBlocks`**: tak (2 obrazy + `alt`)
  - **`cta`**: tak (z sensownym linkiem do usługi projektu menu)
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`deliverables`**: brak (liczba stron, format menu, warianty do druku)
  - **`outcomes`**: brak (np. czytelność, odbiór gości, szybkość wyboru)
  - **`faq`**: brak
- **Plusy**:
  - **Unikalny wyróżnik**: autorskie ilustracje drinków (podnosi „premium”).
  - **Kompletność koncepcji menu**: House Rules + organizacja treści = spójne doświadczenie.
  - **Mocny opis estetyki**: paleta i inspiracje są czytelne.
- **Minusy / ryzyka**:
  - **Za mało konkretów technicznych**: w menu premium warto wspomnieć o papierze, uszlachetnieniach, czytelności w półmroku.
  - **Brak „dowodu skali”**: 2 obrazy mogą nie pokazać środka/układu całej karty.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać sekcję „Co było w pakiecie”** (projekt + ilustracje + przygotowanie do druku + mockupy).
  - **Dodać FAQ** pod frazy long-tail: „projekt menu koktajlowego”, „karta drinków do druku”.
  - **Rozbudować galerię**: 2-4 ujęcia stron/sekcji (łatwiejsze indeksowanie obrazów i lepszy time-on-page).

### `Folder reklamowy dla firmy wykańczającej wnętrza - Simba Group` (`folder-reklamowy-firmy-wykanczajacej-wnetrza-simba-group`)

- **Kategorie**: `grafika`
- **Klient / branża**: Simba Group PL - Wykończenie wnętrz domów i mieszkań
- **Link**: brak
- **Ton i charakter**: sprzedażowy, praktyczny; nacisk na korzyści i „materiał do kontaktu” (PDF + druk).
- **Co ma (w danych)**:
  - **`short` + `description`**: tak
  - **`process_steps`**: tak
  - **`testimonial`**: tak
  - **`contentBlocks`**: tak (4 obrazy + `alt`)
  - **`cta`**: tak
  - **`faq`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`deliverables`**: brak (np. finalny format PDF, przygotowanie do druku, spady)
  - **`outcomes`**: brak (np. skuteczność QR, lepsza konwersja na kontakt)
  - **Jakość copy**: w tekście są literówki i nielogiczne fragmenty (to obniża wiarygodność).
- **Plusy**:
  - **Jasny cel biznesowy**: korzyści, oferta, QR do realizacji.
  - **Warianty**: pokazane 2 wersje (to realnie wzmacnia case).
  - **Dużo materiału wizualnego**: 4 obrazy ułatwiają ocenę projektu.
- **Minusy / ryzyka**:
  - **Korekta językowa**: błędy w treści i opisach działają przeciw SEO i konwersji.
  - **Brak opisu struktury folderu**: nie wiadomo, jakie sekcje są na poszczególnych stronach.
- **Sugestie ulepszeń (SEO)**:
  - **Wykonać korektę copy i HTML** (literówki, interpunkcja, domknięcia) - to „tani” i skuteczny boost jakości.
  - **Dodać sekcję H2 „Układ folderu (strona po stronie)”** z krótką listą.
  - **Dodać FAQ**: „ile kosztuje folder reklamowy”, „co dostarczyć”, „czy robicie teksty”.

### `Szablony postów dla gabinetu psychologicznego - MSC Psychotherapy UK` (`szablony-postow-na-media-spolecznosciowe-dla-psychologa-msc`)

- **Kategorie**: `grafika`
- **Klient / branża**: Mental Support Centre - Psychoterapia (Camberley, UK)
- **Link**: brak
- **Ton i charakter**: spokojny, wspierający, profesjonalny; komunikacja „bez presji”, z naciskiem na bezpieczeństwo i zaufanie.
- **Co ma (w danych)**:
  - **`short` + `description`**: tak
  - **`process_steps`**: tak (jest analiza i test czytelności)
  - **`contentBlocks`**: tak (1 obraz + `alt`)
  - **`cta`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`deliverables`**: brak (ile szablonów, jakie formaty, czy pliki edytowalne)
  - **`outcomes`**: brak (np. oszczędność czasu, regularność publikacji)
  - **Rozbudowanej galerii**: 1 obraz to mało jak na projekt social.
  - **Copy w CTA**: warto zrobić korektę literówek i składni.
- **Plusy**:
  - **Bardzo dobry kontekst branżowy**: opis jest adekwatny do psychoterapii.
  - **Proces obejmuje UX**: testy czytelności na mobile i dopracowanie typografii.
- **Minusy / ryzyka**:
  - **Mało „dowodów” realizacji**: bez przykładów postów/story trudniej ocenić skalę i jakość.
  - **Brak konkretu pakietu**: użytkownik nie wie, co dokładnie dostaje.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać `deliverables`**: liczba szablonów (post/story), formaty, wersje językowe, pliki edytowalne.
  - **Dodać 4-8 obrazów** w `contentBlocks` (różne typy komunikatów: webinar, wpis, cytat, edukacja).
  - **Dodać FAQ** pod frazy: „szablony postów dla psychologa”, „grafiki do Instagrama dla gabinetu”.

### `Bon walentynkowy dla salonu kosmetycznego Kasia` (`bon-walentynkowy-dla-salonu-kosmetycznego-kasia`)

- **Kategorie**: `grafika`
- **Klient / branża**: Gabinet kosmetyczny Kasia - Salon kosmetyczny (Kraków)
- **Link**: brak
- **Ton i charakter**: elegancki, prezentowy, sezonowy; nacisk na czytelność i szybkie użycie „od ręki”.
- **Co ma (w danych)**:
  - **`short` + `description`**: tak
  - **`process_steps`**: tak
  - **`contentBlocks`**: tak (1 obraz + `alt`)
  - **`cta`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **Pokazania rewersu**: opis mówi o polach do wypełnienia, ale nie ma obrazu potwierdzającego.
  - **`deliverables`**: brak (front/back, format DL, spady, plik PDF)
  - **`outcomes`**: brak
  - **Korekta copy**: w `seo.description` i opisach są drobne błędy językowe.
- **Plusy**:
  - **Jasna funkcja produktu**: voucher do druku i wręczenia.
  - **Czytelny zakres informacji**: pola do wypełnienia, dane kontaktowe.
- **Minusy / ryzyka**:
  - **Za mało materiału wizualnego**: przy voucherach „tył” bywa kluczowy.
  - **Błędy językowe**: obniżają zaufanie.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać drugi obraz**: rewers z polami + ewentualnie mockup druku.
  - **Dodać FAQ**: „voucher do druku - co musi zawierać”, „jak przygotować do drukarni”.
  - **Rozszerzyć opis o warianty sezonowe** (Dzień Kobiet, święta) i podlinkować do usług.

### `Strona internetowa z wynajmem kamperów w Albanii - Arteon` (`strona-internetowa-dla-camper-albania`)

- **Kategorie**: `strona`, `grafika`
- **Klient / branża**: Camper Albania - Wynajem kamperów (Albania)
- **Link**: `https://camper-albania.eu`
- **Ton i charakter**: techniczny i efektowy (performance + dostępność); nacisk na konkrety typu WCAG i wynik PageSpeed.
- **Co ma (w danych)**:
  - **`link`**: tak
  - **`stack`**: tak (w praktyce: zakres prac, nie technologie)
  - **`process_steps`**: tak
  - **`outcomes`**: tak (w tym 95/100)
  - **`beforeAfter`**: tak
  - **`cta`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`deliverables`**: brak (np. lista zmian, co konkretnie zostało dostarczone)
  - **`challenges` / `solutions`**: brak (przy projektach optymalizacyjnych to mocny element narracji)
  - **`faq`**: brak
  - **`contentBlocks`**: brak (poza `beforeAfter` przydałyby się screeny sekcji)
- **Plusy**:
  - **Mierzalny wynik**: „95/100” to najmocniejszy argument sprzedażowy.
  - **Dostępność jako element jakości**: wspomniane WCAG 2.1 AA (kontrast) buduje zaufanie.
  - **Before/after**: czytelna forma pokazania zmiany.
- **Minusy / ryzyka**:
  - **`title` zawiera „- Arteon”**: jeśli `title` jest używane jako H1, brand w H1 bywa mniej naturalny.
  - **`stack` jest semantycznie mylący**: wartości są raczej „zakresem prac”, nie stackiem technologicznym.
  - **Opis jest krótki**: przy dobrym wyniku warto dopisać, co konkretnie poprawiono (bez zdradzania wrażliwych danych).
- **Sugestie ulepszeń (SEO)**:
  - **Dodać sekcję „Co dokładnie zoptymalizowaliśmy”**: obrazy, CSS/JS, fonty, krytyczne zasoby, CWV (5-8 punktów).
  - **Dodać FAQ**: koszt i czas optymalizacji, co trzeba przygotować, jak wygląda pomiar (GSC/PSI).
  - **Rozszerzyć treść o long-tail**: „optymalizacja prędkości strony”, „PageSpeed 90+”, „WCAG kontrast”.

### `Papier firmowy dla kancelarii - LUX NOVA` (`papier-firmowy-dla-kancelarii-adwokackiej-lux-nova`)

- **Kategorie**: `grafika`
- **Klient / branża**: LUX NOVA - Prawo
- **Link**: brak
- **Ton i charakter**: formalny, „premium w granicach klasyki”; nacisk na porządek, prestiż i praktyczność (PDF + druk).
- **Co ma (w danych)**:
  - **`stack`**: tak (Adobe Illustrator, Mockup 3D)
  - **`deliverables`**: tak
  - **`task`**: tak
  - **`outcomes`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak
  - **`contentBlocks`**: tak (richtext + obraz)
  - **`cta`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **Korekta copy**: `description` ma błędy interpunkcyjne/spacje (np. „dane przykładowe.Papier…”).
  - **Doprecyzowanie „koncepcyjny”**: warto spójnie oznaczać (koncept vs realna realizacja).
- **Plusy**:
  - **Najbardziej kompletna struktura case** (deliverables + outcomes + FAQ + bloki treści).
  - **Wysoka wartość SEO**: FAQ odpowiada na intencje zakupowe i buduje long-tail.
  - **Dobry opis decyzji projektowych**: paleta i typografia mają uzasadnienie.
- **Minusy / ryzyka**:
  - **Meta title jest ogólne**: `seo.title` nie zawiera marki LUX NOVA.
  - **Brak parametrów druku**: papier/uszlachetnienia/gramatura (jeśli były) wzmacniają wiarygodność.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać markę do `seo.title`** (unikalność i lepsze dopasowanie do zapytań brandowych).
  - **Rozbudować o sekcję „Przygotowanie do druku”**: spady, marginesy, format A4, elementy stałe.
  - **Podlinkować do pokrewnych case’ów LUX NOVA** (wizytówka/teczka) + do usługi materiałów firmowych.

### `Teczka ofertowa dla kancelarii - LUX NOVA` (`teczka-ofertowa-dla-kancelarii-adwokackiej-lux-nova`)

- **Kategorie**: `grafika`
- **Klient / branża**: LUX NOVA - Prawo
- **Link**: brak
- **Ton i charakter**: prestiż, reprezentacja i „porządek w dokumentach”; materiał ma wyglądać jak element większego systemu identyfikacji.
- **Co ma (w danych)**:
  - **`stack`**: tak
  - **`deliverables`**: tak
  - **`task`**: tak
  - **`outcomes`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak
  - **`contentBlocks`**: tak (richtext + imageText + kilka obrazów)
  - **`cta`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **Konkrety produkcyjne**: format teczki, miejsce na wizytówkę, rodzaj papieru/uszlachetnienia.
  - **Mierzalne outcomes**: obecne są jakościowe, ale bez specyfikacji „co i ile”.
- **Plusy**:
  - **Bardzo dobry materiał wizualny**: dużo obrazów + opis funkcji poszczególnych stron.
  - **FAQ**: dobrze odpowiada na obiekcje (koszt, czas, branże, pakiet).
  - **Silny storytelling**: teczka jako element zestawu (wizytówka + papier firmowy).
- **Minusy / ryzyka**:
  - **Ryzyko „szablonowości”**: część sformułowań (prestiż, elegancja) warto podpierać detalem.
  - **Korekta językowa**: drobne błędy w copy mogą obniżać odbiór.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać sekcję „Specyfikacja teczki”** (format, kieszeń, big, uszlachetnienia) + zdjęcia zbliżeń.
  - **Wzmocnić słowa kluczowe long-tail**: „projekt teczki ofertowej”, „teczka dla kancelarii adwokackiej”.
  - **Upewnić się, że FAQ ma wsparcie w schema (FAQPage)**, jeśli jest renderowane komponentem FAQ.

### `Wizytówka dla kancelarii - LUX NOVA` (`wizytowka-dla-kancelarii-adwokackiej-lux-nova`)

- **Kategorie**: `grafika`
- **Klient / branża**: LUX NOVA - Prawo
- **Link**: brak
- **Ton i charakter**: formalny, rzeczowy; nacisk na hierarchię informacji, czytelność i autorytet.
- **Co ma (w danych)**:
  - **`stack`**: tak
  - **`deliverables`**: tak
  - **`task`**: tak
  - **`outcomes`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak
  - **`contentBlocks`**: tak
  - **`cta`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **Spójności CTA**: `cta.description` i labelki przycisków odnoszą się do teczki, nie do wizytówki.
  - **Meta title brand**: `seo.title` jest dość ogólne (bez LUX NOVA).
- **Plusy**:
  - **Dobra struktura case**: deliverables + FAQ + obrazy front/tył.
  - **Spójność systemu**: powiązanie z teczką i papierem firmowym.
- **Minusy / ryzyka**:
  - **Błąd merytoryczny w CTA**: obniża zaufanie i psuje intencję strony.
  - **Powtarzalne FAQ**: część pytań powtarza się z innych realizacji - warto różnicować odpowiedzi.
- **Sugestie ulepszeń (SEO)**:
  - **Naprawić CTA** (tekst i linki) pod „wizytówkę dla kancelarii”.
  - **Uzupełnić `seo.title` o markę** i doprecyzować „wizytówka adwokacka/kancelaria”.
  - **Dodać 1-2 zdania o produkcji** (papier, uszlachetnienia, minimalne rozmiary tekstu) - zwiększa wiarygodność.

### `Strona internetowa dla psychologa - MSC Psychotherapy UK` (`strona-dla-psychologa-msc-psychotherapy`)

- **Kategorie**: `strona`, `sklep`, `blog`, `treść`, `grafika`, `marketing`
- **Klient / branża**: Mental Support Centre - Psychoterapia (Camberley, UK)
- **Link**: `https://msc-psychotherapy.co.uk/`
- **Ton i charakter**: wspierający i ekspercki; wyraźnie nastawiony na „marketing bez agresji” + lokalne SEO.
- **Co ma (w danych)**:
  - **`stack`**: tak (WordPress, Yoast SEO, GA4, GSC)
  - **`deliverables`**: tak
  - **`goals` / `challenges` / `solutions`**: tak
  - **`outcomes`**: tak
  - **`beforeAfter`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak (dużo pytań, dobra baza pod SEO)
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`contentBlocks`**: brak (utrudnia pokazanie screenów/sekcji bez grzebania w HTML).
  - **Mierzalne wyniki**: część outcomes jest „w trakcie”, bez dat/metryk.
- **Plusy**:
  - **Najlepsza narracja case study**: cele → problemy → rozwiązania → proces → efekty.
  - **Dobrze dobrane FAQ**: odpowiada na realne pytania klientów i buduje long-tail.
  - **Wyraźny kontekst lokalny**: Camberley/London (local SEO).
- **Minusy / ryzyka**:
  - **Ryzyko przesycenia frazami**: częste powtórzenia „pozycjonowanie dla psychologa” mogą brzmieć nienaturalnie.
  - **Dużo HTML w polach tekstowych**: trudniej utrzymać spójną semantykę nagłówków.
- **Sugestie ulepszeń (SEO)**:
  - **Zbalansować frazy**: część powtórzeń zastąpić synonimami i bardziej naturalnymi konstrukcjami.
  - **Dodać galerię** (np. 4-8 screenów sekcji strony) z altami.
  - **Dodać 1-2 konkretne metryki** (np. poprawa CWV, CTR, liczba klików w kontakt) - jeśli są dostępne.

### `Katalog produktów - RestoQuality` (`katalog-produktow-restoquality`)

- **Kategorie**: `grafika`
- **Klient / branża**: brak obiektu `client` w danych (w treści: RestoQuality - gastronomia)
- **Link**: brak
- **Ton i charakter**: B2B, techniczny i uporządkowany; nacisk na porównanie parametrów i szybkie skanowanie oferty.
- **Co ma (w danych)**:
  - **`stack`**: tak (InDesign/Illustrator/Mockup)
  - **`deliverables`**: tak
  - **`task`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak
  - **`contentBlocks`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`client`**: brak (to jeden z najważniejszych braków w tej realizacji)
  - **`outcomes`**: brak (np. liczba stron, skrócenie czasu wyboru produktu, feedback handlowców)
  - **Więcej materiału wizualnego**: jest tylko 1 obraz (na katalog warto dać 3-6 ujęć)
  - **Korekta copy**: są literówki w opisach/FAQ
- **Plusy**:
  - **Silna użyteczność**: opisy kart produktów (parametry, cena, kraj) trafiają w intencje w gastronomii.
  - **Ikony pochodzenia**: wyróżnik funkcjonalny, a nie tylko estetyczny.
  - **Dobrze dobrane FAQ**: wspiera SEO long-tail (cena/terminy/materiały).
- **Minusy / ryzyka**:
  - **Brak danych klienta**: osłabia wiarygodność i utrudnia budowanie kolekcji realizacji dla tej marki.
  - **Niewykorzystany potencjał galerii**: katalog bez przykładów stron wygląda „pusto”.
- **Sugestie ulepszeń (SEO)**:
  - **Uzupełnić `client`**: `name`, `sector`, opcjonalnie `location`.
  - **Dodać 3-6 screenów stron** (spis treści, karta produktu, kategoria) + alt z frazami „katalog produktów dla gastronomii”.
  - **Dodać outcomes**: np. liczba stron, liczba kategorii, efekt „szybsze porównania”.

### `Wizytówka dla SPA - TALIA` (`wizytowka-dla-spa-talia`)

- **Kategorie**: `grafika`
- **Klient / branża**: TALIA - Wellness & SPA
- **Link**: brak
- **Ton i charakter**: premium & nature; spokojny luksus, organiczna estetyka (malarstwo + zieleń/beż).
- **Co ma (w danych)**:
  - **`stack`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak
  - **`contentBlocks`**: tak (`imageText`)
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`deliverables`**: brak
  - **`outcomes`**: brak
  - **`cta`**: brak
  - **Korekta językowa**: literówki w `description` i powtórzenia w `process_steps`.
- **Plusy**:
  - **Czytelny motyw przewodni**: natura + premium (spójne z branżą).
  - **Podana paleta i typografia**: konkret (plus dla wiarygodności i odbioru „świadomego projektu”).
- **Minusy / ryzyka**:
  - **Mało informacji o produkcji**: wizytówki premium zwykle wymagają choćby wzmianki o papierze/uszlachetnieniu.
  - **Brak CTA**: strona nie domyka intencji zakupowej.
- **Sugestie ulepszeń (SEO)**:
  - **Dodać `deliverables`** (front/tył, pliki do druku, mockup, warianty).
  - **Dodać CTA** do usługi wizytówek/materiałów firmowych.
  - **Rozbudować galerię**: osobno front, tył, zbliżenia typografii.

### `Sklep internetowy dla firmy odzieżowej - Trilllizo` (`sklep-dla-firmy-odziezowej-trilllizo`)

- **Kategorie**: `sklep`
- **Klient / branża**: brak obiektu `client` w danych
- **Link**: `https://trilllizo.com`
- **Ton i charakter**: wykonawczy, nastawiony na delivery; mocny nacisk na wdrożenie 1:1 i uruchomienie sprzedaży.
- **Co ma (w danych)**:
  - **`task`**: tak
  - **`deliverables`**: tak
  - **`goals`**: tak
  - **`process_steps`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`client`**: brak
  - **`stack`**: brak (mimo że w opisie jest WordPress/WooCommerce/Elementor)
  - **`outcomes`**: brak
  - **`contentBlocks`**: brak
  - **`cta`**: brak
- **Plusy**:
  - **Zakres e-commerce jest konkretny**: płatności, InPost, newsletter, dwie wersje językowe.
  - **Wspomniany plan SEO**: dobry punkt do rozbudowy case study.
- **Minusy / ryzyka**:
  - **Słaby „proof"**: bez screenów i mierzalnych efektów to bardziej opis usługi niż case.
  - **Niespójność danych**: technologie są w tekście, ale nie w polu `stack`.
- **Sugestie ulepszeń (SEO)**:
  - **Uzupełnić `stack`** i `client`.
  - **Dodać galerię**: home, karta produktu, koszyk/checkout, wersje językowe.
  - **Dodać outcomes**: wyniki CWV, czas ładowania, podstawowe wdrożenia SEO (schema Product, breadcrumbs, indeksacja).

### `Wizytówki dla gastronomii - RestoQuality` (`wizytowki-dla-gastronomii-restoquality`)

- **Kategorie**: `grafika`
- **Klient / branża**: brak obiektu `client` w danych (w treści: RestoQuality - gastronomia)
- **Link**: brak
- **Ton i charakter**: techniczny, solidny; „szablon systemowy” dla zespołu sprzedaży.
- **Co ma (w danych)**:
  - **`stack`**: tak
  - **`deliverables`**: tak
  - **`task`**: tak
  - **`outcomes`**: tak
  - **`process_steps`**: tak
  - **`faq`**: tak
  - **`contentBlocks`**: tak
  - **`seo`**: tak
- **Czego brakuje / do dopracowania**:
  - **`client`**: brak
  - **`cta`**: brak
  - **Korekta copy**: literówki w deliverables (`imie`) i drobne błędy językowe.
- **Plusy**:
  - **Dobra struktura case**: są deliverables, outcomes i FAQ.
  - **Wartościowa koncepcja**: szablon dla wielu handlowców (skalowalność).
  - **Słowa kluczowe są trafione**: „wizytówki dla gastronomii”, „dla handlowców”.
- **Minusy / ryzyka**:
  - **Brak CTA**: trudniej domknąć intencję użytkownika (zobaczył realizację, ale nie ma jasnego „co dalej”).
  - **Za mało wariantów**: „szablon” aż prosi się o pokazanie 2-3 przykładów.
- **Sugestie ulepszeń (SEO)**:
  - **Uzupełnić `client`** i dodać `cta` (np. do usługi wizytówek).
  - **Dodać dodatkowe bloki**: front/tył, warianty dla różnych ról handlowców, zbliżenia typografii.
  - **Dodać 1 akapit o przygotowaniu do druku**: format, spady, minimalny rozmiar tekstu.

---

## Podsumowanie (wspólne wnioski + priorytety SEO)

Najczęstsze problemy w danych realizacji:

- **Brakujące pola**: `client`, `deliverables`, `outcomes`, `faq`, `cta`, `contentBlocks` (zwłaszcza w projektach web/marketing).
- **Słabe lub zbyt krótkie opisy**: część realizacji wygląda jak szkic, a nie case study.
- **Niespójny SEO komplet**: pojedyncze projekty mają tylko `canonical` bez `title/description`.
- **Duplikacje treści**: identyczny testimonial w wielu realizacjach.
- **Korekta językowa**: literówki i błędy (szczególnie w polach SEO) obniżają zaufanie.

Najlepsze „szybkie wygrane” (kolejność priorytetu):

- **Dodać brakujące `seo.title` i `seo.description`** tam, gdzie ich nie ma (unikalne per realizacja).
- **Dodać `contentBlocks` (galerie)** do realizacji web/SEO/WCAG (screeny przed/po + alt pod long-tail).
- **Dodać `outcomes`** (metryki, nawet proste: wynik PSI, liczba komponentów, liczba rynków).
- **Dodać FAQ** do realizacji o najwyższym intent (strony/sklepy/WCAG/analityka).
- **Ujednolicić dane**: wszędzie dodawać `client` i spójnie traktować `stack` (technologie vs zakres).
