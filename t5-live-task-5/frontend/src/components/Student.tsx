import Avatar from "./Avatar"
import type { Student as StudentProps } from "./types" // Renamer typen så den ikke heter det samme som komponentet

/* 
Legger denne til i egen types.ts fil, siden den kan gjenbrukes flere steder

type StudentProps = {
    id: string
    name: string
} */

export default function Student(props: StudentProps) {
    const { id, name } = props

    return (
    <div>
        <Avatar name={name} /> {/* Component in component */}
        <p className="student-name">{id}: {name}</p>
    </div>
    )
}