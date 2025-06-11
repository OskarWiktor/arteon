import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="m-auto w-full max-w-[1220px]">{children}</div>;
}
