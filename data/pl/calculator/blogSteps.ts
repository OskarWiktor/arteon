import type { Step } from '@/types/calculator';

export const blogSteps: Step[] = [
  {
    title: 'Czy posiadasz projekt graficzny witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'ready', price: 0, tooltip: 'Pracujemy na dostarczonym przez Ciebie projekcie', icon: 'FiCheckCircle' },
      { label: 'Mam inspiracje / pomysł', value: 'idea', multiplier: 1.2, tooltip: 'Na bazie Twoich pomysłów i inspiracji tworzymy Twoją witrynę', icon: 'FiLightbulb' },
      { label: 'Nie', value: 'from-scratch', multiplier: 1.6, tooltip: 'Tworzymy projekt witryny dopasowany do Twojej marki i klientów', icon: 'FiCrop' },
    ],
  },
  {
    title: 'Czy posiadasz tekst dla swojej witryny?',
    required: true,
    options: [
      { label: 'Tak', value: 'own-copy', price: 0, tooltip: 'Dostarczasz tekst — my go dodajemy', icon: 'FiFileText' },
      { label: 'Potrzebuję korekty', value: 'copy-help', multiplier: 1.1, tooltip: 'Poprawiamy tekst dla lepszej widoczności i lepszego odbioru', icon: 'FiEdit2' },
      { label: 'Nie', value: 'copy-new', multiplier: 1.4, tooltip: 'Tworzymy tekst od zera, w oparciu o to czym się zajmujesz', icon: 'FiPenTool' },
    ],
  },
  {
    title: 'Ile stron z artykułami mamy przygotować?',
    required: true,
    options: [
      { label: '0', value: 'articles-0', price: 0, tooltip: 'Wprowadzasz je samodzielnie — my przygotujemy wygląd i funkcje', icon: 'FiMinusCircle' },
      { label: '1–3', value: 'articles-1-3', price: 120, icon: 'FiFilePlus' },
      { label: '4–10', value: 'articles-4-10', price: 500, icon: 'FiFilePlus' },
      { label: '11–30', value: 'articles-11-30', price: 1200, icon: 'FiFilePlus' },
      { label: '31–60', value: 'articles-31-60', price: 2400, icon: 'FiFilePlus' },
      { label: '60+', value: 'articles-60plus', price: 3600, icon: 'FiFilePlus' },
    ],
    input: {
      label: 'Dokładna liczba',
      key: 'custom-article-amount',
      unitPrice: 60,
    },
  },
  {
    title: 'Jakie funkcje chcesz mieć na blogu?',
    type: 'multi',
    options: [
      { label: 'Kategorie i tagi', value: 'categories-tags', price: 100, tooltip: 'Lepsza nawigacja i podział treści', icon: 'FiTag' },
      { label: 'Komentarze', value: 'comments', price: 150, tooltip: 'Czytelnicy mogą dyskutować pod wpisami', icon: 'FiMessageCircle' },
      { label: 'Profile autorów', value: 'authors', price: 100, tooltip: 'Pokaż zespół redakcyjny', icon: 'FiUser' },
      { label: 'Wyszukiwarka', value: 'search', price: 150, tooltip: 'Szybkie wyszukiwanie tematów i artykułów', icon: 'FiSearch' },
      { label: 'Płatne treści (paywall)', value: 'paywall', price: 500, tooltip: 'Zarabiaj na blogu dzięki subskrypcjom', icon: 'FiLock' },
      { label: 'Reklamy zewnętrzne', value: 'ads', price: 300, tooltip: 'Dodatkowy przychód z banerów reklamowych', icon: 'FiMonitor' },
      { label: 'Polecane wpisy', value: 'related-posts', price: 200, tooltip: 'Sugestie podobnych treści zwiększają czas na stronie', icon: 'FiThumbsUp' },
      { label: 'Newsletter', value: 'newsletter', price: 200, tooltip: 'Formularz zapisu do bazy mailingowej', icon: 'FiMail' },
    ],
  },
  {
    title: 'W jakim języku będzie blog?',
    required: true,
    options: [
      { label: 'Polski', value: 'lang-pl', price: 0, icon: 'FiFlag' },
      { label: 'Wielojęzyczna', value: 'lang-multi', multiplier: 1.4, icon: 'FiGlobe' },
      { label: 'Inny język (np. angielski)', value: 'lang-other', multiplier: 1.2, icon: 'FiMessageSquare' },
    ],
  },
  {
    title: 'Czy elementy mają być animowane?',
    type: 'multi',
    options: [
      { label: 'Tak', value: 'section-animations', multiplier: 1.2, icon: 'FiZap' },
      { label: 'Nie', value: 'microinteractions', price: 0, icon: 'FiMinus' },
    ],
  },
];
