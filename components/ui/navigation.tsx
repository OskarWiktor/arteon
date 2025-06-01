import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
    return (
        <div className="w-full border-b-1 border-b-gray-200 sticky">
            <section className="bg-white h-16 flex justify-between items-center">
                <div className="flex items-center">
                <Image src='/assets/arteon-logo.png' width={200} height={50} alt="Arteon company logo"/>
                </div>

                <nav className="flex items-center gap-6 mr-4 ml-4 ">
                    <li className="list-none border-b-1"><Link href='/'>Home</Link></li>
                    <li className="list-none"><Link href='/'>Projekty</Link></li>
                    <li className="list-none"><Link href='/'>Oferta</Link></li>
                    <li className="list-none"><Link href='/'>O Nas</Link></li>
                    <li className="list-none"><Link href='/'>Kontakt</Link></li>
                </nav>
            </section>
        </div>
    )
}