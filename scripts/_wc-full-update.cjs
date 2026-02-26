/**
 * Comprehensive word counter content update for ALL 16 locales.
 * Updates: metadata, hero, schema, contentBlocks (sectionBasic, metrics, steps,
 * "what makes special", FAQ) with new Flesch-Kincaid, syllables, speaking time features.
 * Also fixes untranslated English content in non-EN locales.
 */
const fs = require('fs');
const path = require('path');

// ─── Per-locale translations ───────────────────────────────────────────────────

const L = {
  pl: {
    metaTitle: 'Licznik słów z czytelności\u0105 Flesch-Kincaid, sylabami i czasem mówienia',
    metaDesc: 'Darmowy licznik słów, znaków i sylab z wynikiem czytelności Flesch-Kincaid, czasem czytania, czasem mówienia i 10 narzędziami do formatowania tekstu. Bez rejestracji.',
    heroTitle: 'Policz słowa, znaki i czytelność \u2013 wynik Flesch-Kincaid, czas czytania i narzędzia tekstowe',
    heroDesc:
      'Wklej tekst, a narzędzie policzy słowa, znaki, sylaby, zdania, akapity, unikalne wyrazy, czas czytania, czas mówienia i obliczy wynik czytelności Flesch-Kincaid. Zmień wielkość liter, usuń duplikaty lub posortuj linie jednym kliknięciem.',
    schemaName: 'Licznik słów z czytelności\u0105 Flesch-Kincaid i narzędziami tekstowymi',
    schemaAltNames: [
      'Licznik słów online po polsku',
      'Licznik znaków ze spacjami i bez spacji',
      'Narzędzie do liczenia słów dla copywriterów',
      'Kalkulator czasu czytania tekstu',
      'Sprawdzanie czytelności Flesch-Kincaid',
      'Licznik sylab online',
      'Kalkulator czasu mówienia',
      'Konwerter wielkości liter online',
      'Narzędzie do oceny czytelności tekstu',
      'Usuwanie duplikatów linii z tekstu',
    ],
    schemaDesc:
      'Darmowy licznik słów i znaków z oceną czytelności Flesch-Kincaid, liczeniem sylab, szacowaniem czasu czytania i mówienia oraz 10 narzędziami do formatowania tekstu. Przetwarzanie lokalne w przeglądarce.',
    schemaFeatures: [
      'Liczenie słów w tekście',
      'Liczenie znaków ze spacjami i bez spacji',
      'Liczenie zdań i akapitów',
      'Liczenie unikalnych słów',
      'Średnia długość słowa',
      'Szacowanie czasu czytania',
      'Szacowanie czasu mówienia',
      'Liczenie sylab',
      'Wynik czytelności Flesch-Kincaid',
      'Formuły czytelności dostosowane do języka (16 języków)',
      'Zamiana na wielkie lub małe litery',
      'Zamiana na styl zdania lub tytułu',
      'Odwracanie wielkości liter',
      'Usuwanie nadmiarowych spacji',
      'Usuwanie pustych linii i duplikatów',
      'Sortowanie linii A-Z i Z-A',
      'Kopiowanie tekstu do schowka',
    ],
    howToDesc: 'Policz słowa, znaki, sylaby i zdania. Sprawdź czytelność Flesch-Kincaid, czas czytania i czas mówienia. Użyj narzędzi do formatowania tekstu.',
    howToStep2:
      'W panelu po lewej stronie zobaczysz 11 metryk tekstu: słowa, znaki ze spacjami i bez, zdania, akapity, unikalne słowa, średnią długość słowa, czas czytania, czas mówienia, sylaby i wynik czytelności Flesch-Kincaid.',
    sectionBasicHtml:
      '<p class="text-mid">Narzędzie łączy licznik słów i znaków z analizą czytelności Flesch-Kincaid i zestawem funkcji do formatowania tekstu. Wklej tekst, a zobaczysz liczbę słów, znaków, sylab, zdań, akapitów, unikalnych wyrazów, szacowany czas czytania, czas mówienia i kolorowy wskaźnik czytelności.</p><p class="text-mid mt-3"><strong>Wynik czytelności Flesch-Kincaid</strong> (0\u2013100) mówi, jak łatwy do czytania jest tekst. Wynik powyżej 70 oznacza łatwy tekst (dla szerokiej publiczności), a poniżej 30 \u2013 poziom akademicki. Narzędzie używa formuł dostosowanych do 16 języków, w tym Amstad (niemiecki), Fernández-Huerta (hiszpański) i Gulpease (włoski).</p><p class="text-mid mt-3">Pod polem tekstowym znajdziesz pasek z 10 narzędziami: zamiana wielkości liter (WIELKIE, małe, Jak w zdaniu, Każde Słowo Wielką), usuwanie nadmiarowych spacji, pustych linii i duplikatów oraz sortowanie linii alfabetycznie. Cała analiza i przetwarzanie tekstu odbywają się lokalnie w przeglądarce.</p>',
    metricsTitle: '11 metryk tekstu \u2013 co mierzy licznik?',
    metricsDesc: 'Licznik analizuje tekst pod kątem jedenastu wskaźników:',
    metricItems: [
      { icon: 'RiText', title: 'Słowa', description: 'Łączna liczba słów w tekście. Główny wskaźnik długości, przydatny przy tworzeniu treści na strony, artykuły i opisy.' },
      {
        icon: 'RiSpaceShipLine',
        title: 'Znaki (ze spacjami)',
        description: 'Wszystkie znaki łącznie ze spacjami. Przydatne, gdy platforma ma limit znaków (np. opisy na Allegro, OLX, meta description).',
      },
      { icon: 'RiHashtag', title: 'Znaki (bez spacji)', description: 'Tylko litery, cyfry i interpunkcja. Standardowa jednostka rozliczeniowa w tłumaczeniach i drukarniach.' },
      { icon: 'RiChatQuoteLine', title: 'Zdania', description: 'Liczba zdań w tekście. Pomaga ocenić złożoność i czytelność \u2013 krótsze zdania są łatwiejsze do przyswojenia.' },
      { icon: 'RiParagraph', title: 'Akapity', description: 'Bloki tekstu oddzielone pustymi liniami. Dobrze podzielony tekst na akapity poprawia czytelność na ekranach.' },
      { icon: 'RiStarLine', title: 'Unikalne słowa', description: 'Liczba niepowtarzających się słów. Im wyższy stosunek unikalnych słów do wszystkich, tym bogatsze słownictwo tekstu.' },
      { icon: 'RiRulerLine', title: 'Średnia długość słowa', description: 'Średnia liczba znaków na słowo. Wskaźnik złożoności tekstu \u2013 teksty techniczne mają dłuższe słowa niż potoczne.' },
      { icon: 'RiTimeLine', title: 'Czas czytania', description: 'Szacowany czas przeczytania tekstu przy prędkości 200 słów na minutę. Orientacyjna wartość dla typowego tekstu.' },
      { icon: 'RiMicLine', title: 'Czas mówienia', description: 'Szacowany czas wygłoszenia tekstu przy 130 słowach na minutę. Przydatny do przemówień, prezentacji i scenariuszy wideo.' },
      { icon: 'RiInputMethodLine', title: 'Sylaby', description: 'Łączna liczba sylab obliczona za pomocą heurystyk językowych. Kluczowy parametr formuł czytelności i analizy poezji.' },
      {
        icon: 'RiSpeedLine',
        title: 'Czytelność (Flesch-Kincaid)',
        description: 'Wynik 0\u2013100 wskazujący łatwość czytania tekstu. Powyżej 70 = łatwy, 50\u201370 = umiarkowany, poniżej 30 = akademicki. Kolorowy wskaźnik ułatwia szybką ocenę.',
      },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'WIELKIE LITERY', description: 'Zamienia cały tekst na wielkie litery. Przydatne do nagłówków, akronimów i wyróżnienia fragmentów tekstu.' },
      { icon: 'RiArrowDownLine', title: 'małe litery', description: 'Zamienia cały tekst na małe litery. Użyteczne do normalizacji tekstu skopiowanego z różnych źródeł.' },
      { icon: 'RiEditLine', title: 'Jak w zdaniu', description: 'Pierwsza litera każdego zdania wielka, reszta mała. Standardowy format tekstu ciągłego.' },
      { icon: 'RiHeading', title: 'Każde Słowo Wielką', description: 'Każde słowo zaczyna się wielką literą. Idealny do tytułów, nagłówków i nazw własnych.' },
      { icon: 'RiArrowLeftRightLine', title: 'Odwróć wielkość', description: 'Zamienia wielkie litery na małe i odwrotnie. Przydatne, gdy przypadkowo napisano tekst z włączonym Caps Lock.' },
      { icon: 'RiSpace', title: 'Usuń nadmiarowe spacje', description: 'Redukuje wielokrotne spacje do jednej i usuwa spacje na początku i końcu linii.' },
      { icon: 'RiDeleteRow', title: 'Usuń puste linie', description: 'Usuwa puste i nadmiarowe linie z tekstu. Przydatne do czyszczenia tekstu skopiowanego ze stron internetowych.' },
      { icon: 'RiFilterLine', title: 'Usuń duplikaty linii', description: 'Pozostawia tylko unikalne linie, usuwając powtórzenia. Przydatne do czyszczenia list i danych.' },
      { icon: 'RiSortAsc', title: 'Sortuj A\u2192Z', description: 'Sortuje linie tekstu alfabetycznie rosnąco. Przydatne do porządkowania list, słów kluczowych i danych.' },
      { icon: 'RiSortDesc', title: 'Sortuj Z\u2192A', description: 'Sortuje linie tekstu alfabetycznie malejąco. Odwrotna kolejność sortowania.' },
    ],
    whoTitle: 'Dla kogo jest licznik słów i narzędzia tekstowe?',
    whoDesc: 'Narzędzie przydaje się każdemu, kto pracuje z tekstem:',
    whoItems: [
      {
        icon: 'RiEditLine',
        title: 'Copywriterzy i redaktorzy',
        description: 'Liczenie słów i znaków, sprawdzanie limitów platform, szybka zmiana wielkości liter i czyszczenie tekstu przed publikacją.',
      },
      { icon: 'RiBloggerLine', title: 'Blogerzy i autorzy treści', description: 'Kontrola długości wpisów, sprawdzanie czytelności i czasu czytania, usuwanie duplikatów linii i sortowanie list.' },
      { icon: 'RiShoppingBagLine', title: 'Właściciele sklepów', description: 'Weryfikacja opisów produktów pod kątem limitów znaków na platformach (Allegro, OLX, Amazon).' },
      { icon: 'RiSearchLine', title: 'Specjaliści SEO', description: 'Analiza długości treści, wynik czytelności Flesch-Kincaid, liczenie unikalnych słów i ocena złożoności tekstu.' },
      { icon: 'RiGraduationCapLine', title: 'Studenci i naukowcy', description: 'Sprawdzanie limitów słów lub znaków w pracach naukowych. Ocena czytelności pracy dyplomowej.' },
      { icon: 'RiTranslate2', title: 'Tłumacze', description: 'Liczenie znaków bez spacji do wyceny (standardowa jednostka rozliczeniowa w tłumaczeniach).' },
    ],
    specialTitle: 'Co wyróżnia ten licznik słów i znaków?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 metryk tekstu + wynik czytelności',
        description: 'Słowa, znaki, sylaby, zdania, akapity, unikalne słowa, czas czytania, czas mówienia i wynik Flesch-Kincaid \u2013 wszystko w jednym panelu.',
      },
      {
        icon: 'RiTextWrap',
        title: '10 narzędzi do formatowania',
        description: 'Zamiana wielkości liter, usuwanie spacji, pustych linii, duplikatów i sortowanie \u2013 bez instalowania dodatkowych programów.',
      },
      { icon: 'RiUserLine', title: 'Przetwarzanie lokalne w przeglądarce', description: 'Tekst nie jest wysyłany na żaden serwer. Cała analiza i transformacja odbywają się lokalnie na urządzeniu.' },
      { icon: 'RiFileCopyLine', title: 'Kopiowanie i czyszczenie tekstu', description: 'Kopiuj zmodyfikowany tekst do schowka jednym kliknięciem lub wyczyść pole, aby zacząć od nowa.' },
      {
        icon: 'RiTimerLine',
        title: 'Natychmiastowe wyniki',
        description: 'Statystyki aktualizują się w czasie rzeczywistym podczas wpisywania lub wklejania tekstu. Bez oczekiwania na przetwarzanie.',
      },
      { icon: 'RiLockLine', title: 'Bez rejestracji i limitów', description: 'Narzędzie jest w pełni darmowe. Nie wymaga rejestracji, logowania ani podawania danych osobowych.' },
    ],
    faqItems: [
      {
        question: 'Jak licznik oblicza czas czytania?',
        answer:
          'Narzędzie dzieli liczbę słów przez 200 \u2013 to średnia prędkość czytania dla typowego tekstu. Tekst techniczny lub wymagający skupienia (np. dokumentacja, regulamin) będzie czytany wolniej. Lekki artykuł lifestylowy \u2013 szybciej. Wynik to orientacyjna wartość, która pomaga ocenić, ile czasu czytelnik spędzi z tekstem.',
        answerSchemaText: 'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna dla typowego tekstu.',
      },
      {
        question: 'Czym różni się liczenie znaków ze spacjami od liczenia bez spacji?',
        answer:
          'Znaki ze spacjami to wszystkie znaki w tekście łącznie ze spacjami, tabulatorami i znakami nowej linii. Znaki bez spacji to tylko litery, cyfry i interpunkcja. Platformy takie jak Allegro czy OLX mają limity w znakach ze spacjami. Biura tłumaczeń i drukarnie rozliczają się w znakach bez spacji.',
        answerSchemaText: 'Znaki ze spacjami obejmują wszystkie znaki, znaki bez spacji pomijają spacje i tabulatory.',
      },
      {
        question: 'Jak działa zamiana wielkości liter?',
        answer:
          'Narzędzie oferuje 5 trybów zamiany: WIELKIE LITERY (cały tekst na wielkie), małe litery (cały na małe), Jak w zdaniu (pierwsza litera zdania wielka), Każde Słowo Wielką (pierwsza litera każdego słowa wielka) i Odwróć wielkość (zamiana wielkich na małe i odwrotnie). Kliknij odpowiedni przycisk na pasku narzędzi pod polem tekstowym.',
        answerSchemaText: 'Narzędzie ma 5 trybów zamiany wielkości liter: wielkie, małe, jak w zdaniu, każde słowo wielką i odwracanie wielkości.',
      },
      {
        question: 'Co oznacza metryka unikalne słowa?',
        answer:
          'Unikalne słowa to liczba niepowtarzających się wyrazów w tekście. Jeśli słowo marketing pojawia się 5 razy, liczy się jako 1 unikalne słowo. Wysoki stosunek unikalnych słów do wszystkich słów wskazuje na bogate słownictwo i mniejszą powtarzalność tekstu.',
        answerSchemaText: 'Unikalne słowa to liczba niepowtarzających się wyrazów. Wysoki stosunek do ogółu słów wskazuje na bogate słownictwo.',
      },
      {
        question: 'Jak działa usuwanie duplikatów linii?',
        answer:
          'Funkcja porównuje każdą linię tekstu z pozostałymi i zachowuje tylko pierwsze wystąpienie. Powtarzające się linie są usuwane. Przydatne do czyszczenia list słów kluczowych, adresów e-mail, danych z arkuszy kalkulacyjnych i wszelkich zbiorów, w których mogą pojawić się duplikaty.',
        answerSchemaText: 'Narzędzie porównuje linie tekstu i zachowuje tylko unikalne, usuwając powtórzenia.',
      },
      {
        question: 'Czy mój tekst jest bezpieczny?',
        answer:
          'Tak. Cała analiza i przetwarzanie tekstu odbywają się wyłącznie w przeglądarce \u2013 tekst nie jest wysyłany na żaden serwer. Narzędzie nie zapisuje ani nie przechowuje wklejonego tekstu. Po zamknięciu strony tekst znika bezpowrotnie.',
        answerSchemaText: 'Tak. Tekst jest przetwarzany lokalnie w przeglądarce i nie jest wysyłany na serwer.',
      },
      {
        question: 'Czym jest wynik czytelności Flesch-Kincaid?',
        answer:
          'Wynik Flesch Reading Ease to liczba od 0 do 100, która wskazuje, jak łatwy do czytania jest tekst. Jest obliczany na podstawie średniej długości zdania i średniej liczby sylab na słowo. Wynik 90\u2013100 oznacza bardzo łatwy tekst (poziom szkoły podstawowej), 70\u201389 to łatwy, 50\u201369 umiarkowany, 30\u201349 trudny (poziom uczelni), a 0\u201329 bardzo trudny (akademicki). Narzędzie używa formuł dostosowanych do języka: Amstad dla niemieckiego, Fernández-Huerta dla hiszpańskiego/portugalskiego, Flesch-Douma dla holenderskiego, Gulpease dla włoskiego i Kandel-Moles dla francuskiego.',
        answerSchemaText: 'Wynik Flesch Reading Ease (0\u2013100) mierzy czytelność tekstu na podstawie długości zdań i sylab na słowo. Wyższy wynik = łatwiejszy tekst.',
      },
      {
        question: 'Jak obliczany jest czas mówienia?',
        answer:
          'Czas mówienia to szacunek uzyskany przez podzielenie liczby słów przez 130 \u2013 średnią prędkość mówienia podczas prezentacji i wystąpień publicznych. Jest wolniejszy niż 200 słów na minutę przyjmowane dla czasu czytania, ponieważ mowa wymaga naturalnych pauz, akcentowania i oddychania.',
        answerSchemaText: 'Czas mówienia obliczany jest przy 130 słowach na minutę \u2013 średniej prędkości dla prezentacji.',
      },
      {
        question: 'Jak dokładny jest licznik sylab?',
        answer:
          'Narzędzie używa heurystyk specyficznych dla każdego języka. Dla angielskiego obsługuje nieme -e, typowe przyrostki (-ed, -es, -le) i dwugłoski. Dla innych języków rozpoznaje charakterystyczne dyftongi i wzorce samogłoskowe (np. niemieckie ei/au/eu, francuskie ou/ai/oi, greckie \u03b1\u03b9/\u03b5\u03b9/\u03bf\u03b9). Wynik jest przybliżony, ale wystarczający do oceny czytelności i analizy tekstu.',
        answerSchemaText: 'Licznik sylab używa heurystyk specyficznych dla 16 języków, obsługujących dwugłoski i nieme litery.',
      },
    ],
  },

  de: {
    metaTitle: 'Wortzähler mit Flesch-Kincaid Lesbarkeitsindex & Texttools',
    metaDesc: 'Kostenloser Wort-, Zeichen- & Silbenzähler mit Flesch-Kincaid Lesbarkeitsbewertung, Lesezeit, Sprechzeit & 10 Textformatierungs-Tools. Ohne Anmeldung.',
    heroTitle: 'Wörter, Zeichen & Lesbarkeit zählen \u2013 Flesch-Kincaid-Index, Lesezeit und Textwerkzeuge',
    heroDesc:
      'Text einfügen \u2013 das Tool zählt Wörter, Zeichen, Silben, Sätze, Absätze, einzigartige Wörter, Lesezeit, Sprechzeit und berechnet den Flesch-Kincaid-Lesbarkeitsindex. Groß-/Kleinschreibung ändern, Duplikate entfernen oder Zeilen sortieren.',
    schemaName: 'Wortzähler mit Flesch-Kincaid Lesbarkeitsindex & Texttools',
    schemaAltNames: [
      'Online Wortzähler',
      'Zeichenzähler mit und ohne Leerzeichen',
      'Wortzähler für Texter und Redakteure',
      'Lesezeit-Rechner',
      'Flesch-Kincaid Lesbarkeitsprüfer',
      'Silbenzähler online',
      'Sprechzeit-Rechner',
      'Groß-Kleinschreibung Konverter',
      'Lesbarkeits-Tool für Texte',
      'Duplikate aus Text entfernen',
    ],
    schemaDesc:
      'Kostenloser Wort- und Zeichenzähler mit Flesch-Kincaid Lesbarkeitsbewertung, Silbenzählung, Lese- und Sprechzeitschätzung und 10 Textformatierungswerkzeugen. Verarbeitung lokal im Browser.',
    schemaFeatures: [
      'Wörter zählen',
      'Zeichen mit und ohne Leerzeichen zählen',
      'Sätze und Absätze zählen',
      'Einzigartige Wörter zählen',
      'Durchschnittliche Wortlänge',
      'Geschätzte Lesezeit',
      'Geschätzte Sprechzeit',
      'Silbenzählung',
      'Flesch-Kincaid-Lesbarkeitsindex (Amstad-Formel für Deutsch)',
      'Sprachspezifische Lesbarkeitsformeln (16 Sprachen)',
      'In Groß- oder Kleinbuchstaben umwandeln',
      'In Satz- oder Titelschreibweise umwandeln',
      'Groß-/Kleinschreibung umkehren',
      'Überflüssige Leerzeichen entfernen',
      'Leerzeilen und Duplikate entfernen',
      'Zeilen A\u2013Z und Z\u2013A sortieren',
      'Text in Zwischenablage kopieren',
    ],
    howToDesc: 'Wörter, Zeichen, Silben und Sätze zählen. Flesch-Kincaid-Lesbarkeit, Lesezeit und Sprechzeit prüfen. Text mit 10 Werkzeugen formatieren.',
    howToStep2:
      'Im linken Panel sehen Sie 11 Textmetriken: Wörter, Zeichen mit und ohne Leerzeichen, Sätze, Absätze, einzigartige Wörter, Wortlänge, Lesezeit, Sprechzeit, Silben und Flesch-Kincaid-Lesbarkeitsindex.',
    sectionBasicHtml:
      '<p class="text-mid">Dieses Tool kombiniert einen Wort- und Zeichenzähler mit Flesch-Kincaid-Lesbarkeitsanalyse und Textformatierungsfunktionen. Fügen Sie Text ein und sehen Sie Wörter, Zeichen, Silben, Sätze, Absätze, einzigartige Wörter, Lesezeit, Sprechzeit und einen farbcodierten Lesbarkeitsindex.</p><p class="text-mid mt-3">Der <strong>Flesch-Kincaid-Lesbarkeitsindex</strong> (0\u2013100) zeigt, wie leicht Ihr Text zu lesen ist. Für deutsche Texte wird die <strong>Amstad-Formel</strong> verwendet: 180 \u2212 ASL \u2212 58,5 \u00d7 ASW. Werte über 70 bedeuten leichte Lesbarkeit, unter 30 akademisches Niveau.</p><p class="text-mid mt-3">Unter dem Textfeld finden Sie 10 Werkzeuge: Groß-/Kleinschreibung (GROSSBUCHSTABEN, kleinbuchstaben, Satzanfang, Titelschreibweise), Leerzeichen, Leerzeilen und Duplikate entfernen sowie alphabetisches Sortieren. Alles läuft lokal im Browser.</p>',
    metricsTitle: '11 Textmetriken \u2013 was der Zähler misst',
    metricsDesc: 'Der Zähler analysiert Ihren Text anhand von elf Indikatoren:',
    metricItems: [
      { icon: 'RiText', title: 'Wörter', description: 'Gesamtzahl der Wörter. Der wichtigste Indikator für die Textlänge, nützlich für Artikel, Beschreibungen und Content-Erstellung.' },
      {
        icon: 'RiSpaceShipLine',
        title: 'Zeichen (mit Leerzeichen)',
        description: 'Alle Zeichen einschließlich Leerzeichen. Nützlich bei Zeichenlimits auf Plattformen (z.B. Amazon-Titel, Meta-Descriptions).',
      },
      { icon: 'RiHashtag', title: 'Zeichen (ohne Leerzeichen)', description: 'Nur Buchstaben, Ziffern und Satzzeichen. Die Standard-Abrechnungseinheit bei Übersetzungsbüros und Druckereien.' },
      { icon: 'RiChatQuoteLine', title: 'Sätze', description: 'Anzahl der Sätze im Text. Hilft bei der Bewertung von Komplexität und Lesbarkeit \u2013 kürzere Sätze sind leichter verständlich.' },
      { icon: 'RiParagraph', title: 'Absätze', description: 'Textblöcke, getrennt durch Leerzeilen. Gut strukturierte Absätze verbessern die Lesbarkeit auf Bildschirmen.' },
      { icon: 'RiStarLine', title: 'Einzigartige Wörter', description: 'Anzahl nicht-wiederholender Wörter. Ein höheres Verhältnis zeigt reichhaltigeres Vokabular an.' },
      { icon: 'RiRulerLine', title: 'Durchschnittliche Wortlänge', description: 'Durchschnittliche Zeichenzahl pro Wort. Bei deutschen Texten oft höher durch zusammengesetzte Wörter (Komposita).' },
      { icon: 'RiTimeLine', title: 'Lesezeit', description: 'Geschätzte Lesezeit bei 200 Wörtern pro Minute. Ein Richtwert für typischen Fließtext.' },
      { icon: 'RiMicLine', title: 'Sprechzeit', description: 'Geschätzte Sprechzeit bei 130 Wörtern pro Minute. Nützlich für Reden, Präsentationen und Videoskripte.' },
      {
        icon: 'RiInputMethodLine',
        title: 'Silben',
        description: 'Gesamtzahl der Silben mit sprachspezifischen Heuristiken. Erkennt deutsche Diphthonge (ei, au, eu, äu). Schlüsselparameter für Lesbarkeitsformeln.',
      },
      {
        icon: 'RiSpeedLine',
        title: 'Lesbarkeit (Flesch-Kincaid)',
        description:
          'Ein Wert von 0\u2013100, der die Lesbarkeit anzeigt. Über 70 = leicht, 50\u201370 = mittel, unter 30 = akademisch. Farbcodiert für schnelle Bewertung. Für Deutsch wird die Amstad-Formel verwendet.',
      },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'GROSSBUCHSTABEN', description: 'Wandelt den gesamten Text in Großbuchstaben um. Nützlich für Überschriften, Akronyme und Hervorhebungen.' },
      { icon: 'RiArrowDownLine', title: 'kleinbuchstaben', description: 'Wandelt den gesamten Text in Kleinbuchstaben um. Nützlich zum Normalisieren von Text aus verschiedenen Quellen.' },
      { icon: 'RiEditLine', title: 'Satzanfang groß', description: 'Erster Buchstabe jedes Satzes groß, Rest klein. Standardformat für Fließtext.' },
      { icon: 'RiHeading', title: 'Titelschreibweise', description: 'Jedes Wort beginnt mit einem Großbuchstaben. Ideal für Titel, Überschriften und Eigennamen.' },
      { icon: 'RiArrowLeftRightLine', title: 'Umkehren', description: 'Tauscht Groß- gegen Kleinbuchstaben und umgekehrt. Nützlich bei versehentlich aktivierter Feststelltaste.' },
      { icon: 'RiSpace', title: 'Überflüssige Leerzeichen entfernen', description: 'Reduziert mehrfache Leerzeichen auf eines und entfernt Leerzeichen am Zeilenanfang und -ende.' },
      { icon: 'RiDeleteRow', title: 'Leerzeilen entfernen', description: 'Entfernt leere und überflüssige Zeilen. Nützlich zum Bereinigen von kopierten Texten.' },
      { icon: 'RiFilterLine', title: 'Duplikate entfernen', description: 'Behält nur einzigartige Zeilen und entfernt Wiederholungen. Nützlich zum Bereinigen von Listen.' },
      { icon: 'RiSortAsc', title: 'Sortieren A\u2192Z', description: 'Sortiert Textzeilen alphabetisch aufsteigend. Nützlich für Listen, Schlüsselwörter und Daten.' },
      { icon: 'RiSortDesc', title: 'Sortieren Z\u2192A', description: 'Sortiert Textzeilen alphabetisch absteigend. Umgekehrte Sortierreihenfolge.' },
    ],
    whoTitle: 'Für wen ist der Wortzähler gedacht?',
    whoDesc: 'Das Tool ist nützlich für alle, die mit Text arbeiten:',
    whoItems: [
      {
        icon: 'RiEditLine',
        title: 'Texter und Redakteure',
        description: 'Wörter und Zeichen zählen, Plattformlimits prüfen, Groß-/Kleinschreibung ändern und Text vor der Veröffentlichung bereinigen.',
      },
      { icon: 'RiBloggerLine', title: 'Blogger und Content-Ersteller', description: 'Beitragslänge kontrollieren, Lesbarkeit und Lesezeit prüfen, Duplikate entfernen und Listen sortieren.' },
      { icon: 'RiShoppingBagLine', title: 'Shop-Betreiber', description: 'Produktbeschreibungen gegen Zeichenlimits auf Plattformen prüfen (Amazon, eBay, Otto).' },
      { icon: 'RiSearchLine', title: 'SEO-Spezialisten', description: 'Textlänge analysieren, Flesch-Kincaid-Lesbarkeit prüfen, einzigartige Wörter zählen und Textkomplexität bewerten.' },
      {
        icon: 'RiGraduationCapLine',
        title: 'Studenten und Wissenschaftler',
        description: 'Wort- oder Zeichenlimits in Hausarbeiten und wissenschaftlichen Texten prüfen. Lesbarkeit der Abschlussarbeit bewerten.',
      },
      { icon: 'RiTranslate2', title: 'Übersetzer', description: 'Zeichen ohne Leerzeichen zählen \u2013 die Standard-Abrechnungseinheit im Übersetzungswesen.' },
    ],
    specialTitle: 'Was macht diesen Wortzähler besonders?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 Textmetriken + Lesbarkeitsindex',
        description: 'Wörter, Zeichen, Silben, Sätze, Absätze, einzigartige Wörter, Lesezeit, Sprechzeit und Flesch-Kincaid \u2013 alles in einem Panel.',
      },
      { icon: 'RiTextWrap', title: '10 Formatierungswerkzeuge', description: 'Groß-/Kleinschreibung, Leerzeichen, Leerzeilen, Duplikate und Sortierung \u2013 ohne zusätzliche Software.' },
      { icon: 'RiUserLine', title: 'Lokale Verarbeitung im Browser', description: 'Ihr Text wird nie an einen Server gesendet. Analyse und Transformation erfolgen lokal auf Ihrem Gerät.' },
      { icon: 'RiFileCopyLine', title: 'Text kopieren und löschen', description: 'Kopierten Text mit einem Klick in die Zwischenablage übertragen oder das Feld löschen.' },
      { icon: 'RiTimerLine', title: 'Sofortige Ergebnisse', description: 'Statistiken aktualisieren sich in Echtzeit beim Tippen oder Einfügen. Kein Warten auf Verarbeitung.' },
      { icon: 'RiLockLine', title: 'Ohne Registrierung und Limits', description: 'Das Tool ist komplett kostenlos. Keine Registrierung, kein Login, keine persönlichen Daten erforderlich.' },
    ],
    faqItems: [
      {
        question: 'Wie funktioniert der Lesezeit-Rechner?',
        answer:
          'Das Tool teilt die Wortanzahl durch 200 \u2013 die durchschnittliche Lesegeschwindigkeit für typischen Text. Technische Texte werden langsamer gelesen, leichte Artikel schneller. Das Ergebnis ist ein Richtwert.',
        answerSchemaText: 'Das Tool rechnet mit 200 Wörtern pro Minute als durchschnittliche Lesegeschwindigkeit.',
      },
      {
        question: 'Was ist der Unterschied zwischen Zeichen mit und ohne Leerzeichen?',
        answer:
          'Zeichen mit Leerzeichen umfasst alle Zeichen einschließlich Leerzeichen, Tabulatoren und Zeilenumbrüchen. Zeichen ohne Leerzeichen enthält nur Buchstaben, Ziffern und Satzzeichen. Übersetzungsbüros rechnen nach Zeichen ohne Leerzeichen ab. Plattformen wie Amazon haben Limits in Zeichen mit Leerzeichen.',
        answerSchemaText: 'Zeichen mit Leerzeichen umfasst alle Zeichen; ohne Leerzeichen nur Buchstaben und Ziffern. Relevant für Abrechnungen und Plattformlimits.',
      },
      {
        question: 'Wie funktioniert die Groß-/Kleinschreibung?',
        answer:
          'Das Tool bietet 5 Modi: GROSSBUCHSTABEN (alles groß), kleinbuchstaben (alles klein), Satzanfang groß (erster Buchstabe jedes Satzes), Titelschreibweise (jedes Wort groß) und Umkehren (Groß wird klein und umgekehrt). Klicken Sie den gewünschten Button in der Werkzeugleiste.',
        answerSchemaText: 'Das Tool hat 5 Modi: GROSS, klein, Satzanfang, Titelschreibweise und Umkehren.',
      },
      {
        question: 'Ist mein Text sicher?',
        answer:
          'Ja. Alle Analyse und Verarbeitung erfolgt ausschließlich in Ihrem Browser \u2013 der Text wird nie an einen Server gesendet. Das Tool speichert keinen eingefügten Text. Nach dem Schließen der Seite ist der Text unwiederbringlich weg.',
        answerSchemaText: 'Ja. Der Text wird lokal im Browser verarbeitet und nie an einen Server gesendet.',
      },
      {
        question: 'Was ist der Flesch-Kincaid-Lesbarkeitsindex?',
        answer:
          'Der Flesch Reading Ease ist eine Zahl von 0 bis 100, die anzeigt, wie leicht ein Text zu lesen ist. Für deutsche Texte wird die Amstad-Formel verwendet: 180 \u2212 ASL \u2212 58,5 \u00d7 ASW (ASL = durchschnittliche Satzlänge, ASW = durchschnittliche Silben pro Wort). Werte von 90\u2013100 bedeuten sehr leicht, 70\u201389 leicht, 50\u201369 mittel, 30\u201349 schwierig, 0\u201329 sehr schwierig. Deutsche Texte haben durch zusammengesetzte Wörter (Komposita) oft mehr Silben pro Wort.',
        answerSchemaText: 'Der Flesch-Kincaid-Index (0\u2013100) misst die Lesbarkeit. Für Deutsch wird die Amstad-Formel verwendet. Höherer Wert = leichterer Text.',
      },
      {
        question: 'Wie wird die Sprechzeit berechnet?',
        answer:
          'Die Sprechzeit wird berechnet, indem die Wortanzahl durch 130 geteilt wird \u2013 die durchschnittliche Sprechgeschwindigkeit bei Präsentationen und Reden. Das ist langsamer als 200 Wörter pro Minute beim Lesen, da Sprechen natürliche Pausen, Betonungen und Atempausen beinhaltet.',
        answerSchemaText: 'Die Sprechzeit wird bei 130 Wörtern pro Minute berechnet \u2013 dem Durchschnitt für Präsentationen.',
      },
      {
        question: 'Wie genau ist der Silbenzähler?',
        answer:
          'Das Tool verwendet sprachspezifische Heuristiken. Für Deutsch erkennt es Diphthonge (ei, au, eu, äu), Umlaute und typische Silbenstrukturen zusammengesetzter Wörter. Für Englisch werden stille Buchstaben, Suffixe (-ed, -es, -le) und Diphthonge berücksichtigt. Die Zählung ist approximativ, aber ausreichend für Lesbarkeitsbewertungen.',
        answerSchemaText: 'Der Silbenzähler nutzt sprachspezifische Heuristiken für 16 Sprachen einschließlich deutscher Diphthonge und Komposita.',
      },
    ],
  },

  es: {
    metaTitle: 'Contador de palabras con legibilidad Flesch-Kincaid y herramientas de texto',
    metaDesc: 'Contador gratuito de palabras, caracteres y sílabas con puntuación Flesch-Kincaid, tiempo de lectura, tiempo de habla y 10 herramientas de formato. Sin registro.',
    heroTitle: 'Cuenta palabras, caracteres y legibilidad \u2013 Flesch-Kincaid, tiempo de lectura y herramientas de texto',
    heroDesc:
      'Pega tu texto y la herramienta contará palabras, caracteres, sílabas, oraciones, párrafos, palabras únicas, tiempo de lectura, tiempo de habla y calculará la puntuación de legibilidad Flesch-Kincaid. Cambia mayúsculas, elimina duplicados o ordena líneas con un clic.',
    schemaName: 'Contador de palabras con legibilidad Flesch-Kincaid y herramientas de texto',
    schemaAltNames: [
      'Contador de palabras online',
      'Contador de caracteres con y sin espacios',
      'Herramienta de conteo de palabras para redactores',
      'Calculadora de tiempo de lectura',
      'Verificador de legibilidad Flesch-Kincaid',
      'Contador de sílabas online',
      'Calculadora de tiempo de habla',
      'Conversor de mayúsculas y minúsculas',
      'Herramienta de legibilidad de textos',
      'Eliminar líneas duplicadas del texto',
    ],
    schemaDesc:
      'Contador gratuito de palabras y caracteres con puntuación de legibilidad Flesch-Kincaid (fórmula Fernández-Huerta para español), conteo de sílabas, estimación de tiempo de lectura y habla, y 10 herramientas de formateo. Procesamiento local en el navegador.',
    schemaFeatures: [
      'Conteo de palabras',
      'Conteo de caracteres con y sin espacios',
      'Conteo de oraciones y párrafos',
      'Conteo de palabras únicas',
      'Longitud promedio de palabra',
      'Tiempo de lectura estimado',
      'Tiempo de habla estimado',
      'Conteo de sílabas',
      'Puntuación de legibilidad Flesch-Kincaid (Fernández-Huerta para español)',
      'Fórmulas de legibilidad adaptadas (16 idiomas)',
      'Convertir a mayúsculas o minúsculas',
      'Convertir a formato de oración o título',
      'Invertir mayúsculas/minúsculas',
      'Eliminar espacios extra',
      'Eliminar líneas vacías y duplicados',
      'Ordenar líneas A\u2013Z y Z\u2013A',
      'Copiar texto al portapapeles',
    ],
    howToDesc: 'Cuenta palabras, caracteres, sílabas y oraciones. Verifica la legibilidad Flesch-Kincaid, el tiempo de lectura y el tiempo de habla. Formatea texto con 10 herramientas.',
    howToStep2:
      'En el panel izquierdo verás 11 métricas: palabras, caracteres con y sin espacios, oraciones, párrafos, palabras únicas, longitud promedio, tiempo de lectura, tiempo de habla, sílabas y puntuación Flesch-Kincaid.',
    sectionBasicHtml:
      '<p class="text-mid">Esta herramienta combina un contador de palabras y caracteres con análisis de legibilidad Flesch-Kincaid y funciones de formateo de texto. Pega tu texto y verás el conteo de palabras, caracteres, sílabas, oraciones, párrafos, palabras únicas, tiempo de lectura, tiempo de habla y una puntuación de legibilidad con código de color.</p><p class="text-mid mt-3">La <strong>puntuación Flesch-Kincaid</strong> (0\u2013100) indica qué tan fácil es leer tu texto. Para textos en español se usa la <strong>fórmula Fernández-Huerta</strong>: 206,84 \u2212 60 \u00d7 (sílabas/palabras) \u2212 1,02 \u00d7 (palabras/oraciones). Puntuaciones superiores a 70 indican lectura fácil; inferiores a 30 indican nivel académico.</p><p class="text-mid mt-3">Debajo del campo de texto encontrarás 10 herramientas: conversión de mayúsculas/minúsculas, eliminación de espacios, líneas vacías, duplicados y ordenación alfabética. Todo el procesamiento ocurre localmente en tu navegador.</p>',
    metricsTitle: '11 métricas de texto \u2013 qué mide el contador',
    metricsDesc: 'El contador analiza tu texto con once indicadores:',
    metricItems: [
      { icon: 'RiText', title: 'Palabras', description: 'Total de palabras. El indicador principal de longitud del texto, útil para artículos, descripciones y creación de contenido.' },
      {
        icon: 'RiSpaceShipLine',
        title: 'Caracteres (con espacios)',
        description: 'Todos los caracteres incluyendo espacios. Útil cuando una plataforma tiene límite de caracteres (Amazon, meta descriptions).',
      },
      { icon: 'RiHashtag', title: 'Caracteres (sin espacios)', description: 'Solo letras, dígitos y puntuación. Unidad estándar de facturación en traducciones e imprentas.' },
      {
        icon: 'RiChatQuoteLine',
        title: 'Oraciones',
        description: 'Número de oraciones en el texto. Ayuda a evaluar la complejidad y legibilidad \u2013 las oraciones más cortas son más fáciles de absorber.',
      },
      { icon: 'RiParagraph', title: 'Párrafos', description: 'Bloques de texto separados por líneas en blanco. Los párrafos bien estructurados mejoran la legibilidad en pantallas.' },
      { icon: 'RiStarLine', title: 'Palabras únicas', description: 'Número de palabras no repetidas. Una mayor proporción de palabras únicas indica un vocabulario más rico.' },
      {
        icon: 'RiRulerLine',
        title: 'Longitud promedio de palabra',
        description: 'Promedio de caracteres por palabra. Un indicador de complejidad \u2013 los textos técnicos tienen palabras más largas.',
      },
      { icon: 'RiTimeLine', title: 'Tiempo de lectura', description: 'Tiempo estimado de lectura a 200 palabras por minuto. Valor aproximado para texto típico.' },
      { icon: 'RiMicLine', title: 'Tiempo de habla', description: 'Tiempo estimado para hablar el texto a 130 palabras por minuto. Útil para discursos, presentaciones y guiones de video.' },
      {
        icon: 'RiInputMethodLine',
        title: 'Sílabas',
        description: 'Total de sílabas usando heurísticas del idioma español. Reconoce diptongos (ai, ei, oi, au, eu) e hiatos. Parámetro clave para fórmulas de legibilidad.',
      },
      {
        icon: 'RiSpeedLine',
        title: 'Legibilidad (Flesch-Kincaid)',
        description: 'Puntuación de 0\u2013100 que indica la facilidad de lectura. Más de 70 = fácil, 50\u201370 = moderado, menos de 30 = académico. Con código de color para evaluación rápida.',
      },
    ],
    toolItems: [
      { icon: 'RiArrowUpLine', title: 'MAYÚSCULAS', description: 'Convierte todo el texto a mayúsculas. Útil para encabezados, acrónimos y resaltar fragmentos.' },
      { icon: 'RiArrowDownLine', title: 'minúsculas', description: 'Convierte todo el texto a minúsculas. Útil para normalizar texto de diferentes fuentes.' },
      { icon: 'RiEditLine', title: 'Tipo oración', description: 'Primera letra de cada oración en mayúscula, el resto en minúscula. Formato estándar para texto continuo.' },
      { icon: 'RiHeading', title: 'Tipo Título', description: 'Cada palabra comienza con mayúscula. Ideal para títulos, encabezados y nombres propios.' },
      { icon: 'RiArrowLeftRightLine', title: 'iNVERTIR', description: 'Intercambia mayúsculas por minúsculas y viceversa. Útil cuando el texto se escribió con Bloq Mayús activado.' },
      { icon: 'RiSpace', title: 'Eliminar espacios extra', description: 'Reduce espacios múltiples a uno y elimina espacios al inicio y final de cada línea.' },
      { icon: 'RiDeleteRow', title: 'Eliminar líneas vacías', description: 'Elimina líneas vacías y redundantes. Útil para limpiar texto copiado de sitios web.' },
      { icon: 'RiFilterLine', title: 'Eliminar líneas duplicadas', description: 'Mantiene solo líneas únicas, eliminando repeticiones. Útil para limpiar listas y datos.' },
      { icon: 'RiSortAsc', title: 'Ordenar A\u2192Z', description: 'Ordena líneas alfabéticamente en orden ascendente. Útil para organizar listas y datos.' },
      { icon: 'RiSortDesc', title: 'Ordenar Z\u2192A', description: 'Ordena líneas alfabéticamente en orden descendente. Orden inverso.' },
    ],
    whoTitle: '\u00bfPara quién es el contador de palabras?',
    whoDesc: 'La herramienta es útil para cualquiera que trabaje con texto:',
    whoItems: [
      { icon: 'RiEditLine', title: 'Redactores y editores', description: 'Contar palabras y caracteres, verificar límites de plataformas, cambiar mayúsculas y limpiar texto antes de publicar.' },
      {
        icon: 'RiBloggerLine',
        title: 'Bloggers y creadores de contenido',
        description: 'Controlar la longitud de publicaciones, verificar legibilidad y tiempo de lectura, eliminar duplicados y ordenar listas.',
      },
      { icon: 'RiShoppingBagLine', title: 'Propietarios de tiendas', description: 'Verificar descripciones de productos contra límites de caracteres en plataformas (Amazon, MercadoLibre, eBay).' },
      { icon: 'RiSearchLine', title: 'Especialistas SEO', description: 'Analizar longitud del contenido, puntuación Flesch-Kincaid, contar palabras únicas y evaluar complejidad del texto.' },
      { icon: 'RiGraduationCapLine', title: 'Estudiantes y académicos', description: 'Verificar límites de palabras o caracteres en ensayos e investigaciones. Evaluar legibilidad de la tesis.' },
      { icon: 'RiTranslate2', title: 'Traductores', description: 'Contar caracteres sin espacios para presupuestos (la unidad estándar de facturación en traducción).' },
    ],
    specialTitle: '\u00bfQué hace especial a este contador de palabras?',
    specialItems: [
      {
        icon: 'RiBarChartLine',
        title: '11 métricas + puntuación de legibilidad',
        description: 'Palabras, caracteres, sílabas, oraciones, párrafos, palabras únicas, tiempo de lectura, tiempo de habla y Flesch-Kincaid \u2013 todo en un panel.',
      },
      {
        icon: 'RiTextWrap',
        title: '10 herramientas de formateo',
        description: 'Cambio de mayúsculas, eliminación de espacios, líneas vacías, duplicados y ordenación \u2013 sin instalar software adicional.',
      },
      {
        icon: 'RiUserLine',
        title: 'Procesamiento local en el navegador',
        description: 'Tu texto nunca se envía a ningún servidor. Todo el análisis y la transformación ocurren localmente en tu dispositivo.',
      },
      { icon: 'RiFileCopyLine', title: 'Copiar y limpiar texto', description: 'Copia el texto modificado al portapapeles con un clic o limpia el campo para empezar de nuevo.' },
      { icon: 'RiTimerLine', title: 'Resultados instantáneos', description: 'Las estadísticas se actualizan en tiempo real mientras escribes o pegas texto. Sin espera de procesamiento.' },
      { icon: 'RiLockLine', title: 'Sin registro ni límites', description: 'La herramienta es completamente gratuita. No requiere registro, inicio de sesión ni datos personales.' },
    ],
    faqItems: [
      {
        question: '\u00bfCómo calcula el tiempo de lectura?',
        answer:
          'La herramienta divide el número de palabras por 200 \u2013 la velocidad de lectura promedio para texto típico. Textos técnicos se leen más lento, artículos ligeros más rápido. El resultado es un valor aproximado.',
        answerSchemaText: 'La herramienta asume 200 palabras por minuto como velocidad de lectura promedio.',
      },
      {
        question: '\u00bfCuál es la diferencia entre caracteres con y sin espacios?',
        answer:
          'Caracteres con espacios incluye todos los caracteres del texto incluyendo espacios, tabulaciones y saltos de línea. Caracteres sin espacios incluye solo letras, dígitos y puntuación. Las agencias de traducción facturan por caracteres sin espacios. Plataformas como Amazon tienen límites en caracteres con espacios.',
        answerSchemaText: 'Caracteres con espacios incluye todo; sin espacios solo letras y dígitos. Relevante para facturación y límites de plataformas.',
      },
      {
        question: '\u00bfEs seguro mi texto?',
        answer:
          'Sí. Todo el análisis y procesamiento ocurre exclusivamente en tu navegador \u2013 el texto nunca se envía a ningún servidor. La herramienta no guarda ni almacena el texto pegado. Al cerrar la página, el texto desaparece permanentemente.',
        answerSchemaText: 'Sí. El texto se procesa localmente en el navegador y nunca se envía a un servidor.',
      },
      {
        question: '\u00bfQué es la puntuación de legibilidad Flesch-Kincaid?',
        answer:
          'El índice Flesch Reading Ease es un número de 0 a 100 que indica qué tan fácil es leer un texto. Para español se usa la fórmula Fernández-Huerta: 206,84 \u2212 60 \u00d7 (sílabas/palabras) \u2212 1,02 \u00d7 (palabras/oraciones). Una puntuación de 90\u2013100 significa muy fácil, 70\u201389 fácil, 50\u201369 moderado, 30\u201349 difícil y 0\u201329 muy difícil.',
        answerSchemaText: 'El Flesch Reading Ease (0\u2013100) mide la legibilidad. Para español se usa Fernández-Huerta. Mayor puntuación = texto más fácil.',
      },
      {
        question: '\u00bfCómo se calcula el tiempo de habla?',
        answer:
          'El tiempo de habla se estima dividiendo el número de palabras por 130 \u2013 la velocidad promedio de habla en presentaciones. Es más lento que las 200 palabras por minuto del tiempo de lectura, porque hablar incluye pausas naturales, énfasis y respiración.',
        answerSchemaText: 'El tiempo de habla se calcula a 130 palabras por minuto, el promedio para presentaciones.',
      },
      {
        question: '\u00bfQué tan preciso es el contador de sílabas?',
        answer:
          'La herramienta usa heurísticas específicas del español que reconocen diptongos (ai, ei, oi, au, eu), hiatos y reglas de silabificación del castellano. El conteo es aproximado pero suficiente para puntuaciones de legibilidad y análisis de texto.',
        answerSchemaText: 'El contador usa heurísticas del español que reconocen diptongos e hiatos. Aproximado pero suficiente para análisis.',
      },
    ],
  },
};

