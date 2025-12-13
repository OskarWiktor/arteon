import type { ReactNode } from 'react';

type TextVariant = 'body' | 'small' | 'xs' | 'caption';
type TextTone = 'default' | 'muted' | 'dark';
type TextElement = 'p' | 'span' | 'div' | 'figcaption';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  tone?: TextTone;
  as?: TextElement;
  className?: string;
  id?: string;
  'aria-label'?: string;
  itemProp?: string;
  role?: string;
}

export default function Text({ children, variant = 'body', tone = 'default', as = 'p', className = '', id, 'aria-label': ariaLabel, itemProp, role }: TextProps) {
  const variantClasses: Record<TextVariant, string> = {
    body: 'text-base',
    small: 'text-sm',
    xs: 'text-xs',
    caption: 'text-xs',
  };

  const toneClasses: Record<TextTone, string> = {
    default: 'text-[#080808]',
    muted: 'text-[#5e5e5e]',
    dark: 'text-[#2B2B2B]',
  };

  const classes = `${variantClasses[variant]} ${toneClasses[tone]} ${className}`;

  const commonProps = { id, className: classes, 'aria-label': ariaLabel, itemProp, role };

  switch (as) {
    case 'span':
      return <span {...commonProps}>{children}</span>;
    case 'div':
      return <div {...commonProps}>{children}</div>;
    case 'figcaption':
      return <figcaption {...commonProps}>{children}</figcaption>;
    case 'p':
    default:
      return <p {...commonProps}>{children}</p>;
  }
}

