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
      sizeClass = 'px-2 py-1';
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
      variantClass = 'border-1 border-[#5f9ea0]';
      break;
    case 'accent':
      variantClass = 'border-1 border-[#5f9ea0] bg-[#5f9ea0]';
      break;
  }

  return <button className={`flex w-fit cursor-pointer items-center rounded-md ${sizeClass} ${variantClass}`}>{children}</button>;
}
