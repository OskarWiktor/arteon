import Button from '../Button';
import Wrapper from '../Wrapper';
import { ReactNode } from 'react';

interface SectionInfoProps {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionInfo({ id, title, description, subtitle, btnOne, btnOneLink, btnTwo, btnTwoLink, children }: SectionInfoProps) {
  return (
    <section id={id} className="w-full" role="region">
      <Wrapper className="flex flex-col">
        {subtitle && <span className="text-xl tracking-widest text-[#868686] uppercase">{subtitle}</span>}
        <h2 className="mb-2 lg:mb-4">{title}</h2>
        {description && <p>{description}</p>}
        {children}

        {btnOne && (
          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 lg:mt-10">
            {btnOne && (
              <Button arrow variant="accent" link={btnOneLink}>
                {btnOne}
              </Button>
            )}
            {btnTwo && (
              <Button arrow link={btnTwoLink}>
                {btnTwo}
              </Button>
            )}
          </div>
        )}
      </Wrapper>
    </section>
  );
}
