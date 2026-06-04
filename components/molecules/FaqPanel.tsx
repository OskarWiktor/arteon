import type { ReactNode } from 'react';
import { focusRingClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

interface FaqPanelProps {
  question: string;
  answer: ReactNode;
  icon?: ReactNode;
  name: string;
  defaultOpen?: boolean;
}

const detailsClasses =
  'faq-details group hover:border-neutral-300 open:border-neutral-300 my-2 overflow-hidden rounded-lg border border-neutral-200 bg-white transition open:shadow-sm hover:shadow-md';

const summaryClasses =
  'flex w-full cursor-pointer list-none items-center justify-between p-3 text-left transition-colors md:p-4 [&::-webkit-details-marker]:hidden';

const iconClasses =
  'bg-primary-light flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-neutral-900 transition group-open:bg-neutral-900 group-open:text-white';

export default function FaqPanel({ question, answer, icon, name }: FaqPanelProps) {
  return (
    <details name={name} className={detailsClasses}>
      <summary className={cn(summaryClasses, focusRingClasses, icon && 'gap-4')}>
        {icon && <div className={iconClasses}>{icon}</div>}

        <h3 className='h6 flex-1'>{question}</h3>

        <span
          className='ml-2 transition-transform duration-200 group-open:rotate-45'
          aria-hidden='true'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            width='1em'
            height='1em'
          >
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </span>
      </summary>

      <div className='border-t border-primary-light p-4'>
        <div className='leading-relaxed text-light'>
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    </details>
  );
}
