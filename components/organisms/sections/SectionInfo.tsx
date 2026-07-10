import { useId, type ReactNode } from 'react';
import ButtonGroup from '../../molecules/ButtonGroup';
import SectionHeader from '../../molecules/SectionHeader';

interface SectionInfoProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  descriptionClassName?: string;
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
  descriptionClassName,
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
        descriptionClassName={descriptionClassName}
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
