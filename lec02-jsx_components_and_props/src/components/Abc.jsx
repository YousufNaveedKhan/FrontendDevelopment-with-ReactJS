import React from "react";
import Xyz from "./Xyz";
function Abc(props) {
    return (
        <>
        
        <h2>ABC COMPONENT</h2>
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.email}</li>
        </ul>
        <Xyz />
        </>
    )
}

export default Abc