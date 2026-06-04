import type { ToolItemKey } from '@/types/tools/common';
import {
  CSS_CONVERSION_FACTORS,
  CONVERSION_PRECISION,
  POPULAR_CSS_VALUES,
  RANGE_CONSTRAINTS,
  CONVERSION_FORMULAS,
} from '@/utils/conversionConstants';

type UnitCategory =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'pressure'
  | 'power'
  | 'css'
  | 'color'
  | 'data'
  | 'time'
  | 'math'
  | 'energy';

interface UnitField {
  label?: string;
  labelKey?: string;
  suffix: string;
  placeholder?: string;
}

interface ExtraField {
  key: string;
  label?: string;
  labelKey?: string;
  suffix: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

interface PopularValue {
  source: number | string;
  target: number | string;
  label?: string;
  labelKey?: string;
}

export interface UnitConversionConfig {
  toolKey: ToolItemKey;
  category: UnitCategory;
  sourceField: UnitField;
  targetField: UnitField;
  extraField?: ExtraField;
  convert: (value: number, extra?: number) => number;
  reverseConvert: (value: number, extra?: number) => number;
  formula: string;
  reverseFormula: string;
  precision: number;
  popularValues: PopularValue[];
  swappable: boolean;
}

export const UNIT_CONVERSIONS: UnitConversionConfig[] = [
  {
    toolKey: 'ptToPx',
    category: 'css',
    sourceField: { labelKey: 'points', suffix: 'pt' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    convert: v => v * CSS_CONVERSION_FACTORS.PT_TO_PX,
    reverseConvert: v => v * CSS_CONVERSION_FACTORS.PX_TO_PT,
    formula: CONVERSION_FORMULAS.PT_TO_PX,
    reverseFormula: CONVERSION_FORMULAS.PX_TO_PT,
    precision: CONVERSION_PRECISION.DEFAULT,
    swappable: true,
    popularValues: POPULAR_CSS_VALUES.PT_TO_PX,
  },

  {
    toolKey: 'remToPx',
    category: 'css',
    sourceField: { labelKey: 'rem', suffix: 'rem' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'baseFontSize',
      labelKey: 'baseFontSize',
      suffix: 'px',
      defaultValue: CSS_CONVERSION_FACTORS.DEFAULT_BASE_FONT_SIZE,
      ...RANGE_CONSTRAINTS.BASE_FONT_SIZE,
    },
    convert: (v, extra) => v * (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_BASE_FONT_SIZE),
    reverseConvert: (v, extra) => v / (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_BASE_FONT_SIZE),
    formula: CONVERSION_FORMULAS.REM_TO_PX,
    reverseFormula: CONVERSION_FORMULAS.PX_TO_REM,
    precision: CONVERSION_PRECISION.DEFAULT,
    swappable: true,
    popularValues: POPULAR_CSS_VALUES.REM_TO_PX,
  },

  {
    toolKey: 'emToPx',
    category: 'css',
    sourceField: { labelKey: 'em', suffix: 'em' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'parentFontSize',
      labelKey: 'parentFontSize',
      suffix: 'px',
      defaultValue: CSS_CONVERSION_FACTORS.DEFAULT_PARENT_FONT_SIZE,
      ...RANGE_CONSTRAINTS.PARENT_FONT_SIZE,
    },
    convert: (v, extra) => v * (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_PARENT_FONT_SIZE),
    reverseConvert: (v, extra) => v / (extra ?? CSS_CONVERSION_FACTORS.DEFAULT_PARENT_FONT_SIZE),
    formula: CONVERSION_FORMULAS.EM_TO_PX,
    reverseFormula: CONVERSION_FORMULAS.PX_TO_EM,
    precision: CONVERSION_PRECISION.DEFAULT,
    swappable: true,
    popularValues: POPULAR_CSS_VALUES.EM_TO_PX,
  },

  {
    toolKey: 'cmToPxDpi',
    category: 'css',
    sourceField: { labelKey: 'centimeters', suffix: 'cm' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * (extra ?? 96)) / 2.54,
    reverseConvert: (v, extra) => (v * 2.54) / (extra ?? 96),
    formula: 'px = cm \u00D7 DPI \u00F7 2,54',
    reverseFormula: 'cm = px \u00D7 2,54 \u00F7 DPI',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: 1, target: 38, label: '96 DPI' },
      { source: 2.54, target: 96, labelKey: 'oneInch96dpi' },
      { source: 5, target: 189 },
      { source: 10, target: 378 },
      { source: 21, target: 794, labelKey: 'a4Width96dpi' },
      { source: 29.7, target: 1123, labelKey: 'a4Height96dpi' },
    ],
  },

