import type { ReactNode } from 'react';
import SectionHeader from '../typography/SectionHeader';
import Button from '../buttons/Button';

interface SectionHeaderWithActionProps {
  subtitle?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  eyebrowVariant?: 'default' | 'dynamic';
  eyebrowClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  subtitleId?: string;
  titleId?: string;
  action?: ReactNode;
  actionLabel?: string;
  actionLink?: string;
  actionAriaLabel?: string;
  className?: string;
}

export default function SectionHeaderWithAction({
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
  action,
  actionLabel,
  actionLink,
  actionAriaLabel,
  className = '',
}: SectionHeaderWithActionProps) {
  const actionContent =
    action ||
    (actionLabel && actionLink ? (
      <Button link={actionLink} aria-label={actionAriaLabel}>
        {actionLabel}
      </Button>
    ) : null);

  return (
    <div className={`flex flex-col gap-3 md:flex-row md:items-center md:justify-between ${className}`}>
      <div>
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          headingLevel={headingLevel}
          eyebrowVariant={eyebrowVariant}
          eyebrowClassName={eyebrowClassName}
          headingClassName={headingClassName}
          descriptionClassName={descriptionClassName}
          subtitleId={subtitleId}
          titleId={titleId}
        />
      </div>
      {actionContent && <div>{actionContent}</div>}
    </div>
  );
}
