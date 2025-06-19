'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Wrapper from './Wrapper';

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
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      controls.start('visible');
      hasAnimated.current = true;
    }
  }, [isInView, controls]);

  return (
    <section className={`mt-24 md:px-4 ${sectionClassName}`}>
      <Wrapper>
        <motion.div ref={ref} className={`flex flex-wrap ${className}`} initial="hidden" animate={controls} variants={containerVariants}>
          {items.map((item, index) => (
            <motion.div key={index} variants={childVariants} className="flex w-full flex-col items-center px-4 py-2 md:w-1/2 lg:w-1/4">
              {renderItem(item, index)}
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </section>
  );
}
