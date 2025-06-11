import Wrapper from '../ui/wrapper';

const HowWeWorkItems = [
  { number: '1', title: 'Rozmowa i brief', description: 'Zaczynamy od rozmowy. Słuchamy, pytamy, odczytujemy intencję. Szukamy tego, co autentyczne w Twojej marce – i na tym budujemy.' },
  { number: '2', title: 'Projekt i koncepcja', description: 'Tworzymy wizję, która ma strukturę. Łączymy estetykę z funkcją, intuicję z strategią. Pokazujemy kierunek – a Ty go zatwierdzasz.' },
  { number: '3', title: 'Realizacja i wdrożenie', description: 'Wprowadzamy ideę w życie. Kodujemy, optymalizujemy, testujemy. To moment, gdy forma spotyka treść, a projekt staje się narzędziem.' },
  {
    number: '4',
    title: 'Wzrost i rozwój Twojej marki',
    description: 'Nie kończymy na publikacji. Pomagamy Twojej marce oddychać: SEO, social media, analiza – wszystko, co prowadzi ku rozpoznawalności.',
  },
];

export default function HowWeWork() {
  return (
    <Wrapper>
      <section className="mt-30 flex">
        {HowWeWorkItems.map(({ number, title, description }) => {
          return (
            <div key={title} className="flex min-h-72 w-full flex-col items-center pr-4 pl-4 md:w-1/2 lg:w-1/4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <span className="text-xl">{number}</span>
              </div>
              <h3 className="mt-3 mb-4 w-fit border-b-1 border-b-gray-200 text-center text-xl capitalize">{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}
