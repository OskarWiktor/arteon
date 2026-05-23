import { RiCheckLine } from 'react-icons/ri';
import Wrapper from '../../atoms/Wrapper';

interface SectionFeatureListProps {
  title?: string;
  features: string[];
}

export default function SectionFeatureList({ title, features }: SectionFeatureListProps) {
  return (
    <section data-section='feature-list' aria-labelledby={title ? 'feature-list-title' : undefined}>
      <Wrapper>
        <div className='mx-auto max-w-2xl rounded-lg border border-black/10 bg-white p-8'>
          {title && (
            <h2 id='feature-list-title' className='h3 mb-4 text-center md:mb-6 lg:mb-8'>
              {title}
            </h2>
          )}

          <ul className='grid gap-3 md:grid-cols-2'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center gap-3'>
                <div className='bg-success-bg flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full'>
                  <RiCheckLine className='text-success-icon h-4 w-4' />
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
