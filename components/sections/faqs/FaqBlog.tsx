import FaqPanels from "../../ui/FaqPanels";
import Wrapper from "../../ui/Wrapper";

const faqItems = [
  {
    question: 'Czy zajmujecie się również pisaniem artykułów?',
    answer: 'Tak, możemy stworzyć bloga technicznie i od razu zapewnić treści – pisane pod SEO, angażujące i dopasowane do Twojej branży oraz grupy docelowej.',
  },
  {
    question: 'Na jakim systemie powstaje blog?',
    answer: 'Najczęściej tworzymy blogi w WordPressie, dzięki czemu masz łatwy w obsłudze panel CMS i możliwość samodzielnego dodawania wpisów.',
  },
  {
    question: 'Czy mogę samodzielnie prowadzić bloga po wdrożeniu?',
    answer: 'Tak, po uruchomieniu bloga otrzymasz prostą instrukcję lub szkolenie – abyś mógł/mogła samodzielnie dodawać wpisy, zdjęcia i kategorie.',
  },
  {
    question: 'Czy blog będzie zoptymalizowany pod SEO?',
    answer: 'Tak, wdrażamy techniczne podstawy SEO (szybkość, responsywność, struktura nagłówków, meta tagi) i stosujemy najlepsze praktyki, by Twoje treści miały szansę dobrze pozycjonować się w Google.',
  },
  {
    question: 'Czy projektujecie wygląd bloga od zera?',
    answer: 'Tak, blog może być zaprojektowany indywidualnie – zgodnie z identyfikacją Twojej marki. Możemy też oprzeć go na nowoczesnym, dopracowanym szablonie.',
  },
  {
    question: 'Ile kosztuje stworzenie bloga?',
    answer: 'Cena zależy od wybranego systemu, liczby podstron i zakresu integracji. Prosty blog z CMS zaczyna się od 1500 zł. Możesz skorzystać z kalkulatora wyceny, by poznać koszt dopasowany do Twoich potrzeb.',
  },
  {
    question: 'Ile trwa stworzenie bloga?',
    answer: 'Zazwyczaj 5–10 dni roboczych. Jeśli blog jest częścią większego serwisu – czas może być dłuższy i zależy od całej struktury projektu.',
  },
  {
    question: 'Czy dodajecie pierwsze wpisy na start?',
    answer: 'Tak, możemy przygotować i dodać kilka startowych wpisów, aby blog wyglądał na aktywny i przyciągał ruch od pierwszego dnia.',
  },
  {
    question: 'Czy mogę zlecić stałe prowadzenie bloga?',
    answer: 'Tak, oferujemy abonamentowe prowadzenie bloga – pisanie i publikację 2–8 wpisów miesięcznie, z dbałością o SEO i spójność marki.',
  },
  {
    question: 'Czy mogę liczyć na pomoc w strategii treści?',
    answer: 'Tak, doradzamy, jak budować strukturę bloga, jakie tematy poruszać i jak łączyć treści z Twoją ofertą. Możemy też zaproponować kalendarz publikacji.',
  },
];

export default function FaqBlog() {
  return (
    <Wrapper className="mt-12 md:mt-16 lg:mt-24 px-4 md:px-6 lg:px-0">
      <h2 className="text-xl font-semibold mb-6">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
