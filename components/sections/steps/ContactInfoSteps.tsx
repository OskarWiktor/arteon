'use client';

import SectionSteps from '../../ui/sections/SectionSteps';

import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';

const ContactInfoStepsItems = [
  {
    title: 'Telefon',
    icon: <RiPhoneLine />,
    description: (
      <>
        <span>
          <a href="tel:+48516466255" className="text-lg font-bold md:text-xl">
            516 466 255
          </a>
        </span>
        <span className="text-lg md:text-xl">Pracujemy od poniedziałku do piątku: 8 - 16</span>
      </>
    ),
  },
  {
    title: 'Email',
    icon: <RiMailLine />,
    description: (
      <span>
        <a href="mailto:kontakt@arteonagency.pl" className="text-lg font-bold md:text-xl">
          kontakt@arteonagency.pl
        </a>
      </span>
    ),
  },
  {
    title: 'Lokalizacja',
    icon: <RiMapPinLine />,
    description: <span className="text-lg md:text-xl">Polska, Małopolska, Zagacie 32-070, ul. Jaśminowa 36</span>,
  },
];

export default function ContactInfoSteps() {
  return <SectionSteps items={ContactInfoStepsItems} title="Dane kontaktowe" />;
}
