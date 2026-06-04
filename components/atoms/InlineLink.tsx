import Link from 'next/link';
import type { ComponentProps } from 'react';
import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

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
        'hover-underline flex items-center rounded',
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
