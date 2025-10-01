import FaqPanels from '../../ui/FaqPanels';

const faqItems = [
  {
    question: 'Ile trwa stworzenie bloga?',
    answer: 'Standardowo projekt zajmuje od 7 do 20 dni roboczych, w zależności od złożoności i dostępnych materiałów',
  },
  {
    question: 'Czy mogę samodzielnie prowadzić bloga po wdrożeniu?',
    answer: 'Tak, po uruchomieniu bloga otrzymasz szkolenie PDF - abyś mógł/mogła samodzielnie dodawać wpisy, zdjęcia i kategorie',
  },
  {
    question: 'Czy blog będzie zoptymalizowany pod SEO?',
    answer:
      'Tak, wdrażamy techniczne podstawy SEO (szybkość, Responsywność, struktura nagłówków, meta tagi) i stosujemy najlepsze praktyki, by Twoje treści miały szansę dobrze pozycjonować się w Google',
  },
  {
    question: 'Czy projektujecie wygląd bloga od zera?',
    answer: 'Tak, blog może być zaprojektowany indywidualnie - zgodnie z identyfikacją Twojej marki. Możemy też oprzeć go na nowoczesnym, dopracowanym szablonie',
  },
  {
    question: 'Czy dodajecie pierwsze wpisy na start?',
    answer: 'Tak, możemy przygotować i dodać kilka startowych wpisów, aby blog wyglądał na aktywny i przyciągał ruch od pierwszego dnia',
  },
  {
    question: 'Czy mogę liczyć na pomoc w strategii treści?',
    answer: 'Tak, bezpłatnie pomagamy, w budowie struktury bloga, tak aby pojawił się wyżej w Google',
  },
];

export default function FaqBlog() {
  return <FaqPanels subtitle="FAQ" title="Najczęstsze pytania" items={faqItems} />;
}
