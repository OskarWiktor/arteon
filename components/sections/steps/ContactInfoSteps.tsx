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
          <a href="tel:+48516466255" className="text-lg md:text-xl">
            516 466 255
          </a>
        </span>
      </>
    ),
  },
  {
    title: 'Email',
    icon: <RiMailLine />,
    description: (
      <span>
        <a href="mailto:contact@arteonagency.com" className="text-lg md:text-xl">
          contact@arteonagency.com
        </a>
      </span>
    ),
  },
  {
    title: 'Godziny pracy',
    icon: <RiMapPinLine />,
    description: <span className="text-lg md:text-xl">Pracujemy od poniedziałku do piątku: 8 - 16</span>,
  },
];

export default function ContactInfoSteps() {
  return <SectionSteps items={ContactInfoStepsItems} title="Dane kontaktowe" />;
}
