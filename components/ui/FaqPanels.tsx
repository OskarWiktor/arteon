'use client';

import { useEffect, useRef, useState, useId, useMemo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import SectionHeader from './typography/SectionHeader';

interface FaqPanelsItem {
  question: string;
  answer: string | ReactNode;
  answerSchemaText?: string;
  icon?: ReactNode;
}

interface FaqPanelsProps {
  items: FaqPanelsItem[];
  title?: string;
  subtitle?: string;
  generateSchema?: boolean;
  pageUrl?: string;
  openByDefault?: number;
  variant?: 'default' | 'halfWidth';
  showIcons?: boolean;
}

const ui = {
  pl: {
    defaultTitle: 'Najczęstsze pytania',
  },
} as const;

export default function FaqPanels({ items, title = ui.pl.defaultTitle, subtitle, generateSchema = true, pageUrl, openByDefault = 0, variant = 'default', showIcons = false }: FaqPanelsProps) {
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

  const containerClass = variant === 'halfWidth' ? 'mx-auto max-w-2xl' : '';

  return (
    <section aria-labelledby="faq-heading">
      <SectionHeader subtitle={subtitle} title={title} headingLevel="h2" headingClassName=" h4" titleId="faq-heading" />

      <div className={containerClass}>
        {items.map((item, index) => {
          const isOpen = activeIndex === index;
          const buttonId = `faq-q-${index}`;
          const panelId = `faq-a-${index}`;

          return (
            <div
              key={index}
              className={[
                'my-2 overflow-hidden rounded-xl border bg-white transition-shadow',
                'hover:border-primary-light hover:shadow-md',
                isOpen ? 'border-primary-light shadow-sm' : 'border-neutral-200',
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
                  'flex w-full cursor-pointer items-center justify-between p-3 text-left transition',
                  'focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-neutral-900',
                  'md:p-4',
                  showIcons && item.icon ? 'gap-4' : '',
                ].join(' ')}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                {showIcons && item.icon && (
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition ${isOpen ? 'bg-neutral-900 text-white' : 'bg-primary-light text-neutral-900'}`}>
                    {item.icon}
                  </div>
                )}
                <h3 className="h6 flex-1">{item.question}</h3>
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
                <div className="border-primary-light border-t p-4">
                  <div className="text-light leading-relaxed">{typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}</div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {faqJsonLd && <script id={`faq-jsonld-${scriptId}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    </section>
  );
}
