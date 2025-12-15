export type CopyStatus = 'idle' | 'success' | 'error';
export type FontSizeOption = 'small' | 'normal' | 'large';
export type MarginOption = 'small' | 'medium' | 'large';
export type CtaRadiusOption = 'none' | 'small' | 'full';
export type SocialKey = 'linkedin' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'x';
export type ActivePanel = 'identity' | 'cta' | 'social' | 'appearance' | 'legal';
export type LayoutType = 'standard' | 'accent-bar' | 'top-banner' | 'label-column' | 'centered';

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
}

export interface ThemePreset {
  id: string;
  name: string;
  accentColor: string;
  textColor: string;
}
