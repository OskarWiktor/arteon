import Image from 'next/image';
import { RiMailSendLine, RiTimeLine, RiFileList2Line } from 'react-icons/ri';
import ContactForm from '../ContactForm';

type SectionContactFormProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  defaultSubject: string;
  messagePlaceholder?: string;
  variant?: 'default-page' | 'tool-page';
};

const benefits = [
  {
    icon: <RiMailSendLine className='text-accent h-4 w-4' />,
    label: 'Bezpłatna wycena bez zobowiązań',
  },
  { icon: <RiTimeLine className='text-accent h-4 w-4' />, label: 'Odpowiedź w ciągu 24 godzin' },
  {
    icon: <RiFileList2Line className='text-accent h-4 w-4' />,
    label: 'Faktura dopiero po realizacji',
  },
];

export default function SectionContactForm({
  title,
  description,
  imageSrc,
  imageAlt,
  defaultSubject,
  messagePlaceholder,
  variant = 'default-page',
}: SectionContactFormProps) {
  if (variant === 'tool-page') {
    return (
      <section id='contact-tool' className='scroll-mt-26'>
        <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
          <ContactForm title={title} description={description} defaultSubject={defaultSubject} />
          <div className='flex flex-col justify-center'>
            <div className='relative mb-6 aspect-[4/3] overflow-hidden rounded-lg'>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='contact' className='scroll-mt-26'>
      <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
        <ContactForm
          title={title}
          description={description}
          defaultSubject={defaultSubject}
          messagePlaceholder={messagePlaceholder}
        />

        <div className='flex flex-col justify-center'>
          <div className='relative mb-6 aspect-[4/3] overflow-hidden rounded-lg'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>
          <ul className='space-y-3'>
            {benefits.map((item, i) => (
              <li key={i} className='flex items-center gap-3'>
                <div className='bg-accent/10 flex h-6 w-6 items-center justify-center rounded-full'>
                  {item.icon}
                </div>
                <span className='text-sm'>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
