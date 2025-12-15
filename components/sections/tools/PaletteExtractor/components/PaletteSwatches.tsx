'use client';

import CopyButton from '@/components/ui/buttons/CopyButton';
import type { ExtractedColor } from '@/lib/tools/color/extractPalette';

const ui = {
  pl: {
    palette: 'Paleta kolorów',
    colorPreview: 'Podgląd koloru',
    copy: 'Kopiuj',
    copied: 'Skopiowano',
    empty: 'Brak kolorów do wyświetlenia.',
  },
} as const;

interface PaletteSwatchesProps {
  colors: ExtractedColor[];
}

export default function PaletteSwatches({ colors }: PaletteSwatchesProps) {
  const t = ui.pl;

  if (colors.length === 0) {
    return <p className="text-xs text-light">{t.empty}</p>;
  }

  return (
    <div className="space-y-3" aria-label={t.palette}>
      <div className="grid gap-2 sm:grid-cols-2">
        {colors.map((color) => (
          <div key={color.hex} className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
            <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: color.hex }} aria-label={`${t.colorPreview} ${color.hex}`} />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-dark leading-tight font-medium">{color.hex}</p>
              <p className="truncate text-[11px]! text-light">rgb({color.rgb.r}, {color.rgb.g}, {color.rgb.b})</p>
            </div>
            <CopyButton text={color.hex} label={t.copy} copiedLabel={t.copied} />
          </div>
        ))}
      </div>
    </div>
  );
}
