import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/clsx';

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
}

export default function Wrapper({
  children,
  as: Tag = 'div',
  className,
  id,
  ...rest
}: WrapperProps) {
  return (
    <Tag
      id={id}
      className={cn('m-auto w-[94%] max-w-405', className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
