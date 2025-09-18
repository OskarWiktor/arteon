import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Wrapper({ children, className, id }: WrapperProps) {
  return (
    <div id={id} className={`m-auto w-[90%] max-w-[1280px] ${className}`}>
      {children}
    </div>
  );
}
