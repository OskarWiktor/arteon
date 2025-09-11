'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const PricingStepsItems = [
  {
    title: 'Do 5 000 zł',
    borderClassName: 'border-b-amber-500',
    description: <>Brak zaliczki - jedna faktura po zakończeniu i zaakceptowaniu strony</>,
  },
  {
    title: 'Do 10 000 zł',
    borderClassName: 'border-b-amber-500',
    description: (
      <>
        Zaliczka 10% po omówieniu szczegółów i zaakceptowaniu wyceny strony
        <br />
        <br /> Możliwość rozłożenia płatności na dwie faktury
      </>
    ),
  },
  {
    title: 'Powyżej 10 000 zł',
    borderClassName: 'border-b-amber-500',
    description: (
      <>
        Zaliczka 20% po omówieniu szczegółów i zaakceptowaniu wyceny strony
        <br />
        <br /> Możliwość rozłożenia płatności na kilka faktur
      </>
    ),
  },
];

export default function PricingSteps() {
  return (
    <SectionSteps
      items={PricingStepsItems}
      title="Płatności"
      subtitle="Zasady"
      description="Nasza forma płatności = Twoja gwarancja"
      disclaimer="Transparentny kontakt na każdym etapie pracy. Możliwość wrowadzania zmian i dostosowania projektu w trakcie realizacji"
    />
  );
}
