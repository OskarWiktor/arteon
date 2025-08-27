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
    <section id={id} className="mt-18 w-full scroll-mt-24 md:mt-30 lg:mt-38" role="region">
      <Wrapper className="flex flex-col">
        <h2 className="mb-4">{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </Wrapper>
    </section>
  );
}
