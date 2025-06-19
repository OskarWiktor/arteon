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
      sizeClass = 'px-1 py-0 md:px-2 md:py-1';
      break;
    case 'medium':
      sizeClass = 'px-3 py-0 md:px-4 md:py-1';
      break;
    case 'big':
      sizeClass = 'px-4 py-1 md:px-6 md:py-2';
      break;
  }

  switch (variant) {
    case 'normal':
      variantClass = 'border-1 border-gray-400 bg-gray-400';
      break;
    case 'accent':
      variantClass = 'border-1 border-[#5f9ea0] bg-[#5f9ea0]';
      break;
  }

  return <button className={`flex w-fit cursor-pointer items-center rounded-md opacity-85 hover:opacity-100 ${sizeClass} ${variantClass}`}>{children}</button>;
}
