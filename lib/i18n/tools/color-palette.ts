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
} as const satisfies Record<Locale, unknown>;
