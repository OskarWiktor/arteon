'use client';

import { FormEvent, useMemo, useState } from 'react';
import Button from '@/components/ui/Button';
import { RiCheckLine, RiClipboardLine } from 'react-icons/ri';

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
} as const;

type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex: string): RGB | null {
  let value = hex.trim().replace('#', '');

  if (value.length === 3) {
    value = value
      .split('')
      .map((c) => c + c)
      .join('');
  }

  if (value.length !== 6) return null;

  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);

  if ([r, g, b].some((v) => Number.isNaN(v))) return null;

  return { r, g, b };
}

function rgbToHex({ r, g, b }: RGB): string {
  const toHex = (v: number) => {
    const clamped = clamp(Math.round(v), 0, 255);
    const hex = clamped.toString(16).padStart(2, '0');
    return hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl({ r, g, b }: RGB): HSL {
  const rN = r / 255;
  const gN = g / 255;
  const bN = b / 255;

  const max = Math.max(rN, gN, bN);
  const min = Math.min(rN, gN, bN);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = delta / (1 - Math.abs(2 * l - 1));

    switch (max) {
      case rN:
        h = 60 * (((gN - bN) / delta) % 6);
        break;
      case gN:
        h = 60 * ((bN - rN) / delta + 2);
        break;
      case bN:
        h = 60 * ((rN - gN) / delta + 4);
        break;
      default:
        break;
    }
  }

  if (h < 0) h += 360;

  return {
    h,
    s: s * 100,
    l: l * 100,
  };
}

function hslToRgb({ h, s, l }: HSL): RGB {
  const sN = clamp(s, 0, 100) / 100;
  const lN = clamp(l, 0, 100) / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;

  let rN = 0;
  let gN = 0;
  let bN = 0;

  if (h >= 0 && h < 60) {
    rN = c;
    gN = x;
    bN = 0;
  } else if (h >= 60 && h < 120) {
    rN = x;
    gN = c;
    bN = 0;
  } else if (h >= 120 && h < 180) {
    rN = 0;
    gN = c;
    bN = x;
  } else if (h >= 180 && h < 240) {
    rN = 0;
    gN = x;
    bN = c;
  } else if (h >= 240 && h < 300) {
    rN = x;
    gN = 0;
    bN = c;
  } else {
    rN = c;
    gN = 0;
    bN = x;
  }

  return {
    r: (rN + m) * 255,
    g: (gN + m) * 255,
    b: (bN + m) * 255,
  };
}

function normalizeHex(color: string): string | null {
  if (!color) return null;

  const trimmed = color.trim();
  if (!trimmed.startsWith('#')) return null;

  const rgb = hexToRgb(trimmed);
  if (!rgb) return null;

  return rgbToHex(rgb).toLowerCase();
}

function formatHsl(hsl: HSL): string {
  return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`;
}

type PaletteColor = {
  hex: string;
  hsl: HSL;
};

type PaletteGroup = {
  id: string;
  label: string;
  description: string;
  colors: PaletteColor[];
};

function rotateHue(h: number, delta: number): number {
  const value = (h + delta) % 360;
  return value < 0 ? value + 360 : value;
}

function createPaletteFromHex(baseHex: string): PaletteGroup[] {
  const t = ui.pl;
  const normalized = normalizeHex(baseHex);
  if (!normalized) return [];

  const rgb = hexToRgb(normalized)!;
  const baseHsl = rgbToHsl(rgb);

  const mkColor = (h: number, s: number, l: number): PaletteColor => {
    const hsl: HSL = {
      h: ((h % 360) + 360) % 360,
      s: clamp(s, 0, 100),
      l: clamp(l, 0, 100),
    };
    const rgbColor = hslToRgb(hsl);
    return {
      hex: rgbToHex(rgbColor),
      hsl,
    };
  };

  const mono: PaletteGroup = {
    id: 'monochromatic',
    label: t.palettes.monochromatic.label,
    description: t.palettes.monochromatic.description,
    colors: [
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l - 25, 5, 95)),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l - 12, 5, 95)),
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l + 12, 5, 95)),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l + 24, 5, 95)),
    ],
  };

  const analogous: PaletteGroup = {
    id: 'analogous',
    label: t.palettes.analogous.label,
    description: t.palettes.analogous.description,
    colors: [
      mkColor(rotateHue(baseHsl.h - 30, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h - 15, 0), baseHsl.s, baseHsl.l + 5),
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 15, 0), baseHsl.s, baseHsl.l - 5),
      mkColor(rotateHue(baseHsl.h + 30, 0), baseHsl.s, baseHsl.l),
    ],
  };

  const complementary: PaletteGroup = {
    id: 'complementary',
    label: t.palettes.complementary.label,
    description: t.palettes.complementary.description,
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(baseHsl.h, baseHsl.s, clamp(baseHsl.l - 10, 5, 95)),
      mkColor(rotateHue(baseHsl.h + 180, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 180, 0), baseHsl.s, clamp(baseHsl.l + 10, 5, 95)),
      mkColor(rotateHue(baseHsl.h + 180, 0), baseHsl.s, clamp(baseHsl.l - 10, 5, 95)),
    ],
  };

  const triadic: PaletteGroup = {
    id: 'triadic',
    label: t.palettes.triadic.label,
    description: t.palettes.triadic.description,
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 120, 0), baseHsl.s, baseHsl.l - 5),
      mkColor(rotateHue(baseHsl.h + 240, 0), baseHsl.s, baseHsl.l + 5),
      mkColor(rotateHue(baseHsl.h + 120, 0), baseHsl.s, baseHsl.l + 10),
      mkColor(rotateHue(baseHsl.h + 240, 0), baseHsl.s, baseHsl.l - 10),
    ],
  };

  const split: PaletteGroup = {
    id: 'split-complementary',
    label: t.palettes.splitComplementary.label,
    description: t.palettes.splitComplementary.description,
    colors: [
      mkColor(baseHsl.h, baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 150, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 210, 0), baseHsl.s, baseHsl.l),
      mkColor(rotateHue(baseHsl.h + 150, 0), baseHsl.s, clamp(baseHsl.l + 8, 5, 95)),
      mkColor(rotateHue(baseHsl.h + 210, 0), baseHsl.s, clamp(baseHsl.l - 8, 5, 95)),
    ],
  };

  const pastelS = Math.min(baseHsl.s, 45);
  const pastel: PaletteGroup = {
    id: 'soft-pastel',
    label: t.palettes.softPastel.label,
    description: t.palettes.softPastel.description,
    colors: [mkColor(baseHsl.h, pastelS, 92), mkColor(baseHsl.h, pastelS, 88), mkColor(baseHsl.h, pastelS, 84), mkColor(baseHsl.h, pastelS, 80), mkColor(baseHsl.h, pastelS, 76)],
  };

  const deepS = Math.max(baseHsl.s, 55);
  const deep: PaletteGroup = {
    id: 'deep-dark',
    label: t.palettes.deepDark.label,
    description: t.palettes.deepDark.description,
    colors: [
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 5, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 12, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 20, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 28, 5, 95)),
      mkColor(baseHsl.h, deepS, clamp(baseHsl.l - 36, 5, 95)),
    ],
  };

  const material: PaletteGroup = {
    id: 'material-tonal',
    label: t.palettes.materialTonal.label,
    description: t.palettes.materialTonal.description,
    colors: [
      mkColor(baseHsl.h, baseHsl.s * 0.3, 96),
      mkColor(baseHsl.h, baseHsl.s * 0.4, 90),
      mkColor(baseHsl.h, baseHsl.s * 0.6, 80),
      mkColor(baseHsl.h, baseHsl.s * 0.8, 70),
      mkColor(baseHsl.h, baseHsl.s, 60),
    ],
  };

  const apple: PaletteGroup = {
    id: 'apple-minimal',
    label: t.palettes.appleMinimal.label,
    description: t.palettes.appleMinimal.description,
    colors: [mkColor(baseHsl.h, Math.max(baseHsl.s, 60), clamp(baseHsl.l, 45, 60)), mkColor(baseHsl.h, 6, 98), mkColor(baseHsl.h, 6, 94), mkColor(baseHsl.h, 6, 88), mkColor(baseHsl.h, 6, 30)],
  };

  return [mono, triadic, split, pastel, deep, material, apple, analogous, complementary];
}

function randomHexColor(): string {
  const value = Math.floor(Math.random() * 0xffffff);
  return `#${value.toString(16).padStart(6, '0')}`;
}

function Swatch({ color, onCopy, copied }: { color: PaletteColor; onCopy: (hex: string) => void; copied: boolean }) {
  const t = ui.pl;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
      <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: color.hex }} aria-label={`${t.colorPreview} ${color.hex}`} />
      <div className="min-w-0 flex-1">
        <p className="text-sm! leading-tight font-medium">{color.hex}</p>
        <p className="truncate text-[11px]! text-[#5e5e5e]">{formatHsl(color.hsl)}</p>
      </div>
      <button
        type="button"
        onClick={() => onCopy(color.hex)}
        className="inline-flex cursor-pointer items-center gap-1 rounded-full border border-black/15 bg-white px-2.5 py-1 text-[11px]! font-medium text-neutral-900 hover:bg-neutral-50"
      >
        {copied ? (
          <>
            <RiCheckLine className="h-3.5 w-3.5" />
            {t.copied}
          </>
        ) : (
          <>
            <RiClipboardLine className="h-3.5 w-3.5" />
            {t.copy}
          </>
        )}
      </button>
    </div>
  );
}

