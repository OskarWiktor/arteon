import { ReactNode } from "react"
import Wrapper from "./Wrapper"

interface SectionBasicProps {
    title: string,
    description?: string,
    imageSrc: string,
    imageAlt?: string,
    variant?: 'left' | 'right',
    children?: ReactNode,
}

export default function SectionBasic({title, description, imageSrc, imageAlt, variant = 'right', children}: SectionBasicProps) {
    return (
        <section className="flex w-full mt-30 bg-gray-300">
            <Wrapper className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                {variant === 'left' && <div className="flex flex-col pt-4 px-4 lg:px-8"><h3 className="text-4xl font-semibold">{title}</h3><p className="mt-4">{description}</p>{children}</div>}
                {variant === 'right' && <div className="flex flex-col"><img src={imageSrc} alt={imageAlt} className="w-full h-auto"/></div>}
            </div>

            <div className="w-full lg:w-1/2">
                {variant === 'right' && <div className="flex flex-col pt-4 px-4 lg:px-8"><h3 className="text-4xl font-semibold">{title}</h3><p className="mt-4">{description}</p>{children}</div>}
                {variant === 'left' && <div className="flex flex-col"><img src={imageSrc} alt={imageAlt} className="w-full h-auto"/></div>}
            </div>
            </Wrapper>
        </section>
    )
}