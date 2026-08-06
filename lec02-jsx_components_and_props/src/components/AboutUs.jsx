import React from "react";
import Abc from "./Abc";

function About({name, age, email}) {
    return (
        <>
        <h2>About Page</h2>
        <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{email}</li>
        </ul>
        <Abc 
        name="Hamza"
        age="20"
        email="hamza@gmail.com"
        />
        </>
    )
}

export default About