import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type CardVariant = 'default' | 'lift' | 'outlined' | 'section';
type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

const BASE = 'rounded-lg transition';

const VARIANT_CLASSES: Record<CardVariant, string> = {
  default: 'bg-white overflow-hidden shadow-md focus-within:shadow-lg hover:shadow-lg',
  lift: 'bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md',
  outlined: 'bg-white border border-black/10 overflow-hidden',
  section: 'bg-white/80 border border-black/10 shadow-sm',
};

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-4 md:p-6',
  lg: 'p-6',
  xl: 'p-7',
};

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children'>;

export default function Card<T extends ElementType = 'div'>({ as, variant = 'lift', padding = 'none', className = '', children, ...rest }: PolymorphicProps<T>) {
  const Component = (as ?? 'div') as ElementType;
  const classes = [BASE, VARIANT_CLASSES[variant], PADDING_CLASSES[padding], className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
