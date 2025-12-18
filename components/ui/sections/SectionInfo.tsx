import type { ReactNode } from 'react';
import SectionHeader from '../typography/SectionHeader';
import ButtonGroup from '../buttons/ButtonGroup';

const ui = {
  pl: {
    sectionActions: 'Działania sekcji',
  },
} as const;

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
  const t = ui.pl;
  return (
    <div id={id}>
      <SectionHeader subtitle={subtitle} title={title} description={description} headingLevel="h2" headingClassName="reveal-animation mb-2 scroll-mt-26 lg:mb-4" />

      {children}

      <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} ariaLabel={t.sectionActions} />
    </div>
  );
}
