'use client';

import ContactForm from '@/components/components/ContactForm';
import HeroBaner from '@/components/components/HeroBaner';
import SectionBasic from '@/components/ui/SectionBasic';
import SectionFour from '@/components/ui/SectionFour';
import SectionInfo from '@/components/ui/SectionInfo';

const HowWeWorkItems = [
  { number: '1', title: 'Piszesz wiadomość', description: 'Opowiedasz nam o swojej marce i o tym, co chcesz zbudować. Słuchamy, pytamy, doprecyzowujemy' },
  { number: '2', title: 'Analizujemy i planujemy', description: 'Sprawdzamy Twoją branżę, konkurencję i potencjał. Wyciągamy wnioski, które dadzą Ci przewagę' },
  { number: '3', title: 'Przesyłamy plan i wycenę', description: 'Tworzymy plan działania — konkretnie, z jasno określonym zakresem i propozycją kolejnych kroków' },
  { number: '4', title: 'Decydujesz, jak chcesz działać', description: 'Dajemy Ci przestrzeń oraz elastyczność. Możemy wprowadzać plan stopniowo lub zrealizować go w trybie ekspresowym' },
];

export default function Page() {
  return (
    <>
      <HeroBaner title="Porozmawiajmy o Twojej marce" description="Powiedz nam, czego potrzebujesz — my pomożemy poukładać plan i zamienić pomysł w działanie" backgroundImage="/assets/test.jpg" />

      <SectionInfo
        title="Jak wygląda pierwszy kontakt?"
        description="Opowiedz o swoim pomyśle, my przeanalizujemy rynek i Twoje potrzeby. W kilka dni przygotowujemy plan działania, który możesz zrealizować z nami — na swoich warunkach."
      />

      <SectionFour
        items={HowWeWorkItems}
        renderItem={({ number, title, description }, index) => (
          <article role="group" aria-labelledby={`step-title-${index}`} aria-describedby={`step-desc-${index}`} tabIndex={0} className="flex flex-col py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
              <span className="text-xl" aria-hidden="true">
                {number}
              </span>
            </div>
            <h5 id={`step-title-${index}`} className="mt-2 mb-4 w-fit border-b border-b-amber-500 capitalize" tabIndex={0}>
              {title}
            </h5>
            <p id={`step-desc-${index}`} tabIndex={0}>
              {description}
            </p>
          </article>
        )}
      />

      <ContactForm />

      <SectionBasic
        title="Zacznijmy od rozmowy"
        description="Wypełnij formularz — a my zajmiemy się resztą.
        Każde pytanie tworzy nowe możliwości"
        imageSrc="/assets/test.jpg"
        imageAlt="Kontakt Arteon"
      />
    </>
  );
}
