import FaqPanels from '../../ui/FaqPanels';

const faqItems = [
  {
    question: 'Czy mogę zamówić cały pakiet identyfikacji wizualnej?',
    answer: 'Tak, oferujemy kompleksowe pakiety zawierające logo, kolorystykę, typografię, wzory grafik i podstawowe zastosowania (social media, druki, www)',
  },
  {
    question: 'Jak długo trwa realizacja projektu graficznego?',
    answer: 'Prosty projekt graficzny (np. wizytówka, post) realizujemy do 5 dni roboczych. Logo i identyfikacja wizualna - do 15 dni roboczych. Konkretne terminy ustalamy indywidualnie',
  },
  {
    question: 'Czy mogę zgłosić poprawki do projektu?',
    answer: 'Tak, w każdej usłudze graficznej przewidziane są 1-2 rundy poprawek. Dążymy do tego, by efekt końcowy w 100% spełniał Twoje oczekiwania',
  },
  {
    question: 'W jakich formatach otrzymam pliki?',
    answer: 'Dostarczamy pliki wektorowe, rastrowe oraz pliki źródłowe',
  },
  {
    question: 'Czy mogę liczyć na pomoc w wyborze stylu graficznego?',
    answer: 'Tak, wspólnie ustalamy kierunek estetyczny projektu. Jeśli nie masz konkretnej wizji, zaproponujemy spójne i nowoczesne rozwiązania pasujące do Twojej marki',
  },
  {
    question: 'Czy mogę zlecić stałą współpracę graficzną?',
    answer: 'Tak, oferujemy pakiety miesięczne lub długofalową obsługę graficzną marki - idealne rozwiązanie, jeśli potrzebujesz regularnych materiałów',
  },
];

export default function FaqDesign() {
  return <FaqPanels subtitle="FAQ" title="Najczęstsze pytania" items={faqItems} />;
}
