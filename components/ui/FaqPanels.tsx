'use client';

import { useEffect, useRef, useState, useId, useMemo, type ReactNode } from 'react';
const FiPlus = (p: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const FiMinus = (p: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
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

export default function FaqPanels({ items, title = 'Najczęstsze pytania', subtitle, generateSchema = true, pageUrl, openByDefault = 0, variant = 'default', showIcons = false }: FaqPanelsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const scriptId = useId();
  const headingId = `faq-heading-${scriptId}`;

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
    <section aria-labelledby={headingId}>
      <SectionHeader subtitle={subtitle} title={title} headingLevel="h2" headingClassName=" h4" titleId={headingId} />

      <div className={containerClass}>
        {items.map((item, index) => {
          const isOpen = activeIndex === index;
          const buttonId = `faq-q-${scriptId}-${index}`;
          const panelId = `faq-a-${scriptId}-${index}`;

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

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className="grid transition-[grid-template-rows,opacity] duration-250 ease-in-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <div className="border-primary-light border-t p-4">
                    <div className="text-light leading-relaxed">{typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {faqJsonLd && <script id={`faq-jsonld-${scriptId}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    </section>
  );
}
