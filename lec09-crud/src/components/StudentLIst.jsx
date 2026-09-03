function StudentList({ students }) {
    return (
        <>
        {students.map((student) => (
            <div key={student.id}>
                <h2>{student.name}</h2>
                <p>{student.age}</p>
                <p>{student.email}</p>
                <button>Delete</button>
            </div>
        ))}

        </>
    );
}

export default StudentList