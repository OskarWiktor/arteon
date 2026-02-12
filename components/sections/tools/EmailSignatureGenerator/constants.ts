import { rgbToHex } from '@/lib/tools/color/convert';
import type { LayoutType, SignatureConfig, SpacingConfig, SpacingKey, StyleConfig, TextStyleConfig, ThemePreset } from '@/components/sections/tools/EmailSignatureGenerator/types';
import { ui } from '@/components/sections/tools/EmailSignatureGenerator/ui';

export const STORAGE_KEY_BASE = 'arteon-email-signature-generator';

const SIGNATURE_COLOR_DARK = rgbToHex({ r: 17, g: 24, b: 39 });
const SIGNATURE_COLOR_WHITE = rgbToHex({ r: 255, g: 255, b: 255 });
const SIGNATURE_COLOR_BLUE = rgbToHex({ r: 37, g: 99, b: 235 });
const SIGNATURE_COLOR_PURPLE = rgbToHex({ r: 124, g: 58, b: 237 });
const SIGNATURE_COLOR_GREEN = rgbToHex({ r: 22, g: 163, b: 74 });
const SIGNATURE_COLOR_GRAY = rgbToHex({ r: 75, g: 85, b: 99 });

export const DEFAULT_STYLE: StyleConfig = {
  accentColor: SIGNATURE_COLOR_DARK,
  textColor: SIGNATURE_COLOR_DARK,
  backgroundColor: SIGNATURE_COLOR_WHITE,
  fontFamily: 'Arial, sans-serif',
  fontSize: 'normal',
  padding: 'medium',
  ctaRadius: 'full',
  showDivider: true,
  border: { left: false, right: false, top: false, bottom: false },
  socialIcons: { showIcons: false, iconSize: 'medium', colorMode: 'platform' },
  avatarShape: 'circle',
  avatarSize: 'medium',
  dividerStyle: 'solid',
  dividerWidth: 1,
  dividerColor: '',
};

export const DEFAULT_SPACING: SpacingConfig = {
  afterName: 4,
  afterTitle: 4,
  afterExtra: 6,
  afterContact: 4,
  afterSocials: 8,
  afterCta: 10,
  beforeLegal: 12,
};

export const DEFAULT_TEXT_STYLE: TextStyleConfig = {
  name: { color: null, sizeOffset: 0 },
  jobTitle: { color: null, sizeOffset: 0 },
  company: { color: null, sizeOffset: 0 },
  contact: { color: null, sizeOffset: 0 },
  socials: { color: null, sizeOffset: 0 },
  legal: { color: null, sizeOffset: 0 },
  customColors: [],
};

export const LAYOUT_SPACING_MAP: Record<LayoutType, SpacingKey[]> = {
  standard: ['afterName', 'afterTitle', 'afterExtra', 'afterContact', 'afterSocials', 'afterCta', 'beforeLegal'],
  'top-banner': ['afterExtra', 'afterContact', 'afterSocials', 'afterCta', 'beforeLegal'],
  'label-column': ['afterName', 'afterTitle', 'afterExtra', 'afterSocials', 'afterCta', 'beforeLegal'],
  centered: ['afterName', 'afterTitle', 'afterExtra', 'afterContact', 'afterSocials', 'afterCta', 'beforeLegal'],
  compact: ['afterSocials', 'beforeLegal'],
  'two-column': ['afterName', 'afterTitle', 'afterExtra', 'afterSocials', 'afterCta', 'beforeLegal'],
  minimal: ['afterName', 'afterTitle'],
  'bottom-bar': ['afterName', 'afterTitle', 'afterExtra', 'afterContact', 'afterSocials', 'beforeLegal'],
};

export const FONT_OPTIONS = [
  { value: 'Arial, sans-serif', label: 'Arial' },
  { value: 'Verdana, sans-serif', label: 'Verdana' },
  { value: 'Tahoma, sans-serif', label: 'Tahoma' },
  { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet MS' },
  { value: 'Georgia, serif', label: 'Georgia' },
];

export function getSignatureLabels(locale: 'pl' | 'en') {
  const t = ui[locale];
  return {
    tel: t.labels.tel,
    email: t.labels.email,
    website: t.labels.website,
  };
}

export function getDefaultSignature(locale: 'pl' | 'en'): SignatureConfig {
  if (locale === 'en') {
    return {
      fullName: 'John Smith',
      jobTitle: 'Web Developer',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'john.smith@example.com',
      phone: '+1 600 000 000',
      website: 'https://www.yoursite.com',
      address: '123 Main St, New York, NY 10001',
      extraLine: 'I build fast and functional websites.',
      ctaLabel: 'Book a free consultation',
      ctaUrl: 'https://www.yoursite.com',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johnsmith',
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
      legalNote: 'This message may contain confidential information. If you are not the intended recipient, please notify the sender and delete this message.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  return {
    fullName: 'Jan Kowalski',
    jobTitle: 'Web Developer',
    company: 'Arteon Agency',
    topLine: '',
    nameTag: '',
    email: 'jan.kowalski@example.com',
    phone: '+48 000 000 000',
    website: 'https://www.twojadomena.pl',
    address: 'ul. Dobra 3, 30-000 Kraków',
    extraLine: 'Projektuję szybkie i funkcjonalne strony WWW.',
    ctaLabel: 'Umów bezpłatną konsultację',
    ctaUrl: 'https://www.twojadomena.pl',
    cta2Label: '',
    cta2Url: '',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jankowalski',
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
    legalNote: 'Ta wiadomość może zawierać informacje poufne. Jeżeli nie jesteś jej adresatem, poinformuj nadawcę i usuń wiadomość.',
    formalLine: '',
    avatarUrl: '',
  };
}

export function getThemePresets(locale: 'pl' | 'en'): ThemePreset[] {
  const t = ui[locale];
  return [
    { id: 'classic-dark', name: t.themes.dark, accentColor: SIGNATURE_COLOR_DARK, textColor: SIGNATURE_COLOR_DARK },
    { id: 'modern-blue', name: t.themes.blue, accentColor: SIGNATURE_COLOR_BLUE, textColor: SIGNATURE_COLOR_DARK },
    { id: 'creative-purple', name: t.themes.purple, accentColor: SIGNATURE_COLOR_PURPLE, textColor: SIGNATURE_COLOR_DARK },
    { id: 'eco-green', name: t.themes.green, accentColor: SIGNATURE_COLOR_GREEN, textColor: SIGNATURE_COLOR_DARK },
    { id: 'minimal', name: t.themes.gray, accentColor: SIGNATURE_COLOR_GRAY, textColor: SIGNATURE_COLOR_DARK },
  ];
}
