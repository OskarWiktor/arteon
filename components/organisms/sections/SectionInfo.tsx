import { useId, type ReactNode } from 'react';
import SectionHeader from '../../molecules/SectionHeader';
import ButtonGroup from '../../molecules/ButtonGroup';

interface SectionInfoProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
  id?: string;
}

export default function SectionInfo({
  title,
  subtitle,
  description,
  btnOne,
  btnOneHref,
  btnTwo,
  btnTwoHref,
  children,
  id,
}: SectionInfoProps) {
  const autoId = useId();
  const headingId = id || `section-info-${autoId}`;

  return (
    <section id={id} aria-labelledby={headingId}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        titleClassName=' scroll-mt-26'
        titleId={headingId}
      />

      {children}

      <ButtonGroup
        btnOne={btnOne}
        btnOneHref={btnOneHref}
        btnTwo={btnTwo}
        btnTwoHref={btnTwoHref}
        ariaLabel='Działania sekcji'
      />
    </section>
  );
}
