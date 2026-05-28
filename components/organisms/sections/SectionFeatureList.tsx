import { RiCheckLine } from 'react-icons/ri';
import Wrapper from '../../atoms/Wrapper';
import SectionHeader from '@/components/molecules/SectionHeader';
import { flexCenterClasses, normalIconSizeClasses, smallIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

interface SectionFeatureListProps {
  title?: string;
  features: string[];
}

export default function SectionFeatureList({ title, features }: SectionFeatureListProps) {
  return (
    <section data-section='feature-list' aria-labelledby={title ? 'feature-list-title' : undefined}>
      <Wrapper>
        <div className='mx-auto max-w-2xl rounded-lg border border-neutral-200 bg-white p-8'>
          {title && <SectionHeader title={title} titleClassName='text-center' />}

          <ul className='grid gap-3 md:grid-cols-2'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center gap-3'>
                <div
                  className={cn(
                    'bg-success-bg flex-shrink-0 rounded-lg',
                    flexCenterClasses,
                    normalIconSizeClasses,
                  )}
                >
                  <RiCheckLine className={cn('text-success-icon', smallIconSizeClasses)} />
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
