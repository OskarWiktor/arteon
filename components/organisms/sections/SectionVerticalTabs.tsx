import { useState, type ReactNode } from 'react';
import Wrapper from '../../atoms/Wrapper';
import { cn } from '@/lib/utils';
import { flexCenterClasses } from '@/lib/ui-classes';

interface VerticalTab {
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

interface SectionVerticalTabsProps {
  title?: string;
  tabs: VerticalTab[];
}

export default function SectionVerticalTabs({ title, tabs }: SectionVerticalTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section data-section='vertical-tabs' aria-labelledby={title ? 'vtabs-title' : undefined}>
      <Wrapper>
        {title && (
          <h3 id='vtabs-title' className='h5 mb-4 lg:mb-6'>
            {title}
          </h3>
        )}

        <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
          <nav
            className='grid grid-cols-2 gap-2 md:flex md:w-48 md:flex-shrink-0 md:flex-col'
            role='tablist'
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                type='button'
                role='tab'
                aria-selected={activeTab === index}
                aria-controls={`vtabpanel-${index}`}
                id={`vtab-${index}`}
                onClick={() => setActiveTab(index)}
                className={cn(
                  'gap-2 rounded-md px-3 py-2.5 text-center text-sm font-medium transition md:justify-start md:text-left',
                  flexCenterClasses,
                  {
                    'bg-primary text-white': activeTab === index,
                    'bg-primary-light text-primary hover:bg-primary-light': activeTab !== index,
                  },
                )}
              >
                {tab.icon}
                <span className='line-clamp-1'>{tab.label}</span>
              </button>
            ))}
          </nav>

          <div
            id={`vtabpanel-${activeTab}`}
            role='tabpanel'
            aria-labelledby={`vtab-${activeTab}`}
            className='flex-1 rounded-lg border border-black/10 bg-white p-6'
          >
            {tabs[activeTab].content}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