export default function ColorPaletteGenerator() {
  const t = ui.pl;
  const [baseColor, setBaseColor] = useState('#4f6bf5');
  const [inputColor, setInputColor] = useState('#4f6bf5');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const normalizedBase = useMemo(() => normalizeHex(baseColor), [baseColor]);
  const palettes = useMemo(() => (normalizedBase ? createPaletteFromHex(normalizedBase) : []), [normalizedBase]);

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

  const handleCopy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => {
        setCopiedHex(null);
      }, 1200);
    } catch {
      setCopiedHex(hex);
      setTimeout(() => {
        setCopiedHex(null);
      }, 1200);
    }
  };

  return (
    <div className="space-y-4">
      <section className="tool-section">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <input type="color" value={inputColor} onChange={(e) => setInputColor(e.target.value)} aria-label={t.selectBaseColor} className="tool-color-picker h-11! w-13!" />
              <input type="text" value={inputColor} onChange={(e) => setInputColor(e.target.value)} className="tool-input h-10 w-32" placeholder="#4f6bf5" />
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
              <div className="tool-info-box flex items-center gap-3">
                <div className="h-7 w-7 rounded-lg border border-black/10" style={{ backgroundColor: normalizedBase }} aria-label={t.currentBaseColor} />
                <div className="min-w-0">
                  <p className="text-sm! leading-tight font-medium">{normalizedBase}</p>
                  <p className="tool-helper text-[11px]!">{t.baseColorHelper}</p>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>

      <section aria-label={t.generatedPalettes} className="tool-section space-y-4">
        {!normalizedBase && (
          <p className="rounded-xl border border-dashed border-red-200 bg-red-50 px-3 py-2 text-[11px]! text-red-800">
            {t.colorReadError} <code className="rounded bg-black/5 px-1">#rrggbb</code>, {t.example} <code className="rounded bg-black/5 px-1">#4f6bf5</code>.
          </p>
        )}

        {normalizedBase && palettes.length === 0 && <p className="tool-info-box tool-helper text-[11px]!">{t.enterValidColor}</p>}

        {normalizedBase && palettes.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {palettes.map((group) => (
              <div key={group.id} className="tool-info-box space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold!">{group.label}</p>
                    <p className="tool-helper">{group.description}</p>
                  </div>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {group.colors.map((color) => (
                    <Swatch key={`${group.id}-${color.hex}-${color.hsl.l}`} color={color} onCopy={handleCopy} copied={copiedHex === color.hex} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
