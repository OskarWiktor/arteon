'use client';

import { FormEvent, useMemo, useState } from 'react';
import Button from '@/components/ui/Button';
import { RiContrast2Line } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import Tag from '@/components/ui/Tag';
import Text from '@/components/ui/typography/Text';

const ui = {
  pl: {
    exampleText: 'Przykładowy tekst kontrastu WCAG 2.1',
    exampleTextPlaceholder: 'Wpisz nagłówek, tekst przycisku lub treść akapitu',
    textColorLabel: 'Kolor tekstu (foreground)',
    selectTextColor: 'Wybierz kolor tekstu',
    textColorPlaceholder: '#000000 lub rgb(0,0,0)',
    supportedFormats: 'Obsługiwane formaty:',
    backgroundColorLabel: 'Kolor tła (background)',
    selectBackgroundColor: 'Wybierz kolor tła',
    backgroundColorPlaceholder: '#ffffff lub rgb(255,255,255)',
    swapColors: 'Zamień kolory miejscami',
    resetColors: 'Reset do czarny na białym',
    contrastRatio: 'Współczynnik kontrastu',
    colorReadError: 'Nie udało się odczytać kolorów. Użyj formatu',
    or: 'lub',
    normalText: 'Tekst zwykły',
    largeText: 'Tekst duży / pogrubiony',
    icon: 'Ikona',
    exampleNormalText: 'Przykładowy tekst zwykły',
    exampleLargeText: 'Przykładowy nagłówek / przycisk',
    iconPreview: 'Podgląd ikony na tle',
    resultsLabel: 'Wyniki testu kontrastu i podgląd',
    badges: {
      normalAA: 'AA (min. 4.5:1)',
      normalAAA: 'AAA (min. 7:1)',
      largeAA: 'AA (min. 3:1)',
      largeAAA: 'AAA (min. 4.5:1)',
      iconAA: 'AA (min. 3:1)',
    },
  },
} as const;

type RGB = { r: number; g: number; b: number };

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

function parseColor(color: string): RGB | null {
  const trimmed = color.trim();

  if (trimmed.startsWith('#')) {
    return hexToRgb(trimmed);
  }

  const rgbMatch = trimmed.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([0-9.]+))?\s*\)$/i);

  if (rgbMatch) {
    const r = Number(rgbMatch[1]);
    const g = Number(rgbMatch[2]);
    const b = Number(rgbMatch[3]);

    if ([r, g, b].some((v) => v < 0 || v > 255 || Number.isNaN(v))) {
      return null;
    }

    return { r, g, b };
  }

  return null;
}

