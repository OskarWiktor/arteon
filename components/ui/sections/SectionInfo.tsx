import Wrapper from '../Wrapper';
import { ReactNode } from 'react';

interface SectionInfoProps {
  id?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function SectionInfo({ id, title, description, children }: SectionInfoProps) {
  return (
    <section id={id} className="mt-12 w-full scroll-mt-24 md:mt-16 lg:mt-24" role="region">
      <Wrapper className="flex flex-col px-4 md:px-6 lg:px-0">
        <h2>{title}</h2>
        {description && <p className="mt-2 md:mt-4">{description}</p>}
        {children}
      </Wrapper>
    </section>
  );
}
