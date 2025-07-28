'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Wrapper from './Wrapper';

interface SectionFourProps<T> {
  title?: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  variant?: 'basic' | 'smallMargin';
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

export default function SectionFour<T>({
  title,
  items,
  renderItem,
  variant = 'basic',
}: SectionFourProps<T>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      controls.start('visible');
      hasAnimated.current = true;
    }
  }, [isInView, controls]);

  return (
    <section
      className={`${variant === 'basic' ? 'mt-12 md:mt-16 lg:mt-24' : 'mt-6'} md:px-4`}
      role="region"
    >
      <Wrapper className='px-4 md:px-6 lg:px-0'>
        {title && <h3 className="mb-2 md:mb-4">{title}</h3>}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 "
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="flex flex-col items-center"
              role="group"
              tabIndex={0}
            >
              {renderItem(item, index)}
            </motion.div>
          ))}
        </motion.div>
      </Wrapper>
    </section>
  );
}
