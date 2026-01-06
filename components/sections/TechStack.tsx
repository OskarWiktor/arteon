'use client';

import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion';
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

const ui = {
  pl: {
    heading: 'Jakiej technologii używamy?',
    scrollableListAriaLabel: 'Przewijana lista technologii. Ustaw fokus, najedź lub dotknij, aby wstrzymać przewijanie.',
  },
} as const;

export default function TechStack() {
  const t = ui.pl;
  const baseVelocity = 30;
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const reduceMotion = useReducedMotion();

  const { start: startFontMeasure, clear: clearFontMeasure } = useTimeout();

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const total = trackRef.current.scrollWidth;
    setLoopWidth(total / 2);
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
  }, [measure]);

  useAnimationFrame((t, delta) => {
    if (isPaused || reduceMotion || loopWidth === 0) return;

    const moveBy = (baseVelocity * delta) / 1000;
    let next = x.get() - moveBy;

    if (next <= -loopWidth) {
      next += loopWidth;
    }

    x.set(next);
  });

  return (
    <section className="relative overflow-hidden" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading" className="reveal-animation h4">
        {t.heading}
      </h2>

      <div
        ref={containerRef}
        className="mt-6 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label={t.scrollableListAriaLabel}
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div ref={trackRef} style={{ x, willChange: 'transform' }} className="flex gap-6 whitespace-nowrap md:gap-10 lg:gap-14">
          {[...techStackItems, ...techStackItems].map(({ label, icon: Icon }, index) => (
            <IconText key={`${label}-${index}`} icon={<Icon className="h-auto w-6 text-slate-800" aria-hidden="true" />} gap="2" className="shrink-0">
              <span className="text-2xl text-slate-800">{label}</span>
            </IconText>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
