'use client';

import { useId, useState, type ReactNode } from 'react';
import { cn } from '@/lib/clsx';
import { flexCenterClasses } from '@/lib/uiClasses';
import SectionHeader from '../../molecules/SectionHeader';

interface Tab {
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

interface SectionTabsProps {
  title?: string;
  tabs: Tab[];
}

/**
 * Renders a tabbed section with an optional header and manages the active tab.
 *
 * Displays a segmented control of tabs (icon always visible, title visible on small screens and up) and the currently selected tab's content. Associates tab buttons and their panel with stable ARIA ids and updates the active tab when a tab button is clicked.
 *
 * @param title - Optional section title; when provided a header is rendered and used as the section's accessible label.
 * @param tabs - Array of tabs, each providing `title`, `icon`, and `content` for its tab button and panel.
 */
export default function SectionTabs({ title, tabs }: SectionTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const autoId = useId();
  const headingId = `tabs-title-${autoId}`;

  return (
    <section
      data-section='tabs'
      aria-labelledby={title ? headingId : undefined}
    >
      {title && <SectionHeader titleId={headingId} title={title} />}

      <div className='space-y-4'>
        <div className='flex gap-2 bg-primary-light p-1.5' role='tablist'>
          {tabs.map((tab, index) => (
            <button
              key={index}
              type='button'
              role='tab'
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${autoId}-${index}`}
              id={`tab-${autoId}-${index}`}
              onClick={() => setActiveTab(index)}
              className={cn(
                'flex-1 gap-2 px-4 py-3 text-sm font-medium transition',
                flexCenterClasses,
                {
                  'bg-white text-primary shadow-sm': activeTab === index,
                  'text-primary-mid hover:text-primary': activeTab !== index,
                },
              )}
            >
              {tab.icon}
              <span className='hidden sm:inline'>{tab.title}</span>
            </button>
          ))}
        </div>

        <div
          id={`tabpanel-${autoId}-${activeTab}`}
          role='tabpanel'
          aria-labelledby={`tab-${autoId}-${activeTab}`}
          className='border border-neutral-200 bg-white p-6'
        >
          {/* Keyed by activeTab so the entrance animation replays on each
              switch, giving a soft cross-fade between tab contents. */}
          <div
            key={activeTab}
            className='animate-[fade-in_0.25s_ease-out_both]'
          >
            <h3 className='h5 mb-3 flex items-center gap-2'>
              {tabs[activeTab].icon}
              {tabs[activeTab].title}
            </h3>
            <div className='text-light'>{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
