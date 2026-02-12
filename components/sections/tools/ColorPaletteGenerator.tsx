'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolColorSwatch from '@/components/ui/tools/ToolColorSwatch';
import { useTimeout } from '@/hooks/useTimeout';
import { formatHsl, normalizeHex, randomHexColor, rgbToHex } from '@/lib/tools/color/convert';
import { createPaletteFromHex, type PaletteGroupId } from '@/lib/tools/color/palette';
import { useLocale, type Locale } from '@/lib/LocaleContext';

const ui = {
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
        description: 'Ten sam odcień z obniżonym nasyceniem i podniesioną jasnością - przesunięcie w stronę środka i górnej części przestrzeni HSL, które daje miękkie, „kremowe” kolory.',
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
        description: 'Colors with similar hues — from about -30° to +30° around the base color on the classic color wheel (e.g. Itten).',
      },
      complementary: {
        label: 'Complementary palette',
        description: 'The base color and its complement shifted by 180° on the color wheel — one of the fundamental color contrasts described by Johannes Itten.',
      },
      triadic: {
        label: 'Triadic palette',
        description: 'Three hues spaced 120° apart on the color wheel (vertices of an equilateral triangle) — a geometry often used in branding and Bauhaus-inspired designs.',
      },
      splitComplementary: {
        label: 'Split-complementary palette',
        description:
          'A variation of the complementary palette — instead of one complement (180°), two colors shifted by about ±30° from the complement are used, reducing visual tension while maintaining strong contrast.',
      },
      softPastel: {
        label: 'Pastel palette',
        description: 'The same hue with reduced saturation and increased lightness — a shift toward the center and top of the HSL space, producing soft, "creamy" colors.',
      },
      deepDark: {
        label: 'Dark palette',
        description: 'The same hue with high saturation (S) and reduced lightness (L) — a downward shift on the lightness axis, producing deep colors typical of dark mode and bold accents.',
      },
      materialTonal: {
        label: 'Tonal palette (Material Design inspired)',
        description: 'Several lightness steps of one hue — varied L and moderate S, similar to tonal ranges known from Material Design guidelines (e.g. 50-900).',
      },
      appleMinimal: {
        label: 'Minimalist palette (Apple inspired)',
        description: 'One bold color accent and several very light, soft neutrals — a layout typical of interfaces with plenty of white space and subtle shadows.',
      },
    },
  },
} as const satisfies Record<Locale, unknown>;

function getPaletteMeta(t: (typeof ui)['pl'] | (typeof ui)['en']): Record<PaletteGroupId, { label: string; description: string }> {
  return {
    monochromatic: t.palettes.monochromatic,
    analogous: t.palettes.analogous,
    complementary: t.palettes.complementary,
    triadic: t.palettes.triadic,
    'split-complementary': t.palettes.splitComplementary,
    'soft-pastel': t.palettes.softPastel,
    'deep-dark': t.palettes.deepDark,
    'material-tonal': t.palettes.materialTonal,
    'apple-minimal': t.palettes.appleMinimal,
  };
}

const DEFAULT_BASE_COLOR = rgbToHex({ r: 79, g: 107, b: 245 });

export default function ColorPaletteGenerator() {
  const locale = useLocale();
  const t = ui[locale];
  const [baseColor, setBaseColor] = useState(DEFAULT_BASE_COLOR);
  const [inputColor, setInputColor] = useState(DEFAULT_BASE_COLOR);
  const { start: startCopiedReset } = useTimeout();

  const normalizedBase = useMemo(() => normalizeHex(baseColor), [baseColor]);
  const paletteMeta = useMemo(() => getPaletteMeta(t), [t]);
  const palettes = useMemo(
    () =>
      normalizedBase
        ? createPaletteFromHex(normalizedBase).map((group) => ({
            ...group,
            ...paletteMeta[group.id],
          }))
        : [],
    [normalizedBase, paletteMeta],
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const normalized = normalizeHex(inputColor);
    if (!normalized) {
      return;
    }
    setBaseColor(normalized);
  };

  const handleRandom = () => {
    const random = randomHexColor();
    setInputColor(random);
  };

  const handleCopy = () => {
    startCopiedReset(() => {}, 1200);
  };

  return (
    <div className="space-y-4">
      <ToolSection>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <input type="color" value={inputColor} onChange={(e) => setInputColor(e.target.value)} aria-label={t.selectBaseColor} className="tool-color-picker h-11! w-13!" />
              <input type="text" value={inputColor} onChange={(e) => setInputColor(e.target.value)} className="tool-input h-10 w-32" placeholder={DEFAULT_BASE_COLOR} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button type="submit" size="small" variant="accent">
                {t.updateColor}
              </Button>
              <Button type="button" size="small" onClick={handleRandom} className="items-center gap-1">
                {t.randomColor}
              </Button>
            </div>

            {normalizedBase && (
              <ToolInfo className="flex items-center gap-3">
                <div className="tool-color-swatch h-7 w-7" style={{ backgroundColor: normalizedBase }} aria-label={t.currentBaseColor} />
                <div className="min-w-0">
                  <p className="tool-value text-dark">{normalizedBase}</p>
                  <ToolHelper className="text-xs!">{t.baseColorHelper}</ToolHelper>
                </div>
              </ToolInfo>
            )}
          </div>
        </form>
      </ToolSection>

      <ToolSection aria-label={t.generatedPalettes} className="space-y-4">
        {!normalizedBase && (
          <ToolAlert variant="error">
            {t.colorReadError} <code className="rounded bg-black/5 px-1">#rrggbb</code>, {t.example} <code className="rounded bg-black/5 px-1">{DEFAULT_BASE_COLOR}</code>.
          </ToolAlert>
        )}

        {normalizedBase && palettes.length === 0 && (
          <ToolInfo>
            <ToolHelper className="text-xs!">{t.enterValidColor}</ToolHelper>
          </ToolInfo>
        )}

        {normalizedBase && palettes.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {palettes.map((group) => (
              <ToolInfo key={group.id} className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="tool-value">{group.label}</p>
                    <ToolHelper>{group.description}</ToolHelper>
                  </div>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {group.colors.map((color) => (
                    <ToolColorSwatch
                      key={`${group.id}-${color.hex}-${color.hsl.l}`}
                      hex={color.hex}
                      secondaryText={formatHsl(color.hsl)}
                      ariaLabelPrefix={t.colorPreview}
                      copyLabel={t.copy}
                      copiedLabel={t.copied}
                      onCopy={handleCopy}
                    />
                  ))}
                </div>
              </ToolInfo>
            ))}
          </div>
        )}
      </ToolSection>
    </div>
  );
}
