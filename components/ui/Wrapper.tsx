import type { ElementType, HTMLAttributes, ReactNode } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
}

export default function Wrapper({ children, as: Tag = 'div', className = '', id, ...rest }: WrapperProps) {
  return (
    <Tag id={id} className={`m-auto w-[94%] max-w-[1420px] 2xl:max-w-none ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
