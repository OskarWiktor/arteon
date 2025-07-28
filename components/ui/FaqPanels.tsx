'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FaqPanelsItem {
  question: string;
  answer: string;
}

interface FaqPanelsProps {
  items: FaqPanelsItem[];
}

export default function FaqPanels({ items }: FaqPanelsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
        <div>
      {items.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <div
            key={index}
            className="overflow-hidden px-2 md:px-4 py-3 md:py-6 border-1 border-gray-100 hover:border-amber-300 hover:shadow-lg rounded-md my-2"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between  text-left text-base transition"
              aria-expanded={isOpen}
            >
              <h5>{item.question}</h5>
              <span className="ml-2">
                {isOpen ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <p className='pt-2'>                  {item.answer}
</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>

  );
}
