'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'minimal' | 'dark';
  size?: 'small' | 'medium' | 'big';
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
  link?: string;
}

const isExternal = (href: string) => {
  if (href.startsWith('/') || href.startsWith('#')) return false;
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(href);
};

export default function Button({ children, variant = 'normal', size = 'medium', onClick, disabled = false, arrow = false, link }: ButtonProps) {
  let sizeClass = '';
  let variantClass = '';

  switch (size) {
    case 'small':
      sizeClass = 'px-3 py-1';
      break;
    case 'medium':
      sizeClass = 'px-4 py-2';
      break;
    case 'big':
      sizeClass = 'px-6 py-3';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass = 'border border-black/10 bg-white text-[#080808] focus-visible:ring-black/20';
      break;
    case 'accent':
      variantClass = 'bg-indigo-800 text-white focus-visible:ring-indigo-800';
      break;
    case 'dark':
      variantClass = 'border border-[#2B2B2B] bg-[#2B2B2B] hover:border-indigo-800 hover:bg-indigo-800 text-[#f1f1f1]';
      break;
    case 'minimal':
      variantClass = 'border border-gray-100 hover:bg-indigo-800/60 backdrop-blur-sm bg-white/60';
      break;
  }

  const baseClass =
    `transition w-fit focus:outline-none focus-visible:ring-2 hover:translate-y-[-2px] ` +
    `inline-flex rounded-md items-center font-medium shadow-md hover:shadow-xl md:text-lg ` +
    `${sizeClass} ${variantClass} ` +
    `${disabled ? 'cursor-not-allowed opacity-50 pointer-events-none' : 'cursor-pointer'}`;

  const Arrow = arrow ? (
    <span className="flex h-5 w-5 items-center justify-center" aria-hidden="true">
      <RiArrowRightUpLine className="text-current" />
    </span>
  ) : null;

  if (disabled) {
    return (
      <span aria-disabled="true" className={baseClass}>
        <span>{children}</span>
        {Arrow}
      </span>
    );
  }

  if (link) {
    if (isExternal(link)) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={baseClass} onClick={onClick}>
          <span className="text-sm">{children}</span>
          {Arrow}
        </a>
      );
    }

    return (
      <Link href={link} className={baseClass} onClick={onClick}>
        <span className="text-sm">{children}</span>
        {Arrow}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      <span>{children}</span>
      {Arrow}
    </button>
  );
}
