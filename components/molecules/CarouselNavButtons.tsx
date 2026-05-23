'use client';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import ButtonCircle from '../atoms/buttons/ButtonCircle';
import { cn } from '@/lib/utils';

type CarouselNavButtonsProps = {
  isScrollable: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
};

const carouselNavButtonsClasses = 'absolute bottom-[-31px] z-10 max-h-13 max-w-13';

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
        <RiArrowLeftSLine className='h-8 w-8' aria-hidden='true' />
      </ButtonCircle>
      <ButtonCircle
        onClick={onNext}
        ariaLabel={nextLabel}
        className={cn('right-2', carouselNavButtonsClasses)}
      >
        <RiArrowRightSLine className='h-8 w-8' aria-hidden='true' />
      </ButtonCircle>
    </>
  );
}
