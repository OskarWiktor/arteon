'use client';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { cn } from '@/lib/clsx';
import { largeIconSizeClasses } from '@/lib/uiClasses';
import ButtonCircle from '../../atoms/buttons/ButtonCircle';

type CarouselNavButtonsProps = {
  isScrollable: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
};

const carouselNavButtonsClasses =
  'absolute bottom-[-42px] z-10 max-h-12 max-w-12 bg-[#380911]';

export function CarouselNavButtons({
  isScrollable,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
}: CarouselNavButtonsProps) {
  if (!isScrollable) return null;

  return (
    <>
      <ButtonCircle
        onClick={onPrev}
        ariaLabel={prevLabel}
        className={cn('left-2`', carouselNavButtonsClasses)}
      >
        <RiArrowLeftSLine className={largeIconSizeClasses} aria-hidden='true' />
      </ButtonCircle>
      <ButtonCircle
        onClick={onNext}
        ariaLabel={nextLabel}
        className={cn('left-18', carouselNavButtonsClasses)}
      >
        <RiArrowRightSLine
          className={largeIconSizeClasses}
          aria-hidden='true'
        />
      </ButtonCircle>
    </>
  );
}
