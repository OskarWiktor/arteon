'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StaggerChildrenFlex({ children }: { children: React.ReactNode }) {
  return (
    <motion.div className="flex flex-wrap gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible">
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
