import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={`m-auto w-full max-w-[1220px] ${className}`}>{children}</div>;
}
