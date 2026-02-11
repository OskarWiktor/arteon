'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import CopyButton from '@/components/ui/buttons/CopyButton';
import { useTimeout } from '@/hooks/useTimeout';
import { formatHsl, normalizeHex, randomHexColor, rgbToHex } from '@/lib/tools/color/convert';
import { createPaletteFromHex, type PaletteColor, type PaletteGroupId } from '@/lib/tools/color/palette';

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
} as const;

const PALETTE_META: Record<PaletteGroupId, { label: string; description: string }> = {
  monochromatic: ui.pl.palettes.monochromatic,
  analogous: ui.pl.palettes.analogous,
  complementary: ui.pl.palettes.complementary,
  triadic: ui.pl.palettes.triadic,
  'split-complementary': ui.pl.palettes.splitComplementary,
  'soft-pastel': ui.pl.palettes.softPastel,
  'deep-dark': ui.pl.palettes.deepDark,
  'material-tonal': ui.pl.palettes.materialTonal,
  'apple-minimal': ui.pl.palettes.appleMinimal,
};

const DEFAULT_BASE_COLOR = rgbToHex({ r: 79, g: 107, b: 245 });

function Swatch({ color, onCopy, copied: _copied }: { color: PaletteColor; onCopy: (hex: string) => void; copied: boolean }) {
  const t = ui.pl;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
      <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: color.hex }} aria-label={`${t.colorPreview} ${color.hex}`} />
      <div className="min-w-0 flex-1">
        <p className="text-dark text-[14px]! leading-tight font-medium">{color.hex}</p>
        <p className="text-light truncate text-xs!">{formatHsl(color.hsl)}</p>
      </div>
      <CopyButton text={color.hex} label={t.copy} copiedLabel={t.copied} onCopy={() => onCopy(color.hex)} />
    </div>
  );
}

export default function ColorPaletteGenerator() {
  const t = ui.pl;
  const [baseColor, setBaseColor] = useState(DEFAULT_BASE_COLOR);
  const [inputColor, setInputColor] = useState(DEFAULT_BASE_COLOR);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const { start: startCopiedReset } = useTimeout();

  const normalizedBase = useMemo(() => normalizeHex(baseColor), [baseColor]);
  const palettes = useMemo(
    () =>
      normalizedBase
        ? createPaletteFromHex(normalizedBase).map((group) => ({
            ...group,
            ...PALETTE_META[group.id],
          }))
        : [],
    [normalizedBase],
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

  const handleCopy = (hex: string) => {
    setCopiedHex(hex);
    startCopiedReset(() => setCopiedHex(null), 1200);
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
                <div className="h-7 w-7 rounded-lg border border-black/10" style={{ backgroundColor: normalizedBase }} aria-label={t.currentBaseColor} />
                <div className="min-w-0">
                  <p className="text-dark text-[14px]! leading-tight font-medium">{normalizedBase}</p>
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
                    <p className="text-[14px]! font-medium">{group.label}</p>
                    <ToolHelper>{group.description}</ToolHelper>
                  </div>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {group.colors.map((color) => (
                    <Swatch key={`${group.id}-${color.hex}-${color.hsl.l}`} color={color} onCopy={handleCopy} copied={copiedHex === color.hex} />
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
