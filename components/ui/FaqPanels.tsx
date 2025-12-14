'use client';

import { useEffect, useRef, useState, useId, useMemo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionHeader from './typography/SectionHeader';

interface FaqPanelsItem {
  question: string;
  answer: string | ReactNode;
  answerSchemaText?: string;
}

interface FaqPanelsProps {
  items: FaqPanelsItem[];
  title?: string;
  subtitle?: string;
  generateSchema?: boolean;
  pageUrl?: string;
  openByDefault?: number;
}

const ui = {
  pl: {
    defaultTitle: 'Najczęstsze pytania',
    defaultSubtitle: 'FAQ',
  },
} as const;

export default function FaqPanels({ items, title = ui.pl.defaultTitle, subtitle = ui.pl.defaultSubtitle, generateSchema = true, pageUrl, openByDefault = 0 }: FaqPanelsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const scriptId = useId();

  useEffect(() => {
    if (openByDefault > 0 && items.length > 0) {
      setActiveIndex((prev) => (prev === null ? 0 : prev));
    }
  }, [items.length, openByDefault]);

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

    const mainEntity = items.map((it) => {
      const textForSchema = typeof it.answer === 'string' ? it.answer : (it.answerSchemaText ?? '');
      return {
        '@type': 'Question',
        name: it.question,
        acceptedAnswer: { '@type': 'Answer', text: textForSchema },
      };
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
      mainEntity,
    };
  }, [generateSchema, items, pageUrl]);

  return (
    <section aria-labelledby="faq-heading">
      <SectionHeader
        subtitle={subtitle}
        title={title}
        headingLevel="h2"
        headingClassName="reveal-animation h3 mb-2"
        titleId="faq-heading"
      />

      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const buttonId = `faq-q-${index}`;
        const panelId = `faq-a-${index}`;

        return (
          <div
            key={index}
            className={[
              'my-4 overflow-hidden rounded-2xl border bg-white',
              'hover:border-slate-300 hover:shadow-md',
              isOpen ? 'border-slate-300' : 'border-gray-300',
              'focus-within:ring-2 focus-within:ring-slate-500 focus-within:ring-offset-2 focus-within:ring-offset-white',
            ].join(' ')}
          >
            <button
              id={buttonId}
              type="button"
              ref={(el) => {
                btnRefs.current[index] = el;
              }}
              onClick={() => toggle(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={[
                'flex w-full cursor-pointer items-center justify-between px-5 py-3 text-left transition',
                'focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-slate-600',
                'md:px-6 md:py-4',
              ].join(' ')}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <h3 className="h6">{item.question}</h3>
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
              <div className="px-6 pb-4">{typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}</div>
            </motion.div>
          </div>
        );
      })}

      {faqJsonLd && <script id={`faq-jsonld-${scriptId}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    </section>
  );
}
