import { describe, expect, it } from 'vitest';
import {
  isValidLayoutType,
  mergeSignatureConfig,
  mergeSpacingConfig,
  mergeStyleConfig,
  mergeTextStyleConfig,
  parseSignatureExportJson,
} from '@/lib/tools/email/importSignatureConfig';
import {
  DEFAULT_SPACING,
  DEFAULT_STYLE,
  DEFAULT_TEXT_STYLE,
} from '@/lib/tools/email/signatureDefaults';
import type { SignatureConfig } from '@/types/tools/email';

const fallbackSignature: SignatureConfig = {
  fullName: 'Fallback Name',
  jobTitle: 'Fallback Title',
  company: 'Fallback Co',
  topLine: '',
  nameTag: '',
  email: 'fallback@example.com',
  phone: '',
  website: '',
  address: '',
  extraLine: '',
  ctaLabel: '',
  ctaUrl: '',
  cta2Label: '',
  cta2Url: '',
  socials: {
    linkedin: '',
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
    x: '',
    github: '',
    dribbble: '',
    behance: '',
    whatsapp: '',
    telegram: '',
    pinterest: '',
  },
  legalNote: '',
  formalLine: '',
  avatarUrl: '',
};

describe('parseSignatureExportJson', () => {
  it('parses a valid export object', () => {
    const json = JSON.stringify({
      config: { fullName: 'Jan' },
      layout: 'standard',
    });
    const result = parseSignatureExportJson(json);
    expect(result).toEqual({ config: { fullName: 'Jan' }, layout: 'standard' });
  });

  it('returns null for malformed JSON (e.g. the downloaded HTML file)', () => {
    expect(parseSignatureExportJson('<!DOCTYPE html><html></html>')).toBeNull();
  });

  it('returns null for valid but unrelated JSON', () => {
    expect(parseSignatureExportJson('{"foo": "bar"}')).toBeNull();
  });

  it('returns null for a top-level JSON array', () => {
    expect(parseSignatureExportJson('[1,2,3]')).toBeNull();
  });

  it('returns null for empty string input', () => {
    expect(parseSignatureExportJson('')).toBeNull();
  });
});

describe('mergeSignatureConfig', () => {
  it('keeps fallback fields when raw value has wrong type', () => {
    const merged = mergeSignatureConfig(
      { fullName: 123, email: 'real@example.com' },
      fallbackSignature,
    );
    expect(merged.fullName).toBe(fallbackSignature.fullName);
    expect(merged.email).toBe('real@example.com');
  });

  it('falls back entirely for non-object input', () => {
    expect(mergeSignatureConfig(null, fallbackSignature)).toEqual(
      fallbackSignature,
    );
    expect(mergeSignatureConfig('not an object', fallbackSignature)).toEqual(
      fallbackSignature,
    );
  });

  it('merges only valid social keys, ignoring unknown ones', () => {
    const merged = mergeSignatureConfig(
      { socials: { linkedin: 'https://linkedin.com/x', unknownKey: 'x' } },
      fallbackSignature,
    );
    expect(merged.socials.linkedin).toBe('https://linkedin.com/x');
    expect(merged.socials).not.toHaveProperty('unknownKey');
  });

  it('does not crash on a deeply malformed nested socials value', () => {
    const merged = mergeSignatureConfig(
      { socials: 'not an object' },
      fallbackSignature,
    );
    expect(merged.socials).toEqual(fallbackSignature.socials);
  });
});

describe('mergeStyleConfig', () => {
  it('rejects an invalid enum value and keeps the fallback', () => {
    const merged = mergeStyleConfig({ fontSize: 'gigantic' }, DEFAULT_STYLE);
    expect(merged.fontSize).toBe(DEFAULT_STYLE.fontSize);
  });

  it('accepts a valid enum value', () => {
    const merged = mergeStyleConfig({ fontSize: 'large' }, DEFAULT_STYLE);
    expect(merged.fontSize).toBe('large');
  });

  it('merges nested border booleans individually', () => {
    const merged = mergeStyleConfig(
      { border: { left: true, top: 'not-a-boolean' } },
      DEFAULT_STYLE,
    );
    expect(merged.border.left).toBe(true);
    expect(merged.border.top).toBe(DEFAULT_STYLE.border.top);
  });
});

describe('mergeSpacingConfig', () => {
  it('clamps out-of-range values to the 0-32 bounds', () => {
    const merged = mergeSpacingConfig({ afterName: 999 }, DEFAULT_SPACING);
    expect(merged.afterName).toBe(32);
  });

  it('clamps negative values up to 0', () => {
    const merged = mergeSpacingConfig({ afterName: -10 }, DEFAULT_SPACING);
    expect(merged.afterName).toBe(0);
  });

  it('keeps fallback for non-numeric values', () => {
    const merged = mergeSpacingConfig({ afterName: 'lots' }, DEFAULT_SPACING);
    expect(merged.afterName).toBe(DEFAULT_SPACING.afterName);
  });
});

describe('mergeTextStyleConfig', () => {
  it('allows explicit null color (meaning "inherit")', () => {
    const merged = mergeTextStyleConfig(
      { name: { color: null, sizeOffset: 1 } },
      DEFAULT_TEXT_STYLE,
    );
    expect(merged.name.color).toBeNull();
  });

  it('clamps sizeOffset to the -4..4 range', () => {
    const merged = mergeTextStyleConfig(
      { name: { sizeOffset: 99 } },
      DEFAULT_TEXT_STYLE,
    );
    expect(merged.name.sizeOffset).toBe(4);
  });

  it('caps customColors to the last 8 entries', () => {
    const colors = Array.from({ length: 12 }, (_, i) => `#00000${i}`);
    const merged = mergeTextStyleConfig(
      { customColors: colors },
      DEFAULT_TEXT_STYLE,
    );
    expect(merged.customColors).toHaveLength(8);
    expect(merged.customColors).toEqual(colors.slice(-8));
  });
});

describe('isValidLayoutType', () => {
  it('accepts known layout types', () => {
    expect(isValidLayoutType('top-banner')).toBe(true);
  });

  it('rejects unknown values', () => {
    expect(isValidLayoutType('made-up-layout')).toBe(false);
    expect(isValidLayoutType(undefined)).toBe(false);
    expect(isValidLayoutType(42)).toBe(false);
  });
});
