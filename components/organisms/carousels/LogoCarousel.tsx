'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiSass,
  SiReact,
  SiWebflow,
  SiVercel,
  SiGooglesearchconsole,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiFigma,
  SiShopify,
  SiWix,
  SiGoogleanalytics,
  SiGoogleads,
} from 'react-icons/si';
import IconText from '@/components/atoms/IconText';
import SectionHeader from '@/components/molecules/SectionHeader';
import { useEventListener } from '@/hooks/useEventListener';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useTimeout } from '@/hooks/useTimeout';
import { cn } from '@/lib/clsx';
import { flexCenterClasses, focusRingClasses } from '@/lib/uiClasses';

interface LogoCarouselDefaultItem {
  label: string;
  icon: IconType;
}

interface LogoCarouselLogoImage {
  alt: string;
  src: string;
  width: number;
  height: number;
  heightClass?: string;
}

interface LogoCarouselProps {
  variant?: 'default' | 'logo';
}

const LogoCarouselDefaultItems: LogoCarouselDefaultItem[] = [
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'React', icon: SiReact },
  { label: 'Google Search Console', icon: SiGooglesearchconsole },
  { label: 'Figma', icon: SiFigma },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Adobe Illustrator', icon: SiAdobeillustrator },
  { label: 'Sass', icon: SiSass },
  { label: 'Vercel', icon: SiVercel },
  { label: 'Google Ads', icon: SiGoogleads },
  { label: 'Webflow', icon: SiWebflow },
  { label: 'Adobe InDesign', icon: SiAdobeindesign },
  { label: 'Wordpress', icon: SiWordpress },
  { label: 'Google Analytics 4', icon: SiGoogleanalytics },
  { label: 'Adobe Photoshop', icon: SiAdobephotoshop },
  { label: 'Shopify', icon: SiShopify },
  { label: 'Wix', icon: SiWix },
];

const LogoCarouselLogoItems: LogoCarouselLogoImage[] = [
  {
    alt: 'Autokorfu',
    src: '/assets/projects/loga-firm/logo-autokorfu.webp',
    width: 335,
    height: 80,
    heightClass: 'h-8 md:h-10',
  },
  {
    alt: 'StepArd',
    src: '/assets/projects/loga-firm/StepArd-logo-czarne.webp',
    width: 271,
    height: 72,
    heightClass: 'h-7 md:h-9',
  },
  {
    alt: 'Finish Masters',
    src: '/assets/projects/loga-firm/finish-masters-logo-kolor.webp',
    width: 210,
    height: 72,
    heightClass: 'h-7 md:h-9',
  },
  {
    alt: 'Izoluk',
    src: '/assets/projects/loga-firm/izoluk-logo-firmy.webp',
    width: 348,
    height: 104,
    heightClass: 'h-11 md:h-13',
  },
  {
    alt: 'KM2',
    src: '/assets/projects/loga-firm/logo-km2-czarne-pelne.webp',
    width: 89,
    height: 64,
    heightClass: 'h-6 md:h-8',
  },
  {
    alt: 'LuxNova',
    src: '/assets/projects/loga-firm/luxnova-logo.webp',
    width: 256,
    height: 112,
    heightClass: 'h-12 md:h-14',
  },
  {
    alt: 'Eliza Wrońska',
    src: '/assets/projects/loga-firm/eliza-wronska-logo.webp',
    width: 213,
    height: 112,
    heightClass: 'h-12 md:h-14',
  },
  {
    alt: 'NaPilota',
    src: '/assets/projects/loga-firm/logo-napilota.webp',
    width: 203,
    height: 96,
    heightClass: 'h-10 md:h-12',
  },
];

/**
 * Renders a horizontally scrolling, continuously looping carousel of logos or technology icons.
 *
 * The carousel pauses on hover, focus, or touch, and does not animate when the user prefers reduced motion
 * or the carousel is outside the viewport. Items are duplicated to create a seamless loop and the component
 * provides accessible region semantics and focusability.
 *
 * @param variant - Display mode: `'logo'` shows company logo images, any other value shows technology icons with a section header.
 * @returns The rendered carousel React element.
 */
export default function LogoCarousel({
  variant = 'default',
}: LogoCarouselProps) {
  const baseVelocity = 30;
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const xRef = useRef(0);
  const loopWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);

  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [isInView, setIsInView] = useState(false);

  const { start: startFontMeasure, clear: clearFontMeasure } = useTimeout();

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const measure = () => {
    if (!trackRef.current) return;
    const total = trackRef.current.scrollWidth;
    loopWidthRef.current = total / 2;
  };

  useEventListener(
    typeof window !== 'undefined' ? window : null,
    'resize',
    measure,
  );

  useEffect(() => {
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    startFontMeasure(measure, 100);

    return () => {
      ro.disconnect();
      clearFontMeasure();
    };
  }, [measure, startFontMeasure, clearFontMeasure]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        threshold: 0,
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !isInView) return;
    prevTimeRef.current = 0;

    const animate = (time: number) => {
      if (prevTimeRef.current) {
        const delta = time - prevTimeRef.current;
        if (!isPausedRef.current && loopWidthRef.current > 0) {
          const moveBy = (baseVelocity * delta) / 1000;
          xRef.current -= moveBy;
          if (xRef.current <= -loopWidthRef.current) {
            xRef.current += loopWidthRef.current;
          }
          if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${xRef.current}px)`;
          }
        }
      }
      prevTimeRef.current = time;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduceMotion, isInView]);

  if (variant === 'logo') {
    return (
      <section className='relative overflow-hidden'>
        <div
          ref={containerRef}
          className={cn('overflow-hidden rounded-lg', focusRingClasses)}
          role='region'
          aria-label='Przewijana lista logo firm.'
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <ul
            ref={trackRef}
            style={{ willChange: 'transform' }}
            className='flex items-center gap-10 whitespace-nowrap md:gap-14 lg:gap-20'
          >
            {[...LogoCarouselLogoItems, ...LogoCarouselLogoItems].map(
              ({ alt, src, width, height, heightClass }, index) => (
                <li key={`${alt}-${index}`} className='shrink-0'>
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={cn(
                      'w-auto object-contain opacity-60 brightness-0 transition-opacity hover:opacity-100 dark:invert',
                      heightClass ?? 'h-12 md:h-14',
                    )}
                    onLoad={measure}
                    unoptimized
                  />
                </li>
              ),
            )}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section
      className='relative overflow-hidden'
      aria-labelledby='LogoCarousel-heading'
    >
      <SectionHeader
        titleId='LogoCarousel-heading'
        title='Jakiej technologii używamy?'
      />

      <div
        ref={containerRef}
        className={cn('overflow-hidden rounded-lg', focusRingClasses)}
        role='region'
        aria-label='Przewijana lista technologii.'
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <ul
          ref={trackRef}
          style={{ willChange: 'transform' }}
          className='flex gap-8 whitespace-nowrap md:gap-16 lg:gap-20'
        >
          {[...LogoCarouselDefaultItems, ...LogoCarouselDefaultItems].map(
            ({ label, icon: Icon }, index) => (
              <li key={`${label}-${index}`} className='shrink-0'>
                <div
                  className={cn(
                    'mt-4 min-w-24 flex-col opacity-70',
                    flexCenterClasses,
                  )}
                >
                  <IconText
                    icon={
                      <Icon
                        className='h-auto w-10 text-primary md:w-12'
                        aria-hidden='true'
                      />
                    }
                    children={undefined}
                  />
                  <span className='mt-1 text-lg text-primary md:text-2xl'>
                    {label}
                  </span>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
