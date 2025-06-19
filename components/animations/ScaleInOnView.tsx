'use client';

import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScaleInOnViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scaleFrom?: number;
  once?: boolean;
}

export default function ScaleInOnView({ children, delay = 0.1, duration = 0.4, scaleFrom = 0.8, once = true }: ScaleInOnViewProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && (!once || !hasAnimated.current)) {
      controls.start({ opacity: 1, scale: 1 });
      hasAnimated.current = true;
    }
  }, [isInView, controls, once]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: scaleFrom }} animate={controls} transition={{ delay, duration }}>
      {children}
    </motion.div>
  );
}
