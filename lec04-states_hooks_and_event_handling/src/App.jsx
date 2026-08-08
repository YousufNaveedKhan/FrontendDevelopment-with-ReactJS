import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);

  return (
    <body
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <h3>Count: {count}</h3>

      <button
        id="incBtn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +Increament
      </button>
      <button
        id="decBtn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -Decreament
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <button
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          setColor("indigo");
        }}
      >
        Indigo
      </button>
      <button
        onClick={() => {
          setColor("teal");
        }}
      >
        Teal
      </button>
      <br />
      <br />
      <br />
      <h2>{show && "Welcome to React JS"}</h2>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </body>
  );
}

export default App;
