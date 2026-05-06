import type { ReactNode } from 'react';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'accent-reverse' | 'outline' | 'circle';
  size?: 'small' | 'medium';
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
  link?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const isExternal = (href: string) => {
  if (href.startsWith('/') || href.startsWith('#')) return false;
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
};

export default function Button({ children, variant = 'normal', size = 'medium', onClick, disabled = false, arrow = false, link, className = '', type }: ButtonProps) {
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
        'hover:-translate-y-0.5 shadow-sm hover:shadow-md border border-black/10 bg-white text-dark ' + 'focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary';
      break;
    case 'accent':
      variantClass = 'hover:-translate-y-0.5 shadow-sm hover:shadow-md bg-primary text-white ' + 'focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';
      break;
    case 'accent-reverse':
      variantClass = 'hover:-translate-y-0.5 shadow-sm hover:shadow-md bg-white text-primary ' + 'focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary';
      break;
    case 'outline':
      variantClass =
        'hover:-translate-y-0.5 border border-primary bg-transparent text-primary hover:bg-primary hover:text-white ' +
        'focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';
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

  const buttonType: 'button' | 'submit' | 'reset' = type ?? 'button';

  if (disabled) {
    return (
      <button type={buttonType} disabled aria-disabled="true" className={baseClass}>
        <span className="flex">{children}</span>
        {Arrow}
      </button>
    );
  }

  if (variant === 'circle') {
    <button
      type="button"
      className="group border-primary bg-primary hover:text-mid focus-visible:ring-primary absolute bottom-[-31px] z-10 max-h-13 max-w-13 cursor-pointer rounded-full border p-1 text-white shadow-lg transition-colors hover:scale-105 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:block md:p-2"
    >
      <RiArrowRightSLine className="h-8 w-8" aria-hidden="true" />
    </button>;
  }

  if (link) {
    if (isExternal(link)) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={onClick}>
          <span>{children}</span>
          {Arrow}
        </a>
      );
    }
    return (
      <Link href={link} prefetch={false} className={baseClass} onClick={onClick}>
        <span>{children}</span>
        {Arrow}
      </Link>
    );
  }

  return (
    <button type={buttonType} onClick={onClick} className={baseClass}>
      <span>{children}</span>
      {Arrow}
    </button>
  );
}
