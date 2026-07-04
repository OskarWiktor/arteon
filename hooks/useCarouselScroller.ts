'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type RefObject,
} from 'react';
import useMediaQuery from './useMediaQuery';

type Params = {
  itemCount: number;
  scrollRef: RefObject<HTMLDivElement | null>;
  cardRef: RefObject<HTMLElement | null>;
  autoPlay?: boolean;
  autoPlayIntervalMs?: number;
};

export function useCarouselScroller({
  itemCount,
  scrollRef,
  cardRef,
  autoPlay = false,
  autoPlayIntervalMs = 5000,
}: Params) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [autoPlayActive, setAutoPlayActive] = useState(autoPlay);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  );

  const currentSlideRef = useRef(0);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  const stopAutoPlay = useCallback(() => {
    setAutoPlayActive(false);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const ro = new ResizeObserver(() => {
      const cs = getComputedStyle(container);
      const gap = parseFloat(cs.columnGap || '16') || 16;
      const w = card.getBoundingClientRect().width;
      const cardWithGap = w + gap;
      setCardWidth(cardWithGap);

      const maxScroll = container.scrollWidth - container.clientWidth;
      const slides =
        maxScroll > 0 ? Math.round(maxScroll / cardWithGap) + 1 : 1;

      setMaxSlides(slides);
      setIsScrollable(slides > 1);

      const nextIndex = Math.min(currentSlideRef.current, slides - 1);
      setCurrentSlide(nextIndex);

      container.scrollTo({
        left: nextIndex * cardWithGap,
        behavior: 'auto',
      });
    });

    ro.observe(container);
    ro.observe(card);

    return () => ro.disconnect();
  }, [itemCount, scrollRef, cardRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !cardWidth) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxScroll = el.scrollWidth - el.clientWidth;
        const ratio = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
        const idx = Math.round(ratio * (maxSlides - 1));
        setCurrentSlide(Math.max(0, Math.min(idx, maxSlides - 1)));
        ticking = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [cardWidth, maxSlides, scrollRef]);

  useEffect(() => {
    if (!autoPlay) return;
    const el = scrollRef.current;
    if (!el) return;

    const onPointerDown = () => stopAutoPlay();
    // Only stop on a deliberate horizontal wheel gesture (swiping the carousel).
    // A vertical wheel is the user scrolling the page past the carousel — that
    // must not permanently kill autoplay just because the pointer is over it.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) stopAutoPlay();
    };

    el.addEventListener('pointerdown', onPointerDown, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: true });

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('wheel', onWheel);
    };
  }, [autoPlay, scrollRef, stopAutoPlay]);

  const maxSlidesRef = useRef(0);
  useEffect(() => {
    maxSlidesRef.current = maxSlides;
  }, [maxSlides]);

  const cardWidthRef = useRef(0);
  useEffect(() => {
    cardWidthRef.current = cardWidth;
  }, [cardWidth]);

  // Pause autoplay when carousel is not visible in viewport
  useEffect(() => {
    if (!autoPlay) return;
    const el = scrollRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0,
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [autoPlay, scrollRef]);

  useEffect(() => {
    if (!autoPlayActive || !isScrollable || !isVisible || prefersReducedMotion)
      return;

    const id = setInterval(() => {
      const container = scrollRef.current;
      const cw = cardWidthRef.current;
      if (!container || !cw) return;

      const curr = currentSlideRef.current;
      const max = maxSlidesRef.current;

      if (curr >= max - 1) {
        container.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const targetScroll = Math.min((curr + 1) * cw, maxScroll);
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }, autoPlayIntervalMs);

    return () => clearInterval(id);
  }, [
    autoPlayActive,
    autoPlayIntervalMs,
    isScrollable,
    isVisible,
    scrollRef,
    prefersReducedMotion,
  ]);

  const scrollByCards = (dir: 'left' | 'right') => {
    if (!scrollRef.current || !cardWidth) return;
    stopAutoPlay();
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const delta = dir === 'left' ? -1 : 1;
    const targetLeft = Math.max(
      0,
      Math.min((currentSlide + delta) * cardWidth, maxScroll),
    );
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  const goToSlide = (index: number) => {
    if (!scrollRef.current || !cardWidth) return;
    stopAutoPlay();
    const container = scrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const clamped = Math.max(0, Math.min(index, maxSlides - 1));
    const targetLeft = Math.min(clamped * cardWidth, maxScroll);
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isScrollable) return;
    stopAutoPlay();

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCards('right');
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCards('left');
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollRef.current?.scrollTo({
        left: scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return {
    currentSlide,
    maxSlides,
    cardWidth,
    isScrollable,
    scrollByCards,
    goToSlide,
    onKeyDown,
  };
}
