import Paragraph from "./Paragraph"
import { ImageProps } from "./types"

type HeaderPageProps = {
    headerImage: ImageProps
    title: string
    paragraph: string[]
}

export default function HeaderPage(props: HeaderPageProps) {
    const { headerImage, title, paragraph } = props
    
    return (
        <header >
            <img id="main-header-image" src={headerImage.image} alt={headerImage.imageAltText} />
            <div id="main-header-text">
                <h1>{title}</h1>
                {paragraph.map((text, index) => (
                    <Paragraph key={index} paragraph={text} />
                ))}
            </div>
        </header>
    )
}