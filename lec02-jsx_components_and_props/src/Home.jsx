import React from "react";
import About from "./components/AboutUs";

function App() {
  const name = "Laiba"

  function greet(name) {
    return "Hello " + name
  }
  return (
    <>
    <h2 className="heading">Hello {name}</h2>
    <b style={{fontSize: "24px", color: "teal"}}>2 + 4 = {2+2}</b>
    <p>{greet("Anusha")}</p>

    <About 
    name="Abu Hurerah" 
    age="19"
    email="ab@gmail.com"
    />
    </>
  )
}

export default App