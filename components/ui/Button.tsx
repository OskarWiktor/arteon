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
  variantClass = 'border border-[#cabfa6] bg-[#f5f0e6] hover:bg-[#ebe4d5] text-black';
  break;
    case 'accent':
      variantClass = 'border border-[#d4c2ac] bg-[#e7d8c2] hover:bg-[#dfccb4] text-black';
      break;
  }

  return <button className={`flex w-fit cursor-pointer items-center rounded-md opacity-85 hover:opacity-100 ${sizeClass} ${variantClass}`}>{children}</button>;
}
