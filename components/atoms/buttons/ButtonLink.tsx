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

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  variant?: ButtonVariant;
}

const buttonLinkClasses =
  'inline-flex w-fit items-center px-3.25 py-1.75 md:px-5 md:py-2.5 rounded-sm text-sm font-medium md:text-base transition hover:-translate-y-0.5 text-dark border border-neutral-200 bg-white shadow-sm hover:shadow-md';

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
}: ButtonLinkProps) {
  const classes = cn(
    buttonLinkClasses,
    focusRingClasses,
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
