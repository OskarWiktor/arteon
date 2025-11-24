'use client';

import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
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
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const total = trackRef.current.scrollWidth;
      setLoopWidth(total / 2);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    const fontTimer = setTimeout(measure, 100);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      clearTimeout(fontTimer);
    };
  }, []);

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
      <h2 id="techstack-heading" className='reveal-animation'>Jakiej technologii używamy?</h2>

      <div
        ref={containerRef}
        className="mt-6 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Przewijana lista technologii. Ustaw fokus, najedź lub dotknij, aby wstrzymać przewijanie."
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
            <div key={`${label}-${index}`} className="flex shrink-0 items-center">
              <Icon className="h-auto w-6" aria-hidden="true" />
              <span className="pl-2 text-2xl">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
