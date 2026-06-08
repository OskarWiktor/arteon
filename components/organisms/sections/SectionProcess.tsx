import type { ReactNode } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeader from '@/components/molecules/SectionHeader';
import { flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import Wrapper from '../../atoms/Wrapper';
import Card from '../Card';

interface ProcessStep {
  number: number;
  title: string;
  icon: ReactNode;
}

interface SectionProcessProps {
  title?: string;
  steps: ProcessStep[];
}

/**
 * Render a responsive "process" section that displays numbered step cards with icons and desktop arrows between them.
 *
 * Renders an accessible section (aria-labelledby set when `title` is provided), an optional header, and a responsive list of steps:
 * stacked on small screens and horizontal with arrows on larger screens.
 *
 * @param title - Optional heading text; when provided it is rendered and used as the section's accessible label (`aria-labelledby="process-title"`).
 * @param steps - Array of steps to render. Each step should include `number`, `title`, and `icon`.
 * @returns A React element representing the process/steps section.
 */
export default function SectionProcess({ title, steps }: SectionProcessProps) {
  return (
    <section
      data-section='process'
      aria-labelledby={title ? 'process-title' : undefined}
    >
      <Wrapper>
        {title && <SectionHeader title={title} />}

        <div className='flex flex-col items-stretch gap-4 md:flex-row md:items-center'>
          {steps.map((step, index) => (
            <div key={index} className='flex flex-1 items-center'>
              <Card interactive={false} className='flex flex-1 items-center'>
                <div
                  className={cn(
                    'h-12 w-12 shrink-0 rounded-lg bg-primary text-white',
                    flexCenterClasses,
                  )}
                >
                  {step.icon}
                </div>
                <div>
                  <span className='text-xs text-light uppercase'>
                    Krok {step.number}
                  </span>
                  <h3 className='h6 font-semibold'>{step.title}</h3>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <RiArrowRightSLine
                  className='mx-2 hidden h-5 w-5 shrink-0 text-primary-light md:block'
                  aria-hidden='true'
                />
              )}
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
