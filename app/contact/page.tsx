'use client'

import ContactForm from '@/components/sections/ContactForm';
import HeroBaner from '@/components/sections/HeroBaner';
import SectionBasic from '@/components/ui/SectionBasic';
import SectionFour from '@/components/ui/SectionFour';
import SectionInfo from '@/components/ui/SectionInfo';

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

export default function Page() {
  return (
    <>
      <HeroBaner title="Lorem Ipsum Lorem Ipsum" description="njkbasdka sbdjabsd bjkbsajdb" backgroundImage="/assets/test.jpg" />
      <SectionInfo
        title="Lorem ipsum dahjkhsa dads"
        description="Tjas jsdakjdsa asdjkhasd sbajd hjkghhjbabfd a n a f e  f efefef aef fa  eefrgrg rgjivji gj gjg  khjkhgf drd rs fgj jyg ugj gjhg v jh gg jgjgygjy ff es tfu uy uhui gigggug yf fi po jop ih hh uh ug gyugt ftf tff fyt ufu fu"
      />
      <SectionFour
        items={HowWeWorkItems}
        variant='smallMargin'
        renderItem={({ number, title, description }, index) => (
          <article role="group" aria-labelledby={`step-title-${index}`} aria-describedby={`step-desc-${index}`} tabIndex={0} className="flex flex-col py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
              <span className="text-xl" aria-hidden="true">
                {number}
              </span>
            </div>
            <h4 id={`step-title-${index}`} className="mt-4 mb-4 w-fit border-b border-b-amber-500 capitalize" tabIndex={0}>
              {title}
            </h4>
            <p id={`step-desc-${index}`} tabIndex={0}>
              {description}
            </p>
          </article>
        )}
      />
      <ContactForm />
      <SectionBasic
        title="Strony internetowe dopasowane do Ciebie"
        description="Tworzymy witryny, które działają i wyglądają. Łączymy estetykę, strategię i wydajność, by Twoja marka zyskała nową jakość."
        imageSrc="/assets/test.jpg"
        imageAlt="Projektowanie stron"
      >
        <ul className="list-disc pl-5 text-gray-800 md:text-lg">
          <li>Indywidualny projekt graficzny</li>
          <li>Pełna optymalizacja SEO i dostępność</li>
          <li>Integracja z CMS lub e-commerce</li>
        </ul>
      </SectionBasic>
    </>
  );
}
