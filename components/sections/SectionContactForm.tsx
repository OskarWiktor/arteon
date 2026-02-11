import Image from 'next/image';
import { RiMailSendLine, RiTimeLine, RiFileList2Line } from 'react-icons/ri';
import ContactForm from './ContactForm';

type SectionContactFormProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  defaultSubject: string;
  messagePlaceholder?: string;
};

const benefits = [
  { icon: <RiMailSendLine className="h-4 w-4 text-accent" />, label: 'Bezpłatna wycena bez zobowiązań' },
  { icon: <RiTimeLine className="h-4 w-4 text-accent" />, label: 'Odpowiedź w ciągu 24 godzin' },
  { icon: <RiFileList2Line className="h-4 w-4 text-accent" />, label: 'Faktura dopiero po realizacji' },
];

export default function SectionContactForm({ title, description, imageSrc, imageAlt, defaultSubject, messagePlaceholder }: SectionContactFormProps) {
  return (
    <section id="kontakt" className="scroll-mt-26">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="h3 mb-3">{title}</h2>
          <p className="text-light mb-6">{description}</p>
          <ContactForm title="" description="" defaultSubject={defaultSubject} messagePlaceholder={messagePlaceholder} noSection />
        </div>

        <div className="flex flex-col justify-center">
          <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <ul className="space-y-3">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">{item.icon}</div>
                <span className="text-sm">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
