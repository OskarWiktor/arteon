import FaqPanels from '../../ui/FaqPanels';
import Wrapper from '../../ui/Wrapper';

const faqItems = [
  {
    question: 'Czym różni się SEO od kampanii Google Ads?',
    answer:
      'SEO (pozycjonowanie) to działania długofalowe zwiększające widoczność strony w wynikach organicznych Google. Google Ads to płatne reklamy, które przynoszą efekty natychmiastowo, ale działają tylko, gdy kampania jest aktywna.',
  },
  {
    question: 'Ile kosztuje kampania Google lub Facebook Ads?',
    answer: 'Budżet reklamowy ustalamy indywidualnie. Kampanie zaczynają się od 600–1000 zł miesięcznie + budżet na kliknięcia (np. 500–2000 zł w Google/Facebook). Wszystko zależy od celów i branży.',
  },
  {
    question: 'Czy mogę zlecić jednorazową kampanię?',
    answer: 'Tak, możesz zlecić kampanię jednorazową (np. promującą konkretny produkt, usługę lub wydarzenie). Oferujemy też stałą obsługę marketingową.',
  },
  {
    question: 'Jak długo trwa pozycjonowanie strony?',
    answer: 'SEO to proces. Pierwsze efekty mogą pojawić się po 1–3 miesiącach, ale stabilne wzrosty zwykle buduje się przez 6–12 miesięcy.',
  },
  {
    question: 'Czy zajmujecie się prowadzeniem kampanii w social media?',
    answer: 'Tak, prowadzimy kampanie reklamowe na Facebooku i Instagramie – od przygotowania grafik i tekstów po konfigurację, optymalizację i raportowanie.',
  },
  {
    question: 'Czy przygotowujecie treści i grafiki do reklam?',
    answer: 'Tak, możemy przygotować zarówno teksty reklamowe, jak i materiały graficzne, zdjęcia stockowe lub krótkie animacje – w zależności od formatu kampanii.',
  },
  {
    question: 'Czy mogę kontrolować budżet reklamowy?',
    answer: 'Oczywiście. Budżet jest transparentny i ustalany z góry – płacisz bezpośrednio do Google/Facebook, a my zarządzamy kampanią.',
  },
  {
    question: 'Czy dostanę raport z wynikami kampanii?',
    answer: 'Tak, po zakończeniu kampanii (lub co miesiąc w przypadku stałej współpracy) otrzymujesz jasny raport: zasięgi, kliknięcia, koszt pozyskania, konwersje.',
  },
  {
    question: 'Czy mogę połączyć SEO i kampanie płatne?',
    answer: 'Tak, to najlepsze rozwiązanie. SEO buduje długofalową widoczność, a płatne kampanie zapewniają szybki ruch i testowanie ofert.',
  },
  {
    question: 'Czy pomagacie w ustawieniu Pixela Facebooka i konwersji Google?',
    answer: 'Tak, konfigurujemy Pixel Facebooka, Google Analytics i tagi konwersji, aby dokładnie śledzić wyniki kampanii.',
  },
  {
    question: 'Czy prowadzicie marketing dla sklepów internetowych?',
    answer: 'Tak, mamy doświadczenie w promocji e-commerce – prowadzimy kampanie produktowe (Google Merchant), remarketing, kampanie sezonowe i sprzedażowe.',
  },
  {
    question: 'Czy mogę samodzielnie zarządzać kampanią po wdrożeniu?',
    answer: 'Tak, możemy Cię przeszkolić lub przygotować kampanię do samodzielnego prowadzenia. Współpraca może być jednorazowa lub cykliczna.',
  },
  {
    question: 'Czy mogę liczyć na doradztwo marketingowe? Nie wiem, od czego zacząć.',
    answer: 'Tak, oferujemy bezpłatną konsultację startową – pomożemy określić cele, kanały i optymalną strategię, dopasowaną do Twojej branży i budżetu.',
  },
  {
    question: 'Czy wystawiacie fakturę za usługi marketingowe?',
    answer: 'Tak, każda kampania rozliczana jest fakturą VAT lub rachunkiem – w zależności od Twoich preferencji.',
  },
];

export default function FaqMarketing() {
  return (
    <Wrapper className="mt-12 px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0">
      <h2 className="mb-6 text-xl font-semibold">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
