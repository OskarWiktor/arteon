import type { ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import ButtonLink from '../atoms/buttons/ButtonLink';
import Reveal from '../atoms/Reveal';
import Subtitle from '../atoms/typography/Subtitle';

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
  containerClassName?: string;
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
  containerClassName,
}: SectionHeaderProps) {
  const hasButton = Boolean(buttonText && buttonLink);

  const content = (
    <div className={cn('pb-4 md:pb-6', containerClassName)}>
      {/* Reveal wraps only the subtitle + title. Descriptions are excluded on
          purpose: some sections add further copy below, and animating the
          description looked off where those stack. */}
      <Reveal>
        {subtitle && (
          <div className='mb-2 md:mb-4'>
            <Subtitle className={SubtitleClassName} id={subtitleId}>
              {subtitle}
            </Subtitle>
          </div>
        )}
        <h2 className={cn('h3 scroll-mt-26', titleClassName)} id={titleId}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <p className={cn('pt-4 md:pt-6', descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );

  if (!hasButton) return content;

  return (
    <div className='flex flex-col justify-between md:flex-row'>
      {content}
      <div>
        <ButtonLink className='mb-4 md:mb-0' href={buttonLink!}>
          {buttonText}
        </ButtonLink>
      </div>
    </div>
  );
}
