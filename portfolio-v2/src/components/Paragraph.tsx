type ParagraphProps = {
    paragraph: string
}

export default function Paragraph(props: ParagraphProps) {
    const { paragraph } = props
    
    return <p>{paragraph}</p>
}