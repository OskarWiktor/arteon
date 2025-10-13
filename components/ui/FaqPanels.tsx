'use client';

import { useEffect, useRef, useState, useId, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FaqPanelsItem {
  question: string;
  answer: string;
}

interface FaqPanelsProps {
  items: FaqPanelsItem[];
  title?: string;
  subtitle?: string;
  generateSchema?: boolean;
  pageUrl?: string;
  openByDefault?: number; // ile pierwszych pozycji ma być otwartych po załadowaniu
}

export default function FaqPanels({
  items,
  title = 'Najczęstsze pytania',
  subtitle = 'FAQ',
  generateSchema = true,
  pageUrl,
  openByDefault = 0,
}: FaqPanelsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(openByDefault > 0 ? 0 : null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const scriptId = useId();

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
    }
  };

  useEffect(() => {
    btnRefs.current = btnRefs.current.slice(0, items.length);
  }, [items.length]);

  const faqJsonLd = useMemo(() => {
    if (!generateSchema || !items?.length) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
      mainEntity: items.map((it) => ({
        '@type': 'Question',
        name: it.question,
        acceptedAnswer: { '@type': 'Answer', text: it.answer },
      })),
    };
  }, [generateSchema, items, pageUrl]);

  return (
    <section aria-labelledby="faq-heading">
      {subtitle && <span className="text-base tracking-wider text-[#5e5e5e] uppercase">{subtitle}</span>}
      <h3 id="faq-heading" className="reveal-animation h2 mb-2">{title}</h3>

      {items.map((item, index) => {
        const isOpen = activeIndex === index || (openByDefault > 0 && index < openByDefault && activeIndex === null);
        const buttonId = `faq-q-${index}`;
        const panelId = `faq-a-${index}`;

        return (
          <div
            key={index}
            className={[
              'my-4 overflow-hidden rounded-xl border bg-white',
              'hover:border-indigo-300 hover:shadow-md',
              isOpen ? 'border-indigo-300' : 'border-gray-300',
              'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-white',
            ].join(' ')}
          >
            <button
              id={buttonId}
              type="button"
              ref={(el) => { btnRefs.current[index] = el; }}
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
              <h4 className="h6">{item.question}</h4>
              <span className="ml-2" aria-hidden="true">
                {isOpen ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={false}
              animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              style={{ overflow: 'hidden' }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              aria-hidden={!isOpen}
            >
              <div className="px-6 pb-4">
                <p>{item.answer}</p>
              </div>
            </motion.div>
          </div>
        );
      })}

      {faqJsonLd && (
        <script
          id={`faq-jsonld-${scriptId}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </section>
  );
}
