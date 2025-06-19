'use client';

import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StaggerChildrenProps {
  children: ReactNode;
  delayChildren?: number;
  stagger?: number;
  once?: boolean;
}

export default function StaggerChildren({ children, delayChildren = 0.2, stagger = 0.1, once = true }: StaggerChildrenProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });

  const controls = useAnimation();

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && (!once || !hasAnimated.current)) {
      controls.start('visible');
      hasAnimated.current = true;
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
