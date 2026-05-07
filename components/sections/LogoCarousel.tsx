'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import IconText from '@/components/ui/IconText';
import { useEventListener } from '@/hooks/useEventListener';
import { useTimeout } from '@/hooks/useTimeout';
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

interface LogoCarouselDefaultItem {
  label: string;
  icon: IconType;
}

interface LogoCarouselLogoImage {
  alt: string;
  src: string;
  width: number;
  height: number;
  filter?: string;
  heightClass?: string;
}

interface LogoCarouselProps {
  variant?: 'default' | 'logo';
}

const LogoCarouselDefaultItems: LogoCarouselDefaultItem[] = [
  { label: 'Next', icon: SiNextdotjs },
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
  { alt: 'Autokorfu', src: '/assets/projects/loga-firm/logo-autokorfu.webp', width: 320, height: 96, heightClass: 'h-8 md:h-10', filter: 'brightness(0)' },
  { alt: 'StepArd', src: '/assets/projects/loga-firm/StepArd-logo-czarne.png', width: 320, height: 80, heightClass: 'h-7 md:h-9', filter: 'brightness(0)' },
  { alt: 'Finish Masters', src: '/assets/projects/loga-firm/finish-masters-logo-kolor.png', width: 320, height: 96, heightClass: 'h-7 md:h-9', filter: 'brightness(0)' },
  { alt: 'Izoluk', src: '/assets/projects/loga-firm/izoluk-logo-firmy.png', width: 320, height: 96, heightClass: 'h-11 md:h-13', filter: 'brightness(0)' },
  { alt: 'KM2', src: '/assets/projects/loga-firm/logo-km2-czarne-pelne.png', width: 320, height: 96, heightClass: 'h-6 md:h-8', filter: 'brightness(0)' },
  { alt: 'LuxNova', src: '/assets/projects/loga-firm/luxnova-logo.png', width: 320, height: 96, heightClass: 'h-12 md:h-14', filter: 'brightness(0)' },
  { alt: 'Eliza Wrońska', src: '/assets/projects/loga-firm/eliza-wronska-logo.webp', width: 320, height: 96, heightClass: 'h-12 md:h-14', filter: 'brightness(0)' },
  { alt: 'NaPilota', src: '/assets/projects/loga-firm/logo-napilota.webp', width: 320, height: 96, heightClass: 'h-10 md:h-12', filter: 'brightness(0)' },
];

export default function LogoCarousel({ variant = 'default' }: LogoCarouselProps) {
  const baseVelocity = 30;
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const xRef = useRef(0);
  const loopWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);

  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const { start: startFontMeasure, clear: clearFontMeasure } = useTimeout();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const total = trackRef.current.scrollWidth;
    loopWidthRef.current = total / 2;
  }, []);

  useEventListener(typeof window !== 'undefined' ? window : null, 'resize', measure);

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
    const io = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0 });
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
      <section className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="focus-visible:ring-primary overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          role="region"
          aria-label="Przewijana lista logo firm."
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <ul ref={trackRef} style={{ willChange: 'transform' }} className="flex items-center gap-10 whitespace-nowrap md:gap-14 lg:gap-20">
            {[...LogoCarouselLogoItems, ...LogoCarouselLogoItems].map(({ alt, src, width, height, filter, heightClass }, index) => (
              <li key={`${alt}-${index}`} className="shrink-0">
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className={`${heightClass ?? 'h-12 md:h-14'} w-auto object-contain opacity-60 transition-opacity hover:opacity-100`}
                  style={filter ? { filter } : undefined}
                  onLoad={measure}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden" aria-labelledby="LogoCarousel-heading">
      <h2 id="LogoCarousel-heading" className="h4 mb-4 lg:mb-6">
        Jakiej technologii używamy?
      </h2>

      <div
        ref={containerRef}
        className="focus-visible:ring-primary overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        role="region"
        aria-label="Przewijana lista technologii."
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <ul ref={trackRef} style={{ willChange: 'transform' }} className="flex gap-6 whitespace-nowrap md:gap-10 lg:gap-14">
          {[...LogoCarouselDefaultItems, ...LogoCarouselDefaultItems].map(({ label, icon: Icon }, index) => (
            <li key={`${label}-${index}`} className="shrink-0">
              <IconText icon={<Icon className="text-primary h-auto w-6" aria-hidden="true" />} gap="2">
                <span className="text-primary text-2xl">{label}</span>
              </IconText>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
