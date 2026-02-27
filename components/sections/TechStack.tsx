'use client';

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

interface TechStackItem {
  label: string;
  icon: IconType;
}

const techStackItems: TechStackItem[] = [
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

export default function TechStack() {
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
    if (reduceMotion) return;

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
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading" className="h4 mb-4 md:mb-6 lg:mb-8">
        Jakiej technologii używamy?
      </h2>

      <div
        ref={containerRef}
        className="focus-visible:ring-primary overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Przewijana lista technologii. Ustaw fokus, najedź lub dotknij, aby wstrzymać przewijanie."
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <ul ref={trackRef} style={{ willChange: 'transform' }} className="flex gap-6 whitespace-nowrap md:gap-10 lg:gap-14">
          {[...techStackItems, ...techStackItems].map(({ label, icon: Icon }, index) => (
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
