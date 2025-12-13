import type { ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Heading({ as = 'h2', children, className = '', id }: HeadingProps) {
  const Tag = as;

  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  );
}

