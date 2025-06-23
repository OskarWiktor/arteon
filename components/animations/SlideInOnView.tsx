'use client';

import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface SlideInOnViewProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function SlideInOnView({ children, direction = 'left', delay = 0.1, duration = 0.4, distance = 40, once = false }: SlideInOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const hasAnimated = useRef(false);

  const xOffset = direction === 'left' ? -distance : distance;

  useEffect(() => {
    if (isInView && (!once || !hasAnimated.current)) {
      controls.start({ opacity: 1, x: 0 });
      hasAnimated.current = true;
    }
  }, [isInView, controls, once]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: xOffset }} animate={controls} transition={{ delay, duration }}>
      {children}
    </motion.div>
  );
}
