import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/clsx';

type CardVariant = 'default' | 'outlined';
type CardPadding = 'sm' | 'md' | 'lg';

const variantClasses: Record<CardVariant, string> = {
  default: '',
  outlined: 'border border-neutral-200',
};

const paddingClasses: Record<CardPadding, string> = {
  sm: 'p-3 md:p-4',
  md: 'p-4 md:p-6',
  lg: 'p-5 md:p-8',
};

type PolymorphicProps<T extends ElementType> = {
  as?: T;
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, 'className' | 'children'>;

export default function Card<T extends ElementType = 'div'>({
  as,
  variant = 'default',
  padding = 'sm',
  interactive = true,
  className,
  children,
  ...rest
}: PolymorphicProps<T>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <Component
      className={cn(
        'flex flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-sm',
        interactive && 'transition hover:-translate-y-0.5 hover:shadow-md',
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
