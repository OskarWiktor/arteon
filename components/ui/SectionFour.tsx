import { ReactNode } from 'react';
import Wrapper from './Wrapper';

interface SectionFourProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  sectionClassName?: string;
}

export default function SectionFour<T>({ items, renderItem, className = '', sectionClassName = '' }: SectionFourProps<T>) {
  return (
    <section className={`mt-24 md:px-4 ${sectionClassName}`}>
      <Wrapper className={`flex flex-wrap ${className}`}>
        {items.map((item, index) => (
          <div key={index} className="flex w-full flex-col items-center px-4 py-2 md:w-1/2 lg:w-1/4">
            {renderItem(item, index)}
          </div>
        ))}
      </Wrapper>
    </section>
  );
}
