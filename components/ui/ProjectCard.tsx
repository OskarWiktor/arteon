'use client';

import Image from 'next/image';

export default function ProjectCard() {
  return (
    <article className="min-w-82 rounded-md bg-gray-100 shadow focus-within:ring-2 focus-within:ring-black" tabIndex={0} role="group" aria-label="Karta projektu Meridol">
      <div className="relative h-40 w-full overflow-hidden rounded-t-md sm:h-48">
        <Image src="/assets/projects/meridol.png" alt="Zrzut ekranu projektu Meridol" fill className="object-cover" priority />

        <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 transition-opacity focus-within:opacity-80 hover:opacity-80">
          <Image src="/assets/projects/meridol-logo.png" width={180} height={20} alt="Logo Meridol" />
        </div>
      </div>

      <div className="mx-4 my-2 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900" id="project-title-meridol">
          Meridol
        </h3>
        <p className="text-gray-700" aria-describedby="project-title-meridol">
          Opis projektu: nowoczesny layout i integracja z CMS.
        </p>
      </div>
    </article>
  );
}
