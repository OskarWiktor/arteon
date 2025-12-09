'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

const FeesStepsItems = [
  {
    title: 'Do 5,000 zł',
    description: (
      <span>
        <strong>Brak zaliczki</strong>, po zakończeniu i zaakceptowaniu projektu <strong>jedna faktura</strong>
      </span>
    ),
  },
  {
    title: 'Do 10,000 zł',
    description: (
      <span>
        <strong>Zaliczka 10%</strong>, po omówieniu szczegółów i zaakceptowaniu wyceny. Możliwość rozłożenia płatności na <strong>dwie faktury</strong>
      </span>
    ),
  },
  {
    title: 'Powyżej 10,000 zł',
    description: (
      <span>
        <strong>Zaliczka 20%</strong>, po omówieniu szczegółów i zaakceptowaniu wycen. Możliwość rozłożenia płatności na <strong>kilka faktur</strong>
      </span>
    ),
  },
  {
    title: 'Gwarancja i własność',
    description: (
      <span>
        <strong>2 miesiące gwarancji</strong> po publikacji zgodnie z{' '}
        <a href="https://www.arteonagency.pl/regulamin" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          regulaminem
        </a>
        . Pełna <strong>własność plików oraz dostępy</strong>
      </span>
    ),
  },
];

const ui = {
  pl: {
    title: 'Płatności i bezpieczeństwo',
    subtitle: 'Zasady współpracy',
    description: 'Posiadamy transparentne zasady płatności, dzięki którym, zawsze wiesz czego się spodziewać. Nasz system skonstruowany jest tak aby maksymalnie obniżyć Twój poziom ryzyka oraz abyś wiedział jak dokładnie prowadzimy projeky o różnych budżetach',
  },
} as const;

export default function FeesSteps() {
  const t = ui.pl;
  return (
    <SectionSteps
      items={FeesStepsItems}
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
    />
  );
}
