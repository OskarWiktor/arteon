import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={`m-auto w-[90%] max-w-[1280px] ${className}`}>{children}</div>;
}
