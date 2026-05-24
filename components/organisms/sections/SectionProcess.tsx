import type { ReactNode } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import Wrapper from '../../atoms/Wrapper';
import SectionHeader from '@/components/molecules/SectionHeader';

interface ProcessStep {
  number: number;
  title: string;
  icon: ReactNode;
}

interface SectionProcessProps {
  title?: string;
  steps: ProcessStep[];
}

export default function SectionProcess({ title, steps }: SectionProcessProps) {
  return (
    <section data-section='process' aria-labelledby={title ? 'process-title' : undefined}>
      <Wrapper>
        {title && <SectionHeader title={title} />}

        <div className='flex flex-col items-stretch gap-4 md:flex-row md:items-center'>
          {steps.map((step, index) => (
            <div key={index} className='flex flex-1 items-center'>
              <div className='flex flex-1 items-center gap-3 rounded-lg bg-white p-4 shadow-sm'>
                <div className='bg-primary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-white'>
                  {step.icon}
                </div>
                <div>
                  <span className='text-light text-xs uppercase'>Krok {step.number}</span>
                  <h3 className='h6 font-semibold'>{step.title}</h3>
                </div>
              </div>
              {index < steps.length - 1 && (
                <RiArrowRightSLine
                  className='text-primary-light mx-2 hidden h-5 w-5 flex-shrink-0 md:block'
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
