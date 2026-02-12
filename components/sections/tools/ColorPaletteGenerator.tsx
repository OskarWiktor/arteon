'use client';

import { useMemo, useState, type FormEvent } from 'react';
import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import ToolColorSwatch from '@/components/ui/tools/ToolColorSwatch';
import ToolColorInput from '@/components/ui/tools/ToolColorInput';
import { useTimeout } from '@/hooks/useTimeout';
import { formatHsl, normalizeHex, randomHexColor, rgbToHex } from '@/lib/tools/color/convert';
import { createPaletteFromHex, type PaletteGroupId } from '@/lib/tools/color/palette';
import { useLocale } from '@/lib/LocaleContext';
import { ui } from '@/lib/i18n/tools/color-palette';

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
            <ToolColorInput value={inputColor} onChange={setInputColor} ariaLabel={t.selectBaseColor} placeholder={DEFAULT_BASE_COLOR} inputClassName="h-10 w-32" />

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
