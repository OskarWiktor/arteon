import SectionSteps from '../../ui/sections/SectionSteps';

const FeesStepsItems = [
  {
    title: 'Do 5 000 zł',
    description: (
      <span>
        Nie pobieramy zaliczki. Po zakończeniu i zaakceptowaniu projektu wystawiamy <strong>jedną fakturę</strong>.
      </span>
    ),
  },
  {
    title: 'Do 10 000 zł',
    description: (
      <span>
        Zaliczka wynosi <strong>10%</strong> i jest płatna po omówieniu szczegółów oraz zaakceptowaniu wyceny. Płatność można rozłożyć na <strong>dwie faktury</strong>.
      </span>
    ),
  },
  {
    title: 'Powyżej 10 000 zł',
    description: (
      <span>
        Zaliczka wynosi <strong>20%</strong> i jest płatna po omówieniu szczegółów oraz zaakceptowaniu wyceny. Płatność można rozłożyć na <strong>kilka faktur</strong>.
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
        . Pełna <strong>własność plików oraz wszystkie dostępy</strong> przekazywane są po zakończeniu projektu
      </span>
    ),
  },
];

export default function FeesSteps() {
  return (
    <SectionSteps
      items={FeesStepsItems}
      title="Płatności i bezpieczeństwo"
      subtitle="Zasady współpracy"
      description="Stosujemy przejrzyste zasady płatności, dzięki którym zawsze wiesz, czego się spodziewać. System rozliczeń jest skonstruowany tak, aby minimalizować ryzyko po Twojej stronie i jasno określać, jak prowadzimy projekty o różnych budżetach."
    />
  );
}
