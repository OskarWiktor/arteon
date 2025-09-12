'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const FeesStepsItems = [
  {
    title: 'Do 5 000 zł',
    description: (
      <span>
        <strong>Brak zaliczki</strong>, po zakończeniu i zaakceptowaniu projektu <strong>jedna faktura</strong>
      </span>
    ),
  },
  {
    title: 'Do 10 000 zł',
    description: (
      <span>
        <strong>Zaliczka 10%</strong>, po omówieniu szczegółów i zaakceptowaniu wyceny. Możliwość rozłożenia płatności na <strong>dwie faktury</strong>
      </span>
    ),
  },
  {
    title: 'Powyżej 10 000 zł',
    description: (
      <span>
        <strong>Zaliczka 20%</strong>, po omówieniu szczegółów i zaakceptowaniu wycen. Możliwość rozłożenia płatności na <strong>kilka faktur</strong>
      </span>
    ),
  },
];

export default function FeesSteps() {
  return (
    <SectionSteps
      items={FeesStepsItems}
      title="Płatności"
      subtitle="Zasady"
      description="Nasza forma płatności = Twoja gwarancja"
      disclaimer="Transparentny kontakt na każdym etapie pracy. Możliwość wrowadzania zmian i dostosowania projektu w trakcie realizacji"
    />
  );
}
