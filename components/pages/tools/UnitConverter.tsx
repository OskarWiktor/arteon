'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Button from '@/components/atoms/buttons/Button';
import InputWithLabel from '@/components/molecules/form/InputWithLabel';
import Card from '@/components/organisms/Card';
import FormatSelector from '@/components/organisms/tools/FormatPicker/FormatSelector';
import { getToolHref } from '@/lib/i18n/toolRegistry';
import { useDictionary, useLocale } from '@/lib/LocaleContext';
import { getUnitLabel } from '@/lib/tools/unitLabels';
import { getUnitConversion } from '@/lib/tools/units/conversions';
import { formatLocaleNumber } from '@/lib/tools/units/formatLocaleNumber';
import { parseLocaleNumber } from '@/lib/tools/units/parseLocaleNumber';
import {
  hexToRgb,
  rgbToHex,
  rgbToCmyk,
  cmykToRgb,
  decToBin,
  binToDec,
  decToHex as decToHexStr,
  hexToDec,
  unixToDate,
  dateToUnix,
} from '@/lib/tools/units/specialConverters';
import type { ToolItemKey } from '@/types/tools/common';
import { copyTextToClipboard } from '@/utils/clipboard';

interface UnitConverterProps {
  toolKey: ToolItemKey;
}

/**
 * Render a two-field unit conversion UI for the provided conversion tool key.
 *
 * The component looks up conversion configuration for `toolKey` and renders source/target inputs,
 * optional extra numeric input, swap/clear/copy controls, and localized labels/placeholders.
 *
 * @param toolKey - The conversion tool identifier used to resolve conversion logic and field configuration
 * @returns A React element containing the conversion UI, or `null` when no conversion configuration is available
 */
