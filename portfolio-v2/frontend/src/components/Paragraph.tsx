type ParagraphProps = {
    children: React.ReactNode
}

export default function Paragraph(props: ParagraphProps) {
    const { children } = props
    
    return <p>{children}</p>
}