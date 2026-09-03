import React from "react";
import { useState } from "react";
import StudentList from "./components/StudentLIst";
import StudentForm from "./components/StudentForm";
function App() {
  const [students, setStudents] = useState([])
  return (
    <>
    <StudentForm setStudents={setStudents} />
    <StudentList students={students} />
    </>
  )
}

export default App