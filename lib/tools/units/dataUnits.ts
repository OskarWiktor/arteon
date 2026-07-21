/**
 * The whole data-size ladder in one place, shared by the any-to-any converter,
 * its group-link block and the tests.
 *
 * The directional pair converters (kbToMb, mbToGb, …) each hard-code a single
 * factor because they only ever convert one way. The hub converts anything to
 * anything, so it needs the units as an ordered ladder instead: every unit is
 * `base ^ power` bytes, which turns any conversion into one subtraction of
 * powers. `base` is 1024 in the binary standard (Windows, RAM) and 1000 in the
 * decimal/SI one (drive makers, macOS, search engines) — the same split the
 * pair converters expose through their standard toggle.
 */

export type DataStandard = 'binary' | 'decimal';

export const DATA_STANDARD_BASE: Record<DataStandard, number> = {
  binary: 1024,
  decimal: 1000,
};

export interface DataUnit {
  /** Symbol shown in the UI and in copy — what people actually search for. */
  symbol: string;
  /** Key into UNIT_LABELS for the spelled-out, translated unit name. */
  labelKey: string;
  /** Position on the ladder: the unit is `base ^ power` bytes. */
  power: number;
}

export const DATA_UNITS: DataUnit[] = [
  { symbol: 'B', labelKey: 'bytes', power: 0 },
  { symbol: 'KB', labelKey: 'kilobytes', power: 1 },
  { symbol: 'MB', labelKey: 'megabytes', power: 2 },
  { symbol: 'GB', labelKey: 'gigabytes', power: 3 },
  { symbol: 'TB', labelKey: 'terabytes', power: 4 },
  { symbol: 'PB', labelKey: 'petabytes', power: 5 },
];

export function getDataUnit(symbol: string): DataUnit | undefined {
  return DATA_UNITS.find(u => u.symbol === symbol);
}

/**
 * Convert between any two units on the ladder.
 *
 * Going up the ladder divides, going down multiplies; both collapse into a
 * single `base ^ (from - to)` factor, so there is no chained rounding.
 */
export function convertDataSize(
  value: number,
  fromSymbol: string,
  toSymbol: string,
  standard: DataStandard,
): number {
  const from = getDataUnit(fromSymbol);
  const to = getDataUnit(toSymbol);
  if (!from || !to) return NaN;
  return value * Math.pow(DATA_STANDARD_BASE[standard], from.power - to.power);
}

/**
 * Pick how many decimals a result needs to stay readable.
 *
 * One byte in petabytes is ~8.9e-16, so a fixed precision would render it as
 * a flat "0" and look broken. Small results get enough decimals to show a few
 * significant digits; large ones stay short because `formatLocaleNumber`
 * strips the trailing zeros anyway.
 */
export function dataPrecisionFor(value: number): number {
  const abs = Math.abs(value);
  if (!Number.isFinite(abs) || abs === 0) return 2;
  if (abs >= 1) return 6;
  // First significant digit sits at 10^-leadingZeros; show ~4 digits past it.
  const leadingZeros = Math.ceil(-Math.log10(abs));
  return Math.min(20, leadingZeros + 4);
}
