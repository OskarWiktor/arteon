import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'minimal';
  size?: 'small' | 'medium' | 'big';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, variant = 'normal', size = 'medium', onClick, disabled }: ButtonProps) {
  let sizeClass, variantClass;

  switch (size) {
    case 'small':
      sizeClass = 'px-4 py-0';
      break;
    case 'medium':
      sizeClass = 'px-4 py-1';
      break;
    case 'big':
      sizeClass = 'px-6 py-2';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass = 'border border-amber-500 hover:text-amber-500 font-semibold bg-white bg-white/80 backdrop-blur-sm';
      break;
    case 'accent':
      variantClass = 'border border-amber-500 bg-amber-500 hover:bg-amber-600 hover:text-white font-semibold';
      break;
    case 'minimal':
      variantClass = 'border-b-1 border-b-amber-500 hover:text-amber-500 font-semibold bg-white/80 backdrop-blur-sm';
      break;
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex w-fit items-center rounded-md text-sm text-gray-900 hover:shadow-lg md:text-base ${sizeClass} ${variantClass} ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} `}
    >
      {children}
    </button>
  );
}
