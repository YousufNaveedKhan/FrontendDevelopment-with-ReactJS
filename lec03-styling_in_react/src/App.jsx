import React from "react";
import './App.css'
import Diagram from './assets/images/a.png';
import './assets/css/style.css';

function App() {
  return (
    <>
    <h2 style={{fontSize: "24px", backgroundColor: "red"}}>Hello World</h2>
    <img src="a.png" alt="Diagram" height={80} width={80} />
    <img src={Diagram} alt="Diagram" height={80} width={80} />
    <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit tempora possimus, beatae cumque cupiditate debitis nihil obcaecati consequatur blanditiis alias corporis eius inventore esse libero eligendi facilis dolorum distinctio.</p>
    </>
  )
}

export default App