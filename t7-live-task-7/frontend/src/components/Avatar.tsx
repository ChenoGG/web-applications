type AvatarProps = {
    name: string
}

export default function Avatar(props: AvatarProps) {
    const { name } = props

    const firstLetterInStudentName = name.charAt(0)

    return (
        <p>
            {firstLetterInStudentName}
        </p>
    )
}