import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-1 mt-12 flex w-full justify-between border-t-gray-200 h-32 pt-4">
      <div className="w-1/4 flex justify-between">
        <nav className="flex flex-col gap-2">
          <li className="list-none w-fit">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none">
            <Link href="/">Projekty</Link>
          </li>
          <li className="list-none">
            <Link href="/">Oferta</Link>
          </li>
        </nav>
        <nav className="flex flex-col gap-2">
            <li className="list-none">
            <Link href="/">O Nas</Link>
          </li>
          <li className="list-none">
            <Link href="/">Kontakt</Link>
          </li>
        </nav>
      </div>
      <div className="w-1/4">
        <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Arteon company logo" />
      </div>
      <div className="w-1/4 flex">
        <div className="ml-auto mr-auto h-8 w-8 rounded-full bg-black"></div>
        <div className="ml-auto mr-auto h-8 w-8 rounded-full bg-black"></div>
        <div className="ml-auto mr-auto h-8 w-8 rounded-full bg-black"></div>
        <div className="ml-auto mr-auto h-8 w-8 rounded-full bg-black"></div>
        <div className="ml-auto mr-auto h-8 w-8 rounded-full bg-black"></div>
      </div>
    </footer>
  );
}
