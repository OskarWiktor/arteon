import FaqPanels from '../../ui/FaqPanels';
import Wrapper from '../../ui/Wrapper';

const faqItems = [
  {
    question: 'Jak długo trwa stworzenie strony?',
    answer: 'Standardowo projekt zajmuje od 5 do 15 dni roboczych, w zależności od złożoności i dostępnych materiałów',
  },
  {
    question: 'Czy zajmujecie się również tworzeniem treści na stronę?',
    answer: 'Tak, oferujemy usługę copywritingu oraz designu - możemy stworzyć od podstaw treści oraz grafiki lub dopracować Twoje materiały',
  },
  {
    question: 'Czy mogę później samodzielnie edytować treść strony?',
    answer: 'Tak, gwarantujemy darmowe szkolenie z edycji, w formie PDF po zakończeniu projektu',
  },
  {
    question: 'Czy strona będzie widoczna w Google?',
    answer: 'Tak, dbamy o optymalizację SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Pomagamy w całym procesie pozycjonowania witryny',
  },
  {
    question: 'Czy mogę zgłosić poprawki po zrobieniu strony?',
    answer: 'Tak, zapewniamy gwarancję, opiekę techniczną i możliwość rozwoju strony.',
  },
  {
    question: 'Nie znam się na technologii - czy mogę liczyć na pomoc?',
    answer: 'Tak, prowadzimy cały proces w przystępny sposób i wyjaśniamy wszystkie elementy bez zbędnego żargonu',
  },
];

export default function FaqWebsite() {
  return (
    <Wrapper>
      <FaqPanels subtitle="FAQ" title="Najczęstsze pytania" items={faqItems} />
    </Wrapper>
  );
}
