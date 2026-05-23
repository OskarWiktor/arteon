import type { ReactNode } from 'react';
import type { Locale } from '@/types/locale';

export type SectionPricesPlan = {
  name: string;
  platform?: string;
  price: string;
  description: string;
  features: string[];
  lastPlan?: boolean;
  badgeLabel?: string;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
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

export type AdVariant =
  | 'tool-banner'
  | 'responsive'
  | 'in-article'
  | 'in-article-new'
  | 'autorelaxed'
  | 'vertical';

export interface AdSenseProps {
  variant: AdVariant;
  adSlot?: string;
  className?: string;
  locale?: string;
}

export type FeatureItem = {
  title: string;
  description?: ReactNode;
  points?: string[];
  icon?: ReactNode;
};

export type DividerSize = 'xs' | 'sm' | 'md' | 'xl';

export type Selections = Record<number, string[]>;

export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'normal' | 'accent';