function channelToLinear(c: number): number {
  const sRgb = c / 255;
  return sRgb <= 0.03928 ? sRgb / 12.92 : Math.pow((sRgb + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }: RGB): number {
  const R = channelToLinear(r);
  const G = channelToLinear(g);
  const B = channelToLinear(b);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function getContrastRatio(foreground: string, background: string): number | null {
  const fgRgb = parseColor(foreground);
  const bgRgb = parseColor(background);

  if (!fgRgb || !bgRgb) return null;

  const L1 = relativeLuminance(fgRgb);
  const L2 = relativeLuminance(bgRgb);

  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  return Math.round(ratio * 100) / 100;
}

type WcagResult = {
  ratio: number | null;
  normalText: {
    AA: boolean;
    AAA: boolean;
  };
  largeText: {
    AA: boolean;
    AAA: boolean;
  };
  uiGraphics: {
    AA: boolean;
  };
};

function getWcagResult(foreground: string, background: string): WcagResult {
  const ratio = getContrastRatio(foreground, background);

  if (ratio === null) {
    return {
      ratio: null,
      normalText: { AA: false, AAA: false },
      largeText: { AA: false, AAA: false },
      uiGraphics: { AA: false },
    };
  }

  return {
    ratio,
    normalText: {
      AA: ratio >= 4.5,
      AAA: ratio >= 7,
    },
    largeText: {
      AA: ratio >= 3,
      AAA: ratio >= 4.5,
    },
    uiGraphics: {
      AA: ratio >= 3,
    },
  };
}

function formatRatio(ratio: number | null): string {
  if (ratio === null || Number.isNaN(ratio)) return '-';
  return `${ratio.toFixed(2)} : 1`;
}

function Badge({ ok, label }: { ok: boolean; label: string }) {
  return <Tag variant={ok ? 'success' : 'error'} size="md">{label}</Tag>;
}

export default function WcagContrastChecker() {
  const t = ui.pl;
  const [foreground, setForeground] = useState('#000000');
  const [background, setBackground] = useState('#ffffff');
  const [textSample, setTextSample] = useState<string>(t.exampleText);

  const result = useMemo(() => getWcagResult(foreground, background), [foreground, background]);

  const handleSwap = () => {
    setForeground(background);
    setBackground(foreground);
  };

  const handleReset = () => {
    setForeground('#000000');
    setBackground('#ffffff');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const hasError = result.ratio === null;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ToolSection className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <ToolFieldRow label="Przykładowy tekst">
              <input id="text-sample" type="text" value={textSample} onChange={(e) => setTextSample(e.target.value)} className="tool-input h-10" placeholder={t.exampleTextPlaceholder} />
            </ToolFieldRow>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ToolFieldRow
                  label={t.textColorLabel}
                  helper={
                    <>
                      {t.supportedFormats} <code className="rounded bg-black/5 px-1">#rrggbb</code>, <code className="rounded bg-black/5 px-1">#rgb</code>,{' '}
                      <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>.
                    </>
                  }
                  helperClassName="text-[11px]!"
                >
                  <div className="flex items-center gap-3">
                    <input type="color" value={foreground} onChange={(e) => setForeground(e.target.value)} aria-label={t.selectTextColor} className="tool-color-picker tool-color-picker-md" />
                    <input type="text" value={foreground} onChange={(e) => setForeground(e.target.value)} className="tool-input h-10" placeholder={t.textColorPlaceholder} />
                  </div>
                </ToolFieldRow>

                <ToolFieldRow label={t.backgroundColorLabel}>
                  <div className="flex items-center gap-3">
                    <input type="color" value={background} onChange={(e) => setBackground(e.target.value)} aria-label={t.selectBackgroundColor} className="tool-color-picker tool-color-picker-md" />
                    <input type="text" value={background} onChange={(e) => setBackground(e.target.value)} className="tool-input h-10" placeholder={t.backgroundColorPlaceholder} />
                  </div>
                </ToolFieldRow>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                <Button type="button" size="small" onClick={handleSwap}>
                  {t.swapColors}
                </Button>
                <Button type="button" size="small" variant="minimal" onClick={handleReset}>
                  {t.resetColors}
                </Button>
              </div>
            </div>
          </form>
        </ToolSection>

        <ToolSection aria-label={t.resultsLabel} className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-medium uppercase">
                {t.contrastRatio} <span className="mt-1 text-xl font-semibold"> {formatRatio(result.ratio)}</span>
              </p>
              {hasError ? (
                <ToolHelper variant="error" className="mt-1 text-[11px]!">
                  {t.colorReadError} <code className="rounded bg-black/5 px-1">#rrggbb</code> {t.or} <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>.
                </ToolHelper>
              ) : (
                <p className="tool-helper mt-1 text-[11px]!"></p>
              )}
            </div>
          </div>

          <ToolInfo className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <Text variant="small" as="p" className="font-semibold uppercase">{t.normalText}</Text>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge ok={!!result.ratio && result.normalText.AA} label={t.badges.normalAA} />
                <Badge ok={!!result.ratio && result.normalText.AAA} label={t.badges.normalAAA} />
              </div>
            </div>
            <div
              className="rounded-xl border border-neutral-200 px-3 py-2"
              style={{
                color: foreground,
                backgroundColor: background,
              }}
            >
              <Text variant="small" as="p" className="leading-snug font-normal">{textSample || t.exampleNormalText}</Text>
            </div>
          </ToolInfo>

          <ToolInfo className="space-y-2">
            <div className="items_center flex justify-between gap-2">
              <Text variant="small" as="p" className="font-semibold uppercase">{t.largeText}</Text>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge ok={!!result.ratio && result.largeText.AA} label={t.badges.largeAA} />
                <Badge ok={!!result.ratio && result.largeText.AAA} label={t.badges.largeAAA} />
              </div>
            </div>
            <div
              className="rounded-xl border border-neutral-200 px-3 py-2"
              style={{
                color: foreground,
                backgroundColor: background,
              }}
            >
              <Text variant="body" as="p" className="leading-snug font-semibold!">{textSample || t.exampleLargeText}</Text>
            </div>
          </ToolInfo>

          <ToolInfo className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm! font-semibold uppercase">{t.icon}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge ok={!!result.ratio && result.uiGraphics.AA} label={t.badges.iconAA} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200"
                style={{
                  color: foreground,
                  backgroundColor: background,
                }}
                aria-label={t.iconPreview}
              >
                <RiContrast2Line className="text-2xl!" aria-hidden="true" />
              </div>
            </div>
          </ToolInfo>
        </ToolSection>
      </div>
    </>
  );
}
