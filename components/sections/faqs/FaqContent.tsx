import FaqPanels from '../../ui/FaqPanels';
import Wrapper from '../../ui/Wrapper';

const faqItems = [
  {
    question: 'Jakie treści możecie dla mnie stworzyć?',
    answer:
      'Piszę treści na strony internetowe (strona główna, oferta, o firmie), artykuły blogowe, opisy produktów, treści SEO, posty na social media oraz scenariusze video. Tworzę też storytelling i teksty sprzedażowe.',
  },
  {
    question: 'Ile kosztuje stworzenie treści?',
    answer: 'Cena zależy od rodzaju tekstu, jego długości i celu. Prosty opis usługi to koszt od 100 zł, artykuł blogowy – od 150 zł, a pełna treść na stronę to średnio 600–1200 zł.',
  },
  {
    question: 'Czy mogę zamówić tylko pojedynczy tekst?',
    answer: 'Tak, możesz zamówić pojedynczy artykuł, opis lub tekst na konkretną podstronę. Nie musisz wykupywać całych pakietów.',
  },
  {
    question: 'Ile czasu trwa przygotowanie treści?',
    answer: 'Standardowo od 2 do 5 dni roboczych – zależnie od długości, złożoności i bieżącej dostępności. Większe projekty (np. cała strona) mogą zająć do 10–14 dni.',
  },
  {
    question: 'Czy teksty są unikalne i pisane ręcznie?',
    answer: 'Tak, każdy tekst tworzony jest indywidualnie, bez kopiowania z sieci. Treści są oryginalne, zgodne z Twoją branżą i potrzebami.',
  },
  {
    question: 'Czy mogę mieć wpływ na styl i język tekstu?',
    answer: 'Oczywiście. Na początku ustalamy ton komunikacji (formalny, swobodny, ekspercki itd.) i dostosowuję treści do Twojej marki oraz grupy docelowej.',
  },
  {
    question: 'Czy oferujecie też korektę i redakcję istniejących tekstów?',
    answer: 'Tak, mogę poprawić i przekształcić Twoje obecne teksty tak, aby były bardziej przekonujące, poprawne językowo i dopasowane do celów marketingowych.',
  },
  {
    question: 'Czy teksty są zoptymalizowane pod SEO?',
    answer: 'Tak, tworzę treści z uwzględnieniem fraz kluczowych, struktury nagłówków i zasad SEO copywritingu – tak, aby dobrze wypadały w Google.',
  },
  {
    question: 'Czy mogę otrzymać próbkę tekstu przed zleceniem całości?',
    answer: 'Tak, na życzenie przygotowuję krótką próbkę (np. fragment opisu lub wstęp artykułu), abyś zobaczył styl i jakość.',
  },
  {
    question: 'Czy oferujecie treści w języku angielskim?',
    answer: 'Tak, mogę przygotować treści po angielsku (lub przetłumaczyć i dostosować już istniejące) z zachowaniem naturalnego języka i stylu marketingowego.',
  },
  {
    question: 'Czy mogę zgłosić poprawki do gotowego tekstu?',
    answer: 'Tak, masz prawo do jednej lub dwóch rund poprawek (w zależności od zakresu). Celem jest tekst, z którego będziesz w pełni zadowolony.',
  },
  {
    question: 'Czy zajmujecie się treściami na social media?',
    answer: 'Tak, mogę stworzyć opisy postów, hasła reklamowe, bio na profil, scenariusze rolek czy treści do kampanii marketingowych.',
  },
  {
    question: 'Czy mogę zlecić regularne pisanie tekstów (np. co miesiąc)?',
    answer: 'Tak, możliwa jest stała współpraca abonamentowa – np. comiesięczne artykuły, newslettery lub pakiety treści. Dzięki temu masz zawsze świeży content bez konieczności zamawiania od nowa.',
  },
];

export default function FaqContent() {
  return (
    <Wrapper className="mt-12 px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0">
      <h2 className="mb-6 text-xl font-semibold">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
