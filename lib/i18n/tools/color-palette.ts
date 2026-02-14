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
    example: 'z.\u00a0B.',
    enterValidColor: 'Geben Sie eine gültige HEX-Farbe ein, um Paletten zu generieren. Alle Berechnungen werden lokal in Ihrem Browser durchgeführt.',
    palettes: {
      monochromatic: {
        label: 'Monochromatische Palette',
        description: 'Alle Farben haben denselben Farbton (H) und unterscheiden sich hauptsächlich in der Helligkeit (L) im HSL-Farbraum.',
      },
      analogous: {
        label: 'Analoge Palette',
        description: 'Farben mit ähnlichen Farbtönen - von ca. -30° bis +30° um die Basisfarbe auf dem klassischen Farbkreis (z.\u00a0B. Itten).',
      },
      complementary: {
        label: 'Komplementärpalette',
        description: 'Die Basisfarbe und ihr Komplement, um 180° auf dem Farbkreis verschoben - einer der grundlegenden Farbkontraste, beschrieben u.\u00a0a. von Johannes Itten.',
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
        description: 'Mehrere Helligkeitsstufen eines Farbtons - variiertes L und moderates S, ähnlich den tonalen Bereichen aus den Material-Design-Richtlinien (z.\u00a0B. 50-900).',
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
        description: "Des couleurs de teintes proches, d'environ -30° à +30° autour de la couleur de base sur le cercle chromatique classique (ex.\u00a0: Itten).",
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
          "Une variante de la palette complémentaire\u00a0: au lieu d'un complément (180°), on utilise deux couleurs décalées d'environ ±30° du complément, réduisant la tension visuelle tout en conservant un fort contraste.",
      },
      softPastel: {
        label: 'Palette pastel',
        description:
          'La même teinte avec une saturation réduite et une luminosité augmentée, un déplacement vers le centre et le haut de l\'espace HSL qui produit des couleurs douces et "crémeuses".',
      },
      deepDark: {
        label: 'Palette sombre',
        description:
          "La même teinte avec une saturation élevée (S) et une luminosité réduite (L) \u2013 un déplacement vers le bas sur l'axe de luminosité, produisant des couleurs profondes typiques du mode sombre et des accents intenses.",
      },
      materialTonal: {
        label: 'Palette tonale (inspirée Material Design)',
        description: "Plusieurs niveaux de luminosité d'une même teinte \u2013 L variée et S modérée, similaire aux plages tonales des directives Material Design (ex.\u00a0: 50-900).",
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
          'A mesma tonalidade com saturação elevada (S) e luminosidade reduzida (L) \u2013 um deslocamento para baixo no eixo de luminosidade, produzindo cores profundas típicas do modo escuro e acentos intensos.',
      },
      materialTonal: {
        label: 'Paleta tonal (inspirada em Material Design)',
        description: 'Vários níveis de luminosidade de uma mesma tonalidade \u2013 L variada e S moderada, semelhante às gamas tonais das diretrizes Material Design (ex.: 50-900).',
      },
      appleMinimal: {
        label: 'Paleta minimalista (inspirada em Apple)',
        description: 'Um acento de cor vivo e vários neutros muito claros e suaves, uma composição típica de interfaces com muito espaço branco e sombras subtis.',
      },
    },
  },
} as const satisfies Record<Locale, unknown>;