  {
    toolKey: 'pxToCmDpi',
    category: 'css',
    sourceField: { labelKey: 'pixels', suffix: 'px' },
    targetField: { labelKey: 'centimeters', suffix: 'cm' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * 2.54) / (extra ?? 96),
    reverseConvert: (v, extra) => (v * (extra ?? 96)) / 2.54,
    formula: 'cm = px × 2,54 ÷ DPI',
    reverseFormula: 'px = cm × DPI ÷ 2,54',
    precision: 2,
    swappable: true,
    popularValues: [
      { source: 96, target: 2.54, labelKey: 'oneInch96dpi' },
      { source: 378, target: 10 },
      { source: 794, target: 21, labelKey: 'a4Width96dpi' },
      { source: 1080, target: 28.58, label: 'Full HD' },
      { source: 1123, target: 29.7, labelKey: 'a4Height96dpi' },
      { source: 1920, target: 50.8, label: 'Full HD' },
    ],
  },

  {
    toolKey: 'mmToPxDpi',
    category: 'css',
    sourceField: { labelKey: 'millimeters', suffix: 'mm' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => (v * (extra ?? 96)) / 25.4,
    reverseConvert: (v, extra) => (v * 25.4) / (extra ?? 96),
    formula: 'px = mm \u00D7 DPI \u00F7 25,4',
    reverseFormula: 'mm = px \u00D7 25,4 \u00F7 DPI',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: 1, target: 4, label: '96 DPI' },
      { source: 10, target: 38 },
      { source: 25.4, target: 96, labelKey: 'oneInch96dpi' },
      { source: 100, target: 378 },
      { source: 210, target: 794, labelKey: 'a4Width96dpi' },
      { source: 297, target: 1123, labelKey: 'a4Height96dpi' },
    ],
  },

  {
    toolKey: 'inchesToPxDpi',
    category: 'css',
    sourceField: { labelKey: 'inches', suffix: 'in' },
    targetField: { labelKey: 'pixels', suffix: 'px' },
    extraField: {
      key: 'dpi',
      labelKey: 'dpiPpi',
      suffix: 'dpi',
      defaultValue: 96,
      min: 1,
      max: 2400,
      step: 1,
    },
    convert: (v, extra) => v * (extra ?? 96),
    reverseConvert: (v, extra) => v / (extra ?? 96),
    formula: 'px = in \u00D7 DPI',
    reverseFormula: 'in = px \u00F7 DPI',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: 1, target: 96, label: '96 DPI' },
      { source: 1, target: 300, labelKey: 'print300dpi' },
      { source: 2, target: 192 },
      { source: 5, target: 480 },
      { source: 8.27, target: 794, labelKey: 'a4Width96dpi' },
      { source: 11.69, target: 1123, labelKey: 'a4Height96dpi' },
    ],
  },

  {
    toolKey: 'dpiToPpi',
    category: 'css',
    sourceField: { labelKey: 'dpi', suffix: 'dpi' },
    targetField: { labelKey: 'ppi', suffix: 'ppi' },
    convert: v => v,
    reverseConvert: v => v,
    formula: 'PPI = DPI (1:1)',
    reverseFormula: 'DPI = PPI (1:1)',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: 72, target: 72, labelKey: 'macOsClassic' },
      { source: 96, target: 96, labelKey: 'windowsDefault' },
      { source: 150, target: 150, labelKey: 'economyPrint' },
      { source: 264, target: 264, label: 'iPad Retina' },
      { source: 300, target: 300, labelKey: 'photoPrint' },
      { source: 460, target: 460, label: 'iPhone 15 Pro' },
    ],
  },

  {
    toolKey: 'hexToRgb',
    category: 'color',
    sourceField: { labelKey: 'hex', suffix: '', placeholder: '#3B82F6' },
    targetField: { labelKey: 'rgb', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    formula:
      'R = parseInt(hex[1..2], 16), G = parseInt(hex[3..4], 16), B = parseInt(hex[5..6], 16)',
    reverseFormula: 'HEX = # + R.toString(16) + G.toString(16) + B.toString(16)',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: '#000000', target: 'rgb(0, 0, 0)', labelKey: 'black' },
      { source: '#FFFFFF', target: 'rgb(255, 255, 255)', labelKey: 'white' },
      { source: '#FF0000', target: 'rgb(255, 0, 0)', labelKey: 'red' },
      { source: '#00FF00', target: 'rgb(0, 255, 0)', labelKey: 'green' },
      { source: '#0000FF', target: 'rgb(0, 0, 255)', labelKey: 'blue' },
      { source: '#3B82F6', target: 'rgb(59, 130, 246)', label: 'Blue-500' },
    ],
  },

  {
    toolKey: 'rgbToCmyk',
    category: 'color',
    sourceField: { labelKey: 'rgb', suffix: '', placeholder: '59, 130, 246' },
    targetField: { labelKey: 'cmyk', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    formula: 'K=1-max(R,G,B)/255, C=(1-R/255-K)/(1-K), M=(1-G/255-K)/(1-K), Y=(1-B/255-K)/(1-K)',
    reverseFormula: 'R=255(1-C)(1-K), G=255(1-M)(1-K), B=255(1-Y)(1-K)',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: '0, 0, 0', target: 'cmyk(0%, 0%, 0%, 100%)', labelKey: 'black' },
      { source: '255, 255, 255', target: 'cmyk(0%, 0%, 0%, 0%)', labelKey: 'white' },
      { source: '255, 0, 0', target: 'cmyk(0%, 100%, 100%, 0%)', labelKey: 'red' },
      { source: '0, 128, 0', target: 'cmyk(100%, 0%, 100%, 50%)', labelKey: 'green' },
      { source: '0, 0, 255', target: 'cmyk(100%, 100%, 0%, 0%)', labelKey: 'blue' },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // B. Programming / technical (7)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    toolKey: 'bytesConverter',
    category: 'data',
    sourceField: { labelKey: 'bytes', suffix: 'B' },
    targetField: { labelKey: 'kilobytes', suffix: 'KB' },
    convert: v => v / 1024,
    reverseConvert: v => v * 1024,
    formula: 'KB = B \u00F7 1024',
    reverseFormula: 'B = KB \u00D7 1024',
    precision: 4,
    swappable: true,
    popularValues: [
      { source: 1024, target: 1, label: '1 KB' },
      { source: 1048576, target: 1024, label: '1 MB' },
      { source: 1073741824, target: 1048576, label: '1 GB' },
      { source: 5242880, target: 5120, label: '5 MB' },
      { source: 10485760, target: 10240, label: '10 MB' },
      { source: 104857600, target: 102400, label: '100 MB' },
    ],
  },

  {
    toolKey: 'unixTimestamp',
    category: 'time',
    sourceField: { labelKey: 'unixTimestamp', suffix: 's', placeholder: '1700000000' },
    targetField: { labelKey: 'dateTime', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    formula: 'date = new Date(timestamp \u00D7 1000)',
    reverseFormula: 'timestamp = Date.getTime() \u00F7 1000',
    precision: 0,
    swappable: false,
    popularValues: [
      { source: 0, target: '1970-01-01 01:00:00', labelKey: 'unixEpoch' },
      { source: 1000000000, target: '2001-09-09 03:46:40', labelKey: 'oneBillion' },
      { source: 1700000000, target: '2023-11-14 23:13:20' },
      { source: 1735689600, target: '2025-01-01 01:00:00', labelKey: 'newYear2025' },
      { source: 2000000000, target: '2033-05-18 05:33:20', labelKey: 'twoBillion' },
    ],
  },

  {
    toolKey: 'decToBin',
    category: 'math',
    sourceField: { labelKey: 'decimal', suffix: '', placeholder: '255' },
    targetField: { labelKey: 'binary', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    formula: 'bin = dec.toString(2)',
    reverseFormula: 'dec = parseInt(bin, 2)',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: '1', target: '1' },
      { source: '8', target: '1000' },
      { source: '10', target: '1010' },
      { source: '16', target: '10000' },
      { source: '128', target: '10000000' },
      { source: '255', target: '11111111', labelKey: 'maxByte' },
      { source: '1024', target: '10000000000', label: '1 KB' },
    ],
  },

  {
    toolKey: 'decToHex',
    category: 'math',
    sourceField: { labelKey: 'decimal', suffix: '', placeholder: '255' },
    targetField: { labelKey: 'hexadecimal', suffix: '' },
    convert: () => 0,
    reverseConvert: () => 0,
    formula: 'hex = dec.toString(16).toUpperCase()',
    reverseFormula: 'dec = parseInt(hex, 16)',
    precision: 0,
    swappable: true,
    popularValues: [
      { source: '10', target: 'A' },
      { source: '16', target: '10' },
      { source: '128', target: '80' },
      { source: '255', target: 'FF', labelKey: 'maxByte' },
      { source: '256', target: '100' },
      { source: '65535', target: 'FFFF', label: '16-bit max' },
      { source: '16777215', target: 'FFFFFF', labelKey: 'whiteRgb' },
    ],
  },

  {
    toolKey: 'mbpsToMBs',
    category: 'data',
    sourceField: { labelKey: 'megabitsPerSec', suffix: 'Mbps' },
    targetField: { labelKey: 'megabytesPerSec', suffix: 'MB/s' },
    convert: v => v / 8,
    reverseConvert: v => v * 8,
    formula: 'MB/s = Mbps \u00F7 8',
    reverseFormula: 'Mbps = MB/s \u00D7 8',
    precision: 2,
    swappable: true,
    popularValues: [
      { source: 10, target: 1.25, label: 'ADSL' },
      { source: 50, target: 6.25, label: 'LTE' },
      { source: 100, target: 12.5, labelKey: 'fiber100' },
      { source: 300, target: 37.5, labelKey: 'fiber300' },
      { source: 500, target: 62.5, labelKey: 'fiber500' },
      { source: 1000, target: 125, label: '1 Gbps' },
    ],
  },
];

export function getUnitConversion(toolKey: string): UnitConversionConfig | undefined {
  return UNIT_CONVERSIONS.find(c => c.toolKey === toolKey);
}