export default function UnitConverter({ toolKey }: UnitConverterProps) {
  const { imageConverter: t } = useDictionary();
  const locale = useLocale();
  const router = useRouter();
  const config = getUnitConversion(toolKey);

  // Helper to resolve label from labelKey or fallback to label
  const resolveLabel = (field: { label?: string; labelKey?: string }) =>
    field.labelKey ? getUnitLabel(field.labelKey, locale) : (field.label ?? '');

  const [sourceValue, setSourceValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [extraValue, setExtraValue] = useState<number>(
    config?.extraField?.defaultValue ?? 0,
  );
  const [isReversed, setIsReversed] = useState(false);
  const [copied, setCopied] = useState(false);

  const isSpecial = [
    'hexToRgb',
    'rgbToHsl',
    'rgbToCmyk',
    'unixTimestamp',
    'decToBin',
    'decToHex',
  ].includes(toolKey);

  const convertSpecial = useCallback(
    (input: string, reverse: boolean) => {
      try {
        switch (toolKey) {
          case 'hexToRgb':
            return reverse ? rgbToHex(input) : hexToRgb(input);
          case 'rgbToCmyk':
            return reverse ? cmykToRgb(input) : rgbToCmyk(input);
          case 'unixTimestamp':
            return reverse ? dateToUnix(input) : unixToDate(input);
          case 'decToBin':
            return reverse ? binToDec(input) : decToBin(input);
          case 'decToHex':
            return reverse ? hexToDec(input) : decToHexStr(input);
          default:
            return '';
        }
      } catch {
        return '';
      }
    },
    [toolKey],
  );

  const convertNumeric = useCallback(
    (input: string, reverse: boolean) => {
      if (!config) return '';

      const num = parseLocaleNumber(input, locale);
      if (isNaN(num)) return '';

      const result = reverse
        ? config.reverseConvert(num, extraValue ?? undefined)
        : config.convert(num, extraValue ?? undefined);

      if (isNaN(result) || !isFinite(result)) return '';
      return formatLocaleNumber(result, config.precision, locale);
    },
    [config, extraValue, locale],
  );

  const doConvert = useCallback(
    (input: string, reverse: boolean) => {
      if (!config || !input.trim()) return '';
      return isSpecial
        ? convertSpecial(input, reverse)
        : convertNumeric(input, reverse);
    },
    [config, isSpecial, convertSpecial, convertNumeric],
  );

  useEffect(() => {
    if (!sourceValue.trim()) {
      setTargetValue('');
      return;
    }
    setTargetValue(doConvert(sourceValue, isReversed));
  }, [sourceValue, doConvert, isReversed]);

  // Numeric fields are rendered as type="text" (not type="number") so the
  // raw localized string reaches parseLocaleNumber intact — a type="number"
  // input silently strips the comma from "33,3", turning it into 333 and
  // producing a 10x wrong result. Here we drop any character that can't be
  // part of a number so pasting letters can't corrupt the field.
  const sanitizeNumericInput = (val: string) =>
    isSpecial ? val : val.replace(/[^\d.,\s-]/g, '');

  const handleSourceChange = (raw: string) => {
    setSourceValue(sanitizeNumericInput(raw));
  };

  const handleTargetChange = (raw: string) => {
    const val = sanitizeNumericInput(raw);
    setTargetValue(val);
    if (!val.trim()) {
      setSourceValue('');
      return;
    }
    setSourceValue(doConvert(val, !isReversed));
  };

  const handleSwap = () => {
    if (!config?.swappable) return;

    // If a dedicated reciprocal page exists for this locale (its own slug
    // and SEO content with the units in the opposite order), navigate
    // there instead of just flipping the fields in place.
    if (config.reverseToolKey) {
      const reverseHref = getToolHref(config.reverseToolKey, locale);
      if (reverseHref !== '#') {
        router.push(reverseHref);
        return;
      }
    }

    setIsReversed(prev => !prev);
    const temp = sourceValue;
    setSourceValue(targetValue);
    setTargetValue(temp);
  };

  const handleCopy = async () => {
    const valueToCopy = targetValue;
    if (!valueToCopy) return;
    await copyTextToClipboard(valueToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setSourceValue('');
    setTargetValue('');
    setCopied(false);
  };

  if (!config) return null;

  const srcFieldConfig = isReversed ? config.targetField : config.sourceField;
  const tgtFieldConfig = isReversed ? config.sourceField : config.targetField;
  const srcLabel = resolveLabel(srcFieldConfig);
  const tgtLabel = resolveLabel(tgtFieldConfig);
  const extraLabel = config.extraField ? resolveLabel(config.extraField) : '';

  return (
    <div>
      <div className='grid gap-4 md:grid-cols-2'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <div className='relative'>
            <InputWithLabel
              label={srcLabel}
              type='text'
              inputMode={isSpecial ? 'text' : 'decimal'}
              value={sourceValue}
              onChange={handleSourceChange}
              placeholder={
                srcFieldConfig.placeholder ??
                t.enterValue.replace('{{label}}', srcLabel.toLowerCase())
              }
            />
            {srcFieldConfig.suffix && (
              <span className='pointer-events-none absolute top-10 right-8 mt-1.5 font-mono text-sm text-primary-mid'>
                {srcFieldConfig.suffix}
              </span>
            )}
          </div>

          {config.extraField && (
            <div className='flex flex-row'>
              <InputWithLabel
                label={extraLabel}
                type='number'
                value={String(extraValue)}
                onChange={v => setExtraValue(parseFloat(v) || 0)}
                min={config.extraField.min}
                max={config.extraField.max}
                step={config.extraField.step}
              />
            </div>
          )}

          <div className='flex flex-wrap gap-3'>
            {config.swappable && (
              <Button onClick={handleSwap} size='small' className='gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4' />
                </svg>
                {t.swapOrder}
              </Button>
            )}
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
              label={tgtLabel}
              type='text'
              inputMode={isSpecial ? 'text' : 'decimal'}
              value={targetValue}
              onChange={handleTargetChange}
              placeholder={
                tgtFieldConfig.placeholder ??
                t.resultIn.replace('{{label}}', tgtLabel.toLowerCase())
              }
              readOnly={isSpecial}
            />
            {tgtFieldConfig.suffix && (
              <span className='pointer-events-none absolute top-10 right-8 mt-1.5 font-mono text-sm text-primary-mid'>
                {tgtFieldConfig.suffix}
              </span>
            )}
          </div>

          <div className='flex flex-wrap gap-3'>
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
      <FormatSelector unitToolKey={toolKey} />
    </div>
  );
}
