import { RiCheckLine } from 'react-icons/ri';
import Wrapper from '../../atoms/Wrapper';
import SectionHeader from '@/components/molecules/SectionHeader';
import {
  flexCenterClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

interface SectionFeatureListProps {
  title?: string;
  features: string[];
}

/**
 * Render a titled checklist of features inside a styled, bordered container.
 *
 * The section includes an optional centered header when `title` is provided and sets `aria-labelledby`
 * to `feature-list-title` in that case. Each entry in `features` is displayed as a list item with a check icon.
 *
 * @param title - Optional heading text; when present it is rendered above the feature list and used for `aria-labelledby`.
 * @param features - Array of feature strings to display as individual checklist items.
 * @returns The rendered section element containing the feature checklist.
 */
export default function SectionFeatureList({
  title,
  features,
}: SectionFeatureListProps) {
  return (
    <section
      data-section='feature-list'
      aria-labelledby={title ? 'feature-list-title' : undefined}
    >
      <Wrapper>
        <div className='mx-auto max-w-2xl rounded-lg border border-neutral-200 bg-white p-8'>
          {title && (
            <SectionHeader title={title} titleClassName='text-center' />
          )}

          <ul className='grid gap-3 md:grid-cols-2'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center gap-3'>
                <div
                  className={cn(
                    'shrink-0 rounded-lg bg-success-bg',
                    flexCenterClasses,
                    normalIconSizeClasses,
                  )}
                >
                  <RiCheckLine
                    className={cn('text-success-icon', smallIconSizeClasses)}
                  />
                </div>
                <span className='text-sm'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
}
