import FaqPanels from "../ui/FaqPanels";
import Wrapper from "../ui/Wrapper";

const faqItems = [
  {
    question: 'Jak długo trwa realizacja zamówienia?',
    answer: 'Standardowy czas realizacji to 3–5 dni roboczych.',
  },
  {
    question: 'Czy mogę zwrócić produkt?',
    answer: 'Tak, masz 14 dni na zwrot bez podania przyczyny.',
  },
  {
    question: 'Czy mogę zapłacić przy odbiorze?',
    answer: 'Obecnie oferujemy tylko płatność online.',
  },
];

export default function FaqShop() {
  return (
    <Wrapper className="mt-12 md:mt-16 lg:mt-24 px-4 md:px-6 lg:px-0">
      <h2 className="text-xl font-semibold mb-6">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
