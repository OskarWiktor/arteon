import type {
  AvatarShape,
  AvatarSize,
  CtaRadiusOption,
  DividerStyle,
  DividerWidth,
  FontSizeOption,
  LayoutType,
  MarginOption,
  SignatureConfig,
  SocialIconColorMode,
  SocialIconSize,
  SocialKey,
  SpacingConfig,
  StyleConfig,
  TextElementKey,
  TextElementStyle,
  TextStyleConfig,
} from '@/types/tools/email';

const SOCIAL_KEYS: SocialKey[] = [
  'linkedin',
  'instagram',
  'facebook',
  'tiktok',
  'youtube',
  'x',
  'github',
  'dribbble',
  'behance',
  'whatsapp',
  'telegram',
  'pinterest',
];

const TEXT_ELEMENT_KEYS: TextElementKey[] = [
  'name',
  'jobTitle',
  'company',
  'contact',
  'socials',
  'legal',
];

const LAYOUT_TYPES: LayoutType[] = [
  'standard',
  'top-banner',
  'label-column',
  'centered',
  'compact',
  'two-column',
  'minimal',
  'bottom-bar',
];

const FONT_SIZE_OPTIONS: FontSizeOption[] = ['small', 'normal', 'large'];
const MARGIN_OPTIONS: MarginOption[] = ['small', 'medium', 'large'];
const CTA_RADIUS_OPTIONS: CtaRadiusOption[] = ['none', 'small', 'full'];
const AVATAR_SHAPES: AvatarShape[] = ['circle', 'rounded', 'square'];
const AVATAR_SIZES: AvatarSize[] = ['small', 'medium', 'large'];
const DIVIDER_STYLES: DividerStyle[] = ['solid', 'dashed', 'dotted'];
const DIVIDER_WIDTHS: DividerWidth[] = [1, 2, 3];
const SOCIAL_ICON_SIZES: SocialIconSize[] = ['small', 'medium', 'large'];
const SOCIAL_ICON_COLOR_MODES: SocialIconColorMode[] = [
  'platform',
  'accent',
  'text',
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isOneOf<T extends string | number>(
  value: unknown,
  options: readonly T[],
): value is T {
  return (options as readonly unknown[]).includes(value);
}

function pickString(
  raw: Record<string, unknown>,
  key: string,
  fallback: string,
): string {
  return isString(raw[key]) ? (raw[key] as string) : fallback;
}

function pickBoolean(
  raw: Record<string, unknown>,
  key: string,
  fallback: boolean,
): boolean {
  return isBoolean(raw[key]) ? (raw[key] as boolean) : fallback;
}

function pickOneOf<T extends string | number>(
  raw: Record<string, unknown>,
  key: string,
  options: readonly T[],
  fallback: T,
): T {
  return isOneOf(raw[key], options) ? (raw[key] as T) : fallback;
}

export function isValidLayoutType(value: unknown): value is LayoutType {
  return isOneOf(value, LAYOUT_TYPES);
}

/**
 * Parse a raw "import settings" file's text content and sanity-check that
 * it actually looks like an export from this tool (rather than, say, the
 * unrelated "download as HTML" file, or some other JSON entirely).
 * Returns `null` on any parse failure or shape mismatch so callers can show
 * a single friendly error instead of leaking a raw JS exception message.
 */
export function parseSignatureExportJson(
  raw: string,
): Record<string, unknown> | null {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }

  if (!isRecord(data)) return null;

  const hasKnownKey =
    'config' in data ||
    'styleConfig' in data ||
    'spacingConfig' in data ||
    'textStyleConfig' in data ||
    'layout' in data;
  return hasKnownKey ? data : null;
}

/**
 * Merge a parsed, untrusted "import settings" JSON object with a known-good
 * fallback config. Every field is individually type-checked against the
 * fallback's shape - malformed or missing fields silently keep the fallback
 * value instead of propagating `undefined`/wrong types into render.
 */
export function mergeSignatureConfig(
  raw: unknown,
  fallback: SignatureConfig,
): SignatureConfig {
  if (!isRecord(raw)) return fallback;

  const socials = { ...fallback.socials };
  if (isRecord(raw.socials)) {
    for (const key of SOCIAL_KEYS) {
      const value = raw.socials[key];
      if (isString(value)) socials[key] = value;
    }
  }

  return {
    fullName: pickString(raw, 'fullName', fallback.fullName),
    jobTitle: pickString(raw, 'jobTitle', fallback.jobTitle),
    company: pickString(raw, 'company', fallback.company),
    topLine: pickString(raw, 'topLine', fallback.topLine),
    nameTag: pickString(raw, 'nameTag', fallback.nameTag),
    email: pickString(raw, 'email', fallback.email),
    phone: pickString(raw, 'phone', fallback.phone),
    website: pickString(raw, 'website', fallback.website),
    address: pickString(raw, 'address', fallback.address),
    extraLine: pickString(raw, 'extraLine', fallback.extraLine),
    ctaLabel: pickString(raw, 'ctaLabel', fallback.ctaLabel),
    ctaUrl: pickString(raw, 'ctaUrl', fallback.ctaUrl),
    cta2Label: pickString(raw, 'cta2Label', fallback.cta2Label),
    cta2Url: pickString(raw, 'cta2Url', fallback.cta2Url),
    socials,
    legalNote: pickString(raw, 'legalNote', fallback.legalNote),
    formalLine: pickString(raw, 'formalLine', fallback.formalLine),
    avatarUrl: pickString(raw, 'avatarUrl', fallback.avatarUrl),
  };
}

