'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      const moveBy = (baseVelocity * delta) / 1000;
      x.set(x.get() - moveBy);
    }
  });

  return (
    <Wrapper>
      <section className="relative mt-12 overflow-hidden md:mt-16 lg:mt-24">
        <div ref={containerRef} className="overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <motion.div style={{ x }} className="flex gap-2 whitespace-nowrap md:gap-6 lg:gap-10">
            {[...techStackItems, ...techStackItems].map(({ label, icon: Icon }, index) => (
              <div key={`${label}-${index}`} className="flex shrink-0 items-center px-4">
                <span className="pr-2 text-2xl">{label}</span>
                <Icon className="h-auto w-6" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
