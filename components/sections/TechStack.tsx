'use client';

import { motion, useMotionValue, useAnimationFrame, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { SiNextdotjs, SiTailwindcss, SiWordpress, SiSass, SiReact, SiWebflow, SiVercel } from 'react-icons/si';
import Wrapper from '../ui/Wrapper';

interface TechStackItem {
  label: string;
  icon: IconType;
}

const techStackItems: TechStackItem[] = [
  { label: 'Next', icon: SiNextdotjs },
  { label: 'React', icon: SiReact },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Sass', icon: SiSass },
  { label: 'Vercel', icon: SiVercel },
  { label: 'Webflow', icon: SiWebflow },
  { label: 'Wordpress', icon: SiWordpress },
];

export default function TechStack() {
  const baseVelocity = 20;
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useAnimationFrame((t, delta) => {
    if (isPaused || reduceMotion) return;
    const moveBy = (baseVelocity * delta) / 1000;
    x.set(x.get() - moveBy);
  });

  return (
    <Wrapper>
      <section className="relative overflow-hidden" aria-labelledby="techstack-heading">
        <h4 id="techstack-heading">Czego używamy?</h4>

        <div
          ref={containerRef}
          className="mt-4 overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Przewijana lista technologii. Ustaw fokus, najedź lub dotknij, aby wstrzymać przewijanie."
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div style={{ x }} className="flex gap-6 whitespace-nowrap md:gap-10 lg:gap-14">
            {[...techStackItems, ...techStackItems].map(({ label, icon: Icon }, index) => (
              <div key={`${label}-${index}`} className="flex shrink-0 items-center">
                <span className="pr-2 text-2xl">{label}</span>
                <Icon className="h-auto w-6" aria-hidden="true" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
