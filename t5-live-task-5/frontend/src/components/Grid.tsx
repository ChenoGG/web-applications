import { useState } from "react";
import Student from "./Student";
import type { Student as StudentProp } from "./types";

type GridProps = {
    students: StudentProp[];
};

export default function Grid(props: GridProps) {
    // props.students ?? []
    const [students, setStudents] = useState(props.students ?? []);

    return (
        <article className="grid">
            {students.map((student) => (
                <Student key={student.id} name={student.name} id={student.id} />
            ))}
        </article>
    );
}
