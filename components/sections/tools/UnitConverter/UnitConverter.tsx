'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import { useDictionary, useLocale } from '@/lib/LocaleContext';
import { getUnitLabel } from '@/utils/locale-utils';

import FormatSelector from '@/components/sections/tools/FormatPicker/FormatSelector';

import { getUnitConversion } from './conversions';
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, rgbToCmyk, cmykToRgb, decToBin, binToDec, decToHex as decToHexStr, hexToDec, unixToDate, dateToUnix } from './specialConverters';
import type { UnitConverterProps } from './types';

export default function UnitConverter({ toolKey }: UnitConverterProps) {
  const { imageConverter: t } = useDictionary();
  const locale = useLocale();
  const config = useMemo(() => getUnitConversion(toolKey), [toolKey]);

  // Helper to resolve label from labelKey or fallback to label
  const resolveLabel = (field: { label?: string; labelKey?: string }) => (field.labelKey ? getUnitLabel(field.labelKey, locale) : (field.label ?? ''));

  const [sourceValue, setSourceValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [extraValue, setExtraValue] = useState<number>(config?.extraField?.defaultValue ?? 0);
  const [isReversed, setIsReversed] = useState(false);
  const [copied, setCopied] = useState(false);

  const isSpecial = useMemo(() => ['hexToRgb', 'rgbToHsl', 'rgbToCmyk', 'unixTimestamp', 'decToBin', 'decToHex'].includes(toolKey), [toolKey]);

  const doConvert = useCallback(
    (input: string, reverse: boolean) => {
      if (!config || !input.trim()) return '';

      if (isSpecial) {
        try {
          switch (toolKey) {
            case 'hexToRgb':
              return reverse ? rgbToHex(input) : hexToRgb(input);
            case 'rgbToHsl':
              return reverse ? hslToRgb(input) : rgbToHsl(input);
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
      }

      const num = parseFloat(input.replace(',', '.'));
      if (isNaN(num)) return '';

      const result = reverse ? config.reverseConvert(num, extraValue ?? undefined) : config.convert(num, extraValue ?? undefined);

      if (isNaN(result) || !isFinite(result)) return '';
      return config.precision === 0 ? Math.round(result).toString() : result.toFixed(config.precision);
    },
    [config, isSpecial, toolKey, extraValue],
  );

  // Auto-convert on source change
  useEffect(() => {
    if (!sourceValue.trim()) {
      setTargetValue('');
      return;
    }
    const result = doConvert(sourceValue, isReversed);
    setTargetValue(result);
  }, [sourceValue, doConvert, isReversed]);

  const handleSourceChange = useCallback((val: string) => {
    setSourceValue(val);
  }, []);

  const handleTargetChange = useCallback(
    (val: string) => {
      setTargetValue(val);
      if (!val.trim()) {
        setSourceValue('');
        return;
      }
      const result = doConvert(val, !isReversed);
      setSourceValue(result);
    },
    [doConvert, isReversed],
  );

  const handleSwap = useCallback(() => {
    if (!config?.swappable) return;
    setIsReversed((prev) => !prev);
    const temp = sourceValue;
    setSourceValue(targetValue);
    setTargetValue(temp);
  }, [config, sourceValue, targetValue]);

  const handleCopy = useCallback(async () => {
    const valueToCopy = targetValue;
    if (!valueToCopy) return;
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = valueToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [targetValue]);

  const handleClear = useCallback(() => {
    setSourceValue('');
    setTargetValue('');
    setCopied(false);
  }, []);

  if (!config) return null;

  const srcFieldConfig = isReversed ? config.targetField : config.sourceField;
  const tgtFieldConfig = isReversed ? config.sourceField : config.targetField;
  const srcLabel = resolveLabel(srcFieldConfig);
  const tgtLabel = resolveLabel(tgtFieldConfig);
  const extraLabel = config.extraField ? resolveLabel(config.extraField) : '';

  return (
    <div>
      <FormatSelector unitToolKey={toolKey} />

      {/* Main converter */}
      <div className="grid gap-4 md:grid-cols-2">
        <ToolSection className="space-y-3">
          <h2 className="h6">{srcLabel}</h2>
          <div className="relative">
            <input
              type={isSpecial ? 'text' : 'number'}
              inputMode={isSpecial ? 'text' : 'decimal'}
              className="tool-textarea w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4 pr-16 font-mono text-lg transition outline-none focus:border-neutral-300 focus:bg-white"
              value={sourceValue}
              onChange={(e) => handleSourceChange(e.target.value)}
              placeholder={srcFieldConfig.placeholder ?? t.enterValue.replace('{{label}}', srcLabel.toLowerCase())}
              spellCheck={false}
            />
            {srcFieldConfig.suffix && <span className="text-primary-mid pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 font-mono text-sm">{srcFieldConfig.suffix}</span>}
          </div>

          {config.extraField && (
            <div className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-white p-3">
              <label className="text-mid text-sm font-medium whitespace-nowrap">{extraLabel}:</label>
              <input
                type="number"
                className="w-24 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-center font-mono text-sm transition outline-none focus:border-neutral-300 focus:bg-white"
                value={extraValue}
                onChange={(e) => setExtraValue(parseFloat(e.target.value) || 0)}
                min={config.extraField.min}
                max={config.extraField.max}
                step={config.extraField.step}
              />
              <span className="text-primary-mid text-sm">{config.extraField.suffix}</span>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {config.swappable && (
              <Button onClick={handleSwap} size="small" className="gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                {t.swapOrder}
              </Button>
            )}
            <Button onClick={handleClear} disabled={!sourceValue && !targetValue} className="disabled:opacity-40" size="small">
              {t.clearAll}
            </Button>
          </div>
        </ToolSection>

        <ToolSection className="space-y-3">
          <h2 className="h6">{tgtLabel}</h2>
          <div className="relative">
            <input
              type={isSpecial ? 'text' : 'number'}
              inputMode={isSpecial ? 'text' : 'decimal'}
              className="tool-textarea w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4 pr-16 font-mono text-lg transition outline-none focus:border-neutral-300 focus:bg-white"
              value={targetValue}
              onChange={(e) => handleTargetChange(e.target.value)}
              placeholder={tgtFieldConfig.placeholder ?? t.resultIn.replace('{{label}}', tgtLabel.toLowerCase())}
              readOnly={isSpecial}
              spellCheck={false}
            />
            {tgtFieldConfig.suffix && <span className="text-primary-mid pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 font-mono text-sm">{tgtFieldConfig.suffix}</span>}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={handleCopy} disabled={!targetValue} className="disabled:opacity-40" size="small">
              {copied ? t.copied : t.copyResult}
            </Button>
          </div>
        </ToolSection>
      </div>
    </div>
  );
}
