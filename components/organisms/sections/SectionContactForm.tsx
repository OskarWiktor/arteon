import Image from 'next/image';
import { RiMailSendLine, RiTimeLine, RiFileList2Line } from 'react-icons/ri';
import { cn } from '@/lib/clsx';
import {
  columnGapClasses,
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
  noTopic?: boolean;
};

const benefits = [
  {
    icon: <RiMailSendLine className={cn('text-light', smallIconSizeClasses)} />,
    label: 'Bezpłatna wycena',
  },
  {
    icon: <RiTimeLine className={cn('text-light', smallIconSizeClasses)} />,
    label: 'Odpowiedź w ciągu 24 godzin',
  },
  {
    icon: (
      <RiFileList2Line className={cn('text-light', smallIconSizeClasses)} />
    ),
    label: 'Faktura po realizacji',
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
  noTopic = true,
}: SectionContactFormProps) {
  return (
    <section id='contact' className='scroll-mt-26'>
      <div className={cn('grid lg:grid-cols-2', columnGapClasses)}>
        {/* Image + benefits: below the form on mobile, left column on desktop. */}
        <div className='order-2 flex flex-col lg:order-0'>
          <div className='relative mb-3 aspect-4/3 overflow-hidden lg:mb-6 lg:aspect-auto lg:min-h-0 lg:flex-1'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>
          {variant === 'default-page' && (
            <ul className='flex flex-col gap-3 lg:flex-row lg:justify-between lg:gap-2'>
              {benefits.map((item, i) => (
                <li key={i} className='flex items-center gap-2'>
                  <div className={cn(flexCenterClasses, normalIconSizeClasses)}>
                    {item.icon}
                  </div>
                  <span className='text-sm text-primary!'>{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Form: on top on mobile, right column on desktop. */}
        <div className='order-1 lg:order-0'>
          <ContactForm
            title={title}
            description={description}
            defaultSubject={defaultSubject}
            messagePlaceholder={messagePlaceholder}
            noTopic={noTopic}
          />
        </div>
      </div>
    </section>
  );
}
