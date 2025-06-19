'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface FadeInOnViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
}

export default function FadeInOnView({ children, delay = 0, duration = 0.4, yOffset = 10, once = true }: FadeInOnViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
  });

  const controls = useAnimation();

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && (!once || !hasAnimated.current)) {
      controls.start({ opacity: 1, y: 0 });
      hasAnimated.current = true;
    }
  }, [isInView, once, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: yOffset }} animate={controls} transition={{ delay, duration }}>
      {children}
    </motion.div>
  );
}
