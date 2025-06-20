import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'normal' | 'accent';
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
      variantClass = 'border border-amber-500 hover:bg-[#ebe4d5] text-black font-semibold bg-white';
      break;
    case 'accent':
      variantClass = 'border border-amber-500 bg-amber-500 hover:bg-amber-600 text-black font-semibold';
      break;
  }

  return <button className={`flex w-fit cursor-pointer items-center rounded-md ${sizeClass} ${variantClass}`}>{children}</button>;
}
