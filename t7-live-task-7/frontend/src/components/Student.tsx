type StudentProps = {
    id: string
    name: string
}

export default function Student(props: StudentProps) {
    const { id, name } = props

    return (
        <p>
            {id}: {name}
        </p>
    )
}