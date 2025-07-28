import FaqPanels from "../../ui/FaqPanels";
import Wrapper from "../../ui/Wrapper";

const faqItems = [
  {
    question: 'Ile kosztuje stworzenie sklepu internetowego?',
    answer: 'Koszt sklepu zależy od liczby funkcji, produktów i integracji. Proste sklepy zaczynają się od 2500 zł. Skorzystaj z kalkulatora, aby uzyskać wstępną wycenę.',
  },
  {
    question: 'Jak długo trwa stworzenie sklepu?',
    answer: 'Zazwyczaj od 14 do 30 dni roboczych – zależnie od złożoności projektu i tempa dostarczania materiałów.',
  },
  {
    question: 'Na jakim systemie budujecie sklepy?',
    answer: 'Najczęściej korzystamy z WordPress + WooCommerce lub rozwiązań dedykowanych. Wybór zależy od Twoich potrzeb i budżetu.',
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
    question: 'Czy pomagacie z regulaminem, RODO i polityką prywatności?',
    answer: 'Tak, zapewniamy szablony zgodne z aktualnymi przepisami lub możemy współpracować z prawnikiem, jeśli potrzebujesz indywidualnego dokumentu.',
  },
  {
    question: 'Czy sklep będzie widoczny w Google?',
    answer: 'Tak, dbamy o techniczne SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Możesz też skorzystać z naszej oferty pozycjonowania.',
  },
  {
    question: 'Czy pomagacie w dodaniu pierwszych produktów?',
    answer: 'Tak, możemy dodać startową ofertę (np. 10–20 produktów) i przeszkolić Cię, jak dodawać kolejne samodzielnie.',
  },
  {
    question: 'Czy sklep będzie zabezpieczony?',
    answer: 'Tak, wszystkie sklepy mają certyfikat SSL, zabezpieczenia przed spamem i nieautoryzowanym dostępem.',
  },
  {
    question: 'Jak wygląda płatność za sklep?',
    answer: 'Standardowo 40–50% zaliczki przy rozpoczęciu i reszta po zakończeniu. Przy większych projektach możliwe są rozliczenia etapowe.',
  },
  {
    question: 'Czy mogę liczyć na wsparcie po uruchomieniu sklepu?',
    answer: 'Tak, zapewniamy gwarancję, opiekę techniczną i możliwość rozwoju sklepu. Możesz też wykupić miesięczny abonament na bieżące wsparcie.',
  },
  {
    question: 'Czy wykonujecie sklepy w językach obcych?',
    answer: 'Tak, możemy przygotować wersje językowe sklepu (np. angielski, niemiecki), z odpowiednim tłumaczeniem i przełącznikiem języków.',
  },
  {
    question: 'Nie znam się na technologii – czy przeprowadzicie mnie przez cały proces?',
    answer: 'Oczywiście. Prowadzimy wszystko krok po kroku i jasno tłumaczymy każdy etap – nawet jeśli dopiero zaczynasz sprzedaż online.',
  },
];

export default function FaqStore() {
  return (
    <Wrapper className="mt-12 md:mt-16 lg:mt-24 px-4 md:px-6 lg:px-0">
      <h2 className="text-xl font-semibold mb-6">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
