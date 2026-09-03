import { useState } from "react";

function StudentForm({ setStudents }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      email: email,
      course: course,
    };

    setStudents(
        (prevStudents) => [
            ...prevStudents, 
            newStudent
        ]
    );
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter course"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Add Student</button>
      </form>
    </>
  );
}

export default StudentForm;
