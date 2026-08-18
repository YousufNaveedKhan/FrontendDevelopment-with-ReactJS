import React from "react";
import { useNavigate } from "react-router-dom";
function Students() {
    const navigate = useNavigate();
  return (
    <>
      <h2>Students</h2>

      <button onClick={() => navigate("/students/101")}>View Student 101</button>
      <button onClick={() => navigate("/students/102")}>View Student 102</button>
    </>
  );
}

export default Students;
