'use client';

import { useCallback, useState } from 'react';
import Button from '@/components/atoms/buttons/Button';
import InputWithLabel from '@/components/molecules/form/InputWithLabel';
import Card from '@/components/organisms/Card';
import { cn } from '@/lib/clsx';
import { getUnitConverterI18n } from '@/lib/i18n/unitConverter';
import { useDictionary, useLocale } from '@/lib/LocaleContext';
import { getUnitLabel } from '@/lib/tools/unitLabels';
import {
  DATA_UNITS,
  convertDataSize,
  dataPrecisionFor,
  type DataStandard,
} from '@/lib/tools/units/dataUnits';
import { formatLocaleNumber } from '@/lib/tools/units/formatLocaleNumber';
import { parseLocaleNumber } from '@/lib/tools/units/parseLocaleNumber';
import { focusRingClasses } from '@/lib/uiClasses';
import { copyTextToClipboard } from '@/utils/clipboard';

/**
 * Any-to-any converter for the whole data-size ladder (B → PB).
 *
 * The directional pair tools each answer one question ("KB to MB"); this one
 * answers all of them, so the units are picked from a always-visible list
 * rather than a dropdown the user has to open first — one click to change
 * either side. The binary/decimal standard sits under both columns because it
 * governs the conversion as a whole, not one field.
 */
export default function DataSizeConverter() {
  const { imageConverter: t } = useDictionary();
  const locale = useLocale();
  const ui = getUnitConverterI18n(locale);

  const [sourceUnit, setSourceUnit] = useState('MB');
  const [targetUnit, setTargetUnit] = useState('KB');
  const [sourceValue, setSourceValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [standard, setStandard] = useState<DataStandard>('binary');
  const [copied, setCopied] = useState(false);

  const format = useCallback(
    (result: number) =>
      Number.isFinite(result)
        ? formatLocaleNumber(result, dataPrecisionFor(result), locale)
        : '',
    [locale],
  );

  /** Recompute the opposite field; `from`/`to` follow whichever side was edited. */
  const recalc = useCallback(
    (raw: string, from: string, to: string, std: DataStandard) => {
      if (!raw.trim()) return '';
      const num = parseLocaleNumber(raw, locale);
      if (Number.isNaN(num)) return '';
      return format(convertDataSize(num, from, to, std));
    },
    [format, locale],
  );

  const handleSource = (raw: string) => {
    setSourceValue(raw);
    setTargetValue(recalc(raw, sourceUnit, targetUnit, standard));
  };

  const handleTarget = (raw: string) => {
    setTargetValue(raw);
    setSourceValue(recalc(raw, targetUnit, sourceUnit, standard));
  };

  /** Changing a unit keeps the source number and refreshes the result. */
  const pickSourceUnit = (symbol: string) => {
    setSourceUnit(symbol);
    setTargetValue(recalc(sourceValue, symbol, targetUnit, standard));
  };

  const pickTargetUnit = (symbol: string) => {
    setTargetUnit(symbol);
    setTargetValue(recalc(sourceValue, sourceUnit, symbol, standard));
  };

  const pickStandard = (std: DataStandard) => {
    setStandard(std);
    setTargetValue(recalc(sourceValue, sourceUnit, targetUnit, std));
  };

  const handleClear = () => {
    setSourceValue('');
    setTargetValue('');
  };

  const handleCopy = async () => {
    if (!targetValue) return;
    await copyTextToClipboard(targetValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /** Spelled-out name of the active unit, for placeholders ("Wpisz megabajty…"). */
  const unitName = (symbol: string) => {
    const unit = DATA_UNITS.find(u => u.symbol === symbol);
    return unit ? getUnitLabel(unit.labelKey, locale).toLowerCase() : symbol;
  };

  const unitList = (
    active: string,
    onPick: (s: string) => void,
    id: string,
  ) => (
    <fieldset className='mt-3'>
      <legend className='sr-only'>{id}</legend>
      <div className='flex flex-wrap gap-2'>
        {DATA_UNITS.map(unit => {
          const isActive = unit.symbol === active;
          return (
            <button
              key={unit.symbol}
              type='button'
              aria-pressed={isActive}
              aria-label={getUnitLabel(unit.labelKey, locale)}
              onClick={() => onPick(unit.symbol)}
              className={cn(
                'min-w-12 cursor-pointer border px-3 py-1.5 text-sm font-semibold transition',
                focusRingClasses,
                isActive
                  ? 'border-primary bg-primary text-white'
                  : 'border-neutral-200 bg-white text-primary hover:border-primary',
              )}
            >
              {unit.symbol}
            </button>
          );
        })}
      </div>
    </fieldset>
  );

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <div className='relative'>
            <InputWithLabel
              label={ui.pickerSource}
              type='text'
              inputMode='decimal'
              value={sourceValue}
              onChange={handleSource}
              placeholder={t.enterValue.replace(
                '{{label}}',
                unitName(sourceUnit),
              )}
            />
            <span className='pointer-events-none absolute top-10 right-8 mt-1.5 font-mono text-sm text-primary-mid'>
              {sourceUnit}
            </span>
          </div>

          {unitList(sourceUnit, pickSourceUnit, ui.pickerSource)}

          <div className='mt-3 flex flex-wrap gap-3'>
            <Button
              onClick={handleClear}
              disabled={!sourceValue && !targetValue}
              className='disabled:opacity-40'
              size='small'
            >
              {t.clearAll}
            </Button>
          </div>
        </Card>

        <Card interactive={false} padding='lg' variant='outlined'>
          <div className='relative'>
            <InputWithLabel
              label={ui.pickerTarget}
              type='text'
              inputMode='decimal'
              value={targetValue}
              onChange={handleTarget}
              placeholder={t.resultIn.replace(
                '{{label}}',
                unitName(targetUnit),
              )}
            />
            <span className='pointer-events-none absolute top-10 right-8 mt-1.5 font-mono text-sm text-primary-mid'>
              {targetUnit}
            </span>
          </div>

          {unitList(targetUnit, pickTargetUnit, ui.pickerTarget)}

          <div className='mt-3 flex flex-wrap gap-3'>
            <Button
              onClick={handleCopy}
              disabled={!targetValue}
              className='disabled:opacity-40'
              size='small'
            >
              {copied ? t.copied : t.copyResult}
            </Button>
          </div>
        </Card>
      </div>

      <Card
        interactive={false}
        padding='lg'
        variant='outlined'
        className='mt-4'
      >
        <fieldset>
          <legend className='mb-2 text-sm font-medium text-primary'>
            {getUnitLabel('dataStandard', locale)}
          </legend>
          <div className='flex flex-wrap gap-2'>
            {(['binary', 'decimal'] as const).map(std => {
              const isActive = std === standard;
              return (
                <button
                  key={std}
                  type='button'
                  aria-pressed={isActive}
                  onClick={() => pickStandard(std)}
                  className={cn(
                    'cursor-pointer border px-3 py-1.5 text-sm transition',
                    focusRingClasses,
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-neutral-200 bg-white text-primary hover:border-primary',
                  )}
                >
                  {getUnitLabel(
                    std === 'binary'
                      ? 'dataStandardBinary'
                      : 'dataStandardDecimal',
                    locale,
                  )}
                </button>
              );
            })}
          </div>
          <p className='mt-2 text-xs text-mid'>
            {getUnitLabel('dataStandardHelp', locale)}{' '}
            {getUnitLabel('dataStandardHint', locale)}.
          </p>
        </fieldset>
      </Card>
    </div>
  );
}
