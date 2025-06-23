import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent' | 'minimal';
  size?: 'small' | 'medium' | 'big';
}

export default function Button({ children, variant = 'normal', size = 'medium' }: ButtonProps) {
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
      variantClass = 'border-b border-b-amber-500 hover:text-amber-500 font-semibold bg-white rounded-md ';
      break;
    case 'accent':
      variantClass = 'border border-amber-500 bg-amber-500 hover:bg-amber-600 hover:text-white font-semibold rounded-md ';
      break;
    case 'minimal':
      variantClass = 'border-b-1 border-b-amber-500 hover:text-amber-500 font-semibold';
      break;
  }

  return <button className={`flex w-fit cursor-pointer items-center text-gray-900 text-sm md:text-base ${sizeClass} ${variantClass}`}>{children}</button>;
}
