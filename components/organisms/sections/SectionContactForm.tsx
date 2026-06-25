import Image from 'next/image';
import { RiMailSendLine, RiTimeLine, RiFileList2Line } from 'react-icons/ri';
import { cn } from '@/lib/clsx';
import {
  flexCenterClasses,
  normalIconSizeClasses,
  smallIconSizeClasses,
} from '@/lib/uiClasses';
import ContactForm from '../ContactForm';

type SectionContactFormProps = {
  title?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  defaultSubject?: string;
  messagePlaceholder?: string;
  variant?: 'default-page' | 'tool-page';
};

const benefits = [
  {
    icon: <RiMailSendLine className={cn('text-light', smallIconSizeClasses)} />,
    label: 'Bezpłatna wycena bez zobowiązań',
  },
  {
    icon: <RiTimeLine className={cn('text-light', smallIconSizeClasses)} />,
    label: 'Odpowiedź w ciągu 24 godzin',
  },
  {
    icon: (
      <RiFileList2Line className={cn('text-light', smallIconSizeClasses)} />
    ),
    label: 'Faktura dopiero po realizacji',
  },
];

/**
 * Renders a two-column contact section with a contact form and an illustrative image; shows a benefits list when `variant` is `'default-page'`.
 *
 * @param title - Heading text for the contact form
 * @param description - Supporting description displayed above the form
 * @param imageSrc - Source URL or imported image for the illustrative image
 * @param imageAlt - Alt text for the illustrative image
 * @param defaultSubject - Pre-filled subject value for the contact form
 * @param messagePlaceholder - Optional placeholder text for the message textarea
 * @param variant - Layout variant; `'default-page'` shows the benefits list, `'tool-page'` hides it (defaults to `'default-page'`)
 * @returns The rendered contact section element
 */
export default function SectionContactForm({
  title,
  description,
  imageSrc,
  imageAlt,
  defaultSubject,
  messagePlaceholder,
  variant = 'default-page',
}: SectionContactFormProps) {
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
          <div className='relative mb-6 aspect-4/3 overflow-hidden'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>
          {variant === 'default-page' && (
            <ul className='flex justify-between gap-2'>
              {benefits.map((item, i) => (
                <li key={i} className='inline-flex flex-wrap items-center'>
                  <div className={cn(flexCenterClasses, normalIconSizeClasses)}>
                    {item.icon}
                  </div>
                  <span className='text-sm'>{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
