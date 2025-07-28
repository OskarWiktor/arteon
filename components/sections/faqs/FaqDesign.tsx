import FaqPanels from '../../ui/FaqPanels';
import Wrapper from '../../ui/Wrapper';

const faqItems = [
  {
    question: 'Jakie projekty graficzne mogę u Was zamówić?',
    answer:
      'Oferujemy projektowanie logo, identyfikacji wizualnej (kolory, typografia, key visual), grafik do social mediów, prezentacji, ulotek, wizytówek, banerów oraz layoutów stron internetowych.',
  },
  {
    question: 'Ile kosztuje projekt logo?',
    answer: 'Podstawowy projekt logo zaczyna się od 600 zł. W zależności od zakresu (np. pełny branding, księga znaku) cena może wzrosnąć. Wycena jest zawsze indywidualna.',
  },
  {
    question: 'Czy mogę zamówić cały pakiet identyfikacji wizualnej?',
    answer: 'Tak, oferujemy kompleksowe pakiety zawierające logo, kolorystykę, typografię, wzory grafik i podstawowe zastosowania (social media, druki, www).',
  },
  {
    question: 'Jak długo trwa realizacja projektu graficznego?',
    answer: 'Prosty projekt graficzny (np. wizytówka, post) trwa 1–3 dni robocze. Logo i identyfikacja wizualna – od 5 do 10 dni roboczych. Konkretne terminy ustalamy indywidualnie.',
  },
  {
    question: 'Czy mogę zgłosić poprawki do projektu?',
    answer: 'Tak, w każdej usłudze graficznej przewidziane są 1–2 rundy poprawek. Dążymy do tego, by efekt końcowy w 100% spełniał Twoje oczekiwania.',
  },
  {
    question: 'W jakich formatach otrzymam pliki?',
    answer: 'Dostarczamy pliki wektorowe (SVG, PDF), rastrowe (JPG, PNG) oraz wersje do druku i internetu. W przypadku logo – również wersje mono, z tłem i bez.',
  },
  {
    question: 'Czy projektujecie grafiki do mediów społecznościowych?',
    answer: 'Tak, tworzymy grafiki na Instagram, Facebook, LinkedIn, YouTube i inne platformy – posty, relacje, okładki, grafiki reklamowe.',
  },
  {
    question: 'Czy mogę zlecić tylko pojedynczą grafikę?',
    answer: 'Oczywiście. Możesz zlecić jedną grafikę, jak i cały pakiet (np. 10 grafik miesięcznie). Wszystko zależy od Twoich potrzeb.',
  },
  {
    question: 'Czy projektujecie materiały do druku?',
    answer: 'Tak, projektujemy ulotki, plakaty, wizytówki, katalogi i inne materiały drukowane – w odpowiednich formatach i z marginesami technicznymi.',
  },
  {
    question: 'Czy mogę liczyć na pomoc w wyborze stylu graficznego?',
    answer: 'Tak, wspólnie ustalamy kierunek estetyczny projektu. Jeśli nie masz konkretnej wizji, zaproponujemy spójne i nowoczesne rozwiązania pasujące do Twojej marki.',
  },
  {
    question: 'Czy projektujecie layouty stron internetowych?',
    answer: 'Tak, tworzymy wizualne layouty stron (UI design) w oparciu o brief, strukturę strony i potrzeby użytkownika. Projekt może być przekazany do wdrożenia przez dewelopera.',
  },
  {
    question: 'Czy mogę otrzymać pliki źródłowe (np. .psd, .ai)?',
    answer: 'Tak, pliki źródłowe są dostępne na życzenie – szczególnie przy logo i projektach, które będą dalej edytowane.',
  },
  {
    question: 'Czy mogę zlecić stałą współpracę graficzną?',
    answer: 'Tak, oferujemy pakiety miesięczne lub długofalową obsługę graficzną marki – idealne rozwiązanie, jeśli potrzebujesz regularnych materiałów.',
  },
];

export default function FaqDesign() {
  return (
    <Wrapper className="mt-12 px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0">
      <h2 className="mb-6 text-xl font-semibold">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
