import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export default function ProjectsOverview() {
  return (
    <section className="mt-8 flex w-full flex-col">
      <h2 className="font-serif text-4xl">Projects sdhdahg</h2>
      <div className="mt-4 flex gap-4 relative">
        <RiArrowLeftSLine className="z-10 w-10 h-10 absolute top-1/2 left-0 -translate-y-1/2" />
        <div className="h-80 w-1/3 bg-amber-200 border-b-1 border-b-gray-200">
          <div className="h-2/3 w-full bg-amber-700"></div>
          <div className="mt-2 mr-4 mb-2 ml-4 flex flex-col">
            <h3 className="text-xl">Nazwa projektu</h3>
            <p>Opis projektu asdhjkashd dnajkshdja dnsjkdhaj dadsa</p>
          </div>
        </div>
        <div className="h-80 w-1/3 bg-amber-200 border-b-1 border-b-gray-200">
          <div className="h-2/3 w-full bg-amber-700"></div>
          <div className="mt-2 mr-4 mb-2 ml-4 flex flex-col">
            <h3 className="text-xl">Nazwa projektu</h3>
            <p>Opis projektu asdhjkashd dnajkshdja dnsjkdhaj dadsa</p>
          </div>
        </div>
        <div className="h-80 w-1/3 bg-amber-200 border-b-1 border-b-gray-200">
          <div className="h-2/3 w-full bg-amber-700"></div>
          <div className="mt-2 mr-4 mb-2 ml-4 flex flex-col">
            <h3 className="text-xl">Nazwa projektu</h3>
            <p>Opis projektu asdhjkashd dnajkshdja dnsjkdhaj dadsa</p>
          </div>
        </div>
        <RiArrowRightSLine className="z-10 w-10 h-10 absolute top-1/2 right-0 -translate-y-1/2" />
      </div>
    </section>
  );
}
