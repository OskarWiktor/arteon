import { ReactNode } from 'react';

interface ToolSectionProps {
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export default function ToolSection({ children, className = '', 'aria-label': ariaLabel }: ToolSectionProps) {
  return (
    <section className={`tool-section ${className}`} aria-label={ariaLabel}>
      {children}
    </section>
  );
}

