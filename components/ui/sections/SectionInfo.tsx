import { useId, type ReactNode } from 'react';
import SectionHeader from '../typography/SectionHeader';
import ButtonGroup from '../buttons/ButtonGroup';

interface SectionInfoProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  id?: string;
}

export default function SectionInfo({ title, subtitle, description, btnOne, btnOneLink, btnTwo, btnTwoLink, children, id }: SectionInfoProps) {
  const autoId = useId();
  const headingId = id || `section-info-${autoId}`;

  return (
    <section id={id} aria-labelledby={headingId}>
      <SectionHeader subtitle={subtitle} title={title} description={description} headingLevel="h2" headingClassName=" scroll-mt-26" titleId={headingId} />

      {children}

      <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} ariaLabel="Działania sekcji" />
    </section>
  );
}
