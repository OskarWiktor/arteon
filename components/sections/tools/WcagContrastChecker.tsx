'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import CopyButton from '@/components/ui/buttons/CopyButton';
import { RiContrast2Line } from 'react-icons/ri';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolFieldRow from '@/components/ui/tools/ToolFieldRow';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolColorInput from '@/components/ui/tools/ToolColorInput';
import Badge from '@/components/ui/Badge';
import { getContrastRatio, parseColor } from '@/lib/tools/color/contrast';
import { hslToRgb, rgbToHex, rgbToHsl } from '@/lib/tools/color/convert';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/wcag-contrast';

const DEFAULT_FOREGROUND = rgbToHex({ r: 0, g: 0, b: 0 });
const DEFAULT_BACKGROUND = rgbToHex({ r: 255, g: 255, b: 255 });

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
  return (
    <Badge variant={ok ? 'success' : 'error'} size="md">
      {label}
    </Badge>
  );
}

type MatchTarget = 'normalAA' | 'normalAAA' | 'largeAA' | 'largeAAA' | 'iconAA';

const MATCH_TARGET_RATIOS: Record<MatchTarget, number> = {
  normalAA: 4.5,
  normalAAA: 7,
  largeAA: 3,
  largeAAA: 4.5,
  iconAA: 3,
};

function formatRgba({ r, g, b }: { r: number; g: number; b: number }, alpha: number): string {
  const clampChannel = (v: number) => Math.min(255, Math.max(0, Math.round(v)));
  const a = Math.round(alpha * 1000) / 1000;
  return `rgba(${clampChannel(r)}, ${clampChannel(g)}, ${clampChannel(b)}, ${a})`;
}

function formatSuggestedColor({ r, g, b, a }: { r: number; g: number; b: number; a: number }): string {
  return a < 1 ? formatRgba({ r, g, b }, a) : rgbToHex({ r, g, b });
}

function adjustColorToWcag({ foreground, background, targetRatio }: { foreground: string; background: string; targetRatio: number }): string | null {
  const fg = parseColor(foreground);
  const bg = parseColor(background);
  if (!fg || !bg) return null;

  const currentRatio = getContrastRatio(foreground, background);
  if (currentRatio !== null && currentRatio >= targetRatio) {
    return formatSuggestedColor(fg);
  }

  const baseHsl = rgbToHsl({ r: fg.r, g: fg.g, b: fg.b });
  const alpha = fg.a;

  let best: { color: string; delta: number } | null = null;

  for (let l = 0; l <= 100; l += 0.5) {
    const rgb = hslToRgb({ h: baseHsl.h, s: baseHsl.s, l });
    const candidate = alpha < 1 ? formatRgba(rgb, alpha) : rgbToHex(rgb);
    const ratio = getContrastRatio(candidate, background);
    if (ratio === null) continue;
    if (ratio >= targetRatio) {
      const delta = Math.abs(l - baseHsl.l);
      if (!best || delta < best.delta) {
        best = { color: candidate, delta };
      }
    }
  }

  return best?.color ?? null;
}

