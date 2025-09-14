import FaqPanels from '../../ui/FaqPanels';
import Wrapper from '../../ui/Wrapper';

const faqItems = [
  {
    question: 'Czy mogę zlecić jednorazową kampanię?',
    answer: 'Tak, możesz zlecić kampanię jednorazową (np. promującą konkretny produkt, usługę lub wydarzenie). Oferujemy też stałą obsługę marketingową',
  },
  {
    question: 'Jak długo trwa pozycjonowanie strony?',
    answer: 'SEO to proces. Pierwsze efekty mogą pojawić się po 1-3 miesiącach, ale stabilne wzrosty zwykle buduje się przez 6-12 miesięcy',
  },
  {
    question: 'Czy zajmujecie się prowadzeniem kampanii w social media?',
    answer: 'Tak, prowadzimy kampanie reklamowe na Facebooku i Instagramie - od przygotowania grafik i tekstów po konfigurację, optymalizację i raportowanie',
  },
  {
    question: 'Czy dostanę raport z wynikami kampanii?',
    answer: 'Tak, po zakończeniu kampanii (lub co miesiąc w przypadku stałej współpracy) otrzymujesz jasny raport: zasięgi, kliknięcia, koszt pozyskania, konwersje',
  },
  {
    question: 'Czy mogę połączyć SEO i kampanie płatne?',
    answer: 'Tak, to najlepsze rozwiązanie. SEO buduje długofalową widoczność, a płatne kampanie zapewniają szybki ruch',
  },
  {
    question: 'Czy prowadzicie marketing dla sklepów internetowych?',
    answer: 'Tak, mamy doświadczenie w promocji e-commerce - prowadzimy kampanie produktowe (Google Merchant), remarketing, kampanie sezonowe i sprzedażowe',
  },
  {
    question: 'Czy mogę liczyć na pomoc? Nie wiem, od czego zacząć.',
    answer: 'Tak, oferujemy bezpłatną konsultację startową - pomożemy określić cele, kanały i optymalną strategię, dopasowaną do Twojej branży i budżetu',
  },
];

export default function FaqMarketing() {
  return (
    <Wrapper>
      <FaqPanels subtitle="FAQ" title="Najczęstsze pytania" items={faqItems} />
    </Wrapper>
  );
}
