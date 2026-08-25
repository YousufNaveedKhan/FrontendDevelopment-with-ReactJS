const students = [
    {id: 1, name: "Laiba", course: "HDSE", marks: 88}, 
    {id: 2, name: "Anusha", course: "ADSE", marks: 93}, 
    {id: 3, name: "Abdul Rehman", course: "ADSE", marks: 79}, 
    {id: 4, name: "Abu Hurerah", course: "DISM", marks: 41}, 
    {id: 5, name: "Hamza", course: "CPISM", marks: 100} 
]

function StudentList() {
    return (
        <div className="card">
            {students.map((student) => (
                <ul key={student.id} className="list">
                    <li className="list-item" id="name">{student.name}</li>
                    <li className="list-item" id="badge">{student.course}</li>
                    <li className="list-item" id="marks">{student.marks}</li>
                </ul>
            ))}
        </div>
    )
}

export default StudentList