export default function WcagContrastChecker() {
  const locale = useLocale();
  const t = ui[locale];
  const [foreground, setForeground] = useState(DEFAULT_FOREGROUND);
  const [background, setBackground] = useState(DEFAULT_BACKGROUND);
  const [textSample, setTextSample] = useState<string>(t.exampleText);
  const [foregroundPicker, setForegroundPicker] = useState(DEFAULT_FOREGROUND);
  const [backgroundPicker, setBackgroundPicker] = useState(DEFAULT_BACKGROUND);
  const [matchTarget, setMatchTarget] = useState<MatchTarget>('normalAA');
  const [matchedForeground, setMatchedForeground] = useState<string | null>(null);
  const [matchError, setMatchError] = useState<string | null>(null);

  const result = getWcagResult(foreground, background);

  const suggestedRatio = (() => { if (!matchedForeground) return null;
    return getContrastRatio(matchedForeground, background); })();

  useEffect(() => {
    const parsed = parseColor(foreground);
    if (!parsed) return;
    setForegroundPicker(rgbToHex({ r: parsed.r, g: parsed.g, b: parsed.b }));
  }, [foreground]);

  useEffect(() => {
    const parsed = parseColor(background);
    if (!parsed) return;
    setBackgroundPicker(rgbToHex({ r: parsed.r, g: parsed.g, b: parsed.b }));
  }, [background]);

  useEffect(() => {
    setMatchedForeground(null);
    setMatchError(null);
  }, [foreground, background, matchTarget]);

  const handleSwap = () => {
    setForeground(background);
    setBackground(foreground);
    setForegroundPicker(backgroundPicker);
    setBackgroundPicker(foregroundPicker);
  };

  const handleReset = () => {
    setForeground(DEFAULT_FOREGROUND);
    setBackground(DEFAULT_BACKGROUND);
    setForegroundPicker(DEFAULT_FOREGROUND);
    setBackgroundPicker(DEFAULT_BACKGROUND);
  };

  const handleMatch = () => {
    const suggestion = adjustColorToWcag({
      foreground,
      background,
      targetRatio: MATCH_TARGET_RATIOS[matchTarget],
    });

    if (!suggestion) {
      setMatchedForeground(null);
      setMatchError(t.matchError);
      return;
    }

    setMatchedForeground(suggestion);
    setMatchError(null);
  };

  const handleApplySuggested = () => {
    if (!matchedForeground) return;
    setForeground(matchedForeground);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const hasError = result.ratio === null;

  return (
    <>
      <div className="grid gap-4 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <ToolSection className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <ToolFieldRow label={<span className="tool-value">{t.sampleTextLabel}</span>}>
              <input id="text-sample" type="text" value={textSample} onChange={(e) => setTextSample(e.target.value)} className="tool-input h-10" placeholder={t.exampleTextPlaceholder} />
            </ToolFieldRow>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <ToolFieldRow
                  label={t.textColorLabel}
                  helper={
                    <span className="text-xs! text-inherit">
                      {t.supportedFormats} <code className="rounded bg-black/5 px-1">#rrggbb</code>, <code className="rounded bg-black/5 px-1">#rgb</code>,{' '}
                      <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>, <code className="rounded bg-black/5 px-1">rgba(r,g,b,a)</code>,{' '}
                      <code className="rounded bg-black/5 px-1">hsl(h,s%,l%)</code>, <code className="rounded bg-black/5 px-1">hsla(h,s%,l%,a)</code>.
                    </span>
                  }
                  helperClassName="text-xs!"
                >
                  <ToolColorInput
                    value={foreground}
                    onChange={setForeground}
                    pickerValue={foregroundPicker}
                    onPickerChange={setForegroundPicker}
                    ariaLabel={t.selectTextColor}
                    placeholder={t.textColorPlaceholder}
                  />
                </ToolFieldRow>

                <ToolFieldRow
                  label={<span className="tool-value">{t.backgroundColorLabel}</span>}
                  helper={
                    <span className="text-xs! text-inherit">
                      {t.supportedFormats} <code className="rounded bg-black/5 px-1">#rrggbb</code>, <code className="rounded bg-black/5 px-1">#rgb</code>,{' '}
                      <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>, <code className="rounded bg-black/5 px-1">rgba(r,g,b,a)</code>,{' '}
                      <code className="rounded bg-black/5 px-1">hsl(h,s%,l%)</code>, <code className="rounded bg-black/5 px-1">hsla(h,s%,l%,a)</code>.
                    </span>
                  }
                  helperClassName="text-xs!"
                >
                  <ToolColorInput
                    value={background}
                    onChange={setBackground}
                    pickerValue={backgroundPicker}
                    onPickerChange={setBackgroundPicker}
                    ariaLabel={t.selectBackgroundColor}
                    placeholder={t.backgroundColorPlaceholder}
                  />
                </ToolFieldRow>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                <Button type="button" size="small" onClick={handleSwap}>
                  {t.swapColors}
                </Button>
                <Button type="button" size="small" variant="normal" onClick={handleReset} className="border-0 shadow-none hover:translate-y-0 hover:shadow-none">
                  {t.resetColors}
                </Button>
              </div>
            </div>

            <ToolFieldRow label={<span className="tool-value">{t.matchTargetLabel}</span>}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <select className="tool-select h-10" value={matchTarget} onChange={(e) => setMatchTarget(e.target.value as MatchTarget)}>
                  <option value="normalAA">
                    {t.normalText} - {t.badges.normalAA}
                  </option>
                  <option value="normalAAA">
                    {t.normalText} - {t.badges.normalAAA}
                  </option>
                  <option value="largeAA">
                    {t.largeText} - {t.badges.largeAA}
                  </option>
                  <option value="largeAAA">
                    {t.largeText} - {t.badges.largeAAA}
                  </option>
                  <option value="iconAA">
                    {t.icon} - {t.badges.iconAA}
                  </option>
                </select>

                <Button type="button" size="small" variant="accent" onClick={handleMatch} disabled={hasError}>
                  {t.matchColor}
                </Button>
              </div>
            </ToolFieldRow>

            {matchError && (
              <ToolHelper variant="error" className="mt-1">
                <span className="text-dark text-xs!">{matchError}</span>
              </ToolHelper>
            )}

            {matchedForeground && (
              <ToolInfo className="space-y-2">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="tool-color-swatch h-8 w-8" style={{ backgroundColor: matchedForeground }} aria-hidden="true" />
                    <p className="tool-value text-dark truncate">{matchedForeground}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Button type="button" size="small" onClick={handleApplySuggested}>
                      {t.applySuggestedColor}
                    </Button>
                    <CopyButton text={matchedForeground} label={t.copy} copiedLabel={t.copied} />
                  </div>
                </div>

                <ToolHelper className="text-xs!">
                  {t.contrastRatio}: {formatRatio(suggestedRatio)}
                </ToolHelper>
              </ToolInfo>
            )}
          </form>
        </ToolSection>

        <ToolSection aria-label={t.resultsLabel} className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="space-y-1">
                <p className="tool-value uppercase">{t.contrastRatio}</p>
                <p className="text-dark text-xl font-semibold">{formatRatio(result.ratio)}</p>
              </div>
              {hasError ? (
                <ToolHelper variant="error" className="mt-1">
                  <span className="text-dark text-xs!">
                    {t.colorReadError} <code className="rounded bg-black/5 px-1">#rrggbb</code>, <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>,{' '}
                    <code className="rounded bg-black/5 px-1">rgba(r,g,b,a)</code>, <code className="rounded bg-black/5 px-1">hsl(h,s%,l%)</code>,{' '}
                    <code className="rounded bg-black/5 px-1">hsla(h,s%,l%,a)</code>.
                  </span>
                </ToolHelper>
              ) : (
                <div className="mt-1 h-4"></div>
              )}
            </div>
          </div>

          <ToolInfo className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="tool-value uppercase">{t.normalText}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <ResultBadge ok={!!result.ratio && result.normalText.AA} label={t.badges.normalAA} />
                <ResultBadge ok={!!result.ratio && result.normalText.AAA} label={t.badges.normalAAA} />
              </div>
            </div>
            <div
              className="rounded-lg border border-neutral-200 px-3 py-2"
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
              <p className="tool-value uppercase">{t.largeText}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <ResultBadge ok={!!result.ratio && result.largeText.AA} label={t.badges.largeAA} />
                <ResultBadge ok={!!result.ratio && result.largeText.AAA} label={t.badges.largeAAA} />
              </div>
            </div>
            <div
              className="rounded-lg border border-neutral-200 px-3 py-2"
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
              <p className="tool-value uppercase">{t.icon}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <ResultBadge ok={!!result.ratio && result.uiGraphics.AA} label={t.badges.iconAA} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200"
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
