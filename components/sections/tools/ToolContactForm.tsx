'use client';

import Image from 'next/image';
import ContactForm from '@/components/sections/ContactForm';

type ToolContactFormProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  defaultSubject: string;
};

export default function ToolContactForm({ title, description, imageSrc, imageAlt, defaultSubject }: ToolContactFormProps) {
  return (
    <section id="kontakt-narzedzia" className="scroll-mt-26">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" unoptimized />
          </div>
        </div>

        <div>
          <h2 className="h3 mb-3">{title}</h2>
          <p className="text-light mb-6">{description}</p>
          <ContactForm title="" description="" defaultSubject={defaultSubject} noSection />
        </div>
      </div>
    </section>
  );
}
