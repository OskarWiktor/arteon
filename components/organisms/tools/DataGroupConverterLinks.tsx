import { cn } from '@/lib/clsx';
import { getToolHref } from '@/lib/i18n/toolRegistry';
import { getUnitConverterI18n } from '@/lib/i18n/unitConverter';
import { UNIT_CONVERSIONS } from '@/lib/tools/units/conversions';
import { flexCenterClasses } from '@/lib/uiClasses';
import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';

interface DataGroupConverterLinksProps {
  toolKey: string;
  locale: Locale;
}

/**
 * Bare link grid to every directional converter in the data-size group,
 * rendered right under the any-to-any hub tool (between the converter and the
 * first ad), with no heading of its own — per explicit design decision.
 *
 * The list is derived from the data-size entries in UNIT_CONVERSIONS that have
 * a page in this locale, so future pairs join automatically.
 */
export default function DataGroupConverterLinks({
  toolKey,
  locale,
}: DataGroupConverterLinksProps) {
  if (toolKey !== 'dataSizeConverter') return null;

  const connector = getUnitConverterI18n(locale).connector;
  const converters = UNIT_CONVERSIONS.filter(
    c =>
      c.category === 'data' &&
      getToolHref(c.toolKey as ToolItemKey, locale) !== '#',
  );

  if (converters.length === 0) return null;

  return (
    <div className='mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
      {converters.map(c => (
        <a
          key={c.toolKey}
          href={getToolHref(c.toolKey as ToolItemKey, locale)}
          className={cn(
            'border border-primary/20 bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors hover:border-primary/40 hover:bg-primary/5',
            flexCenterClasses,
          )}
        >
          {`${c.sourceField.suffix} ${connector} ${c.targetField.suffix}`}
        </a>
      ))}
    </div>
  );
}
