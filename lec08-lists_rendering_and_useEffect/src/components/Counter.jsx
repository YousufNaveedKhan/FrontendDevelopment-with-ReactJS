import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    // Empty Dependency Array
    useEffect(() => {
        console.log("Component Mounted!")
    }, []),
    // No Dependency Array
    useEffect(() => {
        console.log("Component Updated!")
    })
    // With Dependency Array
    useEffect(() => {
        console.log("Component Updated! Count: ", count)
    }, [count])
    // Return in Callback
    useEffect(() => {
        console.log("Componented Mounted") 

        return () => {
        console.log("Component unmounted")  
        }
    }, [])
    return (
        <>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}>Increament</button>

        <h2>{name}</h2>
        <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </>
    );
}

export default Counter;