import React from "react";
import { useParams, useNavigate } from "react-router-dom";
function StudentDetails() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    return (
        <>
        <h2>Student Details:</h2>
        <h3>{ id }</h3>

        <button onClick={() => navigate("/students")}>Go Back</button>
        </>
    );
}

export default StudentDetails