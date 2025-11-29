'use client';

import { FormEvent, useMemo, useState } from 'react';
import Button from '@/components/ui/Button';
import { RiContrast2Line } from 'react-icons/ri';

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
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px]! font-medium ${
        ok ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200' : 'bg-red-50 text-red-800 ring-1 ring-red-200'
      }`}
    >
      {label}
    </span>
  );
}

export default function WcagContrastChecker() {
  const [foreground, setForeground] = useState('#000000');
  const [background, setBackground] = useState('#ffffff');
  const [textSample, setTextSample] = useState('Przykładowy tekst kontrastu WCAG 2.1');

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
        <section className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-sm sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <p className="mb-1 text-xs! font-medium uppercase">Przykładowy tekst</p>
              <input
                id="text-sample"
                type="text"
                value={textSample}
                onChange={(e) => setTextSample(e.target.value)}
                className="h-10 w-full rounded-xl border border-black/15 bg-white px-3 text-sm! ring-emerald-500/0 transition outline-none focus:ring-2"
                placeholder="Wpisz nagłówek, tekst przycisku lub treść akapitu"
              />
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-xs! font-medium uppercase">Kolor tekstu (foreground)</p>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={foreground}
                      onChange={(e) => setForeground(e.target.value)}
                      aria-label="Wybierz kolor tekstu"
                      className="h-10! w-10! cursor-pointer rounded-xl border border-black/10 bg-white p-0!"
                    />
                    <input
                      type="text"
                      value={foreground}
                      onChange={(e) => setForeground(e.target.value)}
                      className="h-10 w-full rounded-xl border border-black/15 bg-white px-3 text-sm! ring-emerald-500/0 transition outline-none focus:ring-2"
                      placeholder="#000000 lub rgb(0,0,0)"
                    />
                  </div>
                  <p className="mt-1 text-[11px]! text-[#7a7a7a]">
                    Obsługiwane formaty: <code className="rounded bg-black/5 px-1">#rrggbb</code>, <code className="rounded bg-black/5 px-1">#rgb</code>,{' '}
                    <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>.
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs! font-medium uppercase">Kolor tła (background)</p>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      aria-label="Wybierz kolor tła"
                      className="h-10! w-10! cursor-pointer rounded-xl border border-black/10 bg-white p-0!"
                    />
                    <input
                      type="text"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="h-10 w-full rounded-xl border border-black/15 bg-white px-3 text-sm! ring-emerald-500/0 transition outline-none focus:ring-2"
                      placeholder="#ffffff lub rgb(255,255,255)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                <Button type="button" size="small" onClick={handleSwap}>
                  Zamień kolory miejscami
                </Button>
                <Button type="button" size="small" variant="minimal" onClick={handleReset}>
                  Reset do czarny na białym
                </Button>
              </div>
            </div>
          </form>
        </section>

        <section aria-label="Wyniki testu kontrastu i podgląd" className="space-y-4 rounded-2xl border border-black/10 bg-white/80 p-5 text-sm shadow-sm sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-medium uppercase">
                Współczynnik kontrastu <span className="mt-1 text-xl font-semibold"> {formatRatio(result.ratio)}</span>
              </p>
              {hasError ? (
                <p className="mt-1 text-[11px]! text-red-700">
                  Nie udało się odczytać kolorów. Użyj formatu <code className="rounded bg-black/5 px-1">#rrggbb</code> lub <code className="rounded bg-black/5 px-1">rgb(r,g,b)</code>.
                </p>
              ) : (
                <p className="mt-1 text-[11px]! text-[#6b6b6b]"></p>
              )}
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm! font-semibold uppercase">Tekst zwykły</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge ok={!!result.ratio && result.normalText.AA} label="AA (min. 4.5:1)" />
                <Badge ok={!!result.ratio && result.normalText.AAA} label="AAA (min. 7:1)" />
              </div>
            </div>
            <div
              className="rounded-xl border border-neutral-200 px-3 py-2"
              style={{
                color: foreground,
                backgroundColor: background,
              }}
            >
              <p className="text-sm! leading-snug font-normal">{textSample || 'Przykładowy tekst zwykły'}</p>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
            <div className="items_center flex justify-between gap-2">
              <p className="text-sm! font-semibold uppercase">Tekst duży / pogrubiony</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge ok={!!result.ratio && result.largeText.AA} label="AA (min. 3:1)" />
                <Badge ok={!!result.ratio && result.largeText.AAA} label="AAA (min. 4.5:1)" />
              </div>
            </div>
            <div
              className="rounded-xl border border-neutral-200 px-3 py-2"
              style={{
                color: foreground,
                backgroundColor: background,
              }}
            >
              <p className="text-base! leading-snug font-semibold!">{textSample || 'Przykładowy nagłówek / przycisk'}</p>
            </div>
          </div>

          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm! font-semibold uppercase">Ikona</p>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge ok={!!result.ratio && result.uiGraphics.AA} label="AA (min. 3:1)" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200"
                style={{
                  color: foreground,
                  backgroundColor: background,
                }}
                aria-label="Podgląd ikony na tle"
              >
                <RiContrast2Line className="text-2xl!" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
