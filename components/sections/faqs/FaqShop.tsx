import FaqPanels from '../../ui/FaqPanels';
import Wrapper from '../../ui/Wrapper';

const faqItems = [
  {
    question: 'Jak długo trwa stworzenie sklepu?',
    answer: 'Zazwyczaj od 10 do 20 dni roboczych - zależnie od złożoności projektu i tempa dostarczania materiałów.',
  },
  {
    question: 'Czy mogę samodzielnie dodawać produkty?',
    answer: 'Tak, panel administracyjny umożliwia łatwe zarządzanie produktami, kategoriami, zdjęciami i stanem magazynowym.',
  },
  {
    question: 'Jakie metody płatności mogę mieć w sklepie?',
    answer: 'Sklep może być zintegrowany z PayU, Przelewy24, Stripe, Blikiem lub klasycznym przelewem bankowym. Dobierzemy metody do Twojej grupy docelowej.',
  },
  {
    question: 'Czy mogę mieć integrację z kurierami?',
    answer: 'Tak, integrujemy sklepy z systemami wysyłek (np. InPost, DPD, DHL), generując etykiety i umożliwiając śledzenie przesyłek.',
  },
  {
    question: 'Czy sklep będzie widoczny w Google?',
    answer: 'Tak, dbamy o optymalizację SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Pomagamy w całym procesie pozycjonowania witryny',
  },
  {
    question: 'Czy sklep będzie zabezpieczony?',
    answer: 'Tak, wszystkie sklepy mają certyfikat SSL, zabezpieczenia przed spamem i nieautoryzowanym dostępem.',
  },
  {
    question: 'Czy mogę liczyć na wsparcie po uruchomieniu sklepu?',
    answer: 'Tak, zapewniamy gwarancję, opiekę techniczną i możliwość rozwoju sklepu.',
  },
  {
    question: 'Nie znam się na technologii - czy przeprowadzicie mnie przez cały proces?',
    answer: 'Oczywiście. Prowadzimy wszystko krok po kroku i jasno tłumaczymy każdy etap - nawet jeśli dopiero zaczynasz sprzedaż online.',
  },
];

export default function FaqStore() {
  return (
    <Wrapper>
      <FaqPanels subtitle="FAQ" title="Najczęstsze pytania" items={faqItems} />
    </Wrapper>
  );
}
