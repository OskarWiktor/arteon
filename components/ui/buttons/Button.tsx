import type { ReactNode } from 'react';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'circle';
  size?: 'small' | 'medium';
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
  link?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const isExternal = (href: string) => {
  if (href.startsWith('/') || href.startsWith('#')) return false;
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
};

export default function Button({ children, variant = 'normal', size = 'medium', onClick, disabled = false, arrow = false, link, className = '', type, ariaLabel }: ButtonProps) {
  const buttonType: 'button' | 'submit' | 'reset' = type ?? 'button';

  if (variant === 'circle') {
    const circleClass =
      `inline-flex items-center justify-center rounded-full border border-primary bg-primary p-1 md:p-2 text-white shadow-lg ` +
      `transition-colors hover:scale-105 hover:bg-white hover:text-mid focus:outline-none ` +
      `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white ` +
      `${disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ${className}`;
    return (
      <button type={buttonType} onClick={onClick} className={circleClass} aria-label={ariaLabel} disabled={disabled} aria-disabled={disabled || undefined}>
        {children}
      </button>
    );
  }

  let sizeClass = '';
  let variantClass = '';

  switch (size) {
    case 'small':
      sizeClass = 'px-2 py-1 md:px-3 md:py-1.5';
      break;
    case 'medium':
      sizeClass = 'px-4 py-2 md:px-5 md:py-2.5';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass =
        'hover:-translate-y-0.5 shadow-sm hover:shadow-md border border-black/10 bg-white text-dark focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary';
      break;
    case 'accent':
      variantClass = 'hover:-translate-y-0.5 shadow-sm hover:shadow-md bg-primary text-white focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';
      break;
  }

  const baseClass =
    `transition w-fit inline-flex rounded-sm items-center font-medium text-sm md:text-base ` +
    `${sizeClass} ${variantClass} ${disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ` +
    `${className}`;

  const Arrow = arrow ? (
    <span className="ml-1 flex h-5 w-5 items-center justify-center" aria-hidden="true">
      <RiArrowRightSLine className="text-current" />
    </span>
  ) : null;

  if (disabled) {
    return (
      <button type={buttonType} disabled aria-disabled="true" className={baseClass} aria-label={ariaLabel}>
        <span className="flex">{children}</span>
        {Arrow}
      </button>
    );
  }

  if (link) {
    if (isExternal(link)) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={onClick} aria-label={ariaLabel}>
          <span>{children}</span>
          {Arrow}
        </a>
      );
    }
    return (
      <Link href={link} prefetch={false} className={baseClass} onClick={onClick} aria-label={ariaLabel}>
        <span>{children}</span>
        {Arrow}
      </Link>
    );
  }

  return (
    <button type={buttonType} onClick={onClick} className={baseClass} aria-label={ariaLabel}>
      <span>{children}</span>
      {Arrow}
    </button>
  );
}
