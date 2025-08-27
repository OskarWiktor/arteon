'use client';

import { ReactNode } from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'minimal' | 'dark';
  size?: 'small' | 'medium' | 'big';
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
}

export default function Button({ children, variant = 'normal', size = 'medium', onClick, disabled, arrow = false }: ButtonProps) {
  let sizeClass, variantClass;

  switch (size) {
    case 'small':
      sizeClass = 'px-2 py-1';
      break;
    case 'medium':
      sizeClass = 'px-4 py-2';
      break;
    case 'big':
      sizeClass = 'px-4 py-3';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass = 'border border-amber-500 hover:text-amber-500';
      break;
    case 'accent':
      variantClass = 'border border-amber-500 bg-amber-500 hover:bg-amber-600 text-[#f1f1f1]';
      break;
    case 'dark':
      variantClass = 'border border-[#2B2B2B] bg-[#2B2B2B] hover:border-amber-500 hover:bg-amber-500 text-[#f1f1f1]';
      break;
    case 'minimal':
      variantClass = 'border border-gray-100 hover:bg-amber-500/60 backdrop-blur-sm bg-white/60';
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex w-fit items-center rounded text-base font-semibold shadow-md hover:shadow-xl md:text-lg ${sizeClass} ${variantClass} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      {children}
      {arrow && (
        <span className="flex h-8 w-8 items-center justify-center">
          <FiArrowRight className={` ${variantClass === 'accent' ? 'text-amber-500' : 'text-[#f1f1f1]'}`} />
        </span>
      )}
    </button>
  );
}
