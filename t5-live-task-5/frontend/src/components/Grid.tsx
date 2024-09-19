import { useState } from "react";
import Student from "./Student";
import type { Student as StudentProp } from "./types";
import AddStudentForm from "./AddStudentForm";

type GridProps = {
    students: StudentProp[];
};

export default function Grid(props: GridProps) {
    // props.students ?? []
    const [students, setStudents] = useState<StudentProp[]>(props.students ?? []);

    // dette er en funksjon
    // legger til ny student i think
    const onAddStudent = (student: {name: string}) => {
        // prev er her gammel state
        setStudents((prev) => [...prev, {id: crypto.randomUUID(), ...student}])
    }

    return (
        <section>
            <AddStudentForm onAddStudent={onAddStudent}/>

            <article className="grid">
                {students.map((student) => (
                    <Student key={student.id} name={student.name} id={student.id} />
                ))}
            </article>
        </section>
    );
}
