import Paragraph from "./Paragraph"
import { ImageProps } from "./types"

type HeaderProps = {
    headerImage: ImageProps
    title: string
}

const headerParagraphText = `Did you know that farming transcends the mere thought of survival?
    It is a metaphor for life, growth, and the pursuit of peace For the Glory of Mankind. 
    To return to simplicity, to the being itself. 
    It is not only cultivating the land, but the soul.
    Each seed planted with the hopes of freeing the world from the scars of war.
    Each harvest a testament to the unending resilience and hope.`

const headerParagraphText2 = "A true warrior is not found in the sword, but the iridium hoe."

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