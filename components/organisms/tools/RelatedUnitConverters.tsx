import Divider from '@/components/atoms/Divider';
import { cn } from '@/lib/clsx';
import { getToolHref, getToolByKey } from '@/lib/i18n/toolRegistry';
import { getUnitConverterI18n } from '@/lib/i18n/unitConverter';
import { getUnitLabel } from '@/lib/tools/unitLabels';
import { UNIT_CONVERSIONS } from '@/lib/tools/units/conversions';
import { flexCenterClasses } from '@/lib/uiClasses';
import type { Locale } from '@/types/locale';
import type { ToolItemKey } from '@/types/tools/common';

type UnitFieldRef = { label?: string; labelKey?: string; suffix: string };

function unitLabel(field: UnitFieldRef, locale: Locale): string {
  if (field.labelKey) return getUnitLabel(field.labelKey, locale);
  return field.suffix || field.label || '';
}

function unitId(field: UnitFieldRef): string {
  return field.suffix || field.labelKey || field.label || '';
}

interface RelatedUnitConvertersProps {
  toolKey: string;
  locale: Locale;
}

export default function RelatedUnitConverters({
  toolKey,
  locale,
}: RelatedUnitConvertersProps) {
  const current = UNIT_CONVERSIONS.find(c => c.toolKey === toolKey);
  if (!current) return null;

  const currentSourceId = unitId(current.sourceField);
  const currentTargetId = unitId(current.targetField);

  const toSameTarget = UNIT_CONVERSIONS.filter(
    c =>
      c.toolKey !== toolKey &&
      unitId(c.targetField) === currentTargetId &&
      getToolHref(c.toolKey as ToolItemKey, locale) !== '#',
  );

  const fromSameSource = UNIT_CONVERSIONS.filter(
    c =>
      c.toolKey !== toolKey &&
      unitId(c.sourceField) === currentSourceId &&
      getToolHref(c.toolKey as ToolItemKey, locale) !== '#',
  );

  const shownKeys = new Set([
    toolKey,
    ...toSameTarget.map(c => c.toolKey),
    ...fromSameSource.map(c => c.toolKey),
  ]);
  const otherConverters = UNIT_CONVERSIONS.filter(
    c =>
      !shownKeys.has(c.toolKey) &&
      getToolHref(c.toolKey as ToolItemKey, locale) !== '#',
  );

  if (
    toSameTarget.length === 0 &&
    fromSameSource.length === 0 &&
    otherConverters.length === 0
  )
    return null;

  const targetUnitLabel = unitLabel(current.targetField, locale);
  const sourceUnitLabel = unitLabel(current.sourceField, locale);

  const ui = getUnitConverterI18n(locale);
  const titleTo = ui.titleConvertTo(targetUnitLabel);
  const titleFrom = ui.titleConvertFrom(sourceUnitLabel);
  const titleOther = ui.titleOtherConverters;

  return (
    <>
      {toSameTarget.length > 0 && (
        <section className='mb-2'>
          <h2 className='h3 mb-4 md:mb-6'>{titleTo}</h2>
          <ConverterGrid converters={toSameTarget} locale={locale} />
        </section>
      )}

      {fromSameSource.length > 0 && (
        <>
          {toSameTarget.length > 0 && <Divider line />}
          <section className='mb-2'>
            <h2 className='h3 mb-4 md:mb-6'>{titleFrom}</h2>
            <ConverterGrid converters={fromSameSource} locale={locale} />
          </section>
        </>
      )}

      {otherConverters.length > 0 && (
        <>
          {(toSameTarget.length > 0 || fromSameSource.length > 0) && (
            <Divider line />
          )}
          <section className='mb-2'>
            <h2 className='h3 mb-4 md:mb-6'>{titleOther}</h2>
            <ConverterGrid converters={otherConverters} locale={locale} />
          </section>
        </>
      )}

      <Divider line />
    </>
  );
}

/**
 * Render a responsive grid of links for related unit converters.
 *
 * @param converters - List of converters to render; each item must include `toolKey`, `sourceField`, and `targetField`.
 * @param locale - Locale used to select localized tool titles, unit labels, and connector text.
 * @returns A grid element containing one link per converter (skipping entries whose tool href is `'#'`). Each link uses the tool's localized title when available, otherwise the constructed "`source` {connector} `target`" label.
 */
function ConverterGrid({
  converters,
  locale,
}: {
  converters: {
    toolKey: string;
    sourceField: UnitFieldRef;
    targetField: UnitFieldRef;
  }[];
  locale: Locale;
}) {
  const connector = getUnitConverterI18n(locale).connector;

  return (
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4'>
      {converters.map(c => {
        const href = getToolHref(c.toolKey as ToolItemKey, locale);
        if (href === '#') return null;
        const tool = getToolByKey(c.toolKey as ToolItemKey);
        const label =
          tool?.locales[locale]?.title ??
          `${unitLabel(c.sourceField, locale)} ${connector} ${unitLabel(c.targetField, locale)}`;

        return (
          <a
            key={c.toolKey}
            href={href}
            className={cn(
              'border border-primary/20 bg-white px-2 py-2.5 text-center text-xs font-semibold transition-colors hover:border-primary/40 hover:bg-primary/5',
              flexCenterClasses,
            )}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}
