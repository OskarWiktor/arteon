export type CopyStatus = 'idle' | 'success' | 'error';
export type FontSizeOption = 'small' | 'normal' | 'large';
export type MarginOption = 'small' | 'medium' | 'large';
export type CtaRadiusOption = 'none' | 'small' | 'full';
export type SocialKey = 'linkedin' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'x';
export type SocialIconSize = 'small' | 'medium' | 'large';
export type SocialIconColorMode = 'platform' | 'accent' | 'text';

export interface SocialIconSettings {
  showIcons: boolean;
  iconSize: SocialIconSize;
  colorMode: SocialIconColorMode;
}
export type ActivePanel = 'identity' | 'buttons' | 'social' | 'appearance' | 'spacing' | 'legal';
export type LayoutType = 'standard' | 'top-banner' | 'label-column' | 'centered' | 'compact' | 'two-column' | 'minimal' | 'bottom-bar';
export interface BorderSides {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
}

export interface SignatureConfig {
  fullName: string;
  jobTitle: string;
  company: string;
  topLine: string;
  nameTag: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  extraLine: string;
  ctaLabel: string;
  ctaUrl: string;
  cta2Label: string;
  cta2Url: string;
  socials: Record<SocialKey, string>;
  legalNote: string;
  formalLine: string;
  avatarUrl: string;
}

export interface StyleConfig {
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  fontFamily: string;
  fontSize: FontSizeOption;
  padding: MarginOption;
  ctaRadius: CtaRadiusOption;
  showDivider: boolean;
  border: BorderSides;
  socialIcons: SocialIconSettings;
}

export interface ThemePreset {
  id: string;
  name: string;
  accentColor: string;
  textColor: string;
}

export type SpacingKey = 'afterName' | 'afterTitle' | 'afterExtra' | 'afterContact' | 'afterSocials' | 'afterCta' | 'beforeLegal';

export interface SpacingConfig {
  afterName: number;
  afterTitle: number;
  afterExtra: number;
  afterContact: number;
  afterSocials: number;
  afterCta: number;
  beforeLegal: number;
}
