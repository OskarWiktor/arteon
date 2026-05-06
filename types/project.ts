import type { ReactNode } from 'react';

export type ProjectCategory = 'strona' | 'blog' | 'sklep' | 'grafika' | 'treść' | 'wizytówka' | 'logo' | 'aplikacja' | 'marketing';

export type Stat = { label: string; value: string; note?: string };
export type FaqItem = { question: string; answer: string };

export type ContentBlock =
  | { type: 'richtext'; html: string; breakBefore?: boolean; breakAfter?: boolean }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
      ratio?: '16/9' | '4/3' | '1/1' | 'auto';
      width?: number;
      height?: number;
      quality?: number;
      priority?: boolean;
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'imageText';
      src: string;
      alt: string;
      html: string;
      imageSide?: 'left' | 'right';
      ratio?: '16/9' | '4/3' | '1/1' | 'auto';
      width?: number;
      height?: number;
      quality?: number;
      priority?: boolean;
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | { type: 'quote'; text: string; author?: string; role?: string; breakBefore?: boolean; breakAfter?: boolean }
  | { type: 'callout'; icon?: string; title?: string; text?: string; html?: string; breakBefore?: boolean; breakAfter?: boolean }
  | {
      type: 'steps';
      title?: string;
      items: { icon?: string; title: string; description?: string }[];
      variant?: 'default' | 'contact';
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'metrics';
      title?: string;
      items: { label: string; value: number; unit?: string; max?: number; color?: string; inverse?: boolean }[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'featureList';
      title?: string;
      items: string[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'process';
      title?: string;
      items: { number: number; title: string; icon?: string }[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'infoBanner';
      icon?: string;
      text: string;
      highlight?: string;
      btnLabel?: string;
      btnLink?: string;
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'deliverables';
      title?: string;
      items: string[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'outcomes';
      title?: string;
      items: { label: string; value: string; note?: string }[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'testimonial';
      quote: string;
      author?: string;
      role?: string;
      link?: string;
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'beforeAfter';
      title?: string;
      beforeImage: string;
      afterImage: string;
      beforeLabel?: string;
      afterLabel?: string;
      note?: string;
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'imageGrid3';
      title?: string;
      description?: string;
      images: { src: string; alt: string; label?: string }[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    }
  | {
      type: 'imageGallery';
      title?: string;
      grid?: 'two' | 'four' | 'six';
      images: { src: string; alt: string; title?: string }[];
      breakBefore?: boolean;
      breakAfter?: boolean;
    };

export type ProjectCTA = {
  title?: string;
  description?: string;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  backgroundImage?: string;
  overlay?: 'black' | 'white';
};

export type Project = {
  slug: string;
  title: string;
  short: ReactNode;
  description?: ReactNode;
  task?: ReactNode;
  image: string;
  link?: string;
  category: ProjectCategory[];

  client?: { name?: string; sector?: string; location?: string };
  timeline?: { start?: string; end?: string };
  stack?: string[];
  deliverables?: (string | ReactNode)[];
  goals?: ReactNode;
  challenges?: ReactNode;
  solutions?: ReactNode;
  outcomes?: Stat[];
  process_steps?: string[];
  testimonial?: { quote: string; author?: string; role?: string; link?: string };

  beforeAfter?: { beforeImage?: string; afterImage?: string; note?: string };

  faq?: FaqItem[];
  contentBlocks?: ContentBlock[];

  cta?: ProjectCTA;

  seo?: { title?: string; description?: string; canonical?: string };
};

export type ProjectPreview = {
  slug: string;
  title: string;
  short: string;
  image: string;
  category: ProjectCategory[];
  link?: string;
};
