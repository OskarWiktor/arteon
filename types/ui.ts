import type { ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Badge
// ---------------------------------------------------------------------------

export type BadgeVariant = 'default' | 'selected' | 'success' | 'error' | 'neutral' | 'dark' | 'warning' | 'info' | 'tech';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeElement = 'span' | 'button' | 'label' | 'a';

export interface BadgeProps {
  children?: ReactNode;
  text?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  as?: BadgeElement;
  className?: string;
  onClick?: () => void;
  htmlFor?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// SectionPrices
// ---------------------------------------------------------------------------

export type SectionPricesPlan = {
  name: string;
  platform?: string;
  price: string;
  description: string;
  features: string[];
  lastPlan?: boolean;
  badgeLabel?: string;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
};

export type Note = {
  text: ReactNode;
  ctaLabel?: string;
  ctaLink?: string;
};

export type SectionPricesProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  plans?: SectionPricesPlan[];
  note?: Note | null;
  legalNote?: string;
};

// ---------------------------------------------------------------------------
// AdSense
// ---------------------------------------------------------------------------

export type AdVariant = 'tool-banner' | 'in-article' | 'autorelaxed' | 'vertical';

export interface AdSenseProps {
  variant: AdVariant;
  adSlot?: string;
  className?: string;
}

// ---------------------------------------------------------------------------
// Breadcrumbs
// ---------------------------------------------------------------------------

export type Crumb = { href: string; label: string };

export type BreadcrumbsProps = {
  second: Crumb;
  third: Crumb;
  fourth?: Crumb;
  className?: string;
  includeJsonLd?: boolean;
  siteUrl?: string;
  size?: 'default' | 'compact';
  locale?: 'pl' | 'en' | 'de' | 'es' | 'fr' | 'pt' | 'it' | 'ro' | 'nl' | 'hu' | 'id' | 'vi' | 'tr' | 'tl' | 'sw' | 'ms' | 'cs' | 'sv' | 'sq' | 'da' | 'no' | 'fi' | 'sk' | 'hr' | 'lt' | 'sl';
};

// ---------------------------------------------------------------------------
// FeatureGrid
// ---------------------------------------------------------------------------

export type FeatureItem = {
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
};

// ---------------------------------------------------------------------------
// Gap
// ---------------------------------------------------------------------------

export type GapSize = 'xs' | 'sm' | 'md' | 'xl';

// ---------------------------------------------------------------------------
// Calculator
// ---------------------------------------------------------------------------

export type Selections = Record<number, string[]>;
