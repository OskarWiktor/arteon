'use client';

import { useEffect, useRef, useState } from 'react';
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
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const max = items.length - 1;
    let next = index;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        next = index === max ? 0 : index + 1;
        btnRefs.current[next]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        next = index === 0 ? max : index - 1;
        btnRefs.current[next]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        btnRefs.current[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        btnRefs.current[max]?.focus();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    btnRefs.current = btnRefs.current.slice(0, items.length);
  }, [items.length]);

  return (
    <section aria-labelledby="faq-heading">
      {subtitle && <span className="text-base tracking-wider uppercase text-[#5e5e5e]">{subtitle}</span>}
      <h2 id="faq-heading" className="mb-2">
        {title}
      </h2>

      {items.map((item, index) => {
        const isOpen = index === activeIndex;
        const buttonId = `faq-q-${index}`;
        const panelId = `faq-a-${index}`;

        return (
          <div
            key={index}
            className={[
              'my-4 overflow-hidden rounded-md border bg-white',
              'hover:border-indigo-300 hover:shadow-md',
              isOpen ? 'border-indigo-300' : 'border-gray-300',
              'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-white',
            ].join(' ')}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={[
                'flex w-full cursor-pointer items-center justify-between px-5 py-3 text-left transition',
                'focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                'md:px-6 md:py-4',
              ].join(' ')}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="h6">{item.question}</span>
              <span className="ml-2" aria-hidden="true">
                {isOpen ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <p className="px-6 pb-4">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}
