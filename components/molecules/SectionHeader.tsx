import type { ReactNode } from 'react';
import Subtitle from '../atoms/typography/Subtitle';
import ButtonLink from '../atoms/buttons/ButtonLink';

interface SectionHeaderProps {
  subtitle?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  SubtitleVariant?: 'default' | 'dynamic';
  SubtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subtitleId?: string;
  titleId?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  SubtitleClassName,
  titleClassName,
  descriptionClassName,
  subtitleId,
  titleId,
  buttonText,
  buttonLink,
}: SectionHeaderProps) {
  const hasButton = Boolean(buttonText && buttonLink);

  const content = (
    <>
      {subtitle && (
        <div className='mb-2 md:mb-4'>
          <Subtitle className={SubtitleClassName} id={subtitleId}>
            {subtitle}
          </Subtitle>
        </div>
      )}
      <h2 className={`${titleClassName} h3 mb-4 lg:mb-6`} id={titleId}>
        {title}
      </h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </>
  );

  if (!hasButton) return content;

  return (
    <div className='flex flex-row justify-between'>
      <div>{content}</div>
      <div>
        <ButtonLink href={buttonLink!}>{buttonText}</ButtonLink>
      </div>
    </div>
  );
}
