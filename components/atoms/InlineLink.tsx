import Link from 'next/link';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

type InlineLinkProps = ComponentProps<typeof Link> & {
  variant?: 'default' | 'navigation';
};

const variants = {
  default: 'text-sm text-dark',
  navigation: 'text-base font-medium text-mid',
};

export default function InlineLink({
  href,
  children,
  className,
  variant = 'default',
  ...props
}: InlineLinkProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        'hover-underline flex items-center font-semibold',
        focusRingClasses,
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
