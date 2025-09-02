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
  title: string;
  subtitle?: string;
}

export default function FaqPanels({ items, title, subtitle }: FaqPanelsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      {subtitle && <span className="text-xl tracking-widest text-[#868686] uppercase">{subtitle}</span>}
      <h2>{title}</h2>
      {items.map((item, index) => {
        const isOpen = index === activeIndex;
        return (
          <div
            key={index}
            className={`my-4 cursor-pointer overflow-hidden rounded-md border-1 px-6 py-4 hover:border-indigo-300 hover:shadow-md md:my-6 md:py-6 ${isOpen ? 'border-indigo-300' : 'border-gray-300'}`}
          >
            <button onClick={() => toggle(index)} className="flex w-full cursor-pointer items-center justify-between text-left transition" aria-expanded={isOpen}>
              <span className="h6">{item.question}</span>
              <span className="ml-2">{isOpen ? <FiMinus /> : <FiPlus />}</span>
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
                  <p className="pt-4"> {item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
