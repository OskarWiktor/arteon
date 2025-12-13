import type { ReactNode } from 'react';
import Eyebrow from './Eyebrow';
import Heading from './Heading';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface SectionHeaderProps {
  subtitle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  headingLevel?: HeadingLevel;
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
  headingLevel = 'h2',
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
        <Eyebrow variant={eyebrowVariant} className={eyebrowClassName} id={subtitleId}>
          {subtitle}
        </Eyebrow>
      )}
      {title && (
        <Heading as={headingLevel} className={headingClassName} id={titleId}>
          {title}
        </Heading>
      )}
      {description && <p className={descriptionClassName}>{description}</p>}
    </>
  );
}