// ─── Apply updates to each locale ──────────────────────────────────────────────

const ALL_LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'nl', 'ro', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

for (const loc of ALL_LOCALES) {
  const fp = path.join('data', loc, 'tools', 'word-counter.json');
  if (!fs.existsSync(fp)) {
    console.log('SKIP (not found):', fp);
    continue;
  }

  const t = L[loc];
  if (!t) {
    console.log('SKIP (no translations):', loc);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(fp, 'utf8'));

  // 1. Metadata
  data.metadata.title = t.metaTitle;
  data.metadata.description = t.metaDesc;

  // 2. Hero
  data.hero.title = t.heroTitle;
  data.hero.description = t.heroDesc;

  // 3. Schema - software
  data.schemas.software.name = t.schemaName;
  data.schemas.software.alternateName = t.schemaAltNames;
  data.schemas.software.description = t.schemaDesc;
  data.schemas.software.featureList = t.schemaFeatures;

  // 4. Schema - howTo
  data.schemas.howTo.description = t.howToDesc;
  // Update step 2 text
  if (data.schemas.howTo.steps && data.schemas.howTo.steps.length >= 2) {
    data.schemas.howTo.steps[1].text = t.howToStep2;
  }

  // 5. ContentBlocks - find and update each section
  for (let i = 0; i < data.contentBlocks.length; i++) {
    const block = data.contentBlocks[i];

    // sectionBasic (intro)
    if (block.type === 'sectionBasic' && block.html) {
      block.html = t.sectionBasicHtml;
    }

    // Metrics section
    if (block.type === 'sectionSteps' && block.items && block.items.length >= 7 && block.items.length <= 11 && block.items[0] && block.items[0].icon === 'RiText') {
      block.title = t.metricsTitle;
      block.description = t.metricsDesc;
      block.items = t.metricItems;
    }

    // Tools section (10 formatting tools)
    if (block.type === 'sectionSteps' && block.items && block.items.length === 10 && block.items[0] && block.items[0].icon === 'RiArrowUpLine') {
      block.items = t.toolItems;
    }

    // "Who is this for" section
    if (
      block.type === 'sectionSteps' &&
      block.items &&
      block.items.length === 6 &&
      block.items[0] &&
      block.items[0].icon === 'RiEditLine' &&
      block.items[1] &&
      block.items[1].icon === 'RiBloggerLine'
    ) {
      block.title = t.whoTitle;
      block.description = t.whoDesc;
      block.items = t.whoItems;
    }

    // "What makes this special" section
    if (block.type === 'sectionSteps' && block.items && block.items.length === 6 && block.items[0] && block.items[0].icon === 'RiBarChartLine') {
      block.title = t.specialTitle;
      block.items = t.specialItems;
    }

    // FAQ section
    if (block.type === 'faq' && block.items) {
      block.items = t.faqItems;
    }

    // How to use steps - update step 2
    if (block.type === 'sectionSteps' && block.grid === 'four' && block.items && block.items.length === 4 && block.items[0] && block.items[0].icon === 'RiFileTextLine') {
      block.items[1].description = t.howToStep2;
    }
  }

  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated:', fp);
}

console.log('Done. Updated locales:', Object.keys(L).join(', '));
console.log('Remaining locales need translations added to the script: fr, pt, it, nl, ro, hu, cs, sv, da, no, fi, el');
