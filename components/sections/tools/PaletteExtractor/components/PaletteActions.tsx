'use client';

import Button from '@/components/ui/buttons/Button';
import CopyButton from '@/components/ui/buttons/CopyButton';
import type { ExtractedColor } from '@/lib/tools/color/extractPalette';

const ui = {
  pl: {
    actions: 'Akcje',
    copyPalette: 'Kopiuj paletę',
    copied: 'Skopiowano',
    clear: 'Wyczyść',
  },
} as const;

interface PaletteActionsProps {
  colors: ExtractedColor[];
  clearDisabled?: boolean;
  onClear: () => void;
}

export default function PaletteActions({ colors, clearDisabled, onClear }: PaletteActionsProps) {
  const t = ui.pl;

  const paletteText = colors.map((c) => c.hex).join('\n');
  const hasColors = colors.length > 0;

  return (
    <div>
      <p className="mb-2 text-sm text-dark font-semibold uppercase">{t.actions}</p>
      <div className="flex flex-wrap gap-2">
        {hasColors && <CopyButton text={paletteText} label={t.copyPalette} copiedLabel={t.copied} />}
        <Button onClick={onClear} type="button" size="small" disabled={!!clearDisabled} className="disabled:opacity-40">
          {t.clear}
        </Button>
      </div>
    </div>
  );
}
