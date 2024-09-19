type AvatarProps = {
    name: string
}

export default function Avatar(props: AvatarProps) {
    const { name } = props

    // Gets the first string in name
    //const firstStringInStudentName = name.split(" ").join("").toUpperCase().slice(0,1)
    const firstStringInStudentName = Array.from(name)[0].toUpperCase()
    return <p className="avatar">{firstStringInStudentName}</p>
}