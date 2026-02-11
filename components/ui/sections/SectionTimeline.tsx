import type { ReactNode } from 'react';
import SectionHeader from '../typography/SectionHeader';
import ButtonGroup from '../buttons/ButtonGroup';

const ui = {
  pl: {
    sectionActions: 'Działania sekcji',
    stepLabel: 'Krok',
  },
} as const;

interface TimelineItem {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

interface SectionTimelineProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  items: TimelineItem[];
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionTimeline({ title, subtitle, description, items, btnOne, btnOneLink, btnTwo, btnTwoLink }: SectionTimelineProps) {
  const t = ui.pl;

  return (
    <section data-section="timeline" aria-labelledby={title ? 'timeline-title' : undefined}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        headingLevel="h2"
        titleId="timeline-title"
        headingClassName=""
        descriptionClassName=""
      />

      <div className="relative">
        <div className="absolute top-0 left-6 hidden h-full w-0.5 bg-primary-light md:left-1/2 md:block md:-translate-x-1/2" aria-hidden="true" />
        <div className="absolute top-0 left-6 block h-full w-0.5 bg-primary-light md:hidden" aria-hidden="true" />

        <ol className="space-y-4">
          {items.map((step, index) => (
            <li key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:absolute md:left-1/2 md:flex md:h-12 md:w-12 md:-translate-x-1/2 md:items-center md:justify-center md:rounded-full md:bg-primary md:text-white md:shadow-lg">
                {step.icon}
              </div>

              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="surface-card-soft ml-16 p-6 md:ml-0">
                  <div className="absolute top-6 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg md:hidden">{step.icon}</div>
                  <h3 className="h5 mb-2">{step.title}</h3>
                  <p className="text-light">{step.description}</p>
                </div>
              </div>

              <div className="hidden flex-1 md:block" />
            </li>
          ))}
        </ol>
      </div>

      <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} spacing="loose" ariaLabel={t.sectionActions} role="group" />
    </section>
  );
}
