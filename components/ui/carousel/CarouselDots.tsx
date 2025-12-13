'use client';

type CarouselDotsProps = {
  isScrollable: boolean;
  currentSlide: number;
  maxSlides: number;
  onDotClick: (index: number) => void;
  carouselNavigationLabel: string;
  goToSlideLabel: string;
  ofLabel: string;
  slideLabel: string;
};

export function CarouselDots({
  isScrollable,
  currentSlide,
  maxSlides,
  onDotClick,
  carouselNavigationLabel,
  goToSlideLabel,
  ofLabel,
  slideLabel,
}: CarouselDotsProps) {
  if (!isScrollable || maxSlides <= 1) return null;

  return (
    <>
      <div className="flex justify-center md:gap-2" role="group" aria-label={carouselNavigationLabel}>
        {Array.from({ length: maxSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            aria-label={`${goToSlideLabel} ${i + 1} ${ofLabel} ${maxSlides}`}
            aria-current={i === currentSlide ? 'true' : undefined}
            className="h-5 w-5 cursor-pointer rounded-full p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-6 md:w-6"
          >
            <span
              aria-hidden="true"
              className={`mx-auto block h-2 w-2 rounded-full transition duration-300 md:h-3 md:w-3 ${i === currentSlide ? 'bg-slate-500 hover:bg-slate-700' : 'bg-gray-300 hover:bg-gray-500'}`}
            />
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {slideLabel} {Math.min(currentSlide + 1, maxSlides)} {ofLabel} {maxSlides}
      </p>
    </>
  );
}
