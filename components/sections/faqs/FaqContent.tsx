import FaqPanels from '../../ui/FaqPanels';

const faqItems = [
  {
    question: 'Ile czasu trwa przygotowanie treści?',
    answer: 'Standardowo od 2 do 10 dni roboczych - zależnie od długości, złożoności i naszej bieżącej dostępności',
  },
  {
    question: 'Czy treści są unikalne i pisane ręcznie?',
    answer: 'Tak, wszystkie treści tworzymy indywidualnie',
  },
  {
    question: 'Czy możemy mieć wpływ na styl i język treści?',
    answer: 'Oczywiście. Na początku wspólnie ustalamy ton komunikacji i dostosowujemy treści do Twojej marki oraz grupy docelowej',
  },
  {
    question: 'Czy oferujecie też korektę i redakcję istniejących treści?',
    answer: 'Tak, poprawiamy i przekształcamy obecne treści tak, aby były bardziej przekonujące, poprawne językowo i dopasowane do celów marketingowych',
  },
  {
    question: 'Czy treści są zoptymalizowane pod SEO?',
    answer: 'Tak, tworzymy je z uwzględnieniem fraz kluczowych, struktury nagłówków i zasad SEO copywritingu - tak, aby dobrze wypadały w Google',
  },
  {
    question: 'Czy mogę zlecić regularne przygotowanie treści (np. co miesiąc)?',
    answer: 'Tak, możliwa jest stała współpraca abonamentowa - np. comiesięczne artykuły, newslettery lub pakiety treści',
  },
];

export default function FaqContent() {
  return <FaqPanels subtitle="FAQ" title="Najczęstsze pytania" items={faqItems} />;
}
