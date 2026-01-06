'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'accent-reverse' | 'outline';
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
      sizeClass = 'px-3 py-1.5 md:px-4 md:py-2';
      break;
    case 'medium':
      sizeClass = 'px-4 py-2 md:px-5 md:py-2.5';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass =
        'hover:-translate-y-0.5 shadow-md hover:shadow-xl border border-black/10 bg-white text-dark ' + 'focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800';
      break;
    case 'accent':
      variantClass = 'hover:-translate-y-0.5 shadow-md hover:shadow-xl bg-slate-800 text-white ' + 'focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
      break;
    case 'accent-reverse':
      variantClass = 'hover:-translate-y-0.5 shadow-md hover:shadow-xl bg-white text-slate-800 ' + 'focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800';
      break;
    case 'outline':
      variantClass =
        'hover:-translate-y-0.5 border border-slate-800 bg-transparent text-slate-800 hover:bg-slate-800 hover:text-white ' +
        'focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
      break;
  }

  const baseClass =
    `transition w-fit inline-flex rounded-xl items-center font-medium text-sm md:text-base ` +
    `${sizeClass} ${variantClass} ${disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ` +
    `${className}`;

  const Arrow = arrow ? (
    <span className="ml-1 flex h-5 w-5 items-center justify-center" aria-hidden="true">
      <RiArrowRightLine className="text-current" />
    </span>
  ) : null;

  const buttonType: 'button' | 'submit' | 'reset' = type ?? 'button';

  if (disabled) {
    return (
      <button type={buttonType} disabled aria-disabled="true" className={baseClass}>
        <span>{children}</span>
        {Arrow}
      </button>
    );
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
      <Link href={link} className={baseClass} onClick={onClick}>
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
