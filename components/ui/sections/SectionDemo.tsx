import type { ReactNode } from 'react';
import SectionHeader from '../typography/SectionHeader';

type Variant = 'left' | 'right';

interface SectionDemoProps {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  demo: ReactNode;
  variant?: Variant;
  children?: ReactNode;
}

export default function SectionDemo({ id, title, subtitle, description, demo, variant = 'right', children }: SectionDemoProps) {
  return (
    <section id={id} className="w-full">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className={`flex w-full items-center justify-center lg:w-2/5 ${variant === 'left' ? 'lg:order-2' : ''}`}>
          <div className="w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4 md:p-6">{demo}</div>
        </div>

        <div className={`flex w-full lg:w-3/5 ${variant === 'left' ? 'lg:order-1' : ''}`}>
          <div className={`flex h-full flex-col justify-center ${variant === 'right' ? 'lg:pl-2' : 'lg:pr-2'}`}>
            <SectionHeader subtitle={subtitle} title={title} description={description} headingLevel="h3" headingClassName="h5" descriptionClassName="" />

            {children && <div className="text-balance">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
