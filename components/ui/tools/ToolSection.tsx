import type { ReactNode } from 'react';
import Card from '../Card';

interface ToolSectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  'aria-label'?: string;
}

export default function ToolSection({ children, className = '', padding = 'xl', 'aria-label': ariaLabel }: ToolSectionProps) {
  return (
    <Card as="section" variant="section" padding={padding} className={className} aria-label={ariaLabel}>
      {children}
    </Card>
  );
}
