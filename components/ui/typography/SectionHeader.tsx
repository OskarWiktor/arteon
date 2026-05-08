import type { ReactNode } from 'react';
import Eyebrow from './Eyebrow';

interface SectionHeaderProps {
  subtitle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  eyebrowVariant?: 'default' | 'dynamic';
  eyebrowClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  subtitleId?: string;
  titleId?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  eyebrowVariant = 'default',
  eyebrowClassName = '',
  headingClassName = '',
  descriptionClassName = '',
  subtitleId,
  titleId,
}: SectionHeaderProps) {
  return (
    <>
      {subtitle && (
        <div className="mb-2 md:mb-4">
          <Eyebrow variant={eyebrowVariant} className={eyebrowClassName} id={subtitleId}>
            {subtitle}
          </Eyebrow>
        </div>
      )}
      {title && (
        <h2 className={`${headingClassName} h3 mb-4 lg:mb-6`} id={titleId}>
          {title}
        </h2>
      )}
      {description && <p className={descriptionClassName}>{description}</p>}
    </>
  );
}
