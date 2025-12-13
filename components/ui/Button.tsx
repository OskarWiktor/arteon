'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'glass' | 'dark' | 'minimal' | 'totop';
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
      sizeClass = 'px-2 py-1 md:px-3 md:py-1';
      break;
    case 'medium':
      sizeClass = 'px-3 py-1.5 md:px-4 md:py-2';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass =
        'hover:-translate-y-0.5 shadow-md hover:shadow-xl border border-black/10 bg-white text-[#080808] ' +
        'focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-500';
      break;
    case 'accent':
      variantClass = 'hover:-translate-y-0.5 shadow-md hover:shadow-xl bg-slate-600 text-white ' + 'focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
      break;
    case 'dark':
      variantClass =
        'hover:-translate-y-0.5 shadow-md hover:shadow-xl border border-[#2B2B2B] bg-[#2B2B2B] hover:border-slate-500 hover:bg-slate-500 text-[#f1f1f1] ' +
        'focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2B2B]';
      break;
    case 'glass':
      variantClass =
        'hover:-translate-y-0.5 shadow-md hover:shadow-xl border border-gray-100 hover:bg-slate-500/60 backdrop-blur-sm bg-white/60 ' +
        'focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-500';
      break;
    case 'minimal':
      variantClass = 'bg-white text-[#080808] focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-500';
      break;
    case 'totop':
      variantClass =
        'fixed right-5 bottom-5 z-50 rounded-full px-3 py-3 md:px-3 md:py-3 ' +
        'shadow-lg bg-black text-white border border-black/10 ' +
        'hover:bg-black/90 focus-visible:ring-white focus-visible:ring-2';
      sizeClass = '';
      break;
  }

  const baseClass =
    `transition w-fit inline-flex rounded-2xl items-center font-medium text-sm md:text-base ` +
    `${sizeClass} ${variantClass} ${disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'} ` +
    `${className}`;

  const Arrow = arrow ? (
    <span className="ml-1 flex h-5 w-5 items-center justify-center" aria-hidden="true">
      <RiArrowRightUpLine className="text-current" />
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
