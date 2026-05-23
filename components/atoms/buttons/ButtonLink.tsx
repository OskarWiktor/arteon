import {
  buttonAccentVariantClasses,
  buttonNormalVariantClasses,
  focusRingClasses,
} from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import { ButtonVariant } from '@/types/ui';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
  variant?: ButtonVariant;
}

const buttonLinkClasses =
  'inline-flex w-fit items-center px-4 py-2 md:px-5 md:py-2.5 rounded-sm text-sm font-medium md:text-base transition hover:-translate-y-0.5 text-dark border border-black/10 bg-white shadow-sm hover:shadow-md';

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
  const classes = cn(buttonLinkClasses, focusRingClasses, variantClasses[variant], className);

  const content = (
    <>
      <span>{children}</span>

      {arrow && (
        <span className='ml-1 flex h-5 w-5 items-center justify-center' aria-hidden='true'>
          <RiArrowRightSLine className='text-current' />
        </span>
      )}
    </>
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
        {content}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={false} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
