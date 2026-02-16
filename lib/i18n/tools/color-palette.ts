import type { Locale } from '@/lib/LocaleContext';

export const ui = {
  pl: {
    selectBaseColor: 'Wybierz kolor bazowy',
    updateColor: 'Zaktualizuj kolor',
    randomColor: 'Losowy kolor',
    currentBaseColor: 'Aktualny kolor bazowy',
    baseColorHelper: 'Na tym kolorze opierają się wszystkie palety poniżej.',
    colorPreview: 'Podgląd koloru',
    copied: 'Skopiowano',
    copy: 'Kopiuj',
    generatedPalettes: 'Wygenerowane palety kolorów',
    colorReadError: 'Nie udało się odczytać koloru. Upewnij się, że używasz formatu',
    example: 'np.',
    enterValidColor: 'Wpisz poprawny kolor HEX, aby wygenerować palety. Wszystkie obliczenia są wykonywane lokalnie w Twojej przeglądarce.',
    palettes: {
      monochromatic: {
        label: 'Paleta monochromatyczna',
        description: 'Wszystkie kolory mają ten sam odcień (H), a różnią się głównie jasnością (L) w przestrzeni HSL.',
      },
      analogous: {
        label: 'Paleta analogiczna',
        description: 'Kolory o zbliżonym odcieniu - tutaj od ok. -30° do +30° wokół koloru bazowego na klasycznym kole barw (np. Ittena).',
      },
      complementary: {
        label: 'Paleta komplementarna',
        description: 'Kolor bazowy i jego dopełnienie przesunięte o 180° na kole barw - jeden z podstawowych kontrastów barwnych opisanych m.in. przez Johannesa Ittena.',
      },
      triadic: {
        label: 'Paleta triadyczna',
        description: 'Trzy odcienie oddalone od siebie o 120° na kole barw (wierzchołki trójkąta równobocznego) - geometria często wykorzystywana w brandingu i projektach inspirowanych Bauhausem.',
      },
      splitComplementary: {
        label: 'Paleta split-complementary',
        description:
          'Odmiana palety komplementarnej - zamiast jednego dopełnienia (180°) używamy dwóch kolorów przesuniętych o ok. ±30° od dopełnienia, co zmniejsza napięcie wizualne przy zachowaniu silnego kontrastu.',
      },
      softPastel: {
        label: 'Paleta pastelowa',
        description: 'Ten sam odcień z obniżonym nasyceniem i podniesioną jasnością - przesunięcie w stronę środka i górnej części przestrzeni HSL, które daje miękkie, „kremowe" kolory.',
      },
      deepDark: {
        label: 'Paleta ciemna',
        description: 'Ta sama barwa przy wysokim nasyceniu (S) i obniżonej jasności (L) - przesunięcie w dół osi lightness, które daje głębokie kolory typowe dla dark mode i mocnych akcentów.',
      },
      materialTonal: {
        label: 'Paleta tonalna (inspirowana Material Design)',
        description: 'Kilka kroków jasności jednego odcienia - zróżnicowane L i umiarkowane S, zbliżone do tonalnych zakresów znanych z wytycznych Material Design (np. 50-900).',
      },
      appleMinimal: {
        label: 'Paleta minimalistyczna (inspirowana Apple)',
        description: 'Jeden mocny akcent kolorystyczny i kilka bardzo jasnych, miękkich neutrali - układ typowy dla interfejsów z dużą ilością bieli i subtelnych cieni.',
      },
    },
  },
  en: {
    selectBaseColor: 'Select base color',
    updateColor: 'Update color',
    randomColor: 'Random color',
    currentBaseColor: 'Current base color',
    baseColorHelper: 'All palettes below are based on this color.',
    colorPreview: 'Color preview',
    copied: 'Copied',
    copy: 'Copy',
    generatedPalettes: 'Generated color palettes',
    colorReadError: 'Could not read the color. Make sure you are using the format',
    example: 'e.g.',
    enterValidColor: 'Enter a valid HEX color to generate palettes. All calculations are performed locally in your browser.',
    palettes: {
      monochromatic: {
        label: 'Monochromatic palette',
        description: 'All colors share the same hue (H), differing mainly in lightness (L) in the HSL color space.',
      },
      analogous: {
        label: 'Analogous palette',
        description: 'Colors with similar hues - from about -30° to +30° around the base color on the classic color wheel (e.g. Itten).',
      },
      complementary: {
        label: 'Complementary palette',
        description: 'The base color and its complement shifted by 180° on the color wheel - one of the fundamental color contrasts described by Johannes Itten.',
      },
      triadic: {
        label: 'Triadic palette',
        description: 'Three hues spaced 120° apart on the color wheel (vertices of an equilateral triangle) - a geometry often used in branding and Bauhaus-inspired designs.',
      },
      splitComplementary: {
        label: 'Split-complementary palette',
        description:
          'A variation of the complementary palette - instead of one complement (180°), two colors shifted by about ±30° from the complement are used, reducing visual tension while maintaining strong contrast.',
      },
      softPastel: {
        label: 'Pastel palette',
        description: 'The same hue with reduced saturation and increased lightness - a shift toward the center and top of the HSL space, producing soft, "creamy" colors.',
      },
      deepDark: {
        label: 'Dark palette',
        description: 'The same hue with high saturation (S) and reduced lightness (L) - a downward shift on the lightness axis, producing deep colors typical of dark mode and bold accents.',
      },
      materialTonal: {
        label: 'Tonal palette (Material Design inspired)',
        description: 'Several lightness steps of one hue - varied L and moderate S, similar to tonal ranges known from Material Design guidelines (e.g. 50-900).',
      },
      appleMinimal: {
        label: 'Minimalist palette (Apple inspired)',
        description: 'One bold color accent and several very light, soft neutrals - a layout typical of interfaces with plenty of white space and subtle shadows.',
      },
    },
  },
  de: {
    selectBaseColor: 'Basisfarbe auswählen',
    updateColor: 'Farbe aktualisieren',
    randomColor: 'Zufällige Farbe',
    currentBaseColor: 'Aktuelle Basisfarbe',
    baseColorHelper: 'Alle unten stehenden Paletten basieren auf dieser Farbe.',
    colorPreview: 'Farbvorschau',
    copied: 'Kopiert',
    copy: 'Kopieren',
    generatedPalettes: 'Generierte Farbpaletten',
    colorReadError: 'Die Farbe konnte nicht gelesen werden. Stellen Sie sicher, dass Sie das Format verwenden',
    example: 'z. B.',
    enterValidColor: 'Geben Sie eine gültige HEX-Farbe ein, um Paletten zu generieren. Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.',
    palettes: {
      monochromatic: {
        label: 'Monochromatische Palette',
        description: 'Alle Farben haben denselben Farbton (H) und unterscheiden sich hauptsächlich in der Helligkeit (L) im HSL-Farbraum.',
      },
      analogous: {
        label: 'Analoge Palette',
        description: 'Farben mit ähnlichen Farbtönen - von ca. -30° bis +30° um die Basisfarbe auf dem klassischen Farbkreis (z. B. Itten).',
      },
      complementary: {
        label: 'Komplementärpalette',
        description: 'Die Basisfarbe und ihr Komplement, um 180° auf dem Farbkreis verschoben - einer der grundlegenden Farbkontraste, beschrieben u. a. von Johannes Itten.',
      },
      triadic: {
        label: 'Triadische Palette',
        description:
          'Drei Farbtöne im Abstand von 120° auf dem Farbkreis (Eckpunkte eines gleichseitigen Dreiecks) - eine Geometrie, die häufig im Branding und Bauhaus-inspirierten Designs verwendet wird.',
      },
      splitComplementary: {
        label: 'Split-Komplementärpalette',
        description:
          'Eine Variante der Komplementärpalette - anstelle eines Komplements (180°) werden zwei Farben verwendet, die ca. ±30° vom Komplement verschoben sind, was die visuelle Spannung reduziert und gleichzeitig starken Kontrast beibehält.',
      },
      softPastel: {
        label: 'Pastellpalette',
        description: 'Derselbe Farbton mit reduzierter Sättigung und erhöhter Helligkeit - eine Verschiebung zur Mitte und zum oberen Bereich des HSL-Raums, die weiche, „cremige" Farben erzeugt.',
      },
      deepDark: {
        label: 'Dunkle Palette',
        description:
          'Derselbe Farbton mit hoher Sättigung (S) und reduzierter Helligkeit (L) - eine Verschiebung nach unten auf der Helligkeitsachse, die tiefe Farben erzeugt, typisch für Dark Mode und kräftige Akzente.',
      },
      materialTonal: {
        label: 'Tonale Palette (Material Design inspiriert)',
        description: 'Mehrere Helligkeitsstufen eines Farbtons - variiertes L und moderates S, ähnlich den tonalen Bereichen aus den Material-Design-Richtlinien (z. B. 50-900).',
      },
      appleMinimal: {
        label: 'Minimalistische Palette (Apple inspiriert)',
        description: 'Ein kräftiger Farbakzent und mehrere sehr helle, weiche Neutraltöne - ein Layout, typisch für Oberflächen mit viel Weißraum und dezenten Schatten.',
      },
    },
  },
  es: {
    selectBaseColor: 'Seleccionar color base',
    updateColor: 'Actualizar color',
    randomColor: 'Color aleatorio',
    currentBaseColor: 'Color base actual',
    baseColorHelper: 'Todas las paletas de abajo se basan en este color.',
    colorPreview: 'Vista previa del color',
    copied: 'Copiado',
    copy: 'Copiar',
    generatedPalettes: 'Paletas de colores generadas',
    colorReadError: 'No se pudo leer el color. Asegúrese de usar el formato',
    example: 'p. ej.',
    enterValidColor: 'Introduzca un color HEX válido para generar paletas. Todos los cálculos se realizan localmente en su navegador.',
    palettes: {
      monochromatic: {
        label: 'Paleta monocromática',
        description: 'Todos los colores comparten el mismo tono (H), variando principalmente en luminosidad (L) en el espacio de color HSL.',
      },
      analogous: {
        label: 'Paleta análoga',
        description: 'Colores con tonos similares, de aprox. -30° a +30° alrededor del color base en el círculo cromático clásico (p. ej. Itten).',
      },
      complementary: {
        label: 'Paleta complementaria',
        description: 'El color base y su complemento desplazado 180° en el círculo cromático, uno de los contrastes de color fundamentales descritos por Johannes Itten.',
      },
      triadic: {
        label: 'Paleta triádica',
        description: 'Tres tonos separados 120° en el círculo cromático (vértices de un triángulo equilátero), una geometría usada frecuentemente en branding y diseños inspirados en la Bauhaus.',
      },
      splitComplementary: {
        label: 'Paleta complementaria dividida',
        description:
          'Una variación de la paleta complementaria: en lugar de un complemento (180°), se usan dos colores desplazados aprox. ±30° del complemento, reduciendo la tensión visual y manteniendo un fuerte contraste.',
      },
      softPastel: {
        label: 'Paleta pastel',
        description: 'El mismo tono con saturación reducida y luminosidad aumentada, un desplazamiento hacia el centro y la parte superior del espacio HSL que produce colores suaves y "cremosos".',
      },
      deepDark: {
        label: 'Paleta oscura',
        description:
          'El mismo tono con alta saturación (S) y luminosidad reducida (L), un desplazamiento hacia abajo en el eje de luminosidad que produce colores profundos típicos del modo oscuro y acentos intensos.',
      },
      materialTonal: {
        label: 'Paleta tonal (inspirada en Material Design)',
        description: 'Varios pasos de luminosidad de un mismo tono, con L variada y S moderada, similar a los rangos tonales de las directrices de Material Design (p. ej. 50-900).',
      },
      appleMinimal: {
        label: 'Paleta minimalista (inspirada en Apple)',
        description: 'Un acento de color llamativo y varios neutros muy claros y suaves, un diseño típico de interfaces con mucho espacio en blanco y sombras sutiles.',
      },
    },
  },
  fr: {
    selectBaseColor: 'Sélectionner la couleur de base',
    updateColor: 'Mettre à jour la couleur',
    randomColor: 'Couleur aléatoire',
    currentBaseColor: 'Couleur de base actuelle',
    baseColorHelper: 'Toutes les palettes ci-dessous reposent sur cette couleur.',
    colorPreview: 'Aperçu de la couleur',
    copied: 'Copié',
    copy: 'Copier',
    generatedPalettes: 'Palettes de couleurs générées',
    colorReadError: "Impossible de lire la couleur. Assurez-vous d'utiliser le format",
    example: 'ex.',
    enterValidColor: 'Saisissez une couleur HEX valide pour générer les palettes. Tous les calculs sont effectués localement dans votre navigateur.',
    palettes: {
      monochromatic: {
        label: 'Palette monochromatique',
        description: "Toutes les couleurs partagent la même teinte (H) et varient principalement en luminosité (L) dans l'espace colorimétrique HSL.",
      },
      analogous: {
        label: 'Palette analogue',
        description: "Des couleurs de teintes proches, d'environ -30° à +30° autour de la couleur de base sur le cercle chromatique classique (ex. : Itten).",
      },
      complementary: {
        label: 'Palette complémentaire',
        description: "La couleur de base et son complément décalé de 180° sur le cercle chromatique, l'un des contrastes fondamentaux décrits par Johannes Itten.",
      },
      triadic: {
        label: 'Palette triadique',
        description:
          "Trois teintes séparées de 120° sur le cercle chromatique (sommets d'un triangle équilatéral), une géométrie fréquemment utilisée en branding et dans les designs inspirés du Bauhaus.",
      },
      splitComplementary: {
        label: 'Palette complémentaire divisée',
        description:
          "Une variante de la palette complémentaire : au lieu d'un complément (180°), on utilise deux couleurs décalées d'environ ±30° du complément, réduisant la tension visuelle tout en conservant un fort contraste.",
      },
      softPastel: {
        label: 'Palette pastel',
        description:
          'La même teinte avec une saturation réduite et une luminosité augmentée, un déplacement vers le centre et le haut de l\'espace HSL qui produit des couleurs douces et "crémeuses".',
      },
      deepDark: {
        label: 'Palette sombre',
        description:
          "La même teinte avec une saturation élevée (S) et une luminosité réduite (L)  un déplacement vers le bas sur l'axe de luminosité, produisant des couleurs profondes typiques du mode sombre et des accents intenses.",
      },
      materialTonal: {
        label: 'Palette tonale (inspirée Material Design)',
        description: "Plusieurs niveaux de luminosité d'une même teinte  L variée et S modérée, similaire aux plages tonales des directives Material Design (ex. : 50-900).",
      },
      appleMinimal: {
        label: 'Palette minimaliste (inspirée Apple)',
        description: "Un accent de couleur vif et plusieurs neutres très clairs et doux, un agencement typique des interfaces avec beaucoup d'espace blanc et des ombres subtiles.",
      },
    },
  },
  pt: {
    selectBaseColor: 'Selecionar cor base',
    updateColor: 'Atualizar cor',
    randomColor: 'Cor aleatória',
    currentBaseColor: 'Cor base atual',
    baseColorHelper: 'Todas as paletas abaixo baseiam-se nesta cor.',
    colorPreview: 'Pré-visualização da cor',
    copied: 'Copiado',
    copy: 'Copiar',
    generatedPalettes: 'Paletas de cores geradas',
    colorReadError: 'Não foi possível ler a cor. Certifique-se de que utiliza o formato',
    example: 'ex.',
    enterValidColor: 'Introduza uma cor HEX válida para gerar as paletas. Todos os cálculos são efetuados localmente no seu navegador.',
    palettes: {
      monochromatic: {
        label: 'Paleta monocromática',
        description: 'Todas as cores partilham a mesma tonalidade (H) e variam principalmente em luminosidade (L) no espaço de cor HSL.',
      },
      analogous: {
        label: 'Paleta análoga',
        description: 'Cores de tonalidades próximas, de aproximadamente -30° a +30° em torno da cor base no círculo cromático clássico (ex.: Itten).',
      },
      complementary: {
        label: 'Paleta complementar',
        description: 'A cor base e o seu complemento deslocado 180° no círculo cromático, um dos contrastes fundamentais descritos por Johannes Itten.',
      },
      triadic: {
        label: 'Paleta triádica',
        description:
          'Três tonalidades separadas por 120° no círculo cromático (vértices de um triângulo equilátero), uma geometria frequentemente utilizada em branding e designs inspirados na Bauhaus.',
      },
      splitComplementary: {
        label: 'Paleta complementar dividida',
        description:
          'Uma variante da paleta complementar: em vez de um complemento (180°), utilizam-se duas cores deslocadas de aproximadamente ±30° do complemento, reduzindo a tensão visual mas mantendo um forte contraste.',
      },
      softPastel: {
        label: 'Paleta pastel',
        description: 'A mesma tonalidade com saturação reduzida e luminosidade aumentada, um deslocamento para o centro e o topo do espaço HSL que produz cores suaves e "cremosas".',
      },
      deepDark: {
        label: 'Paleta escura',
        description:
          'A mesma tonalidade com saturação elevada (S) e luminosidade reduzida (L)  um deslocamento para baixo no eixo de luminosidade, produzindo cores profundas típicas do modo escuro e acentos intensos.',
      },
      materialTonal: {
        label: 'Paleta tonal (inspirada em Material Design)',
        description: 'Vários níveis de luminosidade de uma mesma tonalidade  L variada e S moderada, semelhante às gamas tonais das diretrizes Material Design (ex.: 50-900).',
      },
      appleMinimal: {
        label: 'Paleta minimalista (inspirada em Apple)',
        description: 'Um acento de cor vivo e vários neutros muito claros e suaves, uma composição típica de interfaces com muito espaço branco e sombras subtis.',
      },
    },
  },
  it: {
    selectBaseColor: 'Seleziona colore base',
    updateColor: 'Aggiorna colore',
    randomColor: 'Colore casuale',
    currentBaseColor: 'Colore base attuale',
    baseColorHelper: 'Tutte le palette sottostanti si basano su questo colore.',
    colorPreview: 'Anteprima colore',
    copied: 'Copiato',
    copy: 'Copia',
    generatedPalettes: 'Palette di colori generate',
    colorReadError: 'Impossibile leggere il colore. Assicurati di usare il formato',
    example: 'es.',
    enterValidColor: 'Inserisci un colore HEX valido per generare le palette. Tutti i calcoli vengono eseguiti localmente nel tuo browser.',
    palettes: {
      monochromatic: {
        label: 'Palette monocromatica',
        description: 'Tutti i colori hanno la stessa tonalità (H) e variano principalmente in luminosità (L) nello spazio colore HSL.',
      },
      analogous: {
        label: 'Palette analoga',
        description: 'Colori con tonalità simili, da circa -30 a +30 intorno al colore base sulla ruota dei colori classica (es. Itten).',
      },
      complementary: {
        label: 'Palette complementare',
        description: 'Il colore base e il suo complemento spostato di 180 sulla ruota dei colori  uno dei contrasti fondamentali descritti da Johannes Itten.',
      },
      triadic: {
        label: 'Palette triadica',
        description: 'Tre tonalità separate da 120 sulla ruota dei colori (vertici di un triangolo equilatero)  una geometria spesso utilizzata nel branding e nei design ispirati al Bauhaus.',
      },
      splitComplementary: {
        label: 'Palette complementare divisa',
        description:
          'Una variante della palette complementare: invece di un complemento (180), si usano due colori spostati di circa \u00b130 dal complemento, riducendo la tensione visiva ma mantenendo un forte contrasto.',
      },
      softPastel: {
        label: 'Palette pastello',
        description:
          'La stessa tonalità con saturazione ridotta e luminosità aumentata  uno spostamento verso il centro e la parte alta dello spazio HSL che produce colori morbidi e \u201ccremosi\u201d.',
      },
      deepDark: {
        label: 'Palette scura',
        description:
          'La stessa tonalità con alta saturazione (S) e luminosità ridotta (L)  uno spostamento verso il basso dell\u2019asse di luminosità, che produce colori profondi tipici della dark mode e degli accenti forti.',
      },
      materialTonal: {
        label: 'Palette tonale (ispirata a Material Design)',
        description: 'Diversi livelli di luminosità di una stessa tonalità  L variata e S moderata, simile alle gamme tonali delle linee guida Material Design (es. 50-900).',
      },
      appleMinimal: {
        label: 'Palette minimalista (ispirata ad Apple)',
        description: 'Un accento di colore vivace e diversi neutri molto chiari e delicati, una composizione tipica di interfacce con molto spazio bianco e ombre sottili.',
      },
    },
  },
  ro: {
    selectBaseColor: 'Selectați culoarea de bază',
    updateColor: 'Actualizați culoarea',
    randomColor: 'Culoare aleatorie',
    currentBaseColor: 'Culoarea de bază actuală',
    baseColorHelper: 'Toate paletele de mai jos se bazează pe această culoare.',
    colorPreview: 'Previzualizare culoare',
    copied: 'Copiat',
    copy: 'Copiază',
    generatedPalettes: 'Palete de culori generate',
    colorReadError: 'Nu s-a putut citi culoarea. Asigurați-vă că utilizați formatul',
    example: 'ex.',
    enterValidColor: 'Introduceți o culoare HEX validă pentru a genera palete. Toate calculele sunt efectuate local în browser.',
    palettes: {
      monochromatic: {
        label: 'Paletă monocromatică',
        description: 'Toate culorile au aceeași nuanță (H) și variază în principal în luminozitate (L) în spațiul de culoare HSL.',
      },
      analogous: {
        label: 'Paletă analogă',
        description: 'Culori cu nuanțe similare, de la aproximativ -30 la +30 în jurul culorii de bază pe roata de culori clasică (ex. Itten).',
      },
      complementary: {
        label: 'Paletă complementară',
        description: 'Culoarea de bază și complementul său deplasat cu 180 pe roata de culori \u2013 unul dintre contrastele fundamentale descrise de Johannes Itten.',
      },
      triadic: {
        label: 'Paletă triadică',
        description: 'Trei nuanțe separate la 120 pe roata de culori (vârfurile unui triunghi echilateral) \u2013 o geometrie folosită frecvent în branding și design inspirat de Bauhaus.',
      },
      splitComplementary: {
        label: 'Paletă complementară divizată',
        description:
          'O variantă a paletei complementare: în loc de un complement (180), se folosesc două culori deplasate cu aproximativ \u00b130 față de complement, reducând tensiunea vizuală dar menținând un contrast puternic.',
      },
      softPastel: {
        label: 'Paletă pastel',
        description:
          'Aceeași nuanță cu saturație redusă și luminozitate crescută \u2013 o deplasare spre centrul și partea superioară a spațiului HSL care produce culori moi și \u201ccremoase\u201d.',
      },
      deepDark: {
        label: 'Paletă întunecată',
        description:
          'Aceeași nuanță cu saturație ridicată (S) și luminozitate redusă (L) \u2013 o deplasare spre partea inferioară a axei de luminozitate, care produce culori profunde tipice modului întunecat și accentelor puternice.',
      },
      materialTonal: {
        label: 'Paletă tonală (inspirată de Material Design)',
        description: 'Diferite niveluri de luminozitate ale aceleiași nuanțe \u2013 L variată și S moderată, similară cu gamele tonale din ghidurile Material Design (ex. 50-900).',
      },
      appleMinimal: {
        label: 'Paletă minimalistă (inspirată de Apple)',
        description: 'Un accent de culoare viu și mai multe nuanțe neutre foarte deschise și delicate, o compoziție tipică interfețelor cu mult spațiu alb și umbre subtile.',
      },
    },
  },
  nl: {
    selectBaseColor: 'Selecteer basiskleur',
    updateColor: 'Kleur bijwerken',
    randomColor: 'Willekeurige kleur',
    currentBaseColor: 'Huidige basiskleur',
    baseColorHelper: 'Alle onderstaande paletten zijn gebaseerd op deze kleur.',
    colorPreview: 'Kleurvoorbeeld',
    copied: 'Gekopieerd',
    copy: 'Kopiëren',
    generatedPalettes: 'Gegenereerde kleurpaletten',
    colorReadError: 'Kan de kleur niet lezen. Zorg ervoor dat u het formaat gebruikt',
    example: 'bijv.',
    enterValidColor: 'Voer een geldige HEX-kleur in om paletten te genereren. Alle berekeningen worden lokaal in uw browser uitgevoerd.',
    palettes: {
      monochromatic: {
        label: 'Monochromatisch palet',
        description: 'Alle kleuren hebben dezelfde tint (H) en variëren voornamelijk in helderheid (L) in de HSL-kleurruimte.',
      },
      analogous: {
        label: 'Analoog palet',
        description: 'Kleuren met vergelijkbare tinten, van ongeveer -30 tot +30 rond de basiskleur op het klassieke kleurenwiel (bijv. Itten).',
      },
      complementary: {
        label: 'Complementair palet',
        description: 'De basiskleur en het complement verschoven met 180 op het kleurenwiel \u2013 een van de fundamentele contrasten beschreven door Johannes Itten.',
      },
      triadic: {
        label: 'Triadisch palet',
        description:
          'Drie tinten gescheiden door 120 op het kleurenwiel (hoekpunten van een gelijkzijdige driehoek) \u2013 een geometrie die vaak wordt gebruikt in branding en Bauhaus-geïnspireerd design.',
      },
      splitComplementary: {
        label: 'Gesplitst complementair palet',
        description:
          'Een variant van het complementaire palet: in plaats van één complement (180), worden twee kleuren gebruikt die ongeveer \u00b130 van het complement zijn verschoven, waardoor de visuele spanning wordt verminderd maar een sterk contrast behouden blijft.',
      },
      softPastel: {
        label: 'Pastelpalet',
        description:
          'Dezelfde tint met verminderde verzadiging en verhoogde helderheid \u2013 een verschuiving naar het midden en de bovenkant van de HSL-ruimte die zachte, \u201ccremige\u201d kleuren oplevert.',
      },
      deepDark: {
        label: 'Donker palet',
        description:
          'Dezelfde tint met hoge verzadiging (S) en verminderde helderheid (L) \u2013 een verschuiving naar de onderkant van de helderheidas, die diepe kleuren oplevert typisch voor dark mode en sterke accenten.',
      },
      materialTonal: {
        label: 'Tonaal palet (geïnspireerd door Material Design)',
        description: 'Verschillende helderheidsniveaus van dezelfde tint \u2013 gevarieerde L en gematigde S, vergelijkbaar met de tonale bereiken van de Material Design-richtlijnen (bijv. 50-900).',
      },
      appleMinimal: {
        label: 'Minimalistisch palet (geïnspireerd door Apple)',
        description: 'Een levendig kleuraccent en meerdere zeer lichte en zachte neutrale tinten, een compositie typisch voor interfaces met veel witruimte en subtiele schaduwen.',
      },
    },
  },
  hu: {
    selectBaseColor: 'Válassza ki az alapszínt',
    updateColor: 'Szín frissítése',
    randomColor: 'Véletlenszerű szín',
    currentBaseColor: 'Jelenlegi alapszín',
    baseColorHelper: 'Az összes alábbi paletta ezen a színen alapul.',
    colorPreview: 'Szín előnézet',
    copied: 'Másolva',
    copy: 'Másolás',
    generatedPalettes: 'Generált színpaletták',
    colorReadError: 'Nem sikerült beolvasni a színt. Győződjön meg róla, hogy a formátumot használja',
    example: 'pl.',
    enterValidColor: 'Adjon meg egy érvényes HEX színt a paletták generálásához. Minden számítás helyileg, a böngészőjében történik.',
    palettes: {
      monochromatic: {
        label: 'Monokromatikus paletta',
        description: 'Minden szín ugyanazt az árnyalatot (H) tartalmazza, és főként a világosságban (L) különbözik a HSL színtérben.',
      },
      analogous: {
        label: 'Analóg paletta',
        description: 'Hasonló árnyalatú színek, körülbelül -30-tól +30-ig az alapszín körül a klasszikus színkörön (pl. Itten).',
      },
      complementary: {
        label: 'Komplementer paletta',
        description: 'Az alapszín és 180-kal eltolt komplementere a színkörön \u2013 az egyik alapvető kontraszt, amelyet Johannes Itten írt le.',
      },
      triadic: {
        label: 'Triádikus paletta',
        description: 'Három árnyalat 120-onként elválasztva a színkörön (egyenlő oldalú háromszög csúcsai) \u2013 a brandingnél és a Bauhaus-ihletésű tervezésnél gyakran használt geometria.',
      },
      splitComplementary: {
        label: 'Osztott komplementer paletta',
        description:
          'A komplementer paletta változata: egy komplement (180) helyett két színt használnak, amelyek körülbelül \u00b130-kal el vannak tolva a komplementertől, csökkentve a vizuális feszültséget, de megtartva az erős kontrasztot.',
      },
      softPastel: {
        label: 'Pasztell paletta',
        description: 'Ugyanaz az árnyalat csökkentett telítettséggel és megnövelt világossággal \u2013 eltolódás a HSL tér közepe és teteje felé, ami lágy, \u201ekrémes\u201d színeket eredményez.',
      },
      deepDark: {
        label: 'Sötét paletta',
        description:
          'Ugyanaz az árnyalat magas telítettséggel (S) és csökkentett világossággal (L) \u2013 eltolódás a világossági tengely alja felé, ami mély színeket eredményez, jellemzően sötét módhoz és erős hangsúlyokhoz.',
      },
      materialTonal: {
        label: 'Tonális paletta (Material Design ihlette)',
        description: 'Ugyanazon árnyalat különböző világossági szintjei \u2013 változó L és mérsékelt S, hasonlóan a Material Design irányelvek tonális tartományaihoz (pl. 50-900).',
      },
      appleMinimal: {
        label: 'Minimalista paletta (Apple ihlette)',
        description: 'Egy élénk színhangsúly és több nagyon világos és finom semleges tónus, jellemző összetétel a sok fehér térrel és finom árnyékokkal rendelkező felületeknél.',
      },
    },
  },
  id: {
    selectBaseColor: 'Pilih warna dasar',
    updateColor: 'Perbarui warna',
    randomColor: 'Warna acak',
    currentBaseColor: 'Warna dasar saat ini',
    baseColorHelper: 'Semua palet di bawah didasarkan pada warna ini.',
    colorPreview: 'Pratinjau warna',
    copied: 'Disalin',
    copy: 'Salin',
    generatedPalettes: 'Palet warna yang dihasilkan',
    colorReadError: 'Tidak dapat membaca warna. Pastikan Anda menggunakan format',
    example: 'mis.',
    enterValidColor: 'Masukkan warna HEX yang valid untuk menghasilkan palet. Semua perhitungan dilakukan secara lokal di browser Anda.',
    palettes: {
      monochromatic: {
        label: 'Palet monokromatik',
        description: 'Semua warna memiliki hue (H) yang sama, berbeda terutama dalam kecerahan (L) di ruang warna HSL.',
      },
      analogous: {
        label: 'Palet analogus',
        description: 'Warna dengan hue serupa – dari sekitar -30° hingga +30° di sekitar warna dasar pada roda warna klasik (mis. Itten).',
      },
      complementary: {
        label: 'Palet komplementer',
        description: 'Warna dasar dan komplementernya yang digeser 180° pada roda warna – salah satu kontras warna fundamental yang dijelaskan oleh Johannes Itten.',
      },
      triadic: {
        label: 'Palet triadik',
        description: 'Tiga hue berjarak 120° pada roda warna (titik sudut segitiga sama sisi) – geometri yang sering digunakan dalam branding dan desain bergaya Bauhaus.',
      },
      splitComplementary: {
        label: 'Palet split-komplementer',
        description:
          'Variasi palet komplementer – alih-alih satu komplemen (180°), dua warna yang digeser sekitar ±30° dari komplemen digunakan, mengurangi ketegangan visual sambil mempertahankan kontras kuat.',
      },
      softPastel: {
        label: 'Palet pastel',
        description: 'Hue yang sama dengan saturasi berkurang dan kecerahan meningkat – pergeseran ke tengah dan atas ruang HSL, menghasilkan warna lembut dan "krem".',
      },
      deepDark: {
        label: 'Palet gelap',
        description: 'Hue yang sama dengan saturasi tinggi (S) dan kecerahan rendah (L) – pergeseran ke bawah pada sumbu kecerahan, menghasilkan warna dalam khas mode gelap dan aksen berani.',
      },
      materialTonal: {
        label: 'Palet tonal (terinspirasi Material Design)',
        description: 'Beberapa tingkat kecerahan dari satu hue – L bervariasi dan S moderat, mirip rentang tonal dari pedoman Material Design (mis. 50-900).',
      },
      appleMinimal: {
        label: 'Palet minimalis (terinspirasi Apple)',
        description: 'Satu aksen warna mencolok dan beberapa netral sangat terang dan lembut – tata letak khas antarmuka dengan banyak ruang putih dan bayangan halus.',
      },
    },
  },
  vi: {
    selectBaseColor: 'Chọn màu cơ sở',
    updateColor: 'Cập nhật màu',
    randomColor: 'Màu ngẫu nhiên',
    currentBaseColor: 'Màu cơ sở hiện tại',
    baseColorHelper: 'Tất cả bảng màu bên dưới dựa trên màu này.',
    colorPreview: 'Xem trước màu',
    copied: 'Đã sao chép',
    copy: 'Sao chép',
    generatedPalettes: 'Bảng màu đã tạo',
    colorReadError: 'Không thể đọc màu. Hãy đảm bảo bạn sử dụng định dạng',
    example: 'ví dụ',
    enterValidColor: 'Nhập màu HEX hợp lệ để tạo bảng màu. Tất cả tính toán được thực hiện cục bộ trong trình duyệt của bạn.',
    palettes: {
      monochromatic: {
        label: 'Bảng màu đơn sắc',
        description: 'Tất cả màu có cùng sắc độ (H), khác nhau chủ yếu về độ sáng (L) trong không gian màu HSL.',
      },
      analogous: {
        label: 'Bảng màu tương tự',
        description: 'Các màu có sắc độ tương tự – từ khoảng -30° đến +30° quanh màu cơ sở trên bánh xe màu cổ điển (ví dụ Itten).',
      },
      complementary: {
        label: 'Bảng màu bổ sung',
        description: 'Màu cơ sở và màu bổ sung dịch chuyển 180° trên bánh xe màu – một trong những đối lập màu cơ bản được mô tả bởi Johannes Itten.',
      },
      triadic: {
        label: 'Bảng màu bộ ba',
        description: 'Ba sắc độ cách nhau 120° trên bánh xe màu (đỉnh của tam giác đều) – hình học thường dùng trong branding và thiết kế phong cách Bauhaus.',
      },
      splitComplementary: {
        label: 'Bảng màu bổ sung chia tách',
        description:
          'Biến thể của bảng màu bổ sung – thay vì một màu bổ sung (180°), hai màu dịch chuyển khoảng ±30° từ màu bổ sung được sử dụng, giảm căng thẳng thị giác nhưng vẫn giữ được độ tương phản mạnh.',
      },
      softPastel: {
        label: 'Bảng màu pastel',
        description: 'Cùng sắc độ với độ bão hòa giảm và độ sáng tăng – dịch chuyển về giữa và đỉnh của không gian HSL, tạo ra màu mềm, "kem".',
      },
      deepDark: {
        label: 'Bảng màu tối',
        description: 'Cùng sắc độ với độ bão hòa cao (S) và độ sáng thấp (L) – dịch chuyển xuống trên trục độ sáng, tạo ra màu sâu đặc trưng cho chế độ tối và điểm nhấn mạnh.',
      },
      materialTonal: {
        label: 'Bảng màu sắc độ (lấy cảm hứng Material Design)',
        description: 'Nhiều mức độ sáng của một sắc độ – L biến đổi và S vừa phải, tương tự phạm vi sắc độ trong hướng dẫn Material Design (ví dụ 50-900).',
      },
      appleMinimal: {
        label: 'Bảng màu tối giản (lấy cảm hứng Apple)',
        description: 'Một điểm nhấn màu nổi bật và nhiều tông trung tính rất sáng, nhẹ nhàng – bố cục đặc trưng của giao diện với nhiều khoảng trắng và bóng đổ tinh tế.',
      },
    },
  },
  tr: {
    selectBaseColor: 'Temel rengi seçin',
    updateColor: 'Rengi güncelle',
    randomColor: 'Rastgele renk',
    currentBaseColor: 'Mevcut temel renk',
    baseColorHelper: 'Aşağıdaki tüm paletler bu renge dayanmaktadır.',
    colorPreview: 'Renk önizlemesi',
    copied: 'Kopyalandı',
    copy: 'Kopyala',
    generatedPalettes: 'Oluşturulan renk paletleri',
    colorReadError: 'Renk okunamadı. Şu formatı kullandığınızdan emin olun',
    example: 'örn.',
    enterValidColor: 'Palet oluşturmak için geçerli bir HEX renk girin. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır.',
    palettes: {
      monochromatic: {
        label: 'Monokromatik palet',
        description: 'Tüm renkler aynı tonu (H) paylaşır, esas olarak HSL renk uzayında parlaklık (L) açısından farklılık gösterir.',
      },
      analogous: {
        label: 'Benzer palet',
        description: 'Benzer tonlara sahip renkler – klasik renk çarkında temel renk etrafında yaklaşık -30° ile +30° arası (Itten).',
      },
      complementary: {
        label: 'Tamamlayıcı palet',
        description: 'Temel renk ve renk çarkında 180° kaydırılmış tamamlayıcısı – Johannes Itten tarafından tanımlanan temel renk kontrastlarından biri.',
      },
      triadic: {
        label: 'Triadik palet',
        description: 'Renk çarkında 120° aralıkla üç ton (eşkenar üçgenin köşeleri) – marka kimliği ve Bauhaus esinli tasarımda sık kullanılan geometri.',
      },
      splitComplementary: {
        label: 'Bölünmüş tamamlayıcı palet',
        description:
          'Tamamlayıcı paletin bir varyasyonu – tek bir tamamlayıcı (180°) yerine, tamamlayıcıdan yaklaşık ±30° kaydırılmış iki renk kullanılır; görsel gerilimi azaltırken güçlü kontrasıtı korur.',
      },
      softPastel: {
        label: 'Pastel palet',
        description: 'Aynı ton, azaltılmış doygunluk ve artmış parlaklık ile – HSL uzayının ortasına ve üstüne doğru kayma, yumuşak, “kremsi” renkler üretir.',
      },
      deepDark: {
        label: 'Koyu palet',
        description: 'Aynı ton, yüksek doygunluk (S) ve düşük parlaklık (L) ile – parlaklık ekseninde aşağı kayma, karanlık mod ve cesur vurgular için tipik derin renkler üretir.',
      },
      materialTonal: {
        label: 'Tonal palet (Material Design esinli)',
        description: 'Bir tonun birkaç parlaklık adımı – değişken L ve ılımlı S, Material Design kılavuzlarındaki tonal aralıklara benzer (örn. 50-900).',
      },
      appleMinimal: {
        label: 'Minimalist palet (Apple esinli)',
        description: 'Bir cesur renk vurgusu ve çok açık, yumuşak nötr tonlar – bol beyaz alan ve ince gölgelere sahip arayüzlere özgü düzen.',
      },
    },
  },
  tl: {
    selectBaseColor: 'Pumili ng base na kulay',
    updateColor: 'I-update ang kulay',
    randomColor: 'Random na kulay',
    currentBaseColor: 'Kasalukuyang base na kulay',
    baseColorHelper: 'Lahat ng palette sa ibaba ay batay sa kulay na ito.',
    colorPreview: 'Preview ng kulay',
    copied: 'Nakopya na',
    copy: 'Kopyahin',
    generatedPalettes: 'Mga nagawang color palette',
    colorReadError: 'Hindi nabasa ang kulay. Siguraduhing gumagamit ka ng format na',
    example: 'hal.',
    enterValidColor: 'Maglagay ng tamang HEX color para gumawa ng mga palette. Lahat ng kalkulasyon ay ginagawa nang lokal sa browser.',
    palettes: {
      monochromatic: {
        label: 'Monochromatic palette',
        description: 'Lahat ng kulay ay may parehong hue (H), at naiiba lamang sa lightness (L) sa HSL color space.',
      },
      analogous: {
        label: 'Analogous palette',
        description: 'Mga kulay na may magkatulad na hue \u2013 mula -30\u00b0 hanggang +30\u00b0 sa paligid ng base color sa klasikong color wheel (hal. Itten).',
      },
      complementary: {
        label: 'Complementary palette',
        description: 'Ang base color at ang complement nito na naka-shift ng 180\u00b0 sa color wheel \u2013 isa sa mga pangunahing color contrast na inilalarawan ni Johannes Itten.',
      },
      triadic: {
        label: 'Triadic palette',
        description: 'Tatlong hue na may 120\u00b0 na pagitan sa color wheel (mga vertex ng equilateral triangle) \u2013 geometry na madalas gamitin sa branding at Bauhaus-inspired na disenyo.',
      },
      splitComplementary: {
        label: 'Split-complementary palette',
        description:
          'Isang variation ng complementary palette \u2013 sa halip na isang complement (180\u00b0), gumagamit ng dalawang kulay na naka-shift ng \u00b130\u00b0 mula sa complement, na nagbabawas ng visual tension habang pinapanatili ang malakas na contrast.',
      },
      softPastel: {
        label: 'Pastel palette',
        description: 'Parehong hue na may binawasang saturation at pinalaking lightness \u2013 pag-shift patungo sa gitna at itaas ng HSL space, na nagbibigay ng malambot, "creamy" na mga kulay.',
      },
      deepDark: {
        label: 'Dark palette',
        description:
          'Parehong hue na may mataas na saturation (S) at mababang lightness (L) \u2013 pag-shift pababa sa lightness axis, na nagbibigay ng malalim na kulay para sa dark mode at matapang na accents.',
      },
      materialTonal: {
        label: 'Tonal palette (inspired ng Material Design)',
        description: 'Ilang hakbang ng lightness ng isang hue \u2013 iba-ibang L at katamtamang S, katulad ng tonal ranges sa Material Design guidelines (hal. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Minimalist palette (inspired ng Apple)',
        description:
          'Isang matapang na color accent at maraming napakaliliwanag, malambot na neutral tones \u2013 layout na katangian ng mga interface na may maraming white space at banayad na shadow.',
      },
    },
  },
  sw: {
    selectBaseColor: 'Chagua rangi ya msingi',
    updateColor: 'Sasisha rangi',
    randomColor: 'Rangi ya nasibu',
    currentBaseColor: 'Rangi ya sasa ya msingi',
    baseColorHelper: 'Paleti zote hapa chini zinategemea rangi hii.',
    colorPreview: 'Hakiki ya rangi',
    copied: 'Imenakiliwa',
    copy: 'Nakili',
    generatedPalettes: 'Paleti za rangi zilizoundwa',
    colorReadError: 'Imeshindwa kusoma rangi. Hakikisha unatumia muundo',
    example: 'mfano',
    enterValidColor: 'Ingiza rangi sahihi ya HEX ili kuunda paleti. Hesabu zote zinafanywa ndani ya kivinjari chako.',
    palettes: {
      monochromatic: {
        label: 'Paleti ya rangi moja',
        description: 'Rangi zote zina toni sawa (H), zinatofautiana hasa katika mwangaza (L) katika nafasi ya rangi HSL.',
      },
      analogous: {
        label: 'Paleti ya rangi zinazofanana',
        description: 'Rangi zenye toni zinazofanana \u2013 kutoka takriban -30\u00b0 hadi +30\u00b0 kuzunguka rangi ya msingi kwenye gurudumu la rangi la kawaida (mf. Itten).',
      },
      complementary: {
        label: 'Paleti ya rangi zinazokamilishana',
        description: 'Rangi ya msingi na kikamilisho chake kilichohamishwa 180\u00b0 kwenye gurudumu la rangi \u2013 moja ya tofauti za msingi za rangi zilizofafanuliwa na Johannes Itten.',
      },
      triadic: {
        label: 'Paleti ya triadi',
        description:
          'Toni tatu zenye umbali wa 120\u00b0 kwenye gurudumu la rangi (pembe za pembetatu sawa) \u2013 jiometria inayotumika mara kwa mara katika biashara na miundo iliyoongozwa na Bauhaus.',
      },
      splitComplementary: {
        label: 'Paleti ya split-complementary',
        description:
          'Aina ya paleti ya rangi zinazokamilishana \u2013 badala ya kikamilisho kimoja (180\u00b0), hutumia rangi mbili zilizohamishwa takriban \u00b130\u00b0 kutoka kwa kikamilisho, kupunguza mvutano wa kuona huku kudumisha utofauti mkali.',
      },
      softPastel: {
        label: 'Paleti ya rangi laini',
        description: 'Toni sawa yenye usaturisho uliopungua na mwangaza ulioongezeka \u2013 uhamishaji kuelekea katikati na juu ya nafasi ya HSL, unaotoa rangi laini, "za krimu".',
      },
      deepDark: {
        label: 'Paleti ya giza',
        description:
          'Toni sawa yenye usaturisho mkubwa (S) na mwangaza mdogo (L) \u2013 uhamishaji chini ya mhimili wa mwangaza, unaotoa rangi za kina zinazofaa kwa hali ya giza na vipengele vyenye nguvu.',
      },
      materialTonal: {
        label: 'Paleti ya toni (iliyoongozwa na Material Design)',
        description: 'Hatua kadhaa za mwangaza wa toni moja \u2013 L inayobadilika na S ya wastani, sawa na viwango vya toni katika miongozo ya Material Design (mf. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Paleti ya minimalist (iliyoongozwa na Apple)',
        description: 'Rangi moja ya kipengele chenye nguvu na toni nyingi za neutral za rangi nyepesi sana \u2013 mpangilio wa kawaida wa interface zenye nafasi nyeupe nyingi na vivuli laini.',
      },
    },
  },
  ms: {
    selectBaseColor: 'Pilih warna asas',
    updateColor: 'Kemas kini warna',
    randomColor: 'Warna rawak',
    currentBaseColor: 'Warna asas semasa',
    baseColorHelper: 'Semua palet di bawah berdasarkan warna ini.',
    colorPreview: 'Pratonton warna',
    copied: 'Disalin',
    copy: 'Salin',
    generatedPalettes: 'Palet warna yang dijana',
    colorReadError: 'Gagal membaca warna. Pastikan anda menggunakan format',
    example: 'cth.',
    enterValidColor: 'Masukkan warna HEX yang sah untuk menjana palet. Semua pengiraan dilakukan secara tempatan dalam pelayar anda.',
    palettes: {
      monochromatic: {
        label: 'Palet monokromatik',
        description: 'Semua warna mempunyai rona (H) yang sama, berbeza terutamanya dalam kecerahan (L) dalam ruang warna HSL.',
      },
      analogous: {
        label: 'Palet analog',
        description: 'Warna dengan rona yang serupa \u2013 dari kira-kira -30\u00b0 hingga +30\u00b0 mengelilingi warna asas pada roda warna klasik (cth. Itten).',
      },
      complementary: {
        label: 'Palet pelengkap',
        description: 'Warna asas dan pelengkapnya yang dianjak 180\u00b0 pada roda warna \u2013 salah satu kontras warna asas yang diterangkan oleh Johannes Itten.',
      },
      triadic: {
        label: 'Palet triadik',
        description: 'Tiga rona yang berjarak 120\u00b0 pada roda warna (bucu segitiga sama sisi) \u2013 geometri yang kerap digunakan dalam penjenamaan dan reka bentuk gaya Bauhaus.',
      },
      splitComplementary: {
        label: 'Palet split-complementary',
        description:
          'Variasi palet pelengkap \u2013 berbanding satu pelengkap (180\u00b0), menggunakan dua warna yang dianjak kira-kira \u00b130\u00b0 dari pelengkap, mengurangkan ketegangan visual sambil mengekalkan kontras yang kuat.',
      },
      softPastel: {
        label: 'Palet pastel',
        description: 'Rona yang sama dengan ketepuan berkurangan dan kecerahan bertambah \u2013 anjakan ke arah tengah dan atas ruang HSL, menghasilkan warna lembut, "krim".',
      },
      deepDark: {
        label: 'Palet gelap',
        description:
          'Rona yang sama dengan ketepuan tinggi (S) dan kecerahan rendah (L) \u2013 anjakan ke bawah pada paksi kecerahan, menghasilkan warna dalam yang tipikal untuk mod gelap dan aksen berani.',
      },
      materialTonal: {
        label: 'Palet tonal (inspirasi Material Design)',
        description: 'Beberapa langkah kecerahan satu rona \u2013 L berubah-ubah dan S sederhana, serupa dengan julat tonal dalam garis panduan Material Design (cth. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Palet minimalis (inspirasi Apple)',
        description: 'Satu aksen warna berani dan banyak ton neutral yang sangat cerah dan lembut \u2013 susun atur khas antara muka dengan banyak ruang putih dan bayang halus.',
      },
    },
  },
  cs: {
    selectBaseColor: 'Vyberte z\u00e1kladn\u00ed barvu',
    updateColor: 'Aktualizovat barvu',
    randomColor: 'N\u00e1hodn\u00e1 barva',
    currentBaseColor: 'Aktu\u00e1ln\u00ed z\u00e1kladn\u00ed barva',
    baseColorHelper: 'V\u0161echny palety n\u00ed\u017ee vych\u00e1zej\u00ed z t\u00e9to barvy.',
    colorPreview: 'N\u00e1hled barvy',
    copied: 'Zkop\u00edrov\u00e1no',
    copy: 'Zkop\u00edrovat',
    generatedPalettes: 'Vygenerovan\u00e9 barevn\u00e9 palety',
    colorReadError: 'Nepoda\u0159ilo se p\u0159e\u010d\u00edst barvu. Ujist\u011bte se, \u017ee pou\u017e\u00edv\u00e1te form\u00e1t',
    example: 'nap\u0159.',
    enterValidColor: 'Zadejte platnou barvu HEX pro vygenerov\u00e1n\u00ed palet. V\u0161echny v\u00fdpo\u010dty prob\u00edhaj\u00ed lok\u00e1ln\u011b ve va\u0161em prohl\u00ed\u017ee\u010di.',
    palettes: {
      monochromatic: {
        label: 'Monochromatick\u00e1 paleta',
        description: 'V\u0161echny barvy maj\u00ed stejn\u00fd odst\u00edn (H), li\u0161\u00ed se hlavn\u011b v sv\u011btlosti (L) v barevn\u00e9m prostoru HSL.',
      },
      analogous: {
        label: 'Analogick\u00e1 paleta',
        description: 'Barvy s bl\u00edzk\u00fdm odst\u00ednem \u2013 od cca -30\u00b0 do +30\u00b0 kolem z\u00e1kladn\u00ed barvy na klasick\u00e9m barevn\u00e9m kole (nap\u0159. Itten).',
      },
      complementary: {
        label: 'Komplement\u00e1rn\u00ed paleta',
        description:
          'Z\u00e1kladn\u00ed barva a jej\u00ed dopln\u011bk posunut\u00fd o 180\u00b0 na barevn\u00e9m kole \u2013 jeden ze z\u00e1kladn\u00edch barevn\u00fdch kontrast\u016f popsan\u00fdch Johannesem Ittenem.',
      },
      triadic: {
        label: 'Triadick\u00e1 paleta',
        description:
          'T\u0159i odst\u00edny vzd\u00e1len\u00e9 o 120\u00b0 na barevn\u00e9m kole (vrcholy rovnostrann\u00e9ho troj\u00faheln\u00edku) \u2013 geometrie \u010dasto vyu\u017e\u00edvan\u00e1 v brandingu a n\u00e1vrz\u00edch inspirovan\u00fdch Bauhausem.',
      },
      splitComplementary: {
        label: 'Split-komplement\u00e1rn\u00ed paleta',
        description:
          'Variace komplement\u00e1rn\u00ed palety \u2013 m\u00edsto jednoho dopln\u011bku (180\u00b0) se pou\u017e\u00edvaj\u00ed dv\u011b barvy posunut\u00e9 o cca \u00b130\u00b0 od dopln\u011bku, co sni\u017euje vizu\u00e1ln\u00ed nap\u011bt\u00ed p\u0159i zachov\u00e1n\u00ed siln\u00e9ho kontrastu.',
      },
      softPastel: {
        label: 'Pastelová paleta',
        description:
          'Stejn\u00fd odst\u00edn se sn\u00ed\u017eenou saturac\u00ed a zv\u00fd\u0161enou sv\u011btlost\u00ed \u2013 posun ke st\u0159edu a horn\u00ed \u010d\u00e1sti prostoru HSL, kter\u00fd d\u00e1v\u00e1 m\u011bkk\u00e9, \u201ekr\u00e9mov\u00e9\u201c barvy.',
      },
      deepDark: {
        label: 'Tmav\u00e1 paleta',
        description:
          'Stejn\u00fd odst\u00edn s vysokou saturac\u00ed (S) a sn\u00ed\u017eenou sv\u011btlost\u00ed (L) \u2013 posun dol\u016f na ose sv\u011btlosti, kter\u00fd d\u00e1v\u00e1 hlubok\u00e9 barvy typick\u00e9 pro tmav\u00fd re\u017eim a v\u00fdrazn\u00e9 akcenty.',
      },
      materialTonal: {
        label: 'Ton\u00e1ln\u00ed paleta (inspirov\u00e1no Material Design)',
        description:
          'N\u011bkolik stup\u0148\u016f sv\u011btlosti jednoho odst\u00ednu \u2013 prom\u011bnliv\u00e9 L a um\u00edrn\u011bn\u00e9 S, bl\u00edzk\u00e9 ton\u00e1ln\u00edm rozsah\u016fm v doporu\u010den\u00edch Material Design (nap\u0159. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Minimalistick\u00e1 paleta (inspirov\u00e1no Apple)',
        description:
          'Jeden v\u00fdrazn\u00fd barevn\u00fd akcent a \u0159ada velmi sv\u011btl\u00fdch, jemn\u00fdch neutr\u00e1ln\u00edch t\u00f3n\u016f \u2013 rozvr\u017een\u00ed typick\u00e9 pro rozhran\u00ed s velk\u00fdm mno\u017estv\u00edm b\u00edl\u00e9ho prostoru a jemn\u00fdmi st\u00edny.',
      },
    },
  },
  sv: {
    selectBaseColor: 'V\u00e4lj basf\u00e4rg',
    updateColor: 'Uppdatera f\u00e4rg',
    randomColor: 'Slumpm\u00e4ssig f\u00e4rg',
    currentBaseColor: 'Nuvarande basf\u00e4rg',
    baseColorHelper: 'Alla paletter nedan baseras p\u00e5 denna f\u00e4rg.',
    colorPreview: 'F\u00e4rgf\u00f6rhandsgranskning',
    copied: 'Kopierad',
    copy: 'Kopiera',
    generatedPalettes: 'Genererade f\u00e4rgpaletter',
    colorReadError: 'Kunde inte l\u00e4sa f\u00e4rgen. Kontrollera att du anv\u00e4nder formatet',
    example: 't.ex.',
    enterValidColor: 'Ange en giltig HEX-f\u00e4rg f\u00f6r att generera paletter. Alla ber\u00e4kningar g\u00f6rs lokalt i din webbl\u00e4sare.',
    palettes: {
      monochromatic: {
        label: 'Monokromatisk palett',
        description: 'Alla f\u00e4rger har samma nyans (H), skiljer sig fr\u00e4mst i ljushet (L) i HSL-f\u00e4rgrymden.',
      },
      analogous: {
        label: 'Analog palett',
        description: 'F\u00e4rger med liknande nyans \u2013 fr\u00e5n ca -30\u00b0 till +30\u00b0 runt basf\u00e4rgen p\u00e5 det klassiska f\u00e4rghjulet (t.ex. Itten).',
      },
      complementary: {
        label: 'Komplement\u00e4r palett',
        description: 'Basf\u00e4rgen och dess komplement f\u00f6rskjutet 180\u00b0 p\u00e5 f\u00e4rghjulet \u2013 en av de grundl\u00e4ggande f\u00e4rgkontrasterna beskriven av Johannes Itten.',
      },
      triadic: {
        label: 'Triadisk palett',
        description:
          'Tre nyanser med 120\u00b0 avst\u00e5nd p\u00e5 f\u00e4rghjulet (h\u00f6rn p\u00e5 en liksidig triangel) \u2013 geometri som ofta anv\u00e4nds inom varum\u00e4rkning och Bauhaus-inspirerad design.',
      },
      splitComplementary: {
        label: 'Delad komplement\u00e4r palett',
        description:
          'En variation av den komplement\u00e4ra paletten \u2013 ist\u00e4llet f\u00f6r ett komplement (180\u00b0) anv\u00e4nds tv\u00e5 f\u00e4rger f\u00f6rskjutna ca \u00b130\u00b0 fr\u00e5n komplementet, vilket minskar visuell sp\u00e4nning men beh\u00e5ller stark kontrast.',
      },
      softPastel: {
        label: 'Pastellpalett',
        description: 'Samma nyans med minskad m\u00e4ttnad och \u00f6kad ljushet \u2013 f\u00f6rskjutning mot mitten och toppen av HSL-rymden, vilket ger mjuka, \u201dkr\u00e4miga\u201d f\u00e4rger.',
      },
      deepDark: {
        label: 'M\u00f6rk palett',
        description:
          'Samma nyans med h\u00f6g m\u00e4ttnad (S) och l\u00e5g ljushet (L) \u2013 f\u00f6rskjutning ned\u00e5t p\u00e5 ljushetsaxeln, vilket ger djupa f\u00e4rger typiska f\u00f6r m\u00f6rkt l\u00e4ge och starka accenter.',
      },
      materialTonal: {
        label: 'Tonal palett (inspirerad av Material Design)',
        description: 'Flera ljussteg av en nyans \u2013 varierande L och m\u00e5ttlig S, liknande de tonala intervallen i Material Designs riktlinjer (t.ex. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Minimalistisk palett (inspirerad av Apple)',
        description: 'En djärv färgaccent och m\u00e5nga mycket ljusa, mjuka neutrala toner \u2013 layout typisk f\u00f6r gr\u00e4nssnitt med mycket vitt utrymme och subtila skuggor.',
      },
    },
  },
  sq: {
    selectBaseColor: 'Zgjidhni ngjyr\u00ebn baz\u00eb',
    updateColor: 'P\u00ebrdit\u00ebso ngjyr\u00ebn',
    randomColor: 'Ngjyr\u00eb e rastësishme',
    currentBaseColor: 'Ngjyra aktuale baz\u00eb',
    baseColorHelper: 'T\u00eb gjitha paletet m\u00eb posht\u00eb bazohen n\u00eb k\u00ebt\u00eb ngjyr\u00eb.',
    colorPreview: 'Parapamja e ngjyr\u00ebs',
    copied: 'U kopjua',
    copy: 'Kopjo',
    generatedPalettes: 'Paletet e gjeneruara t\u00eb ngjyrave',
    colorReadError: 'Nuk u lexua ngjyra. Sigurohuni q\u00eb p\u00ebrdorni formatin',
    example: 'p.sh.',
    enterValidColor: 'Shkruani nj\u00eb ngjyr\u00eb t\u00eb vlefshme HEX p\u00ebr t\u00eb gjeneruar paletet. T\u00eb gjitha llogaritjet kryhen lokalisht n\u00eb shfletuesin tuaj.',
    palettes: {
      monochromatic: {
        label: 'Paleta monokromatike',
        description: 'T\u00eb gjitha ngjyrat kan\u00eb t\u00eb nj\u00ebjtin ton (H), ndryshojn\u00eb kryesisht n\u00eb nd\u00ebr\u00e7ueshmëri (L) n\u00eb hap\u00ebsir\u00ebn e ngjyrave HSL.',
      },
      analogous: {
        label: 'Paleta analoge',
        description: 'Ngjyra me ton t\u00eb ngjash\u00ebm \u2013 nga rreth -30\u00b0 deri n\u00eb +30\u00b0 rreth ngjyr\u00ebs baz\u00eb n\u00eb rrot\u00ebn klasike t\u00eb ngjyrave (p.sh. Itten).',
      },
      complementary: {
        label: 'Paleta komplementare',
        description:
          'Ngjyra baz\u00eb dhe komplementi i saj zhvendosur p\u00ebr 180\u00b0 n\u00eb rrot\u00ebn e ngjyrave \u2013 nj\u00eb nga kontrastet themelore t\u00eb ngjyrave t\u00eb p\u00ebrshkruara nga Johannes Itten.',
      },
      triadic: {
        label: 'Paleta triadike',
        description:
          'Tre tone me 120\u00b0 larg\u00ebsi n\u00eb rrot\u00ebn e ngjyrave (kulmet e trekëndëshit barabrinjës) \u2013 gjeometri q\u00eb p\u00ebrdoret shpesh n\u00eb branding dhe dizajn t\u00eb frym\u00ebzuar nga Bauhaus.',
      },
      splitComplementary: {
        label: 'Paleta split-komplementare',
        description:
          'Nj\u00eb variant i palet\u00ebs komplementare \u2013 n\u00eb vend t\u00eb nj\u00eb komplementi (180\u00b0), p\u00ebrdoren dy ngjyra t\u00eb zhvendosura p\u00ebr rreth \u00b130\u00b0 nga komplementi, duke ul\u00ebr tensionin vizual nd\u00ebrsa ruan kontrast t\u00eb fort\u00eb.',
      },
      softPastel: {
        label: 'Paleta pastel',
        description:
          'I nj\u00ebjti ton me saturim t\u00eb ul\u00ebr dhe nd\u00ebr\u00e7ueshmëri t\u00eb rritur \u2013 zhvendosje drejt mesit dhe majës s\u00eb hap\u00ebsir\u00ebs HSL, q\u00eb jep ngjyra t\u00eb buta, \u201ekrem\u201c.',
      },
      deepDark: {
        label: 'Paleta e errët',
        description:
          'I nj\u00ebjti ton me saturim t\u00eb lart\u00eb (S) dhe nd\u00ebr\u00e7ueshmëri t\u00eb ul\u00ebt (L) \u2013 zhvendosje posht\u00eb n\u00eb boshtin e nd\u00ebr\u00e7ueshmërisë, q\u00eb jep ngjyra t\u00eb thella tipike p\u00ebr modalitetin e err\u00ebt dhe thekse t\u00eb forta.',
      },
      materialTonal: {
        label: 'Paleta tonale (e frym\u00ebzuar nga Material Design)',
        description:
          'Disa hapa nd\u00ebr\u00e7ueshmërie t\u00eb nj\u00eb toni \u2013 L e ndryshme dhe S e moderuar, e ngjashme me diapazonet tonale n\u00eb udh\u00ebzimet e Material Design (p.sh. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Paleta minimaliste (e frym\u00ebzuar nga Apple)',
        description:
          'Nj\u00eb theks e fort\u00eb ngjyre dhe shum\u00eb tone neutrale shum\u00eb t\u00eb \u00e7elëta e t\u00eb buta \u2013 paraqitje tipike e nd\u00ebrfaqeve me shum\u00eb hap\u00ebsir\u00eb t\u00eb bardh\u00eb dhe hije delikate.',
      },
    },
  },
  da: {
    selectBaseColor: 'V\u00e6lg basisfarve',
    updateColor: 'Opdater farve',
    randomColor: 'Tilf\u00e6ldig farve',
    currentBaseColor: 'Nuv\u00e6rende basisfarve',
    baseColorHelper: 'Alle paletter nedenfor er baseret p\u00e5 denne farve.',
    colorPreview: 'Farveforh\u00e5ndsvisning',
    copied: 'Kopieret',
    copy: 'Kopi\u00e9r',
    generatedPalettes: 'Genererede farvepaletter',
    colorReadError: 'Kunne ikke l\u00e6se farven. S\u00f8rg for at du bruger formatet',
    example: 'f.eks.',
    enterValidColor: 'Indtast en gyldig HEX-farve for at generere paletter. Alle beregninger foretages lokalt i din browser.',
    palettes: {
      monochromatic: {
        label: 'Monokromatisk palet',
        description: 'Alle farver har samme nuance (H), adskiller sig prim\u00e6rt i lyshed (L) i HSL-farverummet.',
      },
      analogous: {
        label: 'Analog palet',
        description: 'Farver med lignende nuance \u2013 fra ca. -30\u00b0 til +30\u00b0 omkring basisfarven p\u00e5 det klassiske farvehjul (f.eks. Itten).',
      },
      complementary: {
        label: 'Komplement\u00e6r palet',
        description: 'Basisfarven og dens komplement forskudt 180\u00b0 p\u00e5 farvehjulet \u2013 en af de grundl\u00e6ggende farvekontraster beskrevet af Johannes Itten.',
      },
      triadic: {
        label: 'Triadisk palet',
        description: 'Tre nuancer med 120\u00b0 afstand p\u00e5 farvehjulet (hj\u00f8rner af en ligesidet trekant) \u2013 geometri der ofte bruges inden for branding og Bauhaus-inspireret design.',
      },
      splitComplementary: {
        label: 'Split-komplement\u00e6r palet',
        description:
          'En variation af den komplement\u00e6re palet \u2013 i stedet for \u00e9t komplement (180\u00b0) bruges to farver forskudt ca. \u00b130\u00b0 fra komplementet, hvilket reducerer visuel sp\u00e6nding og bevarer stærk kontrast.',
      },
      softPastel: {
        label: 'Pastelpalet',
        description:
          'Samme nuance med reduceret m\u00e6tning og \u00f8get lyshed \u2013 forskydning mod midten og toppen af HSL-rummet, hvilket giver bl\u00f8de, \u201dfl\u00f8deagtige\u201d farver.',
      },
      deepDark: {
        label: 'M\u00f8rk palet',
        description:
          'Samme nuance med h\u00f8j m\u00e6tning (S) og lav lyshed (L) \u2013 forskydning nedad p\u00e5 lyshedsaksen, hvilket giver dybe farver typiske for m\u00f8rk tilstand og st\u00e6rke accenter.',
      },
      materialTonal: {
        label: 'Tonal palet (inspireret af Material Design)',
        description: 'Flere lyshedstrin af \u00e9n nuance \u2013 varierende L og moderat S, svarende til de tonale intervaller i Material Designs retningslinjer (f.eks. 50\u2013900).',
      },
      appleMinimal: {
        label: 'Minimalistisk palet (inspireret af Apple)',
        description: '\u00c9n markant farveaccent og mange meget lyse, bl\u00f8de neutrale toner \u2013 layout typisk for gr\u00e6nseflader med meget hvidt rum og subtile skygger.',
      },
    },
  },
} as const satisfies Record<Locale, unknown>;
