import Image from 'next/image';

export default function ProjectCard() {
  return (
    <section className="h-80 min-w-92 rounded-md bg-gray-100 p-2">
      <div className="relative flex h-2/3 w-full">
        <Image src="/assets/projects/meridol.png" fill alt="test" className="object-fill" />
        <div className="flex h-full w-full items-center justify-center bg-white opacity-0 hover:opacity-80">
          <Image src="/assets/projects/meridol-logo.png" width={180} height={20} alt="test" />
        </div>
      </div>
      <div className="mt-2 mr-4 mb-2 ml-4 flex flex-col">
        <h3 className="text-xl">Meridol</h3>
        <p>Opis projektu asdhjkashd dnajkshdja dnsjkdhaj dadsa</p>
      </div>
    </section>
  );
}