export function mergeStyleConfig(
  raw: unknown,
  fallback: StyleConfig,
): StyleConfig {
  if (!isRecord(raw)) return fallback;

  const border = isRecord(raw.border)
    ? {
        left: pickBoolean(raw.border, 'left', fallback.border.left),
        right: pickBoolean(raw.border, 'right', fallback.border.right),
        top: pickBoolean(raw.border, 'top', fallback.border.top),
        bottom: pickBoolean(raw.border, 'bottom', fallback.border.bottom),
      }
    : fallback.border;

  const socialIcons = isRecord(raw.socialIcons)
    ? {
        showIcons: pickBoolean(
          raw.socialIcons,
          'showIcons',
          fallback.socialIcons.showIcons,
        ),
        iconSize: pickOneOf(
          raw.socialIcons,
          'iconSize',
          SOCIAL_ICON_SIZES,
          fallback.socialIcons.iconSize,
        ),
        colorMode: pickOneOf(
          raw.socialIcons,
          'colorMode',
          SOCIAL_ICON_COLOR_MODES,
          fallback.socialIcons.colorMode,
        ),
      }
    : fallback.socialIcons;

  return {
    accentColor: pickString(raw, 'accentColor', fallback.accentColor),
    textColor: pickString(raw, 'textColor', fallback.textColor),
    backgroundColor: pickString(
      raw,
      'backgroundColor',
      fallback.backgroundColor,
    ),
    fontFamily: pickString(raw, 'fontFamily', fallback.fontFamily),
    fontSize: pickOneOf(raw, 'fontSize', FONT_SIZE_OPTIONS, fallback.fontSize),
    padding: pickOneOf(raw, 'padding', MARGIN_OPTIONS, fallback.padding),
    ctaRadius: pickOneOf(
      raw,
      'ctaRadius',
      CTA_RADIUS_OPTIONS,
      fallback.ctaRadius,
    ),
    showDivider: pickBoolean(raw, 'showDivider', fallback.showDivider),
    border,
    socialIcons,
    avatarShape: pickOneOf(
      raw,
      'avatarShape',
      AVATAR_SHAPES,
      fallback.avatarShape,
    ),
    avatarSize: pickOneOf(raw, 'avatarSize', AVATAR_SIZES, fallback.avatarSize),
    dividerStyle: pickOneOf(
      raw,
      'dividerStyle',
      DIVIDER_STYLES,
      fallback.dividerStyle,
    ),
    dividerWidth: pickOneOf(
      raw,
      'dividerWidth',
      DIVIDER_WIDTHS,
      fallback.dividerWidth,
    ),
    dividerColor: pickString(raw, 'dividerColor', fallback.dividerColor),
  };
}

export function mergeSpacingConfig(
  raw: unknown,
  fallback: SpacingConfig,
): SpacingConfig {
  if (!isRecord(raw)) return fallback;

  const result = { ...fallback };
  for (const key of Object.keys(fallback) as (keyof SpacingConfig)[]) {
    const value = raw[key];
    if (isFiniteNumber(value)) {
      result[key] = Math.max(0, Math.min(32, value));
    }
  }
  return result;
}

function pickNullableColor(
  raw: Record<string, unknown>,
  fallback: string | null,
): string | null {
  if (raw.color === null) return null;
  return isString(raw.color) ? raw.color : fallback;
}

function mergeTextElementStyle(
  raw: unknown,
  fallback: TextElementStyle,
): TextElementStyle {
  if (!isRecord(raw)) return fallback;
  const color = pickNullableColor(raw, fallback.color);
  const sizeOffset = isFiniteNumber(raw.sizeOffset)
    ? Math.max(-4, Math.min(4, raw.sizeOffset))
    : fallback.sizeOffset;
  return { color, sizeOffset };
}

export function mergeTextStyleConfig(
  raw: unknown,
  fallback: TextStyleConfig,
): TextStyleConfig {
  if (!isRecord(raw)) return fallback;

  const result = { ...fallback };
  for (const key of TEXT_ELEMENT_KEYS) {
    result[key] = mergeTextElementStyle(raw[key], fallback[key]);
  }

  result.customColors =
    Array.isArray(raw.customColors) && raw.customColors.every(isString)
      ? raw.customColors.slice(-8)
      : fallback.customColors;

  return result;
}
