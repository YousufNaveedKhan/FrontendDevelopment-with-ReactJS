import StudentList from "./components/StudentList";
import FilterableList from "./components/FilterableList";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
    <h2>Lec08 - Lists, Rendering, &amp; useEffect</h2>
    {/* <p></p> */}
    <StudentList />
    <FilterableList />
    <button onClick={() => setShow(!show)}>
      {show ? "Unmount Counter" : "Mount Counter" }
    </button>
    {show && <Counter />}
    </>
  );
}

export default App