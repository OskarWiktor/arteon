import FaqPanels from "../../ui/FaqPanels";
import Wrapper from "../../ui/Wrapper";

const faqItems = [
  {
    question: 'Ile kosztuje stworzenie strony internetowej?',
    answer: 'Cena zależy od zakresu projektu. Proste strony typu one-page zaczynają się od 1200 zł, a rozbudowane serwisy mogą kosztować kilka tysięcy. Skorzystaj z kalkulatora na stronie głównej, aby otrzymać orientacyjną wycenę.',
  },
  {
    question: 'Jak długo trwa stworzenie strony?',
    answer: 'Standardowo projekt zajmuje od 7 do 21 dni roboczych, w zależności od złożoności i dostępnych materiałów.',
  },
  {
    question: 'Czy mogę mieć wpływ na wygląd strony?',
    answer: 'Tak. Przed rozpoczęciem współpracy wspólnie ustalamy estetykę i funkcje strony. Otrzymujesz projekt graficzny do zatwierdzenia przed wdrożeniem.',
  },
  {
    question: 'Czy zajmujecie się również tekstami na stronę?',
    answer: 'Tak, oferujemy usługę copywritingu – możemy stworzyć wszystkie treści od podstaw lub dopracować Twoje materiały.',
  },
  {
    question: 'Czy mogę później samodzielnie edytować stronę?',
    answer: 'Tak, jeśli wybierzesz wersję z panelem CMS (np. WordPress), możesz później samodzielnie edytować treści. Możliwe są też wersje bez panelu, jeśli zależy Ci na szybkości działania.',
  },
  {
    question: 'Czy pomagacie w zakupie domeny i hostingu?',
    answer: 'Tak, możemy zająć się wszystkim za Ciebie – od doradztwa przy wyborze domeny, przez zakup, aż po konfigurację hostingu i skrzynek e-mail.',
  },
  {
    question: 'Czy strona będzie widoczna w Google?',
    answer: 'Tak, dbamy o podstawową optymalizację SEO (szybkość, mobilność, struktura nagłówków, meta tagi). Na życzenie oferujemy też pełne pozycjonowanie.',
  },
  {
    question: 'Jak wygląda płatność za stronę?',
    answer: 'Standardowo pobieramy 40–50% zaliczki po akceptacji warunków, a resztę po zakończeniu projektu i jego zatwierdzeniu.',
  },
  {
    question: 'Czy mogę zgłosić poprawki po wdrożeniu strony?',
    answer: 'Tak, masz zapewniony okres gwarancji i wsparcia technicznego. Poprawki związane z błędami lub działaniem strony są darmowe.',
  },
  {
    question: 'Czy można zlecić aktualizacje strony w przyszłości?',
    answer: 'Tak, oferujemy zarówno jednorazowe poprawki, jak i długofalową opiekę nad stroną w formie abonamentu.',
  },
  {
    question: 'Nie znam się na technologii – czy mogę liczyć na pomoc?',
    answer: 'Tak, prowadzimy cały proces w przystępny sposób i wyjaśniamy wszystkie elementy bez zbędnego żargonu.',
  },
];

export default function FaqWebsite() {
  return (
    <Wrapper className="mt-12 md:mt-16 lg:mt-24 px-4 md:px-6 lg:px-0">
      <h2 className="text-xl font-semibold mb-6">Najczęstsze pytania</h2>
      <FaqPanels items={faqItems} />
    </Wrapper>
  );
}
