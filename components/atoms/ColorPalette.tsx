import { getA11y } from '@/lib/i18n/a11y';
import type { Locale } from '@/types/locale';

interface ColorPaletteProps {
  colors: string[];
  locale: Locale;
}

export default function ColorPalette({ colors, locale }: ColorPaletteProps) {
  if (!colors || colors.length < 2 || colors.length > 6) {
    return null;
  }

  const t = getA11y(locale);

  return (
    <div>
      <div className='flex gap-1'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='h-10 w-10 rounded border border-neutral-200'
            style={{ backgroundColor: color }}
            title={color}
            role='img'
            aria-label={t.colorSwatch(index + 1, color)}
          />
        ))}
      </div>
    </div>
  );
}
