'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Wrapper from './Wrapper';
import { useId } from 'react';

interface SectionFourProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  sectionClassName?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionFour<T>({ items, renderItem, className = '', sectionClassName = '' }: SectionFourProps<T>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const controls = useAnimation();
  const hasAnimated = useRef(false);
  const titleId = useId();

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      controls.start('visible');
      hasAnimated.current = true;
    }
  }, [isInView, controls]);

  return (
    <section className={`mt-24 md:px-4 ${sectionClassName}`} aria-labelledby={titleId} role="region">
      <Wrapper>
        <h4 id={titleId} className="sr-only">
          Lista elementów
        </h4>
        <motion.div ref={ref} className={`flex flex-wrap ${className}`} initial="hidden" animate={controls} variants={containerVariants}>
          {items.map((item, index) => (
            <motion.div key={index} variants={childVariants} className="flex w-full flex-col items-center px-4 py-2 md:w-1/2 lg:w-1/4" role="group" aria-label={`Element ${index + 1}`} tabIndex={0}>
              {renderItem(item, index)}
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </section>
  );
}
