'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import { RiContrast2Line } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import Badge from '@/components/ui/Badge';
import { getContrastRatio } from '@/lib/tools/color/contrast';
import { rgbToHex } from '@/lib/tools/color/convert';

const DEFAULT_FOREGROUND = rgbToHex({ r: 0, g: 0, b: 0 });
const DEFAULT_BACKGROUND = rgbToHex({ r: 255, g: 255, b: 255 });

const ui = {
  pl: {
    exampleText: 'Przykładowy tekst kontrastu WCAG 2.1',
    exampleTextPlaceholder: 'Wpisz nagłówek, tekst przycisku lub treść akapitu',
    textColorLabel: 'Kolor tekstu (foreground)',
    selectTextColor: 'Wybierz kolor tekstu',
    textColorPlaceholder: `${DEFAULT_FOREGROUND} lub rgb(0,0,0)`,
    supportedFormats: 'Obsługiwane formaty:',
    backgroundColorLabel: 'Kolor tła (background)',
    selectBackgroundColor: 'Wybierz kolor tła',
    backgroundColorPlaceholder: `${DEFAULT_BACKGROUND} lub rgb(255,255,255)`,
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

function ResultBadge({ ok, label }: { ok: boolean; label: string }) {
  return <Badge variant={ok ? 'success' : 'error'} size="md">{label}</Badge>;
}

export default function WcagContrastChecker() {
  const t = ui.pl;
  const [foreground, setForeground] = useState(DEFAULT_FOREGROUND);
  const [background, setBackground] = useState(DEFAULT_BACKGROUND);
  const [textSample, setTextSample] = useState<string>(t.exampleText);

  const result = useMemo(() => getWcagResult(foreground, background), [foreground, background]);

  const handleSwap = () => {
    setForeground(background);
    setBackground(foreground);
  };

  const handleReset = () => {
    setForeground(DEFAULT_FOREGROUND);
    setBackground(DEFAULT_BACKGROUND);
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
            <ToolFieldRow label={
              <span className="text-sm text-dark font-medium">Przykładowy tekst</span>
            }>
              <input id="text-sample" type="text" value={textSample} onChange={(e) => setTextSample(e.target.value)} className="tool-input h-10" placeholder={t.exampleTextPlaceholder} />
            </ToolFieldRow>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ToolFieldRow
                  label={t.textColorLabel}
                  helper={
                    <span className="text-xs text-inherit">
                      {t.supportedFormats}{' '}
                      <code className="rounded bg-black/5 px-1">#rrggbb</code>,{' '}
                      <code className="rounded bg-black/5 px-1">#rgb</code>,{' '}
                      <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>.
                    </span>
                  }
                  helperClassName="text-[11px]!"
                >
                  <div className="flex items-center gap-3">
                    <input type="color" value={foreground} onChange={(e) => setForeground(e.target.value)} aria-label={t.selectTextColor} className="tool-color-picker tool-color-picker-md" />
                    <input type="text" value={foreground} onChange={(e) => setForeground(e.target.value)} className="tool-input h-10" placeholder={t.textColorPlaceholder} />
                  </div>
                </ToolFieldRow>

                <ToolFieldRow label={<span className="text-sm text-dark font-medium">{t.backgroundColorLabel}</span>}>
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
                <Button type="button" size="small" variant="normal" onClick={handleReset} className="border-0 shadow-none hover:shadow-none hover:translate-y-0">
                  {t.resetColors}
                </Button>
              </div>
            </div>
          </form>
        </ToolSection>

        <ToolSection aria-label={t.resultsLabel} className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="space-y-1">
                <p className="text-sm text-dark font-medium uppercase">{t.contrastRatio}</p>
                <p className="text-xl text-dark font-semibold">{formatRatio(result.ratio)}</p>
              </div>
              {hasError ? (
                <ToolHelper variant="error" className="mt-1">
                  <span className="text-xs text-dark">
                    {t.colorReadError}{' '}
                    <code className="rounded bg-black/5 px-1">#rrggbb</code> {t.or}{' '}
                    <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>.
                  </span>
                </ToolHelper>
              ) : (
                <div className="mt-1 h-4"></div>
              )}
            </div>
          </div>

          <ToolInfo className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-dark font-semibold uppercase">{t.normalText}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <ResultBadge ok={!!result.ratio && result.normalText.AA} label={t.badges.normalAA} />
                <ResultBadge ok={!!result.ratio && result.normalText.AAA} label={t.badges.normalAAA} />
              </div>
            </div>
            <div
              className="rounded-xl border border-neutral-200 px-3 py-2"
              style={{
                color: foreground,
                backgroundColor: background,
              }}
            >
              <p className="text-sm leading-snug font-normal">{textSample || t.exampleNormalText}</p>
            </div>
          </ToolInfo>

          <ToolInfo className="space-y-2">
            <div className="items_center flex justify-between gap-2">
              <p className="text-sm text-dark font-semibold uppercase">{t.largeText}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <ResultBadge ok={!!result.ratio && result.largeText.AA} label={t.badges.largeAA} />
                <ResultBadge ok={!!result.ratio && result.largeText.AAA} label={t.badges.largeAAA} />
              </div>
            </div>
            <div
              className="rounded-xl border border-neutral-200 px-3 py-2"
              style={{
                color: foreground,
                backgroundColor: background,
              }}
            >
              <p className="text-base leading-snug font-semibold!">{textSample || t.exampleLargeText}</p>
            </div>
          </ToolInfo>

          <ToolInfo className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-dark font-semibold uppercase">{t.icon}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <ResultBadge ok={!!result.ratio && result.uiGraphics.AA} label={t.badges.iconAA} />
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


