import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import {
  buttonAccentVariantClasses,
  buttonNormalVariantClasses,
  focusRingClasses,
} from '@/lib/uiClasses';
import ArrowIcon from '../ArrowIcon';

type ButtonVariant = 'normal' | 'accent';
type ButtonSize = 'small' | 'medium';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonLinkClasses =
  'group inline-flex w-fit items-center px-3.25 py-1.75 md:px-5 md:py-2.5 rounded-sm text-sm font-semibold md:text-base transition hover:-translate-y-0.5 active:translate-y-0 text-dark bg-white shadow-[1px_1px_3px_#C6B7A2] hover:shadow-[2px_2px_4px_#C6B7A2]';

const sizeClasses: Record<ButtonSize, string> = {
  small: 'px-2.5 py-1.5 md:px-3 md:py-1.5',
  medium: 'px-3 py-1.5 md:px-4 md:py-2',
};

const variantClasses: Record<ButtonVariant, string> = {
  normal: buttonNormalVariantClasses,
  accent: buttonAccentVariantClasses,
};

function isExternalHref(href: string) {
  if (href.startsWith('/') || href.startsWith('#')) return false;
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
}

export default function ButtonLink({
  href,
  children,
  arrow = false,
  className,
  ariaLabel,
  variant = 'normal',
  size = 'medium',
}: ButtonLinkProps) {
  const classes = cn(
    buttonLinkClasses,
    focusRingClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={classes}
        aria-label={ariaLabel}
      >
        <span>{children}</span>

        {arrow && <ArrowIcon />}
      </a>
    );
  }

  return (
    <Link
      href={href}
      prefetch={false}
      className={classes}
      aria-label={ariaLabel}
    >
      <span>{children}</span>

      {arrow && <ArrowIcon />}
    </Link>
  );
}
