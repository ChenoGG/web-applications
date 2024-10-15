import Paragraph from "./Paragraph"
import { ImageProps } from "./types"
import { headerParagraphText, headerParagraphText2 } from "../configs/textContent"

type HeaderProps = {
    headerImage: ImageProps
    title: string
}

export default function Header(props: HeaderProps) {
    const { headerImage, title } = props
    
    return (
        <>
            <img id="main-header-image" src={headerImage.image} alt={headerImage.imageAltText} />
            <div id="main-header-text">
                <h1>{title}</h1>

                {/* Is this using children? It eludes me..*/}
                <Paragraph>
                    {headerParagraphText}
                </Paragraph>

                <Paragraph>
                    {headerParagraphText2}
                </Paragraph>
            </div>
        </>
    )
}