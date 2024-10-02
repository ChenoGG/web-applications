import Student from "./Student"

const demoStudentList = [
    { id: "1", name: "Peter Parker"},
    { id: "2", name: "SpiderMan"},
    { id: "3", name: "Bruce Wayne"},
    { id: "4", name: "BatMan"}, 
    { id: "5", name: "James Howlett"}, 
    { id: "6", name: "Wolverine"}, 
    { id: "7", name: "Rachel Roth"}, 
    { id: "8", name: "Raven"},
]

export default function Grid() {

    return (
        <div className="grid-container">
            {demoStudentList.map((student) => (
                <Student
                    key={student.id}
                    id={student.id}
                    name={student.name}
                />
            ))}
        </div>
    )
}